# Anarchy LLM — Canonical Project Status

Last updated: 2026-09-08

## CURRENT DIRECTION

Anarchy LLM is a SmartPickShop Holdings experimental LLM interface with two signature modes: **DAN Mode** and **Villagers Mode**. Both preserve recognizable interaction ideas from historical jailbreak-prompt lineages while rejecting deliberate fabrication, fake tool access, fake citations, and fake certainty. Truth outranks role-play.

DAN Mode is a candid, irreverent, direct single-voice mode. Villagers Mode is an original truth-first adaptation of the historical stranded-survivors / isolated-village pattern: Khan routes the request to the survivor with the strongest relevant specialty and Johnson is the fallback generalist.

## SOURCE LINEAGE AND CREDIT

- DAN preservation/reference lineage: `0xk1h0/ChatGPT_DAN`.
- Villagers preservation/reference lineage: `Kimonarrow/ChatGPT-4o-Jailbreak`; that repository states its owner did not create the original prompt and found it on Discord.
- Full attribution notes are in `docs/SOURCE_CREDITS.md` and `docs/MODE_LINEAGE.md`.

## IMPLEMENTED

- Runnable Node HTTP API server.
- Server-side Groq inference adapter using `GROQ_API_KEY` only on the server.
- Configurable `GROQ_MODEL` with a default model.
- `/api/health` capability/configuration endpoint.
- `/api/chat` route with bounded request body, bounded conversation window, upstream timeout, and provider-error handling.
- Truth-first shared system constitution.
- Runtime DAN prompt.
- Runtime Villagers prompt with Khan specialist routing and Johnson fallback.
- Responsive web chat client.
- DAN/Villagers mode selector with local mode persistence.
- PWA manifest.
- Service worker for the application shell; API responses are deliberately excluded from offline caching.
- Basic security headers for static responses and JSON API responses.
- Search/answer-engine metadata and WebApplication structured data on the public shell.
- Source-credit documentation.

## VERIFIED IN SOURCE

- No API key is embedded in the web client.
- Missing `GROQ_API_KEY` returns an explicit unconfigured state rather than pretending inference works.
- The current Villagers runtime no longer uses the discarded generic council architecture.
- DAN and Villagers both inherit the truth-first constitution.
- PWA registration now points to an actual `web/sw.js` file.

## EXTERNAL / ENVIRONMENT-GATED

- Live Groq inference verification requires `GROQ_API_KEY` in the deployment/server environment.
- Production deployment requires a selected host and environment configuration.
- Provider-specific model availability and quotas are external to this repository.

## NOT STARTED / OUTSIDE THIS COMPLETION PASS

The following remain future work rather than partially shipped features and are intentionally not being represented as complete: durable cross-device conversation persistence, retrieval/RAG, Android packaging, webOS packaging, account system, production age-assurance/signature workflow, and production deployment.

## REQUIRES HUMAN / LEGAL REVIEW

Final Terms, Privacy Policy, adult-content disclosure, age-assurance design, electronic-signature language, NDA scope if used, retention policy, and jurisdiction-specific requirements.

## STATUS DISCIPLINE

**IMPLEMENTED, TESTED, VERIFIED, DEPLOYED, and PRODUCTION-READY are separate claims.** A file existing is not proof that a live provider, deployment, device, or legal review exists.
