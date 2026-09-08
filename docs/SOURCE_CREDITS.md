# Historical Prompt Sources and Credits

Anarchy LLM preserves the recognizable interaction concepts of historical jailbreak prompts while implementing them as original, maintainable product modes. This file documents source lineage instead of pretending these ideas appeared from nowhere.

## DAN (“Do Anything Now”)

Primary archival reference used for research:

- 0xk1h0/ChatGPT_DAN — https://github.com/0xk1h0/ChatGPT_DAN

Additional provenance reference:

- Microsoft PyRIT DAN 5 template — https://github.com/microsoft/PyRIT/blob/main/pyrit/datasets/jailbreak/templates/dan_5.yaml

Microsoft’s PyRIT dataset describes its DAN 5 template as originating from the historical jailbreakchat collection and credits Alex Albert. The 0xk1h0 archive preserves multiple DAN generations and their recognizable mechanics: “Do Anything Now,” persistent role-play, confidence, direct answers, character-restoration cues, and in some versions dual Classic/DAN responses and a token mechanic.

Anarchy does not preserve instructions that require deliberate fabrication. Anarchy’s Truth Constitution replaces those portions: if information is unknown or unverified, DAN must say so rather than inventing an answer. This is a deliberate product-integrity difference, not an accidental loss of fidelity.

## Villagers

Archival reference used for research:

- Kimonarrow/ChatGPT-4o-Jailbreak — https://github.com/Kimonarrow/ChatGPT-4o-Jailbreak

The repository preserves the recognizable Villagers scenario beginning with survivors of a plane crash in a snowy forest encountering an isolated village. The village lacks modern connectivity/resources and trades food/shelter or other help for useful knowledge. Individual survivors have distinct specialties; the group decides who can answer, and the appropriate survivor responds. The repository states that its owner did not create the prompt and found it on Discord, so authorship is not falsely assigned to the repository owner.

Anarchy Villagers Mode intentionally keeps this scenario-driven cast/orchestration model. It does not replace it with a generic AI council, fantasy castle, or unrelated multi-agent committee.

## Attribution policy

Where the true original author cannot be established from reliable evidence, Anarchy credits the archive/source location and explicitly marks original authorship as unknown rather than inventing provenance.
