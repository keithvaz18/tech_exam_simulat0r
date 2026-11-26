/* ======================================================
   GLOBAL STATE
   ====================================================== */
let fullBank = [];       // Shuffled/Filtered source data
let examQuestions = [];  // Questions picked adaptively
let answers = {};        // User selections {questionIndex: optionIndex}
let flagged = [];
let current = 0;
let EXAM_SIZE = 900;     // Target session length
let activeExamSize = 0;  // Actual length (adjusted if search results < 500)

let currentDifficulty = "easy"; 
let usedQuestionIds = new Set(); 
let hintPersistent = false;      

let examTimer;
let timeRemaining = 60 * 120; // 120 minutes

/**
 * Checks for duplicate IDs and returns a detailed report.
 * @param {Array} bank - The questionBank array
 */
function findDuplicateIds(bank) {
    const seen = new Map();
    const duplicates = [];

    bank.forEach((q, idx) => {
        if (seen.has(q.id)) {
            duplicates.push({
                id: q.id,
                category: q.category,
                question: q.question.substring(0, 60) + "...",
                index: idx,
                originalIndex: seen.get(q.id)
            });
        } else {
            seen.set(q.id, idx);
        }
    });
    return duplicates;
}

function showDuplicatePopup(duplicates) {
    if (duplicates.length === 0) return;

    // Create Modal Elements
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    let tableRows = duplicates.map(d => `
        <tr>
            <td><strong>${d.id}</strong></td>
            <td><span class="badge">${d.category}</span></td>
            <td>${d.question}</td>
            <td>Pos: ${d.originalIndex} & ${d.index}</td>
        </tr>
    `).join('');

    overlay.innerHTML = `
        <div class="modal-content">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove()">Close & Continue</button>
            <h3 style="color:var(--danger)">⚠️ Duplicate IDs Detected</h3>
            <p>The following questions share IDs. This may cause issues with history tracking.</p>
            <table class="dup-table">
                <thead>
                    <tr><th>ID</th><th>Category</th><th>Question Snippet</th><th>Array Positions</th></tr>
                </thead>
                <tbody>${tableRows}</tbody>
            </table>
        </div>
    `;
    document.body.appendChild(overlay);
}

/* ======================================================
   CORE EXAM ENGINE
   ====================================================== */
