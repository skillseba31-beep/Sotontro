# Mashup.md: The Master Execution Plan

**Project:** Tech Service & Operations Platform
**Goal:** A "Full Proof" roadmap merging the high-speed execution of Plan 1, the business logic of Plan 2, the enterprise completeness of Plan 3, and the technical specification of Plan 5.

---

## 1. The Definitive Tech Stack
*Selected for scalability, AI integration ease, and modern UI capabilities.*

*   **Frontend Check:** **Next.js 14+ (App Router)** + **Tailwind CSS** + **Shadcn/UI** (Best for visual "wow" factor).
*   **Backend Strategy (Hybrid):**
    *   **Core Logic:** **Node.js (NestJS or Express)** for user management, real-time chat, and payments.
    *   **Heavy Lifting:** **Python (FastAPI)** specifically for AI, Data Analysis, and Web Scraping microservices.
*   **Database:** **PostgreSQL** (via Supabase or AWS RDS).
*   **Real-time:** **Socket.io** (for the Collaboration Hub).
*   **Infrastructure:** Vercel (Frontend) + AWS/Railway (Backend).

---

## 2. The Consolidated Roadmap (24 Weeks)

### Phase 1: The Gateway & Revenue Engine (Weeks 1-6)
*Source Inspiration: Plan 1 (Aggressive) & Plan 5 (Auth API)*
**Goal:** Launch the client-facing side so you can start taking orders and payments immediately.

| Task ID | Component | Task Name | Description & Tech Specs |
| :--- | :--- | :--- | :--- |
| **1.1** | **Core API** | **Auth Architecture** | JWT + OAuth 2.0. Roles: `Client`, `Worker`, `Admin`. (Ref: Plan 5) |
| **1.2** | **DB** | **Schema Design** | Tables: `Users`, `Services`, `Plans`, `Orders`. (Ref: Plan 5) |
| **1.3** | **Frontend** | **High-Conversion Landing** | Modern UI, Service catalog pages (API, AI, Scraping). |
| **1.4** | **Engine** | **Universal Calculator** | Logic-based estimator: `(Hours * Rate) + Complexity_Multiplier`. (Ref: Plan 1) |
| **1.5** | **Payments** | **Stripe/Global Pay** | Subscription plans + One-time project fees. |
| **1.6** | **Client** | **Client Dashboard v1** | View Profile, Purchase Service, View "Pending" Project. |

**Milestone:** Public website live. Clients can sign up, estimate price, and pay.

---

### Phase 2: The Logic & Service Operations (Weeks 7-12)
*Source Inspiration: Plan 2 (Client Trust) & Plan 5 (Endpoints)*
**Goal:** Build the engine that handles the *actual work* delivery and project creation.

| Task ID | Component | Task Name | Description & Tech Specs |
| :--- | :--- | :--- | :--- |
| **2.1** | **Backend** | **Service Request API** | `POST /api/projects`. Handlers for requirements gathering. |
| **2.2** | **Frontend** | **Dynamic Forms** | Custom forms for specific services (e.g., "Scraping URL input", "API Docs upload"). |
| **2.3** | **Project** | **Project State Machine** | Statuses: `Pending` -> `analyzing` -> `In Progress` -> `QA` -> `Delivered`. |
| **2.4** | **Team** | **Worker Dashboard v1** | "My Tasks" view. Simple status toggles. |
| **2.5** | **Files** | **Asset Manager** | S3 integration for uploading requirement docs and deliverables. |
| **2.6** | **Ops** | **Admin Dispatch** | Admin interface to view new orders and "Assign" to a worker. |

**Milestone:** End-to-end service delivery flow is functional.

---

### Phase 3: Collaboration & Team Operations (Weeks 13-18)
*Source Inspiration: Plan 1 (15-Person Team) & Plan 3 (Messaging)*
**Goal:** The specific "Collaborative" and "Internal Team" integration requested in the prompt.

| Task ID | Component | Task Name | Description & Tech Specs |
| :--- | :--- | :--- | :--- |
| **3.1** | **Real-Time** | **Chat System** | Socket.io integration. Rooms per project `project-{id}`. |
| **3.2** | **Collab** | **Comment & Annotate** | Ability to comment on specific deliverables/files. |
| **3.3** | **Ops** | **Team Workload API** | Logic to track worker capacity (e.g., "Worker A has 3 active projects"). |
| **3.4** | **Frontend** | **Kanban Board** | Trello-like board for Team/Admin to track 15+ concurrent projects. |
| **3.5** | **Client** | **Status Timeline** | Visual "Pizza Tracker" for clients to see real-time progress. |
| **3.6** | **Ops** | **Time Tracking** | Integrated timer for hourly-billed custom integration work. |

**Milestone:** A bustling workspace. 15 people can work simultaneously without email.

---

### Phase 4: Intelligence, Reporting & AI (Weeks 19-24)
*Source Inspiration: Plan 3 (Analytics) & Plan 2 (Reporting).*
**Goal:** The "Full dashboard for analysis and building customized reports".

| Task ID | Component | Task Name | Description & Tech Specs |
| :--- | :--- | :--- | :--- |
| **4.1** | **Data** | **Reporting Engine** | Aggregate data: `Time Spent`, `API Calls`, `Revenue`, `Efficiency`. |
| **4.2** | **Frontend** | **Custom Report Builder** | Drag-and-drop UI to create PDF reports for clients. |
| **4.3** | **AI** | **Auto-Estimator** | Python Microservice: Feed requirements -> AI predicts hours/cost. |
| **4.4** | **Admin** | **Business BI** | Admin view: MRR, Churn, Worker Performance metrics. |
| **4.5** | **Feature** | **White-labeling** | Allow enterprise clients to brand their portal. |

**Milestone:** System becomes "Smart". Reporting is automated.

---

## 3. Operations & Management Manual (The "Internal" Site)
*Based on the "Internal team and operation management" requirement.*

1.  **Role Hierarchy:**
    *   **Super Admin:** Financials, Global Settings.
    *   **Project Manager:** Assigns tasks, approves milestones.
    *   **Worker (Dev/Data/AI):** Updates status, logs time, chats.
    *   **Shadow:** (Optional) Client-side viewer.

2.  **Assignment Workflow:**
    *   New Order Received -> Notification to Slack/Admin.
    *   Admin reviews `Capacity Dashboard` -> Drags project to `Worker A`.
    *   Worker A accepts -> Client notified "Your project has started".

---

## 4. Technical Specifications (API)
*Adopted directly from Plan 5 for clarity.*

**Project Endpoints:**
*   `GET /api/v1/projects` (List all - filtered by role)
*   `POST /api/v1/projects/create` (Client wizard)
*   `PATCH /api/v1/projects/{id}/assign` (Admin only)
*   `POST /api/v1/projects/{id}/message` (Chat)

**Reporting Endpoints:**
*   `GET /api/v1/reports/revenue?start={date}&end={date}`
*   `POST /api/v1/reports/generate` (Trigger PDF build)

---

## 5. Why this plan is "Full Proof"
1.  **Immediate Cashflow:** Phase 1 gets you paid before the complex ops tools are built.
2.  **Scalable Ops:** Phase 3 explicitly builds the tools for your 15-person team, preventing chaos.
3.  **Future Proof:** The Hybrid Node/Python stack means you can add heavy AI features later without rewriting the core.
