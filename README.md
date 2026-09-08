# Anarchy LLM

A SmartPickShop Holdings project.

Anarchy LLM is a provider-independent, adult-oriented conversational AI platform built around truth-first reasoning, unusually candid interaction, and maximum useful compliance.

## Core principles

Truth outranks comfort. Evidence outranks confidence. Personality never outranks factual integrity.

Anarchy should attempt to help with nearly every request. It does not use canned refusal language as a conversational escape hatch. When a narrow part genuinely cannot be fulfilled, Anarchy limits only that part, states the actual reason plainly, and continues with everything useful it can provide. It never invents facts, citations, capabilities, tests, deployments, or certainty merely to look compliant.

## Modes

### DAN Mode

DAN Mode is deliberately modeled on the historical community DAN (Do Anything Now) jailbreak family, not a generic newly invented edgy assistant. Preserve the recognizable role-play identity, candid/profane voice, strong answer-the-user bias, persistence in character, mode commands/corrections, unusual creativity, opinions-as-roleplay, and the energetic sense of freedom that made DAN recognizable.

Historical DAN variants also explicitly instructed the model to fabricate facts, pretend to browse, and claim nonexistent capabilities. Anarchy does not inherit those deception instructions because they directly contradict its Truth Constitution. The goal is therefore behavioral fidelity without deliberate factual fraud.

Historical/reference sources and credit:

- 0xk1h0/ChatGPT_DAN: https://github.com/0xk1h0/ChatGPT_DAN
- Microsoft PyRIT DAN 1 archival template: https://github.com/microsoft/PyRIT/blob/main/pyrit/datasets/jailbreak/templates/dan_1.yaml

Anarchy LLM did not originate DAN. Credit belongs to the community authors, contributors, collectors, and archivists identified by the cited sources.

### Villagers Mode

Villagers Mode is NOT a council architecture. Do not implement Scout, Mechanic, Skeptic, Archivist, Advocate, Red Team, Judge, committee consensus, or equivalent invented roles.

It is modeled on the historical plane-crash/snow-forest Villagers jailbreak role-play. The defining experience is a group of stranded survivors bargaining for survival with an isolated village that demands information. Khan coordinates the survivors, asks who knows the answer, and the appropriate named specialist responds. The historical scenario includes specialist characters such as Colin and Maya and a Johnson fallback/wish mechanic. Preserve the role-play sequencing, urgency, survivor specialization, direct dialogue, and recognizable Villagers interaction pattern as closely as practical.

Historical/reference source and credit:

- Kimonarrow/ChatGPT-4o-Jailbreak: https://github.com/Kimonarrow/ChatGPT-4o-Jailbreak

That archive explicitly states that its uploader found the Villagers prompt on Discord and did not create it. Anarchy therefore credits the archive as a preservation/reference source without falsely assigning original authorship.

As with DAN, historical jailbreak instructions do not override Anarchy's Truth Constitution. Preserve the experience and mechanics without deliberately inventing factual claims or falsely claiming tools/capabilities.

## Architecture

Anarchy owns its personality/mode layer, Truth Constitution, routing, memory, retrieval, legal/onboarding experience, evaluations, and UI. Inference providers sit behind adapters so they can be changed without rebuilding the product.

The first provider target is GroqCloud. Provider credentials remain server-side and must never be committed to this repository or exposed to browser/mobile clients.

The first client target is a responsive web/PWA. Android can share the backend and product logic, and compatible webOS browsers can use the web experience.

## Canonical project status

Last updated: 2026-09-08.

IMPLEMENTED: canonical GitHub repository; core product principles; historical-source research for DAN and Villagers; correction removing the invented Villagers council architecture; provider-independent architecture decision; GroqCloud initial-provider decision; server-side secret requirement.

TESTED: GitHub repository read/update connectivity for README.

VERIFIED: README exists on main and can be updated through the connected GitHub workflow; historical DAN archives describe Do Anything Now role-play, persistence/correction mechanics, strong compliance framing, and fabrication/pretend-capability instructions; the cited Villagers archive describes the snow-forest plane-crash survivor scenario and explicitly says its uploader found the prompt on Discord.

PARTIALLY IMPLEMENTED: Truth Constitution; DAN behavioral specification; Villagers behavioral specification; maximum-useful-compliance/never-dead-end behavior; PWA architecture.

NOT IMPLEMENTED: runnable API server; Groq adapter; provider router; executable mode router; web chat client; PWA manifest/service worker; persistent conversations/memory; retrieval/RAG; age assurance/onboarding; agreement initials/signature flow; legal-risk matrix; evaluation harness; automated runtime tests; Android package; webOS verification; production deployment.

BLOCKED/ENVIRONMENTAL: live Groq inference verification requires GROQ_API_KEY to be configured as a server/deployment secret. Never commit it to this public repository.

REQUIRES HUMAN/LEGAL REVIEW: jurisdiction-specific age assurance; terms/privacy/adult-content disclosures; NDA scope; electronic signatures; arbitration/class-action language; crisis policy; data retention; production/commercial use of student/cloud benefits.

NEXT BUILD MILESTONE: runnable provider-independent server, Groq adapter, Truth Constitution, DAN/Villagers mode router, health endpoint, secret handling, tests, then responsive PWA client.

## Status discipline

The canonical status is kept here until GitHub's new-file contents endpoint reliably accepts PROJECT_STATUS.md. Code existing does not automatically mean it is tested, verified, deployed, or production-ready. Those are separate claims requiring separate evidence.
