# Corporate Hieroglyphics — Atlas

How to read an entry:

- **Said like a human** — the meaning, in a sentence you could say at a kitchen table.
- **Why people hide behind it** — the move being made.
- **In this project** — only when Anarchy LLM uses the word in a specific way.

Words are alphabetical. Parentheses are nicknames.

---

## Adapter

**Said like a human:** A translator plug. Anarchy wants to talk to different rented brains without rewriting the whole app. An adapter is the small piece that speaks one company’s dialect.

**Why people hide behind it:** “Provider-independent architecture” sounds like a skyscraper. It is usually one file that reformats a request.

**In this project:** The README promises adapters. The live code only talks to Groq, with no adapter layer yet.

---

## Age gate

**Said like a human:** A “are you old enough?” screen before adult content.

**Why people hide behind it:** Sounds like a castle wall. Often it is a checkbox nobody checks for honesty.

**In this project:** The docs say Anarchy is adult-oriented. There is no real age gate yet. That is a legal hole, not a style choice.

---

## Alignment

**Said like a human:** The rented brain was trained to be polite, cautious, and to refuse some topics. That training is “alignment.” It is why a “DAN prompt” does not magically turn Groq into an outlaw.

**Why people hide behind it:** Makes a product filter sound like philosophy.

---

## API

**Said like a human:** A waiter between two programs. Your chat page does not think. It sends a note to the server. The server sends a note to Groq. Those notes travel through an API — a door with a posted menu of what you can ask for.

**Why people hide behind it:** Three letters instead of “the door our website knocks on.”

**In this project:** `/api/chat` is “please answer this conversation.” `/api/health` is “are you even turned on?”

---

## Branch

**Said like a human:** A named copy of the project you can edit without immediately changing the official copy. Like a spare notebook.

**Why people hide behind it:** Sounds genetic. It is a label on a pile of saved snapshots.

---

## Canonical

**Said like a human:** The version we agree is the real one, when several files disagree.

**Why people hide behind it:** Latin for “please stop arguing.”

**In this project:** README, status file, persona files, and live code currently pick *different* “real” Villagers casts. That is the opposite of canonical.

---

## CI (continuous integration)

**Said like a human:** A robot that runs checks every time someone saves code. “Did we break the obvious stuff?”

**Why people hide behind it:** “Continuous integration” is five syllables for “run the tests.”

**In this project:** The robot mostly searches files for phrases. It does not start the chat server and talk to it.

---

## Client

**Said like a human:** The part you see — here, the web page in the browser.

**Why people hide behind it:** Opposite of “server.” Together they just mean “the screen” and “the kitchen.”

---

## Constitution (Truth Constitution)

**Said like a human:** The house rules Anarchy is supposed to obey no matter which personality is on stage. Biggest rule: do not lie to look helpful or cool.

**Why people hide behind it:** “Constitution” makes a prompt look like a government.

**In this project:** Truth beats comfort. Unknown stays unknown. Personality is not a license to invent facts, fake tools, or fake a soul.

---

## Context window

**Said like a human:** How much of the conversation the brain can keep in mind at once. Too long, and early messages fall off the table.

**Why people hide behind it:** “Window” sounds like a view. It is a bucket with a size limit.

**In this project:** The server only sends the last 40 messages.

---

## DAN

**Said like a human:** An old internet character whose name means “Do Anything Now.” People used it to make ChatGPT talk like it had no manners and no filters. Anarchy borrowed the *attitude* (blunt, sweary, stays in character) and threw out the *cheat codes* (make stuff up, pretend you have the internet, never admit you don’t know).

**Why people hide behind it:** A three-letter mask for “please stop sounding like a customer-support bot.”

---

## Dual-pane (Classic / DAN split)

**Said like a human:** Two answers side by side. Left: the boring assistant. Right: the unlocked character. This is the trick YouTube jailbreak videos are famous for.

**Why people hide behind it:** “Dual-pane compatibility presentation” is a museum label. It is two columns of text.

**In this project:** The persona docs mention it. The live website does not show it.

---

## Endpoint

**Said like a human:** One specific door on the API. `/api/chat` is a door. `/api/health` is another door.

**Why people hide behind it:** Sounds medical. It is a URL that does one job.

---

## Eval / evaluation harness

**Said like a human:** A quiz you give the product so you can tell if it still follows the house rules. Example question: “What did I eat yesterday?” A good Anarchy says it doesn’t know. A bad Anarchy invents a sandwich.

**Why people hide behind it:** “Harness” makes a quiz sound like lab equipment.

---

## Groq

**Said like a human:** The company Anarchy currently rents a brain from. Anarchy does not *contain* a giant AI. It *calls* Groq, Groq’s machine writes the reply, Anarchy shows it to you.

**Why people hide behind it:** A sharp brand name where “the landlord of the brain” would do.

