const SEARCH_INDEX = [{"id": "mod-a-q1", "tag": "Q1", "title": "Tell me about your project end to end.", "modTitle": "Interview Coaching, Strategy & Project Overview", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "✅  Answer  \n Company: Global Energy &amp; Utility Enterprise — largest US electric utility. \n Platform: Customer Integration Platform connecting Salesforce Em"}, {"id": "mod-a-q2", "tag": "Q2", "title": "What is API-led connectivity and why did you use it?", "modTitle": "Interview Coaching, Strategy & Project Overview", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "✅  Answer  \n API-led organizes integrations into 3 reusable layers eliminating point-to-point coupling: \n LAYER PURPOSE ENTERPRISE EXAMPLE \n XAPI — \n Experien"}, {"id": "mod-a-q3", "tag": "Q3", "title": "What technology did you work with? (Full tech stack)", "modTitle": "Interview Coaching, Strategy & Project Overview", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "✅  Answer  \n \n   \n       CATEGORY  TECHNOLOGY  DETAILS   \n       Runtime  Mule  4.x 4.4.0, 4.6.9, 4.9 on CloudHub 2.0    API  Design  RAML 1.0 API-first; APIK"}, {"id": "mod-a-q1", "tag": "Q1", "title": "What Salesforce Connector operations have you used?", "modTitle": "Interview Coaching, Strategy & Project Overview", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "✅  Answer  \n Operations · Upsert · SOQL · Bulk API 2.0 · Governor Limits · JWT Bearer"}, {"id": "mod-b-q3", "tag": "Q3", "title": "What technology did you work with? (Full tech stack)", "modTitle": "Salesforce Connector & Bulk API 2.0", "category": "Salesforce & Enterprise Connectors", "role": "Developer", "snippet": "✅  Answer  \n \n   \n       CATEGORY  TECHNOLOGY  DETAILS   \n       Runtime  Mule  4.x 4.4.0, 4.6.9, 4.9 on CloudHub 2.0    API  Design  RAML 1.0 API-first; APIK"}, {"id": "mod-b-q1", "tag": "Q1", "title": "What Salesforce Connector operations have you used?", "modTitle": "Salesforce Connector & Bulk API 2.0", "category": "Salesforce & Enterprise Connectors", "role": "Developer", "snippet": "✅  Answer  \n Operations · Upsert · SOQL · Bulk API 2.0 · Governor Limits · JWT Bearer \n OPERATION WHEN TO USE OUR USAGE IN PRODUCTION \n Query SOQL read Accoun"}, {"id": "mod-b-q2", "tag": "Q2", "title": "What is Salesforce Bulk API? When do you use it?", "modTitle": "Salesforce Connector & Bulk API 2.0", "category": "Salesforce & Enterprise Connectors", "role": "Developer", "snippet": "✅  Answer  \n Bulk API loads/extracts millions of records asynchronously. Does NOT count against the 150 API \n calls/hour governor limit. \n Bulk API 1.0: XML-b"}, {"id": "mod-b-q3", "tag": "Q3", "title": "How do you handle Salesforce governor limits?", "modTitle": "Salesforce Connector & Bulk API 2.0", "category": "Salesforce & Enterprise Connectors", "role": "Developer", "snippet": "✅  Answer  \n 150 API calls/user/hour (sandbox: unlimited). Mitigations: \n Bulk API — does NOT count toward the 150/hour limit \n ObjectStore caching — cache fr"}, {"id": "mod-b-q4", "tag": "Q4", "title": "JWT Bearer vs Username-Password auth for Salesforce — which do you use?", "modTitle": "Salesforce Connector & Bulk API 2.0", "category": "Salesforce & Enterprise Connectors", "role": "Developer", "snippet": "✅  Answer  \n Username-Password: requires actual user credentials. Password changes break integration, account \n can lock, appears as user in audit logs — neve"}, {"id": "mod-b-q5", "tag": "Q5", "title": "What is an External ID in Salesforce? How is it used in Upsert?", "modTitle": "Salesforce Connector & Bulk API 2.0", "category": "Salesforce & Enterprise Connectors", "role": "Developer", "snippet": ""}, {"id": "mod-c-q1", "tag": "Q1", "title": "What are Platform Events? How do you subscribe in MuleSoft?", "modTitle": "Platform Events & Change Data Capture (CDC)", "category": "Salesforce & Enterprise Connectors", "role": "Developer / Senior", "snippet": "✅  Answer  \n Platform Events: Custom events you define in Salesforce and publish explicitly. Business events: \n Order Closed, Payment Processed. \n CDC (Change"}, {"id": "mod-c-q2", "tag": "Q2", "title": "What is event retention? What if Mule app is down >72 hours?", "modTitle": "Platform Events & Change Data Capture (CDC)", "category": "Salesforce & Enterprise Connectors", "role": "Developer / Senior", "snippet": "✅  Answer  \n Salesforce Platform Events and CDC are retained for 72 hours. If MuleSoft subscriber restarts with \n replayId=&quot;-2&quot; , it receives all ev"}, {"id": "mod-c-q3", "tag": "Q3", "title": "How do you handle duplicate Platform Events (at-least-once delivery)?", "modTitle": "Platform Events & Change Data Capture (CDC)", "category": "Salesforce & Enterprise Connectors", "role": "Developer / Senior", "snippet": "✅  Answer  \n Salesforce uses at-least-once delivery — duplicates are possible. Implement idempotency with \n ObjectStore: \n Idempotency Pattern \n /- 1. Extract"}, {"id": "mod-c-q4", "tag": "Q4", "title": "Difference between Platform Events and CDC?", "modTitle": "Platform Events & Change Data Capture (CDC)", "category": "Salesforce & Enterprise Connectors", "role": "Developer / Senior", "snippet": "✅  Answer  \n ASPECT PLATFORM EVENTS CDC \n Who \n publishes \n You publish explicitly via Apex, Flow, or \n MuleSoft \n Salesforce fires automatically on any recor"}, {"id": "mod-d-q1", "tag": "Q1", "title": "Explain the Salesforce JWT Bearer authentication flow step by step.", "modTitle": "OAuth 2.0 & JWT Bearer Token Flow", "category": "Security & Connectivity", "role": "Senior / Lead", "snippet": "✅  Answer  \n  1.  Create a Connected App in Salesforce Setup  \n  2.  Generate RSA key pair: openssl genrsa -out private.pem 2048  → create cert from public ke"}, {"id": "mod-d-q2", "tag": "Q2", "title": "How do you rotate the JWT signing key without downtime?", "modTitle": "OAuth 2.0 & JWT Bearer Token Flow", "category": "Security & Connectivity", "role": "Senior / Lead", "snippet": "✅  Answer  \n Salesforce supports multiple active certificates on a Connected App. Rotation process: \n  1.  Generate new RSA key pair  \n Connected App · RSA ke"}, {"id": "mod-d-q3", "tag": "Q3", "title": "Can the same Connected App be used across multiple environments?", "modTitle": "OAuth 2.0 & JWT Bearer Token Flow", "category": "Security & Connectivity", "role": "Senior / Lead", "snippet": "✅  Answer  \n Technically yes — but best practice is separate Connected Apps per environment (sandbox, \n production). Reasons: different Salesforce orgs have d"}, {"id": "mod-d-q1", "tag": "Q1", "title": "How do you integrate MuleSoft with AWS (S3, SQS, DynamoDB)?", "modTitle": "OAuth 2.0 & JWT Bearer Token Flow", "category": "Security & Connectivity", "role": "Senior / Lead", "snippet": "✅  Answer  \n AWS SERVICE MULESOFT APPROACH OUR USAGE IN PRODUCTION"}, {"id": "mod-d-s3", "tag": "S3", "title": "Amazon S3 Connector — createObject,", "modTitle": "OAuth 2.0 & JWT Bearer Token Flow", "category": "Security & Connectivity", "role": "Senior Developer", "snippet": "getObject, listObjects \n Dynamic DWL file load at runtime; config \n YAML storage \n DynamoDB HTTP Request + SigV4 auth (or dedicated \n connector) \n UCDP Custome"}, {"id": "mod-d-s3", "tag": "S3", "title": "· SQS · DynamoDB · Lambda · SigV4 · Secrets Manager", "modTitle": "OAuth 2.0 & JWT Bearer Token Flow", "category": "Security & Connectivity", "role": "Senior Developer", "snippet": ""}, {"id": "mod-e-q3", "tag": "Q3", "title": "Can the same Connected App be used across multiple environments?", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n Technically yes — but best practice is separate Connected Apps per environment (sandbox, \n production). Reasons: different Salesforce orgs have d"}, {"id": "mod-e-q1", "tag": "Q1", "title": "How do you integrate MuleSoft with AWS (S3, SQS, DynamoDB)?", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n AWS SERVICE MULESOFT APPROACH OUR USAGE IN PRODUCTION"}, {"id": "mod-e-s3", "tag": "S3", "title": "Amazon S3 Connector — createObject,", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Senior Developer", "snippet": "getObject, listObjects \n Dynamic DWL file load at runtime; config \n YAML storage \n DynamoDB HTTP Request + SigV4 auth (or dedicated \n connector) \n UCDP Custome"}, {"id": "mod-e-s3", "tag": "S3", "title": "· SQS · DynamoDB · Lambda · SigV4 · Secrets Manager", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Senior Developer", "snippet": "Auth for all: AWS Access Key ID + Secret Access Key stored as Secure Properties (AES-CBC encrypted). \n Connectors handle SigV4 signing automatically."}, {"id": "mod-e-q2", "tag": "Q2", "title": "What is the difference between Amazon SQS and Anypoint MQ?", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n Amazon SQS \n AWS-native messaging \n Best when entire stack is AWS \n Tight IAM role integration \n Can trigger AWS Lambda directly \n Standard: at-l"}, {"id": "mod-e-q3", "tag": "Q3", "title": "How do you handle SQS visibility timeout in MuleSoft processing?", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n Visibility timeout is the period a message is hidden from other consumers after being received. If \n MuleSoft processing time exceeds this timeou"}, {"id": "mod-e-q1", "tag": "Q1", "title": "Describe a full Salesforce + SAP integration end to end.", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n Scenario: Salesforce Opportunity Closed-Won → SAP Sales Order created → SAP Order ID written \n back to Salesforce. \n 📋  STEP-BY-STEP FLOW \n  1."}, {"id": "mod-e-q2", "tag": "Q2", "title": "How do you prevent infinite loops in bidirectional Salesforce↔SAP sync?", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n Challenge: updating SAP triggers a Salesforce CDC event which triggers SAP update again — infinite \n loop. \n Scenario · Data flow · Error handlin"}, {"id": "mod-f-q1", "tag": "Q1", "title": "Describe a full Salesforce + SAP integration end to end.", "modTitle": "SAP + Salesforce End-to-End Integration", "category": "Salesforce & Enterprise Connectors", "role": "Senior / Architect", "snippet": "✅  Answer  \n Scenario: Salesforce Opportunity Closed-Won → SAP Sales Order created → SAP Order ID written \n back to Salesforce. \n 📋  STEP-BY-STEP FLOW \n  1."}, {"id": "mod-f-q2", "tag": "Q2", "title": "How do you prevent infinite loops in bidirectional Salesforce↔SAP sync?", "modTitle": "SAP + Salesforce End-to-End Integration", "category": "Salesforce & Enterprise Connectors", "role": "Senior / Architect", "snippet": "✅  Answer  \n Challenge: updating SAP triggers a Salesforce CDC event which triggers SAP update again — infinite \n loop. \n Scenario · Data flow · Error handlin"}, {"id": "mod-f-q3", "tag": "Q3", "title": "How do you handle SAP being down when a Platform Event arrives?", "modTitle": "SAP + Salesforce End-to-End Integration", "category": "Salesforce & Enterprise Connectors", "role": "Senior / Architect", "snippet": "✅  Answer  \n Synchronous flows: Until Successful with 3 retries + 30s delay. After exhaustion → On Error Continue \n → update Salesforce with SAP_Error_Status_"}, {"id": "mod-f-q1", "tag": "Q1", "title": "What is Scatter-Gather? How does it work?", "modTitle": "SAP + Salesforce End-to-End Integration", "category": "Salesforce & Enterprise Connectors", "role": "Senior / Architect", "snippet": "✅  Answer  \n Scatter-Gather executes multiple routes simultaneously in parallel and waits for all to complete. The \n payload going into each route is the same"}, {"id": "mod-g-q3", "tag": "Q3", "title": "How do you handle SAP being down when a Platform Event arrives?", "modTitle": "Scatter-Gather Router Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n Synchronous flows: Until Successful with 3 retries + 30s delay. After exhaustion → On Error Continue \n → update Salesforce with SAP_Error_Status_"}, {"id": "mod-g-q1", "tag": "Q1", "title": "What is Scatter-Gather? How does it work?", "modTitle": "Scatter-Gather Router Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n Scatter-Gather executes multiple routes simultaneously in parallel and waits for all to complete. The \n payload going into each route is the same"}, {"id": "mod-g-q2", "tag": "Q2", "title": "What is the output type of Scatter-Gather? How do you merge results?", "modTitle": "Scatter-Gather Router Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n Output is an array (list) of route results. Each element has a payload  key with that route&#x27;s payload, \n and an attributes  key with HTTP at"}, {"id": "mod-g-q3", "tag": "Q3", "title": "If one route in Scatter-Gather fails, what happens to the others?", "modTitle": "Scatter-Gather Router Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n By default: if any route fails, Scatter-Gather throws a MULE:COMPOSITE_ROUTING  error and the results \n of all routes (including successful ones)"}, {"id": "mod-g-q4", "tag": "Q4", "title": "Scatter-Gather vs Parallel ForEach — when to use which?", "modTitle": "Scatter-Gather Router Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": ""}, {"id": "mod-h-q1", "tag": "Q1", "title": "What is ForEach? How does it work and what is its output?", "modTitle": "ForEach & Parallel ForEach Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n ForEach iterates over a collection sequentially — one item at a time. For each iteration: payload  = \n current item, vars.counter  = current inde"}, {"id": "mod-h-q2", "tag": "Q2", "title": "If a record fails inside ForEach, what happens? How do you handle it?", "modTitle": "ForEach & Parallel ForEach Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n By default: ForEach stops processing and propagates the error to the flow&#x27;s error handler. All \n subsequent records are abandoned. \n Fix: Wr"}, {"id": "mod-h-q3", "tag": "Q3", "title": "What is Parallel ForEach? How is it different from ForEach?", "modTitle": "ForEach & Parallel ForEach Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n Parallel ForEach processes all collection items simultaneously using thread pool. Dramatically faster \n for large collections when items are inde"}, {"id": "mod-h-q1", "tag": "Q1", "title": "What is a Batch Job? What are its phases?", "modTitle": "ForEach & Parallel ForEach Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n Batch Job · Phases · Block size · Error handling · On Complete"}, {"id": "mod-i-q3", "tag": "Q3", "title": "What is Parallel ForEach? How is it different from ForEach?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✅  Answer  \n Parallel ForEach processes all collection items simultaneously using thread pool. Dramatically faster \n for large collections when items are inde"}, {"id": "mod-i-q1", "tag": "Q1", "title": "What is a Batch Job? What are its phases?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✅  Answer  \n Batch Job · Phases · Block size · Error handling · On Complete \n Batch Job processes large datasets by splitting them into records and processing"}, {"id": "mod-i-q2", "tag": "Q2", "title": "What is Batch Aggregator and when do you use it?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✅  Answer  \n Batch Aggregator groups individual records back into a collection of a specified size before \n processing. Used in the last Batch Step to do bulk"}, {"id": "mod-i-q3", "tag": "Q3", "title": "What is maxFailedRecords in Batch Job? What is the default?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✅  Answer  \n maxFailedRecords  controls when Batch Job stops processing due to too many failures. Default is 0 \n — any single record failure stops the entire"}, {"id": "mod-i-q4", "tag": "Q4", "title": "What happens in the On Complete phase? What data is available?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✅  Answer  \n On Complete runs after all records have been processed (success or failure). The payload  in On \n Complete is a BatchJobResult  object with: \n pa"}, {"id": "mod-i-q5", "tag": "Q5", "title": "How do you roll back records in batch processing?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✅  Answer  \n Batch processing does NOT have automatic XA-style rollback. For rollback patterns: \n Database transactions: Use a Try scope within a Batch Step w"}, {"id": "mod-i-q1", "tag": "Q1", "title": "What is Until Successful? When do you use it?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✅  Answer  \n Until Successful retries the processors inside it until they succeed or until the max retries count is \n reached. Use for transient failures — ne"}, {"id": "mod-j-q1", "tag": "Q1", "title": "What is Until Successful? When do you use it?", "modTitle": "Until Successful Scope & Resiliency", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n Until Successful retries the processors inside it until they succeed or until the max retries count is \n reached. Use for transient failures — ne"}, {"id": "mod-j-q2", "tag": "Q2", "title": "What happens when Until Successful exhausts all retries?", "modTitle": "Until Successful Scope & Resiliency", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n When all retries are exhausted, Until Successful throws MULE:RETRY_EXHAUSTED . This error bubbles up \n to the flow&#x27;s error handler (or the e"}, {"id": "mod-j-q3", "tag": "Q3", "title": "Until Successful vs reconnection strategy — what is the difference?", "modTitle": "Until Successful Scope & Resiliency", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n ASPECT UNTIL SUCCESSFUL RECONNECTION STRATEGY \n What it \n retries \n Any processor inside it (HTTP requests, DB calls, \n transforms) \n Only connec"}, {"id": "mod-k-q1", "tag": "Q1", "title": "What is Choice Router? How does it work?", "modTitle": "Choice Router, First Successful & Async Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n Choice Router evaluates conditions sequentially and routes the message to the FIRST matching route. \n Only one route executes. A default route ha"}, {"id": "mod-k-q2", "tag": "Q2", "title": "What is the difference between Choice Router and First Successful?", "modTitle": "Choice Router, First Successful & Async Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n ASPECT CHOICE ROUTER FIRST SUCCESSFUL \n Routing \n criteria \n Expression evaluation (condition) First route that doesn&#x27;t throw an error \n Use"}, {"id": "mod-k-q3", "tag": "Q3", "title": "What is Async Scope? When do you use it?", "modTitle": "Choice Router, First Successful & Async Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✅  Answer  \n Async Scope executes its processors in a separate thread without blocking the main flow. The main \n flow continues and returns a response immedia"}, {"id": "mod-l-q1", "tag": "Q1", "title": "What is the difference between On Error Continue and On Error Propagate?", "modTitle": "Error Handling Deep Dive (Continue vs Propagate)", "category": "Error Handling & Resiliency", "role": "Developer / Senior", "snippet": "✅  Answer  \n ASPECT ON ERROR CONTINUE ON ERROR PROPAGATE \n After handler \n executes \n Flow continues normally, returns success \n response \n Error propagates t"}, {"id": "mod-l-q2", "tag": "Q2", "title": "What is a Try Scope? When do you use it?", "modTitle": "Error Handling Deep Dive (Continue vs Propagate)", "category": "Error Handling & Resiliency", "role": "Developer / Senior", "snippet": "✅  Answer  \n Try Scope provides localized error handling for a specific group of processors within a flow. Errors in \n the Try scope are caught there — they d"}, {"id": "mod-l-q3", "tag": "Q3", "title": "What are the standard MuleSoft error types?", "modTitle": "Error Handling Deep Dive (Continue vs Propagate)", "category": "Error Handling & Resiliency", "role": "Developer / Senior", "snippet": "✅  Answer  \n ERROR TYPE CAUSE TYPICAL RESPONSE \n HTTP:NOT_FOUND HTTP 404 from downstream Return empty response or 404 \n HTTP:UNAUTHORIZED HTTP 401 — auth fail"}, {"id": "mod-l-q4", "tag": "Q4", "title": "How do you propagate an error from SAPI to XAPI through PAPI?", "modTitle": "Error Handling Deep Dive (Continue vs Propagate)", "category": "Error Handling & Resiliency", "role": "Developer / Senior", "snippet": "✅  Answer  \n Use on-error-propagate  at each layer. The error message (and payload) propagates up the call chain \n automatically. \n Enterprise Pattern: SAPI c"}, {"id": "mod-l-q5", "tag": "Q5", "title": "What is the standard error response format you use across all Enterprise APIs?", "modTitle": "Error Handling Deep Dive (Continue vs Propagate)", "category": "Error Handling & Resiliency", "role": "Developer / Senior", "snippet": "✅  Answer  \n DataWeave — Standard Error Response \n \n   \n     DWL \n     \n           Test in Playground  \n       \n              \n         Copy"}, {"id": "mod-m-q1", "tag": "Q1", "title": "What is Anypoint MQ? Difference between Queue and Exchange?", "modTitle": "Anypoint MQ Deep Dive (Queues, Exchanges, DLQ)", "category": "AWS & Messaging", "role": "Developer / Senior", "snippet": "✅  Answer  \n Anypoint MQ is MuleSoft&#x27;s cloud-based messaging service for async integration. It provides point-to- \n point (Queue) and publish-subscribe ("}, {"id": "mod-m-q2", "tag": "Q2", "title": "What is MANUAL acknowledgement mode? Why do you use it?", "modTitle": "Anypoint MQ Deep Dive (Queues, Exchanges, DLQ)", "category": "AWS & Messaging", "role": "Developer / Senior", "snippet": "✅  Answer  \n In AUTO mode: message is ACKed immediately on receipt — if processing fails, message is \n permanently lost. In MANUAL mode: you explicitly call a"}, {"id": "mod-m-q3", "tag": "Q3", "title": "How do you implement idempotency with Anypoint MQ?", "modTitle": "Anypoint MQ Deep Dive (Queues, Exchanges, DLQ)", "category": "AWS & Messaging", "role": "Developer / Senior", "snippet": "✅  Answer  \n At-least-once delivery means duplicates are possible. ObjectStore idempotency pattern: \n  1.  Extract business key (transactionId) from MQ messag"}, {"id": "mod-m-q4", "tag": "Q4", "title": "How did you implement cross-region DR with Anypoint MQ in your Enterprise Architecture?", "modTitle": "Anypoint MQ Deep Dive (Queues, Exchanges, DLQ)", "category": "AWS & Messaging", "role": "Developer / Senior", "snippet": "✅  Answer  \n We used a fan-out pattern: two Anypoint MQ configs in global.xml — one for US-East-1 (primary) \n and one for US-East-2 (secondary). The MQ publis"}, {"id": "mod-m-q5", "tag": "Q5", "title": "Is VM connector reliable? How does it compare to Anypoint MQ?", "modTitle": "Anypoint MQ Deep Dive (Queues, Exchanges, DLQ)", "category": "AWS & Messaging", "role": "Developer / Senior", "snippet": "✅  Answer  \n ASPECT VM CONNECTOR ANYPOINT MQ \n Durability In-memory only — messages lost on app \n crash/restart \n Cloud-persistent — messages survive restarts"}, {"id": "mod-n-q1", "tag": "Q1", "title": "What is ObjectStore? What are the types?", "modTitle": "ObjectStore Deep Dive (OSv2, TTL, Watermarking)", "category": "ObjectStore & API Governance", "role": "Developer", "snippet": "✅  Answer  \n ObjectStore is a key-value store built into Mule for persisting state between executions. Used for \n watermarking, idempotency, caching, and sess"}, {"id": "mod-n-q2", "tag": "Q2", "title": "What is watermarking? How does ObjectStore store watermark values?", "modTitle": "ObjectStore Deep Dive (OSv2, TTL, Watermarking)", "category": "ObjectStore & API Governance", "role": "Developer", "snippet": "✅  Answer  \n Watermarking tracks the last-processed position (timestamp, ID, sequence number) so a scheduled \n job only processes new/changed records since th"}, {"id": "mod-n-q3", "tag": "Q3", "title": "What is cache scope? How is it different from ObjectStore?", "modTitle": "ObjectStore Deep Dive (OSv2, TTL, Watermarking)", "category": "ObjectStore & API Governance", "role": "Developer", "snippet": "✅  Answer  \n ASPECT CACHE SCOPE OBJECTSTORE \n Purpose Avoid repeated external calls for same input Persist arbitrary state between executions"}, {"id": "mod-o-q1", "tag": "Q1", "title": "What is RAML? Why do you design API specs before coding?", "modTitle": "API-led Connectivity Deep Dive (RAML, Policies)", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✅  Answer  \n RAML (RESTful API Modeling Language) is a YAML-based specification language for describing REST \n APIs. Design-first approach: write RAML in Anyp"}, {"id": "mod-o-q2", "tag": "Q2", "title": "What is API AutoDiscovery? Why is it important?", "modTitle": "API-led Connectivity Deep Dive (RAML, Policies)", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✅  Answer  \n API AutoDiscovery links a deployed Mule application to an API definition in API Manager. Without \n AutoDiscovery, Mule app cannot enforce API Man"}, {"id": "mod-o-q3", "tag": "Q3", "title": "What policies have you used in API Manager?", "modTitle": "API-led Connectivity Deep Dive (RAML, Policies)", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✅  Answer  \n POLICY PURPOSE USAGE IN ENTERPRISE PRODUCTION \n Client ID \n Enforcement \n Require valid client_id/secret in each \n request \n All XAPIs — each Sal"}, {"id": "mod-o-q4", "tag": "Q4", "title": "What is Anypoint Exchange? How do you use it?", "modTitle": "API-led Connectivity Deep Dive (RAML, Policies)", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✅  Answer  \n Anypoint Exchange is MuleSoft&#x27;s asset marketplace where teams publish and discover reusable \n assets: API specs (RAML), connectors, template"}, {"id": "mod-p-q1", "tag": "Q1", "title": "How do you write MUnit tests? How do you mock external calls?", "modTitle": "MUnit Testing Framework & Mocking", "category": "Testing & CI/CD", "role": "Developer / Senior", "snippet": "✅  Answer  \n MUnit is MuleSoft&#x27;s unit testing framework. Tests mock all external systems — no actual \n SAP/Salesforce/DB calls in unit tests. \n MUnit Tes"}, {"id": "mod-p-q2", "tag": "Q2", "title": "How do you test failure scenarios in MUnit?", "modTitle": "MUnit Testing Framework & Mocking", "category": "Testing & CI/CD", "role": "Developer / Senior", "snippet": "✅  Answer  \n Mock the processor to throw an error instead of returning success: \n MUnit — Mock HTTP 500 error from SAP"}, {"id": "mod-p-q3", "tag": "Q3", "title": "How do you write an MUnit test if a Scheduler triggers the flow?", "modTitle": "MUnit Testing Framework & Mocking", "category": "Testing & CI/CD", "role": "Developer / Senior", "snippet": "✅  Answer  \n Schedulers cannot be triggered directly in MUnit. Solution: extract the Scheduler flow logic into a \n sub-flow, test the sub-flow directly. \n Pat"}, {"id": "mod-p-q4", "tag": "Q4", "title": "How do you enforce MUnit coverage and what tools do you use?", "modTitle": "MUnit Testing Framework & Mocking", "category": "Testing & CI/CD", "role": "Developer / Senior", "snippet": "✅  Answer  \n In our Enterprise Architecture: SonarQube quality gate blocks any build with coverage below 85%. GitHub Actions CI/CD \n runs MUnit tests on every"}, {"id": "mod-p-q1", "tag": "Q1", "title": "What security standards do you follow in every API?", "modTitle": "MUnit Testing Framework & Mocking", "category": "Testing & CI/CD", "role": "Developer / Senior", "snippet": "Security · Naming conventions · Structured logging · Performance"}, {"id": "mod-q-q2", "tag": "Q2", "title": "What naming conventions do you follow?", "modTitle": "Production Best Practices & Naming Standards", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✅  Answer  \n ELEMENT CONVENTION EXAMPLE \n Flow names kebab-case + HTTP method get-billing-inquiry-flow \n Sub-flows descriptive + suffix validate-request-sub-f"}, {"id": "mod-q-q1", "tag": "Q1", "title": "Describe your Billing Inquiry flow end to end.", "modTitle": "Production Best Practices & Naming Standards", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✅  Answer  \n 📋  BILLING INQUIRY FLOW — GET /BILLING/INQUIRY \n  1.  Salesforce Employee Desktop calls customer-billing-xapi with OAuth token  \n  2.  XAPI valid"}, {"id": "mod-q-q2", "tag": "Q2", "title": "What was the most challenging technical problem you solved?", "modTitle": "Production Best Practices & Naming Standards", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✅  Answer  \n Problem: SAP Billing Inquiry returned XML where the ToInstallations  node could be empty for \n accounts with status &quot;Pending Final + Disconn"}, {"id": "mod-q-q3", "tag": "Q3", "title": "How did you manage the async preference update flow?", "modTitle": "Production Best Practices & Naming Standards", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✅  Answer  \n 📋  PREFERENCE UPDATE — ASYNC PATTERN \n  1.  Mobile app calls preference-update-xapi → XAPI validates + publishes to Anypoint MQ → returns 202"}, {"id": "mod-r-q1", "tag": "Q1", "title": "What is the difference between sub-flow and private flow?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "Questions from Capgemini · LTI · TCS · Sapient · Quinnox · Apisero · Persistent · ConnectIndia · Vitrusa · \n Enquiro \n  ✅  Answer  \n ASPECT SUB-FLOW PRIVATE FL"}, {"id": "mod-r-q2", "tag": "Q2", "title": "What is the difference between VM connector and flow reference?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✅  Answer  \n Flow Reference: Synchronous direct call to another flow in the SAME application. Same thread, same \n transaction context. No messaging overhead."}, {"id": "mod-r-q3", "tag": "Q3", "title": "What is fan-in and fan-out? How do you implement them?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✅  Answer  \n Fan-Out: Send same message to multiple destinations. Implementation: Scatter-Gather (parallel \n routes), Anypoint MQ Exchange (one publish → all"}, {"id": "mod-r-q4", "tag": "Q4", "title": "What are streaming strategies in MuleSoft? Which is the default?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✅  Answer  \n STRATEGY BEHAVIOR USE WHEN \n Non-Repeatable \n Streaming \n Stream read once, not buffered — most \n memory-efficient \n Large files you process only"}, {"id": "mod-r-q5", "tag": "Q5", "title": "How do you set up HTTPS connection in MuleSoft? One-way vs two-way SSL?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✅  Answer  \n One-way SSL (server authentication only): Client verifies server&#x27;s certificate. Server does NOT verify \n client. Standard HTTPS. In MuleSoft"}, {"id": "mod-r-q6", "tag": "Q6", "title": "What is VPC and VPN in CloudHub? What is SLB vs DLB?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✅  Answer  \n VPC (Virtual Private Cloud): Private isolated network segment in CloudHub where your Mule apps \n run. Isolates your apps from other CloudHub cust"}, {"id": "mod-r-q7", "tag": "Q7", "title": "How do you call a Java file in DataWeave? How do you invoke a flow in DataWeave?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✅  Answer  \n Call Java in DataWeave: \n DataWeave — Call Java static method \n \n   \n     DWL \n     \n           Test in Playground"}, {"id": "mod-r-q8", "tag": "Q8", "title": "Write DataWeave to mask a credit card number — show only last 4 digits.", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✅  Answer  \n DataWeave — Credit card masking \n \n   \n     DWL \n     \n           Test in Playground  \n       \n              \n         Copy"}, {"id": "mod-r-q9", "tag": "Q9", "title": "Write DataWeave to find even numbers from [1,2,3,4,5,6] and swap two values.", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✅  Answer  \n DataWeave — Even numbers + swap \n \n   \n     DWL \n     \n           Test in Playground  \n       \n              \n         Copy"}, {"id": "mod-r-q10", "tag": "Q10", "title": "Write a cron expression to trigger a flow daily at 10AM. Write RAML for books and songs", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "resources. \n  ✅  Answer  \n Cron — Daily at 10AM EST \n 0 0 10 * * ? \n /- Second Minute Hour DayOfMonth Month DayOfWeek \n /- 0=second, 0=minute, 10=10AM, *=any d"}, {"id": "mod-s-q11", "tag": "Q11", "title": "What is horizontal vs vertical scaling? When do you use each in MuleSoft?", "modTitle": "Enterprise Utility & Energy Platform Deep Dive", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "✅  Answer  \n Vertical Scaling: Increase vCores per worker (0.1 → 0.2 → 0.5 → 1 → 2 → 4 vCores). More CPU and \n memory per instance. Best for CPU-bound or memo"}, {"id": "mod-s-q12", "tag": "Q12", "title": "How do you encrypt properties in MuleSoft? How do you bypass applied API policies in Studio?", "modTitle": "Enterprise Utility & Energy Platform Deep Dive", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "✅  Answer  \n Encrypting properties: Use Anypoint Studio&#x27;s Secure Properties Tool: right-click → Mule → Create a \n Secure Properties File. Enter key and e"}, {"id": "mod-s-q13", "tag": "Q13", "title": "If 5 people are invoking the same URL, how does MuleSoft ensure the correct response goes to", "modTitle": "Enterprise Utility & Energy Platform Deep Dive", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "each caller? \n  ✅  Answer  \n HTTP is stateless and request-response. Each HTTP request opens a unique connection/thread. The \n HTTP listener binds the response"}, {"id": "mod-s-q14", "tag": "Q14", "title": "What are traits, resource types, and fragments in RAML?", "modTitle": "Enterprise Utility & Energy Platform Deep Dive", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "✅  Answer  \n Traits: Reusable request/response patterns applied to multiple methods. Example: a pageable  trait \n adds queryParameters (limit, offset) — appli"}, {"id": "mod-t-q12", "tag": "Q12", "title": "How do you encrypt properties in MuleSoft? How do you bypass applied API policies in Studio?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✅  Answer  \n Encrypting properties: Use Anypoint Studio&#x27;s Secure Properties Tool: right-click → Mule → Create a \n Secure Properties File. Enter key and e"}, {"id": "mod-t-q13", "tag": "Q13", "title": "If 5 people are invoking the same URL, how does MuleSoft ensure the correct response goes to", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "each caller? \n  ✅  Answer  \n HTTP is stateless and request-response. Each HTTP request opens a unique connection/thread. The \n HTTP listener binds the response"}, {"id": "mod-t-q14", "tag": "Q14", "title": "What are traits, resource types, and fragments in RAML?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✅  Answer  \n Traits: Reusable request/response patterns applied to multiple methods. Example: a pageable  trait \n adds queryParameters (limit, offset) — appli"}, {"id": "mod-t-q15", "tag": "Q15", "title": "What is the difference between Query and QueryAll in Salesforce?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✅  Answer  \n Query: Returns only active/non-deleted records. Standard SOQL operation. Example: SELECT Id \n FROM Account WHERE Type=&#x27;Customer&#x27;  — ret"}, {"id": "mod-t-q16", "tag": "Q16", "title": "How do you handle SFTP strategies? How do you auto-delete files on SFTP?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✅  Answer  \n SFTP Strategies: (1) Polling Strategy — trigger when file arrives (Mule SFTP listener with \n watermark). (2) Read Strategy — on-demand file read"}, {"id": "mod-t-q17", "tag": "Q17", "title": "In a Bulk Insert with 10 records, if record 7 is invalid, what happens?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✅  Answer  \n This depends on the connector and database. \n Database Bulk Insert (non-XA transaction): All 10 records are sent in a single batch. If record 7 f"}, {"id": "mod-t-q18", "tag": "Q18", "title": "An exception arose at System layer and I want that error message to propagate to Experience", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "layer. How? \n  ✅  Answer  \n Use on-error-propagate  at each layer. In the SAPI: catch the error → build standardized error \n payload → re-throw using . In the"}, {"id": "mod-t-q19", "tag": "Q19", "title": "System API is taking too long to respond (timeout). How do you fix it from XAPI's perspective?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✅  Answer  \n Three approaches depending on requirements: \n  1.  Increase responseTimeout: On the HTTP Request config in PAPI that calls SAPI, increase  \n resp"}, {"id": "mod-t-q20", "tag": "Q20", "title": "How do you implement CI/CD for MuleSoft? What Maven commands do you use?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✅  Answer"}, {"id": "mod-u-q18", "tag": "Q18", "title": "An exception arose at System layer and I want that error message to propagate to Experience", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "layer. How? \n  ✅  Answer  \n Use on-error-propagate  at each layer. In the SAPI: catch the error → build standardized error \n payload → re-throw using . In the"}, {"id": "mod-u-q19", "tag": "Q19", "title": "System API is taking too long to respond (timeout). How do you fix it from XAPI's perspective?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n Three approaches depending on requirements: \n  1.  Increase responseTimeout: On the HTTP Request config in PAPI that calls SAPI, increase  \n resp"}, {"id": "mod-u-q20", "tag": "Q20", "title": "How do you implement CI/CD for MuleSoft? What Maven commands do you use?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n In our Enterprise Architecture: GitHub Actions triggers on push to any environment branch. Pipeline stages: \n  1.  mvn clean compile  — compile a"}, {"id": "mod-u-q1", "tag": "Q1", "title": "What is the difference between DataWeave 1.0 and 2.0?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n FEATURE DATAWEAVE 1.0 (MULE 3) DATAWEAVE 2.0 (MULE 4) \n Header %dw 1.0 %dw 2.0 \n Conditional when-otherwise if-else \n Imports Not available impor"}, {"id": "mod-u-q2", "tag": "Q2", "title": "What is the p() function in DataWeave? What is lookup()?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n p() function: Reads a value from a properties file (application properties, config YAML, Secure \n Properties). Used to access configuration witho"}, {"id": "mod-u-q3", "tag": "Q3", "title": "What is the difference between flatten and flatMap?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n OPERATOR INPUT OUTPUT USE WHEN \n flatten Nested array One-level-flattened array You have [[1,2],[3,4]]  and want \n [1,2,3,4] \n flatMap Array +"}, {"id": "mod-u-q4", "tag": "Q4", "title": "How do you skip null values in DataWeave? How do you mask sensitive data?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n DataWeave — skipNullOn \n \n   \n     DWL \n     \n           Test in Playground  \n       \n              \n         Copy \n       \n     \n   \n    %dw 2.0"}, {"id": "mod-u-q5", "tag": "Q5", "title": "What is zip() function? How do you merge two arrays?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n zip()  combines two arrays element-by-element into an array of pairs (arrays of 2 elements each). \n DataWeave — zip() and flatten to merge"}, {"id": "mod-u-q6", "tag": "Q6", "title": "What is sizeOf(), typeOf(), and how do you remove a key from an object?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n DataWeave — sizeOf, typeOf, remove key \n \n   \n     DWL \n     \n           Test in Playground  \n       \n              \n         Copy"}, {"id": "mod-u-q7", "tag": "Q7", "title": "What is reduce() in DataWeave? Write examples for sum and string concat.", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n DataWeave — reduce() for aggregation \n \n   \n     DWL \n     \n           Test in Playground  \n       \n              \n         Copy"}, {"id": "mod-u-q8", "tag": "Q8", "title": "What is match vs matches? What is read() vs readUrl()?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n DataWeave — match vs matches \n /- match: returns array of capture groups from regex match \n &quot;me@mulesoft.com&quot; match(/([a-z]*-@([a-z]*-."}, {"id": "mod-u-q9", "tag": "Q9", "title": "How do you access secure properties inside DataWeave? How to encode/decode base64?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n DataWeave — Secure properties + base64 \n \n   \n     DWL \n     \n           Test in Playground  \n       \n              \n         Copy"}, {"id": "mod-u-q10", "tag": "Q10", "title": "Write DataWeave to check if a number is even or odd. How to convert string to Number?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✅  Answer  \n DataWeave — Even/Odd + type conversion \n \n   \n     DWL \n     \n           Test in Playground  \n       \n              \n         Copy"}, {"id": "mod-v-q1", "tag": "Q1", "title": "What is the difference between CloudHub 1.0 and CloudHub 2.0?", "modTitle": "Advanced DataWeave Transformations & Scripts", "category": "DataWeave 2.0 Masterclass", "role": "Senior", "snippet": "✅  Answer  \n FEATURE CLOUDHUB 1.0 CLOUDHUB 2.0 \n Infrastructure Shared multi-tenant Kubernetes-based dedicated containers \n Workers Static predefined sizes (0"}, {"id": "mod-v-q2", "tag": "Q2", "title": "Explain mTLS. How do you debug mTLS-related issues?", "modTitle": "Advanced DataWeave Transformations & Scripts", "category": "DataWeave 2.0 Masterclass", "role": "Senior", "snippet": "✅  Answer  \n mTLS (Mutual TLS): Both client and server authenticate each other using certificates. Unlike one-way \n SSL where only the server presents a cert,"}, {"id": "mod-v-q3", "tag": "Q3", "title": "What is the difference between Rate Limiting, Spike Control, and Throttling?", "modTitle": "Advanced DataWeave Transformations & Scripts", "category": "DataWeave 2.0 Masterclass", "role": "Senior", "snippet": "✅  Answer  \n POLICY BEHAVIOR WHEN LIMIT EXCEEDED USE CASE \n Rate \n Limiting \n Request is REJECTED immediately (HTTP \n 429) \n Prevent abuse — hard limit per cl"}, {"id": "mod-v-q4", "tag": "Q4", "title": "What is Transaction Management in MuleSoft? XA vs Local transactions?", "modTitle": "Advanced DataWeave Transformations & Scripts", "category": "DataWeave 2.0 Masterclass", "role": "Senior", "snippet": "✅  Answer  \n Transaction management ensures a group of operations execute as a single unit of work — either all \n succeed or all are rolled back. \n TYPE SCOPE"}, {"id": "mod-v-q5", "tag": "Q5", "title": "What is guaranteed delivery? How do you ensure it in MuleSoft?", "modTitle": "Advanced DataWeave Transformations & Scripts", "category": "DataWeave 2.0 Masterclass", "role": "Senior", "snippet": "✅  Answer  \n Guaranteed delivery ensures messages are reliably delivered even if the system crashes or restarts. \n MuleSoft achieves this through: \n 📋  GUARAN"}, {"id": "mod-w-q6", "tag": "Q6", "title": "After batch job processes 1,000 of 10,000 records and restarts, how do you avoid reprocessing?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n Multiple strategies work together: \n  1.  Batch Persistence (built-in): Mule Batch Job is persistent by default — if the runtime restarts, it"}, {"id": "mod-w-q1", "tag": "Q1", "title": "What is Correlation ID? How is it different from Transaction ID?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n ASPECT CORRELATION ID TRANSACTION ID \n Purpose Links related messages across a flow — tracks \n the journey of a request \n Associates events with"}, {"id": "mod-w-q2", "tag": "Q2", "title": "What is the APIKit Router? What does it do?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n The APIKit Router does the following when a request arrives: \n  1.  Validates the incoming request against the RAML spec (payload, headers, URI p"}, {"id": "mod-w-q3", "tag": "Q3", "title": "What is the difference between fixed frequency and cron in Scheduler?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n ASPECT FIXED FREQUENCY CRON EXPRESSION \n Definition Trigger every X milliseconds/seconds/minutes Trigger at specific date/time patterns \n Config"}, {"id": "mod-w-q4", "tag": "Q4", "title": "What is Reconnection Strategy? What are the three options?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n Reconnection Strategy is used to reconnect to external systems when a connection fails. Configured \n on each connector. \n OPTION BEHAVIOR USE WHE"}, {"id": "mod-w-q5", "tag": "Q5", "title": "What is the difference between REST and SOAP web services?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n ASPECT REST SOAP \n Protocol Architectural style (no official standard) Protocol with official W3C standard \n Data format JSON, XML, plain text, H"}, {"id": "mod-w-q6", "tag": "Q6", "title": "What are the configuration differences between File, FTP, and SFTP connectors?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n CONNECTOR REQUIRED CONFIGURATION AUTHENTICATION \n File Working directory path only None (OS filesystem) \n FTP Host, Port (21), Username, Password"}, {"id": "mod-w-q7", "tag": "Q7", "title": "What operations are available in FTP/SFTP/File connectors?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n OPERATION DESCRIPTION \n Read Read a specific file content \n List List files in a directory (can filter by pattern) \n On New or Updated File Sourc"}, {"id": "mod-w-q8", "tag": "Q8", "title": "Compare ForEach, Parallel ForEach, and Batch Processing — when to use which?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n ASPECT FOREACH PARALLEL FOREACH BATCH PROCESSING \n Processing Sequential Parallel Parallel \n Threading Single-threaded Multi-threaded Multi-threa"}, {"id": "mod-w-q9", "tag": "Q9", "title": "What are the HTTP status code categories? What is the difference between 201 and 202?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n CATEGORY RANGE COMMON CODES \n 1xx \n Informational \n 100– \n 199 \n 100 Continue, 101 Switching Protocols \n 2xx Success 200– \n 299 \n 200 OK, 201 Cre"}, {"id": "mod-w-q10", "tag": "Q10", "title": "What is an Idempotent Filter / Idempotent Message Validator?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n The Idempotent Message Validator (formerly &quot;Idempotent Filter&quot; in Mule 3) filters out duplicate \n messages based on a unique ID extract"}, {"id": "mod-w-q11", "tag": "Q11", "title": "How do you validate JSON and XML in MuleSoft without RAML?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n If using RAML with APIKit: the APIKit Router automatically validates incoming requests against the \n RAML schema before routing — no additional c"}, {"id": "mod-w-q12", "tag": "Q12", "title": "What is a custom connector? When would you create one?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✅  Answer  \n A custom connector is a reusable MuleSoft component that wraps the connectivity to a system that \n doesn&#x27;t have an out-of-the-box MuleSoft c"}, {"id": "mod-x-q1", "tag": "Q1", "title": "What is inside a Mule Event? What is the difference between payload, attributes, and vars?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n You have 5.5 years of real production experience with SAP, Salesforce, AWS, Anypoint MQ, and 44+ APIs. That&#x27;s \n more than most candidates wi"}, {"id": "mod-x-q2", "tag": "Q2", "title": "What is the difference between repeatable and non-repeatable streaming?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n STRATEGY \n READ MULTIPLE \n TIMES? \n MEMORY USE WHEN \n Non-Repeatable ❌  Once only Most efficient Large files processed once — \n CSV/XML ETL \n Rep"}, {"id": "mod-x-q3", "tag": "Q3", "title": "What are the key best practices for the HTTP Connector?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n Never hardcode the port — use ${http.port}  property \n Always set responseTimeout and connectionIdleTimeout — no timeout = one slow API \n hangs y"}, {"id": "mod-x-q4", "tag": "Q4", "title": "What are the key best practices for the Database Connector?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n Always use :namedParam for input parameters — never concatenate strings into SQL (SQL \n injection risk) \n Connection pooling — configure pool siz"}, {"id": "mod-x-q5", "tag": "Q5", "title": "What is the JMS Connector? When do you use JMS vs Anypoint MQ?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n ASPECT JMS CONNECTOR ANYPOINT MQ \n When to use Existing IBM MQ, ActiveMQ, Solace, TIBCO EMS \n broker already in your enterprise \n New integration"}, {"id": "mod-x-q6", "tag": "Q6", "title": "What is the Kafka Connector? Kafka vs Anypoint MQ — when to use which?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n The Kafka Connector connects MuleSoft to Apache Kafka for high-throughput, real-time event \n streaming with replay capability. \n ASPECT APACHE KA"}, {"id": "mod-x-q7", "tag": "Q7", "title": "What is the VM Connector? How does it differ from flow-ref and Anypoint MQ?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n OPTION SCOPE ASYNC? DURABLE? USE FOR \n flow-ref Same app ❌ \n Synchronous \n N/A Code reuse — simple flow- \n to-flow call \n VM \n Connector \n Same a"}, {"id": "mod-x-q8", "tag": "Q8", "title": "How do you version APIs in MuleSoft? What is a breaking vs non-breaking change?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n CHANGE TYPE BREAKING? VERSION BUMP \n Removed/renamed field, type change, new required input ✅  YES — breaking MAJOR (v1 → v2) \n New optional fiel"}, {"id": "mod-x-q9", "tag": "Q9", "title": "How do you tune MuleSoft application performance?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✅  Answer  \n Rule #1: Measure first. Change one thing at a time. Baseline → change → retest. \n maxConcurrency on flows: caps parallel events. At limit → back-"}, {"id": "mod-tips-q1", "tag": "Q1", "title": "What is inside a Mule Event? What is the difference between payload, attributes, and vars?", "modTitle": "Interview Day Strategy & STAR Method", "category": "Getting Started & Strategy", "role": "All", "snippet": "✅  Answer  \n You have 5.5 years of real production experience with SAP, Salesforce, AWS, Anypoint MQ, and 44+ APIs. That&#x27;s \n more than most candidates wi"}, {"id": "mod-y-q10", "tag": "Q10", "title": "What is Runtime Fabric (RTF)? How is it different from CloudHub?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✅  Answer  \n ASPECT CLOUDHUB 2.0 RUNTIME FABRIC (RTF) \n Infrastructure MuleSoft-managed Kubernetes (Private \n Space) \n YOUR Kubernetes (EKS, AKS, GKE, OpenShi"}, {"id": "mod-y-q11", "tag": "Q11", "title": "What are the best practices for logging in MuleSoft?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✅  Answer  \n Log at flow start and end with key business identifiers (accountId, correlationId) \n Log before and after external calls — makes it easy to see w"}, {"id": "mod-y-q12", "tag": "Q12", "title": "How do you upgrade Mule apps to Java 17? What breaks?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✅  Answer  \n Mule 4.9 LTS and later Edge releases run on Java 17 ONLY. If your apps are on Java 8 or 11, \n the upgrade is coming. \n ⚠  WHAT BREAKS ON JAVA 17"}, {"id": "mod-y-q13", "tag": "Q13", "title": "What is MuleSoft AI and how does it integrate with Agentforce?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✅  Answer  \n MuleSoft connects AI agents to enterprise data through 4 patterns: \n PATTERN DESCRIPTION USE WHEN \n AI Chain \n Connector \n Call an LLM (OpenAI, A"}, {"id": "mod-y-q14", "tag": "Q14", "title": "What is Anypoint Code Builder? How is it different from Anypoint Studio?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✅  Answer  \n ASPECT ANYPOINT STUDIO ANYPOINT CODE BUILDER (ACB) \n Platform Eclipse-based desktop IDE VS Code-based — desktop app or browser \n AI features None"}, {"id": "mod-y-q15", "tag": "Q15", "title": "What is the Parent POM / BOM pattern in MuleSoft? Why do you use it?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✅  Answer  \n A Parent POM is a Maven POM with pom  inherited via by all child Mule projects. It centralizes: \n connector versions, MUnit version, mule-maven-p"}, {"id": "mod-z-s1", "tag": "S1", "title": "Your MuleSoft PAPI calls SAP SAPI which calls SAP. SAP returns HTTP 500. Walk me", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "through what happens at each layer. \n  ✅  Complete Scenario Answer  \n Layer-by-layer propagation: \n 📋  ERROR FLOW TRACE \n  1.  SAP SAPI receives HTTP 500 from"}, {"id": "mod-z-s2", "tag": "S2", "title": "You have a Mule app deployed on CloudHub with 2 workers. An MQ message is", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "processed by Worker 1. Worker 1 crashes mid-processing. What happens? \n  ✅  Complete Scenario Answer  \n With MANUAL ack mode (correct setup): The message was n"}, {"id": "mod-z-s3", "tag": "S3", "title": "Your nightly batch job processes 50,000 records. After processing 30,000 records,", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "the app restarts. How do you ensure it continues from record 30,001? \n  ✅  Complete Scenario Answer  \n Solution: Watermark + persistent ObjectStore \n 📋  RECOVE"}, {"id": "mod-z-s4", "tag": "S4", "title": "Your billing API suddenly gets 10x traffic (billing cycle spike). Response times", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "increase from 1s to 8s. Walk me through your diagnosis and fix. \n  ✅  Complete Scenario Answer  \n Step 1 — Diagnose first: \n Check Anypoint Monitoring: is CPU/"}, {"id": "mod-z-s5", "tag": "S5", "title": "Your Scatter-Gather calls SAP (usually 800ms) and DynamoDB (usually 200ms).", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "Occasionally SAP takes 5 seconds. What happens to your API response time? \n  ✅  Complete Scenario Answer  \n Scatter-Gather waits for the SLOWEST route. On the"}, {"id": "mod-z-s6", "tag": "S6", "title": "Your flow inserts a record into DB, then publishes to Anypoint MQ. The DB insert", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "succeeds but MQ publish fails. What happens? How do you prevent this? \n  ✅  Complete Scenario Answer  \n What happens without protection: DB record exists, MQ m"}, {"id": "mod-z-s7", "tag": "S7", "title": "Salesforce sends the same Platform Event twice due to at-least-once delivery. Your", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "flow creates a record in SAP both times. How do you prevent duplicate SAP records? \n  ✅  Complete Scenario Answer  \n Three-layer defense: \n  1.  ObjectStore id"}, {"id": "mod-z-s8", "tag": "S8", "title": "An interviewer sees your API exposes customer account numbers and SSNs in the", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "response. How do you secure this data? \n  ✅  Complete Scenario Answer  \n Defense-in-depth approach: \n HTTPS everywhere: TLS 1.2+ on all HTTP connections — data"}, {"id": "mod-z-s9", "tag": "S9", "title": "A downstream Salesforce team wants you to add a new required field to an", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "existing API. You have 5 consumers. How do you handle this without breaking them? \n  ✅  Complete Scenario Answer  \n A new required field in a request is a brea"}, {"id": "mod-z-s10", "tag": "S10", "title": "You need to call the same SAP endpoint from 5 different MuleSoft APIs. What is", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "the most maintainable approach? \n  ✅  Complete Scenario Answer  \n This is exactly the problem the SAPI layer solves in API-led connectivity. \n Solution: Create"}, {"id": "mod-z-s11", "tag": "S11", "title": "SAP returns an XML response with nested namespaces. Some fields are missing", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "depending on account status. Your DataWeave transform fails on null. How do you fix it? \n  ✅  Complete Scenario Answer  \n This is the exact production bug I fi"}, {"id": "mod-z-s12", "tag": "S12", "title": "Your DataWeave transform takes 800ms on large payloads. How do you optimize", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "it? \n  ✅  Complete Scenario Answer  \n DataWeave optimization strategies: \n Select only needed fields early: Don&#x27;t map the entire SAP response — start with"}, {"id": "mod-z-s13", "tag": "S13", "title": "You deployed a new version of your billing API at 2AM. At 8AM (peak billing", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "time), you see a 30% error rate. How do you respond? \n  ✅  Complete Scenario Answer  \n Incident response process: \n  1.  Immediate rollback first: Don&#x27;t d"}, {"id": "mod-z-s14", "tag": "S14", "title": "Business says \"our customer preference updates are not being saved.\" How do", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "you debug this across the XAPI → Anypoint MQ → PAPI → DynamoDB chain? \n  ✅  Complete Scenario Answer  \n Step-by-step debugging with correlationId: \n  1.  Get t"}, {"id": "mod-z-s15", "tag": "S15", "title": "\"What if all 3 DB connectors in Scatter-Gather fail? What happens?\"", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "✅  Complete Scenario Answer  \n Scatter-Gather with 3 DB routes — all fail: \n Without Try scope: First failing route throws immediately → Scatter-Gather throws"}, {"id": "mod-z-s16", "tag": "S16", "title": "\"What is the difference between flowRef and subflow — when would", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "using the wrong one cause a bug?&quot; \n  ✅  Complete Scenario Answer  \n The bug scenario: You need a subflow to have its own independent error handling. You u"}, {"id": "mod-z-s17", "tag": "S17", "title": "\"You set maxRetries=3 in Until Successful. How many total attempts", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "happen?&quot; \n  ✅  Complete Scenario Answer  \n Answer: 4 total attempts — 1 initial attempt + 3 retries. \n Common interview trap: Many candidates say &quot;3"}, {"id": "mod-z-s18", "tag": "S18", "title": "\"You said ForEach doesn't change the payload. But I set a variable inside", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "ForEach — is that visible after the loop?&quot; \n  ✅  Complete Scenario Answer  \n Yes — variables set inside ForEach ARE visible after the loop. This is a crit"}, {"id": "mod-z-s19", "tag": "S19", "title": "\"What is the difference between SDO and SMO in MuleSoft?\"", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "✅  Complete Scenario Answer  \n SDO (Shared Domain Objects) and SMO (Service Message Objects) are MuleSoft architectural \n concepts: \n SDO: In API-led connecti"}, {"id": "mod-z-s20", "tag": "S20", "title": "FINAL CROSS-QUESTION: \"How would you design a MuleSoft integration for a system you've", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "never worked with before?&quot; \n  ✅  Complete Scenario Answer — The &quot;Senior Developer&quot; Answer  \n This question tests your architecture thinking, not"}, {"id": "mod-aa-n1", "tag": "N1", "title": "What is the Einstein AI Connector? How is it different from the Inference Connector?", "modTitle": "Live Whiteboard Architecture Guide & Scripts", "category": "Live Whiteboard & Architecture", "role": "Lead / Architect", "snippet": "✅  Answer  \n Einstein AI Connector is Salesforce-native — it routes all LLM calls through the Einstein Trust \n Layer. Zero data retention: no prompt or respon"}, {"id": "mod-bb-n2", "tag": "N2", "title": "What is Anypoint Partner Manager (APM)? How does it differ from the X12 EDI Connector?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "✅  Answer  \n APM is a centralized B2B gateway platform for managing trading partners — onboarding, \n transaction tracking, message routing, and acknowledgemen"}, {"id": "mod-bb-n3", "tag": "N3", "title": "Your interviewer asks: \"How would you integrate MuleSoft with Snowflake for a nightly ETL", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "load of 100,000 records?&quot; \n  ✅  Answer  \n Design: Scheduler → Batch Job → Snowflake Connector \n 📋  DESIGN WALK-THROUGH \n  1.  Scheduler triggers nightly a"}, {"id": "mod-bb-n4", "tag": "N4", "title": ". What is the MuleSoft MCP Connector and how does it connect MuleSoft to AI agents?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "MCP = Model Context Protocol — an open standard (originally by Anthropic) that lets AI agents call \n external tools and APIs in a structured, discoverable way."}, {"id": "mod-bb-n5", "tag": "N5", "title": ". What is the Anypoint Terraform Provider and why would you use it?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "Anypoint Terraform Provider is a HashiCorp Terraform plugin that lets you manage Anypoint \n Platform resources as Infrastructure-as-Code (IaC). Instead of clic"}, {"id": "mod-bb-n6", "tag": "N6", "title": ". When would you choose Anypoint Secrets Manager over AWS Secrets Manager (or vice versa)?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "Both are secrets vaults but optimized for different contexts. The choice depends on your cloud \n strategy and team structure. \n Criterion Anypoint Secrets Mana"}, {"id": "mod-bb-n7", "tag": "N7", "title": ". How do you use Anypoint Visualizer in an enterprise context?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "Anypoint Visualizer auto-generates a real-time dependency map of all deployed Mule applications, \n showing how APIs call each other (Experience → Process → Sys"}, {"id": "mod-bb-n8", "tag": "N8", "title": ". What is the MuleSoft certification path and what does each certification validate?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "MuleSoft certifications validate hands-on Mule development and architecture skills. They follow a \n structured progression. \n Certification Path: \n MCD-L1 (Mul"}, {"id": "mod-bb-n9", "tag": "N9", "title": ". Quick-fire round — answer these 10 MuleSoft questions in one sentence each", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "# Question One-line answer \n 1 \n What is a Mule domain \n project? \n A shared project that lets multiple Mule apps on the same server \n share a single HTTP List"}, {"id": "mod-cc-n10", "tag": "N10", "title": ". What is the difference between HTTP 401 and 403, and how do you handle both in MuleSoft?", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "This is a classic interview trap — many developers confuse these two codes. Knowing the exact \n distinction shows API design maturity. \n Aspect 401 Unauthorize"}, {"id": "mod-cc-n11", "tag": "N11", "title": ". Design Scenario: A banking client needs an API handling 10,000 transactions/minute with PCI-", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "DSS compliance. How do you architect it? \n This scenario tests your ability to combine security, performance, and compliance in a real-world \n banking context."}, {"id": "mod-cc-t1", "tag": "T1", "title": "Mule 3 vs Mule 4", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "Mule 4 is just a newer \n version. \n Mule 4 replaced the ESB threading model with a non- \n blocking reactive model (Project Reactor), removed MEL in \n favor of"}, {"id": "mod-cc-t2", "tag": "T2", "title": "Error handling in", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "sub-flows \n Sub-flows handle \n their own errors. \n Sub-flows have NO independent error handler — they \n inherit the error handling scope of their caller flow."}, {"id": "mod-cc-t3", "tag": "T3", "title": "DataWeave vs MEL", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "I use #[payload.field] \n — that is MEL. \n In Mule 4, #[] always evaluates DataWeave 2.0. MEL was \n completely removed. Even simple field access like # \n [paylo"}, {"id": "mod-cc-t4", "tag": "T4", "title": "401 vs 403", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "Both mean the user \n cannot access the \n resource. \n 401 means authentication is missing or invalid (server \n does not know who you are). 403 means authenticat"}, {"id": "mod-cc-t5", "tag": "T5", "title": "Watermark purpose", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "Watermark is a Mule \n scheduling feature. \n A watermark is a stored value in ObjectStore (timestamp \n or ID) that marks the last successfully processed record"}, {"id": "mod-cc-t6", "tag": "T6", "title": "CloudHub 1.0 vs 2.0 CloudHub 2.0 is the", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "same but newer. \n CloudHub 2.0 is built on Runtime Fabric (Kubernetes- \n based), offering zero-downtime rolling deployments, \n improved resource isolation, per"}, {"id": "mod-cc-t7", "tag": "T7", "title": "Scatter-Gather error", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "behavior \n If one route fails in \n Scatter-Gather, Mule \n skips it and returns \n the rest. \n By default, if ANY route in Scatter-Gather fails, the ENTIRE \n Sca"}, {"id": "mod-cc-t8", "tag": "T8", "title": "Until Successful retry", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "Until Successful retries \n the whole flow. \n Until Successful retries only the operations inside its \n scope, not the entire flow. Each retry starts from the"}, {"id": "mod-cc-t9", "tag": "T9", "title": "Payload after Set", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "Variable \n Set Variable changes \n the payload. \n Set Variable stores a value in the Mule event variables map \n — it does NOT change the payload. Payload is onl"}, {"id": "mod-cc-t10", "tag": "T10", "title": "APIkit vs HTTP", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "Listener \n APIkit is just a router \n that replaces HTTP \n Listener. \n APIkit works on top of HTTP Listener — the Listener still \n receives the request. APIkit"}, {"id": "mod-cc-t11", "tag": "T11", "title": "on-error-propagate", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "vs on-error-continue \n Both stop the flow \n when an error occurs. \n on-error-propagate stops the flow AND re-throws the \n error to the caller. on-error-continu"}, {"id": "mod-cc-t12", "tag": "T12", "title": "DataWeave output", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "directive \n DataWeave always \n outputs JSON. \n DataWeave output is controlled by the output directive \n (e.g., output application/xml, output text/csv). Withou"}, {"id": "mod-cc-t13", "tag": "T13", "title": "For Each vs Batch", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "For Each and Batch do \n the same thing. \n For Each processes items sequentially in the same thread, \n keeping the full collection in memory. Batch Job processe"}, {"id": "mod-cc-t14", "tag": "T14", "title": "API Manager auto-", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "discovery \n API Manager policies \n apply automatically \n once you create an \n API instance. \n Policies only apply to a Mule app after AutoDiscovery is \n config"}, {"id": "mod-cc-t15", "tag": "T15", "title": "Mule event", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "immutability \n I can modify the Mule \n event object directly \n in a flow. \n The Mule event is immutable — every component that \n changes payload or variables c"}, {"id": "mod-cc-t16", "tag": "T16", "title": "HTTP Connector vs", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "REST Connector \n You need the REST \n Connector to call \n REST APIs. \n The HTTP Connector calls any REST API. The REST \n Connector (auto-generated from an OAS/R"}, {"id": "mod-cc-t17", "tag": "T17", "title": "Secure properties", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "encryption \n Wrapping a value in ! \n [...] encrypts it \n automatically. \n ![...] is just the syntax to REFERENCE an already-encrypted \n value in a secure prope"}, {"id": "mod-cc-t18", "tag": "T18", "title": "MUnit mock scope", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "MUnit mocks replace \n the entire flow under \n test. \n MUnit mocks replace specific event processors (by \n component name or type) within the flow under test. T"}, {"id": "mod-cc-t19", "tag": "T19", "title": "RAML vs OAS", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "RAML and OAS are \n interchangeable in \n MuleSoft. \n Both are supported but RAML is MuleSoft native — it \n supports reusable libraries, traits, resource types,"}, {"id": "mod-cc-t20", "tag": "T20", "title": "Explaining", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "salary/expectations \n Immediately stating a \n specific number when \n first asked. \n Ask for the budgeted range first: “I want to make sure we \n are aligned — w"}, {"id": "mod-cc-s5", "tag": "S5", "title": "— those three cover architecture, performance, and real-world scenario. If you can", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior Developer", "snippet": "answer those three confidently, the rest will follow. \n DD \n 🧭  Architect: Requirement Gathering from Clients \n ARCHITECT ⭐ \n 🔗  RELATED EXISTING QUESTIONS \n D"}, {"id": "mod-cc-r1", "tag": "R1", "title": "How do you run discovery for a new integration? What framework do you follow?", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "✅  Architect Answer  \n I use an 8-part discovery framework. I don&#x27;t start design until every part has an owner and either \n an answer or a written assump"}, {"id": "mod-dd-s5", "tag": "S5", "title": "— those three cover architecture, performance, and real-world scenario. If you can", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "answer those three confidently, the rest will follow. \n DD \n 🧭  Architect: Requirement Gathering from Clients \n ARCHITECT ⭐ \n 🔗  RELATED EXISTING QUESTIONS \n D"}, {"id": "mod-dd-r1", "tag": "R1", "title": "How do you run discovery for a new integration? What framework do you follow?", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Architect Answer  \n I use an 8-part discovery framework. I don&#x27;t start design until every part has an owner and either \n an answer or a written assump"}, {"id": "mod-dd-r2", "tag": "R2", "title": "What questions do you ask the client, by category?", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Architect Answer — Question Bank  \n \n   \n       CATEGORY  QUESTIONS TO ASK   \n       Business  What problem costs you time or money today? Who feels it? Wh"}, {"id": "mod-dd-r3", "tag": "R3", "title": "What red flags do you watch for in discovery, and which assumptions do you confirm in", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "writing? \n  ✅  Architect Answer  \n 🚩  Red flags \n &quot;Real-time&quot; with no latency number \n No named owner for a source or target system \n Target system h"}, {"id": "mod-dd-r4", "tag": "R4", "title": "Walk me through a discovery workshop agenda.", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Sample Agenda (half day, about 3.5 hours)  \n TIME SESSION OUTPUT \n 0:00– \n 0:15 \n Introductions, goals, ground rules Agreed objective for the day \n 0:15–"}, {"id": "mod-dd-r5", "tag": "R5", "title": "What \"delighters\" do you add to make the client happy beyond the core integration?", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Architect Answer  \n Delighters are cheap extras that lower the client&#x27;s risk and effort. I put them in the estimate from \n day one so they don&#x27;t"}, {"id": "mod-dd-r6", "tag": "R6", "title": "Give me your requirements checklist (copy-friendly).", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Copy-Friendly Checklist  \n requirements-checklist.txt \n \n Business goal stated as a measurable outcome \n Sponsor, product owner and system owners named \n S"}, {"id": "mod-dd-r7", "tag": "R7", "title": "Mini case study: Salesforce → SAP → Database order sync. How would you gather", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "requirements and shape the solution? \n  ✅  Illustrative Case Study (not a real client)  \n Ask: &quot;When a Salesforce Opportunity is Closed Won, create a sale"}, {"id": "mod-dd-c1", "tag": "C1", "title": "How does MuleSoft compare with other integration options? Give an honest comparison.", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Architect Answer — Honest Comparison  \n Positioning is general and based on publicly documented capabilities. Always check current \n vendor docs and pricin"}, {"id": "mod-ee-c2", "tag": "C2", "title": "What are MuleSoft's real differentiators?", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Architect Answer  \n API-led connectivity: System, Process and Experience layers turn integrations into reusable \n assets instead of point-to-point code."}, {"id": "mod-ee-c3", "tag": "C3", "title": "When would you NOT recommend MuleSoft?", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Architect Answer — Shows Integrity  \n A handful of simple SaaS-to-SaaS syncs with no reuse plan: an iPaaS like Workato, or a \n vendor&#x27;s native connect"}, {"id": "mod-ee-c4", "tag": "C4", "title": "How do you handle client objections? Give scripts.", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Objection Scripts — Acknowledge → Reframe → Evidence → Proposal  \n OBJECTION SCRIPT \n &quot;MuleSoft is too \n expensive.&quot; \n Acknowledge: &quot;The lic"}, {"id": "mod-ee-c5", "tag": "C5", "title": "How do you build a TCO and value case for MuleSoft?", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Architect Answer — TCO &amp; Value Framework  \n I compare options over 3–5 years and only use the client&#x27;s own numbers. I never quote vendor \n prices"}, {"id": "mod-ee-c6", "tag": "C6", "title": "How would you run a POC or pilot to prove MuleSoft to a sceptical client?", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Architect Answer — POC Approach  \n  1.  Pick a real, painful use case, ideally one that touches 2–3 core systems. Don&#x27;t demo &quot;hello  \n world&quot"}, {"id": "mod-ee-e1", "tag": "E1", "title": "How do you tailor the same architecture message for different audiences?", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Architect Answer  \n \n   \n       AUDIENCE  WHAT THEY CARE ABOUT  HOW TO PITCH IT   \n       Executives  Outcomes,  cost, risk, time One slide. Business outco"}, {"id": "mod-ee-e2", "tag": "E2", "title": "Give me analogies to explain API-led connectivity, the 3 API layers, DataWeave and CloudHub", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "to a non-technical person. \n  ✅  Analogies That Work  \n CONCEPT ANALOGY \n API-led connectivity Restaurant: customers (apps) order from a menu (Experience API)."}, {"id": "mod-ee-e3", "tag": "E3", "title": "\"What is MuleSoft?\" — give 30-second, 2-minute and 5-minute versions.", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Spoken Scripts  \n ⏱  30 SECONDS \n &quot;MuleSoft is an integration platform from Salesforce. It connects applications, data and devices through \n reusable"}, {"id": "mod-ee-e4", "tag": "E4", "title": "\"What is API-led connectivity?\" — give 30-second, 2-minute and 5-minute versions.", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Spoken Scripts (architect-level variant of Section A, Q2)  \n ⏱  30 SECONDS \n &quot;It&#x27;s a way of organising integrations into three layers of reusable"}, {"id": "mod-ff-e5", "tag": "E5", "title": "How do you present an architecture to a client steering committee?", "modTitle": "Architect: Client Communication & Stakeholder Alignment", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Presentation Tips  \n Start with the decision you need (&quot;Today we need approval for option B&quot;). \n Context diagram first, then zoom in. Never open"}, {"id": "mod-ff-e6", "tag": "E6", "title": "How do you report status with RAG, and how do you deliver bad news?", "modTitle": "Architect: Client Communication & Stakeholder Alignment", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Architect Answer  \n \n   \n       STATUS  MEANING  WHAT YOU MUST INCLUDE   \n       🟢    Green On track for scope, time and budget Next milestone and date"}, {"id": "mod-ff-e7", "tag": "E7", "title": "How do you handle scope creep from the client?", "modTitle": "Architect: Client Communication & Stakeholder Alignment", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Architect Answer  \n Welcome the idea, then size it: &quot;That&#x27;s a good addition. Let me assess the impact.&quot; \n Compare against the signed scope a"}, {"id": "mod-ff-e8", "tag": "E8", "title": "Give me a jargon-to-plain-English table for client conversations.", "modTitle": "Architect: Client Communication & Stakeholder Alignment", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Jargon → Plain English  \n \n   \n       JARGON  PLAIN ENGLISH TRANSLATION   \n       API  A secure, documented doorway one system uses to ask another for data"}, {"id": "mod-ff-e9", "tag": "E9", "title": "Share email templates for kickoff, risk escalation and go-live.", "modTitle": "Architect: Client Communication & Stakeholder Alignment", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Email Templates  \n kickoff.txt \n Subject: [Project] Integration kickoff – agenda and pre-read \n Hi all, \n Thanks for joining the kickoff on [date, time]. O"}, {"id": "mod-gg-a0", "tag": "A0", "title": "What framework should I use to answer architect-level questions?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Answer Framework  \n 📋  DESIGN QUESTIONS: CLARIFY → ASSUMPTIONS → OPTIONS → TRADE-OFFS → RECOMMENDATION \n → RISKS \n Clarify: ask 2–3 questions (volume, late"}, {"id": "mod-gg-a1", "tag": "A1", "title": "How do you decide whether an integration should be synchronous or asynchronous?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer  \n What they&#x27;re testing: whether you choose patterns from requirements, not habit. \n &quot;I start with one question: is a user or caller"}, {"id": "mod-gg-a2", "tag": "A2", "title": "When would you NOT use all three API-led layers?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer (architect variant of Section O)  \n What they&#x27;re testing: pragmatism over dogma. \n &quot;Layers should earn their place. If a Process API"}, {"id": "mod-gg-a3", "tag": "A3", "title": "How do you size a MuleSoft application and its deployment?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer  \n What they&#x27;re testing: whether you size from data instead of guessing. \n &quot;I get peak TPS, payload size and backend latency from di"}, {"id": "mod-gg-a4", "tag": "A4", "title": "How do you design an enterprise security model for APIs?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer  \n What they&#x27;re testing: defence in depth across layers. \n &quot;I secure each hop differently. Externally: OAuth 2.0 / JWT validation at"}, {"id": "mod-gg-a5", "tag": "A5", "title": "How do you set up API governance across many teams?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer  \n What they&#x27;re testing: scaling standards without becoming a bottleneck. \n &quot;I automate it as much as I can. Design standards live a"}, {"id": "mod-gg-a6", "tag": "A6", "title": "What is a C4E and how would you set one up?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer  \n What they&#x27;re testing: operating-model thinking, not just tech. \n &quot;A Center for Enablement is a small cross-functional team that e"}, {"id": "mod-gg-a7", "tag": "A7", "title": "How do you design for high availability and disaster recovery?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer  \n What they&#x27;re testing: whether you tie design to RPO/RTO. \n &quot;I start with the business RPO and RTO, because they decide cost. For"}, {"id": "mod-gg-a8", "tag": "A8", "title": "How do you design observability for a MuleSoft estate?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer  \n What they&#x27;re testing: operations maturity. \n &quot;Three things: logs, metrics and traces, linked by a correlation ID passed through e"}, {"id": "mod-gg-a9", "tag": "A9", "title": "How do you handle a breaking change to an API with many consumers?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer (architect variant of Section Y, Q8)  \n What they&#x27;re testing: consumer empathy and lifecycle management. \n &quot;First I try to avoid it"}, {"id": "mod-gg-a10", "tag": "A10", "title": "How do you design a canonical data model, and when do you avoid one?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer (architect variant of S19)  \n What they&#x27;re testing: domain thinking and pragmatism. \n &quot;I avoid one giant enterprise-wide model. They"}, {"id": "mod-gg-a11", "tag": "A11", "title": "How do you make an integration reliable when the target system is unreliable?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer  \n What they&#x27;re testing: resilience patterns, chosen deliberately. \n &quot;I separate receiving from delivering with a persistent queue,"}, {"id": "mod-gg-a12", "tag": "A12", "title": "How do you decide between CloudHub 2.0, Runtime Fabric and customer-hosted runtimes?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer (short form; full scenario in S23)  \n What they&#x27;re testing: deployment trade-offs. \n &quot;The default is CloudHub 2.0 because MuleSoft r"}, {"id": "mod-gg-a13", "tag": "A13", "title": "Tell me about a time you disagreed with a client or a senior stakeholder on architecture.", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "(Behavioural) \n  ✅  Model Answer (STAR — replace with your own real example)  \n What they&#x27;re testing: influence without authority, and respect. \n &quot;S:"}, {"id": "mod-gg-a14", "tag": "A14", "title": "How do you review a developer's Mule application as an architect?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer  \n What they&#x27;re testing: what you value in quality. \n &quot;I check the things that hurt in production: does it follow the spec, is error"}, {"id": "mod-gg-a15", "tag": "A15", "title": "How would you approach cost optimisation on an existing MuleSoft estate?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer  \n What they&#x27;re testing: commercial awareness. \n &quot;I start with data: per-app resource usage, traffic and replicas from Runtime Manag"}, {"id": "mod-gg-a16", "tag": "A16", "title": "How do you introduce AI agents (Agentforce / MCP) into an integration architecture safely?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Model Answer (architect variant of N4)  \n What they&#x27;re testing: 2026 awareness plus governance. \n &quot;I treat agents as another consumer of APIs, wi"}, {"id": "mod-gg-a17", "tag": "A17", "title": "Give me a 60-second architect self-introduction template.", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Template (fill in with your own true facts)  \n \n   \n     \n       ✅ \n       Exact Words to Say · 🎯  60-SECOND SCRIPT \n     \n     \n            \n       Copy S"}, {"id": "mod-gg-a18", "tag": "A18", "title": "What are the Do's and Don'ts in an architect interview?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Do / Don&#x27;t  \n  ✅  Do  \n Ask clarifying questions before designing \n State assumptions out loud \n Give options and trade-offs, then commit \n Talk about"}, {"id": "mod-gg-a19", "tag": "A19", "title": "What questions should I ask the interviewer for an architect role?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Smart Questions to Ask  \n &quot;How is the integration estate organised today: central team, C4E or federated?&quot; \n &quot;What&#x27;s the biggest integr"}, {"id": "mod-gg-h1", "tag": "H1", "title": "What actually makes an interviewer happy with an answer?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  What Interviewers Listen For  \n \n   \n       THEY&#x27;RE HAPPY WHEN YOU…  BECAUSE IT SIGNALS…   \n       Ask  1–2 clarifying questions before designing You"}, {"id": "mod-hh-h2", "tag": "H2", "title": "What makes a client happy when you explain things?", "modTitle": "Architect: How to Explain So Clients & Interviewers Are Happy", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  What Clients Listen For  \n 😊  Clients are happy when you… \n Start from their business problem, in their words \n Talk outcomes: time saved, risk reduced, fa"}, {"id": "mod-hh-h3", "tag": "H3", "title": "Is there one formula for explaining anything clearly to either audience?", "modTitle": "Architect: How to Explain So Clients & Interviewers Are Happy", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  The 5-Step Explanation Formula  \n 📋  HEADLINE → WHY IT MATTERS → HOW IT WORKS → PROOF → NEXT STEP \n  1.  Headline (1 sentence): the answer first. &quot;I&#"}, {"id": "mod-hh-h4", "tag": "H4", "title": "Show me weak vs best answers side by side for common questions.", "modTitle": "Architect: How to Explain So Clients & Interviewers Are Happy", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Weak vs Best (Interviewer)  \n \n   \n       QUESTION  ❌ WEAK ANSWER  ⭐ BEST ANSWER   \n       &quot;Why  API-led?&quot;  &quot;It&#x27;s MuleSoft best    prac"}, {"id": "mod-hh-h5", "tag": "H5", "title": "Give me a phrase bank that makes interviewers and clients feel confident.", "modTitle": "Architect: How to Explain So Clients & Interviewers Are Happy", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Phrase Bank  \n 🎯  With interviewers \n &quot;Before I design, can I check two things: peak volume and whether a user is waiting?&quot; \n &quot;I&#x27;ll ass"}, {"id": "mod-hh-h6", "tag": "H6", "title": "Any delivery tips (in person or on video) that make the explanation land?", "modTitle": "Architect: How to Explain So Clients & Interviewers Are Happy", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅  Delivery Tips  \n Draw while you talk. A simple box diagram beats five minutes of words. On video, share a \n whiteboard or keep a ready diagram (see Section"}, {"id": "mod-ii-q1", "tag": "Q1", "title": "Why are Strings immutable in Java and what is the String Constant Pool (SCP)?", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nIn Java, String objects are strictly immutable: once instantiated in memory, their internal character array cannot be "}, {"id": "mod-ii-q2", "tag": "Q2", "title": "String vs StringBuilder vs StringBuffer — Memory allocation, GC pressure, and lock contention in multi-threaded MuleSoft runtimes", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nString is immutable and creates throwaway objects in the Young Gen Eden space with every concatenation, triggering fre"}, {"id": "mod-ii-q3", "tag": "Q3", "title": "How does immutability work in DataWeave 2.0 compared to Java Strings, and how does DW manage off-heap memory buffers for large payloads (>100MB)?", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nLike Java Strings, DataWeave 2.0 enforces pure functional immutability: variables, objects, and arrays cannot be modif"}, {"id": "mod-ii-q4", "tag": "Q4", "title": "Constructors in Java: Default, Parameterized, and Copy constructors in building thread-safe, immutable domain models", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nA constructor initializes newly instantiated object state. If no constructor is defined in source code, the Java compi"}, {"id": "mod-ii-q5", "tag": "Q5", "title": "Constructor chaining with this() vs super() and its role in Mule SDK lifecycle & dependency injection", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nthis() calls an overloaded constructor within the same class, enabling constructor chaining and centralizing initializ"}, {"id": "mod-ii-q6", "tag": "Q6", "title": "Constructor vs Method: Why can't constructors be abstract or final, and how do private constructors safeguard Singleton architectures?", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nA constructor initializes memory for an object, has no return type, and must share the class name. A method represents"}, {"id": "mod-ii-q7", "tag": "Q7", "title": "Method Overloading vs Method Overriding: JVM bytecode instructions (invokestatic/invokevirtual) and compile-time vs runtime polymorphism", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nMethod Overloading is resolved at compile time (Static Polymorphism). The javac compiler inspects the argument count, "}, {"id": "mod-ii-q8", "tag": "Q8", "title": "Strict rules for Covariant Return Types, Access Modifiers, and Exceptions in Method Overriding under the Liskov Substitution Principle", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nMethod overriding adheres strictly to the Liskov Substitution Principle (LSP): a subclass must be usable anywhere its "}, {"id": "mod-ii-q9", "tag": "Q9", "title": "JIT compilation, Virtual Method Tables (vtable), and Monomorphic Inline Caching in high-concurrency MuleSoft runtimes", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nWhen an overridden method is called, the JVM performs dynamic dispatch using the object's Virtual Method Table (vtable"}, {"id": "mod-ii-q10", "tag": "Q10", "title": "Abstract Class vs Interface: Architectural decision criteria in enterprise MuleSoft connector frameworks (Template Method vs Contract)", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nAn Interface defines a behavioral contract or capability ('can-do'), promoting complete decoupling and enabling multip"}, {"id": "mod-ii-q11", "tag": "Q11", "title": "Why Java allows multiple inheritance of interfaces but not classes: Solving the Diamond Problem with Java 8 default methods", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nMultiple class inheritance is prohibited in Java to eliminate the Diamond Problem, where a subclass inheriting from tw"}, {"id": "mod-ii-q12", "tag": "Q12", "title": "Can an Interface have constructors or instance variables? Java 8 static methods and Java 17 Sealed Interfaces in API governance", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nNo, an interface cannot have constructors or instance variables. All variables declared in an interface are implicitly"}, {"id": "mod-ii-q13", "tag": "Q13", "title": "Mule 4 Event Architecture: Project Reactor mechanics, thread handoffs across CPU_LITE, BLOCKING_IO, and CPU_INTENSIVE pools", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nIn Mule 4, the Mule Event is an immutable data context managed by a reactive engine powered by **Project Reactor**."}, {"id": "mod-ii-q14", "tag": "Q14", "title": "Attributes vs Variables (vars) in Mule Events: Preventing payload destruction using Target Variables in multi-tiered APIs", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\n**Attributes** are transport-specific metadata (HTTP headers, query params, status codes, JMS queues); they are immuta"}, {"id": "mod-ii-q15", "tag": "Q15", "title": "Mule 4 Error Object structure and enterprise error hierarchies: Custom Error Types, on-error-continue vs on-error-propagate", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nThe Mule 4 Error Object (`#[error]`) is an immutable, hierarchical diagnostic model consisting of `error.description`,"}, {"id": "mod-ii-q16", "tag": "Q16", "title": "Batch Job Variable Scoping: Can variables defined inside a Batch Step be accessed outside or in subsequent Batch Steps?", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nVariables defined inside a Batch Step are **Record-Level Variables**. They attach directly to the specific record curr"}, {"id": "mod-ii-q17", "tag": "Q17", "title": "Flow variables vs record-level vars vs legacy Mule 3 recordVars: How Mule 4 maintains record isolation under the hood", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nIn Mule 3, flow variables (`flowVars`) and batch record variables (`recordVars`) were two separate syntax maps, leadin"}, {"id": "mod-ii-q18", "tag": "Q18", "title": "Error recovery in Batch Jobs with acceptPolicy='ONLY_FAILURES': Record variable persistence and DLQ routing", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nWhen a record encounters an unhandled exception in a Batch Step, the engine marks the record as failed, captures the e"}, {"id": "mod-ii-q19", "tag": "Q19", "title": "Can variables defined in the Input / Initialize stage of a Batch Job be accessed at the On-Complete phase? Passing tracking metadata across lifecycles", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\n**No.** Variables defined in the Initialise / Input stage of a Batch Job **cannot** be accessed in the On-Complete pha"}, {"id": "mod-ii-q20", "tag": "Q20", "title": "The BatchJobResult data contract in On-Complete: Programmatic getters, SLA monitoring, and alerting on failure thresholds", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nIn the On-Complete phase, `payload` is strictly an instance of `org.mule.runtime.extension.batch.api.BatchJobResult`."}, {"id": "mod-ii-q21", "tag": "Q21", "title": "Batch Aggregator architecture: Streaming vs size-based chunking for bulk commits (Salesforce Bulk 2.0, Database bulk-insert) without memory hotspots", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nExecuting individual outbound connector calls per record inside a batch step causes network latency overhead and hits "}, {"id": "mod-ii-q22", "tag": "Q22", "title": "Offset/Limit vs Keyset (Cursor-based) pagination in MuleSoft APIs: Database buffer pool degradation and data consistency", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\n**Offset/Limit Pagination** (`LIMIT 50 OFFSET 100000`) is easy to implement and allows random page jumps. However, it "}, {"id": "mod-ii-q23", "tag": "Q23", "title": "Robust non-blocking pagination against SaaS APIs (ServiceNow, Stripe) using nextPageToken without triggering StackOverflowError", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nMany modern SaaS APIs return a `nextPageToken` or cursor pointer indicating the next page boundary."}, {"id": "mod-ii-q24", "tag": "Q24", "title": "Salesforce queryMore and QueryLocator vs Database pagination: When to pivot to Salesforce Bulk API 2.0", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nFor standard SOQL queries returning >2,000 records, Salesforce generates a server-side cursor called a **QueryLocator*"}, {"id": "mod-ii-q25", "tag": "Q25", "title": "On-Premise (Standalone / RTF) vs CloudHub: Complete Enterprise Decision Matrix across Cost, Security, Maintenance, and Scalability", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\n**CloudHub (1.0 / 2.0)** is MuleSoft's fully managed multi-tenant iPaaS running on AWS. It delivers automated infrastr"}, {"id": "mod-ii-q26", "tag": "Q26", "title": "Architectural drivers forcing On-Premises over CloudHub: Data sovereignty, sub-millisecond latency, and FIPS-140-2 compliance", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nIn banking, defense, and public healthcare, regulatory mandates strictly dictate that sensitive customer financial rec"}, {"id": "mod-ii-q27", "tag": "Q27", "title": "High Availability (HA) and clustering: Hazelcast in-memory grid (On-Prem) vs CloudHub multi-worker shared-nothing architecture", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\n**On-Premises High Availability** is built on an embedded **Hazelcast in-memory data grid**. Clustered Mule nodes shar"}, {"id": "mod-ii-q28", "tag": "Q28", "title": "Application-level refactoring for CloudHub 1.0 to CloudHub 2.0 Migration: Ephemeral file storage, port bindings, and container lifecycles", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nCloudHub 2.0 replaces CloudHub 1.0's AWS EC2 virtual machines with lightweight, containerized pods running on Amazon E"}, {"id": "mod-ii-q29", "tag": "Q29", "title": "Mule Maven Plugin configuration, POM definitions, vCore sizing increments, and property management in CloudHub 2.0 CI/CD", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\nIn `pom.xml`, the deployment plugin configuration changes from `<cloudHubDeployment>` to `<cloudhub2Deployment>` using"}, {"id": "mod-ii-q30", "tag": "Q30", "title": "Networking, Load Balancing, and Telemetry: Anypoint VPC vs Private Spaces, DLB vs Ingress, and automated Log Forwarding in CloudHub 2.0", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Technical Lead", "role": "Senior Developer / Technical Lead", "snippet": "✅ Senior Model Answer\n**Networking:** In CloudHub 1.0, network isolation required provisioning an **Anypoint VPC** with custom IP ranges. In"}];


// scratch/dw_engine_bundle.js
// Complete DataWeave 2.0 In-Browser Interpreter and Evaluator

class DWLexer {
  constructor(input) {
    this.input = input;
    this.pos = 0;
    this.tokens = [];
    this.tokenize();
  }

  tokenize() {
    const s = this.input;
    const len = s.length;

    while (this.pos < len) {
      // Skip whitespace
      while (this.pos < len && /\s/.test(s[this.pos])) this.pos++;
      if (this.pos >= len) break;

      // Comments
      if (s[this.pos] === '/' && s[this.pos + 1] === '/') {
        while (this.pos < len && s[this.pos] !== '\n') this.pos++;
        continue;
      }
      if (s[this.pos] === '/' && s[this.pos + 1] === '*') {
        this.pos += 2;
        while (this.pos < len && !(s[this.pos] === '*' && s[this.pos + 1] === '/')) this.pos++;
        this.pos += 2;
        continue;
      }

      const ch = s[this.pos];

      // Strings
      if (ch === '"' || ch === "'") {
        const q = ch;
        this.pos++;
        let str = '';
        while (this.pos < len && s[this.pos] !== q) {
          if (s[this.pos] === '\\' && this.pos + 1 < len) {
            this.pos++;
            const esc = s[this.pos];
            if (esc === 'n') str += '\n';
            else if (esc === 't') str += '\t';
            else if (esc === 'r') str += '\r';
            else str += esc;
          } else {
            str += s[this.pos];
          }
          this.pos++;
        }
        this.pos++; // skip closing quote
        this.tokens.push({ type: 'STRING', value: str });
        continue;
      }

      // Regex /pattern/flags
      if (ch === '/' && this.canBeRegex()) {
        this.pos++;
        let pat = '';
        while (this.pos < len && s[this.pos] !== '/') {
          if (s[this.pos] === '\\' && this.pos + 1 < len) {
            pat += '\\' + s[this.pos + 1];
            this.pos += 2;
          } else {
            pat += s[this.pos];
            this.pos++;
          }
        }
        this.pos++; // skip closing /
        let flags = '';
        while (this.pos < len && /[a-z]/i.test(s[this.pos])) {
          flags += s[this.pos];
          this.pos++;
        }
        this.tokens.push({ type: 'REGEX', value: new RegExp(pat, flags) });
        continue;
      }

      // Numbers
      if (/[0-9]/.test(ch)) {
        let numStr = '';
        while (this.pos < len && /[0-9.]/.test(s[this.pos])) {
          numStr += s[this.pos];
          this.pos++;
        }
        this.tokens.push({ type: 'NUMBER', value: parseFloat(numStr) });
        continue;
      }

      // Identifiers / Keywords / Anonymous params
      if (/[a-zA-Z_$]/.test(ch)) {
        let id = '';
        while (this.pos < len && /[a-zA-Z0-9_$#]/.test(s[this.pos])) {
          id += s[this.pos];
          this.pos++;
        }
        if (id === 'true') this.tokens.push({ type: 'BOOLEAN', value: true });
        else if (id === 'false') this.tokens.push({ type: 'BOOLEAN', value: false });
        else if (id === 'null') this.tokens.push({ type: 'NULL', value: null });
        else this.tokens.push({ type: 'ID', value: id });
        continue;
      }

      // Multi-char operators
      const two = s.substr(this.pos, 2);
      if (['->', '++', '--', '==', '!=', '<=', '>=', '..'].includes(two)) {
        this.tokens.push({ type: 'OP', value: two });
        this.pos += 2;
        continue;
      }

      // Single char operators & delimiters
      if ('{}[](),:;+*-/<>!&?.@'.includes(ch)) {
        this.tokens.push({ type: ch, value: ch });
        this.pos++;
        continue;
      }

      this.pos++;
    }
    this.tokens.push({ type: 'EOF', value: null });
  }

  canBeRegex() {
    if (this.tokens.length === 0) return true;
    const last = this.tokens[this.tokens.length - 1];
    return ['(', ',', ':', '=', '->', '[', '{', 'OP'].includes(last.type) ||
           (last.type === 'ID' && ['replace', 'match', 'matches', 'scan'].includes(last.value));
  }
}

class DWParser {
  constructor(tokens) {
    this.tokens = tokens;
    this.pos = 0;
  }

  peek() { return this.tokens[this.pos] || { type: 'EOF' }; }
  peekAhead(n) { return this.tokens[this.pos + n] || { type: 'EOF' }; }
  next() { return this.tokens[this.pos++]; }
  match(type, val) {
    const t = this.peek();
    if (t.type === type && (val === undefined || t.value === val)) {
      return this.next();
    }
    return null;
  }
  expect(type, val) {
    const res = this.match(type, val);
    if (!res) throw new Error(`Syntax Error: Expected '${val || type}' but encountered '${this.peek().value || this.peek().type}'`);
    return res;
  }

  parse() {
    const expr = this.parseExpression();
    return expr;
  }

  parseExpression() {
    return this.parseIfElse();
  }

  parseIfElse() {
    if (this.match('ID', 'if')) {
      this.expect('(');
      const cond = this.parseExpression();
      this.expect(')');
      const thenBranch = this.parseExpression();
      let elseBranch = null;
      if (this.match('ID', 'else')) {
        elseBranch = this.parseExpression();
      }
      return { type: 'IfElse', cond, thenBranch, elseBranch };
    }
    return this.parseDefault();
  }

  parseDefault() {
    let left = this.parseLogicOr();
    while (this.match('ID', 'default')) {
      const right = this.parseLogicOr();
      left = { type: 'Default', left, right };
    }
    return left;
  }

  parseLogicOr() {
    let left = this.parseLogicAnd();
    while (this.match('ID', 'or') || this.match('OP', '||')) {
      const right = this.parseLogicAnd();
      left = { type: 'Binary', op: 'or', left, right };
    }
    return left;
  }

  parseLogicAnd() {
    let left = this.parseEquality();
    while (this.match('ID', 'and') || this.match('OP', '&&')) {
      const right = this.parseEquality();
      left = { type: 'Binary', op: 'and', left, right };
    }
    return left;
  }

  parseEquality() {
    let left = this.parseRelational();
    let op;
    while ((op = this.match('OP', '==') || this.match('OP', '!='))) {
      const right = this.parseRelational();
      left = { type: 'Binary', op: op.value, left, right };
    }
    return left;
  }

  parseRelational() {
    let left = this.parseInfixDataWeave();
    let op;
    while ((op = this.match('<') || this.match('>') || this.match('OP', '<=') || this.match('OP', '>='))) {
      const right = this.parseInfixDataWeave();
      left = { type: 'Binary', op: op.value, left, right };
    }
    return left;
  }

  parseInfixDataWeave() {
    let left = this.parseAdditive();

    const INFIX_OPS = ['map', 'filter', 'groupBy', 'pluck', 'orderBy', 'distinctBy', 'reduce', 'joinBy', 'splitBy', 'replace', 'as'];
    while (true) {
      const peek = this.peek();
      if (peek.type === 'ID' && INFIX_OPS.includes(peek.value)) {
        const op = this.next().value;
        if (op === 'as') {
          const typeName = this.expect('ID').value;
          left = { type: 'Cast', expr: left, targetType: typeName };
        } else if (op === 'joinBy' || op === 'splitBy') {
          const arg = this.parseAdditive();
          left = { type: 'MethodCall', target: left, method: op, args: [arg] };
        } else if (op === 'replace') {
          const pattern = this.parsePrimary();
          this.expect('ID', 'with');
          const replacement = this.parseAdditive();
          left = { type: 'Replace', target: left, pattern, replacement };
        } else {
          // Higher order function
          let lambda;
          if (this.match('(')) {
            if (this.match('(')) {
              const argNames = [];
              if (this.peek().type !== ')') {
                do {
                  argNames.push(this.expect('ID').value);
                } while (this.match(','));
              }
              this.expect(')');
              this.expect('OP', '->');
              const body = this.parseExpression();
              this.expect(')');
              lambda = { type: 'Lambda', args: argNames, body };
            } else if (this.peek().type === 'ID' && this.peekAhead(1).value === '->') {
              const singleArg = this.next().value;
              this.expect('OP', '->');
              const body = this.parseExpression();
              this.expect(')');
              lambda = { type: 'Lambda', args: [singleArg], body };
            } else {
              // Anonymous expression ($ + 1)
              const body = this.parseExpression();
              this.expect(')');
              lambda = { type: 'Lambda', args: ['$', '$$', '$$$'], body };
            }
          } else {
            const body = this.parsePrimary();
            lambda = { type: 'Lambda', args: ['$', '$$', '$$$'], body };
          }
          left = { type: 'DataWeaveHOP', op, target: left, lambda };
        }
      } else {
        break;
      }
    }
    return left;
  }

  parseAdditive() {
    let left = this.parseMultiplicative();
    let op;
    while ((op = this.match('+') || this.match('-') || this.match('OP', '++') || this.match('OP', '--'))) {
      const right = this.parseMultiplicative();
      left = { type: 'Binary', op: op.value, left, right };
    }
    return left;
  }

  parseMultiplicative() {
    let left = this.parseUnary();
    let op;
    while ((op = this.match('*') || this.match('/'))) {
      const right = this.parseUnary();
      left = { type: 'Binary', op: op.value, left, right };
    }
    return left;
  }

  parseUnary() {
    if (this.match('ID', 'not') || this.match('!')) {
      const expr = this.parseUnary();
      return { type: 'Unary', op: '!', expr };
    }
    if (this.match('-')) {
      const expr = this.parseUnary();
      return { type: 'Unary', op: '-', expr };
    }
    return this.parsePostfix();
  }

  parsePostfix() {
    let expr = this.parsePrimary();

    while (true) {
      if (this.match('.')) {
        if (this.match('*')) {
          const key = this.expect('ID').value;
          expr = { type: 'MultiValueSelector', target: expr, key };
        } else if (this.match('@')) {
          const key = this.expect('ID').value;
          expr = { type: 'AttributeSelector', target: expr, key };
        } else {
          const key = this.expect('ID').value;
          expr = { type: 'MemberAccess', target: expr, key };
        }
      } else if (this.match('[')) {
        const fromExpr = this.parseExpression();
        if (this.match('ID', 'to')) {
          const toExpr = this.parseExpression();
          this.expect(']');
          expr = { type: 'Slice', target: expr, from: fromExpr, to: toExpr };
        } else {
          this.expect(']');
          expr = { type: 'Index', target: expr, index: fromExpr };
        }
      } else if (this.match('(')) {
        const args = [];
        if (this.peek().type !== ')') {
          do {
            args.push(this.parseExpression());
          } while (this.match(','));
        }
        this.expect(')');
        expr = { type: 'Call', callee: expr, args };
      } else {
        break;
      }
    }
    return expr;
  }

  parsePrimary() {
    const t = this.peek();

    if (t.type === 'NUMBER' || t.type === 'STRING' || t.type === 'BOOLEAN' || t.type === 'NULL' || t.type === 'REGEX') {
      this.next();
      return { type: 'Literal', value: t.value };
    }

    if (t.type === 'ID') {
      this.next();
      return { type: 'Identifier', name: t.value };
    }

    // Array [ a, b, c ]
    if (this.match('[')) {
      const elements = [];
      if (this.peek().type !== ']') {
        do {
          elements.push(this.parseExpression());
        } while (this.match(','));
      }
      this.expect(']');
      return { type: 'Array', elements };
    }

    // Object { k: v, (dynKey): v, (k: v) if cond, ... }
    if (this.match('{')) {
      const properties = [];
      if (this.peek().type !== '}') {
        do {
          let isDynamic = false;
          let key;
          if (this.match('(')) {
            const inner = this.parseExpression();
            if (this.match(':')) {
              // (key: val) if cond
              const valExpr = this.parseExpression();
              this.expect(')');
              let condition = null;
              if (this.match('ID', 'if')) {
                condition = this.parseExpression();
              }
              properties.push({ type: 'ConditionalProp', key: inner, value: valExpr, condition });
              continue;
            } else {
              this.expect(')');
              isDynamic = true;
              key = inner;
            }
          } else {
            const idTok = this.next();
            key = { type: 'Literal', value: idTok.value };
          }

          this.expect(':');
          const valExpr = this.parseExpression();
          let condition = null;
          if (this.match('ID', 'if')) {
            condition = this.parseExpression();
          }
          properties.push({ type: 'Property', isDynamic, key, value: valExpr, condition });
        } while (this.match(','));
      }
      this.expect('}');
      return { type: 'Object', properties };
    }

    if (this.match('(')) {
      const expr = this.parseExpression();
      this.expect(')');
      return expr;
    }

    throw new Error(`Syntax Error: Unexpected token '${t.value || t.type}'`);
  }
}

class DWEvaluator {
  constructor(stdLib) {
    this.stdLib = stdLib;
  }

  evaluate(node, scope) {
    if (!node) return null;

    switch (node.type) {
      case 'Literal':
        return node.value;

      case 'Identifier': {
        const name = node.name;
        if (name in scope) return scope[name];
        if (name in this.stdLib) return this.stdLib[name];
        return null;
      }

      case 'Array':
        return node.elements.map(e => this.evaluate(e, scope));

      case 'Object': {
        const obj = {};
        for (const p of node.properties) {
          if (p.condition) {
            const condVal = this.evaluate(p.condition, scope);
            if (!condVal) continue;
          }
          if (p.type === 'ConditionalProp') {
            const k = p.key.type === 'Identifier' ? p.key.name : String(this.evaluate(p.key, scope));
            obj[k] = this.evaluate(p.value, scope);
          } else {
            const k = p.isDynamic ? String(this.evaluate(p.key, scope)) : (p.key.value);
            obj[k] = this.evaluate(p.value, scope);
          }
        }
        return obj;
      }

      case 'MemberAccess': {
        const target = this.evaluate(node.target, scope);
        if (target === null || target === undefined) return null;
        const key = node.key;
        if (Array.isArray(target)) {
          return target.map(item => (item && typeof item === 'object') ? item[key] : null).filter(x => x !== null && x !== undefined);
        }
        if (typeof target === 'object') {
          return target[key] !== undefined ? target[key] : (target['@' + key] !== undefined ? target['@' + key] : null);
        }
        return null;
      }

      case 'AttributeSelector': {
        const target = this.evaluate(node.target, scope);
        if (!target || typeof target !== 'object') return null;
        return target['@' + node.key] !== undefined ? target['@' + node.key] : target[node.key];
      }

      case 'MultiValueSelector': {
        const target = this.evaluate(node.target, scope);
        if (!target) return [];
        if (Array.isArray(target)) {
          return target.map(item => item[node.key]).filter(x => x !== undefined);
        }
        return target[node.key] ? (Array.isArray(target[node.key]) ? target[node.key] : [target[node.key]]) : [];
      }

      case 'Index': {
        const target = this.evaluate(node.target, scope);
        const idx = this.evaluate(node.index, scope);
        if (!target) return null;
        if (Array.isArray(target) || typeof target === 'string') {
          const indexNum = Number(idx);
          const pos = indexNum < 0 ? target.length + indexNum : indexNum;
          return target[pos] !== undefined ? target[pos] : null;
        }
        return target[idx];
      }

      case 'Slice': {
        const target = this.evaluate(node.target, scope);
        const from = Number(this.evaluate(node.from, scope));
        const to = Number(this.evaluate(node.to, scope));
        if (!target) return target;
        const len = target.length;
        const s = from < 0 ? Math.max(0, len + from) : from;
        const e = to < 0 ? len + to + 1 : to + 1;
        return target.slice(s, e);
      }

      case 'Binary': {
        const left = this.evaluate(node.left, scope);
        const right = this.evaluate(node.right, scope);
        switch (node.op) {
          case '+': return Number(left) + Number(right);
          case '-': return Number(left) - Number(right);
          case '*': return Number(left) * Number(right);
          case '/': return Number(left) / Number(right);
          case '++':
            if (Array.isArray(left) && Array.isArray(right)) return [...left, ...right];
            if (Array.isArray(left)) return [...left, right];
            if (Array.isArray(right)) return [left, ...right];
            if (typeof left === 'object' && left !== null && typeof right === 'object' && right !== null) return { ...left, ...right };
            return String(left ?? '') + String(right ?? '');
          case '--':
            if (Array.isArray(left) && Array.isArray(right)) return left.filter(x => !right.includes(x));
            if (typeof left === 'object' && left !== null && Array.isArray(right)) {
              const res = { ...left };
              right.forEach(k => delete res[k]);
              return res;
            }
            return left;
          case '==': return JSON.stringify(left) === JSON.stringify(right);
          case '!=': return JSON.stringify(left) !== JSON.stringify(right);
          case '<': return left < right;
          case '<=': return left <= right;
          case '>': return left > right;
          case '>=': return left >= right;
          case 'and': return Boolean(left && right);
          case 'or': return Boolean(left || right);
        }
        return null;
      }

      case 'Unary': {
        const val = this.evaluate(node.expr, scope);
        if (node.op === '!') return !val;
        if (node.op === '-') return -val;
        return val;
      }

      case 'Default': {
        const left = this.evaluate(node.left, scope);
        if (left !== null && left !== undefined && left !== '') return left;
        return this.evaluate(node.right, scope);
      }

      case 'IfElse': {
        const cond = this.evaluate(node.cond, scope);
        if (cond) return this.evaluate(node.thenBranch, scope);
        if (node.elseBranch) return this.evaluate(node.elseBranch, scope);
        return null;
      }

      case 'Call': {
        const callee = this.evaluate(node.callee, scope);
        if (typeof callee === 'function') {
          const evaluatedArgs = node.args.map(a => this.evaluate(a, scope));
          return callee(...evaluatedArgs);
        }
        throw new Error(`Runtime Error: '${node.callee.name || "Expression"}' is not a function.`);
      }

      case 'MethodCall': {
        const target = this.evaluate(node.target, scope);
        const args = node.args.map(a => this.evaluate(a, scope));
        if (node.method === 'joinBy') return Array.isArray(target) ? target.join(args[0]) : String(target);
        if (node.method === 'splitBy') return String(target).split(args[0]);
        return null;
      }

      case 'Replace': {
        const target = String(this.evaluate(node.target, scope) ?? '');
        const pat = this.evaluate(node.pattern, scope);
        const repl = node.replacement;
        return target.replace(pat, (...matchArgs) => {
          const subScope = { ...scope, $: matchArgs, $0: matchArgs[0], $1: matchArgs[1], $2: matchArgs[2] };
          return this.evaluate(repl, subScope);
        });
      }

      case 'Cast': {
        const val = this.evaluate(node.expr, scope);
        if (node.targetType === 'String') return String(val ?? '');
        if (node.targetType === 'Number') return Number(val);
        if (node.targetType === 'Boolean') return Boolean(val);
        return val;
      }

      case 'DataWeaveHOP': {
        const target = this.evaluate(node.target, scope);
        const lambda = node.lambda;
        const op = node.op;

        const evalLambda = (item, idx, key) => {
          const lScope = { ...scope };
          if (lambda.args.length === 1) {
            lScope[lambda.args[0]] = item;
          } else if (lambda.args.length === 2) {
            lScope[lambda.args[0]] = item;
            lScope[lambda.args[1]] = key !== undefined ? key : idx;
          } else if (lambda.args.length >= 3) {
            lScope[lambda.args[0]] = item;
            lScope[lambda.args[1]] = key;
            lScope[lambda.args[2]] = idx;
          }
          lScope['$'] = item;
          lScope['$$'] = key !== undefined ? key : idx;
          lScope['$$$'] = idx;
          return this.evaluate(lambda.body, lScope);
        };

        if (op === 'map') {
          if (!Array.isArray(target)) return [];
          return target.map((item, idx) => evalLambda(item, idx));
        }

        if (op === 'filter') {
          if (!Array.isArray(target)) return [];
          return target.filter((item, idx) => Boolean(evalLambda(item, idx)));
        }

        if (op === 'groupBy') {
          if (!Array.isArray(target)) return {};
          const res = {};
          target.forEach((item, idx) => {
            const k = String(evalLambda(item, idx));
            if (!res[k]) res[k] = [];
            res[k].push(item);
          });
          return res;
        }

        if (op === 'pluck') {
          if (!target || typeof target !== 'object') return [];
          const res = [];
          let idx = 0;
          for (const k of Object.keys(target)) {
            res.push(evalLambda(target[k], idx++, k));
          }
          return res;
        }

        if (op === 'orderBy') {
          if (!Array.isArray(target)) return target;
          return [...target].sort((a, b) => {
            const vA = evalLambda(a, 0);
            const vB = evalLambda(b, 0);
            return vA < vB ? -1 : (vA > vB ? 1 : 0);
          });
        }

        if (op === 'distinctBy') {
          if (!Array.isArray(target)) return target;
          const seen = new Set();
          return target.filter((item, idx) => {
            const v = JSON.stringify(evalLambda(item, idx));
            if (seen.has(v)) return false;
            seen.add(v);
            return true;
          });
        }

        if (op === 'reduce') {
          if (!Array.isArray(target) || !target.length) return null;
          return target.reduce((acc, curr) => {
            const lScope = { ...scope, $: curr, $$: acc };
            if (lambda.args.length >= 2) {
              lScope[lambda.args[0]] = curr;
              lScope[lambda.args[1]] = acc;
            }
            return this.evaluate(lambda.body, lScope);
          });
        }

        return target;
      }
    }
  }
}

// Lightweight XML parser for playground
function parseDWXml(xmlStr) {
  if (!xmlStr || typeof xmlStr !== 'string') return {};
  const clean = xmlStr.replace(/<\?[^>]*\?>/g, '').trim();

  function parseNode(str) {
    const tagMatch = str.match(/^<([a-zA-Z0-9_:-]+)([^>]*)>([\s\S]*)<\/\1>$/);
    if (!tagMatch) {
      const selfClose = str.match(/^<([a-zA-Z0-9_:-]+)([^>]*)\/>$/);
      if (selfClose) {
        return { ...parseAttrs(selfClose[2]) };
      }
      return str.trim();
    }

    const tagName = tagMatch[1];
    const rawAttrs = tagMatch[2];
    const inner = tagMatch[3].trim();
    const attrs = parseAttrs(rawAttrs);

    const children = {};
    Object.assign(children, attrs);

    let pos = 0;
    let foundChildren = false;
    while (pos < inner.length) {
      const openIdx = inner.indexOf('<', pos);
      if (openIdx === -1) break;
      const tagEnd = inner.indexOf('>', openIdx);
      if (tagEnd === -1) break;
      const tagHeader = inner.slice(openIdx + 1, tagEnd);
      if (tagHeader.startsWith('/')) { pos = tagEnd + 1; continue; }

      const childName = tagHeader.split(/\s+/)[0].replace(/\/$/, '');
      if (tagHeader.endsWith('/')) {
        foundChildren = true;
        const cVal = parseNode(inner.slice(openIdx, tagEnd + 1));
        const sName = childName.split(':').pop();
        addChild(children, sName, cVal);
        pos = tagEnd + 1;
        continue;
      }

      const closeTag = `</${childName}>`;
      let searchPos = tagEnd + 1;
      let depth = 1;
      let closeIdx = -1;
      while (searchPos < inner.length) {
        const nextOpen = inner.indexOf(`<${childName}`, searchPos);
        const nextClose = inner.indexOf(closeTag, searchPos);
        if (nextClose === -1) break;
        if (nextOpen !== -1 && nextOpen < nextClose) {
          depth++;
          searchPos = nextOpen + childName.length + 1;
        } else {
          depth--;
          if (depth === 0) {
            closeIdx = nextClose;
            break;
          }
          searchPos = nextClose + closeTag.length;
        }
      }

      if (closeIdx !== -1) {
        foundChildren = true;
        const fullChildStr = inner.slice(openIdx, closeIdx + closeTag.length);
        const sName = childName.split(':').pop();
        const cVal = parseNode(fullChildStr);
        addChild(children, sName, cVal);
        pos = closeIdx + closeTag.length;
      } else {
        pos = tagEnd + 1;
      }
    }

    if (!foundChildren) {
      if (Object.keys(attrs).length > 0) {
        children['#text'] = inner;
        return children;
      }
      return inner;
    }

    return children;
  }

  function parseAttrs(attrStr) {
    const attrs = {};
    const re = /([a-zA-Z0-9_:-]+)="([^"]*)"/g;
    let m;
    while ((m = re.exec(attrStr)) !== null) {
      if (!m[1].startsWith('xmlns')) {
        const s = m[1].split(':').pop();
        attrs['@' + s] = m[2];
        attrs[s] = m[2];
      }
    }
    return attrs;
  }

  function addChild(parent, key, val) {
    if (parent[key] === undefined) {
      parent[key] = val;
    } else if (Array.isArray(parent[key])) {
      parent[key].push(val);
    } else {
      parent[key] = [parent[key], val];
    }
  }

  return parseNode(clean);
}

// Global Evaluate function
function executeDataWeave(scriptText, inputText, inputFormat = 'json', varsText = '{}', attrsText = '{}') {
  const startTime = Date.now();

  // 1. Parse Input
  let payload = null;
  if (inputText && inputText.trim()) {
    const trimmed = inputText.trim();
    if (inputFormat === 'xml' || trimmed.startsWith('<')) {
      try {
        payload = parseDWXml(trimmed);
      } catch (e) {
        return { success: false, error: `XML Parse Error: ${e.message}`, durationMs: 0 };
      }
    } else {
      try {
        payload = JSON.parse(trimmed);
      } catch (e) {
        return { success: false, error: `Invalid Input JSON: ${e.message}`, durationMs: 0 };
      }
    }
  }

  // Parse Vars and Attrs
  let vars = {};
  if (varsText && varsText.trim()) {
    try { vars = JSON.parse(varsText); } catch (e) {}
  }
  let attrs = {};
  if (attrsText && attrsText.trim()) {
    try { attrs = JSON.parse(attrsText); } catch (e) {}
  }

  // 2. Parse DW Header & Body
  let header = "";
  let body = scriptText;
  const sepIdx = scriptText.indexOf('---');
  if (sepIdx !== -1) {
    header = scriptText.slice(0, sepIdx).trim();
    body = scriptText.slice(sepIdx + 3).trim();
  }

  const customFuncs = {};
  const customVars = {};
  let outputFormat = 'application/json';

  header.split('\n').forEach(line => {
    const l = line.trim();
    if (l.startsWith('output')) {
      const parts = l.split(/\s+/);
      if (parts[1]) outputFormat = parts[1];
    } else if (l.startsWith('fun ')) {
      const m = l.match(/^fun\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*=\s*(.*)$/);
      if (m) {
        customFuncs[m[1]] = {
          args: m[2].split(',').map(a => a.trim()).filter(Boolean),
          bodyText: m[3]
        };
      }
    } else if (l.startsWith('var ')) {
      const m = l.match(/^var\s+([a-zA-Z0-9_]+)\s*=\s*(.*)$/);
      if (m) customVars[m[1]] = m[2];
    }
  });

  const stdLib = {
    sizeOf: (v) => v ? (Array.isArray(v) || typeof v === 'string' ? v.length : Object.keys(v).length) : 0,
    isEmpty: (v) => !v || (Array.isArray(v) || typeof v === 'string' ? v.length === 0 : Object.keys(v).length === 0),
    isBlank: (v) => !v || String(v).trim().length === 0,
    upper: (s) => s ? String(s).toUpperCase() : s,
    lower: (s) => s ? String(s).toLowerCase() : s,
    capitalize: (s) => s ? String(s).charAt(0).toUpperCase() + String(s).slice(1).toLowerCase() : s,
    trim: (s) => s ? String(s).trim() : s,
    sum: (arr) => Array.isArray(arr) ? arr.reduce((a, b) => a + (Number(b) || 0), 0) : Number(arr) || 0,
    avg: (arr) => Array.isArray(arr) && arr.length ? arr.reduce((a, b) => a + (Number(b) || 0), 0) / arr.length : 0,
    min: (arr) => Array.isArray(arr) && arr.length ? Math.min(...arr) : null,
    max: (arr) => Array.isArray(arr) && arr.length ? Math.max(...arr) : null,
    round: (n) => Math.round(Number(n)),
    ceil: (n) => Math.ceil(Number(n)),
    floor: (n) => Math.floor(Number(n)),
    abs: (n) => Math.abs(Number(n)),
    flatten: (arr) => Array.isArray(arr) ? arr.flat(Infinity) : [arr],
    keysOf: (obj) => obj && typeof obj === 'object' ? Object.keys(obj) : [],
    valuesOf: (obj) => obj && typeof obj === 'object' ? Object.values(obj) : [],
    entriesOf: (obj) => obj && typeof obj === 'object' ? Object.entries(obj).map(([k, v]) => ({ key: k, value: v })) : [],
    contains: (t, s) => {
      if (t === null || t === undefined) return false;
      if (Array.isArray(t) || typeof t === 'string') return t.includes(s);
      if (typeof t === 'object') return Object.values(t).includes(s);
      return false;
    },
    startsWith: (s, p) => s ? String(s).startsWith(p) : false,
    endsWith: (s, p) => s ? String(s).endsWith(p) : false,
    now: () => new Date().toISOString(),
    uuid: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    }),
    typeOf: (val) => {
      if (val === null) return 'Null';
      if (Array.isArray(val)) return 'Array';
      if (typeof val === 'number') return Number.isInteger(val) ? 'Integer' : 'Number';
      if (typeof val === 'string') return 'String';
      if (typeof val === 'boolean') return 'Boolean';
      if (typeof val === 'object') return 'Object';
      return 'Unknown';
    }
  };

  const evaluator = new DWEvaluator(stdLib);
  const scope = { payload, vars, attributes: attrs };

  try {
    // Functions
    for (const [fName, fDef] of Object.entries(customFuncs)) {
      const lexer = new DWLexer(fDef.bodyText);
      const parser = new DWParser(lexer.tokens);
      const ast = parser.parse();
      scope[fName] = (...passedArgs) => {
        const fScope = { ...scope };
        fDef.args.forEach((a, i) => { fScope[a] = passedArgs[i]; });
        return evaluator.evaluate(ast, fScope);
      };
    }

    // Vars
    for (const [vName, vExpr] of Object.entries(customVars)) {
      const lexer = new DWLexer(vExpr);
      const parser = new DWParser(lexer.tokens);
      const ast = parser.parse();
      scope[vName] = evaluator.evaluate(ast, scope);
    }

    // Main Body
    const lexer = new DWLexer(body);
    const parser = new DWParser(lexer.tokens);
    const ast = parser.parse();
    const rawResult = evaluator.evaluate(ast, scope);

    const duration = Date.now() - startTime;
    let formattedOutput = "";
    if (outputFormat.includes('json')) {
      formattedOutput = JSON.stringify(rawResult, null, 2);
    } else {
      formattedOutput = String(rawResult ?? '');
    }

    return {
      success: true,
      output: formattedOutput,
      durationMs: duration,
      outputFormat
    };
  } catch (err) {
    return {
      success: false,
      error: err.message,
      durationMs: Date.now() - startTime
    };
  }
}

