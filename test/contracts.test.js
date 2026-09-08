import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('runtime matches canonical truth-first modes', async () => {
  const server = await read('server/index.js');
  assert.match(server, /Truth outranks comfort and style/);
  assert.match(server, /Khan is the coordinator/);
  assert.match(server, /Johnson is the fallback generalist/);
  assert.doesNotMatch(server, /Scout, Mechanic, Skeptic, Archivist, Advocate, Red Team, and Judge/);
  assert.match(server, /GROQ_API_KEY/);
  assert.match(server, /AbortSignal\.timeout/);
});

test('web shell publishes discovery and a real PWA worker', async () => {
  const html = await read('web/index.html');
  const app = await read('web/app.js');
  const sw = await read('web/sw.js');
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /Truth-First DAN and Villagers AI Modes/);
  assert.match(app, /anarchy\.mode/);
  assert.match(app, /serviceWorker\.register\('\/sw\.js'\)/);
  assert.match(sw, /\/api\//);
  assert.match(sw, /caches\.open/);
});
