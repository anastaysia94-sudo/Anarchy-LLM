# Anarchy LLM — Canonical Project Status

Last updated: 2026-09-08

## IMPLEMENTED

- Public canonical GitHub repository initialized.
- Product mission and provider-independent architecture documented.
- DAN and Villagers interaction modes specified at product level.
- Maximum-useful-compliance / minimal-restriction principle documented.
- GroqCloud selected as first inference-provider target.
- Server-side-only secret handling requirement documented.

## TESTED

- GitHub repository write access verified by successful commits through the connected GitHub integration.

## VERIFIED

- Canonical repository: `anastaysia94-sudo/Anarchy-LLM`.
- Default branch: `main`.

## PARTIALLY IMPLEMENTED

- Truth Constitution: product rules defined; executable prompt/policy composition remains.
- DAN Mode: behavior specified; runtime implementation and evaluations remain.
- Villagers Mode: roles specified; orchestration/runtime implementation remains.
- Groq integration: provider selected; server adapter and environment-secret deployment remain.

## NOT IMPLEMENTED

- Runnable API server.
- Groq provider adapter.
- Web/PWA client.
- Persistent mode switching.
- Conversation persistence and memory.
- Retrieval/RAG layer.
- Twenty-one-plus onboarding and age-assurance flow.
- Clause-by-clause acknowledgment and signature experience.
- Versioned agreement records.
- Legal-risk matrix.
- Automated truthfulness, hallucination, over-refusal, under-refusal, mode-consistency, privacy, and age-gate evaluations.
- Android package.
- webOS validation.
- Production deployment.

## BLOCKED

- Runtime calls to Groq require the user's Groq API key to be installed as a deployment/server environment secret. The key must not be pasted into chat or committed to GitHub.
- Production hosting choice and production authorization/terms must be verified before deployment.

## REQUIRES HUMAN / LEGAL REVIEW

- Final Terms of Service, Privacy Policy, adult-content disclosure, age-assurance approach, electronic-signature language, arbitration/class-action terms if any, NDA use if any, data-retention rules, and jurisdiction-specific requirements.

## NEXT BUILD MILESTONE

Create the runnable server and provider abstraction, add the Groq adapter using `GROQ_API_KEY` from the server environment, implement DAN/Villagers prompt composition, then build the first responsive PWA chat interface and automated tests.

No feature should be moved to TESTED or VERIFIED merely because its source file exists.