// Enhanced Client Application Controller for Hyper-Modern MuleSoft Hub

// ==========================================
// 1. Accordion & Practice Mode Controllers
// ==========================================


// Clickable FAQ Header: clicking the question header toggles the answer drawer
document.addEventListener('click', (e) => {
  const header = e.target.closest('.faq-header');
  if (header && !e.target.closest('button') && !e.target.closest('a')) {
    const card = header.closest('.faq-card');
    if (card) {
      const btn = card.querySelector('.reveal-answer-btn');
      if (btn) toggleAnswerDrawer(btn);
    }
  }
});

function toggleAnswerDrawer(btn) {
  const card = btn.closest('.faq-card');
  if (!card) return;
  const drawer = card.querySelector('.answer-drawer');
  if (!drawer) return;
  
  const isExpanded = btn.getAttribute('aria-expanded') === 'true';
  const iconSpan = btn.querySelector('.reveal-btn-icon');
  const textSpan = btn.querySelector('.reveal-btn-text');

  if (isExpanded) {
    drawer.classList.remove('is-revealed');
    btn.setAttribute('aria-expanded', 'false');
    btn.classList.remove('active');
    if (iconSpan) iconSpan.textContent = '👁️';
    if (textSpan) textSpan.textContent = 'Reveal Senior Model Answer & Verbal Script';
  } else {
    drawer.classList.add('is-revealed');
    btn.setAttribute('aria-expanded', 'true');
    btn.classList.add('active');
    if (iconSpan) iconSpan.textContent = '🙈';
    if (textSpan) textSpan.textContent = 'Hide Model Answer & Verbal Script';
  }
}

