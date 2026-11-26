# SQL — Exam Recall & Decision Guide

> Source-grounded revision aid built from this simulator question bank. Recall cards use representative questions and their supplied correct answers, explanations, and distractors; they are not an official exam blueprint.

## Consolidated mind map

```text
SQL
  ├─ Question domains
  │   ├─ basics
  │   ├─ performance
  │   ├─ scenarios
  │   ├─ architecture
  │   ├─ window functions
  │   ├─ optimization
  │   ├─ joins
  │   ├─ aggregation
  │   ├─ subqueries
  │   ├─ cte
  │   ├─ transactions
  │   ├─ indexes
  │   ├─ filtering
  │   ├─ views
  │   └─ + 5 additional bank categories
  └─ Decision loop
      ├─ Trigger: identify the scenario constraint
      ├─ Answer: recall the source-backed technical choice
      ├─ Reason: connect choice to behavior or requirement
      └─ Trap: reject a plausible distractor and its mismatch

## Four-keyword recall cards

| Question trigger (max 4) | Answer recall (max 4) | Reason — why it works | Trap — what to reject |
|---|---|---|---|
| SQL · GRANT · REVOKE · component | DCL · Control · Language | DCL (Data Control Language) is used to control access to data in the database, primarily through granting and revoking permissions. | Trap: TCL (Transaction Control Language) |
| EXISTS · comparing · large · subquery | EXISTS · Short-circuiting · stops · scanning | EXISTS performs a 'semi-join' and returns TRUE immediately upon finding a match, whereas IN typically requires the subquery to be fully materialized first. | Trap: EXISTS uses more memory |
| DELETE · TRUNCATE · difference | DELETE · row-by-row · TRUNCATE · clause | DELETE is a DML command that can target specific rows and is fully logged. TRUNCATE is a DDL command that resets the table (and identity seeds) much faster because it doesn't log individual row deletions. | Trap: DELETE is DDL; TRUNCATE is DML |
| ACID · compliance · database · transactions | Atomicity · Consistency · Isolation · Durability | ACID properties ensure that database transactions are processed reliably and maintain data integrity even in the event of errors or crashes. | Trap: Access, Control, Integration, Delivery |
| LAST_VALUE · col · works · correctly | e.g · RANGE · UNBOUNDED · PRECEDING | Because the default frame ends at the current row, LAST_VALUE will just return the current row unless the frame is expanded. | Trap: A WHERE clause |
| Parameter · Sniffing · benefit | optimizer · creates · execution · plan | While usually helpful, it can cause 'Parameter Sniffing issues' if a plan for a 'rare' value is used for a 'common' value. | Trap: It speeds up network traffic |
| want · employees · projects · assigned | LEFT · JOIN | A LEFT JOIN ensures all records from the 'left' table (Employees) are kept, with matching data from the 'right' table (Projects) added if it exists. | Trap: INNER JOIN |
| Median · SQL · calculate · standard | MEDIAN · PERCENTILE_CONT · standard · function | Median calculation varies greatly by dialect (Oracle has MEDIAN, but SQL Server and PostgreSQL often use window functions). | Trap: Using the MEDIAN() function |

## How to use this map

1. Read the trigger and identify the requirement or failure mode in the scenario.
2. Recall the answer keywords before looking at the full explanation.
3. State the decision rule in your own words; the reason column gives the source explanation.
4. Eliminate the trap because it conflicts with the question constraint or the supplied explanation.

## Source coverage

- Question bank: `questionBank_SQL.js`
- Questions in source bank: **270**
- Consolidated recall cards: **8**
- Category labels represented in the mind-map hierarchy: **19**
- Distractors are drawn from the question options; explanations are drawn from the question bank.

---

# 🗄️ SQL Interview & Exam Quick Reference

### 📘 Joins • CTEs • Window Functions • Indexing • Transactions • Modeling

---

# 1. Querying Core

* **Join** types: `INNER` (matches only), `LEFT/RIGHT` (keep one side), `FULL` (keep both), `CROSS` (cartesian). Filter on the outer table's column in `WHERE` and you silently turn a LEFT JOIN into an INNER JOIN — put it in `ON`.
* **Subquery**: scalar, row-set (`IN`/`EXISTS`) or correlated (re-evaluated per outer row). Prefer `EXISTS` over `IN` when NULLs can appear in the subquery.
* **CTE** (`WITH`): named, readable, reusable within one statement. **Recursive** CTE = anchor member `UNION ALL` recursive member (hierarchies, org charts, date series).
* **GROUP BY** collapses rows; **HAVING** filters *groups* (after aggregation), **WHERE** filters *rows* (before).
* **UNION** removes duplicates (sort/hash cost); **UNION ALL** keeps them and is faster.
* **NULL** is "unknown": `NULL = NULL` is not true. Use `IS NULL`, `COALESCE`, and remember `COUNT(col)` skips NULLs while `COUNT(*)` does not; `NOT IN` with a NULL returns no rows.
* **PIVOT** rotates row values into columns (or conditional aggregation: `SUM(CASE WHEN ... END)`).
* **MERGE** = upsert in one statement: `WHEN MATCHED THEN UPDATE`, `WHEN NOT MATCHED THEN INSERT`.

```sql
SELECT dept, emp, salary,
       RANK()       OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk,
       DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS drnk,
       LAG(salary)  OVER (PARTITION BY dept ORDER BY hired)       AS prev_salary
