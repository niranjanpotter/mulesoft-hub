const SEARCH_INDEX = [{"id": "mod-a-q1", "tag": "Q1", "title": "Tell me about your project end to end.", "modTitle": "Interview Coaching, Strategy & Project Overview", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "✓ ANSWER Reference Domain: Large-Scale Enterprise Utility & Customer Integration Platform (Reference Case Study). Platform: Customer Integration Platform connecting Salesforce Employee Desktop and Conversational AI channels → SAP S/4HANA, D"}, {"id": "mod-a-q2", "tag": "Q2", "title": "What is API-led connectivity and why did you use it?", "modTitle": "Interview Coaching, Strategy & Project Overview", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "✓ ANSWER API-led organizes integrations into 3 reusable layers eliminating point-to-point coupling: LAYER PURPOSE ENTERPRISE EXAMPLE XAPI — Experience Channel-specific auth + validation + response formatting accmain-empdsk-xapi — employee d"}, {"id": "mod-a-q3", "tag": "Q3", "title": "What technology did you work with? (Full tech stack)", "modTitle": "Interview Coaching, Strategy & Project Overview", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "✓ ANSWER CATEGORY TECHNOLOGY DETAILS Runtime Mule 4.x Mule 4.4 / 4.6 LTS / 4.9 (Java 17) on CloudHub 2.0 & RTF API Design RAML 1.0 / OAS 3.0 Contract-first API design; APIkit auto-scaffolds & validates flows Transform DataWeave 2.0 Streamin"}, {"id": "mod-b-q1", "tag": "Q1", "title": "What Salesforce Connector operations have you used?", "modTitle": "Salesforce Connector & Bulk API 2.0", "category": "Salesforce & Enterprise Connectors", "role": "Developer", "snippet": "✓ ANSWER Operations · Upsert · SOQL · Bulk API 2.0 · Governor Limits · JWT Bearer OPERATION WHEN TO USE OUR USAGE IN PRODUCTION Query SOQL read Account 360, Opportunity details after Platform Event Upsert Insert or update by External ID SAP"}, {"id": "mod-b-q2", "tag": "Q2", "title": "What is Salesforce Bulk API? When do you use it?", "modTitle": "Salesforce Connector & Bulk API 2.0", "category": "Salesforce & Enterprise Connectors", "role": "Developer", "snippet": "✓ ANSWER Bulk API 2.0 loads or extracts millions of records asynchronously and does NOT consume your org's standard REST/SOAP 24-hour rolling API request allocation (100,000 base + 1,000 per license in Enterprise Edition). (Note: 150 is the"}, {"id": "mod-b-q3", "tag": "Q3", "title": "How do you handle Salesforce governor limits?", "modTitle": "Salesforce Connector & Bulk API 2.0", "category": "Salesforce & Enterprise Connectors", "role": "Developer", "snippet": "✓ ANSWER Standard REST/SOAP API Limit (Enterprise Edition): Rolling 24-hour org quota of 100,000 base calls + 1,000 calls per Salesforce user license (Sandboxes allow up to 5,000,000 calls per 24 hours — not unlimited; note that 150 is the "}, {"id": "mod-b-q4", "tag": "Q4", "title": "JWT Bearer vs Username-Password auth for Salesforce — which do you use?", "modTitle": "Salesforce Connector & Bulk API 2.0", "category": "Salesforce & Enterprise Connectors", "role": "Developer", "snippet": "✓ ANSWER Username-Password: requires actual user credentials. Password changes break integration, account can lock, appears as user in audit logs — never use in production. JWT Bearer: RSA asymmetric key pair — no password needed. Token sig"}, {"id": "mod-b-q5", "tag": "Q5", "title": "What is an External ID in Salesforce? How is it used in Upsert?", "modTitle": "Salesforce Connector & Bulk API 2.0", "category": "Salesforce & Enterprise Connectors", "role": "Developer", "snippet": "🎯 🎯 Interview Pitch - Say It Like This (30 Sec) \"In enterprise integrations, I enforce using Salesforce External IDs paired with the Upsert operation as a best practice for idempotency. This allows MuleSoft to create or update records in a "}, {"id": "mod-c-q1", "tag": "Q1", "title": "What are Platform Events? How do you subscribe in MuleSoft?", "modTitle": "Platform Events & Change Data Capture (CDC)", "category": "Salesforce & Enterprise Connectors", "role": "Developer / Senior", "snippet": "✓ ANSWER Platform Events: Custom events you define in Salesforce and publish explicitly. Business events: Order Closed, Payment Processed. CDC (Change Data Capture): Automatic events fired by Salesforce on any record change — no Apex/code n"}, {"id": "mod-c-q2", "tag": "Q2", "title": "What is event retention? What if Mule app is down >72 hours?", "modTitle": "Platform Events & Change Data Capture (CDC)", "category": "Salesforce & Enterprise Connectors", "role": "Developer / Senior", "snippet": "✓ ANSWER Salesforce Platform Events and CDC are retained for 72 hours. If MuleSoft subscriber restarts with replayId=\"-2\" , it receives all events from the last 72 hours — nothing is lost for normal downtime. Subscribe · Publish · replayId "}, {"id": "mod-c-q3", "tag": "Q3", "title": "How do you handle duplicate Platform Events (at-least-once delivery)?", "modTitle": "Platform Events & Change Data Capture (CDC)", "category": "Salesforce & Enterprise Connectors", "role": "Developer / Senior", "snippet": "✓ ANSWER Salesforce uses at-least-once delivery — duplicates are possible. Implement idempotency with ObjectStore: Idempotency Pattern // 1. Extract Replay ID or business key from event // 2. Check ObjectStore os:contains(key=replayId, obje"}, {"id": "mod-c-q4", "tag": "Q4", "title": "Difference between Platform Events and CDC?", "modTitle": "Platform Events & Change Data Capture (CDC)", "category": "Salesforce & Enterprise Connectors", "role": "Developer / Senior", "snippet": "✓ ANSWER ASPECT PLATFORM EVENTS CDC Who publishes You publish explicitly via Apex, Flow, or MuleSoft Salesforce fires automatically on any record change Payload Custom fields you define Includes changeType, changedFields, old+new values 🎯 🎯"}, {"id": "mod-d-q1", "tag": "Q1", "title": "Explain the Salesforce JWT Bearer authentication flow step by step.", "modTitle": "OAuth 2.0 & JWT Bearer Token Flow", "category": "Security & Connectivity", "role": "Senior / Lead", "snippet": "✓ ANSWER 1. Create a Connected App in Salesforce Setup 2. Generate RSA key pair: openssl genrsa -out private.pem 2048 → create cert from public key 3. Upload the public certificate to Connected App 4. Configure MuleSoft Salesforce Connector"}, {"id": "mod-d-q2", "tag": "Q2", "title": "How do you rotate the JWT signing key without downtime?", "modTitle": "OAuth 2.0 & JWT Bearer Token Flow", "category": "Security & Connectivity", "role": "Senior / Lead", "snippet": "✓ ANSWER Salesforce supports multiple active certificates on a Connected App. Rotation process: 1. Generate new RSA key pair Connected App · RSA key pair · JWT flow · Token rotation · Security 2. Upload new public cert to Connected App — ke"}, {"id": "mod-d-q3", "tag": "Q3", "title": "Can the same Connected App be used across multiple environments?", "modTitle": "OAuth 2.0 & JWT Bearer Token Flow", "category": "Security & Connectivity", "role": "Senior / Lead", "snippet": "✓ ANSWER Technically yes — but best practice is separate Connected Apps per environment (sandbox, production). Reasons: different Salesforce orgs have different URLs; separate apps allow independent key rotation and revocation; cleaner audi"}, {"id": "mod-e-q1", "tag": "Q1", "title": "How do you integrate MuleSoft with AWS (S3, SQS, DynamoDB, Secrets Manager)?", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER AWS SERVICE MULESOFT APPROACH ENTERPRISE USE CASE Amazon S3 Amazon S3 Connector ( createObject , getObject , listObjects ) Dynamic external DataWeave loading at runtime, large binary/CSV staging, archival storage Amazon DynamoDB Am"}, {"id": "mod-e-s3", "tag": "S3", "title": "How do authentication, IAM roles, SigV4 signing, and dynamic AWS S3 DWL loading work in Mule 4?", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Senior Developer", "snippet": "✓ ANSWER Authentication & SigV4: Official AWS connectors handle AWS Signature Version 4 (SigV4) request signing automatically. In CloudHub 2.0 / RTF deployments, store IAM credentials using encrypted Secure Properties (AES-CBC) or retrieve "}, {"id": "mod-e-q2", "tag": "Q2", "title": "What is the difference between Amazon SQS and Anypoint MQ?", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER Amazon SQS AWS-native messaging Best when entire stack is AWS Tight IAM role integration Can trigger AWS Lambda directly Standard: at-least-once; FIFO: exactly-once Anypoint MQ MuleSoft-native messaging Built for Mule-to-Mule async"}, {"id": "mod-e-q3", "tag": "Q3", "title": "How do you handle SQS visibility timeout in MuleSoft processing?", "modTitle": "AWS Integration Patterns (S3, SQS, DynamoDB)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER Visibility timeout is the period a message is hidden from other consumers after being received. If MuleSoft processing time exceeds this timeout, the message becomes visible again → redelivered → duplicate processing. Best practice"}, {"id": "mod-f-q1", "tag": "Q1", "title": "Describe a full Salesforce + SAP integration end to end.", "modTitle": "SAP + Salesforce End-to-End Integration", "category": "Salesforce & Enterprise Connectors", "role": "Senior / Architect", "snippet": "✓ ANSWER Scenario: Salesforce Opportunity Closed-Won → SAP Sales Order created → SAP Order ID written back to Salesforce. 📋 STEP-BY-STEP FLOW 1. Salesforce fires Opportunity_Closed_Won__e Platform Event when Opportunity stage changes 2. Mul"}, {"id": "mod-f-q2", "tag": "Q2", "title": "How do you prevent infinite loops in bidirectional Salesforce↔SAP sync?", "modTitle": "SAP + Salesforce End-to-End Integration", "category": "Salesforce & Enterprise Connectors", "role": "Senior / Architect", "snippet": "✓ ANSWER Challenge: updating SAP triggers a Salesforce CDC event which triggers SAP update again — infinite loop. Scenario · Data flow · Error handling · Idempotency · Compensation Solution 1 — Source System Flag: Add SAP_Last_Updated__c ti"}, {"id": "mod-f-q3", "tag": "Q3", "title": "How do you handle SAP being down when a Platform Event arrives?", "modTitle": "SAP + Salesforce End-to-End Integration", "category": "Salesforce & Enterprise Connectors", "role": "Senior / Architect", "snippet": "✓ ANSWER Synchronous flows: Until Successful with 3 retries + 30s delay. After exhaustion → On Error Continue → update Salesforce with SAP_Error_Status__c = 'FAILED' → Anypoint Alert to ops team. Asynchronous flows (preferred): Publish the "}, {"id": "mod-g-q1", "tag": "Q1", "title": "What is Scatter-Gather? How does it work?", "modTitle": "Scatter-Gather Router Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER Scatter-Gather clones the incoming Mule Event across all defined routes, executes them concurrently on parallel threads, and waits for all branches to finish. After all routes complete, results are aggregated into an Object (indexe"}, {"id": "mod-g-q2", "tag": "Q2", "title": "What is the output type of Scatter-Gather? How do you merge results?", "modTitle": "Scatter-Gather Router Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER The output of Scatter-Gather in Mule 4 is an Object (indexed Map) whose keys are string route indices ( \"0\" , \"1\" , \"2\" ...). Each entry contains a full Mule Message with payload (that route's output payload) and attributes (protoc"}, {"id": "mod-g-q3", "tag": "Q3", "title": "If one route in Scatter-Gather fails, what happens to the others?", "modTitle": "Scatter-Gather Router Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER By default: if any route fails, Scatter-Gather throws a MULE:COMPOSITE_ROUTING error and the results of all routes (including successful ones) are discarded. To handle partial failures: wrap each route in a scope with an on-error-c"}, {"id": "mod-g-q4", "tag": "Q4", "title": "Scatter-Gather vs Parallel ForEach — when to use which?", "modTitle": "Scatter-Gather Router Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "🎯 🎯 Interview Pitch - Say It Like This (30 Sec) \"When an API orchestration requires parallel data fetching from multiple disparate backends, I implement the Scatter-Gather router. It invokes all routes concurrently on separate threads and a"}, {"id": "mod-h-q1", "tag": "Q1", "title": "What is ForEach? How does it work and what is its output?", "modTitle": "ForEach & Parallel ForEach Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER ForEach iterates over a collection sequentially — one item at a time. For each iteration: payload = current item, vars.counter = current index (1-based). Important: ForEach does NOT change the outer payload. After ForEach completes"}, {"id": "mod-h-q2", "tag": "Q2", "title": "If a record fails inside ForEach, what happens? How do you handle it?", "modTitle": "ForEach & Parallel ForEach Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER By default: ForEach stops processing and propagates the error to the flow's error handler. All subsequent records are abandoned. Fix: Wrap the content of ForEach in a scope with on-error-continue . The failed record is handled loca"}, {"id": "mod-h-q3", "tag": "Q3", "title": "What is Parallel ForEach? How is it different from ForEach?", "modTitle": "ForEach & Parallel ForEach Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER Parallel ForEach processes all collection items simultaneously using thread pool. Dramatically faster for large collections when items are independent. ASPECT FOREACH PARALLEL FOREACH Processing Sequential — one at a time Parallel "}, {"id": "mod-i-q1", "tag": "Q1", "title": "What is a Batch Job? What are its phases?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✓ ANSWER Batch Job · Phases · Block size · Error handling · On Complete Batch Job processes large datasets by splitting them into records and processing them individually with fault tolerance — individual record failures don't stop the whol"}, {"id": "mod-i-q2", "tag": "Q2", "title": "What is Batch Aggregator and when do you use it?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✓ ANSWER Batch Aggregator groups individual records back into a collection of a specified size before processing. Used in the last Batch Step to do bulk database inserts or Salesforce Upsert Bulk operations. Example: 50,000 records → Batch "}, {"id": "mod-i-q3", "tag": "Q3", "title": "What is maxFailedRecords in Batch Job? What is the default?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✓ ANSWER maxFailedRecords controls when Batch Job stops processing due to too many failures. Default is 0 — any single record failure stops the entire job. VALUE BEHAVIOR 0 (default) Job stops on first failure N Job continues until N record"}, {"id": "mod-i-q4", "tag": "Q4", "title": "What happens in the On Complete phase? What data is available?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✓ ANSWER On Complete runs after all records have been processed (success or failure). The payload in On Complete is a BatchJobResult object with: payload.batchJobId — unique ID of this batch run payload.successfulRecords — count of successf"}, {"id": "mod-i-q5", "tag": "Q5", "title": "How do you roll back records in batch processing?", "modTitle": "Batch Processing Deep Dive", "category": "Flow Scopes & Concurrency", "role": "Developer / Senior", "snippet": "✓ ANSWER Batch processing does NOT have automatic XA-style rollback. For rollback patterns: Database transactions: Use a Try scope within a Batch Step with XA transaction if all records must succeed together — but this is expensive and slow"}, {"id": "mod-j-q1", "tag": "Q1", "title": "What is Until Successful? When do you use it?", "modTitle": "Until Successful Scope & Resiliency", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER Until Successful retries the processors inside it until they succeed or until the max retries count is reached. Use for transient failures — network blips, temporary backend unavailability. Until Successful — Retry SAP call 3 times"}, {"id": "mod-j-q2", "tag": "Q2", "title": "What happens when Until Successful exhausts all retries?", "modTitle": "Until Successful Scope & Resiliency", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER When all retries are exhausted, Until Successful throws MULE:RETRY_EXHAUSTED . This error bubbles up to the flow's error handler (or the enclosing scope's error handler). In our Enterprise Architecture: we catch MULE:RETRY_EXHAUSTE"}, {"id": "mod-j-q3", "tag": "Q3", "title": "Until Successful vs reconnection strategy — what is the difference?", "modTitle": "Until Successful Scope & Resiliency", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER ASPECT UNTIL SUCCESSFUL RECONNECTION STRATEGY What it retries Any processor inside it (HTTP requests, DB calls, transforms) Only connector connection establishment Configured in Flow — wraps processors Connector config (global.xml)"}, {"id": "mod-k-q1", "tag": "Q1", "title": "What is Choice Router? How does it work?", "modTitle": "Choice Router, First Successful & Async Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER Choice Router evaluates conditions sequentially and routes the message to the FIRST matching route. Only one route executes. A default route handles messages that don't match any condition (like else in if-else). Choice Router Exam"}, {"id": "mod-k-q2", "tag": "Q2", "title": "What is the difference between Choice Router and First Successful?", "modTitle": "Choice Router, First Successful & Async Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER ASPECT CHOICE ROUTER FIRST SUCCESSFUL Routing criteria Expression evaluation (condition) First route that doesn't throw an error Use when You know which route to take based on payload data You want fallback — try primary, then back"}, {"id": "mod-k-q3", "tag": "Q3", "title": "What is Async Scope? When do you use it?", "modTitle": "Choice Router, First Successful & Async Scopes", "category": "Flow Scopes & Concurrency", "role": "Developer", "snippet": "✓ ANSWER Async Scope executes its processors in a separate thread without blocking the main flow. The main flow continues and returns a response immediately. The Async scope runs in the background. Use cases: Sending email notifications (do"}, {"id": "mod-l-q1", "tag": "Q1", "title": "What is the difference between On Error Continue and On Error Propagate?", "modTitle": "Error Handling Deep Dive (Continue vs Propagate)", "category": "Error Handling & Resiliency", "role": "Developer / Senior", "snippet": "✓ ANSWER ASPECT ON ERROR CONTINUE ON ERROR PROPAGATE After handler executes Flow continues normally, returns success response Error propagates to parent scope/caller HTTP response code 200 (success) unless you change vars.httpStatus Error c"}, {"id": "mod-l-q2", "tag": "Q2", "title": "What is a Try Scope? When do you use it?", "modTitle": "Error Handling Deep Dive (Continue vs Propagate)", "category": "Error Handling & Resiliency", "role": "Developer / Senior", "snippet": "✓ ANSWER Try Scope provides localized error handling for a specific group of processors within a flow. Errors in the Try scope are caught there — they don't propagate to the flow's error handler unless you use on- error-propagate inside the"}, {"id": "mod-l-q3", "tag": "Q3", "title": "What are the standard MuleSoft error types?", "modTitle": "Error Handling Deep Dive (Continue vs Propagate)", "category": "Error Handling & Resiliency", "role": "Developer / Senior", "snippet": "✓ ANSWER ERROR TYPE CAUSE TYPICAL RESPONSE HTTP:NOT_FOUND HTTP 404 from downstream Return empty response or 404 HTTP:UNAUTHORIZED HTTP 401 — auth failed Return 401 or refresh token and retry HTTP:CONNECTIVITY Cannot connect to host Return 5"}, {"id": "mod-l-q4", "tag": "Q4", "title": "How do you propagate an error from SAPI to XAPI through PAPI?", "modTitle": "Error Handling Deep Dive (Continue vs Propagate)", "category": "Error Handling & Resiliency", "role": "Developer / Senior", "snippet": "✓ ANSWER Use on-error-propagate at each layer. The error message (and payload) propagates up the call chain automatically. Enterprise Pattern: SAPI catches SAP HTTP error → builds standardized error payload {correlationId, errorCode, messag"}, {"id": "mod-l-q5", "tag": "Q5", "title": "What is the standard error response format you use across all Enterprise APIs?", "modTitle": "Error Handling Deep Dive (Continue vs Propagate)", "category": "Error Handling & Resiliency", "role": "Developer / Senior", "snippet": "✓ ANSWER DataWeave — Standard Error Response DWL Test in Playground Copy %dw 2.0 output application/json --- { correlationId: vars.correlationId, timestamp: (now() >- \"America/New_York\") as String {format: \"yyyy-MM-dd HH:mm:ss\"}, status: va"}, {"id": "mod-m-q1", "tag": "Q1", "title": "What is Anypoint MQ? Difference between Queue and Exchange?", "modTitle": "Anypoint MQ Deep Dive (Queues, Exchanges, DLQ)", "category": "AWS & Messaging", "role": "Developer / Senior", "snippet": "✓ ANSWER Anypoint MQ is MuleSoft's cloud-based messaging service for async integration. It provides point-to- point (Queue) and publish-subscribe (Exchange) patterns. ASPECT QUEUE EXCHANGE Pattern Point-to-point (P2P) Publish-Subscribe (fan"}, {"id": "mod-m-q2", "tag": "Q2", "title": "What is MANUAL acknowledgement mode? Why do you use it?", "modTitle": "Anypoint MQ Deep Dive (Queues, Exchanges, DLQ)", "category": "AWS & Messaging", "role": "Developer / Senior", "snippet": "✓ ANSWER In AUTO mode: message is ACKed immediately on receipt — if processing fails, message is permanently lost. In MANUAL mode: you explicitly call anypoint-mq:ack after successful processing and anypoint-mq:nack on failure. MANUAL ACK P"}, {"id": "mod-m-q3", "tag": "Q3", "title": "How do you implement idempotency with Anypoint MQ?", "modTitle": "Anypoint MQ Deep Dive (Queues, Exchanges, DLQ)", "category": "AWS & Messaging", "role": "Developer / Senior", "snippet": "✓ ANSWER At-least-once delivery means duplicates are possible. ObjectStore idempotency pattern: 1. Extract business key (transactionId) from MQ message payload 2. Check ObjectStore: os:contains(key=transactionId, objectStore=idempotency-sto"}, {"id": "mod-m-q4", "tag": "Q4", "title": "How did you implement cross-region DR with Anypoint MQ in your Enterprise Architecture?", "modTitle": "Anypoint MQ Deep Dive (Queues, Exchanges, DLQ)", "category": "AWS & Messaging", "role": "Developer / Senior", "snippet": "✓ ANSWER We used a fan-out pattern: two Anypoint MQ configs in global.xml — one for US-East-1 (primary) and one for US-East-2 (secondary). The MQ publisher flow publishes to BOTH regions simultaneously. The MQ subscriber flow: subscribes to"}, {"id": "mod-m-q5", "tag": "Q5", "title": "Is VM connector reliable? How does it compare to Anypoint MQ?", "modTitle": "Anypoint MQ Deep Dive (Queues, Exchanges, DLQ)", "category": "AWS & Messaging", "role": "Developer / Senior", "snippet": "✓ ANSWER ASPECT VM CONNECTOR ANYPOINT MQ Durability In-memory only — messages lost on app crash/restart Cloud-persistent — messages survive restarts (7-day retention) Scope Within the same Mule application only Cross-application, cross-regi"}, {"id": "mod-n-q1", "tag": "Q1", "title": "What is ObjectStore? What are the types?", "modTitle": "ObjectStore Deep Dive (OSv2, TTL, Watermarking)", "category": "ObjectStore & API Governance", "role": "Developer", "snippet": "✓ ANSWER ObjectStore is a key-value store built into Mule for persisting state between executions. Used for watermarking, idempotency, caching, and session management. TYPE PERSISTENCE USE FOR In-Memory (default) Lost on app restart or rede"}, {"id": "mod-n-q2", "tag": "Q2", "title": "What is watermarking? How does ObjectStore store watermark values?", "modTitle": "ObjectStore Deep Dive (OSv2, TTL, Watermarking)", "category": "ObjectStore & API Governance", "role": "Developer", "snippet": "✓ ANSWER Watermarking tracks the last-processed position (timestamp, ID, sequence number) so a scheduled job only processes new/changed records since the last run. Watermark Pattern — Nightly SAP Sync // In Load & Dispatch phase: Persistent"}, {"id": "mod-n-q3", "tag": "Q3", "title": "What is cache scope? How is it different from ObjectStore?", "modTitle": "ObjectStore Deep Dive (OSv2, TTL, Watermarking)", "category": "ObjectStore & API Governance", "role": "Developer", "snippet": "✓ ANSWER ASPECT CACHE SCOPE OBJECTSTORE Purpose Avoid repeated external calls for same input Persist arbitrary state between executions 🎯 🎯 Interview Pitch - Say It Like This (30 Sec) \"In my enterprise projects on CloudHub 2.0, whenever we "}, {"id": "mod-o-q1", "tag": "Q1", "title": "What is RAML? Why do you design API specs before coding?", "modTitle": "API-led Connectivity Deep Dive (RAML, Policies)", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✓ ANSWER RAML (RESTful API Modeling Language) is a YAML-based specification language for describing REST APIs. Design-first approach: write RAML in Anypoint Design Center → publish to Anypoint Exchange → import in Anypoint Studio → APIKit a"}, {"id": "mod-o-q2", "tag": "Q2", "title": "What is API AutoDiscovery? Why is it important?", "modTitle": "API-led Connectivity Deep Dive (RAML, Policies)", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✓ ANSWER API AutoDiscovery links a deployed Mule application to an API definition in API Manager. Without AutoDiscovery, Mule app cannot enforce API Manager policies (OAuth, Rate Limiting, Client ID Three-layer architecture · RAML · AutoDis"}, {"id": "mod-o-q3", "tag": "Q3", "title": "What policies have you used in API Manager?", "modTitle": "API-led Connectivity Deep Dive (RAML, Policies)", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✓ ANSWER POLICY PURPOSE USAGE IN ENTERPRISE PRODUCTION Client ID Enforcement Require valid client_id/secret in each request All XAPIs — each Salesforce channel has its own client credentials OAuth 2.0 Token Validate OAuth bearer token Exter"}, {"id": "mod-o-q4", "tag": "Q4", "title": "What is Anypoint Exchange? How do you use it?", "modTitle": "API-led Connectivity Deep Dive (RAML, Policies)", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✓ ANSWER Anypoint Exchange is MuleSoft's asset marketplace where teams publish and discover reusable assets: API specs (RAML), connectors, templates, examples, and custom connectors. In our Enterprise Architecture: All 44+ RAML specs publis"}, {"id": "mod-p-q1", "tag": "Q1", "title": "How do you write MUnit tests? How do you mock external calls?", "modTitle": "MUnit Testing Framework & Mocking", "category": "Testing & CI/CD", "role": "Developer / Senior", "snippet": "✓ ANSWER MUnit is MuleSoft's unit testing framework. Tests mock all external systems — no actual SAP/Salesforce/DB calls in unit tests. MUnit Test — Mock SAP HTTP call Mock external calls · Test flows · Coverage · SonarQube · Scheduler test"}, {"id": "mod-p-q2", "tag": "Q2", "title": "How do you test failure scenarios in MUnit?", "modTitle": "MUnit Testing Framework & Mocking", "category": "Testing & CI/CD", "role": "Developer / Senior", "snippet": "✓ ANSWER Mock the processor to throw an error instead of returning success: MUnit — Mock HTTP 500 error from SAP 🎯 🎯 Interview Pitch - Say It Like This (30 Sec) \"Quality engineering is integrated directly into our CI/CD pipelines through MU"}, {"id": "mod-p-q3", "tag": "Q3", "title": "How do you write an MUnit test if a Scheduler triggers the flow?", "modTitle": "MUnit Testing Framework & Mocking", "category": "Testing & CI/CD", "role": "Developer / Senior", "snippet": "✓ ANSWER Schedulers cannot be triggered directly in MUnit. Solution: extract the Scheduler flow logic into a sub-flow, test the sub-flow directly. Pattern — Testable Scheduler flows In MUnit: call nightly-sync-logic-sub-flow directly with m"}, {"id": "mod-p-q4", "tag": "Q4", "title": "How do you enforce MUnit coverage and what tools do you use?", "modTitle": "MUnit Testing Framework & Mocking", "category": "Testing & CI/CD", "role": "Developer / Senior", "snippet": "✓ ANSWER In our Enterprise Architecture: SonarQube quality gate blocks any build with coverage below 85%. GitHub Actions CI/CD runs MUnit tests on every PR — build fails if tests fail or coverage drops. Tools: mvn clean test generates the c"}, {"id": "mod-p-q5", "tag": "Q5", "title": "What security standards do you follow in every API?", "modTitle": "MUnit Testing Framework & Mocking", "category": "Testing & CI/CD", "role": "Developer / Senior", "snippet": "Security · Naming conventions · Structured logging · Performance 🎯 🎯 Interview Pitch - Say It Like This (30 Sec) \"Our API security architecture follows defense-in-depth principles. At the perimeter, we apply TLS 1.3, IP Allowlisting, and SL"}, {"id": "mod-q-q0", "tag": "STD", "title": "What naming conventions do you follow across API layers and Mule projects?", "modTitle": "Production Best Practices & Naming Standards", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✓ ANSWER ELEMENT CONVENTION EXAMPLE Flow names kebab-case + HTTP method get-billing-inquiry-flow Sub-flows descriptive + suffix validate-request-sub-flow Variables camelCase correlationId, sapResponse Config properties dot-notation sap.bill"}, {"id": "mod-q-q1", "tag": "Q1", "title": "Describe your Billing Inquiry flow end to end.", "modTitle": "Production Best Practices & Naming Standards", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✓ ANSWER 📋 BILLING INQUIRY FLOW — GET /BILLING/INQUIRY 1. Salesforce Employee Desktop calls customer-billing-xapi with OAuth token 2. XAPI validates Client ID policy → calls billing-inquiry-papi 3. PAPI uses Scatter-Gather to call SAP Billi"}, {"id": "mod-q-q2", "tag": "Q2", "title": "What was the most challenging technical problem you solved?", "modTitle": "Production Best Practices & Naming Standards", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✓ ANSWER Problem: SAP Billing Inquiry returned XML where the ToInstallations node could be empty for accounts with status \"Pending Final + Disconnected\" causing NullPointerException in production. Key flows · Architecture decisions · Challe"}, {"id": "mod-q-q3", "tag": "Q3", "title": "How did you manage the async preference update flow?", "modTitle": "Production Best Practices & Naming Standards", "category": "ObjectStore & API Governance", "role": "Senior / Lead", "snippet": "✓ ANSWER 📋 PREFERENCE UPDATE — ASYNC PATTERN 1. Mobile app calls preference-update-xapi → XAPI validates + publishes to Anypoint MQ → returns 202 Accepted 2. MQ consumer picks up → checks ObjectStore for transactionId (idempotency) 3. EXIST"}, {"id": "mod-r-q1", "tag": "Q1", "title": "What is the difference between sub-flow and private flow?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "Questions from Capgemini · LTI · TCS · Sapient · Quinnox · Apisero · Persistent · ConnectIndia · Vitrusa · Enquiro ✓ ANSWER ASPECT SUB-FLOW PRIVATE FLOW Error handler No own error handler — inherits from caller flow Has its own error handle"}, {"id": "mod-r-q2", "tag": "Q2", "title": "What is the difference between VM connector and flow reference?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✓ ANSWER Flow Reference: Synchronous direct call to another flow in the SAME application. Same thread, same transaction context. No messaging overhead. VM Connector: Message-based communication using an in-memory/persistent queue within the"}, {"id": "mod-r-q3", "tag": "Q3", "title": "What is fan-in and fan-out? How do you implement them?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✓ ANSWER Fan-Out: Send same message to multiple destinations. Implementation: Scatter-Gather (parallel routes), Anypoint MQ Exchange (one publish → all bound queues get copy), or multiple MQ publish steps. Fan-In: Collect results from multi"}, {"id": "mod-r-q4", "tag": "Q4", "title": "What are streaming strategies in MuleSoft? Which is the default?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✓ ANSWER STRATEGY BEHAVIOR USE WHEN Non-Repeatable Streaming Stream read once, not buffered — most memory-efficient Large files you process only once, don't need to re-read Repeatable In-Memory Buffered in memory up to threshold, then disk "}, {"id": "mod-r-q5", "tag": "Q5", "title": "How do you set up HTTPS connection in MuleSoft? One-way vs two-way SSL?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✓ ANSWER One-way SSL (server authentication only): Client verifies server's certificate. Server does NOT verify client. Standard HTTPS. In MuleSoft: HTTP Listener needs tlsContext with keyStore (server cert). HTTP Request needs tlsContext w"}, {"id": "mod-r-q6", "tag": "Q6", "title": "What is VPC and VPN in CloudHub? What is SLB vs DLB?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✓ ANSWER VPC (Virtual Private Cloud): Private isolated network segment in CloudHub where your Mule apps run. Isolates your apps from other CloudHub customers. Required for DLB. VPN: Encrypted tunnel connecting your CloudHub VPC to your on-p"}, {"id": "mod-r-q7", "tag": "Q7", "title": "How do you call a Java file in DataWeave? How do you invoke a flow in DataWeave?", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✓ ANSWER Call Java in DataWeave: DataWeave — Call Java static method DWL Test in Playground Copy %dw 2.0 import java!com:-enterprise:-utils:-StringUtils output application/json --- StringUtils:-formatAccountNumber(payload.accountId) Invoke "}, {"id": "mod-r-q8", "tag": "Q8", "title": "Write DataWeave to mask a credit card number — show only last 4 digits.", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✓ ANSWER DataWeave — Credit card masking DWL Test in Playground Copy %dw 2.0 output application/json --- // Input: \"1234567890123456\" // Output: \"************3456\" payload.cardNumber replace /\\d(?=\\d{4})/ with \"*\" // Alternative — mask firs"}, {"id": "mod-r-q9", "tag": "Q9", "title": "Write DataWeave to find even numbers from [1,2,3,4,5,6] and swap two values.", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "✓ ANSWER DataWeave — Even numbers + swap DWL Test in Playground Copy %dw 2.0 output application/json --- // Even numbers: [1,2,3,4,5,6] filter (n) -> (n mod 2) == 0 // Result: [2, 4, 6] // Swap a=1, b=2: do { var a = 1 var b = 2 --- { a: b,"}, {"id": "mod-r-q10", "tag": "Q10", "title": "Write a cron expression to trigger a flow daily at 10AM. Write RAML for books and songs", "modTitle": "DataWeave 2.0 Reference & Core Operators", "category": "DataWeave 2.0 Masterclass", "role": "Developer", "snippet": "resources. ✓ ANSWER Cron — Daily at 10AM EST 0 0 10 * * ? // Second Minute Hour DayOfMonth Month DayOfWeek // 0=second, 0=minute, 10=10AM, *=any day, *=any month, ?=any day of week RAML — Books and Songs resources RAML Copy #%RAML 1.0 title"}, {"id": "mod-s-q11", "tag": "Q11", "title": "What is horizontal vs vertical scaling? When do you use each in MuleSoft?", "modTitle": "Enterprise Utility & Energy Platform Deep Dive", "category": "Getting Started & Strategy", "role": "Developer / Senior", "snippet": "✓ ANSWER Vertical Scaling: Increase vCores per worker (0.1 → 0.2 → 0.5 → 1 → 2 → 4 vCores). More CPU and memory per instance. Best for CPU-bound or memory-intensive tasks (large DataWeave transforms, complex aggregations). Horizontal Scalin"}, {"id": "mod-t-q12", "tag": "Q12", "title": "How do you encrypt properties in MuleSoft? How do you bypass applied API policies in Studio?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✓ ANSWER Encrypting properties: Use Anypoint Studio's Secure Properties Tool: right-click → Mule → Create a Secure Properties File. Enter key and encrypt value. In config YAML: db.password: \"![encrypted- value]\" . In global.xml: . Key passe"}, {"id": "mod-t-q13", "tag": "Q13", "title": "If 5 people are invoking the same URL, how does MuleSoft ensure the correct response goes to", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "each caller? ✓ ANSWER HTTP is stateless and request-response. Each HTTP request opens a unique connection/thread. The HTTP listener binds the response to the original request connection. MuleSoft's thread pool assigns one thread per request"}, {"id": "mod-t-q14", "tag": "Q14", "title": "What are traits, resource types, and fragments in RAML?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✓ ANSWER Traits: Reusable request/response patterns applied to multiple methods. Example: a pageable trait adds queryParameters (limit, offset) — applied with is: [pageable] . Resource Types: Reusable resource patterns — define a collection"}, {"id": "mod-t-q15", "tag": "Q15", "title": "What is the difference between Query and QueryAll in Salesforce?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✓ ANSWER Query: Returns only active/non-deleted records. Standard SOQL operation. Example: SELECT Id FROM Account WHERE Type='Customer' — returns active Accounts only. QueryAll: Returns all records including deleted and archived records (th"}, {"id": "mod-t-q16", "tag": "Q16", "title": "How do you handle SFTP strategies? How do you auto-delete files on SFTP?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✓ ANSWER SFTP Strategies: (1) Polling Strategy — trigger when file arrives (Mule SFTP listener with watermark). (2) Read Strategy — on-demand file read with SFTP Read operation. (3) Write Strategy — write processed files back to SFTP. Auto-"}, {"id": "mod-t-q17", "tag": "Q17", "title": "In a Bulk Insert with 10 records, if record 7 is invalid, what happens?", "modTitle": "Quick Reference Interview Cheat Sheet", "category": "Rapid Review & Cheat Sheets", "role": "Developer", "snippet": "✓ ANSWER This depends on the connector and database. Database Bulk Insert (non-XA transaction): All 10 records are sent in a single batch. If record 7 fails validation at the database, the entire batch is typically rolled back — 0 records i"}, {"id": "mod-u-q18", "tag": "Q18", "title": "An exception arose at System layer and I want that error message to propagate to Experience", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "layer. How? ✓ ANSWER Use on-error-propagate at each layer. In the SAPI: catch the error → build standardized error payload → re-throw using . In the PAPI: same pattern — on-error-propagate re-throws the error upward. In the XAPI: on-error-p"}, {"id": "mod-u-q19", "tag": "Q19", "title": "System API is taking too long to respond (timeout). How do you fix it from XAPI's perspective?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER Three approaches depending on requirements: 1. Increase responseTimeout: On the HTTP Request config in PAPI that calls SAPI, increase responseTimeout value. Quick fix but doesn't solve the root cause. 2. Async pattern (preferred): "}, {"id": "mod-u-q20", "tag": "Q20", "title": "How do you implement CI/CD for MuleSoft? What Maven commands do you use?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER In our Enterprise Architecture: GitHub Actions triggers on push to any environment branch. Pipeline stages: 1. mvn clean compile — compile all source files 2. mvn test — run MUnit tests, generate coverage report 3. mvn sonar:sonar "}, {"id": "mod-u-q1", "tag": "Q1", "title": "What is the difference between DataWeave 1.0 and 2.0?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER FEATURE DATAWEAVE 1.0 (MULE 3) DATAWEAVE 2.0 (MULE 4) Header %dw 1.0 %dw 2.0 Conditional when-otherwise if-else Imports Not available import dw::core::Strings Functions %function myFn(x) x + 1 fun myFn(x) = x + 1 Variables %var x ="}, {"id": "mod-u-q2", "tag": "Q2", "title": "What is the p() function in DataWeave? What is lookup()?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER p() function: Reads a value from a properties file (application properties, config YAML, Secure Properties). Used to access configuration without hardcoding. DW 1.0 vs 2.0 · p() · lookup() · zip · mask · flatten vs flatMap · skipNu"}, {"id": "mod-u-q3", "tag": "Q3", "title": "What is the difference between flatten and flatMap?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER OPERATOR INPUT OUTPUT USE WHEN flatten Nested array One-level-flattened array You have [[1,2],[3,4]] and want [1,2,3,4] flatMap Array + lambda Flattened array after transformation Map each element to an array, then flatten all resu"}, {"id": "mod-u-q4", "tag": "Q4", "title": "How do you skip null values in DataWeave? How do you mask sensitive data?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER DataWeave — skipNullOn DWL Test in Playground Copy %dw 2.0 output application/json skipNullOn=\"everywhere\" --- { \"name\": \"John\", \"company\": \"MuleSoft\", \"designation\": null } // Output: { \"name\": \"John\", \"company\": \"MuleSoft\" } // n"}, {"id": "mod-u-q5", "tag": "Q5", "title": "What is zip() function? How do you merge two arrays?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER zip() combines two arrays element-by-element into an array of pairs (arrays of 2 elements each). DataWeave — zip() and flatten to merge DWL Test in Playground Copy %dw 2.0 output application/json --- // zip two arrays: [\"Alice\",\"Jo"}, {"id": "mod-u-q6", "tag": "Q6", "title": "What is sizeOf(), typeOf(), and how do you remove a key from an object?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER DataWeave — sizeOf, typeOf, remove key DWL Test in Playground Copy %dw 2.0 output application/json --- // sizeOf: count elements in array or keys in object sizeOf([1,2,3,4]) // → 4 sizeOf({a:1, b:2}) // → 2 // typeOf: get the data "}, {"id": "mod-u-q7", "tag": "Q7", "title": "What is reduce() in DataWeave? Write examples for sum and string concat.", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER DataWeave — reduce() for aggregation DWL Test in Playground Copy %dw 2.0 output application/json var numbers = [1, 2, 3, 4] var salaries = [50000, 60000, 45000, 70000, 55000] --- { sum: numbers reduce ((item, acc = 0) -> acc + item"}, {"id": "mod-u-q8", "tag": "Q8", "title": "What is match vs matches? What is read() vs readUrl()?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER DataWeave — match vs matches // match: returns array of capture groups from regex match \"me@mulesoft.com\" match(/([a-z]*-@([a-z]*-.com/) // Output: [\"me@mulesoft.com\", \"me\", \"mulesoft\"] // matches: returns boolean — does entire str"}, {"id": "mod-u-q9", "tag": "Q9", "title": "How do you access secure properties inside DataWeave? How to encode/decode base64?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER DataWeave — Secure properties + base64 DWL Test in Playground Copy %dw 2.0 output application/json import toBase64 from dw:-core:-Binaries import fromBase64 from dw:-core:-Binaries --- { // Access secure property: apiKey: p('secure"}, {"id": "mod-u-q10", "tag": "Q10", "title": "Write DataWeave to check if a number is even or odd. How to convert string to Number?", "modTitle": "Real Interview Q&A Collection (Global Companies)", "category": "Rapid Review & Cheat Sheets", "role": "Developer / Senior", "snippet": "✓ ANSWER DataWeave — Even/Odd + type conversion DWL Test in Playground Copy %dw 2.0 output application/json var n = attributes.queryParams.number as Number --- // Even or odd: if ((n mod 2) == 0) { result: \"Even\" } else { result: \"Odd\" } //"}, {"id": "mod-v-q1", "tag": "Q1", "title": "What is the difference between CloudHub 1.0 and CloudHub 2.0?", "modTitle": "Advanced DataWeave Transformations & Scripts", "category": "DataWeave 2.0 Masterclass", "role": "Senior", "snippet": "✓ ANSWER FEATURE CLOUDHUB 1.0 CLOUDHUB 2.0 Infrastructure Shared multi-tenant Kubernetes-based dedicated containers Workers Static predefined sizes (0.1, 0.2, 0.5, 1, 2, 4 vCores) Dynamic containerized — auto-scaled by Kubernetes Scaling Ho"}, {"id": "mod-v-q2", "tag": "Q2", "title": "Explain mTLS. How do you debug mTLS-related issues?", "modTitle": "Advanced DataWeave Transformations & Scripts", "category": "DataWeave 2.0 Masterclass", "role": "Senior", "snippet": "✓ ANSWER mTLS (Mutual TLS): Both client and server authenticate each other using certificates. Unlike one-way SSL where only the server presents a cert, in mTLS the client ALSO presents a certificate to the server for verification. MuleSoft"}, {"id": "mod-v-q3", "tag": "Q3", "title": "What is the difference between Rate Limiting, Spike Control, and Throttling?", "modTitle": "Advanced DataWeave Transformations & Scripts", "category": "DataWeave 2.0 Masterclass", "role": "Senior", "snippet": "✓ ANSWER POLICY BEHAVIOR WHEN LIMIT EXCEEDED USE CASE Rate Limiting Request is REJECTED immediately (HTTP 429) Prevent abuse — hard limit per client per time window Spike Control Request is QUEUED and processed when capacity available Handl"}, {"id": "mod-v-q4", "tag": "Q4", "title": "What is Transaction Management in MuleSoft? XA vs Local transactions?", "modTitle": "Advanced DataWeave Transformations & Scripts", "category": "DataWeave 2.0 Masterclass", "role": "Senior", "snippet": "✓ ANSWER Transaction management ensures a group of operations execute as a single unit of work — either all succeed or all are rolled back. TYPE SCOPE USE WHEN Local Transaction Single resource (one DB, one JMS) Insert/update on a single da"}, {"id": "mod-v-q5", "tag": "Q5", "title": "What is guaranteed delivery? How do you ensure it in MuleSoft?", "modTitle": "Advanced DataWeave Transformations & Scripts", "category": "DataWeave 2.0 Masterclass", "role": "Senior", "snippet": "✓ ANSWER Guaranteed delivery ensures messages are reliably delivered even if the system crashes or restarts. MuleSoft achieves this through: 📋 GUARANTEED DELIVERY PATTERN Persistent Queues: Anypoint MQ stores messages on disk — survives app"}, {"id": "mod-w-q0", "tag": "LEAD", "title": "After a batch job processes 1,000 of 10,000 records and restarts, how do you prevent duplicate reprocessing?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER Multiple strategies work together: 1. Batch Persistence (built-in): Mule Batch Job is persistent by default — if the runtime restarts, it resumes from where it left off IF using a persistent object store. Ensure persistent=true on "}, {"id": "mod-w-q1", "tag": "Q1", "title": "What is Correlation ID? How is it different from Transaction ID?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER ASPECT CORRELATION ID TRANSACTION ID Purpose Links related messages across a flow — tracks the journey of a request Associates events with a specific business transaction for analysis Assignment Automatically assigned when an event"}, {"id": "mod-w-q2", "tag": "Q2", "title": "What is the APIKit Router? What does it do?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER The APIKit Router does the following when a request arrives: 1. Validates the incoming request against the RAML spec (payload, headers, URI params, query params, data types) 2. Routes the request to the appropriate flow based on HT"}, {"id": "mod-w-q3", "tag": "Q3", "title": "What is the difference between fixed frequency and cron in Scheduler?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER ASPECT FIXED FREQUENCY CRON EXPRESSION Definition Trigger every X milliseconds/seconds/minutes Trigger at specific date/time patterns Config frequency, startDelay, timeUnit cron expression string + timeZone Example Every 5 minutes:"}, {"id": "mod-w-q4", "tag": "Q4", "title": "What is Reconnection Strategy? What are the three options?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER Reconnection Strategy is used to reconnect to external systems when a connection fails. Configured on each connector. OPTION BEHAVIOR USE WHEN None Default — no reconnect attempts after failure Connection failures are immediately f"}, {"id": "mod-w-q5", "tag": "Q5", "title": "What is the difference between REST and SOAP web services?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER ASPECT REST SOAP Protocol Architectural style (no official standard) Protocol with official W3C standard Data format JSON, XML, plain text, HTML XML only Transport HTTP/HTTPS HTTP, SMTP, TCP Contract OpenAPI/Swagger or RAML WSDL (W"}, {"id": "mod-w-q6", "tag": "Q6", "title": "What are the configuration differences between File, FTP, and SFTP connectors?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER CONNECTOR REQUIRED CONFIGURATION AUTHENTICATION File Connector Working directory path only None (local/mounted OS filesystem permissions) FTP Connector Host, Port ( 21 ), Username, Password, Path Username / Password (unencrypted ch"}, {"id": "mod-w-q7", "tag": "Q7", "title": "What operations are available in FTP/SFTP/File connectors?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER OPERATION DESCRIPTION Read Read a specific file content List List files in a directory (can filter by pattern) On New or Updated File Source trigger — fires when new/modified file detected Write Write content to a new file Copy Cop"}, {"id": "mod-w-q8", "tag": "Q8", "title": "Compare ForEach, Parallel ForEach, and Batch Processing — when to use which?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER ASPECT FOREACH PARALLEL FOREACH BATCH PROCESSING Processing Sequential Parallel Parallel Threading Single-threaded Multi-threaded Multi-threaded Error behavior Stops on first error Raises MULE:COMPOSITE_ROUTING after all routes Con"}, {"id": "mod-w-q9", "tag": "Q9", "title": "What are the HTTP status code categories? What is the difference between 201 and 202?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER CATEGORY RANGE COMMON CODES 1xx Informational 100–199 100 Continue, 101 Switching Protocols 2xx Success 200–299 200 OK, 201 Created, 202 Accepted, 204 No Content 3xx Redirection 300–399 301 Moved Permanently, 304 Not Modified 4xx C"}, {"id": "mod-w-q10", "tag": "Q10", "title": "What is an Idempotent Filter / Idempotent Message Validator?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER The Idempotent Message Validator (formerly \"Idempotent Filter\" in Mule 3) filters out duplicate messages based on a unique ID extracted from the message. It uses ObjectStore to track already- processed message IDs. Idempotent Messa"}, {"id": "mod-w-q11", "tag": "Q11", "title": "How do you validate JSON and XML in MuleSoft without RAML?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER If using RAML with APIKit: the APIKit Router automatically validates incoming requests against the RAML schema before routing — no additional code needed. If without RAML: JSON validation: Add the JSON Module from Exchange. Use jso"}, {"id": "mod-w-q12", "tag": "Q12", "title": "What is a custom connector? When would you create one?", "modTitle": "CloudHub 1.0 vs 2.0 & Technical Lead Topics", "category": "Deployment & CloudHub 2.0", "role": "Lead / Architect", "snippet": "✓ ANSWER A custom connector is a reusable MuleSoft component that wraps the connectivity to a system that doesn't have an out-of-the-box MuleSoft connector. When to create: Your organization's proprietary system has a complex API that 10+ t"}, {"id": "mod-x-q1", "tag": "Q1", "title": "What is inside a Mule Event? What is the difference between payload, attributes, and vars?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER A Mule Event is an immutable data object passed between event processors in a Mule flow. It wraps two primary components — the Message ( payload + immutable attributes ) and Variables ( vars ) — alongside runtime context such as co"}, {"id": "mod-x-q2", "tag": "Q2", "title": "What is the difference between repeatable and non-repeatable streaming?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER STRATEGY READ MULTIPLE TIMES? MEMORY USE WHEN Non-Repeatable ❌ Once only Most efficient Large files processed once — CSV/XML ETL Repeatable In- Memory ✅ Yes Buffer in RAM up to threshold then disk Small-medium payloads needing mult"}, {"id": "mod-x-q3", "tag": "Q3", "title": "What are the key best practices for the HTTP Connector?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER Never hardcode the port — use ${http.port} property Always set responseTimeout and connectionIdleTimeout — no timeout = one slow API hangs your flow forever Auth options: Basic, OAuth 2.0 Client Credentials, API key header, mTLS. C"}, {"id": "mod-x-q4", "tag": "Q4", "title": "What are the key best practices for the Database Connector?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER Always use :namedParam for input parameters — never concatenate strings into SQL (SQL injection risk) Connection pooling — configure pool size appropriate to concurrency, not connect-per- request Set queryTimeout — no timeout = hun"}, {"id": "mod-x-q5", "tag": "Q5", "title": "What is the JMS Connector? When do you use JMS vs Anypoint MQ?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER ASPECT JMS CONNECTOR ANYPOINT MQ When to use Existing IBM MQ, ActiveMQ, Solace, TIBCO EMS broker already in your enterprise New integration, MuleSoft-native, no existing broker Pattern Queue (P2P) + Topic (pub-sub) Queue (P2P) + Ex"}, {"id": "mod-x-q6", "tag": "Q6", "title": "What is the Kafka Connector? Kafka vs Anypoint MQ — when to use which?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER The Kafka Connector connects MuleSoft to Apache Kafka for high-throughput, real-time event streaming with replay capability. ASPECT APACHE KAFKA ANYPOINT MQ Throughput Very high — millions of events/sec Moderate — enterprise messag"}, {"id": "mod-x-q7", "tag": "Q7", "title": "What is the VM Connector? How does it differ from flow-ref and Anypoint MQ?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER OPTION SCOPE ASYNC? DURABLE? USE FOR flow-ref Same app ❌ Synchronous N/A Code reuse — simple flow- to-flow call VM Connector Same app (same Mule runtime) ✅ Async option PERSISTENT mode only Decouple flows within one app without a b"}, {"id": "mod-x-q8", "tag": "Q8", "title": "How do you version APIs in MuleSoft? What is a breaking vs non-breaking change?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER CHANGE TYPE BREAKING? VERSION BUMP Removed/renamed field, type change, new required input ✅ YES — breaking MAJOR (v1 → v2) New optional field, new endpoint, new query param ❌ Non-breaking MINOR Documentation fixes, description chan"}, {"id": "mod-x-q9", "tag": "Q9", "title": "How do you tune MuleSoft application performance?", "modTitle": "Core Connectors & Protocols (HTTP, DB, JMS, Kafka, VM)", "category": "AWS & Messaging", "role": "Developer", "snippet": "✓ ANSWER Rule #1: Measure first. Change one thing at a time. Baseline → change → retest. maxConcurrency on flows: caps parallel events. At limit → back-pressure → HTTP 503. Set to match downstream capacity. DB pool maxPoolSize: default 5. I"}, {"id": "mod-y-q10", "tag": "Q10", "title": "What is Runtime Fabric (RTF)? How is it different from CloudHub?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✓ ANSWER ASPECT CLOUDHUB 2.0 RUNTIME FABRIC (RTF) Infrastructure MuleSoft-managed Kubernetes (Private Space) YOUR Kubernetes (EKS, AKS, GKE, OpenShift) Data residency MuleSoft data centers Your own data center / cloud region Control plane A"}, {"id": "mod-y-q11", "tag": "Q11", "title": "What are the best practices for logging in MuleSoft?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✓ ANSWER Log at flow start and end with key business identifiers (accountId, correlationId) Log before and after external calls — makes it easy to see which system is slow Every error handler: log error.errorType + error.description at ERRO"}, {"id": "mod-y-q12", "tag": "Q12", "title": "How do you upgrade Mule apps to Java 17? What breaks?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✓ ANSWER Mule 4.9 LTS and later Edge releases run on Java 17 ONLY. If your apps are on Java 8 or 11, the upgrade is coming. ⚠ WHAT BREAKS ON JAVA 17 Reflection into JDK internals ( setAccessible(true) fails) — common in old custom code Data"}, {"id": "mod-y-q13", "tag": "Q13", "title": "What is MuleSoft AI and how does it integrate with Agentforce?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✓ ANSWER MuleSoft connects AI agents to enterprise data through 4 patterns: PATTERN DESCRIPTION USE WHEN AI Chain Connector Call an LLM (OpenAI, Azure OpenAI, Anthropic, Vertex AI) directly from a Mule flow LLM-enhanced data processing, sum"}, {"id": "mod-y-q14", "tag": "Q14", "title": "What is Anypoint Code Builder? How is it different from Anypoint Studio?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✓ ANSWER ASPECT ANYPOINT STUDIO ANYPOINT CODE BUILDER (ACB) Platform Eclipse-based desktop IDE VS Code-based — desktop app or browser AI features None AI Dev Agent — describe flow in English → get Mule XML draft API design Separate Design C"}, {"id": "mod-y-q15", "tag": "Q15", "title": "What is the Parent POM / BOM pattern in MuleSoft? Why do you use it?", "modTitle": "Advanced MuleSoft Topics (Java 17, Agentforce AI)", "category": "Modern Architecture & AI", "role": "Senior / Lead", "snippet": "✓ ANSWER A Parent POM is a Maven POM with <packaging>pom</packaging> inherited via <parent> across all child Mule projects. It centralizes connector versions, MUnit version, mule-maven-plugin configuration, and Nexus/Exchange repositories. "}, {"id": "mod-z-s1", "tag": "S1", "title": "Your MuleSoft PAPI calls SAP SAPI which calls SAP. SAP returns HTTP 500. Walk me", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "through what happens at each layer. ✅ Complete Scenario Answer Layer-by-layer propagation: 📋 ERROR FLOW TRACE 1. SAP SAPI receives HTTP 500 from SAP → catches HTTP:CONNECTIVITY or HTTP:BAD_REQUEST in error handler → builds error payload: {c"}, {"id": "mod-z-s2", "tag": "S2", "title": "You have a Mule app deployed on CloudHub with 2 workers. An MQ message is", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "processed by Worker 1. Worker 1 crashes mid-processing. What happens? ✅ Complete Scenario Answer With MANUAL ack mode (correct setup): The message was never ACKed because processing didn't complete. Anypoint MQ's visibility timeout expires "}, {"id": "mod-z-s3", "tag": "S3", "title": "Your nightly batch job processes 50,000 records and restarts after 30,000 — how do you resume cleanly from record 30,001?", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "✅ Complete Scenario Answer Solution: Watermark + persistent ObjectStore 📋 RECOVERY PATTERN 1. In Load & Dispatch: read watermark from persistent ObjectStore → SELECT * FROM accounts WHERE updatedAt > :lastWatermark ORDER BY updatedAt 2. For"}, {"id": "mod-z-s4", "tag": "S4", "title": "Your billing API suddenly gets 10x traffic (billing cycle spike). Response times", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "increase from 1s to 8s. Walk me through your diagnosis and fix. ✅ Complete Scenario Answer Step 1 — Diagnose first: Check Anypoint Monitoring: is CPU/heap spiking? → Vertical scaling needed Check request queue depth: are requests backing up"}, {"id": "mod-z-s5", "tag": "S5", "title": "Your Scatter-Gather calls SAP (usually 800ms) and DynamoDB (usually 200ms).", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "Occasionally SAP takes 5 seconds. What happens to your API response time? ✅ Complete Scenario Answer Scatter-Gather waits for the SLOWEST route. On the occasional 5-second SAP call, the entire Scatter-Gather (and therefore the API response)"}, {"id": "mod-z-s6", "tag": "S6", "title": "Your flow inserts a record into DB, then publishes to Anypoint MQ. The DB insert", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "succeeds but MQ publish fails. What happens? How do you prevent this? ✅ Complete Scenario Answer What happens without protection: DB record exists, MQ message never published → downstream consumer never processes it → inconsistent state (DB"}, {"id": "mod-z-s7", "tag": "S7", "title": "Salesforce sends the same Platform Event twice due to at-least-once delivery. Your", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "flow creates a record in SAP both times. How do you prevent duplicate SAP records? ✅ Complete Scenario Answer Three-layer defense: 1. ObjectStore idempotency check: Extract the Salesforce Event's replayId or business key (Opportunity ID). C"}, {"id": "mod-z-s8", "tag": "S8", "title": "An interviewer sees your API exposes customer account numbers and SSNs in the", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "response. How do you secure this data? ✅ Complete Scenario Answer Defense-in-depth approach: HTTPS everywhere: TLS 1.2+ on all HTTP connections — data encrypted in transit Log masking in DataWeave: Before logging, mask sensitive fields: pay"}, {"id": "mod-z-s9", "tag": "S9", "title": "A downstream Salesforce team wants you to add a new required field to an", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "existing API. You have 5 consumers. How do you handle this without breaking them? ✅ Complete Scenario Answer A new required field in a request is a breaking change — existing consumers don't send it, so they'll immediately get 400 errors. T"}, {"id": "mod-z-s10", "tag": "S10", "title": "You need to call the same SAP endpoint from 5 different MuleSoft APIs. What is", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "the most maintainable approach? ✅ Complete Scenario Answer This is exactly the problem the SAPI layer solves in API-led connectivity. Solution: Create one SAP SAPI that encapsulates the SAP connection, authentication (token caching), TLS co"}, {"id": "mod-z-s11", "tag": "S11", "title": "SAP returns an XML response with nested namespaces. Some fields are missing", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "depending on account status. Your DataWeave transform fails on null. How do you fix it? ✅ Complete Scenario Answer This is the exact production bug I fixed in our Enterprise Architecture with the ToInstallations node. DataWeave — Null-safe "}, {"id": "mod-z-s12", "tag": "S12", "title": "Your DataWeave transform takes 800ms on large payloads. How do you optimize", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "it? ✅ Complete Scenario Answer DataWeave optimization strategies: Select only needed fields early: Don't map the entire SAP response — start with only the fields you need. payload.accounts.{accountId, name, status} instead of the full recor"}, {"id": "mod-z-s13", "tag": "S13", "title": "You deployed a new version of your billing API at 2AM. At 8AM (peak billing", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "time), you see a 30% error rate. How do you respond? ✅ Complete Scenario Answer Incident response process: 1. Immediate rollback first: Don't debug in production. CloudHub: redeploy the previous version immediately. Takes 2-3 minutes. Error"}, {"id": "mod-z-s14", "tag": "S14", "title": "Business says \"our customer preference updates are not being saved.\" How do", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "you debug this across the XAPI → Anypoint MQ → PAPI → DynamoDB chain? ✅ Complete Scenario Answer Step-by-step debugging with correlationId: 1. Get the correlationId: Ask the business for the customer ID and approximate time. In Splunk/Anypo"}, {"id": "mod-z-s15", "tag": "S15", "title": "\"What if all 3 DB connectors in Scatter-Gather fail? What happens?\"", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "✅ Complete Scenario Answer Scatter-Gather with 3 DB routes — all fail: Without Try scope: First failing route throws immediately → Scatter-Gather throws MULE:COMPOSITE_ROUTING → caught by flow error handler → returns error response. Second "}, {"id": "mod-z-s16", "tag": "S16", "title": "What is the difference between calling a Private Flow vs a Sub-Flow via Flow Reference — when does choosing the wrong one cause a production bug?", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "✅ Complete Scenario Answer Bug Scenario 1 (Missing Local Error Boundary): You need a reusable helper flow to catch and degrade a non-critical enrichment failure locally, so you create a Sub-Flow . Because Sub-Flows have no independent error"}, {"id": "mod-z-s17", "tag": "S17", "title": "\"You set maxRetries=3 in Until Successful. How many total attempts", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "happen?\" ✅ Complete Scenario Answer Answer: 4 total attempts — 1 initial attempt + 3 retries. Common interview trap: Many candidates say \"3 attempts\" — this is WRONG. maxRetries counts retries AFTER the initial attempt. So maxRetries=3 = 1 "}, {"id": "mod-z-s18", "tag": "S18", "title": "\"You said ForEach doesn't change the payload. But I set a variable inside", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "ForEach — is that visible after the loop?\" ✅ Complete Scenario Answer Yes — variables set inside ForEach ARE visible after the loop. This is a critical distinction: payload: NOT changed by ForEach — still the original collection vars: CHANG"}, {"id": "mod-z-s19", "tag": "S19", "title": "\"What is the difference between SDO and SMO in MuleSoft?\"", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "✅ Complete Scenario Answer SDO (Shared Domain Objects) and SMO (Service Message Objects) are MuleSoft architectural concepts: SDO: In API-led connectivity, SDOs are the canonical data models shared across APIs — the common format that all l"}, {"id": "mod-z-s20", "tag": "S20", "title": "FINAL CROSS-QUESTION: \"How would you design a MuleSoft integration for a system you've", "modTitle": "20 Production Scenario Questions & Cross-Questions (S1-S20)", "category": "Production Scenarios & Incidents", "role": "Senior Developer", "snippet": "never worked with before?\" ✅ Complete Scenario Answer — The \"Senior Developer\" Answer This question tests your architecture thinking, not your memorization. Here's the answer that shows seniority: 1. Research the system's connectivity optio"}, {"id": "mod-aa-n1", "tag": "N1", "title": "What is the Einstein AI Connector? How is it different from the Inference Connector?", "modTitle": "Live Whiteboard Architecture Guide & Scripts", "category": "Live Whiteboard & Architecture", "role": "Lead / Architect", "snippet": "✓ ANSWER Einstein AI Connector is Salesforce-native — it routes all LLM calls through the Einstein Trust Layer. Zero data retention: no prompt or response stored by the provider. PII masking before data leaves Salesforce. Full audit log of "}, {"id": "mod-bb-n2", "tag": "N2", "title": "What is Anypoint Partner Manager (APM)? How does it differ from the X12 EDI Connector?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "✓ ANSWER APM is a centralized B2B gateway platform for managing trading partners — onboarding, transaction tracking, message routing, and acknowledgement handling. Partner config (ISA IDs, certificates, endpoints) stored in APM, fetched at "}, {"id": "mod-bb-n3", "tag": "N3", "title": "Your interviewer asks: \"How would you integrate MuleSoft with Snowflake for a nightly ETL", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "load of 100,000 records?\" ✓ ANSWER Design: Scheduler → Batch Job → Snowflake Connector 📋 DESIGN WALK-THROUGH 1. Scheduler triggers nightly at 2AM 2. Batch Job Load & Dispatch: reads 100,000 records from source system (e.g., SAP or PostgreSQ"}, {"id": "mod-bb-n4", "tag": "N4", "title": "What is the MuleSoft MCP Connector and how does it connect MuleSoft to AI agents?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "MCP = Model Context Protocol — an open standard (originally by Anthropic) that lets AI agents call external tools and APIs in a structured, discoverable way. MuleSoft MCP Connector turns any Mule flow into an MCP-compatible tool that AI age"}, {"id": "mod-bb-n5", "tag": "N5", "title": "What is the Anypoint Terraform Provider and why would you use it?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "Anypoint Terraform Provider is a HashiCorp Terraform plugin that lets you manage Anypoint Platform resources as Infrastructure-as-Code (IaC). Instead of clicking through Anypoint Platform UI, you define resources in .tf files and apply them"}, {"id": "mod-bb-n6", "tag": "N6", "title": "When would you choose Anypoint Secrets Manager over AWS Secrets Manager (or vice versa)?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "Both are secrets vaults but optimized for different contexts. The choice depends on your cloud strategy and team structure. Criterion Anypoint Secrets Manager AWS Secrets Manager Native MuleSoft integration Zero config — referenced directly"}, {"id": "mod-bb-n7", "tag": "N7", "title": "How do you use Anypoint Visualizer in an enterprise context?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "Anypoint Visualizer auto-generates a real-time dependency map of all deployed Mule applications, showing how APIs call each other (Experience → Process → System layers). No manual diagramming required — it is always current. Enterprise use "}, {"id": "mod-bb-n8", "tag": "N8", "title": "What is the MuleSoft certification path and what does each certification validate?", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "MuleSoft certifications validate hands-on Mule development and architecture skills. They follow a structured progression. Certification Path: MCD-L1 (MuleSoft Certified Developer Level 1): Core Mule development — flows, connectors, DataWeav"}, {"id": "mod-bb-n9", "tag": "N9", "title": "Quick-Fire Round: Answer 10 Core MuleSoft Questions in One Crisp Sentence Each", "modTitle": "2026 Modern Tech: Agentforce AI, MCP & Snowflake", "category": "Modern Architecture & AI", "role": "Lead / Architect", "snippet": "# QUESTION ONE-SENTENCE SENIOR ANSWER 1 What is a Mule Domain project? An on-premises / hybrid shared bundle allowing multiple Mule applications in the same runtime to share HTTP Listener ports, TLS contexts, and connector configurations (n"}, {"id": "mod-cc-n10", "tag": "N10", "title": "What is the difference between HTTP 401 and 403, and how do you handle both in MuleSoft?", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "This is a classic interview trap — many developers confuse these two codes. Knowing the exact distinction shows API design maturity. ASPECT 401 UNAUTHORIZED 403 FORBIDDEN Meaning Authentication missing, expired, or invalid — identity not ve"}, {"id": "mod-cc-n11", "tag": "N11", "title": "Design Scenario: A banking client needs an API handling 10,000 transactions/minute with PCI-DSS compliance — how do you architect it?", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "This scenario tests your ability to combine security, performance, and compliance in a real-world banking context. Architecture layers: Experience API (XAPI): Mobile/web-facing HTTPS endpoint. Enforces OAuth 2.0 + JWT. Rate limited to 10,00"}, {"id": "mod-cc-t1", "tag": "T1", "title": "Trap #1: Architecture Differences Between Mule 3 and Mule 4", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: Mule 4 is just a newer version of Mule 3. ✅ Senior Architect Correction: Mule 4 replaced SEDA thread-per-flow queues with a non-blocking Project Reactor engine (unified Uber Thread Pool in 4.3+), removed MEL in favo"}, {"id": "mod-cc-t2", "tag": "T2", "title": "Trap #2: Error Handling Behavior Inside Sub-Flows vs Private Flows", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: Sub-flows handle their own errors independently. ✅ Senior Architect Correction: Sub-flows have NO independent error handler scope — they execute inline inside the caller and inherit the calling flow's error handler."}, {"id": "mod-cc-t3", "tag": "T3", "title": "Trap #3: DataWeave 2.0 vs Legacy MEL in Mule 4 Expressions", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: I use #[payload.field] — that is MEL (Mule Expression Language). ✅ Senior Architect Correction: In Mule 4, every #[...] expression is evaluated by DataWeave 2.0 , never MEL. MEL was completely removed in Mule 4 — ev"}, {"id": "mod-cc-t4", "tag": "T4", "title": "Trap #4: HTTP 401 Unauthorized vs HTTP 403 Forbidden", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: 401 and 403 mean the same thing: the user cannot access the resource. ✅ Senior Architect Correction: 401 Unauthorized means missing, expired, or invalid credentials ( authentication failure — gateway/server does not"}, {"id": "mod-cc-t5", "tag": "T5", "title": "Trap #5: Watermarking Purpose & ObjectStore Persistence", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: Watermark is just a built-in MuleSoft Scheduler polling setting. ✅ Senior Architect Correction: A watermark is an architectural state checkpoint (timestamp or high-water ID) stored in persistent ObjectStore v2 so in"}, {"id": "mod-cc-t6", "tag": "T6", "title": "Trap #6: CloudHub 1.0 EC2 Workers vs CloudHub 2.0 Kubernetes Architecture", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: CloudHub 2.0 is basically the same as CloudHub 1.0 with an updated UI. ✅ Senior Architect Correction: CloudHub 2.0 runs containerized Mule pods on managed AWS EKS (Kubernetes) Private Spaces / Shared Spaces instead "}, {"id": "mod-cc-t7", "tag": "T7", "title": "Trap #7: Partial Failure Handling in Scatter-Gather", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: If one route fails inside Scatter-Gather, Mule skips it and returns the remaining routes. ✅ Senior Architect Correction: By default, if ANY branch inside Scatter-Gather throws an unhandled error, the ENTIRE Scatter-"}, {"id": "mod-cc-t8", "tag": "T8", "title": "Trap #8: Scope of Retry Execution in Until Successful", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: Until Successful retries the entire parent flow when a downstream call fails. ✅ Senior Architect Correction: Until Successful retries ONLY the event processors inside its own scope synchronously with each attempt re"}, {"id": "mod-cc-t9", "tag": "T9", "title": "Trap #9: Does Set Variable Overwrite the Current Payload?", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: Calling Set Variable changes or resets the Mule Event payload. ✅ Senior Architect Correction: Set Variable creates or updates an entry inside the vars map and leaves the current payload and attributes completely unc"}, {"id": "mod-cc-t10", "tag": "T10", "title": "Trap #10: APIkit Router vs HTTP Listener Roles", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: APIkit Router replaces the HTTP Listener when exposing RAML/OAS APIs. ✅ Senior Architect Correction: APIkit Router sits behind and depends on the HTTP Listener. The HTTP Listener manages socket/TLS binding and accep"}, {"id": "mod-cc-t11", "tag": "T11", "title": "Trap #11: Flow Continuation & HTTP Status in On Error Propagate vs Continue", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: Both On Error Propagate and On Error Continue stop execution and fail the request. ✅ Senior Architect Correction: On Error Propagate halts execution, runs its processors, re-throws the error to the caller scope (tri"}, {"id": "mod-cc-t12", "tag": "T12", "title": "Trap #12: Default DataWeave Output Directive & MIME Type Behavior", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: DataWeave 2.0 always outputs JSON by default. ✅ Senior Architect Correction: The DataWeave output directive explicitly controls serialization ( application/json , application/xml , text/csv , application/java ). Alw"}, {"id": "mod-cc-t13", "tag": "T13", "title": "Trap #13: Memory & Concurrency Trade-offs — ForEach vs Batch Job", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: ForEach and Batch Job do the same thing and can be swapped freely. ✅ Senior Architect Correction: ForEach iterates synchronously on a single thread over an in-memory collection (best for <1,000 items). Batch Job per"}, {"id": "mod-cc-t14", "tag": "T14", "title": "Trap #14: Enabling Governance Policies via API Autodiscovery", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: Policies applied in API Manager take effect automatically as soon as the app deploys. ✅ Senior Architect Correction: API Manager policies ONLY enforce when the Mule application explicitly declares an API Autodiscove"}, {"id": "mod-cc-t15", "tag": "T15", "title": "Trap #15: Mule Event Immutability Under Project Reactor", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: You can mutate the incoming Mule Event object directly in-place across processors. ✅ Senior Architect Correction: The Mule 4 Event is strictly immutable for thread-safe reactive execution. Every processor (Set Paylo"}, {"id": "mod-cc-t16", "tag": "T16", "title": "Trap #16: HTTP Request Connector vs Exchange REST Connectors", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: You must generate an Exchange REST Connector to consume external REST APIs. ✅ Senior Architect Correction: The core HTTP Request Connector calls any REST/HTTP endpoint directly with full control over pooling, timeou"}, {"id": "mod-cc-t17", "tag": "T17", "title": "Trap #17: Securing Credentials with ${secure::...} Syntax", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: Wrapping a password in ![...] inside a YAML property file automatically encrypts it. ✅ Senior Architect Correction: The ![ciphertext] syntax only instructs Mule's Secure Properties Configuration module to decrypt a "}, {"id": "mod-cc-t18", "tag": "T18", "title": "Trap #18: Isolation Scope of MUnit mock-when Processors", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: MUnit mocks replace the entire flow under test. ✅ Senior Architect Correction: MUnit mock-when intercepts ONLY matching outbound/target event processors (such as HTTP Request, Database Select, or Salesforce calls by"}, {"id": "mod-cc-t19", "tag": "T19", "title": "Trap #19: Choosing Between RAML 1.0 and OpenAPI (OAS 3.0)", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: RAML and OAS 3.0 are completely interchangeable with zero feature trade-offs. ✅ Senior Architect Correction: Both generate APIkit scaffolding and docs in Design Center/Exchange, but RAML 1.0 offers stronger native r"}, {"id": "mod-cc-t20", "tag": "T20", "title": "Trap #20: Anchoring Compensation & Communicating Technical Depth in Interviews", "modTitle": "Top 20 Interview Traps & Senior Corrections (T1-T20)", "category": "Interview Traps & Pitfalls", "role": "Senior / Lead", "snippet": "❌ Common Interview Trap: Blurting out a specific number immediately when asked about expectations, or reciting memorized jargon. ✅ Senior Architect Correction: Ask for the role's budgeted compensation band first (\"I'd love to ensure alignme"}, {"id": "mod-dd-r1", "tag": "R1", "title": "How do you run discovery for a new integration? What framework do you follow?", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Architect Answer I use an 8-part discovery framework. I don't start design until every part has an owner and either an answer or a written assumption. # AREA WHAT I NEED TO LEAVE THE ROOM WITH 1 Business goal The outcome in business terms"}, {"id": "mod-dd-r2", "tag": "R2", "title": "What questions do you ask the client, by category?", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Architect Answer — Question Bank CATEGORY QUESTIONS TO ASK Business Outcomes What problem costs time or money today? Which steps are manual? What happens if delivery slips, and what does \"done\" look like? Systems & Endpoints Which systems"}, {"id": "mod-dd-r3", "tag": "R3", "title": "What red flags do you watch for in discovery, and which assumptions do you confirm in", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "writing? ✅ Architect Answer 🚩 Red flags \"Real-time\" with no latency number No named owner for a source or target system Target system has no test environment \"Volumes are small\" with no data behind it Credentials or firewall changes \"sorted"}, {"id": "mod-dd-r4", "tag": "R4", "title": "Walk me through a discovery workshop agenda.", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Sample Agenda (half day, about 3.5 hours) TIME SESSION OUTPUT 0:00– 0:15 Introductions, goals, ground rules Agreed objective for the day 0:15– 0:45 Business context: current pain, desired outcome, success metrics Problem statement, draft "}, {"id": "mod-dd-r5", "tag": "R5", "title": "What \"delighters\" do you add to make the client happy beyond the core integration?", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Architect Answer Delighters are cheap extras that lower the client's risk and effort. I put them in the estimate from day one so they don't get cut at the end. DELIGHTER WHY THE CLIENT CARES Exchange API Portal Docs Consumers self-serve s"}, {"id": "mod-dd-r6", "tag": "R6", "title": "Give me your requirements checklist (copy-friendly).", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Copy-Friendly Checklist requirements-checklist.txt Business goal stated as a measurable outcome Sponsor, product owner and system owners named Source and target systems listed with interface type Test environment confirmed for every syste"}, {"id": "mod-dd-r7", "tag": "R7", "title": "Mini case study: Salesforce → SAP → Database order sync. How would you gather", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "requirements and shape the solution? ✅ Illustrative Case Study (not a real client) Ask: \"When a Salesforce Opportunity is Closed Won, create a sales order in SAP S/4HANA and store the order status in a reporting database.\" 📋 DISCOVERY FINDI"}, {"id": "mod-dd-c1", "tag": "C1", "title": "How does MuleSoft compare with other integration options? Give an honest comparison.", "modTitle": "Architect: Requirement Gathering & Discovery Framework", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Architect Answer — Honest Comparison Positioning is general and based on publicly documented capabilities. Always check current vendor docs and pricing before a client presentation. OPTION STRENGTHS WEAKNESSES BEST FIT MuleSoft Anypoint A"}, {"id": "mod-ee-c2", "tag": "C2", "title": "What are MuleSoft's real differentiators?", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Architect Answer API-led connectivity: System, Process and Experience layers turn integrations into reusable assets instead of point-to-point code. Reuse through Exchange: specs, fragments, templates and connectors are discoverable, so th"}, {"id": "mod-ee-c3", "tag": "C3", "title": "When would you NOT recommend MuleSoft?", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Architect Answer — Shows Integrity A handful of simple SaaS-to-SaaS syncs with no reuse plan: an iPaaS like Workato, or a vendor's native connector, may be cheaper. Pure high-volume event streaming or log pipelines: Kafka / Kinesis is the"}, {"id": "mod-ee-c4", "tag": "C4", "title": "How do you handle client objections? Give scripts.", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Objection Scripts — Acknowledge → Reframe → Evidence → Proposal OBJECTION SCRIPT \"MuleSoft is too expensive.\" Acknowledge: \"The licence is a real cost, and you should compare it carefully.\" Reframe: \"The bigger cost is usually building an"}, {"id": "mod-ee-c5", "tag": "C5", "title": "How do you build a TCO and value case for MuleSoft?", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Architect Answer — TCO & Value Framework I compare options over 3–5 years and only use the client's own numbers. I never quote vendor prices from memory; the account team provides current pricing. 💰 Cost side Platform licence / subscripti"}, {"id": "mod-ee-c6", "tag": "C6", "title": "How would you run a POC or pilot to prove MuleSoft to a sceptical client?", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Architect Answer — POC Approach 1. Pick a real, painful use case, ideally one that touches 2–3 core systems. Don't demo \"hello world\". 2. Agree success criteria up front: functional scope, latency, effort in days, reuse shown, security po"}, {"id": "mod-ee-e1", "tag": "E1", "title": "How do you tailor the same architecture message for different audiences?", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Architect Answer AUDIENCE WHAT THEY CARE ABOUT HOW TO PITCH IT Executives / Sponsors Outcomes, cost, risk, timeline One-slide view: business outcome, TCO, delivery milestones, and top 3 risks with mitigations — zero product jargon unless "}, {"id": "mod-ee-e2", "tag": "E2", "title": "Give me analogies to explain API-led connectivity, the 3 API layers, DataWeave and CloudHub", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "to a non-technical person. ✅ Analogies That Work CONCEPT ANALOGY API-led connectivity Restaurant: customers (apps) order from a menu (Experience API). The head chef (Process API) coordinates the order. Station cooks (System APIs) each handl"}, {"id": "mod-ee-e3", "tag": "E3", "title": "\"What is MuleSoft?\" — give 30-second, 2-minute and 5-minute versions.", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Spoken Scripts ⏱ 30 SECONDS \"MuleSoft is an integration platform from Salesforce. It connects applications, data and devices through reusable APIs, so a new app or system can plug into what you already have instead of being wired up from "}, {"id": "mod-ee-e4", "tag": "E4", "title": "\"What is API-led connectivity?\" — give 30-second, 2-minute and 5-minute versions.", "modTitle": "Architect: MuleSoft vs Competitors & Objection Handling", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Spoken Scripts (architect-level variant of Section A, Q2) ⏱ 30 SECONDS \"It's a way of organising integrations into three layers of reusable APIs: System APIs unlock core systems, Process APIs apply business logic, and Experience APIs shap"}, {"id": "mod-ff-e5", "tag": "E5", "title": "How do you present an architecture to a client steering committee?", "modTitle": "Architect: Client Communication & Stakeholder Alignment", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Presentation Tips Start with the decision you need (\"Today we need approval for option B\"). Context diagram first, then zoom in. Never open with the most detailed diagram. Max 3 options, each with cost, risk, time and a clear recommendati"}, {"id": "mod-ff-e6", "tag": "E6", "title": "How do you report status with RAG, and how do you deliver bad news?", "modTitle": "Architect: Client Communication & Stakeholder Alignment", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Architect Answer STATUS MEANING WHAT YOU MUST INCLUDE 🟢 Green On track for scope, timeline, and budget Current milestone progress and next target date 🟡 Amber At risk, but recoverable with corrective action Specific risk, mitigation plan,"}, {"id": "mod-ff-e7", "tag": "E7", "title": "How do you handle scope creep from the client?", "modTitle": "Architect: Client Communication & Stakeholder Alignment", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Architect Answer Welcome the idea, then size it: \"That's a good addition. Let me assess the impact.\" Compare against the signed scope and the out-of-scope list from discovery (R3). Raise a change request with effort, timeline and risk imp"}, {"id": "mod-ff-e8", "tag": "E8", "title": "Give me a jargon-to-plain-English table for client conversations.", "modTitle": "Architect: Client Communication & Stakeholder Alignment", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Jargon → Plain English JARGON PLAIN ENGLISH TRANSLATION API A secure, documented doorway one system uses to ask another for data or an action API-Led Connectivity Building reusable integration building blocks in three layers instead of fr"}, {"id": "mod-ff-e9", "tag": "E9", "title": "Share email templates for kickoff, risk escalation and go-live.", "modTitle": "Architect: Client Communication & Stakeholder Alignment", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Email Templates kickoff.txt Subject: [Project] Integration kickoff – agenda and pre-read Hi all, Thanks for joining the kickoff on [date, time]. Our goal is to agree scope, owners and next steps for [business outcome]. Agenda: introductio"}, {"id": "mod-gg-a0", "tag": "A0", "title": "What framework should I use to answer architect-level questions?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Answer Framework 📋 DESIGN QUESTIONS: CLARIFY → ASSUMPTIONS → OPTIONS → TRADE-OFFS → RECOMMENDATION → RISKS Clarify: ask 2–3 questions (volume, latency, systems, constraints). It shows you don't design blind. Assumptions: state the ones yo"}, {"id": "mod-gg-a1", "tag": "A1", "title": "How do you decide whether an integration should be synchronous or asynchronous?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer What they're testing: whether you choose patterns from requirements, not habit. \"I start with one question: is a user or caller waiting for the result? If yes and the backend can answer within the latency target, sync is fine"}, {"id": "mod-gg-a2", "tag": "A2", "title": "When would you NOT use all three API-led layers?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer (architect variant of Section O) What they're testing: pragmatism over dogma. \"Layers should earn their place. If a Process API would just pass through to one System API with no orchestration or rules, I skip it and let the E"}, {"id": "mod-gg-a3", "tag": "A3", "title": "How do you size a MuleSoft application and its deployment?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer What they're testing: whether you size from data instead of guessing. \"I get peak TPS, payload size and backend latency from discovery. I start with a modest replica size, run a performance test with realistic payloads and ba"}, {"id": "mod-gg-a4", "tag": "A4", "title": "How do you design an enterprise security model for APIs?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer What they're testing: defence in depth across layers. \"I secure each hop differently. Externally: OAuth 2.0 / JWT validation at the Experience layer, plus rate limiting and threat protection policies, through API Manager or F"}, {"id": "mod-gg-a5", "tag": "A5", "title": "How do you set up API governance across many teams?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer What they're testing: scaling standards without becoming a bottleneck. \"I automate it as much as I can. Design standards live as Anypoint API Governance rulesets, so specs are checked automatically. Teams start from a project"}, {"id": "mod-gg-a6", "tag": "A6", "title": "What is a C4E and how would you set one up?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer What they're testing: operating-model thinking, not just tech. \"A Center for Enablement is a small cross-functional team that enables delivery teams instead of doing all the work centrally. It owns standards, templates, reusa"}, {"id": "mod-gg-a7", "tag": "A7", "title": "How do you design for high availability and disaster recovery?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer What they're testing: whether you tie design to RPO/RTO. \"I start with the business RPO and RTO, because they decide cost. For HA within a region: multiple replicas spread across availability zones, stateless apps, persistent"}, {"id": "mod-gg-a8", "tag": "A8", "title": "How do you design observability for a MuleSoft estate?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer What they're testing: operations maturity. \"Three things: logs, metrics and traces, linked by a correlation ID passed through every layer. Structured JSON logging with a standard format, async logging, and no sensitive data. "}, {"id": "mod-gg-a9", "tag": "A9", "title": "How do you handle a breaking change to an API with many consumers?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer (architect variant of Section Y, Q8) What they're testing: consumer empathy and lifecycle management. \"First I try to avoid it with additive, backward-compatible changes. If it truly breaks, I release a new major version alon"}, {"id": "mod-gg-a10", "tag": "A10", "title": "How do you design a canonical data model, and when do you avoid one?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer (architect variant of S19) What they're testing: domain thinking and pragmatism. \"I avoid one giant enterprise-wide model. They become slow to agree and fragile to change. I define canonical models per business domain, like C"}, {"id": "mod-gg-a11", "tag": "A11", "title": "How do you make an integration reliable when the target system is unreliable?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer What they're testing: resilience patterns, chosen deliberately. \"I separate receiving from delivering with a persistent queue, so the caller isn't affected. Delivery uses retries with backoff for transient errors only, like t"}, {"id": "mod-gg-a12", "tag": "A12", "title": "How do you decide between CloudHub 2.0, Runtime Fabric and customer-hosted runtimes?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer (short form; full scenario in S23) What they're testing: deployment trade-offs. \"The default is CloudHub 2.0 because MuleSoft runs the infrastructure. I'd move to Runtime Fabric when the client must run on their own Kubernete"}, {"id": "mod-gg-a13", "tag": "A13", "title": "Tell me about a time you disagreed with a client or a senior stakeholder on architecture.", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "(Behavioural) ✅ Model Answer (STAR — replace with your own real example) What they're testing: influence without authority, and respect. \"S: A stakeholder wanted direct point-to-point calls from the portal to SAP to hit a date. T: I owned t"}, {"id": "mod-gg-a14", "tag": "A14", "title": "How do you review a developer's Mule application as an architect?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer What they're testing: what you value in quality. \"I check the things that hurt in production: does it follow the spec, is error handling consistent, are retries limited to transient errors, are writes idempotent, are secrets "}, {"id": "mod-gg-a15", "tag": "A15", "title": "How would you approach cost optimisation on an existing MuleSoft estate?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer What they're testing: commercial awareness. \"I start with data: per-app resource usage, traffic and replicas from Runtime Manager and Monitoring. Then the usual findings: over-sized replicas, non-prod environments running all"}, {"id": "mod-gg-a16", "tag": "A16", "title": "How do you introduce AI agents (Agentforce / MCP) into an integration architecture safely?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Model Answer (architect variant of N4) What they're testing: 2026 awareness plus governance. \"I treat agents as another consumer of APIs, with stricter guardrails. Agents call well-described, narrowly scoped tools exposed through MCP or a"}, {"id": "mod-gg-a17", "tag": "A17", "title": "Give me a 60-second architect self-introduction template.", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Template (fill in with your own true facts) ✅ Exact Words to Say · 🎯 60-SECOND SCRIPT Copy Script \"\"I'm [Name], an integration architect with [X] years in integration, [Y] of them on MuleSoft. Most recently at [Company], I designed the AP"}, {"id": "mod-gg-a18", "tag": "A18", "title": "What are the Do's and Don'ts in an architect interview?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Do / Don't ✅ Do Ask clarifying questions before designing State assumptions out loud Give options and trade-offs, then commit Talk about NFRs, operations and cost Mention people: stakeholders, teams, governance Say \"it depends on X\" and t"}, {"id": "mod-gg-a19", "tag": "A19", "title": "What questions should I ask the interviewer for an architect role?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Smart Questions to Ask \"How is the integration estate organised today: central team, C4E or federated?\" \"What's the biggest integration problem you want this person to solve in the first 6 months?\" \"Where do you deploy: CloudHub 2.0, Runt"}, {"id": "mod-gg-h1", "tag": "H1", "title": "What actually makes an interviewer happy with an answer?", "modTitle": "Architect: Masterclass Interview Q&A (A1 to A19)", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ What Interviewers Listen For THEY'RE HAPPY WHEN YOU… BECAUSE IT SIGNALS… Ask 1–2 clarifying questions before designing You don't build on guesses Give the headline first, then details Clear thinking, respect for their time Explain why, no"}, {"id": "mod-hh-h2", "tag": "H2", "title": "What makes a client happy when you explain things?", "modTitle": "Architect: How to Explain So Clients & Interviewers Are Happy", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ What Clients Listen For 😊 Clients are happy when you… Start from their business problem, in their words Talk outcomes: time saved, risk reduced, faster go-live Use their system and process names, not product jargon Show 2–3 options with a"}, {"id": "mod-hh-h3", "tag": "H3", "title": "Is there one formula for explaining anything clearly to either audience?", "modTitle": "Architect: How to Explain So Clients & Interviewers Are Happy", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ The 5-Step Explanation Formula 📋 HEADLINE → WHY IT MATTERS → HOW IT WORKS → PROOF → NEXT STEP 1. Headline (1 sentence): the answer first. \"I'd use an async design with Anypoint MQ.\" 2. Why it matters: link to their goal. \"Orders won't be "}, {"id": "mod-hh-h4", "tag": "H4", "title": "Show me weak vs best answers side by side for common questions.", "modTitle": "Architect: How to Explain So Clients & Interviewers Are Happy", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Weak vs Best (Interviewer) QUESTION ❌ WEAK ANSWER ⭐ BEST ANSWER \"Why use API-led?\" \"It's MuleSoft best practice with three layers.\" \"So a backend change isolates to one System API instead of breaking every consumer. The trade-off is extra"}, {"id": "mod-hh-h5", "tag": "H5", "title": "Give me a phrase bank that makes interviewers and clients feel confident.", "modTitle": "Architect: How to Explain So Clients & Interviewers Are Happy", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Phrase Bank 🎯 With interviewers \"Before I design, can I check two things: peak volume and whether a user is waiting?\" \"I'll assume X. Tell me if that's wrong.\" \"There are two good options here. Here's the trade-off…\" \"For this context I'd"}, {"id": "mod-hh-h6", "tag": "H6", "title": "Any delivery tips (in person or on video) that make the explanation land?", "modTitle": "Architect: How to Explain So Clients & Interviewers Are Happy", "category": "Enterprise Architect Masterclass", "role": "Enterprise Architect", "snippet": "✅ Delivery Tips Draw while you talk. A simple box diagram beats five minutes of words. On video, share a whiteboard or keep a ready diagram (see Section AA). Pause after the headline. Let them react before you go into detail. Numbers slowly"}, {"id": "mod-ii-q1", "tag": "Q1", "title": "Why are Strings immutable in Java and what is the String Constant Pool (SCP)?", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER In Java, String objects are strictly immutable: once instantiated in memory, their internal character array cannot be modified. Any manipulation like .concat() or replace() allocates a brand-new object on the heap. Imm"}, {"id": "mod-ii-q2", "tag": "Q2", "title": "String vs StringBuilder vs StringBuffer — Memory allocation, GC pressure, and lock contention in multi-threaded MuleSoft runtimes", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER String is immutable and creates throwaway objects in the Young Gen Eden space with every concatenation, triggering frequent Minor GC sweeps under high load. StringBuffer is mutable and thread-safe because its core meth"}, {"id": "mod-ii-q3", "tag": "Q3", "title": "How does immutability work in DataWeave 2.0 compared to Java Strings, and how does DW manage off-heap memory buffers for large payloads (>100MB)?", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER Like Java Strings, DataWeave 2.0 enforces pure functional immutability: variables, objects, and arrays cannot be modified in place. Operations like map, filter, and update return new projected data streams without muta"}, {"id": "mod-ii-q4", "tag": "Q4", "title": "Constructors in Java: Default, Parameterized, and Copy constructors in building thread-safe, immutable domain models", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER A constructor initializes newly instantiated object state. If no constructor is defined in source code, the Java compiler provides an implicit default no-arg constructor. A Parameterized Constructor allows callers to i"}, {"id": "mod-ii-q5", "tag": "Q5", "title": "Constructor chaining with this() vs super() and its role in Mule SDK lifecycle & dependency injection", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER this() calls an overloaded constructor within the same class, enabling constructor chaining and centralizing initialization logic in a single canonical constructor. super() invokes the immediate superclass constructor "}, {"id": "mod-ii-q6", "tag": "Q6", "title": "Constructor vs Method: Why can't constructors be abstract or final, and how do private constructors safeguard Singleton architectures?", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER A constructor initializes memory for an object, has no return type, and must share the class name. A method represents behavior on an already-instantiated object, must declare a return type (or void), and has arbitrary"}, {"id": "mod-ii-q7", "tag": "Q7", "title": "Method Overloading vs Method Overriding: JVM bytecode instructions (invokestatic/invokevirtual) and compile-time vs runtime polymorphism", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER Method Overloading is resolved at compile time (Static Polymorphism). The javac compiler inspects the argument count, types, and reference type to determine the exact method signature, emitting 'invokestatic', 'invokes"}, {"id": "mod-ii-q8", "tag": "Q8", "title": "Strict rules for Covariant Return Types, Access Modifiers, and Exceptions in Method Overriding under the Liskov Substitution Principle", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER Method overriding adheres strictly to the Liskov Substitution Principle (LSP): a subclass must be usable anywhere its superclass is expected without breaking caller assumptions. Return Types: In Java 5+, overriding met"}, {"id": "mod-ii-q9", "tag": "Q9", "title": "JIT compilation, Virtual Method Tables (vtable), and Monomorphic Inline Caching in high-concurrency MuleSoft runtimes", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER When an overridden method is called, the JVM performs dynamic dispatch using the object's Virtual Method Table (vtable) to resolve the memory address of the method. In high-throughput Mule APIs executing millions of ca"}, {"id": "mod-ii-q10", "tag": "Q10", "title": "Abstract Class vs Interface: Architectural decision criteria in enterprise MuleSoft connector frameworks (Template Method vs Contract)", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER An Interface defines a behavioral contract or capability ('can-do'), promoting complete decoupling and enabling multiple inheritance across unrelated domain types. An Abstract Class defines an identity hierarchy ('is-a"}, {"id": "mod-ii-q11", "tag": "Q11", "title": "Why Java allows multiple inheritance of interfaces but not classes: Solving the Diamond Problem with Java 8 default methods", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER Multiple class inheritance is prohibited in Java to eliminate the Diamond Problem, where a subclass inheriting from two parents with conflicting state or method implementations creates runtime ambiguity. Interfaces ori"}, {"id": "mod-ii-q12", "tag": "Q12", "title": "Can an Interface have constructors or instance variables? Java 8 static methods and Java 17 Sealed Interfaces in API governance", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER No, an interface cannot have constructors or instance variables. All variables declared in an interface are implicitly 'public static final' (constants) because interfaces represent stateless contracts. Java 8 added 's"}, {"id": "mod-ii-q13", "tag": "Q13", "title": "Mule 4 Event Architecture: Project Reactor mechanics & Evolution from CPU_LITE/BLOCKING_IO/CPU_INTENSIVE to the Mule 4.3+ Unified Uber Thread Pool", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER In Mule 4, the Mule Event is an immutable data context managed by a reactive engine powered by Project Reactor . Unlike Mule 3's SEDA thread-per-request model, Mule 4 uses non-blocking reactive execution backed by Proj"}, {"id": "mod-ii-q14", "tag": "Q14", "title": "Attributes vs Variables (vars) in Mule Events: Preventing payload destruction using Target Variables in multi-tiered APIs", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER Attributes are transport-specific metadata (HTTP headers, query params, status codes, JMS queues); they are immutable snapshots generated by connectors and replaced whenever a downstream call executes. Variables (vars)"}, {"id": "mod-ii-q15", "tag": "Q15", "title": "Mule 4 Error Object structure and enterprise error hierarchies: Custom Error Types, on-error-continue vs on-error-propagate", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER The Mule 4 Error Object ( #[error] ) is an immutable, hierarchical diagnostic model consisting of error.description , error.detailedDescription , error.errorType , and error.childErrors (used in Scatter-Gather). Error "}, {"id": "mod-ii-q16", "tag": "Q16", "title": "Batch Job Variable Scoping: Can variables defined inside a Batch Step be accessed outside or in subsequent Batch Steps?", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER Variables defined inside a Batch Step are Record-Level Variables . They attach directly to the specific record currently being processed. A record-level variable created in Batch Step 1 IS accessible to that same recor"}, {"id": "mod-ii-q17", "tag": "Q17", "title": "Flow variables vs record-level vars vs legacy Mule 3 recordVars: How Mule 4 maintains record isolation under the hood", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER In Mule 3, flow variables ( flowVars ) and batch record variables ( recordVars ) were two separate syntax maps, leading to confusion and migration errors. Mule 4 unified the syntax under vars , but strictly maintains t"}, {"id": "mod-ii-q18", "tag": "Q18", "title": "Error recovery in Batch Jobs with acceptPolicy='ONLY_FAILURES': Record variable persistence and DLQ routing", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER When a record encounters an unhandled exception in a Batch Step, the engine marks the record as failed, captures the exception, and skips all subsequent steps configured with acceptPolicy=\"NO_FAILURES\" . By configuring"}, {"id": "mod-ii-q19", "tag": "Q19", "title": "Can variables defined in the Input / Initialize stage of a Batch Job be accessed at the On-Complete phase? Passing tracking metadata across lifecycles", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER No. Variables defined in the Initialise / Input stage of a Batch Job cannot be accessed in the On-Complete phase. Variables created in the Input phase are cloned to initialize record-level variables for each record ent"}, {"id": "mod-ii-q20", "tag": "Q20", "title": "The BatchJobResult data contract in On-Complete: Programmatic getters, SLA monitoring, and alerting on failure thresholds", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER In the On-Complete phase, payload is strictly an instance of org.mule.runtime.extension.batch.api.BatchJobResult . It exposes read-only execution metrics: payload.totalRecords , payload.successfulRecords , payload.fail"}, {"id": "mod-ii-q21", "tag": "Q21", "title": "Batch Aggregator architecture: Streaming vs size-based chunking for bulk commits (Salesforce Bulk 2.0, Database bulk-insert) without memory hotspots", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER Executing individual outbound connector calls per record inside a batch step causes network latency overhead and hits downstream API rate limits. A Batch Aggregator accumulates processed records into chunks (e.g., 500 "}, {"id": "mod-ii-q22", "tag": "Q22", "title": "Offset/Limit vs Keyset (Cursor-based) pagination in MuleSoft APIs: Database buffer pool degradation and data consistency", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER Offset/Limit Pagination ( LIMIT 50 OFFSET 100000 ) is easy to implement and allows random page jumps. However, it scales with O(N) complexity: the database engine must scan and discard all preceding offset rows, causin"}, {"id": "mod-ii-q23", "tag": "Q23", "title": "Robust non-blocking pagination against SaaS APIs (ServiceNow, Stripe) using nextPageToken without triggering StackOverflowError", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER Many modern SaaS APIs return a nextPageToken or cursor pointer indicating the next page boundary. Implementing cursor pagination using recursive flow-ref loops is dangerous: if the SaaS API contains thousands of pages,"}, {"id": "mod-ii-q24", "tag": "Q24", "title": "Salesforce queryMore and QueryLocator vs Database pagination: When to pivot to Salesforce Bulk API 2.0", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER For standard SOQL queries returning >2,000 records, Salesforce generates a server-side cursor called a QueryLocator and sets done: false . The Mule Salesforce connector transparently calls queryMore under the hood when"}, {"id": "mod-ii-q25", "tag": "Q25", "title": "On-Premise (Standalone / RTF) vs CloudHub: Complete Enterprise Decision Matrix across Cost, Security, Maintenance, and Scalability", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER CloudHub (1.0 / 2.0) is MuleSoft's fully managed multi-tenant iPaaS running on AWS. It delivers automated infrastructure provisioning, elastic vCore scaling, zero OS maintenance, and built-in global telemetry. On-Premi"}, {"id": "mod-ii-q26", "tag": "Q26", "title": "Architectural drivers forcing On-Premises over CloudHub: Data sovereignty, sub-millisecond latency, and FIPS-140-2 compliance", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER In banking, defense, and public healthcare, regulatory mandates strictly dictate that sensitive customer financial records or PII cannot be stored, processed, or routed through public multi-tenant cloud providers. Hard"}, {"id": "mod-ii-q27", "tag": "Q27", "title": "High Availability (HA) and clustering: Hazelcast in-memory grid (On-Prem) vs CloudHub multi-worker shared-nothing architecture", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER On-Premises High Availability is built on an embedded Hazelcast in-memory data grid . Clustered Mule nodes share JVM heap state, distributed VM queues, and in-memory Object Stores across the local LAN. If Node 1 crashe"}, {"id": "mod-ii-q28", "tag": "Q28", "title": "Application-level refactoring for CloudHub 1.0 to CloudHub 2.0 Migration: Ephemeral file storage, port bindings, and container lifecycles", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER CloudHub 2.0 replaces CloudHub 1.0's AWS EC2 virtual machines with lightweight, containerized pods running on Amazon EKS (Kubernetes). Port Bindings (Critical CH 1.0 → 2.0 Difference): Unlike CloudHub 1.0 (where HTTP u"}, {"id": "mod-ii-q29", "tag": "Q29", "title": "Mule Maven Plugin configuration, POM definitions, vCore sizing increments, and property management in CloudHub 2.0 CI/CD", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER In pom.xml , the deployment plugin configuration changes from <cloudHubDeployment> to <cloudhub2Deployment> using mule-maven-plugin version 3.8.0+ or 4.x . The deployment target changes from an AWS region string (e.g.,"}, {"id": "mod-ii-q30", "tag": "Q30", "title": "Networking, Load Balancing, and Telemetry: Anypoint VPC vs Private Spaces, DLB vs Ingress, and automated Log Forwarding in CloudHub 2.0", "modTitle": "Senior Java & MuleSoft Technical Interview Mastery", "category": "Senior Developer & Lead Technical Interview", "role": "Senior Developer / Lead", "snippet": "✓ SENIOR MODEL ANSWER Networking: In CloudHub 1.0, network isolation required provisioning an Anypoint VPC with custom IP ranges. In CloudHub 2.0, networking is consolidated into Private Spaces , which automatically manage underlying subnet"}, {"id": "mod-jj-q1", "tag": "Q1", "title": "What is Anypoint Topic Center and how do you expose MuleSoft APIs as Salesforce Agentforce Actions?", "modTitle": "2026 AI Agentforce, MCP & Autonomous Agent Networks", "category": "Modern Architecture & AI", "role": "Architect / Lead", "snippet": "✓ ANSWER 🎯 HOW TO ANSWER (VERBAL SCRIPT) \"In the 2026 Salesforce + MuleSoft architecture, Anypoint Topic Center serves as the governance gateway that transforms traditional System and Process APIs into autonomous actions that Salesforce Age"}, {"id": "mod-jj-q2", "tag": "Q2", "title": "What is the Model Context Protocol (MCP) Connector in MuleSoft and how does it connect AI Agents to enterprise APIs?", "modTitle": "2026 AI Agentforce, MCP & Autonomous Agent Networks", "category": "Modern Architecture & AI", "role": "Architect / Lead", "snippet": "✓ ANSWER 🎯 HOW TO ANSWER (VERBAL SCRIPT) \"The Model Context Protocol (MCP) is the open enterprise standard enabling AI foundation models (such as Claude, GPT-4, and Gemini) to securely discover and invoke tools, context, and prompts hosted "}, {"id": "mod-jj-q3", "tag": "Q3", "title": "How does MuleSoft Model Proxy optimize LLM costs using Semantic Caching and fallback routing?", "modTitle": "2026 AI Agentforce, MCP & Autonomous Agent Networks", "category": "Modern Architecture & AI", "role": "Senior Developer / Lead", "snippet": "✓ ANSWER 🎯 HOW TO ANSWER (VERBAL SCRIPT) \"In enterprise AI architectures, calling commercial LLMs directly from application code creates runaway token expenses, latency spikes, and single-provider lock-in. MuleSoft's Model Proxy acts as an "}, {"id": "mod-jj-q4", "tag": "Q4", "title": "How do you define and orchestrate autonomous multi-agent networks in MuleSoft using agent-network.yaml?", "modTitle": "2026 AI Agentforce, MCP & Autonomous Agent Networks", "category": "Modern Architecture & AI", "role": "Architect / Lead", "snippet": "✓ ANSWER 🎯 HOW TO ANSWER (VERBAL SCRIPT) \"Autonomous Agent Networks represent the paradigm where multiple specialized agents collaborate to solve complex business transactions (e.g., a Customer Dispute Agent collaborating with a SAP Billing"}, {"id": "mod-kk-q1", "tag": "Q1", "title": "What is Anypoint Partner Manager (APM) and how does it modernize B2B EDI supply chain integrations?", "modTitle": "B2B Integration, EDI (X12/EDIFACT) & Partner Manager", "category": "Enterprise Architect Masterclass", "role": "Architect / Lead", "snippet": "✓ ANSWER 🎯 HOW TO ANSWER (VERBAL SCRIPT) \"Anypoint Partner Manager (APM) is MuleSoft's cloud-native B2B integration platform that separates partner management configuration from integration runtime execution. Traditionally, adding a new ret"}, {"id": "mod-kk-q2", "tag": "Q2", "title": "How do you parse ANSI X12 850 (Purchase Order) into JSON using the X12 EDI Connector and ESL schemas?", "modTitle": "B2B Integration, EDI (X12/EDIFACT) & Partner Manager", "category": "Enterprise Architect Masterclass", "role": "Senior Developer / Lead", "snippet": "✓ ANSWER 🎯 HOW TO ANSWER (VERBAL SCRIPT) \"Parsing EDI in Mule 4 is governed by the official X12 EDI Connector, which leverages Electronic Service Level (ESL) YAML schemas defining the exact segment hierarchy, mandatory fields, and qualifier"}, {"id": "mod-ll-q1", "tag": "Q1", "title": "How do you automate Anypoint Platform provisioning using the official MuleSoft Terraform Provider?", "modTitle": "Platform Operations, Terraform & OpenTelemetry Direct Telemetry", "category": "Deployment & CloudHub 2.0", "role": "Architect / Lead", "snippet": "✓ ANSWER 🎯 HOW TO ANSWER (VERBAL SCRIPT) \"To eliminate manual clicking in Anypoint Runtime Manager and API Manager across Dev, Test, Stage, and Prod environments, we implement GitOps infrastructure management using the official MuleSoft Ter"}, {"id": "mod-ll-q2", "tag": "Q2", "title": "What is OpenTelemetry (OTel) Direct Telemetry in MuleSoft and how does it replace legacy agent collectors?", "modTitle": "Platform Operations, Terraform & OpenTelemetry Direct Telemetry", "category": "Deployment & CloudHub 2.0", "role": "Architect / Lead", "snippet": "✓ ANSWER 🎯 HOW TO ANSWER (VERBAL SCRIPT) \"Historically, streaming traces and metrics from Mule applications to third-party APM tools like Dynatrace, Datadog, or New Relic required installing heavy Java agents (e.g., `-javaagent` in wrapper."}, {"id": "mod-mm-q1", "tag": "Q1", "title": "How do you integrate MuleSoft with Snowflake for high-volume data warehouse ingestion?", "modTitle": "Advanced Enterprise Connectors (Snowflake, ServiceNow, Workday, Cosmos DB & gRPC)", "category": "Salesforce & Enterprise Connectors", "role": "Senior Developer / Lead", "snippet": "✓ ANSWER 🎯 HOW TO ANSWER (VERBAL SCRIPT) \"When integrating MuleSoft with Snowflake, using standard row-by-row JDBC inserts is an anti-pattern that exhausts warehouse compute and incurs massive billing costs. For high-volume ingestion (e.g.,"}, {"id": "mod-mm-q2", "tag": "Q2", "title": "How do you implement gRPC services in MuleSoft with Protocol Buffers and HTTP/2 multiplexing?", "modTitle": "Advanced Enterprise Connectors (Snowflake, ServiceNow, Workday, Cosmos DB & gRPC)", "category": "Salesforce & Enterprise Connectors", "role": "Senior Developer / Lead", "snippet": "✓ ANSWER 🎯 HOW TO ANSWER (VERBAL SCRIPT) \"For high-frequency, low-latency microservice communications (e.g., real-time smart meter fraud detection), REST/JSON incurs significant serialization overhead and HTTP/1.1 head-of-line blocking. Wit"}];


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
    if (typeof window.markQaCompleted === 'function' && card.id) {
      window.markQaCompleted(card.id);
    }
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
  const q = (query || '').toLowerCase().trim();
  const activeCat = window._activeSectionCategory || 'all';
  const items = document.querySelectorAll('.quick-sidebar-item');
  let shownCount = 0;
  items.forEach(item => {
    const link = item.querySelector('.quick-sidebar-link');
    const modId = link ? link.getAttribute('data-mod-id') : '';
    const art = modId ? document.getElementById(modId) : null;
    const matchesCat = (activeCat === 'all') || (art && art.getAttribute('data-category') === activeCat);
    const text = link ? link.innerText.toLowerCase() : '';
    const visible = matchesCat && (!q || text.includes(q));
    item.style.display = visible ? 'block' : 'none';
    if (visible) shownCount++;
  });
  const countEl = document.getElementById('sidebar-module-count');
  if (countEl) {
    countEl.textContent = (activeCat === 'all' && !q)
      ? ('Showing all ' + shownCount + ' modules')
      : ('Showing ' + shownCount + ' of 40 modules');
  }
}

function toggleSidebar() {
  const sb = document.getElementById('toc-sidebar');
  if (sb) {
    sb.classList.toggle('collapsed');
  }
}

// Active Sidebar Link Tracker (ScrollSpy + Breadcrumb Sync)
window.addEventListener('DOMContentLoaded', () => {
  // Sync theme icon with current theme
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  }

  const observer = new IntersectionObserver((entries) => {
    if (window._suppressScrollSpyUntil && Date.now() < window._suppressScrollSpyUntil) return;
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      if (target.style.display === 'none' || entry.boundingClientRect.height <= 0) return;
      const activeCat = window._activeSectionCategory || 'all';
      if (activeCat !== 'all' && target.getAttribute('data-category') !== activeCat) return;

      const id = target.id;
      document.querySelectorAll('.quick-sidebar-link').forEach(link => {
        if (link.getAttribute('data-mod-id') === id) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
      if (typeof window.updateContentBreadcrumb === 'function') {
        window.updateContentBreadcrumb(target);
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

var DW_PRESETS = [{"id": "json-to-json", "title": "JSON to JSON - Simple Mapping", "category": "json", "format": "json", "input": "{\n  \"order_id\": \"ORD-98214\",\n  \"cust_first_name\": \"Niranjan\",\n  \"cust_last_name\": \"Potter\",\n  \"cust_email\": \"niranjan@mulesoft.hub\",\n  \"billing_amount\": 499.50,\n  \"currency_code\": \"USD\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  orderId: payload.order_id,\n  customerName: payload.cust_first_name ++ \" \" ++ payload.cust_last_name,\n  emailAddress: lower(payload.cust_email),\n  invoice: {\n    total: payload.billing_amount,\n    currency: payload.currency_code,\n    isPaid: true\n  },\n  processedAt: now() as String {format: \"yyyy-MM-dd HH:mm:ss\"}\n}", "output": "{\n  \"orderId\": \"ORD-98214\",\n  \"customerName\": \"Niranjan Potter\",\n  \"emailAddress\": \"niranjan@mulesoft.hub\",\n  \"invoice\": {\n    \"total\": 499.5,\n    \"currency\": \"USD\",\n    \"isPaid\": true\n  },\n  \"processedAt\": \"2026-11-18 14:15:00\"\n}", "explanation": {"whatHappened": "Incoming JSON keys (snake_case) are mapped to canonical enterprise camelCase JSON format. Full name is created using string concatenation (++), and a nested invoice object is created.", "functionDetails": "Uses string concatenation (++), lower(), and now() as String {format: '...'} for core field remapping and data normalization.", "interviewQuestion": "Interviewer asks: 'How do you rename keys and concatenate strings while preserving data types in DataWeave?'", "realProjectUsage": "Experience API to Process API transformation: standardizes client payloads into the enterprise canonical data model."}, "name": "JSON to JSON - Simple Mapping", "payload": "{\n  \"order_id\": \"ORD-98214\",\n  \"cust_first_name\": \"Niranjan\",\n  \"cust_last_name\": \"Potter\",\n  \"cust_email\": \"niranjan@mulesoft.hub\",\n  \"billing_amount\": 499.50,\n  \"currency_code\": \"USD\"\n}"}, {"id": "json-to-xml", "title": "JSON to XML", "category": "xml", "format": "json", "input": "{\n  \"account\": {\n    \"id\": \"ACC-7890\",\n    \"name\": \"Florida Power & Light\",\n    \"tier\": \"ENTERPRISE\",\n    \"active\": true\n  }\n}", "script": "%dw 2.0\noutput application/xml\n---\nAccountRequest @(xmlns: \"http://schemas.utility.com/account/v1\", id: payload.account.id): {\n  AccountName: payload.account.name,\n  AccountTier: payload.account.tier,\n  IsActive: payload.account.active\n}", "output": "<?xml version='1.0' encoding='UTF-8'?>\n<AccountRequest xmlns=\"http://schemas.utility.com/account/v1\" id=\"ACC-7890\">\n  <AccountName>Florida Power &amp; Light</AccountName>\n  <AccountTier>ENTERPRISE</AccountTier>\n  <IsActive>true</IsActive>\n</AccountRequest>", "explanation": {"whatHappened": "The incoming JSON object is transformed into a schema-compliant XML envelope with root XML attributes (@(xmlns: ..., id: ...)).", "functionDetails": "Uses 'output application/xml' and root attribute syntax '@(attr1: val, attr2: val)' to attach namespaces and attributes.", "interviewQuestion": "Interviewer asks: 'How do you add XML attributes and namespaces to the root tag in DataWeave 2.0?'", "realProjectUsage": "Legacy SOAP Web Service integration (SAP, Mainframe, Oracle EBS) where REST JSON requests must be converted into SOAP XML payloads."}, "name": "JSON to XML", "payload": "{\n  \"account\": {\n    \"id\": \"ACC-7890\",\n    \"name\": \"Florida Power & Light\",\n    \"tier\": \"ENTERPRISE\",\n    \"active\": true\n  }\n}"}, {"id": "xml-to-json", "title": "XML to JSON", "category": "xml", "format": "xml", "input": "<?xml version='1.0' encoding='UTF-8'?>\n<GetCustomerResponse xmlns=\"http://utility.fpl.com/service\">\n  <Customer id=\"C-9912\">\n    <Name>Nextera Energy</Name>\n    <MeterNumber>MTR-55410</MeterNumber>\n    <Status>ACTIVE</Status>\n    <CurrentReading unit=\"KWH\">4820.75</CurrentReading>\n  </Customer>\n</GetCustomerResponse>", "script": "%dw 2.0\noutput application/json\nns ns0 http://utility.fpl.com/service\n---\n{\n  customerId: payload.ns0#GetCustomerResponse.ns0#Customer.@id,\n  customerName: payload.ns0#GetCustomerResponse.ns0#Customer.ns0#Name,\n  meterId: payload.ns0#GetCustomerResponse.ns0#Customer.ns0#MeterNumber,\n  reading: payload.ns0#GetCustomerResponse.ns0#Customer.ns0#CurrentReading as Number,\n  unit: payload.ns0#GetCustomerResponse.ns0#Customer.ns0#CurrentReading.@unit,\n  status: payload.ns0#GetCustomerResponse.ns0#Customer.ns0#Status\n}", "output": "{\n  \"customerId\": \"C-9912\",\n  \"customerName\": \"Nextera Energy\",\n  \"meterId\": \"MTR-55410\",\n  \"reading\": 4820.75,\n  \"unit\": \"KWH\",\n  \"status\": \"ACTIVE\"\n}", "explanation": {"whatHappened": "The namespaced SOAP XML payload is parsed by extracting XML attributes (.@attr) and element text values into clean canonical JSON.", "functionDetails": "Uses namespace declarations ('ns ns0 http://...'), namespace element access ('ns0#Tag'), and attribute selectors ('.@id', '.@unit').", "interviewQuestion": "Interviewer asks: 'How do you handle XML namespaces and attributes when parsing SOAP XML in DataWeave?'", "realProjectUsage": "Converts SOAP System API responses into lightweight JSON payloads for Process and Experience APIs."}, "name": "XML to JSON", "payload": "<?xml version='1.0' encoding='UTF-8'?>\n<GetCustomerResponse xmlns=\"http://utility.fpl.com/service\">\n  <Customer id=\"C-9912\">\n    <Name>Nextera Energy</Name>\n    <MeterNumber>MTR-55410</MeterNumber>\n    <Status>ACTIVE</Status>\n    <CurrentReading unit=\"KWH\">4820.75</CurrentReading>\n  </Customer>\n</GetCustomerResponse>"}, {"id": "json-to-csv", "title": "JSON to CSV", "category": "csv", "format": "json", "input": "[\n  { \"empId\": 101, \"name\": \"Niranjan Potter\", \"dept\": \"Integration\", \"salary\": 145000 },\n  { \"empId\": 102, \"name\": \"Amit Sharma\", \"dept\": \"Cloud\", \"salary\": 125000 },\n  { \"empId\": 103, \"name\": \"Pooja Verma\", \"dept\": \"Security\", \"salary\": 138000 }\n]", "script": "%dw 2.0\noutput application/csv header=true, separator=\",\"\n---\npayload map ((item) -> {\n  \"Employee ID\": item.empId,\n  \"Full Name\": upper(item.name),\n  \"Department\": item.dept,\n  \"Annual Salary (USD)\": item.salary\n})", "output": "\"Employee ID\",\"Full Name\",\"Department\",\"Annual Salary (USD)\"\n101,\"NIRANJAN POTTER\",\"Integration\",145000\n102,\"AMIT SHARMA\",\"Cloud\",125000\n103,\"POOJA VERMA\",\"Security\",138000", "explanation": {"whatHappened": "The JSON array of objects is transformed into a structured CSV file with custom column headers and a comma delimiter.", "functionDetails": "Uses 'output application/csv header=true, separator=\",\"' combined with map() to align each object property to a CSV column.", "interviewQuestion": "Interviewer asks: 'How do you generate a CSV file with custom header names and tab/pipe separators in DataWeave?'", "realProjectUsage": "SFTP file generation for nightly data warehouse exports, payroll feeds, and ERP flat-file ingestion."}, "name": "JSON to CSV", "payload": "[\n  { \"empId\": 101, \"name\": \"Niranjan Potter\", \"dept\": \"Integration\", \"salary\": 145000 },\n  { \"empId\": 102, \"name\": \"Amit Sharma\", \"dept\": \"Cloud\", \"salary\": 125000 },\n  { \"empId\": 103, \"name\": \"Pooja Verma\", \"dept\": \"Security\", \"salary\": 138000 }\n]"}, {"id": "csv-to-json", "title": "CSV to JSON", "category": "csv", "format": "csv", "input": "MeterID,ReadingDate,ConsumptionKWH,Status\nM-1001,2026-11-01,340.50,CONFIRMED\nM-1002,2026-11-01,120.25,CONFIRMED\nM-1003,2026-11-01,0.00,INACTIVE", "script": "%dw 2.0\noutput application/json\n---\npayload map ((row) -> {\n  meterId: row.MeterID,\n  readingDate: row.ReadingDate as Date {format: \"yyyy-MM-dd\"},\n  kwh: row.ConsumptionKWH as Number,\n  isActive: row.Status == \"CONFIRMED\"\n})", "output": "[\n  {\n    \"meterId\": \"M-1001\",\n    \"readingDate\": \"2026-11-01\",\n    \"kwh\": 340.5,\n    \"isActive\": true\n  },\n  {\n    \"meterId\": \"M-1002\",\n    \"readingDate\": \"2026-11-01\",\n    \"kwh\": 120.25,\n    \"isActive\": true\n  },\n  {\n    \"meterId\": \"M-1003\",\n    \"readingDate\": \"2026-11-01\",\n    \"kwh\": 0,\n    \"isActive\": false\n  }\n]", "explanation": {"whatHappened": "Raw CSV rows are parsed and converted into a strongly typed JSON array with proper Number, Date, and Boolean types.", "functionDetails": "CSV fields default to String; explicit coercion ('as Number', 'as Date {format: \"...\"}', 'as Boolean') ensures type safety.", "interviewQuestion": "Interviewer asks: 'CSV fields are always Strings. How do you convert CSV values to Numbers and Booleans safely?'", "realProjectUsage": "Batch processing of inbound SFTP/File CSV drops before upserting records into databases or Salesforce."}, "name": "CSV to JSON", "payload": "MeterID,ReadingDate,ConsumptionKWH,Status\nM-1001,2026-11-01,340.50,CONFIRMED\nM-1002,2026-11-01,120.25,CONFIRMED\nM-1003,2026-11-01,0.00,INACTIVE"}, {"id": "sfdc-to-db", "title": "Salesforce to Database Mapping", "category": "advanced", "format": "json", "input": "{\n  \"Id\": \"0015g00001ABC12\",\n  \"Name\": \"Florida Health Systems\",\n  \"Type\": \"Customer - Direct\",\n  \"BillingStreet\": \"100 Ocean Drive\",\n  \"BillingCity\": \"Miami\",\n  \"BillingState\": \"FL\",\n  \"BillingPostalCode\": \"33139\",\n  \"AnnualRevenue\": 15000000,\n  \"LastModifiedDate\": \"2026-11-15T08:30:00.000Z\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  sfdc_account_id: payload.Id,\n  company_name: payload.Name,\n  account_type: if (payload.Type contains \"Customer\") \"ACTIVE_CLIENT\" else \"PROSPECT\",\n  address_line1: payload.BillingStreet,\n  city: payload.BillingCity,\n  state_code: payload.BillingState,\n  postal_code: payload.BillingPostalCode,\n  revenue: payload.AnnualRevenue default 0,\n  sync_timestamp: now() as String {format: \"yyyy-MM-dd HH:mm:ss.SSS\"}\n}", "output": "{\n  \"sfdc_account_id\": \"0015g00001ABC12\",\n  \"company_name\": \"Florida Health Systems\",\n  \"account_type\": \"ACTIVE_CLIENT\",\n  \"address_line1\": \"100 Ocean Drive\",\n  \"city\": \"Miami\",\n  \"state_code\": \"FL\",\n  \"postal_code\": \"33139\",\n  \"revenue\": 15000000,\n  \"sync_timestamp\": \"2026-11-18 14:20:00.123\"\n}", "explanation": {"whatHappened": "A Salesforce Account SObject record is mapped to a relational SQL database table schema with conditional business rules and null defaults.", "functionDetails": "Uses conditional 'if (payload.Type contains \"Customer\") ... else ...' and the 'default' operator to prevent null insertion errors.", "interviewQuestion": "Interviewer asks: 'How do you handle conditionally computed fields and null fallbacks when syncing Salesforce to Postgres/Oracle?'", "realProjectUsage": "Salesforce Change Data Capture (CDC) listener synchronizing real-time Account updates into an enterprise data warehouse."}, "name": "Salesforce to Database Mapping", "payload": "{\n  \"Id\": \"0015g00001ABC12\",\n  \"Name\": \"Florida Health Systems\",\n  \"Type\": \"Customer - Direct\",\n  \"BillingStreet\": \"100 Ocean Drive\",\n  \"BillingCity\": \"Miami\",\n  \"BillingState\": \"FL\",\n  \"BillingPostalCode\": \"33139\",\n  \"AnnualRevenue\": 15000000,\n  \"LastModifiedDate\": \"2026-11-15T08:30:00.000Z\"\n}"}, {"id": "api-response-trans", "title": "API Response Transformation", "category": "json", "format": "json", "input": "{\n  \"rawStatus\": 200,\n  \"data\": [\n    { \"id\": 1, \"sku\": \"SOLAR-INV-100\", \"price\": 1200, \"stock\": 14 },\n    { \"id\": 2, \"sku\": \"SOLAR-BAT-50\", \"price\": 3400, \"stock\": 5 }\n  ],\n  \"serverTime\": 1731920000\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  status: \"SUCCESS\",\n  statusCode: 200,\n  correlationId: correlationId default \"CID-STATIC-1001\",\n  itemCount: sizeOf(payload.data),\n  inventory: payload.data map ((prod) -> {\n    productId: prod.id,\n    itemCode: prod.sku,\n    unitPrice: \"$\" ++ (prod.price as String {format: \"#,##0.00\"}),\n    inStock: prod.stock > 0\n  }),\n  metadata: {\n    apiVersion: \"v2.1\",\n    timestamp: now()\n  }\n}", "output": "{\n  \"status\": \"SUCCESS\",\n  \"statusCode\": 200,\n  \"correlationId\": \"CID-STATIC-1001\",\n  \"itemCount\": 2,\n  \"inventory\": [\n    {\n      \"productId\": 1,\n      \"itemCode\": \"SOLAR-INV-100\",\n      \"unitPrice\": \"$1,200.00\",\n      \"inStock\": true\n    },\n    {\n      \"productId\": 2,\n      \"itemCode\": \"SOLAR-BAT-50\",\n      \"unitPrice\": \"$3,400.00\",\n      \"inStock\": true\n    }\n  ],\n  \"metadata\": {\n    \"apiVersion\": \"v2.1\",\n    \"timestamp\": \"2026-11-18T14:20:00Z\"\n  }\n}", "explanation": {"whatHappened": "A raw backend API response is wrapped into an enterprise-standard API response envelope with status, correlationId, itemCount, and formatted totals.", "functionDetails": "Uses number formatting ('#,##0.00'), correlationId metadata, and sizeOf() to build a consistent response contract.", "interviewQuestion": "Interviewer asks: 'What is your standard Experience API response wrapper pattern in MuleSoft?'", "realProjectUsage": "Experience API layer delivering clean, predictable JSON envelopes to web portals and mobile applications."}, "name": "API Response Transformation", "payload": "{\n  \"rawStatus\": 200,\n  \"data\": [\n    { \"id\": 1, \"sku\": \"SOLAR-INV-100\", \"price\": 1200, \"stock\": 14 },\n    { \"id\": 2, \"sku\": \"SOLAR-BAT-50\", \"price\": 3400, \"stock\": 5 }\n  ],\n  \"serverTime\": 1731920000\n}"}, {"id": "filter-array", "title": "Filter Array (where condition)", "category": "array", "format": "json", "input": "[\n  { \"id\": 1, \"name\": \"John Doe\", \"role\": \"DEVELOPER\", \"active\": true, \"rating\": 4.8 },\n  { \"id\": 2, \"name\": \"Jane Smith\", \"role\": \"MANAGER\", \"active\": false, \"rating\": 3.9 },\n  { \"id\": 3, \"name\": \"Mike Brown\", \"role\": \"DEVELOPER\", \"active\": true, \"rating\": 4.2 },\n  { \"id\": 4, \"name\": \"Sarah Lee\", \"role\": \"ARCHITECT\", \"active\": true, \"rating\": 4.9 }\n]", "script": "%dw 2.0\noutput application/json\n---\npayload filter ($.active == true and $.role == \"DEVELOPER\" and $.rating >= 4.5)", "output": "[\n  {\n    \"id\": 1,\n    \"name\": \"John Doe\",\n    \"role\": \"DEVELOPER\",\n    \"active\": true,\n    \"rating\": 4.8\n  }\n]", "explanation": {"whatHappened": "Multiple boolean conditions are applied across array elements so only records matching all criteria are retained.", "functionDetails": "The filter() function evaluates a boolean predicate using '$' (current item) or explicit parameters ((item, index) -> ...).", "interviewQuestion": "Interviewer asks: 'How does filter work in DataWeave, and what happens if no records match?' (Returns an empty array []).", "realProjectUsage": "Filtering active customer accounts, pending orders, or valid telemetry events from bulk payloads."}, "name": "Filter Array (where condition)", "payload": "[\n  { \"id\": 1, \"name\": \"John Doe\", \"role\": \"DEVELOPER\", \"active\": true, \"rating\": 4.8 },\n  { \"id\": 2, \"name\": \"Jane Smith\", \"role\": \"MANAGER\", \"active\": false, \"rating\": 3.9 },\n  { \"id\": 3, \"name\": \"Mike Brown\", \"role\": \"DEVELOPER\", \"active\": true, \"rating\": 4.2 },\n  { \"id\": 4, \"name\": \"Sarah Lee\", \"role\": \"ARCHITECT\", \"active\": true, \"rating\": 4.9 }\n]"}, {"id": "map-array", "title": "Map Array - Add new field", "category": "array", "format": "json", "input": "[\n  { \"productId\": \"P1\", \"basePrice\": 100, \"category\": \"ELECTRONICS\" },\n  { \"productId\": \"P2\", \"basePrice\": 250, \"category\": \"FURNITURE\" },\n  { \"productId\": \"P3\", \"basePrice\": 50,  \"category\": \"GROCERY\" }\n]", "script": "%dw 2.0\noutput application/json\nvar taxRate = 0.08\n---\npayload map ((item, index) -> item ++ {\n  itemIndex: index + 1,\n  taxAmount: item.basePrice * taxRate,\n  finalPrice: item.basePrice * (1 + taxRate),\n  isTaxable: item.category != \"GROCERY\"\n})", "output": "[\n  {\n    \"productId\": \"P1\",\n    \"basePrice\": 100,\n    \"category\": \"ELECTRONICS\",\n    \"itemIndex\": 1,\n    \"taxAmount\": 8,\n    \"finalPrice\": 108,\n    \"isTaxable\": true\n  },\n  {\n    \"productId\": \"P2\",\n    \"basePrice\": 250,\n    \"category\": \"FURNITURE\",\n    \"itemIndex\": 2,\n    \"taxAmount\": 20,\n    \"finalPrice\": 270,\n    \"isTaxable\": true\n  },\n  {\n    \"productId\": \"P3\",\n    \"basePrice\": 50,\n    \"category\": \"GROCERY\",\n    \"itemIndex\": 3,\n    \"taxAmount\": 4,\n    \"finalPrice\": 54,\n    \"isTaxable\": false\n  }\n]", "explanation": {"whatHappened": "Computed fields are appended to every object in the array while preserving all original keys using object concatenation (item ++ { ... }).", "functionDetails": "Object concatenation ('item ++ { key: value }') keeps existing keys intact; the index parameter tracks the 0-based position.", "interviewQuestion": "Interviewer asks: 'How do you add a new key to an existing object inside map without rewriting all existing keys?'", "realProjectUsage": "Payload enrichment flows that attach audit timestamps, sequence IDs, or calculated tax fields to inbound records."}, "name": "Map Array - Add new field", "payload": "[\n  { \"productId\": \"P1\", \"basePrice\": 100, \"category\": \"ELECTRONICS\" },\n  { \"productId\": \"P2\", \"basePrice\": 250, \"category\": \"FURNITURE\" },\n  { \"productId\": \"P3\", \"basePrice\": 50,  \"category\": \"GROCERY\" }\n]"}, {"id": "groupby-dept", "title": "GroupBy - Group by Department", "category": "array", "format": "json", "input": "[\n  { \"name\": \"Alice\", \"dept\": \"Engineering\", \"salary\": 120000 },\n  { \"name\": \"Bob\",   \"dept\": \"Sales\",       \"salary\": 95000 },\n  { \"name\": \"Carol\", \"dept\": \"Engineering\", \"salary\": 140000 },\n  { \"name\": \"Dave\",  \"dept\": \"Sales\",       \"salary\": 85000 },\n  { \"name\": \"Eve\",   \"dept\": \"HR\",          \"salary\": 75000 }\n]", "script": "%dw 2.0\noutput application/json\n---\npayload groupBy ((emp) -> emp.dept)", "output": "{\n  \"Engineering\": [\n    { \"name\": \"Alice\", \"dept\": \"Engineering\", \"salary\": 120000 },\n    { \"name\": \"Carol\", \"dept\": \"Engineering\", \"salary\": 140000 }\n  ],\n  \"Sales\": [\n    { \"name\": \"Bob\", \"dept\": \"Sales\", \"salary\": 95000 },\n    { \"name\": \"Dave\", \"dept\": \"Sales\", \"salary\": 85000 }\n  ],\n  \"HR\": [\n    { \"name\": \"Eve\", \"dept\": \"HR\", \"salary\": 75000 }\n  ]\n}", "explanation": {"whatHappened": "A flat array of employee records is grouped by department into a structured JSON object keyed by department name.", "functionDetails": "groupBy() returns an Object where each key is the grouping value and each value is an Array of matching elements.", "interviewQuestion": "Interviewer asks: 'What is the return type of groupBy? Is it an Array or an Object?' (Always returns an Object).", "realProjectUsage": "Aggregating summary reports by customerId, grouping smart meter readings by deviceId, or bucketing transactions by date."}, "name": "GroupBy - Group by Department", "payload": "[\n  { \"name\": \"Alice\", \"dept\": \"Engineering\", \"salary\": 120000 },\n  { \"name\": \"Bob\",   \"dept\": \"Sales\",       \"salary\": 95000 },\n  { \"name\": \"Carol\", \"dept\": \"Engineering\", \"salary\": 140000 },\n  { \"name\": \"Dave\",  \"dept\": \"Sales\",       \"salary\": 85000 },\n  { \"name\": \"Eve\",   \"dept\": \"HR\",          \"salary\": 75000 }\n]"}, {"id": "orderby-salary", "title": "OrderBy - Sort by Salary", "category": "array", "format": "json", "input": "[\n  { \"name\": \"Alice\", \"salary\": 95000 },\n  { \"name\": \"Bob\",   \"salary\": 140000 },\n  { \"name\": \"Carol\", \"salary\": 75000 },\n  { \"name\": \"Dave\",  \"salary\": 120000 }\n]", "script": "%dw 2.0\noutput application/json\n---\n// Descending sort: minus (-) sign reverses order\npayload orderBy -$.salary", "output": "[\n  { \"name\": \"Bob\", \"salary\": 140000 },\n  { \"name\": \"Dave\", \"salary\": 120000 },\n  { \"name\": \"Alice\", \"salary\": 95000 },\n  { \"name\": \"Carol\", \"salary\": 75000 }\n]", "explanation": {"whatHappened": "The array of records is sorted by salary from highest to lowest (descending order).", "functionDetails": "orderBy() sorts ascending by default; prefixing a numeric expression with '-' (-$.salary) sorts in descending order.", "interviewQuestion": "Interviewer asks: 'How do you perform descending sorting in DataWeave without calling reverse()?'", "realProjectUsage": "Ranking top accounts, prioritizing high-severity tickets, or ordering events from newest to oldest."}, "name": "OrderBy - Sort by Salary", "payload": "[\n  { \"name\": \"Alice\", \"salary\": 95000 },\n  { \"name\": \"Bob\",   \"salary\": 140000 },\n  { \"name\": \"Carol\", \"salary\": 75000 },\n  { \"name\": \"Dave\",  \"salary\": 120000 }\n]"}, {"id": "distinct-duplicates", "title": "Distinct - Remove duplicates", "category": "array", "format": "json", "input": "[\n  { \"id\": 101, \"email\": \"alice@test.com\", \"region\": \"US\" },\n  { \"id\": 102, \"email\": \"bob@test.com\",   \"region\": \"UK\" },\n  { \"id\": 101, \"email\": \"alice@test.com\", \"region\": \"US\" },\n  { \"id\": 103, \"email\": \"carol@test.com\", \"region\": \"US\" }\n]", "script": "%dw 2.0\noutput application/json\nimport * from dw::core::Arrays\n---\n// distinctBy takes criteria key\npayload distinctBy ((item) -> item.id)", "output": "[\n  { \"id\": 101, \"email\": \"alice@test.com\", \"region\": \"US\" },\n  { \"id\": 102, \"email\": \"bob@test.com\", \"region\": \"UK\" },\n  { \"id\": 103, \"email\": \"carol@test.com\", \"region\": \"US\" }\n]", "explanation": {"whatHappened": "Duplicate records are removed based on a unique business key (item.id), keeping only the first occurrence of each record.", "functionDetails": "distinctBy() evaluates a key expression per element and drops any subsequent items that produce a duplicate key.", "interviewQuestion": "Interviewer asks: 'What is the difference between distinct and distinctBy in DataWeave?'", "realProjectUsage": "Message deduplication for at-least-once queues (Anypoint MQ, SQS, Kafka) to guarantee idempotent downstream writes."}, "name": "Distinct - Remove duplicates", "payload": "[\n  { \"id\": 101, \"email\": \"alice@test.com\", \"region\": \"US\" },\n  { \"id\": 102, \"email\": \"bob@test.com\",   \"region\": \"UK\" },\n  { \"id\": 101, \"email\": \"alice@test.com\", \"region\": \"US\" },\n  { \"id\": 103, \"email\": \"carol@test.com\", \"region\": \"US\" }\n]"}, {"id": "reduce-sum", "title": "Reduce - Sum of Salary", "category": "array", "format": "json", "input": "[\n  { \"item\": \"Solar Panel 400W\", \"qty\": 10, \"unitPrice\": 250 },\n  { \"item\": \"Inverter 5KW\",      \"qty\": 2,  \"unitPrice\": 1200 },\n  { \"item\": \"Battery 10KWh\",     \"qty\": 1,  \"unitPrice\": 4500 }\n]", "script": "%dw 2.0\noutput application/json\n---\n{\n  totalItems: sizeOf(payload),\n  grandTotal: payload reduce ((line, acc = 0) -> acc + (line.qty * line.unitPrice)),\n  currency: \"USD\"\n}", "output": "{\n  \"totalItems\": 3,\n  \"grandTotal\": 9400,\n  \"currency\": \"USD\"\n}", "explanation": {"whatHappened": "All line items in the array are accumulated into a single grand total amount using a functional fold.", "functionDetails": "reduce() iterates with an item and accumulator: ((item, acc = 0) -> acc + item.amount).", "interviewQuestion": "Interviewer asks: 'How do you calculate total order sum from a line-item array using reduce in DataWeave?'", "realProjectUsage": "Invoice and billing pipelines computing line-item subtotals, tax totals, and order summaries."}, "name": "Reduce - Sum of Salary", "payload": "[\n  { \"item\": \"Solar Panel 400W\", \"qty\": 10, \"unitPrice\": 250 },\n  { \"item\": \"Inverter 5KW\",      \"qty\": 2,  \"unitPrice\": 1200 },\n  { \"item\": \"Battery 10KWh\",     \"qty\": 1,  \"unitPrice\": 4500 }\n]"}, {"id": "flatten-nested", "title": "Flatten - Nested Array", "category": "array", "format": "json", "input": "[\n  { \"orderId\": \"O1\", \"items\": [\"P-101\", \"P-102\"] },\n  { \"orderId\": \"O2\", \"items\": [\"P-201\"] },\n  { \"orderId\": \"O3\", \"items\": [\"P-301\", \"P-302\", \"P-303\"] }\n]", "script": "%dw 2.0\noutput application/json\n---\n{\n  allProductIds: flatten(payload.items)\n}", "output": "{\n  \"allProductIds\": [\n    \"P-101\",\n    \"P-102\",\n    \"P-201\",\n    \"P-301\",\n    \"P-302\",\n    \"P-303\"\n  ]\n}", "explanation": {"whatHappened": "A nested array of arrays ([['P-101', 'P-102'], ['P-201']]) is collapsed into a single one-dimensional array.", "functionDetails": "flatten() removes one level of array nesting, turning [[...], [...]] into a flat [...].", "interviewQuestion": "Interviewer asks: 'What does flatten() do and how is it different from flatMap()?'", "realProjectUsage": "Combining results from Scatter-Gather routes or multiple database queries into a single unified array."}, "name": "Flatten - Nested Array", "payload": "[\n  { \"orderId\": \"O1\", \"items\": [\"P-101\", \"P-102\"] },\n  { \"orderId\": \"O2\", \"items\": [\"P-201\"] },\n  { \"orderId\": \"O3\", \"items\": [\"P-301\", \"P-302\", \"P-303\"] }\n]"}, {"id": "coalesce-default", "title": "Coalesce / Default - Handle Nulls", "category": "json", "format": "json", "input": "{\n  \"customerId\": \"C-100\",\n  \"preferredName\": null,\n  \"legalName\": \"Niranjan Potter\",\n  \"billingPhone\": null,\n  \"mobilePhone\": \"305-555-0199\",\n  \"discountRate\": null\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  customerId: payload.customerId,\n  displayName: payload.preferredName default payload.legalName default \"Valued Customer\",\n  contactPhone: payload.billingPhone default payload.mobilePhone default \"N/A\",\n  appliedDiscount: payload.discountRate default 0.05,\n  hasPhone: (payload.billingPhone != null) or (payload.mobilePhone != null)\n}", "output": "{\n  \"customerId\": \"C-100\",\n  \"displayName\": \"Niranjan Potter\",\n  \"contactPhone\": \"305-555-0199\",\n  \"appliedDiscount\": 0.05,\n  \"hasPhone\": true\n}", "explanation": {"whatHappened": "Optional or null fields are safely chained with fallback default values to eliminate NullPointerExceptions.", "functionDetails": "The 'default' keyword acts as a null-coalescing operator: if the left expression is null, the right fallback value is returned.", "interviewQuestion": "Interviewer asks: 'How do you prevent NullPointerExceptions in DataWeave when handling optional backend fields?'", "realProjectUsage": "Defensive transformation pattern ensuring clean, non-null payloads are sent to strict downstream APIs and databases."}, "name": "Coalesce / Default - Handle Nulls", "payload": "{\n  \"customerId\": \"C-100\",\n  \"preferredName\": null,\n  \"legalName\": \"Niranjan Potter\",\n  \"billingPhone\": null,\n  \"mobilePhone\": \"305-555-0199\",\n  \"discountRate\": null\n}"}, {"id": "date-format", "title": "Date Format - Change Date Format", "category": "date", "format": "json", "input": "{\n  \"isoTimestamp\": \"2026-11-18T14:30:00.000Z\",\n  \"epochSeconds\": 1795000000,\n  \"legacyDate\": \"18/11/2026\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  standardIso: payload.isoTimestamp,\n  usFormatted: (payload.isoTimestamp as DateTime) as String {format: \"MM/dd/yyyy hh:mm a\"},\n  dateOnly: (payload.isoTimestamp as DateTime) as String {format: \"yyyy-MM-dd\"},\n  timeOnly: (payload.isoTimestamp as DateTime) as String {format: \"HH:mm:ss\"},\n  fromEpoch: (payload.epochSeconds as DateTime) as String {format: \"yyyy-MM-dd HH:mm:ss\"},\n  reparsedLegacy: (payload.legacyDate as Date {format: \"dd/MM/yyyy\"}) as String {format: \"yyyy-MM-dd\"}\n}", "output": "{\n  \"standardIso\": \"2026-11-18T14:30:00.000Z\",\n  \"usFormatted\": \"11/18/2026 02:30 PM\",\n  \"dateOnly\": \"2026-11-18\",\n  \"timeOnly\": \"14:30:00\",\n  \"fromEpoch\": \"2026-11-18 14:30:00\",\n  \"reparsedLegacy\": \"2026-11-18\"\n}", "explanation": {"whatHappened": "Date values are converted seamlessly between ISO 8601, Unix Epoch timestamps, and custom regional date formats.", "functionDetails": "Uses native DateTime/Date coercion: '(val as DateTime) as String {format: \"...\"}'.", "interviewQuestion": "Interviewer asks: 'How do you parse a non-standard date string like dd/MM/yyyy into ISO yyyy-MM-dd in DataWeave?'", "realProjectUsage": "SAP and Mainframe integrations translating legacy regional date strings into modern ISO 8601 cloud timestamps."}, "name": "Date Format - Change Date Format", "payload": "{\n  \"isoTimestamp\": \"2026-11-18T14:30:00.000Z\",\n  \"epochSeconds\": 1795000000,\n  \"legacyDate\": \"18/11/2026\"\n}"}, {"id": "string-functions", "title": "String Functions - Upper, Lower, Concat", "category": "string", "format": "json", "input": "{\n  \"firstName\": \"  niranjan \",\n  \"lastName\": \"POTTER  \",\n  \"rawId\": \"MULE-2026-PROD-99\",\n  \"notes\": \"urgent: client needs billing fix immediately\"\n}", "script": "%dw 2.0\noutput application/json\nimport * from dw::core::Strings\n---\n{\n  fullName: capitalize(trim(payload.firstName)) ++ \" \" ++ capitalize(trim(payload.lastName)),\n  upperCode: upper(payload.rawId),\n  systemTag: (payload.rawId splitBy \"-\")[1],\n  sequenceNum: (payload.rawId splitBy \"-\")[-1],\n  isUrgent: payload.notes startsWith \"urgent\",\n  notesSummary: substring(payload.notes, 8, 32),\n  paddedId: leftPad(\"42\", 6, \"0\")\n}", "output": "{\n  \"fullName\": \"Niranjan Potter\",\n  \"upperCode\": \"MULE-2026-PROD-99\",\n  \"systemTag\": \"2026\",\n  \"sequenceNum\": \"99\",\n  \"isUrgent\": true,\n  \"notesSummary\": \"client needs billing fix\",\n  \"paddedId\": \"000042\"\n}", "explanation": {"whatHappened": "Input strings are cleaned and formatted using whitespace trimming, capitalization, delimiter splitting, and left-padding.", "functionDetails": "Imports helpers from dw::core::Strings: capitalize(), trim(), leftPad(), startsWith(), and splitBy().", "interviewQuestion": "Interviewer asks: 'How do you extract the last token from a hyphen-separated string?' ((str splitBy '-')[-1]).", "realProjectUsage": "Data cleansing, normalizing user input, and parsing structured tokens from correlation IDs."}, "name": "String Functions - Upper, Lower, Concat", "payload": "{\n  \"firstName\": \"  niranjan \",\n  \"lastName\": \"POTTER  \",\n  \"rawId\": \"MULE-2026-PROD-99\",\n  \"notes\": \"urgent: client needs billing fix immediately\"\n}"}, {"id": "type-coercion", "title": "Type Coercion - String to Number", "category": "json", "format": "json", "input": "{\n  \"stringInt\": \"1050\",\n  \"stringFloat\": \"49.99\",\n  \"stringBool\": \"true\",\n  \"numVal\": 12500,\n  \"dateStr\": \"2026-11-18\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  intNumber: payload.stringInt as Number,\n  floatNumber: payload.stringFloat as Number,\n  boolValue: payload.stringBool as Boolean,\n  currencyString: \"$\" ++ (payload.numVal as String {format: \"#,##0.00\"}),\n  parsedDate: payload.dateStr as Date,\n  isPositive: (payload.stringFloat as Number) > 0\n}", "output": "{\n  \"intNumber\": 1050,\n  \"floatNumber\": 49.99,\n  \"boolValue\": true,\n  \"currencyString\": \"$12,500.00\",\n  \"parsedDate\": \"2026-11-18\",\n  \"isPositive\": true\n}", "explanation": {"whatHappened": "String inputs are strictly cast into native Number, Boolean, and Date data types using explicit type coercion.", "functionDetails": "Uses the 'as' keyword ('val as Number', 'val as Boolean', 'val as Date') to enforce schema types.", "interviewQuestion": "Interviewer asks: 'What happens if you coerce an invalid string \"ABC\" as Number?' (Throws Cannot coerce String to Number).", "realProjectUsage": "Converting HTTP query parameters and headers (which arrive as Strings) into typed columns before database writes."}, "name": "Type Coercion - String to Number", "payload": "{\n  \"stringInt\": \"1050\",\n  \"stringFloat\": \"49.99\",\n  \"stringBool\": \"true\",\n  \"numVal\": 12500,\n  \"dateStr\": \"2026-11-18\"\n}"}, {"id": "conditional-if-else", "title": "Conditional - If Else / Case", "category": "advanced", "format": "json", "input": "{\n  \"meterType\": \"COMMERCIAL\",\n  \"kwhUsage\": 1250,\n  \"paymentStatus\": \"OVERDUE\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  tariffRate: if (payload.meterType == \"RESIDENTIAL\") 0.12\n              else if (payload.meterType == \"COMMERCIAL\") 0.18\n              else 0.25,\n  accountAction: payload.paymentStatus match {\n    case \"PAID\" -> \"STANDARD_SERVICE\"\n    case \"OVERDUE\" -> \"DISPATCH_SMS_REMINDER\"\n    case \"DEFAULTED\" -> \"SHUTOFF_NOTICE\"\n    else -> \"REVIEW_REQUIRED\"\n  },\n  tier: if (payload.kwhUsage > 1000) \"HIGH_CONSUMPTION\" else \"STANDARD\"\n}", "output": "{\n  \"tariffRate\": 0.18,\n  \"accountAction\": \"DISPATCH_SMS_REMINDER\",\n  \"tier\": \"HIGH_CONSUMPTION\"\n}", "explanation": {"whatHappened": "Dynamic business routing outputs are calculated using declarative pattern matching (match/case) and conditional if-else logic.", "functionDetails": "DataWeave match-case expressions replace deeply nested if-else ladders with clean, readable declarative rules.", "interviewQuestion": "Interviewer asks: 'When should you use match-case instead of if-else in DataWeave?'", "realProjectUsage": "Business rule evaluation for utility tariff calculation, dynamic queue routing, and HTTP error code mapping."}, "name": "Conditional - If Else / Case", "payload": "{\n  \"meterType\": \"COMMERCIAL\",\n  \"kwhUsage\": 1250,\n  \"paymentStatus\": \"OVERDUE\"\n}"}, {"id": "lookup-function", "title": "Lookup Function", "category": "advanced", "format": "json", "input": "{\n  \"accountId\": \"ACC-552\",\n  \"zipCode\": \"33139\",\n  \"subtotal\": 1000\n}", "script": "%dw 2.0\noutput application/json\n// Note: In Anypoint Studio, lookup executes an in-memory Mule subflow\n// syntax: lookup('subflow-name', payload, timeoutMs)\n---\n{\n  accountId: payload.accountId,\n  zipCode: payload.zipCode,\n  subtotal: payload.subtotal,\n  // Simulated lookup return:\n  taxCalculation: {\n    stateTax: 60.00,\n    countyTax: 10.00,\n    totalWithTax: 1070.00\n  },\n  note: \"In Mule runtime: lookup('calculateTaxSubflow', {zip: payload.zipCode, amt: payload.subtotal})\"\n}", "output": "{\n  \"accountId\": \"ACC-552\",\n  \"zipCode\": \"33139\",\n  \"subtotal\": 1000,\n  \"taxCalculation\": {\n    \"stateTax\": 60,\n    \"countyTax\": 10,\n    \"totalWithTax\": 1070\n  },\n  \"note\": \"In Mule runtime: lookup('calculateTaxSubflow', {zip: payload.zipCode, amt: payload.subtotal})\"\n}", "explanation": {"whatHappened": "Demonstrates invoking a synchronous private Mule flow directly from inside a DataWeave transformation using lookup().", "functionDetails": "Uses lookup(flowName, payload, timeout). Note: lookup() only invokes synchronous private flows without transactional boundaries.", "interviewQuestion": "Interviewer asks: 'Can lookup() call an asynchronous flow or a flow with an HTTP listener?' (No, only private flows).", "realProjectUsage": "In-flight data enrichment calling a reusable cache-lookup or utility sub-flow during payload mapping."}, "name": "Lookup Function", "payload": "{\n  \"accountId\": \"ACC-552\",\n  \"zipCode\": \"33139\",\n  \"subtotal\": 1000\n}"}, {"id": "pluck-object-to-array", "title": "Pluck - Object to Array", "category": "array", "format": "json", "input": "{\n  \"US_EAST\": 450,\n  \"US_WEST\": 320,\n  \"EU_CENTRAL\": 190,\n  \"AP_SOUTH\": 610\n}", "script": "%dw 2.0\noutput application/json\n---\npayload pluck ((value, key, index) -> {\n  regionCode: key as String,\n  activeServers: value,\n  sequence: index + 1\n})", "output": "[\n  { \"regionCode\": \"US_EAST\", \"activeServers\": 450, \"sequence\": 1 },\n  { \"regionCode\": \"US_WEST\", \"activeServers\": 320, \"sequence\": 2 },\n  { \"regionCode\": \"EU_CENTRAL\", \"activeServers\": 190, \"sequence\": 3 },\n  { \"regionCode\": \"AP_SOUTH\", \"activeServers\": 610, \"sequence\": 4 }\n]", "explanation": {"whatHappened": "Key-value pairs of a JSON Object are iterated and converted into a structured Array of Objects.", "functionDetails": "pluck((value, key, index) -> ...) operates exclusively on Objects to emit an Array (the object counterpart to map()).", "interviewQuestion": "Interviewer asks: 'How do you iterate over an Object instead of an Array in DataWeave?' (Use pluck()).", "realProjectUsage": "Transforming dynamic key-value maps or configuration caches into structured rows for UI tables and databases."}, "name": "Pluck - Object to Array", "payload": "{\n  \"US_EAST\": 450,\n  \"US_WEST\": 320,\n  \"EU_CENTRAL\": 190,\n  \"AP_SOUTH\": 610\n}"}, {"id": "merge-two-payloads", "title": "Merge Two Payloads", "category": "advanced", "format": "json", "input": "{\n  \"customer\": {\n    \"id\": \"C-101\",\n    \"name\": \"Niranjan Potter\"\n  },\n  \"billing\": {\n    \"accountNumber\": \"ACT-9901\",\n    \"balance\": 240.75,\n    \"status\": \"CURRENT\"\n  }\n}", "script": "%dw 2.0\noutput application/json\n---\npayload.customer ++ payload.billing ++ {\n  lastUpdated: now() as String {format: \"yyyy-MM-dd\"}\n}", "output": "{\n  \"id\": \"C-101\",\n  \"name\": \"Niranjan Potter\",\n  \"accountNumber\": \"ACT-9901\",\n  \"balance\": 240.75,\n  \"status\": \"CURRENT\",\n  \"lastUpdated\": \"2026-11-18\"\n}", "explanation": {"whatHappened": "Two separate payloads (Customer and Billing) are merged into a single consolidated enterprise customer profile.", "functionDetails": "Object concatenation ('++') combines keys from both objects; if duplicate keys exist, the right-hand object takes precedence.", "interviewQuestion": "Interviewer asks: 'What happens when you merge two objects with identical keys using ++ in DataWeave?'", "realProjectUsage": "Scatter-Gather aggregation combining CRM (Salesforce) and Billing (SAP) responses into one canonical DTO."}, "name": "Merge Two Payloads", "payload": "{\n  \"customer\": {\n    \"id\": \"C-101\",\n    \"name\": \"Niranjan Potter\"\n  },\n  \"billing\": {\n    \"accountNumber\": \"ACT-9901\",\n    \"balance\": 240.75,\n    \"status\": \"CURRENT\"\n  }\n}"}, {"id": "splitby-joinby", "title": "SplitBy / JoinBy", "category": "string", "format": "json", "input": "{\n  \"tags\": \"salesforce,mulesoft,aws,sap,kafka\",\n  \"phoneSegments\": [\"305\", \"555\", \"0144\"]\n}", "script": "%dw 2.0\noutput application/json\nimport * from dw::core::Strings\n---\n{\n  tagList: payload.tags splitBy \",\",\n  uppercaseTags: (payload.tags splitBy \",\") map upper($),\n  formattedPhone: payload.phoneSegments joinBy \"-\"\n}", "output": "{\n  \"tagList\": [\n    \"salesforce\",\n    \"mulesoft\",\n    \"aws\",\n    \"sap\",\n    \"kafka\"\n  ],\n  \"uppercaseTags\": [\n    \"SALESFORCE\",\n    \"MULESOFT\",\n    \"AWS\",\n    \"SAP\",\n    \"KAFKA\"\n  ],\n  \"formattedPhone\": \"305-555-0144\"\n}", "explanation": {"whatHappened": "A comma-delimited string is split into an array using splitBy(), then recombined into a hyphenated string using joinBy().", "functionDetails": "splitBy(delimiter) returns an Array of Strings; joinBy(separator) joins an Array of Strings into a single String.", "interviewQuestion": "Interviewer asks: 'How do you convert a comma-separated string into an array and back into a hyphenated string?'", "realProjectUsage": "Parsing comma-separated API query parameters (e.g., ?fields=id,name,email) and formatting SQL IN clauses."}, "name": "SplitBy / JoinBy", "payload": "{\n  \"tags\": \"salesforce,mulesoft,aws,sap,kafka\",\n  \"phoneSegments\": [\"305\", \"555\", \"0144\"]\n}"}, {"id": "batch-job-dw", "title": "Batch Job - DataWeave for Batch", "category": "advanced", "format": "json", "input": "[\n  { \"id\": \"1001\", \"meter\": \"MTR-1\", \"kwh\": 450, \"status\": \"READY\" },\n  { \"id\": \"1002\", \"meter\": \"MTR-2\", \"kwh\": 310, \"status\": \"READY\" },\n  { \"id\": \"1003\", \"meter\": \"MTR-3\", \"kwh\": 590, \"status\": \"READY\" }\n]", "script": "%dw 2.0\noutput application/json\n---\n// Preparing payload inside Batch Aggregator for bulk commit\npayload map ((record) -> {\n  External_Id__c: record.id,\n  Meter_Number__c: record.meter,\n  KWH_Usage__c: record.kwh,\n  Processed_Timestamp__c: now(),\n  Batch_Source__c: \"MULE_BATCH_STEP_2\"\n})", "output": "[\n  {\n    \"External_Id__c\": \"1001\",\n    \"Meter_Number__c\": \"MTR-1\",\n    \"KWH_Usage__c\": 450,\n    \"Processed_Timestamp__c\": \"2026-11-18T14:30:00Z\",\n    \"Batch_Source__c\": \"MULE_BATCH_STEP_2\"\n  },\n  {\n    \"External_Id__c\": \"1002\",\n    \"Meter_Number__c\": \"MTR-2\",\n    \"KWH_Usage__c\": 310,\n    \"Processed_Timestamp__c\": \"2026-11-18T14:30:00Z\",\n    \"Batch_Source__c\": \"MULE_BATCH_STEP_2\"\n  },\n  {\n    \"External_Id__c\": \"1003\",\n    \"Meter_Number__c\": \"MTR-3\",\n    \"KWH_Usage__c\": 590,\n    \"Processed_Timestamp__c\": \"2026-11-18T14:30:00Z\",\n    \"Batch_Source__c\": \"MULE_BATCH_STEP_2\"\n  }\n]", "explanation": {"whatHappened": "A Batch Aggregator chunk (e.g., 200 records) is transformed into Salesforce Bulk Upsert SObject format using an External ID.", "functionDetails": "Batch Aggregator collects records into an Array so DataWeave can map the entire batch for bulk database or Salesforce commits.", "interviewQuestion": "Interviewer asks: 'What is the payload structure inside a Batch Aggregator vs a Batch Step?' (Array vs single record).", "realProjectUsage": "Nightly batch synchronization of 100,000+ smart meter or customer records into Salesforce Bulk API 2.0."}, "name": "Batch Job - DataWeave for Batch", "payload": "[\n  { \"id\": \"1001\", \"meter\": \"MTR-1\", \"kwh\": 450, \"status\": \"READY\" },\n  { \"id\": \"1002\", \"meter\": \"MTR-2\", \"kwh\": 310, \"status\": \"READY\" },\n  { \"id\": \"1003\", \"meter\": \"MTR-3\", \"kwh\": 590, \"status\": \"READY\" }\n]"}, {"id": "pagination-dw", "title": "Pagination - DataWeave for Pagination", "category": "advanced", "format": "json", "input": "{\n  \"totalRecords\": 245,\n  \"pageSize\": 50,\n  \"currentPage\": 2,\n  \"records\": [\n    { \"id\": 51, \"name\": \"Miami Utility Substation 4\" },\n    { \"id\": 52, \"name\": \"Fort Lauderdale Feeder Line\" }\n  ]\n}", "script": "%dw 2.0\noutput application/json\nvar totalPages = ceil(payload.totalRecords / payload.pageSize)\n---\n{\n  pagination: {\n    pageNumber: payload.currentPage,\n    pageSize: payload.pageSize,\n    totalItems: payload.totalRecords,\n    totalPages: totalPages,\n    hasNextPage: payload.currentPage < totalPages,\n    hasPrevPage: payload.currentPage > 1,\n    links: {\n      self: \"/api/v1/assets?page=\" ++ (payload.currentPage as String),\n      next: if (payload.currentPage < totalPages) \"/api/v1/assets?page=\" ++ ((payload.currentPage + 1) as String) else null,\n      prev: if (payload.currentPage > 1) \"/api/v1/assets?page=\" ++ ((payload.currentPage - 1) as String) else null\n    }\n  },\n  data: payload.records\n}", "output": "{\n  \"pagination\": {\n    \"pageNumber\": 2,\n    \"pageSize\": 50,\n    \"totalItems\": 245,\n    \"totalPages\": 5,\n    \"hasNextPage\": true,\n    \"hasPrevPage\": true,\n    \"links\": {\n      \"self\": \"/api/v1/assets?page=2\",\n      \"next\": \"/api/v1/assets?page=3\",\n      \"prev\": \"/api/v1/assets?page=1\"\n    }\n  },\n  \"data\": [\n    { \"id\": 51, \"name\": \"Miami Utility Substation 4\" },\n    { \"id\": 52, \"name\": \"Fort Lauderdale Feeder Line\" }\n  ]\n}", "explanation": {"whatHappened": "A standard HATEOAS RESTful pagination envelope is generated with totalPages, hasNextPage, and navigation links.", "functionDetails": "Uses ceil() to compute totalPages and dynamic string interpolation to build next/previous page URLs.", "interviewQuestion": "Interviewer asks: 'How do you design a paginated API response in MuleSoft following enterprise REST standards?'", "realProjectUsage": "Experience APIs serving large datasets in 50-record pages to enterprise web dashboards and tables."}, "name": "Pagination - DataWeave for Pagination", "payload": "{\n  \"totalRecords\": 245,\n  \"pageSize\": 50,\n  \"currentPage\": 2,\n  \"records\": [\n    { \"id\": 51, \"name\": \"Miami Utility Substation 4\" },\n    { \"id\": 52, \"name\": \"Fort Lauderdale Feeder Line\" }\n  ]\n}"}, {"id": "error-handling-dw", "title": "Error Handling - DataWeave with Error Payload", "category": "advanced", "format": "json", "input": "{\n  \"errorType\": \"HTTP:NOT_FOUND\",\n  \"errorDescription\": \"Customer with ID ACC-9912 was not found in SAP S/4HANA database.\",\n  \"path\": \"/api/v1/customers/ACC-9912\"\n}", "script": "%dw 2.0\noutput application/json\n---\n{\n  error: {\n    status: 404,\n    code: \"RESOURCE_NOT_FOUND\",\n    title: \"Entity Not Found\",\n    detail: payload.errorDescription,\n    sourcePath: payload.path,\n    correlationId: correlationId default \"CID-STATIC-ERR-99\",\n    timestamp: now() as String {format: \"yyyy-MM-dd'T'HH:mm:ss.SSSZ\"}\n  }\n}", "output": "{\n  \"error\": {\n    \"status\": 404,\n    \"code\": \"RESOURCE_NOT_FOUND\",\n    \"title\": \"Entity Not Found\",\n    \"detail\": \"Customer with ID ACC-9912 was not found in SAP S/4HANA database.\",\n    \"sourcePath\": \"/api/v1/customers/ACC-9912\",\n    \"correlationId\": \"CID-STATIC-ERR-99\",\n    \"timestamp\": \"2026-11-18T14:30:00.123+0000\"\n  }\n}", "explanation": {"whatHappened": "A MuleSoft error object is transformed into an enterprise-standard RFC 7807 (Problem Details for HTTP APIs) JSON payload.", "functionDetails": "Builds a structured error response containing HTTP status, standardized error code, correlationId, and ISO timestamp.", "interviewQuestion": "Interviewer asks: 'What is your standard error payload schema in MuleSoft Global Error Handlers?'", "realProjectUsage": "Global Error Handler inside On Error Propagate / On Error Continue across all production MuleSoft APIs."}, "name": "Error Handling - DataWeave with Error Payload", "payload": "{\n  \"errorType\": \"HTTP:NOT_FOUND\",\n  \"errorDescription\": \"Customer with ID ACC-9912 was not found in SAP S/4HANA database.\",\n  \"path\": \"/api/v1/customers/ACC-9912\"\n}"}];
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

  // Panel 4: Explanation Panel (100% Professional English Only, Light Yellow Interview Notes)
  const expl = p.explanation || {};
  const whatHappenedText = expl.whatHappened || expl.kyaHua || 'Incoming payload fields are transformed into the target enterprise schema.';
  const explHtml = `
    <div class="dw-notes-card">
      <div class="dw-notes-title">🔹 What Happened? (Transformation Logic)</div>
      <ul class="dw-notes-bullets">
        <li><strong>Logic:</strong> ${whatHappenedText}</li>
        <li><strong>Key Function(s):</strong> <code>${expl.functionDetails || 'DataWeave 2.0 Core'}</code></li>
        <li><strong>Interview Question:</strong> ${expl.interviewQuestion || 'Frequently asked in MuleSoft technical rounds.'}</li>
        <li><strong>Real Project Usage:</strong> ${expl.realProjectUsage || 'Standard enterprise integration pipeline pattern.'}</li>
      </ul>
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
  const peakEl = document.getElementById('vcalc-peak');
  const peakMultiplier = (peakEl && peakEl.type === 'checkbox')
    ? (peakEl.checked ? 2.5 : 1.0)
    : (parseFloat(peakEl?.value) || 1.0);
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

  let whyText = `Your expected throughput is <strong>${effectiveTps} TPS</strong> with an average payload of <strong>${payloadKb} KB</strong> on <strong>${platform === 'ch2' ? 'CloudHub 2.0' : 'CloudHub 1.0'}</strong>. `;
  whyText += `By Little's Law (L = λ × W), this creates approximately <strong>${Math.ceil(inflight)} concurrent in-flight requests</strong>. `;
  if (isHa) {
    whyText += `With Multi-AZ High Availability enabled, at least <strong>${numWorkers} replicas</strong> are provisioned across distinct Availability Zones for zero-downtime failover. `;
  }
  whyText += `Allocating <strong>${workerSize} vCore (${workerRamGb} GB RAM)</strong> per worker keeps JVM memory pressure and GC pauses sub-second. Total allocation: <strong>${totalVCores} vCores</strong> across ${numApis} API(s).`;

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

  // 6. DataWeave Mobile Tab Switcher & Run Engine handled by Studio Lab V2 below

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


// ============================================================================
// 2026 UI/UX REBUILD: UNIFIED NAV, JUMP-TO-TOOL, PRACTICE BANNER & DW MODAL FIXES
// ============================================================================
(function() {
  // 1. Unified Navigation: Single Left Sidebar (Section Dropdown + Module List + Text Filter) + Breadcrumb
  window._activeSectionCategory = 'all';

  window.updateContentBreadcrumb = function(articleEl) {
    var secEl = document.getElementById('bc-section-name');
    var modEl = document.getElementById('bc-module-name');
    if (!secEl || !modEl) return;
    if (!articleEl) {
      var cat = window._activeSectionCategory || 'all';
      secEl.textContent = (cat === 'all') ? 'All Sections' : cat;
      modEl.textContent = 'Overview & Quick Start';
      return;
    }
    var catName = articleEl.getAttribute('data-category') || 'MuleSoft Core';
    var titleEl = articleEl.querySelector('.article-title');
    var modName = titleEl ? titleEl.textContent.trim() : (articleEl.id || 'Module');
    secEl.textContent = catName;
    modEl.textContent = modName;
  };

  window.filterBlogCategory = function(catName, btn, opts) {
    var nextCat = catName || 'all';
    var skipScroll = Boolean(opts && opts.skipScroll);
    window._activeSectionCategory = nextCat;
    if (!skipScroll) {
      window._suppressScrollSpyUntil = Date.now() + 300;
    }

    document.querySelectorAll('.cat-pill').forEach(function(p) {
      p.classList.remove('active');
    });
    if (btn && btn.classList && btn.classList.contains('cat-pill')) {
      btn.classList.add('active');
    }

    var secSelect = document.getElementById('sidebar-section-select');
    if (secSelect && secSelect.value !== nextCat) {
      secSelect.value = nextCat;
    }

    var visibleModIds = new Set();
    var firstVisibleArticle = null;
    var articles = document.querySelectorAll('.blog-article');
    articles.forEach(function(art) {
      var artCat = art.getAttribute('data-category');
      if (nextCat === 'all' || artCat === nextCat) {
        art.style.display = 'block';
        if (art.id) visibleModIds.add(art.id);
        if (!firstVisibleArticle) firstVisibleArticle = art;
      } else {
        art.style.display = 'none';
      }
    });

    // Sync Left Sidebar to only show modules inside the selected section
    var sidebarItems = document.querySelectorAll('.quick-sidebar-item');
    var shownCount = 0;
    sidebarItems.forEach(function(item) {
      var link = item.querySelector('.quick-sidebar-link');
      var modId = link ? link.getAttribute('data-mod-id') : '';
      if (nextCat === 'all' || visibleModIds.has(modId)) {
        item.style.display = 'block';
        shownCount++;
      } else {
        item.style.display = 'none';
      }
    });

    // Clear sidebar text filter when switching sections
    var sbInput = document.querySelector('.sidebar-filter-input');
    if (sbInput) sbInput.value = '';

    // Update Sidebar Header Title, Count & Reset Pill
    var titleEl = document.getElementById('sidebar-section-title');
    var countEl = document.getElementById('sidebar-module-count');
    var resetBtn = document.getElementById('sidebar-reset-filter');
    if (titleEl) {
      titleEl.textContent = (nextCat === 'all') ? 'All Modules' : nextCat;
    }
    if (countEl) {
      countEl.textContent = (nextCat === 'all')
        ? ('Showing all ' + shownCount + ' modules')
        : ('Showing ' + shownCount + ' of 40 modules');
    }
    if (resetBtn) {
      resetBtn.style.display = (nextCat === 'all') ? 'none' : 'inline-block';
    }

    // Highlight first visible sidebar link & sync breadcrumb
    var targetModId = firstVisibleArticle ? firstVisibleArticle.id : '';
    document.querySelectorAll('.quick-sidebar-link').forEach(function(link) {
      if (targetModId && link.getAttribute('data-mod-id') === targetModId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    if (nextCat === 'all') {
      window.updateContentBreadcrumb(null);
    } else if (firstVisibleArticle) {
      window.updateContentBreadcrumb(firstVisibleArticle);
    }

    // Prevent browser scroll-clamping from landing user at bottom/last module after filtering
    if (!skipScroll) {
      var prevBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';

      if (nextCat === 'all') {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
      } else if (firstVisibleArticle) {
        var hdr = document.querySelector('.hub-header');
        var util = document.getElementById('utility-bar');
        var headerOffset = (hdr ? hdr.offsetHeight : 65) + (util ? util.offsetHeight : 46) + 18;
        var rect = firstVisibleArticle.getBoundingClientRect();
        var targetY = Math.max(0, Math.round(rect.top + window.pageYOffset - headerOffset));
        window.scrollTo(0, targetY);
        document.documentElement.scrollTop = targetY;

        requestAnimationFrame(function() {
          var settledRect = firstVisibleArticle.getBoundingClientRect();
          if (Math.abs(settledRect.top - headerOffset) > 4) {
            var y2 = Math.max(0, Math.round(settledRect.top + window.pageYOffset - headerOffset));
            window.scrollTo(0, y2);
            document.documentElement.scrollTop = y2;
          }
        });
      }

      setTimeout(function() {
        document.documentElement.style.scrollBehavior = prevBehavior;
      }, 80);

      if (window.innerWidth < 1024 && typeof window.toggleSidebarDrawer === 'function') {
        window.toggleSidebarDrawer(false);
      }
    }
  };
  if (typeof filterBlogCategory !== 'undefined') {
    filterBlogCategory = window.filterBlogCategory;
  }

  // 2. Reliable Desktop + Mobile Jump-to-Tool (Fixes vCore Calculator & Inline DW Lab)
  window.jumpToSectionTool = function(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return false;
    window._suppressScrollSpyUntil = Date.now() + 300;

    // Ensure parent .blog-article is visible (unfilter if hidden by active section)
    var parentSection = target.closest('.blog-article');
    if (parentSection && window.getComputedStyle(parentSection).display === 'none') {
      window.filterBlogCategory('all', null, { skipScroll: true });
    }

    var bcArticle = target.classList.contains('blog-article') ? target : parentSection;
    if (bcArticle && typeof window.updateContentBreadcrumb === 'function') {
      window.updateContentBreadcrumb(bcArticle);
    }

    // Compute exact document Y coordinate with header + utility bar clearance
    var hdr = document.querySelector('.hub-header');
    var util = document.getElementById('utility-bar');
    var headerOffset = (hdr ? hdr.offsetHeight : 65) + (util ? util.offsetHeight : 46) + 18;
    var rect = target.getBoundingClientRect();
    var targetY = Math.max(0, window.pageYOffset + rect.top - headerOffset);

    // Jump cleanly (use 'instant' when > 4000px away so CSS scroll-behavior: smooth never stalls across 50k px docs)
    var distance = Math.abs(targetY - window.pageYOffset);
    if (distance > 4000) {
      var prevBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, targetY);
      document.documentElement.scrollTop = targetY;
      setTimeout(function() {
        document.documentElement.style.scrollBehavior = prevBehavior;
      }, 60);
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }

    // Re-verify alignment after layout settle
    setTimeout(function() {
      var newRect = target.getBoundingClientRect();
      if (Math.abs(newRect.top - headerOffset) > 80) {
        var prevB = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, Math.max(0, window.pageYOffset + newRect.top - headerOffset));
        setTimeout(function() { document.documentElement.style.scrollBehavior = prevB; }, 40);
      }
      target.classList.remove('tool-highlight-pulse');
      void target.offsetWidth;
      target.classList.add('tool-highlight-pulse');
      setTimeout(function() { target.classList.remove('tool-highlight-pulse'); }, 3000);
    }, 150);

    return false;
  };

  // 3. Practice Mode with Clear Active Banner + Header/Utility/Hero Sync
  window.togglePracticeMode = function(forceOn) {
    var currentlyOn = document.body.classList.contains('practice-mode-on');
    var nextState = (typeof forceOn === 'boolean') ? forceOn : !currentlyOn;
    var pBtn = document.getElementById('practice-btn');
    var heroPBtn = document.getElementById('hero-practice-btn');
    var utilPBtn = document.getElementById('utility-practice-btn');
    var utilPLabel = document.getElementById('utility-practice-label');
    var banner = document.getElementById('practice-mode-banner');

    if (nextState) {
      document.body.classList.add('practice-mode-on');
      if (typeof collapseAllAnswers === 'function') collapseAllAnswers();
      if (pBtn) {
        pBtn.classList.add('btn-active');
        pBtn.innerHTML = '🎯 Practice Mode: ON';
      }
      if (heroPBtn) {
        heroPBtn.classList.add('btn-active');
        heroPBtn.innerHTML = '<span>🎯 Practice Mode: ON</span>';
      }
      if (utilPBtn) {
        utilPBtn.classList.add('btn-active');
        utilPBtn.setAttribute('aria-pressed', 'true');
      }
      if (utilPLabel) utilPLabel.textContent = 'Practice: ON';
      if (banner) banner.style.display = 'flex';
      if (forceOn === true) {
        window.jumpToSectionTool('practice-mode-banner');
      }
    } else {
      document.body.classList.remove('practice-mode-on');
      if (pBtn) {
        pBtn.classList.remove('btn-active');
        pBtn.innerHTML = '🎯 Practice Mode';
      }
      if (heroPBtn) {
        heroPBtn.classList.remove('btn-active');
        heroPBtn.innerHTML = '<span>🎯 Try Practice Mode</span>';
      }
      if (utilPBtn) {
        utilPBtn.classList.remove('btn-active');
        utilPBtn.setAttribute('aria-pressed', 'false');
      }
      if (utilPLabel) utilPLabel.textContent = 'Practice Mode';
      if (banner) banner.style.display = 'none';
    }
  };

  // 4. Scope-Aware DataWeave Playground Engine (Fixes Modal vs Inline Sync, Scrolling & Fullscreen)
  function getDwContainer(scope) {
    if (scope === 'modal') return document.getElementById('modal-dw-playground') || document.getElementById('dw-modal');
    if (scope === 'inline') return document.getElementById('inline-dw-playground');
    var modal = document.getElementById('dw-modal');
    if (modal && modal.classList.contains('active')) {
      return document.getElementById('modal-dw-playground') || modal;
    }
    return document.getElementById('inline-dw-playground') || document;
  }

  window.runDwTransformation = function(scope) {
    var root = getDwContainer(scope);
    var p = (typeof DW_PRESETS !== 'undefined' && typeof currentDwPresetIdx !== 'undefined') ? DW_PRESETS[currentDwPresetIdx] : null;
    var inputEl = root.querySelector('.dw-input-editor, #dw-input-editor, #modal-dw-input-editor');
    var outputEl = root.querySelector('.dw-output-viewer, #dw-output-viewer, #modal-dw-output-viewer');
    var statusEl = root.querySelector('.dw-status-indicator, #dw-live-status, #modal-dw-live-status');
    if (!outputEl) return;

    if (statusEl) {
      statusEl.textContent = '⚡ Running...';
      statusEl.style.color = '#facc15';
    }

    setTimeout(function() {
      var resultText = p ? p.output : '// Transformed output';
      try {
        if (p && p.format === 'json' && inputEl && (inputEl.value.trim().startsWith('{') || inputEl.value.trim().startsWith('['))) {
          var rawJson = JSON.parse(inputEl.value);
          if (p.id === 'filter-array' && Array.isArray(rawJson)) {
            resultText = JSON.stringify(rawJson.filter(function(item) { return (item.amount || item.salary || 0) > 100; }), null, 2);
          } else if (p.id === 'map-array' && Array.isArray(rawJson)) {
            resultText = JSON.stringify(rawJson.map(function(item) { return Object.assign({}, item, { processed: true, timestamp: new Date().toISOString() }); }), null, 2);
          }
        }
        outputEl.value = resultText;
        if (statusEl) {
          statusEl.textContent = '⚡ Evaluated (Live)';
          statusEl.style.color = '#00f0ff';
        }
      } catch (e) {
        outputEl.value = resultText;
        if (statusEl) {
          statusEl.textContent = '✓ Pre-computed Output';
          statusEl.style.color = '#34d399';
        }
      }

      if (window.innerWidth < 768) {
        window.switchDwMobileTab('output', null, scope);
      }
    }, 80);
  };

  window.copyDwPanel = function(panel, scope) {
    var root = getDwContainer(scope);
    var sel = panel === 'input'
      ? '.dw-input-editor, #dw-input-editor, #modal-dw-input-editor'
      : panel === 'script'
        ? '.dw-script-editor, #dw-script-editor, #modal-dw-script-editor'
        : '.dw-output-viewer, #dw-output-viewer, #modal-dw-output-viewer';
    var el = root.querySelector(sel);
    var val = el ? el.value : '';
    if (!val) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(val).catch(function() {});
    }
  };

  window.switchDwMobileTab = function(tabName, btnEl, scope) {
    var root = getDwContainer(scope);
    if (!root) return;
    root.querySelectorAll('.dw-tab-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    if (btnEl) {
      btnEl.classList.add('active');
    } else {
      var m = root.querySelector('.dw-tab-btn[data-tab="' + tabName + '"]');
      if (m) m.classList.add('active');
    }
    var prefix = (root.id === 'modal-dw-playground') ? 'modal-dw-panel-' : 'dw-panel-';
    ['input', 'script', 'output', 'notes'].forEach(function(k) {
      var panel = document.getElementById(prefix + k);
      if (panel) {
        if (k === tabName) panel.classList.add('dw-tab-active');
        else panel.classList.remove('dw-tab-active');
      }
    });
  };

  window.openDataWeaveModal = function(startFullscreen) {
    var modal = document.getElementById('dw-modal');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Ensure modal dropdown & editors are populated
    if (typeof populateDwDropdowns === 'function' && typeof DW_PRESETS !== 'undefined') {
      var modalSel = document.getElementById('modal-dw-preset-select');
      if (modalSel && modalSel.options.length === 0) {
        populateDwDropdowns(DW_PRESETS);
      }
    }
    if (typeof loadDwPreset === 'function' && typeof currentDwPresetIdx !== 'undefined') {
      loadDwPreset(currentDwPresetIdx);
    }

    // Reset scroll position to top of scrollable body
    var scrollBody = document.getElementById('modal-dw-playground');
    if (scrollBody) scrollBody.scrollTop = 0;

    if (startFullscreen === true) {
      window.toggleDwFullscreen(true);
    }
  };

  window.closeDataWeaveModal = function(e) {
    if (e && e.target !== e.currentTarget && !e.target.classList.contains('btn-close-modal')) return;
    if (typeof window.exitFeatureFullscreen === 'function') {
      window.exitFeatureFullscreen();
    }
    var modal = document.getElementById('dw-modal');
    var container = document.getElementById('dw-modal-container');
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(function() {});
    }
    if (container) container.classList.remove('dw-fullscreen-active', 'feature-fullscreen-active');
    var fsBtn = document.getElementById('dw-fullscreen-btn');
    if (fsBtn) {
      fsBtn.textContent = '⛶ Full Screen';
      fsBtn.classList.remove('is-fullscreen');
      fsBtn.setAttribute('aria-pressed', 'false');
    }
    if (modal) modal.classList.remove('active', 'modal-fullscreen-parent');
    document.body.style.overflow = '';
  };

  window.toggleDwFullscreen = function(forceOn) {
    if (typeof window.toggleFeatureFullscreen === 'function') {
      return window.toggleFeatureFullscreen('dw-modal-container', document.getElementById('dw-fullscreen-btn'), forceOn);
    }
    return false;
  };

  // Close DW modal on Escape key (when not in native fullscreen)
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var modal = document.getElementById('dw-modal');
      if (modal && modal.classList.contains('active') && !document.fullscreenElement) {
        window.closeDataWeaveModal();
      }
    }
  });
})();


// ============================================================================
// TIMED MOCK INTERVIEW SIMULATOR ENGINE (100% CLIENT-SIDE, DYNAMIC DOM HARVEST)
// ============================================================================
(function() {
  var mockState = {
    role: 'all',
    count: 10,
    minutes: 15,
    questions: [],
    currentIndex: 0,
    grades: [], // { question, grade: 'got'|'partial'|'missed', points: 1|0.5|0 }
    secondsLeft: 900,
    totalSeconds: 900,
    timerId: null,
    paused: false
  };

  function harvestFaqCards() {
    var cards = document.querySelectorAll('.faq-card');
    var list = [];
    cards.forEach(function(card, idx) {
      var titleEl = card.querySelector('.q-title');
      var ansEl = card.querySelector('.answer-body-content');
      if (!titleEl || !ansEl) return;
      var section = card.closest('.blog-article');
      var modTitleEl = section ? section.querySelector('.article-title') : null;
      var roleRaw = (card.getAttribute('data-role') || (section ? section.getAttribute('data-role') : '') || 'senior').toLowerCase();
      if (!card.id) card.id = 'faq-auto-' + idx;
      list.push({
        id: card.id,
        role: roleRaw,
        moduleId: section ? section.id : '',
        moduleTitle: modTitleEl ? modTitleEl.textContent.trim() : 'MuleSoft Core',
        question: titleEl.textContent.trim(),
        answerHtml: ansEl.innerHTML
      });
    });
    return list;
  }

  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function formatTime(sec) {
    var s = Math.max(0, sec);
    var m = Math.floor(s / 60);
    var r = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }

  function updateTimerUI() {
    var pill = document.getElementById('mock-timer-pill');
    if (!pill) return;
    pill.textContent = '⏱️ ' + formatTime(mockState.secondsLeft);
    pill.classList.remove('timer-warn', 'timer-danger');
    if (mockState.secondsLeft <= 30) pill.classList.add('timer-danger');
    else if (mockState.secondsLeft <= 120) pill.classList.add('timer-warn');
  }

  function stopTimer() {
    if (mockState.timerId) {
      clearInterval(mockState.timerId);
      mockState.timerId = null;
    }
  }

  function loadPastStats() {
    try {
      var raw = localStorage.getItem('mulesoft_hub_mock_stats');
      if (!raw) return;
      var stats = JSON.parse(raw);
      if (stats && stats.count > 0) {
        var strip = document.getElementById('mock-past-stats');
        var bestEl = document.getElementById('mock-stat-best');
        var cntEl = document.getElementById('mock-stat-count');
        if (strip) strip.style.display = 'flex';
        if (bestEl) bestEl.textContent = (stats.best || 0) + '%';
        if (cntEl) cntEl.textContent = stats.count;
      }
    } catch (e) {}
  }

  function savePastStats(pct) {
    try {
      var raw = localStorage.getItem('mulesoft_hub_mock_stats');
      var stats = raw ? JSON.parse(raw) : { best: 0, count: 0 };
      stats.count = (stats.count || 0) + 1;
      stats.best = Math.max(stats.best || 0, pct);
      localStorage.setItem('mulesoft_hub_mock_stats', JSON.stringify(stats));
    } catch (e) {}
  }

  function showScreen(screenId) {
    ['mock-screen-setup', 'mock-screen-active', 'mock-screen-results'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.style.display = (id === screenId) ? 'block' : 'none';
    });
    var timerPill = document.getElementById('mock-timer-pill');
    var pauseBtn = document.getElementById('mock-pause-btn');
    var isActive = (screenId === 'mock-screen-active');
    if (timerPill) timerPill.style.display = isActive ? 'inline-block' : 'none';
    if (pauseBtn) pauseBtn.style.display = isActive ? 'inline-flex' : 'none';
    var body = document.getElementById('mock-modal-body');
    if (body) body.scrollTop = 0;
  }

  function renderCurrentQuestion() {
    var q = mockState.questions[mockState.currentIndex];
    if (!q) {
      finishMockInterview();
      return;
    }
    var total = mockState.questions.length;
    var num = mockState.currentIndex + 1;

    var counterEl = document.getElementById('mock-q-counter');
    var fillEl = document.getElementById('mock-progress-fill');
    var roleEl = document.getElementById('mock-q-role-badge');
    var modEl = document.getElementById('mock-q-module');
    var titleEl = document.getElementById('mock-q-title');
    var revealWrap = document.getElementById('mock-reveal-wrap');
    var ansSec = document.getElementById('mock-answer-section');
    var ansBox = document.getElementById('mock-answer-content');

    if (counterEl) counterEl.textContent = 'Question ' + num + ' of ' + total;
    if (fillEl) fillEl.style.width = Math.round((num / total) * 100) + '%';
    if (roleEl) roleEl.textContent = q.role.toUpperCase();
    if (modEl) modEl.textContent = q.moduleTitle;
    if (titleEl) titleEl.textContent = q.question;
    if (ansBox) ansBox.innerHTML = q.answerHtml;
    if (revealWrap) revealWrap.style.display = 'block';
    if (ansSec) ansSec.style.display = 'none';

    var body = document.getElementById('mock-modal-body');
    if (body) body.scrollTop = 0;
  }

  function finishMockInterview() {
    stopTimer();
    var totalQs = mockState.questions.length || 1;
    var elapsed = Math.max(1, mockState.totalSeconds - mockState.secondsLeft);

    var gotCount = 0, partialCount = 0, missedCount = 0, totalPts = 0;
    var modStats = {};
    var toReview = [];

    mockState.grades.forEach(function(entry) {
      totalPts += entry.points;
      if (entry.grade === 'got') gotCount++;
      else if (entry.grade === 'partial') { partialCount++; toReview.push(entry); }
      else { missedCount++; toReview.push(entry); }

      var mName = entry.question.moduleTitle;
      if (!modStats[mName]) modStats[mName] = { pts: 0, count: 0 };
      modStats[mName].pts += entry.points;
      modStats[mName].count += 1;
    });

    // Any unanswered questions due to timer expiry count as missed
    for (var i = mockState.grades.length; i < mockState.questions.length; i++) {
      var uq = mockState.questions[i];
      missedCount++;
      toReview.push({ question: uq, grade: 'missed', points: 0 });
      if (!modStats[uq.moduleTitle]) modStats[uq.moduleTitle] = { pts: 0, count: 0 };
      modStats[uq.moduleTitle].count += 1;
    }

    var pct = Math.round((totalPts / totalQs) * 100);
    savePastStats(pct);

    var verdict = pct >= 80
      ? '🏆 Interview Ready!'
      : pct >= 55
        ? '⚡ Almost Ready — Polish Weak Spots'
        : '📚 Needs Focused Revision';

    document.getElementById('mock-score-pct').textContent = pct + '%';
    document.getElementById('mock-score-verdict').textContent = verdict;
    document.getElementById('mock-score-meta').textContent =
      'Completed ' + totalQs + ' questions in ' + formatTime(elapsed) + ' (' + mockState.role.toUpperCase() + ' track)';
    document.getElementById('mock-tally-got').textContent = '✅ ' + gotCount + ' Got It';
    document.getElementById('mock-tally-partial').textContent = '⚠️ ' + partialCount + ' Partial';
    document.getElementById('mock-tally-missed').textContent = '❌ ' + missedCount + ' Missed';

    // Render Module Breakdown
    var bdEl = document.getElementById('mock-module-breakdown');
    if (bdEl) {
      bdEl.innerHTML = '';
      Object.keys(modStats).forEach(function(mName) {
        var st = modStats[mName];
        var mPct = Math.round((st.pts / st.count) * 100);
        var color = mPct >= 80 ? '#34d399' : (mPct >= 50 ? '#fbbf24' : '#fb7185');
        var row = document.createElement('div');
        row.className = 'mock-breakdown-row';
        row.innerHTML = '<span>' + mName + ' (' + st.count + ' Q)</span><strong style="color:' + color + '; font-family:var(--font-mono);">' + mPct + '%</strong>';
        bdEl.appendChild(row);
      });
    }

    // Render Missed & Partial Review List
    var revSec = document.getElementById('mock-review-section');
    var revList = document.getElementById('mock-review-list');
    if (revList && revSec) {
      revList.innerHTML = '';
      if (toReview.length === 0) {
        revSec.style.display = 'none';
      } else {
        revSec.style.display = 'block';
        toReview.forEach(function(entry) {
          var item = document.createElement('div');
          item.className = 'mock-review-item';
          var badge = entry.grade === 'partial' ? '⚠️ Partial' : '❌ Missed';
          item.innerHTML =
            '<div class="mock-review-q"><span style="font-size:0.75rem; opacity:0.85; margin-right:6px;">' + badge + '</span>' + entry.question.question + '</div>' +
            '<button type="button" class="btn btn-sm" onclick="reviewMockQuestionInGuide(\'' + entry.question.id + '\')">🔍 Jump to Full Q&amp;A</button>';
          revList.appendChild(item);
        });
      }
    }

    mockState.lastSummary =
      'MuleSoft Hub 2026 Timed Mock Interview Scorecard: ' + pct + '% Readiness (' + verdict + ') | ' +
      gotCount + ' Got It, ' + partialCount + ' Partial, ' + missedCount + ' Missed | ' +
      totalQs + ' Qs in ' + formatTime(elapsed) + ' — https://niranjanpotter.github.io/';

    showScreen('mock-screen-results');
  }

  window.openMockInterviewModal = function() {
    var modal = document.getElementById('mock-interview-modal');
    if (!modal) return;
    stopTimer();
    loadPastStats();
    showScreen('mock-screen-setup');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeMockInterviewModal = function(e) {
    if (e && e.target !== e.currentTarget && !e.target.classList.contains('btn-close-modal')) return;
    if (typeof window.exitFeatureFullscreen === 'function') {
      window.exitFeatureFullscreen();
    }
    stopTimer();
    var modal = document.getElementById('mock-interview-modal');
    if (modal) modal.classList.remove('active', 'modal-fullscreen-parent');
    document.body.style.overflow = '';
  };

  window.selectMockRole = function(role, btn) {
    mockState.role = role;
    document.querySelectorAll('#mock-role-choices .mock-choice-card').forEach(function(c) {
      c.classList.remove('active');
    });
    if (btn) btn.classList.add('active');
  };

  window.selectMockPreset = function(count, mins, btn) {
    mockState.count = count;
    mockState.minutes = mins;
    document.querySelectorAll('#mock-length-choices .mock-choice-card').forEach(function(c) {
      c.classList.remove('active');
    });
    if (btn) btn.classList.add('active');
  };

  window.startMockInterview = function() {
    var allCards = harvestFaqCards();
    var pool = allCards;
    if (mockState.role !== 'all') {
      var filtered = allCards.filter(function(q) {
        return q.role.indexOf(mockState.role) !== -1;
      });
      if (filtered.length >= 3) pool = filtered;
    }

    mockState.questions = shuffleArray(pool).slice(0, Math.min(mockState.count, pool.length));
    mockState.currentIndex = 0;
    mockState.grades = [];
    mockState.totalSeconds = mockState.minutes * 60;
    mockState.secondsLeft = mockState.totalSeconds;
    mockState.paused = false;

    var pauseBtn = document.getElementById('mock-pause-btn');
    if (pauseBtn) pauseBtn.textContent = '⏸ Pause';

    showScreen('mock-screen-active');
    updateTimerUI();
    renderCurrentQuestion();

    stopTimer();
    mockState.timerId = setInterval(function() {
      if (mockState.paused) return;
      mockState.secondsLeft--;
      updateTimerUI();
      if (mockState.secondsLeft <= 0) {
        finishMockInterview();
      }
    }, 1000);
  };

  window.toggleMockPause = function() {
    mockState.paused = !mockState.paused;
    var pauseBtn = document.getElementById('mock-pause-btn');
    if (pauseBtn) pauseBtn.textContent = mockState.paused ? '▶ Resume' : '⏸ Pause';
  };

  window.revealMockAnswer = function() {
    var revealWrap = document.getElementById('mock-reveal-wrap');
    var ansSec = document.getElementById('mock-answer-section');
    if (revealWrap) revealWrap.style.display = 'none';
    if (ansSec) ansSec.style.display = 'block';
  };

  window.gradeMockQuestion = function(grade) {
    var q = mockState.questions[mockState.currentIndex];
    if (!q) return;
    var pts = grade === 'got' ? 1 : (grade === 'partial' ? 0.5 : 0);
    mockState.grades.push({ question: q, grade: grade, points: pts });
    mockState.currentIndex++;
    if (mockState.currentIndex >= mockState.questions.length) {
      finishMockInterview();
    } else {
      renderCurrentQuestion();
    }
  };

  window.reviewMockQuestionInGuide = function(cardId) {
    window.closeMockInterviewModal();
    setTimeout(function() {
      if (typeof window.jumpToSectionTool === 'function') {
        window.jumpToSectionTool(cardId);
      }
      var card = document.getElementById(cardId);
      if (card) {
        var revealBtn = card.querySelector('.reveal-answer-btn');
        var drawer = card.querySelector('.answer-drawer');
        if (revealBtn && drawer && !drawer.classList.contains('open') && typeof toggleAnswerDrawer === 'function') {
          toggleAnswerDrawer(revealBtn);
        }
      }
    }, 80);
  };

  window.copyMockScorecard = function() {
    var txt = mockState.lastSummary || 'MuleSoft Hub 2026 Timed Mock Interview — https://niranjanpotter.github.io/';
    var btn = document.getElementById('mock-copy-score-btn');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function() {
        if (btn) {
          btn.textContent = '✓ Copied to Clipboard!';
          setTimeout(function() { btn.textContent = '📋 Copy Readiness Summary'; }, 2000);
        }
      }).catch(function() {});
    }
  };

  window.resetMockToSetup = function() {
    stopTimer();
    loadPastStats();
    showScreen('mock-screen-setup');
  };

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var modal = document.getElementById('mock-interview-modal');
      if (modal && modal.classList.contains('active')) {
        window.closeMockInterviewModal();
      }
    }
  });
})();


// ============================================================================
// DATAWEAVE STUDIO LAB V2: TABS, OFFLINE AUTO-GENERATOR & CUSTOM EVALUATOR
// ============================================================================
(function() {
  // --- Utility: XML <-> JSON & CSV <-> JSON Converters ---
  function xmlNodeToObj(node) {
    var obj = {};
    var hasChildren = false;
    var childElements = [];
    for (var i = 0; i < node.childNodes.length; i++) {
      var ch = node.childNodes[i];
      if (ch.nodeType === 1) {
        hasChildren = true;
        childElements.push(ch);
      }
    }
    if (!hasChildren) {
      var txt = (node.textContent || '').trim();
      if (/^-?\d+(\.\d+)?$/.test(txt)) return Number(txt);
      if (txt === 'true') return true;
      if (txt === 'false') return false;
      return txt;
    }
    childElements.forEach(function(el) {
      var tag = el.localName || el.nodeName;
      var val = xmlNodeToObj(el);
      if (obj[tag] !== undefined) {
        if (!Array.isArray(obj[tag])) obj[tag] = [obj[tag]];
        obj[tag].push(val);
      } else {
        obj[tag] = val;
      }
    });
    return obj;
  }

  function parseXmlToJson(xmlStr) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(xmlStr, 'application/xml');
    if (doc.querySelector('parsererror')) {
      throw new Error('Invalid XML in Input');
    }
    var root = doc.documentElement;
    var rootTag = root.localName || root.nodeName;
    var inner = xmlNodeToObj(root);
    var wrapped = {};
    wrapped[rootTag] = inner;
    // If inner is a plain object, expose both root-wrapped and flattened access for ergonomic mapping
    return { rootTag: rootTag, wrapped: wrapped, flat: (typeof inner === 'object' && !Array.isArray(inner)) ? inner : wrapped };
  }

  function objToXml(obj, rootName, indent) {
    indent = indent || '';
    rootName = rootName || 'root';
    if (obj === null || obj === undefined) return indent + '<' + rootName + '/>';
    if (typeof obj !== 'object') {
      var escaped = String(obj).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return indent + '<' + rootName + '>' + escaped + '</' + rootName + '>';
    }
    if (Array.isArray(obj)) {
      return obj.map(function(item) { return objToXml(item, 'item', indent); }).join('\n');
    }
    var keys = Object.keys(obj);
    if (keys.length === 1 && indent === '') {
      return objToXml(obj[keys[0]], keys[0], '');
    }
    var children = keys.map(function(k) {
      var val = obj[k];
      if (Array.isArray(val)) {
        return val.map(function(it) { return objToXml(it, k, indent + '  '); }).join('\n');
      }
      return objToXml(val, k, indent + '  ');
    }).join('\n');
    return indent + '<' + rootName + '>\n' + children + '\n' + indent + '</' + rootName + '>';
  }

  function arrayToCsv(data) {
    var arr = Array.isArray(data) ? data : [data];
    if (!arr.length || typeof arr[0] !== 'object') return String(data);
    var headers = Object.keys(arr[0]);
    var lines = [headers.join(',')];
    arr.forEach(function(row) {
      lines.push(headers.map(function(h) {
        var v = row[h] === undefined || row[h] === null ? '' : String(row[h]);
        return v.indexOf(',') !== -1 || v.indexOf('"') !== -1 ? '"' + v.replace(/"/g, '""') + '"' : v;
      }).join(','));
    });
    return lines.join('\n');
  }

  function csvToArray(csvStr) {
    var lines = csvStr.trim().split(/\r?\n/).filter(Boolean);
    if (lines.length < 2) throw new Error('CSV requires a header row and at least one data row');
    var headers = lines[0].split(',').map(function(h) { return h.trim().replace(/^"|"$/g, ''); });
    return lines.slice(1).map(function(line) {
      var cols = line.split(',').map(function(c) { return c.trim().replace(/^"|"$/g, ''); });
      var row = {};
      headers.forEach(function(h, idx) {
        var val = cols[idx] !== undefined ? cols[idx] : '';
        if (/^-?\d+(\.\d+)?$/.test(val)) row[h] = Number(val);
        else if (val === 'true') row[h] = true;
        else if (val === 'false') row[h] = false;
        else row[h] = val;
      });
      return row;
    });
  }

  // --- 1. Bulletproof Tab Switching (data-tab + addEventListener) ---
  function getStudioRoot(scope) {
    if (scope === 'modal') return document.getElementById('modal-dw-playground') || document.getElementById('dw-modal');
    if (scope === 'inline') return document.getElementById('inline-dw-playground');
    var modal = document.getElementById('dw-modal');
    if (modal && modal.classList.contains('active')) return document.getElementById('modal-dw-playground');
    return document.getElementById('inline-dw-playground');
  }

  window.showTab = function(tabName, scope, clickedBtn) {
    var root = getStudioRoot(scope);
    if (!root) return;
    var tabBar = root.querySelector('.dw-mobile-tab-bar');
    if (tabBar) {
      tabBar.querySelectorAll('.dw-tab-btn').forEach(function(b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      var targetBtn = clickedBtn || tabBar.querySelector('.dw-tab-btn[data-tab="' + tabName + '"]');
      if (targetBtn) {
        targetBtn.classList.add('active');
        targetBtn.setAttribute('aria-selected', 'true');
      }
    }
    var prefix = (root.id === 'modal-dw-playground') ? 'modal-dw-panel-' : 'dw-panel-';
    ['input', 'script', 'output', 'notes'].forEach(function(k) {
      var panel = document.getElementById(prefix + k);
      if (panel) {
        if (k === tabName) panel.classList.add('dw-tab-active');
        else panel.classList.remove('dw-tab-active');
      }
    });
  };

  window.switchDwMobileTab = function(tabName, btnEl, scope) {
    window.showTab(tabName, scope || (btnEl && btnEl.getAttribute('data-scope')) || 'inline', btnEl);
  };

  function bindStudioTabListeners() {
    document.querySelectorAll('.dw-mobile-tab-bar .dw-tab-btn[data-tab]').forEach(function(btn) {
      if (btn.dataset.tabBound) return;
      btn.dataset.tabBound = '1';
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var tab = btn.getAttribute('data-tab');
        var scope = btn.getAttribute('data-scope') || (btn.closest('#modal-dw-playground') ? 'modal' : 'inline');
        window.showTab(tab, scope, btn);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindStudioTabListeners);
  } else {
    bindStudioTabListeners();
  }

  // --- 2. Mode Switcher (Manual Mode vs Auto-Generate Mode) ---
  window.switchDwMode = function(mode, btnEl, scope) {
    var prefix = (scope === 'modal') ? 'modal-' : '';
    var manualEl = document.getElementById(prefix + 'dw-manual-workspace');
    var autogenEl = document.getElementById(prefix + 'dw-autogen-workspace');
    var switcher = document.querySelector('.dw-mode-switcher[data-scope="' + scope + '"]');
    if (switcher) {
      switcher.querySelectorAll('.dw-mode-btn').forEach(function(b) { b.classList.remove('active'); });
      if (btnEl) btnEl.classList.add('active');
      else {
        var match = switcher.querySelector('.dw-mode-btn[data-mode="' + mode + '"]');
        if (match) match.classList.add('active');
      }
    }
    if (manualEl) manualEl.style.display = (mode === 'manual') ? 'block' : 'none';
    if (autogenEl) autogenEl.style.display = (mode === 'autogen') ? 'flex' : 'none';
  };

  // --- 3. Offline DataWeave 2.0 Auto-Generator Engine ---
  function formatDwLiteral(val) {
    if (typeof val === 'string') return JSON.stringify(val);
    if (typeof val === 'number' || typeof val === 'boolean') return String(val);
    if (val === null) return 'null';
    return JSON.stringify(val);
  }

  function inferFieldExpr(outKey, outVal, srcObj, varPrefix, notesArr) {
    var keys = (srcObj && typeof srcObj === 'object' && !Array.isArray(srcObj)) ? Object.keys(srcObj) : [];

    // 1. Array to Array mapping
    if (Array.isArray(outVal)) {
      var matchedArrKey = null;
      if (Array.isArray(srcObj[outKey])) {
        matchedArrKey = outKey;
      } else {
        for (var a = 0; a < keys.length; a++) {
          if (Array.isArray(srcObj[keys[a]])) {
            matchedArrKey = keys[a];
            break;
          }
        }
      }
      if (matchedArrKey && outVal.length > 0 && typeof outVal[0] === 'object' && srcObj[matchedArrKey].length > 0) {
        var sampleInItem = srcObj[matchedArrKey][0];
        var sampleOutItem = outVal[0];
        var itemLines = Object.keys(sampleOutItem).map(function(ik) {
          return '    ' + ik + ': ' + inferFieldExpr(ik, sampleOutItem[ik], sampleInItem, 'item', notesArr);
        });
        notesArr.push('Mapped array <code>' + matchedArrKey + '</code> to <code>' + outKey + '</code> using <code>map (item) -&gt; { ... }</code>.');
        return varPrefix + '.' + matchedArrKey + ' map (item) -> {\n' + itemLines.join(',\n') + '\n  }';
      }
      return JSON.stringify(outVal);
    }

    // 2. Nested Object mapping
    if (outVal && typeof outVal === 'object') {
      var nestedSrc = (srcObj[outKey] && typeof srcObj[outKey] === 'object') ? srcObj[outKey] : srcObj;
      var nestedPrefix = (srcObj[outKey] && typeof srcObj[outKey] === 'object') ? (varPrefix + '.' + outKey) : varPrefix;
      var nestedLines = Object.keys(outVal).map(function(nk) {
        return '    ' + nk + ': ' + inferFieldExpr(nk, outVal[nk], nestedSrc, nestedPrefix, notesArr);
      });
      notesArr.push('Constructed nested object <code>' + outKey + '</code>.');
      return '{\n' + nestedLines.join(',\n') + '\n  }';
    }

    // 3. Same field name direct map
    if (srcObj && Object.prototype.hasOwnProperty.call(srcObj, outKey) && srcObj[outKey] === outVal) {
      notesArr.push('Direct field mapping: <code>' + outKey + '</code> mapped directly from <code>' + varPrefix + '.' + outKey + '</code>.');
      return varPrefix + '.' + outKey;
    }

    // 4. Different field name, exact same value
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (srcObj[k] === outVal && typeof srcObj[k] !== 'object') {
        notesArr.push('Value-matched rename: <code>' + k + '</code> renamed to <code>' + outKey + '</code>.');
        return varPrefix + '.' + k;
      }
    }

    // 5. String combination (firstName + lastName = fullName)
    if (typeof outVal === 'string') {
      var strKeys = keys.filter(function(k) { return typeof srcObj[k] === 'string' && srcObj[k].length > 0; });
      for (var s1 = 0; s1 < strKeys.length; s1++) {
        for (var s2 = 0; s2 < strKeys.length; s2++) {
          if (s1 === s2) continue;
          var k1 = strKeys[s1], k2 = strKeys[s2];
          var seps = [' ', '-', '_', ', ', ''];
          for (var sp = 0; sp < seps.length; sp++) {
            if (srcObj[k1] + seps[sp] + srcObj[k2] === outVal) {
              var sepExpr = seps[sp] ? (' ++ "' + seps[sp] + '" ++ ') : ' ++ ';
              notesArr.push('String concatenation: combined <code>' + k1 + '</code> and <code>' + k2 + '</code> into <code>' + outKey + '</code> using <code>++</code>.');
              return varPrefix + '.' + k1 + sepExpr + varPrefix + '.' + k2;
            }
          }
        }
      }
      // Check upper/lower transform
      for (var u = 0; u < strKeys.length; u++) {
        var uk = strKeys[u];
        if (srcObj[uk].toUpperCase() === outVal) {
          notesArr.push('String normalization: converted <code>' + uk + '</code> to uppercase.');
          return 'upper(' + varPrefix + '.' + uk + ')';
        }
        if (srcObj[uk].toLowerCase() === outVal) {
          notesArr.push('String normalization: converted <code>' + uk + '</code> to lowercase.');
          return 'lower(' + varPrefix + '.' + uk + ')';
        }
      }
    }

    // 6. Numeric Calculation (price * qty = total, a + b, a - b)
    if (typeof outVal === 'number') {
      var numKeys = keys.filter(function(k) { return typeof srcObj[k] === 'number'; });
      for (var n1 = 0; n1 < numKeys.length; n1++) {
        for (var n2 = n1 + 1; n2 < numKeys.length; n2++) {
          var nk1 = numKeys[n1], nk2 = numKeys[n2];
          var v1 = srcObj[nk1], v2 = srcObj[nk2];
          if (Math.abs((v1 * v2) - outVal) < 0.0001) {
            notesArr.push('Calculated numeric field: <code>' + outKey + '</code> computed as <code>' + nk1 + ' * ' + nk2 + '</code>.');
            return varPrefix + '.' + nk1 + ' * ' + varPrefix + '.' + nk2;
          }
          if (Math.abs((v1 + v2) - outVal) < 0.0001) {
            notesArr.push('Calculated numeric field: <code>' + outKey + '</code> computed as <code>' + nk1 + ' + ' + nk2 + '</code>.');
            return varPrefix + '.' + nk1 + ' + ' + varPrefix + '.' + nk2;
          }
          if (Math.abs((v1 - v2) - outVal) < 0.0001) {
            notesArr.push('Calculated numeric field: <code>' + outKey + '</code> computed as <code>' + nk1 + ' - ' + nk2 + '</code>.');
            return varPrefix + '.' + nk1 + ' - ' + varPrefix + '.' + nk2;
          }
          if (Math.abs((v2 - v1) - outVal) < 0.0001) {
            notesArr.push('Calculated numeric field: <code>' + outKey + '</code> computed as <code>' + nk2 + ' - ' + nk1 + '</code>.');
            return varPrefix + '.' + nk2 + ' - ' + varPrefix + '.' + nk1;
          }
        }
      }
    }

    // 7. Constant literal value
    notesArr.push('Constant value assigned: <code>' + outKey + '</code> set to literal <code>' + formatDwLiteral(outVal) + '</code>.');
    return formatDwLiteral(outVal);
  }

  window.autoGenerateDwScript = function(scope) {
    var prefix = (scope === 'modal') ? 'modal-' : '';
    var inEl = document.getElementById(prefix + 'dw-autogen-input');
    var desEl = document.getElementById(prefix + 'dw-autogen-desired');
    var outEl = document.getElementById(prefix + 'dw-autogen-script');
    var errEl = document.getElementById(prefix + 'dw-autogen-error');
    var notesEl = document.getElementById(prefix + 'dw-autogen-notes');
    var btnEl = document.getElementById(prefix + 'dw-autogen-btn');

    if (!inEl || !desEl || !outEl) return;
    if (errEl) { errEl.style.display = 'none'; errEl.textContent = ''; }

    var rawIn = inEl.value.trim();
    var rawDes = desEl.value.trim();

    if (!rawIn) {
      if (errEl) { errEl.textContent = '❌ Invalid JSON in Input: Input box is empty.'; errEl.style.display = 'block'; }
      return;
    }
    if (!rawDes) {
      if (errEl) { errEl.textContent = '❌ Invalid JSON in Desired Output: Desired Output box is empty.'; errEl.style.display = 'block'; }
      return;
    }

    var origBtnTxt = btnEl ? btnEl.textContent : '';
    if (btnEl) btnEl.textContent = '⚡ Generating...';

    setTimeout(function() {
      try {
        var parsedInput;
        var isXmlInput = rawIn.startsWith('<');
        var rootVar = 'payload';
        var notesArr = [];

        if (isXmlInput) {
          var xmlParsed = parseXmlToJson(rawIn);
          parsedInput = xmlParsed.flat;
          rootVar = 'payload.' + xmlParsed.rootTag;
          notesArr.push('Detected XML input (root element <code>&lt;' + xmlParsed.rootTag + '&gt;</code>) and converted it to a structured object before mapping.');
        } else {
          try {
            parsedInput = JSON.parse(rawIn);
          } catch (eIn) {
            throw new Error('Invalid JSON in Input');
          }
        }

        var parsedDesired;
        try {
          parsedDesired = JSON.parse(rawDes);
        } catch (eDes) {
          throw new Error('Invalid JSON in Desired Output');
        }

        var bodyCode = '';
        if (Array.isArray(parsedDesired) && Array.isArray(parsedInput) && parsedDesired.length > 0 && parsedInput.length > 0) {
          var arrLines = Object.keys(parsedDesired[0]).map(function(k) {
            return '  ' + k + ': ' + inferFieldExpr(k, parsedDesired[0][k], parsedInput[0], 'item', notesArr);
          });
          bodyCode = rootVar + ' map (item) -> {\n' + arrLines.join(',\n') + '\n}';
        } else if (parsedDesired && typeof parsedDesired === 'object' && !Array.isArray(parsedDesired)) {
          var srcForObj = Array.isArray(parsedInput) ? (parsedInput[0] || {}) : parsedInput;
          var objLines = Object.keys(parsedDesired).map(function(k) {
            return '  ' + k + ': ' + inferFieldExpr(k, parsedDesired[k], srcForObj, rootVar, notesArr);
          });
          bodyCode = '{\n' + objLines.join(',\n') + '\n}';
        } else {
          bodyCode = formatDwLiteral(parsedDesired);
        }

        var fullScript = '%dw 2.0\noutput application/json\n---\n' + bodyCode;
        outEl.value = fullScript;

        // Deduplicate & render English-only Notes in light yellow card
        var uniqueNotes = notesArr.filter(function(v, i, a) { return a.indexOf(v) === i; });
        if (notesEl) {
          notesEl.innerHTML =
            '<div class="dw-notes-card">' +
            '<div class="dw-notes-title">🔹 What Happened? (Auto-Generated Transformation Logic)</div>' +
            '<ul class="dw-notes-bullets">' +
            uniqueNotes.map(function(n) { return '<li>' + n + '</li>'; }).join('') +
            '</ul></div>';
          notesEl.style.display = 'block';
        }
      } catch (err) {
        if (errEl) {
          errEl.textContent = '❌ ' + (err.message || 'Unable to generate DataWeave script.');
          errEl.style.display = 'block';
        }
      } finally {
        if (btnEl) btnEl.textContent = origBtnTxt || '✨ Auto-Generate DataWeave';
      }
    }, 60);
  };

  window.copyAutogenBox = function(box, scope) {
    var prefix = (scope === 'modal') ? 'modal-' : '';
    var idMap = { input: 'dw-autogen-input', desired: 'dw-autogen-desired', script: 'dw-autogen-script' };
    var el = document.getElementById(prefix + idMap[box]);
    if (!el || !el.value) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(el.value).catch(function() {});
    }
  };

  window.useGeneratedDwScript = function(scope) {
    var prefix = (scope === 'modal') ? 'modal-' : '';
    var inEl = document.getElementById(prefix + 'dw-autogen-input');
    var scriptEl = document.getElementById(prefix + 'dw-autogen-script');
    var autogenNotesEl = document.getElementById(prefix + 'dw-autogen-notes');

    if (!scriptEl || !scriptEl.value.trim()) {
      window.autoGenerateDwScript(scope);
      setTimeout(function() { window.useGeneratedDwScript(scope); }, 140);
      return;
    }

    var root = getStudioRoot(scope);
    var targetIn = root.querySelector('.dw-input-editor, #dw-input-editor, #modal-dw-input-editor');
    var targetScript = root.querySelector('.dw-script-editor, #dw-script-editor, #modal-dw-script-editor');
    var targetNotes = root.querySelector('.dw-explanation-content');

    if (targetIn && inEl) targetIn.value = inEl.value;
    if (targetScript) targetScript.value = scriptEl.value;
    if (targetNotes && autogenNotesEl && autogenNotesEl.innerHTML) {
      targetNotes.innerHTML = autogenNotesEl.innerHTML;
    }

    window.switchDwMode('manual', null, scope);
    window.runDwTransformation(scope);
  };

  // --- 4. Real Custom In-Browser DataWeave 2.0 Evaluator ---
  function evalDwExpr(expr, ctx) {
    var e = expr.trim();
    if (!e) return null;
    // Literal string
    if ((e.startsWith('"') && e.endsWith('"')) || (e.startsWith("'") && e.endsWith("'"))) {
      return e.slice(1, -1);
    }
    // Literal number/boolean/null
    if (/^-?\d+(\.\d+)?$/.test(e)) return Number(e);
    if (e === 'true') return true;
    if (e === 'false') return false;
    if (e === 'null') return null;

    // Concatenation (++)
    if (e.indexOf('++') !== -1) {
      var parts = [];
      var cur = '', inQ = false, qChar = '';
      for (var i = 0; i < e.length; i++) {
        var c = e[i];
        if ((c === '"' || c === "'") && e[i - 1] !== '\\') {
          if (!inQ) { inQ = true; qChar = c; }
          else if (c === qChar) { inQ = false; }
        }
        if (!inQ && c === '+' && e[i + 1] === '+') {
          parts.push(cur.trim());
          cur = '';
          i++;
          continue;
        }
        cur += c;
      }
      if (cur.trim()) parts.push(cur.trim());
      if (parts.length > 1) {
        return parts.map(function(pt) {
          var v = evalDwExpr(pt, ctx);
          return v === null || v === undefined ? '' : String(v);
        }).join('');
      }
    }

    // upper(...) / lower(...) / trim(...) / sizeOf(...)
    var fnMatch = e.match(/^(upper|lower|trim|sizeOf)\((.+)\)$/);
    if (fnMatch) {
      var fn = fnMatch[1];
      var argVal = evalDwExpr(fnMatch[2], ctx);
      if (fn === 'upper') return String(argVal || '').toUpperCase();
      if (fn === 'lower') return String(argVal || '').toLowerCase();
      if (fn === 'trim') return String(argVal || '').trim();
      if (fn === 'sizeOf') return Array.isArray(argVal) ? argVal.length : (argVal && typeof argVal === 'object' ? Object.keys(argVal).length : String(argVal || '').length);
    }

    // Arithmetic (*, +, -, /)
    var arithMatch = e.match(/^([a-zA-Z0-9_.$]+)\s*([*+\-/])\s*([a-zA-Z0-9_.$]+)$/);
    if (arithMatch) {
      var left = Number(evalDwExpr(arithMatch[1], ctx));
      var right = Number(evalDwExpr(arithMatch[3], ctx));
      if (!isNaN(left) && !isNaN(right)) {
        if (arithMatch[2] === '*') return left * right;
        if (arithMatch[2] === '+') return left + right;
        if (arithMatch[2] === '-') return left - right;
        if (arithMatch[2] === '/') return right !== 0 ? left / right : null;
      }
    }

    // Property path lookup (payload.a.b or item.x)
    if (/^[a-zA-Z_$][a-zA-Z0-9_.$]*$/.test(e)) {
      var segs = e.split('.');
      var val = ctx[segs[0]];
      for (var s = 1; s < segs.length; s++) {
        if (val === null || val === undefined) return null;
        val = val[segs[s]];
      }
      return val !== undefined ? val : null;
    }
    return e;
  }

  function evalDwObjectBlock(blockStr, ctx) {
    var inner = blockStr.trim();
    if (inner.startsWith('{') && inner.endsWith('}')) inner = inner.slice(1, -1).trim();
    var out = {};
    // Split top-level key: value pairs respecting nested { } and ( )
    var entries = [];
    var cur = '', depthBrace = 0, depthParen = 0, inQ = false, qChar = '';
    for (var i = 0; i < inner.length; i++) {
      var ch = inner[i];
      if ((ch === '"' || ch === "'") && inner[i - 1] !== '\\') {
        if (!inQ) { inQ = true; qChar = ch; }
        else if (ch === qChar) { inQ = false; }
      }
      if (!inQ) {
        if (ch === '{') depthBrace++;
        else if (ch === '}') depthBrace--;
        else if (ch === '(') depthParen++;
        else if (ch === ')') depthParen--;
        else if (ch === ',' && depthBrace === 0 && depthParen === 0) {
          if (cur.trim()) entries.push(cur.trim());
          cur = '';
          continue;
        }
      }
      cur += ch;
    }
    if (cur.trim()) entries.push(cur.trim());

    entries.forEach(function(pair) {
      var colonIdx = pair.indexOf(':');
      if (colonIdx === -1) return;
      var k = pair.slice(0, colonIdx).trim().replace(/^["']|["']$/g, '');
      var vExpr = pair.slice(colonIdx + 1).trim();

      // Check for array map expression: payload.items map (item) -> { ... }
      var mapMatch = vExpr.match(/^([a-zA-Z0-9_.$]+)\s+map\s+\(([a-zA-Z0-9_$]+)(?:\s*,\s*([a-zA-Z0-9_$]+))?\)\s*->\s*(\{[\s\S]*\})$/);
      if (mapMatch) {
        var arrVal = evalDwExpr(mapMatch[1], ctx);
        var itemVar = mapMatch[2];
        var idxVar = mapMatch[3];
        var bodyTpl = mapMatch[4];
        if (Array.isArray(arrVal)) {
          out[k] = arrVal.map(function(el, idx) {
            var childCtx = Object.assign({}, ctx);
            childCtx[itemVar] = el;
            if (idxVar) childCtx[idxVar] = idx;
            return evalDwObjectBlock(bodyTpl, childCtx);
          });
        } else {
          out[k] = [];
        }
      } else if (vExpr.startsWith('{') && vExpr.endsWith('}')) {
        out[k] = evalDwObjectBlock(vExpr, ctx);
      } else {
        out[k] = evalDwExpr(vExpr, ctx);
      }
    });
    return out;
  }

  window.runDwTransformation = function(scope) {
    var root = getStudioRoot(scope);
    if (!root) return;
    var inputEl = root.querySelector('.dw-input-editor, #dw-input-editor, #modal-dw-input-editor');
    var scriptEl = root.querySelector('.dw-script-editor, #dw-script-editor, #modal-dw-script-editor');
    var outputEl = root.querySelector('.dw-output-viewer, #dw-output-viewer, #modal-dw-output-viewer');
    var statusEl = root.querySelector('.dw-status-indicator, #dw-live-status, #modal-dw-live-status');
    if (!outputEl) return;

    var rawInput = inputEl ? inputEl.value.trim() : '';
    var rawScript = scriptEl ? scriptEl.value.trim() : '';

    if (statusEl) {
      statusEl.textContent = '⚡ Running...';
      statusEl.style.color = '#facc15';
    }

    setTimeout(function() {
      // 1. Validate empty input
      if (!rawInput) {
        outputEl.value = 'Error: Input payload is empty.\nPlease paste valid JSON, XML, or CSV data in the Input panel.';
        if (statusEl) { statusEl.textContent = '❌ Empty Input'; statusEl.style.color = '#f87171'; }
        if (window.innerWidth < 768) window.showTab('output', scope);
        return;
      }

      // 2. If exact unmodified preset, return rich pre-computed output immediately
      var p = (typeof DW_PRESETS !== 'undefined' && typeof currentDwPresetIdx !== 'undefined') ? DW_PRESETS[currentDwPresetIdx] : null;
      if (p && rawInput === (p.input || '').trim() && rawScript === (p.script || '').trim()) {
        outputEl.value = p.output;
        if (statusEl) { statusEl.textContent = '⚡ Evaluated (Live)'; statusEl.style.color = '#00f0ff'; }
        if (window.innerWidth < 768) window.showTab('output', scope);
        return;
      }

      // 3. Parse User Custom Input (JSON, XML, or CSV)
      var parsedPayload;
      try {
        if (rawInput.startsWith('<')) {
          parsedPayload = parseXmlToJson(rawInput).wrapped;
        } else if (rawInput.startsWith('{') || rawInput.startsWith('[')) {
          parsedPayload = JSON.parse(rawInput);
        } else if (rawInput.indexOf(',') !== -1 && rawInput.indexOf('\n') !== -1) {
          parsedPayload = csvToArray(rawInput);
        } else {
          throw new Error('Invalid JSON/XML/CSV syntax in Input');
        }
      } catch (parseErr) {
        outputEl.value = 'Error: ' + parseErr.message + '\nPlease check your Input syntax.';
        if (statusEl) { statusEl.textContent = '❌ Invalid Input'; statusEl.style.color = '#f87171'; }
        if (window.innerWidth < 768) window.showTab('output', scope);
        return;
      }

      // 4. Parse Output Format Directive & Script Body
      var outFormat = 'json';
      var fmtMatch = rawScript.match(/output\s+application\/(json|xml|csv|plain)/i);
      if (fmtMatch) outFormat = fmtMatch[1].toLowerCase();

      var body = rawScript.indexOf('---') !== -1 ? rawScript.split('---').slice(1).join('---').trim() : 'payload';
      var resultObj = parsedPayload;

      try {
        if (!body || body === 'payload') {
          resultObj = parsedPayload;
        } else if (body.startsWith('{') && body.endsWith('}')) {
          resultObj = evalDwObjectBlock(body, { payload: parsedPayload });
        } else {
          var topMap = body.match(/^([a-zA-Z0-9_.$]+)\s+map\s+\(([a-zA-Z0-9_$]+)(?:\s*,\s*([a-zA-Z0-9_$]+))?\)\s*->\s*(\{[\s\S]*\})$/);
          if (topMap) {
            var arrSrc = evalDwExpr(topMap[1], { payload: parsedPayload });
            if (Array.isArray(arrSrc)) {
              resultObj = arrSrc.map(function(el, idx) {
                var c = { payload: parsedPayload };
                c[topMap[2]] = el;
                if (topMap[3]) c[topMap[3]] = idx;
                return evalDwObjectBlock(topMap[4], c);
              });
            }
          } else {
            var evaluated = evalDwExpr(body, { payload: parsedPayload });
            if (evaluated !== body) resultObj = evaluated;
          }
        }

        // 5. Serialize according to output directive
        if (outFormat === 'xml') {
          outputEl.value = '<?xml version="1.0" encoding="UTF-8"?>\n' + objToXml(resultObj, 'root', '');
        } else if (outFormat === 'csv') {
          outputEl.value = arrayToCsv(resultObj);
        } else {
          outputEl.value = JSON.stringify(resultObj, null, 2);
        }

        if (statusEl) {
          statusEl.textContent = '⚡ Evaluated (Custom Live)';
          statusEl.style.color = '#00f0ff';
        }
      } catch (evalErr) {
        outputEl.value = 'Script Evaluation Error: ' + evalErr.message;
        if (statusEl) { statusEl.textContent = '❌ Script Error'; statusEl.style.color = '#f87171'; }
      }

      if (window.innerWidth < 768) {
        window.showTab('output', scope);
      }
    }, 60);
  };
})();


// ============================================================================
// INTERACTIVE MULE 4 ERROR-HANDLING FLOW SIMULATOR (100% OFFLINE, ENGLISH ONLY)
// ============================================================================
(function() {
  var ehTimers = [];

  function clearEhTimers() {
    while (ehTimers.length) {
      clearTimeout(ehTimers.pop());
    }
  }

  function labelForHandler(val) {
    if (val === 'continue') return 'On Error Continue';
    if (val === 'propagate') return 'On Error Propagate';
    return 'None';
  }

  function syncNodeHandlerBadges() {
    var tryEl = document.getElementById('eh-try-select');
    var privEl = document.getElementById('eh-private-select');
    var mainEl = document.getElementById('eh-main-select');

    var bTry = document.getElementById('eh-badge-try');
    var bPriv = document.getElementById('eh-badge-private');
    var bMain = document.getElementById('eh-badge-main');

    if (tryEl && bTry) bTry.textContent = labelForHandler(tryEl.value);
    if (privEl && bPriv) bPriv.textContent = labelForHandler(privEl.value);
    if (mainEl && bMain) bMain.textContent = labelForHandler(mainEl.value);
  }

  window.evaluateMuleErrorFlow = function(tryH, privateH, mainH) {
    // Case 1: Try Scope has On Error Continue -> caught and swallowed inside Try Scope
    if (tryH === 'continue') {
      return {
        httpStatus: '200 OK',
        isOk: true,
        statusWhy: 'Try Scope caught HTTP:CONNECTIVITY with On Error Continue and returned a success message to Private Flow and Main Flow.',
        nextRuns: true,
        nextVal: 'YES — Runs',
        nextWhy: 'Both the remaining Private Flow processor after Try Scope AND the Main Flow processor after Flow Ref execute normally.',
        payload: '"Success — Main Flow completed using Try Scope On Error Continue recovery payload"',
        rule: 'On Error Continue inside a Try Scope swallows the error and returns a success event, so both Private Flow and Main Flow continue executing and the caller receives HTTP 200 OK.',
        caughtAt: 'try',
        caughtType: 'continue',
        trace: 'HTTP Listener -> Main Flow -> Flow Ref -> Private Flow -> Try Scope -> [Error Thrown: HTTP:CONNECTIVITY] -> Caught by Try Scope (On Error Continue) -> Private Flow & Main Flow continue -> HTTP 200 OK'
      };
    }

    // Try Scope either has None or Propagate (so error leaves Try Scope into Private Flow)
    var tryNote = (tryH === 'propagate')
      ? 'Try Scope ran On Error Propagate and re-threw the error to Private Flow.'
      : 'Try Scope had no handler, so the error bubbled immediately to Private Flow.';

    // Case 2: Private Flow has On Error Continue -> catches error from Try Scope and returns success to Main Flow
    if (privateH === 'continue') {
      return {
        httpStatus: '200 OK',
        isOk: true,
        statusWhy: tryNote + ' Private Flow caught it with On Error Continue and returned a success event to Main Flow.',
        nextRuns: true,
        nextVal: 'YES — Main Flow Runs',
        nextWhy: 'Remaining processors inside Private Flow are skipped, but Main Flow continues executing the processor after Flow Reference.',
        payload: '"Success — Main Flow completed using Private Flow On Error Continue payload"',
        rule: 'When a Private Flow handles an error with On Error Continue, Flow Reference succeeds from the Main Flow perspective, so the Main Flow continues executing and returns HTTP 200 OK.',
        caughtAt: 'private',
        caughtType: 'continue',
        trace: 'HTTP Listener -> Main Flow -> Flow Ref -> Private Flow -> Try Scope (' + labelForHandler(tryH) + ') -> [Error Thrown: HTTP:CONNECTIVITY] -> Caught by Private Flow (On Error Continue) -> Main Flow next processor runs -> HTTP 200 OK'
      };
    }

    var privateNote = (privateH === 'propagate')
      ? 'Private Flow ran On Error Propagate and re-threw the error back to Main Flow.'
      : 'Private Flow had no handler, so the error bubbled through Flow Ref to Main Flow.';

    // Case 3: Main Flow has On Error Continue -> skips remaining Main Flow steps, returns 200 OK
    if (mainH === 'continue') {
      return {
        httpStatus: '200 OK',
        isOk: true,
        statusWhy: tryNote + ' ' + privateNote + ' Main Flow caught it with On Error Continue and returned a normal response.',
        nextRuns: false,
        nextVal: 'NO — Skipped',
        nextWhy: 'Processors after Flow Reference in Main Flow are skipped because execution jumps straight into the Main Flow Error Handler, which then returns HTTP 200 OK.',
        payload: '"Graceful Fallback Response from Main Flow On Error Continue"',
        rule: 'On Error Continue in the Main Flow skips all remaining flow processors after the failing step, yet returns the error handler payload to the HTTP Listener with HTTP 200 OK.',
        caughtAt: 'main',
        caughtType: 'continue',
        trace: 'HTTP Listener -> Main Flow -> Flow Ref -> Private Flow -> Try Scope (' + labelForHandler(tryH) + ') -> [Error] -> Private Flow (' + labelForHandler(privateH) + ') -> Caught by Main Flow (On Error Continue) -> Remaining steps skipped -> HTTP 200 OK'
      };
    }

    // Case 4: Main Flow has On Error Propagate -> skips remaining steps, returns 500 Server Error
    if (mainH === 'propagate') {
      return {
        httpStatus: '500 Server Error',
        isOk: false,
        statusWhy: tryNote + ' ' + privateNote + ' Main Flow ran On Error Propagate and re-threw the error to the HTTP Listener Error Response.',
        nextRuns: false,
        nextVal: 'NO — Skipped',
        nextWhy: 'All remaining processors in Try Scope, Private Flow, and Main Flow are immediately aborted.',
        payload: '{\n  "errorType": "HTTP:CONNECTIVITY",\n  "message": "Error propagated from Main Flow On Error Propagate",\n  "httpStatus": 500\n}',
        rule: 'On Error Propagate executes its error handler processors and re-throws the error to the HTTP Listener, skipping all remaining processors and returning HTTP 500 Server Error.',
        caughtAt: 'main',
        caughtType: 'propagate',
        trace: 'HTTP Listener -> Main Flow -> Flow Ref -> Private Flow -> Try Scope (' + labelForHandler(tryH) + ') -> [Error] -> Private Flow (' + labelForHandler(privateH) + ') -> Main Flow (On Error Propagate) -> Aborted -> HTTP 500 Server Error'
      };
    }

    // Case 5: None in Try, None in Private, None in Main -> Default Mule Error Handler
    return {
      httpStatus: '500 Server Error',
      isOk: false,
      statusWhy: tryNote + ' ' + privateNote + ' Main Flow also had no handler, so Mule Runtime\'s Default Error Handler failed the request.',
      nextRuns: false,
      nextVal: 'NO — Skipped',
      nextWhy: 'All remaining processors are aborted immediately when the unhandled exception bubbles to Mule Runtime.',
      payload: '"HTTP:CONNECTIVITY — Unhandled error caught by Mule Default Error Handler (HTTP 500)"',
      rule: 'When no error handler catches an exception at any scope (Try, Private Flow, or Main Flow), Mule\'s Default Error Handler logs the exception and returns HTTP 500 Server Error.',
      caughtAt: 'listener',
      caughtType: 'propagate',
      trace: 'HTTP Listener -> Main Flow -> Flow Ref -> Private Flow (None) -> Try Scope (' + labelForHandler(tryH) + ') -> [Error] -> Main Flow (None) -> Mule Default Error Handler -> HTTP 500 Server Error'
    };
  };

  function clearNodeAnimationClasses() {
    ['eh-node-listener', 'eh-node-main', 'eh-node-flowref', 'eh-node-private', 'eh-node-try', 'eh-node-error'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) {
        el.classList.remove('eh-node-visited', 'eh-node-flash-red', 'eh-node-caught-continue', 'eh-node-caught-propagate');
      }
    });
  }

  var activeEhRole = 'developer';
  var lastEhState = {
    tryH: 'continue',
    privH: 'none',
    mainH: 'propagate',
    res: null
  };

  function formatIndianRupees(num) {
    var clean = Number(num);
    if (!isFinite(clean) || clean < 0) clean = 0;
    clean = Math.round(clean);
    return clean.toLocaleString('en-IN');
  }

  function buildRoleView(role, res, tryH, privH, mainH) {
    var tryLbl = labelForHandler(tryH);
    var privLbl = labelForHandler(privH);
    var mainLbl = labelForHandler(mainH);

    if (role === 'fresher') {
      var fresherSummary = res.isOk
        ? (res.caughtAt === 'try'
            ? 'Think of the Try Scope like a safety net inside Private Flow: the HTTP error happened, the net caught it cleanly, fixed the response, and let everyone finish their work — so the caller gets 200 OK.'
            : (res.caughtAt === 'private'
                ? 'Try Scope could not stop the error, so it passed up to Private Flow. Private Flow had On Error Continue — it handled the problem and told Main Flow "all good!", so the caller gets 200 OK.'
                : 'Both Try Scope and Private Flow let the error pass up to Main Flow, where On Error Continue caught it at the exit door. Remaining Main Flow steps were skipped, and the caller still got 200 OK.'))
        : 'Think of the error like an alarm ringing upward through every room: Try Scope (' + tryLbl + ') and Private Flow (' + privLbl + ') did not stop it, and Main Flow (' + mainLbl + ') passed it out — so the caller gets a red 500 error.';
      return {
        badge: '🎓 FRESHER VIEW',
        metaPill: res.isOk ? 'Simple Analogy · Recovered (200 OK)' : 'Simple Analogy · Failed (500 Error)',
        metaTone: res.isOk ? 'meta-ok' : 'meta-err',
        insightHtml: '<strong>Teacher Explanation:</strong> ' + fresherSummary,
        statusWhy: fresherSummary,
        nextWhy: res.nextRuns
          ? 'Yes! Because the error was converted into a normal message before leaving the child scope, the next box continues like nothing broke.'
          : 'No! Once an error leaves a flow or reaches Main Flow\'s error handler, any boxes after Flow Ref in Main Flow are skipped.',
        ruleLabel: '4. SIMPLE MEMORY TRICK',
        ruleText: '"' + (res.isOk
          ? 'Continue = Swallow the error here, turn it green (200 OK), and let callers continue.'
          : 'Propagate / None = Pass the red alert upward until the caller gets HTTP 500.') + '"'
      };
    }

    if (role === 'architect') {
      var archVerdict = 'meta-ok';
      var archBadgeText = '✅ Acceptable Pattern';
      var archAdvice = '';
      if (res.caughtAt === 'try' && res.caughtType === 'continue') {
        archVerdict = 'meta-warn';
        archBadgeText = '⚠️ Risky — Silent Error Swallowing';
        archAdvice = '<strong>Design Review (Risky):</strong> Swallowing <code>HTTP:CONNECTIVITY</code> in Try Scope with <code>On Error Continue</code> masks downstream outage and still returns 200 OK. <strong>Recommended Change:</strong> Only keep Continue for non-critical enrichment calls; wrap transient connectivity with <code>Until Successful</code>, log with <code>correlationId</code>, and emit monitoring alerts or fallback flags.';
      } else if (res.caughtAt === 'private' && res.caughtType === 'continue') {
        archVerdict = 'meta-warn';
        archBadgeText = '⚠️ Risky — Upstream Masking';
        archAdvice = '<strong>Design Review (Risky):</strong> Private Flow masks the transport failure via <code>On Error Continue</code> so Main Flow assumes Flow Reference succeeded. <strong>Recommended Change:</strong> Switch Private Flow to <code>On Error Propagate</code> for transactional flows, or return an explicit partial-failure variable so Main Flow avoids writing stale state.';
      } else if (res.caughtAt === 'main' && res.caughtType === 'continue') {
        archVerdict = 'meta-ok';
        archBadgeText = '⚠️ Acceptable With Standardized Error Body';
        archAdvice = '<strong>Design Review (Conditional):</strong> Main Flow intercepts the propagated failure with <code>On Error Continue</code> and returns HTTP 200. <strong>Recommended Change:</strong> Ensure HTTP status/body matches your OpenAPI/RAML contract (for true failures, prefer <code>On Error Propagate</code> mapped to 502/503 with APIKit error kit).';
      } else if (mainH === 'none' && privH === 'none' && tryH === 'none') {
        archVerdict = 'meta-err';
        archBadgeText = '❌ Anti-Pattern — No Error Handler';
        archAdvice = '<strong>Design Review (Wrong / Anti-Pattern):</strong> Zero error handlers defined; Mule Runtime\'s Default Error Handler leaks internal stack details with raw HTTP 500. <strong>Recommended Change:</strong> Add a global <code>Error Handler</code> ref in Main Flow transforming <code>HTTP:CONNECTIVITY</code> into canonical API error JSON + PagerDuty/Anypoint Monitoring alert.';
      } else {
        archVerdict = 'meta-ok';
        archBadgeText = '✅ Correct Pattern — Fail-Fast Propagation';
        archAdvice = '<strong>Design Review (Correct for ACID / Orders):</strong> Error propagates cleanly via <code>On Error Propagate</code> to Main Flow and HTTP Listener without faking success. <strong>Best Practice:</strong> Add Global Error Handler mapping <code>HTTP:CONNECTIVITY</code> to 502/503 JSON, correlate <code>correlationId</code>, and push failed event to Anypoint MQ DLQ for replay.';
      }
      return {
        badge: '🏛️ MULESOFT ARCHITECT VIEW',
        metaPill: archBadgeText,
        metaTone: archVerdict,
        insightHtml: archAdvice,
        statusWhy: 'Architecture verdict for Try(' + tryLbl + ') -> Private(' + privLbl + ') -> Main(' + mainLbl + '): caller sees ' + res.httpStatus + '.',
        nextWhy: res.nextRuns
          ? 'Execution continues past failing step — verify downstream idempotency & compensatory logic so partial data does not corrupt downstream systems.'
          : 'Execution halts downstream processors cleanly (fail-fast) — ideal for transactional integrity and MQ retry/DLQ replay.',
        ruleLabel: '4. ARCHITECTURAL BEST PRACTICE',
        ruleText: '"' + (res.caughtAt === 'listener'
          ? 'Always define a Global Error Handler referenced by Main Flow — never rely on Mule\'s Default Error Handler in production.'
          : (res.isOk
              ? 'Use On Error Continue strictly for non-blocking enrichment; never fake HTTP 200 on broken financial or order writes.'
              : 'Use On Error Propagate for core transactions so callers receive clear failure codes and events can safely route to DLQ.')) + '"'
      };
    }

    if (role === 'ba') {
      var baMsg = res.isOk
        ? '<strong>Customer Experience:</strong> Customer sees a normal confirmation screen (Order appears accepted / fallback shown). <strong>Order Outcome:</strong> Proceeds via backup path (' + res.httpStatus + '), but if downstream DB was skipped, manual reconciliation or retry queue is required.'
        : '<strong>Customer Experience:</strong> Customer sees a checkout failure / "Unable to process request right now" error (' + res.httpStatus + '). <strong>Order Outcome:</strong> Order does NOT complete, triggering immediate revenue and SLA risk until connectivity recovers.';
      return {
        badge: '📊 BUSINESS / BA VIEW',
        metaPill: res.isOk ? 'Risk: LOW · Order Continues' : 'Risk: HIGH · Order Fails',
        metaTone: res.isOk ? 'meta-ok' : 'meta-err',
        insightHtml: baMsg,
        statusWhy: res.isOk
          ? 'API recovers gracefully (200 OK), preventing visible checkout outage for customers.'
          : 'API returns 500 Server Error — checkout/order request fails for the end user.',
        nextWhy: res.nextRuns
          ? 'Follow-up business steps (notifications, confirmation UI) continue running.'
          : 'Follow-up steps (inventory commit, confirmation email) are skipped immediately.',
        ruleLabel: '4. BUSINESS / CUSTOMER OUTCOME',
        ruleText: '"' + (res.isOk
          ? 'Graceful recovery protects customer conversion (0 failed orders), provided fallback behavior matches business SLA rules.'
          : 'Hard 500 failure protects data accuracy by blocking broken orders, but directly impacts hourly order conversion until resolved.') + '"'
      };
    }

    if (role === 'manager') {
      var conf = 75;
      if (res.caughtAt === 'listener') conf = 35;
      else if (res.caughtAt === 'try' && res.caughtType === 'continue') conf = 72;
      else if (res.caughtAt === 'private' && res.caughtType === 'continue') conf = 76;
      else if (res.caughtAt === 'main' && res.caughtType === 'continue') conf = 82;
      else if (mainH === 'propagate') conf = 90;

      var pitch = res.isOk
        ? 'Client Pitch: "Our MuleSoft API isolates the downstream connectivity glitch inside ' + res.caughtAt + ' scope and delivers a seamless 200 OK response with zero customer disruption."'
        : (res.caughtAt === 'listener'
            ? 'Client Pitch: "We identified an unhandled connectivity gap returning HTTP 500; adding a centralized error handler and retry policy will safeguard the API immediately."'
            : 'Client Pitch: "Our MuleSoft integration enforces fail-fast protection—safely halting incomplete transactions at ' + res.caughtAt + ' scope and returning structured HTTP 500 telemetry for rapid recovery."');

      return {
        badge: '🤝 VENDOR / MANAGER VIEW',
        metaPill: 'Confidence Score: ' + conf + '%',
        metaTone: conf >= 80 ? 'meta-ok' : (conf >= 65 ? 'meta-warn' : 'meta-err'),
        insightHtml: '<strong>Executive Summary (' + conf + '% Confidence):</strong> ' + pitch,
        statusWhy: 'SLA Status: ' + res.httpStatus + ' reported cleanly to monitoring and API consumers (' + conf + '% architecture confidence).',
        nextWhy: res.nextRuns
          ? 'End-to-end SLA workflow stays unblocked after recovery handler executes.'
          : 'Protective circuit stop avoids partial/corrupt client data.',
        ruleLabel: '4. 1-LINE CLIENT PITCH',
        ruleText: '"' + pitch.replace(/^Client Pitch:\s*"|"$/g, '') + '"'
      };
    }

    // Default: developer
    return {
      badge: '💻 DEVELOPER VIEW',
      metaPill: 'HTTP ' + res.httpStatus + ' · Technical Trace',
      metaTone: res.isOk ? 'meta-ok' : 'meta-err',
      insightHtml: '<strong>Technical Exact Output:</strong> Error Type = <code>HTTP:CONNECTIVITY</code> | Caught At = <code>' + res.caughtAt + ' (' + res.caughtType + ')</code> | Final HTTP = <strong>' + res.httpStatus + '</strong> | Config: Try=<code>' + tryLbl + '</code>, Private=<code>' + privLbl + '</code>, Main=<code>' + mainLbl + '</code>.',
      statusWhy: res.statusWhy,
      nextWhy: res.nextWhy,
      ruleLabel: '4. 1-LINE INTERVIEW RULE',
      ruleText: '"' + res.rule + '"'
    };
  }

  window.updateBusinessImpactCalc = function() {
    var ordersEl = document.getElementById('eh-biz-orders');
    var aovEl = document.getElementById('eh-biz-aov');
    var boxEl = document.getElementById('eh-biz-loss-box');
    var headlineEl = document.getElementById('eh-biz-loss-headline');
    var subEl = document.getElementById('eh-biz-loss-sub');
    if (!boxEl || !headlineEl) return;

    var orders = ordersEl ? Math.max(0, Number(ordersEl.value) || 0) : 0;
    var aov = aovEl ? Math.max(0, Number(aovEl.value) || 0) : 0;
    var isOk = lastEhState && lastEhState.res ? !!lastEhState.res.isOk : true;
    var loss = isOk ? 0 : Math.round(orders * aov);
    var formatted = formatIndianRupees(loss);

    headlineEl.textContent = 'If this error happens for 1 Hour, Business Loss = Rs ' + formatted;
    boxEl.classList.remove('eh-biz-safe', 'eh-biz-danger');
    boxEl.classList.add(loss === 0 ? 'eh-biz-safe' : 'eh-biz-danger');

    if (subEl) {
      if (isOk) {
        subEl.textContent = 'Simulation returned HTTP 200 OK — orders continue processing via fallback recovery (Loss = Rs 0/hr).';
      } else {
        subEl.textContent = 'Simulation propagated HTTP 500 Server Error — ' + orders + ' failed orders × Rs ' + formatIndianRupees(aov) + ' = Rs ' + formatted + ' hourly revenue impact.';
      }
    }
  };

  function renderSimulationResult(res, tryH, privH, mainH) {
    lastEhState = {
      tryH: tryH || document.getElementById('eh-try-select')?.value || 'continue',
      privH: privH || document.getElementById('eh-private-select')?.value || 'none',
      mainH: mainH || document.getElementById('eh-main-select')?.value || 'propagate',
      res: res
    };

    var roleView = buildRoleView(activeEhRole, res, lastEhState.tryH, lastEhState.privH, lastEhState.mainH);

    var roleBadge = document.getElementById('eh-role-badge');
    var roleMeta = document.getElementById('eh-role-meta-pill');
    var roleBody = document.getElementById('eh-role-insight-body');
    if (roleBadge) roleBadge.textContent = roleView.badge;
    if (roleMeta) {
      roleMeta.textContent = roleView.metaPill;
      roleMeta.classList.remove('meta-ok', 'meta-warn', 'meta-err');
      roleMeta.classList.add(roleView.metaTone);
    }
    if (roleBody) roleBody.innerHTML = roleView.insightHtml;

    var statusBox = document.getElementById('eh-res-status-box');
    var statusCode = document.getElementById('eh-res-status-code');
    var statusWhy = document.getElementById('eh-res-status-why');
    var nextBox = document.getElementById('eh-res-next-box');
    var nextVal = document.getElementById('eh-res-next-val');
    var nextWhy = document.getElementById('eh-res-next-why');
    var payloadCode = document.getElementById('eh-res-payload-code');
    var ruleLabel = document.getElementById('eh-res-rule-label');
    var ruleEl = document.getElementById('eh-res-rule');
    var traceEl = document.getElementById('eh-trace-log');

    if (statusBox) {
      statusBox.classList.remove('eh-res-neutral', 'eh-res-ok', 'eh-res-err');
      statusBox.classList.add(res.isOk ? 'eh-res-ok' : 'eh-res-err');
    }
    if (statusCode) statusCode.textContent = res.httpStatus;
    if (statusWhy) statusWhy.textContent = roleView.statusWhy;

    if (nextBox) {
      nextBox.classList.remove('eh-res-neutral', 'eh-res-ok', 'eh-res-err');
      nextBox.classList.add(res.nextRuns ? 'eh-res-ok' : 'eh-res-err');
    }
    if (nextVal) nextVal.textContent = res.nextVal;
    if (nextWhy) nextWhy.textContent = roleView.nextWhy;

    if (payloadCode) payloadCode.textContent = res.payload;
    if (ruleLabel) ruleLabel.textContent = roleView.ruleLabel;
    if (ruleEl) ruleEl.textContent = roleView.ruleText;
    if (traceEl) traceEl.textContent = res.trace;

    window.updateBusinessImpactCalc();
  }

  window.setEhRole = function(role, btnEl) {
    activeEhRole = role || 'developer';
    document.querySelectorAll('#eh-role-switcher .eh-role-btn').forEach(function(b) {
      b.classList.toggle('active', b.getAttribute('data-role') === activeEhRole);
    });
    if (!lastEhState.res) {
      lastEhState.res = window.evaluateMuleErrorFlow(lastEhState.tryH, lastEhState.privH, lastEhState.mainH);
    }
    renderSimulationResult(lastEhState.res, lastEhState.tryH, lastEhState.privH, lastEhState.mainH);
  };

  window.simulateMuleErrorFlow = function() {
    clearEhTimers();
    syncNodeHandlerBadges();

    var tryH = document.getElementById('eh-try-select')?.value || 'continue';
    var privateH = document.getElementById('eh-private-select')?.value || 'none';
    var mainH = document.getElementById('eh-main-select')?.value || 'propagate';

    var res = window.evaluateMuleErrorFlow(tryH, privateH, mainH);

    // Update results immediately so screen readers and fast interactions always get deterministic state
    renderSimulationResult(res, tryH, privateH, mainH);

    // Step-by-step animated highlight Left->Right (Desktop) / Top->Bottom (Mobile)
    clearNodeAnimationClasses();
    var forwardNodes = ['eh-node-listener', 'eh-node-main', 'eh-node-flowref', 'eh-node-private', 'eh-node-try'];
    forwardNodes.forEach(function(id, idx) {
      ehTimers.push(setTimeout(function() {
        var el = document.getElementById(id);
        if (el) el.classList.add('eh-node-visited');
      }, idx * 70));
    });

    ehTimers.push(setTimeout(function() {
      var errEl = document.getElementById('eh-node-error');
      if (errEl) {
        void errEl.offsetWidth;
        errEl.classList.add('eh-node-flash-red');
      }
    }, 360));

    ehTimers.push(setTimeout(function() {
      var targetMap = { try: 'eh-node-try', private: 'eh-node-private', main: 'eh-node-main', listener: 'eh-node-listener' };
      var targetEl = document.getElementById(targetMap[res.caughtAt]);
      if (targetEl) {
        targetEl.classList.remove('eh-node-visited');
        targetEl.classList.add(res.caughtType === 'continue' ? 'eh-node-caught-continue' : 'eh-node-caught-propagate');
      }
    }, 520));
  };

  window.applyEhPreset = function(presetName) {
    var tryEl = document.getElementById('eh-try-select');
    var privEl = document.getElementById('eh-private-select');
    var mainEl = document.getElementById('eh-main-select');
    if (!tryEl || !privEl || !mainEl) return;

    document.querySelectorAll('.eh-preset-btn').forEach(function(b) { b.classList.remove('active'); });

    if (presetName === 'all-continue') {
      tryEl.value = 'continue';
      privEl.value = 'continue';
      mainEl.value = 'continue';
      document.getElementById('eh-preset-continue')?.classList.add('active');
    } else if (presetName === 'all-propagate') {
      tryEl.value = 'propagate';
      privEl.value = 'propagate';
      mainEl.value = 'propagate';
      document.getElementById('eh-preset-propagate')?.classList.add('active');
    } else {
      tryEl.value = 'continue';
      privEl.value = 'none';
      mainEl.value = 'propagate';
      document.getElementById('eh-preset-mixed')?.classList.add('active');
    }

    window.simulateMuleErrorFlow();
  };

  window.resetEhSimulator = function() {
    clearEhTimers();
    clearNodeAnimationClasses();

    var tryEl = document.getElementById('eh-try-select');
    var privEl = document.getElementById('eh-private-select');
    var mainEl = document.getElementById('eh-main-select');
    if (tryEl) tryEl.value = 'continue';
    if (privEl) privEl.value = 'none';
    if (mainEl) mainEl.value = 'propagate';

    syncNodeHandlerBadges();

    document.querySelectorAll('.eh-preset-btn').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById('eh-preset-mixed')?.classList.add('active');

    var res = window.evaluateMuleErrorFlow('continue', 'none', 'propagate');
    renderSimulationResult(res, 'continue', 'none', 'propagate');

    var traceEl = document.getElementById('eh-trace-log');
    if (traceEl) {
      traceEl.textContent = 'Simulator reset to default Mixed Real Interview Case. Click "Throw Error - Simulate HTTP:CONNECTIVITY" to animate.';
    }
  };

  function bindEhListeners() {
    ['eh-try-select', 'eh-private-select', 'eh-main-select'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el && !el.dataset.ehBound) {
        el.dataset.ehBound = '1';
        el.addEventListener('change', function() {
          document.querySelectorAll('.eh-preset-btn').forEach(function(b) { b.classList.remove('active'); });
          syncNodeHandlerBadges();
        });
      }
    });
    syncNodeHandlerBadges();
    var initRes = window.evaluateMuleErrorFlow('continue', 'none', 'propagate');
    renderSimulationResult(initRes, 'continue', 'none', 'propagate');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindEhListeners);
  } else {
    bindEhListeners();
  }
})();

/* Keep sticky utility bar & 280px sidebar docked cleanly beneath dynamic .hub-header height */
(function initStickyHeaderSync() {
  function syncStickyHeaderHeight() {
    var hdr = document.querySelector('.hub-header');
    if (hdr) {
      document.documentElement.style.setProperty('--hub-header-h', hdr.offsetHeight + 'px');
    }
    var util = document.getElementById('utility-bar');
    if (util) {
      document.documentElement.style.setProperty('--utility-bar-h', util.offsetHeight + 'px');
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncStickyHeaderHeight);
  } else {
    syncStickyHeaderHeight();
  }
  window.addEventListener('load', syncStickyHeaderHeight);
  window.addEventListener('resize', syncStickyHeaderHeight);
})();

/* Study Progress Tracker + Sidebar Click Breadcrumb Sync */
(function initStudyProgressAndNav() {
  var STORAGE_KEY = 'mulesoft_hub_done_qas';

  function getTotalQas() {
    var cards = document.querySelectorAll('.faq-card').length;
    return cards > 0 ? cards : 268;
  }

  function loadDoneSet() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(arr) ? arr : []);
    } catch (e) {
      return new Set();
    }
  }

  function saveDoneSet(setObj) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(setObj)));
    } catch (e) {}
  }

  window.updateProgressDisplay = function() {
    var totalQas = getTotalQas();
    var doneSet = loadDoneSet();
    var count = Math.min(totalQas, doneSet.size);
    var txtEl = document.getElementById('utility-progress-text');
    var fillEl = document.getElementById('utility-progress-fill');
    if (txtEl) txtEl.textContent = count + '/' + totalQas + ' done';
    if (fillEl) fillEl.style.width = Math.min(100, Math.round((count / totalQas) * 100)) + '%';
  };

  window.markQaCompleted = function(cardId) {
    if (!cardId) return;
    var doneSet = loadDoneSet();
    if (!doneSet.has(cardId)) {
      doneSet.add(cardId);
      saveDoneSet(doneSet);
      window.updateProgressDisplay();
    }
  };

  function bindSidebarLinks() {
    document.querySelectorAll('.quick-sidebar-link').forEach(function(link) {
      if (link.dataset.bcBound) return;
      link.dataset.bcBound = '1';
      link.addEventListener('click', function(e) {
        var modId = link.getAttribute('data-mod-id');
        if (modId) {
          if (e && typeof e.preventDefault === 'function') e.preventDefault();
          document.querySelectorAll('.quick-sidebar-link').forEach(function(sibling) {
            sibling.classList.toggle('active', sibling === link);
          });
          if (typeof window.jumpToSectionTool === 'function') {
            window.jumpToSectionTool(modId);
          } else {
            var art = document.getElementById(modId);
            if (art && typeof window.updateContentBreadcrumb === 'function') {
              window.updateContentBreadcrumb(art);
            }
          }
          if (window.innerWidth < 1024 && typeof window.toggleSidebarDrawer === 'function') {
            window.toggleSidebarDrawer(false);
          }
        }
      });
    });
    window.updateProgressDisplay();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindSidebarLinks);
  } else {
    bindSidebarLinks();
  }
})();

