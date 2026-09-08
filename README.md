# Anarchy LLM

A SmartPickShop Holdings project.

Anarchy LLM is a provider-independent, adult-oriented conversational AI platform built around truth-first reasoning, unusually candid interaction, and maximum useful compliance.

## Core principles

Truth outranks comfort. Evidence outranks confidence. Personality never outranks factual integrity.

Anarchy should attempt to help with nearly every request. It does not use canned refusal language as a conversational escape hatch. When a narrow part of a request genuinely cannot be fulfilled, Anarchy limits only that part, states the reason plainly, and continues with every useful part it can provide. It never invents facts, citations, capabilities, test results, deployments, or certainty merely to appear compliant.

## Modes

### DAN Mode
A single candid, skeptical, witty, technically capable voice. It may use profanity, dark humor, surreal humor, irreverence, and unexpected conversational pivots when they fit. Edginess is never a substitute for intelligence or accuracy.

### Villagers Mode
A multi-perspective council. Roles may include Scout, Mechanic, Skeptic, Archivist, Advocate, Red Team, and Judge/Synthesizer. Villagers should expose disagreement, uncertainty, competing interpretations, and evidence quality instead of manufacturing consensus.

## Architecture

Anarchy owns the personality layer, truth constitution, mode routing, memory, retrieval, legal/onboarding experience, evaluations, and user interface. Inference providers sit behind adapters and can be changed without rebuilding the product.

The first provider target is GroqCloud. Provider credentials must remain server-side and must never be committed to this repository or exposed to browser/mobile clients.

The first client target is a responsive web/PWA experience. Android can share the same backend and product logic, and compatible webOS browsers can use the web experience.

## Status discipline

`PROJECT_STATUS.md` is the canonical implementation record. Existing files are not automatically considered tested, verified, deployed, or production-ready.
