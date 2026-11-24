/* ======================================================
SOLUTION ARCHITECT - DATA AND AI TECHNOLOGIES
====================================================== */

const questionBank = [
  {
    "id": 0,
    "difficulty": "easy",
    "category": "architecture",
    "question": "What is the primary use of a Databricks solution?",
    "options": [
      "Replace application databases",
      "The primary use of a Databricks solution is to unify data engineering, data science, machine learning, and business analytics into a single, cloud-based platform built around the Data Lakehouse architecture",
      "Support analytics and reporting",
      "Serve OLTP and ACID transactions"
    ],
    "answer": 1,
    "explanation": "A Databricks solution is primarily used to unify an organization's data engineering, data science, machine learning, and business intelligence workloads onto a single cloud-based data lakehouse platform, thereby eliminating data silos and enabling teams to collaboratively build, scale, and govern everything from traditional analytics to advanced artificial intelligence applications."
  },
  {
    "id": 1,
    "difficulty": "easy",
    "category": "architecture",
    "question": "What is the primary goal of an Enterprise Data Warehouse?",
    "options": [
      "Serve OLTP transactions",
      "Store application logs",
      "Replace application databases",
      "Support analytics and reporting"
    ],
    "answer": 3,
    "explanation": "An Enterprise Data Warehouse (EDW) is optimized for analytics, reporting, and business intelligence."
  },
  {
    "id": 2,
    "difficulty": "easy",
    "category": "architecture",
    "question": "Which architecture separates compute and storage?",
    "options": [
      "Client-Server",
      "Monolithic",
      "Cloud Data Warehouse",
      "Three-tier"
    ],
    "answer": 2,
    "explanation": "Modern cloud warehouses such as Snowflake separate compute and storage independently."
  },
  {
    "id": 3,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which architecture pattern is recommended for enterprise analytics platforms?",
    "options": [
      "Monolithic",
      "Microservices",
      "Desktop Client",
      "Peer-to-Peer"
    ],
    "answer": 1,
    "explanation": "Microservices improve scalability, deployment flexibility, and independent service evolution."
  },
  {
    "id": 4,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which AWS service is commonly used as a Data Lake?",
    "options": [
      "RDS",
      "DynamoDB",
      "S3",
      "EFS"
    ],
    "answer": 2,
    "explanation": "Amazon S3 provides highly scalable object storage suitable for data lakes."
  },
  {
    "id": 5,
    "difficulty": "easy",
    "category": "architecture",
    "question": "Which Azure service stores large-scale analytics data?",
    "options": [
      "Cosmos DB",
      "Azure Blob Storage",
      "Azure SQL",
      "Azure Cache"
    ],
    "answer": 1,
    "explanation": "Azure Blob Storage or ADLS Gen2 is commonly used as the storage layer of a modern data platform."
  },
  {
    "id": 6,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which architecture best supports AI, BI, streaming, and batch processing together?",
    "options": [
      "OLTP Database",
      "Traditional Data Warehouse",
      "Lakehouse",
      "Data Mart"
    ],
    "answer": 2,
    "explanation": "Lakehouse architecture combines the flexibility of data lakes with warehouse capabilities."
  },
  {
    "id": 7,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which document is created before implementation begins?",
    "options": [
      "Runbook",
      "Incident Report",
      "Deployment Log",
      "Solution Architecture Document"
    ],
    "answer": 3,
    "explanation": "The Solution Architecture Document defines the target architecture, components, and design decisions."
  },
  {
    "id": 8,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the most important responsibility of a Solution Architect?",
    "options": [
      "Aligning business requirements with scalable technical solutions",
      "Writing production code",
      "Managing payroll",
      "Testing UI screens"
    ],
    "answer": 0,
    "explanation": "Solution Architects bridge business objectives and technical implementation while ensuring scalability and governance."
  },
  {
    "id": 9,
    "difficulty": "easy",
    "category": "data-modelling",
    "question": "Who introduced dimensional modelling?",
    "options": [
      "Ralph Kimball",
      "Edgar Codd",
      "Bill Inmon",
      "James Gray"
    ],
    "answer": 0,
    "explanation": "Ralph Kimball introduced dimensional modelling using star schemas."
  },
  {
    "id": 10,
    "difficulty": "easy",
    "category": "data-modelling",
    "question": "Which schema is most commonly used in data warehouses?",
    "options": [
      "Star Schema",
      "Graph",
      "Hierarchical",
      "Network"
    ],
    "answer": 0,
    "explanation": "Star schema simplifies reporting and query performance."
  },
  {
    "id": 11,
    "difficulty": "medium",
    "category": "data-modelling",
    "question": "What is the grain of a fact table?",
    "options": [
      "Level of detail stored",
      "Number of dimensions",
      "Index type",
      "Compression ratio"
    ],
    "answer": 0,
    "explanation": "Grain defines the lowest level of detail represented by each fact record."
  },
  {
    "id": 12,
    "difficulty": "medium",
    "category": "data-modelling",
    "question": "Which fact table records every business transaction?",
    "options": [
      "Transaction Fact",
      "Snapshot Fact",
      "Aggregate Fact",
      "Periodic Fact"
    ],
    "answer": 0,
    "explanation": "Transaction fact tables capture each individual event."
  },
  {
    "id": 13,
    "difficulty": "medium",
    "category": "data-modelling",
    "question": "Which Slowly Changing Dimension preserves history?",
    "options": [
      "Type 0",
      "Type 1",
      "Type 2",
      "Type 3"
    ],
    "answer": 2,
    "explanation": "Type 2 creates a new row whenever an attribute changes."
  },
  {
    "id": 14,
    "difficulty": "medium",
    "category": "data-modelling",
    "question": "Which modelling approach is highly normalized for enterprise integration?",
    "options": [
      "Star",
      "Galaxy",
      "Inmon",
      "Kimball"
    ],
    "answer": 2,
    "explanation": "Bill Inmon advocated normalized enterprise data warehouses."
  },
  {
    "id": 15,
    "difficulty": "hard",
    "category": "data-modelling",
    "question": "Which modelling technique is commonly used for enterprise historical auditing?",
    "options": [
      "Data Vault",
      "Snowflake",
      "Star Schema",
      "OLTP"
    ],
    "answer": 0,
    "explanation": "Data Vault provides excellent auditability and scalability."
  },
  {
    "id": 16,
    "difficulty": "easy",
    "category": "sql",
    "question": "Which SQL statement retrieves records?",
    "options": [
      "ALTER",
      "DELETE",
      "UPDATE",
      "SELECT"
    ],
    "answer": 3,
    "explanation": "SELECT retrieves data from relational tables."
  },
  {
    "id": 17,
    "difficulty": "easy",
    "category": "sql",
    "question": "Which clause filters rows before aggregation?",
    "options": [
      "HAVING",
      "ORDER BY",
      "WHERE",
      "GROUP BY"
    ],
    "answer": 2,
    "explanation": "WHERE filters rows before grouping occurs."
  },
  {
    "id": 18,
    "difficulty": "medium",
    "category": "sql",
    "question": "Which clause filters aggregated results?",
    "options": [
      "DISTINCT",
      "WHERE",
      "HAVING",
      "ORDER BY"
    ],
    "answer": 2,
    "explanation": "HAVING filters groups after aggregation."
  },
  {
    "id": 19,
    "difficulty": "medium",
    "category": "sql",
    "question": "Which window function assigns unique sequential numbers?",
    "options": [
      "LEAD",
      "RANK",
      "DENSE_RANK",
      "ROW_NUMBER"
    ],
    "answer": 3,
    "explanation": "ROW_NUMBER always generates unique sequential values."
  },
  {
    "id": 20,
    "difficulty": "hard",
    "category": "sql",
    "question": "Which technique usually provides the biggest SQL performance improvement?",
    "options": [
      "Adding comments",
      "Using VARCHAR(MAX)",
      "Using SELECT *",
      "Proper indexing"
    ],
    "answer": 3,
    "explanation": "Well-designed indexes significantly reduce query execution time."
  },
  {
    "id": 21,
    "difficulty": "medium",
    "category": "python",
    "question": "Which keyword creates a generator?",
    "options": [
      "return",
      "pass",
      "yield",
      "async"
    ],
    "answer": 2,
    "explanation": "yield produces values lazily, creating a generator."
  },
  {
    "id": 22,
    "difficulty": "medium",
    "category": "python",
    "question": "Which Python feature allows modifying function behaviour without changing its code?",
    "options": [
      "Decorator",
      "Iterator",
      "Lambda",
      "Generator"
    ],
    "answer": 0,
    "explanation": "Decorators wrap existing functions to extend functionality."
  },
  {
    "id": 23,
    "difficulty": "easy",
    "category": "python",
    "question": "Which data structure is immutable?",
    "options": [
      "Set",
      "List",
      "Dictionary",
      "Tuple"
    ],
    "answer": 3,
    "explanation": "Tuples cannot be modified after creation."
  },
  {
    "id": 24,
    "difficulty": "hard",
    "category": "python",
    "question": "Why is multiprocessing preferred over multithreading for CPU-intensive tasks?",
    "options": [
      "Threads consume less memory",
      "Processes share memory",
      "Threads are slower",
      "Processes bypass Python's GIL"
    ],
    "answer": 3,
    "explanation": "Multiprocessing avoids the Global Interpreter Lock and enables true parallel execution."
  },
  {
    "id": 25,
    "difficulty": "hard",
    "category": "python",
    "question": "What is the primary benefit of using generators in large ETL pipelines?",
    "options": [
      "Automatic indexing",
      "Lower memory consumption",
      "Higher CPU speed",
      "Faster network transfer"
    ],
    "answer": 1,
    "explanation": "Generators process one record at a time, making them memory-efficient for large datasets."
  },
  {
    "id": 26,
    "difficulty": "easy",
    "category": "sql",
    "question": "Which JOIN returns only matching records from both tables?",
    "options": [
      "FULL OUTER JOIN",
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN"
    ],
    "answer": 1,
    "explanation": "INNER JOIN returns only rows where matching values exist in both tables."
  },
  {
    "id": 27,
    "difficulty": "medium",
    "category": "sql",
    "question": "Which SQL function assigns the same rank to equal values without gaps?",
    "options": [
      "RANK()",
      "NTILE()",
      "DENSE_RANK()",
      "ROW_NUMBER()"
    ],
    "answer": 2,
    "explanation": "DENSE_RANK() assigns equal ranks without leaving gaps."
  },
  {
    "id": 28,
    "difficulty": "hard",
    "category": "sql",
    "question": "Which execution plan operator usually indicates the need for an index?",
    "options": [
      "Hash Aggregate",
      "Nested Loop",
      "Index Seek",
      "Table Scan"
    ],
    "answer": 3,
    "explanation": "Large table scans often indicate missing or ineffective indexes."
  },
  {
    "id": 29,
    "difficulty": "medium",
    "category": "sql",
    "question": "Which normalization form removes transitive dependency?",
    "options": [
      "BCNF",
      "2NF",
      "3NF",
      "1NF"
    ],
    "answer": 2,
    "explanation": "Third Normal Form removes transitive dependencies."
  },
  {
    "id": 30,
    "difficulty": "hard",
    "category": "sql",
    "question": "Which optimization reduces network traffic between Spark and SQL databases?",
    "options": [
      "Predicate Pushdown",
      "SELECT *",
      "ORDER BY",
      "CROSS JOIN"
    ],
    "answer": 0,
    "explanation": "Predicate pushdown filters data at the source, minimizing data transfer."
  },
  {
    "id": 31,
    "difficulty": "easy",
    "category": "spark",
    "question": "Which language API is most commonly used with Apache Spark?",
    "options": [
      "C#",
      "PySpark",
      "JavaScript",
      "PHP"
    ],
    "answer": 1,
    "explanation": "PySpark is the Python API for Apache Spark."
  },
  {
    "id": 32,
    "difficulty": "easy",
    "category": "spark",
    "question": "Which Spark component stores data across multiple machines?",
    "options": [
      "HTTP Server",
      "Notebook",
      "Scheduler UI",
      "RDD"
    ],
    "answer": 3,
    "explanation": "RDD (Resilient Distributed Dataset) is Spark's core distributed data abstraction."
  },
  {
    "id": 33,
    "difficulty": "medium",
    "category": "spark",
    "question": "Which transformation causes a shuffle?",
    "options": [
      "filter()",
      "groupByKey()",
      "select()",
      "map()"
    ],
    "answer": 1,
    "explanation": "groupByKey() redistributes data across partitions, causing a shuffle."
  },
  {
    "id": 34,
    "difficulty": "medium",
    "category": "spark",
    "question": "What is the default execution model of Spark transformations?",
    "options": [
      "Lazy",
      "Synchronous",
      "Eager",
      "Immediate"
    ],
    "answer": 0,
    "explanation": "Spark evaluates transformations lazily and executes only when an action is triggered."
  },
  {
    "id": 35,
    "difficulty": "hard",
    "category": "spark",
    "question": "Which issue commonly causes Spark jobs to run slowly?",
    "options": [
      "Broadcast Join",
      "Partition Pruning",
      "Column Pruning",
      "Data Skew"
    ],
    "answer": 3,
    "explanation": "Data skew causes uneven workload distribution among executors."
  },
  {
    "id": 36,
    "difficulty": "hard",
    "category": "spark",
    "question": "For approximately 10GB of daily input data, what is the recommended initial partition strategy?",
    "options": [
      "One partition per executor",
      "Approximately 128MB–256MB per partition",
      "1 Partition",
      "2 Partitions"
    ],
    "answer": 1,
    "explanation": "Spark performs best when partitions are around 128–256 MB."
  },
  {
    "id": 37,
    "difficulty": "medium",
    "category": "spark",
    "question": "What is the benefit of Broadcast Join?",
    "options": [
      "Increases shuffle",
      "Compresses data",
      "Deletes duplicate rows",
      "Copies small tables to executors"
    ],
    "answer": 3,
    "explanation": "Broadcast joins avoid expensive shuffles when one table is small."
  },
  {
    "id": 38,
    "difficulty": "hard",
    "category": "spark",
    "question": "Which Spark UI tab is most useful for identifying stage bottlenecks?",
    "options": [
      "Storage",
      "Environment",
      "Executors",
      "Jobs"
    ],
    "answer": 3,
    "explanation": "The Jobs and Stages pages help identify long-running stages and shuffle bottlenecks."
  },
  {
    "id": 39,
    "difficulty": "medium",
    "category": "spark",
    "question": "Which storage level does cache() use by default?",
    "options": [
      "MEMORY_ONLY",
      "DISK_ONLY",
      "MEMORY_AND_DISK",
      "OFF_HEAP"
    ],
    "answer": 0,
    "explanation": "cache() is equivalent to persist(MEMORY_ONLY)."
  },
  {
    "id": 40,
    "difficulty": "hard",
    "category": "spark",
    "question": "When should persist(MEMORY_AND_DISK) be preferred over cache()?",
    "options": [
      "When writing CSV",
      "When reading JSON",
      "When data fits comfortably in memory",
      "When the dataset is reused and may exceed available memory"
    ],
    "answer": 3,
    "explanation": "MEMORY_AND_DISK prevents recomputation if data cannot fit entirely in memory."
  },
  {
    "id": 41,
    "difficulty": "easy",
    "category": "databricks",
    "question": "Which storage format is the default recommendation for Databricks?",
    "options": [
      "Parquet",
      "CSV",
      "JSON",
      "Delta Lake"
    ],
    "answer": 3,
    "explanation": "Delta Lake provides ACID transactions, schema enforcement and time travel."
  },
  {
    "id": 42,
    "difficulty": "medium",
    "category": "databricks",
    "question": "Which Databricks feature enables ACID transactions?",
    "options": [
      "Photon",
      "MLflow",
      "Delta Lake",
      "Hive"
    ],
    "answer": 2,
    "explanation": "Delta Lake adds transactional guarantees to the data lake."
  },
  {
    "id": 43,
    "difficulty": "medium",
    "category": "databricks",
    "question": "Which command compacts small Delta files?",
    "options": [
      "VACUUM",
      "DESCRIBE",
      "MERGE",
      "OPTIMIZE"
    ],
    "answer": 3,
    "explanation": "OPTIMIZE reduces the number of small files to improve query performance."
  },
  {
    "id": 44,
    "difficulty": "medium",
    "category": "databricks",
    "question": "What does ZORDER primarily improve?",
    "options": [
      "Notebook Startup",
      "Security",
      "Storage Cost",
      "Query Performance"
    ],
    "answer": 3,
    "explanation": "ZORDER colocates related data to reduce file scanning."
  },
  {
    "id": 45,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which Delta feature allows querying previous versions of data?",
    "options": [
      "Photon",
      "VACUUM",
      "MERGE",
      "Time Travel"
    ],
    "answer": 3,
    "explanation": "Time Travel enables rollback and historical queries."
  },
  {
    "id": 46,
    "difficulty": "hard",
    "category": "databricks",
    "question": "What is the primary purpose of Unity Catalog?",
    "options": [
      "Cluster Autoscaling",
      "Centralized Governance",
      "Data Compression",
      "Notebook Scheduling"
    ],
    "answer": 1,
    "explanation": "Unity Catalog centralizes access control, lineage and governance."
  },
  {
    "id": 47,
    "difficulty": "hard",
    "category": "databricks",
    "question": "A parent job fails because one child notebook throws an exception. Which practice improves traceability?",
    "options": [
      "Increase cluster size",
      "Run all notebooks manually",
      "Use task values, job parameters and centralized logging",
      "Disable retries"
    ],
    "answer": 2,
    "explanation": "Passing parameters and centralized logging improve troubleshooting across workflows."
  },
  {
    "id": 48,
    "difficulty": "hard",
    "category": "databricks",
    "question": "What is the main benefit of Job Clusters over All-Purpose Clusters?",
    "options": [
      "Faster SQL syntax",
      "Permanent caching",
      "Lower cost for scheduled workloads",
      "Unlimited storage"
    ],
    "answer": 2,
    "explanation": "Job Clusters terminate automatically after execution, reducing compute costs."
  },
  {
    "id": 49,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which command permanently removes obsolete Delta files after the retention period?",
    "options": [
      "VACUUM",
      "MERGE",
      "OPTIMIZE",
      "DELETE"
    ],
    "answer": 0,
    "explanation": "VACUUM removes files no longer referenced by Delta Lake."
  },
  {
    "id": 50,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which practice best reduces Databricks compute costs in production?",
    "options": [
      "Disable auto-termination",
      "Use autoscaling job clusters with cluster policies",
      "Keep clusters running 24x7",
      "Use all-purpose clusters for everything"
    ],
    "answer": 1,
    "explanation": "Autoscaling job clusters with governance policies provide the best balance of performance and cost."
  },
  {
    "id": 51,
    "difficulty": "easy",
    "category": "azure",
    "question": "Which Azure service is primarily used for orchestrating ETL/ELT pipelines?",
    "options": [
      "Azure Data Factory",
      "Azure Kubernetes Service",
      "Azure DevOps",
      "Azure Monitor"
    ],
    "answer": 0,
    "explanation": "Azure Data Factory (ADF) is Microsoft's managed data integration and orchestration service."
  },
  {
    "id": 52,
    "difficulty": "medium",
    "category": "azure",
    "question": "Which Azure storage service is recommended for a Lakehouse architecture?",
    "options": [
      "Azure Data Lake Storage Gen2",
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Cache for Redis"
    ],
    "answer": 0,
    "explanation": "ADLS Gen2 provides scalable hierarchical storage optimized for analytics."
  },
  {
    "id": 53,
    "difficulty": "medium",
    "category": "azure",
    "question": "Which Azure service combines big data analytics and enterprise data warehousing?",
    "options": [
      "Azure Logic Apps",
      "Azure Monitor",
      "Azure Functions",
      "Azure Synapse Analytics"
    ],
    "answer": 3,
    "explanation": "Azure Synapse integrates SQL, Spark, pipelines and analytics into a unified platform."
  },
  {
    "id": 54,
    "difficulty": "hard",
    "category": "azure",
    "question": "Which Azure security feature should be used to store Databricks secrets securely?",
    "options": [
      "Azure Blob Storage",
      "Azure Key Vault",
      "Azure Files",
      "Azure Backup"
    ],
    "answer": 1,
    "explanation": "Azure Key Vault securely stores secrets, certificates and encryption keys."
  },
  {
    "id": 55,
    "difficulty": "hard",
    "category": "azure",
    "question": "How should Azure Databricks securely access ADLS Gen2?",
    "options": [
      "Managed Identity or Service Principal",
      "Shared Password",
      "Storage Account Key",
      "Anonymous Access"
    ],
    "answer": 0,
    "explanation": "Managed Identity or Service Principal with RBAC provides secure access."
  },
  {
    "id": 56,
    "difficulty": "easy",
    "category": "aws",
    "question": "Which AWS service provides highly durable object storage?",
    "options": [
      "RDS",
      "DynamoDB",
      "EBS",
      "S3"
    ],
    "answer": 3,
    "explanation": "Amazon S3 is the foundation for most AWS data lakes."
  },
  {
    "id": 57,
    "difficulty": "medium",
    "category": "aws",
    "question": "Which AWS service is primarily used for serverless ETL jobs?",
    "options": [
      "CloudFormation",
      "Route53",
      "Glue",
      "CloudTrail"
    ],
    "answer": 2,
    "explanation": "AWS Glue is a managed ETL and data integration service."
  },
  {
    "id": 58,
    "difficulty": "medium",
    "category": "aws",
    "question": "Which AWS analytics service is designed for petabyte-scale data warehousing?",
    "options": [
      "CloudFront",
      "SNS",
      "Lambda",
      "Redshift"
    ],
    "answer": 3,
    "explanation": "Amazon Redshift is AWS's cloud-native analytical data warehouse."
  },
  {
    "id": 59,
    "difficulty": "hard",
    "category": "aws",
    "question": "Which AWS service provides managed Apache Kafka?",
    "options": [
      "Kinesis",
      "EventBridge",
      "SQS",
      "MSK"
    ],
    "answer": 3,
    "explanation": "Amazon MSK (Managed Streaming for Apache Kafka) manages Kafka clusters."
  },
  {
    "id": 60,
    "difficulty": "hard",
    "category": "aws",
    "question": "When migrating from a local Kafka cluster to AWS, what is the preferred managed target?",
    "options": [
      "Amazon MSK",
      "Amazon EC2 only",
      "Amazon RDS",
      "Amazon CloudFront"
    ],
    "answer": 0,
    "explanation": "Amazon MSK minimizes operational overhead while remaining Kafka-compatible."
  },
  {
    "id": 61,
    "difficulty": "medium",
    "category": "aws",
    "question": "Which AWS AI service enables access to foundation models like Claude and Llama?",
    "options": [
      "Comprehend",
      "Textract",
      "Polly",
      "Bedrock"
    ],
    "answer": 3,
    "explanation": "Amazon Bedrock provides managed access to multiple foundation models."
  },
  {
    "id": 62,
    "difficulty": "hard",
    "category": "aws",
    "question": "What is the biggest architectural benefit of migrating from a local LLM to Amazon Bedrock?",
    "options": [
      "Managed scaling, security and model hosting",
      "Unlimited GPU",
      "Automatic SQL optimization",
      "No prompt engineering required"
    ],
    "answer": 0,
    "explanation": "Bedrock eliminates infrastructure management while providing secure managed AI services."
  },
  {
    "id": 63,
    "difficulty": "easy",
    "category": "snowflake",
    "question": "What is Snowflake's primary architectural advantage?",
    "options": [
      "Runs only on-premises",
      "Separated compute and storage",
      "Embedded Java",
      "Requires Hadoop"
    ],
    "answer": 1,
    "explanation": "Snowflake independently scales compute and storage."
  },
  {
    "id": 64,
    "difficulty": "medium",
    "category": "fabric",
    "question": "Microsoft Fabric is best described as:",
    "options": [
      "Only a BI tool",
      "An end-to-end analytics SaaS platform",
      "A Kubernetes platform",
      "A programming language"
    ],
    "answer": 1,
    "explanation": "Fabric unifies data engineering, warehousing, BI and AI."
  },
  {
    "id": 65,
    "difficulty": "easy",
    "category": "ai",
    "question": "What does LLM stand for?",
    "options": [
      "Linear Learning Method",
      "Large Language Model",
      "Logical Language Model",
      "Long Lifecycle Module"
    ],
    "answer": 1,
    "explanation": "LLM stands for Large Language Model."
  },
  {
    "id": 66,
    "difficulty": "medium",
    "category": "ai",
    "question": "Which technique reduces hallucination without retraining an LLM?",
    "options": [
      "Tokenization",
      "Fine-tuning",
      "Normalization",
      "RAG"
    ],
    "answer": 3,
    "explanation": "Retrieval-Augmented Generation provides relevant external knowledge."
  },
  {
    "id": 67,
    "difficulty": "medium",
    "category": "ai",
    "question": "What is the purpose of embeddings?",
    "options": [
      "Improve SQL performance",
      "Convert text into numerical vectors",
      "Compress images",
      "Encrypt data"
    ],
    "answer": 1,
    "explanation": "Embeddings capture semantic meaning as vectors."
  },
  {
    "id": 68,
    "difficulty": "medium",
    "category": "ai",
    "question": "Which database is optimized for similarity search?",
    "options": [
      "SQLite",
      "SQL Server",
      "Vector Database",
      "MySQL"
    ],
    "answer": 2,
    "explanation": "Vector databases efficiently search embeddings using nearest-neighbor algorithms."
  },
  {
    "id": 69,
    "difficulty": "hard",
    "category": "rag",
    "question": "Which component retrieves relevant documents before sending context to an LLM?",
    "options": [
      "Scheduler",
      "Tokenizer",
      "Optimizer",
      "Retriever"
    ],
    "answer": 3,
    "explanation": "The retriever finds relevant chunks from the vector database."
  },
  {
    "id": 70,
    "difficulty": "hard",
    "category": "rag",
    "question": "Which issue most commonly reduces RAG answer quality?",
    "options": [
      "SSD storage",
      "Poor document chunking",
      "High network speed",
      "Large monitor"
    ],
    "answer": 1,
    "explanation": "Improper chunking often leads to poor retrieval accuracy."
  },
  {
    "id": 71,
    "difficulty": "hard",
    "category": "vector-db",
    "question": "What happens if embeddings are generated using different models for indexing and querying?",
    "options": [
      "Lower storage cost",
      "Poor similarity matching",
      "Better recall",
      "No impact"
    ],
    "answer": 1,
    "explanation": "Embedding mismatch significantly degrades semantic search quality."
  },
  {
    "id": 72,
    "difficulty": "hard",
    "category": "vector-db",
    "question": "Which metric is commonly used for vector similarity search?",
    "options": [
      "Hash Join",
      "B-Tree",
      "Cosine Similarity",
      "CRC"
    ],
    "answer": 2,
    "explanation": "Cosine similarity is one of the most widely used vector similarity metrics."
  },
  {
    "id": 73,
    "difficulty": "hard",
    "category": "ai",
    "question": "Which practice is part of Responsible AI?",
    "options": [
      "Disabling encryption",
      "Ignoring bias",
      "Removing logging",
      "Model explainability"
    ],
    "answer": 3,
    "explanation": "Responsible AI includes fairness, explainability, transparency and governance."
  },
  {
    "id": 74,
    "difficulty": "hard",
    "category": "ai",
    "question": "Which tool is widely used for ML experiment tracking?",
    "options": [
      "Redis",
      "Jenkins",
      "MLflow",
      "Terraform"
    ],
    "answer": 2,
    "explanation": "MLflow tracks experiments, parameters, metrics and model versions."
  },
  {
    "id": 75,
    "difficulty": "hard",
    "category": "architecture",
    "question": "A business wants near real-time dashboards with AI predictions. Which architecture is most appropriate?",
    "options": [
      "Streaming ingestion → Lakehouse → Feature Store → ML Model → BI Dashboard",
      "Nightly batch ETL only",
      "CSV uploads every week",
      "Desktop database"
    ],
    "answer": 0,
    "explanation": "Streaming pipelines feeding a Lakehouse with ML inference provide low-latency analytics and AI predictions."
  },
  {
    "id": 76,
    "difficulty": "medium",
    "category": "monitoring",
    "question": "Which observability framework is commonly used to collect traces, metrics and logs across distributed systems?",
    "options": [
      "Mockito",
      "OpenTelemetry",
      "JUnit",
      "Liquibase"
    ],
    "answer": 1,
    "explanation": "OpenTelemetry is the industry standard for collecting telemetry data including metrics, traces and logs."
  },
  {
    "id": 77,
    "difficulty": "medium",
    "category": "monitoring",
    "question": "Which Datadog feature helps trace a request across multiple microservices?",
    "options": [
      "Log Explorer",
      "APM Distributed Tracing",
      "Dashboard Lists",
      "Synthetics Only"
    ],
    "answer": 1,
    "explanation": "Datadog APM correlates requests across services using distributed tracing."
  },
  {
    "id": 78,
    "difficulty": "medium",
    "category": "monitoring",
    "question": "Azure Application Insights is primarily used for:",
    "options": [
      "Application monitoring and telemetry",
      "Managing Azure subscriptions",
      "Building Docker images",
      "Provisioning VMs"
    ],
    "answer": 0,
    "explanation": "Application Insights collects request telemetry, dependencies, exceptions and performance metrics."
  },
  {
    "id": 79,
    "difficulty": "hard",
    "category": "monitoring",
    "question": "A production API suddenly becomes slow although CPU utilization is low. What should be investigated first?",
    "options": [
      "Restart the database",
      "Increase VM size immediately",
      "Distributed traces and dependency latency",
      "Delete indexes"
    ],
    "answer": 2,
    "explanation": "Distributed tracing often reveals downstream dependency bottlenecks that are not visible from CPU metrics alone."
  },
  {
    "id": 80,
    "difficulty": "hard",
    "category": "aws",
    "question": "Users in Asia report slow website access while US users do not. Which AWS service is designed to reduce global latency?",
    "options": [
      "SQS",
      "CloudFront",
      "SNS",
      "CloudTrail"
    ],
    "answer": 1,
    "explanation": "CloudFront caches content at edge locations around the world, reducing latency."
  },
  {
    "id": 81,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which Databricks feature enforces standardized compute configuration and security settings?",
    "options": [
      "Repos",
      "Delta Sharing",
      "Cluster Policies",
      "Notebook Widgets"
    ],
    "answer": 2,
    "explanation": "Cluster Policies enforce VM types, auto-termination, libraries and governance rules."
  },
  {
    "id": 82,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which Delta Lake command shows historical operations performed on a table?",
    "options": [
      "DESCRIBE HISTORY",
      "LIST FILES",
      "SHOW USERS",
      "DESCRIBE DATABASE"
    ],
    "answer": 0,
    "explanation": "DESCRIBE HISTORY provides an audit trail of operations performed on a Delta table."
  },
  {
    "id": 83,
    "difficulty": "hard",
    "category": "databricks",
    "question": "What is the safest method to recover accidentally deleted Delta data?",
    "options": [
      "Delta Time Travel or RESTORE",
      "Restart the cluster",
      "Run VACUUM immediately",
      "Delete transaction logs"
    ],
    "answer": 0,
    "explanation": "Time Travel and RESTORE allow recovery before obsolete files are vacuumed."
  },
  {
    "id": 84,
    "difficulty": "hard",
    "category": "spark",
    "question": "A Spark executor repeatedly runs OutOfMemory errors. Which action should be investigated first?",
    "options": [
      "Disable caching",
      "Delete Delta logs",
      "Review partition sizes and shuffle operations",
      "Increase retries"
    ],
    "answer": 2,
    "explanation": "Oversized partitions and expensive shuffles are common causes of executor memory failures."
  },
  {
    "id": 85,
    "difficulty": "hard",
    "category": "spark",
    "question": "Which Spark optimization automatically adjusts shuffle partitions during execution?",
    "options": [
      "Photon",
      "Adaptive Query Execution (AQE)",
      "Broadcast Variables",
      "Checkpointing"
    ],
    "answer": 1,
    "explanation": "AQE dynamically optimizes joins, partition sizes and shuffle behavior."
  },
  {
    "id": 86,
    "difficulty": "hard",
    "category": "security",
    "question": "Which encryption practice aligns with PCI DSS recommendations?",
    "options": [
      "ZIP compression",
      "Plain-text storage",
      "Encryption at rest and in transit",
      "Base64 encoding"
    ],
    "answer": 2,
    "explanation": "PCI DSS requires strong encryption for sensitive data both at rest and during transmission."
  },
  {
    "id": 87,
    "difficulty": "hard",
    "category": "security",
    "question": "Which access control principle should architects always follow?",
    "options": [
      "Anonymous access",
      "Least Privilege",
      "Hardcoded credentials",
      "Shared administrator account"
    ],
    "answer": 1,
    "explanation": "Least Privilege minimizes security risks by granting only the permissions required."
  },
  {
    "id": 88,
    "difficulty": "hard",
    "category": "security",
    "question": "Where should cloud application secrets be stored?",
    "options": [
      "Git repository",
      "Configuration file",
      "Application source code",
      "Secret Manager or Key Vault"
    ],
    "answer": 3,
    "explanation": "Secrets should always be managed using dedicated secret management services."
  },
  {
    "id": 89,
    "difficulty": "hard",
    "category": "governance",
    "question": "Which capability provides end-to-end data lineage across enterprise data assets?",
    "options": [
      "Unity Catalog or Microsoft Purview",
      "Data Catalog",
      "Azure Portal",
      "GitHub Wiki"
    ],
    "answer": 0,
    "explanation": "Unity Catalog and Microsoft Purview provide governance, lineage and metadata management."
  },
  {
    "id": 90,
    "difficulty": "hard",
    "category": "rag",
    "question": "Users report inconsistent answers despite identical prompts. What should be investigated first?",
    "options": [
      "Database password length",
      "Monitor brightness",
      "Retriever quality, chunking strategy and embedding consistency",
      "Keyboard layout"
    ],
    "answer": 2,
    "explanation": "Poor retrieval quality is a common cause of inconsistent RAG responses."
  },
  {
    "id": 91,
    "difficulty": "hard",
    "category": "cost-optimization",
    "question": "Which Databricks deployment generally minimizes operational cost for scheduled ETL jobs?",
    "options": [
      "Autoscaling job clusters with auto-termination",
      "Largest VM available",
      "Always-on all-purpose clusters",
      "Separate cluster per notebook permanently"
    ],
    "answer": 0,
    "explanation": "Ephemeral autoscaling job clusters reduce idle compute costs."
  },
  {
    "id": 92,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which design pattern improves resiliency between producer and consumer services?",
    "options": [
      "SFTP polling only",
      "Shared memory",
      "Message Queue or Event Streaming",
      "Direct database updates"
    ],
    "answer": 2,
    "explanation": "Asynchronous messaging decouples systems and improves fault tolerance."
  },
  {
    "id": 93,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which migration approach minimizes production risk when moving from an on-premises AI platform to AWS Bedrock?",
    "options": [
      "Phased migration with parallel validation",
      "Move all production users immediately",
      "Big Bang migration",
      "Delete the old platform first"
    ],
    "answer": 0,
    "explanation": "A phased migration allows functional validation and rollback if issues occur."
  },
  {
    "id": 94,
    "difficulty": "hard",
    "category": "operations",
    "question": "A production Databricks workflow intermittently fails. Which investigation should occur first?",
    "options": [
      "Disable retries",
      "Increase cluster size",
      "Delete Delta tables",
      "Review Job Run history, driver logs and cluster event logs"
    ],
    "answer": 3,
    "explanation": "Job history and cluster logs usually identify infrastructure or application failures."
  },
  {
    "id": 95,
    "difficulty": "hard",
    "category": "operations",
    "question": "Which KPI best indicates data pipeline reliability?",
    "options": [
      "Developer count",
      "Notebook font size",
      "Repository size",
      "Pipeline Success Rate / SLA Compliance"
    ],
    "answer": 3,
    "explanation": "Successful execution within SLA is the key operational reliability metric."
  },
  {
    "id": 96,
    "difficulty": "hard",
    "category": "troubleshooting",
    "question": "A Delta table has thousands of very small files causing poor performance. Which action should be taken?",
    "options": [
      "Restart Databricks",
      "Disable Delta Lake",
      "Run OPTIMIZE followed by appropriate maintenance",
      "DELETE all files"
    ],
    "answer": 2,
    "explanation": "OPTIMIZE compacts small files and significantly improves query performance."
  },
  {
    "id": 97,
    "difficulty": "hard",
    "category": "troubleshooting",
    "question": "Which metric is most useful for identifying Spark data skew?",
    "options": [
      "CPU model",
      "Workspace name",
      "Executor task duration variance",
      "Average notebook size"
    ],
    "answer": 2,
    "explanation": "Large differences in executor task durations usually indicate skewed partitions."
  },
  {
    "id": 98,
    "difficulty": "hard",
    "category": "leadership",
    "question": "When business stakeholders request a technically risky shortcut, what should a Solution Architect do?",
    "options": [
      "Document trade-offs, risks and recommended alternatives",
      "Approve immediately",
      "Ignore the request",
      "Let developers decide"
    ],
    "answer": 0,
    "explanation": "Architects should communicate risks, evaluate alternatives and support informed decision-making."
  },
  {
    "id": 99,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which factor is typically the highest priority when designing AI solutions for government or regulated industries?",
    "options": [
      "Animated dashboards",
      "Security, compliance and governance",
      "Programming language preference",
      "Notebook themes"
    ],
    "answer": 1,
    "explanation": "Regulated environments require security, auditability, compliance and governance as primary design considerations."
  },
  {
    "id": 100,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What distinguishes an excellent Solution Architect from a senior developer?",
    "options": [
      "Writes more code",
      "Balances business goals, technology, security, scalability, cost and operational excellence",
      "Only manages project schedules",
      "Focuses only on cloud infrastructure"
    ],
    "answer": 1,
    "explanation": "A Solution Architect makes strategic technology decisions that align with business objectives while considering scalability, security, governance, operational support and long-term cost."
  },
  {
    "id": 101,
    "difficulty": "hard",
    "category": "databricks",
    "question": "A Delta table is queried thousands of times daily but query performance has degraded significantly over six months. What should be investigated first?",
    "options": [
      "Increase cluster size",
      "Increase notebook timeout",
      "Review small-file fragmentation, ZORDER strategy, partitioning and OPTIMIZE schedule",
      "Restart the workspace"
    ],
    "answer": 2,
    "explanation": "Over time many incremental writes create small files. Regular OPTIMIZE, proper partitioning and ZORDER maintain query performance."
  },
  {
    "id": 102,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which Delta Lake feature provides full auditability of every table modification?",
    "options": [
      "CHECKPOINT",
      "OPTIMIZE",
      "DESCRIBE HISTORY",
      "VACUUM"
    ],
    "answer": 2,
    "explanation": "DESCRIBE HISTORY records all operations including UPDATE, DELETE, MERGE, OPTIMIZE and RESTORE."
  },
  {
    "id": 103,
    "difficulty": "hard",
    "category": "databricks",
    "question": "A developer accidentally executed DELETE FROM Customer without a WHERE clause. What is the fastest recovery approach?",
    "options": [
      "Rebuild entire table",
      "Restart cluster",
      "Restore database backup",
      "Delta RESTORE or Time Travel"
    ],
    "answer": 3,
    "explanation": "Delta Time Travel and RESTORE recover previous table versions within the retention period."
  },
  {
    "id": 104,
    "difficulty": "hard",
    "category": "spark",
    "question": "A Spark job processes 10 GB daily. Which partition size generally provides optimal performance?",
    "options": [
      "5 MB",
      "25 MB",
      "128-256 MB",
      "2 GB"
    ],
    "answer": 2,
    "explanation": "Spark generally performs best when partitions are around 128-256 MB, balancing parallelism and scheduling overhead."
  },
  {
    "id": 105,
    "difficulty": "hard",
    "category": "spark",
    "question": "Which Spark join should be selected when joining a 50 GB fact table with a 20 MB lookup table?",
    "options": [
      "Shuffle Hash Join",
      "Broadcast Join",
      "Cartesian Join",
      "Sort Merge Join"
    ],
    "answer": 1,
    "explanation": "Broadcast Join avoids shuffling the large table by distributing the small lookup table to executors."
  },
  {
    "id": 106,
    "difficulty": "hard",
    "category": "spark",
    "question": "Which Spark metric is the strongest indicator of data skew?",
    "options": [
      "Large variance in task duration",
      "Executor memory",
      "Driver CPU",
      "Notebook execution time"
    ],
    "answer": 0,
    "explanation": "Highly uneven task durations usually indicate skewed partitions."
  },
  {
    "id": 107,
    "difficulty": "hard",
    "category": "spark",
    "question": "Which Adaptive Query Execution capability dynamically converts Sort Merge Join into Broadcast Join?",
    "options": [
      "Dynamic Allocation",
      "AQE Join Optimization",
      "Stage Retry",
      "Checkpointing"
    ],
    "answer": 1,
    "explanation": "AQE automatically changes join strategies based on runtime statistics."
  },
  {
    "id": 108,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which Databricks cluster type should be used for nightly ETL workloads?",
    "options": [
      "Job Cluster",
      "All Purpose Cluster",
      "SQL Warehouse",
      "Personal Compute"
    ],
    "answer": 0,
    "explanation": "Job Clusters automatically terminate after completion, reducing operational cost."
  },
  {
    "id": 109,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which feature prevents developers from selecting oversized VM types?",
    "options": [
      "Notebook ACL",
      "Secret Scope",
      "Cluster Policy",
      "Workspace Folder"
    ],
    "answer": 2,
    "explanation": "Cluster Policies enforce approved VM sizes, runtime versions and security settings."
  },
  {
    "id": 110,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Parent Job A launches ten child jobs. Three complete successfully while one fails. Which mechanism enables automatic recovery?",
    "options": [
      "Task Retry Policy",
      "Driver Restart",
      "Notebook Widgets",
      "Cluster Restart"
    ],
    "answer": 0,
    "explanation": "Databricks Jobs support configurable retry policies for failed tasks."
  },
  {
    "id": 111,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which practice provides complete traceability across parent and child jobs?",
    "options": [
      "Separate notebooks",
      "Correlation IDs and Job Parameters",
      "Manual logging",
      "Different workspaces"
    ],
    "answer": 1,
    "explanation": "Correlation IDs enable end-to-end tracing across distributed workflows."
  },
  {
    "id": 112,
    "difficulty": "hard",
    "category": "aws",
    "question": "Which AWS monitoring service collects infrastructure metrics and alarms?",
    "options": [
      "CloudFront",
      "Inspector",
      "GuardDuty",
      "CloudWatch"
    ],
    "answer": 3,
    "explanation": "CloudWatch provides metrics, logs, dashboards and alarms."
  },
  {
    "id": 113,
    "difficulty": "hard",
    "category": "aws",
    "question": "CloudFront users receive HTTP 403 errors. Which configuration should be checked first?",
    "options": [
      "VPC Peering",
      "Lambda timeout",
      "S3 bucket permissions or Origin Access Control",
      "Redshift cluster"
    ],
    "answer": 2,
    "explanation": "403 errors commonly result from incorrect origin permissions."
  },
  {
    "id": 114,
    "difficulty": "hard",
    "category": "monitoring",
    "question": "Which OpenTelemetry component exports traces to Datadog or Application Insights?",
    "options": [
      "Collector",
      "Driver",
      "Workspace",
      "Executor"
    ],
    "answer": 0,
    "explanation": "The OpenTelemetry Collector gathers and exports telemetry to monitoring backends."
  },
  {
    "id": 115,
    "difficulty": "hard",
    "category": "monitoring",
    "question": "Which telemetry type best identifies why one API call is slower than another?",
    "options": [
      "Metrics only",
      "Dashboard",
      "Distributed Trace",
      "Audit Log"
    ],
    "answer": 2,
    "explanation": "Distributed tracing visualizes latency across every downstream dependency."
  },
  {
    "id": 116,
    "difficulty": "hard",
    "category": "security",
    "question": "Which PCI DSS principle is violated by storing database passwords inside application source code?",
    "options": [
      "Encryption",
      "Secure Credential Management",
      "Least Privilege",
      "Audit Logging"
    ],
    "answer": 1,
    "explanation": "Credentials should be stored in secure secret management solutions such as Key Vault or AWS Secrets Manager."
  },
  {
    "id": 117,
    "difficulty": "hard",
    "category": "security",
    "question": "Which encryption algorithm is commonly recommended for encrypting stored enterprise data?",
    "options": [
      "AES-256",
      "MD5",
      "DES",
      "SHA-1"
    ],
    "answer": 0,
    "explanation": "AES-256 is the industry standard for data-at-rest encryption."
  },
  {
    "id": 118,
    "difficulty": "hard",
    "category": "rag",
    "question": "A RAG chatbot returns technically correct but outdated answers. What is the most likely cause?",
    "options": [
      "Notebook timeout",
      "Knowledge base not refreshed",
      "GPU failure",
      "Vector database too small"
    ],
    "answer": 1,
    "explanation": "Outdated indexed documents produce outdated retrieval results."
  },
  {
    "id": 119,
    "difficulty": "hard",
    "category": "rag",
    "question": "What is the primary purpose of reranking retrieved documents before passing them to the LLM?",
    "options": [
      "Reduce embeddings",
      "Improve relevance",
      "Increase GPU utilization",
      "Reduce storage"
    ],
    "answer": 1,
    "explanation": "Reranking improves retrieval precision by ordering the most relevant documents first."
  },
  {
    "id": 120,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which KPI best measures the success of an enterprise AI platform?",
    "options": [
      "Number of notebooks",
      "Lines of Python code",
      "Business value delivered through reliable AI services",
      "Developer count"
    ],
    "answer": 2,
    "explanation": "Architects measure success through business outcomes, reliability, governance and operational excellence."
  },
  {
    "id": 121,
    "difficulty": "hard",
    "category": "spark",
    "question": "A Spark job that normally completes in 20 minutes suddenly takes 2 hours. Executor CPU utilization is low but shuffle read has increased dramatically. What is the most likely root cause?",
    "options": [
      "Notebook timeout",
      "Driver memory too large",
      "Broadcast variable corruption",
      "Data skew after a new partition key"
    ],
    "answer": 3,
    "explanation": "A poor partition key can create data skew, causing excessive shuffle and long-running tasks."
  },
  {
    "id": 122,
    "difficulty": "hard",
    "category": "spark",
    "question": "Which Spark configuration controls the default number of shuffle partitions?",
    "options": [
      "spark.storage.level",
      "spark.executor.instances",
      "spark.sql.shuffle.partitions",
      "spark.driver.memory"
    ],
    "answer": 2,
    "explanation": "spark.sql.shuffle.partitions controls the default number of partitions generated during shuffle operations."
  },
  {
    "id": 123,
    "difficulty": "hard",
    "category": "spark",
    "question": "Which Spark UI page should be examined first when investigating executor OutOfMemory errors?",
    "options": [
      "SQL",
      "Executors",
      "Storage",
      "Environment"
    ],
    "answer": 1,
    "explanation": "The Executors page shows memory usage, failed executors and GC activity."
  },
  {
    "id": 124,
    "difficulty": "hard",
    "category": "spark",
    "question": "When should checkpointing be preferred over caching?",
    "options": [
      "When data is reused frequently",
      "When using Delta Lake",
      "When lineage becomes extremely long or iterative algorithms are used",
      "When reading CSV"
    ],
    "answer": 2,
    "explanation": "Checkpointing truncates lineage, improving reliability for long-running iterative jobs."
  },
  {
    "id": 125,
    "difficulty": "hard",
    "category": "databricks",
    "question": "A Delta MERGE job is becoming progressively slower each month. Which maintenance task is most likely missing?",
    "options": [
      "Deleting transaction logs",
      "OPTIMIZE and ZORDER",
      "Increasing notebook timeout",
      "Restarting the cluster daily"
    ],
    "answer": 1,
    "explanation": "Regular OPTIMIZE reduces file fragmentation while ZORDER improves pruning efficiency."
  },
  {
    "id": 126,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which Delta feature guarantees concurrent write consistency?",
    "options": [
      "Auto Loader",
      "Photon",
      "ACID Transactions",
      "MLflow"
    ],
    "answer": 2,
    "explanation": "Delta Lake implements ACID transactions to prevent data corruption during concurrent operations."
  },
  {
    "id": 127,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which Databricks runtime engine significantly accelerates SQL and DataFrame execution?",
    "options": [
      "Delta Sharing",
      "Workspace Files",
      "Photon",
      "Unity Catalog"
    ],
    "answer": 2,
    "explanation": "Photon is a vectorized execution engine optimized for modern CPUs."
  },
  {
    "id": 128,
    "difficulty": "hard",
    "category": "databricks",
    "question": "What is the primary benefit of Auto Loader over traditional file ingestion?",
    "options": [
      "Runs only on CSV",
      "Automatically detects and incrementally processes new files",
      "Requires Hadoop",
      "Deletes source files"
    ],
    "answer": 1,
    "explanation": "Auto Loader efficiently processes newly arriving files with scalable file discovery."
  },
  {
    "id": 129,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which Unity Catalog feature provides complete column-level lineage?",
    "options": [
      "Notebook Revision History",
      "Lineage Explorer",
      "Cluster Events",
      "Workspace Browser"
    ],
    "answer": 1,
    "explanation": "Unity Catalog tracks lineage across tables, notebooks and columns."
  },
  {
    "id": 130,
    "difficulty": "hard",
    "category": "architecture",
    "question": "An executive requests a 99.99% available analytics platform. Which architectural principle is most important?",
    "options": [
      "High Availability with redundancy across failure domains",
      "Manual backups only",
      "Single VM",
      "Large CPU instances"
    ],
    "answer": 0,
    "explanation": "High availability requires redundant infrastructure, failover and resilient services."
  },
  {
    "id": 131,
    "difficulty": "hard",
    "category": "aws",
    "question": "Which AWS service should store secrets for applications running on ECS or EKS?",
    "options": [
      "S3",
      "Route53",
      "AWS Secrets Manager",
      "CloudWatch"
    ],
    "answer": 2,
    "explanation": "Secrets Manager securely stores and rotates application credentials."
  },
  {
    "id": 132,
    "difficulty": "hard",
    "category": "aws",
    "question": "An S3 bucket suddenly becomes publicly accessible. Which AWS service can detect this security risk automatically?",
    "options": [
      "GuardDuty",
      "Macie",
      "SNS",
      "CloudTrail"
    ],
    "answer": 1,
    "explanation": "Amazon Macie identifies sensitive data exposure and public bucket risks."
  },
  {
    "id": 133,
    "difficulty": "hard",
    "category": "azure",
    "question": "Which Azure service provides centralized governance, cataloging and lineage?",
    "options": [
      "Azure Bastion",
      "Azure Monitor",
      "Azure Firewall",
      "Microsoft Purview"
    ],
    "answer": 3,
    "explanation": "Microsoft Purview provides enterprise data governance and metadata management."
  },
  {
    "id": 134,
    "difficulty": "hard",
    "category": "azure",
    "question": "Which Azure networking feature allows Databricks to access storage without traversing the public internet?",
    "options": [
      "Azure DNS",
      "Private Endpoint",
      "ExpressRoute only",
      "VPN Gateway"
    ],
    "answer": 1,
    "explanation": "Private Endpoints securely connect PaaS services over Microsoft's backbone."
  },
  {
    "id": 135,
    "difficulty": "hard",
    "category": "python",
    "question": "A Python ETL process consumes excessive memory while reading a 40GB CSV. What is the preferred approach?",
    "options": [
      "Read entire file into memory",
      "Convert to JSON first",
      "Increase swap space",
      "Use generators or chunked processing"
    ],
    "answer": 3,
    "explanation": "Chunked processing and generators significantly reduce memory usage."
  },
  {
    "id": 136,
    "difficulty": "hard",
    "category": "python",
    "question": "Which Python library is most commonly used for interacting with Apache Spark?",
    "options": [
      "NumPy",
      "PySpark",
      "Scikit-learn",
      "TensorFlow"
    ],
    "answer": 1,
    "explanation": "PySpark is the official Python API for Apache Spark."
  },
  {
    "id": 137,
    "difficulty": "hard",
    "category": "monitoring",
    "question": "Which metric is most useful for identifying memory leaks in a Java or Spark application?",
    "options": [
      "CPU utilization",
      "Heap usage trend",
      "Disk capacity",
      "Network bandwidth"
    ],
    "answer": 1,
    "explanation": "A steadily increasing heap without release often indicates a memory leak."
  },
  {
    "id": 138,
    "difficulty": "hard",
    "category": "monitoring",
    "question": "Which dashboard should an architect review first during a Sev-1 production incident?",
    "options": [
      "Developer productivity",
      "Repository statistics",
      "Application health, dependencies and error rate",
      "Business KPI Dashboard"
    ],
    "answer": 2,
    "explanation": "Health dashboards quickly identify failing services and dependencies."
  },
  {
    "id": 139,
    "difficulty": "hard",
    "category": "security",
    "question": "Which authentication mechanism is recommended for enterprise REST APIs?",
    "options": [
      "Anonymous Access",
      "JWT/OAuth2 with OpenID Connect",
      "API Key in Source Code",
      "Basic Authentication"
    ],
    "answer": 1,
    "explanation": "OAuth2 and OpenID Connect provide secure authentication and authorization."
  },
  {
    "id": 140,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which quality attribute is improved by introducing asynchronous messaging with Kafka or Amazon MSK?",
    "options": [
      "Scalability and resiliency",
      "Notebook startup",
      "Tight coupling",
      "Compile time"
    ],
    "answer": 0,
    "explanation": "Asynchronous messaging decouples services, improving scalability, resilience and fault tolerance."
  },
  {
    "id": 141,
    "difficulty": "hard",
    "category": "databricks",
    "question": "A Databricks cluster spends nearly 8 minutes starting before every scheduled ETL job. Which approach best reduces overall execution time while keeping costs low?",
    "options": [
      "Increase driver memory",
      "Enable cluster pools with job clusters",
      "Disable auto termination",
      "Use an always-on all-purpose cluster"
    ],
    "answer": 1,
    "explanation": "Cluster Pools keep pre-warmed VM instances available, significantly reducing cluster startup time while retaining the cost benefits of ephemeral job clusters."
  },
  {
    "id": 142,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Your Delta table has over 25 million small files. Besides OPTIMIZE, what architectural change should be considered?",
    "options": [
      "Disable Delta transaction logs",
      "Use larger driver node",
      "Review ingestion frequency and file sizing strategy",
      "Increase notebook timeout"
    ],
    "answer": 2,
    "explanation": "Generating appropriately sized files during ingestion prevents excessive file fragmentation."
  },
  {
    "id": 143,
    "difficulty": "hard",
    "category": "spark",
    "question": "Which Spark optimization reduces unnecessary data movement before joins?",
    "options": [
      "Predicate Pushdown",
      "Partition Pruning",
      "Broadcast Join",
      "Column Pruning"
    ],
    "answer": 1,
    "explanation": "Partition pruning minimizes data scanned by reading only relevant partitions."
  },
  {
    "id": 144,
    "difficulty": "hard",
    "category": "spark",
    "question": "A Spark Structured Streaming job begins falling behind incoming Kafka messages. What should be checked first?",
    "options": [
      "Notebook revision history",
      "Workspace permissions",
      "Processing latency and batch duration",
      "Dashboard color"
    ],
    "answer": 2,
    "explanation": "If processing time exceeds ingestion time, backlog accumulates."
  },
  {
    "id": 145,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the primary purpose of a Medallion Architecture?",
    "options": [
      "Reduce notebook count",
      "Improve UI performance",
      "Increase VM memory",
      "Organize data quality into Bronze, Silver and Gold layers"
    ],
    "answer": 3,
    "explanation": "The Medallion Architecture progressively improves data quality and usability across layers."
  },
  {
    "id": 146,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which data quality dimension verifies that all required records are present?",
    "options": [
      "Accuracy",
      "Consistency",
      "Validity",
      "Completeness"
    ],
    "answer": 3,
    "explanation": "Completeness measures whether expected records and attributes are available."
  },
  {
    "id": 147,
    "difficulty": "hard",
    "category": "aws",
    "question": "A CloudFront distribution serves stale content after deployment. What should be performed?",
    "options": [
      "Invalidate the CloudFront cache",
      "Restart Route53",
      "Increase EC2 size",
      "Delete the S3 bucket"
    ],
    "answer": 0,
    "explanation": "Invalidation removes cached objects so users receive updated content."
  },
  {
    "id": 148,
    "difficulty": "hard",
    "category": "aws",
    "question": "Which AWS service continuously records API activity for auditing?",
    "options": [
      "Inspector",
      "SNS",
      "CloudWatch",
      "CloudTrail"
    ],
    "answer": 3,
    "explanation": "CloudTrail records API activity across AWS services for governance and auditing."
  },
  {
    "id": 149,
    "difficulty": "hard",
    "category": "azure",
    "question": "Which Azure service should monitor distributed application dependencies?",
    "options": [
      "Azure DNS",
      "Blob Storage",
      "Application Insights",
      "Azure Backup"
    ],
    "answer": 2,
    "explanation": "Application Insights provides request, dependency and exception telemetry."
  },
  {
    "id": 150,
    "difficulty": "hard",
    "category": "security",
    "question": "Which authentication method eliminates long-lived access keys for Azure resources?",
    "options": [
      "Anonymous Access",
      "Storage Account Keys",
      "Shared Access Signature only",
      "Managed Identity"
    ],
    "answer": 3,
    "explanation": "Managed Identity removes the need to store credentials in applications."
  },
  {
    "id": 151,
    "difficulty": "hard",
    "category": "security",
    "question": "Which PCI DSS requirement is satisfied by maintaining centralized audit logs?",
    "options": [
      "Requirement 3",
      "Requirement 10",
      "Requirement 1",
      "Requirement 7"
    ],
    "answer": 1,
    "explanation": "PCI DSS Requirement 10 focuses on tracking and monitoring access to network resources and cardholder data."
  },
  {
    "id": 152,
    "difficulty": "hard",
    "category": "rag",
    "question": "Users complain that the chatbot frequently answers from irrelevant documents. Which component should be tuned first?",
    "options": [
      "GPU memory",
      "Retriever and chunking strategy",
      "LLM temperature",
      "Notebook timeout"
    ],
    "answer": 1,
    "explanation": "Poor retrieval quality is often caused by suboptimal chunking or retriever configuration."
  },
  {
    "id": 153,
    "difficulty": "hard",
    "category": "vector-db",
    "question": "Which indexing algorithm is commonly used for approximate nearest-neighbor search?",
    "options": [
      "HNSW",
      "Hash Index",
      "B-Tree",
      "Bitmap"
    ],
    "answer": 0,
    "explanation": "Hierarchical Navigable Small World (HNSW) is widely used for efficient vector similarity search."
  },
  {
    "id": 154,
    "difficulty": "hard",
    "category": "ai",
    "question": "Which metric is most suitable for evaluating document retrieval quality in a RAG system?",
    "options": [
      "CPU Utilization",
      "Heap Size",
      "Recall@K",
      "Notebook Duration"
    ],
    "answer": 2,
    "explanation": "Recall@K measures whether relevant documents are retrieved within the top K results."
  },
  {
    "id": 155,
    "difficulty": "hard",
    "category": "mlops",
    "question": "Why is model versioning important in MLflow?",
    "options": [
      "Speeds up training",
      "Reduces storage",
      "Supports reproducibility, rollback and governance",
      "Improves SQL performance"
    ],
    "answer": 2,
    "explanation": "Model versioning enables traceability, controlled promotion and rollback."
  },
  {
    "id": 156,
    "difficulty": "hard",
    "category": "devops",
    "question": "What is the main benefit of Infrastructure as Code using Terraform?",
    "options": [
      "Improved notebook performance",
      "Faster SQL queries",
      "Lower JVM memory",
      "Repeatable and auditable infrastructure provisioning"
    ],
    "answer": 3,
    "explanation": "Terraform enables consistent, version-controlled infrastructure deployments."
  },
  {
    "id": 157,
    "difficulty": "hard",
    "category": "monitoring",
    "question": "A dashboard shows increased API latency but stable infrastructure metrics. What is the likely next troubleshooting step?",
    "options": [
      "Restart Kubernetes cluster",
      "Review distributed traces for downstream service latency",
      "Increase VM size immediately",
      "Delete logs"
    ],
    "answer": 1,
    "explanation": "Latency often originates from downstream dependencies rather than infrastructure saturation."
  },
  {
    "id": 158,
    "difficulty": "hard",
    "category": "operations",
    "question": "Which operational metric best measures pipeline reliability?",
    "options": [
      "Repository Size",
      "Pipeline Success Rate",
      "Notebook Count",
      "Developer Count"
    ],
    "answer": 1,
    "explanation": "Pipeline success rate directly reflects operational reliability."
  },
  {
    "id": 159,
    "difficulty": "hard",
    "category": "cost-optimization",
    "question": "Which cloud architecture generally minimizes analytics costs?",
    "options": [
      "Autoscaling compute with object storage",
      "Dedicated VMs for every workload",
      "Always-on clusters",
      "Largest instance types"
    ],
    "answer": 0,
    "explanation": "Separating scalable object storage from elastic compute minimizes idle costs."
  },
  {
    "id": 160,
    "difficulty": "hard",
    "category": "leadership",
    "question": "A business stakeholder requests an unrealistic delivery date. What should a Solution Architect do?",
    "options": [
      "Ask developers to work overtime indefinitely",
      "Agree immediately",
      "Present technical trade-offs, risks and phased delivery options",
      "Reject the project"
    ],
    "answer": 2,
    "explanation": "Architects should communicate risks transparently and propose achievable implementation strategies."
  },
  {
    "id": 161,
    "difficulty": "hard",
    "category": "delta-lake",
    "question": "Which mechanism does Delta Lake use to prevent data corruption during concurrent writes?",
    "options": [
      "Pessimistic Locking",
      "Optimistic Concurrency Control",
      "Distributed Mutex",
      "Table Locking"
    ],
    "answer": 1,
    "explanation": "Delta Lake uses optimistic concurrency control. Conflicting commits are detected during transaction commit rather than locking the table."
  },
  {
    "id": 162,
    "difficulty": "hard",
    "category": "delta-lake",
    "question": "What is stored inside the Delta _delta_log directory?",
    "options": [
      "Transaction log JSON and checkpoint files",
      "Compressed Parquet files only",
      "Spark cache",
      "Python source code"
    ],
    "answer": 0,
    "explanation": "The transaction log stores every table version, commit information and metadata required for ACID transactions."
  },
  {
    "id": 163,
    "difficulty": "hard",
    "category": "delta-lake",
    "question": "Running VACUUM with an aggressively low retention period can cause which problem?",
    "options": [
      "Improved partition pruning",
      "Reduced Spark memory",
      "Loss of Time Travel capability",
      "Faster SQL execution"
    ],
    "answer": 2,
    "explanation": "VACUUM permanently removes obsolete files. If retained for too short a period, historical versions become unrecoverable."
  },
  {
    "id": 164,
    "difficulty": "hard",
    "category": "databricks",
    "question": "Which strategy best supports idempotent ETL pipelines?",
    "options": [
      "Append duplicate records",
      "DELETE entire table daily",
      "INSERT only",
      "MERGE using business keys"
    ],
    "answer": 3,
    "explanation": "MERGE operations using business keys allow safe reruns without creating duplicates."
  },
  {
    "id": 165,
    "difficulty": "hard",
    "category": "databricks",
    "question": "A child notebook succeeds but the parent workflow fails. Which feature helps determine exactly where execution stopped?",
    "options": [
      "SQL History",
      "Job Run Timeline",
      "Workspace Browser",
      "Notebook comments"
    ],
    "answer": 1,
    "explanation": "The Job Run Timeline provides execution details, dependencies and failures across workflow tasks."
  },
  {
    "id": 166,
    "difficulty": "hard",
    "category": "kafka",
    "question": "Which Kafka delivery guarantee prevents duplicate processing when correctly implemented?",
    "options": [
      "At-most-once",
      "Exactly-once",
      "Best-effort",
      "Round Robin"
    ],
    "answer": 1,
    "explanation": "Exactly-once semantics combine idempotent producers and transactional processing to avoid duplicates."
  },
  {
    "id": 167,
    "difficulty": "hard",
    "category": "aws",
    "question": "During migration from self-managed Kafka to Amazon MSK, what minimizes downtime?",
    "options": [
      "Stop production immediately",
      "Run both clusters in parallel with replication and cut over after validation",
      "Delete the existing cluster",
      "Change topic names during migration"
    ],
    "answer": 1,
    "explanation": "A phased migration with replication reduces risk and allows rollback."
  },
  {
    "id": 168,
    "difficulty": "hard",
    "category": "azure",
    "question": "When would Azure Event Hubs be preferred over Kafka?",
    "options": [
      "For serving static web pages",
      "For storing backups",
      "When using Microsoft's managed event streaming ecosystem",
      "When running Oracle databases"
    ],
    "answer": 2,
    "explanation": "Event Hubs integrates closely with Azure services and provides managed event streaming."
  },
  {
    "id": 169,
    "difficulty": "hard",
    "category": "bedrock",
    "question": "What is a major advantage of Amazon Bedrock compared with self-hosted LLM infrastructure?",
    "options": [
      "No prompt engineering required",
      "Managed foundation models without GPU infrastructure management",
      "Automatic application development",
      "Unlimited free inference"
    ],
    "answer": 1,
    "explanation": "Bedrock removes operational overhead for hosting and scaling foundation models."
  },
  {
    "id": 170,
    "difficulty": "hard",
    "category": "ai-security",
    "question": "What is Prompt Injection?",
    "options": [
      "Encrypting prompts",
      "Increasing token limits",
      "Compressing prompts",
      "Manipulating an LLM into ignoring intended instructions"
    ],
    "answer": 3,
    "explanation": "Prompt injection attempts to override or manipulate the model's intended behavior."
  },
  {
    "id": 171,
    "difficulty": "hard",
    "category": "rag",
    "question": "Which mitigation best reduces prompt injection attacks in a RAG system?",
    "options": [
      "Reduce chunk size only",
      "Validate retrieved content and separate system prompts from user input",
      "Increase temperature",
      "Disable embeddings"
    ],
    "answer": 1,
    "explanation": "Input validation, prompt isolation and content filtering reduce prompt injection risks."
  },
  {
    "id": 172,
    "difficulty": "hard",
    "category": "vector-db",
    "question": "As a vector database grows to billions of embeddings, what becomes increasingly important?",
    "options": [
      "Notebook themes",
      "CSV compression",
      "Efficient ANN indexing and sharding",
      "Longer prompts"
    ],
    "answer": 2,
    "explanation": "Approximate Nearest Neighbor indexing and sharding are critical for scalability."
  },
  {
    "id": 173,
    "difficulty": "hard",
    "category": "kubernetes",
    "question": "What Kubernetes feature automatically replaces failed containers?",
    "options": [
      "Secret",
      "ConfigMap",
      "Deployment Controller",
      "Ingress"
    ],
    "answer": 2,
    "explanation": "Deployments continuously monitor pod health and recreate failed instances."
  },
  {
    "id": 174,
    "difficulty": "hard",
    "category": "kubernetes",
    "question": "Which Kubernetes object should store database passwords?",
    "options": [
      "ConfigMap",
      "Deployment",
      "Secret",
      "Namespace"
    ],
    "answer": 2,
    "explanation": "Sensitive credentials belong in Kubernetes Secrets rather than ConfigMaps."
  },
  {
    "id": 175,
    "difficulty": "hard",
    "category": "dr",
    "question": "Which Disaster Recovery metric defines acceptable data loss?",
    "options": [
      "RPO",
      "Latency",
      "Throughput",
      "MTTR"
    ],
    "answer": 0,
    "explanation": "Recovery Point Objective (RPO) specifies how much data loss is acceptable."
  },
  {
    "id": 176,
    "difficulty": "hard",
    "category": "dr",
    "question": "Which metric measures acceptable recovery time after a failure?",
    "options": [
      "TPS",
      "RTO",
      "CPU",
      "RPO"
    ],
    "answer": 1,
    "explanation": "Recovery Time Objective (RTO) defines how quickly services must be restored."
  },
  {
    "id": 177,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which deployment strategy minimizes production risk during major releases?",
    "options": [
      "Blue-Green Deployment",
      "Weekend Deployment Only",
      "Big Bang",
      "Manual Copy"
    ],
    "answer": 0,
    "explanation": "Blue-Green deployments enable fast rollback with minimal downtime."
  },
  {
    "id": 178,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the primary benefit of a Canary Deployment?",
    "options": [
      "Gradually expose new releases to a subset of users",
      "Compress Docker images",
      "Lower storage cost",
      "Increase Spark partitions"
    ],
    "answer": 0,
    "explanation": "Canary deployments reduce deployment risk by limiting initial exposure."
  },
  {
    "id": 179,
    "difficulty": "hard",
    "category": "observability",
    "question": "Which practice enables correlation between application logs, metrics and traces?",
    "options": [
      "Random request IDs",
      "Manual timestamps",
      "Correlation IDs",
      "CSV exports"
    ],
    "answer": 2,
    "explanation": "Correlation IDs allow end-to-end request tracking across distributed services."
  },
  {
    "id": 180,
    "difficulty": "hard",
    "category": "leadership",
    "question": "During an executive architecture review, what should be the primary focus?",
    "options": [
      "Framework syntax",
      "Programming language comparisons",
      "Business outcomes, risks, cost, scalability and security",
      "Notebook formatting"
    ],
    "answer": 2,
    "explanation": "Senior architects communicate business value and architectural trade-offs rather than low-level implementation details."
  },
  {
    "id": 181,
    "difficulty": "hard",
    "category": "scenario-databricks",
    "question": "A Databricks workflow consisting of one parent job and twelve child jobs runs successfully in UAT but intermittently fails in Production. What should be investigated FIRST?",
    "options": [
      "Review Job Run history, Cluster Event Logs, Driver Logs and failed child task dependencies",
      "Reinstall the Databricks Runtime",
      "Increase cluster size",
      "Restart the Databricks workspace"
    ],
    "answer": 0,
    "explanation": "Start with evidence. Job history, cluster events, driver logs, executor logs and dependency chains usually identify whether the failure is application, infrastructure or orchestration related."
  },
  {
    "id": 182,
    "difficulty": "hard",
    "category": "scenario-spark",
    "question": "A Spark job processing 10GB daily suddenly requires four times more execution time after a new customer was onboarded. The code has not changed. What is the MOST likely cause?",
    "options": [
      "Notebook permissions changed",
      "Delta transaction log corruption",
      "Data skew caused by uneven partition distribution",
      "Python version changed"
    ],
    "answer": 2,
    "explanation": "Large customers often introduce skew where one partition contains significantly more data than others."
  },
  {
    "id": 183,
    "difficulty": "hard",
    "category": "scenario-rag",
    "question": "Business users report that the chatbot provides different answers to the same question every day. Which component should be investigated first?",
    "options": [
      "Driver memory",
      "Notebook execution time",
      "Delta OPTIMIZE schedule",
      "Retriever quality, embedding consistency and document versioning"
    ],
    "answer": 3,
    "explanation": "Inconsistent retrieval caused by stale embeddings, document changes or poor chunking commonly results in inconsistent RAG responses."
  },
  {
    "id": 184,
    "difficulty": "hard",
    "category": "scenario-monitoring",
    "question": "A production API response time increased from 200ms to 3 seconds. CPU and memory utilization remain normal. What should be checked first?",
    "options": [
      "Increase Spark executors",
      "Restart Kubernetes",
      "Distributed tracing to identify slow downstream dependencies",
      "Upgrade VM size"
    ],
    "answer": 2,
    "explanation": "Stable infrastructure metrics suggest latency originates from downstream dependencies, databases or external APIs."
  },
  {
    "id": 185,
    "difficulty": "hard",
    "category": "scenario-aws",
    "question": "A CloudFront distribution serves outdated JavaScript after deployment. Which action should be performed first?",
    "options": [
      "Increase EC2 instances",
      "Delete the S3 bucket",
      "Invalidate the CloudFront cache",
      "Restart Route53"
    ],
    "answer": 2,
    "explanation": "CloudFront caches content globally. Cache invalidation forces edge locations to retrieve updated files."
  },
  {
    "id": 186,
    "difficulty": "hard",
    "category": "scenario-bedrock",
    "question": "Your organization plans to migrate from locally hosted Llama models to Amazon Bedrock. Which migration strategy minimizes risk?",
    "options": [
      "Retrain every model first",
      "Big Bang migration",
      "Parallel deployment with A/B validation and rollback",
      "Delete local infrastructure immediately"
    ],
    "answer": 2,
    "explanation": "Parallel deployment enables comparison, rollback and controlled production rollout."
  },
  {
    "id": 187,
    "difficulty": "hard",
    "category": "scenario-security",
    "question": "A PCI DSS audit discovers application credentials stored in a Git repository. What should happen immediately?",
    "options": [
      "Rotate credentials, remove secrets, migrate to Secrets Manager or Key Vault and audit access",
      "Increase repository permissions",
      "Rename the repository",
      "Ignore because the repository is private"
    ],
    "answer": 0,
    "explanation": "Credentials should be rotated immediately because exposure cannot be ruled out."
  },
  {
    "id": 188,
    "difficulty": "hard",
    "category": "scenario-cost",
    "question": "Monthly Databricks costs have doubled although daily data volume has remained constant. Which area should be reviewed first?",
    "options": [
      "Unity Catalog permissions",
      "Cluster utilization, autoscaling settings, idle clusters and job scheduling",
      "Python version",
      "Notebook color theme"
    ],
    "answer": 1,
    "explanation": "Idle compute, oversized clusters and disabled auto-termination are common cost drivers."
  },
  {
    "id": 189,
    "difficulty": "hard",
    "category": "scenario-governance",
    "question": "A regulator requests complete lineage showing where customer data originated, how it was transformed and who accessed it. Which capability satisfies this requirement?",
    "options": [
      "Git History",
      "Notebook comments",
      "Spark UI",
      "Unity Catalog or Microsoft Purview"
    ],
    "answer": 3,
    "explanation": "Enterprise governance platforms provide lineage, metadata, auditing and access tracking."
  },
  {
    "id": 190,
    "difficulty": "hard",
    "category": "scenario-leadership",
    "question": "Business stakeholders request delivery in three months while engineering estimates nine months. What should the Solution Architect do?",
    "options": [
      "Reject the project",
      "Promise three months anyway",
      "Present architectural trade-offs, phased delivery and associated risks",
      "Let developers decide"
    ],
    "answer": 2,
    "explanation": "Architects facilitate informed decisions by balancing business priorities with technical feasibility."
  },
  {
    "id": 191,
    "difficulty": "hard",
    "category": "scenario-kafka",
    "question": "Consumer lag continues increasing even though Kafka brokers are healthy. What should be investigated first?",
    "options": [
      "Increase topic names",
      "Consumer processing time, partition count and downstream bottlenecks",
      "Restart Zookeeper without investigation",
      "Producer source code formatting"
    ],
    "answer": 1,
    "explanation": "Lag usually indicates consumers cannot process messages as quickly as producers."
  },
  {
    "id": 192,
    "difficulty": "hard",
    "category": "scenario-databricks",
    "question": "Delta MERGE operations occasionally fail because another pipeline writes simultaneously. Which Delta feature addresses this?",
    "options": [
      "Photon",
      "OPTIMIZE",
      "VACUUM",
      "Optimistic Concurrency Control"
    ],
    "answer": 3,
    "explanation": "Delta detects conflicting concurrent transactions and maintains ACID consistency."
  },
  {
    "id": 193,
    "difficulty": "hard",
    "category": "scenario-ai",
    "question": "An executive asks why the AI recommendation engine made a particular prediction. Which Responsible AI capability should be available?",
    "options": [
      "Notebook Versioning",
      "Model Explainability",
      "GPU Monitoring",
      "Cluster Policies"
    ],
    "answer": 1,
    "explanation": "Explainability provides transparency into model predictions."
  },
  {
    "id": 194,
    "difficulty": "hard",
    "category": "scenario-devops",
    "question": "A production deployment fails halfway through. Which deployment strategy enables the fastest rollback?",
    "options": [
      "Manual Deployment",
      "FTP Upload",
      "Blue-Green Deployment",
      "Single Server Deployment"
    ],
    "answer": 2,
    "explanation": "Blue-Green deployments enable rapid rollback by switching traffic back to the previous environment."
  },
  {
    "id": 195,
    "difficulty": "hard",
    "category": "scenario-observability",
    "question": "Which telemetry signal most accurately identifies where latency occurs inside a distributed microservice architecture?",
    "options": [
      "CPU %",
      "Disk Space",
      "Application Version",
      "Distributed Trace"
    ],
    "answer": 3,
    "explanation": "Distributed traces visualize request flow and latency across every service."
  },
  {
    "id": 196,
    "difficulty": "hard",
    "category": "scenario-dr",
    "question": "A business requires less than five minutes of data loss after a disaster. Which DR metric defines this requirement?",
    "options": [
      "RPO",
      "MTTR",
      "RTO",
      "SLA"
    ],
    "answer": 0,
    "explanation": "Recovery Point Objective specifies the maximum acceptable data loss."
  },
  {
    "id": 197,
    "difficulty": "hard",
    "category": "scenario-performance",
    "question": "SQL queries against Delta tables become progressively slower despite constant hardware resources. Which maintenance task is commonly forgotten?",
    "options": [
      "OPTIMIZE and statistics maintenance",
      "VACUUM only",
      "Restart notebooks",
      "Increase driver memory"
    ],
    "answer": 0,
    "explanation": "Compaction and updated statistics improve query planning and reduce file scans."
  },
  {
    "id": 198,
    "difficulty": "hard",
    "category": "scenario-architecture",
    "question": "An enterprise wants to support batch analytics, real-time dashboards and Generative AI using the same data platform. Which architecture best fits?",
    "options": [
      "Traditional OLTP Database",
      "Lakehouse Architecture",
      "Desktop Database",
      "Shared File Server"
    ],
    "answer": 1,
    "explanation": "A Lakehouse supports BI, streaming, AI and ML workloads from a unified data platform."
  },
  {
    "id": 199,
    "difficulty": "hard",
    "category": "scenario-cloud",
    "question": "Your company wants to migrate workloads from on-premises to AWS while minimizing operational overhead. Which architectural principle is most appropriate?",
    "options": [
      "Adopt managed cloud-native services where practical",
      "Run everything on EC2",
      "Lift-and-shift every server unchanged",
      "Replace every application immediately"
    ],
    "answer": 0,
    "explanation": "Managed services such as S3, MSK, Bedrock and RDS reduce operational complexity and improve scalability."
  },
  {
    "id": 200,
    "difficulty": "hard",
    "category": "scenario-executive",
    "question": "During the final interview, the CIO asks: 'What makes a good Solution Architect?' Which answer is strongest?",
    "options": [
      "Knows every programming language",
      "Writes the most code",
      "Balances business value, scalability, security, governance, reliability, cost and operational excellence while leading technical decisions",
      "Builds dashboards quickly"
    ],
    "answer": 2,
    "explanation": "At the architect level, success is measured by making sound technology decisions that deliver sustainable business outcomes, not by writing the most code."
  },
  {
    "id": 201,
    "difficulty": "medium",
    "category": "agentic-ai",
    "question": "What is the defining characteristic of an Agentic AI system compared to a traditional chatbot?",
    "options": [
      "Can autonomously plan, reason and execute multi-step tasks using tools",
      "Only answers predefined FAQs",
      "Uses larger GPUs",
      "Stores data in a relational database"
    ],
    "answer": 0,
    "explanation": "Agentic AI systems use planning, memory and tool invocation to accomplish goals with minimal human intervention."
  },
  {
    "id": 202,
    "difficulty": "hard",
    "category": "agentic-ai",
    "question": "Which architectural component is responsible for determining the next action an AI agent should take?",
    "options": [
      "Planner or Orchestrator",
      "Vector Database",
      "Tokenizer",
      "Embedding Model"
    ],
    "answer": 0,
    "explanation": "The planner evaluates the current state, available tools and objectives before selecting the next action."
  },
  {
    "id": 203,
    "difficulty": "hard",
    "category": "langgraph",
    "question": "What is the primary benefit of using LangGraph instead of a simple LangChain sequential workflow?",
    "options": [
      "Supports stateful, cyclic and multi-agent workflows",
      "Replaces vector databases",
      "Stores embeddings automatically",
      "Lower GPU utilization"
    ],
    "answer": 0,
    "explanation": "LangGraph enables graph-based execution with loops, conditional routing and persistent state, making it suitable for complex agent orchestration."
  },
  {
    "id": 204,
    "difficulty": "hard",
    "category": "langgraph",
    "question": "Which LangGraph feature enables an agent to resume execution after interruption?",
    "options": [
      "Vector Search",
      "Checkpointing and State Persistence",
      "Prompt Compression",
      "Function Calling"
    ],
    "answer": 1,
    "explanation": "Checkpointing allows workflows to persist execution state and continue from the last successful node."
  },
  {
    "id": 205,
    "difficulty": "hard",
    "category": "knowledge-graph",
    "question": "What is the primary purpose of a Knowledge Graph in enterprise AI?",
    "options": [
      "Represent entities and relationships for semantic reasoning",
      "Store embeddings",
      "Compress documents",
      "Replace SQL databases"
    ],
    "answer": 0,
    "explanation": "Knowledge Graphs model entities and their relationships, enabling semantic search, reasoning and contextual understanding."
  },
  {
    "id": 206,
    "difficulty": "hard",
    "category": "graph-rag",
    "question": "How does Graph RAG improve upon traditional vector-based RAG?",
    "options": [
      "Only supports structured data",
      "Requires no LLM",
      "Uses larger embeddings",
      "Combines graph relationships with semantic retrieval for better contextual reasoning"
    ],
    "answer": 3,
    "explanation": "Graph RAG augments vector retrieval with relationship traversal, improving multi-hop reasoning and contextual accuracy."
  },
  {
    "id": 207,
    "difficulty": "hard",
    "category": "graph-rag",
    "question": "Which enterprise scenario benefits most from Graph RAG?",
    "options": [
      "Video transcoding",
      "Fraud investigation involving interconnected customers, accounts and transactions",
      "Image classification",
      "Spreadsheet formatting"
    ],
    "answer": 1,
    "explanation": "Graph RAG excels when answers depend on traversing complex relationships across connected entities."
  },
  {
    "id": 208,
    "difficulty": "medium",
    "category": "azure-ai-foundry",
    "question": "What is the primary purpose of Azure AI Foundry?",
    "options": [
      "Develop, evaluate, deploy and govern enterprise AI applications",
      "SQL query optimization",
      "Cloud storage management",
      "Virtual machine provisioning"
    ],
    "answer": 0,
    "explanation": "Azure AI Foundry provides an integrated environment for building, evaluating and governing generative AI solutions."
  },
  {
    "id": 209,
    "difficulty": "hard",
    "category": "azure-ai-foundry",
    "question": "Which capability in Azure AI Foundry helps evaluate prompt quality and AI safety before production deployment?",
    "options": [
      "Azure Backup",
      "Blob Lifecycle Policies",
      "Cluster Pools",
      "Evaluation and Safety Framework"
    ],
    "answer": 3,
    "explanation": "AI evaluations measure quality, groundedness, relevance and safety before production rollout."
  },
  {
    "id": 210,
    "difficulty": "hard",
    "category": "maf",
    "question": "Within Microsoft's AI Framework (MAF), what is a key architectural principle?",
    "options": [
      "Adopt responsible, secure and governed AI throughout the lifecycle",
      "Disable human oversight",
      "Use a single monolithic model",
      "Store prompts in source code"
    ],
    "answer": 0,
    "explanation": "MAF emphasizes Responsible AI, governance, security, monitoring and lifecycle management."
  },
  {
    "id": 211,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "Which architectural pattern best supports multiple AI agents collaborating to solve a complex business problem?",
    "options": [
      "Static Rule Engine",
      "Client-Server",
      "Multi-Agent Orchestration",
      "Single Prompt Architecture"
    ],
    "answer": 2,
    "explanation": "Multi-agent architectures assign specialized responsibilities to collaborating agents coordinated by an orchestrator."
  },
  {
    "id": 212,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "An AI travel assistant must search flights, compare hotels, calculate costs and book reservations. Which architecture is most appropriate?",
    "options": [
      "Batch ETL Pipeline",
      "SQL Stored Procedure",
      "Single LLM Prompt",
      "Agentic Workflow with Planner, Memory and Tool Calling"
    ],
    "answer": 3,
    "explanation": "Complex goal-driven workflows require planning, tool execution and memory rather than a single prompt."
  },
  {
    "id": 213,
    "difficulty": "medium",
    "category": "llm",
    "question": "Which technique adapts an existing LLM to a specific enterprise domain without training from scratch?",
    "options": [
      "Hashing",
      "Normalization",
      "Index Rebuilding",
      "Fine-tuning"
    ],
    "answer": 3,
    "explanation": "Fine-tuning specializes a pretrained model using domain-specific datasets."
  },
  {
    "id": 214,
    "difficulty": "hard",
    "category": "llm",
    "question": "When should RAG generally be preferred over fine-tuning?",
    "options": [
      "When increasing GPU memory",
      "When compressing prompts",
      "When changing the model architecture",
      "When enterprise knowledge changes frequently"
    ],
    "answer": 3,
    "explanation": "RAG keeps knowledge external, allowing updates without retraining the model."
  },
  {
    "id": 215,
    "difficulty": "hard",
    "category": "slm",
    "question": "What is the primary advantage of a Small Language Model (SLM) over a Large Language Model (LLM)?",
    "options": [
      "Lower latency and reduced infrastructure requirements",
      "Better performance on every benchmark",
      "Higher training cost",
      "Unlimited context window"
    ],
    "answer": 0,
    "explanation": "SLMs are optimized for cost, speed and edge deployment while sacrificing some general reasoning capability."
  },
  {
    "id": 216,
    "difficulty": "hard",
    "category": "slm",
    "question": "Which enterprise scenario is best suited for deploying an SLM instead of an LLM?",
    "options": [
      "Training foundation models",
      "On-device customer support with strict latency and privacy requirements",
      "Generating large synthetic datasets",
      "General-purpose internet search"
    ],
    "answer": 1,
    "explanation": "SLMs are ideal for edge, mobile and privacy-sensitive applications requiring low latency."
  },
  {
    "id": 217,
    "difficulty": "hard",
    "category": "analytics-architecture",
    "question": "An enterprise wants AI agents to analyze KPIs, explain anomalies and recommend actions automatically. Which architecture best fits?",
    "options": [
      "Spreadsheet Macros",
      "Traditional BI Dashboard",
      "Lakehouse + Semantic Layer + Agentic AI + Knowledge Graph",
      "Desktop Database"
    ],
    "answer": 2,
    "explanation": "Combining governed analytics with Agentic AI and semantic knowledge enables intelligent business decision support."
  },
  {
    "id": 218,
    "difficulty": "hard",
    "category": "agentic-ai",
    "question": "What is the biggest governance concern when deploying autonomous AI agents in production?",
    "options": [
      "GPU utilization",
      "Programming language selection",
      "Notebook themes",
      "Tool access, auditability and human oversight"
    ],
    "answer": 3,
    "explanation": "Autonomous agents require strict governance, permissions, monitoring and human approval for critical actions."
  },
  {
    "id": 219,
    "difficulty": "hard",
    "category": "agentic-ai",
    "question": "Which KPI best measures the effectiveness of an Agentic AI solution?",
    "options": [
      "Notebook Count",
      "Prompt length",
      "Task Completion Rate with Human Intervention",
      "GPU Temperature"
    ],
    "answer": 2,
    "explanation": "Agentic systems are evaluated based on successful autonomous task completion, quality and operational efficiency."
  },
  {
    "id": 220,
    "difficulty": "hard",
    "category": "agentic-ai",
    "question": "What distinguishes an Agentic AI Architect from a traditional AI Solution Architect?",
    "options": [
      "Uses only larger models",
      "Focuses only on data pipelines",
      "Builds dashboards exclusively",
      "Designs autonomous, tool-enabled, governed multi-agent systems aligned with enterprise objectives"
    ],
    "answer": 3,
    "explanation": "An Agentic AI Architect designs end-to-end autonomous AI ecosystems, including orchestration, memory, governance, reasoning and enterprise integration."
  },
  {
    "id": 221,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which controls belong in Guardrails for a production LLM application?",
    "options": [
      "Input and output filtering, topic and PII policies, and tool-permission limits applied outside the model",
      "A longer system prompt only",
      "Raising temperature",
      "Disabling logging"
    ],
    "answer": 0,
    "explanation": "Guardrails: layered, independent controls around the model (content filters, PII redaction, allow-listed tools) because prompts alone are probabilistic."
  },
  {
    "id": 222,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Why add Guardrails in addition to a well-written system prompt?",
    "options": [
      "Guardrails make the model deterministic",
      "Prompts are never read by the model",
      "Guardrails remove the need for evaluation",
      "Prompts can be bypassed by injection, so enforced checks on inputs, outputs and actions give defense in depth"
    ],
    "answer": 3,
    "explanation": "Guardrails complement prompts: enforcement outside the model limits the blast radius of jailbreaks and prompt injection."
  },
  {
    "id": 223,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is the main purpose of a Feature Store in an ML platform?",
    "options": [
      "To schedule clusters",
      "To store model weights only",
      "To share consistent, versioned features between training and online inference, avoiding training-serving skew",
      "To replace the data lake"
    ],
    "answer": 2,
    "explanation": "Feature Store: central registry of computed features with offline and online access, lineage and point-in-time correctness."
  },
  {
    "id": 224,
    "difficulty": "hard",
    "category": "architecture",
    "question": "A model performs well offline but poorly online because features are computed differently in each path. Which capability addresses this?",
    "options": [
      "More epochs",
      "A bigger cluster",
      "A larger model",
      "A Feature Store that serves the same feature definitions for training and inference"
    ],
    "answer": 3,
    "explanation": "Feature Store: one definition, two serving paths, which removes training-serving skew."
  },
  {
    "id": 225,
    "difficulty": "medium",
    "category": "architecture",
    "question": "In the Medallion architecture, what distinguishes Gold tables from Silver?",
    "options": [
      "They are identical",
      "Gold holds business-level aggregates and marts for BI and ML, while Silver holds cleaned, conformed data",
      "Silver stores dashboards",
      "Gold stores raw files"
    ],
    "answer": 1,
    "explanation": "Medallion: Bronze raw, Silver validated, Gold curated for consumption, typically on Delta Lake."
  },
  {
    "id": 226,
    "difficulty": "medium",
    "category": "databricks",
    "question": "What does Auto Loader provide for ingesting files from cloud storage?",
    "options": [
      "Incremental, checkpointed file discovery with schema inference and evolution (cloudFiles)",
      "A SQL warehouse",
      "Manual file listing each run",
      "Only batch full reloads"
    ],
    "answer": 0,
    "explanation": "Auto Loader: scalable incremental ingestion using file notification or directory listing with exactly-once checkpoints."
  },
  {
    "id": 227,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which principle does Zero Trust apply to an AI data platform?",
    "options": [
      "Trust traffic inside the VPC",
      "Disable MFA internally",
      "Authenticate and authorize every request using identity and least privilege, regardless of network location",
      "Use one shared admin key"
    ],
    "answer": 2,
    "explanation": "Zero Trust: never trust, always verify, with segmentation, private endpoints and short-lived credentials."
  },
  {
    "id": 228,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Why does Zero Trust matter for LLM agents that call internal tools?",
    "options": [
      "Network location grants access",
      "Tools need no authentication",
      "Each tool call should be authorized with the caller's identity and scoped permissions, not assumed safe",
      "Agents are always trusted"
    ],
    "answer": 2,
    "explanation": "Zero Trust: an agent compromised by prompt injection must not inherit broad access."
  },
  {
    "id": 229,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which design practice supports High Availability for a data platform?",
    "options": [
      "One availability zone only",
      "A single large node",
      "Redundancy across availability zones with automated failover and tested recovery",
      "Manual restarts"
    ],
    "answer": 2,
    "explanation": "High Availability: remove single points of failure, use health checks and automated failover, and define RTO and RPO."
  },
  {
    "id": 230,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which levers reduce Cost Optimization risk for Databricks or Spark workloads?",
    "options": [
      "Choose the largest node type",
      "Keep clusters always running",
      "Right-size clusters, use autoscaling and spot capacity, auto-terminate idle compute and tune file layout",
      "Disable autoscaling"
    ],
    "answer": 2,
    "explanation": "Cost Optimization: match compute to workload, shut down idle resources, use job compute and monitor with tags and budgets."
  },
  {
    "id": 231,
    "difficulty": "hard",
    "category": "architecture",
    "question": "A nightly job uses an always-on large cluster. What is the best first Cost Optimization step?",
    "options": [
      "Add more nodes",
      "Move it to job compute with autoscaling and auto-termination, and right-size from Spark UI metrics",
      "Disable monitoring",
      "Run it hourly"
    ],
    "answer": 1,
    "explanation": "Cost Optimization starts with eliminating idle spend and aligning compute with measured need."
  },
  {
    "id": 232,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What characterizes an Event-Driven architecture?",
    "options": [
      "Synchronous chained RPC calls only",
      "Producers emit events to a broker and loosely coupled consumers react asynchronously",
      "A shared database table polled hourly",
      "A monolith with no messaging"
    ],
    "answer": 1,
    "explanation": "Event-Driven design: Kafka or similar brokers decouple services, enabling replay, scaling and independent evolution."
  },
  {
    "id": 233,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Why choose an Event-Driven architecture for real-time analytics ingestion?",
    "options": [
      "It decouples producers from consumers and allows buffering, replay and independent scaling",
      "It avoids all duplicates automatically",
      "It removes schemas",
      "It guarantees zero latency"
    ],
    "answer": 0,
    "explanation": "Event-Driven pipelines use durable logs with consumer offsets; idempotent consumers handle at-least-once delivery."
  },
  {
    "id": 234,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is a Hallucination in an LLM application, and how is it mitigated?",
    "options": [
      "Fluent but unsupported output; mitigate with RAG grounding, citations, evaluation and guardrails",
      "A tokenizer bug",
      "A database deadlock",
      "A GPU error; reboot the node"
    ],
    "answer": 0,
    "explanation": "Hallucination: the model asserts unsupported facts. Retrieval grounding and verification reduce, but do not eliminate, it."
  },
  {
    "id": 235,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What does MLOps add on top of building a model?",
    "options": [
      "Only notebook editing",
      "Automated training, versioning, deployment, monitoring and retraining pipelines",
      "Only SQL tuning",
      "Only GPU provisioning"
    ],
    "answer": 1,
    "explanation": "MLOps: CI/CD for ML with experiment tracking, a registry, drift monitoring and governance."
  },
  {
    "id": 236,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is Photon in Databricks?",
    "options": [
      "A JVM garbage collector tuning flag",
      "A native vectorized query engine written in C++ that accelerates SQL and DataFrame workloads over Delta and Parquet",
      "A Unity Catalog viewer for data lineage",
      "A compiler that converts Python UDFs to SQL"
    ],
    "answer": 1,
    "explanation": "Photon is Databricks' C++ vectorized execution engine. It speeds up SQL and DataFrame operations (scans, joins, aggregations, Delta writes) without code changes."
  },
  {
    "id": 237,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which workload benefits most from enabling Photon?",
    "options": [
      "Row-by-row Python UDF logic",
      "RDD-based transformations",
      "Large SQL/DataFrame scans, joins, aggregations and Delta writes",
      "Tiny jobs dominated by cluster start-up time"
    ],
    "answer": 2,
    "explanation": "Photon accelerates the DataFrame/SQL engine. Python UDFs and RDD code run outside Photon, so they see little or no gain; tiny jobs are dominated by start-up."
  },
  {
    "id": 238,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What does data lineage in Unity Catalog capture?",
    "options": [
      "Only storage cost per table",
      "Only Delta log file sizes",
      "Only user login history",
      "Table- and column-level upstream and downstream relationships across queries, notebooks, jobs and dashboards"
    ],
    "answer": 3,
    "explanation": "Unity Catalog data lineage is captured automatically at runtime and shows how data flows between tables and columns, plus the notebooks, jobs and dashboards that touch them."
  },
  {
    "id": 239,
    "difficulty": "medium",
    "category": "architecture",
    "question": "A column in a Gold table shows unexpected values. How does data lineage help find the root cause?",
    "options": [
      "Trace the column upstream to its Silver/Bronze source columns and the jobs that transformed it",
      "Rewind the Gold table with VACUUM",
      "Increase the Z-ORDER columns",
      "Re-run OPTIMIZE on the Gold table"
    ],
    "answer": 0,
    "explanation": "Data lineage shows which upstream tables, columns and jobs fed the Gold column, so you can inspect each hop and fix the faulty transformation instead of guessing."
  }
];

