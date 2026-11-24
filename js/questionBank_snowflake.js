const questionBank = [
  {
    "id": 1,
    "difficulty": "easy",
    "category": "architecture",
    "question": "What is the primary architectural advantage of Snowflake compared to traditional databases?",
    "options": [
      "Single node query engine",
      "Separation of compute and storage",
      "Local disk storage",
      "Use of indexes"
    ],
    "answer": 1,
    "explanation": "Snowflake separates compute (virtual warehouses) from storage allowing independent scaling."
  },
  {
    "id": 2,
    "difficulty": "easy",
    "category": "architecture",
    "question": "Which layer in Snowflake manages authentication, metadata, and query optimization?",
    "options": [
      "Warehouse Layer",
      "Cloud Services Layer",
      "Storage Layer",
      "Compute Layer"
    ],
    "answer": 1,
    "explanation": "The Cloud Services layer handles authentication, infrastructure management, metadata, and query parsing."
  },
  {
    "id": 3,
    "difficulty": "easy",
    "category": "architecture",
    "question": "Which Snowflake component executes SQL queries?",
    "options": [
      "Database",
      "Virtual Warehouse",
      "Metadata Layer",
      "Stage"
    ],
    "answer": 1,
    "explanation": "Virtual warehouses are compute clusters responsible for executing queries."
  },
  {
    "id": 4,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which layer stores compressed micro-partitions?",
    "options": [
      "Warehouse Layer",
      "Cloud Services Layer",
      "Compute Layer",
      "Storage Layer"
    ],
    "answer": 3,
    "explanation": "The storage layer stores compressed micro-partitions for optimized storage."
  },
  {
    "id": 5,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What happens when multiple warehouses query the same table?",
    "options": [
      "They share compute resources",
      "They lock the table",
      "They operate independently",
      "They compete for CPU resources"
    ],
    "answer": 2,
    "explanation": "Warehouses operate independently due to separation of compute and storage."
  },
  {
    "id": 6,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What component is responsible for query compilation?",
    "options": [
      "Query Cache",
      "Virtual Warehouse",
      "Storage Layer",
      "Cloud Services"
    ],
    "answer": 3,
    "explanation": "Query compilation occurs in the Cloud Services layer."
  },
  {
    "id": 7,
    "difficulty": "easy",
    "category": "warehouse",
    "question": "What does a Snowflake Virtual Warehouse provide?",
    "options": [
      "Network security",
      "User authentication",
      "Data storage",
      "Compute resources for queries"
    ],
    "answer": 3,
    "explanation": "Virtual warehouses provide compute resources used for executing SQL queries."
  },
  {
    "id": 8,
    "difficulty": "easy",
    "category": "warehouse",
    "question": "What happens when AUTO_SUSPEND is enabled?",
    "options": [
      "Warehouse scales automatically",
      "Warehouse shuts down after inactivity",
      "Warehouse stops queries",
      "Warehouse deletes cached results"
    ],
    "answer": 1,
    "explanation": "AUTO_SUSPEND automatically suspends a warehouse after a defined inactivity period."
  },
  {
    "id": 9,
    "difficulty": "medium",
    "category": "warehouse",
    "question": "What Snowflake feature automatically adds clusters to support concurrency?",
    "options": [
      "Auto Suspend",
      "Snowpipe",
      "Result Cache",
      "Multi-Cluster Warehouse"
    ],
    "answer": 3,
    "explanation": "Multi-cluster warehouses add compute clusters to handle concurrency spikes."
  },
  {
    "id": 10,
    "difficulty": "medium",
    "category": "warehouse",
    "question": "Which parameter controls number of concurrent queries?",
    "options": [
      "MAX_CLUSTER_COUNT",
      "STATEMENT_TIMEOUT",
      "MAX_CONCURRENCY_LEVEL",
      "AUTO_RESUME"
    ],
    "answer": 2,
    "explanation": "MAX_CONCURRENCY_LEVEL defines concurrency before queries queue."
  },
  {
    "id": 11,
    "difficulty": "hard",
    "category": "warehouse",
    "question": "Which action will NOT interrupt running queries?",
    "options": [
      "Suspending warehouse",
      "Dropping warehouse",
      "Resizing warehouse",
      "Restarting account"
    ],
    "answer": 2,
    "explanation": "Resizing warehouses affects only new queries."
  },
  {
    "id": 12,
    "difficulty": "easy",
    "category": "data_loading",
    "question": "Which command loads data into a Snowflake table?",
    "options": [
      "INSERT FILE",
      "LOAD DATA",
      "COPY INTO",
      "IMPORT DATA"
    ],
    "answer": 2,
    "explanation": "COPY INTO is the primary command used to load data."
  },
  {
    "id": 13,
    "difficulty": "easy",
    "category": "data_loading",
    "question": "Which Snowflake feature automatically loads new files from cloud storage?",
    "options": [
      "Streams",
      "Tasks",
      "External Tables",
      "Snowpipe"
    ],
    "answer": 3,
    "explanation": "Snowpipe provides continuous automated ingestion."
  },
  {
    "id": 14,
    "difficulty": "medium",
    "category": "data_loading",
    "question": "What is the optimal file size for Snowpipe ingestion?",
    "options": [
      "10GB+",
      "5KB-100KB",
      "5MB-100MB",
      "1GB-5GB"
    ],
    "answer": 2,
    "explanation": "Snowflake recommends files between 5MB and 100MB."
  },
  {
    "id": 15,
    "difficulty": "medium",
    "category": "data_loading",
    "question": "Which command uploads local files into an internal stage?",
    "options": [
      "LOAD",
      "COPY",
      "STAGE",
      "PUT"
    ],
    "answer": 3,
    "explanation": "PUT uploads files from local systems into Snowflake stages."
  },
  {
    "id": 16,
    "difficulty": "hard",
    "category": "data_loading",
    "question": "Which option removes the outer JSON array when loading files?",
    "options": [
      "ARRAY_TRIM",
      "STRIP_OUTER_ARRAY",
      "FLATTEN_ARRAY",
      "REMOVE_ARRAY"
    ],
    "answer": 1,
    "explanation": "STRIP_OUTER_ARRAY removes the top-level JSON array."
  },
  {
    "id": 17,
    "difficulty": "easy",
    "category": "performance",
    "question": "Which cache stores final query results?",
    "options": [
      "Metadata Cache",
      "Warehouse Cache",
      "Local Cache",
      "Result Cache"
    ],
    "answer": 3,
    "explanation": "Result Cache stores final query output for 24 hours."
  },
  {
    "id": 18,
    "difficulty": "medium",
    "category": "performance",
    "question": "When can result cache be reused?",
    "options": [
      "When underlying data changes",
      "When identical query is executed",
      "When warehouse size changes",
      "When query text changes"
    ],
    "answer": 1,
    "explanation": "Queries must be identical and underlying data unchanged."
  },
  {
    "id": 19,
    "difficulty": "hard",
    "category": "performance",
    "question": "Which cache requires an active warehouse?",
    "options": [
      "Warehouse Cache",
      "Metadata Cache",
      "Result Cache",
      "Cloud Cache"
    ],
    "answer": 0,
    "explanation": "Warehouse cache stores local data and requires compute."
  },
  {
    "id": 20,
    "difficulty": "easy",
    "category": "security",
    "question": "Which Snowflake model controls permissions?",
    "options": [
      "ACL",
      "RBAC",
      "ABAC",
      "LDAP"
    ],
    "answer": 1,
    "explanation": "Snowflake uses Role Based Access Control."
  },
  {
    "id": 21,
    "difficulty": "medium",
    "category": "security",
    "question": "Which role can manage users and roles?",
    "options": [
      "SYSADMIN",
      "SECURITYADMIN",
      "USERADMIN",
      "ACCOUNTADMIN"
    ],
    "answer": 1,
    "explanation": "SECURITYADMIN manages users, roles and privileges."
  },
  {
    "id": 22,
    "difficulty": "medium",
    "category": "security",
    "question": "Which feature masks sensitive data dynamically?",
    "options": [
      "Encryption",
      "Secure Views",
      "Network Policy",
      "Masking Policy"
    ],
    "answer": 3,
    "explanation": "Masking policies dynamically mask column data."
  },
  {
    "id": 23,
    "difficulty": "hard",
    "category": "security",
    "question": "Which privilege allows viewing masked data?",
    "options": [
      "ADMIN",
      "UNMASK",
      "SHOW DATA",
      "VIEW DATA"
    ],
    "answer": 1,
    "explanation": "UNMASK privilege allows viewing masked values."
  },
  {
    "id": 24,
    "difficulty": "easy",
    "category": "data_protection",
    "question": "How long is Fail-safe retention?",
    "options": [
      "1 day",
      "30 days",
      "7 days",
      "3 days"
    ],
    "answer": 2,
    "explanation": "Fail-safe retention period is always 7 days."
  },
  {
    "id": 25,
    "difficulty": "easy",
    "category": "data_protection",
    "question": "What feature allows querying historical data?",
    "options": [
      "Fail-safe",
      "Time Travel",
      "Replication",
      "Snapshot"
    ],
    "answer": 1,
    "explanation": "Time Travel allows querying past data versions."
  },
  {
    "id": 26,
    "difficulty": "medium",
    "category": "data_protection",
    "question": "What is maximum Time Travel retention for Enterprise edition?",
    "options": [
      "90 days",
      "7 days",
      "30 days",
      "1 day"
    ],
    "answer": 0,
    "explanation": "Enterprise edition supports up to 90 days."
  },
  {
    "id": 27,
    "difficulty": "hard",
    "category": "data_protection",
    "question": "Which tables do NOT support Time Travel?",
    "options": [
      "Permanent tables",
      "Temporary tables",
      "External tables",
      "Transient tables"
    ],
    "answer": 2,
    "explanation": "External tables do not support Time Travel."
  },
  {
    "id": 28,
    "difficulty": "easy",
    "category": "semi_structured",
    "question": "Which Snowflake data type stores JSON?",
    "options": [
      "MAP",
      "ARRAY",
      "VARIANT",
      "OBJECT"
    ],
    "answer": 2,
    "explanation": "VARIANT stores semi-structured data like JSON."
  },
  {
    "id": 29,
    "difficulty": "medium",
    "category": "semi_structured",
    "question": "Which function converts VARIANT to relational rows?",
    "options": [
      "EXPLODE",
      "NORMALIZE",
      "FLATTEN",
      "UNNEST"
    ],
    "answer": 2,
    "explanation": "FLATTEN expands semi-structured arrays."
  },
  {
    "id": 30,
    "difficulty": "hard",
    "category": "semi_structured",
    "question": "Which operator accesses JSON attributes?",
    "options": [
      ":",
      "::",
      "->",
      "."
    ],
    "answer": 0,
    "explanation": "The colon operator accesses JSON keys."
  },
  {
    "id": 31,
    "difficulty": "easy",
    "category": "pipelines",
    "question": "What object tracks table changes?",
    "options": [
      "Task",
      "Log",
      "Stream",
      "Pipe"
    ],
    "answer": 2,
    "explanation": "Streams track inserts, updates, and deletes."
  },
  {
    "id": 32,
    "difficulty": "medium",
    "category": "pipelines",
    "question": "Which object schedules SQL execution?",
    "options": [
      "Pipe",
      "Stream",
      "Task",
      "Warehouse"
    ],
    "answer": 2,
    "explanation": "Tasks schedule SQL statements."
  },
  {
    "id": 33,
    "difficulty": "hard",
    "category": "pipelines",
    "question": "Which pipeline pattern uses Streams + Tasks?",
    "options": [
      "CDC pipelines",
      "Warehouse scaling",
      "Batch ETL",
      "External ingestion"
    ],
    "answer": 0,
    "explanation": "Streams + Tasks implement Change Data Capture pipelines."
  },
  {
    "id": 34,
    "difficulty": "easy",
    "category": "sharing",
    "question": "What Snowflake feature shares data without copying?",
    "options": [
      "Export",
      "Replication",
      "External Tables",
      "Secure Data Sharing"
    ],
    "answer": 3,
    "explanation": "Secure Data Sharing allows sharing without moving data."
  },
  {
    "id": 35,
    "difficulty": "medium",
    "category": "sharing",
    "question": "Which object defines shared datasets?",
    "options": [
      "Replication Group",
      "Warehouse",
      "Share",
      "Database Role"
    ],
    "answer": 2,
    "explanation": "Shares define objects available for sharing."
  },
  {
    "id": 36,
    "difficulty": "hard",
    "category": "sharing",
    "question": "Which account type accesses shares without full license?",
    "options": [
      "Reader Account",
      "Guest Account",
      "Partner Account",
      "External Account"
    ],
    "answer": 0,
    "explanation": "Reader accounts access shared data without full Snowflake license."
  },
  {
    "id": 37,
    "difficulty": "medium",
    "category": "performance",
    "question": "Which feature reorganizes large tables for filtering?",
    "options": [
      "Sort Key",
      "Partition Index",
      "Hash Key",
      "Clustering Key"
    ],
    "answer": 3,
    "explanation": "Clustering keys optimize large tables."
  },
  {
    "id": 38,
    "difficulty": "hard",
    "category": "performance",
    "question": "Which scenario benefits most from clustering?",
    "options": [
      "Query cache usage",
      "Temporary tables",
      "Small lookup tables",
      "Large range queries"
    ],
    "answer": 3,
    "explanation": "Clustering benefits large tables with range filtering."
  },
  {
    "id": 39,
    "difficulty": "medium",
    "category": "performance",
    "question": "Which tool analyzes query performance?",
    "options": [
      "Warehouse Monitor",
      "Query Profiler",
      "Query Debugger",
      "Execution Viewer"
    ],
    "answer": 1,
    "explanation": "Query profiler visualizes execution steps."
  },
  {
    "id": 40,
    "difficulty": "medium",
    "category": "sql",
    "question": "Which command shows all warehouses?",
    "options": [
      "DESCRIBE WAREHOUSES",
      "SELECT * FROM WAREHOUSES",
      "LIST WAREHOUSES",
      "SHOW WAREHOUSES"
    ],
    "answer": 3,
    "explanation": "SHOW WAREHOUSES lists all virtual warehouses."
  },
  {
    "id": 41,
    "difficulty": "medium",
    "category": "sql",
    "question": "Which command lists files in a stage?",
    "options": [
      "GET FILES",
      "STAGE FILES",
      "SHOW FILES",
      "LIST @stage"
    ],
    "answer": 3,
    "explanation": "LIST @stage displays staged files."
  },
  {
    "id": 42,
    "difficulty": "medium",
    "category": "sql",
    "question": "Which SQL command unloads table data?",
    "options": [
      "DUMP TABLE",
      "EXPORT TABLE",
      "COPY INTO stage",
      "UNLOAD DATA"
    ],
    "answer": 2,
    "explanation": "COPY INTO stage unloads table data."
  },
  {
    "id": 43,
    "difficulty": "hard",
    "category": "sql",
    "question": "Which function returns current role?",
    "options": [
      "ROLE()",
      "GET_ROLE()",
      "USER_ROLE()",
      "CURRENT_ROLE()"
    ],
    "answer": 3,
    "explanation": "CURRENT_ROLE() returns active role."
  },
  {
    "id": 44,
    "difficulty": "hard",
    "category": "sql",
    "question": "Which command displays grants for a role?",
    "options": [
      "DISPLAY GRANTS",
      "SHOW ROLE GRANTS",
      "SHOW GRANTS TO ROLE",
      "LIST GRANTS"
    ],
    "answer": 2,
    "explanation": "SHOW GRANTS TO ROLE shows role privileges."
  },
  {
    "id": 45,
    "difficulty": "easy",
    "category": "file_formats",
    "question": "Default file format for COPY if none specified?",
    "options": [
      "CSV",
      "AVRO",
      "PARQUET",
      "JSON"
    ],
    "answer": 0,
    "explanation": "CSV is the default format."
  },
  {
    "id": 46,
    "difficulty": "medium",
    "category": "file_formats",
    "question": "Which format loads fastest?",
    "options": [
      "PARQUET",
      "XML",
      "CSV",
      "JSON"
    ],
    "answer": 0,
    "explanation": "Columnar formats like Parquet load fastest."
  },
  {
    "id": 47,
    "difficulty": "medium",
    "category": "metadata",
    "question": "Where are account metadata views stored?",
    "options": [
      "ACCOUNT_USAGE",
      "METADATA_DB",
      "SYS_TABLES",
      "INFO_SCHEMA"
    ],
    "answer": 0,
    "explanation": "ACCOUNT_USAGE contains metadata views."
  },
  {
    "id": 48,
    "difficulty": "hard",
    "category": "metadata",
    "question": "Query history retention?",
    "options": [
      "90 days",
      "7 days",
      "14 days",
      "365 days"
    ],
    "answer": 0,
    "explanation": "ACCOUNT_USAGE retains 90 days."
  },
  {
    "id": 49,
    "difficulty": "medium",
    "category": "security",
    "question": "Which feature restricts IP access?",
    "options": [
      "Security Policy",
      "Access Policy",
      "Network Policy",
      "Masking Policy"
    ],
    "answer": 2,
    "explanation": "Network policies restrict login IP ranges."
  },
  {
    "id": 50,
    "difficulty": "easy",
    "category": "data_types",
    "question": "Which type stores geospatial data?",
    "options": [
      "GEO",
      "LOCATION",
      "GEOGRAPHY",
      "MAP"
    ],
    "answer": 2,
    "explanation": "GEOGRAPHY stores spatial data."
  },
  {
    "id": 51,
    "difficulty": "medium",
    "category": "replication",
    "question": "Which feature replicates databases across regions?",
    "options": [
      "Mirror Tables",
      "Database Replication",
      "Failover Groups",
      "Secure Share"
    ],
    "answer": 2,
    "explanation": "Failover groups replicate databases."
  },
  {
    "id": 52,
    "difficulty": "hard",
    "category": "replication",
    "question": "What supports disaster recovery?",
    "options": [
      "Secure Views",
      "Masking Policies",
      "Streams",
      "Failover Groups"
    ],
    "answer": 3,
    "explanation": "Failover groups support DR."
  },
  {
    "id": 53,
    "difficulty": "medium",
    "category": "monitoring",
    "question": "Which view tracks warehouse load?",
    "options": [
      "WAREHOUSE_LOAD_HISTORY",
      "LOAD_MONITOR",
      "QUERY_HISTORY",
      "WAREHOUSE_STATS"
    ],
    "answer": 0,
    "explanation": "WAREHOUSE_LOAD_HISTORY tracks load."
  },
  {
    "id": 54,
    "difficulty": "medium",
    "category": "monitoring",
    "question": "Which table tracks logins?",
    "options": [
      "AUTH_LOG",
      "ACCESS_HISTORY",
      "LOGIN_HISTORY",
      "USER_ACTIVITY"
    ],
    "answer": 2,
    "explanation": "LOGIN_HISTORY tracks user logins."
  },
  {
    "id": 55,
    "difficulty": "hard",
    "category": "monitoring",
    "question": "Which view tracks access to objects?",
    "options": [
      "ACCESS_HISTORY",
      "QUERY_LOG",
      "ROLE_HISTORY",
      "OBJECT_ACCESS"
    ],
    "answer": 0,
    "explanation": "ACCESS_HISTORY records object usage."
  },
  {
    "id": 56,
    "difficulty": "medium",
    "category": "cost",
    "question": "What consumes Snowflake credits?",
    "options": [
      "Stages",
      "Metadata",
      "Storage",
      "Compute warehouses"
    ],
    "answer": 3,
    "explanation": "Compute usage consumes credits."
  },
  {
    "id": 57,
    "difficulty": "hard",
    "category": "cost",
    "question": "Which feature reduces compute cost?",
    "options": [
      "Fail-safe",
      "Auto Suspend",
      "Replication",
      "Materialized Views"
    ],
    "answer": 1,
    "explanation": "Auto suspend stops compute billing."
  },
  {
    "id": 58,
    "difficulty": "medium",
    "category": "security",
    "question": "Which authentication method is supported?",
    "options": [
      "OAuth",
      "Password",
      "MFA",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "Snowflake supports multiple auth methods."
  },
  {
    "id": 59,
    "difficulty": "medium",
    "category": "stages",
    "question": "Which stage type is managed by Snowflake?",
    "options": [
      "Azure Stage",
      "External Stage",
      "S3 Stage",
      "Internal Stage"
    ],
    "answer": 3,
    "explanation": "Internal stages are managed by Snowflake."
  },
  {
    "id": 60,
    "difficulty": "hard",
    "category": "stages",
    "question": "Which command removes files from a stage?",
    "options": [
      "REMOVE",
      "DROP FILE",
      "PURGE",
      "DELETE"
    ],
    "answer": 0,
    "explanation": "REMOVE deletes staged files."
  },
  {
    "id": 61,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is the main purpose of Snowflake virtual warehouses?",
    "options": [
      "Metadata management",
      "Data storage",
      "User authentication",
      "Query compute execution"
    ],
    "answer": 3,
    "explanation": "Virtual warehouses provide independent compute resources used to run queries."
  },
  {
    "id": 62,
    "difficulty": "easy",
    "category": "architecture",
    "question": "Where does Snowflake store table data?",
    "options": [
      "Virtual Warehouse",
      "Client Cache",
      "Cloud Storage Layer",
      "Metadata Layer"
    ],
    "answer": 2,
    "explanation": "Snowflake stores table data in the cloud storage layer."
  },
  {
    "id": 63,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which Snowflake layer manages query parsing and optimization?",
    "options": [
      "Cloud Services Layer",
      "Compute Layer",
      "Network Layer",
      "Storage Layer"
    ],
    "answer": 0,
    "explanation": "The Cloud Services layer manages query parsing, optimization, and metadata."
  },
  {
    "id": 64,
    "difficulty": "medium",
    "category": "query_optimization",
    "question": "Which feature allows Snowflake to prune unnecessary data blocks during queries?",
    "options": [
      "Micro-partition pruning",
      "Query acceleration",
      "Materialized views",
      "Result Cache"
    ],
    "answer": 0,
    "explanation": "Snowflake uses micro-partition metadata to skip irrelevant partitions."
  },
  {
    "id": 65,
    "difficulty": "medium",
    "category": "query_optimization",
    "question": "Which cache stores results of previously executed queries?",
    "options": [
      "Result cache",
      "Metadata cache",
      "Warehouse cache",
      "Query cache"
    ],
    "answer": 0,
    "explanation": "Snowflake result cache stores query results for reuse."
  },
  {
    "id": 66,
    "difficulty": "hard",
    "category": "query_optimization",
    "question": "What happens if underlying data changes after a cached query?",
    "options": [
      "Query fails",
      "Cache invalidates automatically",
      "Manual refresh required",
      "Cache remains valid"
    ],
    "answer": 1,
    "explanation": "Snowflake invalidates cached results when underlying data changes."
  },
  {
    "id": 67,
    "difficulty": "medium",
    "category": "streams",
    "question": "What is the primary purpose of a Snowflake stream?",
    "options": [
      "Track table changes",
      "Manage compute clusters",
      "Optimize query plans",
      "Store backup data"
    ],
    "answer": 0,
    "explanation": "Streams track change data capture (CDC) for tables."
  },
  {
    "id": 68,
    "difficulty": "medium",
    "category": "streams",
    "question": "Streams record which type of changes?",
    "options": [
      "INSERT UPDATE DELETE",
      "UPDATE only",
      "DDL changes",
      "INSERT only"
    ],
    "answer": 0,
    "explanation": "Streams track insert, update, and delete changes."
  },
  {
    "id": 69,
    "difficulty": "hard",
    "category": "streams",
    "question": "What happens when a stream is consumed by a task?",
    "options": [
      "Table resets",
      "Warehouse restarts",
      "Stream offset advances",
      "Data deletes from table"
    ],
    "answer": 2,
    "explanation": "Consuming a stream advances the stream offset."
  },
  {
    "id": 70,
    "difficulty": "medium",
    "category": "tasks",
    "question": "Which feature schedules SQL statements automatically?",
    "options": [
      "Tasks",
      "Warehouses",
      "Procedures",
      "Streams"
    ],
    "answer": 0,
    "explanation": "Tasks allow scheduled execution of SQL statements."
  },
  {
    "id": 71,
    "difficulty": "medium",
    "category": "tasks",
    "question": "Which syntax creates a scheduled Snowflake task?",
    "options": [
      "CREATE JOB",
      "CREATE SCHEDULE",
      "CREATE PROCESS",
      "CREATE TASK"
    ],
    "answer": 3,
    "explanation": "CREATE TASK defines a scheduled SQL job."
  },
  {
    "id": 72,
    "difficulty": "hard",
    "category": "tasks",
    "question": "Which object can trigger a task automatically when new data arrives?",
    "options": [
      "Stage",
      "Warehouse",
      "Stream",
      "External function"
    ],
    "answer": 2,
    "explanation": "Tasks can be triggered by streams detecting data changes."
  },
  {
    "id": 73,
    "difficulty": "medium",
    "category": "dynamic_tables",
    "question": "Dynamic tables are primarily used for what purpose?",
    "options": [
      "Automated data transformation pipelines",
      "External data sharing",
      "User authentication",
      "File staging"
    ],
    "answer": 0,
    "explanation": "Dynamic tables automate incremental data transformations."
  },
  {
    "id": 74,
    "difficulty": "medium",
    "category": "dynamic_tables",
    "question": "Dynamic tables refresh based on what parameter?",
    "options": [
      "Target lag",
      "Cache duration",
      "Query cost",
      "Warehouse size"
    ],
    "answer": 0,
    "explanation": "Dynamic tables maintain freshness using the TARGET_LAG parameter."
  },
  {
    "id": 75,
    "difficulty": "hard",
    "category": "dynamic_tables",
    "question": "Dynamic tables replace which traditional pipeline components?",
    "options": [
      "Streams and Tasks",
      "Materialized views",
      "External functions",
      "Stages"
    ],
    "answer": 0,
    "explanation": "Dynamic tables simplify pipelines by replacing streams and tasks."
  },
  {
    "id": 76,
    "difficulty": "medium",
    "category": "snowpark",
    "question": "What language is Snowpark primarily designed to support?",
    "options": [
      "JavaScript",
      "Swift",
      "COBOL",
      "Python"
    ],
    "answer": 3,
    "explanation": "Snowpark supports Python, Scala, and Java."
  },
  {
    "id": 77,
    "difficulty": "medium",
    "category": "snowpark",
    "question": "Snowpark allows developers to run code where?",
    "options": [
      "External servers",
      "Snowflake compute layer",
      "Browser",
      "Client machines"
    ],
    "answer": 1,
    "explanation": "Snowpark executes code inside Snowflake warehouses."
  },
  {
    "id": 78,
    "difficulty": "hard",
    "category": "snowpark",
    "question": "What is a Snowpark DataFrame?",
    "options": [
      "A distributed data abstraction",
      "A schema object",
      "A Snowflake table",
      "A warehouse"
    ],
    "answer": 0,
    "explanation": "Snowpark DataFrames represent distributed datasets similar to Spark."
  },
  {
    "id": 79,
    "difficulty": "medium",
    "category": "iceberg",
    "question": "Snowflake Iceberg tables store data where?",
    "options": [
      "Snowflake storage",
      "Local disk",
      "External object storage",
      "Virtual warehouses"
    ],
    "answer": 2,
    "explanation": "Iceberg tables store data in external object storage like S3."
  },
  {
    "id": 80,
    "difficulty": "medium",
    "category": "iceberg",
    "question": "Iceberg tables allow interoperability with which engines?",
    "options": [
      "Spark",
      "Trino",
      "Flink",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "Iceberg tables enable multi-engine access."
  },
  {
    "id": 81,
    "difficulty": "hard",
    "category": "iceberg",
    "question": "Which metadata format do Iceberg tables use?",
    "options": [
      "Binary logs",
      "JSON metadata files",
      "CSV",
      "SQL tables"
    ],
    "answer": 1,
    "explanation": "Iceberg uses JSON metadata manifests."
  },
  {
    "id": 82,
    "difficulty": "medium",
    "category": "security",
    "question": "Which Snowflake feature restricts access to specific rows?",
    "options": [
      "Network policies",
      "Row Access Policies",
      "Stages",
      "Column masking"
    ],
    "answer": 1,
    "explanation": "Row access policies enforce row-level security."
  },
  {
    "id": 83,
    "difficulty": "medium",
    "category": "security",
    "question": "What feature hides sensitive column values?",
    "options": [
      "Column masking policies",
      "Stages",
      "Tasks",
      "Streams"
    ],
    "answer": 0,
    "explanation": "Masking policies protect sensitive column data."
  },
  {
    "id": 84,
    "difficulty": "hard",
    "category": "security",
    "question": "Which object manages IP restrictions?",
    "options": [
      "RBAC policy",
      "Network policy",
      "Access rule",
      "Security policy"
    ],
    "answer": 1,
    "explanation": "Network policies restrict allowed IP addresses."
  },
  {
    "id": 85,
    "difficulty": "medium",
    "category": "rbac",
    "question": "In Snowflake RBAC, privileges are granted to what?",
    "options": [
      "Tables",
      "Warehouses",
      "Users only",
      "Roles"
    ],
    "answer": 3,
    "explanation": "Privileges are assigned to roles."
  },
  {
    "id": 86,
    "difficulty": "medium",
    "category": "rbac",
    "question": "Which role has the highest privileges in Snowflake?",
    "options": [
      "SECURITYADMIN",
      "SYSADMIN",
      "PUBLIC",
      "ACCOUNTADMIN"
    ],
    "answer": 3,
    "explanation": "ACCOUNTADMIN is the top-level role."
  },
  {
    "id": 87,
    "difficulty": "hard",
    "category": "rbac",
    "question": "Which role typically manages users and roles?",
    "options": [
      "ACCOUNTADMIN",
      "SYSADMIN",
      "SECURITYADMIN",
      "ORGADMIN"
    ],
    "answer": 2,
    "explanation": "SECURITYADMIN manages users and roles."
  },
  {
    "id": 88,
    "difficulty": "medium",
    "category": "cost",
    "question": "What primarily drives Snowflake compute cost?",
    "options": [
      "Number of users",
      "Schema count",
      "Storage usage",
      "Virtual warehouse runtime"
    ],
    "answer": 3,
    "explanation": "Compute cost depends on warehouse runtime."
  },
  {
    "id": 89,
    "difficulty": "medium",
    "category": "cost",
    "question": "Auto-suspend helps reduce costs by:",
    "options": [
      "Stopping idle warehouses",
      "Reducing storage",
      "Deleting data",
      "Compressing tables"
    ],
    "answer": 0,
    "explanation": "Auto-suspend stops compute when idle."
  },
  {
    "id": 90,
    "difficulty": "hard",
    "category": "cost",
    "question": "Which feature helps identify expensive queries?",
    "options": [
      "STAGE_HISTORY",
      "USER_HISTORY",
      "QUERY_HISTORY",
      "ROLE_HISTORY"
    ],
    "answer": 2,
    "explanation": "QUERY_HISTORY provides query execution metrics."
  },
  {
    "id": 91,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which Snowflake feature enables secure data sharing without copying data?",
    "options": [
      "External tables",
      "Snowpipe",
      "Data replication",
      "Secure data sharing"
    ],
    "answer": 3,
    "explanation": "Secure data sharing allows cross-account data access without copying."
  },
  {
    "id": 92,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is the smallest unit of data storage in Snowflake?",
    "options": [
      "Micro-partition",
      "Chunk",
      "File block",
      "Segment"
    ],
    "answer": 0,
    "explanation": "Snowflake automatically partitions data into micro-partitions."
  },
  {
    "id": 93,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Approximate size of a Snowflake micro-partition?",
    "options": [
      "1MB",
      "16MB",
      "50MB",
      "200MB"
    ],
    "answer": 1,
    "explanation": "Micro-partitions are typically around 16MB compressed."
  },
  {
    "id": 94,
    "difficulty": "medium",
    "category": "query_optimization",
    "question": "Which feature precomputes query results for faster execution?",
    "options": [
      "Streams",
      "Stages",
      "Tasks",
      "Materialized views"
    ],
    "answer": 3,
    "explanation": "Materialized views store precomputed query results."
  },
  {
    "id": 95,
    "difficulty": "hard",
    "category": "query_optimization",
    "question": "Which function analyzes query execution plans?",
    "options": [
      "EXPLAIN",
      "PLAN",
      "PROFILE",
      "ANALYZE"
    ],
    "answer": 0,
    "explanation": "EXPLAIN shows query execution plans."
  },
  {
    "id": 96,
    "difficulty": "medium",
    "category": "snowpipe",
    "question": "Snowpipe is used for what purpose?",
    "options": [
      "Query optimization",
      "Warehouse scaling",
      "Continuous data ingestion",
      "Batch data loading"
    ],
    "answer": 2,
    "explanation": "Snowpipe enables automatic continuous ingestion."
  },
  {
    "id": 97,
    "difficulty": "medium",
    "category": "snowpipe",
    "question": "Snowpipe is typically triggered by:",
    "options": [
      "Warehouse restart",
      "Manual SQL queries",
      "File arrival events",
      "User login"
    ],
    "answer": 2,
    "explanation": "Snowpipe listens for new file events."
  },
  {
    "id": 98,
    "difficulty": "hard",
    "category": "snowpipe",
    "question": "Snowpipe relies on which messaging service?",
    "options": [
      "SMTP",
      "Kafka",
      "SQS / PubSub",
      "RabbitMQ"
    ],
    "answer": 2,
    "explanation": "Snowpipe uses cloud event messaging such as SQS."
  },
  {
    "id": 99,
    "difficulty": "medium",
    "category": "governance",
    "question": "Which feature tracks data lineage in Snowflake?",
    "options": [
      "Streams",
      "Access history",
      "Tasks",
      "Object dependencies"
    ],
    "answer": 3,
    "explanation": "Object dependencies track lineage between objects."
  },
  {
    "id": 100,
    "difficulty": "medium",
    "category": "governance",
    "question": "Which view tracks object access for auditing?",
    "options": [
      "TABLE_HISTORY",
      "QUERY_HISTORY",
      "LOGIN_HISTORY",
      "ACCESS_HISTORY"
    ],
    "answer": 3,
    "explanation": "ACCESS_HISTORY tracks object usage."
  },
  {
    "id": 101,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which Snowflake layer manages authentication and access control?",
    "options": [
      "Warehouse Layer",
      "Storage Layer",
      "Compute Layer",
      "Cloud Services Layer"
    ],
    "answer": 3,
    "explanation": "Authentication, metadata, and security are handled by the Cloud Services layer."
  },
  {
    "id": 102,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Snowflake separates storage and compute primarily to:",
    "options": [
      "Improve query syntax",
      "Reduce SQL complexity",
      "Allow independent scaling",
      "Increase network speed"
    ],
    "answer": 2,
    "explanation": "Snowflake's architecture allows compute and storage to scale independently."
  },
  {
    "id": 103,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What component maintains Snowflake metadata including schemas and roles?",
    "options": [
      "External metadata service",
      "Cloud Services",
      "Warehouse Cache",
      "Micro-partition catalog"
    ],
    "answer": 1,
    "explanation": "Metadata is stored and managed in the Cloud Services layer."
  },
  {
    "id": 104,
    "difficulty": "medium",
    "category": "query_optimization",
    "question": "Which Snowflake feature automatically organizes table data for pruning?",
    "options": [
      "Automatic clustering",
      "Streams",
      "Stages",
      "Materialized views"
    ],
    "answer": 0,
    "explanation": "Automatic clustering reorganizes micro-partitions to improve pruning."
  },
  {
    "id": 105,
    "difficulty": "medium",
    "category": "query_optimization",
    "question": "Which command shows query performance metrics?",
    "options": [
      "EXPLAIN QUERY",
      "QUERY_HISTORY",
      "SHOW PROFILE",
      "QUERY_PROFILE"
    ],
    "answer": 3,
    "explanation": "QUERY_PROFILE provides detailed query execution metrics."
  },
  {
    "id": 106,
    "difficulty": "hard",
    "category": "query_optimization",
    "question": "Which factor most affects micro-partition pruning effectiveness?",
    "options": [
      "User roles",
      "Warehouse size",
      "Clustering keys",
      "SQL formatting"
    ],
    "answer": 2,
    "explanation": "Clustering keys improve pruning by organizing micro-partition metadata."
  },
  {
    "id": 107,
    "difficulty": "medium",
    "category": "streams",
    "question": "A stream on a table tracks changes since:",
    "options": [
      "Table creation",
      "Last warehouse restart",
      "Last stream consumption",
      "Last query"
    ],
    "answer": 2,
    "explanation": "Streams track changes since the last offset consumed."
  },
  {
    "id": 108,
    "difficulty": "medium",
    "category": "streams",
    "question": "Which stream type tracks changes on views?",
    "options": [
      "Append-only streams",
      "View streams",
      "Standard streams",
      "Dynamic streams"
    ],
    "answer": 1,
    "explanation": "View streams capture changes from underlying tables."
  },
  {
    "id": 109,
    "difficulty": "hard",
    "category": "streams",
    "question": "Which stream type only tracks inserts?",
    "options": [
      "Delta stream",
      "Standard stream",
      "Append-only stream",
      "View stream"
    ],
    "answer": 2,
    "explanation": "Append-only streams track insert operations only."
  },
  {
    "id": 110,
    "difficulty": "medium",
    "category": "tasks",
    "question": "Tasks in Snowflake execute:",
    "options": [
      "Shell scripts",
      "SQL statements",
      "Python scripts",
      "Java code"
    ],
    "answer": 1,
    "explanation": "Tasks run SQL statements or stored procedures."
  },
  {
    "id": 111,
    "difficulty": "medium",
    "category": "tasks",
    "question": "Which parameter controls task scheduling frequency?",
    "options": [
      "INTERVAL",
      "SCHEDULE",
      "TASK_RATE",
      "CRON"
    ],
    "answer": 1,
    "explanation": "The SCHEDULE parameter defines execution timing."
  },
  {
    "id": 112,
    "difficulty": "hard",
    "category": "tasks",
    "question": "What enables task dependency chains?",
    "options": [
      "TASK TREE",
      "TASK GRAPH",
      "TASK LINK",
      "PIPELINE MODE"
    ],
    "answer": 1,
    "explanation": "Task graphs allow dependencies between tasks."
  },
  {
    "id": 113,
    "difficulty": "medium",
    "category": "dynamic_tables",
    "question": "Dynamic tables update based on:",
    "options": [
      "Manual triggers",
      "Refresh schedules",
      "Warehouse uptime",
      "Target lag freshness"
    ],
    "answer": 3,
    "explanation": "Dynamic tables maintain freshness via target lag."
  },
  {
    "id": 114,
    "difficulty": "hard",
    "category": "dynamic_tables",
    "question": "Dynamic tables are internally implemented using:",
    "options": [
      "Query caches",
      "External tables",
      "Streams and tasks",
      "Materialized views"
    ],
    "answer": 2,
    "explanation": "Dynamic tables leverage streams and tasks under the hood."
  },
  {
    "id": 115,
    "difficulty": "medium",
    "category": "snowpark",
    "question": "Snowpark enables developers to:",
    "options": [
      "Manage roles",
      "Run Python inside Snowflake",
      "Store files",
      "Replace warehouses"
    ],
    "answer": 1,
    "explanation": "Snowpark runs developer code inside Snowflake compute."
  },
  {
    "id": 116,
    "difficulty": "hard",
    "category": "snowpark",
    "question": "Snowpark stored procedures are executed where?",
    "options": [
      "External container",
      "Cloud services layer",
      "Warehouse compute layer",
      "Client environment"
    ],
    "answer": 2,
    "explanation": "Snowpark procedures run in warehouse compute."
  },
  {
    "id": 117,
    "difficulty": "medium",
    "category": "iceberg",
    "question": "Iceberg tables support which type of storage?",
    "options": [
      "External object storage",
      "Local disk",
      "Warehouse storage",
      "Temporary cache"
    ],
    "answer": 0,
    "explanation": "Iceberg tables store data in external object storage."
  },
  {
    "id": 118,
    "difficulty": "hard",
    "category": "iceberg",
    "question": "Which Iceberg feature enables snapshot-based data versioning?",
    "options": [
      "Metadata manifests",
      "Schema registry",
      "External catalog",
      "Partition logs"
    ],
    "answer": 0,
    "explanation": "Iceberg metadata manifests track snapshots."
  },
  {
    "id": 119,
    "difficulty": "medium",
    "category": "security",
    "question": "Which Snowflake feature masks column values dynamically?",
    "options": [
      "Masking policies",
      "Tasks",
      "Streams",
      "Views"
    ],
    "answer": 0,
    "explanation": "Masking policies dynamically hide sensitive values."
  },
  {
    "id": 120,
    "difficulty": "hard",
    "category": "security",
    "question": "Which feature allows conditional data masking?",
    "options": [
      "Row access policies",
      "Secure views",
      "Role-aware masking policies",
      "Network policies"
    ],
    "answer": 2,
    "explanation": "Masking policies can apply conditions based on roles."
  },
  {
    "id": 121,
    "difficulty": "medium",
    "category": "rbac",
    "question": "Which object grants privileges to users indirectly?",
    "options": [
      "Roles",
      "Schemas",
      "Warehouses",
      "Tables"
    ],
    "answer": 0,
    "explanation": "Roles grant privileges which are assigned to users."
  },
  {
    "id": 122,
    "difficulty": "hard",
    "category": "rbac",
    "question": "Which Snowflake feature prevents privilege escalation?",
    "options": [
      "Network policies",
      "Stages",
      "Task chaining",
      "Least privilege RBAC"
    ],
    "answer": 3,
    "explanation": "RBAC with least privilege prevents privilege escalation."
  },
  {
    "id": 123,
    "difficulty": "medium",
    "category": "cost",
    "question": "Which feature automatically suspends idle warehouses?",
    "options": [
      "COST_OPTIMIZER",
      "AUTO_SUSPEND",
      "QUERY_LIMIT",
      "WAREHOUSE_PAUSE"
    ],
    "answer": 1,
    "explanation": "AUTO_SUSPEND stops idle warehouses to reduce costs."
  },
  {
    "id": 124,
    "difficulty": "medium",
    "category": "cost",
    "question": "Which warehouse feature allows concurrency scaling?",
    "options": [
      "Multi-cluster warehouses",
      "Elastic compute",
      "Query acceleration",
      "Warehouse cache"
    ],
    "answer": 0,
    "explanation": "Multi-cluster warehouses scale compute clusters."
  },
  {
    "id": 125,
    "difficulty": "hard",
    "category": "cost",
    "question": "Which view helps identify warehouse credit consumption?",
    "options": [
      "QUERY_HISTORY",
      "COST_USAGE",
      "TABLE_STORAGE_METRICS",
      "WAREHOUSE_METERING_HISTORY"
    ],
    "answer": 3,
    "explanation": "WAREHOUSE_METERING_HISTORY shows credit usage."
  },
  {
    "id": 126,
    "difficulty": "medium",
    "category": "query_optimization",
    "question": "Which query pattern can reduce scan size?",
    "options": [
      "Nested queries",
      "Cross joins",
      "SELECT *",
      "Column pruning"
    ],
    "answer": 3,
    "explanation": "Selecting only required columns reduces scanned data."
  },
  {
    "id": 127,
    "difficulty": "hard",
    "category": "query_optimization",
    "question": "Which feature accelerates queries by caching intermediate results?",
    "options": [
      "Local disk cache",
      "Result cache",
      "Micro cache",
      "Warehouse cache"
    ],
    "answer": 3,
    "explanation": "Warehouse cache stores frequently accessed data."
  },
  {
    "id": 128,
    "difficulty": "medium",
    "category": "governance",
    "question": "Which Snowflake feature tracks object-level access?",
    "options": [
      "QUERY_HISTORY",
      "LOGIN_HISTORY",
      "SESSION_HISTORY",
      "ACCESS_HISTORY"
    ],
    "answer": 3,
    "explanation": "ACCESS_HISTORY records object-level access."
  },
  {
    "id": 129,
    "difficulty": "hard",
    "category": "governance",
    "question": "Which feature supports cross-account data governance?",
    "options": [
      "External stages",
      "Secure data sharing",
      "Streams",
      "Tasks"
    ],
    "answer": 1,
    "explanation": "Secure data sharing allows governed cross-account data access."
  },
  {
    "id": 130,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which component handles SQL compilation?",
    "options": [
      "Cloud services layer",
      "Compute layer",
      "Storage layer",
      "Warehouse layer"
    ],
    "answer": 0,
    "explanation": "SQL compilation happens in the cloud services layer."
  },
  {
    "id": 131,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which Snowflake feature enables automatic query acceleration for large scans?",
    "options": [
      "Search Optimization Service",
      "Auto Clustering",
      "Warehouse Scaling",
      "Query Acceleration Service"
    ],
    "answer": 3,
    "explanation": "Query Acceleration Service offloads parts of large queries to shared compute."
  },
  {
    "id": 132,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which service automatically organizes micro-partitions to improve pruning?",
    "options": [
      "Materialized Views",
      "Automatic Clustering",
      "Search Optimization",
      "Streams"
    ],
    "answer": 1,
    "explanation": "Automatic clustering reorganizes micro-partitions to improve performance."
  },
  {
    "id": 133,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which Snowflake feature provides cross-region disaster recovery?",
    "options": [
      "Warehouse Backup",
      "Replication Groups",
      "Failover Groups",
      "Stage Replication"
    ],
    "answer": 2,
    "explanation": "Failover groups enable cross-region disaster recovery."
  },
  {
    "id": 134,
    "difficulty": "medium",
    "category": "snowpark",
    "question": "Snowpark allows which type of execution model?",
    "options": [
      "Edge compute",
      "Client-side processing",
      "In-database compute execution",
      "Serverless Python runtime"
    ],
    "answer": 2,
    "explanation": "Snowpark executes code directly inside Snowflake warehouses."
  },
  {
    "id": 135,
    "difficulty": "hard",
    "category": "snowpark",
    "question": "Which API structure is central to Snowpark transformations?",
    "options": [
      "Snowpark DataFrame API",
      "Compute Handler",
      "Warehouse Engine",
      "SQL Executor"
    ],
    "answer": 0,
    "explanation": "Snowpark uses DataFrame APIs similar to Spark."
  },
  {
    "id": 136,
    "difficulty": "medium",
    "category": "streams",
    "question": "Which object records row-level changes for CDC pipelines?",
    "options": [
      "Stage",
      "Task",
      "Pipe",
      "Stream"
    ],
    "answer": 3,
    "explanation": "Streams capture change data for tables."
  },
  {
    "id": 137,
    "difficulty": "hard",
    "category": "streams",
    "question": "What happens when a stream becomes stale?",
    "options": [
      "Stream becomes unreadable",
      "Stream resets automatically",
      "Stream deletes data",
      "Offset resets"
    ],
    "answer": 0,
    "explanation": "If data retention passes, streams can become stale."
  },
  {
    "id": 138,
    "difficulty": "medium",
    "category": "tasks",
    "question": "Which Snowflake object schedules recurring SQL execution?",
    "options": [
      "Stream",
      "Task",
      "Pipeline",
      "Procedure"
    ],
    "answer": 1,
    "explanation": "Tasks schedule SQL execution."
  },
  {
    "id": 139,
    "difficulty": "hard",
    "category": "tasks",
    "question": "Which feature allows dependency chains between tasks?",
    "options": [
      "Stream triggers",
      "Warehouse scaling",
      "Task graphs",
      "SQL pipelines"
    ],
    "answer": 2,
    "explanation": "Task graphs allow dependent tasks."
  },
  {
    "id": 140,
    "difficulty": "medium",
    "category": "dynamic_tables",
    "question": "Dynamic tables aim to replace which ETL pattern?",
    "options": [
      "Secure views",
      "External stages",
      "Streams + Tasks pipelines",
      "Stored procedures"
    ],
    "answer": 2,
    "explanation": "Dynamic tables simplify pipelines built using streams and tasks."
  },
  {
    "id": 141,
    "difficulty": "medium",
    "category": "dynamic_tables",
    "question": "Dynamic table freshness is controlled using:",
    "options": [
      "PIPELINE_DELAY",
      "SCHEDULE_INTERVAL",
      "REFRESH_TIME",
      "TARGET_LAG"
    ],
    "answer": 3,
    "explanation": "TARGET_LAG determines freshness goals."
  },
  {
    "id": 142,
    "difficulty": "hard",
    "category": "dynamic_tables",
    "question": "Dynamic tables internally rely on:",
    "options": [
      "External compute",
      "Materialized views",
      "Stages",
      "Streams and tasks"
    ],
    "answer": 3,
    "explanation": "Dynamic tables use streams and tasks internally."
  },
  {
    "id": 143,
    "difficulty": "medium",
    "category": "iceberg",
    "question": "Iceberg tables allow Snowflake to query:",
    "options": [
      "JSON metadata only",
      "Temporary tables",
      "External open table formats",
      "Only Snowflake tables"
    ],
    "answer": 2,
    "explanation": "Iceberg tables support open table formats."
  },
  {
    "id": 144,
    "difficulty": "hard",
    "category": "iceberg",
    "question": "Which engine interoperability is supported by Iceberg?",
    "options": [
      "Spark",
      "Trino",
      "Flink",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "Iceberg supports multiple engines."
  },
  {
    "id": 145,
    "difficulty": "medium",
    "category": "security",
    "question": "Which feature masks sensitive column values dynamically?",
    "options": [
      "Views",
      "Streams",
      "Masking policies",
      "Tasks"
    ],
    "answer": 2,
    "explanation": "Masking policies dynamically mask column data."
  },
  {
    "id": 146,
    "difficulty": "hard",
    "category": "security",
    "question": "Which Snowflake feature enforces row-level filtering?",
    "options": [
      "Secure views",
      "Network policies",
      "Row access policies",
      "Masking policies"
    ],
    "answer": 2,
    "explanation": "Row access policies filter rows dynamically."
  },
  {
    "id": 147,
    "difficulty": "medium",
    "category": "rbac",
    "question": "Privileges in Snowflake are granted to:",
    "options": [
      "Users",
      "Roles",
      "Schemas",
      "Tables"
    ],
    "answer": 1,
    "explanation": "Privileges are assigned to roles."
  },
  {
    "id": 148,
    "difficulty": "hard",
    "category": "rbac",
    "question": "Which role manages users and roles?",
    "options": [
      "SYSADMIN",
      "SECURITYADMIN",
      "ACCOUNTADMIN",
      "ORGADMIN"
    ],
    "answer": 1,
    "explanation": "SECURITYADMIN manages users and roles."
  },
  {
    "id": 149,
    "difficulty": "medium",
    "category": "cost",
    "question": "Which parameter suspends warehouses when idle?",
    "options": [
      "COST_LIMIT",
      "AUTO_SUSPEND",
      "AUTO_STOP",
      "WAREHOUSE_TIMEOUT"
    ],
    "answer": 1,
    "explanation": "AUTO_SUSPEND pauses warehouses when idle."
  },
  {
    "id": 150,
    "difficulty": "hard",
    "category": "cost",
    "question": "Which table shows compute credit usage history?",
    "options": [
      "ACCOUNT_HISTORY",
      "WAREHOUSE_METERING_HISTORY",
      "COST_USAGE",
      "QUERY_HISTORY"
    ],
    "answer": 1,
    "explanation": "Warehouse metering history shows compute credit usage."
  },
  {
    "id": 151,
    "difficulty": "medium",
    "category": "snowpipe",
    "question": "What is the primary purpose of Snowpipe Streaming?",
    "options": [
      "Low-latency continuous data ingestion",
      "Query acceleration",
      "Batch loading large datasets",
      "Warehouse auto scaling"
    ],
    "answer": 0,
    "explanation": "Snowpipe Streaming enables low-latency ingestion of streaming data."
  },
  {
    "id": 152,
    "difficulty": "hard",
    "category": "snowpipe",
    "question": "Snowpipe Streaming eliminates the need for which component?",
    "options": [
      "Streams",
      "Tasks",
      "Cloud messaging services",
      "External stages"
    ],
    "answer": 2,
    "explanation": "Snowpipe Streaming allows direct ingestion without external cloud messaging."
  },
  {
    "id": 153,
    "difficulty": "medium",
    "category": "snowpipe",
    "question": "Which Snowflake object processes files for continuous ingestion?",
    "options": [
      "WAREHOUSE",
      "PIPE",
      "TASK",
      "STREAM"
    ],
    "answer": 1,
    "explanation": "Pipes automate data ingestion using Snowpipe."
  },
  {
    "id": 154,
    "difficulty": "hard",
    "category": "snowpipe",
    "question": "Snowpipe auto-ingest typically relies on:",
    "options": [
      "Task chains",
      "Warehouse triggers",
      "SQL polling",
      "Cloud event notifications"
    ],
    "answer": 3,
    "explanation": "Snowpipe uses cloud storage event notifications."
  },
  {
    "id": 155,
    "difficulty": "medium",
    "category": "search_optimization",
    "question": "What is the purpose of Search Optimization Service?",
    "options": [
      "Optimize clustering keys",
      "Improve selective query performance",
      "Reduce storage cost",
      "Increase warehouse size"
    ],
    "answer": 1,
    "explanation": "Search optimization accelerates highly selective queries."
  },
  {
    "id": 156,
    "difficulty": "hard",
    "category": "search_optimization",
    "question": "Which query pattern benefits most from Search Optimization Service?",
    "options": [
      "Point lookups",
      "Bulk inserts",
      "Large aggregations",
      "Full table scans"
    ],
    "answer": 0,
    "explanation": "Search optimization improves point lookup performance."
  },
  {
    "id": 157,
    "difficulty": "medium",
    "category": "search_optimization",
    "question": "Search Optimization Service works by creating:",
    "options": [
      "Cached tables",
      "Additional metadata indexes",
      "Temporary partitions",
      "Materialized views"
    ],
    "answer": 1,
    "explanation": "Search optimization builds metadata structures for faster lookup."
  },
  {
    "id": 158,
    "difficulty": "hard",
    "category": "search_optimization",
    "question": "Which table type supports Search Optimization Service?",
    "options": [
      "Permanent tables",
      "Temporary tables",
      "Transient tables",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "Search optimization can be enabled on multiple table types."
  },
  {
    "id": 159,
    "difficulty": "medium",
    "category": "hybrid_tables",
    "question": "Hybrid tables in Snowflake combine:",
    "options": [
      "External and internal tables",
      "Transactional and analytical workloads",
      "Batch and streaming ingestion",
      "Structured and semi-structured data"
    ],
    "answer": 1,
    "explanation": "Hybrid tables support transactional and analytical operations."
  },
  {
    "id": 160,
    "difficulty": "hard",
    "category": "hybrid_tables",
    "question": "Which workload type benefits most from hybrid tables?",
    "options": [
      "Static historical analytics",
      "Cold data storage",
      "High-throughput transactional workloads",
      "Data sharing"
    ],
    "answer": 2,
    "explanation": "Hybrid tables support transactional workloads alongside analytics."
  },
  {
    "id": 161,
    "difficulty": "medium",
    "category": "query_acceleration",
    "question": "Query Acceleration Service improves performance by:",
    "options": [
      "Reducing SQL parsing time",
      "Increasing cache size",
      "Adding extra compute resources automatically",
      "Compressing micro-partitions"
    ],
    "answer": 2,
    "explanation": "Query Acceleration Service offloads query processing to additional compute."
  },
  {
    "id": 162,
    "difficulty": "hard",
    "category": "query_acceleration",
    "question": "Query Acceleration Service is most beneficial for:",
    "options": [
      "Large scan queries with selective filters",
      "DDL statements",
      "Small point lookups",
      "Metadata queries"
    ],
    "answer": 0,
    "explanation": "The service accelerates large scan queries."
  },
  {
    "id": 163,
    "difficulty": "medium",
    "category": "replication",
    "question": "Which Snowflake feature enables database replication across regions?",
    "options": [
      "Stages",
      "Streams",
      "Secure sharing",
      "Database replication"
    ],
    "answer": 3,
    "explanation": "Database replication copies data across regions."
  },
  {
    "id": 164,
    "difficulty": "hard",
    "category": "replication",
    "question": "Replication between Snowflake accounts is managed using:",
    "options": [
      "Task graphs",
      "External stages",
      "Secure views",
      "Replication groups"
    ],
    "answer": 3,
    "explanation": "Replication groups manage object replication."
  },
  {
    "id": 165,
    "difficulty": "medium",
    "category": "failover",
    "question": "Failover groups are used for:",
    "options": [
      "Cost management",
      "Data masking",
      "Disaster recovery",
      "Query optimization"
    ],
    "answer": 2,
    "explanation": "Failover groups enable disaster recovery across regions."
  },
  {
    "id": 166,
    "difficulty": "hard",
    "category": "failover",
    "question": "Failover groups replicate which objects?",
    "options": [
      "Databases",
      "Users",
      "Roles",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "Failover groups replicate databases, roles, and users."
  },
  {
    "id": 167,
    "difficulty": "medium",
    "category": "governance",
    "question": "Which feature tracks detailed object usage?",
    "options": [
      "ACCESS_HISTORY",
      "QUERY_HISTORY",
      "ROLE_HISTORY",
      "LOGIN_HISTORY"
    ],
    "answer": 0,
    "explanation": "ACCESS_HISTORY tracks detailed object access."
  },
  {
    "id": 168,
    "difficulty": "hard",
    "category": "governance",
    "question": "Which feature supports column-level data protection?",
    "options": [
      "Stages",
      "Streams",
      "Tasks",
      "Masking policies"
    ],
    "answer": 3,
    "explanation": "Masking policies protect sensitive column data."
  },
  {
    "id": 169,
    "difficulty": "medium",
    "category": "security",
    "question": "Which policy restricts login IP addresses?",
    "options": [
      "Task policy",
      "Network policy",
      "Masking policy",
      "Row access policy"
    ],
    "answer": 1,
    "explanation": "Network policies restrict allowed IP ranges."
  },
  {
    "id": 170,
    "difficulty": "hard",
    "category": "security",
    "question": "Which feature allows conditional data visibility based on roles?",
    "options": [
      "Row access policies",
      "Masking policies",
      "Secure views",
      "Stages"
    ],
    "answer": 0,
    "explanation": "Row access policies filter rows dynamically based on roles."
  },
  {
    "id": 171,
    "difficulty": "medium",
    "category": "cost",
    "question": "Which Snowflake feature helps reduce compute cost during idle periods?",
    "options": [
      "AUTO_SUSPEND",
      "Search optimization",
      "Auto clustering",
      "Query acceleration"
    ],
    "answer": 0,
    "explanation": "AUTO_SUSPEND pauses warehouses during inactivity."
  },
  {
    "id": 172,
    "difficulty": "hard",
    "category": "cost",
    "question": "Which table tracks Snowflake credit usage per warehouse?",
    "options": [
      "QUERY_HISTORY",
      "WAREHOUSE_METERING_HISTORY",
      "COST_MONITOR",
      "ACCOUNT_USAGE"
    ],
    "answer": 1,
    "explanation": "WAREHOUSE_METERING_HISTORY shows credit consumption."
  },
  {
    "id": 173,
    "difficulty": "medium",
    "category": "performance",
    "question": "Which feature improves lookup performance on large tables?",
    "options": [
      "Streams",
      "Stages",
      "Search Optimization Service",
      "Tasks"
    ],
    "answer": 2,
    "explanation": "Search optimization improves selective lookup queries."
  },
  {
    "id": 174,
    "difficulty": "hard",
    "category": "performance",
    "question": "Which query design improves scan efficiency?",
    "options": [
      "Column pruning",
      "Cartesian joins",
      "SELECT * queries",
      "Nested joins"
    ],
    "answer": 0,
    "explanation": "Selecting only required columns reduces scanned data."
  },
  {
    "id": 175,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which Snowflake service parses SQL queries?",
    "options": [
      "Cloud Services layer",
      "Compute layer",
      "Warehouse layer",
      "Storage layer"
    ],
    "answer": 0,
    "explanation": "The cloud services layer parses SQL."
  },
  {
    "id": 176,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which component stores Snowflake metadata?",
    "options": [
      "Compute layer",
      "External catalog",
      "Cloud Services layer",
      "Warehouse cache"
    ],
    "answer": 2,
    "explanation": "Metadata is stored in the cloud services layer."
  },
  {
    "id": 177,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What enables independent scaling of compute resources?",
    "options": [
      "Streams",
      "Virtual warehouses",
      "Dynamic tables",
      "Stages"
    ],
    "answer": 1,
    "explanation": "Virtual warehouses scale compute independently."
  },
  {
    "id": 178,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which feature allows multiple clusters per warehouse?",
    "options": [
      "Auto suspend",
      "Materialized views",
      "Task graph",
      "Multi-cluster warehouse"
    ],
    "answer": 3,
    "explanation": "Multi-cluster warehouses scale concurrency."
  },
  {
    "id": 179,
    "difficulty": "medium",
    "category": "streams_tasks",
    "question": "Which pipeline pattern is commonly used for CDC processing?",
    "options": [
      "Stream → Task → Merge",
      "Stage → Task → View",
      "View → Stream → Task",
      "Task → Stream → Table"
    ],
    "answer": 0,
    "explanation": "Streams feed tasks that merge changes."
  },
  {
    "id": 180,
    "difficulty": "hard",
    "category": "streams_tasks",
    "question": "Which parameter prevents tasks from running simultaneously?",
    "options": [
      "TASK_TIMEOUT",
      "EXECUTION_POLICY",
      "QUERY_LIMIT",
      "ALLOW_OVERLAPPING_EXECUTION"
    ],
    "answer": 3,
    "explanation": "This parameter controls overlapping execution."
  },
  {
    "id": 181,
    "difficulty": "medium",
    "category": "snowpark",
    "question": "Snowpark DataFrames allow developers to:",
    "options": [
      "Write distributed data transformations",
      "Manage warehouses",
      "Configure stages",
      "Create roles"
    ],
    "answer": 0,
    "explanation": "Snowpark DataFrames enable distributed transformations."
  },
  {
    "id": 182,
    "difficulty": "hard",
    "category": "snowpark",
    "question": "Which language is NOT supported by Snowpark?",
    "options": [
      "Scala",
      "Go",
      "Java",
      "Python"
    ],
    "answer": 1,
    "explanation": "Snowpark supports Python, Scala, and Java."
  },
  {
    "id": 183,
    "difficulty": "medium",
    "category": "dynamic_tables",
    "question": "Dynamic tables help automate:",
    "options": [
      "Data sharing",
      "Warehouse scaling",
      "Data transformation pipelines",
      "Security policies"
    ],
    "answer": 2,
    "explanation": "Dynamic tables automate transformation pipelines."
  },
  {
    "id": 184,
    "difficulty": "hard",
    "category": "dynamic_tables",
    "question": "Dynamic tables track freshness using:",
    "options": [
      "TARGET_LAG",
      "REFRESH_DELAY",
      "SCHEDULE_INTERVAL",
      "PIPELINE_RATE"
    ],
    "answer": 0,
    "explanation": "TARGET_LAG defines freshness expectations."
  },
  {
    "id": 185,
    "difficulty": "medium",
    "category": "iceberg",
    "question": "Iceberg tables store data primarily in:",
    "options": [
      "External object storage",
      "Temporary cache",
      "Warehouse storage",
      "Local disks"
    ],
    "answer": 0,
    "explanation": "Iceberg tables use external object storage."
  },
  {
    "id": 186,
    "difficulty": "hard",
    "category": "iceberg",
    "question": "Which metadata format does Iceberg rely on?",
    "options": [
      "Manifest files",
      "SQL tables",
      "CSV files",
      "Binary logs"
    ],
    "answer": 0,
    "explanation": "Iceberg uses manifest files for metadata."
  },
  {
    "id": 187,
    "difficulty": "medium",
    "category": "security",
    "question": "Which Snowflake feature hides sensitive column data?",
    "options": [
      "Masking policies",
      "Tasks",
      "Stages",
      "Streams"
    ],
    "answer": 0,
    "explanation": "Masking policies hide column values."
  },
  {
    "id": 188,
    "difficulty": "hard",
    "category": "security",
    "question": "Which feature enforces row-level filtering based on user roles?",
    "options": [
      "Row access policies",
      "Secure views",
      "External tables",
      "Masking policies"
    ],
    "answer": 0,
    "explanation": "Row access policies enforce row filtering."
  },
  {
    "id": 189,
    "difficulty": "medium",
    "category": "governance",
    "question": "Which view tracks login attempts?",
    "options": [
      "LOGIN_HISTORY",
      "SESSION_HISTORY",
      "ACCESS_HISTORY",
      "QUERY_HISTORY"
    ],
    "answer": 0,
    "explanation": "LOGIN_HISTORY tracks login events."
  },
  {
    "id": 190,
    "difficulty": "hard",
    "category": "governance",
    "question": "Which object dependency feature supports lineage tracking?",
    "options": [
      "ROLE_HISTORY",
      "OBJECT_DEPENDENCIES",
      "TABLE_USAGE",
      "QUERY_HISTORY"
    ],
    "answer": 1,
    "explanation": "Object dependencies track lineage."
  },
  {
    "id": 191,
    "difficulty": "medium",
    "category": "performance",
    "question": "Which feature precomputes query results?",
    "options": [
      "Stages",
      "Materialized views",
      "Streams",
      "Tasks"
    ],
    "answer": 1,
    "explanation": "Materialized views store precomputed query results."
  },
  {
    "id": 192,
    "difficulty": "hard",
    "category": "performance",
    "question": "Which service improves large scan query performance?",
    "options": [
      "Dynamic Tables",
      "Query Acceleration Service",
      "Search Optimization",
      "Auto Clustering"
    ],
    "answer": 1,
    "explanation": "Query Acceleration Service accelerates large scans."
  },
  {
    "id": 193,
    "difficulty": "medium",
    "category": "cost",
    "question": "Which command displays warehouse credit usage?",
    "options": [
      "ACCOUNT_USAGE",
      "SHOW COST",
      "QUERY_HISTORY",
      "WAREHOUSE_METERING_HISTORY"
    ],
    "answer": 3,
    "explanation": "Warehouse metering history tracks credits."
  },
  {
    "id": 194,
    "difficulty": "hard",
    "category": "cost",
    "question": "Which query pattern wastes the most compute resources?",
    "options": [
      "Selective joins",
      "SELECT *",
      "Column filtering",
      "Partition pruning"
    ],
    "answer": 1,
    "explanation": "SELECT * scans unnecessary columns."
  },
  {
    "id": 195,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which Snowflake feature enables secure cross-account data sharing?",
    "options": [
      "Streams",
      "Replication",
      "Stages",
      "Secure Data Sharing"
    ],
    "answer": 3,
    "explanation": "Secure data sharing allows live sharing without copying data."
  },
  {
    "id": 196,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which feature allows cross-cloud replication of databases?",
    "options": [
      "Dynamic tables",
      "Failover groups",
      "Materialized views",
      "Search optimization"
    ],
    "answer": 1,
    "explanation": "Failover groups support cross-cloud replication."
  },
  {
    "id": 198,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Approximate compressed size of a Snowflake micro-partition?",
    "options": [
      "16MB",
      "256MB",
      "100MB",
      "1MB"
    ],
    "answer": 0,
    "explanation": "Micro-partitions are roughly 16MB compressed."
  },
  {
    "id": 199,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which Snowflake component executes queries?",
    "options": [
      "Storage layer",
      "Metadata layer",
      "Cloud services",
      "Virtual warehouse"
    ],
    "answer": 3,
    "explanation": "Virtual warehouses perform compute execution."
  },
  {
    "id": 200,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which layer handles query optimization and metadata management?",
    "options": [
      "Warehouse cache",
      "Storage layer",
      "Compute layer",
      "Cloud Services layer"
    ],
    "answer": 3,
    "explanation": "The cloud services layer handles query optimization and metadata."
  },
  {
    "id": 201,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which feature enables multi-region replication of Snowflake databases?",
    "options": [
      "Streams",
      "Database replication",
      "Secure sharing",
      "External tables"
    ],
    "answer": 1,
    "explanation": "Database replication enables multi-region data replication."
  },
  {
    "id": 202,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which Snowflake object coordinates disaster recovery between accounts?",
    "options": [
      "Replication groups",
      "Failover groups",
      "Warehouse mirrors",
      "Backup clusters"
    ],
    "answer": 1,
    "explanation": "Failover groups orchestrate disaster recovery."
  },
  {
    "id": 203,
    "difficulty": "medium",
    "category": "query_optimization",
    "question": "Which Snowflake service improves selective query filtering performance?",
    "options": [
      "Auto Clustering",
      "Query Acceleration Service",
      "Materialized Views",
      "Search Optimization Service"
    ],
    "answer": 3,
    "explanation": "Search optimization improves selective queries."
  },
  {
    "id": 204,
    "difficulty": "hard",
    "category": "query_optimization",
    "question": "Which scenario benefits most from Search Optimization Service?",
    "options": [
      "Point lookup queries",
      "Large table scans",
      "Warehouse scaling",
      "Streams pipelines"
    ],
    "answer": 0,
    "explanation": "Search optimization improves point lookups."
  },
  {
    "id": 205,
    "difficulty": "medium",
    "category": "governance",
    "question": "Which Snowflake feature tracks lineage between objects?",
    "options": [
      "Tasks",
      "Object dependencies",
      "Views",
      "Streams"
    ],
    "answer": 1,
    "explanation": "Object dependencies track lineage."
  },
  {
    "id": 206,
    "difficulty": "hard",
    "category": "governance",
    "question": "Which view records detailed object access events?",
    "options": [
      "ROLE_HISTORY",
      "QUERY_HISTORY",
      "ACCESS_HISTORY",
      "LOGIN_HISTORY"
    ],
    "answer": 2,
    "explanation": "ACCESS_HISTORY tracks object-level access."
  },
  {
    "id": 207,
    "difficulty": "medium",
    "category": "streams_tasks",
    "question": "A common CDC pipeline pattern in Snowflake is:",
    "options": [
      "Stage → Stream → Task",
      "Task → Stream → View",
      "View → Task → Table",
      "Stream → Task → Merge"
    ],
    "answer": 3,
    "explanation": "CDC pipelines use streams with tasks executing merges."
  },
  {
    "id": 208,
    "difficulty": "hard",
    "category": "streams_tasks",
    "question": "What prevents tasks from overlapping execution?",
    "options": [
      "TASK_POLICY",
      "WAREHOUSE_LIMIT",
      "STREAM_OFFSET",
      "ALLOW_OVERLAPPING_EXECUTION"
    ],
    "answer": 3,
    "explanation": "This parameter controls task overlap."
  },
  {
    "id": 209,
    "difficulty": "medium",
    "category": "cost",
    "question": "Which feature scales warehouses automatically under heavy load?",
    "options": [
      "Multi-cluster warehouses",
      "Stages",
      "Auto clustering",
      "Streams"
    ],
    "answer": 0,
    "explanation": "Multi-cluster warehouses scale compute clusters."
  },
  {
    "id": 210,
    "difficulty": "hard",
    "category": "cost",
    "question": "Which query pattern causes unnecessary compute cost?",
    "options": [
      "Predicate pushdown",
      "Column filtering",
      "Partition pruning",
      "SELECT *"
    ],
    "answer": 3,
    "explanation": "SELECT * scans unnecessary columns."
  },
  {
    "id": 211,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which Snowflake layer is responsible for query parsing and optimization?",
    "options": [
      "Storage layer",
      "Cloud Services layer",
      "Virtual warehouse layer",
      "Compute layer"
    ],
    "answer": 1,
    "explanation": "The Cloud Services layer handles query parsing, optimization, and metadata."
  },
  {
    "id": 212,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which Snowflake component stores table metadata and statistics used for pruning?",
    "options": [
      "External stage",
      "Virtual warehouse",
      "Cloud Services layer",
      "Search optimization service"
    ],
    "answer": 2,
    "explanation": "Metadata and statistics are maintained within the Cloud Services layer."
  },
  {
    "id": 213,
    "difficulty": "medium",
    "category": "performance",
    "question": "What Snowflake feature automatically reorganizes table micro-partitions to improve query performance?",
    "options": [
      "Materialized Views",
      "Query Acceleration Service",
      "Search Optimization",
      "Auto Clustering"
    ],
    "answer": 3,
    "explanation": "Auto Clustering reorganizes micro-partitions to maintain clustering keys."
  },
  {
    "id": 214,
    "difficulty": "hard",
    "category": "performance",
    "question": "Which Snowflake feature automatically accelerates large scan queries using additional compute resources?",
    "options": [
      "Materialized views",
      "Auto clustering",
      "Query Acceleration Service",
      "Search optimization"
    ],
    "answer": 2,
    "explanation": "Query Acceleration Service allocates additional compute resources for large scan queries."
  },
  {
    "id": 215,
    "difficulty": "medium",
    "category": "governance",
    "question": "Which Snowflake feature helps enforce dynamic row-level security?",
    "options": [
      "Row access policies",
      "Secure views",
      "Masking policies",
      "Network policies"
    ],
    "answer": 0,
    "explanation": "Row access policies enforce row-level filtering based on roles."
  },
  {
    "id": 216,
    "difficulty": "hard",
    "category": "governance",
    "question": "Which policy dynamically masks sensitive column data based on user role?",
    "options": [
      "Task policy",
      "Network policy",
      "Row access policy",
      "Masking policy"
    ],
    "answer": 3,
    "explanation": "Masking policies dynamically mask column values depending on user roles."
  },
  {
    "id": 217,
    "difficulty": "medium",
    "category": "security",
    "question": "Which Snowflake feature restricts allowed client IP addresses?",
    "options": [
      "Network policies",
      "Masking policies",
      "Secure views",
      "Row access policies"
    ],
    "answer": 0,
    "explanation": "Network policies restrict login access by IP range."
  },
  {
    "id": 218,
    "difficulty": "hard",
    "category": "security",
    "question": "Which Snowflake capability allows secure sharing of live data without copying it?",
    "options": [
      "Streams",
      "Replication",
      "External tables",
      "Secure Data Sharing"
    ],
    "answer": 3,
    "explanation": "Secure Data Sharing allows live data access without replication."
  },
  {
    "id": 219,
    "difficulty": "medium",
    "category": "data_sharing",
    "question": "Which Snowflake object is used to share datasets across accounts?",
    "options": [
      "Pipe",
      "Task",
      "Stage",
      "Share"
    ],
    "answer": 3,
    "explanation": "Shares are used to share data across Snowflake accounts."
  },
  {
    "id": 220,
    "difficulty": "hard",
    "category": "data_sharing",
    "question": "Which Snowflake marketplace allows providers to publish datasets for consumers?",
    "options": [
      "Data Exchange",
      "External Stage",
      "Snowflake Marketplace",
      "Snowpark Hub"
    ],
    "answer": 2,
    "explanation": "Snowflake Marketplace enables dataset publishing and consumption."
  },
  {
    "id": 221,
    "difficulty": "medium",
    "category": "performance",
    "question": "Which Snowflake mechanism avoids scanning unnecessary columns during queries?",
    "options": [
      "Warehouse scaling",
      "Column pruning",
      "Search optimization",
      "Auto clustering"
    ],
    "answer": 1,
    "explanation": "Column pruning reduces the number of columns scanned."
  },
  {
    "id": 222,
    "difficulty": "hard",
    "category": "performance",
    "question": "Which mechanism avoids scanning unnecessary micro-partitions during queries?",
    "options": [
      "Micro-partition pruning",
      "Search optimization",
      "Query acceleration",
      "Materialized views"
    ],
    "answer": 0,
    "explanation": "Micro-partition pruning eliminates unnecessary data scans."
  },
  {
    "id": 223,
    "difficulty": "medium",
    "category": "storage",
    "question": "Which Snowflake feature allows querying semi-structured JSON data directly?",
    "options": [
      "External tables",
      "Structured columns",
      "VARIANT data type",
      "Search optimization"
    ],
    "answer": 2,
    "explanation": "VARIANT supports semi-structured formats like JSON and Avro."
  },
  {
    "id": 224,
    "difficulty": "hard",
    "category": "storage",
    "question": "Which Snowflake feature stores metadata for semi-structured fields to improve performance?",
    "options": [
      "Clustering keys",
      "Materialized views",
      "Automatic schema extraction",
      "Task graphs"
    ],
    "answer": 2,
    "explanation": "Snowflake extracts metadata from semi-structured data automatically."
  },
  {
    "id": 225,
    "difficulty": "medium",
    "category": "cost",
    "question": "Which warehouse setting suspends compute after inactivity?",
    "options": [
      "AUTO_SUSPEND",
      "AUTO_SCALE",
      "QUERY_ACCELERATION",
      "COST_MONITOR"
    ],
    "answer": 0,
    "explanation": "AUTO_SUSPEND stops warehouses after idle time."
  },
  {
    "id": 226,
    "difficulty": "hard",
    "category": "cost",
    "question": "Which view shows Snowflake warehouse credit usage over time?",
    "options": [
      "LOGIN_HISTORY",
      "QUERY_HISTORY",
      "WAREHOUSE_METERING_HISTORY",
      "ACCESS_HISTORY"
    ],
    "answer": 2,
    "explanation": "This view tracks warehouse credit consumption."
  },
  {
    "id": 228,
    "difficulty": "hard",
    "category": "replication",
    "question": "Which Snowflake object groups databases for replication management?",
    "options": [
      "Replication groups",
      "Share groups",
      "Warehouse groups",
      "Failover clusters"
    ],
    "answer": 0,
    "explanation": "Replication groups manage database replication."
  },
  {
    "id": 229,
    "difficulty": "medium",
    "category": "failover",
    "question": "Which Snowflake feature enables automatic disaster recovery across regions?",
    "options": [
      "Search optimization",
      "Dynamic tables",
      "Replication groups",
      "Failover groups"
    ],
    "answer": 3,
    "explanation": "Failover groups enable cross-region DR."
  },
  {
    "id": 230,
    "difficulty": "hard",
    "category": "failover",
    "question": "Which objects can be replicated within a failover group?",
    "options": [
      "External stages",
      "Warehouses only",
      "Databases, roles, and users",
      "Tables only"
    ],
    "answer": 2,
    "explanation": "Failover groups replicate databases, users, and roles."
  },
  {
    "id": 231,
    "difficulty": "medium",
    "category": "snowpark",
    "question": "Snowpark allows developers to write data pipelines using which abstraction?",
    "options": [
      "Streams",
      "Tasks",
      "Stages",
      "DataFrames"
    ],
    "answer": 3,
    "explanation": "Snowpark uses DataFrames for distributed data processing."
  },
  {
    "id": 232,
    "difficulty": "hard",
    "category": "snowpark",
    "question": "Which programming language is NOT currently supported by Snowpark?",
    "options": [
      "Scala",
      "Java",
      "Go",
      "Python"
    ],
    "answer": 2,
    "explanation": "Snowpark currently supports Python, Scala, and Java."
  },
  {
    "id": 233,
    "difficulty": "medium",
    "category": "dynamic_tables",
    "question": "Dynamic tables automatically refresh based on which parameter?",
    "options": [
      "PIPE_INTERVAL",
      "STREAM_OFFSET",
      "REFRESH_RATE",
      "TARGET_LAG"
    ],
    "answer": 3,
    "explanation": "TARGET_LAG defines how fresh the data should be."
  },
  {
    "id": 234,
    "difficulty": "hard",
    "category": "dynamic_tables",
    "question": "Dynamic tables primarily replace which traditional pipeline approach?",
    "options": [
      "Secure views",
      "External tables",
      "Streams + Tasks",
      "Materialized views"
    ],
    "answer": 2,
    "explanation": "Dynamic tables simplify stream/task pipelines."
  },
  {
    "id": 235,
    "difficulty": "medium",
    "category": "monitoring",
    "question": "Which view provides detailed SQL execution history?",
    "options": [
      "LOGIN_HISTORY",
      "ACCESS_HISTORY",
      "SESSION_HISTORY",
      "QUERY_HISTORY"
    ],
    "answer": 3,
    "explanation": "QUERY_HISTORY tracks executed SQL statements."
  },
  {
    "id": 236,
    "difficulty": "hard",
    "category": "monitoring",
    "question": "Which Snowflake table function returns query execution plans?",
    "options": [
      "PLAN_HISTORY",
      "SHOW PLAN",
      "QUERY_HISTORY",
      "SYSTEM$EXPLAIN_PLAN_JSON"
    ],
    "answer": 3,
    "explanation": "SYSTEM$EXPLAIN_PLAN_JSON returns detailed query plans."
  },
  {
    "id": 237,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which Snowflake component performs query execution?",
    "options": [
      "Storage layer",
      "Metadata service",
      "Cloud services",
      "Virtual warehouse"
    ],
    "answer": 3,
    "explanation": "Virtual warehouses execute SQL queries."
  },
  {
    "id": 238,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which Snowflake architecture principle allows independent scaling of compute and storage?",
    "options": [
      "Distributed OLTP engine",
      "Partitioned warehouse clusters",
      "Columnar indexing",
      "Multi-cluster shared data architecture"
    ],
    "answer": 3,
    "explanation": "Snowflake uses multi-cluster shared data architecture."
  },
  {
    "id": 239,
    "difficulty": "medium",
    "category": "storage",
    "question": "What is the approximate compressed size of a Snowflake micro-partition?",
    "options": [
      "256MB",
      "1MB",
      "16MB",
      "100MB"
    ],
    "answer": 2,
    "explanation": "Snowflake micro-partitions are roughly 16MB compressed."
  },
  {
    "id": 240,
    "difficulty": "hard",
    "category": "storage",
    "question": "How does Snowflake achieve high compression efficiency?",
    "options": [
      "Columnar storage with automatic encoding",
      "Partitioned indexing",
      "Manual compression tuning",
      "Row-based storage"
    ],
    "answer": 0,
    "explanation": "Snowflake uses columnar storage with automatic encoding."
  },
  {
    "id": 241,
    "difficulty": "hard",
    "category": "cost_optimization",
    "question": "A warehouse runs frequent short queries but remains idle for long periods. What configuration best minimizes cost?",
    "options": [
      "Enable multi-cluster scaling",
      "Disable query result caching",
      "Increase warehouse size",
      "Enable AUTO_SUSPEND and AUTO_RESUME"
    ],
    "answer": 3,
    "explanation": "Auto suspend/resume reduces cost during idle periods."
  },
  {
    "id": 242,
    "difficulty": "hard",
    "category": "cost_optimization",
    "question": "A team frequently reruns identical queries. Which Snowflake feature minimizes compute usage?",
    "options": [
      "Result cache",
      "Query acceleration",
      "Materialized views",
      "Search optimization"
    ],
    "answer": 0,
    "explanation": "Result cache returns results without re-executing the query."
  },
  {
    "id": 243,
    "difficulty": "medium",
    "category": "warehouse_sizing",
    "question": "A BI dashboard has many concurrent users running small queries. Which configuration improves performance?",
    "options": [
      "Increase micro-partitions",
      "Multi-cluster warehouse",
      "Use external tables",
      "Disable auto suspend"
    ],
    "answer": 1,
    "explanation": "Multi-cluster warehouses handle concurrency efficiently."
  },
  {
    "id": 244,
    "difficulty": "hard",
    "category": "warehouse_sizing",
    "question": "Which warehouse scaling policy prioritizes minimizing queuing delays?",
    "options": [
      "Query acceleration policy",
      "Auto suspend policy",
      "Standard scaling policy",
      "Economy scaling policy"
    ],
    "answer": 2,
    "explanation": "Standard scaling launches clusters faster to avoid queuing."
  },
  {
    "id": 245,
    "difficulty": "medium",
    "category": "query_tuning",
    "question": "A query scans an entire large table but filters on one column. Which technique improves performance?",
    "options": [
      "Increase warehouse size",
      "Define a clustering key",
      "Use external stage",
      "Disable caching"
    ],
    "answer": 1,
    "explanation": "Clustering improves pruning on filtered columns."
  },
  {
    "id": 246,
    "difficulty": "hard",
    "category": "query_tuning",
    "question": "A query repeatedly aggregates the same large dataset. Which feature improves performance?",
    "options": [
      "Materialized views",
      "Search optimization",
      "Tasks",
      "Streams"
    ],
    "answer": 0,
    "explanation": "Materialized views store precomputed aggregations."
  },
  {
    "id": 247,
    "difficulty": "medium",
    "category": "architecture_design",
    "question": "A company needs to share data with partners without duplicating storage. Which Snowflake feature should be used?",
    "options": [
      "External tables",
      "Secure Data Sharing",
      "Database replication",
      "Streams"
    ],
    "answer": 1,
    "explanation": "Secure Data Sharing allows sharing live data without copying it."
  },
  {
    "id": 248,
    "difficulty": "hard",
    "category": "architecture_design",
    "question": "A global company needs disaster recovery across multiple regions. What architecture should be implemented?",
    "options": [
      "Secure views",
      "External stages",
      "Multi-cluster warehouses",
      "Failover groups"
    ],
    "answer": 3,
    "explanation": "Failover groups support cross-region DR."
  },
  {
    "id": 249,
    "difficulty": "medium",
    "category": "security_architecture",
    "question": "Sensitive customer columns must be hidden from analysts. Which Snowflake feature solves this?",
    "options": [
      "Stages",
      "Masking policies",
      "Streams",
      "Tasks"
    ],
    "answer": 1,
    "explanation": "Masking policies dynamically mask sensitive column values."
  },
  {
    "id": 250,
    "difficulty": "hard",
    "category": "security_architecture",
    "question": "Access to specific rows should depend on user role. Which feature should be implemented?",
    "options": [
      "Network policies",
      "Masking policies",
      "Row access policies",
      "Secure views"
    ],
    "answer": 2,
    "explanation": "Row access policies enforce row-level filtering."
  },
  {
    "id": 251,
    "difficulty": "medium",
    "category": "troubleshooting",
    "question": "A query is slow due to scanning many micro-partitions. What should be investigated first?",
    "options": [
      "External stages",
      "Network policies",
      "Warehouse size",
      "Clustering strategy"
    ],
    "answer": 3,
    "explanation": "Poor clustering can cause excessive partition scanning."
  },
  {
    "id": 252,
    "difficulty": "hard",
    "category": "troubleshooting",
    "question": "Users experience query queuing during peak hours. What is the best solution?",
    "options": [
      "Enable multi-cluster warehouses",
      "Enable search optimization",
      "Disable auto suspend",
      "Use materialized views"
    ],
    "answer": 0,
    "explanation": "Multi-cluster warehouses reduce query queuing."
  },
  {
    "id": 253,
    "difficulty": "medium",
    "category": "cost_optimization",
    "question": "Which practice reduces compute costs when exploring large datasets?",
    "options": [
      "Increase warehouse size",
      "Disable pruning",
      "Disable caching",
      "Use LIMIT clauses"
    ],
    "answer": 3,
    "explanation": "LIMIT reduces scanned data during exploration."
  },
  {
    "id": 254,
    "difficulty": "hard",
    "category": "cost_optimization",
    "question": "Which Snowflake feature helps identify queries consuming the most credits?",
    "options": [
      "QUERY_HISTORY",
      "LOGIN_HISTORY",
      "ACCESS_HISTORY",
      "SESSION_HISTORY"
    ],
    "answer": 0,
    "explanation": "Query history tracks query execution metrics."
  },
  {
    "id": 255,
    "difficulty": "medium",
    "category": "query_tuning",
    "question": "A query retrieves unnecessary columns from a large table. Which optimization helps?",
    "options": [
      "Warehouse scaling",
      "Auto clustering",
      "Search optimization",
      "Column pruning"
    ],
    "answer": 3,
    "explanation": "Column pruning reduces scanned columns."
  },
  {
    "id": 256,
    "difficulty": "hard",
    "category": "query_tuning",
    "question": "A query repeatedly performs complex joins across large tables. What improves performance?",
    "options": [
      "Streams",
      "Materialized views",
      "External tables",
      "Network policies"
    ],
    "answer": 1,
    "explanation": "Materialized views precompute joins."
  },
  {
    "id": 257,
    "difficulty": "medium",
    "category": "architecture_design",
    "question": "A company wants separate compute resources for ETL and BI workloads. What should they use?",
    "options": [
      "Separate virtual warehouses",
      "External stages",
      "Separate accounts",
      "Separate regions"
    ],
    "answer": 0,
    "explanation": "Separate warehouses isolate compute workloads."
  },
  {
    "id": 258,
    "difficulty": "hard",
    "category": "architecture_design",
    "question": "What Snowflake architecture principle enables compute clusters to access shared storage?",
    "options": [
      "Row-based architecture",
      "Partitioned clusters",
      "OLTP replication",
      "Multi-cluster shared data architecture"
    ],
    "answer": 3,
    "explanation": "Snowflake uses multi-cluster shared data architecture."
  },
  {
    "id": 259,
    "difficulty": "medium",
    "category": "security_architecture",
    "question": "Which policy controls which IP ranges can access Snowflake?",
    "options": [
      "Row access policies",
      "Network policies",
      "Masking policies",
      "Task policies"
    ],
    "answer": 1,
    "explanation": "Network policies restrict login IP ranges."
  },
  {
    "id": 260,
    "difficulty": "hard",
    "category": "security_architecture",
    "question": "Which Snowflake feature supports secure data exchange between organizations?",
    "options": [
      "Streams",
      "Tasks",
      "Stages",
      "Snowflake Marketplace"
    ],
    "answer": 3,
    "explanation": "Snowflake Marketplace allows sharing datasets."
  },
  {
    "id": 261,
    "difficulty": "medium",
    "category": "troubleshooting",
    "question": "A query plan shows excessive partition scans. What likely caused this?",
    "options": [
      "Poor clustering",
      "Stage configuration",
      "Warehouse scaling",
      "Query caching"
    ],
    "answer": 0,
    "explanation": "Poor clustering reduces pruning efficiency."
  },
  {
    "id": 262,
    "difficulty": "hard",
    "category": "troubleshooting",
    "question": "A warehouse experiences long query queues even with large cluster size. What is the best solution?",
    "options": [
      "Increase micro-partitions",
      "Enable masking",
      "Disable caching",
      "Enable multi-cluster warehouse"
    ],
    "answer": 3,
    "explanation": "Multi-cluster scaling handles concurrency."
  },
  {
    "id": 263,
    "difficulty": "medium",
    "category": "cost_optimization",
    "question": "Which Snowflake feature prevents unnecessary recomputation of identical queries?",
    "options": [
      "Tasks",
      "Result cache",
      "Streams",
      "Stages"
    ],
    "answer": 1,
    "explanation": "Result caching returns stored results."
  },
  {
    "id": 264,
    "difficulty": "hard",
    "category": "cost_optimization",
    "question": "Which query design practice minimizes scanned data volume?",
    "options": [
      "Predicate filtering",
      "SELECT *",
      "Cross joins",
      "Unfiltered scans"
    ],
    "answer": 0,
    "explanation": "Predicate filtering reduces scanned rows."
  },
  {
    "id": 265,
    "difficulty": "medium",
    "category": "warehouse_sizing",
    "question": "A data science team runs heavy ML queries occasionally. Which warehouse configuration is most efficient?",
    "options": [
      "Use larger warehouse temporarily",
      "Use smallest warehouse always",
      "Disable auto suspend",
      "Use external stages"
    ],
    "answer": 0,
    "explanation": "Scaling up temporarily handles heavy workloads."
  },
  {
    "id": 266,
    "difficulty": "hard",
    "category": "warehouse_sizing",
    "question": "Which warehouse policy prioritizes cost savings over query latency?",
    "options": [
      "Standard scaling policy",
      "Economy scaling policy",
      "Query acceleration policy",
      "Auto resume policy"
    ],
    "answer": 1,
    "explanation": "Economy scaling reduces cluster startup frequency."
  },
  {
    "id": 267,
    "difficulty": "medium",
    "category": "query_tuning",
    "question": "Which feature helps accelerate highly selective queries?",
    "options": [
      "Stages",
      "Search Optimization Service",
      "Streams",
      "Tasks"
    ],
    "answer": 1,
    "explanation": "Search optimization speeds up selective queries."
  },
  {
    "id": 268,
    "difficulty": "hard",
    "category": "query_tuning",
    "question": "Which Snowflake service accelerates large scan queries automatically?",
    "options": [
      "Query Acceleration Service",
      "Materialized views",
      "Search optimization",
      "Auto clustering"
    ],
    "answer": 0,
    "explanation": "Query Acceleration Service accelerates large scans."
  },
  {
    "id": 269,
    "difficulty": "medium",
    "category": "architecture_design",
    "question": "Which Snowflake object manages continuous ingestion from cloud storage?",
    "options": [
      "Stream",
      "Task",
      "View",
      "Pipe"
    ],
    "answer": 3,
    "explanation": "Pipes automate Snowpipe ingestion."
  },
  {
    "id": 270,
    "difficulty": "hard",
    "category": "architecture_design",
    "question": "Which Snowflake feature enables low latency streaming ingestion?",
    "options": [
      "Stages",
      "Snowpipe Streaming",
      "Tasks",
      "Streams"
    ],
    "answer": 1,
    "explanation": "Snowpipe Streaming supports low latency ingestion."
  },
  {
    "id": 271,
    "difficulty": "medium",
    "category": "security_architecture",
    "question": "Which Snowflake feature tracks detailed object access activity?",
    "options": [
      "QUERY_HISTORY",
      "SESSION_HISTORY",
      "LOGIN_HISTORY",
      "ACCESS_HISTORY"
    ],
    "answer": 3,
    "explanation": "ACCESS_HISTORY records object-level access."
  },
  {
    "id": 272,
    "difficulty": "hard",
    "category": "security_architecture",
    "question": "Which Snowflake view tracks failed login attempts?",
    "options": [
      "LOGIN_HISTORY",
      "QUERY_HISTORY",
      "SESSION_HISTORY",
      "ACCESS_HISTORY"
    ],
    "answer": 0,
    "explanation": "LOGIN_HISTORY records login attempts."
  },
  {
    "id": 273,
    "difficulty": "medium",
    "category": "troubleshooting",
    "question": "Which Snowflake view helps diagnose slow queries?",
    "options": [
      "ROLE_HISTORY",
      "LOGIN_HISTORY",
      "QUERY_HISTORY",
      "ACCESS_HISTORY"
    ],
    "answer": 2,
    "explanation": "Query history contains execution metrics."
  },
  {
    "id": 274,
    "difficulty": "hard",
    "category": "troubleshooting",
    "question": "Which function returns detailed query execution plans?",
    "options": [
      "SHOW PLAN",
      "SYSTEM$EXPLAIN_PLAN_JSON",
      "PLAN_HISTORY",
      "QUERY_HISTORY"
    ],
    "answer": 1,
    "explanation": "SYSTEM$EXPLAIN_PLAN_JSON returns JSON execution plans."
  },
  {
    "id": 275,
    "difficulty": "medium",
    "category": "cost_optimization",
    "question": "Which Snowflake feature reduces cost by suspending warehouses automatically?",
    "options": [
      "Auto clustering",
      "Search optimization",
      "Query acceleration",
      "AUTO_SUSPEND"
    ],
    "answer": 3,
    "explanation": "AUTO_SUSPEND stops idle warehouses."
  },
  {
    "id": 276,
    "difficulty": "hard",
    "category": "cost_optimization",
    "question": "Which table shows Snowflake credit usage for each warehouse?",
    "options": [
      "WAREHOUSE_METERING_HISTORY",
      "ACCESS_HISTORY",
      "QUERY_HISTORY",
      "LOGIN_HISTORY"
    ],
    "answer": 0,
    "explanation": "Warehouse metering history tracks credit usage."
  },
  {
    "id": 277,
    "difficulty": "medium",
    "category": "architecture_design",
    "question": "Which Snowflake feature allows querying external cloud storage data directly?",
    "options": [
      "Tasks",
      "Streams",
      "External tables",
      "Materialized views"
    ],
    "answer": 2,
    "explanation": "External tables query data stored outside Snowflake."
  },
  {
    "id": 278,
    "difficulty": "hard",
    "category": "architecture_design",
    "question": "Which Snowflake feature supports open table formats like Apache Iceberg?",
    "options": [
      "Iceberg tables",
      "Materialized views",
      "Search optimization",
      "Task graphs"
    ],
    "answer": 0,
    "explanation": "Iceberg tables support open table formats."
  },
  {
    "id": 279,
    "difficulty": "medium",
    "category": "security_architecture",
    "question": "Which Snowflake role has full administrative privileges?",
    "options": [
      "SYSADMIN",
      "SECURITYADMIN",
      "ACCOUNTADMIN",
      "USERADMIN"
    ],
    "answer": 2,
    "explanation": "ACCOUNTADMIN has full privileges."
  },
  {
    "id": 280,
    "difficulty": "hard",
    "category": "security_architecture",
    "question": "Which role is responsible for managing users and roles?",
    "options": [
      "ACCOUNTADMIN",
      "USERADMIN",
      "PUBLIC",
      "SYSADMIN"
    ],
    "answer": 1,
    "explanation": "USERADMIN manages users and roles."
  },
  {
    "id": 281,
    "difficulty": "easy",
    "category": "architecture_design",
    "question": "Which Snowflake feature allows you to create a snapshot of a table, schema, or database without duplicating the underlying data files?",
    "options": [
      "Materialized Views",
      "Data Replication",
      "Time Travel",
      "Zero-copy Cloning"
    ],
    "answer": 3,
    "explanation": "Zero-copy Cloning uses metadata to point to existing micro-partitions. New storage is only consumed when data is modified in the clone (Copy-on-Write).",
    "domain": "sn-core"
  },
  {
    "id": 282,
    "difficulty": "medium",
    "category": "architecture_design",
    "question": "What is the primary mechanism Snowflake uses to enable continuous, serverless ingestion from cloud storage (like S3 or Azure Blob)?",
    "options": [
      "COPY INTO Command",
      "The PUT command",
      "Snowpipe",
      "External Tables"
    ],
    "answer": 2,
    "explanation": "Snowpipe uses a serverless compute model to automatically load data as soon as files are written to a stage and a notification is received.",
    "domain": "sn-services"
  },
  {
    "id": 283,
    "difficulty": "hard",
    "category": "architecture_design",
    "question": "In the Snowflake architecture, where is the 'Metadata' for micro-partitions (such as min/max values used for pruning) stored?",
    "options": [
      "In the Storage Layer",
      "Inside the Virtual Warehouse",
      "In the Cloud Services Layer",
      "On the Local Disk of the Compute Node"
    ],
    "answer": 2,
    "explanation": "The Cloud Services layer manages metadata, security, and query optimization, allowing for efficient 'data skipping' without turning on a warehouse.",
    "domain": "sn-services"
  },
  {
    "id": 284,
    "difficulty": "easy",
    "category": "architecture_design",
    "question": "Which feature allows a 'Provider' to share a database with a 'Consumer' without the data actually being moved or copied?",
    "options": [
      "FTP Export",
      "Cross-Region Replication",
      "Secure Data Sharing",
      "Data Mirroring"
    ],
    "answer": 2,
    "explanation": "Secure Data Sharing uses Snowflake's unique multi-cluster shared data architecture to give consumers access to the provider's metadata/storage directly.",
    "domain": "sn-services"
  },
  {
    "id": 285,
    "difficulty": "medium",
    "category": "architecture_design",
    "question": "If a table is dropped accidentally, which feature allows you to restore it immediately without a backup?",
    "options": [
      "Zero-copy Cloning",
      "UNDROP command",
      "Time Travel",
      "Fail-safe"
    ],
    "answer": 1,
    "explanation": "The UNDROP command relies on Time Travel to restore dropped objects (tables, schemas, or databases) as long as they are within the retention period.",
    "domain": "sn-core"
  },
  {
    "id": 286,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What does a Snowflake Zero-copy clone do?",
    "options": [
      "Exports to S3",
      "Creates a metadata-only copy sharing storage until changes diverge",
      "Duplicates all data immediately",
      "Locks the source"
    ],
    "answer": 1,
    "explanation": "Zero-copy cloning: instant clone of tables, schemas or databases; only changed micro-partitions use extra storage."
  },
  {
    "id": 287,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which feature is the final recovery option after Time Travel ends?",
    "options": [
      "Query acceleration",
      "Search optimization",
      "Resource monitors",
      "Fail-safe, a 7-day Snowflake-managed recovery period for permanent tables"
    ],
    "answer": 3,
    "explanation": "Fail-safe: not user-accessible; contact Snowflake support to recover data."
  }
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Focus: Snowflake Architecture, Performance Tuning, Data Sharing, and Cost Governance.
const hotsQuestions = [
    0,
    1,
    2,
    3,
    4,
    10,
    15,
    20,
    25,
    30,
    45,
    120,
    215,
    283,
    285,
    5,
    6,
    7,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    100,
    105,
    110,
    115,
    200,
    205,
    210,
    8,
    9,
    11,
    12,
    125,
    130,
    135,
    140,
    145,
    150,
    155,
    160,
    165,
    170,
    175,
    180,
    185,
    190,
    195,
    220,
    13,
    14,
    16,
    225,
    230,
    235,
    240,
    245,
    250,
    255,
    260,
    265,
    270,
    275,
    280,
    17,
    18,
    19,
    21,
    22,
    23,
    24,
    26,
    27,
    28,
    29,
    31,
    32,
    282,
    284,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    46,
    47,
    48,
    52
];
