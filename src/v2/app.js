import { loadMeta, saveMeta, saveRun } from './core/save.js';
import { RunController } from './core/run.js';

const meta = loadMeta();
const app = document.querySelector('#app');
const controller = new RunController({
  meta,
  onMetaChange: saveMeta,
  onRunChange: run => { saveRun(run); render(); }
});

function button(label, action, extra=''){
  return `<button data-action="${action}" ${extra}>${label}</button>`;
}

function renderHub(){
  app.innerHTML = `
    <section class="panel apartment">
      <div class="eyebrow">ROGUELITE v0.2 · DEV</div>
      <h1>🏠 Olivias Wohnung</h1>
      <p>Feierabend. Die Wohnung ist der permanente Hub; eine Schicht ist ein Roguelite-Run mit klassischem JRPG-Kampf.</p>
      <div class="stats">
        <div><span>Forschungsnotizen</span><strong>📚 ${meta.currency.notes}</strong></div>
        <div><span>Gestartete Schichten</span><strong>${meta.stats.runsStarted}</strong></div>
        <div><span>Gewonnene Schichten</span><strong>${meta.stats.runsWon}</strong></div>
        <div><span>Wohnung</span><strong>☕ Kaffeemaschine Lv.${meta.apartment.coffeeMachine}</strong></div>
      </div>
      <div class="room-grid">
        <article>🛏️ <b>Bett</b><small>Nächste Schicht / Story</small></article>
        <article>💻 <b>Schreibtisch</b><small>Skills & Forschung</small></article>
        <article>📱 <b>Telefon</b><small>Beziehungen & Nebenquests</small></article>
        <article>☕ <b>Küche</b><small>Vorbereitung</small></article>
      </div>
      <div class="actions">${button('Schicht beginnen →','start')}</div>
    </section>`;
}

function renderRun(){
  const run = controller.run;
  const room = controller.currentRoom();
  const route = run.route.map((r,i)=>`<div class="node ${i<run.roomIndex?'done':''} ${i===run.roomIndex?'current':''}"><span>${i+1}</span><b>${r.title}</b><small>${r.type}</small></div>`).join('');
  const party = run.party.map(c=>`<div class="run-party-card"><b style="color:${c.color}">${c.emoji} ${c.name}</b><small>Lv${c.level} · HP ${c.hp}/${c.maxHp} · MP ${c.mp}/${c.maxMp}</small></div>`).join('');
  const relics = run.relics.length ? run.relics.join(' · ') : 'noch keine';
  app.innerHTML = `
    <section class="panel hospital">
      <div class="eyebrow">AKTUELLE SCHICHT</div>
      <h1>🏥 Klinikum</h1>
      <p>Run ${run.id} · Raum ${Math.min(run.roomIndex+1,8)}/8 · ☕ ${run.resources.coffee}</p>
      <div class="run-party">${party}</div>
      <p class="relic-line"><b>Run-Upgrades:</b> ${relics}</p>
      <div class="route">${route}</div>
      <div class="encounter">
        <h2>${room ? room.title : 'Schicht abgeschlossen'}</h2>
        <p>${room ? room.type.toUpperCase() : ''}</p>
        ${room ? button(room.type==='event'?'Event ausführen':'JRPG-Kampf betreten','enter') : ''}
      </div>
      <p class="note">v0.2 Vertical Slice: Der Kampf läuft jetzt als eigenständige JRPG-Engine. Run- und Meta-System kennen nur Ergebnis und Belohnung.</p>
    </section>`;
}

function render(){ controller.run ? renderRun() : renderHub(); }

document.addEventListener('click', async e => {
  const action = e.target.closest('[data-action]')?.dataset.action;
  if(action==='start'){ controller.start(); return; }
  if(action==='enter'){
    const result = await controller.enterCurrentRoom();
    if(result?.kind==='event') alert(`${result.reward.name}\n${result.reward.text}`);
    if(result?.kind==='run-finished') alert(result.won ? 'Schicht geschafft! Zurück nach Hause.' : 'Schicht gescheitert. Zurück nach Hause.');
    render();
  }
});

render();
