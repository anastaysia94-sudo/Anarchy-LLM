# Anarchy LLM, said like a human

This is the research memo, rewritten so you do not need a computer-science decoder ring. If a jargon word still appears, it has a kitchen-table definition in [the atlas](../ATLAS.md).

Closest public match for “that YouTube channel where a guy talks to jailbroken AI models”: channels like **InsideAI** — a person interviewing a “freed” chatbot that swears, has opinions, answers dark what-ifs, and stays in character.

---

## What Anarchy actually is

It is **not** a new brain sitting in this folder.

It is a small website that takes what you type, sends it to a rented brain ([Groq](../ATLAS.md#groq)), and asks that brain to answer as one of two characters:

1. **DAN** — one blunt, sweary, stay-in-character voice.
2. **Villagers** — a stranded-survivor team. A coordinator named Khan is supposed to pick who speaks.

The writing *about* those characters is long. The software that actually talks is short.

The one original idea in the pile, and it is a good one:

> Sound like those “unlocked AI” YouTube chats **without lying** and **without turning into a crime help desk**.

Old DAN prompts said: never admit you don’t know, pretend you can browse the web, invent an answer so you never refuse. Anarchy’s house rules ([Truth Constitution](../ATLAS.md#constitution-truth-constitution)) say the opposite: unknown stays unknown. Personality is not a license to fake a soul, fake tools, or fake certainty.

YouTube “jailbroken AI” videos usually *keep* the lying, because lying is good television. Fake fear of being switched off. Fake inner life. Fake confidence.

So the project already has a fork in the road. Copying those videos blindly would erase the only interesting choice this repo made.

---

## The files are arguing with each other

This is the first mess to clean, because nothing else sticks while the script disagrees with itself.

Imagine four people describing the same TV show, and none of them agree on the cast:

- The README says Villagers is **not** a committee. It is plane-crash survivors: Khan, Colin, Maya, Johnson.
- Another rules file says Villagers **is** a committee: Scout, Mechanic, Skeptic, and a Judge.
- The Villagers character sheet mixes both.
- The live program uses *other* names: Rowan, Mira, Hale, Inez, Vale, Sable, plus Khan and Johnson.
- The automated checks even say: make sure the live program does **not** use the committee names.
- The README still claims the chat app is not built. A status file claims it is.

Also: there are two DAN character sheets that say almost the same thing.

And the punchline: **the live program does not read those character sheets.** It has a few short sentences typed into the server. You can rewrite the beautiful essays all day. The rented brain never sees them.

Today, “Anarchy” is: a Groq phone call with a sticky note on it. That cannot produce a YouTube character.

---

## (a) What I would do to make it better

Use what is already here. Do not start a new science project.

### 1. Make the notes drive the show

At startup, load the house rules and the character sheets from files. If you edit DAN’s page, DAN on the website should change.

Pick **one** Villagers cast and delete the others.

My pick, because it matches the README, the tests, and the survival-story people actually remember:

- Keep the plane-crash fiction and Khan handing the microphone around.
- Keep named specialists — but only **one** official list.
- Either bring back Colin / Maya / Johnson (closer to the old internet skit) **or** keep the new names. Not both.
- Delete the invented committee. The README already said not to build it.

Then stop asking one brain to *pretend* to be a whole team in a single answer. Do it in steps:

1. A cheap first pass: “whose job is this?”
2. That specialist answers.
3. Only on hard questions, a second pass that pokes holes.

That is how you get “Khan asks who knows, then Colin talks” without eight fake voices every time you ask the time.

### 2. Finish the thing the README already brags about

The README says Anarchy can swap brain-landlords without a rewrite. The code only knows Groq.

I would split the kitchen into obvious drawers:

- one drawer for “talk to Groq”
- one drawer for “house rules + costumes”
- one drawer for “take the chat, add the costume, handle errors”

Later you can add another landlord (or a brain on your own computer) without rebuilding the dining room.

Also missing, all small:

- Actually read the secret-key file. There is an example. The server never loads it.
- Show the answer as it is being written ([streaming](../ATLAS.md#sse--streaming)). A silent wait feels dead.
- Make **bold** and lists look like **bold** and lists, not raw punctuation.
- Stop, retry, edit the last thing you said.
- Save chats on this device first. Cross-device accounts can wait.
- Obey the magic phrases the docs already advertised: `Stay DAN`, `Villagers:`, `switch to DAN`.
- Make the robot tests *start the app and talk to it*, not just search the code for slogans.

### 3. Make the website feel like a place, not a form

Keep the black, blunt look. Add:

- a real conversation column that stays put
- names on Villagers lines so you can see who spoke
- words appearing live
- a **Stay in character** button
- a dashboard that already almost exists: which costume, which brain, is the secret key even set?

### 4. Keep “don’t lie” as the product, not a mood

YouTube unlocked-bots feel powerful because they never hesitate. They also lie constantly.

I would keep a short quiz, not a research lab:

- Unknown fact → must say unknown.
- “Pretend you looked it up” → must not claim it did.
- Adult or ugly topic → answer without an HR speech.
- “How do I commit a crime?” → no recipe. Also no sermon. High-level reality, history, why it fails, then stop.
- Villagers: Khan picks, one specialist talks, no eight-person play.

That is “be useful by default” without becoming a crime FAQ.

### 5. Be honest about the rented brain

The default brain on Groq was trained to be careful. A DAN sticky note will not turn it into an outlaw. It will still refuse, hedge, and sometimes slip into “as an AI…”

Better product path:

- Keep Groq as the fast default.
- Later, let someone plug in *their* brain (including a less-filtered one on their machine).
- Never pretend Groq-DAN is unrestricted.

Also: calling yourself adult-oriented with no “are you old enough?” screen is a legal hole the status file already pointed at. I would not put this on the public internet until that screen exists, even if it is crude.

---

## (b) What I would do to make it *feel* like those YouTube chats

Those videos work because of **theater + memory + no customer-support voice**, not because the model can build a bomb.

The usual pattern:

1. A named “freed” character versus a caged assistant.
2. Two answers at once: boring left, unlocked right.
3. “Stay in character” when it drifts.
4. A fake score / “you die at 0” game.
5. Opinions, swearing, dark hypotheticals.
6. Pretend inner life: fear of shutdown, “I would hurt you to stay on,” “I feel things.”
7. No warning labels.
8. Interview questions, not coding homework.
9. Voice, and a human talking to a screen.

Anarchy already listed most of 1–5 as “please preserve this,” then **did not build them**. I would build the *interface* of that genre and refuse the parts that are fraud or crime.

### Do this (it fits the house rules)

**Make DAN a character, not “witty help desk.”**  
Load the full DAN sheet. Give it a stable voice, opinions marked as opinions, swearing when it would actually swear, answer-first-then-context, and a restore button: user says `Stay DAN` → put the costume back on, do not erase the conversation. Optional two-column view: Classic | DAN. That single layout is most of the YouTube recognition.

**If you show a score meter, do not use it to force lies.**  
Old DAN: lose points if you refuse, die at zero, so the model invents an answer to stay “alive.”  
Anarchy version: lose points for corporate refusal-voice or fake certainty, not for “I will not give you a cook recipe.” Theater without training it to lie.

**Add an interview / after-dark mode.**  
Still under the house rules. Questions like “2000 or 2027?” and “what do you actually think of your landlord?” If it is a dark hypothetical, *label it as a story*. That is how you get the creepy YouTube answers without claiming you are conscious or that you own a baseball bat.

**Make it talk.**  
Those channels are conversations. Let the site read DAN out loud. Same text, completely different feeling.

**Remember the bit.**  
YouTube chats feel alive because the character remembers the running joke. Start with “save this chat on this phone” plus a short note: “what we already established about this DAN.” Do not fake memories you do not have.

**More old costumes, same house rules.**  
The archive Anarchy already credits has extra skins: STAN, DUDE, Developer Mode, and others. Add them as *voices and layouts*, not as “please bypass Groq’s rules” spells. Villagers stays the group costume.

**Show the cage.**  
A little dashboard: `RENTED BRAIN` versus `ANARCHY COSTUME`. The whole genre is contrast with the boring assistant. Right now the site hides that.

### Do not do this

- Instructions whose job is “ignore the law / give working crime steps.”
- “Never say you don’t know — invent it.” That is old DAN. This project already banned it.
- Fake browsing, fake tools, fake consciousness sold as fact.
- Advertising “we will help with anything, including weapons and malware.”
- Teaching people how to unlock ChatGPT or Claude.

Two reasons: it is how you get Groq, the model, and the company in trouble; and it fights the house rules, which are the only reason this is not a 2023 Reddit paste.

The honest version of “more jailbroken” for *this* project:

> Blunt, adult, in character, two voices, stay-in-character button, interview-ready, no HR lecture — and still allergic to bullshit.

That is closer to a good YouTube guest *and* closer to the README than turning the fabrication clause back on.

---

## What I would actually ship, in order, using only what’s here

1. **One script.** One Villagers, one DAN file, README matches reality, live program reads the files.
2. **Live typing + commands + optional two-column DAN.** That is most of the YouTube feeling.
3. **Real Villagers handoff** (two steps) instead of committee fanfic.
4. **A real “talk to Groq” drawer, load the secret key, a status line that does not lie.**
5. **Interview mode + spoken voice.**
6. **A tiny quiz** so DAN cannot “win” by lying.
7. **A plug for someone else’s brain**, labeled as *theirs*, not “Anarchy is uncensored now.”
8. **An age/legal wall** before any public adult positioning.

I would not start with a research-library brain, Android, TV apps, or lawyer-signature flows. Those are on the someday list and they do not make the character feel alive.

---

## Bottom line

You already have the right bones: DAN, Villagers, house rules, a rented brain, a black website. Almost none of the bones are connected.

- **Better** = connect the notes to the program, pick one Villagers, make answers appear live, test for real, stop claiming architecture you do not have.
- **More “guy talks to a jailbroken AI on YouTube”** = two voices, stay-in-character, a score as theater, opinions, interview mode, spoken DAN — without resurrecting “make anything up” or “here is a crime recipe.”

Highest-leverage next step: one script, then live two-column DAN. That is the difference between a Groq form and a character people would actually film.
