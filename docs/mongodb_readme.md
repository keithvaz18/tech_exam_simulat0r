# 🚀 MongoDB Interview & Architecture README

![MongoDB Quick Recall Mind Map](../assets/mongoDB_quick_recall_mind_map.png)

[Open the answer PDF](mongoDB_answers.pdf)


![17856386555678528180101880048401](./assets/MongoDB.png)
<img width="1024" height="1536" alt="17856386555678528180101880048401" src="../assets/MongoDB.png" />

---

## Consolidated Mind Map

```text
MONGODB
  ├─ Question domains
  │   ├─ scenarios
  │   ├─ aggregation
  │   ├─ performance
  │   ├─ sharding
  │   ├─ security
  │   ├─ replication
  │   ├─ crud
  │   ├─ storage
  │   ├─ basics
  │   ├─ indexing
  │   ├─ operations
  │   ├─ atlas
  │   ├─ architecture
  │   ├─ schema design
  │   └─ + 13 additional bank categories
  └─ Decision loop
      ├─ Trigger: identify the scenario constraint
      ├─ Answer: recall the source-backed technical choice
      ├─ Reason: connect choice to behavior or requirement
      └─ Trap: reject a distractor that conflicts with the requirement
```

## Four-keyword recall cards

| Question trigger (max 4) | Answer recall (max 4) | Reason — why it works | Trap — what to reject |
|---|---|---|---|
| Read · Concern · want · perform | local | readConcern: 'local' returns the most recent data on the specific member being queried, without ensuring it's durable across the set. | Trap: linearizable |
| merge · stage · introduced | Writes · aggregation · collection · updates | $merge is more powerful than $out because it can update existing documents rather than just replacing the whole collection. | Trap: Merges shards |
| COLLSCAN · output · explain · plan | MongoDB · perform · collection · scan | COLLSCAN stands for Collection Scan. It is generally inefficient for large datasets as MongoDB must inspect every document. | Trap: The query used a collection-level index |
| command · run · shard · collection | Correct · Implementation | To shard a collection, you must first enable sharding on the database, ensure an index exists on the shard key, and then run shardCollection. | Trap: sh.shardCollection() |
| MongoDB · role-based · RBAC · mechanism | Users · Roles | MongoDB uses roles (like readWrite, dbAdmin) assigned to users to determine what actions they can perform on specific databases. | Trap: IP Whitelisting |
| Rollback · Replica · Set · happens | reverts · write · operations · replicated | Rollbacks occur when a member rejoins a set after an election and finds it has writes that the current Primary does not have. | Trap: The cluster switches to a different version of MongoDB |
| difference · operators | comparison · operator · inequality · logical | $ne is used to find values not equal to a specific value. $not is a logical operator used to negate a query expression (e.g., matching documents that do not match a regex or range). | Trap: $not can only be used with regular expressions |
| WiredTiger · handle · disk · space | keeps · space · marks · available | Deleted space is reused internally. To shrink the physical file size, you usually need to run the 'compact' command or resync. | Trap: It deletes the collection file |

## How to use this map

1. Read the trigger and identify the requirement or failure mode in the scenario.
2. Recall the answer keywords before looking at the explanation.
3. State why the answer works using the reason column.
4. Eliminate the trap because it conflicts with the scenario or source explanation.

## Source coverage

- Question bank: `questionBank_mongoDB.js`
- Questions in source bank: **263**
- Consolidated recall cards: **8**
- Recall cards are representative study aids derived from the supplied question bank, not an official exam blueprint.

---

### 📘 Quick Reference (Distributed Documents + High Availability + Scalability)

This is your **Day 1 (Schema Design) + Day 2 (Operations/Scaling)** MongoDB cheat sheet for senior technical interviews.

---

# 🧠 0. MongoDB Mental Model (Core Flow)

```text
Application → Driver → Mongos (if sharded) → Primary (Replica Set)
                                               ↓
                                      Oplog → Secondaries
```

💡 **Interview Insight**

* MongoDB = **Distributed Document Store** (BSON)
* Think in:
    * **Replica Set = High Availability**
    * **Sharding = Horizontal Scalability**
    * **Oplog = The "Source of Truth" for replication**

---

# ⚙️ 1. Infrastructure & Cluster Architecture

## 🔑 High Availability (Replica Sets)

```text
Primary (Write/Read) ↔ Secondaries (Read/Async Sync)
Heartbeats (2s) → Election (if Primary fails)
Quorum → (n/2 + 1) nodes required for election
```

💡 **Say:**
* A Replica Set usually has 3 nodes. If the primary dies, an election occurs in seconds.
* **Arbiter:** A node that only votes and doesn't hold data (cost-saving, but use sparingly).

---

## 🔑 Horizontal Scaling (Sharding)

* **Shard Key:** The most critical decision in Mongo architecture.
* **Mongos:** The query router.
* **Config Servers:** Store the "metadata" (which data is on which shard).