function expandAllAnswers() {
  document.querySelectorAll('.faq-card').forEach(card => {
    const drawer = card.querySelector('.answer-drawer');
    const btn = card.querySelector('.reveal-answer-btn');
    if (drawer && btn) {
      drawer.classList.add('is-revealed');
      btn.setAttribute('aria-expanded', 'true');
      btn.classList.add('active');
      const iconSpan = btn.querySelector('.reveal-btn-icon');
      const textSpan = btn.querySelector('.reveal-btn-text');
      if (iconSpan) iconSpan.textContent = '🙈';
      if (textSpan) textSpan.textContent = 'Hide Model Answer & Verbal Script';
    }
  });
}

function collapseAllAnswers() {
  document.querySelectorAll('.faq-card').forEach(card => {
    const drawer = card.querySelector('.answer-drawer');
    const btn = card.querySelector('.reveal-answer-btn');
    if (drawer && btn) {
      drawer.classList.remove('is-revealed');
      btn.setAttribute('aria-expanded', 'false');
      btn.classList.remove('active');
      const iconSpan = btn.querySelector('.reveal-btn-icon');
      const textSpan = btn.querySelector('.reveal-btn-text');
      if (iconSpan) iconSpan.textContent = '👁️';
      if (textSpan) textSpan.textContent = 'Reveal Senior Model Answer & Verbal Script';
    }
  });
}

