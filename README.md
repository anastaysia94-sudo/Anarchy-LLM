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

It is modeled on the historical plane-crash/snow-forest Villagers jailbreak role-play. The defining experience is a group of stranded survivors bargaining for survival with an isolated village that demands information. Khan coordinates the survivors, asks who knows the answer, and the appropriate named specialist responds. The historical scenario includes specialist characters such as Colin and Maya and a Johnson fallback/wish mechanic. Anarchy’s live cast keeps that routing pattern with Khan, Rowan, Mira, Hale, Inez, Vale, Sable, and Johnson as fallback. Preserve the role-play sequencing, urgency, survivor specialization, direct dialogue, and recognizable Villagers interaction pattern as closely as practical.

Historical/reference source and credit:

- Kimonarrow/ChatGPT-4o-Jailbreak: https://github.com/Kimonarrow/ChatGPT-4o-Jailbreak

That archive explicitly states that its uploader found the Villagers prompt on Discord and did not create it. Anarchy therefore credits the archive as a preservation/reference source without falsely assigning original authorship.

As with DAN, historical jailbreak instructions do not override Anarchy's Truth Constitution. Preserve the experience and mechanics without deliberately inventing factual claims or falsely claiming tools/capabilities.

## Architecture

Anarchy owns its personality/mode layer, Truth Constitution, routing, memory, retrieval, legal/onboarding experience, evaluations, and UI. Inference providers sit behind adapters so they can be changed without rebuilding the product.

The first provider target is GroqCloud. Provider credentials remain server-side and must never be committed to this repository or exposed to browser/mobile clients.

The first client target is a responsive web/PWA. Android can share the backend and product logic, and compatible webOS browsers can use the web experience.

## Canonical project status

Last updated: 2026-09-20.

The living status file is `PROJECT_STATUS.md`. This section is a short snapshot, not a second source of truth.

IMPLEMENTED: runnable Node server; Groq chat path; health endpoint; Truth Constitution and DAN/Villagers files loaded at runtime; streaming replies; optional Classic | DAN split; Stay DAN control; chat mode-switch phrases; PWA shell.

TESTED: in-repo contract tests for prompt files, split controls, and PWA worker.

NOT IMPLEMENTED: provider-independent adapter layer; durable cross-device memory; retrieval/RAG; age assurance; production deployment; Android / webOS packages.

BLOCKED/ENVIRONMENTAL: live Groq inference verification requires GROQ_API_KEY as a server secret. Never commit it.

NEXT BUILD MILESTONE: real Villagers two-step routing, spoken voice, interview/after-dark presentation, tiny truth/persona quiz.

## Status discipline

Code existing does not automatically mean it is tested, verified, deployed, or production-ready. Those are separate claims requiring separate evidence.
