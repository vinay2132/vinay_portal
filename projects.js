// Project data sourced from project doc. Rendered by script.js.
const PROJECTS = [
  // ---------- AI, ML & Data Science ----------
  {
    title: "Ai-Job-helper", category: "ai-ml",
    tagline: "End-to-end automated career orchestration app",
    arch: "Developed an end-to-end Automated Career Orchestration Application engineered using a decoupled client-server pattern to streamline job-hunting processes, manage user profiles, and provide algorithmic career optimizations.",
    modules: [
      ["In-Memory Parsing Engine", "Implemented unstructured text tokenizers and file-ingestion pipelines optimized to extract metadata, skills graphs, and professional chronologies from raw PDF and DOCX document streams."],
      ["Semantic Matching Framework", "Built a customized analytical module that performs vector-based vocabulary matching and context gap analysis between user experience matrices and target job description corpuses."],
      ["Generative Context Engine", "Designed multi-stage prompt orchestration trees to dynamically synthesize highly localized cover letters and custom portfolio summaries tailored to individual job requirements."]
    ],
    stack: ["Python", "LangChain", "Streamlit", "Google Gemini API", "Text Extraction Libraries"],
    repo: "Ai-Job-helper"
  },
  {
    title: "Diet_Recommender_LLM", category: "ai-ml",
    tagline: "LLM + deterministic health equations for nutrition planning",
    arch: "Designed an intelligent, rule-constrained Health and Nutrition Recommendation System that pairs Large Language Models with precise deterministic health equations for body recomposition planning.",
    modules: [
      ["Biometric Intake Engine", "Programmed an algebraic computational layer to ingest physical user metrics (mass, height, age, activity multipliers) to isolate precise BMR and TDEE."],
      ["Dynamic Macro Scoping Module", "Developed state selectors that scale macronutrient targets dynamically based on specific physical fitness goals."],
      ["Constraint-Driven Recipe Compiler", "Created rigid prompt injection frameworks ensuring the underlying generative models adhere to absolute ingredient bounds, culinary styles, and physical preparation rules."]
    ],
    stack: ["Python", "LLM Orchestration", "Prompt Engineering (Few-Shot, Guardrailing)", "Mathematical Nutrition Modeling"],
    repo: "Diet_Recommender_LLM"
  },
  {
    title: "AI-Video-Dubbing-Toolkit", category: "ai-ml",
    tagline: "Multi-tier audio-visual translation & dubbing pipeline",
    arch: "Engineered a high-throughput Multimedia Processing Pipeline designed to execute multi-tier audio-visual translation, dialogue alignment, and automated vocal re-rendering.",
    modules: [
      ["Acoustic Segmentation Core", "Built video/audio ingestion workflows that decouple background backing tracks from vocal layers and segment speech files by exact timestamps."],
      ["Neural Transcription & Translation", "Deployed automated speech recognition interfaces to convert incoming audio to localized text, running it through translation matrices while preserving context and pacing."],
      ["Synthetic Synthesis Mixer", "Integrated digital speech generation with temporal processing algorithms to dynamically compress or expand vocal durations to fit original timestamps."]
    ],
    stack: ["Python", "Speech-to-Text APIs", "Machine Translation Models", "Text-to-Speech Frameworks", "FFmpeg", "Pydub"],
    repo: "AI-Video-Dubbing-Toolkit"
  },
  {
    title: "Open-Source AI Dubbing Tools", category: "ai-ml",
    tagline: "Zero-cost, fully local multilingual dubbing pipeline",
    arch: "Developed a decentralized, open-source localized video translation architecture focusing on running zero-cost synthetic voice-over routines entirely locally.",
    modules: [
      ["Local Resource Management", "Configured specialized local inference environments to handle heavy text-and-speech open-source weights without relying on external commercial cloud services."],
      ["Temporal Script Realignment", "Wrote string alignment and parsing logic to sync localized scripts to video tracking frames, minimizing voice-to-video drift during playback."]
    ],
    stack: ["Python", "Open-Source LLMs", "Local Speech Synthesis Engines", "Audio Segmentation Frameworks"],
    repo: "Open-Source-AI-Based-Dubbing-Tools-for-Multilingual-Video-Translation-and-Voice-Over"
  },
  {
    title: "fake-news-detection-using-ML", category: "ai-ml",
    tagline: "Supervised text classification for misinformation detection",
    arch: "Engineered a fully supervised text classification pipeline utilizing statistical machine learning models to detect, classify, and weight strings on their probability of containing false or misleading information.",
    modules: [
      ["Text Engineering Pipeline", "Built text cleaning systems using regular expressions, tokenization, lemmatization, and stop-word filtering to normalize unstructured text inputs."],
      ["Vectorization Engine", "Configured sparse matrix word scoring architectures to map text strings into high-dimensional numerical spaces for classification models."],
      ["Predictive Modeling Core", "Programmed and cross-validated multi-class predictive classifiers to flag anomalous linguistic footprints and return confidence intervals for factuality."]
    ],
    stack: ["Python", "Scikit-Learn", "NLP", "TF-IDF Vectorization", "Predictive Modeling"],
    repo: "fake-news-detection-using-ML"
  },
  {
    title: "Fetal-Distress-Classification", category: "ai-ml",
    tagline: "ML diagnostic system for cardiotocography analysis",
    arch: "Developed a supervised diagnostic data science system utilizing machine learning models to classify fetal health anomalies and analyze critical diagnostic clinical trends.",
    modules: [
      ["Clinical Data Cleaning", "Programmed data transformation pipelines to parse raw cardiotocography outputs, handling missing entries and performing out-of-bounds noise filtering."],
      ["Feature Extraction & Importance", "Implemented dimension reduction and feature analysis routines to uncover core diagnostic markers indicative of physiological distress."],
      ["Diagnostic Classifier", "Trained and validated diagnostic classification trees to sort data into healthy, suspicious, or pathologic states with high precision."]
    ],
    stack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Predictive Healthcare Modeling"],
    repo: "Fetal-Distress-Classification-Based-on-Cardiotocography"
  },
  {
    title: "Gender & Age Prediction (CNN)", category: "ai-ml",
    tagline: "CNN pipeline for age & gender prediction from images",
    arch: "Built an automated multi-task Computer Vision pipeline that extracts visual data patterns from digital images to perform simultaneous demographic classification tasks.",
    modules: [
      ["Image Preprocessing Pipeline", "Programmed image handling modules including scaling, channel normalization, and bounding-box cropping routines."],
      ["Convolutional Feature Layers", "Designed a deep CNN architecture with alternating convolutional blocks, pooling mechanisms, and dropout layers to capture structural facial details."],
      ["Multi-Head Output Classifier", "Deployed a bifurcated neural head setup containing a soft-max classification branch for gender and a regression branch for age clustering."]
    ],
    stack: ["Python", "CNNs", "TensorFlow/Keras", "OpenCV", "Image Processing"],
    repo: "Deep-Learning-Approach-for-Gender-and-Age-Prediction-Using-CNN"
  },
  {
    title: "Stock-Prediction-Analysis", category: "ai-ml",
    tagline: "Time-series forecasting for financial data",
    arch: "Developed a quantitative time-series forecasting model designed to ingest financial histories, run rolling assessments, and output future price trajectories.",
    modules: [
      ["Time-Series Transformation Module", "Built data manipulation routines that map historical ticker vectors into lag-frames and sliding windows necessary for sequential model learning."],
      ["Trend & Seasonality Evaluator", "Coded mathematical decomposition algorithms to filter high-frequency market noise out of baseline momentum assets."]
    ],
    stack: ["Python", "Machine Learning", "Time-Series Forecasting", "Market API Integrations"],
    repo: "Stock-Prediction-Analysis"
  },
  {
    title: "streamlit_covid", category: "ai-ml",
    tagline: "Interactive geospatial COVID analytics dashboard",
    arch: "Designed an interactive geospatial web application built to visualize public health analytics, tracking pandemic vectors and transmission velocity across distinct geographic coordinates.",
    modules: [
      ["Dynamic Data Aggregator", "Created processing routines to consume time-stamped epidemiologic data streams and compute historical rolling averages."],
      ["Visual Graphing Layer", "Rendered complex geographical mapping blocks, case tracking charts, and interactive filtering menus within a reactive layout."]
    ],
    stack: ["Python", "Streamlit", "Pandas", "Geospatial Plotting"],
    repo: "streamlit_covid"
  },

  // ---------- Agentic AI & MCP ----------
  {
    title: "multi-agent-ML-assistant", category: "agentic-ai",
    tagline: "Multi-agent orchestration for the ML lifecycle",
    arch: "An enterprise-grade multi-agent orchestration framework designed to automate the machine learning lifecycle (data preprocessing, feature engineering, model selection, and evaluation) using collaborating intelligent agents.",
    modules: [
      ["Supervisor Agent Core", "Implements a centralized orchestration layer that parses user requests, decomposes complex ML tasks into sequential sub-tasks, and dynamically routes them to specialized worker agents."],
      ["Data Engineer & Analyst Agents", "Built autonomous modules that ingest raw datasets, evaluate data quality, execute automated imputation/scaling, and generate statistical distribution summaries."],
      ["Model Training & Tuning Agent", "Programmed an execution block that dynamically selects optimal algorithms, configures hyperparameter search spaces, and runs cross-validation pipelines."]
    ],
    stack: ["Python", "LangChain/LangGraph", "Scikit-Learn", "Pandas", "OpenAI/Gemini API", "AutoML"],
    repo: "multi-agent-ML-assistant"
  },
  {
    title: "deep-learning-rag-agent", category: "agentic-ai",
    tagline: "Production RAG system with hallucination-check loop",
    arch: "A production-ready Retrieval-Augmented Generation (RAG) system paired with deep learning evaluation loops to extract, verify, and synthesize knowledge from massive unstructured document corpuses.",
    modules: [
      ["Semantic Ingestion & Vector Pipeline", "Built document parsing pipelines utilizing hierarchical chunking strategies and deep learning embedding models to map text blocks into high-dimensional vector spaces."],
      ["Neural Retrieval Optimizer", "Developed a hybrid search layer combining dense vector embeddings with sparse keyword matching (BM25) and cross-encoder re-ranking to maximize contextual precision."],
      ["Self-Correction & Verification Loop", "Engineered an agentic verification gate that reviews generated text against retrieved source chunks to actively detect and eliminate hallucinations before final output."]
    ],
    stack: ["Python", "Vector Databases (Pinecone/Chroma/Qdrant)", "LangChain/LlamaIndex", "Embedding Models", "Re-rankers"],
    repo: "deep-learning-rag-agent"
  },
  {
    title: "letswork-mcp", category: "agentic-ai",
    tagline: "MCP server bridging local projects to LLM agents",
    arch: "A specialized implementation of the Model Context Protocol (MCP) designed to act as a secure, standardized data and tool broker between LLM applications and localized project management environments.",
    modules: [
      ["MCP Tool Server", "Engineered a standardized API layer complying with the Model Context Protocol to expose local file manipulation, execution environments, and workspace configurations safely to AI agents."],
      ["Context Bridging Engine", "Developed structural translation layers that serialize complex local repository states and workspace schemas into semantic context windows for LLM interaction."]
    ],
    stack: ["TypeScript/Node.js or Python", "MCP Specification", "Secure IPC/WebSockets", "JSON-RPC"],
    repo: "letswork-mcp"
  },
  {
    title: "supabase-mcp-ai", category: "agentic-ai",
    tagline: "MCP agent for safe Postgres/Supabase querying",
    arch: "An intelligent database orchestration agent utilizing the Model Context Protocol to allow LLMs to securely introspect schemas, execute migrations, and safely query Postgres/Supabase backends.",
    modules: [
      ["Schema Introspection Module", "Programmed automated discovery tools that expose table structures, foreign key constraints, and column data types semantically to an AI planner."],
      ["SQL Generation & Guardrail Sandbox", "Built a secure abstraction layer that converts natural language to optimized SQL queries, passing them through safety validators to block destructive commands."]
    ],
    stack: ["Python/TypeScript", "Supabase Client", "PostgreSQL", "MCP Framework", "SQL Parsing & Validation"],
    repo: "supabase-mcp-ai"
  },
  {
    title: "agenticrag", category: "agentic-ai",
    tagline: "Iterative RAG agent with dynamic tool routing",
    arch: "An advanced, iterative RAG implementation utilizing autonomous loop logic to execute multi-step research, question reformulation, and web/database tool usage to answer complex queries.",
    modules: [
      ["Query Reformulation State Machine", "Built logic to break down multi-part prompt requests into separate sub-queries, tracking state over multiple iterations."],
      ["Dynamic Tool Router", "Programmed the agent to evaluate whether its current internal knowledge base is sufficient or if it needs to dynamically invoke external search APIs, document stores, or calculation tools."]
    ],
    stack: ["Python", "LangGraph/CrewAI", "Vector Storage", "Semantic Routing APIs"],
    repo: "agenticrag"
  },

  // ---------- Full-Stack & Mobile ----------
  {
    title: "Full-Stack Quiz & Quiz Builder", category: "fullstack",
    tagline: "Multi-tier quiz builder with live grading",
    arch: "Designed and implemented a decoupled multi-tier web application featuring secure role separation for programmatic assessment creation, client testing interfaces, and live evaluation analytics.",
    modules: [
      ["Quiz Orchestration Studio", "Engineered an administrative creator panel enabling dynamic question construction, multi-choice answer matrix scaling, and variable countdown assignment parameters."],
      ["Transactional Session Engine", "Developed a client-facing testing module featuring client-side state caching to insulate user assessment sessions against abrupt networking dropouts."],
      ["Aggregation Performance Matrix", "Programmed a grading processor that evaluates submissions, modifies back-end relational records, and returns real-time class metrics."]
    ],
    stack: ["Java Spring Boot / Node.js", "JavaScript Frontend", "SQL", "REST"],
    repo: "Full-Stack-Quiz-and-Quiz-Builder-project"
  },
  {
    title: "career-ops", category: "fullstack",
    tagline: "Job-pipeline tracking & recruitment analytics",
    arch: "Developed a workflow management web application created to monitor, coordinate, and analyze employment pipelines and candidate submission cycles.",
    modules: [
      ["Pipeline Board State-Machine", "Coded an interactive status board that manages user application cards across deterministic pipeline transitions (Screening, Technical Test, Interview, Decision)."],
      ["Submission Analytics Core", "Built backend reporting systems to calculate submission-to-response conversion rates, track pipeline bottlenecks, and chart recruitment distribution channels."]
    ],
    stack: ["JavaScript/TypeScript", "Full-Stack Architecture", "Database Persistence Drivers"],
    repo: "career-ops"
  },
  {
    title: "75-hard-tracker", category: "fullstack",
    tagline: "Habit tracker with zero-tolerance streak resets",
    arch: "Engineered a persistent habit and productivity tracking system configured around deterministic compliance logic and zero-tolerance database reset rules.",
    modules: [
      ["Atomic Habit Validator", "Created an itemized compliance matrix to track mandatory daily habits (nutrition targets, fluid intake markers, dual workout sessions)."],
      ["Automated Reset Engine", "Programmed backend valuation logic or local data triggers that automatically zero out active streak counters if any mandatory field fails validation before midnight."]
    ],
    stack: ["Frontend Web Frameworks", "Local/Cloud State Sync", "Persistent Web Storage"],
    repo: "75-hard-tracker"
  },
  {
    title: "Android Notes App (Firebase)", category: "fullstack",
    tagline: "Native notes app with Firebase real-time sync",
    arch: "Designed a native mobile architecture featuring instantaneous cloud sync pipelines, secure client authentication blocks, and reactive data models.",
    modules: [
      ["Identity Management Layer", "Integrated mobile authentication flows handling identity verification, secure password resets, and authorization token lifecycles."],
      ["Real-Time Data Broker", "Modeled hierarchical NoSQL data structures that monitor local notepad changes and seamlessly sync delta updates to remote cloud databases."]
    ],
    stack: ["Android SDK", "Java/Kotlin", "Firebase Realtime Database", "Firebase Auth"],
    repo: "Android_NotesAppWithFirebase"
  },
  {
    title: "E-Portal for Marketing", category: "fullstack",
    tagline: "Multi-tenant marketing portal with lead routing",
    arch: "Built a multi-tenant corporate commercial portal configured to manage expansive digital catalogs, process incoming traffic, and track lead conversion lines.",
    modules: [
      ["Inventory Schema Controller", "Developed database-driven catalog management tools to organize asset listings, update asset pricing, and manage media paths."],
      ["Inquiry & Routing Module", "Programmed business intake forms that capture client intent data, run validation checks, and route leads to internal teams."]
    ],
    stack: ["Web Enterprise Frameworks", "Database Systems", "E-Commerce Routing"],
    repo: "DEVELOPMENT-OF-E-PORTAL-FOR-MARKETING"
  },
  {
    title: "ramp-fe-challenge-solved", category: "fullstack",
    tagline: "Frontend perf & async-bug fixes for Ramp's FE challenge",
    arch: "Engineered front-end system enhancements targeted at fixing browser rendering lags, sorting out asynchronous data timing bugs, and tuning user interaction states.",
    modules: [
      ["DOM Virtualization Optimization", "Engineered custom list recycling and rendering rules to parse hefty nested data feeds without choking browser execution threads."],
      ["Race Condition Resolution", "Re-architected asynchronous data fetching streams to enforce layout stability, ensuring late API returns do not break active user views."]
    ],
    stack: ["JavaScript Performance", "Complex State Orchestration", "Frontend Engine Tuning"],
    repo: "ramp-fe-challenge-solved-main"
  },
  {
    title: "Game_js", category: "fullstack",
    tagline: "Browser-native 2D game with canvas rendering",
    arch: "Developed an interactive, browser-native 2D simulation game run via an optimized asynchronous clock loops framework.",
    modules: [
      ["Vector Collision Architecture", "Developed geometric collision checking routines that calculate relative object bounds and vector shifts per tick frame."],
      ["Canvas Graphics Stream", "Coded dynamic rendering handlers that update and draw movement changes across the layout container frame-by-frame."]
    ],
    stack: ["Vanilla JavaScript", "HTML5 Canvas", "RequestAnimationFrame", "DOM Manipulation"],
    repo: "Game_js"
  },
  {
    title: "Grocery-On-Hand", category: "fullstack",
    tagline: "Kitchen inventory tracker with expiry alerts",
    arch: "Built a localized inventory management web application tracking kitchen assets, expiration timelines, and shopping list generation.",
    modules: [
      ["Expiration Alert Engine", "Programmed comparison logic that matches current date stamps against asset records to trigger warning signals for items nearing expiration."],
      ["Dynamic Procurement List Builder", "Developed automated routines that flag depleted ingredients and instantly compile clean, exportable shopping checklists."]
    ],
    stack: ["Frontend Application Frameworks", "Local State Caching", "Client-Side Data Handling"],
    repo: "Grocery-On-Hand"
  },

  // ---------- Production Full-Stack & Microservices ----------
  {
    title: "resume-generator-pro", category: "production",
    tagline: "Automated ATS-optimized resume generator",
    arch: "A decoupled, high-throughput web platform built to automate the generation, styling, and structural tailoring of professional resumes based on job description matching arrays.",
    modules: [
      ["Dynamic LaTeX/HTML Compiler", "Developed a backend rendering engine that converts structured JSON user data into perfectly formatted ATS-optimized PDF layouts using dynamic styling templates."],
      ["AI Tailoring Optimization Engine", "Integrated asynchronous API hooks to parse target job descriptions, extract core skill gaps, and suggest targeted copy updates to bullet points."]
    ],
    stack: ["Node.js/Java Spring Boot", "React/Next.js", "LaTeX, Puppeteer", "REST APIs"],
    repo: "resume-generator-pro"
  },
  {
    title: "LetsWork", category: "production",
    tagline: "Real-time project management & productivity portal",
    arch: "A full-stack, enterprise-grade project management and workforce productivity portal engineered to handle team task allocation, time tracking, and performance analytics.",
    modules: [
      ["Real-Time Collaborative Workspace", "Built reactive state layers enabling multiple users to update task boards, reassign tickets, and sync progress indicators without view reloads."],
      ["Analytics & Reporting Dashboard", "Programmed background worker routines to calculate project velocity, track sprint completion metrics, and output visual performance charts."]
    ],
    stack: ["MERN/PERN or Spring Boot + React", "WebSocket Infrastructure", "Relational/NoSQL DBs"],
    repo: "LetsWork"
  },
  {
    title: "Add_The_Damn_Bill", category: "production",
    tagline: "Bill-splitting app with OCR receipt ingestion",
    arch: "A mobile-responsive financial expense splitting and tracking application featuring automated bill parsing, ledger accounting, and transactional integrity.",
    modules: [
      ["OCR Receipt Ingestion Module", "Integrated optical character recognition pipelines to parse physical receipts, identify line items, and extract totals automatically."],
      ["Graph-Based Debt Simplification", "Programmed transaction settlement algorithms to minimize the total number of cash transfers required across multi-user groups."]
    ],
    stack: ["React Native / Flutter / Web", "Cloud Ingestion APIs", "Accounting Ledger Logic"],
    repo: "Add_The_Damn_Bill"
  },
  {
    title: "Sync-flow", category: "production",
    tagline: "Event-driven data sync with conflict resolution",
    arch: "An event-driven data synchronization engine designed to handle continuous state replication and conflict resolution across distributed client-server systems.",
    modules: [
      ["Delta Sync Pipeline", "Built optimization algorithms to track database updates and transmit only tiny data diffs (deltas) over the wire, radically reducing bandwidth consumption."],
      ["Conflict Resolution Matrix", "Programmed deterministic multi-user tracking logic (last-write-wins or vector clocks) to smoothly resolve data collisions."]
    ],
    stack: ["Node.js/Go", "Kafka/RabbitMQ or WebSockets", "Redis"],
    repo: "Sync-flow"
  },

  // ---------- Infra & Systems ----------
  {
    title: "ProKabaddiLeague-DB", category: "systems",
    tagline: "Normalized sports analytics data warehouse",
    arch: "Designed and deployed a normalized data warehouse and sports analytics database built to store multi-tiered performance files, match logs, and athletic rankings.",
    modules: [
      ["Relational Entity Layout", "Designed a normalized relational database schema utilizing primary and foreign key constraints to map athletic teams, player catalogs, match contexts, and historical statistics."],
      ["High-Performance Aggregation Queries", "Engineered analytical stored procedures, intricate multi-table JOIN configurations, and window tracking queries to parse seasonal performance metrics."]
    ],
    stack: ["SQL", "RDBMS", "Advanced Indexing", "Query Optimization"],
    repo: "ProKabaddiLeague-DB"
  },
  {
    title: "Rls-Demo", category: "systems",
    tagline: "Row-level security multi-tenant DB prototype",
    arch: "Built an isolated backend system prototype proving the viability of engine-level multi-tenant database separation without writing filtering rules in the application web code.",
    modules: [
      ["Identity Policy Evaluator", "Designed system access logic that intercepts user session roles at the database layer and filters available records accordingly."],
      ["Cross-Tenant Leakage Testing", "Configured testing setups to simulate penetration tries across tenant borders, ensuring database queries return empty arrays instead of throwing verbose system errors."]
    ],
    stack: ["Enterprise DB Security", "Row-Level Security (RLS)", "Secure DB Isolation Testing"],
    repo: "Rls-Demo"
  },
  {
    title: "my_portfolio", category: "systems",
    tagline: "Responsive personal engineering portfolio site",
    arch: "Developed and deployed a responsive, client-facing professional engineering hub designed to display active project code, outline skills benchmarks, and capture inbound lead messages.",
    modules: [
      ["Responsive Layout Adapter", "Programmed flexible display wrappers ensuring layouts adapt flawlessly across high-resolution displays down to mobile devices."],
      ["Dynamic Skill Router", "Programmed asset arrays mapping system badges, project descriptions, and source code links dynamically into cleanly structured dashboard components."]
    ],
    stack: ["HTML5", "CSS3", "Modern JavaScript", "Static Hosting Pipeline"],
    repo: "my_portfolio"
  },
  {
    title: "contact", category: "systems",
    tagline: "Microservice for secure contact-form ingestion",
    arch: "Engineered a decoupled backend microservice created to securely ingest contact entries, parse form variables, and handle alert distribution paths.",
    modules: [
      ["Payload Sanitation Handler", "Developed input validation filters that parse inbound API bodies, strip out dangerous script tags, and prevent injection attacks."],
      ["Notification Broker", "Coded microservice routing logic to pass valid form information safely into downstream email notification pipelines."]
    ],
    stack: ["Lightweight Server Frameworks", "API Routing Architecture", "Input Cleansing Core"],
    repo: "contact"
  },
  {
    title: "servers", category: "systems",
    tagline: "Docker/Nginx infra & reverse-proxy configs",
    arch: "A centralized infrastructure and configuration repository managing decoupled container orchestration, reverse proxy routing, and microservice server balancing.",
    modules: [
      ["Reverse Proxy & SSL Termination", "Programmed routing rules to safely capture external web requests, handle SSL handshakes, and distribute load across downstream service ports."],
      ["Containerized Deployment Environments", "Maintained configuration blueprints to rapidly provision identical development, testing, and production microservice boundaries."]
    ],
    stack: ["Docker", "Docker Compose", "Nginx/Caddy", "Linux Shell Scripting"],
    repo: "servers"
  },
  {
    title: "AetherFlow", category: "systems",
    tagline: "Backend workflow engine with circuit breakers",
    arch: "A high-throughput backend data streaming or workflow orchestration utility engine built to manage pipeline scheduling, execution paths, and error circuit breaking.",
    modules: [
      ["Asynchronous Queue Manager", "Developed highly efficient queuing loops designed to throttle heavy workloads, ensuring fast-running API tasks aren't blocked by heavy data migrations."],
      ["Fault-Tolerant Circuit Breaker", "Coded automated health checking gates that instantly isolate failing network services, preventing cascading failures across the backend."]
    ],
    stack: ["Go or Java/Python", "Event Loop Architectures", "Thread Pool Customization"],
    repo: "AetherFlow"
  }
];