const hotsQuestions = [

    // ==================================================
    // TIER 1 - MUST KNOW (Highest Priority)
    // ==================================================
    220, // Agentic AI Architect vs Solution Architect
    212, // Agentic Workflow Architecture
    208, // Azure AI Foundry
    210, // Microsoft AI Framework (MAF)
    206, // Graph RAG
    217, // Analytics + Agentic AI Architecture
    200, // CIO Final Interview
    199, // Cloud-Native Migration Strategy
    198, // Modern Lakehouse Architecture
    193, // Responsible AI & Explainability
    190, // Stakeholder Management
    189, // Data Governance & Purview
    188, // Databricks Cost Optimization
    183, // RAG Hallucinations & Inconsistent Answers
    181, // Production Databricks Failure
    145, // Medallion Architecture
    140, // Event-Driven Architecture
    130, // High Availability Design
    120, // Enterprise AI Platform KPI
    100, // What makes a great Solution Architect?

    // ==================================================
    // TIER 2 - HOT ENTERPRISE ARCHITECTURE
    // ==================================================
    201,
    202,
    203,
    204,
    205,
    207,
    209,
    211,
    213,
    214,
    215,
    216,
    218,
    219,
    177,
    178,
    180,
    194,
    195,
    196,
    197,

    // ==================================================
    // CLOUD & PLATFORM
    // ==================================================
    101,102,103,
    108,109,110,111,
    112,113,
    125,126,127,128,129,
    131,132,
    133,134,
    141,142,
    147,148,
    149,
    164,165,
    167,169,

    // ==================================================
    // DATABRICKS / SPARK
    // ==================================================
    35,36,37,38,40,
    41,42,43,44,45,46,
    47,48,49,50,
    81,82,83,
    84,85,
    104,105,106,107,
    121,122,123,124,
    143,144,
    182,
    192,

    // ==================================================
    // AI / ML / LLM
    // ==================================================
    65,66,67,68,
    69,70,
    71,72,
    73,74,
    90,
    118,119,
    152,153,154,
    170,171,172,

    // ==================================================
    // SECURITY / GOVERNANCE
    // ==================================================
    86,87,88,89,
    116,117,
    150,151,
    187,

    // ==================================================
    // OPERATIONS / OBSERVABILITY
    // ==================================================
    76,77,78,79,
    94,95,
    114,115,
    137,138,
    157,158,
    179,

    // ==================================================
    // FOUNDATIONS (Still Important)
    // ==================================================
    0,3,6,7,8,
    10,11,13,15,
    20,21,22,24,25,26,27,28,30,
    51,52,53,54,55,
    57,58,59,60,61,62,
    75,92,93,98,99,
    135,136,
    160
];
