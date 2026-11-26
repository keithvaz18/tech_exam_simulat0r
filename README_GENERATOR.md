# Exam PDF Generator

Creates one answer-edition PDF per JavaScript question bank inside the supplied exam simulator ZIP.

## What it does
- Reads `js/questionBank*.js` files directly from the simulator ZIP.
- Extracts the actual `questionBank` JavaScript array (the banks use JSON-compatible array data).
- Preserves the original question wording.
- Shows only the answer selected by the bank's numeric `answer` index; incorrect options are not printed.
- Creates one PDF per bank, plus a JSON generation report.

## Requirements
Python 3.9+ recommended.

```bash
python -m pip install -r requirements.txt
```

## Generate PDFs

```bash
python generate_exam_pdfs.py path/to/tech_exam_simulator_claude_professional.zip
```

Choose an output directory:

```bash
python generate_exam_pdfs.py simulator.zip --output-dir output_pdfs
```

## Analyse the question banks

```bash
python analyse_question_banks.py path/to/simulator.zip
```

Choose a report path:

```bash
python analyse_question_banks.py simulator.zip --output question_bank_analysis.json
```

## Output structure

```text
exam_pdfs/
  generate_exam_pdfs.py
  analyse_question_banks.py
  requirements.txt
  README_GENERATOR.md
  <bank-name>_answers.pdf
  generation_report.json
```

## Answer-index convention
The generator uses the bank's `answer` integer as a zero-based index into its `options` array, matching the simulator's question-bank structure. It does not infer or rewrite answers from explanations.

## Troubleshooting
- **No questionBank declaration:** the file may use a different variable name or export format; inspect that file before adapting the parser.
- **Invalid answer index:** check that `answer` is an integer between zero and `len(options)-1`.
- **JSON parsing error:** the extractor expects the array contents to be JSON-compatible (double-quoted strings and JSON values). JavaScript expressions, comments inside the array, or trailing commas need explicit normalization rather than silent guessing.
- **Missing dependency:** run `python -m pip install -r requirements.txt` in the same Python environment used to run the scripts.
- **Font/character display:** ReportLab's built-in Helvetica covers common Latin text. For non-Latin scripts, register and use an appropriate Unicode TTF font.

## Notes
The source ZIP is read-only; the scripts do not modify the simulator archive. PDFs are generated from every matching `js/questionBank*.js` file found in the archive.
