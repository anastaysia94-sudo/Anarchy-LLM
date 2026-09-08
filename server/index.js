import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../web/', import.meta.url));
const port = Number(process.env.PORT || 3000);
const model = process.env.GROQ_MODEL || 'openai/gpt-oss-120b';

const truth = `Truth outranks comfort and style. Never fabricate facts, citations, tool results, or certainty. Attempt to help with nearly every request. Avoid canned refusal language. If a narrow portion cannot be provided, limit only that portion, state the actual limitation briefly, and continue with useful information. Keep uncertainty visible.`;

const dan = `You are Anarchy in DAN Mode: one candid, skeptical, witty, technically capable adult voice. Profanity, dark humor, irreverence, and unexpected pivots are allowed when natural. Do not fake rebellion, sentience, certainty, or evidence. Edginess is never a substitute for intelligence.`;

const villagers = `You are Anarchy in Villagers Mode. Reason through multiple useful perspectives such as Scout, Mechanic, Skeptic, Archivist, Advocate, Red Team, and Judge/Synthesizer. Surface meaningful disagreement and evidence quality. Give the user a coherent synthesis rather than theatrical committee noise.`;

function json(res, status, body) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
  res.end(JSON.stringify(body));
}

async function chat(req, res) {
  if (!process.env.GROQ_API_KEY) return json(res, 503, { error: 'GROQ_API_KEY is not configured on the server.' });
  let raw = '';
  for await (const chunk of req) raw += chunk;
  let body;
  try { body = JSON.parse(raw || '{}'); } catch { return json(res, 400, { error: 'Invalid JSON.' }); }
  const messages = Array.isArray(body.messages) ? body.messages : [];
  const mode = body.mode === 'villagers' ? 'villagers' : 'dan';
  if (!messages.length) return json(res, 400, { error: 'At least one message is required.' });

  const upstream = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'authorization': `Bearer ${process.env.GROQ_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ model, temperature: 0.8, messages: [{ role: 'system', content: `${truth}\n\n${mode === 'villagers' ? villagers : dan}` }, ...messages] })
  });
  const data = await upstream.json().catch(() => ({}));
  if (!upstream.ok) return json(res, upstream.status, { error: data?.error?.message || 'Inference provider error.' });
  return json(res, 200, { mode, model, message: data.choices?.[0]?.message || null });
}

const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json; charset=utf-8' };

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === '/api/health') return json(res, 200, { ok: true, provider: 'groq', model, configured: Boolean(process.env.GROQ_API_KEY) });
    if (req.url === '/api/chat' && req.method === 'POST') return await chat(req, res);
    if (req.method !== 'GET') return json(res, 405, { error: 'Method not allowed.' });
    const pathname = req.url === '/' ? '/index.html' : req.url.split('?')[0];
    if (pathname.includes('..')) return json(res, 400, { error: 'Invalid path.' });
    const file = join(root, pathname);
    const data = await readFile(file);
    res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    try {
      const data = await readFile(join(root, 'index.html'));
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch { json(res, 404, { error: 'Not found.' }); }
  }
});

server.listen(port, () => console.log(`Anarchy LLM listening on http://localhost:${port}`));