---

## 🔑 Connectivity & Security

* **SRV Connection Strings:** Enables seamless cluster changes without updating app configs.
* **RBAC:** Role-Based Access Control (standard for enterprise).
* **Encryption at Rest:** WiredTiger encryption or KMS integration.

---

# 🧩 2. Data Distribution & Storage

## 🔑 Storage Engine: WiredTiger

* **Document-Level Locking:** High concurrency (unlike the old MMAPv1 global lock).
* **Compression:** Snappy (default) or Zstd (better ratio).
* **WiredTiger Cache:** Usually 50% of RAM minus 1GB.

---

## 🔁 Consistency & Durability (The "Concerns")

| Setting | Impact |
| :--- | :--- |
| **WriteConcern: 1** | Fast, but risk of data loss on crash. |
| **WriteConcern: majority** | Safe; waits for acknowledgement from >50% of nodes. |
| **ReadPreference** | `primary` (consistent) vs `secondaryPreferred` (stale but fast). |
| **ReadConcern: majority** | Prevents reading data that might be rolled back. |

---

# 🚨 3. Chaos & Failure Patterns (HIGH SIGNAL)

## 🔥 Oplog Window Overrun

```text
Symptom: Secondary falls "out of sync" and can't recover.
Cause: Write volume > Oplog size; old entries deleted before secondary could read them.
```
✅ **Solution:** Increase Oplog size (Dynamic Oplog) or use `Initial Sync`.

---

## 🔥 Stale Reads (Read-Your-Own-Writes)

```text
Symptom: App writes data, immediately reads from Secondary, but data is "missing."
Cause: Replication lag.
```
✅ **Solution:** Use `ReadPreference: primary` or Causal Consistency (Session Tokens).

---

## 🔥 Split Brain / Election Cycles

```text
Symptom: Cluster constantly electing new leaders; no one stays Primary.
Cause: Network partitions or high latency between nodes.
```
✅ **Solution:** Check `heartbeatTimeout` and network stability between AZs.

---

## 🔥 The "Jumbo Chunk" (Sharding Failure)

```text
Symptom: One shard is 90% full, others are 10%; Mongo stops moving data.
Cause: Poor Shard Key (low cardinality). Too many documents share the same key.
```
✅ **Solution:** Refine Shard Key (Hashed Shard Keys) or use a Compound Shard Key.

---

# ⚡ 4. Performance & Tuning

## 🔑 The "ESR" Rule for Indexing

In interviews, if asked how to build an index, follow **ESR**:
1.  **E**quality: Fields you filter by (`status: "active"`).
2.  **S**ort: Fields you sort by (`timestamp: -1`).
3.  **R**ange: Fields you do range queries on (`price: { $gt: 100 }`).

---

## 🔑 Query Profiling

* **Explain Plan:** Look for `COLLSCAN` (bad - full table scan) vs `IXSCAN` (good - index scan).
* **Covered Queries:** When the index contains *all* requested fields; Mongo never touches the disk.

---

# 🔄 5. Multi-Document Transactions

* **ACID Support:** Since v4.0 (Replica Sets) and v4.2 (Shards).
* **Performance Hit:** Use sparingly. If you need 10-way joins/transactions constantly, your schema design is likely wrong for NoSQL.

---

# 🚨 MongoDB Failure Debugging Scenarios

### 🔥 1. "Too Many Connections" Error
* **Root Cause:** Application connection pooling not configured; or "Leaky" serverless functions.
* **Fix:** Use `maxPoolSize` in driver; implement a connection proxy like Mongos or Atlas Proxy.

### 🔥 2. Disk Space Exhaustion (Sudden)
* **Root Cause:** High volume of `updates` creating "fragmentation" or massive log files.
* **Fix:** Run `compact` command or perform an `Initial Sync` on a fresh node.

### 🔥 3. CPU Spikes to 100%
* **Root Cause:** An unindexed query suddenly hitting a collection with millions of records.
* **Fix:** Kill the op via `db.currentOp()`, then add the missing index via `createIndex({field: 1}, {background: true})`.

---

# 🧠 Ultimate Debug Strategy (Architect's View)

```text
1. Check Mongostat / Mongotop (Identify hot collection).
2. Analyze Slow Query Logs (Profiling level 1 or 2).
3. Validate Index Usage (Explain Plan).
4. Check Replication Lag (rs.status()).
5. Monitor WiredTiger Cache (Dirty pages / Eviction).
```

---

# 🎯 Final Interview One-Liner

> "MongoDB is a distributed document store optimized for developer velocity and horizontal scale. I ensure its reliability by picking high-cardinality shard keys, enforcing the ESR indexing rule, and balancing write/read concerns to match the specific consistency requirements of the business logic."

---

### 📎 Clipboard Sections