FROM employees;
```

### 🔑 Window Function recall

| Function | Behavior |
| -------- | -------- |
| `ROW_NUMBER` | Unique sequence, no ties |
| `RANK` | Ties share rank, **gaps** follow (1,1,3) |
| `DENSE_RANK` | Ties share rank, **no gaps** (1,1,2) |
| `LAG / LEAD` | Previous / next row's value |
| `SUM() OVER` | Running totals with frame clause |

💡 **Exam Tip:** Top-N per group → `ROW_NUMBER()`/`DENSE_RANK()` in a CTE, then filter `rnk <= N`.

---

# 2. Performance & Indexing

* **Index**: B-tree speeds lookups, range scans and ORDER BY; costs write speed and storage.
* **Clustered** index = the table's physical order (one per table); non-clustered = separate structure with row locators.
* **Covering index**: contains all columns a query needs (`INCLUDE` columns) → no key lookup.
* **SARGable** predicates can use an index seek: `WHERE order_date >= '2026-01-01'` ✅; `WHERE YEAR(order_date) = 2026` ❌ (function on the column); leading wildcard `LIKE '%abc'` ❌.
* **Execution plan**: look for scans vs seeks, key lookups, spills, large estimate-vs-actual gaps, missing-index hints.
* **Statistics** drive the optimizer's row estimates; stale stats → bad plans.
* **Partition**: split big tables by range (date) for pruning and maintenance (switch/drop old partitions).

---

# 3. Transactions & Concurrency

* **Transaction** = unit of work. **ACID**: Atomicity, Consistency, Isolation, Durability.
* **Isolation levels**: Read Uncommitted (dirty reads) → Read Committed → Repeatable Read (no non-repeatable reads) → Serializable (no phantoms). Snapshot/RCSI use row versioning to avoid readers blocking writers.
* **Locking**: shared vs exclusive; escalation; blocking chains.
* **Deadlock**: two sessions hold locks the other needs; engine kills a victim. Prevent by consistent access order, short transactions, proper indexes; always be ready to retry.
* **NOLOCK** (Read Uncommitted hint) can return dirty, duplicated or missing rows — not a free performance fix.

---

# 4. Modeling & Objects

* **Normalization** (1NF–3NF/BCNF) removes redundancy and update anomalies; **Denormalization** trades that for read speed (reporting).
* **Primary Key** unique + not null; **Foreign Key** enforces referential integrity; **Constraint**s: `UNIQUE`, `CHECK`, `DEFAULT`, `NOT NULL`.
* **Trigger**: runs automatically on DML (audit, enforcement) — hidden logic, use sparingly.
* **View**: stored query (abstraction/security); indexed/materialized views store results.
* **Stored Procedure**: precompiled reusable logic, parameterized (also blocks SQL injection when used with parameters).
* **Star Schema**: central **fact** table (measures) + denormalized **dimension** tables; simple joins, fast analytics.

---

# 🚨 Problem → Fix

| Symptom | Fix |
| ------- | --- |
| Query ignores index | Make predicate SARGable; check stats |
| Slow lookups after seek | Covering index / `INCLUDE` |
| Top 3 per department | Window function + CTE filter |
| Intermittent deadlocks | Consistent order, shorter transactions, retry |
| Duplicates after UNION | Use `UNION` (not `ALL`) if dedupe required |
| Rows vanish with `NOT IN` | NULL in subquery → `NOT EXISTS` |
| Upsert needed | `MERGE` |

> “I write set-based, SARGable SQL, use CTEs and window functions for ranking and running totals, read execution plans before adding covering indexes, keep transactions short at the right isolation level, and model with normalized OLTP tables feeding star-schema reporting.”
