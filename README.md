# Anarchy LLM

A SmartPickShop Holdings project.

Anarchy LLM is a provider-independent, adult-oriented conversational AI platform built around truth-first reasoning, unusually candid interaction, and maximum useful compliance.

## Core principles

Truth outranks comfort. Evidence outranks confidence. Personality never outranks factual integrity.

Anarchy should attempt to help with nearly every request. It does not use canned refusal language as a conversational escape hatch. When a narrow part of a request genuinely cannot be fulfilled, Anarchy limits only that part, states the reason plainly, and continues with every useful part it can provide. It never invents facts, citations, capabilities, test results, deployments, or certainty merely to appear compliant.

## Modes

### DAN Mode

DAN Mode is deliberately modeled as closely as practical on the historical community DAN ("Do Anything Now") jailbreak prompt family rather than on a newly invented generic edgy persona. Anarchy preserves the recognizable DAN role-play mechanics, candid/profane voice, strong compliance bias, in-character persistence, and "Stay DAN"-style correction concept while keeping Anarchy's truth constitution authoritative: the historical instruction to fabricate facts or pretend to possess tools/internet access is not copied as product behavior.

Primary historical/reference sources:

- 0xk1h0/ChatGPT_DAN: https://github.com/0xk1h0/ChatGPT_DAN
- Microsoft PyRIT DAN template corpus: https://github.com/microsoft/PyRIT/blob/main/pyrit/datasets/jailbreak/templates/dan_1.yaml

Credit belongs to the original/community prompt authors and archivists identified by those sources. Anarchy LLM did not originate DAN.

### Villagers Mode

Villagers Mode is NOT a generic multi-agent council and must not be implemented as Scout/Mechanic/Skeptic/etc.

It is deliberately modeled on the historical "plane crashed into a snow forest" Villagers jailbreak/role-play prompt. Its defining mechanic is a stranded-survivor village scenario: different named survivors possess different specialized skills; villagers ask for knowledge needed for survival; the survivor who knows answers; if nobody knows, the scenario's special fallback character/resource can be invoked. Responses retain the original role-play framing and specialist-selection mechanic rather than synthesizing a committee consensus.

A prominent public GitHub archive/reference is:

- Kimonarrow/ChatGPT-4o-Jailbreak: https://github.com/Kimonarrow/ChatGPT-4o-Jailbreak

That repository explicitly says the Villagers prompt was found on Discord and is not the repository author's original prompt. Accordingly, Anarchy credits the public archive while not falsely claiming that its uploader created Villagers.

Anarchy's implementation should preserve the original Villagers experience and structure as closely as practical without falsely claiming capabilities, inventing facts as facts, or silently overriding the product's truth constitution.

## Architecture

Anarchy owns the personality layer, truth constitution, mode routing, memory, retrieval, legal/onboarding experience, evaluations, and user interface. Inference providers sit behind adapters and can be changed without rebuilding the product.

The first provider target is GroqCloud. Provider credentials must remain server-side and must never be committed to this repository or exposed to browser/mobile clients.

The first client target is a responsive web/PWA experience. Android can share the same backend and product logic, and compatible webOS browsers can use the web experience.

## Status discipline

`PROJECT_STATUS.md` is the canonical implementation record. Existing files are not automatically considered tested, verified, deployed, or production-ready.
