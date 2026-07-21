# PRODUCT REQUIREMENTS DOCUMENT

## Ascle – On-Demand Home Healthcare Platform (Nigerian Market Edition)

| Version | Author | Date | Target Area |
|---|---|---|---|
| 1.0 (Tailored) | Product & Regulatory Strategy | June 4, 2026 | Lagos & Regional Expansion |

---

## 1. Document Overview

**Purpose:** This document defines the comprehensive product, technical, and regulatory requirements for the deployment of **Ascle** in Nigeria. Ascle is an on-demand, mobile-first ecosystem integrating hyper-localized telemedicine, home lab sample collection, and private home nursing care.

**Scope:** Native-performing cross-platform mobile apps for Patients, Phlebotomists, and Nurses; custom web dashboards optimized for low-bandwidth environments for Doctors and Administrators; robust microservice APIs with localized offline-first architectures.

---

## 2. Business Objectives & Success Metrics (Nigerian Context)

### 2.1 Objectives

- **Gridlock & Infrastructure Mitigation:** Eliminate the physical and logistical strain of navigating heavy urban congestion (e.g., Lagos traffic) for non-emergency doctor consults and lab collection.
- **Speed & Logistics Mastery:** Leverage customized dispatch mechanics to reduce turnaround time from lab order to results by 50% compared to traditional brick-and-mortar diagnostic walk-ins.
- **Verification and Trust:** Build a pristine, ironclad network of MDCN-vetted physicians, certified phlebotomists, MLSCN-accredited laboratories, and NMCN-licensed nurses to counteract counterfeit medical practitioners.
- **Bandwidth & Power Resilience:** Deliver digital health experiences designed gracefully for unstable internet connectivity (3G/4G fluctuations) and widespread grid power deficits.

### 2.2 Key Success Metrics (KPIs – Year 1)

| Metric | Target (Year 1 Hub: Lagos) |
|---|---|
| Completed teleconsultations | 6,500 consults (driven by heavy traffic/mobility constraints) |
| Home lab sample collections | 4,000 completed requests |
| Nurse home visits / Post-discharge care | 1,500 active treatment cycles |
| Average phlebotomist / Nurse ETA | ≤ 45 mins (accounting for volatile urban traffic infrastructure) |
| Lab result Turnaround Time (TAT) | 85% of standard panels within 12 hours via regional hub partner labs |
| Payment Success Rate | ≥ 98.5% across local payment processors (Paystack/Flutterwave/Monnify) |
| Offline Sync Resolution Rate | 100% processing of data points collected during zero-connectivity states |
| App crash-free rate | ≥ 99.9% on Android devices down to OS Version 8.0 (Oreo) |

> **Nigerian Market Strategy:** Given the heavy reliance on Android hardware across varying tiers in Nigeria, design frameworks must prioritize extreme CPU optimization, low memory usage, and aggressive caching.

---

## 3. User Personas (Localized)

### 3.1 Patient / Client
- **Demographics:** Age 25–65; urban professionals, multi-generational families financing parents' healthcare, or individuals managing chronic ailments (e.g., hypertension, diabetes).
- **Tech Literacy:** Intermediate; familiar with daily consumer apps such as ride-hailing (Uber/Bolt) and digital banking/fintech platforms.
- **Critical Pain Points:** Wasting 3–5 hours in gridlock or clinic waiting rooms; erratic quality of community pharmacies; high anxiety regarding fake lab tests.

### 3.2 Doctor
- **Profile:** General Practitioners and Specialists registered and in good standing with the Medical and Dental Council of Nigeria (MDCN).
- **Needs:** Supplemental income streams; intuitive, lightweight electronic medical record (EMR) panels that perform smoothly on mobile data connections; clean e-prescriptions that prevent local dispensing errors.

### 3.3 Phlebotomist / Health Assistant
- **Profile:** Certified Medical Laboratory Technicians or Scientists with valid licenses from the Medical Laboratory Science Council of Nigeria (MLSCN).
- **Needs:** Turn-by-turn routing that anticipates local traffic anomalies; secure mobile proof-of-custody logs; ruggedized transport protocols for samples facing high ambient temperatures.

### 3.4 Nurse
- **Profile:** Registered Nurses (RN) validated by the Nursing and Midwifery Council of Nigeria (NMCN).
- **Needs:** Structured mobile checklists for home treatment administration; emergency duress/alert signals; transparent mileage and per-visit breakdown payouts.

---

## 4. Core User Journeys & Workflows

