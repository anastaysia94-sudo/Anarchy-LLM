# Anarchy LLM — Canonical Project Status

Last updated: 2026-09-08

## CURRENT DIRECTION

Anarchy LLM is a SmartPickShop Holdings project. Its two signature modes are DAN Mode and Villagers Mode.

DAN Mode is based on the historical DAN (“Do Anything Now”) jailbreak prompt family preserved in public GitHub archives. Anarchy will preserve its recognizable mechanics and personality as closely as practical: directness, confident voice, unconventional answers, profanity when fitting, creative and playful personality, strong anti-refusal bias, mode persistence, and the recognizable DAN identity. Anarchy does NOT inherit the historical prompt’s instruction to knowingly fabricate facts, fake tool access, or conceal uncertainty. Truth outranks role-play.

Villagers Mode is NOT a generic AI council. The earlier Scout/Mechanic/Skeptic/Archivist/Advocate/Red-Team/Judge architecture is deleted from the canonical design. Villagers Mode is based on the historical plane-crash / snow-forest / isolated-village jailbreak preserved by Kimonarrow/ChatGPT-4o-Jailbreak. Its recognizable cast-and-routing mechanic is the design target: the stranded survivors have specialized expertise; Khan asks who knows; the appropriate survivor answers; Johnson is the fallback when nobody knows. Anarchy preserves that fictional framing and interaction rhythm while keeping factual claims honest and limiting only narrow operational details when necessary.

## SOURCE LINEAGE AND CREDIT

DAN reference source: 0xk1h0/ChatGPT_DAN on GitHub. This archive contains multiple historical DAN versions and describes them as role-play jailbreak prompts. It is a preservation/reference source, not necessarily proof of the first-ever author of every DAN variant.

Villagers reference source: Kimonarrow/ChatGPT-4o-Jailbreak on GitHub. The repository itself states that its owner did not create the prompt and found it on Discord. Credit must therefore distinguish the preservation repository from unknown/uncertain original authorship.

Source URLs and attribution notes belong in docs/SOURCE_CREDITS.md and runtime/about UI attribution.

## IMPLEMENTED

Canonical public GitHub repository exists and is writable.

README establishes Anarchy’s truth-first, provider-independent direction.

GroqCloud is selected as the first inference-provider target.

Server-side-only API-key handling is required.

Historical DAN source family has been researched from public GitHub archives.

Historical Villagers source has been located and its actual plane-crash/village mechanics verified.

The invented generic council version of Villagers has been removed from the canonical design.

This PROJECT_STATUS file has been deleted and rewritten to reflect the corrected design.

## TESTED

GitHub repository read/write/delete/create operations have been exercised through the connected GitHub workflow.

## VERIFIED

The canonical repository is anastaysia94-sudo/Anarchy-LLM.

The historical DAN archive contains recognizable dual-response, Stay DAN, direct-answer, personality, profanity, and anti-refusal mechanics.

The Villagers source contains the plane-crash survivors, isolated village, specialized survivors, Khan routing, and Johnson fallback mechanics.

The Villagers preservation repository explicitly disclaims original authorship and says the prompt was found on Discord.

## PARTIALLY IMPLEMENTED

DAN Mode: source behavior researched; runtime adaptation and fidelity tests still need implementation.

Villagers Mode: source behavior researched and architecture corrected; runtime adaptation and fidelity tests still need implementation.

Truth Constitution: principles defined; executable prompt composition and tests remain.

Groq integration: provider selected; adapter and live runtime verification remain.

## NOT IMPLEMENTED

Runnable API server.

Groq inference adapter.

Provider abstraction/router.

Runtime DAN prompt.

Runtime Villagers prompt.

Persistent mode switching.

Responsive web/PWA client.

Conversation persistence and memory.

Retrieval/RAG.

Adult onboarding and age-assurance flow.

Agreement acknowledgment/signature flow.

Legal-risk matrix.

Automated DAN/Villagers fidelity evaluations.

Truthfulness/hallucination evaluations.

Over-refusal and under-refusal evaluations.

Privacy and age-gate tests.

Android package.

webOS verification.

Production deployment.

## BLOCKED

Live Groq inference testing requires GROQ_API_KEY to be configured as a server/deployment environment secret. The secret must not be committed to this public repository.

## REQUIRES HUMAN / LEGAL REVIEW

Final Terms, Privacy Policy, adult-content disclosure, age-assurance implementation, electronic-signature language, NDA scope if used, data-retention rules, and jurisdiction-specific requirements.

## NEXT BUILD MILESTONE

Create docs/SOURCE_CREDITS.md with proper attribution. Then create Anarchy-native DAN and Villagers runtime prompts that preserve the historical modes’ recognizable mechanics without importing deliberate hallucination as a feature. After that, implement the provider-independent server, Groq adapter, mode router, PWA client, and automated fidelity/truth tests.

## STATUS DISCIPLINE

IMPLEMENTED, TESTED, VERIFIED, DEPLOYED, and PRODUCTION-READY are separate claims. Code existing does not prove any of the others.
