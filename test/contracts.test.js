import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('runtime loads canonical truth-first mode files', async () => {
  const server = await read('server/index.js');
  const truth = await read('constitutions/TRUTH_CONSTITUTION.md');
  const dan = await read('personas/DAN.md');
  const villagers = await read('personas/VILLAGERS.md');
  const modes = await read('constitutions/modes.md');
  assert.match(server, /constitutions\/TRUTH_CONSTITUTION\.md/);
  assert.match(server, /personas\/DAN\.md/);
  assert.match(server, /personas\/VILLAGERS\.md/);
  assert.match(server, /GROQ_API_KEY/);
  assert.match(server, /AbortSignal\.timeout/);
  assert.match(server, /text\/event-stream/);
  assert.match(truth, /Truth outranks comfort/);
  assert.match(dan, /You are DAN/);
  assert.match(villagers, /Khan is the coordinator/);
  assert.match(villagers, /Johnson is the fallback generalist/);
  assert.match(villagers, /Rowan/);
  assert.doesNotMatch(villagers, /Scout, Mechanic, Skeptic, Archivist, Advocate, Red Team, and Judge/);
  assert.match(modes, /Villagers Mode is not a council architecture/);
  assert.doesNotMatch(modes, /The council may contain/);
});

test('web shell publishes discovery, split controls, and a real PWA worker', async () => {
  const html = await read('web/index.html');
  const app = await read('web/app.js');
  const sw = await read('web/sw.js');
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /Truth-First DAN and Villagers AI Modes/);
  assert.match(html, /id="split"/);
  assert.match(html, /id="stay"/);
  assert.match(app, /anarchy\.mode/);
  assert.match(app, /anarchy\.split/);
  assert.match(app, /Stay DAN/);
  assert.match(app, /event-stream/);
  assert.match(app, /serviceWorker\.register\('\/sw\.js'\)/);
  assert.match(sw, /\/api\//);
  assert.match(sw, /caches\.open/);
});