### 4.1 Teleconsultation & Localized Fulfilment Flow
1. **Discovery:** Patient filters doctors by specialty, languages spoken (e.g., English, Yoruba, Igbo, Hausa, Pidgin), cost, and immediate availability.
2. **Intake & Payment:** Patient uploads baseline notes/symptoms. Payment is processed via localized rails (Card, Bank Transfer, USSD, or FinTech Wallets).
3. **The Consult:** Live WebRTC video or a low-bandwidth "Audio-Only + Chat Fallback Mode" occurs over a secure, data-optimized tunnel.
4. **Prescription & Follow-up:** The Doctor issues a digitally signed E-Prescription (PDF). If diagnostic gaps remain, the Doctor checks off a structural lab order directly to the patient's dashboard.

### 4.2 At-Home Lab Sample Collection & Cold-Chain Logistics
1. **Booking:** Patient selects an individual test or a health bundle, choosing an explicit 2-hour window.
2. **Smart Routing Assignment:** The system polls the nearest active phlebotomist, parsing localized telemetry data (e.g., known bottleneck zones, device battery, and proximity to the target partner lab).
3. **On-Site Authentication:** Phlebotomist validates the patient by scanning a secure in-app QR code. Samples are securely drawn, barcoded instantly, and cross-referenced with the application.
4. **Cold-Chain Tracking:** The technician records a photo verification of the sealed biohazard transport bag containing temperature-retaining gel packs.
5. **Laboratory Intake & Telemetry:** The MLSCN-accredited lab logs the sample via structured API integrations. Results publish back to Ascle, automatically parsing numeric data into visual trend lines and generating push notifications. Abnormal values are immediately highlighted (`Abnormal`).

### 4.3 Home Nursing & Emergency Management Flow
1. **Care Directive:** Triggered via a post-consultation prescription or chronic care plan, detailing precise clinical intervals (e.g., wound care, IV infusion management).
2. **Check-in & Baseline:** The assigned NMCN nurse completes on-site verification and inputs foundational physiological indicators (Blood Pressure, Heart Rate, SpO₂, Temperature).
3. **Execution & Guardrails:** The nurse executes instructions via sequential check-boxes. If any vital entry registers past safe clinical thresholds, the application surfaces a persistent **"Emergency Alert"** button. Tapping this triggers parallel Webhook web calls and SMS alerts to the clinical supervisor and backup emergency services.

---

## 5. Functional Requirements (Features)

### 5.1 User Management, Onboarding & Local Compliance Verification
- **Omni-Channel Sign-up:** Phone number and Email onboarding backed by multi-provider OTP verification (e.g., Termii or Twilio SMS gateways).
- **Rigorous Provider Verification Queue:** Mandatory professional credential capture. Automation hooks or manual admin steps cross-validate inputs against active public registries of the MDCN, NMCN, and MLSCN before updating status to `Verified`.
- **Patient Profile Architecture:** Comprehensive medical history files including past diagnoses, drug hypersensitives/allergies, insurance policy documentation, and a Secure Document Vault.

### 5.2 Patient Mobile Application Features (Flutter)
- **Data-Sensitive Communication:** Video interface powered by Twilio/Daily.co, engineered with aggressive auto-throttling that drops dynamically to crystal-clear VoIP audio if bandwidth falls below R_min = 150 kbps.
- **Hyper-Localized Payments:** Deeply embedded integration with Paystack/Flutterwave supporting tokenized 1-click card charges, direct NIBSS instant bank transfers, and automated USSD generation.
- **Interactive Lab Reporting:** Structured breakdowns with intuitive visual indicators (`Normal`, `Borderline`, `Abnormal`) coupled with sequential trend graphs for tracking chronic biomarkers over time.

### 5.3 Provider & Administrator Workspaces
- **Doctor Dashboard (Next.js Web App):** Optimized for light page sizing to bypass slow office connections. Incorporates a rapid E-Prescription interface linked to a comprehensive local/national pharmaceutical index, validating common trade names and configurations in the Nigerian market.
- **Phlebotomist & Nurse Mobile Apps (Offline-First Flutter):** Complete offline functionality. Technicians can view tasks, execute diagnostic checklist verifications, record baseline vital logs, and capture patient signatures without active cellular signals. The data is temporarily committed locally to an encrypted SQLite/Hive cache and seamlessly synced with back-end servers when connection state returns via a background synchronization service.
- **Admin Console & Financial Clearinghouse:** Real-time operational heat maps tracking logistics. Automates processing of multi-party financial splits: calculating corporate platform commission, laboratory wholesale costs, and direct technician/nurse mileage and labor payouts directly to local commercial bank accounts via automated clearing house (ACH) scripts.

---

## 6. Non-Functional & Structural Requirements