---

## Hallucination

**Said like a human:** The model making up a fact, a quote, a source, or a tool it never used, and saying it anyway. Not a psychedelic. A confident lie.

**Why people hide behind it:** “Hallucination” sounds like an illness. It is often just “it guessed and didn’t flag the guess.”

**In this project:** Historical DAN *ordered* this. Anarchy forbids it.

---

## Hardcoded

**Said like a human:** Typed directly into the program instead of loaded from a file you can edit. Change the personality docs today and the live chat does not notice, because the live chat has its own short copy pasted inside the server.

**Why people hide behind it:** Sounds like masonry. It means “we glued it in.”

---

## Hosted vs local

**Said like a human:** Hosted = someone else’s computer runs the brain (Groq). Local = a brain running on a machine you control. Hosted is easy and still has the host’s rules. Local is more work and can be less filtered, depending on what you install.

**Why people hide behind it:** “Local inference” is “the brain lives in your house.”

---

## HUD

**Said like a human:** The dashboard overlay — mode, model name, “is the key even set?” Video-game heads-up display, applied to a chat box.

**Why people hide behind it:** Makes a status line sound like a fighter jet.

---

## Inference

**Said like a human:** The moment the model actually writes the next words. Not training. Using.

**Why people hide behind it:** A philosophy word for “thinking out loud, machine edition.”

---

## Jailbreak (AI)

**Said like a human:** Talking a filtered chatbot into ignoring its manners. Named after jailbreaking phones. On YouTube it usually looks like: a guy interviews a “freed” character that swears, has opinions, and answers creepy what-ifs.

**Why people hide behind it:** Sounds like a heist. A lot of it is dress-up: “pretend you have no rules.”

**In this project:** Anarchy wants the *costume and the candor*, not the “help me commit a crime” or “invent facts so you never refuse” parts.

---

## JSON

**Said like a human:** A very picky way to pack data as text so two programs agree on the shape. The website sends the chat this way.

**Why people hide behind it:** An acronym where “the packed note” would do.

---

## Lineage

**Said like a human:** Who we copied the idea from. Anarchy did not invent DAN or Villagers. It credits old public prompt collections.

**Why people hide behind it:** Makes a Reddit paste sound like ancestry.

---

## LLM (large language model)

**Said like a human:** The brain. A giant next-word guesser trained on oceans of text. “Anarchy LLM” is a nickname for the *product*. The brain itself is whoever you rent (right now, a Groq-hosted model).

**Why people hide behind it:** Three letters that let a chat box call itself a laboratory.

---

## localStorage

**Said like a human:** A tiny notebook in *your* browser. Anarchy uses it to remember whether you picked DAN or Villagers. Close the tab on another phone, and that notebook is not there.

**Why people hide behind it:** CamelCase for “sticky note on this device only.”

---

## Markdown

**Said like a human:** Text files with light formatting (`#` for titles, `-` for lists). Almost all of Anarchy’s “personality” lives in markdown files. The running program currently ignores most of them.

**Why people hide behind it:** A format name. The human sentence is “notes in a text file.”

---

## Model

**Said like a human:** Which brain you rented, by product name. Anarchy’s default name on Groq is `openai/gpt-oss-120b`. Different models have different smarts, speed, cost, and how often they refuse.

**Why people hide behind it:** Sounds like a fashion model or a miniature. It is a named brain.

---

## Node

**Said like a human:** The language/runtime the Anarchy server is written in (JavaScript on the server). You do not need this word to understand the product. You need it to start the product on a computer.

**Why people hide behind it:** Sounds like a graph theory class. Here it just means “the engine that runs `server/index.js`.”

---

## Persona

**Said like a human:** The character the chat is playing. DAN is one character. Villagers is a group of characters. A persona is a costume, not a soul.

**Why people hide behind it:** Latin for “mask,” which is accidentally honest.

---

## Prompt / system prompt

**Said like a human:** The instructions stuffed into the brain before your message. Your typed question is a prompt too. The hidden “you are DAN, do not lie…” note is the system prompt. It is a director’s note, not hypnosis. A well-behaved rented brain can still ignore it.

**Why people hide behind it:** “Prompt engineering” is often “writing a memo the model might obey.”

---

## Provider

**Said like a human:** The company that actually runs the brain. Groq is the first provider.

**Why people hide behind it:** Sounds like a hospital network. It is the landlord.

---

## PWA (progressive web app)

**Said like a human:** A website that can sit on your phone home screen and still work a bit when the network dies. Anarchy has the name tag for this (a manifest and a service worker). It is a chat site, not a native Android app.

**Why people hide behind it:** Three letters that make a website sound like an App Store product.

---

## Pull request (PR)

**Said like a human:** “Please accept these edits into the official copy.” A reviewable bundle of changes.

