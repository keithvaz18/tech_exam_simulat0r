/* ======================================================
   SQL CERTIFICATION QUESTION BANK 
   ====================================================== */

const questionBank = [
  {
    "id": 1,
    "difficulty": "easy",
    "category": "basics",
    "question": "Which SQL statement is used to extract data from a database?",
    "options": [
      "EXTRACT",
      "OPEN",
      "SELECT",
      "GET"
    ],
    "answer": 2,
    "explanation": "The SELECT statement is the primary way to query data from one or more tables.",
    "hint": "Choose the keyword used in almost every query."
  },
  {
    "id": 2,
    "difficulty": "medium",
    "category": "joins",
    "question": "Which JOIN returns all records when there is a match in either left or right table records?",
    "options": [
      "RIGHT JOIN",
      "LEFT JOIN",
      "INNER JOIN",
      "FULL OUTER JOIN"
    ],
    "answer": 3,
    "explanation": "A FULL OUTER JOIN combines the results of both LEFT and RIGHT joins, returning all rows from both tables with NULLs where matches are missing.",
    "hint": "Think 'complete' or 'both sides'."
  },
  {
    "id": 3,
    "difficulty": "easy",
    "category": "basics",
    "question": "How do you select all columns from a table named 'Employees'?",
    "options": [
      "SELECT Employees",
      "SELECT all FROM Employees",
      "SELECT * FROM Employees",
      "SELECT [all] FROM Employees"
    ],
    "answer": 2,
    "explanation": "The asterisk (*) is the wildcard character used to represent all columns in a table.",
    "hint": "The star symbol."
  },
  {
    "id": 4,
    "difficulty": "hard",
    "category": "set_operations",
    "question": "What is the primary difference between UNION and UNION ALL?",
    "options": [
      "UNION removes duplicate rows, while UNION ALL includes them",
      "UNION ALL removes duplicate rows, while UNION includes them",
      "UNION is faster than UNION ALL",
      "There is no difference"
    ],
    "answer": 0,
    "explanation": "UNION performs a distinct operation to remove duplicates, making it slightly slower than UNION ALL, which simply appends results.",
    "hint": "One 'cleans' the data, the other just 'adds' it."
  },
  {
    "id": 5,
    "difficulty": "medium",
    "category": "filtering",
    "question": "Which operator is used to search for a specified pattern in a column?",
    "options": [
      "MATCH",
      "GET",
      "CONTAINS",
      "LIKE"
    ],
    "answer": 3,
    "explanation": "The LIKE operator is used in a WHERE clause to search for patterns using wildcards like % and _.",
    "hint": "Similar to 'resembles'."
  },
  {
    "id": 6,
    "difficulty": "hard",
    "category": "joins",
    "question": "In a scenario where you want to find all employees and any projects they might be assigned to, even if they aren't assigned to any, which join should you use?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "CROSS JOIN",
      "RIGHT JOIN"
    ],
    "answer": 1,
    "explanation": "A LEFT JOIN ensures all records from the 'left' table (Employees) are kept, with matching data from the 'right' table (Projects) added if it exists.",
    "hint": "Preserve the left side."
  },
  {
    "id": 7,
    "difficulty": "medium",
    "category": "set_operations",
    "question": "Which clause returns only the rows that are present in both the first and second SELECT statements?",
    "options": [
      "MINUS",
      "EXCEPT",
      "UNION",
      "INTERSECT"
    ],
    "answer": 3,
    "explanation": "INTERSECT returns only the common rows between two result sets.",
    "hint": "Where two circles overlap."
  },
  {
    "id": 8,
    "difficulty": "easy",
    "category": "basics",
    "question": "Which SQL keyword is used to sort the result-set?",
    "options": [
      "ORDER BY",
      "GROUP BY",
      "ALIGN BY",
      "SORT BY"
    ],
    "answer": 0,
    "explanation": "ORDER BY is used to sort results in ascending (ASC) or descending (DESC) order.",
    "hint": "Putting things in order."
  },
  {
    "id": 9,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is the purpose of the DISTINCT keyword?",
    "options": [
      "To select only unique values",
      "To count the number of rows",
      "To join two tables",
      "To sort values alphabetically"
    ],
    "answer": 0,
    "explanation": "DISTINCT filters out duplicate values from the output.",
    "hint": "Unique."
  },
  {
    "id": 10,
    "difficulty": "hard",
    "category": "set_operations",
    "question": "In Oracle and PostgreSQL, which keyword is equivalent to 'EXCEPT' in SQL Server?",
    "options": [
      "MINUS",
      "DIFFERENCE",
      "SUBTRACT",
      "INTERSECT"
    ],
    "answer": 0,
    "explanation": "MINUS and EXCEPT both return rows from the first query that are not present in the second query.",
    "hint": "Mathematical subtraction."
  },
  {
    "id": 11,
    "difficulty": "easy",
    "category": "basics",
    "question": "How can you return the number of records in the 'Sales' table?",
    "options": [
      "SELECT SUM(*) FROM Sales",
      "SELECT COUNT(*) FROM Sales",
      "SELECT LEN(*) FROM Sales",
      "SELECT NUMBER(*) FROM Sales"
    ],
    "answer": 1,
    "explanation": "COUNT(*) returns the total number of rows in a table.",
    "hint": "Total count."
  },
  {
    "id": 12,
    "difficulty": "medium",
    "category": "joins",
    "question": "A 'Self Join' is most commonly used for what type of data structure?",
    "options": [
      "Flat files",
      "Log files",
      "Hierarchical data (e.g., Employee and Manager)",
      "External databases"
    ],
    "answer": 2,
    "explanation": "A Self Join allows a table to be joined with itself, which is useful for parent-child relationships within one table.",
    "hint": "Employee/Manager in the same table."
  },
  {
    "id": 13,
    "difficulty": "medium",
    "category": "filtering",
    "question": "Which wildcard represents zero, one, or multiple characters in SQL?",
    "options": [
      "?",
      "_",
      "*",
      "%"
    ],
    "answer": 3,
    "explanation": "The percent sign (%) matches any string of any length (including length zero).",
    "hint": "Used with LIKE."
  },
  {
    "id": 14,
    "difficulty": "hard",
    "category": "joins",
    "question": "What is a CROSS JOIN?",
    "options": [
      "A join used only for primary keys",
      "A join between two different databases",
      "A join that returns a Cartesian product of the two tables",
      "A join that requires a common column"
    ],
    "answer": 2,
    "explanation": "A CROSS JOIN produces every possible combination of rows from the two tables.",
    "hint": "Multiply table A by table B."
  },
  {
    "id": 15,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which SQL clause is used to filter the results of a GROUP BY?",
    "options": [
      "WHERE",
      "HAVING",
      "FILTER",
      "LIMIT"
    ],
    "answer": 1,
    "explanation": "WHERE filters rows before grouping; HAVING filters the groups themselves after aggregation.",
    "hint": "The 'Where' for groups."
  },
  {
    "id": 16,
    "difficulty": "easy",
    "category": "basics",
    "question": "How do you insert a new record into the 'Users' table?",
    "options": [
      "ADD NEW Users",
      "UPDATE Users",
      "CREATE Users",
      "INSERT INTO Users"
    ],
    "answer": 3,
    "explanation": "INSERT INTO is the DML command for adding new rows.",
    "hint": "Adding into."
  },
  {
    "id": 17,
    "difficulty": "medium",
    "category": "basics",
    "question": "What does the 'IS NULL' operator do?",
    "options": [
      "Checks for empty strings",
      "Sets a value to zero",
      "Checks if a value is zero",
      "Checks for missing or undefined values"
    ],
    "answer": 3,
    "explanation": "NULL represents a missing or unknown value, and 'IS NULL' is the only way to test for it.",
    "hint": "Testing for empty/unknown."
  },
  {
    "id": 18,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You need to update the price of all products in the 'Electronics' category by 10%. Which query is correct?",
    "options": [
      "MODIFY Products SET Price = Price * 1.1",
      "UPDATE Products SET Price = Price * 1.1 WHERE Category = 'Electronics'",
      "SET Price = Price * 1.1 WHERE Category = 'Electronics'",
      "UPDATE Price = Price * 1.1 FROM Products"
    ],
    "answer": 1,
    "explanation": "The UPDATE statement uses SET to change values and WHERE to target specific rows.",
    "hint": "Update, then set."
  },
  {
    "id": 19,
    "difficulty": "medium",
    "category": "filtering",
    "question": "Which operator is used to select values within a range?",
    "options": [
      "WITHIN",
      "RANGE",
      "BETWEEN",
      "IN"
    ],
    "answer": 2,
    "explanation": "BETWEEN is used to select values within a given range (inclusive).",
    "hint": "In the middle of."
  },
  {
    "id": 20,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is the result of 'SELECT 5 + NULL'?",
    "options": [
      "Error",
      "5",
      "NULL",
      "0"
    ],
    "answer": 2,
    "explanation": "In SQL, any arithmetic operation involving a NULL results in NULL.",
    "hint": "Unknown + number = unknown."
  },
  {
    "id": 21,
    "difficulty": "hard",
    "category": "joins",
    "question": "If Table A has 10 rows and Table B has 5 rows, how many rows will a CROSS JOIN produce?",
    "options": [
      "50",
      "10",
      "5",
      "15"
    ],
    "answer": 0,
    "explanation": "10 * 5 = 50. A Cartesian product multiplies the row counts.",
    "hint": "10 times 5."
  },
  {
    "id": 22,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which command is used to remove all records from a table without deleting the table structure?",
    "options": [
      "DROP",
      "DELETE TABLE",
      "TRUNCATE",
      "REMOVE"
    ],
    "answer": 2,
    "explanation": "TRUNCATE removes all rows quickly and usually cannot be rolled back in some DBs, whereas DROP deletes the table itself.",
    "hint": "Fast empty."
  },
  {
    "id": 23,
    "difficulty": "easy",
    "category": "basics",
    "question": "What is the purpose of the 'AS' keyword?",
    "options": [
      "To give a table or a column a temporary name (alias)",
      "To define a primary key",
      "To join tables",
      "To sort data"
    ],
    "answer": 0,
    "explanation": "AS is used to create an alias to make column names more readable or to name calculated fields.",
    "hint": "Alias."
  },
  {
    "id": 24,
    "difficulty": "medium",
    "category": "filtering",
    "question": "The 'IN' operator allows you to:",
    "options": [
      "Join two tables",
      "Insert data into a table",
      "Calculate the average",
      "Specify multiple values in a WHERE clause"
    ],
    "answer": 3,
    "explanation": "IN is shorthand for multiple OR conditions.",
    "hint": "Check against a list."
  },
  {
    "id": 25,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to delete a specific row where 'ID' is 5. Which statement is correct?",
    "options": [
      "DELETE FROM Users WHERE ID = 5",
      "TRUNCATE Users WHERE ID = 5",
      "REMOVE FROM Users WHERE ID = 5",
      "DELETE ID = 5 FROM Users"
    ],
    "answer": 0,
    "explanation": "DELETE is used with a WHERE clause to remove specific rows.",
    "hint": "Delete from... where."
  },
  {
    "id": 26,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is a Foreign Key?",
    "options": [
      "A field in one table that refers to the Primary Key in another table",
      "A key used to encrypt data",
      "A key used for indexing only",
      "The main key of a table"
    ],
    "answer": 0,
    "explanation": "Foreign keys establish relationships between tables by pointing to unique identifiers in other tables.",
    "hint": "Linking tables."
  },
  {
    "id": 27,
    "difficulty": "easy",
    "category": "basics",
    "question": "Which SQL constraint ensures that a column cannot have a NULL value?",
    "options": [
      "UNIQUE",
      "CHECK",
      "PRIMARY KEY",
      "NOT NULL"
    ],
    "answer": 3,
    "explanation": "The NOT NULL constraint enforces a column to always contain a value.",
    "hint": "No nulls allowed."
  },
  {
    "id": 28,
    "difficulty": "medium",
    "category": "filtering",
    "question": "How do you select all users whose name starts with 'A'?",
    "options": [
      "SELECT * FROM Users WHERE Name = 'A*'",
      "SELECT * FROM Users WHERE Name = 'A'",
      "SELECT * FROM Users WHERE Name LIKE 'A%'",
      "SELECT * FROM Users WHERE Name LIKE '%A'"
    ],
    "answer": 2,
    "explanation": "The % at the end means any characters can follow the 'A'.",
    "hint": "Starts with A."
  },
  {
    "id": 29,
    "difficulty": "hard",
    "category": "joins",
    "question": "Which join returns only rows where there is at least one match in both tables?",
    "options": [
      "FULL JOIN",
      "RIGHT JOIN",
      "LEFT JOIN",
      "INNER JOIN"
    ],
    "answer": 3,
    "explanation": "INNER JOIN is the most restrictive join, excluding any rows that don't have a match in both sets.",
    "hint": "Perfect matches only."
  },
  {
    "id": 30,
    "difficulty": "medium",
    "category": "basics",
    "question": "What does the 'AVG()' function calculate?",
    "options": [
      "The total sum",
      "The most frequent value",
      "The middle value",
      "The average value of a numeric column"
    ],
    "answer": 3,
    "explanation": "AVG() computes the arithmetic mean of a set of numbers.",
    "hint": "Mean."
  },
  {
    "id": 31,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "When using UNION, the columns in both SELECT statements must:",
    "options": [
      "Have the same name",
      "Be primary keys",
      "Be from the same table",
      "Be in the same order and have similar data types"
    ],
    "answer": 3,
    "explanation": "Union requires structural compatibility: same number of columns, in the same order, with compatible types.",
    "hint": "Structure must match."
  },
  {
    "id": 32,
    "difficulty": "medium",
    "category": "filtering",
    "question": "What is the difference between '=' and 'LIKE'?",
    "options": [
      "There is no difference",
      "'LIKE' is faster",
      "'=' is for exact matches; 'LIKE' is for pattern matching with wildcards",
      "'=' can use % wildcards"
    ],
    "answer": 2,
    "explanation": "Use '=' for precision and 'LIKE' for partial or fuzzy searches.",
    "hint": "Exact vs Pattern."
  },
  {
    "id": 33,
    "difficulty": "easy",
    "category": "basics",
    "question": "Which keyword is used to add a column to an existing table?",
    "options": [
      "ADD COLUMN",
      "INSERT COLUMN",
      "UPDATE TABLE",
      "ALTER TABLE"
    ],
    "answer": 3,
    "explanation": "ALTER TABLE is the DDL command used to change the schema of a table.",
    "hint": "Modify the table."
  },
  {
    "id": 34,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "Which SQL statement is used to create a view?",
    "options": [
      "CREATE VIEW view_name AS SELECT...",
      "NEW VIEW view_name AS...",
      "SAVE SELECT AS VIEW...",
      "CREATE VIRTUAL TABLE..."
    ],
    "answer": 0,
    "explanation": "A view is a virtual table based on the result-set of an SQL statement.",
    "hint": "Create view as."
  },
  {
    "id": 35,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is a 'Primary Key'?",
    "options": [
      "A column used to store passwords",
      "A column that uniquely identifies each row in a table",
      "A column that can be NULL",
      "Any column in a table"
    ],
    "answer": 1,
    "explanation": "A Primary Key must contain unique values and cannot be NULL.",
    "hint": "Unique ID."
  },
  {
    "id": 36,
    "difficulty": "hard",
    "category": "filtering",
    "question": "How do you select rows where 'Score' is between 50 and 100 (inclusive)?",
    "options": [
      "WHERE Score BETWEEN 50 AND 100",
      "WHERE Score >= 50 OR Score <= 100",
      "WHERE Score IN (50, 100)",
      "WHERE Score > 50 AND Score < 100"
    ],
    "answer": 0,
    "explanation": "BETWEEN is inclusive of both the start and end values.",
    "hint": "Standard range operator."
  },
  {
    "id": 37,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which function is used to find the highest value in a column?",
    "options": [
      "TOP()",
      "HIGHEST()",
      "MAX()",
      "UPPER()"
    ],
    "answer": 2,
    "explanation": "MAX() returns the maximum value in the specified column.",
    "hint": "Maximum."
  },
  {
    "id": 38,
    "difficulty": "easy",
    "category": "basics",
    "question": "How do you change 'USA' to 'United States' in the 'Country' column of the 'Clients' table?",
    "options": [
      "UPDATE Clients SET Country = 'United States' WHERE Country = 'USA'",
      "CHANGE Clients SET Country = 'United States' WHERE Country = 'USA'",
      "MODIFY Clients SET Country = 'United States'",
      "UPDATE Country = 'United States' FROM Clients"
    ],
    "answer": 0,
    "explanation": "The UPDATE statement modifies existing records.",
    "hint": "Update, then set."
  },
  {
    "id": 39,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is the default sort order for 'ORDER BY'?",
    "options": [
      "Random",
      "Descending",
      "Ascending",
      "Numerical"
    ],
    "answer": 2,
    "explanation": "If you don't specify ASC or DESC, SQL defaults to Ascending order.",
    "hint": "A to Z."
  },
  {
    "id": 40,
    "difficulty": "hard",
    "category": "set_operations",
    "question": "What happens if you use INTERSECT on two tables with different column counts?",
    "options": [
      "It returns only the first column",
      "It throws an error",
      "It works normally",
      "It performs a CROSS JOIN instead"
    ],
    "answer": 1,
    "explanation": "Like UNION, INTERSECT requires the same number of columns in both queries.",
    "hint": "Columns must match."
  },
  {
    "id": 41,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which function is used to combine the text from multiple columns into one?",
    "options": [
      "MERGE()",
      "JOIN()",
      "COMBINE()",
      "CONCAT()"
    ],
    "answer": 3,
    "explanation": "CONCAT (or the || operator in some dialects) is used for string concatenation.",
    "hint": "Concatenate."
  },
  {
    "id": 42,
    "difficulty": "hard",
    "category": "joins",
    "question": "A 'Natural Join' is based on:",
    "options": [
      "Primary keys only",
      "Columns with the same name in both tables",
      "The first column of each table",
      "Random matching"
    ],
    "answer": 1,
    "explanation": "A NATURAL JOIN implicitly joins tables based on all columns that have the same name in both tables.",
    "hint": "Implicit column matching."
  },
  {
    "id": 43,
    "difficulty": "easy",
    "category": "basics",
    "question": "How do you delete a table named 'Orders'?",
    "options": [
      "REMOVE TABLE Orders",
      "DROP TABLE Orders",
      "DELETE Orders",
      "TRUNCATE Orders"
    ],
    "answer": 1,
    "explanation": "DROP TABLE removes the entire table structure and all data permanently.",
    "hint": "Destroy the table."
  },
  {
    "id": 44,
    "difficulty": "medium",
    "category": "filtering",
    "question": "What does 'WHERE Name LIKE '_r%' mean?",
    "options": [
      "Name starts with 'r'",
      "Name is exactly 2 characters",
      "Name ends with 'r'",
      "Name has 'r' as the second character"
    ],
    "answer": 3,
    "explanation": "The underscore (_) is a wildcard for exactly one character.",
    "hint": "One char, then r, then anything."
  },
  {
    "id": 45,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to find the total revenue for each month. Which clause must you use with SUM(Revenue)?",
    "options": [
      "HAVING Month",
      "ORDER BY Month",
      "SORT BY Month",
      "GROUP BY Month"
    ],
    "answer": 3,
    "explanation": "Aggregates like SUM() require a GROUP BY clause to define the buckets for calculation.",
    "hint": "Aggregate grouping."
  },
  {
    "id": 46,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which command is used to change the name of an existing table?",
    "options": [
      "RENAME TABLE",
      "ALTER TABLE... RENAME TO",
      "UPDATE TABLE NAME",
      "Both 0 and 1 (depending on DB)"
    ],
    "answer": 3,
    "explanation": "Different SQL dialects use either RENAME TABLE (MySQL) or ALTER TABLE (PostgreSQL/Oracle/SQL Server) to rename tables.",
    "hint": "Rename or Alter."
  },
  {
    "id": 47,
    "difficulty": "hard",
    "category": "set_operations",
    "question": "Query A returns {1, 2, 3}. Query B returns {2, 3, 4}. What does 'A EXCEPT B' return?",
    "options": [
      "{2, 3}",
      "{4}",
      "{1, 4}",
      "{1}"
    ],
    "answer": 3,
    "explanation": "EXCEPT returns rows from the first set that do not exist in the second set.",
    "hint": "In A but not in B."
  },
  {
    "id": 48,
    "difficulty": "medium",
    "category": "basics",
    "question": "The 'CHECK' constraint is used to:",
    "options": [
      "Check if a table exists",
      "Verify the user's password",
      "Ensure a column has a unique value",
      "Limit the value range that can be placed in a column"
    ],
    "answer": 3,
    "explanation": "A CHECK constraint ensures that all values in a column satisfy a specific condition (e.g., Age >= 18).",
    "hint": "Validation."
  },
  {
    "id": 49,
    "difficulty": "easy",
    "category": "basics",
    "question": "What is the standard port for Microsoft SQL Server?",
    "options": [
      "8080",
      "5432",
      "1433",
      "3306"
    ],
    "answer": 2,
    "explanation": "1433 is the default port for SQL Server. (3306 is MySQL, 5432 is PostgreSQL).",
    "hint": "Fourteen thirty-three."
  },
  {
    "id": 50,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "Which of the following joins is likely to result in the most rows?",
    "options": [
      "INNER JOIN",
      "CROSS JOIN",
      "LEFT JOIN",
      "NATURAL JOIN"
    ],
    "answer": 1,
    "explanation": "A CROSS JOIN (Cartesian Product) results in M * N rows, which is usually significantly larger than the others.",
    "hint": "The multiplier."
  },
  {
    "id": 51,
    "difficulty": "medium",
    "category": "subqueries",
    "question": "What is a 'Correlated Subquery'?",
    "options": [
      "A subquery that is joined using a UNION operator",
      "A subquery that runs independently of the outer query",
      "A subquery that only returns one constant value",
      "A subquery that uses values from the outer query and executes once for each row processed by the outer query"
    ],
    "answer": 3,
    "explanation": "Correlated subqueries are evaluated row-by-row for the outer query, making them powerful but potentially slower than standard subqueries.",
    "hint": "Row-by-row dependency."
  },
  {
    "id": 52,
    "difficulty": "hard",
    "category": "cte",
    "question": "Which keyword is used to define a Common Table Expression (CTE)?",
    "options": [
      "AS",
      "WITH",
      "USING",
      "DEFINE"
    ],
    "answer": 1,
    "explanation": "A CTE is defined using the WITH keyword followed by the expression name and the AS (query) block.",
    "hint": "Starts with 'W'."
  },
  {
    "id": 53,
    "difficulty": "medium",
    "category": "aggregation",
    "question": "What is the difference between COUNT(*) and COUNT(column_name)?",
    "options": [
      "COUNT(column_name) is faster",
      "There is no difference",
      "COUNT(*) counts all rows including NULLs; COUNT(column_name) counts only non-NULL values in that column",
      "COUNT(*) is only for numbers"
    ],
    "answer": 2,
    "explanation": "When you specify a column, SQL ignores rows where that specific column's value is NULL.",
    "hint": "Handling of NULLs."
  },
  {
    "id": 54,
    "difficulty": "hard",
    "category": "cte",
    "question": "What is a 'Recursive CTE'?",
    "options": [
      "A CTE that deletes itself after execution",
      "A CTE that runs in a loop 100 times exactly",
      "A CTE used only for mathematical calculations",
      "A CTE that references itself to handle hierarchical or tree-structured data"
    ],
    "answer": 3,
    "explanation": "Recursive CTEs are essential for querying organizational charts, bill of materials, or any parent-child relationship depth.",
    "hint": "Self-referencing query."
  },
  {
    "id": 55,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You want to find the second highest salary in an 'Employees' table. Which approach is valid?",
    "options": [
      "SELECT MAX(Salary) FROM Employees WHERE Salary < (SELECT MAX(Salary) FROM Employees)",
      "SELECT Salary FROM Employees ORDER BY Salary DESC LIMIT 1,1",
      "Both 0 and 1 are valid depending on the SQL dialect",
      "SELECT Salary FROM Employees WHERE Rank = 2"
    ],
    "answer": 2,
    "explanation": "Subqueries or LIMIT/OFFSET (or TOP) are common ways to find N-th highest values.",
    "hint": "Filter out the max to find the next max."
  },
  {
    "id": 56,
    "difficulty": "hard",
    "category": "subqueries",
    "question": "Where can a subquery NOT be used?",
    "options": [
      "The FROM clause",
      "The SELECT clause",
      "The GROUP BY clause (in most dialects)",
      "The WHERE clause"
    ],
    "answer": 2,
    "explanation": "While most clauses accept subqueries, using a subquery within a GROUP BY is generally not supported or considered valid syntax.",
    "hint": "Grouping requires concrete columns."
  },
  {
    "id": 57,
    "difficulty": "medium",
    "category": "aggregation",
    "question": "What happens if you use an aggregate function in a SELECT without a GROUP BY, but also include a non-aggregated column?",
    "options": [
      "It repeats the aggregate value for every row",
      "It returns the first row's value for the non-aggregated column",
      "It throws an error (in standard SQL)",
      "It returns NULL"
    ],
    "answer": 2,
    "explanation": "Standard SQL requires every non-aggregated column in the SELECT list to be present in the GROUP BY clause.",
    "hint": "Rule of grouping."
  },
  {
    "id": 58,
    "difficulty": "easy",
    "category": "basics",
    "question": "Which operator is used to check if a subquery returns any rows?",
    "options": [
      "IN",
      "ANY",
      "EXISTS",
      "ALL"
    ],
    "answer": 2,
    "explanation": "EXISTS returns true if the subquery returns at least one record.",
    "hint": "Checking existence."
  },
  {
    "id": 59,
    "difficulty": "medium",
    "category": "subqueries",
    "question": "What is a 'Scalar Subquery'?",
    "options": [
      "A subquery that returns a whole table",
      "A subquery with more than 10 rows",
      "A subquery used only for scaling numbers",
      "A subquery that returns exactly one value (one row and one column)"
    ],
    "answer": 3,
    "explanation": "Scalar subqueries can be used almost anywhere an expression is used (e.g., in a SELECT list).",
    "hint": "Single value."
  },
  {
    "id": 60,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How do you delete duplicate rows from a table while keeping the one with the lowest ID?",
    "options": [
      "REMOVE ROW WHERE ID > 1",
      "DELETE DUPLICATES FROM Table",
      "TRUNCATE TABLE Table",
      "DELETE FROM Table WHERE ID NOT IN (SELECT MIN(ID) FROM Table GROUP BY DuplicateCol)"
    ],
    "answer": 3,
    "explanation": "By grouping by the columns that define a duplicate and selecting the MIN(ID), you identify the 'keepers'.",
    "hint": "Delete what is NOT the minimum."
  },
  {
    "id": 61,
    "difficulty": "medium",
    "category": "cte",
    "question": "What is a primary benefit of using a CTE over a subquery?",
    "options": [
      "CTEs can be indexed",
      "CTEs are always faster",
      "CTEs improve readability and allow the result to be referenced multiple times in the same query",
      "CTEs are stored permanently in the database"
    ],
    "answer": 2,
    "explanation": "CTEs make complex queries easier to follow by breaking them into named logical blocks.",
    "hint": "Clean code/readability."
  },
  {
    "id": 62,
    "difficulty": "medium",
    "category": "aggregation",
    "question": "The 'HAVING' clause is typically used with which other clause?",
    "options": [
      "LIMIT",
      "ORDER BY",
      "GROUP BY",
      "WHERE"
    ],
    "answer": 2,
    "explanation": "HAVING is used to filter aggregated data generated by a GROUP BY clause.",
    "hint": "Filtering groups."
  },
  {
    "id": 63,
    "difficulty": "hard",
    "category": "subqueries",
    "question": "What does the 'ALL' operator do when used with a subquery?",
    "options": [
      "Returns true if the condition is met for ALL values in the subquery result",
      "Returns all columns from the subquery",
      "Clears all data",
      "Joins all rows"
    ],
    "answer": 0,
    "explanation": "Example: 'WHERE Price > ALL (SELECT Price FROM...)' means the price must be higher than every value returned by the subquery.",
    "hint": "Universal condition."
  },
  {
    "id": 64,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which query correctly finds employees whose salary is above the average salary of the company?",
    "options": [
      "SELECT * FROM Employees HAVING Salary > AVG(Salary)",
      "SELECT AVG(Salary) FROM Employees WHERE Salary > AVG",
      "SELECT * FROM Employees WHERE Salary > AVG(Salary)",
      "SELECT * FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees)"
    ],
    "answer": 3,
    "explanation": "You cannot use an aggregate function like AVG directly in a WHERE clause; you must use a subquery.",
    "hint": "Calculate average in a sub-step."
  },
  {
    "id": 65,
    "difficulty": "hard",
    "category": "cte",
    "question": "Can you use multiple CTEs in a single query?",
    "options": [
      "Only if they are not related",
      "Yes, by using the WITH keyword before every CTE name",
      "No, only one WITH per query",
      "Yes, separated by commas after the single WITH keyword"
    ],
    "answer": 3,
    "explanation": "Syntax: WITH cte1 AS (...), cte2 AS (...) SELECT ...",
    "hint": "Comma-separated definitions."
  },
  {
    "id": 66,
    "difficulty": "medium",
    "category": "aggregation",
    "question": "Which function ignores NULL values by default?",
    "options": [
      "COUNT(*)",
      "SUM()",
      "MAX()",
      "Both 1 and 2"
    ],
    "answer": 3,
    "explanation": "Most aggregate functions (SUM, AVG, MIN, MAX, COUNT(col)) ignore NULLs; only COUNT(*) includes them.",
    "hint": "Math on NULL is ignored."
  },
  {
    "id": 67,
    "difficulty": "easy",
    "category": "basics",
    "question": "What does 'SELECT 1' usually indicate when used in an EXISTS subquery?",
    "options": [
      "It checks if the ID is 1",
      "It selects only the first column",
      "It returns the number 1 for every row",
      "It is a convention to minimize overhead since EXISTS only cares if a row is returned, not what is in it"
    ],
    "answer": 3,
    "explanation": "Since EXISTS only checks for the presence of rows, the actual columns selected don't matter.",
    "hint": "Efficient existence check."
  },
  {
    "id": 68,
    "difficulty": "hard",
    "category": "subqueries",
    "question": "What is a 'Derived Table'?",
    "options": [
      "A view",
      "A table that has a foreign key",
      "A subquery used in the FROM clause of a SELECT statement",
      "A table created on the hard drive"
    ],
    "answer": 2,
    "explanation": "Derived tables (also called inline views) must be given an alias in most SQL dialects.",
    "hint": "Subquery in the FROM clause."
  },
  {
    "id": 69,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You want to find departments that have more than 10 employees. What is the correct query?",
    "options": [
      "SELECT DeptID FROM Employees GROUP BY DeptID WHERE COUNT(ID) > 10",
      "SELECT DeptID FROM Employees WHERE COUNT(ID) > 10",
      "SELECT DeptID FROM Employees HAVING COUNT(ID) > 10",
      "SELECT DeptID FROM Employees GROUP BY DeptID HAVING COUNT(ID) > 10"
    ],
    "answer": 3,
    "explanation": "Aggregated conditions (COUNT > 10) must be placed in the HAVING clause after grouping.",
    "hint": "Group then Have."
  },
  {
    "id": 70,
    "difficulty": "hard",
    "category": "cte",
    "question": "What happens to a CTE after the query finishes executing?",
    "options": [
      "It is stored in the TempDB",
      "It is discarded (it only exists during the scope of that single query)",
      "It is cached for 24 hours",
      "It is saved as a View"
    ],
    "answer": 1,
    "explanation": "Unlike views or temporary tables, CTEs are not persistent objects.",
    "hint": "Temporary scope."
  },
  {
    "id": 71,
    "difficulty": "medium",
    "category": "subqueries",
    "question": "In the query 'SELECT * FROM T1 WHERE col IN (SELECT col FROM T2)', what happens if the subquery returns a NULL?",
    "options": [
      "NULL is treated as an empty string",
      "The IN operator ignores the NULL and continues matching other values",
      "The query crashes",
      "The query returns no rows at all"
    ],
    "answer": 1,
    "explanation": "The IN operator works with NULLs in the list, but note that NOT IN with a NULL in the subquery result will return no rows.",
    "hint": "IN is safe with NULLs."
  },
  {
    "id": 72,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "How do you calculate the 'Median' in standard SQL?",
    "options": [
      "AVG(DISTINCT val)",
      "Using the MEDIAN() function",
      "There is no standard MEDIAN() function; it often requires sorting and picking the middle value or using PERCENTILE_CONT",
      "SUM(val) / 2"
    ],
    "answer": 2,
    "explanation": "Median calculation varies greatly by dialect (Oracle has MEDIAN, but SQL Server and PostgreSQL often use window functions).",
    "hint": "Not a standard function."
  },
  {
    "id": 73,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is 'Unnesting' or 'Flattening' a subquery?",
    "options": [
      "The optimizer converting a subquery into a JOIN for better performance",
      "Deleting the subquery",
      "Combining two WHERE clauses",
      "Converting a table to a CSV"
    ],
    "answer": 0,
    "explanation": "Modern database optimizers try to rewrite subqueries as joins because joins are often more efficient to execute.",
    "hint": "Optimizer magic."
  },
  {
    "id": 74,
    "difficulty": "hard",
    "category": "cte",
    "question": "Which part of a Recursive CTE is executed only once?",
    "options": [
      "The anchor member",
      "The termination condition",
      "The final SELECT",
      "The recursive member"
    ],
    "answer": 0,
    "explanation": "The anchor member provides the starting result set; the recursive member then runs repeatedly on those results.",
    "hint": "The starting point."
  },
  {
    "id": 75,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which clause is used to return only the first 10 rows in PostgreSQL?",
    "options": [
      "TOP 10",
      "LIMIT 10",
      "FETCH FIRST 10 ROWS ONLY",
      "Both 1 and 2"
    ],
    "answer": 3,
    "explanation": "PostgreSQL supports both the LIMIT syntax and the SQL-standard FETCH FIRST syntax.",
    "hint": "LIMIT or FETCH."
  },
  {
    "id": 76,
    "difficulty": "medium",
    "category": "subqueries",
    "question": "Can a subquery return more than one column?",
    "options": [
      "Only in MySQL",
      "Yes, if used with the EXISTS operator or in the FROM clause",
      "No, only scalar subqueries exist",
      "Only if columns are of the same type"
    ],
    "answer": 1,
    "explanation": "Subqueries in the FROM clause (Derived Tables) or used with EXISTS can return multiple columns.",
    "hint": "Depends on where it's used."
  },
  {
    "id": 77,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What is the result of 'SUM()' on a column where all values are NULL?",
    "options": [
      "Error",
      "NULL",
      "1",
      "0"
    ],
    "answer": 1,
    "explanation": "Unlike COUNT(*), which would return 0, the SUM of only NULL values is NULL.",
    "hint": "NULL sum."
  },
  {
    "id": 78,
    "difficulty": "easy",
    "category": "basics",
    "question": "Which keyword can be used instead of 'IN' to check a single value returned by a subquery?",
    "options": [
      "SAME",
      "=",
      "LIKE",
      "MATCH"
    ],
    "answer": 1,
    "explanation": "If a subquery is guaranteed to return one row and one column, the '=' operator is appropriate.",
    "hint": "Equal to."
  },
  {
    "id": 79,
    "difficulty": "hard",
    "category": "cte",
    "question": "In a Recursive CTE, what happens if the recursive member keeps returning data indefinitely?",
    "options": [
      "The database crashes",
      "An error occurs once the maximum recursion limit (e.g., MAXRECURSION in SQL Server) is reached",
      "The server restarts",
      "The query result is truncated"
    ],
    "answer": 1,
    "explanation": "Most systems have a safety limit (default 100 in SQL Server) to prevent infinite loops.",
    "hint": "Recursion limit."
  },
  {
    "id": 80,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you select the top 5% of records in SQL Server?",
    "options": [
      "SELECT TOP 5 PERCENT * FROM ...",
      "SELECT * FROM ... LIMIT 5%",
      "SELECT * FROM ... FETCH 5 PERCENT",
      "SELECT * FROM ... WHERE RANK < 5%"
    ],
    "answer": 0,
    "explanation": "SQL Server's TOP clause allows for a PERCENT keyword.",
    "hint": "Top Percent."
  },
  {
    "id": 81,
    "difficulty": "medium",
    "category": "aggregation",
    "question": "What is the purpose of the 'GROUPING SETS' clause?",
    "options": [
      "To sort groups",
      "To group data by a single column",
      "To define multiple groupings in the same query (a generalization of GROUP BY)",
      "To delete groups"
    ],
    "answer": 2,
    "explanation": "GROUPING SETS allows you to produce a result set equivalent to UNION ALL-ing several GROUP BY queries.",
    "hint": "Multiple grouping levels."
  },
  {
    "id": 82,
    "difficulty": "hard",
    "category": "subqueries",
    "question": "What is the performance implication of using 'NOT IN' with a subquery that could return a NULL?",
    "options": [
      "It only affects the NULL row",
      "It makes no difference",
      "The entire query will return zero results because 'val != NULL' is never true",
      "It is much faster"
    ],
    "answer": 2,
    "explanation": "In SQL, 'NOT IN (1, 2, NULL)' is evaluated as 'val != 1 AND val != 2 AND val != NULL'. Since 'val != NULL' is UNKNOWN, the whole expression is never TRUE.",
    "hint": "The NOT IN NULL trap."
  },
  {
    "id": 83,
    "difficulty": "medium",
    "category": "cte",
    "question": "Can a CTE be used inside a View definition?",
    "options": [
      "Only if it is recursive",
      "Yes",
      "Only in SQL Server",
      "No"
    ],
    "answer": 1,
    "explanation": "Views can contain CTEs to organize the logic that the view encapsulates.",
    "hint": "Views + WITH."
  },
  {
    "id": 84,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What is 'CUBE' in the context of GROUP BY?",
    "options": [
      "A specialized join",
      "An extension that generates subtotals for all combinations of grouping columns",
      "A way to square the results",
      "A 3D visualization of data"
    ],
    "answer": 1,
    "explanation": "If you CUBE(a, b), you get groupings for (a,b), (a), (b), and an overall grand total.",
    "hint": "All possible combinations."
  },
  {
    "id": 85,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you combine results from two queries and keep only the records unique to each query?",
    "options": [
      "INTERSECT",
      "EXCEPT (or MINUS)",
      "UNION ALL",
      "UNION"
    ],
    "answer": 1,
    "explanation": "EXCEPT returns rows from the first query that are not in the second.",
    "hint": "Difference operation."
  },
  {
    "id": 86,
    "difficulty": "hard",
    "category": "subqueries",
    "question": "Which keyword is a synonym for 'SOME' in subqueries?",
    "options": [
      "ANY",
      "EXISTS",
      "ALL",
      "UNIQUE"
    ],
    "answer": 0,
    "explanation": "ANY and SOME are interchangeable in SQL and check if any value in the result set meets the condition.",
    "hint": "Interchangeable with ANY."
  },
  {
    "id": 87,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which clause executes before 'HAVING'?",
    "options": [
      "ORDER BY",
      "SELECT",
      "WHERE",
      "Both 1 and 2"
    ],
    "answer": 2,
    "explanation": "The execution order is FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY.",
    "hint": "Rows are filtered before groups."
  },
  {
    "id": 88,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What does the 'ROLLUP' extension do in a GROUP BY?",
    "options": [
      "It sorts the results",
      "It generates hierarchical subtotals (moving from right to left)",
      "It limits the rows",
      "It deletes the rows after summing"
    ],
    "answer": 1,
    "explanation": "ROLLUP(a, b) creates totals for (a, b), (a), and a grand total.",
    "hint": "Hierarchy-based subtotals."
  },
  {
    "id": 89,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You need to update data in Table A based on values in Table B. What is the most common tool?",
    "options": [
      "A subquery in the SET or WHERE clause",
      "A JOIN within the UPDATE statement",
      "Both 0 and 1",
      "UNION"
    ],
    "answer": 2,
    "explanation": "Depending on the database (SQL Server uses JOIN, others use subqueries), both methods are used to perform multi-table updates.",
    "hint": "Cross-table updates."
  },
  {
    "id": 90,
    "difficulty": "hard",
    "category": "cte",
    "question": "When using a CTE, where must the primary query (the one using the CTE) be placed?",
    "options": [
      "Immediately following the CTE definition",
      "In a separate file",
      "Anywhere in the script",
      "Before the WITH keyword"
    ],
    "answer": 0,
    "explanation": "The query consuming the CTE must follow the 'AS (...)' block directly.",
    "hint": "Immediate consumption."
  },
  {
    "id": 91,
    "difficulty": "medium",
    "category": "aggregation",
    "question": "Can you use an alias created in the SELECT clause within the WHERE clause of the same query?",
    "options": [
      "No, because the WHERE clause is evaluated before the SELECT clause",
      "Yes, always",
      "Only if the alias is a number",
      "Only in MySQL"
    ],
    "answer": 0,
    "explanation": "Because of the logical processing order, the WHERE clause doesn't know about aliases created in the SELECT.",
    "hint": "Processing order."
  },
  {
    "id": 92,
    "difficulty": "hard",
    "category": "subqueries",
    "question": "What is an 'Independent Subquery'?",
    "options": [
      "A subquery that can be executed on its own without the outer query",
      "A subquery that has no SELECT",
      "A subquery that is not correlated",
      "Both 0 and 2"
    ],
    "answer": 3,
    "explanation": "Independent (non-correlated) subqueries are evaluated once, and their results are used by the outer query.",
    "hint": "Runs once."
  },
  {
    "id": 93,
    "difficulty": "medium",
    "category": "cte",
    "question": "What happens if you define a CTE but don't use it in the following query?",
    "options": [
      "It runs normally, but the CTE logic is ignored",
      "It slows down the server significantly",
      "The database creates a table anyway",
      "The query fails"
    ],
    "answer": 0,
    "explanation": "The database will generally optimize it out, but it won't cause an error.",
    "hint": "Defined but not used."
  },
  {
    "id": 94,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What is the 'GROUPING()' function used for?",
    "options": [
      "To distinguish between actual NULL values and NULLs created by ROLLUP/CUBE for subtotals",
      "To count the number of groups",
      "To sort groups",
      "To group rows"
    ],
    "answer": 0,
    "explanation": "GROUPING() returns 1 if the row is a subtotal and 0 if it is a regular data row.",
    "hint": "Subtotal detection."
  },
  {
    "id": 95,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which SQL command is used to move data from one table to a new, non-existing table?",
    "options": [
      "UPDATE",
      "SELECT INTO",
      "INSERT INTO",
      "CREATE AS"
    ],
    "answer": 1,
    "explanation": "SELECT INTO (SQL Server) creates a new table and fills it with the results of the query.",
    "hint": "Select and create."
  },
  {
    "id": 96,
    "difficulty": "hard",
    "category": "subqueries",
    "question": "What is the maximum number of subqueries you can nest?",
    "options": [
      "No limit",
      "32 (commonly, but varies by database)",
      "10",
      "Unlimited by hardware"
    ],
    "answer": 1,
    "explanation": "While technically very high, many RDBMS (like SQL Server) have a limit around 32 levels for practical execution.",
    "hint": "Nesting depth."
  },
  {
    "id": 97,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is the result of 'SELECT COUNT(NULL)'?",
    "options": [
      "NULL",
      "Error",
      "0",
      "1"
    ],
    "answer": 2,
    "explanation": "COUNT(expression) only counts non-NULL values. Since the expression is NULL, the count is 0.",
    "hint": "Counting emptiness."
  },
  {
    "id": 98,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How do you use a CTE to update the same table it selects from?",
    "options": [
      "It is impossible",
      "Define the CTE, then immediately use an UPDATE statement that joins the table to the CTE",
      "Update the CTE name directly",
      "Use the WITH keyword inside the UPDATE"
    ],
    "answer": 1,
    "explanation": "This is a common pattern for updating rows based on calculated or aggregated values from the same table.",
    "hint": "Join update to CTE."
  },
  {
    "id": 99,
    "difficulty": "medium",
    "category": "basics",
    "question": "Does a CTE have a schema?",
    "options": [
      "Yes, defined by its column names and data types in the query",
      "No, it is just text",
      "Only if it is recursive",
      "Only in Oracle"
    ],
    "answer": 0,
    "explanation": "Like any result set, a CTE has a temporary schema (columns and types) inferred from its query.",
    "hint": "Structure."
  },
  {
    "id": 100,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What is the logical difference between WHERE and HAVING?",
    "options": [
      "There is no difference",
      "WHERE filters individual rows; HAVING filters grouped rows (aggregates)",
      "HAVING is faster",
      "WHERE is for text; HAVING is for numbers"
    ],
    "answer": 1,
    "explanation": "WHERE happens before data is grouped; HAVING happens after.",
    "hint": "Pre-group vs Post-group."
  },
  {
    "id": 101,
    "difficulty": "hard",
    "category": "window_functions",
    "question": "What is the purpose of the 'OVER' clause in SQL?",
    "options": [
      "To bypass the WHERE clause",
      "To join more than two tables",
      "To end a query",
      "To define a window or set of rows the window function will operate on"
    ],
    "answer": 3,
    "explanation": "The OVER clause is required for window functions and determines how rows are grouped and ordered for the calculation.",
    "hint": "Defines the scope of a function."
  },
  {
    "id": 102,
    "difficulty": "medium",
    "category": "window_functions",
    "question": "What is the difference between RANK() and DENSE_RANK()?",
    "options": [
      "RANK() only works with numbers",
      "RANK() skips numbers in case of a tie; DENSE_RANK() does not",
      "DENSE_RANK() skips numbers; RANK() does not",
      "There is no difference"
    ],
    "answer": 1,
    "explanation": "If two rows are tied for 1st, RANK() gives 1, 1, 3. DENSE_RANK() gives 1, 1, 2.",
    "hint": "Gaps vs No Gaps."
  },
  {
    "id": 103,
    "difficulty": "hard",
    "category": "performance",
    "question": "What does an 'EXPLAIN' or 'EXPLAIN ANALYZE' statement do?",
    "options": [
      "It explains the error messages",
      "It formats the code for better readability",
      "It provides a text description of the table columns",
      "It displays the execution plan chosen by the database optimizer to run a query"
    ],
    "answer": 3,
    "explanation": "Profiling tools like EXPLAIN help identify if a query is using indexes or performing slow full-table scans.",
    "hint": "Execution plan."
  },
  {
    "id": 104,
    "difficulty": "medium",
    "category": "partitioning",
    "question": "What does 'PARTITION BY' do inside a window function?",
    "options": [
      "It physicaly splits the table on the disk",
      "It sorts the entire table",
      "It divides the result set into partitions to which the function is applied independently",
      "It deletes rows based on a condition"
    ],
    "answer": 2,
    "explanation": "Unlike GROUP BY, PARTITION BY allows you to perform calculations across groups without collapsing the individual rows.",
    "hint": "Groups for calculations, but keeps rows."
  },
  {
    "id": 105,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is a 'Full Table Scan'?",
    "options": [
      "A fast way to read data",
      "Cleaning the database memory",
      "A process to back up the database",
      "When the database must read every single row in a table because no suitable index was found"
    ],
    "answer": 3,
    "explanation": "Full scans are usually slow on large tables; performance tuning aims to replace these with index seeks.",
    "hint": "Reading every page."
  },
  {
    "id": 106,
    "difficulty": "medium",
    "category": "window_functions",
    "question": "Which function would you use to find the value of a row immediately preceding the current row?",
    "options": [
      "LEAD()",
      "FIRST_VALUE()",
      "LAG()",
      "PREV()"
    ],
    "answer": 2,
    "explanation": "LAG() accesses data from a previous row in the same result set without a self-join.",
    "hint": "Falling behind."
  },
  {
    "id": 107,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is a 'Covering Index'?",
    "options": [
      "A hidden index",
      "An index that includes all columns required by a query, allowing the DB to avoid reading the actual table",
      "An index that covers all tables in a DB",
      "A primary key index"
    ],
    "answer": 1,
    "explanation": "A covering index allows the optimizer to fulfill the SELECT and WHERE requirements solely from the index leaf nodes.",
    "hint": "All-inclusive index."
  },
  {
    "id": 108,
    "difficulty": "medium",
    "category": "window_functions",
    "question": "What does 'ROW_NUMBER()' return?",
    "options": [
      "A unique sequential integer assigned to rows within a partition",
      "The ID of the row",
      "The row's memory address",
      "The total count of rows"
    ],
    "answer": 0,
    "explanation": "ROW_NUMBER() provides a simple incrementing counter (1, 2, 3...) regardless of ties.",
    "hint": "Sequential counting."
  },
  {
    "id": 109,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'SARGability' in SQL performance tuning?",
    "options": [
      "Sorting all rows by grouping",
      "Search ARGument-ability: Writing queries in a way that allows the optimizer to use indexes efficiently",
      "A security feature",
      "The ability to run queries on a server"
    ],
    "answer": 1,
    "explanation": "Functions on columns (e.g., WHERE YEAR(date) = 2021) usually break SARGability and prevent index usage.",
    "hint": "Index-friendly queries."
  },
  {
    "id": 110,
    "difficulty": "medium",
    "category": "optimization",
    "question": "Why is 'SELECT *' generally discouraged for performance?",
    "options": [
      "It increases I/O overhead and network traffic by fetching unnecessary columns",
      "It locks the table for too long",
      "It causes a syntax error",
      "It disables all indexes"
    ],
    "answer": 0,
    "explanation": "Fetching only the columns you need reduces data transfer and memory usage.",
    "hint": "Fetching too much data."
  },
  {
    "id": 111,
    "difficulty": "hard",
    "category": "window_functions",
    "question": "How do you calculate a 'Running Total' in SQL?",
    "options": [
      "SELECT SUM(Sales) FROM Table",
      "RUNNING_SUM(Sales)",
      "SUM(Sales) GROUP BY Date",
      "SUM(Sales) OVER (ORDER BY Date)"
    ],
    "answer": 3,
    "explanation": "Using SUM() with an ORDER BY clause in the OVER window creates a cumulative sum.",
    "hint": "Sum over ordered rows."
  },
  {
    "id": 112,
    "difficulty": "medium",
    "category": "partitioning",
    "question": "What is 'Horizontal Partitioning'?",
    "options": [
      "Splitting columns into separate tables",
      "Using a wider monitor for SQL",
      "Sorting data horizontally",
      "Splitting rows into separate tables (or physical files) based on a key like Date or Region"
    ],
    "answer": 3,
    "explanation": "Large tables are often partitioned horizontally (Sharding) to improve manageability and performance.",
    "hint": "Row-based splitting."
  },
  {
    "id": 113,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is an 'Index Seek' vs an 'Index Scan'?",
    "options": [
      "A Scan is always faster",
      "A Seek reads the whole table",
      "A Seek navigates the B-Tree to find specific rows; a Scan reads the entire index",
      "They are the same"
    ],
    "answer": 2,
    "explanation": "Index Seeks are highly efficient because they target only the necessary data points.",
    "hint": "Targeted vs Broad search."
  },
  {
    "id": 114,
    "difficulty": "medium",
    "category": "optimization",
    "question": "Which operator is usually faster for checking existence: IN or EXISTS?",
    "options": [
      "IN is always faster",
      "EXISTS is often faster because it stops searching as soon as it finds a match",
      "They are exactly the same in all DBs",
      "Both are slow"
    ],
    "answer": 1,
    "explanation": "While modern optimizers treat them similarly, EXISTS is traditionally better at 'short-circuiting' logic.",
    "hint": "Stop at first match."
  },
  {
    "id": 115,
    "difficulty": "hard",
    "category": "window_functions",
    "question": "What does 'LEAD(Salary, 2)' do?",
    "options": [
      "Multiplies salary by 2",
      "Returns the top 2 salaries",
      "Compares the salary to the manager's",
      "Returns the salary value from the row 2 positions ahead of the current row"
    ],
    "answer": 3,
    "explanation": "The second argument in LEAD/LAG specifies the offset (number of rows to look forward/backward).",
    "hint": "Looking forward."
  },
  {
    "id": 116,
    "difficulty": "medium",
    "category": "performance",
    "question": "What is the purpose of 'Database Statistics'?",
    "options": [
      "To prevent data corruption",
      "To calculate the average row size",
      "To provide the optimizer with metadata about data distribution so it can choose the best plan",
      "To count how many people use the DB"
    ],
    "answer": 2,
    "explanation": "If statistics are outdated, the optimizer might choose a slow execution plan based on incorrect assumptions.",
    "hint": "Metadata for the optimizer."
  },
  {
    "id": 117,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Predicate Pushdown'?",
    "options": [
      "An optimization where filtering (WHERE) is performed as early as possible, often before joining or data transfer",
      "Deleting filters",
      "Pushing a button to run a query",
      "A type of join"
    ],
    "answer": 0,
    "explanation": "Filtering early reduces the volume of data that needs to be processed in subsequent steps (like joins).",
    "hint": "Filter early."
  },
  {
    "id": 118,
    "difficulty": "medium",
    "category": "window_functions",
    "question": "What is 'NTILE(4)' used for?",
    "options": [
      "To join 4 tables",
      "To select 4 rows",
      "To multiply values by 4",
      "To divide a result set into four roughly equal groups (Quartiles)"
    ],
    "answer": 3,
    "explanation": "NTILE distributes rows into a specified number of buckets.",
    "hint": "Grouping into buckets."
  },
  {
    "id": 119,
    "difficulty": "hard",
    "category": "performance",
    "question": "Which type of index is physically stored in the same order as the table data?",
    "options": [
      "Non-Clustered Index",
      "Bitmap Index",
      "Clustered Index",
      "Unique Index"
    ],
    "answer": 2,
    "explanation": "A table can have only one Clustered Index because the data rows themselves can only be sorted in one order.",
    "hint": "Physical order."
  },
  {
    "id": 120,
    "difficulty": "medium",
    "category": "optimization",
    "question": "What is 'Query Refactoring'?",
    "options": [
      "Deleting the query",
      "Rewriting a query to improve performance or readability without changing the result set",
      "Moving the query to a new server",
      "Changing the database password"
    ],
    "answer": 1,
    "explanation": "Common refactors include replacing subqueries with joins or avoiding unnecessary distinct operations.",
    "hint": "Rewrite for speed."
  },
  {
    "id": 121,
    "difficulty": "hard",
    "category": "window_functions",
    "question": "What is the default 'Frame Clause' in a window function when ORDER BY is used but no frame is specified?",
    "options": [
      "ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING",
      "There is no default",
      "RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW",
      "ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING"
    ],
    "answer": 2,
    "explanation": "This is why SUM() with ORDER BY creates a running total—it defaults to including all rows up to the current one.",
    "hint": "Start to Current."
  },
  {
    "id": 122,
    "difficulty": "medium",
    "category": "performance",
    "question": "What is a 'Deadlock' in a database?",
    "options": [
      "When two or more transactions are waiting for each other to release locks, causing a permanent freeze",
      "A failed login attempt",
      "A very fast transaction",
      "When the database is deleted"
    ],
    "answer": 0,
    "explanation": "Databases usually have a deadlock detector that kills one transaction to let the others proceed.",
    "hint": "Mutual waiting."
  },
  {
    "id": 123,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is the benefit of 'Parameter Sniffing'?",
    "options": [
      "It speeds up network traffic",
      "It allows users to see passwords",
      "It helps find bugs in code",
      "The optimizer creates an execution plan tailored to the specific parameter values provided"
    ],
    "answer": 3,
    "explanation": "While usually helpful, it can cause 'Parameter Sniffing issues' if a plan for a 'rare' value is used for a 'common' value.",
    "hint": "Tailored plans."
  },
  {
    "id": 124,
    "difficulty": "medium",
    "category": "partitioning",
    "question": "What is 'Vertical Partitioning'?",
    "options": [
      "Splitting a table into multiple tables with fewer columns (e.g., moving large Blobs to a separate table)",
      "Sorting by column name",
      "Deleting columns",
      "Splitting rows"
    ],
    "answer": 0,
    "explanation": "Vertical partitioning is often used to put frequently accessed columns in one table and rarely accessed large data in another.",
    "hint": "Column-based splitting."
  },
  {
    "id": 125,
    "difficulty": "hard",
    "category": "window_functions",
    "question": "Which function returns the relative rank of a row as a percentage (0 to 1)?",
    "options": [
      "PERCENTILE_CONT()",
      "CUME_DIST()",
      "RANK_PCT()",
      "PERCENT_RANK()"
    ],
    "answer": 3,
    "explanation": "PERCENT_RANK() calculates the percentile rank of a row within a partition.",
    "hint": "Rank as percentage."
  },
  {
    "id": 126,
    "difficulty": "medium",
    "category": "performance",
    "question": "What is a 'Heap' table?",
    "options": [
      "A very fast table",
      "A table with too much data",
      "A table used only for numbers",
      "A table without a clustered index where data is stored in no particular order"
    ],
    "answer": 3,
    "explanation": "Finding data in a heap usually requires a full scan unless non-clustered indexes are present.",
    "hint": "Unordered storage."
  },
  {
    "id": 127,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Cardinality' in the context of SQL optimization?",
    "options": [
      "The size of the database",
      "The number of unique values in a column relative to the total number of rows",
      "The number of tables in a query",
      "The speed of the processor"
    ],
    "answer": 1,
    "explanation": "High cardinality (like an ID) makes for great indexes; low cardinality (like Gender) often makes for poor indexes.",
    "hint": "Uniqueness ratio."
  },
  {
    "id": 128,
    "difficulty": "medium",
    "category": "window_functions",
    "question": "Can you use window functions in a WHERE clause?",
    "options": [
      "Only if they are simple",
      "Yes",
      "No, you must wrap the query in a CTE or subquery to filter by window results",
      "Only in MySQL"
    ],
    "answer": 2,
    "explanation": "Window functions are calculated after the WHERE clause, so they aren't available for filtering directly.",
    "hint": "Order of operations."
  },
  {
    "id": 129,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'I/O Bound' vs 'CPU Bound'?",
    "options": [
      "Types of databases",
      "I/O Bound means waiting for disk/network; CPU Bound means waiting for processing/calculation",
      "I/O is always faster",
      "CPU is always faster"
    ],
    "answer": 1,
    "explanation": "Slow queries are often I/O bound due to reading large amounts of data from disk.",
    "hint": "Hardware bottlenecks."
  },
  {
    "id": 130,
    "difficulty": "medium",
    "category": "optimization",
    "question": "What does the 'TOP' (or LIMIT) clause do for performance?",
    "options": [
      "It has no effect",
      "It slows down the query",
      "It deletes the remaining rows",
      "It allows the optimizer to 'short-circuit' and stop processing once the threshold is met"
    ],
    "answer": 3,
    "explanation": "Limiting the result set can significantly reduce the amount of data the engine needs to sort or process.",
    "hint": "Early exit."
  },
  {
    "id": 131,
    "difficulty": "hard",
    "category": "window_functions",
    "question": "What is the result of 'FIRST_VALUE(col) OVER (PARTITION BY group ORDER BY val)'?",
    "options": [
      "The first column of the table",
      "The average value",
      "The maximum value in the group",
      "The value of 'col' from the first row in the sorted partition"
    ],
    "answer": 3,
    "explanation": "It extracts a specific value from the beginning of a window frame.",
    "hint": "Start of the window."
  },
  {
    "id": 132,
    "difficulty": "medium",
    "category": "performance",
    "question": "What is a 'Fragmented Index'?",
    "options": [
      "An index where the logical order of pages does not match the physical order on disk, slowing down scans",
      "An index that is broken and unusable",
      "A deleted index",
      "A very small index"
    ],
    "answer": 0,
    "explanation": "Frequent inserts and deletes cause fragmentation; indexes should be rebuilt or reorganized regularly.",
    "hint": "Disorganized pages."
  },
  {
    "id": 133,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is a 'Hash Join'?",
    "options": [
      "A very slow join",
      "A join used for security",
      "An algorithm where the DB creates a hash table of the smaller input to quickly find matches in the larger input",
      "A join using the # symbol"
    ],
    "answer": 2,
    "explanation": "Hash joins are effective for large, unsorted data sets.",
    "hint": "In-memory join table."
  },
  {
    "id": 134,
    "difficulty": "medium",
    "category": "partitioning",
    "question": "What is 'Partition Pruning'?",
    "options": [
      "Sorting partitions",
      "Deleting old partitions",
      "An optimization where the engine skips reading partitions that cannot possibly contain the requested data",
      "Merging partitions"
    ],
    "answer": 2,
    "explanation": "If you query by Date and the table is partitioned by Date, the engine only reads relevant files.",
    "hint": "Skipping irrelevant data."
  },
  {
    "id": 135,
    "difficulty": "hard",
    "category": "window_functions",
    "question": "Which window function calculates the cumulative distribution of a value?",
    "options": [
      "PERCENT_DIST()",
      "CUME_DIST()",
      "TOTAL_PCT()",
      "RANK_DIST()"
    ],
    "answer": 1,
    "explanation": "CUME_DIST() returns the number of rows with values less than or equal to the current row divided by the total count.",
    "hint": "Cumulative Distribution."
  },
  {
    "id": 136,
    "difficulty": "medium",
    "category": "performance",
    "question": "What is 'Lock Escalation'?",
    "options": [
      "Unlocking a table",
      "Moving a lock to a different table",
      "When the database converts many fine-grained locks (like row locks) into a single coarse-grained lock (like a table lock)",
      "Increasing the user's priority"
    ],
    "answer": 2,
    "explanation": "Escalation reduces memory pressure from millions of locks but increases the chance of blocking other users.",
    "hint": "Small locks to big lock."
  },
  {
    "id": 137,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is the difference between a 'B-Tree' index and a 'Bitmap' index?",
    "options": [
      "B-Trees are for high cardinality; Bitmaps are for low cardinality (like 'Yes/No' columns)",
      "Bitmaps are only for images",
      "B-Trees are only for text",
      "No difference"
    ],
    "answer": 0,
    "explanation": "Bitmaps use bit arrays and are extremely fast for queries combining multiple low-cardinality criteria.",
    "hint": "Trees vs Bits."
  },
  {
    "id": 138,
    "difficulty": "medium",
    "category": "window_functions",
    "question": "In 'ROWS BETWEEN 2 PRECEDING AND CURRENT ROW', how many rows are in the frame?",
    "options": [
      "1",
      "3",
      "2",
      "Variable"
    ],
    "answer": 1,
    "explanation": "The frame includes the two rows before plus the current row (Total: 3).",
    "hint": "Count them: -2, -1, 0."
  },
  {
    "id": 139,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Wait Statistics'?",
    "options": [
      "Counting how many users are waiting",
      "The time it takes to log in",
      "The average query time",
      "Information about what the database engine is waiting for (e.g., Disk I/O, CPU, Network)"
    ],
    "answer": 3,
    "explanation": "Wait stats are the 'gold standard' for finding the root cause of slow performance.",
    "hint": "Identifying bottlenecks."
  },
  {
    "id": 140,
    "difficulty": "medium",
    "category": "optimization",
    "question": "What is a 'Filtered Index'?",
    "options": [
      "A temporary index",
      "An index that only includes rows that meet a specific predicate (e.g., WHERE Status = 'Active')",
      "An index on a view",
      "An index used to filter data"
    ],
    "answer": 1,
    "explanation": "Filtered indexes are smaller and faster to maintain because they only track a subset of the data.",
    "hint": "Index on a subset."
  },
  {
    "id": 141,
    "difficulty": "hard",
    "category": "window_functions",
    "question": "What is 'Window Spooling' in an execution plan?",
    "options": [
      "A fast window calculation",
      "Deleting window data",
      "An operator that buffers rows into memory or disk to perform window calculations",
      "A type of join"
    ],
    "answer": 2,
    "explanation": "Excessive spooling can indicate that the window frame is too large for memory.",
    "hint": "Buffering for windows."
  },
  {
    "id": 142,
    "difficulty": "medium",
    "category": "performance",
    "question": "How does a 'Unique Index' help performance?",
    "options": [
      "It allows for faster math",
      "It doesn't; it's only for data integrity",
      "It makes the data smaller",
      "It allows the optimizer to stop searching as soon as a single match is found"
    ],
    "answer": 3,
    "explanation": "Knowledge of uniqueness allows for optimized search algorithms.",
    "hint": "Stop at 1 match."
  },
  {
    "id": 143,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is 'Denormalization' and when is it used for performance?",
    "options": [
      "Organizing data by ID",
      "Splitting tables into many small pieces",
      "Deleting tables",
      "Intentionally adding redundant data to reduce the number of joins needed for queries"
    ],
    "answer": 3,
    "explanation": "Denormalization speeds up reads at the cost of slower writes and increased storage space.",
    "hint": "Sacrificing purity for speed."
  },
  {
    "id": 144,
    "difficulty": "medium",
    "category": "window_functions",
    "question": "What is 'LAST_VALUE(col)' often used with to ensure it works correctly?",
    "options": [
      "An index",
      "A frame clause (e.g., RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)",
      "A WHERE clause",
      "A GROUP BY clause"
    ],
    "answer": 1,
    "explanation": "Because the default frame ends at the current row, LAST_VALUE will just return the current row unless the frame is expanded.",
    "hint": "Expanding the frame."
  },
  {
    "id": 145,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Parallelism' in SQL execution?",
    "options": [
      "Using multiple CPU cores to execute a single query faster",
      "Using two servers",
      "Copying the database",
      "Running two different queries at once"
    ],
    "answer": 0,
    "explanation": "Queries with high 'cost' are often split into threads across multiple processors.",
    "hint": "Multi-core execution."
  },
  {
    "id": 146,
    "difficulty": "medium",
    "category": "optimization",
    "question": "What is 'Deferred Loading' or 'Lazy Loading'?",
    "options": [
      "Loading data only at night",
      "Loading data slowly",
      "Delaying the retrieval of large data (like Blobs) until they are actually needed",
      "Not loading data at all"
    ],
    "answer": 2,
    "explanation": "This keeps the main query result sets small and fast.",
    "hint": "Load later."
  },
  {
    "id": 147,
    "difficulty": "hard",
    "category": "window_functions",
    "question": "What does 'RANGE' (vs ROWS) do in a frame clause?",
    "options": [
      "It counts rows",
      "It is faster than ROWS",
      "It is for dates only",
      "It treats rows with the same ORDER BY values as a single peer group"
    ],
    "answer": 3,
    "explanation": "RANGE is based on logical values, whereas ROWS is based on physical row counts.",
    "hint": "Value-based vs Count-based."
  },
  {
    "id": 148,
    "difficulty": "medium",
    "category": "performance",
    "question": "What is 'Buffer Cache Hit Ratio'?",
    "options": [
      "The size of the hard drive",
      "The number of users logged in",
      "The percentage of data requests satisfied from memory rather than disk",
      "The speed of the network"
    ],
    "answer": 2,
    "explanation": "A high ratio (e.g., 99%) indicates that the database has enough RAM for its active data set.",
    "hint": "Memory efficiency."
  },
  {
    "id": 149,
    "difficulty": "hard",
    "category": "optimization",
    "question": "What is a 'Nested Loop Join'?",
    "options": [
      "A join between 3 tables",
      "A join that never ends",
      "A fast join for large tables",
      "For each row in the outer table, the engine searches for matching rows in the inner table"
    ],
    "answer": 3,
    "explanation": "Nested loops are very fast for small data sets or when the inner table is indexed on the join key.",
    "hint": "Loop within a loop."
  },
  {
    "id": 150,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which profiling tool is commonly used in MySQL?",
    "options": [
      "Query Store",
      "SQL Profiler",
      "SHOW PROFILE / EXPLAIN",
      "Performance Monitor"
    ],
    "answer": 2,
    "explanation": "MySQL uses EXPLAIN for plan analysis and SHOW PROFILE for execution timing.",
    "hint": "MySQL profiling."
  },
  {
    "id": 151,
    "difficulty": "hard",
    "category": "views",
    "question": "What is the primary difference between a Standard View and a Materialized View?",
    "options": [
      "Materialized Views physically store the result set on disk; Standard Views are virtual and run the query every time",
      "Standard Views are faster for all queries",
      "Materialized Views do not support joins",
      "Standard Views can only be used once"
    ],
    "answer": 0,
    "explanation": "Because Materialized Views store data, they provide much faster read performance for complex aggregations at the cost of storage and refresh maintenance.",
    "hint": "Virtual vs Physical storage."
  },
  {
    "id": 152,
    "difficulty": "medium",
    "category": "joins",
    "question": "In a 'Self Join', how do you distinguish between the two instances of the same table?",
    "options": [
      "The database does it automatically",
      "By using table aliases (e.g., T1 and T2)",
      "You cannot join a table to itself",
      "By using the table name twice"
    ],
    "answer": 1,
    "explanation": "Aliases are mandatory in a self-join to clarify which instance of the table a column belongs to.",
    "hint": "Giving a table a nickname."
  },
  {
    "id": 153,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'ACID' compliance in database transactions?",
    "options": [
      "Access, Control, Integration, Delivery",
      "Atomicity, Consistency, Isolation, Durability",
      "A type of data encryption",
      "A database cleaning process"
    ],
    "answer": 1,
    "explanation": "ACID properties ensure that database transactions are processed reliably and maintain data integrity even in the event of errors or crashes.",
    "hint": "The gold standard for transactions."
  },
  {
    "id": 154,
    "difficulty": "medium",
    "category": "indexes",
    "question": "What is a 'Composite Index'?",
    "options": [
      "An index made of multiple tables",
      "An index that includes two or more columns from the same table",
      "An index that is both clustered and non-clustered",
      "An index that automatically deletes itself"
    ],
    "answer": 1,
    "explanation": "Composite indexes are useful for queries that filter or sort by multiple specific columns together.",
    "hint": "Multi-column index."
  },
  {
    "id": 155,
    "difficulty": "hard",
    "category": "views",
    "question": "When should you use a 'Materialized View Refresh'?",
    "options": [
      "When the underlying base table data changes and you need the view to reflect the latest state",
      "Never; they update automatically in all DBs",
      "Only when the database restarts",
      "Every time a user logs in"
    ],
    "answer": 0,
    "explanation": "Unlike standard views, materialized views must be refreshed (manually or on a schedule) to stay synchronized with source data.",
    "hint": "Syncing physical data."
  },
  {
    "id": 156,
    "difficulty": "medium",
    "category": "joins",
    "question": "What is the result of a 'FULL OUTER JOIN' if there are no matches between the tables?",
    "options": [
      "An empty result set",
      "All rows from both tables, with NULLs in the columns where no match exists",
      "An error",
      "Only the rows from the left table"
    ],
    "answer": 1,
    "explanation": "A Full Outer Join is the union of a Left and Right join, preserving all data from both sides.",
    "hint": "Total inclusion."
  },
  {
    "id": 157,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What does the 'Isolation' level 'Read Committed' prevent?",
    "options": [
      "Phantom Reads",
      "Non-repeatable Reads",
      "Dirty Reads",
      "Deadlocks"
    ],
    "answer": 2,
    "explanation": "Read Committed ensures that a transaction only sees data that has already been committed by other transactions.",
    "hint": "Prevents reading uncommitted changes."
  },
  {
    "id": 158,
    "difficulty": "medium",
    "category": "performance",
    "question": "Which index type is best for a column with a very low number of unique values (e.g., 'Gender')?",
    "options": [
      "Clustered Index",
      "Bitmap Index",
      "B-Tree Index",
      "Unique Index"
    ],
    "answer": 1,
    "explanation": "Bitmap indexes are highly efficient for low-cardinality columns and allow for fast boolean operations.",
    "hint": "Low cardinality specialist."
  },
  {
    "id": 159,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is the risk of having too many indexes on a single table?",
    "options": [
      "The database will crash",
      "INSERT, UPDATE, and DELETE operations become slower because every index must be updated",
      "SELECT queries become slower",
      "The table becomes read-only"
    ],
    "answer": 1,
    "explanation": "While indexes speed up reads, they impose a 'write tax' because the engine must maintain every index during modifications.",
    "hint": "The cost of writing."
  },
  {
    "id": 160,
    "difficulty": "medium",
    "category": "joins",
    "question": "Which join is equivalent to a comma in the FROM clause: 'SELECT * FROM TableA, TableB'?",
    "options": [
      "NATURAL JOIN",
      "INNER JOIN",
      "CROSS JOIN",
      "LEFT JOIN"
    ],
    "answer": 2,
    "explanation": "Listing tables separated by commas without a JOIN condition creates a Cartesian Product, which is a CROSS JOIN.",
    "hint": "The 'old school' cross join."
  },
  {
    "id": 161,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Database Normalization'?",
    "options": [
      "A way to speed up SELECT * queries",
      "The process of organizing data to reduce redundancy and improve data integrity",
      "The process of backing up the database",
      "The process of making all data types the same"
    ],
    "answer": 1,
    "explanation": "Normalization involves dividing large tables into smaller ones and defining relationships between them.",
    "hint": "Eliminating redundancy."
  },
  {
    "id": 162,
    "difficulty": "medium",
    "category": "views",
    "question": "Can you perform an UPDATE on a Standard View?",
    "options": [
      "Only if it is a Materialized View",
      "Only in SQL Server",
      "No, views are read-only",
      "Yes, if the view is 'Updatable' (usually references only one table and contains no aggregations)"
    ],
    "answer": 3,
    "explanation": "Simple views that map directly to table rows can often be used to update the underlying table data.",
    "hint": "Updatable views."
  },
  {
    "id": 163,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Index Fragmentation'?",
    "options": [
      "When an index has too many columns",
      "When an index is deleted",
      "When an index is spread across multiple servers",
      "When the physical order of index pages no longer matches the logical order, leading to poor I/O performance"
    ],
    "answer": 3,
    "explanation": "Fragmentation occurs as a result of data modifications (INSERT/DELETE) and can be fixed by rebuilding the index.",
    "hint": "Scattered data pages."
  },
  {
    "id": 164,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you check for rows in Table A that do not have a corresponding match in Table B?",
    "options": [
      "FULL OUTER JOIN",
      "INNER JOIN",
      "CROSS JOIN",
      "LEFT JOIN where the Table B key IS NULL"
    ],
    "answer": 3,
    "explanation": "A LEFT JOIN combined with a NULL check effectively finds the 'orphans' or missing records in the second table.",
    "hint": "The 'anti-join' pattern."
  },
  {
    "id": 165,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the 'Durability' aspect of ACID?",
    "options": [
      "The database is fast",
      "The data cannot be deleted",
      "Once a transaction is committed, it remains committed even in the case of a system failure (e.g., power outage)",
      "Only one user can access the data at a time"
    ],
    "answer": 2,
    "explanation": "Durability is usually achieved through transaction logs that are written to non-volatile storage before the commit completes.",
    "hint": "Permanent survival."
  },
  {
    "id": 166,
    "difficulty": "medium",
    "category": "indexes",
    "question": "What is a 'Non-Clustered Index'?",
    "options": [
      "An index on a temporary table",
      "A separate structure from the data rows that contains pointers to the actual data",
      "An index that is created automatically",
      "An index that doesn't work"
    ],
    "answer": 1,
    "explanation": "Unlike clustered indexes, non-clustered indexes do not change the physical order of the table data.",
    "hint": "Like an index at the back of a book."
  },
  {
    "id": 167,
    "difficulty": "hard",
    "category": "views",
    "question": "What is 'Query Rewrite' in the context of Materialized Views?",
    "options": [
      "The optimizer automatically changing a user's query to use a Materialized View instead of the base tables for speed",
      "Changing SQL into Java code",
      "Deleting a query and starting over",
      "Manually editing a query"
    ],
    "answer": 0,
    "explanation": "Query Rewrite is a powerful feature where the database 'knows' a view already has the answer and uses it transparently.",
    "hint": "Automatic optimization to a view."
  },
  {
    "id": 168,
    "difficulty": "medium",
    "category": "joins",
    "question": "What is a 'Natural Join'?",
    "options": [
      "A join on the Primary Key only",
      "A join that automatically matches columns with the same name across tables",
      "A join that doesn't use a WHERE clause",
      "A join using the '+' symbol"
    ],
    "answer": 1,
    "explanation": "Natural joins are convenient but dangerous if tables are later modified with new columns sharing the same names.",
    "hint": "Implicit matching."
  },
  {
    "id": 169,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Fill Factor' in index tuning?",
    "options": [
      "The amount of data in a table",
      "The percentage of space on each leaf-level page to be filled with data, leaving room for future growth",
      "The speed of the index",
      "The number of indexes on a table"
    ],
    "answer": 1,
    "explanation": "Setting a lower fill factor can reduce 'page splits' by leaving empty space for new rows.",
    "hint": "Room for expansion."
  },
  {
    "id": 170,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is 'First Normal Form' (1NF)?",
    "options": [
      "Table has a foreign key",
      "Data is stored in a single table",
      "Table has no duplicate rows and every column contains atomic (indivisible) values",
      "All data is capitalized"
    ],
    "answer": 2,
    "explanation": "1NF prohibits 'repeating groups' or arrays within a single column.",
    "hint": "Atomic values."
  },
  {
    "id": 171,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How do you resolve a 'Non-SARGable' query like: WHERE YEAR(OrderDate) = 2023?",
    "options": [
      "Use an index on OrderDate",
      "There is no way to optimize it",
      "Rewrite it to: WHERE OrderDate >= '2023-01-01' AND OrderDate < '2024-01-01'",
      "Use a subquery"
    ],
    "answer": 2,
    "explanation": "Applying a function to a column prevents the engine from using an index on that column. Range checks are index-friendly.",
    "hint": "Avoid functions on columns."
  },
  {
    "id": 172,
    "difficulty": "medium",
    "category": "indexes",
    "question": "Which constraint automatically creates a Unique Index?",
    "options": [
      "NOT NULL",
      "DEFAULT",
      "PRIMARY KEY",
      "CHECK"
    ],
    "answer": 2,
    "explanation": "Because Primary Keys must be unique, the database engine creates a unique index to enforce this requirement.",
    "hint": "Identifier constraint."
  },
  {
    "id": 173,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Third Normal Form' (3NF)?",
    "options": [
      "It is fully denormalized",
      "It has no primary keys",
      "It has three tables",
      "It is in 2NF and has no transitive functional dependencies (non-key columns don't depend on other non-key columns)"
    ],
    "answer": 3,
    "explanation": "3NF ensures that every non-key column depends only on the primary key, and nothing else.",
    "hint": "The key, the whole key, and nothing but the key."
  },
  {
    "id": 174,
    "difficulty": "medium",
    "category": "views",
    "question": "What is the 'WITH CHECK OPTION' in a view?",
    "options": [
      "It encrypts the view",
      "It checks for syntax errors",
      "It prevents updates to the view that would make the row disappear from the view's criteria",
      "It makes the view read-only"
    ],
    "answer": 2,
    "explanation": "It ensures that any data inserted or updated through the view stays within the scope defined by the view's WHERE clause.",
    "hint": "Constraint on view edits."
  },
  {
    "id": 175,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is the 'Cardinality' of a column containing Social Security Numbers?",
    "options": [
      "High",
      "Low",
      "Medium",
      "Zero"
    ],
    "answer": 0,
    "explanation": "High cardinality means most values are unique, which is ideal for indexing.",
    "hint": "Uniqueness level."
  },
  {
    "id": 176,
    "difficulty": "medium",
    "category": "joins",
    "question": "What is a 'Theta Join'?",
    "options": [
      "A join that uses comparison operators other than equality (e.g., <, >, <=, >=)",
      "A join between two different databases",
      "A join using the Greek letter Theta",
      "A join that ignores NULLs"
    ],
    "answer": 0,
    "explanation": "While most joins are 'Equi-joins' (=), a Theta join uses any arbitrary logical relationship.",
    "hint": "Non-equal joins."
  },
  {
    "id": 177,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is a 'Database Deadlock'?",
    "options": [
      "A deleted primary key",
      "A database that is no longer used",
      "A situation where two transactions wait for each other to release locks, preventing either from continuing",
      "A slow network connection"
    ],
    "answer": 2,
    "explanation": "The database management system must intervene and roll back one of the transactions to break the loop.",
    "hint": "Mutual blockage."
  },
  {
    "id": 178,
    "difficulty": "medium",
    "category": "indexes",
    "question": "What is an 'Index Include' (Included Columns)?",
    "options": [
      "A way to join tables",
      "Adding more rows to an index",
      "Adding non-key columns to the leaf level of a non-clustered index to make it a covering index",
      "A primary key feature"
    ],
    "answer": 2,
    "explanation": "Included columns are not part of the search criteria but are stored with the index to avoid extra table lookups (Key Lookups).",
    "hint": "Covering queries without extra keys."
  },
  {
    "id": 179,
    "difficulty": "hard",
    "category": "performance",
    "question": "What does 'Statistics Update' do for a database?",
    "options": [
      "Updates the records in a table",
      "Clears the cache",
      "Counts the number of users",
      "Recalculates the data distribution to help the optimizer choose the most efficient execution plan"
    ],
    "answer": 3,
    "explanation": "Outdated statistics lead to poor query plans and slow performance.",
    "hint": "Optimizer intelligence."
  },
  {
    "id": 180,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which operator would you use to find customers who are in 'London' OR 'Paris'?",
    "options": [
      "IN",
      "EXISTS",
      "LIKE",
      "BETWEEN"
    ],
    "answer": 0,
    "explanation": "IN is the most efficient way to check a value against a set of discrete possibilities.",
    "hint": "Check against a list."
  },
  {
    "id": 181,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Referential Integrity'?",
    "options": [
      "A security protocol",
      "The speed of the database",
      "The ability to refer to columns by name",
      "A property ensuring that relationships between tables remain consistent, usually via Foreign Keys"
    ],
    "answer": 3,
    "explanation": "It prevents 'orphaned' records, such as an Order referring to a Customer ID that does not exist.",
    "hint": "Consistency between tables."
  },
  {
    "id": 182,
    "difficulty": "medium",
    "category": "views",
    "question": "What is an 'Indexed View' (SQL Server term)?",
    "options": [
      "A view that only selects indexes",
      "A view with an index, making it effectively a Materialized View",
      "A view that is faster to create",
      "A view that is hidden"
    ],
    "answer": 1,
    "explanation": "In SQL Server, creating a unique clustered index on a view materializes it.",
    "hint": "Persistent view data."
  },
  {
    "id": 183,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Parameter Sniffing'?",
    "options": [
      "When the engine creates an execution plan based on the parameters passed during the first compilation",
      "A type of data compression",
      "Searching for text in a database",
      "A security breach"
    ],
    "answer": 0,
    "explanation": "It can be good, but it becomes a problem if the first set of parameters isn't representative of typical usage.",
    "hint": "Plan cached for first value."
  },
  {
    "id": 184,
    "difficulty": "medium",
    "category": "joins",
    "question": "What happens in a 'Left Join' if the right table has multiple matches for one row in the left table?",
    "options": [
      "It throws an error",
      "It returns only the first match",
      "It returns NULL",
      "The left row is duplicated for every match in the right table"
    ],
    "answer": 3,
    "explanation": "Joins can increase the row count of your result set if there is a one-to-many relationship.",
    "hint": "Row multiplication."
  },
  {
    "id": 185,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Vertical Scaling' (Scaling Up)?",
    "options": [
      "Writing longer queries",
      "Splitting a table into columns",
      "Adding more resources (CPU, RAM, SSD) to a single existing server",
      "Adding more servers"
    ],
    "answer": 2,
    "explanation": "Vertical scaling is limited by the maximum capacity of a single machine.",
    "hint": "Bigger hardware."
  },
  {
    "id": 186,
    "difficulty": "medium",
    "category": "indexes",
    "question": "What is a 'Filtered Index'?",
    "options": [
      "A temporary index",
      "An index that only includes a subset of rows based on a WHERE clause",
      "An index on a calculated column",
      "An index used to filter data"
    ],
    "answer": 1,
    "explanation": "Filtered indexes save space and reduce maintenance costs by only indexing 'relevant' rows (e.g., only unpaid invoices).",
    "hint": "Index on a subset."
  },
  {
    "id": 187,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Execution Plan Recompilation'?",
    "options": [
      "When the engine decides to throw away a cached plan and create a new one due to data changes",
      "Restarting the server",
      "Deleting the history",
      "A syntax error"
    ],
    "answer": 0,
    "explanation": "Recompilation ensures the plan is optimal for the current data distribution, but frequent recompiles can waste CPU.",
    "hint": "Refreshing the strategy."
  },
  {
    "id": 188,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you select the top 10 rows in Oracle?",
    "options": [
      "FIRST 10",
      "SELECT TOP 10 *",
      "LIMIT 10",
      "SELECT * FROM ... FETCH FIRST 10 ROWS ONLY"
    ],
    "answer": 3,
    "explanation": "Modern Oracle versions use the FETCH FIRST syntax, though older versions used ROWNUM.",
    "hint": "ANSI Standard fetch."
  },
  {
    "id": 189,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Horizontal Scaling' (Scaling Out)?",
    "options": [
      "Adding more RAM",
      "Adding more indexes",
      "Adding more machines to a system (e.g., using a distributed database cluster)",
      "Making tables wider"
    ],
    "answer": 2,
    "explanation": "Horizontal scaling allows for nearly infinite growth by spreading data across many servers.",
    "hint": "More machines."
  },
  {
    "id": 190,
    "difficulty": "medium",
    "category": "indexes",
    "question": "What is 'Index Intersection'?",
    "options": [
      "When the optimizer uses multiple indexes to satisfy a query by combining their results",
      "When two indexes share a column",
      "A broken index",
      "A join between indexes"
    ],
    "answer": 0,
    "explanation": "The database can scan two different indexes and 'intersect' the resulting pointers to find the rows.",
    "hint": "Combining two indexes."
  },
  {
    "id": 191,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is a 'Key Lookup' (or Bookmark Lookup)?",
    "options": [
      "When a non-clustered index doesn't have all the columns, the engine must go to the main table to get them",
      "Using a primary key",
      "A fast search",
      "Finding a key in a table"
    ],
    "answer": 0,
    "explanation": "Key lookups can be expensive in large loops; they are resolved by creating a 'covering index'.",
    "hint": "Going back to the table."
  },
  {
    "id": 192,
    "difficulty": "medium",
    "category": "joins",
    "question": "Which join returns all rows from the right table and matching rows from the left?",
    "options": [
      "RIGHT JOIN",
      "LEFT JOIN",
      "INNER JOIN",
      "FULL JOIN"
    ],
    "answer": 0,
    "explanation": "A Right Join is the mirror image of a Left Join.",
    "hint": "Preserve the right side."
  },
  {
    "id": 193,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Database Sharding'?",
    "options": [
      "Indexing a table",
      "A type of horizontal partitioning where data is spread across multiple physical database instances",
      "Backing up data",
      "Deleting data"
    ],
    "answer": 1,
    "explanation": "Sharding is used to scale extremely large applications by ensuring no single server holds the entire dataset.",
    "hint": "Breaking the database into pieces."
  },
  {
    "id": 194,
    "difficulty": "medium",
    "category": "views",
    "question": "Why would you use a View for security?",
    "options": [
      "Views don't require passwords",
      "To grant users access to a subset of columns without giving them access to the entire base table",
      "Views are hidden from hackers",
      "Views are encrypted"
    ],
    "answer": 1,
    "explanation": "Views can hide sensitive information (like salary or SSN) from unauthorized users.",
    "hint": "Filtering columns for users."
  },
  {
    "id": 195,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is a 'Wait Type' in SQL Server?",
    "options": [
      "The time a user waits for a query",
      "A slow login",
      "A specific category indicating why a thread is waiting (e.g., PAGEIOLATCH for disk, SOS_SCHEDULER_YIELD for CPU)",
      "A type of database error"
    ],
    "answer": 2,
    "explanation": "Analyzing wait types is crucial for identifying hardware or configuration bottlenecks.",
    "hint": "The reason for the delay."
  },
  {
    "id": 196,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you find the number of unique cities in a 'Customers' table?",
    "options": [
      "SUM(City)",
      "DISTINCT COUNT(City)",
      "COUNT(City)",
      "COUNT(DISTINCT City)"
    ],
    "answer": 3,
    "explanation": "COUNT(DISTINCT ...) filters the values to unique ones before counting.",
    "hint": "Unique count."
  },
  {
    "id": 197,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the 'Isolation' property of ACID?",
    "options": [
      "Keeping the data away from the public",
      "Ensuring that concurrent transactions do not interfere with each other",
      "Running the database on its own server",
      "Using only one table at a time"
    ],
    "answer": 1,
    "explanation": "Isolation determines how and when changes made by one operation become visible to others.",
    "hint": "Transaction privacy."
  },
  {
    "id": 198,
    "difficulty": "medium",
    "category": "indexes",
    "question": "What is 'Index Selectivity'?",
    "options": [
      "The number of indexes on a table",
      "The ability to select which index to use",
      "A fast index",
      "A measure of how effectively an index filters data (Unique values / Total rows)"
    ],
    "answer": 3,
    "explanation": "High selectivity means the index narrows down the search to very few rows, making it efficient.",
    "hint": "Filtering efficiency."
  },
  {
    "id": 199,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Database Profiling'?",
    "options": [
      "Deleting old data",
      "Designing a database",
      "Creating a user profile",
      "The process of recording and analyzing query performance to identify bottlenecks"
    ],
    "answer": 3,
    "explanation": "Tools like SQL Profiler or Extended Events are used to monitor real-time database activity.",
    "hint": "Performance monitoring."
  },
  {
    "id": 200,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which clause is used to delete a table and all its data?",
    "options": [
      "REMOVE TABLE",
      "TRUNCATE TABLE",
      "DROP TABLE",
      "DELETE TABLE"
    ],
    "answer": 2,
    "explanation": "DROP TABLE is a DDL command that removes the entire object from the database.",
    "hint": "Goodbye table."
  },
  {
    "id": 201,
    "difficulty": "medium",
    "category": "programmability",
    "question": "What is a Stored Procedure?",
    "options": [
      "A type of index",
      "A prepared SQL code that you can save and reuse over and over again",
      "A table that stores data permanently",
      "A database backup file"
    ],
    "answer": 1,
    "explanation": "Stored procedures allow for modular programming, better security, and reduced network traffic.",
    "hint": "Reusable SQL code blocks."
  },
  {
    "id": 202,
    "difficulty": "hard",
    "category": "triggers",
    "question": "What is a 'Trigger' in SQL?",
    "options": [
      "A special type of stored procedure that automatically runs when an event occurs in the database server",
      "A command that deletes the database",
      "A button in the UI",
      "A way to speed up SELECT queries"
    ],
    "answer": 0,
    "explanation": "Triggers are used to enforce business rules or maintain audit trails automatically during INSERT, UPDATE, or DELETE actions.",
    "hint": "Automatic reaction to data changes."
  },
  {
    "id": 203,
    "difficulty": "medium",
    "category": "transactions",
    "question": "Which command is used to permanently save the changes made in a transaction?",
    "options": [
      "SAVE",
      "FINISH",
      "ROLLBACK",
      "COMMIT"
    ],
    "answer": 3,
    "explanation": "COMMIT makes all pending data changes permanent in the database.",
    "hint": "The opposite of Rollback."
  },
  {
    "id": 204,
    "difficulty": "hard",
    "category": "transactions",
    "question": "What does the 'ROLLBACK' command do?",
    "options": [
      "Backs up the database",
      "Restarts the server",
      "Deletes the entire table",
      "Undo the changes made in the current transaction"
    ],
    "answer": 3,
    "explanation": "If an error occurs, ROLLBACK restores the data to its state at the beginning of the transaction.",
    "hint": "Undo."
  },
  {
    "id": 205,
    "difficulty": "medium",
    "category": "programmability",
    "question": "What is the difference between a Stored Procedure and a User-Defined Function (UDF)?",
    "options": [
      "Functions must return a value; Procedures do not have to",
      "Procedures can have side effects (like updating tables); Functions generally should not",
      "Functions can be used in a SELECT statement; Procedures cannot",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "Functions are designed for computation and return values, while procedures are designed for executing business logic.",
    "hint": "Think about return values and usage in SELECT."
  },
  {
    "id": 206,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How do you prevent a 'SQL Injection' attack?",
    "options": [
      "By using shorter table names",
      "By using Parameterized Queries or Prepared Statements",
      "By using only SELECT statements",
      "By encrypting the database"
    ],
    "answer": 1,
    "explanation": "Parameterized queries ensure that user input is treated as data, not as executable code.",
    "hint": "Don't concatenate strings with user input."
  },
  {
    "id": 207,
    "difficulty": "medium",
    "category": "transactions",
    "question": "What is a 'SAVEPOINT'?",
    "options": [
      "The end of a query",
      "A way to roll back a transaction to a specific point rather than the entire beginning",
      "A primary key",
      "The point where the database is backed up"
    ],
    "answer": 1,
    "explanation": "SAVEPOINTs allow for granular control over complex multi-step transactions.",
    "hint": "Partial rollback marker."
  },
  {
    "id": 208,
    "difficulty": "hard",
    "category": "triggers",
    "question": "What is an 'INSTEAD OF' trigger?",
    "options": [
      "A trigger that runs after an update",
      "A trigger that replaces the standard action of the triggering statement",
      "A trigger that never runs",
      "A trigger used only for SELECT"
    ],
    "answer": 1,
    "explanation": "These are often used on views to make them updatable when they otherwise wouldn't be.",
    "hint": "Replacement logic."
  },
  {
    "id": 209,
    "difficulty": "medium",
    "category": "performance",
    "question": "What is the purpose of 'SET NOCOUNT ON' in SQL Server stored procedures?",
    "options": [
      "To disable all triggers",
      "To stop counting users",
      "To prevent the 'n rows affected' message from being sent to the client, reducing network traffic",
      "To speed up math calculations"
    ],
    "answer": 2,
    "explanation": "This is a simple performance optimization for procedures that perform many small operations.",
    "hint": "Silence the row count message."
  },
  {
    "id": 210,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is a 'Log File' (Transaction Log) used for?",
    "options": [
      "To store user passwords",
      "To store the database schema",
      "To store images",
      "To record all changes made to the database to ensure ACID durability and support recovery"
    ],
    "answer": 3,
    "explanation": "The log allows the database to 'replay' or 'undo' actions during a recovery process.",
    "hint": "A history of all changes."
  },
  {
    "id": 211,
    "difficulty": "medium",
    "category": "programmability",
    "question": "What are 'Output Parameters' in stored procedures?",
    "options": [
      "Variables that allow a procedure to return values back to the calling program",
      "The final result set of a query",
      "Error messages",
      "The text printed to the console"
    ],
    "answer": 0,
    "explanation": "Output parameters allow you to return individual pieces of data without returning a full result set.",
    "hint": "Returning data via variables."
  },
  {
    "id": 212,
    "difficulty": "hard",
    "category": "transactions",
    "question": "What is a 'Phantom Read'?",
    "options": [
      "Reading data that doesn't exist",
      "A deleted record",
      "A failed read",
      "When a transaction re-runs a query and finds new 'phantom' rows added by another committed transaction"
    ],
    "answer": 3,
    "explanation": "Phantom reads are prevented by the 'Serializable' isolation level.",
    "hint": "Appearance of new rows."
  },
  {
    "id": 213,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which keyword is used to handle errors in a SQL Server stored procedure?",
    "options": [
      "IF ERROR",
      "TRY...CATCH",
      "ERROR...HANDLE",
      "ON ERROR GOTO"
    ],
    "answer": 1,
    "explanation": "Structured error handling allows developers to manage exceptions gracefully.",
    "hint": "Common programming error pattern."
  },
  {
    "id": 214,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Database Replication'?",
    "options": [
      "Deleting duplicate data",
      "The process of copying data from one database to another to keep them in sync",
      "Comparing two databases",
      "Making a backup once a year"
    ],
    "answer": 1,
    "explanation": "Replication is used for high availability, load balancing, and data distribution.",
    "hint": "Keeping multiple copies in sync."
  },
  {
    "id": 215,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is 'Dynamic SQL'?",
    "options": [
      "SQL code that is generated and executed at runtime as a string",
      "A type of join",
      "SQL used for animations",
      "SQL that runs very fast"
    ],
    "answer": 0,
    "explanation": "Dynamic SQL is flexible but should be used carefully to avoid SQL injection risks.",
    "hint": "Building queries on the fly."
  },
  {
    "id": 216,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is a 'Table Variable' vs a 'Temporary Table'?",
    "options": [
      "Table variables can have indexes",
      "Temp tables are always faster",
      "Table variables exist only in memory (mostly) and have limited scope; Temp tables are stored in TempDB",
      "No difference"
    ],
    "answer": 2,
    "explanation": "Table variables (@table) are generally for small datasets; Temporary tables (#table) are for larger sets and support more features.",
    "hint": "Memory scope vs TempDB."
  },
  {
    "id": 217,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you call a stored procedure named 'GetRevenue'?",
    "options": [
      "CALL GetRevenue",
      "EXEC GetRevenue",
      "RUN GetRevenue",
      "Both 0 and 1 (depending on DB)"
    ],
    "answer": 3,
    "explanation": "SQL Server uses EXEC, while MySQL and PostgreSQL typically use CALL.",
    "hint": "Execute or Call."
  },
  {
    "id": 218,
    "difficulty": "hard",
    "category": "triggers",
    "question": "What are the 'Inserted' and 'Deleted' logical tables in triggers?",
    "options": [
      "Tables that store history",
      "Special memory-resident tables that show the state of rows before and after the data modification",
      "The main database tables",
      "Tables used to store recycle bin data"
    ],
    "answer": 1,
    "explanation": "Triggers use these to compare old values with new values for audit or validation logic.",
    "hint": "Before and After snapshots."
  },
  {
    "id": 219,
    "difficulty": "medium",
    "category": "transactions",
    "question": "What does 'Atomicity' mean in ACID?",
    "options": [
      "Only one user can connect",
      "The database is fast",
      "The transaction is 'all or nothing'—it either succeeds completely or fails completely",
      "The data is tiny"
    ],
    "answer": 2,
    "explanation": "Atomicity prevents partial updates that could leave the data in an inconsistent state.",
    "hint": "Indivisible."
  },
  {
    "id": 220,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is a 'Candidate Key'?",
    "options": [
      "A foreign key",
      "Any column or set of columns that could uniquely identify a row",
      "A primary key that is running for election",
      "A non-unique index"
    ],
    "answer": 1,
    "explanation": "One candidate key is usually chosen as the Primary Key; the others are 'Alternate Keys'.",
    "hint": "Potential primary keys."
  },
  {
    "id": 221,
    "difficulty": "medium",
    "category": "programmability",
    "question": "What is the 'Scope' of a local variable in a stored procedure?",
    "options": [
      "All procedures in the system",
      "The entire database",
      "Only for the user who created it",
      "Only within the BEGIN...END block where it is defined"
    ],
    "answer": 3,
    "explanation": "Local variables are destroyed once the procedure finishes execution.",
    "hint": "Limited duration."
  },
  {
    "id": 222,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Database Hinting'?",
    "options": [
      "A help menu",
      "Giving a user a clue about the password",
      "An error message",
      "Instructions provided to the optimizer to force a specific execution plan (e.g., forcing an index)"
    ],
    "answer": 3,
    "explanation": "Hints should be used sparingly, as they override the optimizer's ability to adapt to data changes.",
    "hint": "Overriding the optimizer."
  },
  {
    "id": 223,
    "difficulty": "medium",
    "category": "transactions",
    "question": "What is a 'Dirty Read'?",
    "options": [
      "Reading data from a backup",
      "Reading data slowly",
      "Reading data from a corrupted table",
      "Reading data that has been modified by another transaction but not yet committed"
    ],
    "answer": 3,
    "explanation": "If the other transaction rolls back, the 'dirty' data becomes invalid.",
    "hint": "Uncommitted data."
  },
  {
    "id": 224,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How can you find the last inserted identity/auto-increment value in SQL Server?",
    "options": [
      "SELECT MAX(ID)",
      "SELECT @@IDENTITY or SCOPE_IDENTITY()",
      "SELECT * FROM inserted",
      "SELECT LAST(ID)"
    ],
    "answer": 1,
    "explanation": "SCOPE_IDENTITY() is preferred because it is limited to the current scope.",
    "hint": "Identity function."
  },
  {
    "id": 225,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is 'ETL' in database management?",
    "options": [
      "Easy Table Loading",
      "Extract, Transform, Load",
      "Every Table Linked",
      "Effective Trace Log"
    ],
    "answer": 1,
    "explanation": "ETL is the process of moving data from source systems into a data warehouse.",
    "hint": "Data movement process."
  },
  {
    "id": 226,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is a 'Non-Repeatable Read'?",
    "options": [
      "A row with NULL values",
      "When a transaction reads the same row twice and gets different data because another transaction updated it in between",
      "A locked row",
      "When you can't read a row twice"
    ],
    "answer": 1,
    "explanation": "This occurs in isolation levels lower than 'Repeatable Read'.",
    "hint": "Value changes during transaction."
  },
  {
    "id": 227,
    "difficulty": "medium",
    "category": "programmability",
    "question": "Which of the following can a trigger NOT do?",
    "options": [
      "Update another table",
      "Call a stored procedure",
      "Roll back a transaction",
      "Return a result set to the user"
    ],
    "answer": 3,
    "explanation": "Triggers should not return result sets as they are background processes and it can cause unexpected behavior in applications.",
    "hint": "Output restrictions."
  },
  {
    "id": 228,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Query Plan Caching'?",
    "options": [
      "Deleting old plans",
      "Storing query results in memory",
      "Storing the database on a thumb drive",
      "Storing the execution plan of a query so it can be reused, saving the cost of recompilation"
    ],
    "answer": 3,
    "explanation": "Caching plans speeds up the execution of frequently run queries.",
    "hint": "Reusing the strategy."
  },
  {
    "id": 229,
    "difficulty": "medium",
    "category": "transactions",
    "question": "What is 'Consistency' in ACID?",
    "options": [
      "The database is always the same size",
      "Fast data access",
      "Making sure all rows have data",
      "Ensuring that a transaction brings the database from one valid state to another, following all rules and constraints"
    ],
    "answer": 3,
    "explanation": "Consistency ensures that constraints (like foreign keys or check constraints) are never violated.",
    "hint": "Rules must be followed."
  },
  {
    "id": 230,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is a 'Surrogate Key'?",
    "options": [
      "A key that represents a real-world value (like SSN)",
      "An artificial, system-generated primary key (like an Identity or UUID) with no business meaning",
      "A key used for encryption",
      "A backup key"
    ],
    "answer": 1,
    "explanation": "Surrogate keys are stable and don't change even if business requirements do.",
    "hint": "Artificial ID."
  },
  {
    "id": 231,
    "difficulty": "medium",
    "category": "basics",
    "question": "What does 'DML' stand for?",
    "options": [
      "Data Metadata Language",
      "Distributed Master Logic",
      "Database Management Level",
      "Data Manipulation Language (SELECT, INSERT, UPDATE, DELETE)"
    ],
    "answer": 3,
    "explanation": "DML commands are used to manage the data within objects.",
    "hint": "Manipulating data."
  },
  {
    "id": 232,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "How do you find the third character of a string in SQL?",
    "options": [
      "INDEX(str, 3)",
      "SUBSTRING(str, 3, 1)",
      "LEFT(str, 3)",
      "CHAR(str, 3)"
    ],
    "answer": 1,
    "explanation": "SUBSTRING (or SUBSTR) extracts a specific portion of a string based on a start position and length.",
    "hint": "Position 3, length 1."
  },
  {
    "id": 233,
    "difficulty": "medium",
    "category": "basics",
    "question": "What does 'DDL' stand for?",
    "options": [
      "Direct Data Link",
      "Data Definition Language (CREATE, ALTER, DROP)",
      "Detailed Data List",
      "Database Design Logic"
    ],
    "answer": 1,
    "explanation": "DDL commands are used to define or modify the structure of the database.",
    "hint": "Defining objects."
  },
  {
    "id": 234,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is an 'Implicit Transaction'?",
    "options": [
      "When the database automatically starts a transaction for every DML statement",
      "A transaction you write manually",
      "A hidden database",
      "A failed transaction"
    ],
    "answer": 0,
    "explanation": "In many databases, if you don't explicitly start a transaction, each statement is its own transaction (Auto-commit).",
    "hint": "Automatic transactions."
  },
  {
    "id": 235,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is a 'Natural Key'?",
    "options": [
      "A key that is not indexed",
      "A key that occurs in nature",
      "A primary key made of numbers only",
      "A primary key that has a real-world meaning (e.g., Email or VIN)"
    ],
    "answer": 3,
    "explanation": "Natural keys already exist in the data, as opposed to surrogate keys which are generated.",
    "hint": "Real-world identifier."
  },
  {
    "id": 236,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is the difference between 'CHAR' and 'VARCHAR'?",
    "options": [
      "VARCHAR is faster for all operations",
      "There is no difference",
      "CHAR is fixed-length (padded with spaces); VARCHAR is variable-length",
      "CHAR is for numbers; VARCHAR is for text"
    ],
    "answer": 2,
    "explanation": "CHAR uses the same amount of storage regardless of the string length, whereas VARCHAR uses only what is needed.",
    "hint": "Fixed vs Variable."
  },
  {
    "id": 237,
    "difficulty": "medium",
    "category": "basics",
    "question": "What does 'DCL' stand for?",
    "options": [
      "Database Connection List",
      "Data Collection Level",
      "Direct Control Logic",
      "Data Control Language (GRANT, REVOKE)"
    ],
    "answer": 3,
    "explanation": "DCL commands are used to control access and permissions to the data.",
    "hint": "Controlling access."
  },
  {
    "id": 238,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is a 'Covering Index'?",
    "options": [
      "A primary key index",
      "An index that covers the entire table",
      "An index that contains all columns needed for a query, so the table doesn't need to be accessed",
      "A hidden index"
    ],
    "answer": 2,
    "explanation": "This is a key performance tuning technique to eliminate expensive 'Key Lookups'.",
    "hint": "All query data in the index."
  },
  {
    "id": 239,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is a 'One-to-Many' relationship?",
    "options": [
      "One column has many values",
      "One row in Table A can relate to many rows in Table B",
      "Many users can access one table",
      "One table has many columns"
    ],
    "answer": 1,
    "explanation": "Example: One Department can have many Employees.",
    "hint": "The most common relationship."
  },
  {
    "id": 240,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'COALESCE' used for?",
    "options": [
      "To count records",
      "To delete rows",
      "To return the first non-null value in a list of arguments",
      "To join two strings"
    ],
    "answer": 2,
    "explanation": "COALESCE is useful for providing default values when data might be missing.",
    "hint": "Handling NULLs."
  },
  {
    "id": 241,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which of the following is a 'Set Operator'?",
    "options": [
      "GROUP BY",
      "WHERE",
      "UNION",
      "JOIN"
    ],
    "answer": 2,
    "explanation": "Set operators (UNION, INTERSECT, EXCEPT) combine the results of two queries.",
    "hint": "Combines result sets."
  },
  {
    "id": 242,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Cardinality' in SQL?",
    "options": [
      "The number of indexes",
      "The uniqueness of data values in a column",
      "The number of rows in a table",
      "The size of the database"
    ],
    "answer": 1,
    "explanation": "High cardinality columns (like IDs) make better index candidates than low cardinality columns (like Gender).",
    "hint": "Uniqueness ratio."
  },
  {
    "id": 243,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is a 'Many-to-Many' relationship?",
    "options": [
      "Rows in Table A can relate to many in Table B, and vice-versa",
      "A database with many users",
      "A table with many primary keys",
      "Many tables relating to many databases"
    ],
    "answer": 0,
    "explanation": "This usually requires a 'Junction Table' (or Link Table) to resolve into two one-to-many relationships.",
    "hint": "Requires a third table."
  },
  {
    "id": 244,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is the difference between 'UNION' and 'UNION ALL'?",
    "options": [
      "UNION ALL removes duplicates; UNION does not",
      "UNION is faster",
      "UNION removes duplicates; UNION ALL does not",
      "There is no difference"
    ],
    "answer": 2,
    "explanation": "UNION ALL is faster because it doesn't perform a distinct check to remove duplicates.",
    "hint": "Cleaning vs Just adding."
  },
  {
    "id": 245,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is an 'Alias'?",
    "options": [
      "A temporary name given to a table or column",
      "A primary key",
      "A database user",
      "A hidden table"
    ],
    "answer": 0,
    "explanation": "Aliases (using AS) make queries more readable, especially in joins.",
    "hint": "A nickname."
  },
  {
    "id": 246,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is a 'Full Table Scan'?",
    "options": [
      "Cleaning the database",
      "A backup process",
      "When the database must read every single row in a table to find the requested data",
      "A fast way to find data"
    ],
    "answer": 2,
    "explanation": "Scans are expensive; proper indexing aims to replace them with 'Index Seeks'.",
    "hint": "Reading everything."
  },
  {
    "id": 247,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is 'Referential Integrity'?",
    "options": [
      "Backing up the data",
      "Checking for spelling errors",
      "The speed of a query",
      "Ensuring that foreign key values always point to a valid primary key"
    ],
    "answer": 3,
    "explanation": "This prevents orphaned records and maintains the consistency of relationships.",
    "hint": "Valid links between tables."
  },
  {
    "id": 248,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What does the 'LEAD' window function do?",
    "options": [
      "Provides access to a row at a given physical offset that follows the current row",
      "Identifies the leader of a group",
      "Sorts the data",
      "Updates the top row"
    ],
    "answer": 0,
    "explanation": "LEAD allows you to compare the current row's value with a subsequent row's value.",
    "hint": "Looking forward."
  },
  {
    "id": 249,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is 'Null' in SQL?",
    "options": [
      "An empty string",
      "Zero",
      "A space character",
      "A marker indicating that a data value does not exist in the database (Unknown)"
    ],
    "answer": 3,
    "explanation": "NULL is not a value; it is a state representing missing or unknown data.",
    "hint": "Missing data."
  },
  {
    "id": 250,
    "difficulty": "hard",
    "category": "transactions",
    "question": "What is the 'Serializable' isolation level?",
    "options": [
      "The fastest isolation level",
      "A level that allows dirty reads",
      "The highest isolation level, which ensures that transactions occur as if they were running one after another",
      "A level used only for backups"
    ],
    "answer": 2,
    "explanation": "Serializable prevents all concurrency phenomena (Dirty reads, Non-repeatable reads, Phantoms) but has the highest performance cost.",
    "hint": "Strict isolation."
  },
  {
    "id": 251,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which component of SQL includes commands like GRANT and REVOKE to manage database permissions?",
    "options": [
      "DDL (Data Definition Language)",
      "TCL (Transaction Control Language)",
      "DCL (Data Control Language)",
      "DML (Data Manipulation Language)"
    ],
    "answer": 2,
    "explanation": "DCL (Data Control Language) is used to control access to data in the database, primarily through granting and revoking permissions.",
    "hint": "Think 'Control'."
  },
  {
    "id": 252,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is the key difference between DELETE and TRUNCATE?",
    "options": [
      "TRUNCATE can be used to delete specific records",
      "There is no difference in performance",
      "DELETE is DDL; TRUNCATE is DML",
      "DELETE allows a WHERE clause and is logged row-by-row; TRUNCATE is a bulk operation that removes all rows and is minimally logged"
    ],
    "answer": 3,
    "explanation": "DELETE is a DML command that can target specific rows and is fully logged. TRUNCATE is a DDL command that resets the table (and identity seeds) much faster because it doesn't log individual row deletions.",
    "hint": "Row-by-row vs Bulk."
  },
  {
    "id": 253,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which function is best used to return the first non-null value in a list of arguments?",
    "options": [
      "COALESCE()",
      "ISNULL()",
      "NULLIF()",
      "NVL()"
    ],
    "answer": 0,
    "explanation": "COALESCE() is the ANSI standard function that evaluates arguments in order and returns the first one that is not NULL.",
    "hint": "Commonly used for providing default values."
  },
  {
    "id": 254,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What query structure would you use to find duplicate emails in a 'Users' table?",
    "options": [
      "SELECT email FROM Users WHERE email = email",
      "SELECT email, COUNT(*) FROM Users GROUP BY email HAVING COUNT(*) > 1",
      "SELECT DISTINCT email FROM Users",
      "SELECT email FROM Users ORDER BY email"
    ],
    "answer": 1,
    "explanation": "To find duplicates, you must group by the column in question and filter the groups that have a count greater than one.",
    "hint": "Group and count."
  },
  {
    "id": 255,
    "difficulty": "hard",
    "category": "performance",
    "question": "When comparing IN and EXISTS for a large subquery, why is EXISTS often faster?",
    "options": [
      "EXISTS ignores NULL values",
      "EXISTS stops scanning as soon as a single match is found (Short-circuiting), whereas IN might evaluate the entire subquery result set",
      "IN is a deprecated operator",
      "EXISTS uses more memory"
    ],
    "answer": 1,
    "explanation": "EXISTS performs a 'semi-join' and returns TRUE immediately upon finding a match, whereas IN typically requires the subquery to be fully materialized first.",
    "hint": "Stopping early vs finishing the list."
  },
  {
    "id": 256,
    "difficulty": "medium",
    "category": "indexes",
    "question": "What is the primary trade-off of adding multiple indexes to a table?",
    "options": [
      "It allows for more NULL values",
      "It makes the database files smaller",
      "It speeds up SELECT queries but slows down INSERT, UPDATE, and DELETE operations",
      "It makes the data more secure"
    ],
    "answer": 2,
    "explanation": "Every time data is modified (DML), the database must also update the indexes, which adds overhead to write operations.",
    "hint": "Read speed vs Write speed."
  },
  {
    "id": 257,
    "difficulty": "hard",
    "category": "indexes",
    "question": "Which statement correctly describes a 'Clustered Index'?",
    "options": [
      "It is a separate structure from the data rows",
      "A table can have up to 249 clustered indexes",
      "It is only used for non-numeric columns",
      "It physically sorts and stores the data rows in the table based on the key values"
    ],
    "answer": 3,
    "explanation": "Because a Clustered Index dictates the physical order of data on the disk, there can only be one per table.",
    "hint": "Physical sorting."
  },
  {
    "id": 258,
    "difficulty": "medium",
    "category": "transactions",
    "question": "In the context of ACID properties, what does 'Durability' ensure?",
    "options": [
      "That once a transaction is committed, it will remain so even in the event of a power failure or system crash",
      "That only one user can access the table at a time",
      "That data is encrypted at rest",
      "That transactions are processed in a timely manner"
    ],
    "answer": 0,
    "explanation": "Durability guarantees that committed data is saved to non-volatile memory (permanent storage).",
    "hint": "Permanence."
  },
  {
    "id": 259,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is the 'NOLOCK' hint (or READ UNCOMMITTED isolation level) used for?",
    "options": [
      "To prevent other users from reading the data",
      "To encrypt the result set",
      "To force the query to use a specific index",
      "To allow a query to read data that is currently being modified by another transaction, avoiding wait times"
    ],
    "answer": 3,
    "explanation": "NOLOCK improves performance by not requesting shared locks, but it carries the risk of 'Dirty Reads' (reading uncommitted data).",
    "hint": "Reading without waiting for locks."
  },
  {
    "id": 260,
    "difficulty": "hard",
    "category": "performance",
    "question": "How do RANK() and DENSE_RANK() differ when handling ties?",
    "options": [
      "DENSE_RANK() ignores NULLs",
      "RANK() is faster than DENSE_RANK()",
      "RANK() leaves gaps in the numbering sequence after a tie; DENSE_RANK() does not",
      "DENSE_RANK() is only for integers"
    ],
    "answer": 2,
    "explanation": "If two rows are tied for 1st, RANK() will list them as 1, 1 and then skip to 3. DENSE_RANK() will list them as 1, 1 and then go to 2.",
    "hint": "Gaps vs No gaps."
  },
  {
    "id": 261,
    "difficulty": "medium",
    "category": "performance",
    "question": "What is the purpose of an 'EXPLAIN' or 'EXPLAIN PLAN' statement?",
    "options": [
      "To generate a report for the manager",
      "To show the execution path the query optimizer will take to retrieve data",
      "To provide a description of each column in the table",
      "To explain the SQL syntax to a beginner"
    ],
    "answer": 1,
    "explanation": "The execution plan reveals if a query is performing full table scans or index seeks, which is critical for performance tuning.",
    "hint": "The optimizer's roadmap."
  },
  {
    "id": 262,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which operator rotates row values into columns in T-SQL reporting queries?",
    "options": [
      "UNION ALL",
      "TRUNCATE",
      "CROSS APPLY only",
      "PIVOT"
    ],
    "answer": 3,
    "explanation": "PIVOT: aggregates values and turns distinct row values into columns; UNPIVOT does the reverse."
  },
  {
    "id": 263,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "When is conditional aggregation preferred over PIVOT?",
    "options": [
      "Never",
      "Only for indexes",
      "Only for NULL",
      "When the output columns are not fixed or you need portability, using SUM(CASE WHEN ...)"
    ],
    "answer": 3,
    "explanation": "PIVOT requires known column values; conditional aggregation works across engines."
  },
  {
    "id": 264,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What does MERGE do?",
    "options": [
      "Performs insert, update or delete in one statement based on a join between source and target",
      "Creates an index",
      "Rebuilds statistics",
      "Only deletes duplicates"
    ],
    "answer": 0,
    "explanation": "MERGE: upsert pattern; test carefully for concurrency and ensure the source has unique match keys."
  },
  {
    "id": 265,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What error can MERGE raise when the source has duplicate matching keys?",
    "options": [
      "A target row matched by multiple source rows, which must be resolved by deduplicating the source",
      "A syntax error",
      "A deadlock always",
      "Nothing"
    ],
    "answer": 0,
    "explanation": "MERGE requires at most one source row per target row for updates."
  },
  {
    "id": 266,
    "difficulty": "medium",
    "category": "performance",
    "question": "Which predicate is SARGable and can use an index seek?",
    "options": [
      "WHERE CAST(order_date AS varchar) LIKE '2025%'",
      "WHERE order_date + 1 > GETDATE()",
      "WHERE YEAR(order_date) = 2025",
      "WHERE order_date >= '2025-01-01' AND order_date < '2025-02-01'"
    ],
    "answer": 3,
    "explanation": "SARGable predicates keep the column unwrapped so the optimizer can seek."
  },
  {
    "id": 267,
    "difficulty": "medium",
    "category": "performance",
    "question": "Why does the NOLOCK hint risk wrong results?",
    "options": [
      "It forces serializable",
      "It allows dirty reads, so uncommitted or inconsistent rows can be returned",
      "It locks the whole table",
      "It guarantees accuracy"
    ],
    "answer": 1,
    "explanation": "NOLOCK: READ UNCOMMITTED; avoid for financial accuracy, prefer snapshot isolation."
  },
  {
    "id": 268,
    "difficulty": "medium",
    "category": "design",
    "question": "What is a Star Schema?",
    "options": [
      "A central fact table linked to denormalized dimension tables for analytics",
      "A single wide table",
      "A graph database",
      "Fully normalized OLTP tables"
    ],
    "answer": 0,
    "explanation": "Star Schema: fast aggregates and simple joins for BI."
  },
  {
    "id": 269,
    "difficulty": "hard",
    "category": "design",
    "question": "Why use Denormalization in a warehouse?",
    "options": [
      "To reduce storage always",
      "To reduce joins and speed up read-heavy analytics at the cost of redundancy",
      "To enforce 3NF",
      "To avoid indexes"
    ],
    "answer": 1,
    "explanation": "Denormalization trades redundancy for query simplicity, as in a Star Schema."
  },
  {
    "id": 270,
    "difficulty": "medium",
    "category": "performance",
    "question": "What does Locking protect, and what can excessive Locking cause?",
    "options": [
      "It speeds all queries",
      "It disables transactions",
      "It protects consistency during concurrent access; excessive locks cause blocking and deadlocks",
      "It removes indexes"
    ],
    "answer": 2,
    "explanation": "Locking: shared and exclusive locks; keep transactions short and use appropriate isolation."
  }
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Focus: Window Functions, Performance Tuning, ACID Properties, and Advanced Joins.
const hotsQuestions = [
    // Existing curated entries (valid ids kept)
    1, 3, 5, 8, 12, 14, 18, 22, 24, 45, 55, 62, 78, 81, 90, 260, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 258, 259, 261, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 251, 252, 253, 254, 255, 257, 185, 190, 195, 95, 100, 105,

    // Added: hardest questions, spread across categories
    4, 6, 25, 36, 52, 56, 72, 101, 103, 107, 151, 153, 202, 204, 9, 104, 154, 201, 10, 21, 31, 13, 54, 63, 77, 111, 109, 117, 167, 157, 208, 212, 15, 112, 166, 211, 40, 29, 34, 19, 65, 68, 84
];