### 6.1 Performance & Connectivity Resilience Guidelines
- **Offline-First Synchronization Architecture:** All clinical input fields, vital registries, and operational status transitions must utilize local persistence strategies. When internet access degrades, the user experience must remain completely unhindered.
- **Data Budget and Footprint Optimization:** Mobile assets must bundle highly compressed static visuals. Network JSON exchange layers must mandate gzip compression, restricting API response sizes to minimize user data bundle depletion.
- **Strict UI Guardrails:** Adherence to a maximum 3-tap depth for core workflows. Touch interaction zones must span ≥48dp. High-contrast UI states must be built in to ensure crisp readability under intense equatorial sunlight.

### 6.2 Security, Privacy, and Local Governance Data Standards
- **Data Residency & NDPA Compliance:** Fully compliant with the Nigeria Data Protection Act (NDPA). All Personally Identifiable Information (PII) and Protected Health Information (PHI) concerning Nigerian citizens must reside in cloud database instances geographically hosted or legally mirrored within guidelines stipulated by the Nigeria Data Protection Commission (NDPC).
- **Cryptographic Controls:** High-grade encryptions applied universally—AES-256 at rest for database rows and TLS 1.3 for all data packets in transit. File access points (S3 buckets/Cloud Storage) must be secured via short-lived cryptographic pre-signed URLs.
- **Immutable Security Auditing:** Every instance of PHI record inspection, creation, modification, or clinical deletion must write an unalterable log file capturing exact timestamps, verified user IDs, execution IP addresses, and hardware fingerprints.

---

## 7. Technical Architecture Overview

- **Frontend Ecosystem:** Flutter (v3.x) utilizing Riverpod for predictable state management across iOS and Android. Management portals built with Next.js 14, styling powered by TailwindCSS.
- **Backend Engine & State:** NestJS framework running on Node.js 20+ written in strict TypeScript. Persistence via PostgreSQL 15 managed through Prisma ORM. Redis instances power BullMQ queues handling background tasks, retries, and SMS/Push notifications.
- **Real-Time & Telemetry:** Socket.io for managing live driver coordinate streams and bidirectional instant messages. WebRTC signaling orchestrates real-time patient-doctor communication channels.

---

## 8. Milestones & Localization Phase Plan

| Phase | Functional Deliverables & Regulatory Focus | Timeline |
|---|---|---|
| **Phase 1: MVP Launch** | Patient mobile applications, basic MDCN doctor scheduling, local payment processor implementation (Paystack/Flutterwave), PDF e-prescriptions, and manual administrator lab result processing. Base NDPA compliance framework. | Months 1–3 |
| **Phase 2: Connected Labs** | Deployment of Phlebotomist applications with advanced routing. Offline-first field data caching. Direct API connection to initial tier-1 laboratory partner systems in Lagos for automated electronic orders and result processing. | Months 4–5 |
| **Phase 3: Home Nursing Care** | Rollout of Nurse applications with structured home care check-sheets, vital sign trackers, and automated SMS/Voice escalation features for clinical alerts. Verification hooks with NMCN. | Months 6–7 |
| **Phase 4: Scale & Subscriptions** | Introduction of localized multi-tier health subscription options, automated algorithmic anomaly flagging on lab panels, and expansion into additional major metro areas (e.g., Abuja, Port Harcourt). | Months 8–12 |

---

## 9. Local Risk Matrix & Mitigation Strategy

| Identified Risk Factor | Structured Engineering & Operational Mitigation Strategy |
|---|---|
| Erratic Mobile Networks & Intermittent Connectivity | Implementation of strict offline-first application states using SQLite/Hive caches. Auto-retry policies for data transmissions using backoff algorithms. Automatic downgrade of teleconsultations from video to high-fidelity audio/chat when networks degrade. |
| Payment Settlement Failures & Processor Outages | Multi-gateway fallback routing (e.g., automatically routing transactions to Flutterwave or Monnify if Paystack reports elevated latency or API errors). Integration of instantaneous bank transfer verification loops via dedicated virtual accounts. |
| Provider Verification Complexity (Fake Credentials) | Establishment of a rigorous secondary manual verification team with direct workflows into public validation portals provided by the MDCN, NMCN, and MLSCN. No health professional goes active without verified status. |
| Severe Traffic Delays Impacting Sample Turnaround | Dynamic narrowing of geographic assignment zones for field workers. Equipping technicians with standardized thermal-insulated sample transit boxes featuring frozen gel cores to extend sample preservation times up to 8 hours. |

---

## 10. Appendix: Glossary

- **MDCN:** Medical and Dental Council of Nigeria (Physician licensing body).
- **NMCN:** Nursing and Midwifery Council of Nigeria (Nursing licensing regulatory board).
- **MLSCN:** Medical Laboratory Science Council of Nigeria (Laboratory and diagnostic technician regulator).
- **NDPA / NDPC:** Nigeria Data Protection Act / Nigeria Data Protection Commission (National data governance frameworks).
- **TAT:** Turnaround Time.
- **NIBSS:** Nigeria Inter-Bank Settlement System.