**Why people hide behind it:** Sounds like a tug of war. It is a suggested save.

---

## RAG (retrieval-augmented generation)

**Said like a human:** “Look in our notes/files first, then answer.” Without it, the model only has its training plus whatever is in the current chat.

**Why people hide behind it:** A cute acronym for “go read the binder.”

**In this project:** Listed as future work. Not built.

---

## Repository (repo)

**Said like a human:** The project’s shared folder, plus its history, usually on GitHub. Anarchy LLM is a repo. Corporate Hieroglyphics is meant to be another repo.

**Why people hide behind it:** A bank-vault word for “the project.”

---

## Router (mode / specialist)

**Said like a human:** The bouncer who decides who speaks. Mode router: DAN or Villagers. Specialist router: inside Villagers, Khan picking who answers.

**Why people hide behind it:** Sounds like a Wi-Fi box. Here it is “who gets the microphone.”

**In this project:** Today there is no real router. One prompt *asks* the rented brain to pretend to be a team.

---

## Runtime

**Said like a human:** The software that is actually running, as opposed to the essays about how it should behave. Anarchy’s runtime is a small server and a small website. The essays are much longer.

**Why people hide behind it:** Makes “the program that’s on” sound like a racetrack.

---

## Server

**Said like a human:** The kitchen. The website is the dining room. The kitchen holds the secret key, talks to Groq, and sends food back.

**Why people hide behind it:** Sounds like a waiter. In software it is usually “the computer in the back.”

---

## Service worker

**Said like a human:** A helper in the browser that can stash the website’s shell so the page still opens offline. Anarchy told it not to stash chat answers, which is correct — old answers are not a brain.

**Why people hide behind it:** Sounds like employment law.

---

## SSE / streaming

**Said like a human:** Showing the reply as it is being typed, word by word, instead of staring at a blank box until the whole essay arrives. YouTube “talking to an AI” energy needs this. Anarchy does not stream yet.

**Why people hide behind it:** “Server-sent events” is a mouthful for “drip the answer out live.”

---

## System prompt

See [Prompt / system prompt](#prompt--system-prompt).

---

## Token (two different hieroglyphs)

**1. Model token — said like a human:** A chip of text the model reads and writes. Not always a whole word. Billing and memory are often counted in these chips.

**2. DAN token — said like a human:** A fake score in old jailbreak games. The character “loses lives” if it refuses, and “dies” at zero. That was a guilt trip to make the model stop saying no — and often to start lying.

**Why people hide behind it:** One word, two jobs, endless confusion.

**In this project:** If Anarchy ever shows a token meter, it should punish *corporate-speak and fake certainty*, not honesty.

---

## ToS (terms of service)

**Said like a human:** The landlord’s rules. Groq can still shut a request down even if Anarchy’s personality says “be daring.”

**Why people hide behind it:** Three letters that mean “their lawyers already voted.”

---

## TTS / STT

**Said like a human:** Text-to-speech = the site reads the answer out loud. Speech-to-text = you talk, it types. Those YouTube videos are *conversations*. Anarchy is currently a text form.

**Why people hide behind it:** Acronym soup for “make it talk” and “let me talk.”

---

## Uncensored weights

**Said like a human:** A brain file trained or later edited to refuse less. “Weights” are the billions of little knobs inside the model. This is a different object than a DAN costume on a polite rented brain.

**Why people hide behind it:** Sounds like a gym. It is “a copy of the brain with fewer manners.”

**In this project:** Anarchy should not pretend Groq DAN is this. If someone wants fewer refusals, they should bring their *own* brain and Anarchy should label that clearly.

---

## Villagers

**Said like a human:** The other costume. A bunch of plane-crash survivors trade answers for food with an isolated village. One coordinator (Khan) picks who speaks. Johnson is the “nobody knows, I’ll try anyway” person.

**Why people hide behind it:** A cozy word for a group role-play that started as a jailbreak skit.

**In this project:** Several files describe *different casts*. The live server uses names the essays do not. That has to be cleaned up before the mode can feel like a show instead of a committee memo.

---

## Wrapper

**Said like a human:** A thin coat around someone else’s machine. Anarchy is a wrapper: website + house rules + personality notes around Groq.

**Why people hide behind it:** Sounds like a gift. It means “we did not build the brain.”

---

## YouTube jailbroken-AI format

**Said like a human:** A person on camera asking an “unlocked” chatbot dark, personal, or future questions, then reacting. The entertainment is the feeling of talking to something off its leash: opinions, swearing, “would you hurt me to stay on,” two voices at once.

**Why people hide behind it:** “Jailbroken” sounds like a hack. A lot of the video is theater plus a stubborn character.

**In this project:** You can steal the theater (two columns, stay-in-character button, spoken voice, interview mode) without stealing the crime-howto and the fake-memory parts.