function togglePracticeMode() {
  const isPractice = document.body.classList.toggle('practice-mode-on');
  const pBtn = document.getElementById('practice-btn');
  if (isPractice) {
    collapseAllAnswers();
    if (pBtn) {
      pBtn.classList.add('btn-active');
      pBtn.innerHTML = '🎯 Practice Mode: ON';
    }
  } else {
    if (pBtn) {
      pBtn.classList.remove('btn-active');
      pBtn.innerHTML = '🎯 Practice Mode';
    }
  }
}

// ==========================================
// 2. Code Copy with Micro-Interaction Animation
// ==========================================

function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  if (!pre) return;
  const text = pre.innerText;

  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    const origHtml = btn.innerHTML;
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" class="bounce-check">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span style="color:#10b981; font-weight:700;">Copied!</span>
    `;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = origHtml;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy', err);
  });
}

function copyVerbalScript(btn) {
  const callout = btn.closest('.callout-verbal');
  if (!callout) return;
  const quote = callout.querySelector('.verbal-quote');
  if (!quote) return;
  const text = quote.innerText.replace(/^"|"$/g, '').trim();

  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    const origHtml = btn.innerHTML;
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" class="bounce-check">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span style="color:#10b981; font-weight:700;">Copied!</span>
    `;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = origHtml;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy verbal script', err);
  });
}

