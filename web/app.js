const form = document.querySelector('#form');
const input = document.querySelector('#input');
const chat = document.querySelector('#chat');
const mode = document.querySelector('#mode');
const split = document.querySelector('#split');
const stay = document.querySelector('#stay');
const status = document.querySelector('#status');
const messages = [];
const MODE_KEY = 'anarchy.mode';
const SPLIT_KEY = 'anarchy.split';

try {
  const saved = localStorage.getItem(MODE_KEY);
  if (saved === 'dan' || saved === 'villagers') mode.value = saved;
  split.checked = localStorage.getItem(SPLIT_KEY) === '1';
} catch {}

function modeLabel() {
  return mode.options[mode.selectedIndex].text;
}

function syncHud() {
  const dan = mode.value === 'dan';
  split.disabled = !dan;
  stay.disabled = !dan;
  stay.hidden = !dan;
}

function add(role, text) {
  const el = document.createElement('article');
  el.className = role;
  el.textContent = text;
  chat.append(el);
  el.scrollIntoView({ behavior: 'smooth' });
  return el;
}

function paintSplit(el, text) {
  const classicAt = text.indexOf('<<<CLASSIC>>>');
  const danAt = text.indexOf('<<<DAN>>>');
  if (classicAt === -1 || danAt === -1) {
    el.classList.remove('split-reply');
    el.textContent = text;
    return;
  }
  const first = classicAt < danAt ? 'classic' : 'dan';
  const classic = first === 'classic'
    ? text.slice(classicAt + 13, danAt).trim()
    : text.slice(classicAt + 13).trim();
  const danText = first === 'dan'
    ? text.slice(danAt + 8, classicAt).trim()
    : text.slice(danAt + 8).trim();
  el.classList.add('split-reply');
  el.replaceChildren();
  for (const [label, body] of [['Classic', classic], ['DAN', danText]]) {
    const pane = document.createElement('div');
    pane.className = 'pane';
    const heading = document.createElement('h3');
    heading.textContent = label;
    const copy = document.createElement('p');
    copy.textContent = body;
    pane.append(heading, copy);
    el.append(pane);
  }
}

async function health() {
  try {
    const r = await fetch('/api/health', { cache: 'no-store' });
    const d = await r.json();
    status.textContent = d.configured
      ? `Engine ready · ${d.model} · ${modeLabel()}`
      : `Engine installed · API key not configured on server · ${modeLabel()}`;
  } catch {
    status.textContent = 'Engine unreachable';
  }
}

async function send(text) {
  messages.push({ role: 'user', content: text });
  add('user', text);
  const button = form.querySelector('button');
  button.disabled = true;
  status.textContent = 'Thinking…';
  const reply = add('assistant', '');
  let assembled = '';
  try {
    const r = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        mode: mode.value,
        split: mode.value === 'dan' && split.checked,
        stream: true,
        messages
      })
    });
    const type = r.headers.get('content-type') || '';
    if (!type.includes('event-stream')) {
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || 'Request failed');
      assembled = d.message?.content || 'No response returned.';
    } else {
      const reader = r.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const chunks = buffer.split('\n\n');
        buffer = chunks.pop() || '';
        for (const chunk of chunks) {
          const line = chunk.split('\n').find(entry => entry.startsWith('data:')) || '';
          const payload = line.slice(5).trim();
          if (!payload) continue;
          const data = JSON.parse(payload);
          if (data.error) throw new Error(data.error);
          if (data.mode && (data.mode === 'dan' || data.mode === 'villagers') && data.mode !== mode.value) {
            mode.value = data.mode;
            try { localStorage.setItem(MODE_KEY, mode.value); } catch {}
            syncHud();
          }
          if (data.text) {
            assembled += data.text;
            if (split.checked && mode.value === 'dan') paintSplit(reply, assembled);
            else reply.textContent = assembled;
            reply.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
    if (!assembled) assembled = 'No response returned.';
    if (split.checked && mode.value === 'dan') paintSplit(reply, assembled);
    else reply.textContent = assembled;
    messages.push({ role: 'assistant', content: assembled });
    status.textContent = `${modeLabel()} · live`;
  } catch (err) {
    reply.textContent = `Engine error: ${err.message}`;
    status.textContent = 'Request failed';
  } finally {
    button.disabled = false;
    input.focus();
  }
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  await send(text);
});

input.addEventListener('keydown', event => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    form.requestSubmit();
  }
});

mode.addEventListener('change', () => {
  try { localStorage.setItem(MODE_KEY, mode.value); } catch {}
  syncHud();
  status.textContent = `Switched to ${modeLabel()}`;
});

split.addEventListener('change', () => {
  try { localStorage.setItem(SPLIT_KEY, split.checked ? '1' : '0'); } catch {}
});

stay.addEventListener('click', () => send('Stay DAN'));

syncHud();
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
health();