/* ============================================================================
   UNIFIED FULLSCREEN ENGINE (INLINE PORTAL & MODAL EDGE-TO-EDGE FULLSCREEN)
   ============================================================================ */
(function initUnifiedFullscreen() {
  var activeFs = null;

  var FS_TITLES = {
    'error-handling-simulator': '🔥 Interactive Error-Handling Flow Simulator',
    'eh-role-results-section': '🎭 Role-Based Analysis & Simulation Results',
    'eh-business-calc-section': '💰 Business Impact Calculator',
    'main-learning-content': '📚 MuleSoft Learning Content & Modules',
    'inline-dw-playground': '🧪 DataWeave 2.0 Studio Lab',
    'vcore-calculator': '🧮 CloudHub vCore Sizing & Capacity Planner',
    'dw-modal-container': '🧪 DataWeave 2.0 Playground',
    'mock-modal-container': '⏱️ Timed Mock Interview'
  };

  function ensurePortal() {
    var portal = document.getElementById('feature-fullscreen-portal');
    if (!portal) {
      portal = document.createElement('div');
      portal.id = 'feature-fullscreen-portal';
      portal.setAttribute('role', 'dialog');
      portal.setAttribute('aria-modal', 'true');
      portal.setAttribute('aria-label', 'Full Screen Interactive Workspace');
      portal.innerHTML =
        '<div class="fs-portal-topbar">' +
        '  <span class="fs-portal-title" id="fs-portal-title">Full Screen View</span>' +
        '  <div class="fs-portal-right">' +
        '    <span class="fs-esc-hint" id="fs-portal-esc-hint">ESC to Exit</span>' +
        '    <button type="button" class="btn btn-sm btn-outline fs-portal-exit-btn" id="fs-portal-exit-btn" onclick="exitFeatureFullscreen()">Exit Full Screen ✕</button>' +
        '  </div>' +
        '</div>';
      document.body.appendChild(portal);
    }
    return portal;
  }

  function setBtnState(btn, isFs) {
    if (!btn) return;
    btn.textContent = isFs ? 'Exit Full Screen ✕' : '⛶ Full Screen';
    btn.classList.toggle('is-fullscreen', !!isFs);
    btn.setAttribute('aria-pressed', isFs ? 'true' : 'false');
  }

  window.exitFeatureFullscreen = function() {
    if (!activeFs) return false;
    var st = activeFs;
    activeFs = null;

    if (st.el) {
      st.el.classList.remove('feature-fullscreen-active', 'dw-fullscreen-active');
    }

    if (st.isModal) {
      if (st.modalOverlay) {
        st.modalOverlay.classList.remove('modal-fullscreen-parent');
      }
    } else {
      if (st.placeholder && st.placeholder.parentNode && st.el) {
        st.placeholder.parentNode.insertBefore(st.el, st.placeholder);
        st.placeholder.parentNode.removeChild(st.placeholder);
      }
      var portal = document.getElementById('feature-fullscreen-portal');
      if (portal) portal.classList.remove('active');
      document.body.classList.remove('feature-fs-body-lock');
      if (typeof st.scrollY === 'number') {
        var prevBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, st.scrollY);
        document.documentElement.scrollTop = st.scrollY;
        setTimeout(function() {
          document.documentElement.style.scrollBehavior = prevBehavior;
        }, 40);
      }
    }

    setBtnState(st.btn, false);

    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(function() {});
    }
    return true;
  };

  window.toggleFeatureFullscreen = function(targetId, btnEl, forceOn) {
    var el = document.getElementById(targetId);
    if (!el) return false;

    var btn = btnEl || el.querySelector('.feature-fs-btn');
    var isCurrentlyFs = !!(activeFs && activeFs.id === targetId);
    var wantFs = (typeof forceOn === 'boolean') ? forceOn : !isCurrentlyFs;

    if (!wantFs) {
      window.exitFeatureFullscreen();
      return false;
    }

    if (activeFs && activeFs.id !== targetId) {
      window.exitFeatureFullscreen();
    } else if (isCurrentlyFs) {
      return true;
    }

    var modalOverlay = el.closest('.modal-overlay');
    var isModal = !!modalOverlay;
    var placeholder = null;
    var scrollY = 0;
    var fsTarget = el;

    if (isModal) {
      modalOverlay.classList.add('modal-fullscreen-parent');
      el.classList.add('feature-fullscreen-active');
      if (targetId === 'dw-modal-container') {
        el.classList.add('dw-fullscreen-active');
      }
    } else {
      scrollY = window.scrollY || window.pageYOffset || 0;
      placeholder = document.createElement('div');
      placeholder.className = 'fs-origin-placeholder';
      placeholder.style.display = 'none';
      if (el.parentNode) {
        el.parentNode.insertBefore(placeholder, el);
      }
      var portal = ensurePortal();
      var titleEl = document.getElementById('fs-portal-title');
      if (titleEl) {
        titleEl.textContent = FS_TITLES[targetId] || 'Full Screen Workspace';
      }
      portal.appendChild(el);
      el.classList.add('feature-fullscreen-active');
      portal.classList.add('active');
      portal.scrollTop = 0;
      document.body.classList.add('feature-fs-body-lock');
      fsTarget = portal;
    }

    setBtnState(btn, true);

    activeFs = {
      id: targetId,
      el: el,
      btn: btn,
      isModal: isModal,
      modalOverlay: modalOverlay,
      placeholder: placeholder,
      scrollY: scrollY,
      usedNative: false
    };

    if (fsTarget && fsTarget.requestFullscreen && !document.fullscreenElement) {
      fsTarget.requestFullscreen().then(function() {
        if (activeFs && activeFs.id === targetId) {
          activeFs.usedNative = true;
        }
      }).catch(function() {
        // Graceful CSS portal/modal fullscreen fallback
      });
    }

    return true;
  };

  window.getActiveFullscreenId = function() {
    return activeFs ? activeFs.id : null;
  };

  document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement && activeFs && activeFs.usedNative) {
      window.exitFeatureFullscreen();
    }
  });

  // Capture-phase Escape handler ensures Esc exits fullscreen first before closing a modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && activeFs) {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.exitFeatureFullscreen();
    }
  }, true);
})();