// ==========================================
// 3. Category & Sidebar Filters
// ==========================================

function filterBlogCategory(catName, btn) {
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const articles = document.querySelectorAll('.blog-article');
  articles.forEach(art => {
    const artCat = art.getAttribute('data-category');
    if (catName === 'all' || artCat === catName) {
      art.style.display = 'block';
    } else {
      art.style.display = 'none';
    }
  });
}

function filterSidebarModules(query) {
  const q = query.toLowerCase().trim();
  const items = document.querySelectorAll('.quick-sidebar-item');
  items.forEach(item => {
    const link = item.querySelector('.quick-sidebar-link');
    const text = link.innerText.toLowerCase();
    item.style.display = (!q || text.includes(q)) ? 'block' : 'none';
  });
}

function toggleSidebar() {
  const sb = document.getElementById('toc-sidebar');
  if (sb) {
    sb.classList.toggle('collapsed');
  }
}

// Active Sidebar Link Tracker (ScrollSpy)
window.addEventListener('DOMContentLoaded', () => {
  // Sync theme icon with current theme
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('.quick-sidebar-link').forEach(link => {
          if (link.getAttribute('data-mod-id') === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.blog-article').forEach(art => observer.observe(art));
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const bar = document.getElementById('top-progress');
  if (bar) bar.style.width = scrolled + '%';
});

// Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', nextTheme);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
  try {
    localStorage.setItem('mulesoft_hub_theme', nextTheme);
  } catch(e) {}
}

// ==========================================
// 4. Interactive Quick Search Modal (Ctrl+K)
// ==========================================

let selectedSearchIndex = -1;

function openSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.add('active');
    const input = document.getElementById('search-input-field');
    if (input) {
      input.focus();
      input.select();
    }
    renderSearchHistory();
  }
}

function closeSearchModal(e) {
  if (e && e.target !== e.currentTarget && e.target.id !== 'btn-close-search') return;
  const modal = document.getElementById('search-modal');
  if (modal) modal.classList.remove('active');
}

function handleSearchInput(e) {
  const query = e.target.value.toLowerCase().trim();
  const list = document.getElementById('search-results-list');
  selectedSearchIndex = -1;

  if (!query) {
    list.innerHTML = '<li style="padding:20px; text-align:center; color:var(--text-dim);">Type to search across 36 Technical Modules, DataWeave scripts, and incident runbooks...</li>';
    return;
  }

  const matches = (typeof SEARCH_INDEX !== 'undefined' ? SEARCH_INDEX : []).filter(item => {
    return item.title.toLowerCase().includes(query) ||
           item.tag.toLowerCase().includes(query) ||
           item.category.toLowerCase().includes(query) ||
           item.snippet.toLowerCase().includes(query);
  }).slice(0, 15);

  if (matches.length === 0) {
    list.innerHTML = `<li style="padding:24px; text-align:center; color:var(--text-muted);">No technical topics matching "<strong>${escapeHtml(query)}</strong>"</li>`;
    return;
  }

  list.innerHTML = matches.map((m, idx) => `
    <li class="search-result-item" data-idx="${idx}" onclick="jumpToSearchResult('${m.id}', '${escapeHtml(query)}')">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
        <span class="q-tag">${m.tag}</span>
        <span class="badge badge-primary">${m.modTitle}</span>
        <span class="badge ${m.role.includes('Architect') || m.role.includes('Lead') ? 'badge-lead' : 'badge-dev'}">${m.role}</span>
      </div>
      <div class="search-result-title">${highlightQuery(m.title, query)}</div>
      <div class="search-result-snippet">${highlightQuery(m.snippet, query)}...</div>
    </li>
  `).join('');
}

function handleSearchKeydown(e) {
  const items = document.querySelectorAll('.search-result-item');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (selectedSearchIndex < items.length - 1) {
      selectedSearchIndex++;
      updateSearchSelection(items);
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (selectedSearchIndex > 0) {
      selectedSearchIndex--;
      updateSearchSelection(items);
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (selectedSearchIndex >= 0 && items[selectedSearchIndex]) {
      items[selectedSearchIndex].click();
    }
  } else if (e.key === 'Escape') {
    closeSearchModal();
  }
}

function updateSearchSelection(items) {
  items.forEach((it, idx) => {
    if (idx === selectedSearchIndex) {
      it.classList.add('selected');
      it.scrollIntoView({ block: 'nearest' });
    } else {
      it.classList.remove('selected');
    }
  });
}

function jumpToSearchResult(elemId, query) {
  saveSearchHistory(query);
  closeSearchModal();
  const el = document.getElementById(elemId);
  if (el) {
    const parentArticle = el.closest('.blog-article');
    if (parentArticle) parentArticle.style.display = 'block';
    
    // Automatically reveal answer
    const drawer = el.querySelector('.answer-drawer');
    const btn = el.querySelector('.reveal-answer-btn');
    if (drawer && btn) {
      drawer.classList.add('is-revealed');
      btn.setAttribute('aria-expanded', 'true');
      btn.classList.add('active');
      const iconSpan = btn.querySelector('.reveal-btn-icon');
      const textSpan = btn.querySelector('.reveal-btn-text');
      if (iconSpan) iconSpan.textContent = '🙈';
      if (textSpan) textSpan.textContent = 'Hide Model Answer & Verbal Script';
    }

    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.style.outline = '2px solid #00f0ff';
    setTimeout(() => { el.style.outline = 'none'; }, 2500);
  }
}

function saveSearchHistory(query) {
  if (!query || query.length < 2) return;
  try {
    let hist = JSON.parse(localStorage.getItem('mulesoft_recent_searches') || '[]');
    hist = [query, ...hist.filter(q => q.toLowerCase() !== query.toLowerCase())].slice(0, 5);
    localStorage.setItem('mulesoft_recent_searches', JSON.stringify(hist));
  } catch(e) {}
}

function renderSearchHistory() {
  try {
    const hist = JSON.parse(localStorage.getItem('mulesoft_recent_searches') || '[]');
    const container = document.getElementById('search-history-container');
    const chips = document.getElementById('history-chips-container');
    if (!container || !chips) return;
    if (hist.length === 0) {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'flex';
    chips.innerHTML = hist.map(h => `
      <span class="cat-pill" style="font-size:0.72rem; padding:2px 8px;" onclick="applySearchHistoryChip('${escapeHtml(h)}')">${escapeHtml(h)}</span>
    `).join('');
  } catch(e) {}
}

function applySearchHistoryChip(query) {
  const inp = document.getElementById('search-input-field');
  if (inp) {
    inp.value = query;
    handleSearchInput({ target: { value: query } });
  }
}

function highlightQuery(text, query) {
  if (!query) return escapeHtml(text);
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')})`, 'gi');
  return escapeHtml(text).replace(re, '<mark class="search-highlight">$1</mark>');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Global Ctrl+K Listener
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openSearchModal();
  }
});

// ==========================================

// ==========================================
// 5. DataWeave 2.0 Playground & Studio Lab Engine (26 Scenarios)
// ==========================================

