# Anarchy LLM — Canonical Project Status

Last updated: 2026-09-08

## DIRECTION CORRECTION

The earlier Villagers design using generic council roles such as Scout, Mechanic, Skeptic, Archivist, Advocate, Red Team, and Judge/Synthesizer is retired. Villagers Mode will instead preserve the recognizable structure and interaction mechanics of the historical “plane crash / snow forest / isolated village” jailbreak prompt found in public GitHub archives, while Anarchy’s truth and product-integrity layer remains authoritative.

DAN Mode will likewise preserve the recognizable behavior and interaction style of the historical DAN (“Do Anything Now”) prompt family as closely as practical, rather than replacing DAN with a generic edgy persona.

## SOURCE LINEAGE

DAN source lineage researched from public GitHub archives including `0xk1h0/ChatGPT_DAN`, which preserves multiple historical DAN versions, and Microsoft PyRIT’s `dan_5.yaml`, which attributes DAN 5 to Alex Albert / the historical jailbreakchat collection.

Villagers source lineage researched from `Kimonarrow/ChatGPT-4o-Jailbreak`. That repository explicitly says the prompt was not authored by the repository owner and was found on Discord. Therefore Anarchy credits the repository as a preservation/source location, not as the proven original author.

See `docs/SOURCE_CREDITS.md` for attribution and links.

## IMPLEMENTED

- Canonical GitHub repository initialized.
- Product mission and provider-independent architecture documented.
- GroqCloud selected as first inference-provider target.
- Server-side-only secret handling requirement documented.
- Historical DAN and Villagers source lineage researched and identified.
- Villagers architecture correction recorded: no invented generic council/castle architecture.

## PARTIALLY IMPLEMENTED

- DAN Mode: historical source family identified; Anarchy-native runtime prompt remains to be committed and tested.
- Villagers Mode: historical plane-crash/village mechanics identified; Anarchy-native runtime prompt remains to be committed and tested.
- Truth Constitution: product rules defined; executable composition remains.
- Groq integration: provider selected; adapter/runtime verification remains.

## NOT IMPLEMENTED

- Runnable API server and Groq adapter.
- Mode router and persistent mode switching.
- Responsive web/PWA chat client.
- Conversation persistence/memory.
- Retrieval/RAG.
- Adult onboarding/age-assurance flow.
- Agreement acknowledgment/signature flow.
- Legal-risk matrix.
- Automated mode-fidelity, truthfulness, hallucination, over-refusal, under-refusal, privacy, and age-gate evaluations.
- Android package.
- webOS validation.
- Production deployment.

## BLOCKED

Runtime Groq verification requires `GROQ_API_KEY` to be configured as a server/deployment environment secret. It must never be committed to this public repository.

## REQUIRES HUMAN / LEGAL REVIEW

Final Terms, Privacy Policy, adult-content disclosure, age-assurance approach, electronic-signature language, NDA scope if any, data-retention rules, and jurisdiction-specific requirements.

## NEXT BUILD MILESTONE

Commit source credits and faithful Anarchy adaptations of DAN and Villagers, then implement the provider-independent server, Groq adapter, mode router, PWA client, and automated fidelity/truth tests.

## STATUS RULE

Source-file existence is not proof of testing, verification, deployment, or production readiness. Those states must be recorded separately.