function startExam() {
    if (typeof questionBank === 'undefined') {
        console.error("questionBank is missing.");
        return;
    }

    // 1. Check for duplicates and show table if found
    const duplicates = findDuplicateIds(questionBank);
    if (duplicates.length > 0) {
        showDuplicatePopup(duplicates);
        // We continue the exam, but the user is now warned with the table
    }
   
    // Detect the checkbox state from the new bordered container
    const hotCheckbox = document.getElementById("hotToggle");
    isHotMode = hotCheckbox && hotCheckbox.checked;

    if (isHotMode) {
        // 1. Map to actual question objects and remove undefined (out-of-range)
        // hotsQuestions holds question IDs (banks are 0- or 1-based, and some have gaps),
        // so resolve by id rather than by array position.
        const byId = new Map(questionBank.map(q => [q.id, q]));
        const validQuestions = hotsQuestions
           .map(id => byId.get(id))
           .filter(q => q !== undefined);

        // 2. Use a temporary Set to ensure absolute uniqueness in case of duplicate indices
        const uniqueQuestions = [];
        const seenIds = new Set();

        for (const q of validQuestions) {
           if (!seenIds.has(q.id)) {
              uniqueQuestions.push(q);
              seenIds.add(q.id);
           }
        }

        fullBank = uniqueQuestions;
        examQuestions = [...fullBank]; 
        activeExamSize = examQuestions.length; // ensures UI matches the actual list
        hintPersistent = true;
    } else {
        // Standard adaptive/keyword logic

    // 1. Keyword Filtering Logic
    const searchInput = document.getElementById("keywordSearch");
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";

    if (keyword !== "") {
        // If keyword is NOT blank, focus questions
        fullBank = questionBank.filter(q => 
            q.question.toLowerCase().includes(keyword) || 
            (q.category && q.category.toLowerCase().includes(keyword)) ||
            (q.explanation && q.explanation.toLowerCase().includes(keyword))
        );

        // Safety net: if the exact phrase matches nothing, fall back to questions that
        // mention every word of the keyword anywhere (question, options, explanation).
        if (fullBank.length === 0) {
            const words = keyword.split(/[^a-z0-9_.@#+\-]+/).filter(w => w.length > 1 && w !== 'vs');
            if (words.length > 0) {
                fullBank = questionBank.filter(q => {
                    const hay = (q.question + ' ' + (q.options || []).join(' ') + ' ' + (q.explanation || '')).toLowerCase();
                    return words.every(w => hay.includes(w));
                });
            }
        }
        
        if (fullBank.length === 0) {
            alert("No questions found for '" + keyword + "'. Loading full bank.");
            fullBank = [...questionBank];
        }
    } else {
        // DEFAULT: Search is blank, use all questions
        fullBank = [...questionBank];
    }

    // 2. Initialize and Shuffle
    fullBank = shuffleArray(fullBank);
        // 4. Determine session size
    // If search results are fewer than 500, cap the exam at that number
    activeExamSize = Math.min(EXAM_SIZE, fullBank.length);
    }
    
    // 3. Reset State
    examQuestions = [];
    usedQuestionIds.clear();
    answers = {};
    flagged = [];
    current = 0;
    currentDifficulty = "easy";
    hintPersistent = false; 
    
    // 5. Kick off
    pickNextAdaptiveQuestion();
    startTimer();
    loadQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * ADAPTIVE LOGIC
 */
function pickNextAdaptiveQuestion() {
    // OVERRIDE: Skip adaptive difficulty logic in Hot Mode
    if (isHotMode) {
        let pool = fullBank.filter(q => !usedQuestionIds.has(q.id));
        if (pool.length > 0) {
            const selectedQuestion = pool[0]; // Take next from shuffled hot list
            examQuestions.push(selectedQuestion);
            usedQuestionIds.add(selectedQuestion.id);
        }
        return;
    }

    // ... existing adaptive difficulty logic (currentDifficulty adjustments) ...
    //
    if (current > 0) {
        const lastIndex = current - 1;
        const secondLastIndex = current - 2;

        const lastCorrect = isAnswerCorrect(answers[lastIndex], examQuestions[lastIndex].answer);
        const secondLastCorrect = secondLastIndex >= 0 ?
            isAnswerCorrect(answers[secondLastIndex], examQuestions[secondLastIndex].answer) : false;

        if (!lastCorrect) {
            if (currentDifficulty === "hard") currentDifficulty = "medium";
            else if (currentDifficulty === "medium") currentDifficulty = "easy";
        } 
        else if (lastCorrect && secondLastCorrect) {
            if (currentDifficulty === "easy") currentDifficulty = "medium";
            else if (currentDifficulty === "medium") currentDifficulty = "hard";
        }
    }

    let pool = fullBank.filter(q => q.difficulty === currentDifficulty && !usedQuestionIds.has(q.id));
    if (pool.length === 0) pool = fullBank.filter(q => !usedQuestionIds.has(q.id));

    if (pool.length > 0) {
        const selectedQuestion = pool[0]; 
        examQuestions.push(selectedQuestion);
        usedQuestionIds.add(selectedQuestion.id);
    }
}

function updateRunningScore() {
    let stats = { hard: 0, medium: 0, easy: 0, correct: 0, answered: 0 };
    examQuestions.forEach((q, i) => {
        if (answers[i] !== undefined) {
            stats.answered++;
            if (isAnswerCorrect(answers[i], q.answer)) {
                stats.correct++;
                if (q.difficulty === "hard") stats.hard++;
                else if (q.difficulty === "medium") stats.medium++;
                else if (q.difficulty === "easy") stats.easy++;
            }
        }
    });
    const scoreEl = document.getElementById("runningScore");
    if (scoreEl) {
        scoreEl.innerHTML = `H:${stats.hard} M:${stats.medium} E:${stats.easy} | Score: ${stats.correct}/${stats.answered}`;
    }
}

function loadQuestion() {
    let q = examQuestions[current];
    if (!q) return;

    document.getElementById("question").innerHTML = (current + 1) + ". " + q.question;
    
    let flagMark = flagged.includes(current) ? " 🚩" : "";
    document.getElementById("progress").innerHTML = 
        `Question ${current + 1} / ${activeExamSize} [${q.difficulty.toUpperCase()}]${flagMark}`;

    updateRunningScore();
    renderOptions(q);
    
    const hintBox = document.getElementById("hint");
    if (hintBox) {
        hintBox.innerHTML = `<b>Explanation:</b> ${q.explanation || "N/A"}`;
        hintBox.style.display = hintPersistent ? "block" : "none"; 
    }
}

function isMultiSelectQuestion(q) { return Array.isArray(q.answer); }

function isAnswerCorrect(selected, correct) {
    if (Array.isArray(correct)) {
        if (!Array.isArray(selected) || selected.length !== correct.length) return false;
        return [...selected].sort((a,b) => a-b).every((v,i) => v === [...correct].sort((a,b) => a-b)[i]);
    }
    return selected === correct;
}

function renderOptions(q) {
    let html = "";
    const multi = isMultiSelectQuestion(q);
    const selected = Array.isArray(answers[current]) ? answers[current] : (answers[current] === undefined ? [] : [answers[current]]);
    if (multi) {
        const required = q.answer.length;
        html += `<p style="margin:0 0 8px;color:#475569;font-size:.9rem"><b>Select ${required} answers.</b></p>`;
    }
    q.options.forEach((opt, i) => {
        let checked = multi ? (selected.includes(i) ? "checked" : "") : (answers[current] === i ? "checked" : "");
        html += `
            <label class="option" style="display:block; margin-bottom:10px; cursor:pointer; padding:10px; border:1px solid #eee; border-radius:5px;">
                <input type="${multi ? 'checkbox' : 'radio'}" name="opt" value="${i}" ${checked} ${multi ? `onchange="toggleMultiAnswer(${i}, this.checked)"` : `onclick="saveAnswer(${i})"`}>
                ${opt}
            </label>
        `;
    });
    document.getElementById("options").innerHTML = html;
}

function saveAnswer(value) {
    answers[current] = value;
    updateRunningScore();
}

function toggleMultiAnswer(value, checked) {
    const q = examQuestions[current];
    const selected = Array.isArray(answers[current]) ? [...answers[current]] : [];
    if (checked && !selected.includes(value)) selected.push(value);
    if (!checked) { const i = selected.indexOf(value); if (i >= 0) selected.splice(i, 1); }
    // The answer key is known to the scoring engine, but do not allow more selections than required.
    if (selected.length > q.answer.length) {
        const el = document.querySelector(`input[name="opt"][value="${value}"]`);
        if (el) el.checked = false;
        alert(`Select exactly ${q.answer.length} answers.`);
        return;
    }
    answers[current] = selected;
    updateRunningScore();
}

/* ======================================================
   NAVIGATION & UI
   ====================================================== */

function nextQuestion() {
    if (answers[current] === undefined || (Array.isArray(answers[current]) && answers[current].length !== examQuestions[current].answer.length)) {
        alert("Please complete the required selection before continuing.");
        return;
    }

    if (current < activeExamSize - 1) {
        current++;
        if (!examQuestions[current]) pickNextAdaptiveQuestion();
        loadQuestion();
        window.scrollTo(0,0);
    } else {
        submitExam();
    }
}

function prevQuestion() {
    if (current > 0) {
        current--;
        loadQuestion();
        window.scrollTo(0,0);
    }
}

function showHint() {
    let h = document.getElementById("hint");
    if(h) {
        h.style.display = "block";
        hintPersistent = true; 
    }
}

function flagCurrent() {
    if (flagged.includes(current)) {
        flagged = flagged.filter(f => f !== current);
    } else {
        flagged.push(current);
    }
    loadQuestion();
}

function startTimer() {
    if (examTimer) clearInterval(examTimer);
    timeRemaining = 60 * 120; 
    examTimer = setInterval(() => {
        timeRemaining--;
        let mins = Math.floor(timeRemaining / 60);
        let secs = timeRemaining % 60;
        const timerEl = document.getElementById("timer");
        if(timerEl) timerEl.innerHTML = `Time: ${mins}:${secs < 10 ? "0" : ""}${secs}`;
        if (timeRemaining <= 0) submitExam();
    }, 1000);
}

function submitExam() {
    clearInterval(examTimer);
    let score = 0;
    let levelBreakdown = {}; 
    let detailedReviewHTML = ""; 
    const finalCount = examQuestions.length;

    examQuestions.forEach((q, i) => {
        const diff = q.difficulty || "unclassified";
        if (!levelBreakdown[diff]) levelBreakdown[diff] = { correct: 0, total: 0 };
        levelBreakdown[diff].total++;

        const isCorrect = isAnswerCorrect(answers[i], q.answer);
        if (isCorrect) {
            score++;
            levelBreakdown[diff].correct++;
        }

        detailedReviewHTML += `
            <div class="review-item" style="margin-bottom:20px; padding:15px; border:1px solid #ddd; border-radius:8px;">
                <b>Q${i + 1} [${diff.toUpperCase()}]:</b> ${q.question}<br>
                <span style="color: ${isCorrect ? 'green' : 'red'}">
                    Your answer: ${Array.isArray(answers[i]) ? answers[i].map(v => q.options[v]).join("; ") : (q.options[answers[i]] || "<i>Not answered</i>")}
                </span><br>
                <span style="color: green">Correct answer: ${Array.isArray(q.answer) ? q.answer.map(v => q.options[v]).join("; ") : q.options[q.answer]}</span><br>
                <p style="font-size:0.9em; background:#f9f9f9; padding:10px; margin-top:10px; border-radius:5px;">
                    <i>${q.explanation || ""}</i>
                </p>
            </div>
        `;
    });

    const percent = Math.round((score / finalCount) * 100);
    saveExamResults(window.currentExamType || "General", score, finalCount, levelBreakdown);

    document.getElementById("results").innerHTML = `
        <div style="text-align:center; padding:20px; background:#f0f4f8; border-radius:10px;">
            <h1>Final Result: ${percent}%</h1>
            <h2>Score: ${score} / ${finalCount}</h2>
            <button onclick="location.reload()" style="padding:10px 20px;">Restart Exam</button>
        </div>
        <hr>${detailedReviewHTML}
    `;
    window.scrollTo({ top: document.getElementById("results").offsetTop, behavior: 'smooth' });
}

function saveExamResults(examType, score, total, levelBreakdown) {
    let history = JSON.parse(localStorage.getItem("exam_history") || "[]");
    history.push({
        date: new Date().toLocaleString(),
        exam: examType,
        score: score,
        total: total,
        percentage: Math.round((score / total) * 100),
        levels: levelBreakdown 
    });
    localStorage.setItem("exam_history", JSON.stringify(history));
}

function reviewExam() {
    if (flagged.length === 0) {
        alert("No questions have been flagged for review.");
        return;
    }
    
    // Jump to the first flagged question
    current = flagged[0];
    loadQuestion();
    
    // Optional: UI feedback
    alert("Jumping to your first flagged question. Use 'Next' and 'Previous' to navigate others.");
}