var DW_PRESETS = [{"id": "json-to-json", "title": "JSON to JSON - Simple Mapping", "category": "json", "format": "json", "input": "{\n  \"order_id\": \"ORD-98214\",\n  \"cust_first_name\": \"Niranjan\",\n  \"cust_last_name\": \"Potter\",\n  \"cust_email\": \"niranjan@mulesoft.hub\",\n  \"billing_amount\": 499.50,\n  \"currency_code\": \"USD\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  orderId: payload.order_id,\n  customerName: payload.cust_first_name ++ \" \" ++ payload.cust_last_name,\n  emailAddress: lower(payload.cust_email),\n  invoice: {\n    total: payload.billing_amount,\n    currency: payload.currency_code,\n    isPaid: true\n  },\n  processedAt: now() as String {format: \"yyyy-MM-dd HH:mm:ss\"}\n}", "output": "{\n  \"orderId\": \"ORD-98214\",\n  \"customerName\": \"Niranjan Potter\",\n  \"emailAddress\": \"niranjan@mulesoft.hub\",\n  \"invoice\": {\n    \"total\": 499.5,\n    \"currency\": \"USD\",\n    \"isPaid\": true\n  },\n  \"processedAt\": \"2026-11-18 14:15:00\"\n}", "explanation": {"kyaHua": "Incoming JSON keys (snake_case) ko canonical enterprise camelCase JSON format me map kiya gaya hai. String concatenation (++) se full name banaya aur nested invoice object banaya.", "functionDetails": "String concatenation '++', lower(), now() as String {format: '...'}. Ye basic field remapping aur data normalization ke liye fundamental function hai.", "interviewQuestion": "Interviewer asks: 'How do you rename keys and concatenate strings while preserving data types in DataWeave?'", "realProjectUsage": "Experience API to Process API transformation: Client payload ko System API canonical data model me transform karne ke liye har API me use hota hai."}, "name": "JSON to JSON - Simple Mapping", "payload": "{\n  \"order_id\": \"ORD-98214\",\n  \"cust_first_name\": \"Niranjan\",\n  \"cust_last_name\": \"Potter\",\n  \"cust_email\": \"niranjan@mulesoft.hub\",\n  \"billing_amount\": 499.50,\n  \"currency_code\": \"USD\"\n}"}, {"id": "json-to-xml", "title": "JSON to XML", "category": "xml", "format": "json", "input": "{\n  \"account\": {\n    \"id\": \"ACC-7890\",\n    \"name\": \"Florida Power & Light\",\n    \"tier\": \"ENTERPRISE\",\n    \"active\": true\n  }\n}", "script": "%dw 2.0\noutput application/xml\n---\nAccountRequest @(xmlns: \"http://schemas.utility.com/account/v1\", id: payload.account.id): {\n  AccountName: payload.account.name,\n  AccountTier: payload.account.tier,\n  IsActive: payload.account.active\n}", "output": "<?xml version='1.0' encoding='UTF-8'?>\n<AccountRequest xmlns=\"http://schemas.utility.com/account/v1\" id=\"ACC-7890\">\n  <AccountName>Florida Power &amp; Light</AccountName>\n  <AccountTier>ENTERPRISE</AccountTier>\n  <IsActive>true</IsActive>\n</AccountRequest>", "explanation": {"kyaHua": "JSON object ko SOAP/XML schema compliant XML envelope me transform kiya gaya hai with XML Root Attributes (@(xmlns: ..., id: ...)).", "functionDetails": "XML root node declaration with '@(attr1: val, attr2: val)'. DataWeave output directive 'output application/xml' specify karta hai.", "interviewQuestion": "Interviewer asks: 'How do you add XML attributes and namespaces to the root tag in DataWeave 2.0?'", "realProjectUsage": "Legacy SOAP Web Service integration (SAP / Mainframe / Oracle EBS) jaha REST JSON input ko SOAP XML payload me convert karna padta hai."}, "name": "JSON to XML", "payload": "{\n  \"account\": {\n    \"id\": \"ACC-7890\",\n    \"name\": \"Florida Power & Light\",\n    \"tier\": \"ENTERPRISE\",\n    \"active\": true\n  }\n}"}, {"id": "xml-to-json", "title": "XML to JSON", "category": "xml", "format": "xml", "input": "<?xml version='1.0' encoding='UTF-8'?>\n<GetCustomerResponse xmlns=\"http://utility.fpl.com/service\">\n  <Customer id=\"C-9912\">\n    <Name>Nextera Energy</Name>\n    <MeterNumber>MTR-55410</MeterNumber>\n    <Status>ACTIVE</Status>\n    <CurrentReading unit=\"KWH\">4820.75</CurrentReading>\n  </Customer>\n</GetCustomerResponse>", "script": "%dw 2.0\noutput application/json\nns ns0 http://utility.fpl.com/service\n---\n{\n  customerId: payload.ns0#GetCustomerResponse.ns0#Customer.@id,\n  customerName: payload.ns0#GetCustomerResponse.ns0#Customer.ns0#Name,\n  meterId: payload.ns0#GetCustomerResponse.ns0#Customer.ns0#MeterNumber,\n  reading: payload.ns0#GetCustomerResponse.ns0#Customer.ns0#CurrentReading as Number,\n  unit: payload.ns0#GetCustomerResponse.ns0#Customer.ns0#CurrentReading.@unit,\n  status: payload.ns0#GetCustomerResponse.ns0#Customer.ns0#Status\n}", "output": "{\n  \"customerId\": \"C-9912\",\n  \"customerName\": \"Nextera Energy\",\n  \"meterId\": \"MTR-55410\",\n  \"reading\": 4820.75,\n  \"unit\": \"KWH\",\n  \"status\": \"ACTIVE\"\n}", "explanation": {"kyaHua": "Namespaced XML SOAP payload ko parse karke attributes (.@attr) aur element text ko canonical JSON me extract kiya gaya hai.", "functionDetails": "Namespace declaration 'ns ns0 http://...', element namespace access 'ns0#Tag', aur attribute extraction '.@id' and '.@unit'.", "interviewQuestion": "Interviewer asks: 'How do you handle XML namespaces and attributes when parsing SOAP XML in DataWeave?'", "realProjectUsage": "SOAP Web Service System API response ko Process API ke JSON format me map karne ke liye."}, "name": "XML to JSON", "payload": "<?xml version='1.0' encoding='UTF-8'?>\n<GetCustomerResponse xmlns=\"http://utility.fpl.com/service\">\n  <Customer id=\"C-9912\">\n    <Name>Nextera Energy</Name>\n    <MeterNumber>MTR-55410</MeterNumber>\n    <Status>ACTIVE</Status>\n    <CurrentReading unit=\"KWH\">4820.75</CurrentReading>\n  </Customer>\n</GetCustomerResponse>"}, {"id": "json-to-csv", "title": "JSON to CSV", "category": "csv", "format": "json", "input": "[\n  { \"empId\": 101, \"name\": \"Niranjan Potter\", \"dept\": \"Integration\", \"salary\": 145000 },\n  { \"empId\": 102, \"name\": \"Amit Sharma\", \"dept\": \"Cloud\", \"salary\": 125000 },\n  { \"empId\": 103, \"name\": \"Pooja Verma\", \"dept\": \"Security\", \"salary\": 138000 }\n]", "script": "%dw 2.0\noutput application/csv header=true, separator=\",\"\n---\npayload map ((item) -> {\n  \"Employee ID\": item.empId,\n  \"Full Name\": upper(item.name),\n  \"Department\": item.dept,\n  \"Annual Salary (USD)\": item.salary\n})", "output": "\"Employee ID\",\"Full Name\",\"Department\",\"Annual Salary (USD)\"\n101,\"NIRANJAN POTTER\",\"Integration\",145000\n102,\"AMIT SHARMA\",\"Cloud\",125000\n103,\"POOJA VERMA\",\"Security\",138000", "explanation": {"kyaHua": "JSON array of objects ko structured CSV file format me transform kiya gaya hai with custom column headers and comma separator.", "functionDetails": "'output application/csv header=true, separator=\",\"'. Map function har object ko CSV row column headers ke sath map karta hai.", "interviewQuestion": "Interviewer asks: 'How do you generate a CSV file with custom header names and tab/pipe separators in DataWeave?'", "realProjectUsage": "SFTP file generation: Data warehouse ya payroll system ke liye nightly CSV exports create karna."}, "name": "JSON to CSV", "payload": "[\n  { \"empId\": 101, \"name\": \"Niranjan Potter\", \"dept\": \"Integration\", \"salary\": 145000 },\n  { \"empId\": 102, \"name\": \"Amit Sharma\", \"dept\": \"Cloud\", \"salary\": 125000 },\n  { \"empId\": 103, \"name\": \"Pooja Verma\", \"dept\": \"Security\", \"salary\": 138000 }\n]"}, {"id": "csv-to-json", "title": "CSV to JSON", "category": "csv", "format": "csv", "input": "MeterID,ReadingDate,ConsumptionKWH,Status\nM-1001,2026-11-01,340.50,CONFIRMED\nM-1002,2026-11-01,120.25,CONFIRMED\nM-1003,2026-11-01,0.00,INACTIVE", "script": "%dw 2.0\noutput application/json\n---\npayload map ((row) -> {\n  meterId: row.MeterID,\n  readingDate: row.ReadingDate as Date {format: \"yyyy-MM-dd\"},\n  kwh: row.ConsumptionKWH as Number,\n  isActive: row.Status == \"CONFIRMED\"\n})", "output": "[\n  {\n    \"meterId\": \"M-1001\",\n    \"readingDate\": \"2026-11-01\",\n    \"kwh\": 340.5,\n    \"isActive\": true\n  },\n  {\n    \"meterId\": \"M-1002\",\n    \"readingDate\": \"2026-11-01\",\n    \"kwh\": 120.25,\n    \"isActive\": true\n  },\n  {\n    \"meterId\": \"M-1003\",\n    \"readingDate\": \"2026-11-01\",\n    \"kwh\": 0,\n    \"isActive\": false\n  }\n]", "explanation": {"kyaHua": "Raw CSV rows ko parse karke strongly-typed JSON array me convert kiya gaya hai with proper Date, Number, aur Boolean data types.", "functionDetails": "CSV columns are automatically string-typed. 'as Number', 'as Date {format: \"...\"}' se type casting hoti hai.", "interviewQuestion": "Interviewer asks: 'CSV fields are always Strings. How do you convert CSV values to Numbers and Booleans safely?'", "realProjectUsage": "Batch Processing: File / SFTP inbound files ko parse karke database ya Salesforce me ingest karna."}, "name": "CSV to JSON", "payload": "MeterID,ReadingDate,ConsumptionKWH,Status\nM-1001,2026-11-01,340.50,CONFIRMED\nM-1002,2026-11-01,120.25,CONFIRMED\nM-1003,2026-11-01,0.00,INACTIVE"}, {"id": "sfdc-to-db", "title": "Salesforce to Database Mapping", "category": "advanced", "format": "json", "input": "{\n  \"Id\": \"0015g00001ABC12\",\n  \"Name\": \"Florida Health Systems\",\n  \"Type\": \"Customer - Direct\",\n  \"BillingStreet\": \"100 Ocean Drive\",\n  \"BillingCity\": \"Miami\",\n  \"BillingState\": \"FL\",\n  \"BillingPostalCode\": \"33139\",\n  \"AnnualRevenue\": 15000000,\n  \"LastModifiedDate\": \"2026-11-15T08:30:00.000Z\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  sfdc_account_id: payload.Id,\n  company_name: payload.Name,\n  account_type: if (payload.Type contains \"Customer\") \"ACTIVE_CLIENT\" else \"PROSPECT\",\n  address_line1: payload.BillingStreet,\n  city: payload.BillingCity,\n  state_code: payload.BillingState,\n  postal_code: payload.BillingPostalCode,\n  revenue: payload.AnnualRevenue default 0,\n  sync_timestamp: now() as String {format: \"yyyy-MM-dd HH:mm:ss.SSS\"}\n}", "output": "{\n  \"sfdc_account_id\": \"0015g00001ABC12\",\n  \"company_name\": \"Florida Health Systems\",\n  \"account_type\": \"ACTIVE_CLIENT\",\n  \"address_line1\": \"100 Ocean Drive\",\n  \"city\": \"Miami\",\n  \"state_code\": \"FL\",\n  \"postal_code\": \"33139\",\n  \"revenue\": 15000000,\n  \"sync_timestamp\": \"2026-11-18 14:20:00.123\"\n}", "explanation": {"kyaHua": "Salesforce SObject Account record ko SQL Database table schema ke column names aur business rules me map kiya gaya hai.", "functionDetails": "Contains check in conditional expression: 'if (payload.Type contains \"Customer\") ... else ...', default value operator 'default 0'.", "interviewQuestion": "Interviewer asks: 'How do you handle conditionally computed fields and null fallbacks when syncing Salesforce to Postgres/Oracle?'", "realProjectUsage": "Salesforce CDC (Change Data Capture) listener: Jab Salesforce me Account change ho to enterprise data warehouse me sync karna."}, "name": "Salesforce to Database Mapping", "payload": "{\n  \"Id\": \"0015g00001ABC12\",\n  \"Name\": \"Florida Health Systems\",\n  \"Type\": \"Customer - Direct\",\n  \"BillingStreet\": \"100 Ocean Drive\",\n  \"BillingCity\": \"Miami\",\n  \"BillingState\": \"FL\",\n  \"BillingPostalCode\": \"33139\",\n  \"AnnualRevenue\": 15000000,\n  \"LastModifiedDate\": \"2026-11-15T08:30:00.000Z\"\n}"}, {"id": "api-response-trans", "title": "API Response Transformation", "category": "json", "format": "json", "input": "{\n  \"rawStatus\": 200,\n  \"data\": [\n    { \"id\": 1, \"sku\": \"SOLAR-INV-100\", \"price\": 1200, \"stock\": 14 },\n    { \"id\": 2, \"sku\": \"SOLAR-BAT-50\", \"price\": 3400, \"stock\": 5 }\n  ],\n  \"serverTime\": 1731920000\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  status: \"SUCCESS\",\n  statusCode: 200,\n  correlationId: correlationId default \"CID-STATIC-1001\",\n  itemCount: sizeOf(payload.data),\n  inventory: payload.data map ((prod) -> {\n    productId: prod.id,\n    itemCode: prod.sku,\n    unitPrice: \"$\" ++ (prod.price as String {format: \"#,##0.00\"}),\n    inStock: prod.stock > 0\n  }),\n  metadata: {\n    apiVersion: \"v2.1\",\n    timestamp: now()\n  }\n}", "output": "{\n  \"status\": \"SUCCESS\",\n  \"statusCode\": 200,\n  \"correlationId\": \"CID-STATIC-1001\",\n  \"itemCount\": 2,\n  \"inventory\": [\n    {\n      \"productId\": 1,\n      \"itemCode\": \"SOLAR-INV-100\",\n      \"unitPrice\": \"$1,200.00\",\n      \"inStock\": true\n    },\n    {\n      \"productId\": 2,\n      \"itemCode\": \"SOLAR-BAT-50\",\n      \"unitPrice\": \"$3,400.00\",\n      \"inStock\": true\n    }\n  ],\n  \"metadata\": {\n    \"apiVersion\": \"v2.1\",\n    \"timestamp\": \"2026-11-18T14:20:00Z\"\n  }\n}", "explanation": {"kyaHua": "Backend raw API response ko enterprise standard API response wrapper me transform kiya gaya hai with status, correlationId, itemCount, and currency formatting.", "functionDetails": "String number formatting '#,##0.00', correlationId access, array sizeOf() helper.", "interviewQuestion": "Interviewer asks: 'What is your standard Experience API response wrapper pattern in MuleSoft?'", "realProjectUsage": "Experience API layer: Mobile App aur Web Portal ke liye clean, predictable API envelope banana."}, "name": "API Response Transformation", "payload": "{\n  \"rawStatus\": 200,\n  \"data\": [\n    { \"id\": 1, \"sku\": \"SOLAR-INV-100\", \"price\": 1200, \"stock\": 14 },\n    { \"id\": 2, \"sku\": \"SOLAR-BAT-50\", \"price\": 3400, \"stock\": 5 }\n  ],\n  \"serverTime\": 1731920000\n}"}, {"id": "filter-array", "title": "Filter Array (where condition)", "category": "array", "format": "json", "input": "[\n  { \"id\": 1, \"name\": \"John Doe\", \"role\": \"DEVELOPER\", \"active\": true, \"rating\": 4.8 },\n  { \"id\": 2, \"name\": \"Jane Smith\", \"role\": \"MANAGER\", \"active\": false, \"rating\": 3.9 },\n  { \"id\": 3, \"name\": \"Mike Brown\", \"role\": \"DEVELOPER\", \"active\": true, \"rating\": 4.2 },\n  { \"id\": 4, \"name\": \"Sarah Lee\", \"role\": \"ARCHITECT\", \"active\": true, \"rating\": 4.9 }\n]", "script": "%dw 2.0\noutput application/json\n---\npayload filter ($.active == true and $.role == \"DEVELOPER\" and $.rating >= 4.5)", "output": "[\n  {\n    \"id\": 1,\n    \"name\": \"John Doe\",\n    \"role\": \"DEVELOPER\",\n    \"active\": true,\n    \"rating\": 4.8\n  }\n]", "explanation": {"kyaHua": "Array ke items par multiple boolean conditions apply karke sirf matching elements ko retain kiya gaya hai.", "functionDetails": "filter function takes a boolean predicate using '$' (current item) or explicit parameters ((item, index) -> ...).", "interviewQuestion": "Interviewer asks: 'How does filter work in DataWeave, and what happens if no records match?' -> Returns empty array [].", "realProjectUsage": "Filtering active customer accounts, pending orders, or valid sensor readings from a bulk payload."}, "name": "Filter Array (where condition)", "payload": "[\n  { \"id\": 1, \"name\": \"John Doe\", \"role\": \"DEVELOPER\", \"active\": true, \"rating\": 4.8 },\n  { \"id\": 2, \"name\": \"Jane Smith\", \"role\": \"MANAGER\", \"active\": false, \"rating\": 3.9 },\n  { \"id\": 3, \"name\": \"Mike Brown\", \"role\": \"DEVELOPER\", \"active\": true, \"rating\": 4.2 },\n  { \"id\": 4, \"name\": \"Sarah Lee\", \"role\": \"ARCHITECT\", \"active\": true, \"rating\": 4.9 }\n]"}, {"id": "map-array", "title": "Map Array - Add new field", "category": "array", "format": "json", "input": "[\n  { \"productId\": \"P1\", \"basePrice\": 100, \"category\": \"ELECTRONICS\" },\n  { \"productId\": \"P2\", \"basePrice\": 250, \"category\": \"FURNITURE\" },\n  { \"productId\": \"P3\", \"basePrice\": 50,  \"category\": \"GROCERY\" }\n]", "script": "%dw 2.0\noutput application/json\nvar taxRate = 0.08\n---\npayload map ((item, index) -> item ++ {\n  itemIndex: index + 1,\n  taxAmount: item.basePrice * taxRate,\n  finalPrice: item.basePrice * (1 + taxRate),\n  isTaxable: item.category != \"GROCERY\"\n})", "output": "[\n  {\n    \"productId\": \"P1\",\n    \"basePrice\": 100,\n    \"category\": \"ELECTRONICS\",\n    \"itemIndex\": 1,\n    \"taxAmount\": 8,\n    \"finalPrice\": 108,\n    \"isTaxable\": true\n  },\n  {\n    \"productId\": \"P2\",\n    \"basePrice\": 250,\n    \"category\": \"FURNITURE\",\n    \"itemIndex\": 2,\n    \"taxAmount\": 20,\n    \"finalPrice\": 270,\n    \"isTaxable\": true\n  },\n  {\n    \"productId\": \"P3\",\n    \"basePrice\": 50,\n    \"category\": \"GROCERY\",\n    \"itemIndex\": 3,\n    \"taxAmount\": 4,\n    \"finalPrice\": 54,\n    \"isTaxable\": false\n  }\n]", "explanation": {"kyaHua": "Array ke har object me naye fields calculate karke append kiye gaye hain bina purani keys ko drop kiye (`item ++ { newFields }`).", "functionDetails": "Object concatenation 'item ++ { key: value }' existing keys preserve karta hai. Index parameter provides 0-based iteration count.", "interviewQuestion": "Interviewer asks: 'How do you add a new key to an existing object inside map without rewriting all existing keys?'", "realProjectUsage": "Enrichment flow: Inbound records me audit timestamps, sequence numbers, ya computed tax rates add karna."}, "name": "Map Array - Add new field", "payload": "[\n  { \"productId\": \"P1\", \"basePrice\": 100, \"category\": \"ELECTRONICS\" },\n  { \"productId\": \"P2\", \"basePrice\": 250, \"category\": \"FURNITURE\" },\n  { \"productId\": \"P3\", \"basePrice\": 50,  \"category\": \"GROCERY\" }\n]"}, {"id": "groupby-dept", "title": "GroupBy - Group by Department", "category": "array", "format": "json", "input": "[\n  { \"name\": \"Alice\", \"dept\": \"Engineering\", \"salary\": 120000 },\n  { \"name\": \"Bob\",   \"dept\": \"Sales\",       \"salary\": 95000 },\n  { \"name\": \"Carol\", \"dept\": \"Engineering\", \"salary\": 140000 },\n  { \"name\": \"Dave\",  \"dept\": \"Sales\",       \"salary\": 85000 },\n  { \"name\": \"Eve\",   \"dept\": \"HR\",          \"salary\": 75000 }\n]", "script": "%dw 2.0\noutput application/json\n---\npayload groupBy ((emp) -> emp.dept)", "output": "{\n  \"Engineering\": [\n    { \"name\": \"Alice\", \"dept\": \"Engineering\", \"salary\": 120000 },\n    { \"name\": \"Carol\", \"dept\": \"Engineering\", \"salary\": 140000 }\n  ],\n  \"Sales\": [\n    { \"name\": \"Bob\", \"dept\": \"Sales\", \"salary\": 95000 },\n    { \"name\": \"Dave\", \"dept\": \"Sales\", \"salary\": 85000 }\n  ],\n  \"HR\": [\n    { \"name\": \"Eve\", \"dept\": \"HR\", \"salary\": 75000 }\n  ]\n}", "explanation": {"kyaHua": "Flat array of employee objects ko department-wise group karke structured JSON object banaya jisme keys department names hain.", "functionDetails": "groupBy returns an Object where each key is the criteria value and each value is an Array of matched elements.", "interviewQuestion": "Interviewer asks: 'What is the return type of groupBy? Is it an Array or an Object?' -> Always returns an Object.", "realProjectUsage": "Generating summary reports: Grouping orders by customerId, sensor readings by deviceId, or transactions by date."}, "name": "GroupBy - Group by Department", "payload": "[\n  { \"name\": \"Alice\", \"dept\": \"Engineering\", \"salary\": 120000 },\n  { \"name\": \"Bob\",   \"dept\": \"Sales\",       \"salary\": 95000 },\n  { \"name\": \"Carol\", \"dept\": \"Engineering\", \"salary\": 140000 },\n  { \"name\": \"Dave\",  \"dept\": \"Sales\",       \"salary\": 85000 },\n  { \"name\": \"Eve\",   \"dept\": \"HR\",          \"salary\": 75000 }\n]"}, {"id": "orderby-salary", "title": "OrderBy - Sort by Salary", "category": "array", "format": "json", "input": "[\n  { \"name\": \"Alice\", \"salary\": 95000 },\n  { \"name\": \"Bob\",   \"salary\": 140000 },\n  { \"name\": \"Carol\", \"salary\": 75000 },\n  { \"name\": \"Dave\",  \"salary\": 120000 }\n]", "script": "%dw 2.0\noutput application/json\n---\n// Descending sort: minus (-) sign reverses order\npayload orderBy -$.salary", "output": "[\n  { \"name\": \"Bob\", \"salary\": 140000 },\n  { \"name\": \"Dave\", \"salary\": 120000 },\n  { \"name\": \"Alice\", \"salary\": 95000 },\n  { \"name\": \"Carol\", \"salary\": 75000 }\n]", "explanation": {"kyaHua": "Array ko salary ke hisab se highest to lowest (descending order) me sort kiya gaya hai.", "functionDetails": "orderBy sorts ascending by default. Adding '-' before numeric expression inverts it to descending order (-$.salary).", "interviewQuestion": "Interviewer asks: 'How do you perform descending sorting in DataWeave without calling reverse()?'", "realProjectUsage": "Ranking top sales reps, finding highest priority tickets, or sorting timestamps from newest to oldest."}, "name": "OrderBy - Sort by Salary", "payload": "[\n  { \"name\": \"Alice\", \"salary\": 95000 },\n  { \"name\": \"Bob\",   \"salary\": 140000 },\n  { \"name\": \"Carol\", \"salary\": 75000 },\n  { \"name\": \"Dave\",  \"salary\": 120000 }\n]"}, {"id": "distinct-duplicates", "title": "Distinct - Remove duplicates", "category": "array", "format": "json", "input": "[\n  { \"id\": 101, \"email\": \"alice@test.com\", \"region\": \"US\" },\n  { \"id\": 102, \"email\": \"bob@test.com\",   \"region\": \"UK\" },\n  { \"id\": 101, \"email\": \"alice@test.com\", \"region\": \"US\" },\n  { \"id\": 103, \"email\": \"carol@test.com\", \"region\": \"US\" }\n]", "script": "%dw 2.0\noutput application/json\nimport * from dw::core::Arrays\n---\n// distinctBy takes criteria key\npayload distinctBy ((item) -> item.id)", "output": "[\n  { \"id\": 101, \"email\": \"alice@test.com\", \"region\": \"US\" },\n  { \"id\": 102, \"email\": \"bob@test.com\", \"region\": \"UK\" },\n  { \"id\": 103, \"email\": \"carol@test.com\", \"region\": \"US\" }\n]", "explanation": {"kyaHua": "Duplicate records ko specific unique key (`item.id`) ke basis par filter out kiya gaya hai.", "functionDetails": "distinctBy retains the first occurrence of each unique key evaluation and drops subsequent duplicates.", "interviewQuestion": "Interviewer asks: 'What is the difference between distinct and distinctBy in DataWeave?'", "realProjectUsage": "Message Deduplication: At-least-once queues se aane wale duplicate payloads ko filter karna."}, "name": "Distinct - Remove duplicates", "payload": "[\n  { \"id\": 101, \"email\": \"alice@test.com\", \"region\": \"US\" },\n  { \"id\": 102, \"email\": \"bob@test.com\",   \"region\": \"UK\" },\n  { \"id\": 101, \"email\": \"alice@test.com\", \"region\": \"US\" },\n  { \"id\": 103, \"email\": \"carol@test.com\", \"region\": \"US\" }\n]"}, {"id": "reduce-sum", "title": "Reduce - Sum of Salary", "category": "array", "format": "json", "input": "[\n  { \"item\": \"Solar Panel 400W\", \"qty\": 10, \"unitPrice\": 250 },\n  { \"item\": \"Inverter 5KW\",      \"qty\": 2,  \"unitPrice\": 1200 },\n  { \"item\": \"Battery 10KWh\",     \"qty\": 1,  \"unitPrice\": 4500 }\n]", "script": "%dw 2.0\noutput application/json\n---\n{\n  totalItems: sizeOf(payload),\n  grandTotal: payload reduce ((line, acc = 0) -> acc + (line.qty * line.unitPrice)),\n  currency: \"USD\"\n}", "output": "{\n  \"totalItems\": 3,\n  \"grandTotal\": 9400,\n  \"currency\": \"USD\"\n}", "explanation": {"kyaHua": "Array ke line items ko fold/accumulate karke single aggregated grand total amount calculate kiya gaya hai.", "functionDetails": "reduce function takes an item and accumulator ((item, acc = initialValue) -> ...).", "interviewQuestion": "Interviewer asks: 'How do you calculate total order sum from a line-item array using reduce in DataWeave?'", "realProjectUsage": "Invoice and billing calculations: Line items ka sum, tax aggregation, and order summary generation."}, "name": "Reduce - Sum of Salary", "payload": "[\n  { \"item\": \"Solar Panel 400W\", \"qty\": 10, \"unitPrice\": 250 },\n  { \"item\": \"Inverter 5KW\",      \"qty\": 2,  \"unitPrice\": 1200 },\n  { \"item\": \"Battery 10KWh\",     \"qty\": 1,  \"unitPrice\": 4500 }\n]"}, {"id": "flatten-nested", "title": "Flatten - Nested Array", "category": "array", "format": "json", "input": "[\n  { \"orderId\": \"O1\", \"items\": [\"P-101\", \"P-102\"] },\n  { \"orderId\": \"O2\", \"items\": [\"P-201\"] },\n  { \"orderId\": \"O3\", \"items\": [\"P-301\", \"P-302\", \"P-303\"] }\n]", "script": "%dw 2.0\noutput application/json\n---\n{\n  allProductIds: flatten(payload.items)\n}", "output": "{\n  \"allProductIds\": [\n    \"P-101\",\n    \"P-102\",\n    \"P-201\",\n    \"P-301\",\n    \"P-302\",\n    \"P-303\"\n  ]\n}", "explanation": {"kyaHua": "Array of arrays (`[['P-101', 'P-102'], ['P-201'], ...]`) ko collapse karke single 1-dimensional array banaya gaya.", "functionDetails": "flatten() removes one level of array nesting. payload.items yields [[...], [...]], flatten makes it [...].", "interviewQuestion": "Interviewer asks: 'What does flatten() do and how is it different from flatMap()?'", "realProjectUsage": "Scatter-Gather results ya multiple database queries ke combined list ko flat array me convert karna."}, "name": "Flatten - Nested Array", "payload": "[\n  { \"orderId\": \"O1\", \"items\": [\"P-101\", \"P-102\"] },\n  { \"orderId\": \"O2\", \"items\": [\"P-201\"] },\n  { \"orderId\": \"O3\", \"items\": [\"P-301\", \"P-302\", \"P-303\"] }\n]"}, {"id": "coalesce-default", "title": "Coalesce / Default - Handle Nulls", "category": "json", "format": "json", "input": "{\n  \"customerId\": \"C-100\",\n  \"preferredName\": null,\n  \"legalName\": \"Niranjan Potter\",\n  \"billingPhone\": null,\n  \"mobilePhone\": \"305-555-0199\",\n  \"discountRate\": null\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  customerId: payload.customerId,\n  displayName: payload.preferredName default payload.legalName default \"Valued Customer\",\n  contactPhone: payload.billingPhone default payload.mobilePhone default \"N/A\",\n  appliedDiscount: payload.discountRate default 0.05,\n  hasPhone: (payload.billingPhone != null) or (payload.mobilePhone != null)\n}", "output": "{\n  \"customerId\": \"C-100\",\n  \"displayName\": \"Niranjan Potter\",\n  \"contactPhone\": \"305-555-0199\",\n  \"appliedDiscount\": 0.05,\n  \"hasPhone\": true\n}", "explanation": {"kyaHua": "Null values ko chain karke fallback default values provide kiye gaye hain bina NullPointerExceptions ke.", "functionDetails": "The 'default' keyword acts as a coalesce operator in DataWeave. If left-hand expression is null, it evaluates right-hand.", "interviewQuestion": "Interviewer asks: 'How do you handle NullPointerException in DataWeave when dealing with optional backend fields?'", "realProjectUsage": "Defensive DataWeave: Downstream systems ko clean non-null data bhejne ke liye standard pattern."}, "name": "Coalesce / Default - Handle Nulls", "payload": "{\n  \"customerId\": \"C-100\",\n  \"preferredName\": null,\n  \"legalName\": \"Niranjan Potter\",\n  \"billingPhone\": null,\n  \"mobilePhone\": \"305-555-0199\",\n  \"discountRate\": null\n}"}, {"id": "date-format", "title": "Date Format - Change Date Format", "category": "date", "format": "json", "input": "{\n  \"isoTimestamp\": \"2026-11-18T14:30:00.000Z\",\n  \"epochSeconds\": 1795000000,\n  \"legacyDate\": \"18/11/2026\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  standardIso: payload.isoTimestamp,\n  usFormatted: (payload.isoTimestamp as DateTime) as String {format: \"MM/dd/yyyy hh:mm a\"},\n  dateOnly: (payload.isoTimestamp as DateTime) as String {format: \"yyyy-MM-dd\"},\n  timeOnly: (payload.isoTimestamp as DateTime) as String {format: \"HH:mm:ss\"},\n  fromEpoch: (payload.epochSeconds as DateTime) as String {format: \"yyyy-MM-dd HH:mm:ss\"},\n  reparsedLegacy: (payload.legacyDate as Date {format: \"dd/MM/yyyy\"}) as String {format: \"yyyy-MM-dd\"}\n}", "output": "{\n  \"standardIso\": \"2026-11-18T14:30:00.000Z\",\n  \"usFormatted\": \"11/18/2026 02:30 PM\",\n  \"dateOnly\": \"2026-11-18\",\n  \"timeOnly\": \"14:30:00\",\n  \"fromEpoch\": \"2026-11-18 14:30:00\",\n  \"reparsedLegacy\": \"2026-11-18\"\n}", "explanation": {"kyaHua": "Dates ko ISO 8601, Epoch Unix timestamps, aur custom regional formats ke beech convert kiya gaya.", "functionDetails": "DataWeave types: DateTime, Date, Time. Syntax: (val as DateTime) as String {format: '...'}.", "interviewQuestion": "Interviewer asks: 'How do you parse a non-standard date string like dd/MM/yyyy into ISO yyyy-MM-dd in DataWeave?'", "realProjectUsage": "SAP and Mainframe integration jaha legacy date strings ko modern cloud standard dates me convert karna hota hai."}, "name": "Date Format - Change Date Format", "payload": "{\n  \"isoTimestamp\": \"2026-11-18T14:30:00.000Z\",\n  \"epochSeconds\": 1795000000,\n  \"legacyDate\": \"18/11/2026\"\n}"}, {"id": "string-functions", "title": "String Functions - Upper, Lower, Concat", "category": "string", "format": "json", "input": "{\n  \"firstName\": \"  niranjan \",\n  \"lastName\": \"POTTER  \",\n  \"rawId\": \"MULE-2026-PROD-99\",\n  \"notes\": \"urgent: client needs billing fix immediately\"\n}", "script": "%dw 2.0\noutput application/json\nimport * from dw::core::Strings\n---\n{\n  fullName: capitalize(trim(payload.firstName)) ++ \" \" ++ capitalize(trim(payload.lastName)),\n  upperCode: upper(payload.rawId),\n  systemTag: (payload.rawId splitBy \"-\")[1],\n  sequenceNum: (payload.rawId splitBy \"-\")[-1],\n  isUrgent: payload.notes startsWith \"urgent\",\n  notesSummary: substring(payload.notes, 8, 32),\n  paddedId: leftPad(\"42\", 6, \"0\")\n}", "output": "{\n  \"fullName\": \"Niranjan Potter\",\n  \"upperCode\": \"MULE-2026-PROD-99\",\n  \"systemTag\": \"2026\",\n  \"sequenceNum\": \"99\",\n  \"isUrgent\": true,\n  \"notesSummary\": \"client needs billing fix\",\n  \"paddedId\": \"000042\"\n}", "explanation": {"kyaHua": "String manipulation: trim whitespace, capitalize names, split identifiers by hyphens, substring extraction, aur leftPad formatting.", "functionDetails": "Functions from dw::core::Strings: capitalize, trim, leftPad, startsWith, splitBy.", "interviewQuestion": "Interviewer asks: 'How do you extract the last token from a hyphen-separated string?' -> (str splitBy '-')[-1].", "realProjectUsage": "Data cleansing, sanitizing user inputs, and extracting tokens from correlation IDs."}, "name": "String Functions - Upper, Lower, Concat", "payload": "{\n  \"firstName\": \"  niranjan \",\n  \"lastName\": \"POTTER  \",\n  \"rawId\": \"MULE-2026-PROD-99\",\n  \"notes\": \"urgent: client needs billing fix immediately\"\n}"}, {"id": "type-coercion", "title": "Type Coercion - String to Number", "category": "json", "format": "json", "input": "{\n  \"stringInt\": \"1050\",\n  \"stringFloat\": \"49.99\",\n  \"stringBool\": \"true\",\n  \"numVal\": 12500,\n  \"dateStr\": \"2026-11-18\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  intNumber: payload.stringInt as Number,\n  floatNumber: payload.stringFloat as Number,\n  boolValue: payload.stringBool as Boolean,\n  currencyString: \"$\" ++ (payload.numVal as String {format: \"#,##0.00\"}),\n  parsedDate: payload.dateStr as Date,\n  isPositive: (payload.stringFloat as Number) > 0\n}", "output": "{\n  \"intNumber\": 1050,\n  \"floatNumber\": 49.99,\n  \"boolValue\": true,\n  \"currencyString\": \"$12,500.00\",\n  \"parsedDate\": \"2026-11-18\",\n  \"isPositive\": true\n}", "explanation": {"kyaHua": "Strings ko strictly-typed Numbers, Booleans, aur Dates me convert kiya gaya hai (Type Coercion).", "functionDetails": "Keyword 'as': 'val as Number', 'val as Boolean', 'val as Date'.", "interviewQuestion": "Interviewer asks: 'What happens if you coerce an invalid string 'ABC' as Number?' -> Throws Cannot coerce String to Number exception.", "realProjectUsage": "Query parameters and HTTP headers are always strings. Backend databases me insert karne se pehle type cast karna padta hai."}, "name": "Type Coercion - String to Number", "payload": "{\n  \"stringInt\": \"1050\",\n  \"stringFloat\": \"49.99\",\n  \"stringBool\": \"true\",\n  \"numVal\": 12500,\n  \"dateStr\": \"2026-11-18\"\n}"}, {"id": "conditional-if-else", "title": "Conditional - If Else / Case", "category": "advanced", "format": "json", "input": "{\n  \"meterType\": \"COMMERCIAL\",\n  \"kwhUsage\": 1250,\n  \"paymentStatus\": \"OVERDUE\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  tariffRate: if (payload.meterType == \"RESIDENTIAL\") 0.12\n              else if (payload.meterType == \"COMMERCIAL\") 0.18\n              else 0.25,\n  accountAction: payload.paymentStatus match {\n    case \"PAID\" -> \"STANDARD_SERVICE\"\n    case \"OVERDUE\" -> \"DISPATCH_SMS_REMINDER\"\n    case \"DEFAULTED\" -> \"SHUTOFF_NOTICE\"\n    else -> \"REVIEW_REQUIRED\"\n  },\n  tier: if (payload.kwhUsage > 1000) \"HIGH_CONSUMPTION\" else \"STANDARD\"\n}", "output": "{\n  \"tariffRate\": 0.18,\n  \"accountAction\": \"DISPATCH_SMS_REMINDER\",\n  \"tier\": \"HIGH_CONSUMPTION\"\n}", "explanation": {"kyaHua": "Business logic routing: if-else conditions aur pattern matching ('match { case ... }') se dynamic outputs calculate kiye gaye.", "functionDetails": "DataWeave match-case construct provides cleaner, more declarative syntax than deeply nested if-else ladders.", "interviewQuestion": "Interviewer asks: 'When should you use match-case instead of if-else in DataWeave?'", "realProjectUsage": "Business rule engines: Tariff calculation, dynamic queue selection, and error code mapping."}, "name": "Conditional - If Else / Case", "payload": "{\n  \"meterType\": \"COMMERCIAL\",\n  \"kwhUsage\": 1250,\n  \"paymentStatus\": \"OVERDUE\"\n}"}, {"id": "lookup-function", "title": "Lookup Function", "category": "advanced", "format": "json", "input": "{\n  \"accountId\": \"ACC-552\",\n  \"zipCode\": \"33139\",\n  \"subtotal\": 1000\n}", "script": "%dw 2.0\noutput application/json\n// Note: In Anypoint Studio, lookup executes an in-memory Mule subflow\n// syntax: lookup('subflow-name', payload, timeoutMs)\n---\n{\n  accountId: payload.accountId,\n  zipCode: payload.zipCode,\n  subtotal: payload.subtotal,\n  // Simulated lookup return:\n  taxCalculation: {\n    stateTax: 60.00,\n    countyTax: 10.00,\n    totalWithTax: 1070.00\n  },\n  note: \"In Mule runtime: lookup('calculateTaxSubflow', {zip: payload.zipCode, amt: payload.subtotal})\"\n}", "output": "{\n  \"accountId\": \"ACC-552\",\n  \"zipCode\": \"33139\",\n  \"subtotal\": 1000,\n  \"taxCalculation\": {\n    \"stateTax\": 60,\n    \"countyTax\": 10,\n    \"totalWithTax\": 1070\n  },\n  \"note\": \"In Mule runtime: lookup('calculateTaxSubflow', {zip: payload.zipCode, amt: payload.subtotal})\"\n}", "explanation": {"kyaHua": "DataWeave script ke andar se directly dusre Mule sub-flow ko call karne ka pattern (lookup function).", "functionDetails": "lookup(flowName, payload, timeout). Note: lookup() only calls synchronous private flows without transactional boundaries.", "interviewQuestion": "Interviewer asks: 'Can the lookup() function call an asynchronous flow or a flow with HTTP listener?' -> No, only private/sub-flows.", "realProjectUsage": "In-flight data enrichment: DataWeave transformation ke dauran cache lookup ya utility subflow call karna."}, "name": "Lookup Function", "payload": "{\n  \"accountId\": \"ACC-552\",\n  \"zipCode\": \"33139\",\n  \"subtotal\": 1000\n}"}, {"id": "pluck-object-to-array", "title": "Pluck - Object to Array", "category": "array", "format": "json", "input": "{\n  \"US_EAST\": 450,\n  \"US_WEST\": 320,\n  \"EU_CENTRAL\": 190,\n  \"AP_SOUTH\": 610\n}", "script": "%dw 2.0\noutput application/json\n---\npayload pluck ((value, key, index) -> {\n  regionCode: key as String,\n  activeServers: value,\n  sequence: index + 1\n})", "output": "[\n  { \"regionCode\": \"US_EAST\", \"activeServers\": 450, \"sequence\": 1 },\n  { \"regionCode\": \"US_WEST\", \"activeServers\": 320, \"sequence\": 2 },\n  { \"regionCode\": \"EU_CENTRAL\", \"activeServers\": 190, \"sequence\": 3 },\n  { \"regionCode\": \"AP_SOUTH\", \"activeServers\": 610, \"sequence\": 4 }\n]", "explanation": {"kyaHua": "JSON Object ke key-value pairs ko iterate karke unhe structured Array of Objects me convert kiya gaya hai.", "functionDetails": "pluck((value, key, index) -> ...) is used exclusively on Objects to transform them into Arrays (complement of map on arrays).", "interviewQuestion": "Interviewer asks: 'How do you iterate over an Object instead of an Array in DataWeave?' -> Use pluck().", "realProjectUsage": "Database dynamic column maps ya key-value caches ko UI table rows me transform karna."}, "name": "Pluck - Object to Array", "payload": "{\n  \"US_EAST\": 450,\n  \"US_WEST\": 320,\n  \"EU_CENTRAL\": 190,\n  \"AP_SOUTH\": 610\n}"}, {"id": "merge-two-payloads", "title": "Merge Two Payloads", "category": "advanced", "format": "json", "input": "{\n  \"customer\": {\n    \"id\": \"C-101\",\n    \"name\": \"Niranjan Potter\"\n  },\n  \"billing\": {\n    \"accountNumber\": \"ACT-9901\",\n    \"balance\": 240.75,\n    \"status\": \"CURRENT\"\n  }\n}", "script": "%dw 2.0\noutput application/json\n---\npayload.customer ++ payload.billing ++ {\n  lastUpdated: now() as String {format: \"yyyy-MM-dd\"}\n}", "output": "{\n  \"id\": \"C-101\",\n  \"name\": \"Niranjan Potter\",\n  \"accountNumber\": \"ACT-9901\",\n  \"balance\": 240.75,\n  \"status\": \"CURRENT\",\n  \"lastUpdated\": \"2026-11-18\"\n}", "explanation": {"kyaHua": "Do alag alag objects (Customer + Billing) ko combine karke ek single consolidated enterprise customer profile banaya gaya.", "functionDetails": "Object concatenation '++' merges keys from both objects. If duplicate keys exist, right-hand object overrides left-hand.", "interviewQuestion": "Interviewer asks: 'What happens when you merge two objects with identical keys using ++ in DataWeave?'", "realProjectUsage": "Scatter-Gather aggregation: Customer CRM call aur Billing SAP call ke dono responses ko single canonical DTO me merge karna."}, "name": "Merge Two Payloads", "payload": "{\n  \"customer\": {\n    \"id\": \"C-101\",\n    \"name\": \"Niranjan Potter\"\n  },\n  \"billing\": {\n    \"accountNumber\": \"ACT-9901\",\n    \"balance\": 240.75,\n    \"status\": \"CURRENT\"\n  }\n}"}, {"id": "splitby-joinby", "title": "SplitBy / JoinBy", "category": "string", "format": "json", "input": "{\n  \"tags\": \"salesforce,mulesoft,aws,sap,kafka\",\n  \"phoneSegments\": [\"305\", \"555\", \"0144\"]\n}", "script": "%dw 2.0\noutput application/json\nimport * from dw::core::Strings\n---\n{\n  tagList: payload.tags splitBy \",\",\n  uppercaseTags: (payload.tags splitBy \",\") map upper($),\n  formattedPhone: payload.phoneSegments joinBy \"-\"\n}", "output": "{\n  \"tagList\": [\n    \"salesforce\",\n    \"mulesoft\",\n    \"aws\",\n    \"sap\",\n    \"kafka\"\n  ],\n  \"uppercaseTags\": [\n    \"SALESFORCE\",\n    \"MULESOFT\",\n    \"AWS\",\n    \"SAP\",\n    \"KAFKA\"\n  ],\n  \"formattedPhone\": \"305-555-0144\"\n}", "explanation": {"kyaHua": "Delimited string ko splitBy se array me break kiya, aur array of strings ko joinBy se hyphenated string me join kiya.", "functionDetails": "splitBy(delimiter) returns Array of String. joinBy(separator) converts Array of String to single String.", "interviewQuestion": "Interviewer asks: 'How do you convert a comma-separated string into an array and back into a hyphenated string?'", "realProjectUsage": "Parsing comma-separated query parameters (e.g. ?fields=id,name,email) and building database IN clauses."}, "name": "SplitBy / JoinBy", "payload": "{\n  \"tags\": \"salesforce,mulesoft,aws,sap,kafka\",\n  \"phoneSegments\": [\"305\", \"555\", \"0144\"]\n}"}, {"id": "batch-job-dw", "title": "Batch Job - DataWeave for Batch", "category": "advanced", "format": "json", "input": "[\n  { \"id\": \"1001\", \"meter\": \"MTR-1\", \"kwh\": 450, \"status\": \"READY\" },\n  { \"id\": \"1002\", \"meter\": \"MTR-2\", \"kwh\": 310, \"status\": \"READY\" },\n  { \"id\": \"1003\", \"meter\": \"MTR-3\", \"kwh\": 590, \"status\": \"READY\" }\n]", "script": "%dw 2.0\noutput application/json\n---\n// Preparing payload inside Batch Aggregator for bulk commit\npayload map ((record) -> {\n  External_Id__c: record.id,\n  Meter_Number__c: record.meter,\n  KWH_Usage__c: record.kwh,\n  Processed_Timestamp__c: now(),\n  Batch_Source__c: \"MULE_BATCH_STEP_2\"\n})", "output": "[\n  {\n    \"External_Id__c\": \"1001\",\n    \"Meter_Number__c\": \"MTR-1\",\n    \"KWH_Usage__c\": 450,\n    \"Processed_Timestamp__c\": \"2026-11-18T14:30:00Z\",\n    \"Batch_Source__c\": \"MULE_BATCH_STEP_2\"\n  },\n  {\n    \"External_Id__c\": \"1002\",\n    \"Meter_Number__c\": \"MTR-2\",\n    \"KWH_Usage__c\": 310,\n    \"Processed_Timestamp__c\": \"2026-11-18T14:30:00Z\",\n    \"Batch_Source__c\": \"MULE_BATCH_STEP_2\"\n  },\n  {\n    \"External_Id__c\": \"1003\",\n    \"Meter_Number__c\": \"MTR-3\",\n    \"KWH_Usage__c\": 590,\n    \"Processed_Timestamp__c\": \"2026-11-18T14:30:00Z\",\n    \"Batch_Source__c\": \"MULE_BATCH_STEP_2\"\n  }\n]", "explanation": {"kyaHua": "Batch Aggregator ke chunk (e.g. 200 records) ko Salesforce Bulk Upsert SObject format me map kiya gaya hai with External ID.", "functionDetails": "Batch Aggregator accumulates records into an Array. DataWeave transforms the aggregated array for bulk database/Salesforce commits.", "interviewQuestion": "Interviewer asks: 'What is the structure of payload inside a Batch Aggregator vs inside a Batch Step?' -> Batch Step payload is a single Record; Batch Aggregator payload is an Array of Records.", "realProjectUsage": "Nightly batch synchronization of 100,000 smart meter records into Salesforce Bulk API 2.0."}, "name": "Batch Job - DataWeave for Batch", "payload": "[\n  { \"id\": \"1001\", \"meter\": \"MTR-1\", \"kwh\": 450, \"status\": \"READY\" },\n  { \"id\": \"1002\", \"meter\": \"MTR-2\", \"kwh\": 310, \"status\": \"READY\" },\n  { \"id\": \"1003\", \"meter\": \"MTR-3\", \"kwh\": 590, \"status\": \"READY\" }\n]"}, {"id": "pagination-dw", "title": "Pagination - DataWeave for Pagination", "category": "advanced", "format": "json", "input": "{\n  \"totalRecords\": 245,\n  \"pageSize\": 50,\n  \"currentPage\": 2,\n  \"records\": [\n    { \"id\": 51, \"name\": \"Miami Utility Substation 4\" },\n    { \"id\": 52, \"name\": \"Fort Lauderdale Feeder Line\" }\n  ]\n}", "script": "%dw 2.0\noutput application/json\nvar totalPages = ceil(payload.totalRecords / payload.pageSize)\n---\n{\n  pagination: {\n    pageNumber: payload.currentPage,\n    pageSize: payload.pageSize,\n    totalItems: payload.totalRecords,\n    totalPages: totalPages,\n    hasNextPage: payload.currentPage < totalPages,\n    hasPrevPage: payload.currentPage > 1,\n    links: {\n      self: \"/api/v1/assets?page=\" ++ (payload.currentPage as String),\n      next: if (payload.currentPage < totalPages) \"/api/v1/assets?page=\" ++ ((payload.currentPage + 1) as String) else null,\n      prev: if (payload.currentPage > 1) \"/api/v1/assets?page=\" ++ ((payload.currentPage - 1) as String) else null\n    }\n  },\n  data: payload.records\n}", "output": "{\n  \"pagination\": {\n    \"pageNumber\": 2,\n    \"pageSize\": 50,\n    \"totalItems\": 245,\n    \"totalPages\": 5,\n    \"hasNextPage\": true,\n    \"hasPrevPage\": true,\n    \"links\": {\n      \"self\": \"/api/v1/assets?page=2\",\n      \"next\": \"/api/v1/assets?page=3\",\n      \"prev\": \"/api/v1/assets?page=1\"\n    }\n  },\n  \"data\": [\n    { \"id\": 51, \"name\": \"Miami Utility Substation 4\" },\n    { \"id\": 52, \"name\": \"Fort Lauderdale Feeder Line\" }\n  ]\n}", "explanation": {"kyaHua": "Standard HATEOAS RESTful pagination envelope generate kiya gaya hai with totalPages, hasNextPage, and navigation links.", "functionDetails": "ceil() from dw::core::Numbers (or math ceiling) to calculate totalPages. Dynamic string interpolation for URL generation.", "interviewQuestion": "Interviewer asks: 'How do you design a paginated API response in MuleSoft following enterprise REST standards?'", "realProjectUsage": "RESTful Experience API: Large datasets ko frontend UI tables me 50-records-per-page render karne ke liye."}, "name": "Pagination - DataWeave for Pagination", "payload": "{\n  \"totalRecords\": 245,\n  \"pageSize\": 50,\n  \"currentPage\": 2,\n  \"records\": [\n    { \"id\": 51, \"name\": \"Miami Utility Substation 4\" },\n    { \"id\": 52, \"name\": \"Fort Lauderdale Feeder Line\" }\n  ]\n}"}, {"id": "error-handling-dw", "title": "Error Handling - DataWeave with Error Payload", "category": "advanced", "format": "json", "input": "{\n  \"errorType\": \"HTTP:NOT_FOUND\",\n  \"errorDescription\": \"Customer with ID ACC-9912 was not found in SAP S/4HANA database.\",\n  \"path\": \"/api/v1/customers/ACC-9912\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  error: {\n    status: 404,\n    code: \"RESOURCE_NOT_FOUND\",\n    title: \"Entity Not Found\",\n    detail: payload.errorDescription,\n    sourcePath: payload.path,\n    correlationId: correlationId default \"CID-STATIC-ERR-99\",\n    timestamp: now() as String {format: \"yyyy-MM-dd'T'HH:mm:ss.SSSZ\"}\n  }\n}", "output": "{\n  \"error\": {\n    \"status\": 404,\n    \"code\": \"RESOURCE_NOT_FOUND\",\n    \"title\": \"Entity Not Found\",\n    \"detail\": \"Customer with ID ACC-9912 was not found in SAP S/4HANA database.\",\n    \"sourcePath\": \"/api/v1/customers/ACC-9912\",\n    \"correlationId\": \"CID-STATIC-ERR-99\",\n    \"timestamp\": \"2026-11-18T14:30:00.123+0000\"\n  }\n}", "explanation": {"kyaHua": "MuleSoft error object ko enterprise standard RFC 7807 (Problem Details for HTTP APIs) format me transform kiya gaya.", "functionDetails": "Constructs structured error JSON with HTTP status, standardized error code, correlationId for distributed log tracing, and ISO timestamp.", "interviewQuestion": "Interviewer asks: 'What is your standard error payload schema in MuleSoft Global Error Handlers?'", "realProjectUsage": "Enterprise Global Error Handler: Har MuleSoft API me On Error Propagate / Continue ke andar use hota hai."}, "name": "Error Handling - DataWeave with Error Payload", "payload": "{\n  \"errorType\": \"HTTP:NOT_FOUND\",\n  \"errorDescription\": \"Customer with ID ACC-9912 was not found in SAP S/4HANA database.\",\n  \"path\": \"/api/v1/customers/ACC-9912\"\n}"}];;
window.DW_PRESETS = DW_PRESETS;




