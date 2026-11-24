/* ======================================================
   MONGODB CERTIFICATION QUESTION BANK 
   ====================================================== */

const questionBank = [
  {
    "id": 1,
    "difficulty": "easy",
    "category": "basics",
    "question": "Which of the following describes the data format MongoDB uses to store documents internally?",
    "options": [
      "XML",
      "BSON",
      "JSON",
      "YAML"
    ],
    "answer": 1,
    "explanation": "MongoDB stores data in BSON (Binary JSON), which extends JSON to include additional data types like Date and BinData.",
    "hint": "Binary-encoded JSON."
  },
  {
    "id": 2,
    "difficulty": "medium",
    "category": "crud",
    "question": "In a 'find' query, which parameter is used to specify which fields should be returned in the result set?",
    "options": [
      "Projection",
      "Filtering",
      "Mapping",
      "Selection"
    ],
    "answer": 0,
    "explanation": "Projection is the second argument of the find() method and determines visibility of fields (1 for include, 0 for exclude).",
    "hint": "Think of a movie projector displaying only part of a scene."
  },
  {
    "id": 3,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You need to update a document. If the document does not exist, you want MongoDB to create it. Which option should you set to true?",
    "options": [
      "createIfMissing",
      "upsert",
      "insertOnly",
      "multi"
    ],
    "answer": 1,
    "explanation": "Upsert (update + insert) tells MongoDB to create a new document if no document matches the query criteria.",
    "hint": "A portmanteau of two CRUD operations."
  },
  {
    "id": 4,
    "difficulty": "medium",
    "category": "indexing",
    "question": "What is the primary benefit of creating an index on a collection?",
    "options": [
      "It improves query performance by avoiding a full collection scan",
      "It allows for larger document sizes",
      "It reduces the disk space used",
      "It automatically encrypts the data"
    ],
    "answer": 0,
    "explanation": "Indexes allow MongoDB to process queries more efficiently by limiting the number of documents it must inspect.",
    "hint": "Performance optimization."
  },
  {
    "id": 5,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "Which aggregation stage is used to deconstruct an array field from the input documents to output a document for each element?",
    "options": [
      "$project",
      "$unwind",
      "$group",
      "$match"
    ],
    "answer": 1,
    "explanation": "$unwind flattens an array, creating a separate document for every item in that array.",
    "hint": "Think of flattening a list."
  },
  {
    "id": 6,
    "difficulty": "easy",
    "category": "basics",
    "question": "By default, what is the unique identifier field for every MongoDB document?",
    "options": [
      "_id",
      "key",
      "id",
      "uuid"
    ],
    "answer": 0,
    "explanation": "The _id field is mandatory and serves as the primary key for documents in a collection.",
    "hint": "Starts with an underscore."
  },
  {
    "id": 7,
    "difficulty": "medium",
    "category": "schema_design",
    "question": "Which design pattern is better for a 'One-to-Many' relationship where the 'Many' side has millions of documents?",
    "options": [
      "Extended Reference",
      "Schema-less",
      "Linking (Manual References)",
      "Embedding"
    ],
    "answer": 2,
    "explanation": "Embedding millions of sub-documents would exceed the 16MB document limit; linking is required for high-cardinality relationships.",
    "hint": "Reference by ID."
  },
  {
    "id": 8,
    "difficulty": "hard",
    "category": "crud",
    "question": "Which update operator is used to add an element to an array only if the element does not already exist in the array?",
    "options": [
      "$set",
      "$addToSet",
      "$push",
      "$inc"
    ],
    "answer": 1,
    "explanation": "$addToSet treats the array like a mathematical set, ensuring uniqueness.",
    "hint": "Add to a set."
  },
  {
    "id": 9,
    "difficulty": "medium",
    "category": "indexing",
    "question": "What is a 'Compound Index' in MongoDB?",
    "options": [
      "An index that supports multiple fields in a specific order",
      "An index used only for text search",
      "An index on a single field",
      "An index shared across databases"
    ],
    "answer": 0,
    "explanation": "A compound index includes multiple fields, e.g., { last_name: 1, first_name: 1 }.",
    "hint": "Multiple fields combined."
  },
  {
    "id": 10,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "Which stage in the aggregation pipeline acts like a 'WHERE' clause in SQL?",
    "options": [
      "$match",
      "$group",
      "$find",
      "$filter"
    ],
    "answer": 0,
    "explanation": "$match filters documents to pass only those that match the specified condition to the next stage.",
    "hint": "Find a match."
  },
  {
    "id": 11,
    "difficulty": "easy",
    "category": "crud",
    "question": "Which method is used to remove a single document that matches a filter?",
    "options": [
      "removeOne()",
      "drop()",
      "delete()",
      "deleteOne()"
    ],
    "answer": 3,
    "explanation": "deleteOne() removes the first document found that matches the filter criteria.",
    "hint": "Modern delete syntax."
  },
  {
    "id": 12,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is the maximum size allowed for a single BSON document in MongoDB?",
    "options": [
      "4MB",
      "32MB",
      "16MB",
      "8MB"
    ],
    "answer": 2,
    "explanation": "The 16MB limit ensures that a single document does not use excessive RAM or bandwidth during transmission.",
    "hint": "Power of 2, greater than 10."
  },
  {
    "id": 13,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to find all products where the price is between 10 and 50. Which query is correct?",
    "options": [
      "{ price: { $between: [10, 50] } }",
      "{ $and: [ { price: 10 }, { price: 50 } ] }",
      "{ price: { $gt: 10, $lt: 50 } }",
      "{ price: 10-50 }"
    ],
    "answer": 2,
    "explanation": "Using comparison operators $gt (greater than) and $lt (less than) within a single field object performs a range query.",
    "hint": "Use comparison operators."
  },
  {
    "id": 14,
    "difficulty": "medium",
    "category": "indexing",
    "question": "Which index type should be used to support location-based queries like 'find nearby stores'?",
    "options": [
      "2dsphere Index",
      "Hashed Index",
      "TTL Index",
      "Text Index"
    ],
    "answer": 0,
    "explanation": "2dsphere indexes support queries that calculate geometries on an earth-like sphere.",
    "hint": "Geospatial indexing."
  },
  {
    "id": 15,
    "difficulty": "hard",
    "category": "schema_design",
    "question": "What is the 'Document Growth' issue often associated with in MongoDB?",
    "options": [
      "Having too many collections",
      "Pushing elements into an embedded array repeatedly, causing the document to move on disk frequently (in older engines)",
      "Exceeding the 16MB limit",
      "Indexes becoming too large"
    ],
    "answer": 1,
    "explanation": "When documents grow, MongoDB might need to reallocate space, though the WiredTiger engine handles this much better than MMapV1.",
    "hint": "Growing arrays."
  },
  {
    "id": 16,
    "difficulty": "easy",
    "category": "aggregation",
    "question": "Which aggregation stage allows you to sort the resulting documents?",
    "options": [
      "$order",
      "$sort",
      "$arrange",
      "$orderby"
    ],
    "answer": 1,
    "explanation": "$sort takes a document specifying fields and direction (1 for ascending, -1 for descending).",
    "hint": "Standard sorting name."
  },
  {
    "id": 17,
    "difficulty": "medium",
    "category": "crud",
    "question": "Which operator allows you to match any value in a specified array?",
    "options": [
      "$in",
      "$exists",
      "$type",
      "$all"
    ],
    "answer": 0,
    "explanation": "$in selects documents where the value of a field equals any value in the specified array.",
    "hint": "Is the value 'in' this list?"
  },
  {
    "id": 18,
    "difficulty": "hard",
    "category": "indexing",
    "question": "What is a 'Multikey Index'?",
    "options": [
      "An index on a sharded collection",
      "An index on multiple fields",
      "An index where one of the indexed fields is an array",
      "An index that uses multiple keys for encryption"
    ],
    "answer": 2,
    "explanation": "If you index an array field, MongoDB creates an index entry for every element in that array. This is a multikey index.",
    "hint": "Indexing arrays."
  },
  {
    "id": 19,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you count the number of documents in a collection named 'orders'?",
    "options": [
      "db.orders.total()",
      "db.orders.find().count()",
      "db.orders.length()",
      "db.orders.countDocuments({})"
    ],
    "answer": 3,
    "explanation": "countDocuments() is the accurate, modern method for counting documents based on a filter.",
    "hint": "Directly counting documents."
  },
  {
    "id": 20,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "In the $group stage, which accumulator is used to calculate the average value of a numeric field?",
    "options": [
      "$median",
      "$sum",
      "$mean",
      "$avg"
    ],
    "answer": 3,
    "explanation": "$avg calculates the mathematical average of the specified expression.",
    "hint": "Short for average."
  },
  {
    "id": 21,
    "difficulty": "easy",
    "category": "basics",
    "question": "Which command is used to switch to a different database in the Mongo Shell?",
    "options": [
      "db.dbname",
      "use dbname",
      "connect dbname",
      "switch dbname"
    ],
    "answer": 1,
    "explanation": "The 'use' command changes the current database context.",
    "hint": "Three-letter word."
  },
  {
    "id": 22,
    "difficulty": "medium",
    "category": "crud",
    "question": "What does the $set operator do in an update command?",
    "options": [
      "Deletes all other fields",
      "Replaces the entire document",
      "Sets the index for the document",
      "Updates the value of a specific field or adds it if it doesn't exist"
    ],
    "answer": 3,
    "explanation": "$set allows for partial updates, changing only the fields specified.",
    "hint": "Assigning a value."
  },
  {
    "id": 23,
    "difficulty": "hard",
    "category": "indexing",
    "question": "What is a 'Partial Index'?",
    "options": [
      "An index that only contains half the fields",
      "An index on a subset of a string",
      "An index that is currently being built",
      "An index that only indexes documents that meet a specific filter expression"
    ],
    "answer": 3,
    "explanation": "Partial indexes reduce storage requirements and performance costs by only indexing relevant documents.",
    "hint": "Filtered index."
  },
  {
    "id": 24,
    "difficulty": "medium",
    "category": "schema_design",
    "question": "What is the 'Attribute Pattern' useful for?",
    "options": [
      "Reducing the number of collections",
      "Storing large files",
      "Encrypting sensitive data",
      "Handling documents with many similar fields where you need to search across them (e.g., product specifications)"
    ],
    "answer": 3,
    "explanation": "By moving varying attributes into a key-value array, you can index a single field to cover many attributes.",
    "hint": "Key-value pair arrays."
  },
  {
    "id": 25,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "Which operator is used inside a $project stage to create a new field based on conditional logic?",
    "options": [
      "$cond",
      "$if",
      "$switch",
      "$case"
    ],
    "answer": 0,
    "explanation": "$cond is the ternary operator for aggregation (if-then-else).",
    "hint": "Short for conditional."
  },
  {
    "id": 26,
    "difficulty": "easy",
    "category": "basics",
    "question": "What is a 'Collection' in MongoDB comparable to in a Relational Database (SQL)?",
    "options": [
      "Column",
      "Database",
      "Row",
      "Table"
    ],
    "answer": 3,
    "explanation": "A collection is a grouping of documents, much like a table is a grouping of rows.",
    "hint": "Group of records."
  },
  {
    "id": 27,
    "difficulty": "medium",
    "category": "crud",
    "question": "Which operator matches documents where a field does NOT exist?",
    "options": [
      "{ field: null }",
      "{ field: { $not: true } }",
      "{ field: { $exists: false } }",
      "{ field: { $missing: true } }"
    ],
    "answer": 2,
    "explanation": "$exists: false filters for documents that lack the specified field.",
    "hint": "Existence check."
  },
  {
    "id": 28,
    "difficulty": "hard",
    "category": "indexing",
    "question": "What happens to write performance when you add more indexes to a collection?",
    "options": [
      "It improves",
      "It stays the same",
      "It decreases",
      "It depends on the RAM"
    ],
    "answer": 2,
    "explanation": "Every write/update must also update all associated indexes, which adds overhead to write operations.",
    "hint": "Trade-off for faster reads."
  },
  {
    "id": 29,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You want to return only the 'name' and 'email' fields, and exclude the '_id' field. Which projection is correct?",
    "options": [
      "{ name: 1, email: 1, _id: 0 }",
      "{ name: 1, email: 1, _id: 1 }",
      "{ name: true, email: true }",
      "{ name: 1, email: 1 }"
    ],
    "answer": 0,
    "explanation": "By default, _id is always included. You must explicitly set it to 0 to exclude it.",
    "hint": "Exclude the default ID."
  },
  {
    "id": 30,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "How do you perform a 'Left Outer Join' between two collections in an aggregation pipeline?",
    "options": [
      "$join",
      "$merge",
      "$unionWith",
      "$lookup"
    ],
    "answer": 3,
    "explanation": "$lookup performs an equality match between a field from the input documents and a field from the joined collection.",
    "hint": "Looking up data from another collection."
  },
  {
    "id": 31,
    "difficulty": "easy",
    "category": "crud",
    "question": "Which method is used to insert multiple documents at once?",
    "options": [
      "insertMany()",
      "bulkInsert()",
      "insert()",
      "insertAll()"
    ],
    "answer": 0,
    "explanation": "insertMany() takes an array of documents and inserts them efficiently.",
    "hint": "Plural insertion."
  },
  {
    "id": 32,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which of these is NOT a valid BSON data type?",
    "options": [
      "ObjectId",
      "Float64",
      "Date",
      "Complex64"
    ],
    "answer": 3,
    "explanation": "Complex64 (for complex numbers) is not a native BSON type; Date and ObjectId are.",
    "hint": "Common in math, not BSON."
  },
  {
    "id": 33,
    "difficulty": "hard",
    "category": "indexing",
    "question": "What is a 'Covered Query'?",
    "options": [
      "A query where the index contains all the fields requested by the query and projection",
      "A query that affects all shards",
      "A query that uses an index",
      "A query that is hidden from logs"
    ],
    "answer": 0,
    "explanation": "A covered query is very fast because MongoDB can return results entirely from the index without reading the actual documents.",
    "hint": "Results are fully 'covered' by the index."
  },
  {
    "id": 34,
    "difficulty": "medium",
    "category": "schema_design",
    "question": "What does the 'Bucket Pattern' help optimize in MongoDB?",
    "options": [
      "Full-text search",
      "Time-series data (e.g., storing 1 minute of sensor data in one document)",
      "User passwords",
      "Image storage"
    ],
    "answer": 1,
    "explanation": "Bucketing reduces the total number of documents and index entries by grouping related data together.",
    "hint": "Time-series optimization."
  },
  {
    "id": 35,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "Which aggregation stage is used to write the resulting documents of a pipeline into a new collection?",
    "options": [
      "$write",
      "$to",
      "$out",
      "$save"
    ],
    "answer": 2,
    "explanation": "$out must be the last stage and it creates a new collection or replaces an existing one with the results.",
    "hint": "The 'output' stage."
  },
  {
    "id": 36,
    "difficulty": "easy",
    "category": "crud",
    "question": "Which operator is used to increment the value of a field by a specified amount?",
    "options": [
      "$inc",
      "$sum",
      "$add",
      "$plus"
    ],
    "answer": 0,
    "explanation": "$inc increments a field by a specified value (positive or negative).",
    "hint": "Increment."
  },
  {
    "id": 37,
    "difficulty": "medium",
    "category": "indexing",
    "question": "What is a 'TTL Index' (Time-To-Live)?",
    "options": [
      "An index that tracks the speed of queries",
      "An index that never expires",
      "An index that automatically removes documents after a certain amount of time",
      "An index used for real-time data"
    ],
    "answer": 2,
    "explanation": "TTL indexes are ideal for sessions or temporary logs that should be deleted automatically.",
    "hint": "Self-expiring data."
  },
  {
    "id": 38,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "A query uses 'sort()' on a field that is NOT indexed. What is the limit for in-memory sorting before MongoDB throws an error?",
    "options": [
      "16MB",
      "64MB",
      "100MB",
      "32MB"
    ],
    "answer": 3,
    "explanation": "MongoDB allows up to 32MB for internal sort operations. If it exceeds this, you must use an index or allowDiskUse.",
    "hint": "Power of 2, small buffer."
  },
  {
    "id": 39,
    "difficulty": "medium",
    "category": "schema_design",
    "question": "In the 'Computed Pattern', where are calculations like 'total_price' performed?",
    "options": [
      "In the aggregation pipeline every time",
      "By the OS",
      "In the application code at write-time, and the result is stored in the document",
      "By the BI Connector"
    ],
    "answer": 2,
    "explanation": "Storing the pre-calculated result improves read performance at the cost of slightly more complex writes.",
    "hint": "Pre-calculate and store."
  },
  {
    "id": 40,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What is the purpose of the $limit stage?",
    "options": [
      "To set a timeout",
      "To limit the number of fields",
      "To pass only the first N documents to the next stage",
      "To limit the memory usage"
    ],
    "answer": 2,
    "explanation": "$limit restricts the number of documents in the pipeline output.",
    "hint": "Restrict document count."
  },
  {
    "id": 41,
    "difficulty": "easy",
    "category": "basics",
    "question": "What does 'Schema-less' mean in the context of MongoDB?",
    "options": [
      "MongoDB does not support data types",
      "There are no collections",
      "Documents in the same collection do not need to have the same fields",
      "Data is stored in text files"
    ],
    "answer": 2,
    "explanation": "MongoDB has a dynamic schema, allowing documents to have different structures within one collection.",
    "hint": "Flexible document structure."
  },
  {
    "id": 42,
    "difficulty": "medium",
    "category": "crud",
    "question": "Which operator matches documents where a field value is in a specified list?",
    "options": [
      "$exists",
      "$in",
      "$or",
      "$nin"
    ],
    "answer": 1,
    "explanation": "$in selects documents where the field's value is one of the items in the array.",
    "hint": "Opposite of $nin."
  },
  {
    "id": 43,
    "difficulty": "hard",
    "category": "indexing",
    "question": "When creating a Compound Index { a: 1, b: 1 }, which of these queries can use the index effectively?",
    "options": [
      "Only queries on { a }",
      "Only queries on { b }",
      "Queries on { a } OR queries on { a, b }",
      "Queries on { a, b, c }"
    ],
    "answer": 2,
    "explanation": "MongoDB can use a compound index for queries that include the index prefix (the first field).",
    "hint": "Prefix rule."
  },
  {
    "id": 44,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you rename a field in all documents of a collection?",
    "options": [
      "db.collection.modify({ name: 'rename' })",
      "db.collection.renameField('old', 'new')",
      "db.collection.updateMany({}, { $rename: { 'old': 'new' } })",
      "db.collection.updateMany({}, { $set: { 'new': '$old' } })"
    ],
    "answer": 2,
    "explanation": "The $rename operator updates the name of a field efficiently.",
    "hint": "Rename operator."
  },
  {
    "id": 45,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What is the difference between $sum: 1 and $sum: '$field' in a $group stage?",
    "options": [
      "$sum: 1 counts the documents; $sum: '$field' adds up the numeric values of that field",
      "There is no difference",
      "$sum: '$field' is faster",
      "$sum: 1 is for integers only"
    ],
    "answer": 0,
    "explanation": "The constant '1' increments the counter for each document, effectively counting them.",
    "hint": "Counting vs. Summing."
  },
  {
    "id": 46,
    "difficulty": "easy",
    "category": "basics",
    "question": "Which company originally developed MongoDB?",
    "options": [
      "Oracle",
      "Amazon",
      "Google",
      "10gen"
    ],
    "answer": 3,
    "explanation": "MongoDB Inc. was originally founded as 10gen in 2007.",
    "hint": "Original company name."
  },
  {
    "id": 47,
    "difficulty": "medium",
    "category": "crud",
    "question": "Which method returns a cursor instead of the data itself?",
    "options": [
      "aggregate() (if small)",
      "findOne()",
      "insertOne()",
      "find()"
    ],
    "answer": 3,
    "explanation": "find() returns a cursor which can then be iterated or modified with methods like limit() and sort().",
    "hint": "Iterable pointer."
  },
  {
    "id": 48,
    "difficulty": "hard",
    "category": "indexing",
    "question": "What is a 'Sparse Index'?",
    "options": [
      "An index that only contains entries for documents that have the indexed field",
      "An index that is rarely used",
      "An index on a large collection",
      "An index that takes up very little space"
    ],
    "answer": 0,
    "explanation": "Sparse indexes are useful for fields that are not present in every document, saving space.",
    "hint": "Handles missing fields."
  },
  {
    "id": 49,
    "difficulty": "medium",
    "category": "schema_design",
    "question": "What is 'De-normalization' in MongoDB?",
    "options": [
      "Encrypting the schema",
      "Splitting data into as many collections as possible",
      "Duplicating data across documents to improve read performance and avoid joins",
      "Validating the data types"
    ],
    "answer": 2,
    "explanation": "Denormalization is a core strategy in NoSQL to optimize for specific query patterns.",
    "hint": "Data duplication for speed."
  },
  {
    "id": 50,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What does the $addFields stage do?",
    "options": [
      "Adds a new field to the database",
      "Inserts a new document",
      "Adds new fields to the documents passing through the pipeline",
      "Calculates the sum of two fields"
    ],
    "answer": 2,
    "explanation": "$addFields is similar to $project but keeps all existing fields while adding new ones.",
    "hint": "Add more data to the stream."
  },
  {
    "id": 283,
    "difficulty": "medium",
    "category": "crud",
    "question": "What does an upsert do in MongoDB?",
    "options": [
      "Shards a collection",
      "Updates a matching document or inserts a new one if none matches (upsert: true)",
      "Rebuilds an index",
      "Deletes duplicates"
    ],
    "answer": 1,
    "explanation": "Upsert: updateOne with { upsert: true } inserts using the filter fields and update operators when no document matches."
  },
  {
    "id": 51,
    "difficulty": "medium",
    "category": "replication",
    "question": "What is the minimum number of voting members required for a standard MongoDB Replica Set to maintain high availability?",
    "options": [
      "7",
      "2",
      "3",
      "5"
    ],
    "answer": 2,
    "explanation": "A minimum of 3 members ensures that a majority (2) can always be reached to elect a new Primary if one member fails.",
    "hint": "The smallest odd number greater than 1."
  },
  {
    "id": 52,
    "difficulty": "hard",
    "category": "sharding",
    "question": "Which component in a Sharded Cluster is responsible for routing queries from the application to the correct shards?",
    "options": [
      "mongod",
      "Config Server",
      "mongos",
      "Shard Key"
    ],
    "answer": 2,
    "explanation": "The 'mongos' instance acts as a query router, providing an interface between the application and the sharded cluster.",
    "hint": "The 'router' process."
  },
  {
    "id": 53,
    "difficulty": "medium",
    "category": "replication",
    "question": "In a Replica Set, which member is the only one that can normally accept write operations?",
    "options": [
      "Primary",
      "Secondary",
      "Hidden",
      "Arbiter"
    ],
    "answer": 0,
    "explanation": "By default, all writes go to the Primary. Secondaries replicate the Primary's oplog to maintain data consistency.",
    "hint": "The lead member."
  },
  {
    "id": 54,
    "difficulty": "hard",
    "category": "transactions",
    "question": "Starting from MongoDB 4.0, which feature allows for multi-document ACID properties across a single replica set?",
    "options": [
      "GridFS",
      "Multi-Document Transactions",
      "Change Streams",
      "Aggregation Pipeline"
    ],
    "answer": 1,
    "explanation": "Multi-document transactions allow you to perform multiple operations that either all succeed or all fail together.",
    "hint": "Standard ACID term."
  },
  {
    "id": 55,
    "difficulty": "medium",
    "category": "security",
    "question": "Which mechanism is used by MongoDB to provide role-based access control (RBAC)?",
    "options": [
      "IP Whitelisting",
      "Field Level Encryption",
      "SSL/TLS",
      "Users and Roles"
    ],
    "answer": 3,
    "explanation": "MongoDB uses roles (like readWrite, dbAdmin) assigned to users to determine what actions they can perform on specific databases.",
    "hint": "Permissions system."
  },
  {
    "id": 56,
    "difficulty": "hard",
    "category": "sharding",
    "question": "What is a 'Shard Key'?",
    "options": [
      "A unique ID for the mongos process",
      "A password for the shard",
      "An index on the config server",
      "A field or fields that determine how data is distributed across shards"
    ],
    "answer": 3,
    "explanation": "The shard key determines the distribution of the collection's documents among the cluster's shards.",
    "hint": "Distribution criteria."
  },
  {
    "id": 57,
    "difficulty": "medium",
    "category": "replication",
    "question": "What is the role of an 'Arbiter' in a Replica Set?",
    "options": [
      "To route traffic to the Primary",
      "To perform data backups",
      "To participate in elections but hold no data",
      "To store a copy of the data"
    ],
    "answer": 2,
    "explanation": "Arbiters are lightweight members that do not maintain a data set; they only exist to provide a vote in elections.",
    "hint": "Voter with no data."
  },
  {
    "id": 58,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to ensure a write operation is successful on at least two members of a replica set before acknowledging it to the client. Which setting should you use?",
    "options": [
      "{ w: 'majority' }",
      "{ w: 2 }",
      "{ w: 1 }",
      "{ j: true }"
    ],
    "answer": 1,
    "explanation": "The 'w' option in Write Concern specifies the number of members that must acknowledge the write.",
    "hint": "Write Concern count."
  },
  {
    "id": 59,
    "difficulty": "medium",
    "category": "sharding",
    "question": "What does 'Horizontal Scaling' mean in the context of MongoDB?",
    "options": [
      "Adding more RAM to a single server",
      "Reducing the number of collections",
      "Adding more servers to distribute the load",
      "Using larger hard drives"
    ],
    "answer": 2,
    "explanation": "Horizontal scaling (sharding) involves adding more machines to a cluster to handle increased data and traffic.",
    "hint": "Scaling 'out' rather than 'up'."
  },
  {
    "id": 60,
    "difficulty": "hard",
    "category": "security",
    "question": "Which encryption feature allows MongoDB to encrypt specific fields in a document before sending them over the network?",
    "options": [
      "TLS/SSL",
      "Transparent Data Encryption (TDE)",
      "Disk Encryption",
      "Client-Side Field Level Encryption (CSFLE)"
    ],
    "answer": 3,
    "explanation": "CSFLE ensures that sensitive data is encrypted on the client side and remains encrypted even to the database server.",
    "hint": "Encryption at the field level."
  },
  {
    "id": 61,
    "difficulty": "medium",
    "category": "replication",
    "question": "What is the 'oplog' (Operations Log) used for?",
    "options": [
      "Storing aggregation results",
      "Recording all operations that modify the data, allowing Secondaries to stay in sync",
      "Storing user passwords",
      "Logging all queries for debugging"
    ],
    "answer": 1,
    "explanation": "The oplog is a capped collection that keeps a rolling record of all data modifications.",
    "hint": "Synchronization log."
  },
  {
    "id": 62,
    "difficulty": "hard",
    "category": "sharding",
    "question": "What are 'Config Servers' in a Sharded Cluster?",
    "options": [
      "Servers used for load balancing only",
      "Servers that store metadata and configuration settings for the cluster",
      "Backup servers for the data shards",
      "Servers that store the application code"
    ],
    "answer": 1,
    "explanation": "Config servers store the mapping of data chunks to specific shards.",
    "hint": "Metadata storage."
  },
  {
    "id": 63,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "A developer wants to read data from a Secondary member to reduce load on the Primary. Which 'Read Preference' should they set?",
    "options": [
      "secondary",
      "primaryPreferred",
      "nearest",
      "primary"
    ],
    "answer": 0,
    "explanation": "The 'secondary' read preference routes all read operations to a secondary member of the replica set.",
    "hint": "Targeting secondaries."
  },
  {
    "id": 64,
    "difficulty": "hard",
    "category": "replication",
    "question": "What happens during a 'Rollback' in a Replica Set?",
    "options": [
      "The cluster switches to a different version of MongoDB",
      "The database deletes all data",
      "All indexes are rebuilt",
      "A former Primary reverts write operations that were not replicated to the new Primary before the old Primary went offline"
    ],
    "answer": 3,
    "explanation": "Rollbacks occur when a member rejoins a set after an election and finds it has writes that the current Primary does not have.",
    "hint": "Reverting un-replicated writes."
  },
  {
    "id": 65,
    "difficulty": "medium",
    "category": "security",
    "question": "What is the purpose of 'SCRAM' (Salted Challenge Response Authentication Mechanism) in MongoDB?",
    "options": [
      "To prevent DDoS attacks",
      "To compress data",
      "To encrypt files on disk",
      "To authenticate users securely using a username and password"
    ],
    "answer": 3,
    "explanation": "SCRAM is the default authentication mechanism in MongoDB.",
    "hint": "Password authentication."
  },
  {
    "id": 66,
    "difficulty": "hard",
    "category": "sharding",
    "question": "In a sharded cluster, what is a 'Jumbo Chunk'?",
    "options": [
      "A very large shard server",
      "A type of high-speed network connection",
      "A chunk that is larger than the maximum size and cannot be split by MongoDB",
      "A collection with millions of indexes"
    ],
    "answer": 2,
    "explanation": "Jumbo chunks occur when a shard key has many documents with the same value, preventing the chunk from being split further.",
    "hint": "Too big to split."
  },
  {
    "id": 67,
    "difficulty": "medium",
    "category": "replication",
    "question": "Which election priority value prevents a member from ever becoming the Primary?",
    "options": [
      "priority: 0",
      "priority: 1",
      "priority: -1",
      "priority: null"
    ],
    "answer": 0,
    "explanation": "A member with priority 0 can never be elected Primary, but it can still vote and hold data.",
    "hint": "Zero priority."
  },
  {
    "id": 68,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "Your application requires 'Strong Consistency'. Which Read Concern should you use to ensure you only read data that has been acknowledged by a majority of replica set members?",
    "options": [
      "local",
      "available",
      "snapshot",
      "majority"
    ],
    "answer": 3,
    "explanation": "readConcern: 'majority' ensures that the data being read is durable and won't be rolled back.",
    "hint": "Majority rule."
  },
  {
    "id": 69,
    "difficulty": "medium",
    "category": "sharding",
    "question": "Which command is used to add a new shard to an existing Sharded Cluster?",
    "options": [
      "cluster.add()",
      "sh.addShard()",
      "db.addShard()",
      "mongos.shard()"
    ],
    "answer": 1,
    "explanation": "The sh.addShard() helper method is used in the mongo shell when connected to a mongos instance.",
    "hint": "Sharding helper prefix."
  },
  {
    "id": 70,
    "difficulty": "hard",
    "category": "transactions",
    "question": "What is the maximum execution time for a multi-document transaction in MongoDB by default?",
    "options": [
      "60 seconds",
      "10 seconds",
      "5 minutes",
      "No limit"
    ],
    "answer": 0,
    "explanation": "By default, transactions have a 60-second limit to prevent them from blocking other operations for too long.",
    "hint": "One minute."
  },
  {
    "id": 71,
    "difficulty": "medium",
    "category": "security",
    "question": "What does 'Auditing' allow a database administrator to do?",
    "options": [
      "Resize shards",
      "Track and log system activity and user actions (e.g., login attempts, schema changes)",
      "Improve query speed",
      "Automate backups"
    ],
    "answer": 1,
    "explanation": "Auditing is used for security and compliance to monitor who is doing what in the database.",
    "hint": "Activity tracking."
  },
  {
    "id": 72,
    "difficulty": "hard",
    "category": "sharding",
    "question": "What is 'Hashed Sharding' primarily used for?",
    "options": [
      "To speed up range-based queries",
      "To encrypt the shard key",
      "To ensure an even distribution of data across shards regardless of the shard key's range",
      "To keep related data on the same shard"
    ],
    "answer": 2,
    "explanation": "Hashed sharding computes a hash of the shard key to distribute data randomly but evenly.",
    "hint": "Even distribution."
  },
  {
    "id": 73,
    "difficulty": "medium",
    "category": "replication",
    "question": "What is a 'Hidden Member' in a Replica Set?",
    "options": [
      "A member that doesn't use any RAM",
      "A member used only for testing",
      "A member that holds data but is invisible to client applications and cannot become Primary",
      "A member that is not part of the set"
    ],
    "answer": 2,
    "explanation": "Hidden members are often used for reporting or backups to avoid taking resources away from the Primary.",
    "hint": "Invisible data holder."
  },
  {
    "id": 74,
    "difficulty": "hard",
    "category": "sharding",
    "question": "What is the 'Balancer' in MongoDB Sharding?",
    "options": [
      "A tool to balance the CPU load",
      "A hardware load balancer",
      "A background process that migrates chunks from over-utilized shards to under-utilized shards",
      "A person who monitors the cluster"
    ],
    "answer": 2,
    "explanation": "The balancer ensures that data is distributed evenly across all shards by moving 'chunks' of data.",
    "hint": "Automatic chunk migrator."
  },
  {
    "id": 75,
    "difficulty": "medium",
    "category": "security",
    "question": "To enable internal authentication between members of a Replica Set, which type of file is commonly used?",
    "options": [
      "JSON file",
      "Log file",
      "Config file",
      "Keyfile"
    ],
    "answer": 3,
    "explanation": "A keyfile acts as a shared secret that all members of the set use to authenticate each other.",
    "hint": "Shared key file."
  },
  {
    "id": 76,
    "difficulty": "hard",
    "category": "replication",
    "question": "What is the 'Majority' in a replica set of 5 members?",
    "options": [
      "4",
      "3",
      "2",
      "5"
    ],
    "answer": 1,
    "explanation": "Majority is calculated as (n/2) + 1, rounded down. For 5 members, it is 3.",
    "hint": "More than half."
  },
  {
    "id": 77,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You want to perform a read that reflects the most recent data available, even if it might be rolled back. Which Read Concern should you use?",
    "options": [
      "linearizable",
      "snapshot",
      "local",
      "majority"
    ],
    "answer": 2,
    "explanation": "readConcern: 'local' returns the most recent data on the specific member being queried, without ensuring it's durable across the set.",
    "hint": "Default read concern."
  },
  {
    "id": 78,
    "difficulty": "hard",
    "category": "sharding",
    "question": "Why should you avoid using a monotonically increasing shard key (like a Timestamp or ObjectId) in a high-write environment?",
    "options": [
      "It is not allowed in MongoDB",
      "It makes the index too large",
      "It slows down the mongos process",
      "It creates 'hotspots' where all new writes go to a single shard"
    ],
    "answer": 3,
    "explanation": "Increasing keys mean all new data falls into the same range, which maps to the same shard, negating the benefits of parallel writes.",
    "hint": "Hotspotting."
  },
  {
    "id": 79,
    "difficulty": "medium",
    "category": "replication",
    "question": "In the event of a Primary failure, how long does it typically take for a Replica Set to elect a new Primary?",
    "options": [
      "10-12 seconds (default)",
      "Less than 1 second",
      "5 minutes",
      "1 minute"
    ],
    "answer": 0,
    "explanation": "Failover is generally fast, usually completing in about 10 seconds under default heartbeat settings.",
    "hint": "Roughly ten seconds."
  },
  {
    "id": 80,
    "difficulty": "hard",
    "category": "sharding",
    "question": "Which command must be run before you can shard a specific collection?",
    "options": [
      "sh.shardCollection()",
      "sh.enableSharding() on the database",
      "db.createIndex() on the shard key",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "To shard a collection, you must first enable sharding on the database, ensure an index exists on the shard key, and then run shardCollection.",
    "hint": "Multiple prerequisites."
  },
  {
    "id": 81,
    "difficulty": "medium",
    "category": "security",
    "question": "What is 'IP Whitelisting' in MongoDB Atlas?",
    "options": [
      "A list of allowed usernames",
      "A way to color-code IP addresses",
      "A list of specific IP addresses or ranges that are permitted to connect to the cluster",
      "A DNS setting"
    ],
    "answer": 2,
    "explanation": "It is a network security layer that prevents any unauthorized IP from even attempting to connect.",
    "hint": "Network access list."
  },
  {
    "id": 82,
    "difficulty": "hard",
    "category": "replication",
    "question": "Which Replica Set member state indicates that a member is currently performing an initial sync?",
    "options": [
      "SECONDARY",
      "RECOVERING",
      "STARTUP2",
      "DOWN"
    ],
    "answer": 2,
    "explanation": "STARTUP2 is the state during which a member copies data from an existing member to catch up.",
    "hint": "The phase after STARTUP."
  },
  {
    "id": 83,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Your application needs to ensure that a write is written to the on-disk journal before returning. Which Write Concern option is required?",
    "options": [
      "{ w: 1 }",
      "{ j: true }",
      "{ f: true }",
      "{ sync: true }"
    ],
    "answer": 1,
    "explanation": "The 'j' (journal) option ensures that the operation is recorded in the journal for durability against crashes.",
    "hint": "J stands for Journal."
  },
  {
    "id": 84,
    "difficulty": "hard",
    "category": "sharding",
    "question": "What is 'Ranged Sharding'?",
    "options": [
      "Sharding that only works for numbers",
      "Sharding that divides data into ranges based on shard key values",
      "Sharding that uses a random number generator",
      "Sharding based on the size of the document"
    ],
    "answer": 1,
    "explanation": "Ranged sharding is efficient for range-based queries on the shard key but can lead to uneven distribution if the key is not chosen well.",
    "hint": "Value-based ranges."
  },
  {
    "id": 85,
    "difficulty": "medium",
    "category": "transactions",
    "question": "Can transactions be used in a standalone (single-instance) MongoDB server?",
    "options": [
      "Yes",
      "Only if it uses WiredTiger",
      "Only in development mode",
      "No"
    ],
    "answer": 3,
    "explanation": "Transactions require the oplog mechanism, which is only present in Replica Sets or Sharded Clusters.",
    "hint": "Depends on replication features."
  },
  {
    "id": 86,
    "difficulty": "hard",
    "category": "sharding",
    "question": "In a sharded cluster, where is the information about 'chunks' stored?",
    "options": [
      "On the shards",
      "In the mongos cache only",
      "On the application server",
      "On the Config Servers"
    ],
    "answer": 3,
    "explanation": "Config servers are the source of truth for all metadata regarding chunk locations.",
    "hint": "Metadata storage."
  },
  {
    "id": 87,
    "difficulty": "medium",
    "category": "replication",
    "question": "What is 'Replication Lag'?",
    "options": [
      "The time it takes to run an aggregation",
      "The network latency between client and server",
      "The delay between a write on the Primary and that write being applied to a Secondary",
      "The time it takes to boot a server"
    ],
    "answer": 2,
    "explanation": "Lag can occur due to network issues or if the Secondary is under heavy load and cannot keep up with the Primary's oplog.",
    "hint": "Sync delay."
  },
  {
    "id": 88,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "Which Read Preference is best if you want the lowest latency and don't care about reading stale data?",
    "options": [
      "primary",
      "secondary",
      "primaryPreferred",
      "nearest"
    ],
    "answer": 3,
    "explanation": "'nearest' reads from the member with the lowest network latency relative to the client.",
    "hint": "Proximity based."
  },
  {
    "id": 89,
    "difficulty": "medium",
    "category": "security",
    "question": "What does 'TLS' stand for in the context of MongoDB network security?",
    "options": [
      "Total Log Storage",
      "Transport Layer Security",
      "Top Level Security",
      "Traffic Loading System"
    ],
    "answer": 1,
    "explanation": "TLS (successor to SSL) encrypts the connection between the client and the database.",
    "hint": "Encryption protocol."
  },
  {
    "id": 90,
    "difficulty": "hard",
    "category": "sharding",
    "question": "What is a 'Broadcast Query' (Scatter-Gather)?",
    "options": [
      "A very fast query",
      "A query that is sent to every shard because the shard key is not included in the filter",
      "A query that is sent to the primary only",
      "A query that returns no results"
    ],
    "answer": 1,
    "explanation": "Broadcast queries are less efficient than targeted queries because mongos must wait for all shards to respond.",
    "hint": "Hitting every shard."
  },
  {
    "id": 91,
    "difficulty": "medium",
    "category": "replication",
    "question": "Which replica set member state is a member in after it has been heartbeat-timed out by others?",
    "options": [
      "DOWN",
      "RECOVERING",
      "UNKNOWN",
      "SECONDARY"
    ],
    "answer": 0,
    "explanation": "When a member is unreachable, the others mark it as DOWN.",
    "hint": "Offline state."
  },
  {
    "id": 92,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You need to perform an atomic update that changes a status and returns the NEW version of the document. Which method do you use?",
    "options": [
      "findAndModify() / findOneAndUpdate()",
      "replaceOne()",
      "save()",
      "updateOne()"
    ],
    "answer": 0,
    "explanation": "findOneAndUpdate() allows you to return the modified document by setting the { returnNewDocument: true } option.",
    "hint": "Find, Update, and Return."
  },
  {
    "id": 93,
    "difficulty": "medium",
    "category": "security",
    "question": "What is the 'root' role in MongoDB?",
    "options": [
      "A role that allows read access to one DB",
      "A role for managing indexes only",
      "A role for web developers only",
      "A superuser role that provides complete access to all resources and actions in the system"
    ],
    "answer": 3,
    "explanation": "The root role is the most powerful role in MongoDB security.",
    "hint": "Superuser."
  },
  {
    "id": 94,
    "difficulty": "hard",
    "category": "sharding",
    "question": "What is 'Zone Sharding' (formerly Tag-Aware Sharding)?",
    "options": [
      "A way to shard encrypted data",
      "Sharding based on the time zone",
      "Sharding that only works in one data center",
      "Associating specific shard key ranges with specific shards to control data placement (e.g., by geography)"
    ],
    "answer": 3,
    "explanation": "Zones allow you to keep European user data on European shards and US data on US shards for compliance or performance.",
    "hint": "Geographic data placement."
  },
  {
    "id": 95,
    "difficulty": "medium",
    "category": "replication",
    "question": "How do you check the status of a Replica Set in the mongo shell?",
    "options": [
      "rs.status()",
      "rs.info()",
      "rs.check()",
      "db.replicationStatus()"
    ],
    "answer": 0,
    "explanation": "rs.status() provides detailed information about every member of the set and their current state.",
    "hint": "Replication status helper."
  },
  {
    "id": 96,
    "difficulty": "hard",
    "category": "sharding",
    "question": "What is the default chunk size in MongoDB sharding?",
    "options": [
      "1GB",
      "128MB",
      "64MB",
      "16MB"
    ],
    "answer": 2,
    "explanation": "64MB is the default size at which MongoDB will split a chunk.",
    "hint": "Power of 2, greater than 32."
  },
  {
    "id": 97,
    "difficulty": "medium",
    "category": "security",
    "question": "Can you change the password of an existing user in MongoDB?",
    "options": [
      "Only through the config file",
      "Yes, using db.changeUserPassword()",
      "No, you must delete and recreate them",
      "Only in Atlas"
    ],
    "answer": 1,
    "explanation": "MongoDB provides helper methods to manage user credentials without deleting the account.",
    "hint": "Standard change method."
  },
  {
    "id": 98,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "A Replica Set has 3 members. One member goes offline. Can the remaining 2 members elect a new Primary?",
    "options": [
      "Only if the Primary is still online",
      "Only if one of them is an Arbiter",
      "No, because you need all members",
      "Yes, because 2 is a majority of 3"
    ],
    "answer": 3,
    "explanation": "As long as more than 50% of the voting members are reachable, an election can be held and a Primary maintained.",
    "hint": "Majority rule applied."
  },
  {
    "id": 99,
    "difficulty": "medium",
    "category": "sharding",
    "question": "What is a 'Targeted Query' in a sharded cluster?",
    "options": [
      "A query that includes the shard key, allowing mongos to send it to only the relevant shard",
      "A query that uses a specific index",
      "A query that only returns one document",
      "A query aimed at the config server"
    ],
    "answer": 0,
    "explanation": "Targeted queries are much more scalable than broadcast queries as they limit work to a single shard.",
    "hint": "Specific shard routing."
  },
  {
    "id": 100,
    "difficulty": "hard",
    "category": "replication",
    "question": "What is the purpose of the 'heartbeat' in a Replica Set?",
    "options": [
      "To sync data",
      "To check the CPU usage",
      "To log user activity",
      "To allow members to monitor each other's availability and trigger elections if the Primary fails"
    ],
    "answer": 3,
    "explanation": "Heartbeats are sent every 2 seconds by default to ensure the health of the cluster.",
    "hint": "Health check pulses."
  },
  {
    "id": 101,
    "difficulty": "hard",
    "category": "performance",
    "question": "In the output of an 'explain()' plan, what does the 'COLLSCAN' winning plan indicate?",
    "options": [
      "The query used a collection-level index",
      "The query was successful and cached",
      "MongoDB had to perform a full collection scan because no suitable index was found",
      "The collection is sharded"
    ],
    "answer": 2,
    "explanation": "COLLSCAN stands for Collection Scan. It is generally inefficient for large datasets as MongoDB must inspect every document.",
    "hint": "No index was used."
  },
  {
    "id": 102,
    "difficulty": "medium",
    "category": "storage",
    "question": "Which storage engine has been the default for MongoDB since version 3.2?",
    "options": [
      "In-Memory",
      "WiredTiger",
      "MMAPv1",
      "GridFS"
    ],
    "answer": 1,
    "explanation": "WiredTiger provides document-level concurrency control and native compression.",
    "hint": "The fierce feline engine."
  },
  {
    "id": 103,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "When using the '$lookup' stage, what is the 'correlated subquery' feature used for (introduced in 3.6+)?",
    "options": [
      "To encrypt joined data",
      "To speed up simple ID lookups",
      "To join more than two collections at once",
      "To perform complex join conditions and filter the joined collection before returning results"
    ],
    "answer": 3,
    "explanation": "Using the 'let' and 'pipeline' syntax within $lookup allows for much more flexible joins than basic equality.",
    "hint": "Pipeline inside a lookup."
  },
  {
    "id": 104,
    "difficulty": "medium",
    "category": "backup",
    "question": "Which utility is used to create a binary export of the contents of a MongoDB database?",
    "options": [
      "mongorestore",
      "mongosync",
      "mongoexport",
      "mongodump"
    ],
    "answer": 3,
    "explanation": "mongodump creates BSON files which are a binary representation of the database, suitable for backups.",
    "hint": "Dumping the data."
  },
  {
    "id": 105,
    "difficulty": "hard",
    "category": "performance",
    "question": "What does the 'executionStats' mode in 'explain()' provide that 'queryPlanner' mode does not?",
    "options": [
      "The suggested shard key",
      "The database version",
      "Actual performance metrics like time taken and number of documents examined",
      "The list of all indexes"
    ],
    "answer": 2,
    "explanation": "executionStats actually runs the query and reports on the real-world performance metrics.",
    "hint": "Statistics of the execution."
  },
  {
    "id": 106,
    "difficulty": "medium",
    "category": "storage",
    "question": "WiredTiger uses 'Checkpoints' to persist data to disk. By default, how often do these occur?",
    "options": [
      "Every 60 seconds",
      "Every 10 seconds",
      "Every hour",
      "Every 5 minutes"
    ],
    "answer": 0,
    "explanation": "WiredTiger creates a checkpoint every 60 seconds or after 2GB of data has been written.",
    "hint": "One minute interval."
  },
  {
    "id": 107,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "Your aggregation pipeline is hitting the 100MB RAM limit for a single stage. What is the best way to handle this for large datasets?",
    "options": [
      "Index the $group stage",
      "Use the { allowDiskUse: true } option",
      "Add more RAM to the server",
      "Split the collection into two"
    ],
    "answer": 1,
    "explanation": "allowDiskUse allows the aggregation stages to write temporary data to the _tmp directory on disk.",
    "hint": "Use the hard drive."
  },
  {
    "id": 108,
    "difficulty": "medium",
    "category": "performance",
    "question": "What is the 'Query Profiler' in MongoDB?",
    "options": [
      "A tool to write queries for you",
      "A UI for browsing data",
      "A database feature that logs information about queries that take longer than a certain threshold",
      "A security scanner"
    ],
    "answer": 2,
    "explanation": "The profiler captures data about operations that exceed the 'slowMS' threshold (default 100ms).",
    "hint": "Logs slow operations."
  },
  {
    "id": 109,
    "difficulty": "hard",
    "category": "storage",
    "question": "What is 'Document-Level Concurrency'?",
    "options": [
      "Allowing multiple users to edit the same field",
      "The ability for multiple write operations to happen on different documents in the same collection simultaneously",
      "Running MongoDB on multiple CPUs",
      "Automatic data replication"
    ],
    "answer": 1,
    "explanation": "WiredTiger uses optimistic concurrency control, locking only at the document level rather than the whole collection.",
    "hint": "Granular locking."
  },
  {
    "id": 110,
    "difficulty": "medium",
    "category": "aggregation",
    "question": "Which aggregation stage allows you to rename fields and add new calculated fields to the document stream?",
    "options": [
      "$group",
      "$match",
      "$filter",
      "$project"
    ],
    "answer": 3,
    "explanation": "$project can reshape documents, creating new fields or suppressing old ones.",
    "hint": "Projection/Reshaping."
  },
  {
    "id": 111,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to find the top 5 most expensive products. Which combination of stages is correct?",
    "options": [
      "$sort by price (1), then $limit (5)",
      "$limit (5), then $sort by price (-1)",
      "$sort by price (-1), then $limit (5)",
      "$match price: 'high', then $limit (5)"
    ],
    "answer": 2,
    "explanation": "You must sort in descending order (-1) first to get the highest values, then limit the result set.",
    "hint": "Sort descending then limit."
  },
  {
    "id": 112,
    "difficulty": "medium",
    "category": "backup",
    "question": "When using 'mongorestore', what does the '--drop' flag do?",
    "options": [
      "Ignores errors during restore",
      "Drops the indexes only",
      "Drops the target collections before restoring from the backup",
      "Deletes the backup file after restore"
    ],
    "answer": 2,
    "explanation": "The --drop flag ensures you have a clean collection matching the backup exactly by removing existing data first.",
    "hint": "Clean slate restore."
  },
  {
    "id": 113,
    "difficulty": "hard",
    "category": "performance",
    "question": "What does an 'IXSCAN' stage in an explain plan mean?",
    "options": [
      "Internal Scan: An error occurred",
      "Implicit Scan: Scanning without a filter",
      "Initial Scan: The first time a query is run",
      "Index Scan: MongoDB is using an index to find the documents"
    ],
    "answer": 3,
    "explanation": "IXSCAN is preferred over COLLSCAN as it indicates an index is being leveraged.",
    "hint": "Index-based search."
  },
  {
    "id": 114,
    "difficulty": "medium",
    "category": "storage",
    "question": "Which feature of WiredTiger helps reduce the storage footprint on disk?",
    "options": [
      "Journaling",
      "Read Tickets",
      "Snappy/Zlib Compression",
      "Checkpoints"
    ],
    "answer": 2,
    "explanation": "WiredTiger supports block compression (Snappy is the default) to reduce disk usage.",
    "hint": "Making files smaller."
  },
  {
    "id": 115,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What is the result of a '$group' stage with an '_id: null'?",
    "options": [
      "It groups all input documents into a single document to perform global calculations",
      "It deletes all documents",
      "It returns an error",
      "It groups documents by their original _id"
    ],
    "answer": 0,
    "explanation": "Setting _id to null creates one single group for the entire collection, useful for calculating grand totals.",
    "hint": "One group for everything."
  },
  {
    "id": 116,
    "difficulty": "easy",
    "category": "backup",
    "question": "Which tool is best for exporting data in a human-readable format like JSON or CSV?",
    "options": [
      "mongodump",
      "bsondump",
      "mongorestore",
      "mongoexport"
    ],
    "answer": 3,
    "explanation": "mongoexport is intended for interoperability with other systems via JSON or CSV.",
    "hint": "Export to text."
  },
  {
    "id": 117,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is a 'Working Set' in MongoDB?",
    "options": [
      "The current list of active transactions",
      "The amount of CPU used",
      "The set of all developers working on the DB",
      "The portion of data and indexes that the application accesses most frequently"
    ],
    "answer": 3,
    "explanation": "Ideally, the Working Set should fit entirely in RAM to avoid frequent and slow disk I/O.",
    "hint": "Frequently used data in RAM."
  },
  {
    "id": 118,
    "difficulty": "medium",
    "category": "storage",
    "question": "What is 'Journaling' in MongoDB?",
    "options": [
      "A way to organize collections",
      "A write-ahead log that helps recover the database in the event of a crash",
      "An encryption method",
      "Writing daily logs of users"
    ],
    "answer": 1,
    "explanation": "The journal ensures that MongoDB can recover writes between checkpoints if the process terminates unexpectedly.",
    "hint": "Crash recovery log."
  },
  {
    "id": 119,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "Which aggregation operator is used to calculate the size of an array field?",
    "options": [
      "$length",
      "$size",
      "$count",
      "$arraySize"
    ],
    "answer": 1,
    "explanation": "$size returns the number of elements in an array.",
    "hint": "Array property."
  },
  {
    "id": 120,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You need to update a field 'stock' by adding 5 units to all items in the 'electronics' category. Which query is most efficient?",
    "options": [
      "db.items.find({ category: 'electronics' }).forEach(...) ",
      "db.items.updateOne({ category: 'electronics' }, { $inc: { stock: 5 } })",
      "db.items.updateMany({ category: 'electronics' }, { $set: { stock: stock + 5 } })",
      "db.items.updateMany({ category: 'electronics' }, { $inc: { stock: 5 } })"
    ],
    "answer": 3,
    "explanation": "updateMany with $inc is an atomic, server-side operation that avoids the round-trip overhead of client-side loops.",
    "hint": "Bulk atomic increment."
  },
  {
    "id": 121,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is the 'covered by index' status in an explain plan?",
    "options": [
      "When an index exists but isn't used",
      "When the index is larger than the data",
      "When the index is encrypted",
      "When MongoDB can fulfill the query and projection using only the index, without looking at the document"
    ],
    "answer": 3,
    "explanation": "Covered queries are highly performant because they bypass the need to fetch documents from disk (FETCH stage).",
    "hint": "Zero FETCH stage."
  },
  {
    "id": 122,
    "difficulty": "medium",
    "category": "storage",
    "question": "How does WiredTiger handle disk space when documents are deleted?",
    "options": [
      "It deletes the collection file",
      "It keeps the space and marks it as 'available' for future new documents (internal reuse)",
      "It immediately shrinks the file on disk",
      "It requires a server restart"
    ],
    "answer": 1,
    "explanation": "Deleted space is reused internally. To shrink the physical file size, you usually need to run the 'compact' command or resync.",
    "hint": "Internal fragmentation reuse."
  },
  {
    "id": 123,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "In a '$lookup' stage, what happens if the 'as' field already exists in the input document?",
    "options": [
      "The query is ignored",
      "The joined data is appended to the existing field",
      "The existing field is overwritten with the joined data",
      "MongoDB throws an error"
    ],
    "answer": 2,
    "explanation": "The 'as' field specifies the output field name; it will overwrite any existing field of the same name.",
    "hint": "Overwriting behavior."
  },
  {
    "id": 124,
    "difficulty": "easy",
    "category": "basics",
    "question": "Which shell command shows the current storage statistics for a specific collection?",
    "options": [
      "db.collection.stats()",
      "db.printStats()",
      "db.collection.size()",
      "db.collection.info()"
    ],
    "answer": 0,
    "explanation": "stats() provides data on count, size, index sizes, and storage engine specifics.",
    "hint": "Collection statistics."
  },
  {
    "id": 125,
    "difficulty": "hard",
    "category": "performance",
    "question": "In an explain plan, what does the 'SORT' stage (without an index) indicate?",
    "options": [
      "An in-memory sort which might be a performance bottleneck",
      "An encrypted sort",
      "A very fast operation",
      "A sort using a compound index"
    ],
    "answer": 0,
    "explanation": "If you see a SORT stage without an IXSCAN prefix, MongoDB is doing the work in RAM (subject to the 32MB limit).",
    "hint": "Manual sorting by the engine."
  },
  {
    "id": 126,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You need to export data from a MongoDB Atlas cluster to an on-premise server. Which tool is most reliable for large datasets?",
    "options": [
      "Change Streams",
      "mongoexport",
      "Copy-paste JSON",
      "mongodump"
    ],
    "answer": 3,
    "explanation": "mongodump is more efficient for large data and maintains BSON types accurately.",
    "hint": "Binary dump."
  },
  {
    "id": 127,
    "difficulty": "hard",
    "category": "storage",
    "question": "What is the purpose of the 'WiredTiger.wt' file?",
    "options": [
      "It stores the actual document data",
      "It is a log file",
      "It is the metadata file that tracks all other tables and files in the data directory",
      "It stores the user passwords"
    ],
    "answer": 2,
    "explanation": "It is the 'master' metadata file for the WiredTiger storage engine.",
    "hint": "WiredTiger metadata."
  },
  {
    "id": 128,
    "difficulty": "medium",
    "category": "aggregation",
    "question": "Which stage is typically placed first in an aggregation pipeline to optimize performance?",
    "options": [
      "$match",
      "$unwind",
      "$group",
      "$sort"
    ],
    "answer": 0,
    "explanation": "Filtering early with $match reduces the number of documents the subsequent (and potentially heavier) stages must process.",
    "hint": "Filter early."
  },
  {
    "id": 129,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Index Intersection'?",
    "options": [
      "A type of sharding",
      "When two indexes overlap and cause an error",
      "When you delete an index",
      "When MongoDB uses two different indexes to fulfill a single query"
    ],
    "answer": 3,
    "explanation": "MongoDB can sometimes combine results from two indexes, though a single compound index is almost always faster.",
    "hint": "Using multiple indexes for one query."
  },
  {
    "id": 130,
    "difficulty": "medium",
    "category": "backup",
    "question": "Can you run 'mongodump' on a live production system?",
    "options": [
      "Only if you stop the Primary",
      "No, it locks the database",
      "Yes, it uses non-blocking queries but may impact performance due to I/O",
      "Only on Secondaries"
    ],
    "answer": 2,
    "explanation": "It is safe to run, but on very high-traffic systems, it is often better to run it against a Secondary to avoid impacting the Primary.",
    "hint": "Non-blocking but resource intensive."
  },
  {
    "id": 131,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "Which operator is used to merge two or more arrays together into one array?",
    "options": [
      "$push",
      "$merge",
      "$concatArrays",
      "$add"
    ],
    "answer": 2,
    "explanation": "$concatArrays takes multiple arrays and returns a single concatenated array.",
    "hint": "Concatenate."
  },
  {
    "id": 132,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you identify which index is being used by a specific find() query?",
    "options": [
      "db.currentOp()",
      "db.collection.find().explain()",
      "Check the log file",
      "db.collection.getIndexes()"
    ],
    "answer": 1,
    "explanation": "explain() reveals the query plan, including the 'inputStage' which shows the index name.",
    "hint": "Query explanation."
  },
  {
    "id": 133,
    "difficulty": "hard",
    "category": "storage",
    "question": "What is 'Read Ticket' and 'Write Ticket' in WiredTiger?",
    "options": [
      "Tickets for MongoDB customer support",
      "A priority system for users",
      "A type of encryption key",
      "The number of concurrent operations allowed by the storage engine"
    ],
    "answer": 3,
    "explanation": "WiredTiger uses tickets to limit the number of concurrent threads entering the storage engine to prevent resource exhaustion.",
    "hint": "Concurrency permits."
  },
  {
    "id": 134,
    "difficulty": "easy",
    "category": "crud",
    "question": "What is the purpose of '$natural: 1' in a sort operation?",
    "options": [
      "Sort by date",
      "Sort by the order the documents are stored on disk",
      "Sort by the _id",
      "Sort alphabetically"
    ],
    "answer": 1,
    "explanation": "Natural sort follows the physical order of the documents in the data files.",
    "hint": "Physical disk order."
  },
  {
    "id": 135,
    "difficulty": "hard",
    "category": "performance",
    "question": "Which system collection stores the information captured by the Database Profiler?",
    "options": [
      "system.log",
      "system.profile",
      "admin.profile",
      "local.oplog"
    ],
    "answer": 1,
    "explanation": "Each database has its own system.profile collection if profiling is enabled.",
    "hint": "System profile."
  },
  {
    "id": 136,
    "difficulty": "medium",
    "category": "aggregation",
    "question": "Which stage is used to create a sequence of numbers (e.g., for pagination)?",
    "options": [
      "$limit",
      "$index",
      "$range",
      "$skip"
    ],
    "answer": 3,
    "explanation": "$skip (usually with $limit and $sort) is used to bypass a specific number of documents.",
    "hint": "Skip documents."
  },
  {
    "id": 137,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to perform a full-text search. Which type of index MUST be created first?",
    "options": [
      "Text index",
      "Standard index on the field",
      "2dsphere index",
      "Hashed index"
    ],
    "answer": 0,
    "explanation": "You must create a 'text' index to use the $text operator for search queries.",
    "hint": "Required for search."
  },
  {
    "id": 138,
    "difficulty": "medium",
    "category": "storage",
    "question": "What is the WiredTiger 'Cache Size' default setting?",
    "options": [
      "50% of (RAM - 1 GB), or 256 MB",
      "512 MB",
      "16 MB",
      "90% of RAM"
    ],
    "answer": 0,
    "explanation": "The default is generally half of the system RAM minus 1GB, ensuring there is room for the OS and other processes.",
    "hint": "Roughly half of free RAM."
  },
  {
    "id": 139,
    "difficulty": "hard",
    "category": "performance",
    "question": "In explain plans, what does the 'PROJECTION_REWRITE' stage do?",
    "options": [
      "Optimizes the query to return only the fields needed for an index cover",
      "Encrypts the output",
      "Changes the field names",
      "Deletes hidden fields"
    ],
    "answer": 0,
    "explanation": "The engine attempts to optimize projections to increase the chances of a covered query.",
    "hint": "Optimizing the return fields."
  },
  {
    "id": 140,
    "difficulty": "easy",
    "category": "backup",
    "question": "Can 'mongoimport' import data from a SQL database directly?",
    "options": [
      "Only through a plugin",
      "No, it only supports JSON, CSV, and TSV",
      "Yes",
      "Only if it's MySQL"
    ],
    "answer": 1,
    "explanation": "mongoimport is limited to specific flat file formats. SQL data must be exported to CSV first.",
    "hint": "Flat files only."
  },
  {
    "id": 141,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "Which stage allows you to filter the elements of an array during the projection?",
    "options": [
      "$filter (as an operator)",
      "$unwind",
      "$match",
      "$pull"
    ],
    "answer": 0,
    "explanation": "The $filter operator (used within $project or $addFields) selects a subset of an array based on a condition.",
    "hint": "Array filtering operator."
  },
  {
    "id": 142,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You need to store files larger than 16MB in MongoDB. Which specification should you use?",
    "options": [
      "Bucket Pattern",
      "BSON Long",
      "Manual Linking",
      "GridFS"
    ],
    "answer": 3,
    "explanation": "GridFS splits large files into smaller chunks (usually 255KB) and stores them in two collections.",
    "hint": "File system for MongoDB."
  },
  {
    "id": 143,
    "difficulty": "hard",
    "category": "performance",
    "question": "How does the 'hint()' method affect a query?",
    "options": [
      "It makes the query return results faster",
      "It forces MongoDB to use a specific index, overriding the query optimizer",
      "It gives the developer a hint on how to write code",
      "It marks the query for deletion"
    ],
    "answer": 1,
    "explanation": "While usually unnecessary, hint() is used in edge cases where the query planner chooses a sub-optimal index.",
    "hint": "Force an index."
  },
  {
    "id": 144,
    "difficulty": "medium",
    "category": "storage",
    "question": "What is 'Checkpointing' in the context of data durability?",
    "options": [
      "Calculating the checksum of a file",
      "A way to verify user login",
      "The process of flushing all data currently in the WiredTiger cache to the data files on disk",
      "Checking the network speed"
    ],
    "answer": 2,
    "explanation": "Checkpoints create a consistent point-in-time state for the data files.",
    "hint": "Flushing cache to disk."
  },
  {
    "id": 145,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What is the purpose of the '$facet' stage?",
    "options": [
      "To join three collections",
      "To delete duplicates",
      "To perform multiple aggregation pipelines within a single stage on the same set of input documents",
      "To change the appearance of the shell"
    ],
    "answer": 2,
    "explanation": "$facet is powerful for creating multi-dimensional analytics (like category counts + price ranges) in one pass.",
    "hint": "Parallel sub-pipelines."
  },
  {
    "id": 146,
    "difficulty": "easy",
    "category": "basics",
    "question": "What does the 'db.help()' command do?",
    "options": [
      "Fixes corrupted data",
      "Calls MongoDB support",
      "Opens the official website",
      "Displays a list of common database methods and descriptions"
    ],
    "answer": 3,
    "explanation": "It provides an on-screen reference for shell commands.",
    "hint": "In-shell help."
  },
  {
    "id": 147,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "A query is taking a long time. You run explain() and see 'totalKeysExamined: 0' and 'totalDocsExamined: 1000000'. What does this tell you?",
    "options": [
      "The query is NOT using an index at all (COLLSCAN)",
      "The data is encrypted",
      "The query is perfectly indexed",
      "The index is too small"
    ],
    "answer": 0,
    "explanation": "Total keys examined being 0 means no index keys were looked at, while docs examined indicates a scan of every document.",
    "hint": "Zero index keys used."
  },
  {
    "id": 148,
    "difficulty": "medium",
    "category": "storage",
    "question": "What happens if the MongoDB journal is disabled?",
    "options": [
      "Replication stops working",
      "The database becomes slower",
      "Encryption is disabled",
      "The database becomes faster but risks data loss on a crash"
    ],
    "answer": 3,
    "explanation": "Journaling adds write overhead for safety; without it, you can only recover to the last checkpoint (every 60s).",
    "hint": "Speed vs. Durability trade-off."
  },
  {
    "id": 149,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "Which stage is used to replace the root document with a specified embedded document?",
    "options": [
      "$project",
      "$changeRoot",
      "$unwind",
      "$replaceRoot"
    ],
    "answer": 3,
    "explanation": "$replaceRoot promotes a sub-document to the top level, which is useful after a $lookup.",
    "hint": "Promote sub-document."
  },
  {
    "id": 150,
    "difficulty": "medium",
    "category": "performance",
    "question": "What is the purpose of the 'compact' command?",
    "options": [
      "To delete old data",
      "To minify the JSON",
      "To compress images",
      "To rewrite a collection and its indexes to reduce fragmentation and potentially release space to the OS"
    ],
    "answer": 3,
    "explanation": "Compact defragments the storage but requires a lock on the collection.",
    "hint": "Defragmentation tool."
  },
  {
    "id": 151,
    "difficulty": "hard",
    "category": "time_series",
    "question": "What is a 'Time-Series Collection' specifically optimized for in MongoDB 5.0+?",
    "options": [
      "High-speed text search",
      "Storing large binary files",
      "Sequences of measurements over a period of time (e.g., IoT sensor data)",
      "Storing social media profiles"
    ],
    "answer": 2,
    "explanation": "Time-series collections store data in an optimized columnar format, reducing disk footprint and improving query IO efficiency for temporal data.",
    "hint": "Temporal data optimization."
  },
  {
    "id": 152,
    "difficulty": "medium",
    "category": "change_streams",
    "question": "What is the primary use case for 'Change Streams'?",
    "options": [
      "To stream movies from the database",
      "To back up the database",
      "To change the data types of existing fields",
      "To allow applications to react to real-time data changes without polling the database"
    ],
    "answer": 3,
    "explanation": "Change streams provide a way to listen for changes (inserts, updates, deletes) to a collection, database, or cluster.",
    "hint": "Real-time notifications."
  },
  {
    "id": 153,
    "difficulty": "hard",
    "category": "validation",
    "question": "How do you enforce a schema in MongoDB to ensure a field 'age' is always an integer?",
    "options": [
      "Using 'Schema Validation' with the '$jsonSchema' operator during collection creation",
      "By using a unique index",
      "By setting a flag in the config file",
      "It is not possible; MongoDB is schema-less"
    ],
    "answer": 0,
    "explanation": "MongoDB allows you to define validation rules using JSON Schema to ensure data quality at the database level.",
    "hint": "JSON Schema enforcement."
  },
  {
    "id": 154,
    "difficulty": "medium",
    "category": "atlas",
    "question": "What is 'MongoDB Atlas'?",
    "options": [
      "A specific version of the storage engine",
      "A fully managed multi-cloud database-as-a-service (DBaaS)",
      "A tool for migrating from SQL",
      "A desktop GUI for MongoDB"
    ],
    "answer": 1,
    "explanation": "Atlas is MongoDB's official cloud service that handles deployment, scaling, and maintenance automatically.",
    "hint": "Cloud-hosted MongoDB."
  },
  {
    "id": 155,
    "difficulty": "hard",
    "category": "time_series",
    "question": "In a Time-Series collection, what are the three main parameters required during creation?",
    "options": [
      "shardKey, primaryKey, and foreignKey",
      "timeField, metaField, and granularity",
      "id, value, and timestamp",
      "name, size, and index"
    ],
    "answer": 1,
    "explanation": "timeField (the timestamp), metaField (the metadata/label), and granularity (the expected frequency of data) are the core configurations.",
    "hint": "Time, Metadata, and Frequency."
  },
  {
    "id": 156,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "An application needs to perform a full-text search across 5 different fields. What is the best way to index this?",
    "options": [
      "Create one 'text' index that includes all 5 fields (a wildcard text index)",
      "Create 5 separate indexes",
      "Use a compound hashed index",
      "Text search is not possible on multiple fields"
    ],
    "answer": 0,
    "explanation": "A single collection can only have one 'text' index, but that index can cover multiple fields.",
    "hint": "Single text index limit."
  },
  {
    "id": 157,
    "difficulty": "hard",
    "category": "change_streams",
    "question": "What happens if a Change Stream cursor is closed due to a network error?",
    "options": [
      "The database must be restarted",
      "The application can use a 'Resume Token' to restart the stream from the exact point it stopped",
      "All data since the crash is lost",
      "The stream must start from the very beginning"
    ],
    "answer": 1,
    "explanation": "Resume tokens are stored in the _id of the change event and allow the client to pick up where it left off.",
    "hint": "Resuming the stream."
  },
  {
    "id": 158,
    "difficulty": "medium",
    "category": "validation",
    "question": "What is the 'validationAction' option in Schema Validation?",
    "options": [
      "It defines if the validation is 'error' (reject write) or 'warn' (allow write but log)",
      "It sets the validation speed",
      "It determines which users are validated",
      "It defines the programming language used for validation"
    ],
    "answer": 0,
    "explanation": "Validation can be set to 'error' (strict) or 'warn' (logging only), which is useful when rolling out new rules.",
    "hint": "Reject or Warn."
  },
  {
    "id": 159,
    "difficulty": "hard",
    "category": "atlas",
    "question": "What is 'Global Clusters' in MongoDB Atlas used for?",
    "options": [
      "To distribute data across different geographic regions to provide low-latency reads/writes for global users",
      "To connect to every cloud provider at once",
      "To translate the UI into different languages",
      "To manage all databases in one list"
    ],
    "answer": 0,
    "explanation": "Global clusters allow you to pin data to specific regions (geo-partitioning) for performance and compliance (like GDPR).",
    "hint": "Geographic data pinning."
  },
  {
    "id": 160,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How can you view all active operations currently running on the MongoDB server?",
    "options": [
      "db.showAll()",
      "db.listTasks()",
      "db.currentOp()",
      "db.active()"
    ],
    "answer": 2,
    "explanation": "db.currentOp() returns a document that contains information on in-progress operations for the database instance.",
    "hint": "Current operations."
  },
  {
    "id": 161,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is the 'Plan Cache' in MongoDB?",
    "options": [
      "A cache for the hard drive",
      "A mechanism that stores the winning query plan for a specific query shape to avoid re-evaluating it every time",
      "A list of all users",
      "A temporary storage for backups"
    ],
    "answer": 1,
    "explanation": "Once the optimizer finds the best index for a query, it caches that choice to speed up subsequent identical queries.",
    "hint": "Caching query plans."
  },
  {
    "id": 162,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "You want to delete a collection named 'temp_data'. Which command is correct?",
    "options": [
      "db.temp_data.drop()",
      "db.temp_data.delete()",
      "db.dropCollection('temp_data')",
      "db.temp_data.remove()"
    ],
    "answer": 0,
    "explanation": "drop() removes the entire collection and its indexes from the database.",
    "hint": "Dropping the collection."
  },
  {
    "id": 163,
    "difficulty": "hard",
    "category": "storage",
    "question": "What is 'GridFS' used for?",
    "options": [
      "Creating a grid of shards",
      "Accelerating CSS delivery",
      "Storing and retrieving files that exceed the BSON document size limit of 16MB",
      "Storing small JSON files"
    ],
    "answer": 2,
    "explanation": "GridFS chunks large files into smaller pieces, allowing them to be stored across multiple documents.",
    "hint": "Large file storage."
  },
  {
    "id": 164,
    "difficulty": "medium",
    "category": "atlas",
    "question": "What does 'Auto-Scaling' in Atlas manage?",
    "options": [
      "It automatically adds more users",
      "It automatically updates your application code",
      "It scales tier (CPU/RAM) and storage capacity based on cluster usage",
      "It scales the price down to zero"
    ],
    "answer": 2,
    "explanation": "Atlas can automatically upgrade your cluster size if CPU or RAM usage hits a certain threshold.",
    "hint": "Scaling resources automatically."
  },
  {
    "id": 165,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "In the '$group' stage, how can you create an array of all unique values for a field across the group?",
    "options": [
      "$collect",
      "$groupArray",
      "$addToSet",
      "$push"
    ],
    "answer": 2,
    "explanation": "$addToSet adds values to an array while ensuring no duplicates are present.",
    "hint": "Unique set addition."
  },
  {
    "id": 166,
    "difficulty": "medium",
    "category": "security",
    "question": "Which role is required to create new users in a database?",
    "options": [
      "dbOwner",
      "dbAdmin",
      "readWrite",
      "userAdmin"
    ],
    "answer": 3,
    "explanation": "The userAdmin role provides the ability to create and modify users and custom roles.",
    "hint": "Administering users."
  },
  {
    "id": 167,
    "difficulty": "hard",
    "category": "change_streams",
    "question": "Which of the following is NOT a valid change event type in a Change Stream?",
    "options": [
      "insert",
      "update",
      "indexCreated",
      "drop"
    ],
    "answer": 2,
    "explanation": "Change streams track data and collection-level changes (like drop/rename), but they do not track administrative metadata changes like index creation.",
    "hint": "Admin vs Data changes."
  },
  {
    "id": 168,
    "difficulty": "medium",
    "category": "indexing",
    "question": "What is a 'Hashed Index' primarily used for?",
    "options": [
      "Full-text search",
      "Sorting alphabetically",
      "Sharding to ensure even distribution of data",
      "Range queries"
    ],
    "answer": 2,
    "explanation": "Hashed indexes distribute data randomly but consistently, which is perfect for avoiding hotspots in sharding.",
    "hint": "Sharding distribution."
  },
  {
    "id": 169,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "A query uses an 'OR' operator. How does MongoDB handle indexing for this?",
    "options": [
      "It can only use one index",
      "It requires a text index",
      "It can use multiple indexes (one for each branch of the OR) via Index Intersection/Union",
      "It cannot use any indexes"
    ],
    "answer": 2,
    "explanation": "MongoDB can perform a 'sub-query' for each part of the $or and then union the results.",
    "hint": "Index per branch."
  },
  {
    "id": 170,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you kill a long-running operation identified by opid 12345?",
    "options": [
      "db.currentOp.remove(12345)",
      "db.killOp(12345)",
      "db.stop(12345)",
      "db.kill(12345)"
    ],
    "answer": 1,
    "explanation": "db.killOp() is the command to terminate a specific operation.",
    "hint": "Kill the operation."
  },
  {
    "id": 171,
    "difficulty": "hard",
    "category": "storage",
    "question": "Which WiredTiger setting controls the compression of data files?",
    "options": [
      "block_compressor",
      "data_reduction",
      "zip_mode",
      "file_minifier"
    ],
    "answer": 0,
    "explanation": "The block_compressor setting (values: snappy, zlib, zstd, none) determines how data is compressed on disk.",
    "hint": "Block compression."
  },
  {
    "id": 172,
    "difficulty": "medium",
    "category": "aggregation",
    "question": "What does the '$merge' stage do (introduced in 4.2)?",
    "options": [
      "Combines two arrays",
      "Merges shards",
      "Writes aggregation results to a collection, allowing for updates, merges, or replacements of existing documents",
      "Merges two collections into a third"
    ],
    "answer": 2,
    "explanation": "$merge is more powerful than $out because it can update existing documents rather than just replacing the whole collection.",
    "hint": "Smart output stage."
  },
  {
    "id": 173,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You have a compound index { a: 1, b: 1, c: 1 }. Which query will NOT be able to use this index?",
    "options": [
      "db.col.find({ a: 5, c: 20 })",
      "db.col.find({ a: 5, b: 10 })",
      "db.col.find({ a: 5 })",
      "db.col.find({ b: 10, c: 20 })"
    ],
    "answer": 3,
    "explanation": "To use a compound index, the query must include a prefix of the index (starting from 'a').",
    "hint": "Index prefix rule."
  },
  {
    "id": 174,
    "difficulty": "medium",
    "category": "security",
    "question": "In Atlas, what is 'Database Access' used for?",
    "options": [
      "To view the database logs",
      "To enable encryption at rest",
      "To set the firewall rules",
      "To create database users and assign them roles"
    ],
    "answer": 3,
    "explanation": "Database Access is the section where you manage the credentials used by your application to connect.",
    "hint": "Managing users."
  },
  {
    "id": 175,
    "difficulty": "hard",
    "category": "time_series",
    "question": "Can you create a standard index on the 'timeField' of a Time-Series collection?",
    "options": [
      "No, it is already indexed automatically",
      "Only if the collection is sharded",
      "Yes, and it is highly recommended for query performance",
      "Only if granularity is 'seconds'"
    ],
    "answer": 0,
    "explanation": "MongoDB automatically creates an internal index on the timeField for time-series collections.",
    "hint": "Automatic indexing."
  },
  {
    "id": 176,
    "difficulty": "medium",
    "category": "basics",
    "question": "What is the result of 'typeof _id' in most MongoDB documents?",
    "options": [
      "object",
      "number",
      "string",
      "binary"
    ],
    "answer": 0,
    "explanation": "The default _id is an 'ObjectId', which is a BSON object type.",
    "hint": "ObjectId type."
  },
  {
    "id": 177,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "Which operator is used to calculate the square root of a number in an aggregation pipeline?",
    "options": [
      "$root",
      "$math: 'sqrt'",
      "$sqrt",
      "$squareRoot"
    ],
    "answer": 2,
    "explanation": "$sqrt is a mathematical aggregation operator.",
    "hint": "Math shorthand."
  },
  {
    "id": 178,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you enable 'Read-Only' access for a user in a specific database?",
    "options": [
      "Use a firewall rule",
      "Assign the 'read' role",
      "Disable the 'write' flag",
      "Assign the 'guest' role"
    ],
    "answer": 1,
    "explanation": "The 'read' role provides the ability to read all data in the specified database.",
    "hint": "Standard read role."
  },
  {
    "id": 179,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Pre-splitting' in a sharded cluster?",
    "options": [
      "Splitting the database into multiple files",
      "Splitting a document into two",
      "Splitting the network traffic",
      "Manually creating chunks for an empty collection before inserting data to ensure immediate distribution"
    ],
    "answer": 3,
    "explanation": "Pre-splitting avoids the initial overhead of the balancer having to move data after it's already on one shard.",
    "hint": "Initial chunk creation."
  },
  {
    "id": 180,
    "difficulty": "medium",
    "category": "atlas",
    "question": "What is the purpose of 'Atlas Search'?",
    "options": [
      "To search for Atlas documentation",
      "To provide full-text search capabilities based on Apache Lucene, integrated directly into Atlas",
      "To find other Atlas users",
      "To find files in the cloud"
    ],
    "answer": 1,
    "explanation": "Atlas Search is a managed service that provides sophisticated search (fuzzy matching, highlighting) without needing an external cluster.",
    "hint": "Integrated full-text search."
  },
  {
    "id": 181,
    "difficulty": "hard",
    "category": "change_streams",
    "question": "Can Change Streams be opened on an entire database?",
    "options": [
      "Only in sharded clusters",
      "Only on the 'admin' database",
      "Yes, using db.watch()",
      "No, only on collections"
    ],
    "answer": 2,
    "explanation": "Since version 4.0, you can watch an entire database or even the whole cluster for changes.",
    "hint": "Watch method."
  },
  {
    "id": 182,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which command returns the current list of indexes for a collection?",
    "options": [
      "db.collection.getIndexes()",
      "db.collection.list()",
      "db.collection.showIndexes()",
      "db.indexes()"
    ],
    "answer": 0,
    "explanation": "getIndexes() returns an array of documents describing each index.",
    "hint": "Retrieve indexes."
  },
  {
    "id": 183,
    "difficulty": "hard",
    "category": "validation",
    "question": "What happens if you try to insert a document that fails Schema Validation when 'validationLevel' is set to 'strict'?",
    "options": [
      "The database is locked",
      "The document is inserted but a warning is logged",
      "The field that failed is removed",
      "The write is rejected and an error is returned"
    ],
    "answer": 3,
    "explanation": "In 'strict' level (the default), all writes must pass validation or they are rejected.",
    "hint": "Strict rejection."
  },
  {
    "id": 184,
    "difficulty": "medium",
    "category": "storage",
    "question": "In GridFS, which collection stores the actual binary chunks?",
    "options": [
      "fs.chunks",
      "fs.files",
      "fs.data",
      "fs.bin"
    ],
    "answer": 0,
    "explanation": "GridFS uses 'fs.files' for metadata and 'fs.chunks' for the binary data pieces.",
    "hint": "Chunks collection."
  },
  {
    "id": 185,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What is the '$bucketAuto' stage used for?",
    "options": [
      "Categorizing documents into a specified number of buckets, attempting to distribute them evenly",
      "Automatically creating backups",
      "Automating sharding",
      "Cleaning the database"
    ],
    "answer": 0,
    "explanation": "$bucketAuto uses data analysis to pick boundaries that result in relatively even bucket sizes.",
    "hint": "Automatic data bucketing."
  },
  {
    "id": 186,
    "difficulty": "medium",
    "category": "security",
    "question": "What is the 'Audit Log' in MongoDB Enterprise?",
    "options": [
      "A list of database errors",
      "A record of system events and user actions for security compliance",
      "A backup of the data",
      "A list of all indexes"
    ],
    "answer": 1,
    "explanation": "Auditing is crucial for tracking who accessed what and when.",
    "hint": "Compliance logging."
  },
  {
    "id": 187,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You want to perform a query that returns the distance between a user and a store. Which aggregation stage is best?",
    "options": [
      "$lookup",
      "$geoNear",
      "$match",
      "$project"
    ],
    "answer": 1,
    "explanation": "$geoNear outputs documents in order of distance and includes a field containing the calculated distance.",
    "hint": "Geospatial proximity stage."
  },
  {
    "id": 188,
    "difficulty": "medium",
    "category": "atlas",
    "question": "Which Atlas feature allows you to query data stored in S3 using the MongoDB Query Language?",
    "options": [
      "Atlas Sync",
      "Atlas Data Federation",
      "Atlas Online Archive",
      "Atlas Search"
    ],
    "answer": 1,
    "explanation": "Data Federation (formerly Data Lake) allows you to blend and query data from Atlas and AWS S3.",
    "hint": "Federated queries."
  },
  {
    "id": 189,
    "difficulty": "hard",
    "category": "storage",
    "question": "What is 'Direct I/O' in the context of WiredTiger?",
    "options": [
      "A type of memory-mapped file",
      "Directly connecting to the CPU",
      "A way to speed up network traffic",
      "Bypassing the OS cache to read/write directly to disk"
    ],
    "answer": 3,
    "explanation": "Direct I/O can improve performance in specific high-end storage configurations by reducing double-buffering.",
    "hint": "Bypassing OS cache."
  },
  {
    "id": 190,
    "difficulty": "medium",
    "category": "aggregation",
    "question": "Which stage is used to calculate statistics like standard deviation?",
    "options": [
      "$stat",
      "$stdDevPop / $stdDevSamp",
      "$math",
      "$calc"
    ],
    "answer": 1,
    "explanation": "These operators calculate population or sample standard deviation within a $group or $project stage.",
    "hint": "Standard deviation."
  },
  {
    "id": 191,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You need to update an array element but only if it matches a certain condition. Which positional operator do you use?",
    "options": [
      "$[<identifier>]",
      "$all",
      "$[]",
      "$"
    ],
    "answer": 0,
    "explanation": "The filtered positional operator $[<identifier>] allows you to update specific elements that match an 'arrayFilters' condition.",
    "hint": "Filtered positional update."
  },
  {
    "id": 192,
    "difficulty": "medium",
    "category": "basics",
    "question": "Which tool would you use to view BSON files created by 'mongodump' in a human-readable format?",
    "options": [
      "bsondump",
      "cat",
      "mongoexport",
      "mongo"
    ],
    "answer": 0,
    "explanation": "bsondump converts BSON files into JSON or other formats for inspection.",
    "hint": "BSON to JSON utility."
  },
  {
    "id": 193,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is 'Index Defragmentation'?",
    "options": [
      "Renaming indexes",
      "Rebuilding an index to reclaim space and improve performance, often via the 'compact' command",
      "Creating new indexes",
      "Deleting old indexes"
    ],
    "answer": 1,
    "explanation": "Over time, indexes can become fragmented due to many deletions and updates.",
    "hint": "Reclaiming index space."
  },
  {
    "id": 194,
    "difficulty": "medium",
    "category": "atlas",
    "question": "What is the 'Online Archive' feature in Atlas?",
    "options": [
      "A way to download the entire DB",
      "A backup service",
      "A way to share data with the public",
      "A feature that automatically moves aged data from the cluster to cheaper S3 storage while keeping it queryable"
    ],
    "answer": 3,
    "explanation": "Online Archive helps manage storage costs by tiering cold data to S3.",
    "hint": "Cold data tiering."
  },
  {
    "id": 195,
    "difficulty": "hard",
    "category": "change_streams",
    "question": "Does a Change Stream require a Replica Set?",
    "options": [
      "Only if you use encryption",
      "Yes",
      "No, it works on standalone",
      "Only for sharded clusters"
    ],
    "answer": 1,
    "explanation": "Change streams rely on the oplog, which is only present in Replica Sets (or Sharded Clusters).",
    "hint": "Oplog dependency."
  },
  {
    "id": 196,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "How do you count the number of distinct values for a field 'city'?",
    "options": [
      "db.col.count('city')",
      "db.col.find({city: 1}).count()",
      "db.col.distinct('city').length",
      "db.col.aggregate([{ $count: 'city' }])"
    ],
    "answer": 2,
    "explanation": "distinct() returns an array of unique values; getting the length of that array gives the count.",
    "hint": "Distinct values array."
  },
  {
    "id": 197,
    "difficulty": "hard",
    "category": "aggregation",
    "question": "What does the '$replaceWith' stage do?",
    "options": [
      "Replaces the collection with a new one",
      "Replaces strings in a text field",
      "An alias for $replaceRoot, used to replace the current document with a new value",
      "Replaces the Primary server"
    ],
    "answer": 2,
    "explanation": "$replaceWith is a more concise way to promote an embedded document or calculation to the top level.",
    "hint": "Shorthand for $replaceRoot."
  },
  {
    "id": 198,
    "difficulty": "medium",
    "category": "security",
    "question": "What is 'Field Level Encryption' (FLE) key vault?",
    "options": [
      "A special collection that stores the data encryption keys",
      "A list of system admins",
      "A password manager",
      "A physical safe"
    ],
    "answer": 0,
    "explanation": "The key vault collection stores the encrypted keys used to decrypt the data fields on the client side.",
    "hint": "Key storage collection."
  },
  {
    "id": 199,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is the 'Adaptive Query Optimizer'?",
    "options": [
      "A person who manually fixes queries",
      "A feature where MongoDB re-evaluates query plans if the distribution of data changes significantly",
      "A tool to increase RAM",
      "An AI that writes queries"
    ],
    "answer": 1,
    "explanation": "The optimizer 'adapts' to data changes to ensure the most efficient index is still being used.",
    "hint": "Evolving query plans."
  },
  {
    "id": 200,
    "difficulty": "hard",
    "category": "basics",
    "question": "In what year was the first version of MongoDB released?",
    "options": [
      "2007",
      "2009",
      "2011",
      "2005"
    ],
    "answer": 1,
    "explanation": "MongoDB was first released as an open-source project in February 2009.",
    "hint": "End of the 2000s."
  },
  {
    "id": 201,
    "difficulty": "medium",
    "category": "infrastructure",
    "question": "Which MongoDB deployment topology provides automatic failover and redundancy?",
    "options": [
      "Replica Set",
      "Local Instance",
      "Standalone Server",
      "Single Node Cluster"
    ],
    "answer": 0,
    "explanation": "Replica Sets provide redundancy and automatic failover by maintaining multiple copies of the data across nodes.",
    "hint": "High availability cluster."
  },
  {
    "id": 202,
    "difficulty": "hard",
    "category": "operations",
    "question": "Which MongoDB utility is primarily used for monitoring real-time database performance metrics like connections and memory usage?",
    "options": [
      "mongodump",
      "mongorestore",
      "mongoexport",
      "mongostat"
    ],
    "answer": 3,
    "explanation": "mongostat provides a quick overview of MongoDB instance performance including inserts, queries, connections, and memory.",
    "hint": "Real-time stats tool."
  },
  {
    "id": 203,
    "difficulty": "medium",
    "category": "operations",
    "question": "What does the 'mongotop' tool report?",
    "options": [
      "Query execution plans",
      "Time spent reading and writing data per collection",
      "Network latency between nodes",
      "CPU usage of MongoDB"
    ],
    "answer": 1,
    "explanation": "mongotop tracks how much time MongoDB spends reading and writing data for each collection.",
    "hint": "Top-like monitoring tool."
  },
  {
    "id": 204,
    "difficulty": "hard",
    "category": "devops",
    "question": "Which infrastructure-as-code tool is commonly used to automate MongoDB cluster deployment in cloud environments?",
    "options": [
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Docker"
    ],
    "answer": 1,
    "explanation": "Terraform is widely used for infrastructure provisioning including MongoDB clusters on AWS, Azure, and GCP.",
    "hint": "IaC provisioning tool."
  },
  {
    "id": 205,
    "difficulty": "medium",
    "category": "devops",
    "question": "Which configuration management tool is commonly used to automate MongoDB installation and configuration across servers?",
    "options": [
      "Git",
      "Redis",
      "Nginx",
      "Ansible"
    ],
    "answer": 3,
    "explanation": "Ansible automates server provisioning and application deployment including MongoDB configuration.",
    "hint": "Agentless automation."
  },
  {
    "id": 206,
    "difficulty": "hard",
    "category": "monitoring",
    "question": "Which monitoring stack is commonly used to visualize MongoDB metrics collected from exporters?",
    "options": [
      "Hadoop and Spark",
      "ELK Stack",
      "Kibana and Redis",
      "Prometheus and Grafana"
    ],
    "answer": 3,
    "explanation": "Prometheus collects metrics while Grafana provides dashboards and visualization.",
    "hint": "Popular observability stack."
  },
  {
    "id": 207,
    "difficulty": "medium",
    "category": "atlas",
    "question": "What is MongoDB Ops Manager primarily used for?",
    "options": [
      "Managing and monitoring MongoDB clusters on-premises",
      "Writing aggregation queries",
      "Client-side query optimization",
      "Data transformation pipelines"
    ],
    "answer": 0,
    "explanation": "Ops Manager provides automation, monitoring, and backup management for on-prem MongoDB deployments.",
    "hint": "Enterprise management platform."
  },
  {
    "id": 208,
    "difficulty": "hard",
    "category": "security",
    "question": "Which MongoDB feature encrypts data while it is stored on disk?",
    "options": [
      "TLS Encryption",
      "RBAC",
      "Encryption at Rest",
      "IP Whitelisting"
    ],
    "answer": 2,
    "explanation": "Encryption at Rest ensures data files are encrypted on disk to protect against unauthorized access.",
    "hint": "Disk-level encryption."
  },
  {
    "id": 209,
    "difficulty": "medium",
    "category": "security",
    "question": "What is the purpose of Role-Based Access Control (RBAC) in MongoDB?",
    "options": [
      "To compress database files",
      "To optimize queries",
      "To manage user permissions and access privileges",
      "To shard collections"
    ],
    "answer": 2,
    "explanation": "RBAC allows administrators to assign permissions to users based on defined roles.",
    "hint": "User privilege model."
  },
  {
    "id": 210,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is the purpose of 'capacity planning' for MongoDB clusters?",
    "options": [
      "Migrating databases automatically",
      "Writing queries faster",
      "Reducing the number of collections",
      "Estimating resource requirements such as storage, CPU, and memory for future workloads"
    ],
    "answer": 3,
    "explanation": "Capacity planning ensures the cluster can handle future workload growth without performance degradation.",
    "hint": "Future resource planning."
  },
  {
    "id": 211,
    "difficulty": "medium",
    "category": "devops",
    "question": "Why is MongoDB commonly integrated into CI/CD pipelines?",
    "options": [
      "To compress logs",
      "To automate testing, deployment, and schema updates",
      "To replace application servers",
      "To generate dashboards"
    ],
    "answer": 1,
    "explanation": "CI/CD pipelines automate application and database deployment processes.",
    "hint": "Automation pipeline."
  },
  {
    "id": 212,
    "difficulty": "hard",
    "category": "operations",
    "question": "Which process is responsible for the core database server functionality in MongoDB?",
    "options": [
      "mongoctl",
      "mongod",
      "mongos",
      "mongoagent"
    ],
    "answer": 1,
    "explanation": "mongod is the primary database server process responsible for handling data requests and storage.",
    "hint": "Main database daemon."
  },
  {
    "id": 213,
    "difficulty": "medium",
    "category": "infrastructure",
    "question": "In a sharded MongoDB cluster, which component stores metadata about the cluster?",
    "options": [
      "Shard Router",
      "Primary Node",
      "Config Servers",
      "Replica Manager"
    ],
    "answer": 2,
    "explanation": "Config Servers store metadata including chunk distribution and cluster configuration.",
    "hint": "Metadata storage."
  },
  {
    "id": 214,
    "difficulty": "hard",
    "category": "monitoring",
    "question": "Which metric is most important when diagnosing MongoDB query performance issues?",
    "options": [
      "Query execution time and documents examined",
      "Hostname configuration",
      "Operating system version",
      "Disk manufacturer"
    ],
    "answer": 0,
    "explanation": "Query performance is typically diagnosed by examining execution time and how many documents are scanned.",
    "hint": "Execution metrics."
  },
  {
    "id": 215,
    "difficulty": "medium",
    "category": "linux",
    "question": "Which operating system environment is most commonly used for production MongoDB deployments?",
    "options": [
      "macOS",
      "Windows Server",
      "Linux",
      "ChromeOS"
    ],
    "answer": 2,
    "explanation": "Most enterprise MongoDB deployments run on Linux due to stability and performance.",
    "hint": "Common server OS."
  },
  {
    "id": 216,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Why is sharding used in MongoDB?",
    "options": [
      "To reduce index size",
      "To encrypt data",
      "To distribute data across multiple servers for scalability",
      "To compress documents"
    ],
    "answer": 2,
    "explanation": "Sharding horizontally partitions data across multiple nodes to scale large datasets and workloads.",
    "hint": "Horizontal scaling."
  },
  {
    "id": 217,
    "difficulty": "medium",
    "category": "performance",
    "question": "Which operation helps analyze how MongoDB executes a query?",
    "options": [
      "monitor()",
      "profile()",
      "trace()",
      "explain()"
    ],
    "answer": 3,
    "explanation": "The explain() method reveals query plans and execution statistics.",
    "hint": "Query plan analysis."
  },
  {
    "id": 218,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is the primary purpose of database governance in MongoDB environments?",
    "options": [
      "Improving network speed",
      "Reducing collection count",
      "Automating backups",
      "Establishing policies for schema design, security, and data lifecycle management"
    ],
    "answer": 3,
    "explanation": "Governance ensures consistent standards for schema design, access control, and compliance.",
    "hint": "Policy management."
  },
  {
    "id": 219,
    "difficulty": "medium",
    "category": "operations",
    "question": "Which MongoDB command is commonly used to check server status and resource usage?",
    "options": [
      "db.systemStats()",
      "db.monitor()",
      "db.clusterInfo()",
      "db.serverStatus()"
    ],
    "answer": 3,
    "explanation": "serverStatus() returns detailed statistics about the running MongoDB instance.",
    "hint": "Server health command."
  },
  {
    "id": 220,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the main advantage of designing MongoDB schemas based on application query patterns?",
    "options": [
      "It eliminates replication",
      "It prevents indexing",
      "It increases document size",
      "It optimizes read performance by reducing joins"
    ],
    "answer": 3,
    "explanation": "MongoDB schema design typically follows query patterns to minimize joins and improve performance.",
    "hint": "Query-driven schema design."
  },
  {
    "id": 241,
    "difficulty": "medium",
    "category": "replication",
    "question": "What is the function of the MongoDB 'oplog'?",
    "options": [
      "Tracks user authentication events",
      "Records all write operations for replication",
      "Stores index metadata",
      "Stores query execution plans"
    ],
    "answer": 1,
    "explanation": "The oplog (operations log) records all changes to the database so secondary nodes can replicate them.",
    "hint": "Replication log."
  },
  {
    "id": 242,
    "difficulty": "hard",
    "category": "replication",
    "question": "Why is oplog size important in a MongoDB replica set?",
    "options": [
      "It determines query performance",
      "It limits document size",
      "It controls index rebuild speed",
      "It defines how long secondaries can fall behind before requiring resync"
    ],
    "answer": 3,
    "explanation": "A larger oplog allows secondaries to stay in sync even if replication lag occurs.",
    "hint": "Replication buffer."
  },
  {
    "id": 243,
    "difficulty": "medium",
    "category": "consistency",
    "question": "What does 'writeConcern: majority' guarantee?",
    "options": [
      "Writes are executed faster",
      "Writes are stored on disk immediately",
      "Writes are stored only on the primary node",
      "Writes are acknowledged after being committed to a majority of replica set members"
    ],
    "answer": 3,
    "explanation": "Majority write concern ensures durability by confirming replication to most nodes.",
    "hint": "Durability guarantee."
  },
  {
    "id": 244,
    "difficulty": "medium",
    "category": "consistency",
    "question": "What does 'readConcern: majority' ensure?",
    "options": [
      "Reads come only from secondaries",
      "Reads only return committed data replicated to a majority of nodes",
      "Reads bypass indexes",
      "Reads are faster"
    ],
    "answer": 1,
    "explanation": "Majority read concern ensures that returned data is fully committed across the replica set.",
    "hint": "Consistent reads."
  },
  {
    "id": 245,
    "difficulty": "hard",
    "category": "transactions",
    "question": "MongoDB multi-document ACID transactions were introduced in which version?",
    "options": [
      "3.6",
      "3.2",
      "4.0",
      "5.0"
    ],
    "answer": 2,
    "explanation": "MongoDB 4.0 introduced multi-document ACID transactions for replica sets.",
    "hint": "Major architectural upgrade."
  },
  {
    "id": 246,
    "difficulty": "medium",
    "category": "performance",
    "question": "Which command helps analyze the execution plan of a MongoDB query?",
    "options": [
      "db.analyze()",
      "db.profile()",
      "db.trace()",
      "explain()"
    ],
    "answer": 3,
    "explanation": "The explain() method shows how MongoDB executes queries and whether indexes are used.",
    "hint": "Query planner."
  },
  {
    "id": 247,
    "difficulty": "hard",
    "category": "indexing",
    "question": "What is the purpose of a 'compound index' in MongoDB?",
    "options": [
      "To replicate documents",
      "To index multiple fields within a single index structure",
      "To compress collections",
      "To encrypt data"
    ],
    "answer": 1,
    "explanation": "Compound indexes support queries that filter or sort on multiple fields.",
    "hint": "Multi-field index."
  },
  {
    "id": 248,
    "difficulty": "medium",
    "category": "monitoring",
    "question": "Which MongoDB command returns detailed server metrics including memory usage and connections?",
    "options": [
      "db.systemStats()",
      "db.serverStatus()",
      "db.health()",
      "db.clusterStatus()"
    ],
    "answer": 1,
    "explanation": "serverStatus() provides detailed runtime statistics for monitoring.",
    "hint": "Server health metrics."
  },
  {
    "id": 249,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the primary purpose of MongoDB Config Servers in a sharded cluster?",
    "options": [
      "Handle client connections",
      "Store cluster metadata and chunk distribution",
      "Replicate documents",
      "Store user credentials"
    ],
    "answer": 1,
    "explanation": "Config servers store metadata about shard distribution and cluster configuration.",
    "hint": "Cluster metadata."
  },
  {
    "id": 250,
    "difficulty": "medium",
    "category": "scaling",
    "question": "What scaling strategy does MongoDB sharding implement?",
    "options": [
      "Horizontal scaling",
      "Vertical scaling",
      "Memory scaling",
      "Index scaling"
    ],
    "answer": 0,
    "explanation": "Sharding distributes data across multiple servers to scale horizontally.",
    "hint": "Scale-out architecture."
  },
  {
    "id": 251,
    "difficulty": "hard",
    "category": "troubleshooting",
    "question": "What is the most common cause of slow MongoDB queries in large collections?",
    "options": [
      "Replica set elections",
      "Too many collections",
      "Missing or inefficient indexes",
      "Large BSON documents"
    ],
    "answer": 2,
    "explanation": "Missing indexes force MongoDB to perform collection scans, which degrade performance.",
    "hint": "Query optimization."
  },
  {
    "id": 252,
    "difficulty": "medium",
    "category": "devops",
    "question": "Which containerization platform is commonly used to run MongoDB in modern DevOps environments?",
    "options": [
      "Docker",
      "Airflow",
      "Hadoop",
      "Apache Spark"
    ],
    "answer": 0,
    "explanation": "Docker containers are commonly used to package and deploy MongoDB environments.",
    "hint": "Container platform."
  },
  {
    "id": 253,
    "difficulty": "hard",
    "category": "security",
    "question": "Which MongoDB security feature encrypts database files stored on disk?",
    "options": [
      "Audit Logging",
      "Encryption at Rest",
      "TLS",
      "RBAC"
    ],
    "answer": 1,
    "explanation": "Encryption at Rest protects stored data from unauthorized access to disk storage.",
    "hint": "Disk encryption."
  },
  {
    "id": 254,
    "difficulty": "medium",
    "category": "monitoring",
    "question": "Which tool provides a graphical interface for managing MongoDB databases?",
    "options": [
      "Mongo Shell",
      "MongoDB Compass",
      "mongostat",
      "mongotop"
    ],
    "answer": 1,
    "explanation": "MongoDB Compass is the official GUI for exploring and managing MongoDB data.",
    "hint": "Visual management tool."
  },
  {
    "id": 255,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Why is embedding related data within a document often preferred in MongoDB?",
    "options": [
      "To eliminate all indexes",
      "To simplify replication",
      "To reduce joins and improve read performance",
      "To decrease storage requirements"
    ],
    "answer": 2,
    "explanation": "Embedding related data reduces the need for joins and improves query performance.",
    "hint": "Document modeling."
  },
  {
    "id": 256,
    "difficulty": "medium",
    "category": "backup",
    "question": "Which MongoDB tool is used to restore BSON backups created by mongodump?",
    "options": [
      "mongostat",
      "mongoimport",
      "mongorestore",
      "mongoexport"
    ],
    "answer": 2,
    "explanation": "mongorestore restores BSON backup files generated by mongodump.",
    "hint": "Backup restore tool."
  },
  {
    "id": 257,
    "difficulty": "hard",
    "category": "performance",
    "question": "What is the main advantage of index intersection in MongoDB?",
    "options": [
      "Balancing shards",
      "Encrypting indexes",
      "Combining multiple indexes to satisfy a query",
      "Reducing storage usage"
    ],
    "answer": 2,
    "explanation": "Index intersection allows MongoDB to combine multiple indexes to resolve a query.",
    "hint": "Multiple indexes working together."
  },
  {
    "id": 258,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Which MongoDB storage engine is the default in modern versions?",
    "options": [
      "MMAPv1",
      "InnoDB",
      "WiredTiger",
      "RocksDB"
    ],
    "answer": 2,
    "explanation": "WiredTiger is the default storage engine offering compression and concurrency improvements.",
    "hint": "Modern engine."
  },
  {
    "id": 259,
    "difficulty": "hard",
    "category": "troubleshooting",
    "question": "What does high replication lag usually indicate?",
    "options": [
      "Index rebuild",
      "Secondaries unable to apply oplog operations quickly enough",
      "Primary node failure",
      "Network encryption errors"
    ],
    "answer": 1,
    "explanation": "Replication lag occurs when secondary nodes cannot process oplog updates fast enough.",
    "hint": "Replication delay."
  },
  {
    "id": 260,
    "difficulty": "medium",
    "category": "operations",
    "question": "Which Linux command is commonly used to check MongoDB process resource usage?",
    "options": [
      "ls",
      "pwd",
      "top",
      "mkdir"
    ],
    "answer": 2,
    "explanation": "The 'top' command helps monitor CPU and memory usage of MongoDB processes.",
    "hint": "Process monitoring."
  },
  {
    "id": 261,
    "difficulty": "hard",
    "category": "troubleshooting",
    "question": "A MongoDB cluster suddenly experiences high query latency. What is the FIRST thing an engineer should analyze?",
    "options": [
      "Server hardware vendor",
      "Application UI logs",
      "Database collection names",
      "Query execution plans and indexes"
    ],
    "answer": 3,
    "explanation": "Slow queries are most commonly caused by inefficient indexes or full collection scans.",
    "hint": "Start with query plans."
  },
  {
    "id": 262,
    "difficulty": "hard",
    "category": "sharding",
    "question": "A shard in a MongoDB cluster is receiving significantly more traffic than others. What is the most likely cause?",
    "options": [
      "Network encryption overhead",
      "Unbalanced shard key distribution",
      "Replica set elections",
      "MongoDB version mismatch"
    ],
    "answer": 1,
    "explanation": "Poor shard key selection can cause uneven distribution, resulting in hot shards.",
    "hint": "Shard key issue."
  },
  {
    "id": 263,
    "difficulty": "medium",
    "category": "performance",
    "question": "What MongoDB feature allows automatic balancing of data across shards?",
    "options": [
      "Aggregator",
      "Router",
      "Balancer",
      "Cluster Monitor"
    ],
    "answer": 2,
    "explanation": "The balancer redistributes chunks between shards to maintain even data distribution.",
    "hint": "Background distribution process."
  },
  {
    "id": 264,
    "difficulty": "hard",
    "category": "replication",
    "question": "If a secondary node falls too far behind the primary and the oplog no longer contains the required operations, what happens?",
    "options": [
      "Full initial sync is required",
      "Automatic reindexing",
      "Primary restarts",
      "Replication stops permanently"
    ],
    "answer": 0,
    "explanation": "If oplog entries are missing, the secondary must perform a full initial synchronization.",
    "hint": "Complete resync."
  },
  {
    "id": 265,
    "difficulty": "medium",
    "category": "scaling",
    "question": "What is the main advantage of horizontal scaling in MongoDB?",
    "options": [
      "Adding more servers to distribute workload",
      "Reducing memory usage",
      "Compressing data automatically",
      "Reducing replication overhead"
    ],
    "answer": 0,
    "explanation": "Horizontal scaling distributes workload across multiple nodes.",
    "hint": "Scale-out."
  },
  {
    "id": 266,
    "difficulty": "hard",
    "category": "performance",
    "question": "Which index type improves performance for queries filtering on fields that exist in only some documents?",
    "options": [
      "Compound index",
      "Hashed index",
      "Wildcard index",
      "Sparse index"
    ],
    "answer": 3,
    "explanation": "Sparse indexes include only documents containing the indexed field.",
    "hint": "Indexes missing fields."
  },
  {
    "id": 267,
    "difficulty": "medium",
    "category": "security",
    "question": "What is the primary purpose of MongoDB audit logging?",
    "options": [
      "Compress logs",
      "Improve indexing",
      "Track security-related database actions",
      "Speed up queries"
    ],
    "answer": 2,
    "explanation": "Audit logs record security-relevant operations such as authentication and role changes.",
    "hint": "Security tracking."
  },
  {
    "id": 268,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Which design strategy is recommended when modeling large one-to-many relationships in MongoDB?",
    "options": [
      "Referencing documents with ObjectIDs",
      "Removing relationships entirely",
      "Embedding all child documents indefinitely",
      "Storing everything in one collection"
    ],
    "answer": 0,
    "explanation": "Large one-to-many relationships are better modeled using references to avoid huge documents.",
    "hint": "Avoid document bloat."
  },
  {
    "id": 269,
    "difficulty": "medium",
    "category": "operations",
    "question": "Which MongoDB command displays current operations running on the server?",
    "options": [
      "db.serverOps()",
      "db.currentOp()",
      "db.operations()",
      "db.activeQueries()"
    ],
    "answer": 1,
    "explanation": "db.currentOp() shows currently running database operations.",
    "hint": "Live operations."
  },
  {
    "id": 270,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Why are Config Servers deployed as a replica set in a MongoDB sharded cluster?",
    "options": [
      "To compress metadata",
      "To store application data",
      "To increase write speed",
      "To ensure metadata redundancy and availability"
    ],
    "answer": 3,
    "explanation": "Config servers hold critical cluster metadata and must remain highly available.",
    "hint": "Metadata safety."
  },
  {
    "id": 271,
    "difficulty": "medium",
    "category": "performance",
    "question": "Which MongoDB feature allows partial indexing of documents based on a filter condition?",
    "options": [
      "Compound index",
      "TTL index",
      "Partial index",
      "Cluster index"
    ],
    "answer": 2,
    "explanation": "Partial indexes only index documents that match a specified filter condition.",
    "hint": "Filtered index."
  },
  {
    "id": 272,
    "difficulty": "hard",
    "category": "transactions",
    "question": "Which limitation historically existed before MongoDB introduced distributed transactions?",
    "options": [
      "Multi-document atomicity was not supported",
      "Single document writes were not atomic",
      "Replication was not supported",
      "Indexes were unavailable"
    ],
    "answer": 0,
    "explanation": "Before MongoDB 4.0, atomicity was limited to single documents.",
    "hint": "Document-level atomicity."
  },
  {
    "id": 273,
    "difficulty": "medium",
    "category": "devops",
    "question": "Which orchestration platform is widely used to run MongoDB clusters in containerized environments?",
    "options": [
      "Kubernetes",
      "Airflow",
      "Jenkins",
      "Spark"
    ],
    "answer": 0,
    "explanation": "Kubernetes is commonly used to orchestrate containerized MongoDB deployments.",
    "hint": "Container orchestration."
  },
  {
    "id": 274,
    "difficulty": "hard",
    "category": "performance",
    "question": "Which situation most likely causes excessive disk I/O in MongoDB?",
    "options": [
      "Large number of collections",
      "Using aggregation pipelines",
      "Frequent collection scans without indexes",
      "Replica set configuration"
    ],
    "answer": 2,
    "explanation": "Collection scans force MongoDB to read entire collections from disk.",
    "hint": "Missing indexes."
  },
  {
    "id": 275,
    "difficulty": "medium",
    "category": "operations",
    "question": "Which MongoDB shell command lists all databases in the current cluster?",
    "options": [
      "db.list()",
      "db.show()",
      "show databases",
      "show collections"
    ],
    "answer": 2,
    "explanation": "show databases lists all databases available in the cluster.",
    "hint": "Database listing."
  },
  {
    "id": 276,
    "difficulty": "easy",
    "category": "crud",
    "question": "When performing a find() query with multiple field-value pairs like { name: 'Alex', age: 27 }, which logical operator is applied by default?",
    "options": [
      "$or",
      "$nor",
      "$not",
      "$and"
    ],
    "answer": 3,
    "explanation": "MongoDB implicitly uses a logical AND when multiple field-value pairs are listed in a single query filter document.",
    "hint": "It is an implicit behavior for comma-separated pairs."
  },
  {
    "id": 277,
    "difficulty": "medium",
    "category": "crud",
    "question": "What does the db.collection.findOne() method return if no document matches the specified criteria?",
    "options": [
      "undefined",
      "An empty array",
      "An empty document",
      "null"
    ],
    "answer": 3,
    "explanation": "Unlike find(), which returns a cursor (even if empty), findOne() returns the actual document if found, or null if no match exists.",
    "hint": "Think about the return type for a single missing object."
  },
  {
    "id": 278,
    "difficulty": "easy",
    "category": "operations",
    "question": "In the .sort() method, which value is used to specify that the results should be returned in descending order?",
    "options": [
      "0",
      "-1",
      "1",
      "desc"
    ],
    "answer": 1,
    "explanation": "In MongoDB sorting, 1 is used for ascending order and -1 is used for descending order.",
    "hint": "Positive for up, negative for down."
  },
  {
    "id": 279,
    "difficulty": "medium",
    "category": "crud",
    "question": "When using Projection to return specific fields, which field is included by default unless it is explicitly set to 0?",
    "options": [
      "The first field in the document",
      "email",
      "_id",
      "name"
    ],
    "answer": 2,
    "explanation": "The _id field is always included in the result set by default. You must explicitly set it to 0 or false to exclude it.",
    "hint": "It is the unique primary key."
  },
  {
    "id": 280,
    "difficulty": "hard",
    "category": "crud",
    "question": "Which query correctly finds documents where the age is between 25 and 35, inclusive?",
    "options": [
      "{ age: { $between: [25, 35] } }",
      "{ $or: [{ age: 25 }, { age: 35 }] }",
      "{ age: { $gte: 25, $lte: 35 } }",
      "{ age: { $gt: 25, $lt: 35 } }"
    ],
    "answer": 2,
    "explanation": "To specify a range, you combine comparison operators like $gte (greater than or equal) and $lte (less than or equal) for the same field.",
    "hint": "Use 'Greater Than or Equal' and 'Less Than or Equal'."
  },
  {
    "id": 281,
    "difficulty": "medium",
    "category": "crud",
    "question": "What is the primary difference between the $ne and $not operators?",
    "options": [
      "$ne matches only numbers, while $not matches strings",
      "$ne is a comparison operator for inequality, while $not is a logical operator used to negate other operators",
      "There is no difference; they are interchangeable",
      "$not can only be used with regular expressions"
    ],
    "answer": 1,
    "explanation": "$ne is used to find values not equal to a specific value. $not is a logical operator used to negate a query expression (e.g., matching documents that do not match a regex or range).",
    "hint": "One compares values, the other negates expressions."
  },
  {
    "id": 282,
    "difficulty": "hard",
    "category": "sharding",
    "question": "What is the main risk of choosing a monotonically increasing shard key (e.g., timestamp) in MongoDB?",
    "options": [
      "Data compression failures",
      "Hot shard problem due to uneven write distribution",
      "Replica lag",
      "Index corruption"
    ],
    "answer": 1,
    "explanation": "Monotonically increasing shard keys cause new writes to target the same shard, creating a hot shard bottleneck.",
    "hint": "Single shard overload."
  }
];

// --- TOP 100 INTERVIEW INDICES ---
// These 0-based indices point to unique, high-value questions from the bank for rapid interview prep.
// Covering: CRUD, Aggregation, Indexing (ESR), Sharding, and Schema Design.
const hotsQuestions = [
    1,
    2,
    3,
    4,
    15,
    20,
    25,
    30,
    40,
    45,
    142,
    212,
    213,
    220,
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
    120,
    125,
    130,
    131,
    132,
    133,
    134,
    140,
    8,
    9,
    10,
    107,
    108,
    135,
    143,
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
    200,
    205,
    210,
    215,
    211,
    214,
    216,
    217,
    218,
    219,
    241,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    250,
    251,
    252,
    253,
    141,
    254,
    255,
    256,
    257,
    258,
    259,
    260,
    261,
    262,
    263,
    264,
    265,
    266,
    267,
    13,
    12,
    14,
    17,
    18
];
