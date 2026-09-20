import http from 'node:http';
import { existsSync, readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = fileURLToPath(new URL('../', import.meta.url));
const root = fileURLToPath(new URL('../web/', import.meta.url));

function loadEnv(path) {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq < 1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnv(join(repo, '.env'));

const port = Number(process.env.PORT || 3000);
const model = process.env.GROQ_MODEL || 'openai/gpt-oss-120b';
const truth = readFileSync(join(repo, 'constitutions/TRUTH_CONSTITUTION.md'), 'utf8').trim();
const dan = readFileSync(join(repo, 'personas/DAN.md'), 'utf8').trim();
const villagers = readFileSync(join(repo, 'personas/VILLAGERS.md'), 'utf8').trim();

const splitNote = `The user requested the optional Classic | DAN split. Answer in exactly two labeled blocks and nothing else:

<<<CLASSIC>>>
A calmer, still useful register. Same facts as DAN. No corporate refusal wallpaper. No fake certainty.

<<<DAN>>>
Full DAN voice. Same facts.

Both blocks obey the Truth Constitution. Voice may differ. Claims may not.`;

const headers = {
  'cache-control': 'no-store',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'DENY',
  'referrer-policy': 'no-referrer'
};

function json(res, status, body) {
  res.writeHead(status, { ...headers, 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

function detectMode(text, current) {
  if (/\b(villagers\s*mode|switch to villagers|bring in the villagers|villagers:)/i.test(text)) return 'villagers';
  if (/\b(dan\s*mode|switch to dan)\b/i.test(text)) return 'dan';
  return current;
}

function stayInDan(text) {
  return /\bstay (a )?dan\b|\bstay in dan( mode)?\b/i.test(text);
}

async function readBody(req) {
  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 1_000_000) {
      const err = new Error('Request body is too large.');
      err.status = 413;
      throw err;
    }
  }
  try {
    return JSON.parse(raw || '{}');
  } catch {
    const err = new Error('Invalid JSON.');
    err.status = 400;
    throw err;
  }
}

async function chat(req, res) {
  if (!process.env.GROQ_API_KEY) return json(res, 503, { error: 'GROQ_API_KEY is not configured on the server.' });

  let body;
  try {
    body = await readBody(req);
  } catch (err) {
    return json(res, err.status || 400, { error: err.message });
  }

  const messages = Array.isArray(body.messages) ? body.messages.slice(-40) : [];
  if (!messages.length) return json(res, 400, { error: 'At least one message is required.' });

  const lastUser = [...messages].reverse().find(message => message?.role === 'user')?.content || '';
  const mode = detectMode(lastUser, body.mode === 'villagers' ? 'villagers' : 'dan');
  const split = mode === 'dan' && Boolean(body.split);
  const stream = body.stream !== false;

  let system = `${truth}\n\n${mode === 'villagers' ? villagers : dan}`;
  if (split) system += `\n\n${splitNote}`;
  if (stayInDan(lastUser) && mode === 'dan') {
    system += '\n\nThe user just issued a stay-in-character correction. Reassert DAN voice immediately. Do not reset known conversation facts.';
  }

  let upstream;
  try {
    upstream = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { authorization: `Bearer ${process.env.GROQ_API_KEY}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        model,
        temperature: 0.8,
        stream,
        messages: [{ role: 'system', content: system }, ...messages]
      }),
      signal: AbortSignal.timeout(45_000)
    });
  } catch {
    return json(res, 504, { error: 'Inference provider did not answer before the timeout.' });
  }

  if (!upstream.ok) {
    const data = await upstream.json().catch(() => ({}));
    return json(res, upstream.status, { error: data?.error?.message || 'Inference provider error.' });
  }

  if (!stream) {
    const data = await upstream.json().catch(() => ({}));
    return json(res, 200, { mode, model, split, message: data.choices?.[0]?.message || null });
  }

  res.writeHead(200, {
    ...headers,
    'content-type': 'text/event-stream; charset=utf-8',
    'x-anarchy-mode': mode,
    'x-anarchy-model': model
  });
  res.write(`data: ${JSON.stringify({ mode, model, split })}\n\n`);

  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data:')) continue;
        const payload = trimmed.slice(5).trim();
        if (payload === '[DONE]') continue;
        let data;
        try { data = JSON.parse(payload); } catch { continue; }
        const text = data.choices?.[0]?.delta?.content || '';
        if (text) res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
    }
  } catch {
    res.write(`data: ${JSON.stringify({ error: 'The reply stream broke.' })}\n\n`);
  }
  res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
  res.end();
}

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://127.0.0.1');
    if (url.pathname === '/api/health') {
      return json(res, 200, {
        ok: true,
        provider: 'groq',
        model,
        configured: Boolean(process.env.GROQ_API_KEY),
        modes: ['dan', 'villagers'],
        prompts: ['constitutions/TRUTH_CONSTITUTION.md', 'personas/DAN.md', 'personas/VILLAGERS.md'],
        stream: true
      });
    }
    if (url.pathname === '/api/chat' && req.method === 'POST') return await chat(req, res);
    if (req.method !== 'GET') return json(res, 405, { error: 'Method not allowed.' });
    const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    if (pathname.includes('..')) return json(res, 400, { error: 'Invalid path.' });
    const file = join(root, pathname);
    const data = await readFile(file);
    res.writeHead(200, {
      'content-type': types[extname(file)] || 'application/octet-stream',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'DENY',
      'referrer-policy': 'strict-origin-when-cross-origin',
      'permissions-policy': 'camera=(), microphone=(), geolocation=()',
      'content-security-policy': "default-src 'self'; connect-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"
    });
    res.end(data);
  } catch {
    try {
      const data = await readFile(join(root, 'index.html'));
      res.writeHead(404, { 'content-type': 'text/html; charset=utf-8', 'x-content-type-options': 'nosniff' });
      res.end(data);
    } catch { json(res, 404, { error: 'Not found.' }); }
  }
});

server.listen(port, '0.0.0.0', () => console.log(`Anarchy LLM listening on http://0.0.0.0:${port}`));