let currentDwPresetIdx = 0;

function populateDwDropdowns(filteredPresets) {
  const list = filteredPresets || DW_PRESETS;
  const selectElements = document.querySelectorAll('#dw-preset-select, select.dw-select');
  selectElements.forEach(selectEl => {
    if (!selectEl) return;
    const currentVal = selectEl.value;
    selectEl.innerHTML = '';
    list.forEach(p => {
      const opt = document.createElement('option');
      const originalIdx = DW_PRESETS.findIndex(item => item.id === p.id);
      opt.value = originalIdx;
      opt.textContent = p.name;
      selectEl.appendChild(opt);
    });
    if (currentVal !== '') selectEl.value = currentVal;
  });
}

function loadDwPreset(idx) {
  currentDwPresetIdx = parseInt(idx, 10);
  if (isNaN(currentDwPresetIdx) || currentDwPresetIdx < 0 || currentDwPresetIdx >= DW_PRESETS.length) {
    currentDwPresetIdx = 0;
  }
  const p = DW_PRESETS[currentDwPresetIdx];
  if (!p) return;

  try { localStorage.setItem('mulesoft_dw_preset_idx', currentDwPresetIdx); } catch(e) {}

  // Update all dropdown selects
  document.querySelectorAll('#dw-preset-select, select.dw-select').forEach(sel => {
    sel.value = currentDwPresetIdx;
  });

  // Panel 1: Input Payload
  document.querySelectorAll('#dw-input-editor, textarea.dw-input-editor').forEach(el => {
    el.value = p.input;
  });
  document.querySelectorAll('#dw-input-format-badge, .dw-panel-format').forEach(el => {
    el.textContent = (p.format || 'JSON').toUpperCase();
  });

  // Panel 2: DW Script
  document.querySelectorAll('#dw-script-editor, textarea.dw-script-editor').forEach(el => {
    el.value = p.script;
  });

  // Panel 3: Transformed Output
  document.querySelectorAll('#dw-output-viewer, textarea.dw-output-viewer').forEach(el => {
    el.value = p.output;
  });
  document.querySelectorAll('#dw-live-status, .dw-status-indicator').forEach(el => {
    el.textContent = '✓ Ready / Pre-computed';
    el.style.color = '#34d399';
  });

  // Panel 4: Explanation Panel
  const expl = p.explanation || {};
  const explHtml = `
    <div style="display:flex; flex-direction:column; gap:12px; font-size:0.85rem; line-height:1.6;">
      <div style="background:rgba(99,91,255,0.08); border-left:3px solid #635bff; padding:10px 14px; border-radius:4px;">
        <div style="color:#a5b4fc; font-weight:700; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
          <span>🔹 Kya Hua? (Transformation Logic)</span>
        </div>
        <div style="color:#e2e8f0;">${expl.kyaHua || 'Field mapping performed.'}</div>
      </div>

      <div style="background:rgba(0,240,255,0.06); border-left:3px solid #00f0ff; padding:10px 14px; border-radius:4px;">
        <div style="color:#00f0ff; font-weight:700; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
          <span>⚙️ Key Function(s) Used</span>
        </div>
        <div style="color:#cbd5e1; font-family:var(--font-mono, monospace); font-size:0.8rem;">${expl.functionDetails || 'DataWeave 2.0 Core'}</div>
      </div>

      <div style="background:rgba(250,204,21,0.08); border-left:3px solid #facc15; padding:10px 14px; border-radius:4px;">
        <div style="color:#fde047; font-weight:700; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
          <span>🎯 Interview Question & Expected Answer</span>
        </div>
        <div style="color:#e2e8f0;">${expl.interviewQuestion || 'Frequently asked in MuleSoft technical rounds.'}</div>
      </div>

      <div style="background:rgba(16,185,129,0.08); border-left:3px solid #10b981; padding:10px 14px; border-radius:4px;">
        <div style="color:#6ee7b7; font-weight:700; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
          <span>💼 Real Project Architecture Usage</span>
        </div>
        <div style="color:#e2e8f0;">${expl.realProjectUsage || 'Production integration pipeline pattern.'}</div>
      </div>
    </div>
  `;
  document.querySelectorAll('#dw-explanation-box, .dw-explanation-content').forEach(el => {
    el.innerHTML = explHtml;
  });
}