#### **Infrastructure**
```markdown
- Replica Sets → HA via Primary/Secondary election (Quorum n/2 + 1)
- Sharding → Horizontal scale via Mongos (Router) + Config Servers
- Shard Key → Critical for data distribution; must have high cardinality
- WiredTiger → Default storage engine; document-level locking + Snappy compression
```

#### **Consistency & Performance**
```markdown
- WriteConcern: majority → Ensures durability across cluster
- ReadConcern: majority → Avoids reading data that could be rolled back
- ESR Rule → Indexing strategy: Equality, then Sort, then Range
- Explain Plan → IXSCAN (Good) vs COLLSCAN (Bad/Full Table Scan)
- Covered Query → Performance gold; result returned entirely from Index
```

#### **Common Failure Handling**
```markdown
- Oplog Window Overrun → Lagging secondaries; fix by increasing Oplog size
- Jumbo Chunks → Shard key failure; fix by refining/refactoring Shard Key
- Replication Lag → Causes stale reads; fix via Causal Consistency or Primary reads
- Poison Query → Unindexed read spikes CPU; fix via killOp + background index
```

To round out your **MongoDB Architect/Tech Lead** preparation, here is the technical appendix. This covers the high-density "buzzwords" that signal senior-level experience and the exact code snippets you should be able to visualize (or whiteboard) during an interview.

## 📚 Appendix: Rapid Recall Keywords

Use these terms to demonstrate depth during "System Design" or "Deep Dive" rounds.

| Keyword | Technical Context | Interview "Value Add" |
| :--- | :--- | :--- |
| **BSON** | Binary JSON | Mention its support for specialized types like `Date` and `Decimal128` which standard JSON lacks. |
| **Causal Consistency** | Session Guarantees | Explain how it ensures "Read-your-own-writes" even on distributed secondaries using a cluster time. |
| **Write Ahead Log (WAL)** | Durability | In MongoDB, this is the **Oplog**. It’s the mechanism for point-in-time recovery and replication. |
| **Cardinality** | Sharding | High cardinality (unique values) in a shard key prevents "Jumbo Chunks" and "Hot Partitions." |
| **Read/Write Concerns** | CAP Theorem | The "Knobs" you turn to balance between Consistency (CP) and Availability (AP). |
| **Aggregation Pipeline** | Data Processing | The framework for multi-stage transformations (`$match` → `$group` → `$sort`). |
| **Change Streams** | Event-Driven | Real-time stream of database changes; essential for microservices and cache invalidation. |
| **TTL Indexes** | Data Retention | Automatically expires data (e.g., session tokens or logs) after a set time. |

---

## 💻 Essential Code Snippets 

### 1. The "ESR" Index Strategy
When an interviewer asks, "How do you optimize this slow query?", provide this structure.

```javascript
// Rule: Equality -> Sort -> Range
// Query: Find active users, sort by lastLogin, with age > 21
db.users.createIndex({
  "status": 1,     // Equality (E)
  "lastLogin": -1, // Sort (S)
  "age": 1         // Range (R)
});
```

### 2. ACID Transactions (v4.0+)
Show that you know how to handle multi-document consistency safely.

```javascript
const session = db.getMongo().startSession();
session.startTransaction({
  readConcern: { level: 'snapshot' },
  writeConcern: { w: 'majority' }
});

try {
  const coll1 = session.getDatabase("bank").getCollection("savings");
  const coll2 = session.getDatabase("bank").getCollection("checking");

  coll1.updateOne({ userId: 1 }, { $inc: { balance: -100 } });
  coll2.updateOne({ userId: 1 }, { $inc: { balance: 100 } });

  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
} finally {
  session.endSession();
}
```

### 3. Aggregation Pipeline (Architectural Power)
Use this to demonstrate how you handle complex business logic on the database side.

```javascript
db.orders.aggregate([
  { $match: { status: "completed" } }, // Stage 1: Filter
  { $group: {                          // Stage 2: Summarize
      _id: "$customer_id", 
      totalSpent: { $sum: "$amount" },
      itemCount: { $count: {} }
  }},
  { $sort: { totalSpent: -1 } },       // Stage 3: Order
  { $limit: 10 }                       // Stage 4: Top 10
]);
```

### 4. Connection String (The "SRV" Protocol)
Explain why this is better than listing individual IPs.

```bash
# DNS Seed List (SRV) automatically discovers all nodes in the replica set
mongodb+srv://user:password@cluster-name.mongodb.net/myDatabase?retryWrites=true&w=majority
```

---

## 🎯 Final Tech Lead Check-Off
* **Query Profiling:** Always mention `db.collection.explain("executionStats")` to verify if your index is actually being used.
* **Schema Design:** Always mention "Data that is accessed together should be stored together" (Embedding vs. Referencing).
* **Failover:** Remind them that while elections are automatic, the application driver must handle the `NotWritablePrimary` exception with retry logic.
