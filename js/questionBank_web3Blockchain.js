const questionBank = [
  {
    "id": 1,
    "difficulty": "hard",
    "category": "architecture",
    "question": "As a Technical Architect transitioning a Core Banking System to a Hybrid Web3 model, what is the primary shift in the 'Source of Truth'?",
    "options": [
      "From a single private authoritative ledger to a distributed, cryptographically verified state machine",
      "From ACID-compliant relational databases to eventually consistent NoSQL clusters",
      "From RESTful APIs to GraphQL-only interfaces",
      "From microservices to a monolithic smart contract architecture"
    ],
    "answer": 0,
    "explanation": "Web3 replaces the central authority (bank's DB) with a shared state machine where every state transition is verified by consensus and linked via hashes.",
    "hint": "Think about who owns the state and how it is verified."
  },
  {
    "id": 2,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "In the context of Fintech 'Self-Custody', which cryptographic primitive ensures that only the account owner can initiate a transaction?",
    "options": [
      "SHA-3 Hashing",
      "Symmetric AES-256 encryption",
      "Asymmetric Digital Signatures (ECDSA/EdDSA)",
      "Diffie-Hellman Key Exchange"
    ],
    "answer": 2,
    "explanation": "Web3 uses Asymmetric encryption where the Private Key signs the transaction and the Public Key (Address) verifies it without revealing the secret.",
    "hint": "Web2 uses passwords; Web3 uses digital signatures."
  },
  {
    "id": 3,
    "difficulty": "medium",
    "category": "blockchain_primitives",
    "question": "What is the primary architectural role of a 'Merkle Tree' in a blockchain block header?",
    "options": [
      "To encrypt user data before sending it to the mempool",
      "To compress the entire transaction history into a single string",
      "To allow efficient, secure verification of whether a transaction exists in a block (Merkle Proofs)",
      "To generate the consensus difficulty target"
    ],
    "answer": 2,
    "explanation": "Merkle Trees allow 'Light Clients' or Web2 backends to verify a transaction exists without downloading the entire blockchain.",
    "hint": "Focus on 'Proof of Membership'."
  },
  {
    "id": 4,
    "difficulty": "hard",
    "category": "integration",
    "question": "When integrating a Node.js backend with an Ethereum-based layer, why is a 'Provider' (like Infura or Alchemy) used?",
    "options": [
      "To compile Solidity code into Bytecode",
      "To manage the user's private keys securely on the server",
      "To provide an RPC interface (JSON-RPC) to communicate with the P2P network",
      "To act as a centralized database for the smart contracts"
    ],
    "answer": 2,
    "explanation": "Web2 servers don't naturally speak P2P. RPC Providers bridge the gap, allowing Node.js/Python to query blockchain state via standard HTTP/WebSockets.",
    "hint": "How does your server 'talk' to the blockchain?"
  },
  {
    "id": 5,
    "difficulty": "hard",
    "category": "security",
    "question": "In a 'Security-First' Web3 architecture, why is 'Account Abstraction' (ERC-4337) considered superior to standard EOA for banking?",
    "options": [
      "It removes the need for gas fees entirely",
      "It encrypts the transaction data so validators cannot see it",
      "It allows programmable security logic (e.g., social recovery, multi-sig) directly in the account",
      "It makes transactions faster and cheaper"
    ],
    "answer": 2,
    "explanation": "ERC-4337 turns accounts into Smart Contracts, enabling features like daily spending limits and recovery without seed phrases.",
    "hint": "Programmable wallets."
  },
  {
    "id": 6,
    "difficulty": "medium",
    "category": "fintech",
    "question": "Which token standard would an Architect choose for 'Identity-Linked' non-transferable certificates (Soulbound Tokens)?",
    "options": [
      "ERC-4626",
      "ERC-1155",
      "ERC-20",
      "ERC-721"
    ],
    "answer": 3,
    "explanation": "ERC-721 (NFTs) are unique. By overriding the transfer function to revert, they become Soulbound, perfect for KYC status.",
    "hint": "Unique and non-fungible."
  },
  {
    "id": 7,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "Why is a 'Decentralized Oracle' (Chainlink) required to verify USD exchange rates inside a Smart Contract?",
    "options": [
      "To bypass gas fees for data retrieval",
      "Smart contracts cannot natively initiate HTTP requests to the outside world",
      "To encrypt the data before it enters the blockchain",
      "To speed up transaction processing"
    ],
    "answer": 1,
    "explanation": "Blockchains are deterministic. If a contract made an HTTP call, every node might get a different result, breaking consensus.",
    "hint": "The 'Oracle Problem' is about deterministic connectivity."
  },
  {
    "id": 8,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "Which hashing algorithm is the standard for Ethereum (EVM) address generation and Merkle roots?",
    "options": [
      "SHA-256",
      "Bcrypt",
      "Keccak-256",
      "MD5"
    ],
    "answer": 2,
    "explanation": "Ethereum uses Keccak-256. While related to SHA-3, it was finalized before the NIST standard was slightly modified.",
    "hint": "Often confused with SHA-3."
  },
  {
    "id": 9,
    "difficulty": "medium",
    "category": "architecture",
    "question": "In a 'DApp' architecture, where is the 'Business Logic' typically moved from the traditional Web2 stack?",
    "options": [
      "From the Database to the Frontend",
      "From the Client-side to the Server-side",
      "From Nginx to the Load Balancer",
      "From the Backend API to the Smart Contract on-chain"
    ],
    "answer": 3,
    "explanation": "Core business rules move from private backend code (Node/Python) to public, immutable Smart Contracts.",
    "hint": "Immutable execution."
  },
  {
    "id": 10,
    "difficulty": "hard",
    "category": "blockchain_primitives",
    "question": "What is a 'Nonce' in the context of an Ethereum transaction, and why is it critical for an Architect to manage it in a Node.js backend?",
    "options": [
      "A scalar value equal to the number of transactions sent from an address, used to prevent replay attacks",
      "A random number for encryption",
      "The block reward amount",
      "A unique ID for the RPC provider"
    ],
    "answer": 0,
    "explanation": "Nonces ensure transactions are processed in order and prevent someone from 'replaying' an old transaction to steal funds.",
    "hint": "Transaction ordering and security."
  },
  {
    "id": 11,
    "difficulty": "hard",
    "category": "fintech",
    "question": "In 'Core Banking Transformation', what is the main benefit of using a Private/Permissioned blockchain (like Hyperledger Fabric) over a Public one?",
    "options": [
      "Total anonymity for all users",
      "Granular access control and higher throughput for internal bank settlement",
      "Lower security",
      "Compatibility with Metamask"
    ],
    "answer": 1,
    "explanation": "Banks often require privacy for transactions and known participants, which permissioned chains provide via MSPs (Membership Service Providers).",
    "hint": "Control vs. Openness."
  },
  {
    "id": 12,
    "difficulty": "medium",
    "category": "blockchain_integration",
    "question": "When a Python backend uses 'Web3.py' to monitor events, what is it actually listening for?",
    "options": [
      "Changes in the RPC provider's IP address",
      "User's browser history",
      "EVM 'Logs' emitted during transaction execution",
      "Console.log statements in Solidity"
    ],
    "answer": 2,
    "explanation": "Smart contracts emit events (indexed logs) which are the primary way off-chain systems (Web2) sync state with on-chain actions.",
    "hint": "Indexed logs in the EVM."
  },
  {
    "id": 13,
    "difficulty": "hard",
    "category": "security",
    "question": "What is the 'Check-Effects-Interactions' pattern in Smart Contract design?",
    "options": [
      "A database optimization technique",
      "A way to minimize gas costs for loops",
      "A front-end state management library",
      "A security pattern to prevent Reentrancy attacks"
    ],
    "answer": 3,
    "explanation": "Always check conditions, update internal state (Effects), and then interact with external contracts to prevent re-entry before state updates.",
    "hint": "Order of operations matters."
  },
  {
    "id": 14,
    "difficulty": "medium",
    "category": "zkp",
    "question": "What does the 'Succinct' in zk-SNARK stand for?",
    "options": [
      "Secure and Secret",
      "Synchronized and Simple",
      "Standardized Universal Code",
      "Small proof size and fast verification regardless of computation complexity"
    ],
    "answer": 3,
    "explanation": "Succinct means the proofs are very small and can be verified in milliseconds, even if the original task took hours.",
    "hint": "Efficiency of the proof."
  },
  {
    "id": 15,
    "difficulty": "hard",
    "category": "architecture",
    "question": "In a hybrid Web2/Web3 system, what is the role of 'IPFS' in relation to an NFT project?",
    "options": [
      "To speed up the blockchain consensus",
      "To host the smart contract code",
      "To provide decentralized storage for large metadata and image assets that are too expensive for on-chain storage",
      "To act as a firewall for the Node.js server"
    ],
    "answer": 2,
    "explanation": "On-chain storage is extremely expensive. IPFS provides content-addressed storage for the 'actual' files referenced by the NFT.",
    "hint": "Decentralized file storage."
  },
  {
    "id": 16,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is a 'Cross-Chain Bridge' risk known as the 'Lock-and-Mint' vulnerability?",
    "options": [
      "If the bridge's vault on the source chain is hacked, the minted assets on the destination chain become unbacked/worthless",
      "When the smart contract is written in Java",
      "When the gas price on the destination chain is too low",
      "When the user forgets their password"
    ],
    "answer": 0,
    "explanation": "Many bridges lock collateral on Chain A to mint 'wrapped' assets on Chain B. If the lockup is drained, the wrapped asset loses all value.",
    "hint": "Collateral backing risk."
  },
  {
    "id": 17,
    "difficulty": "medium",
    "category": "standards",
    "question": "Which ERC standard would you use for a multi-token contract that supports both Fungible (ERC-20) and Non-Fungible (ERC-721) items in one deployment?",
    "options": [
      "ERC-4626",
      "ERC-777",
      "ERC-20",
      "ERC-1155"
    ],
    "answer": 3,
    "explanation": "ERC-1155 is the 'Multi-Token' standard, allowing batch transfers and reducing gas by managing multiple token types in one contract.",
    "hint": "The multi-token standard."
  },
  {
    "id": 18,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is the primary architectural difference between ECDSA (used in Ethereum) and EdDSA (used in Solana/Cardano)?",
    "options": [
      "EdDSA requires a central server",
      "EdDSA is more resistant to side-channel attacks and offers deterministic signatures without a random nonce",
      "ECDSA uses symmetric keys",
      "ECDSA is faster but less secure"
    ],
    "answer": 1,
    "explanation": "EdDSA (specifically Ed25519) is generally considered more modern and performant than the secp256k1 curve used by Bitcoin/Ethereum.",
    "hint": "Deterministic signatures."
  },
  {
    "id": 19,
    "difficulty": "medium",
    "category": "integration",
    "question": "In a 'Web3 Wallet' flow, why does the frontend request a 'Signature' rather than a 'Transaction' for login?",
    "options": [
      "Transactions cannot contain text",
      "Web3 wallets don't support login",
      "Signatures are more secure than transactions",
      "To save gas, as signatures are off-chain and free to generate"
    ],
    "answer": 3,
    "explanation": "Logging in via 'Sign-In with Ethereum' (SIWE) is free because it doesn't change the state of the blockchain.",
    "hint": "Off-chain verification."
  },
  {
    "id": 20,
    "difficulty": "hard",
    "category": "fintech",
    "question": "What does 'Atomic Settlement' mean in the context of Blockchain-based core banking?",
    "options": [
      "Settlement that takes 24 hours",
      "The simultaneous exchange of assets where either both happen or neither happens, eliminating counterparty risk",
      "Settlement that requires a physical signature",
      "Using nuclear energy for mining"
    ],
    "answer": 1,
    "explanation": "In traditional banking, legs of a trade settle at different times (T+2). Blockchain allows DvP (Delivery vs Payment) in a single transaction.",
    "hint": "All-or-nothing exchange."
  },
  {
    "id": 21,
    "difficulty": "hard",
    "category": "zkp",
    "question": "What is the primary scaling advantage of a ZK-Rollup over an Optimistic Rollup?",
    "options": [
      "It is cheaper to deploy",
      "It uses Java instead of Solidity",
      "It does not require a sequencer",
      "It uses 'Validity Proofs' that allow near-instant withdrawals to Layer 1"
    ],
    "answer": 3,
    "explanation": "Optimistic rollups have a 7-day challenge period. ZK-Rollups use math to prove validity immediately.",
    "hint": "Withdrawal latency."
  },
  {
    "id": 22,
    "difficulty": "medium",
    "category": "tooling",
    "question": "Which tool is used for 'Fuzzing' smart contracts to find edge cases by injecting random data?",
    "options": [
      "Truffle",
      "Slither",
      "Prettier",
      "Echidna"
    ],
    "answer": 3,
    "explanation": "Echidna is a specialized fuzzer for Solidity that tries to break invariants defined in the code.",
    "hint": "Property-based testing."
  },
  {
    "id": 23,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Gas' in the EVM, and why does it exist?",
    "options": [
      "The profit margin for the blockchain developers",
      "A way to encrypt data",
      "The fuel for the servers",
      "A measurement of computational effort used to prevent infinite loops (Turing completeness protection) and spam"
    ],
    "answer": 3,
    "explanation": "Because the EVM is Turing complete, Gas prevents a malicious user from running an infinite loop that freezes every node in the network.",
    "hint": "Halting problem solution."
  },
  {
    "id": 24,
    "difficulty": "medium",
    "category": "fintech",
    "question": "What is 'Flash Loan' in DeFi architecture?",
    "options": [
      "A loan used to buy hardware",
      "A loan that must be repaid in 30 days",
      "An uncollateralized loan that must be borrowed and repaid within the same atomic blockchain transaction",
      "A high-interest credit card"
    ],
    "answer": 2,
    "explanation": "Flash loans allow users to borrow millions with $0 collateral, as long as the code proves the money is returned by the end of the block.",
    "hint": "Intra-transaction borrowing."
  },
  {
    "id": 25,
    "difficulty": "hard",
    "category": "smart_contracts",
    "question": "In FinTech applications, what does 'Reentrancy' refer to in a Solidity smart contract vulnerability?",
    "options": [
      "When a user logs in from two different devices",
      "When the database connection is lost during a transaction",
      "When an external contract call is made before the state is updated, allowing repeated withdrawals",
      "When the gas price fluctuates during execution"
    ],
    "answer": 2,
    "explanation": "Reentrancy is a classic bug where a contract calls an external address, and that address calls back into the original contract to drain funds.",
    "hint": "The DAO hack mechanism."
  },
  {
    "id": 26,
    "difficulty": "medium",
    "category": "tooling",
    "question": "Which development framework is currently preferred by Architects for 'Type-Safe' Ethereum interactions in high-performance Node.js environments?",
    "options": [
      "Viem",
      "Truffle",
      "Hardhat",
      "Web3.js"
    ],
    "answer": 0,
    "explanation": "Viem is a lightweight, type-safe alternative to Ethers.js, increasingly used for its small bundle size and TypeScript performance.",
    "hint": "Modern alternative to Ethers."
  },
  {
    "id": 27,
    "difficulty": "hard",
    "category": "standards",
    "question": "An Architect is designing a DeFi Yield Vault. Which EIP standard provides a unified interface for 'Tokenized Vaults'?",
    "options": [
      "ERC-1155",
      "ERC-4626",
      "ERC-20",
      "ERC-4337"
    ],
    "answer": 1,
    "explanation": "ERC-4626 is the yield-bearing vault standard, simplifying integration for lending and borrowing protocols.",
    "hint": "Vault standard."
  },
  {
    "id": 28,
    "difficulty": "medium",
    "category": "security",
    "question": "What is 'Formal Verification' in the context of high-stakes smart contracts?",
    "options": [
      "Writing documentation",
      "Using mathematical proofs to ensure the code behaves exactly as the specification intended",
      "A peer review by humans",
      "Running the code in a browser"
    ],
    "answer": 1,
    "explanation": "Formal verification uses logic (like Z3 solvers) to prove that no state exists where funds can be stolen or locked incorrectly.",
    "hint": "Math-based security."
  },
  {
    "id": 29,
    "difficulty": "hard",
    "category": "integration",
    "question": "In a Python/Django app, what is the 'Contract ABI' used for when interacting with a deployed smart contract?",
    "options": [
      "To store the user's password",
      "As a backup of the source code",
      "To pay for the gas fees",
      "As a JSON interface describing the contract's functions and parameters so the backend can encode/decode calls"
    ],
    "answer": 3,
    "explanation": "The Application Binary Interface (ABI) is essential for off-chain code to know how to format data to be understood by the EVM.",
    "hint": "The 'Translator' for the EVM."
  },
  {
    "id": 30,
    "difficulty": "medium",
    "category": "indexing",
    "question": "How does 'The Graph' protocol assist a Web2 backend in querying blockchain data efficiently?",
    "options": [
      "By minifying Solidity code",
      "By replacing the blockchain with a relational database",
      "By providing private keys to the frontend",
      "By acting as a caching layer that indexes blockchain events into a queryable GraphQL schema"
    ],
    "answer": 3,
    "explanation": "Querying a node directly for historical data is slow. Subgraphs (The Graph) index events for fast, Web2-style querying.",
    "hint": "Indexing and GraphQL."
  },
  {
    "id": 31,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Total Value Locked' (TVL) a metric of in DeFi architecture?",
    "options": [
      "The amount of code in the repo",
      "The total number of users",
      "The speed of the network",
      "The aggregate value of assets deposited in a protocol's smart contracts"
    ],
    "answer": 3,
    "explanation": "TVL measures liquidity and trust in a protocol, though it can be inflated by recursive lending.",
    "hint": "Liquidity metric."
  },
  {
    "id": 32,
    "difficulty": "medium",
    "category": "standards",
    "question": "In ERC-4337 (Account Abstraction), what is the role of the 'Bundler'?",
    "options": [
      "To collect UserOperations and package them into a single transaction for the entry point contract",
      "To compress images for IPFS",
      "To bridge assets to Layer 2",
      "To encrypt private keys"
    ],
    "answer": 0,
    "explanation": "Bundlers act as a new type of relayer that allows users to pay gas in tokens or have it sponsored by third parties.",
    "hint": "The 'Transaction Packager' of AA."
  },
  {
    "id": 33,
    "difficulty": "hard",
    "category": "blockchain_integration",
    "question": "What is 'Finality' in blockchain, and why is it critical for an exchange architect?",
    "options": [
      "When the user logs out",
      "When the gas price is zero",
      "When the code is finished",
      "The point at which a transaction cannot be altered, reversed, or canceled"
    ],
    "answer": 3,
    "explanation": "Exchanges must wait for a certain number of block confirmations to ensure a deposit isn't 'reorged' or reverted by the network.",
    "hint": "Irreversibility."
  },
  {
    "id": 34,
    "difficulty": "medium",
    "category": "cryptography",
    "question": "Which type of encryption is primarily used for 'Secret' transactions in privacy chains (e.g., Monero or Zcash)?",
    "options": [
      "Symmetric AES",
      "HTTPS",
      "Homomorphic Encryption / Zero-Knowledge Proofs",
      "Base64 Encoding"
    ],
    "answer": 2,
    "explanation": "Privacy-focused chains use ZKPs or Ring Signatures to prove a transaction is valid without revealing the sender, receiver, or amount.",
    "hint": "Proving without revealing."
  },
  {
    "id": 35,
    "difficulty": "hard",
    "category": "tooling",
    "question": "In the 'Foundry' toolkit, what is the primary language used for writing test scripts?",
    "options": [
      "Python",
      "Rust",
      "Solidity",
      "JavaScript"
    ],
    "answer": 2,
    "explanation": "Foundry allows developers to write tests in Solidity, eliminating the 'context switching' between Solidity and JS/Python.",
    "hint": "Same language as the contract."
  },
  {
    "id": 36,
    "difficulty": "medium",
    "category": "layer2",
    "question": "What is 'Arbitrum' in the context of Ethereum scaling?",
    "options": [
      "A decentralized file system",
      "An Optimistic Rollup that executes transactions off-chain and posts data to L1",
      "A browser extension",
      "A new L1 blockchain"
    ],
    "answer": 1,
    "explanation": "Arbitrum is a leading L2 that provides high throughput and low fees while inheriting the security of Ethereum.",
    "hint": "Optimistic Rollup."
  },
  {
    "id": 37,
    "difficulty": "hard",
    "category": "defi",
    "question": "What is an 'Impermanent Loss' (IL) in an Automated Market Maker (AMM) like Uniswap?",
    "options": [
      "When the gas fee is more than the profit",
      "When you lose your private key",
      "The value difference between holding tokens in a wallet vs providing them as liquidity in an AMM due to price volatility",
      "A permanent bug in the code"
    ],
    "answer": 2,
    "explanation": "IL occurs when the price of tokens in a pool changes relative to each other; it becomes 'permanent' only when you withdraw the liquidity.",
    "hint": "Liquidity provider risk."
  },
  {
    "id": 39,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is a 'Sycbil Attack' on a decentralized network?",
    "options": [
      "A physical attack on a data center",
      "When the price of a token drops to zero",
      "When a single entity creates multiple fake identities to gain disproportionate influence over the network",
      "A bug in the smart contract"
    ],
    "answer": 2,
    "explanation": "Proof of Work/Stake are designed to make Sybil attacks prohibitively expensive by requiring physical energy or capital.",
    "hint": "Identity-based attack."
  },
  {
    "id": 40,
    "difficulty": "hard",
    "category": "security_auditing",
    "question": "Which security tool is primarily used for 'Static Analysis' of Solidity code to find common vulnerabilities like uninitialized proxies?",
    "options": [
      "Echidna",
      "Foundry",
      "Slither",
      "Metamask"
    ],
    "answer": 2,
    "explanation": "Slither is an open-source static analysis framework from Trail of Bits that finds bugs in seconds without executing code.",
    "hint": "Static analysis tool."
  },
  {
    "id": 41,
    "difficulty": "medium",
    "category": "standards",
    "question": "What is 'ERC-20' standard best known for?",
    "options": [
      "Fungible Tokens (Tokens that are identical to each other)",
      "Non-Fungible Tokens",
      "Smart contract audits",
      "Multi-signature wallets"
    ],
    "answer": 0,
    "explanation": "ERC-20 is the most common standard for tokens like USDT, LINK, or SHIB, where each unit is worth exactly the same.",
    "hint": "Fungible token standard."
  },
  {
    "id": 42,
    "difficulty": "hard",
    "category": "zkp",
    "question": "What is a 'zkVM' (Zero-Knowledge Virtual Machine)?",
    "options": [
      "An execution environment that generates zero-knowledge proofs for arbitrary code execution",
      "A way to speed up the internet",
      "A virtual machine that runs on Java",
      "A machine that mines Bitcoin"
    ],
    "answer": 0,
    "explanation": "zkVMs allow you to write code in languages like Rust or C++ and prove that the result was computed correctly without showing the inputs.",
    "hint": "General purpose ZK execution."
  },
  {
    "id": 43,
    "difficulty": "medium",
    "category": "interoperability",
    "question": "What is the role of 'LayerZero' in the blockchain ecosystem?",
    "options": [
      "A decentralized storage solution",
      "A new type of mining hardware",
      "An omnichain interoperability protocol that allows for lightweight message passing across different chains",
      "To replace Ethereum"
    ],
    "answer": 2,
    "explanation": "LayerZero enables DApps to reside on multiple chains while communicating seamlessly through 'Ultra Light Nodes'.",
    "hint": "Messaging between chains."
  },
  {
    "id": 44,
    "difficulty": "hard",
    "category": "fintech",
    "question": "In decentralized finance, what is 'Slippage'?",
    "options": [
      "The difference between the expected price of a trade and the price at which the trade is actually executed",
      "When the gas price is too high",
      "A bug in the wallet",
      "When the app crashes"
    ],
    "answer": 0,
    "explanation": "Slippage occurs in low-liquidity pools or during high volatility; architects must build frontends that allow users to set 'Slippage Tolerance'.",
    "hint": "Price impact of a trade."
  },
  {
    "id": 45,
    "difficulty": "medium",
    "category": "tooling",
    "question": "What is 'Truffle' in the Web3 ecosystem?",
    "options": [
      "A consensus algorithm",
      "A legacy but historically significant development environment and testing framework for Ethereum",
      "A type of NFT",
      "A database"
    ],
    "answer": 1,
    "explanation": "While Foundry and Hardhat are now more popular, Truffle was the original standard for professional Solidity development.",
    "hint": "Legacy development framework."
  },
  {
    "id": 46,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the 'Halting Problem' and how does the EVM solve it?",
    "options": [
      "The inability to determine if a program will run forever; solved by implementing 'Gas' limits",
      "A network connectivity issue",
      "When a computer stops working",
      "When the blockchain reaches its max size"
    ],
    "answer": 0,
    "explanation": "Since Ethereum is Turing Complete, it would be vulnerable to infinite loops if it didn't charge for every computational step via Gas.",
    "hint": "Solved by charging for computation."
  },
  {
    "id": 47,
    "difficulty": "medium",
    "category": "layer2",
    "question": "What is 'Optimism' (OP Mainnet)?",
    "options": [
      "A new consensus mechanism",
      "A decentralized exchange",
      "A positive mindset",
      "An Optimistic Rollup L2 for Ethereum"
    ],
    "answer": 3,
    "explanation": "Optimism is an L2 that uses the 'Optimism Stack' (OP Stack) which many other chains (like Base) are now built on.",
    "hint": "EVM-equivalent Rollup."
  },
  {
    "id": 48,
    "difficulty": "hard",
    "category": "security",
    "question": "What is a 'Sandwich Attack' in DeFi?",
    "options": [
      "A DDoS attack on a node",
      "A form of MEV (Maximal Extractable Value) where a bot places a buy order before and a sell order after a user's large trade to profit from the price move",
      "When a developer eats a sandwich",
      "When two validators collide"
    ],
    "answer": 1,
    "explanation": "Architects mitigate this using slippage limits and private RPCs (like Flashbots) that hide transactions from the public mempool.",
    "hint": "Front-running + Back-running."
  },
  {
    "id": 49,
    "difficulty": "medium",
    "category": "integration",
    "question": "What is 'Ethers.js' primarily used for?",
    "options": [
      "To write smart contracts",
      "To interact with the Ethereum blockchain and its ecosystem from a JavaScript environment",
      "To host decentralized websites",
      "To mine Ethereum"
    ],
    "answer": 1,
    "explanation": "Ethers.js is the most popular library for building frontends and backend scripts that talk to smart contracts.",
    "hint": "JavaScript library for Web3."
  },
  {
    "id": 50,
    "difficulty": "hard",
    "category": "compliance",
    "question": "How do 'Zero-Knowledge Proofs' enable Core Banking systems to meet KYC requirements while maintaining user privacy?",
    "options": [
      "By encrypting the entire blockchain",
      "By allowing a user to prove they meet eligibility (e.g., age, location) without revealing the raw identity data",
      "By storing the ID on IPFS",
      "By removing the need for KYC entirely"
    ],
    "answer": 1,
    "explanation": "ZKP allows for 'Privacy-Preserving Compliance', where the proof of validity is shared, but the sensitive PII (Personally Identifiable Information) stays off-chain.",
    "hint": "Prove validity without revealing data."
  },
  {
    "id": 51,
    "difficulty": "hard",
    "category": "evm_internals",
    "question": "In the Ethereum Virtual Machine (EVM), what is the primary difference between 'Memory' and 'Storage'?",
    "options": [
      "Memory is off-chain; Storage is on-chain",
      "Memory is for strings; Storage is for integers",
      "Memory is a temporary, cheap volatile area; Storage is persistent and expensive",
      "There is no difference"
    ],
    "answer": 2,
    "explanation": "Storage is written to the global state and is expensive; Memory is cleared after execution.",
    "hint": "Volatility vs. Persistence."
  },
  {
    "id": 52,
    "difficulty": "hard",
    "category": "architecture_patterns",
    "question": "Why would a Technical Architect implement a 'Proxy Pattern' (ERC-1967)?",
    "options": [
      "To run faster",
      "To allow for logic upgrades while maintaining a constant address and state",
      "To pay gas fees",
      "To encrypt code"
    ],
    "answer": 1,
    "explanation": "Proxies allow updating the logic contract while the user-facing address stays the same.",
    "hint": "Upgradability."
  },
  {
    "id": 53,
    "difficulty": "medium",
    "category": "solidity_patterns",
    "question": "What is the purpose of 'receive()' and 'fallback()' functions?",
    "options": [
      "To handle errors",
      "To encrypt data",
      "To bridge tokens",
      "To enable receiving Ether without data or with unrecognized calls"
    ],
    "answer": 3,
    "explanation": "Special functions to handle incoming Ether transfers.",
    "hint": "Ether handling."
  },
  {
    "id": 54,
    "difficulty": "hard",
    "category": "security",
    "question": "What is an 'Oracle Manipulation' attack?",
    "options": [
      "Hacking nodes",
      "Artificially inflating price on a low-liquidity DEX to exploit a protocol",
      "Deleting contracts",
      "Intercepting traffic"
    ],
    "answer": 1,
    "explanation": "Manipulating the price feed to borrow more than collateral allows.",
    "hint": "Flash loans + Low liquidity."
  },
  {
    "id": 55,
    "difficulty": "medium",
    "category": "fintech",
    "question": "How does 'Stablecoin Architecture' (USDC) differ from 'Algorithmic Stablecoins'?",
    "options": [
      "USDC is backed by off-chain fiat; Algorithmic ones rely on on-chain incentives",
      "No difference",
      "Decentralization",
      "Programming language"
    ],
    "answer": 0,
    "explanation": "Fiat-backed vs. Code-incentivized stability.",
    "hint": "Collateral source."
  },
  {
    "id": 56,
    "difficulty": "hard",
    "category": "evm_internals",
    "question": "What is 'Calldata' in a transaction?",
    "options": [
      "Validator phone numbers",
      "Contract logs",
      "A wallet type",
      "Read-only, non-persistent area for transaction arguments; cheapest way to post data to L1"
    ],
    "answer": 3,
    "explanation": "Cheapest storage location used heavily by Rollups for data availability.",
    "hint": "Immutable input data."
  },
  {
    "id": 57,
    "difficulty": "hard",
    "category": "defi_logic",
    "question": "In Uniswap v3 'Concentrated Liquidity', what happens if price moves outside the LP's range?",
    "options": [
      "Automatic sale",
      "Gas price increases",
      "Tokens are burned",
      "Position becomes 100% one asset and stops earning fees"
    ],
    "answer": 3,
    "explanation": "The liquidity is inactive until price returns to the specified range.",
    "hint": "Range-bound activity."
  },
  {
    "id": 58,
    "difficulty": "medium",
    "category": "tooling",
    "question": "What is the advantage of 'Hardhat Ignition'?",
    "options": [
      "Mines tokens",
      "Replaces frontend",
      "Uses Python",
      "Declarative deployment with state tracking and automatic retries"
    ],
    "answer": 3,
    "explanation": "It manages the lifecycle of complex deployments to ensure reliability.",
    "hint": "Deployment orchestration."
  },
  {
    "id": 59,
    "difficulty": "hard",
    "category": "security",
    "question": "What is 'Front-running'?",
    "options": [
      "Submitting a transaction with higher gas after seeing a pending one to get processed first",
      "Hacking a browser",
      "Running faster",
      "UI updates"
    ],
    "answer": 0,
    "explanation": "Exploiting knowledge of pending transactions in the mempool.",
    "hint": "Priority gas auction."
  },
  {
    "id": 60,
    "difficulty": "hard",
    "category": "architecture_patterns",
    "question": "What is the 'Diamond Pattern' (ERC-2535)?",
    "options": [
      "Consensus",
      "Encryption",
      "A multi-facet proxy that bypasses the 24KB contract size limit",
      "NFT metadata"
    ],
    "answer": 2,
    "explanation": "Allows modularizing logic across multiple implementation contracts.",
    "hint": "Modular proxies."
  },
  {
    "id": 61,
    "difficulty": "hard",
    "category": "evm_internals",
    "question": "How do 'Immutable' variables differ from 'Constant' in Solidity?",
    "options": [
      "Immutables are in storage",
      "Constants are fixed at compile-time; Immutables are set at deployment (constructor)",
      "No difference",
      "Constants use more gas"
    ],
    "answer": 1,
    "explanation": "Immutable variables are hardcoded into runtime bytecode but can be initialized dynamically once.",
    "hint": "Constructor assignment."
  },
  {
    "id": 62,
    "difficulty": "hard",
    "category": "evm_internals",
    "question": "What is the primary risk of using 'delegatecall' in a smart contract?",
    "options": [
      "Low performance",
      "High gas cost",
      "The calling contract executes the target code in its own state context, risking state corruption if layouts don't match",
      "Incompatibility with L2"
    ],
    "answer": 2,
    "explanation": "Delegatecall uses the storage of the caller; if implementation storage layout differs, it overwrites critical variables.",
    "hint": "State context."
  },
  {
    "id": 63,
    "difficulty": "hard",
    "category": "evm_internals",
    "question": "How are Solidity storage slots (32 bytes) packed for variables smaller than 32 bytes?",
    "options": [
      "They are never packed",
      "Multiple variables are packed into the same slot to save gas, provided they are declared consecutively",
      "They are stored in memory instead",
      "They are automatically padded to 32 bytes"
    ],
    "answer": 1,
    "explanation": "Storage packing reduces SSTORE operations, which are expensive.",
    "hint": "Tight variable packing."
  },
  {
    "id": 64,
    "difficulty": "hard",
    "category": "evm_internals",
    "question": "What are 'Precompiled Contracts' in Ethereum?",
    "options": [
      "Contracts written in C++",
      "Layer 2 contracts",
      "Special addresses that perform complex cryptographic operations at a fixed, lower gas cost",
      "Contracts compiled before deployment"
    ],
    "answer": 2,
    "explanation": "Used for operations like SHA256 or Elliptic Curve Pairing that are too expensive for the EVM interpreter.",
    "hint": "Fixed-address native logic."
  },
  {
    "id": 65,
    "difficulty": "hard",
    "category": "architecture_patterns",
    "question": "In a 'UUPS' proxy, where does the upgrade logic reside?",
    "options": [
      "In ProxyAdmin",
      "In the wallet",
      "In the Proxy",
      "In the Implementation (Logic) contract"
    ],
    "answer": 3,
    "explanation": "The upgrade function is in the implementation, making the proxy itself more gas-efficient.",
    "hint": "Logic-side upgrades."
  },
  {
    "id": 66,
    "difficulty": "hard",
    "category": "security",
    "question": "What does the 'Checks-Effects-Interactions' pattern prevent?",
    "options": [
      "Front-running",
      "Reentrancy attacks",
      "Integer overflow",
      "Oracle manipulation"
    ],
    "answer": 1,
    "explanation": "Ensures state is updated before any external calls are made.",
    "hint": "Preventing loop-back calls."
  },
  {
    "id": 67,
    "difficulty": "medium",
    "category": "solidity",
    "question": "Since Solidity 0.8.0, what happens when an integer overflow occurs?",
    "options": [
      "The value wraps around silently",
      "The contract self-destructs",
      "The transaction reverts automatically",
      "The gas price increases"
    ],
    "answer": 2,
    "explanation": "Arithmetic checks are now built-in, removing the need for SafeMath in most cases.",
    "hint": "Automatic revert on overflow."
  },
  {
    "id": 68,
    "difficulty": "medium",
    "category": "security",
    "question": "What is the architectural risk of 'Ownable' vs. 'AccessControl' (RBAC)?",
    "options": [
      "Ownable is faster",
      "AccessControl uses more storage",
      "Ownable is a single point of failure; AccessControl allows fine-grained role management",
      "Ownable cannot be transferred"
    ],
    "answer": 2,
    "explanation": "Role-Based Access Control (RBAC) is more secure for complex systems than a single 'Owner'.",
    "hint": "Single vs. Multiple administrators."
  },
  {
    "id": 69,
    "difficulty": "hard",
    "category": "security",
    "question": "Why is 'Pull-over-Push' recommended for distributing rewards?",
    "options": [
      "It costs the protocol more gas",
      "It is faster",
      "It prevents a malicious recipient from reverting the entire batch transaction (DoS)",
      "It hides the rewards"
    ],
    "answer": 2,
    "explanation": "Recipients must 'pull' their funds, ensuring one failure doesn't block everyone else.",
    "hint": "Individual claim vs. Batch transfer."
  },
  {
    "id": 70,
    "difficulty": "hard",
    "category": "security",
    "question": "What is 'Signature Malleability' in ECDSA?",
    "options": [
      "Speeding up signatures",
      "Altering a valid signature to create a second valid one for the same data",
      "Encrypting transactions",
      "Changing the key"
    ],
    "answer": 1,
    "explanation": "An attacker can flip the 's' value to create a valid but different signature.",
    "hint": "Duplicate signature exploit."
  },
  {
    "id": 71,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is the function of a 'Guardian' in a Smart Contract Wallet (like Safe)?",
    "options": [
      "To assist in account recovery or block suspicious transactions without holding funds",
      "To encrypt keys",
      "To pay gas",
      "To mine blocks"
    ],
    "answer": 0,
    "explanation": "Guardians provide security for Social Recovery mechanisms.",
    "hint": "Recovery assistants."
  },
  {
    "id": 72,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is an EIP-1167 'Minimal Proxy'?",
    "options": [
      "A proxy with no code",
      "A proxy for L2",
      "A wallet",
      "A standardized, extremely cheap bytecode for deploying many identical contract clones"
    ],
    "answer": 3,
    "explanation": "It clones logic with minimal gas cost by using thin bytecode that delegates all calls.",
    "hint": "Cheap cloning."
  },
  {
    "id": 73,
    "difficulty": "hard",
    "category": "security",
    "question": "What is a 'Gas Griefing' attack?",
    "options": [
      "Stealing gas",
      "Bypassing gas fees",
      "An attacker sends enough gas to start a transaction but ensures the sub-call fails due to insufficient remaining gas",
      "Making gas expensive"
    ],
    "answer": 2,
    "explanation": "Intentionally causing a target contract to fail or waste resources.",
    "hint": "Resource exhaustion."
  },
  {
    "id": 74,
    "difficulty": "hard",
    "category": "evm_internals",
    "question": "What does the EVM opcode 'SSTORE' do?",
    "options": [
      "Stops execution",
      "Stores data in memory",
      "Sends Ether",
      "Writes a 32-byte word to persistent storage"
    ],
    "answer": 3,
    "explanation": "It is the most expensive opcode as it modifies the permanent state.",
    "hint": "State write."
  },
  {
    "id": 75,
    "difficulty": "hard",
    "category": "security",
    "question": "Why is 'EXTCODEHASH' used for contract verification?",
    "options": [
      "To check the address",
      "To efficiently check if a contract's code matches a known logic without loading the full code",
      "To encrypt code",
      "To delete code"
    ],
    "answer": 1,
    "explanation": "It provides the hash of the bytecode, saving gas when comparing contracts.",
    "hint": "Bytecode fingerprinting."
  },
  {
    "id": 76,
    "difficulty": "medium",
    "category": "tokenomics",
    "question": "What is 'Vesting'?",
    "options": [
      "Immediate distribution",
      "Releasing tokens over time to align long-term incentives",
      "DAO clothing",
      "Gas fee type"
    ],
    "answer": 1,
    "explanation": "Prevents token dumping by locked releases.",
    "hint": "Time-locked release."
  },
  {
    "id": 77,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Quadratic Voting'?",
    "options": [
      "1 person 1 vote",
      "Banning whales",
      "Random voting",
      "Vote cost is the square of the votes (1=1, 2=4, 3=9), empowering the majority"
    ],
    "answer": 3,
    "explanation": "Reduces whale dominance by making additional votes exponentially expensive.",
    "hint": "Cost = Votes squared."
  },
  {
    "id": 78,
    "difficulty": "medium",
    "category": "layer2",
    "question": "What is an L2 'Sequencer'?",
    "options": [
      "User wallet",
      "Hardware key",
      "Music tool",
      "Node that orders and bundles transactions before submitting to L1"
    ],
    "answer": 3,
    "explanation": "Responsible for transaction ordering on rollups.",
    "hint": "Ordering node."
  },
  {
    "id": 79,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is 'Slippage'?",
    "options": [
      "Transfer time",
      "Loss in value during swap due to liquidity or price changes",
      "UI bug",
      "Bridge break"
    ],
    "answer": 1,
    "explanation": "Price difference between execution and request.",
    "hint": "Price impact."
  },
  {
    "id": 80,
    "difficulty": "hard",
    "category": "security",
    "question": "Why is 'SELFDESTRUCT' being deprecated?",
    "options": [
      "Slows mining",
      "To simplify state management and prevent complex security risks",
      "Deletes blockchain",
      "Users hate it"
    ],
    "answer": 1,
    "explanation": "It causes state-clearing complexity; modern EVM limits it via EIP-6780.",
    "hint": "State simplification."
  },
  {
    "id": 81,
    "difficulty": "medium",
    "category": "standards",
    "question": "What is 'ERC-2612' (Permit)?",
    "options": [
      "On-chain license",
      "Privacy",
      "New NFT",
      "Gasless token approval via signature"
    ],
    "answer": 3,
    "explanation": "Allows users to approve spending with a signature instead of a transaction.",
    "hint": "Signature approval."
  },
  {
    "id": 82,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Data Availability' (DA)?",
    "options": [
      "Guarantee that transaction data is accessible to reconstruct state",
      "User count",
      "Internet speed",
      "Storage size"
    ],
    "answer": 0,
    "explanation": "Ensures everyone can verify the current state of an L2.",
    "hint": "State reconstruction."
  },
  {
    "id": 83,
    "difficulty": "medium",
    "category": "fintech",
    "question": "What is a 'CBDC'?",
    "options": [
      "Digital fiat currency controlled by a central bank",
      "Bank account",
      "Bitcoin",
      "NFT dollar"
    ],
    "answer": 0,
    "explanation": "Centralized nation-state digital currency.",
    "hint": "State digital fiat."
  },
  {
    "id": 84,
    "difficulty": "hard",
    "category": "zkp",
    "question": "What is a 'Trusted Setup'?",
    "options": [
      "Encryption",
      "Security firm",
      "Server setup",
      "One-time ceremony to generate proof parameters where secrets must be destroyed"
    ],
    "answer": 3,
    "explanation": "Initial parameter generation for certain ZK systems.",
    "hint": "Toxic waste ceremony."
  },
  {
    "id": 85,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'DPoS'?",
    "options": [
      "Consensus where holders vote for delegates to validate blocks",
      "Gifting tokens",
      "Proxy server",
      "Mining"
    ],
    "answer": 0,
    "explanation": "Delegated Proof of Stake; efficient but more centralized.",
    "hint": "Elected validators."
  },
  {
    "id": 86,
    "difficulty": "hard",
    "category": "architecture",
    "question": "When should an architect recommend 'Proof of Authority' (PoA)?",
    "options": [
      "Private/Consortium chains needing high throughput and known identities",
      "Decentralization",
      "High energy",
      "Public chains"
    ],
    "answer": 0,
    "explanation": "Best for trusted entities needing performance.",
    "hint": "Identity consensus."
  },
  {
    "id": 87,
    "difficulty": "hard",
    "category": "consensus",
    "question": "What is 'Social Slashing' in PoS?",
    "options": [
      "Manual network intervention to slash a validator who performs a malicious but valid-looking action",
      "Automated slashing",
      "Hacking",
      "Banning on Twitter"
    ],
    "answer": 0,
    "explanation": "The ultimate community-driven security mechanism.",
    "hint": "Human-driven security."
  },
  {
    "id": 88,
    "difficulty": "medium",
    "category": "evm",
    "question": "In EIP-1559, what happens to the 'Base Fee'?",
    "options": [
      "Sent to L2",
      "Paid to miner",
      "Burned (removed from supply)",
      "Saved in DAO"
    ],
    "answer": 2,
    "explanation": "Base fee is burned; only the tip goes to the validator.",
    "hint": "Fee burning."
  },
  {
    "id": 89,
    "difficulty": "hard",
    "category": "defi",
    "question": "What causes 'Impermanent Loss' for an LP?",
    "options": [
      "Token hacking",
      "Protocol fees",
      "High gas",
      "Price divergence between the two assets in a pool compared to holding them"
    ],
    "answer": 3,
    "explanation": "The math of AMMs favors holding when prices move drastically.",
    "hint": "Price divergence."
  },
  {
    "id": 90,
    "difficulty": "hard",
    "category": "integration",
    "question": "Difference between 'Webhook' and 'Event Subscription'?",
    "options": [
      "No difference",
      "Java vs Python",
      "On-chain vs Off-chain",
      "Webhooks are push (notifies you); Subscriptions are pull/sockets (you listen)"
    ],
    "answer": 3,
    "explanation": "Push notifications vs. persistent socket listening.",
    "hint": "Push vs. Listener."
  },
  {
    "id": 91,
    "difficulty": "hard",
    "category": "defi",
    "question": "What is the architectural requirement for a 'Flash Loan' to be successful?",
    "options": [
      "KYC",
      "Collateral",
      "Repayment within the same atomic transaction",
      "24-hour wait"
    ],
    "answer": 2,
    "explanation": "If not repaid in the same block, the transaction reverts.",
    "hint": "Atomic borrowing."
  },
  {
    "id": 92,
    "difficulty": "medium",
    "category": "governance",
    "question": "What is 'Optimistic Governance'?",
    "options": [
      "DAO for charities",
      "Always voting yes",
      "Proposals pass automatically unless someone actively vetoes/challenges within a window",
      "Voting on L2"
    ],
    "answer": 2,
    "explanation": "Reduces voting fatigue by assuming consensus.",
    "hint": "Veto-based."
  },
  {
    "id": 93,
    "difficulty": "hard",
    "category": "layer2",
    "question": "Why is the withdrawal period for Optimistic Rollups usually 7 days?",
    "options": [
      "Manual review",
      "Slow internet",
      "To allow enough time for observers to submit 'Fraud Proofs' if the sequencer is malicious",
      "Banking regulations"
    ],
    "answer": 2,
    "explanation": "The challenge window is critical for security.",
    "hint": "Fraud proof window."
  },
  {
    "id": 94,
    "difficulty": "hard",
    "category": "layer2",
    "question": "What is 'Validity Proof' in ZK-Rollups?",
    "options": [
      "A user's ID",
      "A bank statement",
      "A cryptographic proof that the batch of transactions is mathematically correct before being posted",
      "A fraud report"
    ],
    "answer": 2,
    "explanation": "Ensures correctness immediately on L1.",
    "hint": "Zero-knowledge verification."
  },
  {
    "id": 95,
    "difficulty": "hard",
    "category": "security",
    "question": "What is a 'Time-lock' in governance?",
    "options": [
      "Speed voting",
      "A clock",
      "A delay between approval and execution to let users exit if they disagree",
      "Locking users"
    ],
    "answer": 2,
    "explanation": "Prevents immediate malicious protocol changes.",
    "hint": "Safety delay."
  },
  {
    "id": 96,
    "difficulty": "medium",
    "category": "governance",
    "question": "What is a 'Rage Quit' mechanism in a DAO?",
    "options": [
      "Closing the DAO",
      "Allowing a member to withdraw their share of assets before a proposal they hate is executed",
      "Banning a user",
      "Deleting the app"
    ],
    "answer": 1,
    "explanation": "Protects minority holders from majority abuse.",
    "hint": "Asset withdrawal on exit."
  },
  {
    "id": 97,
    "difficulty": "medium",
    "category": "standards",
    "question": "Why use 'ERC-1155' over 'ERC-721'?",
    "options": [
      "ERC-1155 is only for music",
      "ERC-1155 supports both fungible and non-fungible tokens in a single contract, saving gas",
      "ERC-1155 is slower",
      "ERC-721 is obsolete"
    ],
    "answer": 1,
    "explanation": "Multi-token standard for efficiency.",
    "hint": "Batch transfers."
  },
  {
    "id": 98,
    "difficulty": "hard",
    "category": "evm",
    "question": "What was the purpose of 'Gas Tokens' (like GST2)?",
    "options": [
      "Paying for gas",
      "L2 tokens",
      "Tokenizing storage refunds to use when gas prices were high (now deprecated)",
      "Mining rewards"
    ],
    "answer": 2,
    "explanation": "Exploited storage clearing refunds to hedge gas costs.",
    "hint": "Refund arbitrage."
  },
  {
    "id": 99,
    "difficulty": "hard",
    "category": "consensus",
    "question": "What is 'Finality' in a blockchain?",
    "options": [
      "Mining the first block",
      "The end of the chain",
      "Closing a wallet",
      "The point at which a transaction is considered irreversible"
    ],
    "answer": 3,
    "explanation": "Crucial for exchanges and bridges to confirm swaps.",
    "hint": "Irreversibility."
  },
  {
    "id": 100,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Modular Blockchain' theory?",
    "options": [
      "Modular math",
      "Wallets",
      "LEGO blocks",
      "Separating Execution, Settlement, Consensus, and Data Availability into layers"
    ],
    "answer": 3,
    "explanation": "Unbundling tasks to different specialized chains for scale.",
    "hint": "Unbundled stack."
  },
  {
    "id": 101,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "Advantage of 'BLS Signatures'?",
    "options": [
      "10x faster",
      "No public key",
      "Signature Aggregation (combining thousands into one)",
      "Quantum-proof"
    ],
    "answer": 2,
    "explanation": "Reduces overhead for validator sets.",
    "hint": "Aggregation."
  },
  {
    "id": 102,
    "difficulty": "hard",
    "category": "zkp",
    "question": "Trade-off of 'zk-STARK' vs 'zk-SNARK'?",
    "options": [
      "SNARKs are for public",
      "STARKs have no trusted setup and are quantum-resistant but have larger proof sizes",
      "SNARKs are faster",
      "STARKs only for Bitcoin"
    ],
    "answer": 1,
    "explanation": "Transparent vs. Succinct.",
    "hint": "No trusted setup."
  },
  {
    "id": 103,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is 'Pedersen Commitment'?",
    "options": [
      "Multi-sig",
      "IoT protocol",
      "Account lock",
      "Commit to a value without revealing it, with homomorphic properties"
    ],
    "answer": 3,
    "explanation": "Used in privacy coins to hide amounts while allowing math.",
    "hint": "Hiding while calculating."
  },
  {
    "id": 104,
    "difficulty": "medium",
    "category": "security",
    "question": "What is a 'Pre-image Attack'?",
    "options": [
      "DDoS",
      "Image change",
      "Decryption",
      "Finding the input that produces a specific hash"
    ],
    "answer": 3,
    "explanation": "Reversing the hashing process.",
    "hint": "One-way reversal."
  },
  {
    "id": 105,
    "difficulty": "hard",
    "category": "zkp",
    "question": "What is a 'Circuit' in ZK?",
    "options": [
      "Validator key",
      "Hardware",
      "Network layer",
      "Mathematical constraints representing the logic to be proven"
    ],
    "answer": 3,
    "explanation": "Logic expressed as arithmetic constraints.",
    "hint": "Arithmetic logic."
  },
  {
    "id": 106,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is a 'Merkle Patricia Trie'?",
    "options": [
      "A bridge",
      "A list",
      "A data structure used by Ethereum to store the global state efficiently",
      "A wallet"
    ],
    "answer": 2,
    "explanation": "Combines Patricia Trees for prefixes and Merkle Trees for proofs.",
    "hint": "Ethereum state storage."
  },
  {
    "id": 107,
    "difficulty": "hard",
    "category": "scaling",
    "question": "What are 'Verkle Trees'?",
    "options": [
      "Mining pool",
      "A new tree structure using Vector Commitments to significantly reduce witness sizes for statelessness",
      "Green energy",
      "ZK-STARK type"
    ],
    "answer": 1,
    "explanation": "Essential for reducing node storage requirements.",
    "hint": "Statelessness."
  },
  {
    "id": 108,
    "difficulty": "hard",
    "category": "zkp",
    "question": "What are 'Recursive ZK-Proofs'?",
    "options": [
      "Proofs that verify other proofs, allowing massive scaling in one small proof",
      "Deleting proofs",
      "Looping code",
      "Private proofs"
    ],
    "answer": 0,
    "explanation": "Used by chains like Mina to maintain a constant-size blockchain.",
    "hint": "Proof of a proof."
  },
  {
    "id": 109,
    "difficulty": "hard",
    "category": "layer2",
    "question": "What is a 'KZG Commitment' (EIP-4844)?",
    "options": [
      "A bridge type",
      "Polynomial commitment used for Proto-Danksharding data verification",
      "Encryption",
      "Wallet key"
    ],
    "answer": 1,
    "explanation": "Used to verify 'blobs' of data in L2 rollups.",
    "hint": "Polynomial proof."
  },
  {
    "id": 110,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "Role of 'Salt' in CREATE2?",
    "options": [
      "Bytecode encryption",
      "DDoS prevention",
      "Flavor",
      "Value allowing deterministic address generation for counterfactual deployment"
    ],
    "answer": 3,
    "explanation": "Allows deploying a contract to a pre-known address.",
    "hint": "Deterministic address."
  },
  {
    "id": 111,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "Difference between 'secp256k1' and 'ed25519'?",
    "options": [
      "One is for NFTs",
      "No difference",
      "secp256k1 is used by Bitcoin/Ethereum; ed25519 is used by Solana/Near for faster signatures",
      "Speed only"
    ],
    "answer": 2,
    "explanation": "Different elliptic curves optimized for different properties.",
    "hint": "Curve types."
  },
  {
    "id": 112,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is 'Diffie-Hellman' used for in Web3 messaging?",
    "options": [
      "Secure key exchange over an insecure channel",
      "Hashing",
      "Mining",
      "Sending Ether"
    ],
    "answer": 0,
    "explanation": "Allows two parties to create a shared secret for encrypted chat.",
    "hint": "Key exchange."
  },
  {
    "id": 113,
    "difficulty": "hard",
    "category": "zkp",
    "question": "What is a 'Zero-Knowledge Range Proof'?",
    "options": [
      "IP range",
      "Proving a value lies within a range (e.g., balance > 0) without revealing the value",
      "Checking age",
      "Distance proof"
    ],
    "answer": 1,
    "explanation": "Used in private transactions to prove solvency.",
    "hint": "Proving range bounds."
  },
  {
    "id": 114,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is the 'Fiat-Shamir Heuristic'?",
    "options": [
      "Encryption",
      "A trading bot",
      "Transforming an interactive proof into a non-interactive one using hashing",
      "Mining algorithm"
    ],
    "answer": 2,
    "explanation": "Essential for making ZK-SNARKs work without back-and-forth communication.",
    "hint": "Interactive to Non-interactive."
  },
  {
    "id": 115,
    "difficulty": "hard",
    "category": "zkp",
    "question": "What is 'PLONK'?",
    "options": [
      "A universal ZK-SNARK system with a global trusted setup",
      "A wallet",
      "Noise",
      "A bridge"
    ],
    "answer": 0,
    "explanation": "One of the most popular ZK-SNARK architectures today.",
    "hint": "Universal SNARK."
  },
  {
    "id": 116,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is a 'Polynomial Commitment'?",
    "options": [
      "Math class",
      "A vote",
      "A cryptographic way to commit to a function and prove its value at a point",
      "A type of DAO"
    ],
    "answer": 2,
    "explanation": "Core building block of ZK-Rollups and Danksharding.",
    "hint": "Committing to a function."
  },
  {
    "id": 117,
    "difficulty": "medium",
    "category": "zkp",
    "question": "Difference between 'Interactive' and 'Non-interactive' proofs?",
    "options": [
      "Language",
      "Color",
      "Interactive requires back-and-forth; Non-interactive is a single message",
      "Speed"
    ],
    "answer": 2,
    "explanation": "Non-interactive proofs (like SNARKs) are better for blockchains.",
    "hint": "Communication steps."
  },
  {
    "id": 118,
    "difficulty": "hard",
    "category": "privacy",
    "question": "How does a 'Mixer' (like Tornado Cash) work?",
    "options": [
      "Breaking the on-chain link between source and destination using ZK-proofs and a pool",
      "Blending tokens",
      "Mining",
      "Hiding IP"
    ],
    "answer": 0,
    "explanation": "Provides anonymity by pooling and redistributing assets.",
    "hint": "Unlinking addresses."
  },
  {
    "id": 119,
    "difficulty": "hard",
    "category": "privacy",
    "question": "What are 'Stealth Addresses'?",
    "options": [
      "One-time addresses generated by a sender that only the recipient can access",
      "VPN for wallets",
      "Burner wallets",
      "Invisible wallets"
    ],
    "answer": 0,
    "explanation": "Allows receiving funds without revealing public address link.",
    "hint": "One-time receiver address."
  },
  {
    "id": 120,
    "difficulty": "medium",
    "category": "integration",
    "question": "Difference between 'Provider' and 'Signer'?",
    "options": [
      "Same thing",
      "Signer is database",
      "Provider is Python",
      "Provider is read-only; Signer has private keys for write operations"
    ],
    "answer": 3,
    "explanation": "Networking vs. Authentication roles.",
    "hint": "Read vs. Write access."
  },
  {
    "id": 121,
    "difficulty": "hard",
    "category": "security",
    "question": "What is 'MPC' (Multi-Party Computation) in custody?",
    "options": [
      "Generating a signature by computing pieces of a key without the full key ever existing in one place",
      "Many miners",
      "Multi-sig",
      "Encryption"
    ],
    "answer": 0,
    "explanation": "Higher security than multi-sig as there is no single key to steal.",
    "hint": "Keyless signatures."
  },
  {
    "id": 122,
    "difficulty": "hard",
    "category": "security",
    "question": "What is a 'Threshold Signature' (TSS)?",
    "options": [
      "A limit on signatures",
      "Multi-sig wallet",
      "L2 speed",
      "A subset of MPC where M-of-N parties are required to generate a valid signature"
    ],
    "answer": 3,
    "explanation": "A protocol to sign data without a single central authority.",
    "hint": "Subset of parties signing."
  },
  {
    "id": 123,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is 'Homomorphic Encryption'?",
    "options": [
      "Performing calculations on encrypted data without decrypting it first",
      "Mining code",
      "Same-key encryption",
      "Double encryption"
    ],
    "answer": 0,
    "explanation": "Enables private cloud computing on blockchain data.",
    "hint": "Computing on ciphertexts."
  },
  {
    "id": 124,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is 'Shor's Algorithm' risk?",
    "options": [
      "Mining speed",
      "Bug in Solidity",
      "DDoS",
      "Quantum computer's ability to break RSA and Elliptic Curve cryptography"
    ],
    "answer": 3,
    "explanation": "The theoretical threat to all current blockchain security.",
    "hint": "Quantum threat."
  },
  {
    "id": 125,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is 'Lattice-based Cryptography'?",
    "options": [
      "NFT standard",
      "A post-quantum cryptographic method resistant to quantum computer attacks",
      "Grid mining",
      "New ZK"
    ],
    "answer": 1,
    "explanation": "A primary candidate for future-proofing blockchain security.",
    "hint": "Quantum resistance."
  },
  {
    "id": 126,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is the 'IBC Protocol'?",
    "options": [
      "Mining protocol",
      "Trust-minimized communication standard for independent chains (Cosmos)",
      "Blockchain email",
      "Smart contract language"
    ],
    "answer": 1,
    "explanation": "Enables sovereign chains to talk without central bridges.",
    "hint": "Cosmos interchain."
  },
  {
    "id": 127,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is the 'Oracle Problem' in cross-chain?",
    "options": [
      "High gas",
      "Slow oracle",
      "Losing passwords",
      "Difficulty verifying the state of Chain A on Chain B without trust"
    ],
    "answer": 3,
    "explanation": "The fundamental challenge of trustless data transfer.",
    "hint": "External state verification."
  },
  {
    "id": 128,
    "difficulty": "medium",
    "category": "layer2",
    "question": "Significance of 'Base' using 'OP Stack'?",
    "options": [
      "Solana compatibility",
      "It joins the 'Superchain' ecosystem with shared code and future interoperability",
      "SQL database",
      "Java compatibility"
    ],
    "answer": 1,
    "explanation": "Standardized rollup stacks allow for shared security and liquidity.",
    "hint": "Superchain."
  },
  {
    "id": 129,
    "difficulty": "hard",
    "category": "mev",
    "question": "Why run 'MEV-Boost'?",
    "options": [
      "DDoS prevention",
      "To outsource block construction to specialized builders for higher rewards",
      "Key encryption",
      "Internet speed"
    ],
    "answer": 1,
    "explanation": "Allows validators to profit from complex transaction ordering.",
    "hint": "Outsourced building."
  },
  {
    "id": 130,
    "difficulty": "hard",
    "category": "mev",
    "question": "Purpose of 'Flashbots' Private RPC?",
    "options": [
      "Bypassing public mempool to prevent sandwich attacks",
      "IP hiding",
      "No gas fees",
      "Mining tokens"
    ],
    "answer": 0,
    "explanation": "Sends transactions directly to validators.",
    "hint": "Mempool privacy."
  },
  {
    "id": 131,
    "difficulty": "medium",
    "category": "architecture",
    "question": "Goal of 'Micro-Rollup' (AppChain)?",
    "options": [
      "Few users",
      "Dedicated rollup for a single high-frequency application",
      "Large chain",
      "Static files"
    ],
    "answer": 1,
    "explanation": "Customizes performance for one specific use case.",
    "hint": "App-specific scaling."
  },
  {
    "id": 132,
    "difficulty": "hard",
    "category": "security",
    "question": "What is an 'Eclipse Attack'?",
    "options": [
      "Moon event",
      "Power outage",
      "Isolating a node from the network by surrounding it with malicious peers",
      "Browser bug"
    ],
    "answer": 2,
    "explanation": "Feeding a node fake data by controlling its connections.",
    "hint": "Node isolation."
  },
  {
    "id": 133,
    "difficulty": "hard",
    "category": "tokenomics",
    "question": "What is 'veTokenomics'?",
    "options": [
      "VR tokens",
      "Fiat sales",
      "Locking tokens for 'voting power' and revenue share",
      "Speed"
    ],
    "answer": 2,
    "explanation": "Used by Curve to ensure long-term holder loyalty.",
    "hint": "Locked for power."
  },
  {
    "id": 134,
    "difficulty": "medium",
    "category": "indexing",
    "question": "Purpose of 'subgraph.yaml'?",
    "options": [
      "User list",
      "Login credentials",
      "Contract code",
      "Defines contracts, events, and mappings for indexing data"
    ],
    "answer": 3,
    "explanation": "Configuration for The Graph indexers.",
    "hint": "Manifest file."
  },
  {
    "id": 135,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'State Bloat'?",
    "options": [
      "Increasing size of the global state making it hard to run full nodes",
      "Too many users",
      "Compiler bug",
      "High price"
    ],
    "answer": 0,
    "explanation": "Forces centralization as only large servers can store the history.",
    "hint": "Growing database size."
  },
  {
    "id": 136,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "Difference between 'Canonical' and 'External' bridges?",
    "options": [
      "Color",
      "No difference",
      "Speed",
      "Canonical bridges are built by the L2 team; External bridges are third-party apps"
    ],
    "answer": 3,
    "explanation": "Canonical bridges usually share the native rollup security.",
    "hint": "Official vs. 3rd-party."
  },
  {
    "id": 137,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "How does 'LayerZero' achieve cross-chain communication?",
    "options": [
      "Emails",
      "A central server",
      "Mining",
      "Using an Oracle and a Relayer to verify headers and proofs across chains"
    ],
    "answer": 3,
    "explanation": "An omnichain interoperability protocol.",
    "hint": "Oracle + Relayer."
  },
  {
    "id": 138,
    "difficulty": "hard",
    "category": "security",
    "question": "Risk of 'Wrapped Assets' (e.g., bridged ETH)?",
    "options": [
      "Transaction fee",
      "The asset on the destination chain is only valuable if the bridge's vault on the source chain remains secure",
      "Too heavy",
      "Low price"
    ],
    "answer": 1,
    "explanation": "If bridge is hacked, the 'wrapped' token becomes worthless.",
    "hint": "Vault security."
  },
  {
    "id": 139,
    "difficulty": "hard",
    "category": "defi",
    "question": "What is 'Liquid Staking' (LSD)?",
    "options": [
      "Staking water",
      "Mining",
      "Bridge",
      "Receiving a tradable token (e.g., stETH) in exchange for staked assets"
    ],
    "answer": 3,
    "explanation": "Allows users to earn staking rewards while maintaining liquidity.",
    "hint": "Staked liquidity."
  },
  {
    "id": 140,
    "difficulty": "hard",
    "category": "security_auditing",
    "question": "What is 'Mythril'?",
    "options": [
      "Language",
      "Symbolic execution tool for finding EVM vulnerabilities",
      "Wallet",
      "Metal"
    ],
    "answer": 1,
    "explanation": "Analyzes bytecode to detect security holes.",
    "hint": "Symbolic execution."
  },
  {
    "id": 141,
    "difficulty": "hard",
    "category": "mev",
    "question": "Role of an MEV 'Searcher'?",
    "options": [
      "Searching Google",
      "Mining",
      "Running bots to find profitable opportunities (like arbitrage) and creating transaction bundles",
      "Building PCs"
    ],
    "answer": 2,
    "explanation": "They find the profit; Builders put them in blocks.",
    "hint": "Opportunity bots."
  },
  {
    "id": 142,
    "difficulty": "hard",
    "category": "mev",
    "question": "What are 'Inclusion Lists' intended to solve?",
    "options": [
      "Preventing builders from censoring specific transactions in a block",
      "Speed",
      "Gas prices",
      "Spam"
    ],
    "answer": 0,
    "explanation": "Part of the anti-censorship roadmap in Ethereum.",
    "hint": "Anti-censorship."
  },
  {
    "id": 143,
    "difficulty": "hard",
    "category": "consensus",
    "question": "What is 'Proposer-Builder Separation' (PBS)?",
    "options": [
      "Building vs Proposing",
      "Dividing the task of selecting transactions and creating blocks into two distinct roles to reduce centralization",
      "L1 vs L2",
      "Mining vs Staking"
    ],
    "answer": 1,
    "explanation": "A structural change to prevent validators from being the only ones who can extract MEV.",
    "hint": "Role separation."
  },
  {
    "id": 144,
    "difficulty": "medium",
    "category": "integration",
    "question": "Benefit of 'Flashbots Protect' for retail users?",
    "options": [
      "Reverts transactions if they would fail, saving gas and preventing sandwich attacks",
      "More tokens",
      "Free transactions",
      "Faster speed"
    ],
    "answer": 0,
    "explanation": "A user-friendly way to access private mempools.",
    "hint": "Safety for retail."
  },
  {
    "id": 145,
    "difficulty": "hard",
    "category": "security_auditing",
    "question": "What does 'Formal Verification' prove?",
    "options": [
      "UI works",
      "Logic adheres to mathematical specifications under ALL inputs",
      "Low gas",
      "Code runs"
    ],
    "answer": 1,
    "explanation": "Uses solvers for total logical certainty.",
    "hint": "Math certainty."
  },
  {
    "id": 146,
    "difficulty": "hard",
    "category": "security",
    "question": "Difference between 'Manual Review' and 'Automated Scanning' in audits?",
    "options": [
      "Speed only",
      "No difference",
      "Manual review finds business logic flaws; Automated tools find common coding errors and patterns",
      "Manual is cheaper"
    ],
    "answer": 2,
    "explanation": "You need both for a high-security protocol.",
    "hint": "Logic vs. Pattern."
  },
  {
    "id": 147,
    "difficulty": "hard",
    "category": "tooling",
    "question": "What is 'Slither' used for?",
    "options": [
      "Static analysis of Solidity code to detect security vulnerabilities and optimization opportunities",
      "Wallets",
      "Game development",
      "Mining"
    ],
    "answer": 0,
    "explanation": "The industry standard for static analysis.",
    "hint": "Static analysis."
  },
  {
    "id": 148,
    "difficulty": "hard",
    "category": "security",
    "question": "What is 'Fuzzing' (e.g., Echidna)?",
    "options": [
      "Testing a contract by feeding it millions of random or semi-random inputs to find edge-case crashes",
      "Cleaning code",
      "Hiding code",
      "Encryption"
    ],
    "answer": 0,
    "explanation": "Uncovers bugs that unit tests miss.",
    "hint": "Random stress testing."
  },
  {
    "id": 149,
    "difficulty": "medium",
    "category": "security",
    "question": "Purpose of 'Bug Bounties' (Immunefi) post-deployment?",
    "options": [
      "To market the project",
      "To buy tokens",
      "To pay developers",
      "To incentivize white-hat hackers to find and report vulnerabilities in production rather than exploiting them"
    ],
    "answer": 3,
    "explanation": "Critical for ongoing security maintenance.",
    "hint": "White-hat incentives."
  },
  {
    "id": 150,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is an 'Atomic Swap'?",
    "options": [
      "24-hour swap",
      "Nuclear energy swap",
      "Trustless P2P exchange across chains without intermediaries",
      "ERC-20 only"
    ],
    "answer": 2,
    "explanation": "Uses Hashed Timelock Contracts for safe cross-chain trading.",
    "hint": "P2P cross-chain."
  },
  {
    "id": 151,
    "difficulty": "hard",
    "category": "alt_vm",
    "question": "What is the primary architectural difference between Ethereum's 'Account Model' and Solana's 'Account Model'?",
    "options": [
      "In Solana, smart contract code (Programs) and data (Accounts) are stored in separate accounts; in Ethereum, they are combined",
      "Solana does not use addresses",
      "Ethereum accounts cannot hold metadata",
      "Solana uses UTXO like Bitcoin"
    ],
    "answer": 0,
    "explanation": "Solana's separation of logic and data allows for parallel execution because the runtime knows which data accounts will be modified before execution.",
    "hint": "Logic vs. Data separation."
  },
  {
    "id": 152,
    "difficulty": "hard",
    "category": "alt_vm",
    "question": "How does Solana's 'Sealevel' runtime achieve parallel transaction processing?",
    "options": [
      "By ignoring gas fees",
      "By using multiple blockchains",
      "By requiring transactions to specify which 'Accounts' they will read/write, allowing non-overlapping transactions to run simultaneously",
      "By using a faster programming language"
    ],
    "answer": 2,
    "explanation": "Sealevel is a parallel transaction engine; if two transactions don't touch the same data, they run on different CPU cores at the same time.",
    "hint": "Pre-defined data dependencies."
  },
  {
    "id": 153,
    "difficulty": "hard",
    "category": "alt_vm",
    "question": "What is 'Proof of History' (PoH) in the context of Solana?",
    "options": [
      "A high-frequency Verifiable Delay Function (VDF) used to create a decentralized clock for the network",
      "A way to store historical data",
      "A consensus mechanism that replaces PoS",
      "A privacy protocol"
    ],
    "answer": 0,
    "explanation": "PoH allows nodes to agree on the time and order of events without waiting for constant network communication, significantly increasing throughput.",
    "hint": "A decentralized clock."
  },
  {
    "id": 154,
    "difficulty": "hard",
    "category": "rust_development",
    "question": "Why is 'Rust' preferred over 'Solidity' for high-performance chains like Solana or Near?",
    "options": [
      "Solidity is only for L2s",
      "Rust has better marketing",
      "Rust is easier to learn",
      "Rust provides memory safety without a garbage collector and allows for low-level hardware optimization"
    ],
    "answer": 3,
    "explanation": "Rust's 'Ownership' model prevents memory leaks and concurrency bugs, which are critical for high-speed parallel execution.",
    "hint": "Memory safety and performance."
  },
  {
    "id": 155,
    "difficulty": "hard",
    "category": "alt_vm",
    "question": "What is the 'Move' programming language (used in Aptos/Sui) designed specifically to prevent?",
    "options": [
      "Slow transactions",
      "Resource duplication and 'double-spending' at the language level using linear types",
      "High gas fees",
      "Oracle hacks"
    ],
    "answer": 1,
    "explanation": "Move treats tokens as 'Resources' that cannot be copied or accidentally dropped, making it structurally more secure for financial assets.",
    "hint": "Resources as first-class citizens."
  },
  {
    "id": 156,
    "difficulty": "hard",
    "category": "security",
    "question": "What is a 'Rent' or 'Storage Fee' in Solana/Aptos architecture?",
    "options": [
      "A fee paid to use the bridge",
      "A cost paid by accounts to store data on-chain, preventing state bloat by incentivizing the closing of unused accounts",
      "Payment to the landlord",
      "The cost of a VPN"
    ],
    "answer": 1,
    "explanation": "Unlike Ethereum, where storage is a one-time cost, these chains require a minimum balance to keep data 'alive' in the state.",
    "hint": "State bloat prevention."
  },
  {
    "id": 157,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Parallel EVM' (e.g., Monad or Sei v2)?",
    "options": [
      "A way to mine on two chains",
      "Two Ethereums running at once",
      "A new type of wallet",
      "An optimization of the EVM that allows multiple transactions to execute in parallel while maintaining Ethereum compatibility"
    ],
    "answer": 3,
    "explanation": "It brings Solana-like performance to the Ethereum ecosystem by using optimistic execution and specialized databases.",
    "hint": "Multi-threaded EVM."
  },
  {
    "id": 158,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is the 'Execution Layer' vs the 'Settlement Layer'?",
    "options": [
      "Same thing",
      "Settlement is for banks only",
      "Execution is where transactions run (L2); Settlement is where the final state and disputes are resolved (L1)",
      "Execution is for miners"
    ],
    "answer": 2,
    "explanation": "In modular architecture, you separate 'doing the math' from 'finalizing the truth'.",
    "hint": "Modular separation of duties."
  },
  {
    "id": 159,
    "difficulty": "hard",
    "category": "security",
    "question": "What is an 'Anchor' in the Solana ecosystem?",
    "options": [
      "A type of stablecoin",
      "A framework that provides a developer-friendly abstraction and security checks for Solana programs (similar to Hardhat/OpenZeppelin)",
      "A bridge protocol",
      "A physical hardware device"
    ],
    "answer": 1,
    "explanation": "Anchor automates much of the boilerplate code and security 'boilerplate' in Rust/Solana development.",
    "hint": "The 'Hardhat' of Solana."
  },
  {
    "id": 160,
    "difficulty": "hard",
    "category": "networking",
    "question": "What is 'QUIC' and why is Solana moving from UDP to QUIC?",
    "options": [
      "A transport protocol that provides flow control and connection-oriented communication to prevent network spam and congestion",
      "A new consensus rule",
      "A type of encryption",
      "A fast food chain"
    ],
    "answer": 0,
    "explanation": "QUIC allows the network to identify and throttle specific spamming connections without crashing the entire validator.",
    "hint": "Modern transport layer."
  },
  {
    "id": 161,
    "difficulty": "hard",
    "category": "alt_vm",
    "question": "What is the purpose of 'Lookup Tables' (LUTs) in Solana?",
    "options": [
      "To replace the block explorer",
      "To store historical price data",
      "To allow transactions to compress 256+ account addresses into a single transaction by referencing a table index",
      "To store user profile pictures"
    ],
    "answer": 2,
    "explanation": "Transaction size is limited in Solana; LUTs allow complex DeFi swaps involving many accounts to fit within a single packet.",
    "hint": "Address compression."
  },
  {
    "id": 162,
    "difficulty": "hard",
    "category": "architecture",
    "question": "In Solana architecture, what does the 'Gulf Stream' protocol do?",
    "options": [
      "Encrypts peer-to-peer traffic",
      "Manages water cooling for servers",
      "Pushes transaction caching and forwarding to the edge of the network, allowing validators to execute transactions before a block is finalized",
      "Balances load between L1 and L2"
    ],
    "answer": 2,
    "explanation": "Gulf Stream reduces confirmation times and memory pressure on validators by handling the mempool at the network edge.",
    "hint": "Mempool-less forwarding."
  },
  {
    "id": 163,
    "difficulty": "hard",
    "category": "alt_vm",
    "question": "How does the 'Sui' blockchain differ from 'Aptos' despite both using the Move language?",
    "options": [
      "Sui is an Ethereum Layer 2",
      "Sui uses an object-centric model where most transactions (owned objects) can bypass full consensus for near-instant finality",
      "Sui does not use PoS",
      "Aptos is only for NFTs"
    ],
    "answer": 1,
    "explanation": "Sui's object-centric design allows for 'causal order' execution, meaning independent transactions don't need global sequencing.",
    "hint": "Object-centric vs. Account-centric Move."
  },
  {
    "id": 164,
    "difficulty": "hard",
    "category": "rust_development",
    "question": "What is a 'CPI' (Cross-Program Invocation) in Solana?",
    "options": [
      "A private key backup method",
      "A way to bridge to Bitcoin",
      "An inflation metric",
      "A mechanism where one Solana program calls the instructions of another program directly on-chain"
    ],
    "answer": 3,
    "explanation": "CPI is the equivalent of a contract call in Solidity, but requires explicit account permission passing in Solana.",
    "hint": "Program-to-program communication."
  },
  {
    "id": 165,
    "difficulty": "hard",
    "category": "security",
    "question": "What is 'Reentrancy' risk in Solana compared to Ethereum?",
    "options": [
      "It is much rarer in Solana because the runtime prevents a program from calling itself recursively within the same transaction",
      "It is the exact same risk",
      "Solana requires a 'Reentrancy Guard' on every function",
      "Solana is immune to reentrancy"
    ],
    "answer": 0,
    "explanation": "Solana's architecture prevents a program from calling itself in a way that allows typical Solidity-style reentrancy, though logic errors can still occur.",
    "hint": "Runtime-level recursion prevention."
  },
  {
    "id": 166,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Pipeline' processing in Solana's Transaction Processing Unit (TPU)?",
    "options": [
      "A marketing term for fast blocks",
      "A method for sharding data",
      "An optimization where data fetching, signature verification, and execution happen in parallel stages (similar to CPU instruction pipelining)",
      "A way to mine faster"
    ],
    "answer": 2,
    "explanation": "Pipelining ensures that the hardware is always busy, with different parts of the CPU/GPU working on different phases of transaction validation.",
    "hint": "Hardware-level instruction flow."
  },
  {
    "id": 167,
    "difficulty": "hard",
    "category": "alt_vm",
    "question": "What is 'Cloudbreak' in the context of Solana's scalability?",
    "options": [
      "A bug in the networking layer",
      "A weather-based oracle",
      "A cloud storage provider",
      "A horizontally scaled accounts database that allows concurrent reads/writes across SSDs"
    ],
    "answer": 3,
    "explanation": "Cloudbreak solves the I/O bottleneck by organizing the account database so that hardware can handle massive parallel reads.",
    "hint": "The database bottleneck solution."
  },
  {
    "id": 168,
    "difficulty": "hard",
    "category": "networking",
    "question": "What is 'Turbine' in Solana's architecture?",
    "options": [
      "A way to generate energy",
      "A block propagation protocol that breaks data into small packets and uses a multi-layer tree structure to broadcast to validators",
      "An automated trading bot",
      "A high-speed cooling fan"
    ],
    "answer": 1,
    "explanation": "Turbine solves the 'bandwidth bottleneck' by ensuring that no single node has to send the whole block to every other node.",
    "hint": "Tree-based data propagation."
  },
  {
    "id": 169,
    "difficulty": "hard",
    "category": "alt_vm",
    "question": "What is the 'PDA' (Program Derived Address) concept in Solana?",
    "options": [
      "A type of user wallet",
      "Accounts that are 'off the curve' (no private key) and controlled programmatically based on specific seeds",
      "A handheld computer from the 90s",
      "A centralized admin address"
    ],
    "answer": 1,
    "explanation": "PDAs allow programs to sign for accounts and manage data without needing a traditional private key.",
    "hint": "Keys without private signatures."
  },
  {
    "id": 170,
    "difficulty": "hard",
    "category": "security",
    "question": "What is 'Account Substitution' or 'Account Cloning' attack in Solana?",
    "options": [
      "Buying a used account",
      "Stealing a SIM card",
      "A way to mine more tokens",
      "An exploit where an attacker passes a fake account into a program instruction that isn't properly validated"
    ],
    "answer": 3,
    "explanation": "In Solana, you must verify that the account passed to your program is the *actual* expected account (e.g., checking the owner or PDA).",
    "hint": "Input validation vulnerability."
  },
  {
    "id": 171,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Statelessness' in the context of blockchain architecture?",
    "options": [
      "A design where nodes do not need to store the entire state (balances, etc.) to verify new blocks, using witnesses/proofs instead",
      "A blockchain without a country",
      "A chain that resets every day",
      "A chain with no history"
    ],
    "answer": 0,
    "explanation": "Statelessness allows for much lower hardware requirements for verifiers, keeping the network decentralized as state grows.",
    "hint": "Proofs over local storage."
  },
  {
    "id": 172,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is 'Verifiable Delay Function' (VDF) used for besides PoH?",
    "options": [
      "Hashing passwords",
      "Ensuring unbiased randomness in leader election or lotteries by requiring a set amount of time to compute a result",
      "Slowing down the internet",
      "Encrypting emails"
    ],
    "answer": 1,
    "explanation": "VDFs prevent 'grinding' attacks where a participant tries to manipulate a random outcome by pre-calculating results.",
    "hint": "Time-locked randomness."
  },
  {
    "id": 173,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the 'Monolithic' vs 'Modular' blockchain debate?",
    "options": [
      "Monolithic (Solana) does everything on one layer; Modular (Ethereum/Celestia) separates execution, settlement, and data availability",
      "A debate about computer monitors",
      "Modular chains are only for mobile apps",
      "Monolithic chains are older"
    ],
    "answer": 0,
    "explanation": "Architects choose Monolithic for low latency and simplicity, or Modular for specialized scaling and sovereignty.",
    "hint": "All-in-one vs. Layered stacks."
  },
  {
    "id": 174,
    "difficulty": "hard",
    "category": "security",
    "question": "What is a 'Supply Chain Attack' in Web3 development (e.g., the Ledger Connect Kit hack)?",
    "options": [
      "Attacking a Bitcoin mining farm",
      "Stealing trucks from a warehouse",
      "Compromising a widely used library or dependency to inject malicious code into end-user dApps",
      "Shorting a token before a hack"
    ],
    "answer": 2,
    "explanation": "Since dApps rely on hundreds of NPM packages, a single vulnerability in a small library can compromise thousands of users.",
    "hint": "Dependency-based exploitation."
  },
  {
    "id": 175,
    "difficulty": "hard",
    "category": "alt_vm",
    "question": "What is 'Fuel VM' and its approach to UTXO?",
    "options": [
      "A parallelized execution engine that uses a strict UTXO model to allow high-throughput parallel transactions on Ethereum L2s",
      "A VM for gas stations",
      "A new way to burn tokens",
      "A Solana fork"
    ],
    "answer": 0,
    "explanation": "Fuel uses the UTXO model (like Bitcoin) but adds smart contract capabilities, enabling native parallelism and high performance.",
    "hint": "Parallel UTXO for EVM."
  },
  {
    "id": 176,
    "difficulty": "hard",
    "category": "privacy",
    "question": "What is 'Fully Homomorphic Encryption' (FHE) in a Web3 Banking context?",
    "options": [
      "A technology allowing a smart contract to perform math on encrypted balances without the contract ever 'seeing' the unencrypted numbers",
      "Encrypting the bank's website",
      "Storing keys in a vault",
      "A way to hide IP addresses"
    ],
    "answer": 0,
    "explanation": "FHE is the 'Holy Grail' of privacy, allowing decentralized computation on private data.",
    "hint": "Computation on ciphertexts."
  },
  {
    "id": 177,
    "difficulty": "hard",
    "category": "security",
    "question": "What is a 'Hardware Security Module' (HSM) and why is it used by Institutional Custodians?",
    "options": [
      "A fast hard drive",
      "A gaming console",
      "A type of validator node",
      "A physical device that secures and manages digital keys, ensuring the private key never leaves the hardware even during signing"
    ],
    "answer": 3,
    "explanation": "Institutional grade security requires that private keys are never exposed to a connected computer's memory.",
    "hint": "Physical key isolation."
  },
  {
    "id": 178,
    "difficulty": "hard",
    "category": "enterprise",
    "question": "What is 'Account Abstraction' (ERC-4337) and how does it enable 'Web2-like' UX?",
    "options": [
      "Turning wallets into smart contracts, allowing for social recovery, gas sponsorship, and batching",
      "Moving accounts to Layer 2",
      "Using emails as private keys",
      "Deleting user accounts"
    ],
    "answer": 0,
    "explanation": "It removes the 'Seed Phrase' hurdle by allowing logic-based security and 'Paymaster' gas sponsorship.",
    "hint": "Smart Contract Wallets standard."
  },
  {
    "id": 179,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is 'Post-Quantum Cryptography' (PQC) and why is it a 10-year priority for Architects?",
    "options": [
      "Cryptographic algorithms (like Kyber or Dilithium) designed to be secure against attacks from a large-scale quantum computer",
      "Mining tokens in the future",
      "Faster hashing",
      "A new type of blockchain"
    ],
    "answer": 0,
    "explanation": "Quantum computers could break the ECC/RSA security that currently secures all blockchain signatures.",
    "hint": "Anti-Quantum security."
  },
  {
    "id": 180,
    "difficulty": "medium",
    "category": "enterprise",
    "question": "What is a 'Permissioned Ledger' (Hyperledger Fabric) vs. a 'Permissionless' one?",
    "options": [
      "Permissioned is only for NFTs",
      "Permissioned requires identity verification and authorization to join; Permissionless (Ethereum) allows anyone to participate",
      "There is no difference",
      "Permissioned has no gas"
    ],
    "answer": 1,
    "explanation": "Banks often use permissioned ledgers to satisfy KYC/AML requirements while maintaining internal privacy.",
    "hint": "Controlled access."
  },
  {
    "id": 181,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Danksharding' in the Ethereum roadmap?",
    "options": [
      "Creating 64 new blockchains",
      "A design that simplifies sharding by focusing on 'Data Availability' rather than 'Execution Sharding'",
      "A way to reduce gas to zero",
      "A new consensus algorithm"
    ],
    "answer": 1,
    "explanation": "It provides a massive 'blob' of data storage for L2s to use, reducing costs without splitting the L1 state.",
    "hint": "Scaling through data blobs."
  },
  {
    "id": 182,
    "difficulty": "hard",
    "category": "security",
    "question": "What is 'Cold Storage' vs 'Warm Storage'?",
    "options": [
      "L1 vs L2 storage",
      "Temperature of the room",
      "Different hard drives",
      "Cold: Keys are offline; Warm: Keys are online but protected by multi-sig or HSMs"
    ],
    "answer": 3,
    "explanation": "Institutional architects balance security (Cold) with liquidity/access (Warm).",
    "hint": "Offline vs. Protected-Online."
  },
  {
    "id": 183,
    "difficulty": "medium",
    "category": "governance",
    "question": "What is a 'DAO Constitution'?",
    "options": [
      "A list of token holders",
      "A legal document in a bank",
      "The smart contract address",
      "A set of rules (social and code-based) that defines the mission and operational limits of a DAO"
    ],
    "answer": 3,
    "explanation": "It provides a framework for resolving disputes that code alone cannot handle.",
    "hint": "Social-technical rules."
  },
  {
    "id": 184,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is the 'Cross-Chain Interoperability Protocol' (CCIP)?",
    "options": [
      "A new internet browser",
      "Chainlink's standard for secure, cross-chain messaging and token transfers using a Decentralized Oracle Network (DON)",
      "A bridge for Bitcoin",
      "A protocol for emails"
    ],
    "answer": 1,
    "explanation": "CCIP aims to provide a 'universal adapter' for blockchains to talk to each other securely.",
    "hint": "Universal cross-chain standard."
  },
  {
    "id": 185,
    "difficulty": "hard",
    "category": "compliance",
    "question": "What is 'Proof of Reserves' (PoR)?",
    "options": [
      "Mining rewards",
      "A bank balance check",
      "A cryptographic audit technique using Merkle Trees to prove that an exchange or protocol holds the assets it claims to have",
      "Token vesting"
    ],
    "answer": 2,
    "explanation": "PoR provides transparency without revealing individual user account balances.",
    "hint": "Cryptographic solvency audit."
  },
  {
    "id": 186,
    "difficulty": "hard",
    "category": "enterprise",
    "question": "What is 'CBDC' (Central Bank Digital Currency) and how does it usually differ from USDC/USDT?",
    "options": [
      "It is backed by Gold only",
      "It is always on Ethereum",
      "It is a liability of the central bank directly, rather than a private company, and usually runs on permissioned rails",
      "It is not digital"
    ],
    "answer": 2,
    "explanation": "CBDCs are government-issued digital versions of fiat currency, aiming for direct monetary policy control.",
    "hint": "State-issued digital fiat."
  },
  {
    "id": 187,
    "difficulty": "hard",
    "category": "privacy",
    "question": "What is 'Stealth Addresses' in the context of Ethereum privacy?",
    "options": [
      "Private keys that are hard to type",
      "An anonymous VPN",
      "A way to hide your IP",
      "A mechanism where a sender generates a one-time address for a receiver that only the receiver can claim, obscuring the link between them"
    ],
    "answer": 3,
    "explanation": "Stealth addresses allow users to receive funds privately without exposing their public wallet history to the sender.",
    "hint": "One-time receiver addresses."
  },
  {
    "id": 188,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Multi-Party Computation' (MPC) in wallet security?",
    "options": [
      "Using multiple computers to play a game",
      "Multiple signatures from different wallets",
      "A cryptographic method where a private key is split into 'shards' across multiple parties so the full key never exists in one place",
      "Using a password and a PIN"
    ],
    "answer": 2,
    "explanation": "MPC allows for high security and flexible policy management without the on-chain overhead of a standard Multi-sig.",
    "hint": "Threshold signatures / Shared secrets."
  },
  {
    "id": 189,
    "difficulty": "hard",
    "category": "compliance",
    "question": "What is the 'Travel Rule' for crypto exchanges?",
    "options": [
      "A regulation requiring exchanges to share sender and receiver identity information for transactions over a certain threshold",
      "A rule about taking laptops on planes",
      "A tax on cross-border crypto",
      "A limit on how many tokens you can move"
    ],
    "answer": 0,
    "explanation": "The Travel Rule (FATF) is a major compliance challenge for institutional Web3 architects.",
    "hint": "KYC data sharing for transfers."
  },
  {
    "id": 190,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Social Recovery' in a smart contract wallet?",
    "options": [
      "Recovering a social media account",
      "The ability to reset a lost private key if a majority of pre-defined 'Guardians' approve the change",
      "Asking friends for money",
      "A way to delete an account"
    ],
    "answer": 1,
    "explanation": "It solves the 'lost seed phrase' problem for mass adoption.",
    "hint": "Guardian-based recovery."
  },
  {
    "id": 191,
    "difficulty": "hard",
    "category": "privacy",
    "question": "What is 'Selective Disclosure' in Decentralized Identity (DID)?",
    "options": [
      "The ability to prove you are over 21 (using a ZK-proof) without revealing your actual birthdate or name",
      "Closing a bank account",
      "Hiding your balance from the bank",
      "Sharing your entire medical history"
    ],
    "answer": 0,
    "explanation": "Selective disclosure allows for privacy-preserving KYC/AML compliance.",
    "hint": "Prove facts, not data."
  },
  {
    "id": 192,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Execution Tickets' in proposed Ethereum upgrades?",
    "options": [
      "A way to pay for gas with a credit card",
      "NFTs that grant access to dApps",
      "Tickets to a dev conference",
      "A mechanism to decouple block building from block proposing to further decentralize the network"
    ],
    "answer": 3,
    "explanation": "Execution tickets help resolve MEV issues and clarify the roles of builders and proposers in the network.",
    "hint": "PBS refinement."
  },
  {
    "id": 193,
    "difficulty": "hard",
    "category": "security",
    "question": "What is a 'Liveness Attack' in consensus systems?",
    "options": [
      "Mining blocks too slowly",
      "Killing a validator node",
      "A DDoS on a website",
      "An attack that prevents the network from making progress (finalizing blocks) even if it doesn't steal funds"
    ],
    "answer": 3,
    "explanation": "Liveness attacks are critical in PoS systems where a specific percentage of nodes must be online to reach finality.",
    "hint": "Stopping network progress."
  },
  {
    "id": 194,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is a 'Trusted Setup' (e.g., in zk-SNARKs)?",
    "options": [
      "Installing a hardware wallet",
      "A bank manager you trust",
      "A one-time procedure to generate cryptographic parameters where the 'toxic waste' (secret data) must be destroyed",
      "Setting up a mining rig"
    ],
    "answer": 2,
    "explanation": "If the 'toxic waste' is not destroyed, someone could forge proofs. Newer 'Transparent' proofs (STARKs) avoid this.",
    "hint": "Ceremony of toxic waste."
  },
  {
    "id": 195,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "What is 'Zero-Knowledge Machine Learning' (zkML)?",
    "options": [
      "Automated trading",
      "Teaching bots to code",
      "Providing a ZK-proof that a specific AI model was run on a specific input without revealing the model's weights",
      "Encrypting Python code"
    ],
    "answer": 2,
    "explanation": "zkML allows verifying that 'the AI actually said this' without revealing proprietary AI logic.",
    "hint": "Verifiable AI inference."
  },
  {
    "id": 196,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Verkle Trees' and why are they coming to Ethereum?",
    "options": [
      "A naming service for trees",
      "A data structure that allows for much smaller proofs than Merkle trees, enabling 'stateless' clients",
      "A new type of eco-friendly NFT",
      "A way to store files on-chain"
    ],
    "answer": 1,
    "explanation": "Verkle trees significantly reduce the size of the 'witness' needed to verify a block, a key step toward statelessness.",
    "hint": "Efficient state proofs."
  },
  {
    "id": 197,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Quadratic Voting' (QV)?",
    "options": [
      "A way to vote for four people at once",
      "Voting four times",
      "Voting based on square footage",
      "A voting system where the cost of a vote increases quadratically (1 vote=1 credit, 2 votes=4 credits), giving more power to minorities with strong preferences"
    ],
    "answer": 3,
    "explanation": "QV prevents the 'tyranny of the majority' and whale dominance in DAO governance.",
    "hint": "Weighted voting cost."
  },
  {
    "id": 198,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is 'Atomic Swaps'?",
    "options": [
      "A way to split atoms",
      "A smart-contract-based exchange of assets between two different blockchains without a central intermediary",
      "A type of nuclear power",
      "Swapping tokens in one second"
    ],
    "answer": 1,
    "explanation": "Atomic swaps use Hashed Timelock Contracts (HTLCs) to ensure either both parties get the funds or neither does.",
    "hint": "Trustless cross-chain exchange."
  },
  {
    "id": 199,
    "difficulty": "hard",
    "category": "enterprise",
    "question": "What is 'Tokenized Deposits' and how do they differ from Stablecoins?",
    "options": [
      "They are only for physical gold",
      "They don't use blockchain",
      "Tokenized deposits represent a claim on a commercial bank balance, integrated with traditional banking ledgers",
      "They are the same"
    ],
    "answer": 2,
    "explanation": "Banks prefer tokenized deposits for regulatory clarity and to maintain their relationship with the customer.",
    "hint": "Commercial bank crypto-claims."
  },
  {
    "id": 200,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the 'End Game' of Ethereum architecture according to Vitalik Buterin?",
    "options": [
      "One giant blockchain",
      "Bitcoin becoming a Layer 2",
      "A world where block production is centralized (builders) but block verification is trustless and decentralized (statelessness/ZK-proofs)",
      "Replacing all banks"
    ],
    "answer": 2,
    "explanation": "The focus is on ensuring that even if blocks are made by big servers, any mobile phone can verify they are correct.",
    "hint": "Centralized production, Decentralized verification."
  },
  {
    "id": 201,
    "difficulty": "hard",
    "category": "rwa",
    "question": "What is the primary purpose of an 'SPV' (Special Purpose Vehicle) in RWA tokenization?",
    "options": [
      "To provide liquidity on Uniswap",
      "To bankruptcy-remote the underlying asset from the parent company, ensuring token holders have a direct claim on the asset",
      "To speed up transaction processing",
      "To encrypt user data"
    ],
    "answer": 1,
    "explanation": "An SPV is a legal entity created to isolate financial risk. If the issuer goes bust, the asset inside the SPV remains protected for the token holders.",
    "hint": "Legal asset isolation."
  },
  {
    "id": 202,
    "difficulty": "hard",
    "category": "rwa",
    "question": "In the context of tokenized Real Estate, what is 'Fractionalization'?",
    "options": [
      "Calculating the square root of the property value",
      "Dividing a house into different rooms",
      "Dividing the ownership of a high-value asset into millions of digital tokens to lower the barrier to entry for investors",
      "Selling the house for Bitcoin only"
    ],
    "answer": 2,
    "explanation": "Fractionalization enables retail access to previously illiquid, high-ticket assets like commercial buildings.",
    "hint": "Lowering entry barriers via units."
  },
  {
    "id": 203,
    "difficulty": "hard",
    "category": "compliance",
    "question": "Which ERC standard is most commonly adapted for 'Security Tokens' that require built-in KYC/Compliance checks?",
    "options": [
      "ERC-1400 (or ERC-3643)",
      "ERC-1155",
      "ERC-20",
      "ERC-721"
    ],
    "answer": 0,
    "explanation": "ERC-1400 and ERC-3643 (T-REX) include hooks for identity registries, ensuring tokens can only be transferred between 'whitelisted' verified users.",
    "hint": "Permissioned token standards."
  },
  {
    "id": 204,
    "difficulty": "hard",
    "category": "rwa",
    "question": "What is the 'Oracle Problem' specifically regarding RWA tokenization?",
    "options": [
      "Oracles are too expensive",
      "The difficulty of accurately reflecting the real-time state/value of a physical asset (like a gold bar or a building) on-chain",
      "The risk of the oracle being decentralized",
      "Oracles only work for ETH price"
    ],
    "answer": 1,
    "explanation": "Unlike DeFi tokens, physical assets require human auditors or IoT sensors to relay off-chain data, introducing a trust bottleneck.",
    "hint": "Off-chain to On-chain data gap."
  },
  {
    "id": 205,
    "difficulty": "hard",
    "category": "legal",
    "question": "What is a 'Legal Wrapper' in the context of a DAO or RWA project?",
    "options": [
      "A way to hide from the SEC",
      "A legal structure (like a Swiss Foundation or Marshall Islands LLC) that allows an on-chain entity to sign contracts and pay taxes",
      "A plastic cover for a server",
      "A smart contract that encrypts laws"
    ],
    "answer": 1,
    "explanation": "Without a legal wrapper, DAO members may face 'unlimited liability' for the actions of the collective.",
    "hint": "Bridging code to law."
  },
  {
    "id": 206,
    "difficulty": "hard",
    "category": "rwa",
    "question": "What is 'Cash on Ledger' (CoL) vs 'Cash off Ledger' in RWA settlement?",
    "options": [
      "CoL is only for Bitcoin",
      "There is no difference",
      "CoL involves using a CBDC or stablecoin on the same chain as the asset for 'Atomic Settlement'",
      "CoL means using physical cash"
    ],
    "answer": 2,
    "explanation": "Cash on Ledger allows Delivery vs. Payment (DvP), where the asset and the money swap simultaneously, eliminating counterparty risk.",
    "hint": "On-chain payment leg."
  },
  {
    "id": 207,
    "difficulty": "hard",
    "category": "compliance",
    "question": "What is a 'Whitelisted Liquidity Pool' in institutional DeFi?",
    "options": [
      "A pool that only accepts USDC",
      "A pool that is hidden from the public",
      "A liquidity pool where all participants must pass KYC/AML before they can deposit or swap",
      "A pool with zero fees"
    ],
    "answer": 2,
    "explanation": "Institutions cannot interact with 'anonymous' money; whitelisted pools provide the benefits of DeFi within a compliant perimeter.",
    "hint": "KYC-only DeFi."
  },
  {
    "id": 208,
    "difficulty": "hard",
    "category": "rwa",
    "question": "How does 'Trustless Custody' apply to tokenized Gold (e.g., PAXG)?",
    "options": [
      "You have to mine the gold yourself",
      "The gold is digital and doesn't exist",
      "The gold is held by a regulated third party, but the tokens represent a direct 1:1 claim verifiable on-chain",
      "You hold the gold in your house"
    ],
    "answer": 2,
    "explanation": "While the gold is physical, the blockchain provides a transparent, immutable record of ownership that is easier to trade than a gold bar.",
    "hint": "1:1 physical backing."
  },
  {
    "id": 209,
    "difficulty": "hard",
    "category": "legal",
    "question": "What is 'Off-Chain Enforcement' in RWA?",
    "options": [
      "The legal ability to seize a physical asset through traditional courts if the on-chain token rights are violated",
      "Hiring a lawyer to delete a smart contract",
      "Burning tokens manually",
      "Blocking an IP address"
    ],
    "answer": 0,
    "explanation": "If a tokenized property is 'stolen' via a hack, the legal system must recognize the on-chain record to restore physical rights.",
    "hint": "Courts enforcing code."
  },
  {
    "id": 210,
    "difficulty": "hard",
    "category": "rwa",
    "question": "What are 'Tokenized T-Bills' and why are they popular in high-interest environments?",
    "options": [
      "Tokens that represent US Treasury bonds, allowing DeFi users to earn 'risk-free' yield on-chain",
      "A new type of meme coin",
      "A way to short the US Dollar",
      "Tokens used to pay for electricity"
    ],
    "answer": 0,
    "explanation": "When treasury yields are high, investors want to move their stablecoins into T-Bill tokens to capture yield without leaving the ecosystem.",
    "hint": "On-chain government debt."
  },
  {
    "id": 211,
    "difficulty": "hard",
    "category": "legal",
    "question": "What is a 'Ricardian Contract'?",
    "options": [
      "A contract written by David Ricardo",
      "A digital document that is both machine-readable (code) and human-readable (legal text), cryptographically linked",
      "A contract for a DAO",
      "A smart contract with no code"
    ],
    "answer": 1,
    "explanation": "It ensures that the intent of the human agreement and the execution of the code are perfectly aligned.",
    "hint": "Human + Machine readable."
  },
  {
    "id": 212,
    "difficulty": "hard",
    "category": "compliance",
    "question": "What is the 'Reg D' and 'Reg S' distinction in US-based RWA tokenization?",
    "options": [
      "Tax brackets for miners",
      "Reg D is for US accredited investors; Reg S is for international (non-US) investors",
      "Types of encryption",
      "Different versions of Ethereum"
    ],
    "answer": 1,
    "explanation": "Architects must implement 'Transfer Restrictions' in the smart contract to prevent Reg S tokens from being sold to US citizens.",
    "hint": "Investor location regulations."
  },
  {
    "id": 213,
    "difficulty": "hard",
    "category": "rwa",
    "question": "What is 'Supply Chain Finance' tokenization?",
    "options": [
      "Tokenizing 'Invoices' or 'Accounts Receivable' so small businesses can get immediate liquidity from global investors",
      "Tokenizing the trucks",
      "Printing labels with NFTs",
      "Tracking GPS on the blockchain"
    ],
    "answer": 0,
    "explanation": "A business can sell its 'unpaid invoice' as a token at a discount to get cash now, while the buyer gets the full payment later.",
    "hint": "Tokenizing unpaid invoices."
  },
  {
    "id": 214,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the 'Identity Oracle' in an RWA system?",
    "options": [
      "The same as a price oracle",
      "A database of private keys",
      "A service that verifies a user's off-chain KYC status and issues an on-chain 'Soulbound Token' or credential",
      "A bot that guesses your name"
    ],
    "answer": 2,
    "explanation": "It bridges the user's real-world identity to their wallet address without necessarily exposing their personal data on-chain.",
    "hint": "KYC bridging service."
  },
  {
    "id": 215,
    "difficulty": "hard",
    "category": "rwa",
    "question": "What is 'Re-hypothecation' risk in tokenized assets?",
    "options": [
      "The risk that a custodian lends out the underlying asset multiple times, leading to a liquidity crisis",
      "The risk of a token price falling",
      "The risk of a hard fork",
      "The risk of losing a private key"
    ],
    "answer": 0,
    "explanation": "If the physical gold or bonds backing a token are used as collateral for other loans elsewhere, the tokens may become 'under-collateralized'.",
    "hint": "Multiple claims on one asset."
  },
  {
    "id": 216,
    "difficulty": "hard",
    "category": "legal",
    "question": "What is 'Bankruptcy Remoteness' in RWA architecture?",
    "options": [
      "A legal structure ensuring that even if the token issuer goes bankrupt, the assets backing the tokens cannot be seized by the issuer's creditors",
      "Storing data in a remote location",
      "Using a decentralized cloud for backups",
      "Automating bankruptcy filings via smart contracts"
    ],
    "answer": 0,
    "explanation": "Crucial for institutional grade RWAs; it protects the investor from the operational failure of the platform provider.",
    "hint": "Protection from issuer insolvency."
  },
  {
    "id": 217,
    "difficulty": "hard",
    "category": "rwa",
    "question": "What is 'Proof of Physical Asset' (PoPA)?",
    "options": [
      "A consensus algorithm for miners",
      "A picture of the asset",
      "A legal deed stored in a safe",
      "The use of third-party audits, IoT sensors, or vault receipts to cryptographically prove an asset exists in a physical location"
    ],
    "answer": 3,
    "explanation": "PoPA attempts to solve the 'Oracle Problem' for physical goods like gold, oil, or electronics.",
    "hint": "Physical-to-digital verification."
  },
  {
    "id": 218,
    "difficulty": "hard",
    "category": "compliance",
    "question": "What are 'Transfer Hooks' in the context of RWA tokens?",
    "options": [
      "A method for bridging tokens",
      "A way to steal tokens",
      "Code that runs before every token transfer to check if the sender and receiver are compliant with local laws",
      "Hooks for physical towing services"
    ],
    "answer": 2,
    "explanation": "Transfer hooks allow security tokens to remain compliant even in secondary market trades on DEXs.",
    "hint": "Pre-transfer validation logic."
  },
  {
    "id": 219,
    "difficulty": "hard",
    "category": "rwa",
    "question": "What is 'Collateralized Loan Obligation' (CLO) tokenization?",
    "options": [
      "Bundling multiple loans into a single pool and tokenizing the different 'tranches' of risk/reward",
      "Tokenizing a single car loan",
      "A type of stablecoin",
      "A way to borrow against your house"
    ],
    "answer": 0,
    "explanation": "Tokenizing CLOs allows DeFi protocols to access diversified institutional yield products.",
    "hint": "Tranching debt pools."
  },
  {
    "id": 220,
    "difficulty": "hard",
    "category": "legal",
    "question": "What is 'Sovereignty' in RWA Tokenization?",
    "options": [
      "Being your own bank",
      "Ruling a country",
      "Using a private blockchain",
      "The degree to which the on-chain token is the definitive, legal record of ownership, independent of centralized databases"
    ],
    "answer": 3,
    "explanation": "High-sovereignty RWAs are recognized by law as the asset itself, rather than just a 'receipt' for an asset.",
    "hint": "The token IS the asset."
  },
  {
    "id": 221,
    "difficulty": "hard",
    "category": "architecture",
    "question": "In RWA, what is 'Atomic Delivery vs Payment' (DvP)?",
    "options": [
      "Shipping a physical item via drone",
      "Using a centralized exchange",
      "A trade where the transfer of the asset and the payment happen in a single, indivisible blockchain transaction",
      "Paying with atoms"
    ],
    "answer": 2,
    "explanation": "Atomic DvP eliminates 'settlement risk' because it is impossible for one party to send the money without receiving the asset.",
    "hint": "Indivisible trade execution."
  },
  {
    "id": 222,
    "difficulty": "hard",
    "category": "rwa",
    "question": "What is 'Intermediated' vs 'Direct' tokenization?",
    "options": [
      "Direct is for Bitcoin only",
      "Intermediated uses a bank; Direct uses a smart contract directly with the issuer",
      "Intermediated is only for NFTs",
      "Intermediated is slower"
    ],
    "answer": 1,
    "explanation": "Direct tokenization removes middlemen but requires more robust smart contract security and legal wrappers.",
    "hint": "Middleman vs. Peer-to-issuer."
  },
  {
    "id": 223,
    "difficulty": "hard",
    "category": "compliance",
    "question": "What is 'MiCA' and how does it affect RWA architects in Europe?",
    "options": [
      "A type of smart contract bridge",
      "A consensus protocol",
      "The 'Markets in Crypto-Assets' regulation providing a comprehensive legal framework for digital assets in the EU",
      "A new brand of hardware wallet"
    ],
    "answer": 2,
    "explanation": "MiCA provides the clarity institutional architects need to issue RWAs legally across the European Union.",
    "hint": "EU Crypto Regulation."
  },
  {
    "id": 224,
    "difficulty": "hard",
    "category": "rwa",
    "question": "What is 'Clawback' capability in an RWA smart contract?",
    "options": [
      "A bug in the code",
      "A way to delete the blockchain",
      "A type of transaction fee",
      "The ability for an authorized issuer to move tokens from one wallet to another in cases of lost keys or legal court orders"
    ],
    "answer": 3,
    "explanation": "Essential for legal compliance; issuers must be able to restore ownership if a user loses access or a crime is committed.",
    "hint": "Authorized administrative recovery."
  },
  {
    "id": 225,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Metadata persistence' in RWA tokens?",
    "options": [
      "Saving a user's name in a database",
      "Refreshing the token image",
      "Ensuring that the legal documents and audits associated with an asset remain accessible and immutable (often via IPFS or Arweave)",
      "Storing the price on-chain"
    ],
    "answer": 2,
    "explanation": "RWAs are worthless if the legal proof (the deed or contract) disappears from the internet.",
    "hint": "Permanent legal links."
  },
  {
    "id": 226,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Searcher' in the context of MEV?",
    "options": [
      "An automated bot that scans the mempool for profitable opportunities (arbitrage, liquidations) and bundles them for builders",
      "A type of validator",
      "A Google employee",
      "A user looking for a token on Coingecko"
    ],
    "answer": 0,
    "explanation": "Searchers use complex algorithms to find 'free money' in the order of transactions.",
    "hint": "Opportunity bots."
  },
  {
    "id": 227,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is a 'Sandwich Attack'?",
    "options": [
      "Eating lunch while trading",
      "Two transactions happening at the same time",
      "A DDoS attack",
      "A strategy where a searcher places a buy order before and a sell order after a user’s large trade to profit from the price slippage"
    ],
    "answer": 3,
    "explanation": "It is a form of front-running and back-running that extracts value from unsuspecting retail traders.",
    "hint": "Front + Back running."
  },
  {
    "id": 228,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Flashbots' (MEV-Boost)?",
    "options": [
      "A protocol that provides a private communication channel between searchers and validators to prevent front-running and reduce gas wars",
      "A fast version of Ethereum",
      "A bot for buying NFTs",
      "A hardware wallet"
    ],
    "answer": 0,
    "explanation": "Flashbots democratizes MEV and prevents the Ethereum network from being clogged by failed arbitrage attempts.",
    "hint": "Private mempool relay."
  },
  {
    "id": 229,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Statistical Arbitrage' in MEV?",
    "options": [
      "Guessing the price",
      "A math exam",
      "Profiting from price discrepancies between different DEXs or between CEXs and DEXs using high-frequency models",
      "Farming tokens"
    ],
    "answer": 2,
    "explanation": "It involves complex math to predict where prices will move across different venues.",
    "hint": "Multi-venue price balancing."
  },
  {
    "id": 230,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is the 'Builder' role in Proposer-Builder Separation (PBS)?",
    "options": [
      "Someone who builds websites",
      "Specialized entities that aggregate transactions from searchers to create the most profitable possible block",
      "The miner's boss",
      "The person who writes the smart contract"
    ],
    "answer": 1,
    "explanation": "Builders compete to make the 'juiciest' block to win the right to have it proposed by a validator.",
    "hint": "Block assembly specialists."
  },
  {
    "id": 231,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'JIT (Just-In-Time) Liquidity'?",
    "options": [
      "Automatic token minting",
      "Liquidity that arrives late",
      "A fast bridge",
      "A strategy where an LP adds liquidity to a pool right before a large swap and removes it immediately after to capture the fee"
    ],
    "answer": 3,
    "explanation": "JIT liquidity can actually benefit the trader by providing better execution, even if it 'snatches' fees from passive LPs.",
    "hint": "Provisioning for a single block."
  },
  {
    "id": 232,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Long-Tail MEV'?",
    "options": [
      "MEV on Bitcoin",
      "MEV opportunities found in obscure tokens, complex DeFi protocols, or NFT mints rather than standard ETH/USDC pairs",
      "Small profits",
      "Old MEV strategies"
    ],
    "answer": 1,
    "explanation": "Long-tail MEV requires deep protocol-specific knowledge rather than just raw speed.",
    "hint": "Niche/Complex opportunities."
  },
  {
    "id": 233,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is a 'Bundler' in Account Abstraction (ERC-4337)?",
    "options": [
      "A zip file",
      "A validator",
      "A specialized node that collects UserOperations (meta-transactions) and submits them to the blockchain in a single transaction",
      "A way to group NFTs"
    ],
    "answer": 2,
    "explanation": "Bundlers are the 'entry point' for smart contract wallets to interact with the network.",
    "hint": "UserOp aggregator."
  },
  {
    "id": 234,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'MEV-Burn'?",
    "options": [
      "A type of gas fee",
      "Losing money on a bot",
      "Burning the validator's house",
      "A proposed Ethereum upgrade to burn a portion of the MEV extracted in a block, similar to how EIP-1559 burns base fees"
    ],
    "answer": 3,
    "explanation": "MEV-burn aims to return value to all ETH holders rather than letting it all go to builders/validators.",
    "hint": "Redistributing MEV value."
  },
  {
    "id": 235,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Time-Bandit' attack?",
    "options": [
      "When miners/validators rewrite history (reorg) to capture past MEV opportunities that were very lucrative",
      "Arriving late to a mint",
      "Stealing a clock",
      "Slowing down the block time"
    ],
    "answer": 0,
    "explanation": "If a past block contains a massive MEV prize, nodes might be incentivized to fork the chain to take it.",
    "hint": "Reorg for profit."
  },
  {
    "id": 236,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Negative MEV'?",
    "options": [
      "Mining at a loss",
      "MEV that costs money",
      "Profits for the user",
      "MEV activities that degrade the user experience, such as sandwich attacks or high gas prices due to bidding wars"
    ],
    "answer": 3,
    "explanation": "Architects try to minimize negative MEV while potentially capturing 'Positive MEV' (like efficient liquidations).",
    "hint": "Toxic extraction."
  },
  {
    "id": 237,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'CEX-DEX Arbitrage'?",
    "options": [
      "Moving money to a bank",
      "Trading on Binance only",
      "Exploiting price differences between a Centralized Exchange and a Decentralized Exchange",
      "A type of stablecoin"
    ],
    "answer": 2,
    "explanation": "This is the most common form of MEV, helping keep prices consistent across the global market.",
    "hint": "Cross-platform price leveling."
  },
  {
    "id": 238,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Order Flow Auction' (OFA)?",
    "options": [
      "Selling products on eBay",
      "A way to buy tokens",
      "A government auction",
      "A mechanism where users or wallets auction off their transaction flow to searchers in exchange for a rebate or front-running protection"
    ],
    "answer": 3,
    "explanation": "OFA allows users to 'get paid' for the MEV their transactions create.",
    "hint": "Monetizing user transactions."
  },
  {
    "id": 239,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Multi-Block MEV'?",
    "options": [
      "Opportunities that require controlling or predicting the transaction order across several consecutive blocks",
      "MEV that takes a long time",
      "Mining two blocks at once",
      "A bridge attack"
    ],
    "answer": 0,
    "explanation": "This is much harder to execute but can lead to massive profits in sophisticated DeFi exploits.",
    "hint": "Sequential block extraction."
  },
  {
    "id": 240,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Latency Games' in MEV?",
    "options": [
      "A video game with lag",
      "Waiting for gas to go down",
      "Buying a fast computer",
      "The competition between searchers to have the fastest physical connection to the network's gossip nodes"
    ],
    "answer": 3,
    "explanation": "In MEV, milliseconds equal millions of dollars.",
    "hint": "Speed as a moat."
  },
  {
    "id": 241,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Probabilistic Reorg' and its relation to MEV?",
    "options": [
      "A way to mine faster",
      "A bug in the wallet",
      "A type of governance vote",
      "A situation where a validator intentionally forks a block to try and capture MEV from a competitor's previous block"
    ],
    "answer": 3,
    "explanation": "This poses a risk to chain stability and is one reason why high-MEV environments favor 'Shortest-Path' finality.",
    "hint": "Forking for profit."
  },
  {
    "id": 242,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'MEV-Smoothing'?",
    "options": [
      "A type of technical analysis",
      "Making the code look pretty",
      "A protocol-level design that redistributes MEV rewards evenly across all validators to prevent large stakers from gaining an unfair advantage",
      "A way to reduce gas spikes"
    ],
    "answer": 2,
    "explanation": "Smoothing prevents 'centralization pressure' where searchers only work with the top 3 validators.",
    "hint": "Reward redistribution."
  },
  {
    "id": 243,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is an 'Exclusive Order Flow' (EOF) agreement?",
    "options": [
      "A rule about who can buy NFTs",
      "A government trade embargo",
      "A type of smart contract audit",
      "A private deal where a wallet or app sends its user transactions only to a specific builder, bypassing the public mempool"
    ],
    "answer": 3,
    "explanation": "EOF can harm the network by making the mempool less transparent and giving certain builders a monopoly.",
    "hint": "Private builder pipeline."
  },
  {
    "id": 244,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Back-running' in the context of a liquidator bot?",
    "options": [
      "Running away from a trade",
      "Mining at the end of the day",
      "Placing a transaction immediately after a price-moving trade to liquidate under-collateralized positions",
      "Setting a stop-loss"
    ],
    "answer": 2,
    "explanation": "Back-running is essential for DeFi health (maintaining solvency) but is highly competitive for searchers.",
    "hint": "Liquidating after a price drop."
  },
  {
    "id": 245,
    "difficulty": "hard",
    "category": "compliance",
    "question": "How does the 'Travel Rule' affect Privacy Pools in RWA?",
    "options": [
      "It requires that privacy-preserving transfers still allow regulators to see the sender/receiver identities if requested",
      "It forces everyone to use Monero",
      "It only applies to vacations",
      "It makes them illegal"
    ],
    "answer": 0,
    "explanation": "Institutional privacy must be 'viewable' by authorized parties to meet AML standards.",
    "hint": "Compliant anonymity."
  },
  {
    "id": 246,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is a 'Searcher-Builder' entity?",
    "options": [
      "A vertically integrated firm that both finds MEV opportunities and builds its own blocks to ensure they are included",
      "A person who works two jobs",
      "A type of validator node",
      "A search engine company"
    ],
    "answer": 0,
    "explanation": "Vertical integration can lead to massive efficiency but increases centralization risks in the block-building market.",
    "hint": "Full-stack extraction."
  },
  {
    "id": 247,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Uncle Block MEV' (Legacy Ethereum)?",
    "options": [
      "MEV extracted from blocks that were not part of the main chain but were still recognized for rewards",
      "MEV on a relative's wallet",
      "A type of hardware hack",
      "Profit from old code"
    ],
    "answer": 0,
    "explanation": "In PoW, even 'lost' blocks could contain valuable data for searchers to analyze.",
    "hint": "Orphaned block profit."
  },
  {
    "id": 248,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Cross-Domain MEV'?",
    "options": [
      "MEV between two websites",
      "Trading different currencies",
      "A bridge exploit",
      "MEV opportunities that involve transactions across two different blockchains or layers (e.g., L1 and L2)"
    ],
    "answer": 3,
    "explanation": "As the world becomes multi-chain, capturing 'arbitrage' across bridges is the next frontier of MEV.",
    "hint": "Inter-chain extraction."
  },
  {
    "id": 249,
    "difficulty": "hard",
    "category": "mev",
    "question": "What is 'Front-running' in an NFT mint?",
    "options": [
      "Buying the NFT first",
      "A bot detecting a mint transaction and using higher gas to ensure its mint happens first, potentially exhausting the supply",
      "Selling the NFT early",
      "Copying the NFT art"
    ],
    "answer": 1,
    "explanation": "Mint-sniping via gas-bidding is a common form of MEV that frustrates retail collectors.",
    "hint": "Priority minting."
  },
  {
    "id": 250,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is a 'Trusted Execution Environment' (TEE) in the context of MEV?",
    "options": [
      "Hardware-level security (like Intel SGX) that allows block builders to prove they didn't look at or manipulate transaction data",
      "A consensus rule",
      "A safe room in a bank",
      "A type of smart contract"
    ],
    "answer": 0,
    "explanation": "TEEs allow for 'Confidential Computing', where sensitive data is processed without the host being able to see it.",
    "hint": "Hardware-based privacy."
  },
  {
    "id": 251,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "In LayerZero architecture, what is the role of the 'Ultra Light Node' (ULN)?",
    "options": [
      "An on-chain endpoint that validates block headers and transaction proofs sent by an Oracle and Relayer",
      "A node that runs on a mobile phone",
      "A way to reduce gas fees on Ethereum L1",
      "A centralized server that signs all transactions"
    ],
    "answer": 0,
    "explanation": "The ULN resides on the destination chain and only triggers a transaction if the Oracle's header and the Relayer's proof match.",
    "hint": "On-chain verification endpoint."
  },
  {
    "id": 252,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "How does Wormhole’s 'Guardian Network' achieve consensus for cross-chain transfers?",
    "options": [
      "Through Proof of Work mining",
      "Using optimistic rollups",
      "A 2/3+ supermajority of 19 independent Guardians must sign a 'VAA' (Verified Action Approval)",
      "A single leader node decides"
    ],
    "answer": 2,
    "explanation": "Wormhole relies on a Proof-of-Authority model where a set of reputable validators (Guardians) observe and sign messages.",
    "hint": "VAA multisig consensus."
  },
  {
    "id": 253,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is the 'Omnichain Fungible Token' (OFT) standard?",
    "options": [
      "A token that doesn't use smart contracts",
      "A new type of NFT",
      "A token that only works on one chain",
      "A standard by LayerZero that allows a token to be burned on a source chain and minted on a destination chain without 'wrapped' assets"
    ],
    "answer": 3,
    "explanation": "OFTs eliminate liquidity fragmentation by ensuring the 'native' supply moves across chains rather than creating 'Wrapped' versions.",
    "hint": "Burn-and-mint native interoperability."
  },
  {
    "id": 254,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is 'Finality Risk' in cross-chain messaging?",
    "options": [
      "The risk that a transaction is too slow",
      "The risk of high gas fees",
      "The risk that a message is sent from a source chain that later undergoes a 'reorg', making the message invalid on the destination chain",
      "The risk of the destination chain being offline"
    ],
    "answer": 2,
    "explanation": "Bridges must wait for a safe number of confirmations on the source chain before triggering the destination action to avoid double-spending via reorgs.",
    "hint": "Source chain reorg consequences."
  },
  {
    "id": 255,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is 'Generalized Message Passing' (GMP)?",
    "options": [
      "A chat protocol for DAOs",
      "Sending an email on the blockchain",
      "The ability to send not just tokens, but any function call or data payload across different chains",
      "A way to speed up mining"
    ],
    "answer": 2,
    "explanation": "GMP allows a contract on Polygon to trigger a complex swap on Avalanche and then a stake on Ethereum in one user flow.",
    "hint": "Cross-chain logic execution."
  },
  {
    "id": 256,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is a 'State Connector' in interoperability protocols?",
    "options": [
      "A mechanism (like in Flare Network) that allows the state of one chain to be trustlessly proven to another",
      "A physical cable between servers",
      "A type of wallet",
      "A database index"
    ],
    "answer": 0,
    "explanation": "State connectors provide proof that a certain event (like a payment) happened on a non-smart-contract chain like Bitcoin.",
    "hint": "Proving external events on-chain."
  },
  {
    "id": 257,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is the 'Relayer's' primary job in a bridge architecture?",
    "options": [
      "To provide liquidity",
      "To physically transport the transaction data and proof from the source chain to the destination chain",
      "To hold the user's funds",
      "To mine new blocks"
    ],
    "answer": 1,
    "explanation": "Relayers are the 'couriers' of the cross-chain world, though they usually cannot steal funds if the protocol uses cryptographic proofs.",
    "hint": "The message carrier."
  },
  {
    "id": 258,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is 'Optimistic Interoperability' (e.g., Nomad)?",
    "options": [
      "Hoping the transaction goes through",
      "A protocol with no security",
      "A bridge that only works for L2s",
      "A model where messages are assumed valid unless a fraud proof is submitted during a challenge window"
    ],
    "answer": 3,
    "explanation": "This lowers costs significantly but introduces a delay (cooldown) before the message is finalized.",
    "hint": "Assume valid until proven fraudulent."
  },
  {
    "id": 259,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is 'Liquidity Fragmentation' in the context of L2s and bridges?",
    "options": [
      "Using multiple wallets",
      "Breaking a token into pieces",
      "Deleting a liquidity pool",
      "The dilution of capital across many chains/bridges, making it harder for users to execute large trades without high slippage"
    ],
    "answer": 3,
    "explanation": "When USDC is split across 20 different chains, it is less useful than USDC concentrated in one deep pool.",
    "hint": "Diluted capital across ecosystems."
  },
  {
    "id": 260,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "How does 'Chain Abstraction' differ from simple bridging?",
    "options": [
      "It replaces all chains with one",
      "It is a type of compression",
      "It makes the chain invisible",
      "It allows users to interact with dApps without knowing which chain they are on or having to switch networks manually"
    ],
    "answer": 3,
    "explanation": "Chain abstraction aims for a Web2-like experience where the underlying infrastructure (ETH, SOL, AVAX) is hidden from the user.",
    "hint": "Seamless cross-chain UX."
  },
  {
    "id": 261,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is the 'Hub-and-Spoke' model in IBC (Inter-Blockchain Communication)?",
    "options": [
      "A bicycle wheel design",
      "A way to distribute tokens",
      "Connecting many 'Zones' to a central 'Hub' (like Cosmos Hub) to reduce the number of individual connections needed",
      "A type of mining pool"
    ],
    "answer": 2,
    "explanation": "Connecting 100 chains to each other directly requires 4,950 connections; using a hub reduces this to 100.",
    "hint": "Centralized routing for decentralization."
  },
  {
    "id": 262,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is 'Recursive Zero-Knowledge Proofs' for interoperability?",
    "options": [
      "A ZK proof that proves another ZK proof",
      "A proof that never ends",
      "A proof for Bitcoin only",
      "A way to hide your balance"
    ],
    "answer": 0,
    "explanation": "Recursion allows for the aggregation of many cross-chain events into a single small proof, making L1 verification much cheaper.",
    "hint": "Proofs of proofs."
  },
  {
    "id": 263,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is the 'Canonical Bridge' of an L2?",
    "options": [
      "The official bridge built into the L1-L2 protocol (e.g., the Arbitrum Bridge), often used for governance and high-value transfers",
      "A bridge that only works for NFTs",
      "The fastest bridge available",
      "A bridge recognized by the Pope"
    ],
    "answer": 0,
    "explanation": "Canonical bridges are generally the safest as they share the security of the L1, but they are often slower (7-day exit for optimistic rollups).",
    "hint": "Official L1/L2 conduit."
  },
  {
    "id": 264,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is 'Intent-Based Bridging'?",
    "options": [
      "Bridging using AI",
      "A bridge that asks for your permission",
      "Bridging with a purpose",
      "Users specify a 'goal' (e.g., 'I want 1 ETH on Base') and 'fillers' compete to fulfill that goal using their own capital for a fee"
    ],
    "answer": 3,
    "explanation": "Intents (like UniswapX or Across) shift the complexity and risk from the user to professional market makers.",
    "hint": "Goal-oriented cross-chain swaps."
  },
  {
    "id": 265,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is 'Zk-Light Client' interoperability?",
    "options": [
      "Using ZK proofs to verify the consensus state of a source chain without running a full node on the destination chain",
      "A bridge that doesn't use nodes",
      "A bridge for light users",
      "A private version of Ethereum"
    ],
    "answer": 0,
    "explanation": "This is the 'holy grail' of interoperability because it provides trustless, decentralized security without high gas costs.",
    "hint": "Trustless header verification via ZK."
  },
  {
    "id": 266,
    "difficulty": "hard",
    "category": "oracles",
    "question": "What is 'First-Party Oracle' (e.g., Pyth)?",
    "options": [
      "An oracle that uses social media",
      "An oracle for one person only",
      "The first oracle ever built",
      "A model where the data providers (exchanges, market makers) publish data directly to the blockchain themselves"
    ],
    "answer": 3,
    "explanation": "First-party oracles reduce latency and the risk of 'middleman' data tampering by going straight to the source.",
    "hint": "Direct provider publishing."
  },
  {
    "id": 267,
    "difficulty": "hard",
    "category": "oracles",
    "question": "What is a 'Pull-Based Oracle' vs a 'Push-Based Oracle'?",
    "options": [
      "There is no difference",
      "Push-based updates prices periodically; Pull-based allows a user to 'pull' a price proof into their transaction only when needed",
      "Pushing a button vs pulling a lever",
      "Pull-based is for Bitcoin; Push-based is for Ethereum"
    ],
    "answer": 1,
    "explanation": "Pull-based oracles (like Pyth or Chainlink Low Latency) save gas because they don't update on-chain unless someone actually needs the price.",
    "hint": "On-demand price data."
  },
  {
    "id": 268,
    "difficulty": "hard",
    "category": "oracles",
    "question": "What is 'Oracle Extractable Value' (OEV)?",
    "options": [
      "Buying tokens before an oracle update",
      "A subset of MEV where the oracle provider or searcher profits from being the first to update a price that triggers liquidations",
      "Value extracted by a searcher",
      "Fees paid to the oracle"
    ],
    "answer": 1,
    "explanation": "Protocol architects are now looking for ways to 'capture' OEV and return it to the dApp's users instead of giving it to bots.",
    "hint": "Price update MEV."
  },
  {
    "id": 269,
    "difficulty": "hard",
    "category": "oracles",
    "question": "What is a 'Medianizer' in MakerDAO's oracle system?",
    "options": [
      "A bot that averages the price",
      "A person who settles disputes",
      "A smart contract that takes price feeds from multiple sources and picks the 'median' to filter out outliers/manipulation",
      "A type of hardware oracle"
    ],
    "answer": 2,
    "explanation": "Taking the median is a robust way to prevent a single corrupted data source from crashing the whole system.",
    "hint": "Outlier-resistant aggregation."
  },
  {
    "id": 270,
    "difficulty": "hard",
    "category": "oracles",
    "question": "What is 'Chainlink DON' (Decentralized Oracle Network)?",
    "options": [
      "A committee of independent nodes that use consensus to agree on a data value before submitting it to a smart contract",
      "A type of transaction",
      "A leader of the network",
      "A private blockchain"
    ],
    "answer": 0,
    "explanation": "DONs ensure that the oracle itself isn't a single point of failure by requiring decentralization at the node level.",
    "hint": "Multi-node consensus network."
  },
  {
    "id": 271,
    "difficulty": "hard",
    "category": "oracles",
    "question": "What is 'Confidence Interval' in Pyth Network?",
    "options": [
      "A value published alongside the price representing the 'degree of uncertainty' or the current spread in the market",
      "How happy the oracle is",
      "A security score",
      "A timer for the next update"
    ],
    "answer": 0,
    "explanation": "Architects can use this to pause liquidations if the market is too volatile or if the 'true' price is unclear.",
    "hint": "Pricing uncertainty metric."
  },
  {
    "id": 272,
    "difficulty": "hard",
    "category": "oracles",
    "question": "What is a 'TWAP' (Time-Weighted Average Price) Oracle?",
    "options": [
      "A type of stablecoin",
      "An oracle that uses a clock",
      "An on-chain oracle derived from DEX prices (like Uniswap) averaged over a specific period to make manipulation expensive",
      "A very fast oracle"
    ],
    "answer": 2,
    "explanation": "To manipulate a TWAP, an attacker must sustain a high price for many blocks, which is much costlier than a single-block attack.",
    "hint": "Manipulation-resistant DEX prices."
  },
  {
    "id": 273,
    "difficulty": "hard",
    "category": "oracles",
    "question": "What is 'Cross-Chain Oracle Aggregation'?",
    "options": [
      "Sending price data via email",
      "Buying tokens on two chains",
      "Fetching price data from one chain and using it to secure a protocol on another chain via cross-chain messaging",
      "Using two oracles at once"
    ],
    "answer": 2,
    "explanation": "This allows L2s to leverage the highly secure and decentralized oracles already established on L1.",
    "hint": "Leveraging remote price data."
  },
  {
    "id": 274,
    "difficulty": "hard",
    "category": "oracles",
    "question": "What is an 'Optimistic Oracle' (e.g., UMA)?",
    "options": [
      "A fast oracle",
      "An oracle that is always happy",
      "An oracle where anyone can propose data, and it is accepted unless someone disputes it and provides a bond for a trial",
      "A centralized oracle"
    ],
    "answer": 2,
    "explanation": "Optimistic oracles are great for 'subjective' data (e.g., 'Was there a bridge hack?') that can't be easily automated.",
    "hint": "Dispute-based data verification."
  },
  {
    "id": 275,
    "difficulty": "hard",
    "category": "oracles",
    "question": "What is 'Hardware Oracle' (IoT Integration)?",
    "options": [
      "A hardware wallet",
      "Mining with a GPU",
      "A smart contract inside a computer",
      "The use of sensors (e.g., GPS, Temperature) to feed real-world physical data directly into a smart contract"
    ],
    "answer": 3,
    "explanation": "Crucial for insurance or supply chain dApps where the smart contract needs to know if a shipment arrived safely.",
    "hint": "IoT-to-Blockchain."
  },
  {
    "id": 276,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Quadratic Voting' (QV)?",
    "options": [
      "Voting four times",
      "A system where the cost of a vote increases quadratically (1 vote = 1 token, 2 votes = 4 tokens), giving more weight to minority groups",
      "A math equation",
      "Voting for four people"
    ],
    "answer": 1,
    "explanation": "QV prevents whales from dominating every decision by making it very expensive to have an outsized influence.",
    "hint": "Diminishing returns on voting power."
  },
  {
    "id": 277,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Conviction Voting'?",
    "options": [
      "A type of security audit",
      "Voting in a prison",
      "Voting with a strong belief",
      "A mechanism where the 'weight' of a vote increases the longer a voter stays committed to a proposal"
    ],
    "answer": 3,
    "explanation": "It rewards long-term alignment and prevents 'last-minute' vote buying or whale spikes.",
    "hint": "Time-weighted influence."
  },
  {
    "id": 278,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is a 'Sybil Attack' in the context of a DAO?",
    "options": [
      "An attack by a person named Sybil",
      "Stealing tokens from a pool",
      "A DDoS attack",
      "A single user creating hundreds of fake identities/wallets to gain unfair influence in a 'one-person-one-vote' system"
    ],
    "answer": 3,
    "explanation": "DAOs use KYC, 'Proof of Personhood' (Worldcoin/Gitcoin Passport), or token-weighting to combat Sybil attacks.",
    "hint": "Fake identity multiplication."
  },
  {
    "id": 279,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Futarchy'?",
    "options": [
      "Governance by AI",
      "A type of hierarchy",
      "Rule by the future",
      "A governance model proposed by Robin Hanson where 'Values are decided by voting, but Beliefs are decided by betting' (using prediction markets)"
    ],
    "answer": 3,
    "explanation": "In Futarchy, people vote on a goal (e.g., 'Increase GDP'), and markets decide which policy is most likely to achieve it.",
    "hint": "Governance via prediction markets."
  },
  {
    "id": 280,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Governance Minimization'?",
    "options": [
      "The design philosophy of making a protocol as 'set-in-stone' as possible to reduce the surface area for human error or corruption",
      "Small voting windows",
      "Having no government",
      "Hiding the vote"
    ],
    "answer": 0,
    "explanation": "Protocols like Uniswap or Bitcoin aim for minimization so that the rules are predictable and can't be changed by a small group.",
    "hint": "Reducing the 'Human in the Loop'."
  },
  {
    "id": 281,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is a 'Rage Quit' mechanism (e.g., MolochDAO)?",
    "options": [
      "Closing a game when losing",
      "A type of transaction fee",
      "A feature that allows a member to withdraw their share of the treasury and leave if they disagree with a governance decision",
      "A way to delete a DAO"
    ],
    "answer": 2,
    "explanation": "Rage quitting protects minority holders from 'tyranny of the majority' or the DAO passing a harmful proposal.",
    "hint": "Exit-rights as security."
  },
  {
    "id": 282,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Voter Apathy' in DAOs?",
    "options": [
      "The tendency for a very small percentage of token holders to actually participate in voting, leading to centralization",
      "A type of consensus",
      "Voters being too excited",
      "A technical bug in the UI"
    ],
    "answer": 0,
    "explanation": "High quorum requirements can lead to 'deadlock' if voters are apathetic and don't show up.",
    "hint": "Low participation risk."
  },
  {
    "id": 283,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Liquid Democracy' (Delegated Voting)?",
    "options": [
      "Voting for water rights",
      "A type of stablecoin governance",
      "A system where voters can either vote directly or delegate their power to an expert who can vote on their behalf, with the ability to revoke it at any time",
      "Selling your votes"
    ],
    "answer": 2,
    "explanation": "Liquid democracy allows for 'experts' to lead while keeping the ultimate power in the hands of the community.",
    "hint": "Revocable delegation."
  },
  {
    "id": 284,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is the 'Tragedy of the Commons' in a Protocol Treasury?",
    "options": [
      "The risk that individual members will try to drain the treasury for their own gain rather than investing in the long-term health of the network",
      "A play by Shakespeare",
      "A type of smart contract bug",
      "A high gas fee"
    ],
    "answer": 0,
    "explanation": "Governance must be designed with incentives (like locking tokens) to ensure participants act in the collective interest.",
    "hint": "Self-interest vs Collective good."
  },
  {
    "id": 285,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Optimistic Governance'?",
    "options": [
      "A fast version of DAO",
      "A DAO on an L2",
      "A system where proposals are automatically passed unless a certain number of members 'veto' them within a specific time window",
      "Being positive about a vote"
    ],
    "answer": 2,
    "explanation": "This reduces the friction for minor decisions while still allowing the community to block controversial changes.",
    "hint": "Passive approval / Active veto."
  },
  {
    "id": 286,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Bribery' (Governance Extraction) in DeFi?",
    "options": [
      "Giving money to a politician",
      "Hacking a DAO",
      "Protocols (like Curve/Convex) where third parties pay token holders to vote for specific incentive distributions (e.g., 'The Curve Wars')",
      "A type of gas fee"
    ],
    "answer": 2,
    "explanation": "While controversial, 'bribing' platforms like Votium are now a massive, open market for directing liquidity.",
    "hint": "Purchasing voting outcomes."
  },
  {
    "id": 287,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Plutocracy' in Token-weighted voting?",
    "options": [
      "Governance by a planet",
      "A type of decentralized web",
      "Rule by the smartest",
      "A system where power is proportional to wealth, allowing a few 'whales' to control the entire protocol"
    ],
    "answer": 3,
    "explanation": "Most DAOs today are plutocratic; moving toward 'One-Person-One-Vote' requires solving the Sybil problem.",
    "hint": "Rule by the rich."
  },
  {
    "id": 288,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'On-Chain' vs 'Off-Chain' Governance?",
    "options": [
      "There is no difference",
      "On-chain is for Bitcoin only",
      "Off-chain is illegal",
      "Off-chain is cheaper and used for signaling, while on-chain is 'binding' and can automatically upgrade the protocol."
    ],
    "answer": 3,
    "explanation": "Off-chain uses Snapshot (signatures); On-chain uses smart contracts (GovernorAlpha/Bravo) to execute code directly.",
    "hint": "Signatures vs Smart Contract execution."
  },
  {
    "id": 289,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Governance Time-lock'?",
    "options": [
      "A type of hardware wallet",
      "A timer on the website",
      "Locking a voter in a room",
      "A mandatory delay between a proposal passing and its execution, giving users time to exit the protocol if they disagree with the change"
    ],
    "answer": 3,
    "explanation": "Time-locks are a critical safety feature to prevent 'governance attacks' or malicious code from being pushed instantly.",
    "hint": "Safety delay for implementation."
  },
  {
    "id": 290,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Forking' as the 'Ultimate Governance'?",
    "options": [
      "Dividing a token",
      "Eating with a fork",
      "A type of consensus",
      "The ability for a community to copy the open-source code and start a new version of the protocol if the current governance is failing"
    ],
    "answer": 3,
    "explanation": "Forking (like Hive/Steem or ETH/ETC) is the final check on governance power in the decentralized world.",
    "hint": "Exit by starting over."
  },
  {
    "id": 291,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Holographic Consensus' in governance scaling?",
    "options": [
      "A mechanism where a small number of active participants can make decisions that represent the whole DAO unless a challenge is issued",
      "A way to hide your vote",
      "Voting using 3D projections",
      "Voting on multiple chains at once"
    ],
    "answer": 0,
    "explanation": "It allows DAOs to scale their decision-making bandwidth without requiring every member to read every proposal.",
    "hint": "Scaling via 'boosted' proposals."
  },
  {
    "id": 292,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Social Slashing'?",
    "options": [
      "Reducing the rewards for all voters",
      "A community-driven consensus or hard-fork intended to invalidate the token holdings of a malicious governance actor",
      "Banning a user from a forum",
      "A bug in the smart contract"
    ],
    "answer": 1,
    "explanation": "Social slashing acts as the 'nuclear option' deterrent against whales attempting to hostilely take over a protocol.",
    "hint": "The ultimate deterrent."
  },
  {
    "id": 293,
    "difficulty": "hard",
    "category": "governance",
    "question": "What constitutes a 'Governance Capture' attack?",
    "options": [
      "When a single entity or colluding group acquires enough voting power to pass proposals that extract value for themselves at the expense of the protocol",
      "A government regulator shutting down the DAO",
      "A hacker stealing the treasury",
      "Taking a picture of a vote"
    ],
    "answer": 0,
    "explanation": "Capture can occur via market buying of tokens, flash loans, or subtle manipulation of the quorum requirements.",
    "hint": "Hostile takeover of decision-making."
  },
  {
    "id": 294,
    "difficulty": "hard",
    "category": "governance",
    "question": "How do 'Soulbound Tokens' (SBTs) impact DAO game theory?",
    "options": [
      "They make tokens more expensive",
      "They prevent any voting from happening",
      "By enabling non-transferable reputation, they allow for governance power to be earned through contribution rather than just purchased with capital",
      "They allow users to trade their reputation"
    ],
    "answer": 2,
    "explanation": "SBTs move the needle from plutocracy toward meritocracy by decoupling governance rights from market-tradable assets.",
    "hint": "Non-transferable reputation power."
  },
  {
    "id": 295,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is the benefit of a 'Dual-Token' (Governance vs. Utility) system?",
    "options": [
      "It doubles the price of the protocol",
      "It separates economic speculation and liquidity from the long-term strategic decision-making of the protocol",
      "It provides two different ways to pay gas",
      "It is easier to list on exchanges"
    ],
    "answer": 1,
    "explanation": "This helps prevent 'mercenary' capital from disrupting governance just to pump the utility token's price.",
    "hint": "Decoupling price from power."
  },
  {
    "id": 296,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Proof of Personhood' (PoP) in the context of voting?",
    "options": [
      "A passport scan",
      "A type of biometric lock on a wallet",
      "A sybil-resistance mechanism (e.g., Worldcoin, BrightID) that ensures one human has exactly one vote regardless of their wealth",
      "A KYC check for exchanges"
    ],
    "answer": 2,
    "explanation": "PoP is essential for implementing 'One-Person-One-Vote' systems in a decentralized, permissionless environment.",
    "hint": "One-human-one-vote."
  },
  {
    "id": 297,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is a 'Schelling Point' in decentralized coordination?",
    "options": [
      "A type of cryptographic key",
      "A physical meeting spot for developers",
      "A solution that people tend to adopt in the absence of communication because it seems natural or special (e.g., choosing a default upgrade path)",
      "A point where the blockchain stops"
    ],
    "answer": 2,
    "explanation": "Game theory uses Schelling points to explain how decentralized actors coordinate on a single truth without a leader.",
    "hint": "Focal point for coordination."
  },
  {
    "id": 298,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Negative Voting' (Downvoting) in a DAO?",
    "options": [
      "Voting against yourself",
      "Voting No on a proposal",
      "A system where users can spend voting power specifically to subtract from a proposal’s 'For' tally, often used to prevent harmful changes",
      "Ignoring a vote"
    ],
    "answer": 2,
    "explanation": "It increases the cost of passing controversial or malicious proposals compared to a standard 'Yes/No' model.",
    "hint": "Direct opposition mechanism."
  },
  {
    "id": 299,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Delegation Fatigue'?",
    "options": [
      "When a voter changes their delegate too often",
      "A slow transaction speed",
      "A bug in the user interface",
      "The tendency for delegates to become inactive or overwhelmed as the volume of proposals increases, leading to centralized decision-making"
    ],
    "answer": 3,
    "explanation": "Fatigue is a major hurdle for 'Liquid Democracy,' necessitating better governance tooling and incentive structures for delegates.",
    "hint": "The burnout of active voters."
  },
  {
    "id": 300,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is 'Modularity' in the context of the Blockchain Stack?",
    "options": [
      "Splitting the blockchain into separate layers for Execution, Settlement, Data Availability, and Consensus (e.g., Celestia)",
      "Building one big blockchain",
      "Using blocks of different sizes",
      "A type of coding style"
    ],
    "answer": 0,
    "explanation": "Modular blockchains allow for specialized layers that can scale better than 'Monolithic' blockchains like Ethereum L1 or Solana.",
    "hint": "Separation of concerns across layers."
  },
  {
    "id": 301,
    "difficulty": "hard",
    "category": "security",
    "question": "When using 'Slither' for static analysis, what is the significance of the 'High' impact 'Reentrancy' detector for an Architect?",
    "options": [
      "It identifies state changes occurring after an external call, which could allow recursive balance draining",
      "It checks if the Python backend is connected",
      "It marks functions that use too much gas",
      "It validates the CSS of the dApp"
    ],
    "answer": 0,
    "explanation": "Slither's reentrancy detector is a critical CI/CD step for architects to ensure that 'Checks-Effects-Interactions' are followed before deployment.",
    "hint": "External calls before state updates."
  },
  {
    "id": 302,
    "difficulty": "hard",
    "category": "integration",
    "question": "A Technical Architect needs to sync an on-chain ledger with a Java-based Core Banking System. What is the most robust pattern?",
    "options": [
      "Using a 'Reliable Webhook' pattern or an Event Indexer (The Graph/SQD) with a message queue (Kafka) for idempotency",
      "Hardcoding the transaction IDs in the Java source",
      "Reading the node's local text logs directly",
      "Querying the RPC node every 1 second in a loop"
    ],
    "answer": 0,
    "explanation": "Direct RPC polling is unreliable. Architects use indexers to capture events, then push to Kafka/RabbitMQ to ensure the Web2 database eventually matches the Web3 state.",
    "hint": "Event-driven architecture."
  },
  {
    "id": 303,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "In 'Merkle Tree' architecture, what happens to the Root Hash if a single transaction in the block is modified?",
    "options": [
      "The gas price for that block increases",
      "The block is automatically deleted",
      "Nothing, only the leaf changes",
      "The Root Hash changes completely due to the cascading effect of the hashes up the tree"
    ],
    "answer": 3,
    "explanation": "Merkle Trees ensure data integrity; any change at the leaf level propagates to the top, making the entire block hash invalid.",
    "hint": "Hash cascading."
  },
  {
    "id": 304,
    "difficulty": "hard",
    "category": "zkp",
    "question": "What is the primary difference between a 'zk-SNARK' and a 'zk-STARK' for an enterprise privacy solution?",
    "options": [
      "STARKs require a centralized server",
      "SNARKs only work on Bitcoin",
      "STARKs do not require a 'Trusted Setup' and are post-quantum secure, but have larger proof sizes",
      "SNARKs are faster to generate"
    ],
    "answer": 2,
    "explanation": "Architects prefer STARKs for long-term security as they don't rely on a 'toxic waste' ceremony and are resistant to future quantum computing attacks.",
    "hint": "Trusted Setup vs. Transparency."
  },
  {
    "id": 305,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "How does 'LayerZero' differ from a traditional 'Lock-and-Mint' bridge?",
    "options": [
      "It is only for NFTs",
      "It is slower than a standard bridge",
      "It uses an 'Omnichain' messaging protocol with an Oracle and Relayer to transfer state/messages without locking assets",
      "It requires a central admin"
    ],
    "answer": 2,
    "explanation": "LayerZero provides a transport layer for cross-chain communication, enabling native asset transfers rather than wrapped versions.",
    "hint": "Messaging vs. Wrapping."
  },
  {
    "id": 306,
    "difficulty": "hard",
    "category": "standards",
    "question": "For a Technical Architect, what is the primary benefit of EIP-712 (Typed Data Hashing)?",
    "options": [
      "It encrypts the private key",
      "It provides a human-readable format for users to sign in their wallet (e.g., Metamask) rather than a hex string",
      "It makes transactions cheaper",
      "It allows Java to read Solidity"
    ],
    "answer": 1,
    "explanation": "EIP-712 prevents 'blind signing' by showing the user exactly what they are approving (e.g., 'Transfer 50 USDC'), which is vital for security-first banking apps.",
    "hint": "Human-readable signatures."
  },
  {
    "id": 307,
    "difficulty": "hard",
    "category": "security",
    "question": "Which tool would you use to perform 'Symbolic Execution' to find paths that could lead to an integer overflow in a legacy Solidity contract?",
    "options": [
      "Prettier",
      "Mythril",
      "Etherscan",
      "Slither"
    ],
    "answer": 1,
    "explanation": "Mythril uses symbolic execution to explore all possible contract states and identify vulnerabilities that simple testing might miss.",
    "hint": "Security analysis via symbolic math."
  },
  {
    "id": 308,
    "difficulty": "medium",
    "category": "tooling",
    "question": "In a 'Foundry' environment, what is the purpose of 'Anvil'?",
    "options": [
      "A code minifier",
      "A wallet browser extension",
      "A local Ethereum node used for development and testing with high-speed performance",
      "To deploy to Mainnet"
    ],
    "answer": 2,
    "explanation": "Anvil is the Foundry equivalent of Hardhat Network or Ganache, providing a local chain for rapid testing.",
    "hint": "Local test node."
  },
  {
    "id": 309,
    "difficulty": "hard",
    "category": "architecture",
    "question": "When designing a 'Hybrid Integration,' why might an architect use a 'Paymaster' in ERC-4337?",
    "options": [
      "To speed up the blockchain",
      "To allow the application to pay for the user's gas (gasless UX) or allow the user to pay in ERC-20 tokens",
      "To encrypt the transaction",
      "To steal gas from the user"
    ],
    "answer": 1,
    "explanation": "Paymasters allow enterprises to onboard Web2 users who don't have ETH by sponsoring their initial onboarding transactions.",
    "hint": "Sponsoring gas fees."
  },
  {
    "id": 310,
    "difficulty": "hard",
    "category": "blockchain_primitives",
    "question": "What is the 'State Bloat' problem in Ethereum, and how does 'State Statelessness' (Verkle Trees) aim to solve it?",
    "options": [
      "Users have too many tokens",
      "The blockchain is too fast",
      "Servers are overheating",
      "The growing size of the full state makes it hard for individuals to run nodes; Verkle trees allow smaller proofs to verify state"
    ],
    "answer": 3,
    "explanation": "Verkle Trees allow for much smaller 'Witnesses,' meaning nodes don't need to store the entire state to verify a transaction.",
    "hint": "Scaling node requirements."
  },
  {
    "id": 311,
    "difficulty": "medium",
    "category": "fintech",
    "question": "In DeFi, what is 'Recursive Lending'?",
    "options": [
      "Borrowing from a bank and lending to a friend",
      "Paying back a loan early",
      "Lending an asset, borrowing another, and re-depositing the borrowed asset to lever up yield",
      "A bug in the loan contract"
    ],
    "answer": 2,
    "explanation": "This increases capital efficiency but exposes the user to high liquidation risk if the asset prices fluctuate slightly.",
    "hint": "Looping liquidity for yield."
  },
  {
    "id": 312,
    "difficulty": "hard",
    "category": "zkp",
    "question": "What is a 'zkVM' (e.g., RISC Zero, Succinct) compared to a 'zkEVM'?",
    "options": [
      "They are the same thing",
      "zkVM is slower than zkEVM",
      "A zkVM can prove the execution of general-purpose code (like Rust or C++), whereas a zkEVM is specialized for Ethereum bytecode",
      "zkVM is only for Windows; zkEVM is for Linux"
    ],
    "answer": 2,
    "explanation": "zkVMs allow architects to use traditional languages like Rust/C++ to generate proofs, enabling complex logic not possible in Solidity.",
    "hint": "General purpose vs. EVM specific."
  },
  {
    "id": 313,
    "difficulty": "hard",
    "category": "security",
    "question": "What is the 'Oracle Manipulation' attack on a DeFi protocol?",
    "options": [
      "Phishing the developer's email",
      "Hacking the Oracle server directly",
      "Changing the time on the computer",
      "Using a large flash loan to artificially move the price of an asset on a low-liquidity DEX used as a price source"
    ],
    "answer": 3,
    "explanation": "If a contract relies on a single DEX price, an attacker can 'skew' that price and borrow more than they should.",
    "hint": "Price impact exploitation."
  },
  {
    "id": 314,
    "difficulty": "medium",
    "category": "integration",
    "question": "Which Node.js library is the successor to 'Ethers.js' for developers focusing on 'Tree-shaking' and minimal bundle size?",
    "options": [
      "Hardhat",
      "Truffle",
      "Web3.js",
      "Viem"
    ],
    "answer": 3,
    "explanation": "Viem is highly modular and provides much better TypeScript performance and smaller frontend bundles than Ethers.",
    "hint": "Modern, modular Web3 library."
  },
  {
    "id": 315,
    "difficulty": "hard",
    "category": "scaling",
    "question": "What is 'Proto-Danksharding' (EIP-4844) and how does it lower L2 costs?",
    "options": [
      "By removing gas fees for L1",
      "By switching to Proof of Work",
      "By making blocks 10x larger",
      "By introducing 'Blobs' of data that are cheaper than Calldata because they are deleted from nodes after ~18 days"
    ],
    "answer": 3,
    "explanation": "Blobs provide massive storage for rollups at a fraction of the cost, as they don't persist in the 'permanent' state of Ethereum.",
    "hint": "Ephemeral data blobs."
  },
  {
    "id": 316,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "In a 'Multi-Party Computation' (MPC) wallet, where is the private key stored?",
    "options": [
      "On the blockchain",
      "On the user's device only",
      "In a single secure vault",
      "The key 'never exists' in its entirety; it is split into shards distributed across multiple parties who sign collaboratively"
    ],
    "answer": 3,
    "explanation": "MPC prevents single points of failure by ensuring no one entity ever holds the full private key.",
    "hint": "Distributed key shards."
  },
  {
    "id": 317,
    "difficulty": "medium",
    "category": "tokenomics",
    "question": "What is the 'Burn' mechanism in EIP-1559?",
    "options": [
      "Sending tokens to a random user",
      "Destroying the base fee of every transaction to create deflationary pressure on the ETH supply",
      "A way to penalize hackers",
      "Deleting the blockchain history"
    ],
    "answer": 1,
    "explanation": "Part of the transaction fee is permanently removed from circulation, potentially making ETH a deflationary asset.",
    "hint": "Fee destruction."
  },
  {
    "id": 318,
    "difficulty": "hard",
    "category": "architecture",
    "question": "Why would an architect choose 'Optimism's Superchain' over a standalone L2?",
    "options": [
      "It is cheaper to deploy",
      "It is faster",
      "It provides shared security, interoperability, and a common tech stack (OP Stack) with other chains like Base and Zora",
      "It doesn't use the EVM"
    ],
    "answer": 2,
    "explanation": "The Superchain vision allows for horizontal scaling where different chains can easily communicate and share resources.",
    "hint": "Network of interconnected L2s."
  },
  {
    "id": 319,
    "difficulty": "hard",
    "category": "storage",
    "question": "What is the role of 'Content Addressing' (CIDs) in IPFS?",
    "options": [
      "To speed up the internet",
      "To encrypt the file",
      "To identify a file by 'what' it is (its hash) rather than 'where' it is stored, ensuring data immutability",
      "To find the location of a server"
    ],
    "answer": 2,
    "explanation": "In Web3, we link to a CID. If the file changes, the CID changes, ensuring the NFT metadata can't be silently swapped.",
    "hint": "Hash-based identification."
  },
  {
    "id": 320,
    "difficulty": "hard",
    "category": "governance",
    "question": "What is 'Governance Minimization' in protocol design?",
    "options": [
      "Only allowing one person to vote",
      "Having no users",
      "The architectural goal of making a protocol immutable and automated to reduce the need for human intervention/voting",
      "Deleting the DAO"
    ],
    "answer": 2,
    "explanation": "Minimized protocols (like Uniswap v2) are safer because there are fewer 'levers' for attackers or bad governance to manipulate.",
    "hint": "Immutability as a feature."
  },
  {
    "id": 321,
    "difficulty": "medium",
    "category": "security",
    "question": "In the context of 'Smart Contract Audits', what is a 'False Positive' in a tool like Slither?",
    "options": [
      "A bug that only happens in Python",
      "A real bug that was missed",
      "A vulnerability flagged by the tool that is actually safe in the specific context of that code",
      "When the audit takes too long"
    ],
    "answer": 2,
    "explanation": "Automated tools often flag patterns that look like bugs but are intended behavior; architects must filter these during review.",
    "hint": "Incorrectly flagged warning."
  },
  {
    "id": 322,
    "difficulty": "hard",
    "category": "cross_chain",
    "question": "What is 'Chainlink CCIP'?",
    "options": [
      "A new cryptocurrency",
      "A Cross-Chain Interoperability Protocol that enables secure data and value transfer across different blockchains",
      "A way to mine Bitcoin",
      "A wallet for banks"
    ],
    "answer": 1,
    "explanation": "CCIP uses the same security network that secures billions in Oracle data to allow contracts on L1 to talk to L2 or other L1s.",
    "hint": "Secure cross-chain communication."
  },
  {
    "id": 323,
    "difficulty": "hard",
    "category": "fintech",
    "question": "How does 'Proof of Reserves' (PoR) provide transparency for a centralized exchange?",
    "options": [
      "By publishing the CEO's bank account",
      "By hiring a famous auditor",
      "By using Merkle Trees to prove that the exchange holds the assets it claims to have for its users without revealing individual balances",
      "By showing the total number of users"
    ],
    "answer": 2,
    "explanation": "PoR allows users to verify their own balance is included in the 'Liability Merkle Tree' held by the exchange.",
    "hint": "Cryptographic proof of solvency."
  },
  {
    "id": 324,
    "difficulty": "hard",
    "category": "architecture",
    "question": "What is the 'Backend-for-Frontend' (BFF) pattern's role in a Web3 Architect's stack?",
    "options": [
      "To replace the smart contract",
      "To aggregate on-chain data (via indexers) and off-chain data (via DBs) into a unified API for the client",
      "To manage the user's seed phrase",
      "To mine blocks for the frontend"
    ],
    "answer": 1,
    "explanation": "dApps are slow if they call RPCs for everything. A BFF layer pre-fetches and joins data to provide a snappy Web2-like experience.",
    "hint": "Data aggregation layer."
  },
  {
    "id": 325,
    "difficulty": "hard",
    "category": "security",
    "question": "Why is 'AccessControl' preferred over 'Ownable' in a Corporate Treasury smart contract?",
    "options": [
      "Ownable is too expensive",
      "AccessControl allows for Role-Based Access (e.g., separate 'Minter', 'Burner', and 'Admin' roles) reducing the power of a single key",
      "Ownable only works on Ethereum",
      "AccessControl is written in Java"
    ],
    "answer": 1,
    "explanation": "RBAC (Role-Based Access Control) is standard for enterprise security, preventing a single 'Owner' compromise from destroying the system.",
    "hint": "Principle of Least Privilege."
  },
  {
    "id": 326,
    "difficulty": "hard",
    "category": "integration",
    "question": "How does a Technical Architect handle 'Transaction Replacement' (Speeding up) in a Node.js script?",
    "options": [
      "By deleting the transaction and starting over",
      "By re-sending the transaction with the same 'nonce' but a higher gas fee (at least 10% higher)",
      "By waiting for the block to expire",
      "By calling the RPC provider's support team"
    ],
    "answer": 1,
    "explanation": "Since nonces are strictly ordered, you can 'override' a pending transaction by using the same nonce and paying more gas.",
    "hint": "Same nonce, higher gas."
  },
  {
    "id": 327,
    "difficulty": "hard",
    "category": "zkp",
    "question": "What is a 'Recursion' in ZK Proofs and why is it vital for scaling?",
    "options": [
      "A bug in the prover",
      "Repeating a transaction until it works",
      "The ability for a ZK proof to verify another ZK proof, allowing thousands of transactions to be compressed into one final proof",
      "When a function calls itself in Solidity"
    ],
    "answer": 2,
    "explanation": "Recursive proofs allow for 'Proof Aggregation,' which is how ZK-Rollups handle thousands of transactions per second.",
    "hint": "Proofs of proofs."
  },
  {
    "id": 328,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "What is the 'Fat Protocol' thesis and how is it changing in the era of App-Chains?",
    "options": [
      "L2s are better than L1s",
      "The idea that value captures at the protocol layer (L1) rather than the app layer; now shifting toward 'Fat Apps' on modular stacks",
      "Tokens make you rich",
      "The blockchain is getting too big"
    ],
    "answer": 1,
    "explanation": "Originally, value was thought to stay in L1s (like ETH). With L2s and specialized chains, more value is being retained by the applications themselves.",
    "hint": "Value capture: Infrastructure vs. Application."
  },
  {
    "id": 329,
    "difficulty": "hard",
    "category": "architecture_mapping",
    "question": "When migrating a Core Banking System (CBS) from a traditional SQL-based Ledger to a Blockchain, which architectural pattern replaces the 'Two-Phase Commit' for cross-shard or cross-chain consistency?",
    "options": [
      "Centralized API Gateways",
      "Direct database replication",
      "Optimistic UI Updates",
      "The Saga Pattern with compensating transactions"
    ],
    "answer": 3,
    "explanation": "In distributed systems like Web3, atomic transactions across chains aren't natively supported. The Saga Pattern (distributed transactions) is used to manage consistency by triggering compensating smart contract calls if a step fails.",
    "hint": "Think about distributed state management."
  },
  {
    "id": 330,
    "difficulty": "hard",
    "category": "security_tooling",
    "question": "Which security tool would a Technical Architect integrate into a CI/CD pipeline to perform 'Symbolic Execution' on EVM bytecode to find hidden vulnerabilities?",
    "options": [
      "Mythril",
      "Slither",
      "Echidna",
      "Prettier"
    ],
    "answer": 0,
    "explanation": "Mythril uses symbolic execution and SMT solvers to analyze EVM bytecode for complex security flaws, whereas Slither is a static analysis tool for Solidity source code.",
    "hint": "One is for static analysis, the other is for symbolic execution."
  },
  {
    "id": 331,
    "difficulty": "medium",
    "category": "hybrid_integration",
    "question": "A Java/Spring Boot backend needs to listen for on-chain events from an Ethereum contract. Which tool is most effective for mapping these events to a standard Web2 message queue like RabbitMQ?",
    "options": [
      "Infura Dashboard",
      "The Graph (Indexing Protocol)",
      "Web3j Event Monitoring",
      "Metamask Mobile"
    ],
    "answer": 2,
    "explanation": "Web3j is the standard Java library for Ethereum integration. It allows architects to monitor contract events and pipe them into enterprise middleware.",
    "hint": "Java-specific Web3 library."
  },
  {
    "id": 332,
    "difficulty": "hard",
    "category": "account_abstraction",
    "question": "Under EIP-4337 (Account Abstraction), how is a 'UserOperation' fundamentally different from a standard Ethereum transaction for a Technical Architect?",
    "options": [
      "It replaces the Private Key requirement",
      "It is a higher-level pseudo-transaction object that is sent to a 'Bundler' rather than directly to the mempool",
      "It doesn't require gas",
      "It only works on Layer 2"
    ],
    "answer": 1,
    "explanation": "EIP-4337 introduces an 'Entry Point' contract and 'Bundlers' who collect UserOperations, allowing for features like social recovery and sponsored gas without core protocol changes.",
    "hint": "Bundlers and EntryPoint contracts."
  },
  {
    "id": 333,
    "difficulty": "hard",
    "category": "security_tooling",
    "question": "In a 'Security-First' audit, what is the primary role of 'Echidna'?",
    "options": [
      "Generating automated documentation",
      "Gas optimization suggestions",
      "Property-based Fuzzing to test if smart contract invariants hold true under random inputs",
      "Static analysis of Solidity code"
    ],
    "answer": 2,
    "explanation": "Echidna is a fuzzer that tests specific properties (invariants) of a contract. If a sequence of transactions can break a rule (e.g., 'total supply should never exceed X'), Echidna identifies the failing sequence.",
    "hint": "Fuzzing vs Static Analysis."
  },
  {
    "id": 334,
    "difficulty": "medium",
    "category": "indexing",
    "question": "When building a high-performance Web3 dashboard in Node.js, why would an architect use 'The Graph' instead of direct JSON-RPC calls to an Ethereum node?",
    "options": [
      "Nodes are too slow for simple balance checks",
      "Standard nodes do not support complex relational queries (like 'find all NFTs owned by X with trait Y')",
      "The Graph is cheaper than gas",
      "The Graph secures the private keys"
    ],
    "answer": 1,
    "explanation": "Blockchain nodes are optimized for state storage, not querying. The Graph indexes blockchain data into a GraphQL schema, allowing for complex, performant queries.",
    "hint": "Query performance and GraphQL."
  },
  {
    "id": 335,
    "difficulty": "hard",
    "category": "tokenomics",
    "question": "What is the primary architectural risk of a 'Dual-Token' model (e.g., Governance + Stablecoin) in a DeFi protocol design?",
    "options": [
      "Smart contracts cannot handle two tokens",
      "Increased transaction latency",
      "Death Spiral risk due to reflexive value dependency (e.g., LUNA/UST)",
      "Incompatibility with ERC-20"
    ],
    "answer": 2,
    "explanation": "Architects must ensure the economic design prevents circular dependencies where the collapse of one token leads to the automated liquidation of the other.",
    "hint": "Reflexivity and systemic risk."
  },
  {
    "id": 336,
    "difficulty": "medium",
    "category": "interoperability",
    "question": "Which EIP standard should a Fintech architect use to ensure their smart contract can interact with interest-bearing vaults across different protocols seamlessly?",
    "options": [
      "ERC-1155",
      "ERC-20",
      "ERC-721",
      "ERC-4626 (Tokenized Vault Standard)"
    ],
    "answer": 3,
    "explanation": "ERC-4626 provides a standard API for yield-bearing vaults, simplifying integration for architects who need to plug into various DeFi lending protocols.",
    "hint": "Vault standardization."
  },
  {
    "id": 337,
    "difficulty": "hard",
    "category": "cryptography",
    "question": "In a ZK-Rollup architecture, what is the specific role of a 'zkVM' (Zero-Knowledge Virtual Machine)?",
    "options": [
      "To store user data off-chain",
      "To replace the Ethereum Consensus layer",
      "To execute general-purpose programs (Rust/C++) and generate a cryptographic proof that the execution was correct",
      "To encrypt private keys on the client side"
    ],
    "answer": 2,
    "explanation": "zkVMs like RISC Zero or SP1 allow developers to write logic in standard languages and prove the execution, bridging the gap between Web2 developers and ZK-powered privacy/scaling.",
    "hint": "General-purpose ZK execution."
  },
  {
    "id": 338,
    "difficulty": "medium",
    "category": "tooling",
    "question": "As a Lead Architect, why might you recommend 'Foundry' over 'Hardhat' for a team already proficient in Solidity?",
    "options": [
      "Foundry is written in JavaScript",
      "Foundry allows writing tests directly in Solidity, enabling better developer experience and faster execution via Rust-based tooling",
      "Foundry is only for Layer 2",
      "Hardhat does not support deployment"
    ],
    "answer": 1,
    "explanation": "Foundry is a Rust-based toolkit that allows tests to be written in Solidity, eliminating the 'context switching' between JavaScript/TypeScript and Solidity.",
    "hint": "Solidity-native testing."
  },
  {
    "id": 339,
    "difficulty": "hard",
    "category": "mev_security",
    "question": "How does 'Maximal Extractable Value' (MEV) impact a Fintech architect's design of a high-volume Decentralized Exchange (DEX) aggregator?",
    "options": [
      "It increases the speed of transactions",
      "It introduces the risk of 'Sandwich Attacks' and 'Front-running', requiring the use of private RPC endpoints like Flashbots to protect user slippage",
      "It reduces the gas cost for retail users",
      "It ensures that all transactions are processed in the order they were received"
    ],
    "answer": 1,
    "explanation": "MEV allows searchers to reorder transactions for profit. Architects must implement protection (e.g., Flashbots Protect or CowSwap) to ensure enterprise-grade execution for high-value swaps.",
    "hint": "Think about transaction ordering and sandwiching."
  },
  {
    "id": 340,
    "difficulty": "hard",
    "category": "interoperability",
    "question": "When designing a cross-chain liquidity bridge, what is the primary security advantage of using 'Arbitrary Messaging Bridges' (AMBs) like LayerZero or Chainlink CCIP over traditional lock-and-mint bridges?",
    "options": [
      "They rely on decentralized oracle networks or specialized validation layers rather than a single multisig, reducing the 'Bridge Hack' attack surface",
      "They eliminate the need for gas on the destination chain",
      "They are always cheaper to use",
      "They don't require smart contracts"
    ],
    "answer": 0,
    "explanation": "Lock-and-mint bridges are notorious single points of failure. AMBs use varied security models (like decentralized validation or ZK proofs) to move state, not just tokens, across chains.",
    "hint": "Decentralized validation vs. Multisig."
  },
  {
    "id": 341,
    "difficulty": "medium",
    "category": "oracle_security",
    "question": "In a 'Security-First' DeFi architecture on an L2 (e.g., Arbitrum), why must an architect implement an 'L2 Sequencer Uptime Feed' check before calling an Oracle?",
    "options": [
      "To encrypt the transaction data",
      "To save gas",
      "To ensure that the price data isn't stale if the L2 sequencer goes down while the L1 oracle continues to update",
      "To bypass the need for a wallet"
    ],
    "answer": 2,
    "explanation": "If an L2 sequencer stops, users cannot trade, but prices on L1 might keep moving. Without an uptime check, 'bad debt' can accumulate when the sequencer restarts with stale prices.",
    "hint": "Stale price risk during sequencer downtime."
  },
  {
    "id": 342,
    "difficulty": "medium",
    "category": "storage_mapping",
    "question": "When mapping Web2 'AWS S3' storage requirements to Web3, which architectural choice provides the best balance of 'Persistence' and 'Content Addressability' for NFT metadata?",
    "options": [
      "Google Drive links inside the smart contract",
      "IPFS for content-addressing combined with Filecoin or Arweave for permanent incentive-based storage",
      "Hardcoding the metadata strings into the Solidity bytecode",
      "Storing the full JSON on a private MySQL server"
    ],
    "answer": 1,
    "explanation": "IPFS ensures the link is tied to the file hash (Content-Addressing), while Arweave/Filecoin ensures the file remains available even if the original pinner goes offline.",
    "hint": "Hash-based links vs. Location-based links."
  },
  {
    "id": 343,
    "difficulty": "hard",
    "category": "privacy_architecture",
    "question": "For an Enterprise Architect requiring 'Regulated Privacy' (e.g., GDPR compliance), how does a 'zk-SNARK' circuit differ from a 'Trusted Execution Environment' (TEE) like Intel SGX?",
    "options": [
      "zk-SNARKs provide mathematical proofs of privacy without trusted hardware, while TEEs rely on secure hardware enclaves that can be vulnerable to side-channel attacks",
      "They are the same thing",
      "zk-SNARKs require a centralized server to verify",
      "TEEs are only for Bitcoin"
    ],
    "answer": 0,
    "explanation": "Zero-Knowledge Proofs (SNARKs/STARKs) offer a 'trustless' privacy model. TEEs are faster for complex logic but introduce a hardware-level trust assumption and potential physical exploits.",
    "hint": "Math-based vs. Hardware-based security."
  },
  {
    "id": 344,
    "difficulty": "medium",
    "category": "integration_tooling",
    "question": "A Technical Architect is choosing between 'web3.py' and 'ethers.js'. Which factor would lead them to choose 'web3.py' for an enterprise backend?",
    "options": [
      "It is faster at rendering frontend components",
      "It replaces the need for an RPC provider",
      "Better alignment with existing Python-based Data Science, ML, or Fintech quantitative trading stacks",
      "It is the only library that supports Ethereum"
    ],
    "answer": 2,
    "explanation": "While both are excellent, web3.py is the industry standard for Python environments, which are prevalent in banking backends and algorithmic trading systems.",
    "hint": "Backend language compatibility."
  },
  {
    "id": 345,
    "difficulty": "hard",
    "category": "gas_economics",
    "question": "Under EIP-1559, how should an architect handle the 'Base Fee' and 'Priority Fee' in a high-priority automated liquidation bot?",
    "options": [
      "Only use Legacy transactions",
      "Dynamically adjust the Priority Fee (Tip) to outbid other bots while ensuring the Max Fee covers potential Base Fee spikes",
      "Set the Priority Fee to 0 to save money",
      "Ignore fees and let the transaction fail"
    ],
    "answer": 1,
    "explanation": "EIP-1559 splits fees. The Base Fee is burned, but the Priority Fee is the 'tip' to the validator. For liquidation bots, the 'tip' must be competitive to ensure inclusion in the next block.",
    "hint": "The 'Tip' mechanism for inclusion."
  },
  {
    "id": 346,
    "difficulty": "hard",
    "category": "indexing_strategy",
    "question": "Why would a Lead Architect choose a 'Custom Indexer' (e.g., using Go or Java) over 'The Graph' for a high-frequency Fintech dashboard?",
    "options": [
      "Because GraphQL is obsolete",
      "To achieve sub-second latency and support custom logic (e.g., joining on-chain data with private Web2 SQL data) that The Graph’s public nodes cannot handle",
      "The Graph is too cheap",
      "To avoid using smart contracts entirely"
    ],
    "answer": 1,
    "explanation": "Public indexers have sync lag. Custom indexers allow architects to control the 'Sidecar' database, enabling complex joins with sensitive internal banking data not suitable for a public Subgraph.",
    "hint": "Latency and Web2/Web3 data joins."
  },
  {
    "id": 347,
    "difficulty": "medium",
    "category": "devops",
    "question": "In a Multi-Chain deployment strategy (e.g., deploying to Mainnet, Polygon, and Base), how does a Technical Architect ensure the same contract address is maintained across all networks?",
    "options": [
      "By manually deploying at the exact same timestamp",
      "By using the same wallet for all deployments",
      "It is impossible to have the same address on different chains",
      "By using the 'CREATE2' opcode with a consistent salt and deployer factory address"
    ],
    "answer": 3,
    "explanation": "CREATE2 derives the address from the salt and bytecode rather than the deployer's nonce. This allows 'Deterministic Deployment' across different EVM chains.",
    "hint": "Deterministic deployment opcode."
  },
  {
    "id": 348,
    "difficulty": "hard",
    "category": "tokenomics_architecture",
    "question": "What is the primary architectural purpose of the 'veToken' (Voter Escrowed) model in DeFi governance?",
    "options": [
      "To align long-term incentives by requiring users to 'lock' tokens for voting power, reducing circulating supply and market volatility",
      "To encrypt the voting process",
      "To allow users to withdraw their tokens instantly",
      "To replace the need for gas fees"
    ],
    "answer": 0,
    "explanation": "The veToken model (popularized by Curve) encourages long-term holding. The longer the lock, the higher the voting power and share of protocol fees, preventing 'mercenary' capital.",
    "hint": "Locking for power."
  },
  {
    "id": 349,
    "difficulty": "hard",
    "category": "upgradability",
    "question": "Which proxy pattern is preferred for an Enterprise Architect who wants to minimize 'Gas Overhead' for the end-user while maintaining the ability to upgrade logic?",
    "options": [
      "Using a new address for every version",
      "Removing proxies entirely",
      "UUPS (Universal Upgradeable Proxy Standard) because the upgrade logic resides in the implementation, reducing gas for standard calls",
      "Transparent Proxy Pattern"
    ],
    "answer": 2,
    "explanation": "UUPS is more gas-efficient than the Transparent Proxy Pattern because the 'Admin' checks are not performed on every single call to the proxy, only during the upgrade process.",
    "hint": "Logic in proxy vs logic in implementation."
  },
  {
    "id": 350,
    "difficulty": "hard",
    "category": "settlement_architecture",
    "question": "How should a Technical Architect account for 'Probabilistic Finality' when integrating a Bitcoin-based bridge into a real-time banking settlement system?",
    "options": [
      "Process the transaction immediately upon seeing it in the mempool",
      "Ignore finality as it doesn't apply to Bitcoin",
      "Use a centralized database to override the blockchain",
      "Implement a 'Confirmation Threshold' (e.g., waiting 6 blocks) to ensure the transaction is unlikely to be reversed by a chain reorganization"
    ],
    "answer": 3,
    "explanation": "Unlike 'Instant Finality' chains (BFT-based), PoW chains like Bitcoin require waiting for several blocks to achieve 'economic finality' where the cost of reversal exceeds the transaction value.",
    "hint": "Waiting for confirmations to prevent re-org risk."
  },
  {
    "id": 351,
    "difficulty": "medium",
    "category": "security",
    "question": "In blockchains, what does Asymmetric cryptography use?",
    "options": [
      "A public and private key pair; the private key signs and the public key verifies",
      "A password hash only",
      "One shared secret",
      "No keys"
    ],
    "answer": 0,
    "explanation": "Asymmetric cryptography: ECDSA signatures prove ownership without revealing the private key."
  },
  {
    "id": 352,
    "difficulty": "hard",
    "category": "security",
    "question": "Why is Asymmetric cryptography central to wallets?",
    "options": [
      "Signatures prove ownership of an address without exposing the private key",
      "It removes gas fees",
      "It encrypts the entire chain",
      "It mines blocks"
    ],
    "answer": 0,
    "explanation": "Asymmetric keys derive addresses and sign transactions."
  },
  {
    "id": 353,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is Web3js?",
    "options": [
      "A wallet hardware",
      "A consensus algorithm",
      "A JavaScript library to interact with Ethereum nodes, accounts and contracts",
      "A CSS framework"
    ],
    "answer": 2,
    "explanation": "Web3js: connects to JSON-RPC providers to read state and send transactions."
  },
  {
    "id": 354,
    "difficulty": "hard",
    "category": "architecture",
    "question": "How does an app call a smart contract method with Web3js?",
    "options": [
      "Create a contract instance with the ABI and address, then call() reads or send() writes",
      "Edit the block",
      "Use fetch to the contract",
      "Mine a block locally"
    ],
    "answer": 0,
    "explanation": "Web3js contract objects use the ABI; send() requires a signed transaction and gas."
  },
  {
    "id": 355,
    "difficulty": "medium",
    "category": "architecture",
    "question": "What is Filecoin?",
    "options": [
      "A stablecoin",
      "A layer 2 rollup",
      "A wallet",
      "A decentralized storage network where providers earn tokens for storing data with proofs"
    ],
    "answer": 3,
    "explanation": "Filecoin: incentivized storage using proofs of replication and spacetime, often paired with IPFS."
  }
];

// --- TOP 100 INTERVIEW INDICES ---
// These indices point to unique, high-value questions from the bank for rapid interview prep.
// Focus: Smart Contract Security, Gas Efficiency, DeFi Logic, and L2 Scaling Architecture.
const hotsQuestions = [
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
    349,
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
    350,
    33,
    34,
    35,
    36,
    37,
    39,
    40,
    41,
    42,
    43,
    44,
    46,
    47,
    48,
    51,
    52
];