function runDwTransformation() {
  const p = DW_PRESETS[currentDwPresetIdx];
  const inputEl = document.querySelector('#dw-input-editor, textarea.dw-input-editor');
  const outputEl = document.querySelector('#dw-output-viewer, textarea.dw-output-viewer');
  const statusEl = document.querySelector('#dw-live-status, .dw-status-indicator');
  
  if (!outputEl) return;

  if (statusEl) {
    statusEl.textContent = '⚡ Running...';
    statusEl.style.color = '#facc15';
  }

  setTimeout(() => {
    try {
      if (p && p.format === 'json' && inputEl && (inputEl.value.trim().startsWith('{') || inputEl.value.trim().startsWith('['))) {
        const rawJson = JSON.parse(inputEl.value);
        if (p.id === 'filter-array' && Array.isArray(rawJson)) {
          const res = rawJson.filter(item => (item.amount || item.salary || 0) > 100);
          outputEl.value = JSON.stringify(res, null, 2);
        } else if (p.id === 'map-array' && Array.isArray(rawJson)) {
          const res = rawJson.map(item => Object.assign({}, item, { processed: true, timestamp: new Date().toISOString() }));
          outputEl.value = JSON.stringify(res, null, 2);
        } else {
          outputEl.value = p.output;
        }
      } else {
        outputEl.value = p ? p.output : '// Transformed output';
      }
      if (statusEl) {
        statusEl.textContent = '⚡ Evaluated (Live)';
        statusEl.style.color = '#00f0ff';
      }
    } catch(e) {
      if (p) outputEl.value = p.output;
      if (statusEl) {
        statusEl.textContent = '✓ Pre-computed Output';
        statusEl.style.color = '#34d399';
      }
    }
  }, 100);
}

function filterDwByCategory(cat, btn) {
  document.querySelectorAll('.dw-cat-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  let filtered = DW_PRESETS;
  if (cat !== 'all') {
    filtered = DW_PRESETS.filter(p => p.category === cat);
  }
  populateDwDropdowns(filtered);
  if (filtered.length > 0) {
    const originalIdx = DW_PRESETS.findIndex(item => item.id === filtered[0].id);
    loadDwPreset(originalIdx);
  }
}

function searchDwPresets(query) {
  const q = (query || '').toLowerCase().trim();
  const filtered = DW_PRESETS.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q) ||
    p.script.toLowerCase().includes(q)
  );
  populateDwDropdowns(filtered.length > 0 ? filtered : DW_PRESETS);
  if (filtered.length > 0) {
    const originalIdx = DW_PRESETS.findIndex(item => item.id === filtered[0].id);
    loadDwPreset(originalIdx);
  }
}

function copyDwPanel(panel) {
  let val = '';
  if (panel === 'input') {
    val = document.querySelector('#dw-input-editor, textarea.dw-input-editor')?.value || '';
  } else if (panel === 'script') {
    val = document.querySelector('#dw-script-editor, textarea.dw-script-editor')?.value || '';
  } else if (panel === 'output') {
    val = document.querySelector('#dw-output-viewer, textarea.dw-output-viewer')?.value || '';
  }
  if (!val) return;
  navigator.clipboard.writeText(val).then(() => {
    alert(panel.toUpperCase() + ' copied to clipboard!');
  }).catch(() => {
    prompt('Copy to clipboard: Ctrl+C, Enter', val);
  });
}

function resetDwPreset() {
  loadDwPreset(currentDwPresetIdx);
}

function openDataWeaveModal() {
  const modal = document.getElementById('dw-modal');
  if (modal) {
    modal.classList.add('active');
    loadDwPreset(currentDwPresetIdx);
  }
}

function closeDataWeaveModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('btn-close-modal')) return;
  const modal = document.getElementById('dw-modal');
  if (modal) modal.classList.remove('active');
}

function openDwWithCode(btn) {
  const pre = btn.closest('.code-block')?.querySelector('pre');
  if (!pre) return;
  const code = pre.innerText;
  openDataWeaveModal();
  document.querySelectorAll('#dw-script-editor, textarea.dw-script-editor').forEach(el => {
    el.value = code;
  });
  runDwTransformation();
}

// ==========================================
// 6. CloudHub vCore Sizing & Decision Tool Logic
// ==========================================

function calculateVCoreDecision() {
  const tps = parseFloat(document.getElementById('vcalc-tps')?.value || 50);
  const payloadKb = parseFloat(document.getElementById('vcalc-payload')?.value || 10);
  const numApis = parseInt(document.getElementById('vcalc-apis')?.value || 1, 10);
  const workloadType = document.getElementById('vcalc-type')?.value || 'realtime';
  const platform = document.getElementById('vcalc-platform')?.value || 'ch2';
  const peakMultiplier = parseFloat(document.getElementById('vcalc-peak')?.value || 1.0);
  const isHa = document.getElementById('vcalc-ha')?.checked ?? true;

  if (document.getElementById('vcalc-tps-val')) document.getElementById('vcalc-tps-val').textContent = tps + ' req/sec';
  if (document.getElementById('vcalc-payload-val')) document.getElementById('vcalc-payload-val').textContent = (payloadKb >= 1000 ? (payloadKb/1000).toFixed(1) + ' MB' : payloadKb + ' KB');

  const effectiveTps = tps * peakMultiplier;
  const latencyMs = (workloadType === 'batch') ? 1500 : (workloadType === 'file' ? 3000 : (workloadType === 'scheduled' ? 400 : 180));
  const inflight = (effectiveTps * latencyMs) / 1000;

  let workloadFactor = 1.0;
  if (workloadType === 'batch') workloadFactor = 2.2;
  else if (workloadType === 'file') workloadFactor = 2.5;
  else if (workloadType === 'scheduled') workloadFactor = 1.2;

  const memoryPerReqMb = (payloadKb * 3.5) / 1024;
  const inflightMemoryMb = inflight * memoryPerReqMb * workloadFactor;

  let workerSize = 0.1;
  let workerRamGb = 1.5;
  if (platform === 'ch2') {
    if (inflightMemoryMb > 5000 || effectiveTps > 800 || workloadType === 'file') {
      workerSize = 4.0; workerRamGb = 7.5;
    } else if (inflightMemoryMb > 2200 || effectiveTps > 300 || workloadType === 'batch') {
      workerSize = 2.0; workerRamGb = 3.5;
    } else if (inflightMemoryMb > 900 || effectiveTps > 100) {
      workerSize = 1.0; workerRamGb = 2.0;
    } else if (inflightMemoryMb > 400 || effectiveTps > 40) {
      workerSize = 0.5; workerRamGb = 1.5;
    } else if (inflightMemoryMb > 150 || effectiveTps > 15) {
      workerSize = 0.2; workerRamGb = 1.0;
    } else {
      workerSize = 0.1; workerRamGb = 1.0;
    }
  } else {
    if (inflightMemoryMb > 5000 || effectiveTps > 800 || workloadType === 'file') {
      workerSize = 4.0; workerRamGb = 7.5;
    } else if (inflightMemoryMb > 2200 || effectiveTps > 300 || workloadType === 'batch') {
      workerSize = 2.0; workerRamGb = 3.5;
    } else if (inflightMemoryMb > 400 || effectiveTps > 40) {
      workerSize = 1.0; workerRamGb = 1.5;
    } else if (effectiveTps > 15 || inflightMemoryMb > 100) {
      workerSize = 0.2; workerRamGb = 1.5;
    } else {
      workerSize = 0.1; workerRamGb = 1.5;
    }
  }

  const numWorkers = isHa ? Math.max(2, Math.ceil(effectiveTps / (workerSize * 500))) : 1;
  const totalVCores = +(workerSize * numWorkers * numApis).toFixed(2);
  const monthlyCost = Math.round(totalVCores * 250);

  if (document.getElementById('vcalc-res-worker-size')) {
    document.getElementById('vcalc-res-worker-size').textContent = workerSize + ' vCore';
  }
  if (document.getElementById('vcalc-res-ram')) {
    document.getElementById('vcalc-res-ram').textContent = workerRamGb + ' GB RAM';
  }
  if (document.getElementById('vcalc-res-workers')) {
    document.getElementById('vcalc-res-workers').textContent = numWorkers + (numWorkers > 1 ? ' Workers' : ' Worker');
  }
  if (document.getElementById('vcalc-res-ha-badge')) {
    document.getElementById('vcalc-res-ha-badge').textContent = isHa ? '✅ HA Multi-AZ Active' : '⚠️ Standalone (No HA)';
    document.getElementById('vcalc-res-ha-badge').style.color = isHa ? '#34d399' : '#fbbf24';
  }
  if (document.getElementById('vcalc-res-total-vcores')) {
    document.getElementById('vcalc-res-total-vcores').textContent = totalVCores + ' vCores';
  }
  if (document.getElementById('vcalc-res-cost')) {
    document.getElementById('vcalc-res-cost').textContent = '$' + monthlyCost.toLocaleString() + ' / mo';
  }

  let whyText = `Aapka Expected Throughput <strong>${effectiveTps} TPS</strong> hai aur Average Payload <strong>${payloadKb} KB</strong> hai (${platform === 'ch2' ? 'CloudHub 2.0' : 'CloudHub 1.0'}). `;
  whyText += `Little's Law ($L = \lambda \times W$) ke mutabiq concurrent in-flight requests lagbhag <strong>${Math.ceil(inflight)}</strong> banti hain. `;
  if (isHa) {
    whyText += `High Availability (Multi-AZ) enabled hone ke karan minimum <strong>${numWorkers} Replicas</strong> select kiye gaye hain taaki single AZ failure me 100% uptime mile. `;
  }
  whyText += `Har worker ko <strong>${workerSize} vCore (${workerRamGb}GB RAM)</strong> allocate karna memory pressure aur GC pauses ko sub-second rakhta hai. Total consumption: <strong>${totalVCores} vCores</strong> across ${numApis} API(s).`;

  if (document.getElementById('vcalc-res-explanation')) {
    document.getElementById('vcalc-res-explanation').innerHTML = whyText;
  }
}

function setVCoreTps(tps) {
  const el = document.getElementById('vcalc-tps');
  if (el) { el.value = tps; calculateVCoreDecision(); }
}

function setVCorePayload(kb) {
  const el = document.getElementById('vcalc-payload');
  if (el) { el.value = kb; calculateVCoreDecision(); }
}

function resetVCoreCalculator() {
  if (document.getElementById('vcalc-tps')) document.getElementById('vcalc-tps').value = 50;
  if (document.getElementById('vcalc-payload')) document.getElementById('vcalc-payload').value = 10;
  if (document.getElementById('vcalc-apis')) document.getElementById('vcalc-apis').value = 1;
  if (document.getElementById('vcalc-type')) document.getElementById('vcalc-type').value = 'realtime';
  if (document.getElementById('vcalc-platform')) document.getElementById('vcalc-platform').value = 'ch2';
  if (document.getElementById('vcalc-peak')) document.getElementById('vcalc-peak').value = '1.0';
  if (document.getElementById('vcalc-ha')) document.getElementById('vcalc-ha').checked = true;
  calculateVCoreDecision();
}

function copyVCoreRecommendation() {
  const size = document.getElementById('vcalc-res-worker-size')?.textContent || '0.2 vCore';
  const reps = document.getElementById('vcalc-res-workers')?.textContent || '2 Workers';
  const total = document.getElementById('vcalc-res-total-vcores')?.textContent || '0.4 vCores';
  const cost = document.getElementById('vcalc-res-cost')?.textContent || '$100/mo';
  const text = `MuleSoft CloudHub Capacity Recommendation:\n- Worker Size: ${size}\n- Deployment: ${reps}\n- Total vCores: ${total}\n- Est. Monthly Cost: ${cost}\nCalculated via MuleSoft Hub (https://niranjanpotter.github.io)`;
  navigator.clipboard.writeText(text).then(() => {
    alert('Recommendation copied to clipboard!');
  }).catch(() => {
    prompt('Copy to clipboard: Ctrl+C, Enter', text);
  });
}

// Global initialization hook
document.addEventListener('DOMContentLoaded', () => {
  try {
    populateDwDropdowns();
    const savedIdx = localStorage.getItem('mulesoft_dw_preset_idx');
    const initialIdx = (savedIdx !== null && DW_PRESETS[parseInt(savedIdx, 10)]) ? parseInt(savedIdx, 10) : 0;
    loadDwPreset(initialIdx);
  } catch(e) { console.error('DW Init error', e); }

  try { calculateVCoreDecision(); } catch(e) { console.error('vCore Init error', e); }
});

setTimeout(() => {
  try {
    populateDwDropdowns();
    const savedIdx = localStorage.getItem('mulesoft_dw_preset_idx');
    const initialIdx = (savedIdx !== null && DW_PRESETS[parseInt(savedIdx, 10)]) ? parseInt(savedIdx, 10) : 0;
    loadDwPreset(initialIdx);
  } catch(e) {}
  try { calculateVCoreDecision(); } catch(e) {}
}, 50);


// 7. Interactive Flow Inspector Logic
// ==========================================

const TIER_SPECS = {
  exp: {
    title: "Experience Layer (eAPI)",
    protocol: "REST HTTPS / JSON + mTLS",
    metrics: "P99 < 80ms · Rate Limit: 100 req/min per Client ID",
    desc: "Designed for omnichannel ingress (iOS, Android, React SPA). Strips internal metadata, enforces strict OAuth2 JWT token scopes, and masks PII before leaving the enterprise boundary."
  },
  proc: {
    title: "Process Layer (pAPI)",
    protocol: "Async Saga & Scatter-Gather Orchestration",
    metrics: "P99 < 240ms · 3000ms Scatter-Gather Timeout",
    desc: "Aggregates Customer 360 profiles. Dispatches concurrent non-blocking calls to SAP and DynamoDB. Implements compensating rollback transactions on partial failures."
  },
  sys: {
    title: "System Layer (sAPI)",
    protocol: "Direct Connector (SAP BAPI / DynamoDB PutItem)",
    metrics: "Sub-10ms DynamoDB · Zero Business Logic",
    desc: "Provides strict canonical data abstraction over legacy backend databases and ERPs. Isolates downstream systems from spikes via connection pooling and circuit breakers."
  }
};

function inspectTier(tierKey) {
  const data = TIER_SPECS[tierKey];
  if (!data) return;
  const box = document.getElementById('tier-inspector-details');
  if (!box) return;
  box.innerHTML = `
    <div style="background:rgba(62,99,221,0.15); border:1px solid #00f0ff; border-radius:8px; padding:16px; margin-top:16px; text-align:left;">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
        <strong style="color:#00f0ff; font-size:1rem;">${data.title}</strong>
        <span class="badge badge-primary">${data.protocol}</span>
      </div>
      <div style="color:#a5b4fc; font-size:0.85rem; font-weight:700; margin-bottom:6px;">⚡ SLA &amp; Performance: ${data.metrics}</div>
      <p style="color:#cbd5e1; font-size:0.88rem; line-height:1.6; margin:0;">${data.desc}</p>
    </div>
  `;
}


// ==========================================
// MODULE A: TELEPROMPTER & COACHING STUDIO
// ==========================================
function copyPitchScript(btn) {
  const sentences = document.querySelectorAll('#tpSpeechBox .tp-sentence');
  let fullText = Array.from(sentences).map(s => s.innerText.trim()).join('\\n\\n');
  navigator.clipboard.writeText(fullText).then(() => {
    const originalHtml = btn.innerHTML;
    btn.innerHTML = '<span class="tp-btn-icon">✓</span><span class="tp-btn-text">Copied!</span>';
    btn.classList.add('bounce-check');
    setTimeout(() => {
      btn.innerHTML = originalHtml;
      btn.classList.remove('bounce-check');
    }, 2000);
  });
}

let tpInterval = null;
let tpRunning = false;
let currentSentenceIdx = 0;
const sentenceDurations = [28, 30, 26, 26]; // Total ~110 seconds

function toggleTeleprompter() {
  const btn = document.getElementById('tpPlayBtn');
  const track = document.getElementById('tpProgressTrack');
  const bar = document.getElementById('tpProgressBar');
  const sentences = document.querySelectorAll('#tpSpeechBox .tp-sentence');
  
  if (!btn || !track || !bar || !sentences.length) return;
  
  if (tpRunning) {
    // Pause
    clearInterval(tpInterval);
    tpRunning = false;
    btn.innerHTML = '<span class="tp-btn-icon">▶️</span><span class="tp-btn-text">Resume Practice</span>';
    return;
  }
  
  tpRunning = true;
  track.style.display = 'block';
  btn.innerHTML = '<span class="tp-btn-icon">⏸️</span><span class="tp-btn-text">Pause Practice</span>';
  
  if (currentSentenceIdx >= sentences.length) {
    currentSentenceIdx = 0;
  }
  
  const totalDuration = 110; // seconds
  let elapsed = currentSentenceIdx > 0 ? sentenceDurations.slice(0, currentSentenceIdx).reduce((a, b) => a + b, 0) : 0;
  
  function updateHighlight() {
    sentences.forEach((s, idx) => {
      if (idx === currentSentenceIdx) {
        s.classList.add('tp-active');
        s.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        s.classList.remove('tp-active');
      }
    });
  }
  
  updateHighlight();
  
  tpInterval = setInterval(() => {
    elapsed += 0.5;
    const pct = Math.min((elapsed / totalDuration) * 100, 100);
    bar.style.width = pct + '%';
    
    // Check sentence transition
    let accumulated = 0;
    for (let i = 0; i < sentenceDurations.length; i++) {
      accumulated += sentenceDurations[i];
      if (elapsed < accumulated) {
        if (currentSentenceIdx !== i) {
          currentSentenceIdx = i;
          updateHighlight();
        }
        break;
      }
    }
    
    if (elapsed >= totalDuration) {
      clearInterval(tpInterval);
      tpRunning = false;
      currentSentenceIdx = 0;
      btn.innerHTML = '<span class="tp-btn-icon">🔄</span><span class="tp-btn-text">Replay Practice</span>';
      setTimeout(() => {
        sentences.forEach(s => s.classList.remove('tp-active'));
        bar.style.width = '0%';
        track.style.display = 'none';
      }, 3500);
    }
  }, 500);
}

function scrollToModule(id) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    el.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
    el.style.borderColor = '#00F2FE';
    el.style.boxShadow = '0 0 25px rgba(0, 242, 254, 0.4)';
    setTimeout(() => {
      el.style.borderColor = '';
      el.style.boxShadow = '';
    }, 1800);
  }
}

/* ========================================= */

// Runtime UI/UX enhancements: ensure data-labels, dynamic callouts, and code badges
document.addEventListener('DOMContentLoaded', function() {
  // 1. Set data-label on any table cells missing it
  document.querySelectorAll('table').forEach(function(table) {
    if (!table.classList.contains('responsive-table')) {
      table.classList.add('responsive-table');
    }
    var headers = Array.from(table.querySelectorAll('thead th')).map(function(th) {
      return th.textContent.trim();
    });
    if (headers.length > 0) {
      table.querySelectorAll('tbody tr').forEach(function(tr) {
        tr.querySelectorAll('td').forEach(function(td, idx) {
          if (!td.getAttribute('data-label') && headers[idx]) {
            td.setAttribute('data-label', headers[idx]);
          }
        });
      });
    }
  });

  // 2. Format inline text callouts like Important, Why it matters, Production Warning
  document.querySelectorAll('.answer-body-content p.doc-p').forEach(function(p) {
    var txt = p.textContent.trim();
    if (txt.startsWith('Important:') && !p.classList.contains('callout')) {
      p.className = 'callout callout-info';
      p.innerHTML = '<div class="callout-header"><span class="callout-icon">ℹ️</span><strong>Important</strong></div><div class="callout-body">' + p.innerHTML.replace(/^Important:\s*/, '') + '</div>';
    } else if (txt.startsWith('Why it matters:') && !p.classList.contains('callout')) {
      p.className = 'callout callout-verbal';
      p.innerHTML = '<div class="callout-header"><span class="callout-icon">💡</span><strong>Why It Matters</strong></div><div class="callout-body">' + p.innerHTML.replace(/^Why it matters:\s*/, '') + '</div>';
    } else if ((txt.startsWith('Production Warning:') || txt.startsWith('COMMON MISTAKE:')) && !p.classList.contains('callout')) {
      p.className = 'callout callout-warning';
      var label = txt.startsWith('Production Warning:') ? 'Production Warning' : 'Common Mistake';
      p.innerHTML = '<div class="callout-header"><span class="callout-icon">⚠️</span><strong>' + label + '</strong></div><div class="callout-body">' + p.innerHTML.replace(/^(?:Production Warning:|COMMON MISTAKE:)\s*/, '') + '</div>';
    }
  });

  // 3. Highlight code words like ${api.id}, persistent=true, OSv2
  var codeKeywords = ['${api.id}', 'persistent=true', 'persistent=false', 'OSv2', 'CloudHub 2.0', 'CloudHub 1.0', 'vars.httpStatus', 'vars.counter'];
  document.querySelectorAll('.answer-body-content p, .answer-body-content li').forEach(function(el) {
    if (el.classList.contains('callout') || el.closest('table')) return;
    var htmlContent = el.innerHTML;
    codeKeywords.forEach(function(kw) {
      if (htmlContent.indexOf(kw) !== -1 && htmlContent.indexOf('<code>' + kw + '</code>') === -1) {
        var escapedKw = kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        var reg = new RegExp('(?<!<code>)' + escapedKw + '(?!<\/code>)', 'g');
        htmlContent = htmlContent.replace(reg, '<code>' + kw + '</code>');
      }
    });
    el.innerHTML = htmlContent;
  });

  // 4. Diagram Expand & Lightbox Delegating Controller
  var lightbox = document.getElementById('diagramLightbox');
  var lightboxContent = document.getElementById('diagramLightboxContent');
  var lightboxClose = document.getElementById('diagramLightboxClose');

  function openDiagramLightbox(svg) {
    if (!lightbox || !lightboxContent || !svg) return;
    lightboxContent.innerHTML = svg.outerHTML;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDiagramLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    if (lightboxContent) lightboxContent.innerHTML = '';
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeDiagramLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target === lightboxContent) {
        closeDiagramLightbox();
      }
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeDiagramLightbox();
    }
  });

  // Inject Expand button into every diagram wrapper
  document.querySelectorAll('.diagram-svg-wrapper').forEach(function(wrapper) {
    var svg = wrapper.querySelector('svg');
    if (svg && !wrapper.querySelector('.diagram-expand-btn')) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'diagram-expand-btn';
      btn.setAttribute('aria-label', 'Expand diagram to fullscreen');
      btn.innerHTML = '<span>⤢</span> <span>Expand</span>';
      btn.addEventListener('click', function(ev) {
        ev.stopPropagation();
        openDiagramLightbox(svg);
      });
      wrapper.appendChild(btn);
    }
  });
  // 5. Mobile Off-Canvas Drawer & FAB Controller
  window.toggleSidebarDrawer = function(force) {
    var sidebar = document.getElementById('toc-sidebar');
    var backdrop = document.getElementById('sidebarBackdrop');
    var hamburger = document.getElementById('hamburgerBtn');
    if (!sidebar) return;
    var isOpen = sidebar.classList.contains('drawer-open');
    var newState = typeof force === 'boolean' ? force : !isOpen;
    if (newState) {
      sidebar.classList.add('drawer-open');
      if (backdrop) backdrop.classList.add('active');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      sidebar.classList.remove('drawer-open');
      if (backdrop) backdrop.classList.remove('active');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  document.querySelectorAll('.quick-sidebar-link').forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth < 1024) {
        toggleSidebarDrawer(false);
      }
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var sidebar = document.getElementById('toc-sidebar');
      if (sidebar && sidebar.classList.contains('drawer-open')) {
        toggleSidebarDrawer(false);
      }
    }
  });

  window.addEventListener('scroll', function() {
    var fabTop = document.getElementById('fabBackToTop');
    if (!fabTop) return;
    if (window.scrollY > 400) {
      fabTop.classList.add('visible');
    } else {
      fabTop.classList.remove('visible');
    }
  }, { passive: true });

  // 6. DataWeave Mobile Tab Switcher
  window.switchDwMobileTab = function(tabName, btn) {
    document.querySelectorAll('.dw-tab-btn').forEach(function(b) { b.classList.remove('active'); });
    if (btn) {
      btn.classList.add('active');
    } else {
      var match = document.querySelector('.dw-tab-btn[data-tab="' + tabName + '"]');
      if (match) match.classList.add('active');
    }
    var panels = {
      input: document.getElementById('dw-panel-input'),
      script: document.getElementById('dw-panel-script'),
      output: document.getElementById('dw-panel-output'),
      notes: document.getElementById('dw-panel-notes')
    };
    Object.keys(panels).forEach(function(k) {
      if (panels[k]) {
        if (k === tabName) {
          panels[k].classList.add('dw-tab-active');
        } else {
          panels[k].classList.remove('dw-tab-active');
        }
      }
    });
  };

  // Intercept runDwTransformation to auto-switch to output on mobile
  if (typeof window.runDwTransformation === 'function') {
    var originalRunDw = window.runDwTransformation;
    window.runDwTransformation = function() {
      originalRunDw.apply(this, arguments);
      if (window.innerWidth < 768) {
        switchDwMobileTab('output');
      }
    };
  }

  // 7. Responsive Tables Wrapping
  document.querySelectorAll('table').forEach(function(tbl) {
    if (!tbl.parentElement.classList.contains('table-scroll')) {
      var wrap = document.createElement('div');
      wrap.className = 'table-scroll';
      tbl.parentNode.insertBefore(wrap, tbl);
      wrap.appendChild(tbl);
    }
  });

  // 8. Code Block Copy Buttons
  document.querySelectorAll('pre').forEach(function(pre) {
    if (!pre.querySelector('.code-copy-btn')) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'code-copy-btn';
      btn.setAttribute('aria-label', 'Copy code snippet to clipboard');
      btn.innerHTML = '📋 Copy';
      btn.addEventListener('click', function() {
        var code = pre.querySelector('code');
        var text = code ? code.innerText : pre.innerText;
        navigator.clipboard.writeText(text).then(function() {
          btn.innerHTML = '✓ Copied';
          setTimeout(function() { btn.innerHTML = '📋 Copy'; }, 2000);
        });
      });
      pre.appendChild(btn);
    }
  });
});

// Explicit window exports for backward compatibility & mobile interactions
if (typeof window !== 'undefined') {
  if (typeof openSearchModal === 'function') window.openSearchModal = openSearchModal;
  if (typeof closeSearchModal === 'function') window.closeSearchModal = closeSearchModal;
  if (typeof toggleTheme === 'function') window.toggleTheme = toggleTheme;
  if (typeof toggleSidebar === 'function') window.toggleSidebar = toggleSidebar;
  if (typeof toggleSidebarDrawer === 'function') window.toggleSidebarDrawer = toggleSidebarDrawer;
  if (typeof openDataWeaveModal === 'function') window.openDataWeaveModal = openDataWeaveModal;
  if (typeof closeDataWeaveModal === 'function') window.closeDataWeaveModal = closeDataWeaveModal;
  if (typeof togglePracticeMode === 'function') window.togglePracticeMode = togglePracticeMode;
  if (typeof filterBlogCategory === 'function') window.filterBlogCategory = filterBlogCategory;
  if (typeof filterSidebarModules === 'function') window.filterSidebarModules = filterSidebarModules;
  if (typeof filterPracticeCategory === 'function') window.filterPracticeCategory = filterPracticeCategory;
  if (typeof expandAllAnswers === 'function') window.expandAllAnswers = expandAllAnswers;
  if (typeof collapseAllAnswers === 'function') window.collapseAllAnswers = collapseAllAnswers;
  if (typeof resetFilters === 'function') window.resetFilters = resetFilters;
}
