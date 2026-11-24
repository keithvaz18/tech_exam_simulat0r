/* ======================================================
   ENTERPRISE ARCHITECTURE MASTER QUESTION BANK
   Total Target: 550+ MCQs
   ====================================================== */

const questionBank = [
  {
    "id": 1,
    "difficulty": "easy",
    "category": "togaf",
    "question": "In the TOGAF ADM, which phase is responsible for establishing the Architecture Capability and defining the 'where, what, why, who, and how' of the architecture effort?",
    "options": [
      "Preliminary Phase",
      "Phase A: Architecture Vision",
      "Phase H: Architecture Change Management",
      "Requirements Management"
    ],
    "answer": 0,
    "explanation": "The Preliminary Phase is where the organization defines its architecture footprint, selects frameworks, and establishes the architecture capability.",
    "hint": "It happens before Phase A."
  },
  {
    "id": 2,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which TOGAF concept describes a view of the Architecture Repository that provides a way to classify architecture and solution artifacts as they evolve from generic to organization-specific?",
    "options": [
      "Governance Repository",
      "Enterprise Continuum",
      "Architecture Landscape",
      "Standards Information Base"
    ],
    "answer": 1,
    "explanation": "The Enterprise Continuum is a 'view' of the repository that classifies assets along a scale from Foundation to Organization-Specific.",
    "hint": "It deals with 'generic to specific' evolution."
  },
  {
    "id": 3,
    "difficulty": "hard",
    "category": "togaf",
    "question": "During Phase C (Information Systems Architectures), which is the TOGAF recommended sequence for developing Data and Application architectures?",
    "options": [
      "Either may come first, or they may be developed concurrently.",
      "Data Architecture must always come before Application Architecture.",
      "They must be developed only after Technology Architecture is finalized.",
      "Application Architecture must always come before Data Architecture."
    ],
    "answer": 0,
    "explanation": "TOGAF allows for flexibility; Data and Application architectures can be done in any order or in parallel depending on the project needs.",
    "hint": "Flexibility is key in Phase C."
  },
  {
    "id": 4,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the primary difference between an Architecture Building Block (ABB) and a Solution Building Block (SBB)?",
    "options": [
      "There is no difference; the terms are interchangeable.",
      "ABBs are only used in Phase B; SBBs are used in Phase D.",
      "ABBs are vendor-specific; SBBs are vendor-neutral.",
      "ABBs define capability requirements (the 'what'); SBBs define the implementation (the 'how')."
    ],
    "answer": 3,
    "explanation": "ABBs are logical/abstract representations of what is needed. SBBs are the physical components or products that implement that requirement.",
    "hint": "Think 'Logical vs. Physical'."
  },
  {
    "id": 5,
    "difficulty": "easy",
    "category": "togaf",
    "question": "Which ADM phase focuses on creating the first high-level 'pencil sketch' of the solution to gain stakeholder buy-in and define the scope?",
    "options": [
      "Phase G: Implementation Governance",
      "Phase A: Architecture Vision",
      "Preliminary Phase",
      "Phase E: Opportunities and Solutions"
    ],
    "answer": 1,
    "explanation": "Phase A: Architecture Vision is where the high-level vision and scope are defined and approved by stakeholders.",
    "hint": "Vision is the keyword."
  },
  {
    "id": 6,
    "difficulty": "medium",
    "category": "togaf",
    "question": "In TOGAF, what is the 'Architecture Requirements Management' process visually represented as in the ADM diagram?",
    "options": [
      "A step within Phase G.",
      "A central circle connected to every other phase.",
      "The starting point (the top circle).",
      "The ending point (the bottom circle)."
    ],
    "answer": 1,
    "explanation": "Requirements Management is at the center of the ADM because every phase both consumes and produces requirements.",
    "hint": "It is the hub of the wheel."
  },
  {
    "id": 7,
    "difficulty": "hard",
    "category": "togaf",
    "question": "When a project deviates from the defined architecture, which document is used to formally request a waiver or a change to the architecture?",
    "options": [
      "Architecture Governance Map",
      "Architecture Compliance Review",
      "Architecture Dispensation",
      "Architecture Contract"
    ],
    "answer": 2,
    "explanation": "An Architecture Dispensation is the formal mechanism to grant a project a 'pass' or waiver from complying with specific architecture standards.",
    "hint": "Sounds like 'permission to bypass'."
  },
  {
    "id": 8,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which component of the Architecture Repository contains the 'rules of the road' such as industry standards and internal policies?",
    "options": [
      "Architecture Landscape",
      "Governance Repository",
      "Standards Information Base (SIB)",
      "Reference Library"
    ],
    "answer": 2,
    "explanation": "The Standards Information Base (SIB) holds the standards that the architecture must comply with.",
    "hint": "SIB is for standards."
  },
  {
    "id": 9,
    "difficulty": "easy",
    "category": "togaf",
    "question": "Which ADM phase is primarily concerned with defining the 'Transition Architectures' (increments) required to reach the Target Architecture?",
    "options": [
      "Phase E: Opportunities and Solutions",
      "Phase G: Implementation Governance",
      "Phase F: Migration Planning",
      "Phase D: Technology Architecture"
    ],
    "answer": 2,
    "explanation": "Phase F: Migration Planning is where the detailed implementation and migration plan, including Transition Architectures, is finalized.",
    "hint": "Transition Planning happens here."
  },
  {
    "id": 10,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the main objective of Phase G: Implementation Governance?",
    "options": [
      "To update the business strategy.",
      "To ensure that the implementation project conforms to the defined architecture.",
      "To select the cloud provider.",
      "To design the database schema."
    ],
    "answer": 1,
    "explanation": "Phase G ensures that as the system is built, it stays true to the architecture defined in previous phases.",
    "hint": "Conformity and compliance."
  },
  {
    "id": 11,
    "difficulty": "easy",
    "category": "btabok",
    "question": "According to the IASA BTABoK, which of the 'Five Pillars' focuses on the architect's ability to manage conflict, negotiate, and lead people without direct authority?",
    "options": [
      "Business Technology Strategy",
      "Design",
      "Human Dynamics",
      "IT Environment"
    ],
    "answer": 2,
    "explanation": "Human Dynamics is the pillar that deals with soft skills, leadership, and interpersonal relationships within architecture.",
    "hint": "The 'People' pillar."
  },
  {
    "id": 12,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In the IASA BTABoK, 'Quality Attributes' are often referred to as 'Cross-Cutting Concerns'. Which of the following is an example of a Quality Attribute?",
    "options": [
      "Database Table for Orders",
      "System Scalability",
      "PDF Invoice Generator",
      "User Login Module"
    ],
    "answer": 1,
    "explanation": "Scalability is a Quality Attribute (non-functional requirement) that affects how the entire system performs.",
    "hint": "Think 'ilities'."
  },
  {
    "id": 13,
    "difficulty": "hard",
    "category": "btabok",
    "question": "Which IASA pillar is concerned with understanding the 'Value' of a technology solution in terms of ROI (Return on Investment) and business alignment?",
    "options": [
      "Business Technology Strategy",
      "IT Environment",
      "Design",
      "Quality Attributes"
    ],
    "answer": 0,
    "explanation": "Business Technology Strategy focuses on the financial and strategic value of technology to the business.",
    "hint": "Focuses on 'Business Value'."
  },
  {
    "id": 14,
    "difficulty": "medium",
    "category": "btabok",
    "question": "The 'IT Environment' pillar in BTABoK includes knowledge of which of the following?",
    "options": [
      "Coding standards and IDEs",
      "Governance, Infrastructure, and Asset Management",
      "Marketing strategies",
      "Stakeholder psychology"
    ],
    "answer": 1,
    "explanation": "The IT Environment pillar covers the technical landscape, including infrastructure, platform management, and operational governance.",
    "hint": "The 'Tech Context' pillar."
  },
  {
    "id": 15,
    "difficulty": "medium",
    "category": "btabok",
    "question": "Which role in IASA is described as being responsible for the architecture of a single project or product, often focusing on the 'Design' pillar most heavily?",
    "options": [
      "Business Architect",
      "Enterprise Architect",
      "Solution Architect",
      "Infrastructure Architect"
    ],
    "answer": 2,
    "explanation": "Solution Architects are typically focused on the end-to-end design of a specific solution or project.",
    "hint": "Focused on a specific 'solution'."
  },
  {
    "id": 16,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is the primary goal of the 'Design' pillar in the BTABoK?",
    "options": [
      "To manage the project schedule.",
      "To produce architecture artifacts that justify and record design decisions and trade-offs.",
      "To create visually appealing UI/UX only.",
      "To write the source code for the application."
    ],
    "answer": 1,
    "explanation": "The Design pillar is about the methodology and techniques used to create, record, and communicate architectural decisions.",
    "hint": "Decisions and trade-offs."
  },
  {
    "id": 17,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In IASA terminology, 'Trade-off Analysis' is a critical skill. Which pillar does this primarily belong to?",
    "options": [
      "Design",
      "Human Dynamics",
      "Quality Attributes",
      "Business Technology Strategy"
    ],
    "answer": 0,
    "explanation": "Trade-off analysis is the core of the Design pillar, where architects weigh different options to find the best balance of quality and cost.",
    "hint": "Evaluating 'A vs. B'."
  },
  {
    "id": 18,
    "difficulty": "medium",
    "category": "btabok",
    "question": "Which of the following describes the IASA concept of 'Architecture Engagement'?",
    "options": [
      "The process of getting married to a technology.",
      "A technical meeting to review code.",
      "The contract signed with a software vendor.",
      "The structured way architects interact with stakeholders to deliver value."
    ],
    "answer": 3,
    "explanation": "Engagement refers to the lifecycle and methods through which architects provide their services to the organization.",
    "hint": "Interaction with the business."
  },
  {
    "id": 19,
    "difficulty": "medium",
    "category": "btabok",
    "question": "According to BTABoK, what should be the result of every major architectural decision?",
    "options": [
      "A 100-page word document.",
      "A new Jira ticket.",
      "A formal Decision Record (Log) explaining the rationale and trade-offs.",
      "An email to the CEO."
    ],
    "answer": 2,
    "explanation": "Capturing decision records is a fundamental best practice to ensure traceability and understanding of why choices were made.",
    "hint": "ADR (Architecture Decision Record)."
  },
  {
    "id": 20,
    "difficulty": "easy",
    "category": "btabok",
    "question": "Which IASA pillar would handle a scenario where an architect needs to present a business case for migrating to a serverless architecture?",
    "options": [
      "Design",
      "Business Technology Strategy",
      "Quality Attributes",
      "Human Dynamics"
    ],
    "answer": 1,
    "explanation": "Developing a business case involving ROI and strategic alignment falls under the Business Technology Strategy pillar.",
    "hint": "Business case = Strategy."
  },
  {
    "id": 21,
    "difficulty": "easy",
    "category": "pmp",
    "question": "Research shows that successful project managers (and architects) spend approximately what percentage of their time on communication?",
    "options": [
      "50%",
      "90%",
      "25%",
      "70%"
    ],
    "answer": 1,
    "explanation": "The PMP standard emphasizes that 90% of a project manager's time is spent communicating with stakeholders and the team.",
    "hint": "It's almost all of their time."
  },
  {
    "id": 22,
    "difficulty": "medium",
    "category": "pmp",
    "question": "In Tuckman's Ladder of team development, which stage is characterized by team members starting to work together and developing trust, despite potential initial conflicts?",
    "options": [
      "Performing",
      "Norming",
      "Adjourning",
      "Storming"
    ],
    "answer": 1,
    "explanation": "In the 'Norming' stage, the team begins to resolve differences, appreciate colleagues' strengths, and respect the leader's authority.",
    "hint": "After Storming comes..."
  },
  {
    "id": 23,
    "difficulty": "medium",
    "category": "pmp",
    "question": "An architect identifies a high-impact risk of vendor lock-in and decides to use an abstraction layer (like an API Gateway) to allow for easier switching in the future. Which risk response strategy is this?",
    "options": [
      "Avoid",
      "Transfer",
      "Accept",
      "Mitigate"
    ],
    "answer": 3,
    "explanation": "Mitigation involves reducing the probability or impact of a risk. Using an abstraction layer reduces the impact of potential lock-in.",
    "hint": "Reducing the impact."
  },
  {
    "id": 24,
    "difficulty": "hard",
    "category": "pmp",
    "question": "Which tool is most effective for an architect to define 'Who is responsible', 'Who is accountable', 'Who is consulted', and 'Who is informed' for architecture deliverables?",
    "options": [
      "WBS (Work Breakdown Structure)",
      "Burndown Chart",
      "RACI Matrix",
      "Ishikawa Diagram"
    ],
    "answer": 2,
    "explanation": "The RACI matrix is the standard tool for mapping roles and responsibilities to tasks or deliverables.",
    "hint": "Starts with R."
  },
  {
    "id": 25,
    "difficulty": "medium",
    "category": "pmp",
    "question": "In the context of quality management, what is the difference between 'Grade' and 'Quality'?",
    "options": [
      "They are the same thing.",
      "Grade is for hardware; Quality is for software.",
      "Grade is about features; Quality is about fulfilling requirements.",
      "Quality is about features; Grade is about fulfilling requirements."
    ],
    "answer": 2,
    "explanation": "High Quality means meeting requirements. High Grade means having many fancy features. A product can be low-grade (few features) but high-quality (no bugs).",
    "hint": "Features vs. Fulfillment."
  },
  {
    "id": 26,
    "difficulty": "easy",
    "category": "pmp",
    "question": "Which phase of the project lifecycle is most critical for identifying and engaging stakeholders to prevent late-stage scope creep?",
    "options": [
      "Monitoring and Controlling",
      "Executing",
      "Initiating",
      "Closing"
    ],
    "answer": 2,
    "explanation": "Identifying stakeholders early in the Initiating phase (or Phase A in TOGAF) is vital for success.",
    "hint": "The very beginning."
  },
  {
    "id": 27,
    "difficulty": "hard",
    "category": "pmp",
    "question": "During a project, a major architecture change is requested by a senior stakeholder. What should the architect/PM do first?",
    "options": [
      "Reject it because the scope is locked.",
      "Implement it immediately to keep the stakeholder happy.",
      "Analyze the impact of the change on schedule, cost, and other requirements.",
      "Ask the developers if they can do it."
    ],
    "answer": 2,
    "explanation": "The first step in any change request is to perform an impact analysis before making a decision.",
    "hint": "Check the impact first."
  },
  {
    "id": 28,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What does a 'Negative Float' on the critical path of an architecture project usually indicate?",
    "options": [
      "The project is behind schedule and the end date is at risk.",
      "The project has too many resources.",
      "The project is under budget.",
      "The project is ahead of schedule."
    ],
    "answer": 0,
    "explanation": "Negative float means the project is currently scheduled to finish later than the required completion date.",
    "hint": "Not enough time."
  },
  {
    "id": 29,
    "difficulty": "medium",
    "category": "pmp",
    "question": "The 'Halo Effect' in project management refers to which of the following?",
    "options": [
      "The positive atmosphere created after a successful launch.",
      "The visual effect of a high-resolution architecture diagram.",
      "The protection provided by the project sponsor.",
      "The tendency to view a person's performance in one area as proof they will be good in another (e.g., a good coder becoming a good architect)."
    ],
    "answer": 3,
    "explanation": "The Halo Effect is a cognitive bias where we assume someone's skills in one area translate to another, which is not always true.",
    "hint": "Assuming general skill from specific skill."
  },
  {
    "id": 30,
    "difficulty": "easy",
    "category": "pmp",
    "question": "Which document signifies the formal authorization of a project and provides the project manager with the authority to apply organizational resources?",
    "options": [
      "Scope Statement",
      "Project Charter",
      "Business Case",
      "Project Management Plan"
    ],
    "answer": 1,
    "explanation": "The Project Charter is the document that officially starts a project and empowers the PM.",
    "hint": "Authorization document."
  },
  {
    "id": 31,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "A retail company needs to synchronize product inventory from a central ERP to 50 individual store databases in near real-time. Which data integration pattern is most appropriate?",
    "options": [
      "Correlation",
      "Broadcast",
      "Aggregation",
      "Migration"
    ],
    "answer": 1,
    "explanation": "The Broadcast pattern (one-to-many) is used to keep multiple destination systems up-to-date with a single source in real-time.",
    "hint": "One source to many targets."
  },
  {
    "id": 32,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "You are designing a data migration from a legacy On-Premises SQL Server to Azure Data Lake Storage. The source data is messy and needs complex transformations before being stored. Which approach should you use?",
    "options": [
      "ELT (Extract, Load, Transform)",
      "ETL (Extract, Transform, Load)",
      "Direct Mirroring",
      "Backup and Restore"
    ],
    "answer": 1,
    "explanation": "ETL is preferred when the data needs to be cleansed or transformed *before* it reaches the destination, often to save on storage processing or to meet target schema requirements.",
    "hint": "Transform before loading."
  },
  {
    "id": 33,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "In a Microservices architecture, which pattern is used to provide a single entry point for all clients and handle cross-cutting concerns like authentication and rate limiting?",
    "options": [
      "API Gateway",
      "Service Discovery",
      "Event Sourcing",
      "Circuit Breaker"
    ],
    "answer": 0,
    "explanation": "An API Gateway acts as a reverse proxy, routing requests and handling security/performance concerns centrally for the microservices.",
    "hint": "The front door."
  },
  {
    "id": 34,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "An organization wants to migrate its application to the cloud with minimal changes to the underlying code. This 'Lift and Shift' approach is known in the 6 R's of cloud migration as:",
    "options": [
      "Refactor",
      "Rehost",
      "Replatform",
      "Retire"
    ],
    "answer": 1,
    "explanation": "Rehosting involves moving applications to the cloud without making any changes to take advantage of cloud-native features immediately.",
    "hint": "Lift and Shift."
  },
  {
    "id": 35,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which architectural style is best suited for high-volume, asynchronous systems where components need to be highly decoupled and reactive?",
    "options": [
      "Mainframe Batch Processing",
      "Monolithic Architecture",
      "N-Tier Architecture",
      "Event-Driven Architecture"
    ],
    "answer": 3,
    "explanation": "Event-Driven Architecture (EDA) uses events to trigger and communicate between decoupled services, perfect for reactive systems.",
    "hint": "Pub/Sub and Triggers."
  },
  {
    "id": 36,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "To handle massive datasets that exceed the capacity of a single database server, which technique involves horizontal partitioning of data across multiple instances?",
    "options": [
      "Vertical Scaling",
      "Indexing",
      "Sharding",
      "Replication"
    ],
    "answer": 2,
    "explanation": "Sharding is the process of breaking up a large database into smaller, faster, more easily managed parts called data shards.",
    "hint": "Horizontal partitioning."
  },
  {
    "id": 37,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "A company is moving to a Zero Trust security model. What is the fundamental principle of this architecture?",
    "options": [
      "Trust but verify.",
      "Trust everyone inside the firewall.",
      "Disable all remote access.",
      "Never trust, always verify."
    ],
    "answer": 3,
    "explanation": "Zero Trust assumes no entity (inside or outside the network) is trusted by default; every request must be authenticated and authorized.",
    "hint": "No default trust."
  },
  {
    "id": 38,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "During a data migration, 'Data Profiling' is performed primarily to:",
    "options": [
      "Create the target database users.",
      "Encrypt the data.",
      "Understand the quality, structure, and content of the source data.",
      "Compress the data for faster transfer."
    ],
    "answer": 2,
    "explanation": "Data profiling is the process of examining the data available from an existing information source and collecting statistics or informative summaries about that data.",
    "hint": "Checking data quality."
  },
  {
    "id": 39,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "In Disaster Recovery planning, the 'RPO' (Recovery Point Objective) defines:",
    "options": [
      "The distance between the primary and secondary site.",
      "The cost of the recovery solution.",
      "The maximum acceptable amount of data loss measured in time.",
      "The maximum acceptable time it takes to restore the system."
    ],
    "answer": 2,
    "explanation": "RPO is about data loss. If RPO is 4 hours, you can afford to lose 4 hours of data.",
    "hint": "Focus on 'data loss'."
  },
  {
    "id": 40,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which pattern is used to prevent a service failure from cascading to other services in a distributed system by 'tripping' and stopping requests after a threshold of errors?",
    "options": [
      "Sidecar Pattern",
      "Saga Pattern",
      "Circuit Breaker",
      "Bulkhead Pattern"
    ],
    "answer": 2,
    "explanation": "The Circuit Breaker pattern detects failures and encapsulates the logic of preventing a failure from constantly recurring during maintenance or temporary external system failure.",
    "hint": "Prevents cascading failure."
  },
  {
    "id": 41,
    "difficulty": "medium",
    "category": "togaf",
    "question": "The 'Solution Architecture' is typically considered to be at which level of detail in the TOGAF Architecture Landscape?",
    "options": [
      "Foundation Architecture",
      "Strategic Architecture",
      "Capability Architecture",
      "Segment Architecture"
    ],
    "answer": 2,
    "explanation": "Capability Architectures (and sometimes Segment) provide the level of detail needed to implement specific solutions.",
    "hint": "More detailed than Strategic."
  },
  {
    "id": 42,
    "difficulty": "easy",
    "category": "btabok",
    "question": "Which BTABoK pillar focuses on ensuring the system is 'Changeable' (easy to modify in the future)?",
    "options": [
      "Design",
      "Quality Attributes",
      "IT Environment",
      "Human Dynamics"
    ],
    "answer": 1,
    "explanation": "Changeability (or maintainability) is a key Quality Attribute.",
    "hint": "An 'ility' concern."
  },
  {
    "id": 43,
    "difficulty": "medium",
    "category": "pmp",
    "question": "Who is ultimately responsible for the 'Quality' of the project deliverables in a PMP-based project?",
    "options": [
      "The Developers",
      "The Client",
      "The Project Manager",
      "The Quality Assurance Team"
    ],
    "answer": 2,
    "explanation": "The Project Manager has ultimate responsibility for the project's quality, even if they delegate the tasks.",
    "hint": "The buck stops with the PM."
  },
  {
    "id": 44,
    "difficulty": "hard",
    "category": "togaf",
    "question": "Which document is the 'Technical Specification' of the architecture, containing the detailed models and requirements for the implementation team?",
    "options": [
      "Architecture Vision",
      "Statement of Architecture Work",
      "Architecture Definition Document (ADD)",
      "Architecture Roadmap"
    ],
    "answer": 2,
    "explanation": "The ADD is the core deliverable that describes the architecture being developed.",
    "hint": "ADD is the main spec."
  },
  {
    "id": 45,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In BTABoK, 'IT Governance' falls under which pillar?",
    "options": [
      "Design",
      "Business Technology Strategy",
      "IT Environment",
      "Human Dynamics"
    ],
    "answer": 2,
    "explanation": "The IT Environment pillar covers the organizational and procedural aspects of technology, including governance.",
    "hint": "Procedures and rules."
  },
  {
    "id": 46,
    "difficulty": "easy",
    "category": "pmp",
    "question": "A project manager uses 'Bottom-Up' estimating. What is the main advantage of this technique?",
    "options": [
      "It requires the least amount of effort.",
      "It provides the highest level of accuracy.",
      "It is the fastest way to estimate.",
      "It is best for projects with high uncertainty."
    ],
    "answer": 1,
    "explanation": "Bottom-up estimation involves estimating individual tasks and summing them, making it the most accurate but also most time-consuming method.",
    "hint": "Granular and accurate."
  },
  {
    "id": 47,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "A company wants to consolidate data from multiple SaaS applications (Salesforce, Zendesk, Marketo) into a single dashboard. Which pattern is best?",
    "options": [
      "Broadcast",
      "Aggregation",
      "Migration",
      "Bi-directional Sync"
    ],
    "answer": 1,
    "explanation": "Aggregation involves taking data from multiple sources and bringing it into a single destination.",
    "hint": "Many to one."
  },
  {
    "id": 48,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In Phase E (Opportunities and Solutions), which activity is performed to identify the gaps between Baseline and Target architectures?",
    "options": [
      "Business Transformation Readiness Assessment",
      "Risk Assessment",
      "SWOT Analysis",
      "Gap Analysis"
    ],
    "answer": 3,
    "explanation": "Gap Analysis is the central technique in TOGAF for identifying what needs to be added or changed to reach the target.",
    "hint": "Identifying the 'Gap'."
  },
  {
    "id": 49,
    "difficulty": "medium",
    "category": "btabok",
    "question": "According to IASA, what is the 'Architect's primary tool in delivering architecture strategy'?",
    "options": [
      "Whiteboards",
      "The Design pillar",
      "A laptop",
      "PowerPoint"
    ],
    "answer": 1,
    "explanation": "Design skills are the primary tool through which architects deliver value and strategy.",
    "hint": "Primary tool pillar."
  },
  {
    "id": 50,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Gold Plating' in project management?",
    "options": [
      "Using real gold in hardware components.",
      "Giving the customer more than what was asked for without approval.",
      "Finishing the project ahead of schedule.",
      "Assigning the most expensive resources to a task."
    ],
    "answer": 1,
    "explanation": "Gold plating is adding extra features or quality not requested, which often leads to wasted time and increased risk.",
    "hint": "Unapproved extras."
  },
  {
    "id": 51,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which ADM Phase is primarily concerned with identifying the business capabilities the organization possesses and those it needs to develop to support the Architecture Vision?",
    "options": [
      "Preliminary Phase",
      "Phase B: Business Architecture",
      "Phase C: Information Systems Architecture",
      "Phase A: Architecture Vision"
    ],
    "answer": 1,
    "explanation": "Phase B (Business Architecture) focuses on the product/service strategy and the business capabilities, processes, and roles required.",
    "hint": "It deals with 'The Business'."
  },
  {
    "id": 52,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In TOGAF, what is the purpose of the 'Architecture Resource Base'?",
    "options": [
      "To track the budget of the Architecture Board.",
      "To list the hardware assets of the company.",
      "To provide resources, guidelines, and templates used to manage the architecture activity.",
      "To store the final architecture artifacts."
    ],
    "answer": 2,
    "explanation": "The Architecture Resource Base provides the 'how-to' materials, including templates and background information, for the architecture team.",
    "hint": "Resources for the architect, not the architecture itself."
  },
  {
    "id": 53,
    "difficulty": "medium",
    "category": "togaf",
    "question": "During Phase D (Technology Architecture), which of the following is a key deliverable?",
    "options": [
      "Application Communication Diagram",
      "Technology Architecture Components and Physical Configurations",
      "Business Process Hierarchy",
      "Logical Data Model"
    ],
    "answer": 1,
    "explanation": "Phase D defines the software and hardware infrastructure needed to support the application and data components.",
    "hint": "Infrastructure and platforms."
  },
  {
    "id": 54,
    "difficulty": "hard",
    "category": "togaf",
    "question": "Which technique does TOGAF recommend for comparing the Baseline Architecture with the Target Architecture to identify 'Nominal', 'Included', or 'Omitted' elements?",
    "options": [
      "Gap Analysis",
      "Business Transformation Readiness Assessment",
      "Consolidation Analysis",
      "Value Stream Mapping"
    ],
    "answer": 0,
    "explanation": "Gap Analysis is the formal ADM technique to identify what must be added, changed, or deleted to reach the target state.",
    "hint": "Standard ADM comparison tool."
  },
  {
    "id": 55,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the primary role of the Architecture Board in an enterprise?",
    "options": [
      "To manage the project's daily stand-ups.",
      "To select the specific cloud instances for deployment.",
      "To provide governance and ensure that projects align with the enterprise architecture.",
      "To write the code for the projects."
    ],
    "answer": 2,
    "explanation": "The Architecture Board is a governance body that oversees the implementation of the architecture and manages deviations.",
    "hint": "The governing body."
  },
  {
    "id": 56,
    "difficulty": "easy",
    "category": "togaf",
    "question": "Which ADM Phase includes the creation of the 'Statement of Architecture Work'?",
    "options": [
      "Phase A: Architecture Vision",
      "Preliminary Phase",
      "Phase G: Implementation Governance",
      "Phase B: Business Architecture"
    ],
    "answer": 0,
    "explanation": "The Statement of Architecture Work is produced in Phase A and serves as the contract between the architecture team and the sponsor.",
    "hint": "Defines the 'Project' of architecture."
  },
  {
    "id": 57,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In the context of the Enterprise Continuum, where would a 'COBIT 5 Framework' or 'ISO 27001' standard be classified?",
    "options": [
      "Organization-Specific Architecture",
      "Industry Architecture",
      "Common Systems Architecture",
      "Foundation Architecture"
    ],
    "answer": 1,
    "explanation": "Industry Architectures contain models and standards specific to vertical industries or broad domains like security or COBIT.",
    "hint": "Cross-enterprise but industry-wide."
  },
  {
    "id": 58,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which of the following best describes 'Interoperability' in the TOGAF framework?",
    "options": [
      "The ease of moving data between different cloud providers.",
      "The ability of a system to run on different operating systems.",
      "The ability of two or more systems to exchange information and use it.",
      "The speed of the network connection."
    ],
    "answer": 2,
    "explanation": "Interoperability is the capability of systems to work together and exchange data effectively.",
    "hint": "Systems talking to each other."
  },
  {
    "id": 59,
    "difficulty": "medium",
    "category": "togaf",
    "question": "When should the 'Architecture Change Management' (Phase H) process be initiated?",
    "options": [
      "At the end of Phase A.",
      "Whenever there is a significant change in the business environment or technology landscape.",
      "Once every five years.",
      "Only when a project fails."
    ],
    "answer": 1,
    "explanation": "Phase H is ongoing and ensures that the architecture adapts to change while remaining relevant.",
    "hint": "Keeping the architecture current."
  },
  {
    "id": 60,
    "difficulty": "hard",
    "category": "togaf",
    "question": "Which part of the TOGAF document provides a classification system for architectural artifacts and defines a common language?",
    "options": [
      "Enterprise Continuum",
      "ADM Guidelines and Techniques",
      "Architecture Development Method",
      "Architecture Content Framework"
    ],
    "answer": 3,
    "explanation": "The Architecture Content Framework (ACF) provides a structural model (Meta-model) for architecture artifacts.",
    "hint": "Focuses on 'Content'."
  },
  {
    "id": 61,
    "difficulty": "easy",
    "category": "btabok",
    "question": "According to the BTABoK, what is the difference between a 'Functional' requirement and a 'Quality Attribute'?",
    "options": [
      "Functional is for business; Quality Attribute is for IT.",
      "They are the same.",
      "Functional is mandatory; Quality Attribute is optional.",
      "Functional describes 'what' the system does; Quality Attribute describes 'how well' it does it."
    ],
    "answer": 3,
    "explanation": "Functional requirements define behavior (e.g., 'process payment'), while Quality Attributes define characteristics (e.g., 'securely', 'quickly').",
    "hint": "What vs. How."
  },
  {
    "id": 62,
    "difficulty": "medium",
    "category": "btabok",
    "question": "The 'IT Environment' pillar includes knowledge of 'Asset Management'. Why is this important for an architect?",
    "options": [
      "To manage the office supplies.",
      "To understand the lifecycle and costs of the existing software and hardware estate.",
      "To write the company's financial taxes.",
      "To count the number of mice and keyboards in the office."
    ],
    "answer": 1,
    "explanation": "Architects must know the current assets to plan migrations, upgrades, and retirement strategies (TCO).",
    "hint": "The existing 'Tech Estate'."
  },
  {
    "id": 63,
    "difficulty": "hard",
    "category": "btabok",
    "question": "Which IASA role is primarily responsible for the 'Enterprise-wide' technology strategy and ensuring alignment across all business units?",
    "options": [
      "Infrastructure Architect",
      "Information Architect",
      "Software Architect",
      "Enterprise Architect"
    ],
    "answer": 3,
    "explanation": "The Enterprise Architect (EA) takes the broadest view, focusing on the entire organization's strategy and roadmap.",
    "hint": "Highest level of scope."
  },
  {
    "id": 64,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Technical Debt' in the context of the BTABoK Design pillar?",
    "options": [
      "The number of bugs in the source code.",
      "The money owed to hardware vendors.",
      "The salary of the senior engineers.",
      "The long-term cost of choosing an easy, short-term solution over a better architectural approach."
    ],
    "answer": 3,
    "explanation": "Technical debt represents the future rework required because a sub-optimal choice was made for the sake of speed or budget.",
    "hint": "Interest paid on quick fixes."
  },
  {
    "id": 65,
    "difficulty": "medium",
    "category": "btabok",
    "question": "Which of the following is considered a 'Business Technology' competency for architects?",
    "options": [
      "Photoshop design",
      "Typing speed",
      "Financial Management (ROI, NPV, TCO)",
      "Programming in C++"
    ],
    "answer": 2,
    "explanation": "Architects must understand financial metrics like Return on Investment (ROI) and Total Cost of Ownership (TCO) to justify solutions.",
    "hint": "The 'Money' part of architecture."
  },
  {
    "id": 66,
    "difficulty": "easy",
    "category": "btabok",
    "question": "In the 'Human Dynamics' pillar, what does 'Active Listening' involve?",
    "options": [
      "Interrupting the speaker to clarify points immediately.",
      "Fully concentrating, understanding, responding, and remembering what is being said.",
      "Recording a meeting to listen to it later.",
      "Listening to music while designing."
    ],
    "answer": 1,
    "explanation": "Active listening is a critical communication skill for gathering requirements and building trust with stakeholders.",
    "hint": "Effective communication."
  },
  {
    "id": 67,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In IASA terminology, what is a 'Scenario-Based Architecture Review'?",
    "options": [
      "A test of the system using fictional users.",
      "A movie about the IT department.",
      "A method to evaluate architecture quality by testing how the design handles specific scenarios or stimuli.",
      "A review of the project's timeline."
    ],
    "answer": 2,
    "explanation": "Scenarios (like 'The primary database fails') are used to evaluate if the architecture meets its Quality Attribute goals.",
    "hint": "Testing the design against events."
  },
  {
    "id": 68,
    "difficulty": "medium",
    "category": "btabok",
    "question": "Which pillar would be most involved when deciding between a 'Buy vs. Build' approach for a new CRM system?",
    "options": [
      "Business Technology Strategy",
      "Human Dynamics",
      "IT Environment",
      "Infrastructure"
    ],
    "answer": 0,
    "explanation": "Buy vs. Build is a strategic decision involving cost, risk, and competitive advantage.",
    "hint": "A strategic business decision."
  },
  {
    "id": 69,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Architectural Significance' in the BTABoK?",
    "options": [
      "The measure of how much a requirement or decision impacts the overall system structure.",
      "How important the architect is in the company hierarchy.",
      "The cost of the architecture software licenses.",
      "The number of pages in the architecture document."
    ],
    "answer": 0,
    "explanation": "Architecturally significant requirements (ASRs) are those that have a high impact on the design and quality of the system.",
    "hint": "High-impact decisions."
  },
  {
    "id": 70,
    "difficulty": "easy",
    "category": "btabok",
    "question": "Which of the following is a primary output of the 'Design' pillar?",
    "options": [
      "Architecture Models and Views",
      "Marketing brochures",
      "Project Budget spreadsheets",
      "Java Source Code"
    ],
    "answer": 0,
    "explanation": "The Design pillar results in models and views (UML, ArchiMate, etc.) that represent the system's structure.",
    "hint": "Visual representations of design."
  },
  {
    "id": 71,
    "difficulty": "medium",
    "category": "pmp",
    "question": "An architect is working on a project using an 'Agile' methodology. How is the 'Scope' typically managed compared to a 'Waterfall' project?",
    "options": [
      "There is no scope management in Agile.",
      "Scope is fixed at the beginning of the project.",
      "Scope is managed through a 'Product Backlog' and evolves throughout the project.",
      "Scope is defined only at the end of the project."
    ],
    "answer": 2,
    "explanation": "In Agile, scope is flexible and prioritized in a backlog, while time and cost are often fixed (per sprint/increment).",
    "hint": "Flexible vs. Fixed."
  },
  {
    "id": 72,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is the 'Critical Path' in a project schedule?",
    "options": [
      "The list of most important stakeholders.",
      "The path the architect takes to the server room.",
      "The longest sequence of tasks that must be completed on time for the project to finish by its due date.",
      "The shortest tasks in the project."
    ],
    "answer": 2,
    "explanation": "The critical path determines the project duration; any delay in a critical path task delays the whole project.",
    "hint": "Longest sequence, zero float."
  },
  {
    "id": 73,
    "difficulty": "medium",
    "category": "pmp",
    "question": "A project manager is using 'Crashing' to shorten the schedule. What does this mean?",
    "options": [
      "Moving to a cheaper cloud provider.",
      "Adding more resources to critical path tasks to reduce their duration.",
      "Deleting non-essential tasks.",
      "Shutting down the project early."
    ],
    "answer": 1,
    "explanation": "Crashing is a schedule compression technique where resources are added (usually increasing cost) to shorten the timeline.",
    "hint": "Adding resources for speed."
  },
  {
    "id": 74,
    "difficulty": "easy",
    "category": "pmp",
    "question": "Which PMP process involves 'comparing the actual performance against the plan' to ensure the project is on track?",
    "options": [
      "Executing",
      "Initiating",
      "Planning",
      "Monitoring and Controlling"
    ],
    "answer": 3,
    "explanation": "Monitoring and Controlling tracks progress and manages changes to the baseline.",
    "hint": "Check and adjust."
  },
  {
    "id": 75,
    "difficulty": "hard",
    "category": "pmp",
    "question": "An architect is asked to provide a 'Rough Order of Magnitude' (ROM) estimate for a data migration. What is the typical accuracy range for a ROM estimate?",
    "options": [
      "-50% to +50%",
      "-5% to +10%",
      "-25% to +75%",
      "-10% to +25%"
    ],
    "answer": 2,
    "explanation": "A ROM estimate is provided early in the project (Initiation) when little is known, and has a wide range of variance.",
    "hint": "Very early, very broad."
  },
  {
    "id": 76,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is the primary purpose of a 'Retrospective' in Agile/Scrum projects?",
    "options": [
      "To inspect the team's performance and identify improvements for the next sprint.",
      "To assign blame for missed deadlines.",
      "To update the Gantt chart.",
      "To demo the software to the client."
    ],
    "answer": 0,
    "explanation": "Retrospectives focus on continuous process improvement for the team.",
    "hint": "Look back to improve."
  },
  {
    "id": 77,
    "difficulty": "medium",
    "category": "pmp",
    "question": "Which type of organizational structure gives the Project Manager the highest level of authority?",
    "options": [
      "Weak Matrix Organization",
      "Balanced Matrix Organization",
      "Projectized Organization",
      "Functional Organization"
    ],
    "answer": 2,
    "explanation": "In a Projectized organization, the PM has nearly total authority over resources and the project.",
    "hint": "The PM is the boss."
  },
  {
    "id": 78,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What does the term 'MVP' stand for in product development?",
    "options": [
      "Minimum Viable Product",
      "Most Valuable Player",
      "Main Vendor Protocol",
      "Maximum Value Program"
    ],
    "answer": 0,
    "explanation": "An MVP is the version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort.",
    "hint": "The smallest buildable version."
  },
  {
    "id": 79,
    "difficulty": "hard",
    "category": "pmp",
    "question": "In PMP, 'Conflict Management' is essential. Which conflict resolution technique is considered a 'win-win' approach?",
    "options": [
      "Collaborating / Problem Solving",
      "Compromising / Reconciling",
      "Forcing / Directing",
      "Smoothing / Accommodating"
    ],
    "answer": 0,
    "explanation": "Collaborating involves incorporating multiple viewpoints and leads to consensus and long-term commitment.",
    "hint": "Working together for a solution."
  },
  {
    "id": 80,
    "difficulty": "medium",
    "category": "pmp",
    "question": "A project has an SPI (Schedule Performance Index) of 0.8 and a CPI (Cost Performance Index) of 1.2. How is the project performing?",
    "options": [
      "Behind schedule and under budget.",
      "Ahead of schedule and over budget.",
      "Ahead of schedule and under budget.",
      "Behind schedule and over budget."
    ],
    "answer": 0,
    "explanation": "SPI < 1 means behind schedule; CPI > 1 means under budget.",
    "hint": "1.0 is the baseline."
  },
  {
    "id": 81,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "An enterprise is migrating a legacy monolithic ERP to a microservices architecture. They want to migrate one feature at a time to reduce risk. Which pattern should they use?",
    "options": [
      "Saga Pattern",
      "Sidecar Pattern",
      "Strangler Fig Pattern",
      "Aggregator Pattern"
    ],
    "answer": 2,
    "explanation": "The Strangler Fig pattern involves gradually replacing specific pieces of functionality with new services until the legacy system is 'strangled' and can be retired.",
    "hint": "Gradual replacement."
  },
  {
    "id": 82,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "To ensure 'Data Sovereignty' for a multinational firm, the architect must ensure that:",
    "options": [
      "The CEO has final say over all data access.",
      "Only the IT department can access the database.",
      "Data is stored and processed according to the laws of the country in which it is located.",
      "All data is encrypted with AES-256."
    ],
    "answer": 2,
    "explanation": "Data Sovereignty is the concept that digital data is subject to the laws of the country in which it is physically located.",
    "hint": "Local laws apply."
  },
  {
    "id": 83,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "A company needs to implement 'Single Sign-On' (SSO) across several web applications. Which protocol is most commonly used for browser-based SSO?",
    "options": [
      "SAML 2.0",
      "MQTT",
      "FTP",
      "SNMP"
    ],
    "answer": 0,
    "explanation": "SAML (Security Assertion Markup Language) 2.0 is the industry standard for exchanging authentication and authorization data between an identity provider and a service provider.",
    "hint": "XML-based auth standard."
  },
  {
    "id": 84,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In a high-availability setup, what is the 'Split-Brain' problem?",
    "options": [
      "When the architect and the PM disagree.",
      "When two nodes in a cluster both think they are the 'Master' after a network failure, leading to data corruption.",
      "When a database is divided into two separate tables.",
      "When a developer writes code in two different languages."
    ],
    "answer": 1,
    "explanation": "Split-brain occurs when network issues partition a cluster, causing multiple nodes to claim leadership simultaneously.",
    "hint": "Multiple masters."
  },
  {
    "id": 85,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which cloud migration strategy is most appropriate for an application that is technically sound but needs to take advantage of cloud-native features like auto-scaling and managed databases?",
    "options": [
      "Retire",
      "Rehost",
      "Refactor",
      "Replatform"
    ],
    "answer": 3,
    "explanation": "Replatforming (often called 'Lift and Reshape') involves making minimal changes to use cloud-native services without changing the core application code.",
    "hint": "Optimization without full rewrite."
  },
  {
    "id": 86,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "When performing a 'Big Bang' data migration, the main risk is:",
    "options": [
      "The users will be confused by the two systems running at once.",
      "The migration takes too long to complete in increments.",
      "A single failure can cause prolonged downtime and complete business disruption.",
      "The cost of running two systems simultaneously."
    ],
    "answer": 2,
    "explanation": "A Big Bang migration moves all data in one go during a single window; failure can be catastrophic for the business.",
    "hint": "High risk, high speed."
  },
  {
    "id": 87,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is the 'Sidecar' pattern in microservices/container architecture?",
    "options": [
      "Running a separate database for every user.",
      "Deploying a helper container alongside the main application container to handle tasks like logging or monitoring.",
      "Using two cloud providers at the same time.",
      "Attaching a laptop to a server."
    ],
    "answer": 1,
    "explanation": "The Sidecar pattern offloads common tasks (logging, proxying, security) from the main application container into a separate, coupled container.",
    "hint": "A 'companion' container."
  },
  {
    "id": 88,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In a large-scale data migration, what is 'Data Cleansing'?",
    "options": [
      "Deleting all old data to start fresh.",
      "Formatting the hard drives before use.",
      "Encrypting data during transit.",
      "The process of detecting and correcting (or removing) corrupt or inaccurate records from a record set."
    ],
    "answer": 3,
    "explanation": "Data cleansing ensures that the target system receives high-quality, standardized data.",
    "hint": "Scrubbing for quality."
  },
  {
    "id": 89,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which 'multi-tenancy' model provides the highest level of isolation for customers in a SaaS application?",
    "options": [
      "Separate Database per Tenant",
      "Shared File System",
      "Shared Database, Separate Schema",
      "Shared Database, Shared Schema"
    ],
    "answer": 0,
    "explanation": "Giving each tenant their own database provides the best security and performance isolation, though it is more expensive to manage.",
    "hint": "Highest isolation level."
  },
  {
    "id": 90,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "An architect is designing a system using 'CQRS' (Command Query Responsibility Segregation). What is the main benefit?",
    "options": [
      "It automatically encrypts all data.",
      "It allows for independent scaling and optimization of read and write operations.",
      "It eliminates the need for a database.",
      "It makes the system easier to code for beginners."
    ],
    "answer": 1,
    "explanation": "CQRS separates the data model for updates (commands) from the data model for reads (queries), improving performance and scalability.",
    "hint": "Separate read and write paths."
  },
  {
    "id": 91,
    "difficulty": "medium",
    "category": "togaf",
    "question": "In Phase C (Data Architecture), which artifact identifies the owners and consumers of data entities across the organization?",
    "options": [
      "Data Entity/Business Function Matrix",
      "Data Migration Plan",
      "Logical Data Model",
      "Class Diagram"
    ],
    "answer": 0,
    "explanation": "The Data Entity/Business Function matrix maps which business functions are responsible for (or use) which data.",
    "hint": "Mapping data to the business."
  },
  {
    "id": 92,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is the primary objective of 'Availability Management'?",
    "options": [
      "To check if the internet is working.",
      "To make sure all employees are at their desks.",
      "To ensure that IT services are available when the business needs them.",
      "To buy more servers than needed."
    ],
    "answer": 2,
    "explanation": "Availability Management ensures that the system meets its uptime requirements (SLAs).",
    "hint": "Uptime and SLAs."
  },
  {
    "id": 93,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Scope Creep'?",
    "options": [
      "The slow movement of a project through the lifecycle.",
      "The uncontrolled expansion to product or project scope without adjustments to time, cost, and resources.",
      "A bug that slowly moves through the code.",
      "The addition of new project managers to a team."
    ],
    "answer": 1,
    "explanation": "Scope creep happens when new requirements are added without formal change control, often leading to project failure.",
    "hint": "Uncontrolled growth."
  },
  {
    "id": 94,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In an 'Active-Active' multi-region architecture, how is traffic usually distributed?",
    "options": [
      "All traffic goes to one region; the other is off.",
      "Traffic is distributed across both regions simultaneously using a global load balancer.",
      "One region handles reads, the other handles writes.",
      "Traffic only moves to the second region if the first one crashes."
    ],
    "answer": 1,
    "explanation": "Active-Active means both regions are serving traffic at the same time, providing high availability and low latency.",
    "hint": "Both working at once."
  },
  {
    "id": 95,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Architecture Roadmap'?",
    "options": [
      "A map of the server room.",
      "The GPS coordinates of the data centers.",
      "A document showing the timeline for transition from Baseline to Target architecture.",
      "A list of all the architects' names."
    ],
    "answer": 2,
    "explanation": "The Roadmap outlines the sequence and timeline of projects needed to implement the architecture.",
    "hint": "The 'When' and 'How' sequence."
  },
  {
    "id": 96,
    "difficulty": "easy",
    "category": "btabok",
    "question": "Which term describes a system's ability to handle an increasing amount of work by adding resources?",
    "options": [
      "Scalability",
      "Maintainability",
      "Security",
      "Reliability"
    ],
    "answer": 0,
    "explanation": "Scalability is the ability to grow the system's capacity to handle more load.",
    "hint": "Growing with the load."
  },
  {
    "id": 97,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Work Package' in a WBS?",
    "options": [
      "The lowest level of the Work Breakdown Structure for which cost and duration can be estimated.",
      "A physical box sent to the client.",
      "A group of employees working together.",
      "A software installer."
    ],
    "answer": 0,
    "explanation": "A work package is the smallest unit of work in a WBS, used for detailed planning.",
    "hint": "Smallest WBS unit."
  },
  {
    "id": 98,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "A company wants to implement a 'Data Lake'. What is the defining characteristic of a Data Lake compared to a Data Warehouse?",
    "options": [
      "A Data Lake is only for SQL data.",
      "A Data Lake stores data in its raw, native format until it is needed (Schema-on-Read).",
      "A Data Lake is smaller than a Warehouse.",
      "A Data Lake is always on-premises."
    ],
    "answer": 1,
    "explanation": "Data Lakes allow for the storage of vast amounts of structured and unstructured data in raw form.",
    "hint": "Raw data storage."
  },
  {
    "id": 99,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which document defines the scope and terms of a specific implementation project within the ADM?",
    "options": [
      "Gap Analysis",
      "Architecture Contract",
      "Transition Architecture",
      "Architecture Vision"
    ],
    "answer": 1,
    "explanation": "Architecture Contracts are joint agreements between development partners and sponsors on the deliverables and standards for a project.",
    "hint": "Agreement for implementation."
  },
  {
    "id": 100,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In a 'Micro-frontend' architecture, what is the core goal?",
    "options": [
      "To eliminate the need for CSS.",
      "To break down a large web application into smaller, independently deliverable and maintainable frontend components.",
      "To run the frontend on a very small server.",
      "To use as many small icons as possible."
    ],
    "answer": 1,
    "explanation": "Micro-frontends apply the microservices concept to the frontend, allowing teams to work independently on different parts of the UI.",
    "hint": "Microservices for the UI."
  },
  {
    "id": 101,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which document is produced at the end of Phase A to define the scope, constraints, and success criteria for the architecture project?",
    "options": [
      "Statement of Architecture Work",
      "Request for Architecture Work",
      "Architecture Roadmap",
      "Architecture Definition Document"
    ],
    "answer": 0,
    "explanation": "The Statement of Architecture Work is the document that defines the scope and terms of the architecture project and is signed off by the sponsors.",
    "hint": "It acts as a contract for the ADM cycle."
  },
  {
    "id": 102,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In TOGAF, the 'Architecture Maturity Model' is primarily used to:",
    "options": [
      "Determine the age of the legacy hardware.",
      "Evaluate the current state of an organization's architecture capability and identify areas for improvement.",
      "Measure the speed of the developers.",
      "Calculate the ROI of a specific software purchase."
    ],
    "answer": 1,
    "explanation": "Architecture Maturity Models (like ACMM) help organizations understand their current architecture standing and plan for capability growth.",
    "hint": "Assessing organizational capability."
  },
  {
    "id": 103,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which of the following is a key objective of Phase H (Architecture Change Management)?",
    "options": [
      "To migrate data from the old server to the new one.",
      "To design the new user interface.",
      "To ensure that the architecture lifecycle is maintained and the architecture remains relevant to the business.",
      "To sign off on the project budget."
    ],
    "answer": 2,
    "explanation": "Phase H ensures that changes to the architecture are managed in a cohesive way so that the architecture continues to provide value.",
    "hint": "Relevance and maintenance."
  },
  {
    "id": 104,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is the primary difference between a 'Baseline Architecture' and a 'Target Architecture'?",
    "options": [
      "Baseline is for hardware; Target is for software.",
      "Baseline is the minimum requirement; Target is the ideal requirement.",
      "Baseline is for the cloud; Target is for on-premises.",
      "Baseline is what we have now; Target is what we want to achieve."
    ],
    "answer": 3,
    "explanation": "Baseline describes the 'as-is' state, while Target describes the 'to-be' state of the enterprise.",
    "hint": "As-is vs. To-be."
  },
  {
    "id": 105,
    "difficulty": "medium",
    "category": "togaf",
    "question": "In Phase G (Implementation Governance), who is typically responsible for performing 'Architecture Compliance Reviews'?",
    "options": [
      "The External Auditor",
      "The Architecture Board",
      "The Project Manager",
      "The Quality Assurance Lead"
    ],
    "answer": 1,
    "explanation": "The Architecture Board conducts compliance reviews to ensure implementation projects align with the agreed-upon architecture.",
    "hint": "The internal governing body."
  },
  {
    "id": 106,
    "difficulty": "easy",
    "category": "togaf",
    "question": "What is the 'Architecture Vision'?",
    "options": [
      "A 500-page technical manual.",
      "The login screen for the enterprise portal.",
      "A list of all employees in the IT department.",
      "A high-level summary of the changes to the enterprise and the value they will provide."
    ],
    "answer": 3,
    "explanation": "The Vision provides a high-level overview of the target architecture to gain stakeholder agreement.",
    "hint": "Executive summary of the goal."
  },
  {
    "id": 107,
    "difficulty": "hard",
    "category": "togaf",
    "question": "Which part of the TOGAF framework provides specific guidance on how to adapt the ADM for different styles like Agile or SOA?",
    "options": [
      "The Reference Library",
      "The Enterprise Continuum",
      "The Architecture Content Framework",
      "ADM Guidelines and Techniques"
    ],
    "answer": 3,
    "explanation": "ADM Guidelines and Techniques provide specialized approaches for applying the ADM in different contexts.",
    "hint": "Techniques for adaptation."
  },
  {
    "id": 108,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which artifact defines the 'Transition Architectures' in Phase E and F?",
    "options": [
      "Architecture Vision",
      "Architecture Roadmap",
      "Architecture Contract",
      "Architecture Definition Document"
    ],
    "answer": 1,
    "explanation": "The Architecture Roadmap lists the individual packages and transition architectures needed to reach the target.",
    "hint": "The timeline of steps."
  },
  {
    "id": 109,
    "difficulty": "hard",
    "category": "togaf",
    "question": "The 'Technical Reference Model' (TRM) is an example of which type of architecture in the Enterprise Continuum?",
    "options": [
      "Organization-Specific Architecture",
      "Industry Architecture",
      "Common Systems Architecture",
      "Foundation Architecture"
    ],
    "answer": 3,
    "explanation": "The TRM is a generic Foundation Architecture that provides a model of services upon which more specific architectures can be built.",
    "hint": "The most generic level."
  },
  {
    "id": 110,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the purpose of a 'Gap' in TOGAF Gap Analysis?",
    "options": [
      "An item that is present in the Target architecture but missing in the Baseline architecture.",
      "A missing team member.",
      "The distance between the server racks.",
      "A period of time where no work is done."
    ],
    "answer": 0,
    "explanation": "A gap represents something that needs to be developed or acquired to move from the current state to the target state.",
    "hint": "Missing capability/component."
  },
  {
    "id": 111,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In the 'Business Technology Strategy' pillar, what does 'NPV' (Net Present Value) help an architect determine?",
    "options": [
      "The network packet velocity.",
      "The number of users currently online.",
      "The current value of future cash flows from a project, minus the initial investment.",
      "The name of the project version."
    ],
    "answer": 2,
    "explanation": "NPV is a financial metric used to evaluate the profitability of an investment or project over time.",
    "hint": "Value of money over time."
  },
  {
    "id": 112,
    "difficulty": "hard",
    "category": "btabok",
    "question": "Which IASA pillar emphasizes the 'Ethical' responsibilities of an architect regarding data privacy and sustainability?",
    "options": [
      "Business Technology Strategy",
      "Design",
      "IT Environment",
      "Human Dynamics"
    ],
    "answer": 3,
    "explanation": "Human Dynamics covers the professional ethics, leadership, and social responsibility of the architect.",
    "hint": "People and Ethics."
  },
  {
    "id": 113,
    "difficulty": "medium",
    "category": "btabok",
    "question": "When an architect evaluates 'Vendor Viability', they are looking at:",
    "options": [
      "The speed of the vendor's website.",
      "The color of the vendor's logo.",
      "The location of the vendor's office.",
      "The long-term financial stability and market position of a software or hardware provider."
    ],
    "answer": 3,
    "explanation": "Evaluating vendor viability ensures the organization doesn't rely on a product from a company that might go out of business.",
    "hint": "Will the company survive?"
  },
  {
    "id": 114,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is the definition of 'Total Cost of Ownership' (TCO)?",
    "options": [
      "The sum of all costs associated with an asset over its entire life (purchase, maintenance, support, disposal).",
      "The cost of the electricity for the data center.",
      "The purchase price of a software license.",
      "The total salary of the IT team."
    ],
    "answer": 0,
    "explanation": "TCO provides a comprehensive financial picture beyond just the initial acquisition cost.",
    "hint": "Acquisition + Operation."
  },
  {
    "id": 115,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In BTABoK, 'Stakeholder Management' involves 'Mapping'. What is a 'Power/Interest' matrix used for?",
    "options": [
      "To measure the electricity usage of the servers.",
      "To categorize stakeholders based on their influence and how much they care about the project.",
      "To map the physical location of stakeholders.",
      "To determine which stakeholder has the fastest computer."
    ],
    "answer": 1,
    "explanation": "The Power/Interest matrix helps architects prioritize which stakeholders to engage with most closely.",
    "hint": "Influence vs. Interest."
  },
  {
    "id": 116,
    "difficulty": "medium",
    "category": "btabok",
    "question": "Why is 'Conflict Resolution' considered a core competency in the Human Dynamics pillar?",
    "options": [
      "Architects need to fight for their designs.",
      "Architects often deal with conflicting requirements from different business units and must find a consensus.",
      "Architects are responsible for firing underperforming employees.",
      "It is required by law."
    ],
    "answer": 1,
    "explanation": "Architects sit between business and tech, often mediating between different priorities and technical constraints.",
    "hint": "Balancing different needs."
  },
  {
    "id": 117,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is an 'Architecture Repository' in the context of BTABoK's IT Environment pillar?",
    "options": [
      "A database of all customer orders.",
      "A backup of the source code.",
      "A storage room for old laptops.",
      "A centralized system for storing and managing all architectural artifacts, standards, and guidelines."
    ],
    "answer": 3,
    "explanation": "The repository is the 'single source of truth' for the architecture team.",
    "hint": "Central storage for artifacts."
  },
  {
    "id": 118,
    "difficulty": "medium",
    "category": "btabok",
    "question": "Which financial metric represents the time it takes for a project to recover its initial investment cost?",
    "options": [
      "IRR",
      "NPV",
      "Payback Period",
      "ROI"
    ],
    "answer": 2,
    "explanation": "The Payback Period is the time required for the cash inflows from a project to equal the cash outflows.",
    "hint": "How long to get the money back?"
  },
  {
    "id": 119,
    "difficulty": "easy",
    "category": "btabok",
    "question": "In BTABoK, what is the role of 'Mentoring' within the Human Dynamics pillar?",
    "options": [
      "To monitor employee work hours.",
      "To share knowledge and help develop the skills of less experienced architects or team members.",
      "To host social events.",
      "To tell people what to do."
    ],
    "answer": 1,
    "explanation": "Mentoring is vital for building the architecture capability and ensuring knowledge transfer within the organization.",
    "hint": "Knowledge sharing."
  },
  {
    "id": 120,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is the 'Business Case' for an architecture initiative?",
    "options": [
      "A leather bag for a laptop.",
      "A list of software bugs.",
      "A map of the office building.",
      "A document that justifies the investment in the project by outlining benefits, costs, risks, and strategic alignment."
    ],
    "answer": 3,
    "explanation": "A business case is the primary tool used to secure funding and executive support for a project.",
    "hint": "The justification document."
  },
  {
    "id": 121,
    "difficulty": "medium",
    "category": "pmp",
    "question": "In PMP, what is the 'Risk Register' used for?",
    "options": [
      "To document identified risks, their analysis, and planned response strategies.",
      "To record the daily attendance of the team.",
      "To list all employees on the project.",
      "To track the project's expenses."
    ],
    "answer": 0,
    "explanation": "The Risk Register is a living document used to manage and track risks throughout the project lifecycle.",
    "hint": "Log of potential issues."
  },
  {
    "id": 122,
    "difficulty": "hard",
    "category": "pmp",
    "question": "Which procurement contract type carries the most risk for the Seller (Vendor)?",
    "options": [
      "Cost Plus Incentive Fee (CPIF)",
      "Cost Reimbursable (CPFF)",
      "Fixed Price (FP)",
      "Time and Materials (T&M)"
    ],
    "answer": 2,
    "explanation": "In a Fixed Price contract, the seller must deliver the scope for a set price regardless of their own costs.",
    "hint": "Seller pays for overruns."
  },
  {
    "id": 123,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What does the 'Pareto Principle' (80/20 rule) suggest in the context of Quality Management?",
    "options": [
      "80% of the work is done by 20% of the people.",
      "80% of the problems are usually caused by 20% of the sources/causes.",
      "80% of the budget should be spent on the architecture.",
      "20% of the project should be cloud-based."
    ],
    "answer": 1,
    "explanation": "The Pareto Principle helps architects focus their quality improvement efforts on the most significant causes of defects.",
    "hint": "Focus on the vital few."
  },
  {
    "id": 124,
    "difficulty": "medium",
    "category": "pmp",
    "question": "In a 'Hybrid' project environment, which approach is typically used?",
    "options": [
      "Manual coding only.",
      "Only Waterfall.",
      "Only Agile.",
      "A combination of predictive (Waterfall) and adaptive (Agile) methods."
    ],
    "answer": 3,
    "explanation": "Hybrid projects use Waterfall for stable requirements (like infrastructure) and Agile for evolving ones (like UI).",
    "hint": "Mixing both worlds."
  },
  {
    "id": 125,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is a 'Stakeholder' in project management?",
    "options": [
      "Anyone who has invested money in the company.",
      "Anyone who is affected by or can affect the outcome of the project.",
      "The lead architect only.",
      "The person who manages the project budget."
    ],
    "answer": 1,
    "explanation": "Stakeholders include users, sponsors, team members, and even competitors or government regulators.",
    "hint": "Anyone with an interest."
  },
  {
    "id": 126,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Qualitative Risk Analysis'?",
    "options": [
      "Writing a report on the quality of the software.",
      "Calculating the exact dollar value of a risk.",
      "Interviewing everyone about their feelings on the project.",
      "Prioritizing risks for further action by assessing their probability and impact."
    ],
    "answer": 3,
    "explanation": "Qualitative analysis uses a relative scale (e.g., High, Medium, Low) to rank risks quickly.",
    "hint": "Subjective prioritization."
  },
  {
    "id": 127,
    "difficulty": "medium",
    "category": "pmp",
    "question": "Which document contains the 'Acceptance Criteria' for the project deliverables?",
    "options": [
      "Resource Management Plan",
      "Project Charter",
      "Scope Statement",
      "Communication Plan"
    ],
    "answer": 2,
    "explanation": "The Project Scope Statement details what is included and how the client will decide to accept the work.",
    "hint": "Defines 'Done' and 'Accepted'."
  },
  {
    "id": 128,
    "difficulty": "hard",
    "category": "pmp",
    "question": "If a project has a 'Positive Variance' in cost (CV > 0), it means:",
    "options": [
      "The project is under budget.",
      "The project is over budget.",
      "The project is profitable for the vendor.",
      "The project needs more funding."
    ],
    "answer": 0,
    "explanation": "CV = EV - AC. A positive result means you spent less than the value of the work performed.",
    "hint": "Good news for the budget."
  },
  {
    "id": 129,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is the 'Lessons Learned' register?",
    "options": [
      "A document that records what went well and what didn't to improve future projects.",
      "A list of software bugs found during testing.",
      "A training schedule.",
      "A textbook for the team."
    ],
    "answer": 0,
    "explanation": "Captured throughout the project, lessons learned help avoid repeating mistakes in future phases or projects.",
    "hint": "Knowledge for the future."
  },
  {
    "id": 130,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is 'Escalation' in risk management?",
    "options": [
      "Moving a risk to a higher level of management because it is outside the project's scope or authority.",
      "Increasing the budget of the project.",
      "Changing the project manager.",
      "Buying more expensive software."
    ],
    "answer": 0,
    "explanation": "Escalation occurs when the project team cannot handle the risk and needs senior management to take ownership.",
    "hint": "Taking it up the ladder."
  },
  {
    "id": 131,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "In a distributed system, 'Eventual Consistency' means:",
    "options": [
      "If no new updates are made to a data item, eventually all accesses will return the last updated value.",
      "The data is always the same on all nodes at all times.",
      "The system will crash if data is not consistent.",
      "The data will never be consistent."
    ],
    "answer": 0,
    "explanation": "Eventual consistency is used in highly available systems (like DynamoDB or CosmosDB) where speed is prioritized over immediate consistency.",
    "hint": "Eventually consistent, not immediately."
  },
  {
    "id": 132,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "Which architectural pattern is used to process long-running tasks in the background without making the user wait for the response?",
    "options": [
      "Publisher-Subscriber (Pub/Sub)",
      "Batch Processing",
      "Shared Database",
      "Request-Response"
    ],
    "answer": 0,
    "explanation": "Pub/Sub allow for asynchronous processing, where a task is submitted and the system handles it independently of the user session.",
    "hint": "Async background work."
  },
  {
    "id": 133,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "An architect is choosing a migration strategy for a 20-year-old COBOL mainframe system. The business wants to completely redesign the logic to use modern web services. This is:",
    "options": [
      "Rehosting",
      "Refactoring / Rearchitecting",
      "Retiring",
      "Replatforming"
    ],
    "answer": 1,
    "explanation": "Refactoring or Rearchitecting involves significantly changing the code and structure to take advantage of modern technology.",
    "hint": "Full code/logic change."
  },
  {
    "id": 134,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In the 'CAP Theorem', if a system chooses 'Availability' and 'Partition Tolerance' (AP), what must it sacrifice during a network partition?",
    "options": [
      "Consistency",
      "Scalability",
      "Performance",
      "Security"
    ],
    "answer": 0,
    "explanation": "According to CAP, you can only have two of the three. If the network breaks (Partition), and you stay available (A), you cannot guarantee Consistency (C).",
    "hint": "The CAP trade-off."
  },
  {
    "id": 135,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "A company implements 'Blue-Green Deployment'. What is the primary benefit?",
    "options": [
      "It allows for zero-downtime deployments and easy rollbacks by switching traffic between two identical environments.",
      "It reduces the cost of the cloud bill.",
      "It automatically optimizes the database.",
      "It makes the application look more environmentally friendly."
    ],
    "answer": 0,
    "explanation": "One environment (Green) is updated while the other (Blue) stays live. If Green works, traffic is switched. If it fails, you stay on Blue.",
    "hint": "Two parallel environments."
  },
  {
    "id": 136,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is the 'Circuit Breaker' state when it is currently allowing a limited number of test requests to pass through to see if the service has recovered?",
    "options": [
      "Open",
      "Closed",
      "Disabled",
      "Half-Open"
    ],
    "answer": 3,
    "explanation": "In the Half-Open state, the system tests the failing service to see if it is ready to go back to the 'Closed' (normal) state.",
    "hint": "The testing state."
  },
  {
    "id": 137,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "When migrating data, 'Schema Mapping' refers to:",
    "options": [
      "Drawing a map of the data center.",
      "Deleting the old schema.",
      "Defining how data fields in the source system correspond to data fields in the target system.",
      "Encrypting the database schema."
    ],
    "answer": 2,
    "explanation": "Schema mapping ensures that data like 'Cust_Name' in the old system ends up in 'FullName' in the new system correctly.",
    "hint": "Field-to-field matching."
  },
  {
    "id": 138,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Infrastucture as Code' (IaC)?",
    "options": [
      "Managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration.",
      "Building servers out of Lego blocks.",
      "A code of conduct for infrastructure engineers.",
      "Writing the server manuals in HTML."
    ],
    "answer": 0,
    "explanation": "IaC (using tools like Terraform or Bicep) allows for automated, repeatable, and version-controlled environment setup.",
    "hint": "Automated provisioning."
  },
  {
    "id": 139,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which pattern is used to maintain data consistency across microservices when a single transaction spans multiple services?",
    "options": [
      "Observer Pattern",
      "Saga Pattern",
      "Gateway Pattern",
      "Singleton Pattern"
    ],
    "answer": 1,
    "explanation": "The Saga pattern manages distributed transactions through a sequence of local transactions and compensating actions if one fails.",
    "hint": "Distributed transaction manager."
  },
  {
    "id": 140,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "A company wants to prevent 'Data Spill' between two departments using the same cloud subscription. Which Azure/AWS concept provides the best logical isolation?",
    "options": [
      "Different passwords",
      "Separate Resource Groups / Accounts",
      "Separate Folders",
      "Separate Tags"
    ],
    "answer": 1,
    "explanation": "Using separate Accounts (AWS) or Subscriptions/Resource Groups (Azure) with strict IAM/RBAC is the standard for isolation.",
    "hint": "Logical containers."
  },
  {
    "id": 141,
    "difficulty": "medium",
    "category": "togaf",
    "question": "In TOGAF, what is the 'Business Transformation Readiness Assessment'?",
    "options": [
      "A test for developers.",
      "A check for server capacity.",
      "A financial audit.",
      "An evaluation of the organization's ability and willingness to undergo the changes proposed by the architecture."
    ],
    "answer": 3,
    "explanation": "This assessment identifies cultural or structural hurdles that might block the implementation of the architecture.",
    "hint": "Is the company ready for change?"
  },
  {
    "id": 142,
    "difficulty": "easy",
    "category": "btabok",
    "question": "Which of these is a 'Cross-Cutting' Quality Attribute?",
    "options": [
      "The 'Contact Us' page",
      "Security",
      "Search Functionality",
      "PDF Download"
    ],
    "answer": 1,
    "explanation": "Security is a cross-cutting concern because it must be applied across all layers and functions of the system.",
    "hint": "Affects the whole system."
  },
  {
    "id": 143,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is the 'Critical Success Factor' (CSF) for a project?",
    "options": [
      "The key areas or activities that must go right for the project to achieve its mission.",
      "The most expensive part of the project.",
      "The name of the lead architect.",
      "The date of the office party."
    ],
    "answer": 0,
    "explanation": "CSFs are the essential elements that guarantee project success if handled correctly.",
    "hint": "Must-win areas."
  },
  {
    "id": 144,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In a 'Microservices' architecture, what is 'Service Discovery' used for?",
    "options": [
      "Finding where the servers are located in the building.",
      "Allowing services to find and communicate with each other dynamically as instances start and stop.",
      "Finding the phone number of the support team.",
      "Looking for free software on the internet."
    ],
    "answer": 1,
    "explanation": "Service Discovery (like Consul or Kubernetes DNS) manages the dynamic network locations of service instances.",
    "hint": "Dynamic address book for services."
  },
  {
    "id": 145,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which ADM phase deals with 'Post-Implementation' reviews to ensure the business value was actually realized?",
    "options": [
      "Phase G",
      "Preliminary Phase",
      "Phase A",
      "Phase H"
    ],
    "answer": 3,
    "explanation": "Phase H is where the architect monitors the value of the implementation and triggers new cycles if needed.",
    "hint": "Monitoring and value realization."
  },
  {
    "id": 146,
    "difficulty": "easy",
    "category": "btabok",
    "question": "In architecture, what is a 'Requirement'?",
    "options": [
      "A list of items to buy.",
      "The architect's salary.",
      "A documented need or condition that a system or project must meet.",
      "A suggestion from a user."
    ],
    "answer": 2,
    "explanation": "Requirements are the foundation of any design, representing the 'needs' of the stakeholders.",
    "hint": "A 'must-have' or 'must-do'."
  },
  {
    "id": 147,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Resource Leveling'?",
    "options": [
      "Adjusting the project schedule so that resources are not over-allocated (e.g., working 20 hours a day).",
      "Firing half the team to save money.",
      "Moving everyone to the same floor.",
      "Making sure everyone has the same desk."
    ],
    "answer": 0,
    "explanation": "Resource leveling ensures a sustainable workload for the team, though it often extends the project timeline.",
    "hint": "Balancing the workload."
  },
  {
    "id": 148,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Semantic Versioning' (SemVer)?",
    "options": [
      "Versioning based on the date.",
      "Giving every project a random number.",
      "A versioning system using Major.Minor.Patch format to communicate the nature of changes (breaking, features, fixes).",
      "Naming versions after Greek gods."
    ],
    "answer": 2,
    "explanation": "SemVer (e.g., 2.1.0) helps architects and developers understand the impact of upgrading a dependency.",
    "hint": "Major.Minor.Patch."
  },
  {
    "id": 149,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which role chairs the 'Architecture Board'?",
    "options": [
      "The most junior developer",
      "A senior executive (e.g., CTO or Lead EA)",
      "An outside consultant",
      "The Project Manager"
    ],
    "answer": 1,
    "explanation": "The Architecture Board requires high-level authority to make binding decisions on governance.",
    "hint": "Executive leadership."
  },
  {
    "id": 150,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In a 'Cloud-Native' application, what does 'Statelessness' mean?",
    "options": [
      "The application is always turned off.",
      "The application is illegal in some states.",
      "The application has no users.",
      "The application does not store user session data on the local server, allowing any instance to handle any request."
    ],
    "answer": 3,
    "explanation": "Statelessness is key to scalability, as any server in a cluster can handle a request without needing local memory of previous interactions.",
    "hint": "No local session storage."
  },
  {
    "id": 151,
    "difficulty": "medium",
    "category": "togaf",
    "question": "According to TOGAF, which of the following is a characteristic of a good Architecture Principle?",
    "options": [
      "It should change every time a new project starts.",
      "It should be stable, understandable, and complete.",
      "It should be technically specific to a single vendor.",
      "It should only be accessible by the IT department."
    ],
    "answer": 1,
    "explanation": "TOGAF principles must be stable, understandable, complete, robust, and consistent. They provide long-term guidance.",
    "hint": "Think of principles as 'Enduring Rules'."
  },
  {
    "id": 152,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In the Preliminary Phase, what is the 'Request for Architecture Work'?",
    "options": [
      "A document sent from the Architecture Board to the developers.",
      "A document from the sponsoring organization to the architecture organization to trigger a new ADM cycle.",
      "A request for a new laptop for the architect.",
      "A bill for the architecture services."
    ],
    "answer": 1,
    "explanation": "The Request for Architecture Work is the initial trigger that comes from the business/sponsor to start the architecture process.",
    "hint": "The 'Starting Gun' from the business."
  },
  {
    "id": 153,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which TOGAF artifact provides a high-level visual representation of the business functions and the locations where they are performed?",
    "options": [
      "Network Computing Diagram",
      "Application Communication Diagram",
      "Business Footprint Diagram",
      "Goal/Objective/Service Diagram"
    ],
    "answer": 2,
    "explanation": "The Business Footprint Diagram maps business functions to organizational units and locations, showing the 'reach' of the business.",
    "hint": "Mapping functions to locations."
  },
  {
    "id": 154,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is 'Architecture Partitioning' in the context of the Preliminary Phase?",
    "options": [
      "Creating different VLANs for the IT team.",
      "Separating the architects from the developers in the office.",
      "Dividing the hard drive into sections.",
      "Breaking the enterprise architecture into manageable segments or 'cells' that can be developed independently."
    ],
    "answer": 3,
    "explanation": "Partitioning allows large organizations to manage complex architectures by dividing them by geography, business unit, or capability.",
    "hint": "Divide and conquer the enterprise."
  },
  {
    "id": 155,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which ADM Phase produces the 'Data Dissemination Diagram'?",
    "options": [
      "Phase D: Technology Architecture",
      "Phase E: Opportunities and Solutions",
      "Phase C: Data Architecture",
      "Phase B: Business Architecture"
    ],
    "answer": 2,
    "explanation": "The Data Dissemination Diagram shows how data entities are shared across applications and business services.",
    "hint": "Part of the 'Information Systems' architecture."
  },
  {
    "id": 156,
    "difficulty": "easy",
    "category": "togaf",
    "question": "What is the primary purpose of the 'Architecture Contract' in Phase G?",
    "options": [
      "To buy software licenses.",
      "To ensure that the implementation project stays compliant with the architecture.",
      "To define the architect's salary.",
      "To hire new consultants."
    ],
    "answer": 1,
    "explanation": "Architecture Contracts are agreements between the architecture team and the implementation team to ensure the build matches the design.",
    "hint": "Governance through agreement."
  },
  {
    "id": 157,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In TOGAF, what is the 'Standards Information Base' (SIB)?",
    "options": [
      "A list of all employees' names.",
      "A database of all past project failures.",
      "The source code repository.",
      "A repository of industry standards and internal policies that the architecture must comply with."
    ],
    "answer": 3,
    "explanation": "The SIB is a part of the Architecture Repository that holds the 'Rules' and 'Standards' for the enterprise.",
    "hint": "The 'Rulebook' for tech."
  },
  {
    "id": 158,
    "difficulty": "medium",
    "category": "togaf",
    "question": "During Phase E (Opportunities and Solutions), which document consolidates the gaps identified in Phases B, C, and D?",
    "options": [
      "Architecture Roadmap",
      "Transition Architecture",
      "Architecture Vision",
      "Consolidated Gaps, Solutions, and Dependencies Matrix"
    ],
    "answer": 3,
    "explanation": "This matrix helps architects see all the gaps in one place to plan logical implementation packages.",
    "hint": "Bringing all the gaps together."
  },
  {
    "id": 159,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What does the 'III-RM' stand for in TOGAF, and what is its purpose?",
    "options": [
      "International Interface Integration Model; for global networking.",
      "Incremental Information Implementation Roadmap; for project planning.",
      "Integrated Information Infrastructure Reference Model; focuses on application portability and interoperability.",
      "Internal IT Inventory Resource Map; tracks hardware."
    ],
    "answer": 2,
    "explanation": "The III-RM is a reference model that focuses on the 'Boundaryless Information Flow' vision.",
    "hint": "A model for 'Information Flow'."
  },
  {
    "id": 160,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which of the following is an 'Architecture Artifact'?",
    "options": [
      "A diagram, description, or model that describes a part of the architecture.",
      "A coffee machine in the breakroom.",
      "The monthly electricity bill.",
      "A physical server."
    ],
    "answer": 0,
    "explanation": "Artifacts are the 'work products' of the architect, like catalogs, matrices, or diagrams.",
    "hint": "The output of the ADM."
  },
  {
    "id": 161,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In the IASA BTABoK 'Design' pillar, what is the difference between a 'View' and a 'Viewpoint'?",
    "options": [
      "A View is for managers; a Viewpoint is for developers.",
      "They are identical.",
      "A View is 2D; a Viewpoint is 3D.",
      "A Viewpoint is the template/perspective; a View is the actual diagram/model created from that perspective."
    ],
    "answer": 3,
    "explanation": "A viewpoint defines the 'how to look', while a view is 'what you see' for a specific set of stakeholder concerns.",
    "hint": "Perspective vs. Product."
  },
  {
    "id": 162,
    "difficulty": "hard",
    "category": "btabok",
    "question": "Which IASA pillar addresses the 'Buy, Build, or Rent' decision for an enterprise service?",
    "options": [
      "IT Environment",
      "Quality Attributes",
      "Human Dynamics",
      "Business Technology Strategy"
    ],
    "answer": 3,
    "explanation": "Strategic sourcing and investment decisions fall under Business Technology Strategy.",
    "hint": "Sourcing and Strategy."
  },
  {
    "id": 163,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Traceability' in architectural design according to BTABoK?",
    "options": [
      "The speed at which code is written.",
      "The ability to link a design decision back to a specific requirement or business goal.",
      "The ability to track the location of the architect.",
      "The size of the log files."
    ],
    "answer": 1,
    "explanation": "Traceability ensures every component of the architecture exists for a reason (meeting a requirement).",
    "hint": "Requirement to Design link."
  },
  {
    "id": 164,
    "difficulty": "easy",
    "category": "btabok",
    "question": "In the 'Human Dynamics' pillar, what is 'Executive Presence'?",
    "options": [
      "Having a large office.",
      "The CEO being in the office.",
      "The architect's ability to communicate effectively and inspire confidence at the leadership level.",
      "Writing very complex emails."
    ],
    "answer": 2,
    "explanation": "Executive presence is about professional credibility and communication with high-level stakeholders.",
    "hint": "Communication with 'The C-Suite'."
  },
  {
    "id": 165,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What does the BTABoK term 'Value Realization' refer to?",
    "options": [
      "Calculating the cost of the project at the end.",
      "The process of ensuring and measuring that the promised benefits of an architecture are actually achieved after implementation.",
      "Selling the software to another company.",
      "Finding out the price of a server."
    ],
    "answer": 1,
    "explanation": "Value Realization is the final step in the strategy cycle—proving the architecture was worth the investment.",
    "hint": "Measuring the 'Win'."
  },
  {
    "id": 166,
    "difficulty": "medium",
    "category": "btabok",
    "question": "Which BTABoK pillar focuses on 'Infrastructure and Platform' concerns?",
    "options": [
      "Quality Attributes",
      "IT Environment",
      "Design",
      "Business Technology Strategy"
    ],
    "answer": 1,
    "explanation": "IT Environment covers the technical ecosystem including cloud, hardware, and networks.",
    "hint": "The tech foundation."
  },
  {
    "id": 167,
    "difficulty": "medium",
    "category": "btabok",
    "question": "Why is 'Estimation' a critical skill for architects in the BTABoK framework?",
    "options": [
      "To provide the business with realistic expectations of cost, effort, and time for architectural solutions.",
      "To predict the stock price.",
      "To guess when the project will finish.",
      "To fill out spreadsheets for HR."
    ],
    "answer": 0,
    "explanation": "Architects must provide high-level estimates to help the business prioritize different architectural options.",
    "hint": "Predicting cost/effort."
  },
  {
    "id": 168,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In architecture, what is a 'Design Pattern'?",
    "options": [
      "The way the architect dresses.",
      "A reusable solution to a commonly occurring problem in a given context.",
      "A specific brand of computer.",
      "A pretty background on a diagram."
    ],
    "answer": 1,
    "explanation": "Patterns (like Microservices or Observer) allow architects to use proven solutions rather than reinventing the wheel.",
    "hint": "Reusable solution."
  },
  {
    "id": 169,
    "difficulty": "medium",
    "category": "btabok",
    "question": "Which of the following describes the 'Engagement Model' in IASA?",
    "options": [
      "The contract with the internet service provider.",
      "The process of hiring a new architect.",
      "The social media policy of the company.",
      "The defined way the architecture team interacts with projects and the business to deliver value."
    ],
    "answer": 3,
    "explanation": "The engagement model defines how architects 'engage' with the rest of the organization.",
    "hint": "How we work with others."
  },
  {
    "id": 170,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Stakeholder Analysis'?",
    "options": [
      "A technical test for the servers.",
      "Checking who has the keys to the office.",
      "The process of identifying all people affected by a project and determining their needs and influence.",
      "Evaluating the company's stock price."
    ],
    "answer": 2,
    "explanation": "Stakeholder analysis is the first step in managing human dynamics and requirements.",
    "hint": "Identifying the 'People' factors."
  },
  {
    "id": 171,
    "difficulty": "medium",
    "category": "pmp",
    "question": "A project manager is calculating 'Earned Value' (EV). What does this represent?",
    "options": [
      "The value of the work actually performed to date, expressed in terms of the budget assigned to that work.",
      "The cost of the remaining work.",
      "The total amount of money spent so far.",
      "The profit the project has made."
    ],
    "answer": 0,
    "explanation": "EV allows you to measure project progress in financial terms, regardless of how much you have actually spent.",
    "hint": "Value of work done."
  },
  {
    "id": 172,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Gold Plating' and why is it generally discouraged in architecture projects?",
    "options": [
      "Coating cables in gold; it is unnecessary.",
      "Promoting the architect to a higher position; it causes jealousy.",
      "Adding extra features not requested by the client; it wastes time and can introduce new risks/bugs.",
      "Using expensive hardware; it's too costly."
    ],
    "answer": 2,
    "explanation": "Gold plating adds complexity and cost that the customer didn't ask for and might not want.",
    "hint": "Unrequested extras."
  },
  {
    "id": 173,
    "difficulty": "medium",
    "category": "pmp",
    "question": "In PMP, what is the 'Management Reserve'?",
    "options": [
      "The CEO's private parking spot.",
      "A portion of the budget held for 'Unknown-Unknowns' (unforeseen risks).",
      "The team's vacation fund.",
      "The money used to pay the project manager."
    ],
    "answer": 1,
    "explanation": "Management reserves are for risks that were not identified during the planning phase.",
    "hint": "Buffer for the 'Unknown'."
  },
  {
    "id": 174,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is 'Scope Creep'?",
    "options": [
      "The gradual, unauthorized expansion of project scope without adjustments to time or cost.",
      "The architect moving to another project.",
      "The project finishing too early.",
      "A bug in the software code."
    ],
    "answer": 0,
    "explanation": "Scope creep often leads to project failure because the team is doing more work than they have resources for.",
    "hint": "Uncontrolled growth."
  },
  {
    "id": 175,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is the 'Cost Plus Fixed Fee' (CPFF) contract type?",
    "options": [
      "The seller is reimbursed for all allowable costs plus a fixed fee for profit.",
      "The seller is paid a set price regardless of costs.",
      "The price is negotiated after the project is finished.",
      "The buyer pays only for the time spent."
    ],
    "answer": 0,
    "explanation": "CPFF protects the seller from cost overruns but provides a fixed profit amount.",
    "hint": "Cost + Set Profit."
  },
  {
    "id": 176,
    "difficulty": "medium",
    "category": "pmp",
    "question": "Which document defines the 'Quality Standards' the project must adhere to?",
    "options": [
      "Risk Register",
      "Procurement Plan",
      "Scope Statement",
      "Quality Management Plan"
    ],
    "answer": 3,
    "explanation": "The Quality Management Plan describes how the team will implement the organization's quality policy.",
    "hint": "Plan for 'Quality'."
  },
  {
    "id": 177,
    "difficulty": "hard",
    "category": "pmp",
    "question": "In the 'Control Quality' process, what is a 'Control Chart' used for?",
    "options": [
      "To assign tasks to the team.",
      "To determine if a process is stable or has predictable performance.",
      "To track the project budget.",
      "To schedule meetings."
    ],
    "answer": 1,
    "explanation": "Control charts help identify 'Special Cause' variation that needs to be addressed.",
    "hint": "Process stability tool."
  },
  {
    "id": 178,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Project Phase Gate'?",
    "options": [
      "A physical door to the office.",
      "A software security firewall.",
      "The date the project launches.",
      "A review at the end of a phase to decide if the project should continue to the next phase."
    ],
    "answer": 3,
    "explanation": "Phase gates (or 'Kill Points') allow for governance and checking if the project is still viable.",
    "hint": "Continue or Stop?"
  },
  {
    "id": 179,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is 'Empowerment' in project leadership?",
    "options": [
      "Allowing everyone to work from home.",
      "Giving team members the authority to make decisions within their areas of expertise.",
      "Providing more powerful computers.",
      "Giving the PM more money."
    ],
    "answer": 1,
    "explanation": "Empowerment increases team motivation and speed of decision-making.",
    "hint": "Distributing authority."
  },
  {
    "id": 180,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Opportunity Cost' in project selection?",
    "options": [
      "The cost of the project's marketing.",
      "The value of the project not chosen when another project is selected.",
      "The cost of the software license.",
      "The money lost during a project delay."
    ],
    "answer": 1,
    "explanation": "If you choose Project A ($1M value) over Project B ($1.2M value), your opportunity cost is $1.2M.",
    "hint": "Value of the 'Next Best' option."
  },
  {
    "id": 181,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "An organization wants to capture every change made to their database and replicate it to a data warehouse in real-time. Which technique is this?",
    "options": [
      "Batch ETL",
      "Change Data Capture (CDC)",
      "Database Backup",
      "Manual Export"
    ],
    "answer": 1,
    "explanation": "CDC identifies and captures insertions, updates, and deletions applied to a database and makes them available for other systems.",
    "hint": "Capturing changes live."
  },
  {
    "id": 182,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In the 'Saga' pattern for distributed transactions, what is 'Choreography'?",
    "options": [
      "Each service produces and listens to events, deciding its own next step without a central coordinator.",
      "A central service tells every other service what to do.",
      "The way the servers are arranged in the rack.",
      "A dance performed by the developers."
    ],
    "answer": 0,
    "explanation": "Choreography is decentralized, where services communicate via events to maintain consistency.",
    "hint": "Decentralized Saga."
  },
  {
    "id": 183,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is the 'Backends for Frontends' (BFF) pattern primarily used for?",
    "options": [
      "To provide a single backend for all devices.",
      "To hide the database from the users.",
      "To run the backend on a frontend server.",
      "To create specific backend services tailored for different types of clients (e.g., Mobile vs. Web)."
    ],
    "answer": 3,
    "explanation": "BFF allows for optimizing the API responses and performance for specific UI needs (e.g., mobile apps need less data than web).",
    "hint": "Tailored backends."
  },
  {
    "id": 184,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "A company is worried about a single cloud provider going down. They decide to deploy their application to both Azure and AWS. This is a:",
    "options": [
      "Hybrid Cloud strategy",
      "Multi-Cloud strategy",
      "On-premises strategy",
      "Private Cloud strategy"
    ],
    "answer": 1,
    "explanation": "Multi-Cloud involves using multiple public cloud providers to increase resilience and avoid vendor lock-in.",
    "hint": "Using multiple public clouds."
  },
  {
    "id": 185,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Blue-Green Deployment' intended to minimize?",
    "options": [
      "The cost of servers.",
      "Deployment downtime and the risk of a failed release.",
      "The amount of code written.",
      "The number of colors used in the UI."
    ],
    "answer": 1,
    "explanation": "By switching traffic between two identical environments, you can ensure the new version works before making it live, with nearly instant rollback.",
    "hint": "Zero-downtime switch."
  },
  {
    "id": 186,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "In a 'Microservices' environment, why is 'Log Aggregation' (e.g., ELK Stack) essential?",
    "options": [
      "To save space on the servers.",
      "To delete logs automatically.",
      "To centralize logs from many different services into one searchable place for troubleshooting.",
      "To make the logs look prettier."
    ],
    "answer": 2,
    "explanation": "Without centralization, it is nearly impossible to trace a single request as it flows through multiple services.",
    "hint": "Centralizing many logs."
  },
  {
    "id": 187,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Polyglot Persistence'?",
    "options": [
      "Using only one database for everything.",
      "Using different database technologies (SQL, NoSQL, Graph) for different parts of an application based on their specific needs.",
      "Translating the database into multiple languages.",
      "Saving data in many different file formats."
    ],
    "answer": 1,
    "explanation": "Polyglot persistence recognizes that different data models (e.g., relational for transactions, document for catalogs) are best for different tasks.",
    "hint": "Multiple DB types."
  },
  {
    "id": 188,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "During a migration, what is a 'Phased Migration'?",
    "options": [
      "Moving the application in stages (e.g., department by department or feature by feature) over time.",
      "Moving everything at once on a weekend.",
      "Moving the data but not the application.",
      "Moving only the photos and videos."
    ],
    "answer": 0,
    "explanation": "Phased migrations reduce risk by spreading the change over a longer period and allowing for learning between phases.",
    "hint": "Step-by-step move."
  },
  {
    "id": 189,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Serverless Computing' (FaaS)?",
    "options": [
      "Computing without any servers at all.",
      "A model where the cloud provider manages the server infrastructure and the architect only focuses on the code (functions).",
      "Using only local laptops for processing.",
      "Computing done only in the daytime."
    ],
    "answer": 1,
    "explanation": "In Serverless (like AWS Lambda or Azure Functions), you pay only for the execution time, and scaling is handled automatically by the provider.",
    "hint": "Focus on code, not servers."
  },
  {
    "id": 190,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "Which pattern is used to provide high availability by running an identical copy of the database that can take over if the primary fails?",
    "options": [
      "Replication / Mirroring",
      "Normalization",
      "Sharding",
      "Indexing"
    ],
    "answer": 0,
    "explanation": "Database replication ensures data is copied to a secondary site for failover purposes.",
    "hint": "Copying data for safety."
  },
  {
    "id": 191,
    "difficulty": "easy",
    "category": "togaf",
    "question": "Which TOGAF phase is responsible for 'Technology Architecture'?",
    "options": [
      "Phase B",
      "Phase C",
      "Phase A",
      "Phase D"
    ],
    "answer": 3,
    "explanation": "Phase D defines the software and hardware infrastructure required.",
    "hint": "The fourth ADM phase."
  },
  {
    "id": 192,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Agility' as a Quality Attribute?",
    "options": [
      "The number of meetings per week.",
      "How fast the developers can run.",
      "The ability of the system (and organization) to respond quickly to change.",
      "The speed of the processor."
    ],
    "answer": 2,
    "explanation": "Agility in architecture means the system is designed to be easily modified as business needs evolve.",
    "hint": "Responsiveness to change."
  },
  {
    "id": 193,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Float' (or Slack) in a project schedule?",
    "options": [
      "The time a task can be delayed without delaying the project finish date.",
      "The number of team members on vacation.",
      "The time spent in meetings.",
      "The cost of the project."
    ],
    "answer": 0,
    "explanation": "Tasks on the critical path have zero float.",
    "hint": "Buffer time for a task."
  },
  {
    "id": 194,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In a 'Microservices' architecture, what is 'API Versioning' used for?",
    "options": [
      "To count how many APIs there are.",
      "To charge users more for newer versions.",
      "To allow for updates to a service without breaking existing clients that rely on the older version.",
      "To make the API run faster."
    ],
    "answer": 2,
    "explanation": "Versioning (e.g., /v1/ /v2/) is critical for backward compatibility in distributed systems.",
    "hint": "Backward compatibility."
  },
  {
    "id": 195,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Architecture Content Framework'?",
    "options": [
      "A list of software for architects.",
      "A social network for architects.",
      "A way to organize the office files.",
      "A structural model for architectural artifacts that provides a consistent way to describe them."
    ],
    "answer": 3,
    "explanation": "It provides a meta-model for all the artifacts produced during the ADM.",
    "hint": "Structure for artifacts."
  },
  {
    "id": 196,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Availability'?",
    "options": [
      "The amount of free disk space.",
      "The number of available architects.",
      "The speed of the internet.",
      "The percentage of time a system is operational and accessible when needed."
    ],
    "answer": 3,
    "explanation": "Availability is usually measured in 'nines' (e.g., 99.9% uptime).",
    "hint": "Uptime."
  },
  {
    "id": 197,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Procurement' in project management?",
    "options": [
      "Hiring new employees.",
      "Writing code.",
      "Buying lunch for the team.",
      "The process of acquiring goods and services from outside the project team."
    ],
    "answer": 3,
    "explanation": "Procurement involves contracts, vendors, and purchasing of hardware/software.",
    "hint": "Buying from outside."
  },
  {
    "id": 198,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Data Sovereignty'?",
    "options": [
      "The database being the boss of the system.",
      "The concept that data is subject to the laws of the country in which it is physically located.",
      "The architect having total control over data.",
      "Encrypting the data with a royal key."
    ],
    "answer": 1,
    "explanation": "This is a critical concern for cloud migrations and multinational enterprises.",
    "hint": "Geographic data laws."
  },
  {
    "id": 199,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is a 'Building Block' in TOGAF?",
    "options": [
      "A component of the server rack.",
      "A brick used in the data center wall.",
      "A small piece of code.",
      "A package of functionality defined to meet business needs across an organization."
    ],
    "answer": 3,
    "explanation": "Building blocks are reusable components of business, IT, or architectural capability.",
    "hint": "Reusable capability unit."
  },
  {
    "id": 200,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is the 'Strangler Fig' pattern primarily used for?",
    "options": [
      "To organize the team in a tree-like structure.",
      "To encrypt data using a botanical algorithm.",
      "To kill a project that is failing.",
      "To incrementally migrate a legacy system by gradually replacing functional pieces with new services."
    ],
    "answer": 3,
    "explanation": "The new system 'grows' around the old one until the old one can be retired.",
    "hint": "Incremental legacy replacement."
  },
  {
    "id": 201,
    "difficulty": "medium",
    "category": "togaf",
    "question": "In TOGAF Phase F (Migration Planning), what is the primary purpose of the 'Implementation and Migration Plan'?",
    "options": [
      "To list all the hardware serial numbers.",
      "To provide a technical manual for developers.",
      "To define the company's marketing strategy.",
      "To provide a schedule of projects that will realize the Target Architecture."
    ],
    "answer": 3,
    "explanation": "Phase F finalizes the Implementation and Migration Plan, which provides a detailed roadmap and schedule for the work packages.",
    "hint": "The detailed 'How and When'."
  },
  {
    "id": 202,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is the 'Requirements Management' process in the ADM?",
    "options": [
      "A database of software bugs.",
      "A continuous process that operates throughout all phases of the ADM cycle.",
      "A process performed only by the business analysts.",
      "A specific phase that happens after Phase H."
    ],
    "answer": 1,
    "explanation": "Requirements Management is at the center of the ADM circle, ensuring that requirements are identified, stored, and addressed in every phase.",
    "hint": "The center of the ADM circle."
  },
  {
    "id": 203,
    "difficulty": "medium",
    "category": "togaf",
    "question": "During Phase G (Implementation Governance), what is 'Architecture Compliance'?",
    "options": [
      "The cost of the project.",
      "The degree to which an implementation project stays true to the defined architecture.",
      "The speed of the network.",
      "The number of meetings the architect attends."
    ],
    "answer": 1,
    "explanation": "Compliance ensures that the build doesn't deviate from the architectural standards and the vision.",
    "hint": "Staying true to the design."
  },
  {
    "id": 204,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In Phase E (Opportunities and Solutions), what is the 'Work Package'?",
    "options": [
      "A zip file containing the source code.",
      "A set of actions identified to achieve one or more objectives for the architecture.",
      "A group of architects working together.",
      "A physical box of equipment."
    ],
    "answer": 1,
    "explanation": "Work packages are the logical groupings of activities used to create the implementation projects.",
    "hint": "Logical groupings of actions."
  },
  {
    "id": 205,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which TOGAF document provides a summary of the business value and risks associated with each work package?",
    "options": [
      "Business Case",
      "Architecture Vision",
      "Technical Reference Model",
      "Gap Analysis"
    ],
    "answer": 0,
    "explanation": "The Business Case is used to justify the investment by highlighting value vs. cost and risk.",
    "hint": "The justification for funding."
  },
  {
    "id": 206,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In Phase H, which type of architecture change is categorized as a 'Re-architecting Change'?",
    "options": [
      "A small bug fix.",
      "Adding a new user to the system.",
      "A change that requires a full pass through the ADM cycle to redefine the architecture.",
      "Updating a driver on a single server."
    ],
    "answer": 2,
    "explanation": "Re-architecting changes are significant enough that they cannot be handled through simple maintenance and require a new ADM cycle.",
    "hint": "Major strategic shift."
  },
  {
    "id": 207,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the purpose of the 'Architecture Requirements Specification'?",
    "options": [
      "To track the project's daily status.",
      "To store the source code of the project.",
      "To provide a set of quantitative statements that outline what an implementation project must do to comply with the architecture.",
      "To list the personal details of the architects."
    ],
    "answer": 2,
    "explanation": "This document provides the measurable criteria for compliance during the implementation phase.",
    "hint": "Quantitative compliance rules."
  },
  {
    "id": 208,
    "difficulty": "easy",
    "category": "togaf",
    "question": "Which ADM phase is concerned with 'Migration Planning'?",
    "options": [
      "Phase D",
      "Phase B",
      "Phase H",
      "Phase F"
    ],
    "answer": 3,
    "explanation": "Phase F (Migration Planning) focuses on creating the detailed roadmap and project schedule.",
    "hint": "F for 'Finalizing' the plan."
  },
  {
    "id": 209,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In the 'Architecture Content Framework', what is a 'Catalog'?",
    "options": [
      "A magazine about technology.",
      "A folder of design documents.",
      "A structured list of building blocks or artifacts of a specific type.",
      "A diagram of the network."
    ],
    "answer": 2,
    "explanation": "Catalogs are non-graphical lists (e.g., Application Catalog, Data Entity Catalog) used to manage architecture metadata.",
    "hint": "A structured list."
  },
  {
    "id": 210,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What does the 'Implementation Factor Assessment and Deduction Matrix' help an architect determine?",
    "options": [
      "The salary of the developers.",
      "The number of software licenses needed.",
      "The risks and constraints that will affect the implementation and migration of the architecture.",
      "The speed of the cloud provider."
    ],
    "answer": 2,
    "explanation": "This matrix (Phase E/F) identifies factors like 'Legacy data quality' that could slow down or block the migration.",
    "hint": "Identifying implementation blockers."
  },
  {
    "id": 211,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In Information Architecture, what is 'Master Data Management' (MDM)?",
    "options": [
      "Backing up the data every night.",
      "Using a single database for everything.",
      "Giving all data to the Master Architect.",
      "A method of ensuring that the organization always has a 'single version of the truth' for core business entities (e.g., Customer, Product)."
    ],
    "answer": 3,
    "explanation": "MDM provides the processes and tools to maintain consistent and accurate core data across the enterprise.",
    "hint": "Single version of the truth."
  },
  {
    "id": 212,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Information Lifecycle Management' (ILM)?",
    "options": [
      "Managing data from its creation/capture through its active use, storage, and eventual deletion/archival.",
      "The time it takes to write a line of code.",
      "The process of buying new hard drives.",
      "The speed at which data travels through a cable."
    ],
    "answer": 0,
    "explanation": "ILM ensures that data is stored cost-effectively based on its current value to the business.",
    "hint": "Birth to death of data."
  },
  {
    "id": 213,
    "difficulty": "medium",
    "category": "btabok",
    "question": "Which of the following is a 'Software Architecture' competency in BTABoK?",
    "options": [
      "Negotiating internet contracts.",
      "Understanding application patterns, modularity, and component interfaces.",
      "Repairing a broken server.",
      "Installing Windows on a laptop."
    ],
    "answer": 1,
    "explanation": "Software architecture focuses on the structure and interactions of the application components.",
    "hint": "Component structure and patterns."
  },
  {
    "id": 214,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Loose Coupling' and why is it preferred in enterprise architecture?",
    "options": [
      "Sharing the same database table between all services.",
      "Connecting servers with loose cables; it allows for better airflow.",
      "Designing components so they have minimal knowledge of each other, allowing them to be changed independently.",
      "Using a single large application for everything."
    ],
    "answer": 2,
    "explanation": "Loose coupling reduces dependencies, meaning a change in one service doesn't break others.",
    "hint": "Independence of components."
  },
  {
    "id": 215,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In Information Architecture, what is 'Metadata'?",
    "options": [
      "A type of high-speed network.",
      "Data that provides information about other data (e.g., author, date created, data type).",
      "The size of the database in megabytes.",
      "Data that has been encrypted."
    ],
    "answer": 1,
    "explanation": "Metadata is critical for data discovery, governance, and understanding context.",
    "hint": "Data about data."
  },
  {
    "id": 216,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Performance' as a Quality Attribute?",
    "options": [
      "The number of features in the software.",
      "The system's ability to respond to requests within a specified timeframe.",
      "How many employees are working.",
      "The cost of the hardware."
    ],
    "answer": 1,
    "explanation": "Performance is usually measured by latency (response time) or throughput (requests per second).",
    "hint": "Speed and responsiveness."
  },
  {
    "id": 217,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Taxonomy' in the context of Information Architecture?",
    "options": [
      "The layout of the office furniture.",
      "A way of writing code in Python.",
      "The process of calculating taxes for the IT department.",
      "A hierarchical classification system used to organize and categorize information."
    ],
    "answer": 3,
    "explanation": "Taxonomies help users and systems find and navigate information through logical categorization.",
    "hint": "Hierarchical classification."
  },
  {
    "id": 218,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Maintainability'?",
    "options": [
      "The cost of the electricity bill.",
      "The ability of the janitor to clean the office.",
      "The uptime of the website.",
      "The ease with which a software system can be modified to correct faults or improve performance."
    ],
    "answer": 3,
    "explanation": "Maintainable systems are modular, well-documented, and easy for new developers to understand.",
    "hint": "Ease of making changes."
  },
  {
    "id": 219,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In the IT Environment pillar, what is 'Virtualization'?",
    "options": [
      "Playing video games at work.",
      "A meeting held over video conference.",
      "An architect's imagination.",
      "The process of creating a software-based (virtual) representation of something, such as applications, servers, or networks."
    ],
    "answer": 3,
    "explanation": "Virtualization allows for better resource utilization by running multiple virtual systems on one physical host.",
    "hint": "Software-based hardware."
  },
  {
    "id": 220,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is a 'Non-Functional Requirement' (NFR)?",
    "options": [
      "A requirement that specifies criteria that can be used to judge the operation of a system (e.g., security, reliability).",
      "The architect's personal opinion.",
      "A bug report.",
      "A requirement that the system doesn't need to do."
    ],
    "answer": 0,
    "explanation": "NFRs (Quality Attributes) define 'how' the system should behave, rather than 'what' it should do.",
    "hint": "The '-ilities' (Scalability, etc.)."
  },
  {
    "id": 221,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Stakeholder Engagement Plan'?",
    "options": [
      "A plan that identifies the strategies and actions required to promote productive involvement of stakeholders.",
      "A manual for using the project software.",
      "A schedule of marketing advertisements.",
      "A list of stakeholders' home addresses."
    ],
    "answer": 0,
    "explanation": "It outlines how to communicate with and involve stakeholders based on their influence and interest.",
    "hint": "How to involve people."
  },
  {
    "id": 222,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is the 'Communication Requirements Analysis'?",
    "options": [
      "Testing the speed of the internet.",
      "Checking if the telephones are working.",
      "Determining the information needs of the project stakeholders (who needs what information, when, and how).",
      "Writing the monthly newsletter."
    ],
    "answer": 2,
    "explanation": "This ensures that stakeholders get the right information at the right time without being overwhelmed.",
    "hint": "Who needs what info?"
  },
  {
    "id": 223,
    "difficulty": "medium",
    "category": "pmp",
    "question": "In PMP, what is 'Push Communication'?",
    "options": [
      "A user requesting data from a server.",
      "Pushing someone to work harder.",
      "Physically moving a server rack.",
      "Sending information directly to recipients (e.g., emails, memos, reports)."
    ],
    "answer": 3,
    "explanation": "Push communication is one-way, from the sender to the receiver, without a guarantee that it was understood.",
    "hint": "Sending/Mailing out info."
  },
  {
    "id": 224,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Pull Communication'?",
    "options": [
      "Downloading a file from a peer.",
      "Pulling a cable out of a server.",
      "A manager forcing a team to finish a task.",
      "Placing information in a central location for stakeholders to access at their own discretion (e.g., Intranets, Wikis)."
    ],
    "answer": 3,
    "explanation": "Pull communication allows stakeholders to get information when they need it.",
    "hint": "Self-service information."
  },
  {
    "id": 225,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is the main goal of 'Manage Stakeholder Engagement'?",
    "options": [
      "To make everyone like the project manager.",
      "To limit the number of stakeholders.",
      "To record every conversation in the project.",
      "To communicate and work with stakeholders to meet their needs and address issues as they occur."
    ],
    "answer": 3,
    "explanation": "Effective engagement ensures stakeholder support and minimizes resistance.",
    "hint": "Active relationship management."
  },
  {
    "id": 226,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is the 'Salience Model' for stakeholders?",
    "options": [
      "A model for mapping the office seating chart.",
      "A technical diagram of stakeholder systems.",
      "A way to classify stakeholders based on their power, urgency, and legitimacy.",
      "A model for calculating stakeholder salaries."
    ],
    "answer": 2,
    "explanation": "The Salience Model helps prioritize stakeholders in complex environments.",
    "hint": "Power, Urgency, Legitimacy."
  },
  {
    "id": 227,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is an 'Issue Log' in project management?",
    "options": [
      "A list of project expenses.",
      "A document where all project issues (points of debate, conflict, or concern) are recorded and tracked to resolution.",
      "A list of software bugs only.",
      "A diary of the project manager."
    ],
    "answer": 1,
    "explanation": "Issues are current problems; risks are potential future problems.",
    "hint": "Current problems tracker."
  },
  {
    "id": 228,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Interactive Communication'?",
    "options": [
      "A user clicking buttons on a website.",
      "Two-way or multi-way exchange of information (e.g., meetings, phone calls, video conferences).",
      "Programming an interactive UI.",
      "Watching a video about the project."
    ],
    "answer": 1,
    "explanation": "Interactive communication is the most effective way to ensure mutual understanding.",
    "hint": "Two-way conversation."
  },
  {
    "id": 229,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What does 'Sponsor' refer to in a PMP context?",
    "options": [
      "The company that sells the software.",
      "A person who advertises the project.",
      "The lead developer.",
      "A person or group that provides resources and support for the project and is accountable for enabling success."
    ],
    "answer": 3,
    "explanation": "The sponsor provides the 'authority' and 'funding' for the project.",
    "hint": "Authority and Funding source."
  },
  {
    "id": 230,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is 'Active Listening'?",
    "options": [
      "Pretending to listen while thinking about code.",
      "Recording a meeting.",
      "Listening to music while working.",
      "Confirming understanding by asking questions and providing feedback to the speaker."
    ],
    "answer": 3,
    "explanation": "Active listening is crucial for architects to gather accurate requirements.",
    "hint": "Listening with feedback."
  },
  {
    "id": 231,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "An organization needs to secure their APIs. What is the difference between OAuth 2.0 and OpenID Connect (OIDC)?",
    "options": [
      "OAuth 2.0 is for Authorization; OIDC is an identity layer on top of OAuth 2.0 for Authentication.",
      "OAuth is for passwords; OIDC is for fingerprints.",
      "They are the same.",
      "OAuth is for the web; OIDC is for mobile apps."
    ],
    "answer": 0,
    "explanation": "OAuth gives 'permission' (Authorization); OIDC tells you 'who' the user is (Authentication).",
    "hint": "Authorization vs. Authentication."
  },
  {
    "id": 232,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is an 'API Gateway' primarily used for?",
    "options": [
      "To host the database.",
      "To act as a single entry point for clients, handling tasks like routing, rate limiting, and security.",
      "To store the source code.",
      "To connect the mouse to the computer."
    ],
    "answer": 1,
    "explanation": "API Gateways simplify the client's job by providing a unified interface to multiple backend microservices.",
    "hint": "Single entry point for APIs."
  },
  {
    "id": 233,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Content Delivery Network' (CDN) caching?",
    "options": [
      "Caching the user's password in the browser.",
      "Storing static assets (images, JS, CSS) on servers closer to the user to reduce latency.",
      "Storing the database on a local server.",
      "Storing the architect's files in the cloud."
    ],
    "answer": 1,
    "explanation": "CDNs improve performance by serving content from 'edge' locations geographically closer to users.",
    "hint": "Edge caching for speed."
  },
  {
    "id": 234,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In a microservices architecture, what is a 'Service Mesh' (e.g., Istio)?",
    "options": [
      "A web page that lists all services.",
      "A network of cables connecting servers.",
      "A dedicated infrastructure layer for handling service-to-service communication, including security and observability.",
      "A way to mesh different databases together."
    ],
    "answer": 2,
    "explanation": "A service mesh offloads communication logic (retries, mTLS) from the application code to a sidecar proxy.",
    "hint": "Infra layer for service traffic."
  },
  {
    "id": 235,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'RBAC' (Role-Based Access Control)?",
    "options": [
      "Giving the architect a special password.",
      "Assigning permissions to roles, and then assigning users to those roles.",
      "Checking the user's IP address.",
      "Allowing everyone access to everything."
    ],
    "answer": 1,
    "explanation": "RBAC simplifies security management by grouping permissions into logical roles (e.g., Admin, Viewer).",
    "hint": "Permissions by Role."
  },
  {
    "id": 236,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Zero Trust' architecture?",
    "options": [
      "Not trusting the architect.",
      "Using only physical keys for security.",
      "A security model that requires strict identity verification for every person and device trying to access resources, regardless of whether they are inside or outside the network perimeter.",
      "A network without any firewalls."
    ],
    "answer": 2,
    "explanation": "Zero Trust assumes the network is compromised and verifies every request.",
    "hint": "Never trust, always verify."
  },
  {
    "id": 237,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Data Encryption at Rest'?",
    "options": [
      "Encrypting data while the architect is sleeping.",
      "Encrypting data when it is stored on physical media (e.g., hard drives, cloud storage).",
      "Turning off the database at night.",
      "Encrypting data as it travels across the internet."
    ],
    "answer": 1,
    "explanation": "Encryption at rest protects data if the physical storage media is stolen or accessed improperly.",
    "hint": "Stored data security."
  },
  {
    "id": 238,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Webhook'?",
    "options": [
      "A security feature for browsers.",
      "A hook used to hang a computer on the wall.",
      "A tool for catching fish on the internet.",
      "A way for an application to provide other applications with real-time information via HTTP POST requests triggered by an event."
    ],
    "answer": 3,
    "explanation": "Webhooks allow for 'event-driven' communication where one system notifies another immediately when something happens.",
    "hint": "Event-triggered HTTP callback."
  },
  {
    "id": 239,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'SQL Injection'?",
    "options": [
      "A type of cyberattack where malicious SQL code is inserted into a query to gain unauthorized access to data.",
      "A way to make the database run faster.",
      "Deleting a database table.",
      "Connecting two databases together."
    ],
    "answer": 0,
    "explanation": "Architects must design systems to prevent SQL injection by using parameterized queries.",
    "hint": "Malicious code in queries."
  },
  {
    "id": 240,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Multi-Factor Authentication' (MFA)?",
    "options": [
      "Having many different passwords.",
      "Logging in from multiple computers at once.",
      "The architect checking the user's ID card.",
      "Requiring two or more verification factors to gain access to a resource (e.g., password + phone code)."
    ],
    "answer": 3,
    "explanation": "MFA significantly increases security by ensuring that a stolen password alone is not enough to gain access.",
    "hint": "Something you know + have."
  },
  {
    "id": 241,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "In Disaster Recovery, what does 'RTO' (Recovery Time Objective) mean?",
    "options": [
      "The maximum acceptable amount of time a system can be down after a failure.",
      "The age of the oldest backup.",
      "The total cost of the recovery.",
      "The time it takes to drive to the data center."
    ],
    "answer": 0,
    "explanation": "RTO defines how fast you need to be 'back online'.",
    "hint": "Uptime deadline."
  },
  {
    "id": 242,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "In Disaster Recovery, what does 'RPO' (Recovery Point Objective) mean?",
    "options": [
      "The maximum acceptable amount of data loss measured in time (e.g., 'we can lose up to 1 hour of data').",
      "The number of servers to be recovered.",
      "The location of the backup data center.",
      "The percentage of data that survived."
    ],
    "answer": 0,
    "explanation": "RPO defines how 'fresh' your data must be after recovery.",
    "hint": "Data loss limit."
  },
  {
    "id": 243,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "Which Disaster Recovery strategy has the lowest RTO and RPO but the highest cost?",
    "options": [
      "Warm Standby",
      "Multi-Site Active-Active (Hot)",
      "Pilot Light",
      "Backup and Restore (Cold)"
    ],
    "answer": 1,
    "explanation": "Active-Active regions serve traffic simultaneously; if one fails, the other already has all the data and is running.",
    "hint": "Fully redundant running sites."
  },
  {
    "id": 244,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Reliability'?",
    "options": [
      "The speed of the processor.",
      "How many features the system has.",
      "The probability that a system will perform its intended function without failure for a specified period of time.",
      "The cost of the software."
    ],
    "answer": 2,
    "explanation": "Reliability is about the system working correctly and consistently over time.",
    "hint": "Consistency of function."
  },
  {
    "id": 245,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is an 'Architecture Governance Framework'?",
    "options": [
      "A set of rules for the IT department.",
      "A software tool for writing code.",
      "A government department for architects.",
      "A set of processes, roles, and structures to ensure that the architecture is managed and implemented correctly."
    ],
    "answer": 3,
    "explanation": "Governance ensures the architecture achieves the desired business goals and remains compliant.",
    "hint": "Processes and roles for oversight."
  },
  {
    "id": 246,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In BTABoK, 'Information Security Architecture' is responsible for:",
    "options": [
      "Defining the structures, standards, and processes to protect information assets and ensure confidentiality, integrity, and availability.",
      "Managing the building's physical security.",
      "Resetting user passwords.",
      "Buying anti-virus software."
    ],
    "answer": 0,
    "explanation": "Security architecture must be baked into the design, not added later.",
    "hint": "Protecting CIA (Confidentiality, Integrity, Availability)."
  },
  {
    "id": 247,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Servant Leadership' in the context of Agile projects?",
    "options": [
      "The leader doing all the work for the team.",
      "The leader being a servant to the client.",
      "The leader focusing on the needs of the team members and helping them perform as highly as possible.",
      "Hiring servants for the office."
    ],
    "answer": 2,
    "explanation": "Servant leaders remove blockers and empower the team to make decisions.",
    "hint": "Leading by supporting."
  },
  {
    "id": 248,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Idempotency' in the context of APIs?",
    "options": [
      "The API automatically duplicates data.",
      "The property where making the same request multiple times has the same effect as making it once (e.g., 'Delete' or 'Update' to a specific state).",
      "The API only works for one person at a time.",
      "The API is very fast."
    ],
    "answer": 1,
    "explanation": "Idempotency is vital for reliability in distributed systems, especially when retrying failed requests.",
    "hint": "Repeating an action safely."
  },
  {
    "id": 249,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is a 'Capability Assessment'?",
    "options": [
      "A test for the architects' skills.",
      "Checking the capacity of a server.",
      "Evaluating the organization's current ability to perform specific business functions vs. the required target state.",
      "Calculating the company's total budget."
    ],
    "answer": 2,
    "explanation": "Capability assessments identify what the organization needs to 'be able to do' to succeed.",
    "hint": "Assessing business 'Ability'."
  },
  {
    "id": 250,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Auto-Scaling' in a cloud environment?",
    "options": [
      "The computer getting physically larger.",
      "Automatically increasing the price of the software.",
      "Automatically writing code.",
      "Automatically adjusting the number of active server instances based on the current load (traffic)."
    ],
    "answer": 3,
    "explanation": "Auto-scaling ensures performance during peak times and saves money during low-traffic periods.",
    "hint": "Dynamic capacity adjustment."
  },
  {
    "id": 251,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In the TOGAF Content Metamodel, which entity represents a 'formal description of a specific business function'?",
    "options": [
      "Process",
      "Business Service",
      "Function",
      "Role"
    ],
    "answer": 2,
    "explanation": "In the metamodel, a Function represents a business capability or activity, whereas a Process is a sequence of activities.",
    "hint": "What the business 'does'."
  },
  {
    "id": 252,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which metamodel extension would you use if you needed to model the specific hardware and software products used to implement an application?",
    "options": [
      "Process Modeling Extension",
      "Motivation Extension",
      "Governance Extension",
      "Infrastructure Consolidation Extension"
    ],
    "answer": 3,
    "explanation": "The Infrastructure Consolidation extension adds details about the physical technology components and locations.",
    "hint": "Consolidating technical assets."
  },
  {
    "id": 253,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is the primary purpose of the 'Architecture Skills Framework' in TOGAF?",
    "options": [
      "To define the roles and required skills for an architecture team to ensure the organization can execute the ADM.",
      "To provide a list of exams for architects.",
      "To provide a coding manual for architects.",
      "To rank architects based on their salary."
    ],
    "answer": 0,
    "explanation": "It defines the categories of skills (Generic, Business, Program, Design, IT) needed by various architectural roles.",
    "hint": "Defining the 'People' capability."
  },
  {
    "id": 254,
    "difficulty": "medium",
    "category": "togaf",
    "question": "During which phase of the ADM is the 'Architecture Definition Document' initially created?",
    "options": [
      "Phase A",
      "Phase B, C, and D",
      "Phase E",
      "Phase G"
    ],
    "answer": 1,
    "explanation": "The Architecture Definition Document is the companion to the Architecture Requirements Specification and is built incrementally during Phases B, C, and D.",
    "hint": "Built during the 'Design' phases."
  },
  {
    "id": 255,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In the 'Architecture Governance' model, what is the role of an 'Architecture Dispersion'?",
    "options": [
      "The process of deleting old architecture documents.",
      "The spread of the architecture team across different offices.",
      "A meeting to discuss new technologies.",
      "A formal request to deviate from the established architecture standards for a specific project."
    ],
    "answer": 3,
    "explanation": "Often called a 'dispensation' or 'waiver', it is a governance decision allowing a project to ignore a standard under specific conditions.",
    "hint": "An official 'exception'."
  },
  {
    "id": 256,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which ADM Phase focuses on 'Business Architecture'?",
    "options": [
      "Phase A",
      "Phase D",
      "Phase B",
      "Phase C"
    ],
    "answer": 2,
    "explanation": "Phase B is dedicated to defining the Business Architecture that supports the agreed Architecture Vision.",
    "hint": "Second phase of the ADM."
  },
  {
    "id": 257,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is the 'Enterprise Continuum' primarily used for?",
    "options": [
      "To measure the electricity usage of the enterprise.",
      "To list all the employees in the company.",
      "To provide a method for classifying architecture and solution artifacts as they evolve from generic to organization-specific.",
      "To track the time spent on a project."
    ],
    "answer": 2,
    "explanation": "It provides context and a 'virtual repository' for assets that can be reused across projects.",
    "hint": "Generic to Specific spectrum."
  },
  {
    "id": 258,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Solution Continuum'?",
    "options": [
      "A technical support portal.",
      "A list of software vendors.",
      "A part of the Enterprise Continuum that deals with physical implementations (products and services).",
      "A roadmap for the next 10 years."
    ],
    "answer": 2,
    "explanation": "While the Architecture Continuum deals with logical designs, the Solution Continuum deals with actual implementations like 'SaaS HR System'.",
    "hint": "Implementation-focused continuum."
  },
  {
    "id": 259,
    "difficulty": "easy",
    "category": "togaf",
    "question": "What is the 'Preliminary Phase' in the ADM?",
    "options": [
      "A meeting to hire the team.",
      "The phase where the architecture capability is defined and initialized (Defining 'how we do architecture').",
      "The phase where the software is written.",
      "The final check before launch."
    ],
    "answer": 1,
    "explanation": "The Preliminary Phase sets the 'Rules of Engagement' for the entire EA practice.",
    "hint": "Preparing the organization."
  },
  {
    "id": 260,
    "difficulty": "hard",
    "category": "togaf",
    "question": "Which of the following is a 'Motivation' element in the TOGAF Content Metamodel?",
    "options": [
      "Information System Service",
      "Business Service",
      "Driver",
      "Application Component"
    ],
    "answer": 2,
    "explanation": "Motivation elements include Drivers, Goals, Objectives, and Principles—explaining 'Why' the architecture is being built.",
    "hint": "The 'Why' behind the 'What'."
  },
  {
    "id": 261,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In BTABoK, what is 'Capability Modeling'?",
    "options": [
      "Identifying 'what' a business does rather than 'how' it does it, providing a stable view of the enterprise.",
      "Drawing a diagram of the server room.",
      "Testing if the hardware is fast enough.",
      "Measuring the coding speed of the team."
    ],
    "answer": 0,
    "explanation": "Business capabilities (like 'Payment Processing') remain stable even if the underlying technology or processes change.",
    "hint": "Stable 'What' vs. Volatile 'How'."
  },
  {
    "id": 262,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is the 'Business Model Canvas' (BMC) used for by architects?",
    "options": [
      "To understand the high-level business strategy, value propositions, and revenue streams.",
      "To design the user interface.",
      "To map the network topology.",
      "To track project expenses."
    ],
    "answer": 0,
    "explanation": "The BMC helps architects align technical solutions with how the business actually makes money and creates value.",
    "hint": "9-block strategic tool."
  },
  {
    "id": 263,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is a 'Value Stream' in Business Architecture?",
    "options": [
      "The bank account of the company.",
      "The flow of data through a network cable.",
      "A database of transaction logs.",
      "The end-to-end set of activities that deliver value to a customer."
    ],
    "answer": 3,
    "explanation": "Value streams (e.g., 'Order to Cash') help architects see how different capabilities work together to produce results.",
    "hint": "End-to-end value delivery."
  },
  {
    "id": 264,
    "difficulty": "easy",
    "category": "btabok",
    "question": "In the 'Design' pillar, what is 'Simplicity' as a quality?",
    "options": [
      "Having only one server.",
      "Designing the architecture to be as uncomplicated as possible while still meeting all requirements.",
      "Not writing any documentation.",
      "Using only one color in diagrams."
    ],
    "answer": 1,
    "explanation": "Simplicity reduces the cost of maintenance and the likelihood of bugs/failure.",
    "hint": "Occam's razor for design."
  },
  {
    "id": 265,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Investment Portfolio Management' for an architect?",
    "options": [
      "Managing the suite of IT projects and assets to ensure they collectively deliver maximum business value.",
      "Buying stocks and bonds for the company.",
      "Investing in new furniture for the office.",
      "Collecting all the receipts for the project."
    ],
    "answer": 0,
    "explanation": "Architects help decide which technical investments should be prioritized based on strategic alignment and ROI.",
    "hint": "Managing the IT 'Stock'."
  },
  {
    "id": 266,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Total Cost of Ownership' (TCO) primarily used for during a 'Build vs. Buy' analysis?",
    "options": [
      "To determine the architect's salary.",
      "To find the cheapest software.",
      "To calculate the electricity bill.",
      "To compare the long-term financial impact of developing a solution in-house versus purchasing a commercial product."
    ],
    "answer": 3,
    "explanation": "TCO includes hidden costs like training, maintenance, and integration, which are vital for a fair comparison.",
    "hint": "Comparing full lifetime costs."
  },
  {
    "id": 267,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Architectural Technical Debt'?",
    "options": [
      "The price of the software licenses.",
      "The long-term cost of choosing an easy, short-term technical solution instead of a better, more robust approach.",
      "Unpaid salaries of the developers.",
      "Money the IT department owes to the bank."
    ],
    "answer": 1,
    "explanation": "Like financial debt, technical debt incurs 'interest' in the form of extra effort required for future changes.",
    "hint": "Speed now, pain later."
  },
  {
    "id": 268,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Interoperability'?",
    "options": [
      "The ability of the team to talk to each other.",
      "The ability of two or more systems to exchange and use information.",
      "The ability of the software to run on a phone.",
      "The speed of the internet connection."
    ],
    "answer": 1,
    "explanation": "Interoperability is crucial for modern enterprise ecosystems that rely on many integrated services.",
    "hint": "Systems talking to each other."
  },
  {
    "id": 269,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is a 'Solution Architect' in the IASA framework?",
    "options": [
      "An architect focused on the design and implementation of a specific business solution (project-level).",
      "Someone who fixes hardware problems.",
      "The person who sells the software.",
      "Someone who only writes code."
    ],
    "answer": 0,
    "explanation": "Solution architects bridge the gap between high-level enterprise architecture and low-level development.",
    "hint": "Project-level design focus."
  },
  {
    "id": 270,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is the 'Business Technology Strategy' pillar responsible for?",
    "options": [
      "Managing the company's social media.",
      "Aligning technology investments and roadmaps with the overall goals and mission of the business.",
      "Hiring new employees.",
      "Fixing the company's computers."
    ],
    "answer": 1,
    "explanation": "This pillar ensures that technology is a 'driver' of business value, not just a cost center.",
    "hint": "Aligning Tech with Mission."
  },
  {
    "id": 271,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What are the five stages of team development according to the 'Tuckman Ladder'?",
    "options": [
      "Planning, Coding, Testing, Launching, Maintenance",
      "Hiring, Training, Working, Reviewing, Firing",
      "Forming, Storming, Norming, Performing, Adjourning",
      "Start, Middle, End, Feedback, Closure"
    ],
    "answer": 2,
    "explanation": "Teams usually pass through these stages to become highly effective.",
    "hint": "Rhyming stages of a team."
  },
  {
    "id": 272,
    "difficulty": "hard",
    "category": "pmp",
    "question": "In the 'Storming' stage of team development, the leader's primary role is to:",
    "options": [
      "Guide the team through conflict and help them establish clear roles and working relationships.",
      "Do the work for the team.",
      "Fire the people causing trouble.",
      "Stay out of the way."
    ],
    "answer": 0,
    "explanation": "Storming is where conflict arises; the leader must facilitate resolution to move to 'Norming'.",
    "hint": "Managing early friction."
  },
  {
    "id": 273,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Herzberg's Two-Factor Theory' of motivation?",
    "options": [
      "Distinction between Hygiene factors (e.g., salary, conditions) and Motivators (e.g., achievement, recognition).",
      "People are either lazy or hard-working.",
      "Money and Power are the only motivators.",
      "Rewards and Punishments."
    ],
    "answer": 0,
    "explanation": "Hygiene factors prevent dissatisfaction but don't motivate; only true 'Motivators' drive performance.",
    "hint": "Hygiene vs. Motivators."
  },
  {
    "id": 274,
    "difficulty": "hard",
    "category": "pmp",
    "question": "In conflict management, which style is 'Win-Win'?",
    "options": [
      "Collaborating / Problem Solving",
      "Accommodating",
      "Forcing",
      "Avoiding"
    ],
    "answer": 0,
    "explanation": "Collaboration involves working with the other party to find a solution that satisfies everyone's concerns.",
    "hint": "Everyone wins."
  },
  {
    "id": 275,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Theory X' management?",
    "options": [
      "A secret management technique.",
      "The belief that employees are inherently lazy, dislike work, and must be coerced or controlled.",
      "Management based on mathematics.",
      "The belief that employees are self-motivated and love work."
    ],
    "answer": 1,
    "explanation": "Theory X managers tend to be authoritarian and micromanage their teams.",
    "hint": "Pessimistic view of workers."
  },
  {
    "id": 276,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is 'Emotional Intelligence' (EQ)?",
    "options": [
      "Being very smart at math.",
      "The ability to identify, understand, and manage one's own emotions and the emotions of others.",
      "Being very sensitive and crying at work.",
      "The speed of the brain."
    ],
    "answer": 1,
    "explanation": "High EQ is a critical leadership trait for architects who must influence stakeholders without formal authority.",
    "hint": "Self-awareness and empathy."
  },
  {
    "id": 277,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Expectancy Theory'?",
    "options": [
      "Waiting for instructions from the boss.",
      "The belief that people are motivated to behave in a way that will lead to a desired reward.",
      "Expecting the team to work for free.",
      "Expecting the project to fail."
    ],
    "answer": 1,
    "explanation": "Motivation = Expectancy x Instrumentality x Valence. People work hard if they believe it leads to a reward they value.",
    "hint": "Effort -> Performance -> Reward."
  },
  {
    "id": 278,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Resource Calendar'?",
    "options": [
      "A list of project deadlines.",
      "A calendar given to employees as a gift.",
      "A document that shows when specific project resources (people, equipment) are available for work.",
      "The vacation schedule of the CEO."
    ],
    "answer": 2,
    "explanation": "Architects use resource calendars to plan when technical experts can participate in design reviews.",
    "hint": "Resource availability schedule."
  },
  {
    "id": 279,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Maslow's Hierarchy of Needs'?",
    "options": [
      "The organizational chart of the company.",
      "A pyramid of human needs from basic (Physiological) to highest (Self-Actualization).",
      "A way to rank projects by priority.",
      "A list of software requirements."
    ],
    "answer": 1,
    "explanation": "Managers must understand which level an employee is at to motivate them effectively.",
    "hint": "The pyramid of needs."
  },
  {
    "id": 280,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is 'Recognition and Rewards' in project management?",
    "options": [
      "A competition to find the best employee.",
      "Formal or informal programs to acknowledge and reinforce desired behavior/performance.",
      "Paying for the team's lunch every day.",
      "Giving everyone the same salary."
    ],
    "answer": 1,
    "explanation": "Timely and specific recognition is a powerful motivator for high-performing technical teams.",
    "hint": "Positive reinforcement."
  },
  {
    "id": 281,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Observability' in a modern distributed system?",
    "options": [
      "The ability to understand the internal state of a system based only on its external outputs (Logs, Metrics, Traces).",
      "Watching the servers through a camera.",
      "Testing the system in a lab.",
      "Reading the documentation of the system."
    ],
    "answer": 0,
    "explanation": "Observability goes beyond monitoring by allowing you to debug 'unknown-unknowns' in complex environments.",
    "hint": "Logs, Metrics, and Traces."
  },
  {
    "id": 282,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is the 'Three Pillars of Observability'?",
    "options": [
      "CPU, RAM, Disk",
      "Logs, Metrics, Traces",
      "Security, Speed, Cost",
      "Database, Frontend, Backend"
    ],
    "answer": 1,
    "explanation": "Logs (events), Metrics (aggregates), and Traces (request flow) provide the complete picture.",
    "hint": "Events, Numbers, and Paths."
  },
  {
    "id": 283,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Distributed Tracing'?",
    "options": [
      "Tracking the location of every laptop in the company.",
      "Drawing a map of the network.",
      "The process of tracking a single request as it moves through multiple microservices to find performance bottlenecks.",
      "Copying files to many servers."
    ],
    "answer": 2,
    "explanation": "Tracing helps identify exactly which service in a long chain is causing a delay.",
    "hint": "Following the request path."
  },
  {
    "id": 284,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is a 'Chaos Engineering' experiment?",
    "options": [
      "Writing messy code on purpose.",
      "Running the system without any security.",
      "Deleting the database randomly to see what happens.",
      "Purposefully introducing failures (e.g., cutting network connectivity) into a production system to verify its resilience."
    ],
    "answer": 3,
    "explanation": "Chaos engineering (popularized by Netflix's Chaos Monkey) helps teams build confidence in their system's ability to survive real-world failures.",
    "hint": "Intentional controlled failure."
  },
  {
    "id": 285,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is a 'Data Mesh' architecture?",
    "options": [
      "A very large database table.",
      "A network of fiber optic cables for data.",
      "Encrypting data in a mesh pattern.",
      "A decentralized approach to data architecture that treats data as a product and distributes ownership to business domains."
    ],
    "answer": 3,
    "explanation": "Data Mesh moves away from central data lakes to domain-owned 'Data Products'.",
    "hint": "Decentralized data ownership."
  },
  {
    "id": 286,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'FinOps'?",
    "options": [
      "A type of high-speed trading software.",
      "Financial Operations; a practice for managing and optimizing cloud costs through collaboration between finance, IT, and engineering.",
      "The bank account used to pay the cloud bill.",
      "Using computers to calculate taxes."
    ],
    "answer": 1,
    "explanation": "FinOps helps organizations get maximum business value from every dollar spent in the cloud.",
    "hint": "Cloud cost optimization."
  },
  {
    "id": 287,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Shift Left' security?",
    "options": [
      "Integrating security practices and testing as early as possible in the software development lifecycle (SDLC).",
      "Typing security commands with the left hand.",
      "Moving the security team to the left side of the office.",
      "Only using security tools on the left-most server."
    ],
    "answer": 0,
    "explanation": "Shift Left ensures security is built-in from the start, making it cheaper and easier to fix vulnerabilities.",
    "hint": "Security in the design phase."
  },
  {
    "id": 288,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Infrastructure drift'?",
    "options": [
      "The phenomenon where the actual state of infrastructure deviates from the desired state defined in the IaC (Infrastructure as Code) files.",
      "The internet getting slower over time.",
      "The physical servers moving during an earthquake.",
      "The budget getting smaller every month."
    ],
    "answer": 0,
    "explanation": "Drift usually happens due to manual changes (hotfixes) made outside of the automated CI/CD pipeline.",
    "hint": "Deviation from Code."
  },
  {
    "id": 289,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Golden Signals' in monitoring?",
    "options": [
      "High-priority alerts sent to the CEO.",
      "A set of four key metrics: Latency, Traffic, Errors, and Saturation.",
      "Signals made of gold.",
      "The best internet connection signals."
    ],
    "answer": 1,
    "explanation": "SRE (Site Reliability Engineering) uses these signals as the foundation of service health monitoring.",
    "hint": "Latency, Traffic, Errors, Saturation."
  },
  {
    "id": 290,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Canary Deployment'?",
    "options": [
      "Painting the servers yellow.",
      "Using birds to test the data center air quality.",
      "A deployment that happens only in the springtime.",
      "Releasing a new version of software to a small subset of users first to test for issues before a full rollout."
    ],
    "answer": 3,
    "explanation": "If the 'canary' release has no errors, the rest of the users are gradually upgraded.",
    "hint": "Testing on a small group."
  },
  {
    "id": 291,
    "difficulty": "easy",
    "category": "togaf",
    "question": "What is a 'Stakeholder Map'?",
    "options": [
      "A list of software developers.",
      "A map showing where stakeholders live.",
      "An artifact that visualizes stakeholders and their relationship to the project/architecture.",
      "A diagram of the company's network."
    ],
    "answer": 2,
    "explanation": "It helps in planning communication and engagement strategies.",
    "hint": "Visualizing the 'People'."
  },
  {
    "id": 292,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Scalability'?",
    "options": [
      "The physical size of the server.",
      "The cost of the software.",
      "How fast the user can type.",
      "The ability of a system to handle increased load by adding resources."
    ],
    "answer": 3,
    "explanation": "Scalability can be 'Vertical' (bigger servers) or 'Horizontal' (more servers).",
    "hint": "Growing with the load."
  },
  {
    "id": 293,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is the 'Critical Path'?",
    "options": [
      "The most important room in the office.",
      "The path the architect takes to the server room.",
      "The sequence of activities that represents the longest path through a project, determining the shortest possible project duration.",
      "A secure network connection."
    ],
    "answer": 2,
    "explanation": "Any delay on the critical path delays the entire project.",
    "hint": "Longest sequence, Zero float."
  },
  {
    "id": 294,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'API First' design?",
    "options": [
      "Building the API before the database.",
      "The first API ever created.",
      "Only using APIs for everything.",
      "A strategy where the API is treated as a primary product, designed and agreed upon before any code is written."
    ],
    "answer": 3,
    "explanation": "API-first ensures that the contract between systems is clear, allowing frontend and backend teams to work in parallel.",
    "hint": "Contract before code."
  },
  {
    "id": 295,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is a 'Reference Architecture'?",
    "options": [
      "A proven, 'best-practice' architecture for a specific domain (e.g., Cloud, Security) that can be used as a template.",
      "The source code of a past project.",
      "A list of recommended software.",
      "A book about architecture."
    ],
    "answer": 0,
    "explanation": "Reference architectures accelerate the design process by providing a validated starting point.",
    "hint": "Proven template."
  },
  {
    "id": 296,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Security' as a Quality Attribute?",
    "options": [
      "The speed of the antivirus software.",
      "The lock on the office door.",
      "Having a strong password.",
      "The ability of a system to protect data and resources from unauthorized access while providing access to authorized users."
    ],
    "answer": 3,
    "explanation": "Security covers Confidentiality, Integrity, and Availability.",
    "hint": "Protection of assets."
  },
  {
    "id": 297,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Scope Validation'?",
    "options": [
      "The process of formalizing acceptance of the completed project deliverables by the customer/sponsor.",
      "Counting the number of features.",
      "Testing the software for bugs.",
      "Writing the scope statement."
    ],
    "answer": 0,
    "explanation": "Validation is about getting the 'Sign-off' from the client.",
    "hint": "Formal acceptance."
  },
  {
    "id": 298,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Container Orchestration' (e.g., Kubernetes)?",
    "options": [
      "A musical performance using shipping containers.",
      "The automated management of the lifecycle of containers, including deployment, scaling, and networking.",
      "A way to build servers.",
      "Organizing the files on a hard drive."
    ],
    "answer": 1,
    "explanation": "Kubernetes ensures that the desired number of containers are running and healthy at all times.",
    "hint": "Managing container fleet."
  },
  {
    "id": 299,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Architecture Review Board'?",
    "options": [
      "The board where architects draw diagrams.",
      "A list of software for review.",
      "A cross-functional body that oversees the implementation of the architecture governance strategy.",
      "A group of architects who play board games."
    ],
    "answer": 2,
    "explanation": "The Board provides the high-level oversight and decision-making for the EA practice.",
    "hint": "The Governing Body."
  },
  {
    "id": 300,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Multi-Tenancy'?",
    "options": [
      "A building with many apartments.",
      "A database with many tables.",
      "Having many people use the same computer.",
      "An architecture where a single instance of a software application serves multiple customers (tenants), while keeping their data isolated."
    ],
    "answer": 3,
    "explanation": "Multi-tenancy is the foundation of SaaS (Software as a Service).",
    "hint": "One app, many customers."
  },
  {
    "id": 301,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In TOGAF, what is the 'Architecture Building Block' (ABB) as opposed to a 'Solution Building Block' (SBB)?",
    "options": [
      "ABB is a physical server; SBB is the software.",
      "ABB represents logical functionality and requirements; SBB represents the physical implementation/products.",
      "ABB is for the business; SBB is for IT.",
      "ABB is a blueprint; SBB is the architect."
    ],
    "answer": 1,
    "explanation": "ABBs are defined in Phases B, C, and D (Logical), while SBBs are identified in Phase E (Physical/Products).",
    "hint": "Logical vs. Physical."
  },
  {
    "id": 302,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which TOGAF Phase is responsible for 'Opportunities and Solutions'?",
    "options": [
      "Phase D",
      "Phase E",
      "Phase G",
      "Phase F"
    ],
    "answer": 1,
    "explanation": "Phase E is where the first complete version of the Roadmap is developed and major implementation projects are identified.",
    "hint": "The bridge between design and planning."
  },
  {
    "id": 303,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is a 'Gap Analysis' in the context of the ADM?",
    "options": [
      "A test for new employees.",
      "Calculating the budget deficit.",
      "Measuring the distance between two servers.",
      "The process of identifying the differences between the Baseline Architecture and the Target Architecture."
    ],
    "answer": 3,
    "explanation": "Gap analysis identifies what needs to be added, removed, or changed to reach the target state.",
    "hint": "Baseline to Target delta."
  },
  {
    "id": 304,
    "difficulty": "medium",
    "category": "togaf",
    "question": "In the Preliminary Phase, what does 'Defining the Enterprise' mean?",
    "options": [
      "Writing a dictionary for the company.",
      "Hiring the CEO.",
      "Naming the company.",
      "Determining the scope and boundaries of the organization that the architecture will cover."
    ],
    "answer": 3,
    "explanation": "You must define which business units or locations are 'in scope' for the EA effort.",
    "hint": "Setting the EA boundaries."
  },
  {
    "id": 305,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is the primary role of the 'Architecture Vision' (Phase A)?",
    "options": [
      "To design the database schema.",
      "To list all the software bugs.",
      "To provide a detailed technical specification.",
      "To provide a high-level summary of the changes and gain executive buy-in for the ADM cycle."
    ],
    "answer": 3,
    "explanation": "The Vision is the 'Elevator Pitch' that justifies why the architecture project is worth doing.",
    "hint": "High-level 'Aspirations'."
  },
  {
    "id": 306,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which document contains the 'Architecture Definition' and 'Requirements Specification'?",
    "options": [
      "Architecture Landscape",
      "Architecture Definition Document",
      "Governance Log",
      "Architecture Repository"
    ],
    "answer": 1,
    "explanation": "The Architecture Definition Document is the main deliverable containing the actual design.",
    "hint": "The core design deliverable."
  },
  {
    "id": 307,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is the 'Integrated Information Infrastructure Reference Model' (III-RM) classified as in the Enterprise Continuum?",
    "options": [
      "Industry Architecture",
      "Foundation Architecture",
      "Organization-Specific Architecture",
      "Common Systems Architecture"
    ],
    "answer": 3,
    "explanation": "The III-RM is a Common Systems Architecture because it addresses common needs like application integration.",
    "hint": "A 'Common Systems' model."
  },
  {
    "id": 308,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is a 'Business Capability' in TOGAF 9.2+?",
    "options": [
      "A software program's features.",
      "The total budget of a department.",
      "A particular ability or capacity that a business may possess or exchange to achieve a specific purpose or outcome.",
      "The skill level of a manager."
    ],
    "answer": 2,
    "explanation": "Capabilities describe 'What' the business does (e.g., 'Claim Processing').",
    "hint": "The business 'Capacity'."
  },
  {
    "id": 309,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In Phase G, what is the 'Implementation Governance' primarily checking for?",
    "options": [
      "If the team is working 8 hours a day.",
      "If the project is under budget.",
      "If the implementation project is conforming to the Architecture.",
      "If the code is written in Python."
    ],
    "answer": 2,
    "explanation": "Governance ensures the solution built actually matches the architecture designed.",
    "hint": "Ensuring conformance."
  },
  {
    "id": 310,
    "difficulty": "easy",
    "category": "togaf",
    "question": "What is the TOGAF 'ADM' acronym for?",
    "options": [
      "Advanced Data Management",
      "Architecture Design Method",
      "Architecture Development Method",
      "Automated Delivery Model"
    ],
    "answer": 2,
    "explanation": "Architecture Development Method is the core process of TOGAF.",
    "hint": "The 'Method' at the heart of TOGAF."
  },
  {
    "id": 311,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Portability' as a Quality Attribute?",
    "options": [
      "The ease with which a system or component can be transferred from one hardware or software environment to another.",
      "The weight of the server.",
      "The speed of a USB drive.",
      "The ability to carry a laptop."
    ],
    "answer": 0,
    "explanation": "Portability is critical for moving workloads between cloud providers or on-prem environments.",
    "hint": "Environment independence."
  },
  {
    "id": 312,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In the 'Design' pillar, what is 'Modularity'?",
    "options": [
      "The degree to which a system's components may be separated and recombined.",
      "Building the system in one large piece.",
      "Using only modern programming languages.",
      "Using many different software brands."
    ],
    "answer": 0,
    "explanation": "Modular systems are easier to maintain, test, and scale.",
    "hint": "Separation of concerns."
  },
  {
    "id": 313,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Testability'?",
    "options": [
      "The cost of testing tools.",
      "The degree to which a system or component facilitates the establishment of test criteria and the performance of tests.",
      "The number of testers in the company.",
      "The speed at which tests run."
    ],
    "answer": 1,
    "explanation": "Highly testable systems have clear interfaces and observable states.",
    "hint": "Ease of verification."
  },
  {
    "id": 314,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Conceptual Integrity' in architectural design?",
    "options": [
      "Designing a system that never fails.",
      "The principle that a design should follow a consistent set of ideas and rules, making it look as if it was created by a single mind.",
      "The architect being honest.",
      "Using only one database."
    ],
    "answer": 1,
    "explanation": "Conceptual integrity (coined by Fred Brooks) is essential for system usability and long-term maintenance.",
    "hint": "Unified design philosophy."
  },
  {
    "id": 315,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Efficiency' in the context of system performance?",
    "options": [
      "Doing work for the lowest possible cost.",
      "How fast the architect can draw.",
      "The relationship between the level of performance of the software and the amount of resources used.",
      "Writing very short code."
    ],
    "answer": 2,
    "explanation": "An efficient system provides high performance with minimal CPU, memory, or power consumption.",
    "hint": "Performance vs. Resources."
  },
  {
    "id": 316,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Usability'?",
    "options": [
      "If the software can be turned on.",
      "The speed of the mouse.",
      "The ease with which a user can learn to operate, prepare inputs for, and interpret outputs of a system.",
      "The number of buttons on the screen."
    ],
    "answer": 2,
    "explanation": "Usability is a key non-functional requirement for user-facing applications.",
    "hint": "Ease of use."
  },
  {
    "id": 317,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Elasticity' and how does it differ from 'Scalability'?",
    "options": [
      "They are exactly the same.",
      "Elasticity is cheaper than Scalability.",
      "Elasticity is for networking; Scalability is for CPU.",
      "Elasticity is the ability to automatically scale resources up AND down based on immediate demand; Scalability is the general ability to handle growth."
    ],
    "answer": 3,
    "explanation": "Elasticity is a cloud-native concept where the system 'shrinks' to save costs when demand is low.",
    "hint": "Automated scaling up/down."
  },
  {
    "id": 318,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In the IT Environment pillar, what is 'Standardization'?",
    "options": [
      "The process of establishing and following technical standards to ensure consistency across the enterprise.",
      "Using only the cheapest computers.",
      "Naming all servers with numbers.",
      "Making everyone wear a uniform."
    ],
    "answer": 0,
    "explanation": "Standardization reduces the complexity of management and lowers the TCO.",
    "hint": "Enforcing consistency."
  },
  {
    "id": 319,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Architectural Governance'?",
    "options": [
      "A software tool that locks the computer.",
      "The manager's personal rules.",
      "A set of laws written by the government.",
      "The practice of ensuring that the architecture is managed and developed in a way that aligns with business objectives and standards."
    ],
    "answer": 3,
    "explanation": "Governance provides the 'Check and Balance' for the architecture team.",
    "hint": "Oversight and Alignment."
  },
  {
    "id": 320,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Availability' (Uptime)?",
    "options": [
      "How many hours the office is open.",
      "The storage capacity of the database.",
      "The speed of the network.",
      "The percentage of time the system is functioning and reachable."
    ],
    "answer": 3,
    "explanation": "Availability is usually expressed in 'Nines' (e.g., 99.99%).",
    "hint": "System uptime."
  },
  {
    "id": 321,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is the primary purpose of a 'Risk Register'?",
    "options": [
      "To record all the software bugs found.",
      "To list all the employees' names.",
      "To identify, document, and track potential risks and their response strategies.",
      "To track the project's daily expenses."
    ],
    "answer": 2,
    "explanation": "The Risk Register is a living document used to manage threats and opportunities throughout the project.",
    "hint": "The 'Risk Log'."
  },
  {
    "id": 322,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Qualitative Risk Analysis'?",
    "options": [
      "Testing the code for quality.",
      "Prioritizing risks based on their probability of occurrence and their impact on project objectives.",
      "Calculating the exact dollar value of a risk.",
      "Counting the number of risks."
    ],
    "answer": 1,
    "explanation": "Qualitative analysis is subjective (High/Medium/Low) and used to prioritize which risks need deeper study.",
    "hint": "Probability x Impact ranking."
  },
  {
    "id": 323,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Quantitative Risk Analysis'?",
    "options": [
      "Counting how many servers are in the room.",
      "Writing the risk register.",
      "Guessing which risk is the worst.",
      "Numerically analyzing the effect of identified risks on overall project objectives (e.g., using Monte Carlo simulation)."
    ],
    "answer": 3,
    "explanation": "Quantitative analysis provides a statistical view of risk impact, usually in terms of cost or schedule.",
    "hint": "Numerical risk assessment."
  },
  {
    "id": 324,
    "difficulty": "medium",
    "category": "pmp",
    "question": "Which risk response strategy involves shifting the impact of a threat to a third party (e.g., insurance)?",
    "options": [
      "Accept",
      "Mitigate",
      "Avoid",
      "Transfer"
    ],
    "answer": 3,
    "explanation": "Transferring risk doesn't eliminate it; it just makes someone else responsible for the loss.",
    "hint": "Passing the risk to others."
  },
  {
    "id": 325,
    "difficulty": "medium",
    "category": "pmp",
    "question": "Which risk response strategy involves changing the project plan to eliminate the threat entirely?",
    "options": [
      "Accept",
      "Transfer",
      "Avoid",
      "Mitigate"
    ],
    "answer": 2,
    "explanation": "Avoiding risk usually means changing scope or methodology (e.g., choosing a proven technology over a risky new one).",
    "hint": "Removing the threat."
  },
  {
    "id": 326,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is 'Mitigation' in risk management?",
    "options": [
      "Ignoring the risk.",
      "Taking actions to reduce the probability and/or impact of a negative risk.",
      "Canceling the project.",
      "Moving the project to another country."
    ],
    "answer": 1,
    "explanation": "Mitigation is the most common response—lowering the 'heat' of the risk.",
    "hint": "Reducing Probability/Impact."
  },
  {
    "id": 327,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is a 'Residual Risk'?",
    "options": [
      "The cost of the risk response.",
      "The risk that remains after risk responses have been implemented.",
      "A risk that has already happened.",
      "A risk that was never identified."
    ],
    "answer": 1,
    "explanation": "No risk response is perfect; the remaining threat is the residual risk.",
    "hint": "What's left over."
  },
  {
    "id": 328,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is a 'Secondary Risk'?",
    "options": [
      "A low-priority risk.",
      "A risk that arises as a direct result of implementing a risk response.",
      "The second risk on the list.",
      "A risk that happens twice."
    ],
    "answer": 1,
    "explanation": "For example, installing a new security system (response) might cause a secondary risk of system slowdown.",
    "hint": "Risk caused by a solution."
  },
  {
    "id": 329,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Workaround'?",
    "options": [
      "An unplanned response to a negative risk that has occurred (an 'unidentified' risk).",
      "A planned detour in the project schedule.",
      "A way to avoid the project manager.",
      "Working from home."
    ],
    "answer": 0,
    "explanation": "Workarounds are for 'Unknown-Unknowns' that suddenly become real issues.",
    "hint": "Emergency response."
  },
  {
    "id": 330,
    "difficulty": "easy",
    "category": "pmp",
    "question": "In risk management, what is an 'Opportunity'?",
    "options": [
      "A positive risk that, if it occurs, will have a beneficial effect on the project.",
      "A meeting with the client.",
      "A way to spend more money.",
      "A job opening."
    ],
    "answer": 0,
    "explanation": "Not all risks are bad; some can lead to finishing early or under budget.",
    "hint": "Positive risk."
  },
  {
    "id": 331,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Event-Driven Architecture' (EDA)?",
    "options": [
      "A software architecture pattern promoting the production, detection, consumption of, and reaction to events.",
      "A database that stores historical events.",
      "An architecture where users click buttons to make things happen.",
      "A project management style based on events."
    ],
    "answer": 0,
    "explanation": "EDA allows for highly decoupled, scalable, and real-time systems.",
    "hint": "Responding to events."
  },
  {
    "id": 332,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "In EDA, what is the 'Publisher/Subscriber' (Pub/Sub) pattern?",
    "options": [
      "A messaging pattern where senders (publishers) do not program the messages to be sent directly to specific receivers (subscribers).",
      "The architect sending emails to the team.",
      "A user following a brand on social media.",
      "Paying for a software subscription."
    ],
    "answer": 0,
    "explanation": "Pub/Sub allows one message to be sent to many receivers without the sender knowing who they are.",
    "hint": "One-to-many decoupling."
  },
  {
    "id": 333,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Event Sourcing'?",
    "options": [
      "Finding where an event came from.",
      "A pattern that stores the state of a business entity as a sequence of state-changing events instead of just the current state.",
      "Using events to write code.",
      "A log of all system errors."
    ],
    "answer": 1,
    "explanation": "Event sourcing allows you to 'replay' events to reconstruct the state at any point in time.",
    "hint": "State as a timeline."
  },
  {
    "id": 334,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'CQRS' (Command Query Responsibility Segregation)?",
    "options": [
      "A security protocol for commands.",
      "Searching for data in multiple databases.",
      "A pattern that separates read and update operations for a data store.",
      "A way to sort database tables."
    ],
    "answer": 2,
    "explanation": "CQRS allows you to optimize the 'Read' side and 'Write' side of an application independently.",
    "hint": "Separate Read/Write paths."
  },
  {
    "id": 335,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What are 'Micro-frontends'?",
    "options": [
      "A website designed for small screens.",
      "An architectural style where a frontend app is decomposed into individual, semi-independent loosely coupled 'micro-apps'.",
      "Using mobile apps instead of websites.",
      "Very small computer monitors."
    ],
    "answer": 1,
    "explanation": "Micro-frontends bring the benefits of microservices (independent deployment, team ownership) to the UI layer.",
    "hint": "Microservices for the UI."
  },
  {
    "id": 336,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Server-Side Rendering' (SSR) and why is it used?",
    "options": [
      "Rendering images on a server.",
      "Running the database on the frontend.",
      "The ability of an application to contribute to the display of a web page on the server rather than in the browser (improves SEO and initial load).",
      "Making the server look pretty."
    ],
    "answer": 2,
    "explanation": "SSR helps with SEO and perceived performance, as the browser receives a fully formed page.",
    "hint": "Page prep on the server."
  },
  {
    "id": 337,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Hydration' in the context of web frameworks (like React/Next.js)?",
    "options": [
      "The process of attaching event listeners to static HTML sent by the server to make it an interactive app.",
      "Adding more memory to the server.",
      "Downloading the database to the browser.",
      "The architect drinking water."
    ],
    "answer": 0,
    "explanation": "Hydration turns 'dry' (static) HTML into 'wet' (interactive) application code.",
    "hint": "Static HTML -> Interactive App."
  },
  {
    "id": 338,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Dead Letter Queue' (DLQ)?",
    "options": [
      "A service-specific queue for messages that cannot be delivered to their destination because of errors.",
      "A backup of the main database.",
      "A list of retired employees.",
      "A trash bin for old computers."
    ],
    "answer": 0,
    "explanation": "DLQs prevent failing messages from blocking the system and allow for manual inspection later.",
    "hint": "Holding tank for failed messages."
  },
  {
    "id": 339,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Backpressure' in stream processing?",
    "options": [
      "A mechanism that allows a system to signal to the data producer that it is overwhelmed and cannot process more data right now.",
      "The cost of the database going up.",
      "The pressure of the cooling system in the data center.",
      "A security attack that floods the network."
    ],
    "answer": 0,
    "explanation": "Backpressure prevents the consumer from crashing when the producer sends data too fast.",
    "hint": "Consumer 'Stop' signal."
  },
  {
    "id": 340,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Message Idempotency' and why is it important in EDA?",
    "options": [
      "Only one person can read a message.",
      "Messages must be very short.",
      "The ability of a system to handle the same message multiple times without changing the result beyond the initial application.",
      "Messages must be encrypted."
    ],
    "answer": 2,
    "explanation": "Because networks fail, messages are often sent twice; the system must not process a 'Payment' twice.",
    "hint": "Safe message retries."
  },
  {
    "id": 341,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which type of Architecture Compliance means 'The implementation has some features not in the architecture, or misses some that are'?",
    "options": [
      "Non-conformant",
      "Irrelevant",
      "Compliant",
      "Conformant"
    ],
    "answer": 0,
    "explanation": "Non-conformant means it doesn't match the agreed-upon design.",
    "hint": "Doesn't match the rules."
  },
  {
    "id": 342,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Disaster Recovery' (DR)?",
    "options": [
      "Fixing a broken computer.",
      "Insuring the office building.",
      "The set of policies, tools, and procedures to enable the recovery or continuation of vital technology infrastructure following a natural or human-induced disaster.",
      "Backing up files to a USB stick."
    ],
    "answer": 2,
    "explanation": "DR focuses specifically on the 'IT' aspect of Business Continuity.",
    "hint": "IT survival after disaster."
  },
  {
    "id": 343,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is the 'Expected Monetary Value' (EMV) of a risk?",
    "options": [
      "The price of the software license.",
      "Probability x Impact (in dollars).",
      "The architect's bonus.",
      "The total cost of the project."
    ],
    "answer": 1,
    "explanation": "EMV is a statistical concept used to calculate the average outcome of uncertain future scenarios.",
    "hint": "Prob x $ Impact."
  },
  {
    "id": 344,
    "difficulty": "easy",
    "category": "scenarios",
    "question": "What is 'Cloud Computing'?",
    "options": [
      "Storing data in the sky.",
      "The on-demand delivery of IT resources over the internet with pay-as-you-go pricing.",
      "A new type of wireless mouse.",
      "Using a computer during a storm."
    ],
    "answer": 1,
    "explanation": "Cloud computing eliminates the need to manage physical hardware.",
    "hint": "On-demand IT resources."
  },
  {
    "id": 345,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is an 'Architecture Pattern'?",
    "options": [
      "A reusable solution to a common architectural problem within a specific context.",
      "The wallpaper in the architect's office.",
      "A way of naming files.",
      "The schedule of architecture meetings."
    ],
    "answer": 0,
    "explanation": "Patterns (like Microservices) save time and reduce risk.",
    "hint": "Reusable solution."
  },
  {
    "id": 346,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In BTABoK, what is 'Auditability'?",
    "options": [
      "Being able to hear the computer fans.",
      "The degree to which a system provides the necessary records and logs to verify its history and compliance with rules.",
      "Checking the server's serial number.",
      "The cost of a financial audit."
    ],
    "answer": 1,
    "explanation": "Auditability is crucial for systems in regulated industries (Finance, Health).",
    "hint": "Verification through logs."
  },
  {
    "id": 347,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'SWOT Analysis'?",
    "options": [
      "A police tactical team.",
      "A type of technical testing.",
      "Identification of Strengths, Weaknesses, Opportunities, and Threats.",
      "Calculating the project's profit."
    ],
    "answer": 2,
    "explanation": "SWOT is used in project initiation and risk identification.",
    "hint": "Strengths, Weaknesses, Opps, Threats."
  },
  {
    "id": 348,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Statelessness' in a RESTful API?",
    "options": [
      "The server is turned off.",
      "The database is empty.",
      "The server does not store any client context between requests; each request contains all the information needed.",
      "The API has no country of origin."
    ],
    "answer": 2,
    "explanation": "Statelessness makes it much easier to scale the API horizontally.",
    "hint": "No session state on server."
  },
  {
    "id": 349,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Architecture Repository'?",
    "options": [
      "A library of architecture books.",
      "A logical information model that stores the outputs of the ADM and related architectural assets.",
      "The architect's personal computer.",
      "A backup server for the company."
    ],
    "answer": 1,
    "explanation": "The Repository is the 'One Source of Truth' for all architecture work.",
    "hint": "Central EA storage."
  },
  {
    "id": 350,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Database Sharding'?",
    "options": [
      "Deleting parts of the database.",
      "Connecting multiple databases together.",
      "A method of splitting a large database into smaller, faster, more easily managed parts called shards.",
      "Encrypting the database in pieces."
    ],
    "answer": 2,
    "explanation": "Sharding is used to scale a database horizontally when a single server can no longer handle the load.",
    "hint": "Horizontal data splitting."
  },
  {
    "id": 351,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is 'Capability-Based Planning' in TOGAF?",
    "options": [
      "A technique that focuses on the planning, engineering, and delivery of strategic business capabilities to the enterprise.",
      "A method for choosing the best software vendor.",
      "Planning based on how many employees are available.",
      "Planning the project schedule using a Gantt chart."
    ],
    "answer": 0,
    "explanation": "Capability-based planning ensures that business strategic goals are translated into specific capabilities that the architecture must support.",
    "hint": "Strategic 'Ability' planning."
  },
  {
    "id": 352,
    "difficulty": "medium",
    "category": "togaf",
    "question": "In the ADM, which phase involves the 'Initial assessment of the business capability'?",
    "options": [
      "Phase A: Architecture Vision",
      "Phase E: Opportunities and Solutions",
      "Preliminary Phase",
      "Phase B: Business Architecture"
    ],
    "answer": 0,
    "explanation": "Phase A establishes the high-level assessment of the capabilities needed to achieve the vision.",
    "hint": "The very start of the vision."
  },
  {
    "id": 353,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is a 'Transition Architecture'?",
    "options": [
      "A formal description of the enterprise at a specific point in time between the Baseline and Target Architectures.",
      "The architecture used during a software upgrade.",
      "A temporary network setup.",
      "Architecture for a company that is being sold."
    ],
    "answer": 0,
    "explanation": "Transition Architectures (defined in Phases E and F) provide incremental 'stepping stones' to reach the final Target state.",
    "hint": "An intermediate state."
  },
  {
    "id": 354,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the primary purpose of 'Phase C: Information Systems Architectures'?",
    "options": [
      "To document the Data and Application Architectures of the organization.",
      "To calculate the cost of the cloud.",
      "To design the computer hardware.",
      "To hire new software developers."
    ],
    "answer": 0,
    "explanation": "Phase C covers both Data Architecture and Application Architecture.",
    "hint": "Data + Applications."
  },
  {
    "id": 355,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In TOGAF, what is 'Interoperability' analysis used for?",
    "options": [
      "To measure the speed of the fiber optic cables.",
      "To see if the computers can plug into the wall.",
      "To ensure that different components/systems can share information and services effectively.",
      "To check if the architect can speak multiple languages."
    ],
    "answer": 2,
    "explanation": "Interoperability is a key requirement for integrated enterprise systems, often assessed in Phases B, C, and D.",
    "hint": "System-to-system sharing."
  },
  {
    "id": 356,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Business Transformation Readiness Assessment'?",
    "options": [
      "Checking if the servers are ready for a new OS.",
      "A technique used in Phase A to determine if the organization is ready and able to undergo the proposed changes.",
      "A test for the CEO's knowledge.",
      "A survey about employee happiness."
    ],
    "answer": 1,
    "explanation": "This assessment identifies cultural, structural, or resource-based risks to the architecture's success.",
    "hint": "Ready for change?"
  },
  {
    "id": 357,
    "difficulty": "easy",
    "category": "togaf",
    "question": "What is a 'Requirement' in the TOGAF Requirements Management process?",
    "options": [
      "A suggestion from a user.",
      "A quantitative statement of business need that must be met by a particular architecture or work package.",
      "A line of code.",
      "A bug report."
    ],
    "answer": 1,
    "explanation": "Requirements drive the entire ADM cycle and must be measurable and actionable.",
    "hint": "Formal business need."
  },
  {
    "id": 358,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In the TOGAF Content Metamodel, what is a 'Measure'?",
    "options": [
      "The weight of a laptop.",
      "The length of a server rack.",
      "A ruler used by the architect.",
      "A metric used to determine the success or performance of a business capability or process."
    ],
    "answer": 3,
    "explanation": "Measures allow the organization to track whether the architecture is delivering the expected business value.",
    "hint": "Success metric."
  },
  {
    "id": 359,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is 'Phase D: Technology Architecture'?",
    "options": [
      "Writing the user manual.",
      "Defining the software and hardware infrastructure needed to support the application and data components.",
      "Designing the office layout.",
      "Training the IT staff."
    ],
    "answer": 1,
    "explanation": "Phase D is where the physical and logical infrastructure (Cloud, OS, Networks) is designed.",
    "hint": "Infrastructure design."
  },
  {
    "id": 360,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is the 'Architecture Contracts' purpose in Phase G?",
    "options": [
      "A document that lists the architect's salary.",
      "A legal contract for buying software.",
      "A formal agreement between development partners and sponsors on the deliverables, quality, and fitness-for-purpose of an architecture.",
      "To hire the architect for another year."
    ],
    "answer": 2,
    "explanation": "Architecture contracts ensure that the implementation stays aligned with the governed architecture.",
    "hint": "Agreement on implementation quality."
  },
  {
    "id": 361,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In the IT Environment pillar, what is 'High Availability' (HA)?",
    "options": [
      "A server located on a high floor of a building.",
      "A system design protocol that ensures a prearranged level of operational performance (uptime) is met.",
      "A system that is very expensive.",
      "Having a fast internet connection."
    ],
    "answer": 1,
    "explanation": "HA systems use redundancy to minimize downtime during failures.",
    "hint": "Maximizing uptime."
  },
  {
    "id": 362,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Scalability: Vertical vs. Horizontal'?",
    "options": [
      "They are the same thing.",
      "Vertical is for tall servers; Horizontal is for wide ones.",
      "Vertical is for software; Horizontal is for hardware.",
      "Vertical (Scale up) means adding more power to an existing server; Horizontal (Scale out) means adding more servers to a pool."
    ],
    "answer": 3,
    "explanation": "Horizontal scaling is generally preferred in cloud architectures for its resilience and elasticity.",
    "hint": "Bigger server vs. More servers."
  },
  {
    "id": 363,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Fault Tolerance'?",
    "options": [
      "Having a good insurance policy.",
      "Accepting that the developers will make mistakes.",
      "The ability of a system to continue operating properly in the event of the failure of one or more of its components.",
      "Repairing a server quickly."
    ],
    "answer": 2,
    "explanation": "Fault tolerance is achieved through complete hardware and software redundancy.",
    "hint": "Survival of failures."
  },
  {
    "id": 364,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In Information Architecture, what is 'Data Sovereignty'?",
    "options": [
      "The database being the most important system.",
      "The database having its own king.",
      "The idea that data is subject to the laws and governance structures within the nation it is collected or stored.",
      "Data that cannot be deleted."
    ],
    "answer": 2,
    "explanation": "Data sovereignty is a critical legal requirement for cloud architects (e.g., GDPR).",
    "hint": "Data and local laws."
  },
  {
    "id": 365,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Interoperability: Syntactic vs. Semantic'?",
    "options": [
      "Syntactic refers to the format of the data (e.g., XML); Semantic refers to the meaning/context of the data.",
      "Syntactic is about the code; Semantic is about the meaning.",
      "They are two different programming languages.",
      "Syntactic is for humans; Semantic is for computers."
    ],
    "answer": 0,
    "explanation": "Systems must agree on both the 'format' (Syntactic) and the 'meaning' (Semantic) to truly work together.",
    "hint": "Format vs. Meaning."
  },
  {
    "id": 366,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Latency'?",
    "options": [
      "The cost of the internet.",
      "The time delay between a request and a response in a system.",
      "The size of the file.",
      "The number of users on the website."
    ],
    "answer": 1,
    "explanation": "Low latency is critical for real-time applications like financial trading or gaming.",
    "hint": "Response delay."
  },
  {
    "id": 367,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Architectural Technical Sustainability'?",
    "options": [
      "Keeping the same hardware for 20 years.",
      "The ability of the architecture to remain viable and maintainable over a long period as technology and requirements change.",
      "Using solar power for the servers.",
      "Planting trees for every server used."
    ],
    "answer": 1,
    "explanation": "Sustainability involves avoiding vendor lock-in and using standards-based designs.",
    "hint": "Long-term viability."
  },
  {
    "id": 368,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In the Design pillar, what is 'Abstraction'?",
    "options": [
      "An architect's painting.",
      "Removing the database from the system.",
      "Writing code that is hard to understand.",
      "The process of hiding complex implementation details behind a simpler interface."
    ],
    "answer": 3,
    "explanation": "Abstraction allows architects to change the backend without affecting the users or other systems.",
    "hint": "Hiding complexity."
  },
  {
    "id": 369,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Service Level Agreement' (SLA)?",
    "options": [
      "The salary of the service desk staff.",
      "A list of software features.",
      "A formal contract between a service provider and a customer that defines the expected level of service (e.g., uptime).",
      "A promise to fix the computer tomorrow."
    ],
    "answer": 2,
    "explanation": "SLAs often include financial penalties if the service level (like 99.9% uptime) is not met.",
    "hint": "Formal service contract."
  },
  {
    "id": 370,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Throughput'?",
    "options": [
      "The speed of the mouse.",
      "The number of people in the office.",
      "The size of the hard drive.",
      "The amount of data or number of transactions processed by a system in a given amount of time."
    ],
    "answer": 3,
    "explanation": "Throughput measures the 'capacity' of the system (e.g., 5000 requests per second).",
    "hint": "Volume per time unit."
  },
  {
    "id": 371,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Statement of Work' (SOW) in procurement?",
    "options": [
      "A document that describes the procurement item in sufficient detail to allow prospective sellers to determine if they are capable of providing it.",
      "A list of all the employees.",
      "The architect's daily log.",
      "A formal resignation letter."
    ],
    "answer": 0,
    "explanation": "The SOW defines the 'What' and 'How' for a vendor to bid on.",
    "hint": "Procurement detail document."
  },
  {
    "id": 372,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is a 'Fixed-Price Contract'?",
    "options": [
      "A contract that can never be changed.",
      "A contract for buying a fixed number of items.",
      "A contract where the price is determined at the end.",
      "An agreement where the buyer pays a set amount regardless of the seller's costs, placing the risk on the seller."
    ],
    "answer": 3,
    "explanation": "Fixed-price contracts are best when requirements are well-defined.",
    "hint": "Seller takes cost risk."
  },
  {
    "id": 373,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is a 'Cost-Reimbursable Contract'?",
    "options": [
      "The buyer only pays for the cost of the software.",
      "A contract without a budget.",
      "The seller pays the buyer back.",
      "An agreement where the buyer pays the seller for actual costs incurred, plus a fee (profit), placing the risk on the buyer."
    ],
    "answer": 3,
    "explanation": "These are used when the scope is not well-defined, and the seller cannot estimate the final cost accurately.",
    "hint": "Buyer takes cost risk."
  },
  {
    "id": 374,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Request for Proposal' (RFP)?",
    "options": [
      "Asking the boss for a promotion.",
      "A procurement document used to solicit proposals from prospective sellers for solutions or services.",
      "A list of software bugs.",
      "A request for a new laptop."
    ],
    "answer": 1,
    "explanation": "An RFP is used when the buyer has a problem and wants vendors to propose a solution.",
    "hint": "Soliciting solutions."
  },
  {
    "id": 375,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Request for Quote' (RFQ)?",
    "options": [
      "Asking for a famous quote.",
      "A procurement document used to solicit price quotes from prospective sellers for standard or common items.",
      "Asking for the price of the stock.",
      "A list of project milestones."
    ],
    "answer": 1,
    "explanation": "An RFQ is used when the requirements are standard (e.g., buying 100 laptops) and the main factor is price.",
    "hint": "Soliciting prices."
  },
  {
    "id": 376,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is a 'Vendor' in PMP terms?",
    "options": [
      "An external provider of products or services for a project.",
      "The user of the software.",
      "A person who sells snacks.",
      "The project manager."
    ],
    "answer": 0,
    "explanation": "Vendors (or Sellers) are external to the project team.",
    "hint": "External provider."
  },
  {
    "id": 377,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Source Selection Criteria'?",
    "options": [
      "The font used in the project documents.",
      "A set of attributes used to evaluate and rank proposals from vendors.",
      "The criteria for hiring a developer.",
      "The location of the source code."
    ],
    "answer": 1,
    "explanation": "Criteria might include price, technical ability, financial stability, and past performance.",
    "hint": "Evaluation rules for bids."
  },
  {
    "id": 378,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Conduct Procurements'?",
    "options": [
      "Checking the quality of the items bought.",
      "Paying the invoices.",
      "Buying things for the office.",
      "The process of obtaining seller responses, selecting a seller, and awarding a contract."
    ],
    "answer": 3,
    "explanation": "This is the 'Execution' phase of procurement.",
    "hint": "Choosing the vendor."
  },
  {
    "id": 379,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is a 'Time and Material' (T&M) contract?",
    "options": [
      "A hybrid contract where the buyer pays based on hours worked and materials used; often used for staff augmentation.",
      "A contract for construction projects only.",
      "A contract for buying a clock and some wood.",
      "A contract that expires after a certain time."
    ],
    "answer": 0,
    "explanation": "T&M is used when the scope is unclear but the project needs to start quickly.",
    "hint": "Pay by the hour/part."
  },
  {
    "id": 380,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is 'Procurement Audits'?",
    "options": [
      "Checking the seller's bank account.",
      "A structured review of the procurement process from plan to closeout to identify successes and failures.",
      "Counting the items delivered.",
      "Reviewing the architect's expenses."
    ],
    "answer": 1,
    "explanation": "Audits help improve future procurement processes.",
    "hint": "Procurement process review."
  },
  {
    "id": 381,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Data Lakehouse' architecture?",
    "options": [
      "A database stored in a house by a lake.",
      "A way to back up data in the cloud.",
      "A modern data architecture that combines the low-cost storage of a Data Lake with the performance and governance of a Data Warehouse.",
      "Using two different databases at once."
    ],
    "answer": 2,
    "explanation": "Lakehouses allow for BI and AI to run on the same platform (e.g., Databricks).",
    "hint": "Lake + Warehouse hybrid."
  },
  {
    "id": 382,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'ETL' (Extract, Transform, Load)?",
    "options": [
      "A type of high-speed network.",
      "A way to encrypt data.",
      "A process used to collect data from various sources, change it into a suitable format, and save it into a target database.",
      "The name of the database server."
    ],
    "answer": 2,
    "explanation": "ETL is the traditional way of moving data into a Data Warehouse.",
    "hint": "Data integration process."
  },
  {
    "id": 383,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'ELT' (Extract, Load, Transform) and why is it used in the cloud?",
    "options": [
      "A way to delete data faster.",
      "A process where data is loaded into the target system FIRST and then transformed using the target's compute power.",
      "Using the cloud to transform data manually.",
      "It is a typo of ETL."
    ],
    "answer": 1,
    "explanation": "ELT leverages the massive scale of cloud data platforms (like Snowflake or BigQuery) to do the heavy transformation work.",
    "hint": "Transforming 'at' the target."
  },
  {
    "id": 384,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Schema-on-Read'?",
    "options": [
      "Reading the database manual.",
      "Designing the database before adding data.",
      "A way to speed up the database.",
      "A data strategy (common in Data Lakes) where the structure of the data is applied when it is retrieved, not when it is stored."
    ],
    "answer": 3,
    "explanation": "Schema-on-read provides flexibility because you don't need to define the structure upfront.",
    "hint": "Define structure at retrieval."
  },
  {
    "id": 385,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Schema-on-Write'?",
    "options": [
      "The traditional database approach where the structure (schema) must be defined before any data can be saved.",
      "A new type of programming language.",
      "A way to write data faster.",
      "Writing the database manual."
    ],
    "answer": 0,
    "explanation": "Schema-on-write (like in SQL databases) ensures high data quality but is less flexible for unstructured data.",
    "hint": "Define structure at storage."
  },
  {
    "id": 386,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Big Data: The 3 Vs'?",
    "options": [
      "Value, Victory, Vision",
      "Volume, Velocity, Variety",
      "Volume, Version, Valid",
      "Velocity, Voice, Virtual"
    ],
    "answer": 1,
    "explanation": "Volume (size), Velocity (speed), and Variety (types) define the challenges of Big Data.",
    "hint": "Size, Speed, Diversity."
  },
  {
    "id": 387,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'ACID' in the context of database transactions?",
    "options": [
      "A harmful liquid.",
      "Advanced Computer Information Database.",
      "Atomicity, Consistency, Isolation, Durability.",
      "A way to measure database speed."
    ],
    "answer": 2,
    "explanation": "ACID properties guarantee that database transactions are processed reliably (critical for finance).",
    "hint": "Transaction reliability acronym."
  },
  {
    "id": 388,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is the 'CAP Theorem'?",
    "options": [
      "The principle that a distributed system can only provide two out of three: Consistency, Availability, and Partition Tolerance.",
      "The rule for wearing caps in the office.",
      "A security protocol for clouds.",
      "A way to calculate computer power."
    ],
    "answer": 0,
    "explanation": "Architects must choose which two properties are most important for their specific application.",
    "hint": "Pick 2: Consistency, Availability, Partition."
  },
  {
    "id": 389,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Cold Storage' for data?",
    "options": [
      "A data center in the Arctic.",
      "A backup that is physically disconnected.",
      "Low-cost storage for data that is rarely accessed and does not need to be retrieved immediately.",
      "Turning off the hard drive."
    ],
    "answer": 2,
    "explanation": "Cold storage (like AWS Glacier or Azure Archive) is very cheap but has slow retrieval times.",
    "hint": "Cheap, slow, rare access."
  },
  {
    "id": 390,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Hot Storage' for data?",
    "options": [
      "High-performance storage for data that is accessed frequently and needs to be available immediately.",
      "The primary database of the company.",
      "A data center in a desert.",
      "A hard drive that is running too hot."
    ],
    "answer": 0,
    "explanation": "Hot storage is expensive but offers the fastest response times for active applications.",
    "hint": "Expensive, fast, frequent access."
  },
  {
    "id": 391,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Architecture Capability Framework'?",
    "options": [
      "A set of tools for drawing diagrams.",
      "A ranking system for architects.",
      "A manual for using TOGAF software.",
      "A set of reference materials that help an organization establish and operate an internal architecture practice."
    ],
    "answer": 3,
    "explanation": "It explains how to set up the roles, processes, and skills for an EA team.",
    "hint": "Setting up the EA practice."
  },
  {
    "id": 392,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Disaster Recovery: Pilot Light'?",
    "options": [
      "Using a small candle in the server room.",
      "A project that tests the DR plan.",
      "The lights that turn on when the power fails.",
      "A DR strategy where a minimal version of the environment is always running in the cloud to keep data synchronized."
    ],
    "answer": 3,
    "explanation": "In a 'Pilot Light' scenario, the database is often live, but the application servers are only started during a disaster.",
    "hint": "Small 'flicker' always on."
  },
  {
    "id": 393,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Opportunity Cost'?",
    "options": [
      "The cost of a job interview.",
      "The price of a new business opportunity.",
      "The profit made from a project.",
      "The value of the project or benefit that is given up by choosing one project over another."
    ],
    "answer": 3,
    "explanation": "If you choose Project A, the Opportunity Cost is the benefit you would have gained from Project B.",
    "hint": "Value of the next best thing."
  },
  {
    "id": 394,
    "difficulty": "easy",
    "category": "scenarios",
    "question": "What is 'SaaS' (Software as a Service)?",
    "options": [
      "The code used to build a website.",
      "A person who fixes software.",
      "A software distribution model where a third-party provider hosts applications and makes them available to customers over the internet.",
      "Buying software in a box."
    ],
    "answer": 2,
    "explanation": "SaaS examples include Salesforce, Gmail, and Microsoft 365.",
    "hint": "Software over the internet."
  },
  {
    "id": 395,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is a 'Solution Building Block' (SBB)?",
    "options": [
      "A logical requirement for the system.",
      "A software bug fix.",
      "A physical component or product used to implement the architecture.",
      "A group of architects working on a solution."
    ],
    "answer": 2,
    "explanation": "SBBs are the actual products (e.g., Oracle Database) identified in Phase E.",
    "hint": "The actual 'Products'."
  },
  {
    "id": 396,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In Information Architecture, what is 'Data Lineage'?",
    "options": [
      "The speed of the data transfer.",
      "The tracking of data as it moves from its source to its destination, including all transformations along the way.",
      "The total amount of data in the company.",
      "The family tree of the architect."
    ],
    "answer": 1,
    "explanation": "Data lineage is vital for troubleshooting and regulatory compliance (knowing where the data came from).",
    "hint": "Data's journey and history."
  },
  {
    "id": 397,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Control Procurements'?",
    "options": [
      "The process of managing procurement relationships, monitoring contract performance, and making changes as appropriate.",
      "Stopping all purchases.",
      "Recording the items delivered.",
      "Paying the final bill."
    ],
    "answer": 0,
    "explanation": "This ensures that both the buyer and seller meet the terms of the contract.",
    "hint": "Managing the vendor relationship."
  },
  {
    "id": 398,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Read Replica' in database design?",
    "options": [
      "A manual for the database.",
      "A backup of the database.",
      "A person who reads the database.",
      "A copy of the primary database used only for 'Read' queries to reduce the load on the main database."
    ],
    "answer": 3,
    "explanation": "Read replicas improve performance for read-heavy applications (like social media).",
    "hint": "Copy for reading only."
  },
  {
    "id": 399,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is 'Phase F: Migration Planning'?",
    "options": [
      "Moving data from one database to another.",
      "Deciding which employees will move to a new team.",
      "Planning the office move.",
      "Creating the detailed Implementation and Migration Plan, including project sequencing and resource allocation."
    ],
    "answer": 3,
    "explanation": "Phase F finalizes the roadmap and moves the architecture into the project management realm.",
    "hint": "Detailed project scheduling."
  },
  {
    "id": 400,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Database Normalization'?",
    "options": [
      "The process of organizing data in a database to reduce redundancy and improve data integrity.",
      "Making the database act normal.",
      "Connecting two databases together.",
      "Deleting old data from the database."
    ],
    "answer": 0,
    "explanation": "Normalization involves splitting tables to ensure that every piece of data is stored in only one place.",
    "hint": "Reducing data redundancy."
  },
  {
    "id": 401,
    "difficulty": "hard",
    "category": "togaf",
    "question": "How is 'Security Architecture' addressed within the TOGAF ADM?",
    "options": [
      "It is a separate phase called Phase S.",
      "It is only addressed in Phase D (Technology).",
      "It is handled by an external auditor after Phase G.",
      "It is integrated into every phase of the ADM, from Preliminary to Phase H."
    ],
    "answer": 3,
    "explanation": "TOGAF treats security as a cross-cutting concern that must be considered at every step of the development cycle.",
    "hint": "Pervasive throughout the ADM."
  },
  {
    "id": 402,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Sherwood Applied Business Security Architecture' (SABSA) often used for in conjunction with TOGAF?",
    "options": [
      "As a replacement for the ADM.",
      "To design the network cabling.",
      "To manage the project budget.",
      "As a specialized framework for integrating security into the enterprise architecture."
    ],
    "answer": 3,
    "explanation": "SABSA is a leading framework for enterprise security architecture that maps well to TOGAF's phases.",
    "hint": "A security-focused framework."
  },
  {
    "id": 403,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In the Preliminary Phase, what is 'Architecture Partitioning'?",
    "options": [
      "Splitting the database into multiple tables.",
      "Breaking a project into smaller tasks.",
      "Dividing the office into cubicles.",
      "The process of dividing the enterprise into smaller, manageable areas for architectural focus (e.g., by geography or business unit)."
    ],
    "answer": 3,
    "explanation": "Partitioning allows different teams to work on different parts of the architecture simultaneously without conflict.",
    "hint": "Dividing the EA scope."
  },
  {
    "id": 404,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is an 'Architecture Principle'?",
    "options": [
      "The price of the architecture software.",
      "A technical drawing of a server.",
      "The head of the architecture department.",
      "A fundamental statement of belief or rule that guides architectural decision-making."
    ],
    "answer": 3,
    "explanation": "Principles (e.g., 'Data is an Asset') provide a stable foundation for making difficult design choices.",
    "hint": "Guiding rule/belief."
  },
  {
    "id": 405,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is 'Phase H: Architecture Change Management' responsible for?",
    "options": [
      "Updating the software version on servers.",
      "Ensuring that changes to the architecture are managed in a cohesive way and determining if a new ADM cycle is required.",
      "Managing the project's daily schedule.",
      "Hiring new architects."
    ],
    "answer": 1,
    "explanation": "Phase H monitors the architecture in production and decides when it is time to evolve or start over.",
    "hint": "Monitoring and evolution."
  },
  {
    "id": 406,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Architecture Board's' role in Phase G?",
    "options": [
      "To act as the governing body that grants dispensations or enforces compliance with the architecture.",
      "To train the users.",
      "To buy the hardware for the project.",
      "To write the code for the project."
    ],
    "answer": 0,
    "explanation": "The Board ensures the 'Target Architecture' is actually what gets built.",
    "hint": "Governance and Enforcement."
  },
  {
    "id": 407,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In TOGAF, what is the 'Common Systems Architecture' level of the Enterprise Continuum?",
    "options": [
      "The most generic architecture possible.",
      "Architecture for systems common to many enterprises, such as a Network Architecture or a Security Architecture.",
      "Architecture for a specific industry (e.g., Banking).",
      "Architecture for a specific company."
    ],
    "answer": 1,
    "explanation": "It sits between the generic 'Foundation' and the specific 'Industry' architectures.",
    "hint": "Common across many companies."
  },
  {
    "id": 408,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is a 'Statement of Architecture Work'?",
    "options": [
      "The contract that defines the scope, schedule, and deliverables for an architecture project, triggered by a Request for Architecture Work.",
      "The architect's resume.",
      "A list of all the servers in the datacenter.",
      "A manual on how to use TOGAF."
    ],
    "answer": 0,
    "explanation": "It is essentially the project charter for an ADM cycle.",
    "hint": "The EA project plan."
  },
  {
    "id": 409,
    "difficulty": "easy",
    "category": "togaf",
    "question": "What is 'Phase A: Architecture Vision'?",
    "options": [
      "A meeting to look at diagrams.",
      "Testing the software for bugs.",
      "Installing the new servers.",
      "The initial phase where the project scope is defined, stakeholders are identified, and high-level goals are set."
    ],
    "answer": 3,
    "explanation": "Phase A sets the direction and gets the 'Buy-in' from stakeholders.",
    "hint": "Setting the direction."
  },
  {
    "id": 410,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In the Content Metamodel, what is the difference between a 'Role' and an 'Actor'?",
    "options": [
      "An Actor is for movies; a Role is for business.",
      "An Actor is a specific person/system; a Role is a set of responsibilities performed by an Actor.",
      "They are the same thing.",
      "A Role is a person; an Actor is a machine."
    ],
    "answer": 1,
    "explanation": "Multiple actors can fulfill the same role (e.g., 'Approver').",
    "hint": "Specific vs. Abstract."
  },
  {
    "id": 411,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In the Business Technology Strategy pillar, what is 'Value Proposition'?",
    "options": [
      "The price of the software.",
      "The amount of profit the company makes.",
      "A technical document describing features.",
      "A statement that explains how a product or service solves a customer's problem or improves their situation."
    ],
    "answer": 3,
    "explanation": "Architects must ensure the technology they design directly supports the company's value proposition.",
    "hint": "Why customers buy from you."
  },
  {
    "id": 412,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Competitive Advantage' through technology?",
    "options": [
      "Hiring the best developers.",
      "Having more computers than the competitor.",
      "Buying the most expensive software.",
      "Using technology to provide a unique value or lower cost that competitors cannot easily replicate."
    ],
    "answer": 3,
    "explanation": "Examples include proprietary algorithms or highly integrated customer experiences.",
    "hint": "Winning through tech."
  },
  {
    "id": 413,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is the 'Human Dynamics' pillar focused on?",
    "options": [
      "How fast humans can type.",
      "Robots acting like humans.",
      "The 'soft skills' required by an architect, including leadership, communication, negotiation, and conflict resolution.",
      "Designing ergonomic chairs."
    ],
    "answer": 2,
    "explanation": "Architecture is 20% technical and 80% social; human dynamics are crucial for success.",
    "hint": "People and soft skills."
  },
  {
    "id": 414,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Stakeholder Engagement'?",
    "options": [
      "The process of involving individuals who can affect or are affected by the architecture throughout the design process.",
      "Recording the stakeholders' phone numbers.",
      "Inviting everyone to a party.",
      "A legal contract with the client."
    ],
    "answer": 0,
    "explanation": "Successful architects 'co-create' solutions with stakeholders to ensure adoption.",
    "hint": "Involving the right people."
  },
  {
    "id": 415,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Negotiation' for an architect?",
    "options": [
      "The process of reaching an agreement between stakeholders with different needs or priorities (e.g., Security vs. Speed).",
      "Telling everyone what to do.",
      "Winning an argument.",
      "Getting the cheapest price for a server."
    ],
    "answer": 0,
    "explanation": "Architects often facilitate 'trade-off' discussions between conflicting requirements.",
    "hint": "Finding the middle ground."
  },
  {
    "id": 416,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Leadership' in architecture?",
    "options": [
      "Being the boss of the IT department.",
      "The ability to inspire and guide a team toward a shared vision and architectural goal.",
      "Writing the most code.",
      "Having the most experience."
    ],
    "answer": 1,
    "explanation": "Architects lead through influence and expertise, even without formal authority.",
    "hint": "Inspiring a shared vision."
  },
  {
    "id": 417,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Cultural Awareness' for an architect?",
    "options": [
      "Hiring people from different backgrounds.",
      "Knowing about art and music.",
      "Understanding the organizational culture and adjusting architectural communication and strategy accordingly.",
      "Traveling to different countries."
    ],
    "answer": 2,
    "explanation": "An architecture that works in a startup might fail in a highly regulated bank due to 'culture'.",
    "hint": "Adapting to the environment."
  },
  {
    "id": 418,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Political Awareness' in the enterprise?",
    "options": [
      "Watching the news every day.",
      "Understanding the power structures, influencers, and 'unwritten rules' within an organization.",
      "Knowing who to vote for.",
      "Following the company's legal policies."
    ],
    "answer": 1,
    "explanation": "Navigating company politics is essential to get architecture designs approved and funded.",
    "hint": "Understanding power dynamics."
  },
  {
    "id": 419,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Mentoring' in the context of an EA team?",
    "options": [
      "Hiring a teacher.",
      "A professional relationship where an experienced architect helps a less experienced one grow their skills.",
      "Giving orders to junior staff.",
      "Correcting someone's mistakes in public."
    ],
    "answer": 1,
    "explanation": "Mentoring is vital for scaling the architecture capability within the organization.",
    "hint": "Helping others grow."
  },
  {
    "id": 420,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Active Listening'?",
    "options": [
      "Hearing what someone says while working.",
      "Fully concentrating on, understanding, and responding to what is being said, rather than just 'hearing' the words.",
      "Recording a meeting to listen to it later.",
      "Agreeing with everything the stakeholder says."
    ],
    "answer": 1,
    "explanation": "Active listening helps architects uncover the 'real' requirements behind a stakeholder's request.",
    "hint": "Listening to understand."
  },
  {
    "id": 421,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Communications Management Plan'?",
    "options": [
      "A plan for installing the phone system.",
      "A document that defines who needs what information, when they need it, and how it will be delivered.",
      "A schedule of all company meetings.",
      "A list of everyone's email addresses."
    ],
    "answer": 1,
    "explanation": "It ensures the right information reaches the right people at the right time.",
    "hint": "The Who, What, When of info."
  },
  {
    "id": 422,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Push Communication'?",
    "options": [
      "Information sent directly to specific recipients (e.g., emails, memos, reports).",
      "Pushing someone to finish their work.",
      "Forcing a decision.",
      "Demanding a meeting."
    ],
    "answer": 0,
    "explanation": "Push communication does not guarantee that the recipient understood the message.",
    "hint": "Sending info out."
  },
  {
    "id": 423,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Pull Communication'?",
    "options": [
      "Downloading a file.",
      "Pulling data from a database.",
      "Asking someone for an update.",
      "Information made available for recipients to access at their own discretion (e.g., Intranets, Wikis, SharePoint)."
    ],
    "answer": 3,
    "explanation": "Pull communication is best for large volumes of information or very large audiences.",
    "hint": "Accessing info as needed."
  },
  {
    "id": 424,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Interactive Communication'?",
    "options": [
      "Using a touch-screen monitor.",
      "Multidirectional exchange of information (e.g., meetings, phone calls, video conferences).",
      "Working on the same document at the same time.",
      "Playing a game with the team."
    ],
    "answer": 1,
    "explanation": "This is the most effective way to ensure common understanding.",
    "hint": "Two-way conversation."
  },
  {
    "id": 425,
    "difficulty": "medium",
    "category": "pmp",
    "question": "How do you calculate the number of 'Communication Channels' in a team of 'N' people?",
    "options": [
      "N + 1",
      "N * (N - 1) / 2",
      "N squared",
      "N * 2"
    ],
    "answer": 1,
    "explanation": "As the team size grows, complexity increases exponentially (e.g., 10 people = 45 channels).",
    "hint": "N(N-1)/2."
  },
  {
    "id": 426,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is a 'Status Report'?",
    "options": [
      "A list of tasks for next week.",
      "A person's job title.",
      "A document that provides information on the project's progress relative to the plan at a specific point in time.",
      "The architect's daily diary."
    ],
    "answer": 2,
    "explanation": "Status reports usually include metrics, accomplishments, and risks.",
    "hint": "Progress update."
  },
  {
    "id": 427,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Manage Stakeholder Engagement'?",
    "options": [
      "Recording the stakeholders' feedback.",
      "Paying the stakeholders for their time.",
      "The process of communicating and working with stakeholders to meet their needs/expectations and foster appropriate involvement.",
      "Telling stakeholders what to do."
    ],
    "answer": 2,
    "explanation": "It involves active management of expectations and resolving issues as they arise.",
    "hint": "Active relationship management."
  },
  {
    "id": 428,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is a 'Lessons Learned Register'?",
    "options": [
      "A school report card.",
      "A document used to record knowledge gained during a project so it can be used to improve future performance.",
      "A list of all the books the team has read.",
      "A record of employee mistakes."
    ],
    "answer": 1,
    "explanation": "It is a key part of the 'Closing' phase but should be updated throughout the project.",
    "hint": "Project knowledge log."
  },
  {
    "id": 429,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Noise' in the communication model?",
    "options": [
      "Anything that interferes with the transmission or understanding of a message (e.g., distance, culture, technical jargon).",
      "Static on a phone line.",
      "The sound of the server fans.",
      "People talking loudly in the office."
    ],
    "answer": 0,
    "explanation": "Architects must minimize 'noise' by using clear language and appropriate diagrams.",
    "hint": "Interference with the message."
  },
  {
    "id": 430,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is 'Non-verbal Communication'?",
    "options": [
      "Communication through body language, facial expressions, and gestures.",
      "Writing an email.",
      "Not talking to anyone.",
      "Drawing a diagram."
    ],
    "answer": 0,
    "explanation": "Up to 55% of communication is non-verbal; it is vital for face-to-face negotiations.",
    "hint": "Body language."
  },
  {
    "id": 431,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is the 'Sidecar' pattern in microservices?",
    "options": [
      "A backup server.",
      "A pattern where a secondary container/process is deployed alongside a main application to provide supporting features (e.g., logging, security).",
      "A small vehicle for the architect.",
      "Running two versions of the same app."
    ],
    "answer": 1,
    "explanation": "The sidecar shares the same lifecycle and network as the main app (common in Kubernetes).",
    "hint": "Attached helper process."
  },
  {
    "id": 432,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is a 'Service Mesh' (e.g., Istio)?",
    "options": [
      "A way to organize microservices in a list.",
      "A dedicated infrastructure layer for managing service-to-service communication, often using sidecar proxies.",
      "A network of fiber optic cables.",
      "A security tool for the database."
    ],
    "answer": 1,
    "explanation": "A Service Mesh provides features like traffic management, security, and observability without changing the app code.",
    "hint": "Infrastructure for service talk."
  },
  {
    "id": 433,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Circuit Breaker' pattern?",
    "options": [
      "A security attack.",
      "A design pattern used to detect failures and encapsulate the logic of preventing a failure from constantly recurring (stopping requests to a failing service).",
      "A way to turn off the internet.",
      "A physical switch in the electrical room."
    ],
    "answer": 1,
    "explanation": "It prevents 'cascading failures' in a distributed system.",
    "hint": "Stop calling a failed service."
  },
  {
    "id": 434,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Blue-Green Deployment'?",
    "options": [
      "A way to test the website on different monitors.",
      "A deployment that happens twice a year.",
      "Using two different colors for the website.",
      "A release strategy where you have two identical production environments; you route traffic to 'Green' while 'Blue' is updated."
    ],
    "answer": 3,
    "explanation": "It allows for nearly zero-downtime releases and instant rollback if something goes wrong.",
    "hint": "Two identical environments."
  },
  {
    "id": 435,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Bulkhead' pattern?",
    "options": [
      "A design pattern that isolates elements of an application into pools so that if one fails, the others will continue to function.",
      "Putting all servers in the same room.",
      "A way to secure the database.",
      "A strong wall in a ship."
    ],
    "answer": 0,
    "explanation": "Like a ship's hull, it prevents a single failure from 'sinking' the entire system.",
    "hint": "Isolating resources."
  },
  {
    "id": 436,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Immutable Infrastructure'?",
    "options": [
      "Infrastructure made of stone.",
      "A strategy where servers are never modified after deployment; if a change is needed, new servers are built from a common image.",
      "Infrastructure that never changes.",
      "Servers that are locked in a room."
    ],
    "answer": 1,
    "explanation": "This eliminates 'configuration drift' and makes deployments predictable.",
    "hint": "Replace, don't patch."
  },
  {
    "id": 437,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Infrastructure as Code' (IaC)?",
    "options": [
      "The process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration.",
      "Using code to fix a broken server.",
      "Writing a manual for the servers.",
      "A list of commands to run on a server."
    ],
    "answer": 0,
    "explanation": "IaC (e.g., Terraform, Ansible) allows infrastructure to be versioned and automated like software.",
    "hint": "Code-based server setup."
  },
  {
    "id": 438,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is a 'Honey Pot' in security architecture?",
    "options": [
      "A decoy system designed to lure cyberattackers and detect, deflect, or study hacking attempts.",
      "A backup database.",
      "A pot of honey in the kitchen.",
      "A very popular website."
    ],
    "answer": 0,
    "explanation": "Honeypots provide early warning of an attack and help security teams understand the attacker's methods.",
    "hint": "Security decoy."
  },
  {
    "id": 439,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'OAuth 2.0'?",
    "options": [
      "A tool for encrypting emails.",
      "A way to log in to a website.",
      "A new version of the internet.",
      "An industry-standard protocol for authorization that allows applications to gain limited access to user accounts on an HTTP service."
    ],
    "answer": 3,
    "explanation": "It allows a user to grant a third-party site access to their info (e.g., 'Log in with Google') without sharing their password.",
    "hint": "Authorization protocol."
  },
  {
    "id": 440,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'OpenID Connect' (OIDC)?",
    "options": [
      "An identity layer on top of the OAuth 2.0 protocol that allows for 'Authentication' (verifying who the user is).",
      "A secure way to send messages.",
      "A list of open-source software.",
      "A way to connect to the internet."
    ],
    "answer": 0,
    "explanation": "While OAuth is for 'Authorization' (What you can do), OIDC is for 'Authentication' (Who you are).",
    "hint": "Identity layer for OAuth."
  },
  {
    "id": 441,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is an 'Architecture Maturity Model'?",
    "options": [
      "A list of the best architecture tools.",
      "A schedule for architecture training.",
      "A framework used to assess the effectiveness and capability of an enterprise architecture practice.",
      "A way to see how old the architects are."
    ],
    "answer": 2,
    "explanation": "Models like CMMI help organizations improve their EA processes over time.",
    "hint": "Measuring EA capability."
  },
  {
    "id": 442,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Business Continuity Planning' (BCP)?",
    "options": [
      "Hiring a new CEO.",
      "A plan for the company's next 10 years.",
      "Keeping the office open 24/7.",
      "The process of creating systems of prevention and recovery to deal with potential threats to a company (focusing on the whole business)."
    ],
    "answer": 3,
    "explanation": "BCP is broader than DR; it includes people, processes, and locations (e.g., 'Where do employees work if the office burns down?').",
    "hint": "Whole business survival."
  },
  {
    "id": 443,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is the 'Halo Effect' in human resource management?",
    "options": [
      "The tendency to assume that because a person is good at one thing (e.g., coding), they will be good at everything (e.g., project management).",
      "A light around a person's head.",
      "People looking like angels.",
      "Promoting only the best employees."
    ],
    "answer": 0,
    "explanation": "This is a common mistake when promoting technical experts into management roles.",
    "hint": "Skill transfer bias."
  },
  {
    "id": 444,
    "difficulty": "easy",
    "category": "scenarios",
    "question": "What is 'Multi-Factor Authentication' (MFA)?",
    "options": [
      "Logging in from two different computers.",
      "A security system that requires more than one method of authentication from independent categories of credentials.",
      "Having many passwords.",
      "Asking the user many questions."
    ],
    "answer": 1,
    "explanation": "Common factors include 'Something you know' (password) and 'Something you have' (phone/token).",
    "hint": "Multiple login checks."
  },
  {
    "id": 445,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Architecture Landscape'?",
    "options": [
      "The architectural assets currently in use within the enterprise, organized by granularity (Strategic, Segment, Capability).",
      "A list of all the software licenses.",
      "The view from the architect's window.",
      "A map of the company's offices."
    ],
    "answer": 0,
    "explanation": "The Landscape shows 'What we have' at different levels of detail.",
    "hint": "Current EA assets."
  },
  {
    "id": 446,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In BTABoK, what is 'Decision Analysis'?",
    "options": [
      "Choosing the cheapest option.",
      "Asking the boss for a decision.",
      "A formal process for evaluating multiple alternatives based on criteria, weights, and scoring to make the best architectural choice.",
      "Analyzing why a decision was made in the past."
    ],
    "answer": 2,
    "explanation": "It removes bias and provides a 'defensible' reason for choosing one technology over another.",
    "hint": "Structured choice process."
  },
  {
    "id": 447,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Stakeholder Register'?",
    "options": [
      "A book for stakeholders to sign.",
      "A record of all project meetings.",
      "A list of the project team's salaries.",
      "A project document including the identification, assessment, and classification of project stakeholders."
    ],
    "answer": 3,
    "explanation": "It tracks who the stakeholders are and how they should be managed.",
    "hint": "The 'Stakeholder List'."
  },
  {
    "id": 448,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Penetration Testing'?",
    "options": [
      "Testing if a needle can penetrate a surface.",
      "Checking the server room for physical security.",
      "An authorized simulated cyberattack on a computer system, performed to evaluate the security of the system.",
      "Testing the speed of the internet."
    ],
    "answer": 2,
    "explanation": "Pen-testing (or Ethical Hacking) identifies vulnerabilities that real hackers could exploit.",
    "hint": "Simulated cyberattack."
  },
  {
    "id": 449,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is a 'Compliance Review'?",
    "options": [
      "A review of the project's budget.",
      "Checking if the architect is following the laws.",
      "A meeting to discuss the project's schedule.",
      "A formal assessment of a project's implementation against the established architecture standards and guidelines."
    ],
    "answer": 3,
    "explanation": "Compliance reviews ensure that the 'as-built' solution matches the 'as-designed' architecture.",
    "hint": "Checking design adherence."
  },
  {
    "id": 450,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Encryption at Rest'?",
    "options": [
      "Encrypting data while it is being sent.",
      "Encrypting data while the computer is turned off.",
      "A way to speed up the database.",
      "The protection of data that is stored on a physical device (disk, tape), ensuring it cannot be read if the device is stolen."
    ],
    "answer": 3,
    "explanation": "This is a key security requirement for sensitive data in the cloud.",
    "hint": "Protecting stored data."
  },
  {
    "id": 451,
    "difficulty": "hard",
    "category": "togaf",
    "question": "How does TOGAF define 'Service Orientation'?",
    "options": [
      "A way of writing code in Java.",
      "A customer service training program.",
      "A design paradigm for software components that provides a way to achieve enterprise agility and interoperability.",
      "A method for managing IT helpdesk tickets."
    ],
    "answer": 2,
    "explanation": "Service orientation focuses on defining discrete, reusable units of logic (services) that can be orchestrated.",
    "hint": "Agility and Interoperability."
  },
  {
    "id": 452,
    "difficulty": "medium",
    "category": "togaf",
    "question": "In the context of SOA and TOGAF, what is a 'Service Contract'?",
    "options": [
      "A contract for an architect's employment.",
      "A legal agreement with a vendor.",
      "The formal definition of the service's interface, including inputs, outputs, and quality of service.",
      "A list of software features."
    ],
    "answer": 2,
    "explanation": "The contract defines 'how' to interact with the service without needing to know the internal code.",
    "hint": "The service's formal interface."
  },
  {
    "id": 453,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is the 'SOA Reference Architecture' in the Enterprise Continuum?",
    "options": [
      "A Common Systems Architecture.",
      "An Organization-Specific Architecture.",
      "A Foundation Architecture.",
      "An Industry Architecture."
    ],
    "answer": 0,
    "explanation": "Because SOA patterns apply across many different systems and enterprises, it is a Common Systems Architecture.",
    "hint": "Applicable to many systems."
  },
  {
    "id": 454,
    "difficulty": "medium",
    "category": "togaf",
    "question": "Which ADM Phase is most impacted by the introduction of an Enterprise Service Bus (ESB)?",
    "options": [
      "Phase A",
      "Phase B",
      "Phase C & D",
      "Phase G"
    ],
    "answer": 2,
    "explanation": "The ESB impacts both the Application Architecture (Phase C) and the Technology Architecture (Phase D).",
    "hint": "Integration infrastructure."
  },
  {
    "id": 455,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In TOGAF 9.2, what is a 'Business Service'?",
    "options": [
      "A software program that runs in the background.",
      "A self-contained unit of business functionality that is governed and measured as a whole.",
      "A service provided by a consultant.",
      "A customer support phone line."
    ],
    "answer": 1,
    "explanation": "Business services represent the 'What' the business does for its customers or internal units.",
    "hint": "Functional business unit."
  },
  {
    "id": 456,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is 'Loose Coupling' in an architecture?",
    "options": [
      "An approach where components are independent and have minimal knowledge of each other's internal workings.",
      "Cables that are not plugged in properly.",
      "Using different brands of computers.",
      "A system that changes every day."
    ],
    "answer": 0,
    "explanation": "Loose coupling allows components to be updated or replaced without breaking the entire system.",
    "hint": "Independence of components."
  },
  {
    "id": 457,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is the primary benefit of 'Service Reusability'?",
    "options": [
      "To hire fewer developers.",
      "To save disk space.",
      "To make the code harder to read.",
      "To reduce development time and costs by using existing services in new ways/compositions."
    ],
    "answer": 3,
    "explanation": "Reuse is a core driver of ROI in SOA and Enterprise Architecture.",
    "hint": "Build once, use many times."
  },
  {
    "id": 458,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is 'Service Orchestration'?",
    "options": [
      "A band of musicians playing music.",
      "A meeting of all the architects.",
      "Naming services in alphabetical order.",
      "The automated arrangement, coordination, and management of complex computer systems and services."
    ],
    "answer": 3,
    "explanation": "Orchestration combines multiple simple services into a single complex business process.",
    "hint": "Coordinating multiple services."
  },
  {
    "id": 459,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In the Preliminary Phase, how is 'Architecture Governance' established?",
    "options": [
      "By hiring a police officer.",
      "By buying a governance software tool.",
      "By writing a list of rules for the developers.",
      "By defining the Architecture Board, the Governance Framework, and the roles and responsibilities."
    ],
    "answer": 3,
    "explanation": "Governance must be established BEFORE any actual architecture design work begins.",
    "hint": "Setting the rules of the game."
  },
  {
    "id": 460,
    "difficulty": "easy",
    "category": "togaf",
    "question": "What is an 'Architecture Stakeholder'?",
    "options": [
      "An individual, team, or organization with interests in, or concerns relative to, an architecture.",
      "The users of the software.",
      "A person who owns a stake in the company.",
      "The person who pays for the project."
    ],
    "answer": 0,
    "explanation": "Stakeholders include everyone from the CEO to the end-user and the developer.",
    "hint": "Anyone with an 'Interest'."
  },
  {
    "id": 461,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In the IT Environment pillar, what is 'Total Cost of Ownership' (TCO)?",
    "options": [
      "A financial estimate intended to help buyers and owners determine the direct and indirect costs of a product or system over its lifetime.",
      "The salary of the IT staff.",
      "The monthly electricity bill of the data center.",
      "The price of the laptop."
    ],
    "answer": 0,
    "explanation": "TCO includes purchase price, maintenance, training, and decommissioning costs.",
    "hint": "Full lifetime cost."
  },
  {
    "id": 462,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Return on Investment' (ROI)?",
    "options": [
      "Getting your money back from the bank.",
      "The speed of the computer.",
      "The number of users on the website.",
      "A performance measure used to evaluate the efficiency of an investment (Net Profit / Cost of Investment)."
    ],
    "answer": 3,
    "explanation": "Architects must justify their designs by demonstrating the ROI to the business.",
    "hint": "Profitability metric."
  },
  {
    "id": 463,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Capital Expenditure' (CapEx)?",
    "options": [
      "Money spent on snacks for the office.",
      "The architect's salary.",
      "Monthly subscription fees.",
      "Funds used by a company to acquire, upgrade, and maintain physical assets such as servers or buildings."
    ],
    "answer": 3,
    "explanation": "CapEx involves large upfront costs (common in on-prem data centers).",
    "hint": "Upfront asset investment."
  },
  {
    "id": 464,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Operational Expenditure' (OpEx)?",
    "options": [
      "Buying a new building.",
      "The cost of the initial project setup.",
      "The ongoing costs for running a product, business, or system (e.g., cloud subscriptions, electricity).",
      "Buying a new server."
    ],
    "answer": 2,
    "explanation": "Cloud computing shifts IT costs from CapEx to OpEx.",
    "hint": "Ongoing running costs."
  },
  {
    "id": 465,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Technical Debt'?",
    "options": [
      "Money owed to a computer store.",
      "A loan taken by the IT department.",
      "Using old hardware that needs to be replaced.",
      "The implied cost of additional rework caused by choosing an easy (quick) solution now instead of using a better approach that would take longer."
    ],
    "answer": 3,
    "explanation": "Technical debt is like financial debt; it must be paid back later with 'interest' (more work).",
    "hint": "Speed now vs. Pain later."
  },
  {
    "id": 466,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is a 'Business Case'?",
    "options": [
      "A briefcase for the CEO.",
      "A justification for a proposed project or undertaking on the basis of its expected commercial benefit.",
      "A technical manual.",
      "A list of software features."
    ],
    "answer": 1,
    "explanation": "The business case explains 'Why' the company should spend money on the architecture.",
    "hint": "Project justification."
  },
  {
    "id": 467,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Vendor Lock-in'?",
    "options": [
      "Signing a long-term contract.",
      "A situation where a customer is dependent on a vendor for products and services and cannot switch to another vendor without substantial costs.",
      "Locking the vendor in the server room.",
      "Using open-source software."
    ],
    "answer": 1,
    "explanation": "Architects try to minimize lock-in by using standards and multi-cloud strategies.",
    "hint": "Difficulty of switching vendors."
  },
  {
    "id": 468,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Chargeback' in IT finance?",
    "options": [
      "A refund for a broken computer.",
      "An accounting strategy where the costs of IT services are billed back to the business units that use them.",
      "Paying for software with a credit card.",
      "The cost of returning a product."
    ],
    "answer": 1,
    "explanation": "Chargeback models help business units understand the cost of their technology consumption.",
    "hint": "Billing IT back to departments."
  },
  {
    "id": 469,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Showback' in IT finance?",
    "options": [
      "A presentation of the architecture.",
      "A practice where IT costs are tracked and reported to business units, but no actual money is transferred (for awareness).",
      "Showing the computer to the boss.",
      "A list of all the software bugs."
    ],
    "answer": 1,
    "explanation": "Showback is often the first step before a full Chargeback model is implemented.",
    "hint": "Awareness without billing."
  },
  {
    "id": 470,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Economies of Scale' in cloud computing?",
    "options": [
      "A way to measure the size of the cloud.",
      "The cost advantage that arises with increased output of a product; large cloud providers can offer lower prices because they buy in bulk.",
      "Buying smaller computers to save money.",
      "The profit made from selling cloud services."
    ],
    "answer": 1,
    "explanation": "Amazon, Google, and Microsoft can build data centers much cheaper than an individual company can.",
    "hint": "Cheaper at higher volumes."
  },
  {
    "id": 471,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Resource Management Plan'?",
    "options": [
      "A list of all the servers.",
      "A document that identifies how to acquire, manage, and use both physical and human resources.",
      "A schedule for the project team.",
      "A budget for the project."
    ],
    "answer": 1,
    "explanation": "It covers everything from hiring developers to booking the server room.",
    "hint": "Managing People and Gear."
  },
  {
    "id": 472,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Resource Leveling'?",
    "options": [
      "Firing employees to save money.",
      "Hiring more people to finish faster.",
      "Making sure all servers are the same height.",
      "A technique in which start and finish dates are adjusted based on resource constraints to balance the demand with available supply."
    ],
    "answer": 3,
    "explanation": "Leveling often extends the project schedule because it prevents over-allocating people.",
    "hint": "Balancing the workload."
  },
  {
    "id": 473,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Resource Smoothing'?",
    "options": [
      "A way to calculate the project's profit.",
      "Making the server look shiny.",
      "A technique that adjusts the activities of a schedule such that the requirements for resources on the project do not exceed certain predefined limits.",
      "Talking to the team to reduce stress."
    ],
    "answer": 2,
    "explanation": "Unlike leveling, smoothing does not change the project's critical path or finish date.",
    "hint": "Leveling without delay."
  },
  {
    "id": 474,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is the 'Tuckman Ladder' of team development?",
    "options": [
      "A ladder used by the architect.",
      "Initiating, Planning, Executing, Monitoring, Closing.",
      "Forming, Storming, Norming, Performing, Adjourning.",
      "Planning, Designing, Building, Testing, Closing."
    ],
    "answer": 2,
    "explanation": "It describes the stages a team goes through as they learn to work together.",
    "hint": "Form, Storm, Norm, Perform."
  },
  {
    "id": 475,
    "difficulty": "medium",
    "category": "pmp",
    "question": "In the Tuckman Ladder, what happens during 'Storming'?",
    "options": [
      "Team members start to push against the boundaries; conflict often arises as different working styles and ideas clash.",
      "The team starts working efficiently.",
      "The project is finished.",
      "A literal storm happens at the office."
    ],
    "answer": 0,
    "explanation": "Storming is a necessary, albeit difficult, stage of becoming a high-performing team.",
    "hint": "Conflict and Pushback."
  },
  {
    "id": 476,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is a 'Virtual Team'?",
    "options": [
      "A team of robots.",
      "A group of people with a shared goal who fulfill their roles with little or no time spent meeting face-to-face.",
      "A team that only exists on paper.",
      "A team of software developers."
    ],
    "answer": 1,
    "explanation": "Virtual teams use technology to collaborate across different locations.",
    "hint": "Remote collaboration."
  },
  {
    "id": 477,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Emotional Intelligence' (EQ) in project management?",
    "options": [
      "The ability to identify, assess, and manage the personal emotions of oneself and other people/groups.",
      "Being very smart.",
      "A test for the project manager.",
      "Crying at work."
    ],
    "answer": 0,
    "explanation": "EQ is essential for an architect to navigate complex stakeholder relationships.",
    "hint": "Managing self/other emotions."
  },
  {
    "id": 478,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Conflict Management: Withdraw/Avoid'?",
    "options": [
      "Firing the person you disagree with.",
      "Retreating from an actual or potential conflict situation; postponing the issue to be better prepared.",
      "Winning the argument.",
      "Changing your mind."
    ],
    "answer": 1,
    "explanation": "This is a temporary solution and does not resolve the root cause.",
    "hint": "Backing away from conflict."
  },
  {
    "id": 479,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Conflict Management: Collaborate/Problem Solve'?",
    "options": [
      "Incorporating multiple viewpoints and insights from differing perspectives; leads to consensus and commitment.",
      "Fighting until someone wins.",
      "Doing what the boss says.",
      "Splitting the difference."
    ],
    "answer": 0,
    "explanation": "This is considered the 'Win-Win' approach and is usually the best strategy.",
    "hint": "Working together for the best fix."
  },
  {
    "id": 480,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is 'Recognition and Rewards'?",
    "options": [
      "A list of the best employees.",
      "Giving the team a trophy.",
      "The process of acknowledging and reinforcing desirable behavior/performance in team members.",
      "Paying the employees' salaries."
    ],
    "answer": 2,
    "explanation": "Recognition improves team morale and productivity.",
    "hint": "Acknowledging good work."
  },
  {
    "id": 481,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is the 'Strangler Fig' pattern?",
    "options": [
      "A strategy for modernizing a legacy system by gradually replacing specific functionalities with new services until the old system is completely replaced.",
      "Turning off the old system immediately.",
      "A type of plant in the office.",
      "Connecting the old system to a new database."
    ],
    "answer": 0,
    "explanation": "The name comes from a vine that grows around a tree until the tree dies; it is safer than 'Big Bang' migrations.",
    "hint": "Gradual legacy replacement."
  },
  {
    "id": 482,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is an 'Anti-Corruption Layer' (ACL)?",
    "options": [
      "A law that prevents computer fraud.",
      "A way to encrypt the database.",
      "A security tool to prevent bribery.",
      "A layer between a new system and a legacy system that translates between different data models to prevent the legacy 'mess' from polluting the new design."
    ],
    "answer": 3,
    "explanation": "ACLs are critical when a modern microservice needs to talk to a 30-year-old mainframe.",
    "hint": "Translation layer for legacy."
  },
  {
    "id": 483,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Domain-Driven Design' (DDD)?",
    "options": [
      "Designing a website for a specific domain name.",
      "An approach to software development that centers the design on the business domain and its logic, using a 'Ubiquitous Language'.",
      "A way to organize servers by location.",
      "Designing the database before the software."
    ],
    "answer": 1,
    "explanation": "DDD is the foundation for modern microservices architecture.",
    "hint": "Business-logic-centric design."
  },
  {
    "id": 484,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is a 'Bounded Context' in DDD?",
    "options": [
      "The memory limit of a server.",
      "A specific area in the business where a particular model or term has a specific, unambiguous meaning.",
      "The time limit of a project.",
      "A fence around the data center."
    ],
    "answer": 1,
    "explanation": "For example, 'Account' might mean something different in 'Sales' vs. 'Support'.",
    "hint": "Where a model is valid."
  },
  {
    "id": 485,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Chaos Engineering' (e.g., Netflix Chaos Monkey)?",
    "options": [
      "The discipline of experimenting on a software system in production in order to build confidence in the system's capability to withstand turbulent conditions.",
      "The project failing due to bad management.",
      "A messy server room.",
      "A security attack by hackers."
    ],
    "answer": 0,
    "explanation": "Chaos engineering proactively breaks things to ensure the system is truly resilient.",
    "hint": "Breaking things on purpose."
  },
  {
    "id": 486,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Canary Deployment'?",
    "options": [
      "A deployment that happens very quickly.",
      "A technique to reduce the risk of introducing a new software version by rolling it out to a small subset of users first.",
      "Testing the software for bugs manually.",
      "Using a bird to test the air in the data center."
    ],
    "answer": 1,
    "explanation": "If the 'Canary' group doesn't have issues, the software is rolled out to everyone else.",
    "hint": "Small-scale early release."
  },
  {
    "id": 487,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Feature Toggling' (Feature Flags)?",
    "options": [
      "Turning the computer on and off.",
      "A list of software features.",
      "A technique that allows developers to change the behavior of a system without changing the code (by turning features on/off at runtime).",
      "A way to choose which software to buy."
    ],
    "answer": 2,
    "explanation": "Feature flags allow for safer deployments and A/B testing.",
    "hint": "On/Off switch for code."
  },
  {
    "id": 488,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Zero Trust' Security?",
    "options": [
      "A system with no security.",
      "A list of suspicious users.",
      "Not trusting the architect.",
      "A security framework based on the principle of 'never trust, always verify,' even for users already inside the network."
    ],
    "answer": 3,
    "explanation": "Zero Trust assumes the network is already breached and requires strict verification for every request.",
    "hint": "Never trust, always verify."
  },
  {
    "id": 489,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Content Delivery Network' (CDN)?",
    "options": [
      "A geographically distributed group of servers that work together to provide fast delivery of Internet content (images, videos).",
      "A network for delivering packages to the office.",
      "A social media network.",
      "A way to back up the database."
    ],
    "answer": 0,
    "explanation": "CDNs (like Cloudflare or Akamai) bring data closer to the user to reduce latency.",
    "hint": "Caching content globally."
  },
  {
    "id": 490,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Edge Computing'?",
    "options": [
      "Sitting on the edge of the chair.",
      "Computing done at the company's headquarters.",
      "Using the newest technology available.",
      "A distributed computing paradigm that brings computation and data storage closer to the location where it is needed (e.g., IoT devices)."
    ],
    "answer": 3,
    "explanation": "Edge computing reduces latency by processing data locally instead of sending everything to a central cloud.",
    "hint": "Processing near the source."
  },
  {
    "id": 491,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is an 'Architecture Artifact'?",
    "options": [
      "A work product such as a diagram, document, or model that describes an aspect of the architecture.",
      "A piece of software used by architects.",
      "An old computer found in the basement.",
      "A historical book about architecture."
    ],
    "answer": 0,
    "explanation": "Artifacts are categorized into Catalogs (lists), Matrices (relationships), and Diagrams.",
    "hint": "EA work product."
  },
  {
    "id": 492,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Availability: The Rule of Nines'?",
    "options": [
      "A way to express uptime percentage (e.g., 99.9% is 'three nines').",
      "A system must have nine servers.",
      "The architect must work nine hours a day.",
      "A list of nine security rules."
    ],
    "answer": 0,
    "explanation": "Four nines (99.99%) allows only about 52 minutes of downtime per year.",
    "hint": "Uptime percentage shorthand."
  },
  {
    "id": 493,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Self-Organizing Teams' in Agile?",
    "options": [
      "A team with no boss.",
      "A team that organizes its own parties.",
      "A team that writes its own budget.",
      "A team where the members have the autonomy to choose how best to accomplish their work, rather than being directed by others."
    ],
    "answer": 3,
    "explanation": "Self-organizing teams are a core concept of the Agile Manifesto and Scrum.",
    "hint": "Team autonomy."
  },
  {
    "id": 494,
    "difficulty": "easy",
    "category": "scenarios",
    "question": "What is 'API First' design?",
    "options": [
      "Buying an API instead of building one.",
      "The first API ever written.",
      "A list of all the APIs in the company.",
      "Designing the API before any other part of the system."
    ],
    "answer": 3,
    "explanation": "API-first ensures that the system is easily integrated from the start.",
    "hint": "Interface before implementation."
  },
  {
    "id": 495,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is 'Phase G: Implementation Governance'?",
    "options": [
      "Providing architectural oversight for the implementation to ensure it conforms to the target architecture.",
      "Training the users on the new system.",
      "Writing the code for the project.",
      "Managing the project budget."
    ],
    "answer": 0,
    "explanation": "Phase G is where the 'Architect' checks the 'Builder's' work.",
    "hint": "Oversight of building."
  },
  {
    "id": 496,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In Information Architecture, what is 'Master Data Management' (MDM)?",
    "options": [
      "Managing the master's degree of the architect.",
      "Recording all the data in one large file.",
      "The primary database of the company.",
      "A method used to define and manage the critical data of an organization to provide a single source of truth."
    ],
    "answer": 3,
    "explanation": "MDM ensures that 'Customer A' is the same person in the Sales, Billing, and Support systems.",
    "hint": "Single source of truth."
  },
  {
    "id": 497,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Virtual Team: Pros and Cons'?",
    "options": [
      "Pro: More work done; Con: Fewer employees.",
      "Pro: Better coffee; Con: No office.",
      "Pro: Access to global talent; Con: Communication challenges and time zone differences.",
      "Pro: Cheaper; Con: More meetings."
    ],
    "answer": 2,
    "explanation": "Virtual teams are common in global EA practices.",
    "hint": "Global talent vs. Communication."
  },
  {
    "id": 498,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Eventual Consistency'?",
    "options": [
      "A consistency model used in distributed systems where, if no new updates are made, all accesses will eventually return the last updated value.",
      "The database always being correct.",
      "The system being consistent eventually.",
      "A way to speed up the network."
    ],
    "answer": 0,
    "explanation": "Eventual consistency is a trade-off made for high availability and performance in NoSQL databases.",
    "hint": "Consistent 'later'."
  },
  {
    "id": 499,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Request for Architecture Work'?",
    "options": [
      "An architect asking for a job.",
      "The architect's monthly bill.",
      "The document sent from the sponsoring organization to the architecture organization to trigger a new ADM cycle.",
      "A list of software features the user wants."
    ],
    "answer": 2,
    "explanation": "It is the formal start of the TOGAF ADM process.",
    "hint": "The 'Starting Pistol'."
  },
  {
    "id": 500,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'API Gateway' pattern?",
    "options": [
      "A single entry point for all clients that routes requests to the appropriate microservices and handles cross-cutting concerns (auth, rate limiting).",
      "A fence around the API.",
      "A list of all the APIs.",
      "A tool for writing API code."
    ],
    "answer": 0,
    "explanation": "API Gateways simplify the client's life by hiding the complexity of the backend services.",
    "hint": "Single entry point for APIs."
  },
  {
    "id": 501,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is the central process that operates at the core of the TOGAF ADM cycle?",
    "options": [
      "Phase A: Architecture Vision",
      "Preliminary Phase",
      "Phase H: Architecture Change Management",
      "Requirements Management"
    ],
    "answer": 3,
    "explanation": "Requirements Management is at the center of the ADM diagram because every phase either generates or consumes requirements.",
    "hint": "The 'Hub' of the ADM."
  },
  {
    "id": 502,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Architecture Requirements Specification'?",
    "options": [
      "A document that provides a set of quantitative statements that outline what an implementation project must do to comply with the architecture.",
      "A list of software bugs.",
      "The project's financial budget.",
      "A manual for the architect."
    ],
    "answer": 0,
    "explanation": "It translates the high-level architecture into specific, measurable rules for builders.",
    "hint": "Quantitative implementation rules."
  },
  {
    "id": 503,
    "difficulty": "hard",
    "category": "togaf",
    "question": "In the context of the ADM, what is a 'Gap' that is 'Unintentional'?",
    "options": [
      "A feature that was forgotten.",
      "A budget deficit.",
      "A mistake in the diagram.",
      "A service or building block that was in the Baseline but is missing from the Target without a strategic reason."
    ],
    "answer": 3,
    "explanation": "Gap analysis helps identify if something was accidentally dropped during the design of the Target state.",
    "hint": "Missing from Target accidentally."
  },
  {
    "id": 504,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Enterprise Continuum' primarily used for?",
    "options": [
      "A timeline of the project.",
      "To classify architecture and solution artifacts and show how they evolve from generic to organization-specific.",
      "A list of all the employees.",
      "Measuring the company's growth."
    ],
    "answer": 1,
    "explanation": "It provides a consistent way to store and retrieve assets in the Architecture Repository.",
    "hint": "Classification of EA assets."
  },
  {
    "id": 505,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is 'Phase E: Opportunities and Solutions' mainly focused on?",
    "options": [
      "Hiring new developers.",
      "Testing the software.",
      "Identifying major implementation projects and grouping them into work packages to deliver the Target Architecture.",
      "Designing the database schema."
    ],
    "answer": 2,
    "explanation": "Phase E is where the 'how' starts to take shape through the Identification of projects.",
    "hint": "Project identification."
  },
  {
    "id": 506,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Implementation and Migration Plan'?",
    "options": [
      "A manual for the new system.",
      "A plan for moving the office.",
      "A detailed schedule and roadmap for implementing the architecture, finalized in Phase F.",
      "A backup plan for the database."
    ],
    "answer": 2,
    "explanation": "It outlines the sequence of projects and the resources required to reach the Target state.",
    "hint": "Finalized Roadmap."
  },
  {
    "id": 507,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is 'Architecture Governance' in Phase G?",
    "options": [
      "The manager's personal rules.",
      "The practice of monitoring the implementation process to ensure it doesn't deviate from the architectural specifications.",
      "A set of laws.",
      "A software tool that locks code."
    ],
    "answer": 1,
    "explanation": "Governance ensures the integrity of the architecture during the build phase.",
    "hint": "Ensuring conformance during build."
  },
  {
    "id": 508,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Architecture Building Block' (ABB) definition?",
    "options": [
      "A logical architecture component that captures requirements and guides the development of SBBs.",
      "A building where architects work.",
      "A physical server.",
      "A software program."
    ],
    "answer": 0,
    "explanation": "ABBs are 'Vendor-neutral' and describe 'What' is needed.",
    "hint": "Logical component."
  },
  {
    "id": 509,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is 'Phase B: Business Architecture'?",
    "options": [
      "Hiring the CEO.",
      "Setting the company's budget.",
      "Designing the company's logo.",
      "Describing the product/service strategy, and the organizational, functional, process, information, and geographic aspects of business environment."
    ],
    "answer": 3,
    "explanation": "Business Architecture is the foundation for all subsequent IT architecture phases.",
    "hint": "The 'Business' layer."
  },
  {
    "id": 510,
    "difficulty": "easy",
    "category": "togaf",
    "question": "What is the final phase of the TOGAF ADM cycle (before it restarts)?",
    "options": [
      "Phase H",
      "Phase G",
      "Phase F",
      "Preliminary"
    ],
    "answer": 0,
    "explanation": "Phase H (Architecture Change Management) is the final step where the cycle is monitored and reset.",
    "hint": "Change Management."
  },
  {
    "id": 511,
    "difficulty": "medium",
    "category": "btabok",
    "question": "In the Infrastructure pillar, what is 'Cloud-Native'?",
    "options": [
      "Accessing the internet via satellite.",
      "An approach to building and running applications that exploits the advantages of the cloud computing delivery model (Containers, Microservices).",
      "Buying servers from Amazon.",
      "Using a computer outside."
    ],
    "answer": 1,
    "explanation": "Cloud-native is about 'how' applications are created and deployed, not just 'where'.",
    "hint": "Exploiting cloud advantages."
  },
  {
    "id": 512,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Containerization' (e.g., Docker)?",
    "options": [
      "A lightweight form of virtualization that allows an application and its dependencies to be packaged and run consistently across environments.",
      "A way to store physical hardware.",
      "Organizing files into folders.",
      "Putting computers in shipping containers."
    ],
    "answer": 0,
    "explanation": "Containers are more efficient than Virtual Machines because they share the host OS kernel.",
    "hint": "App + Dependencies package."
  },
  {
    "id": 513,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Orchestration' for containers (e.g., Kubernetes)?",
    "options": [
      "Putting containers in a specific order.",
      "Writing music for the team.",
      "The automated management of containerized applications, including deployment, scaling, and networking.",
      "Deleting old containers."
    ],
    "answer": 2,
    "explanation": "Kubernetes (K8s) is the industry standard for container orchestration.",
    "hint": "Managing container lifecycles."
  },
  {
    "id": 514,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Observability' vs. 'Monitoring'?",
    "options": [
      "Monitoring is for hardware; Observability is for software.",
      "Monitoring tells you when something is wrong; Observability allows you to understand WHY it is wrong by looking at Logs, Metrics, and Traces.",
      "Observability is more expensive.",
      "They are the same thing."
    ],
    "answer": 1,
    "explanation": "Observability is critical for debugging complex, distributed microservice environments.",
    "hint": "Understanding the internal state."
  },
  {
    "id": 515,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'DevOps'?",
    "options": [
      "Hiring more developers.",
      "A cultural and professional movement that stresses communication, collaboration, and integration between software developers and IT operations.",
      "A software tool.",
      "A new type of programming language."
    ],
    "answer": 1,
    "explanation": "DevOps aims to shorten the systems development life cycle and provide continuous delivery.",
    "hint": "Dev + Ops collaboration."
  },
  {
    "id": 516,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'CI/CD'?",
    "options": [
      "Computer Information / Cloud Data.",
      "A project management method.",
      "Continuous Integration and Continuous Deployment/Delivery.",
      "A type of high-speed cable."
    ],
    "answer": 2,
    "explanation": "CI/CD automates the building, testing, and deployment of code.",
    "hint": "Automated pipeline."
  },
  {
    "id": 517,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Infrastructure as Code' (IaC) drift?",
    "options": [
      "The server moving in the rack.",
      "The phenomenon where the actual environment configuration becomes different from the configuration defined in the IaC scripts due to manual changes.",
      "The speed of the network slowing down.",
      "The code becoming old and useless."
    ],
    "answer": 1,
    "explanation": "Drift is a major risk that can lead to deployment failures and security vulnerabilities.",
    "hint": "Manual vs. Code mismatch."
  },
  {
    "id": 518,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Serverless Computing'?",
    "options": [
      "Using a laptop instead of a server.",
      "Computing without using any servers.",
      "A cloud execution model where the provider runs the server and dynamically manages the allocation of machine resources (e.g., AWS Lambda).",
      "A network that is not connected to a server."
    ],
    "answer": 2,
    "explanation": "Serverless allows developers to focus on code (Functions) without managing infrastructure.",
    "hint": "Focus on Code, not Servers."
  },
  {
    "id": 519,
    "difficulty": "hard",
    "category": "btabok",
    "question": "What is 'Vendor Agnostic' architecture?",
    "options": [
      "Not knowing who the vendor is.",
      "A software that works on any computer.",
      "Using only one vendor for everything.",
      "A design approach that avoids dependency on any specific vendor's proprietary technology, often using open standards."
    ],
    "answer": 3,
    "explanation": "Agnostic designs make it easier to switch cloud providers or vendors later.",
    "hint": "Avoiding dependency."
  },
  {
    "id": 520,
    "difficulty": "easy",
    "category": "btabok",
    "question": "What is 'Disaster Recovery Time Objective' (RTO)?",
    "options": [
      "The number of people needed to fix the system.",
      "How much data you can lose.",
      "The cost of the disaster.",
      "The maximum acceptable length of time that a computer, system, network, or application can be down after a failure."
    ],
    "answer": 3,
    "explanation": "RTO is the 'Time' it takes to get back up and running.",
    "hint": "Uptime deadline."
  },
  {
    "id": 521,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Project Integration Management'?",
    "options": [
      "Hiring the project team.",
      "Writing the project code.",
      "The processes required to ensure that the various elements of the project are properly coordinated.",
      "Connecting two software systems."
    ],
    "answer": 2,
    "explanation": "It involves making trade-offs among competing objectives and alternatives.",
    "hint": "Coordinating the whole project."
  },
  {
    "id": 522,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is the 'Project Charter'?",
    "options": [
      "A document that formally authorizes the existence of a project and provides the project manager with the authority to apply organizational resources.",
      "The final report of the project.",
      "A list of software requirements.",
      "A map of the project location."
    ],
    "answer": 0,
    "explanation": "The charter is created in the Initiation phase and defines the high-level goals.",
    "hint": "Formal project authorization."
  },
  {
    "id": 523,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Perform Integrated Change Control'?",
    "options": [
      "Testing the code for bugs.",
      "Changing the project manager.",
      "Updating the software version.",
      "The process of reviewing all change requests, approving changes, and managing changes to deliverables and project documents."
    ],
    "answer": 3,
    "explanation": "This process ensures that no change is made without considering its impact on the whole project.",
    "hint": "Formal change approval."
  },
  {
    "id": 524,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is a 'Change Control Board' (CCB)?",
    "options": [
      "A meeting to discuss the project budget.",
      "A group of developers writing code.",
      "A whiteboard used for planning.",
      "A formally chartered group responsible for reviewing, evaluating, approving, delaying, or rejecting changes to the project."
    ],
    "answer": 3,
    "explanation": "The CCB provides governance for project changes.",
    "hint": "The 'Change' authority."
  },
  {
    "id": 525,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Project Closeout'?",
    "options": [
      "Firing the project team.",
      "The process of finalizing all activities across all of the Project Management Process Groups to formally complete the project or phase.",
      "Turning off the project server.",
      "Writing the user manual."
    ],
    "answer": 1,
    "explanation": "Closeout includes archiving records, releasing resources, and gathering lessons learned.",
    "hint": "Formal project finish."
  },
  {
    "id": 526,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is a 'Milestone'?",
    "options": [
      "The final delivery of the project.",
      "A task that takes 10 days.",
      "A stone used to measure distance.",
      "A significant point or event in a project."
    ],
    "answer": 3,
    "explanation": "Milestones have zero duration and represent key achievements.",
    "hint": "Significant project point."
  },
  {
    "id": 527,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Corrective Action'?",
    "options": [
      "Punishing an employee for a mistake.",
      "Changing the project goals.",
      "Buying new equipment.",
      "An intentional activity that realigns the performance of the project work with the project management plan."
    ],
    "answer": 3,
    "explanation": "Corrective actions fix the 'current' trajectory of the project.",
    "hint": "Fixing project direction."
  },
  {
    "id": 528,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Preventive Action'?",
    "options": [
      "An intentional activity that ensures the future performance of the project work is aligned with the project management plan.",
      "Stopping the project before it starts.",
      "Testing the software for bugs.",
      "A security measure for the servers."
    ],
    "answer": 0,
    "explanation": "Preventive actions aim to avoid future problems before they occur.",
    "hint": "Avoiding future trouble."
  },
  {
    "id": 529,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Defect Repair'?",
    "options": [
      "Fixing a broken computer.",
      "Changing the project scope.",
      "An intentional activity to modify a nonconforming product or product component.",
      "Updating the software version."
    ],
    "answer": 2,
    "explanation": "Defect repair is specifically about fixing something that was built incorrectly.",
    "hint": "Fixing a 'bug'."
  },
  {
    "id": 530,
    "difficulty": "easy",
    "category": "pmp",
    "question": "What is a 'Project Management Information System' (PMIS)?",
    "options": [
      "The project manager's personal computer.",
      "A list of all the project employees.",
      "An information system consisting of the tools and techniques used to gather, integrate, and disseminate the outputs of project management processes.",
      "A manual for the project software."
    ],
    "answer": 2,
    "explanation": "Examples include Microsoft Project, Jira, or a simple shared drive.",
    "hint": "Tools for project data."
  },
  {
    "id": 531,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'MLOps' (Machine Learning Operations)?",
    "options": [
      "A way to train machines faster.",
      "A set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently.",
      "Writing AI code in Python.",
      "A robot that does IT operations."
    ],
    "answer": 1,
    "explanation": "MLOps is the 'DevOps' equivalent for Machine Learning workflows.",
    "hint": "DevOps for Machine Learning."
  },
  {
    "id": 532,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Model Drift' in AI architecture?",
    "options": [
      "The robot moving around the room.",
      "The model being copied to another server.",
      "The degradation of an ML model's predictive performance over time due to changes in the environment or underlying data.",
      "The code becoming old and useless."
    ],
    "answer": 2,
    "explanation": "Architects must design systems to monitor and 'retrain' models when drift is detected.",
    "hint": "Performance drop over time."
  },
  {
    "id": 533,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is a 'Feature Store' in ML architecture?",
    "options": [
      "A list of software bugs.",
      "A centralized repository that allows for the storage and sharing of features (data points) used to train ML models.",
      "A shop that sells software features.",
      "A database of user profiles."
    ],
    "answer": 1,
    "explanation": "Feature stores ensure consistency between the data used for training and the data used for 'live' predictions.",
    "hint": "Central ML data repo."
  },
  {
    "id": 534,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Inference' in the context of Machine Learning?",
    "options": [
      "Training the model with data.",
      "Guessing what the user wants.",
      "Writing the AI code.",
      "The process of using a trained ML model to make predictions on new, unseen data."
    ],
    "answer": 3,
    "explanation": "Inference is the 'Runtime' part of an AI system.",
    "hint": "Model making predictions."
  },
  {
    "id": 535,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Federated Learning'?",
    "options": [
      "A machine learning technique that trains an algorithm across multiple decentralized edge devices or servers holding local data samples, without exchanging them.",
      "A school for architects.",
      "Using a government database to train AI.",
      "A team of architects working together."
    ],
    "answer": 0,
    "explanation": "Federated learning is great for privacy because the raw data never leaves the local device.",
    "hint": "Training on local data."
  },
  {
    "id": 536,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Explainable AI' (XAI)?",
    "options": [
      "A set of processes and methods that allows human users to comprehend and trust the results and output created by machine learning algorithms.",
      "AI that can talk like a human.",
      "AI that explains how to use software.",
      "A manual for AI developers."
    ],
    "answer": 0,
    "explanation": "XAI is critical in regulated industries like healthcare or finance to avoid 'Black Box' decisions.",
    "hint": "Understanding AI logic."
  },
  {
    "id": 537,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Data Augmentation'?",
    "options": [
      "A technique used to increase the amount of data by adding slightly modified copies of already existing data or newly created synthetic data.",
      "Buying data from another company.",
      "Adding more space to the database.",
      "Cleaning the database."
    ],
    "answer": 0,
    "explanation": "It helps train better models when real-world data is limited.",
    "hint": "Artificially increasing data."
  },
  {
    "id": 538,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is a 'GPU' (Graphics Processing Unit) role in AI?",
    "options": [
      "A tool for designing architectural diagrams.",
      "To show high-quality images on the monitor.",
      "A specialized processor used to accelerate the training and inference of deep learning models due to its parallel processing power.",
      "A way to speed up the internet."
    ],
    "answer": 2,
    "explanation": "GPUs are much faster than traditional CPUs for the math required by AI.",
    "hint": "Parallel processing for AI."
  },
  {
    "id": 539,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'A/B Testing' for ML models?",
    "options": [
      "Testing two different models (A and B) with live traffic to see which one performs better.",
      "Testing the model on two different computers.",
      "Testing the model with two different users.",
      "A way to find bugs in the model."
    ],
    "answer": 0,
    "explanation": "A/B testing provides real-world evidence of which model version is more effective.",
    "hint": "Comparing two models live."
  },
  {
    "id": 540,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is 'Bias' in Machine Learning?",
    "options": [
      "The cost of the AI software.",
      "A security attack on the AI.",
      "The architect's personal opinion.",
      "An error from erroneous assumptions in the learning algorithm; can lead to unfair or inaccurate predictions."
    ],
    "answer": 3,
    "explanation": "Architects must ensure data is diverse to prevent algorithmic bias.",
    "hint": "Systemic unfairness in AI."
  },
  {
    "id": 541,
    "difficulty": "medium",
    "category": "btabok",
    "question": "What is 'Ethical Architecture'?",
    "options": [
      "A list of moral rules for architects.",
      "Being honest about the project's cost.",
      "The practice of designing systems that respect user privacy, promote fairness, and avoid doing harm.",
      "Architecture that follows the laws."
    ],
    "answer": 2,
    "explanation": "Ethics is becoming a core pillar of modern Enterprise Architecture.",
    "hint": "Fairness and Privacy."
  },
  {
    "id": 542,
    "difficulty": "hard",
    "category": "togaf",
    "question": "What is a 'Service Level Requirement' (SLR)?",
    "options": [
      "A list of software features.",
      "A statement of the requirements for a service from the customer's perspective, used to define the SLA.",
      "A requirement for a new server.",
      "A manual for the service desk."
    ],
    "answer": 1,
    "explanation": "SLRs are the 'Inputs' that lead to the 'SLA' contract.",
    "hint": "Customer's service needs."
  },
  {
    "id": 543,
    "difficulty": "hard",
    "category": "pmp",
    "question": "What is 'Gold Plating'?",
    "options": [
      "A reward for a job well done.",
      "Making the server look like gold.",
      "The practice of providing more than what was requested in the project scope (which can lead to increased costs and risks).",
      "Buying the most expensive software."
    ],
    "answer": 2,
    "explanation": "Gold plating is discouraged in PMP because it introduces unmanaged change.",
    "hint": "Adding unrequested extras."
  },
  {
    "id": 544,
    "difficulty": "easy",
    "category": "scenarios",
    "question": "What is 'Low-Code / No-Code' (LCNC)?",
    "options": [
      "Platforms that allow non-programmers to create applications through graphical user interfaces instead of traditional coding.",
      "Writing very short code.",
      "A very simple programming language.",
      "A software that has no bugs."
    ],
    "answer": 0,
    "explanation": "LCNC is a major trend in democratizing software development in the enterprise.",
    "hint": "App building for non-coders."
  },
  {
    "id": 545,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is 'Architecture Viewpoint'?",
    "options": [
      "The perspective from which a view is taken, defining the concerns and the models used to address them for a specific stakeholder.",
      "The view of the building from the outside.",
      "A meeting to discuss the architecture.",
      "The architect's personal opinion."
    ],
    "answer": 0,
    "explanation": "Viewpoints define the 'Rules' for creating a View for a specific person (e.g., a Security Viewpoint).",
    "hint": "The 'Template' for a View."
  },
  {
    "id": 546,
    "difficulty": "hard",
    "category": "btabok",
    "question": "In BTABoK, what is 'Business Agility'?",
    "options": [
      "The ability of an organization to rapidly adapt to market and environmental changes in productive and cost-effective ways.",
      "Changing the business goals every week.",
      "How fast the CEO can run.",
      "Using the Agile methodology for all projects."
    ],
    "answer": 0,
    "explanation": "EA is a primary enabler of business agility through modular and flexible design.",
    "hint": "Rapid organizational adaptation."
  },
  {
    "id": 547,
    "difficulty": "medium",
    "category": "pmp",
    "question": "What is 'Scope Creep'?",
    "options": [
      "The uncontrolled expansion of project scope without adjustments to time, cost, and resources.",
      "The project finishing ahead of schedule.",
      "A person who tries to change the project.",
      "A way to measure the project's size."
    ],
    "answer": 0,
    "explanation": "Scope creep is one of the biggest causes of project failure.",
    "hint": "Uncontrolled growth of work."
  },
  {
    "id": 548,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Quantum Computing' (in an EA context)?",
    "options": [
      "A very fast traditional computer.",
      "An emerging technology that uses quantum mechanics to solve problems too complex for classical computers (affects future encryption).",
      "A way to calculate the quantum of data.",
      "A small computer used for science."
    ],
    "answer": 1,
    "explanation": "Architects must monitor Quantum Computing for its potential to break current encryption standards.",
    "hint": "Next-gen computing power."
  },
  {
    "id": 549,
    "difficulty": "medium",
    "category": "togaf",
    "question": "What is the 'Architecture Capability'?",
    "options": [
      "The speed of the architecture software.",
      "The ability of an organization to produce, govern, and manage its architectures.",
      "A document that lists the architect's skills.",
      "The architect's ability to draw."
    ],
    "answer": 1,
    "explanation": "Developing this capability is the goal of the Preliminary Phase.",
    "hint": "The EA 'Power' of the company."
  },
  {
    "id": 550,
    "difficulty": "hard",
    "category": "scenarios",
    "question": "What is 'Digital Twin' architecture?",
    "options": [
      "Having two identical websites.",
      "A robot that looks like the architect.",
      "A backup of the company's data.",
      "A digital representation of a physical object, process, or system that can be used for simulation and monitoring."
    ],
    "answer": 3,
    "explanation": "Digital twins allow architects to test changes in a virtual environment before applying them to the real world.",
    "hint": "Virtual copy of reality."
  },
  {
    "id": 551,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is SABSA?",
    "options": [
      "A UML notation",
      "A risk-driven enterprise security architecture framework aligned to business requirements",
      "A cloud billing tool",
      "A project scheduling method"
    ],
    "answer": 1,
    "explanation": "SABSA: Sherwood Applied Business Security Architecture traces security controls to business drivers in layers."
  },
  {
    "id": 552,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What does an enterprise Taxonomy provide?",
    "options": [
      "A controlled classification of terms and artifacts that keeps architecture content consistent",
      "A budget",
      "A network topology",
      "A test plan"
    ],
    "answer": 0,
    "explanation": "Taxonomy: standard categories in the architecture repository aid reuse and governance."
  },
  {
    "id": 553,
    "difficulty": "medium",
    "category": "scenarios",
    "question": "What is ArchiMate used for?",
    "options": [
      "An open modeling language to describe business, application and technology layers and their relationships",
      "A database engine",
      "A programming language",
      "A CI tool"
    ],
    "answer": 0,
    "explanation": "Archimate: The Open Group standard commonly used with TOGAF to visualize enterprise architecture."
  }
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Covering: TOGAF ADM, BTABoK Pillars, PMP Essentials, and Modern Architectural Scenarios.
const hotsQuestions = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,           // TOGAF: ADM Phases & Repository
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, // BTABoK: 5 Pillars & Design Decisions
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, // PMP: Communication, Risk, & Leadership
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, // Scenarios: Integration, Cloud, & Security
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, // Mixed Review: Gaps, Quality, & Governance
    58, 59, 60, 61,                         // Change Management & Requirement Types
    96, 97,                                 // Work Packages & Data Lakes
    110, 111, 112,                          // NPV, Ethics, & Vendor Viability
    129, 130,                               // Risk Escalation & Eventual Consistency
    143, 144, 145, 146,                     // Discovery, Reviews, & Resource Leveling
    157, 158, 159,                          // Gap Matrix & Artifact Definitions
    160, 161,                               // View vs Viewpoint & Sourcing Strategy
    192, 193, 194,                          // Schedule Float & API Versioning
    206, 207,                               // Compliance Rules & Migration Phases
    216, 217,                               // Taxonomy & Maintainability
    245, 246,                               // Security CIA & Servant Leadership
    275, 276,                               // EQ & Expectancy Theory
    289, 290, 291, 292,                     // Canary Releases & Critical Path
    304, 305,                               // Architecture Vision & ADD
    315, 316,                               // Usability & Elasticity vs Scalability
    335, 336, 337, 338,                     // SSR, Hydration, & DLQ Patterns
    390, 391,                               // EA Capability & Pilot Light DR
    408, 409,                               // Vision Buy-in & Role vs Actor
    410, 411,                               // Value Prop & Competitive Advantage
    430, 440, 441, 442                      // OIDC, Maturity Models, & BCP
];

