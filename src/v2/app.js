import { loadMeta, saveMeta, saveRun } from './core/save.js';
import { RunController } from './core/run.js';
import { OLIVIA_SKILL_TREE, SKILLS } from './data/battle-data.js';

const meta=loadMeta(),app=document.querySelector('#app');
const controller=new RunController({meta,onMetaChange:saveMeta,onRunChange:run=>{saveRun(run);render()}});
let hubView='home';
const button=(label,action,extra='')=>`<button data-action="${action}" ${extra}>${label}</button>`;

function canUnlock(node){return !meta.unlocks.skills.includes(node.id)&&node.req.every(id=>meta.unlocks.skills.includes(id))&&meta.currency.notes>=node.cost}
function renderSkillTree(){
 const nodes=OLIVIA_SKILL_TREE.map(node=>{const skill=SKILLS[node.id],owned=meta.unlocks.skills.includes(node.id),available=canUnlock(node);return `<article class="skill-node ${owned?'owned':available?'available':'locked'}"><span>Tier ${node.tier} · ${node.branch}</span><h3>${skill.name}</h3><p>${skill.desc}</p><small>${owned?'Freigeschaltet ✔':`${node.cost} 📚 · Voraussetzung: ${node.req.length?node.req.map(x=>SKILLS[x]?.name||x).join(', '):'keine'}`}</small>${owned?'':`<button data-skill-unlock="${node.id}" ${available?'':'disabled'}>Freischalten</button>`}</article>`}).join('');
 app.innerHTML=`<section class="panel apartment"><div class="eyebrow">OLIVIAS SCHREIBTISCH</div><h1>💻 Neurologie-Fortbildung</h1><p>Forschungsnotizen aus Schichten werden permanent in Fähigkeiten investiert. Freigeschaltete Fähigkeiten stehen Olivia in zukünftigen Runs zur Verfügung.</p><h2>📚 ${meta.currency.notes} Forschungsnotizen</h2><div class="skill-grid">${nodes}</div><div class="actions">${button('← Zurück zur Wohnung','hub-home')}</div></section>`;
}
function renderHub(){
 if(hubView==='skills'){renderSkillTree();return}
 app.innerHTML=`<section class="panel apartment"><div class="eyebrow">ROGUELITE v0.3 · DEV</div><h1>🏠 Olivias Wohnung</h1><p>Feierabend. Permanente Fortschritte werden hier vorbereitet; jede Schicht baut anschließend einen neuen temporären Build.</p><div class="stats"><div><span>Forschungsnotizen</span><strong>📚 ${meta.currency.notes}</strong></div><div><span>Gestartete Schichten</span><strong>${meta.stats.runsStarted}</strong></div><div><span>Gewonnene Schichten</span><strong>${meta.stats.runsWon}</strong></div><div><span>Freigeschaltete Olivia-Skills</span><strong>${meta.unlocks.skills.length}</strong></div></div><div class="room-grid"><article>🛏️ <b>Bett</b><small>Nächste Schicht / Story</small></article><article class="clickable" data-action="hub-skills">💻 <b>Schreibtisch</b><small>Olivia-Skilltree & Forschung</small></article><article>📱 <b>Telefon</b><small>Beziehungen & Nebenquests</small></article><article>☕ <b>Küche</b><small>Vorbereitung</small></article></div><div class="actions">${button('Schicht beginnen →','start')}</div></section>`;
}
function renderReward(run){
 const cards=run.pendingReward.map(r=>`<button class="reward-card" data-reward="${r.id}"><span>${r.icon||'✨'}</span><b>${r.name}</b><small>${r.text}</small></button>`).join('');
 return `<div class="reward-pick"><div class="eyebrow">SCHICHT-UPGRADE</div><h2>Wähle 1 von 3</h2><p>Diese Verbesserung gilt nur für die aktuelle Schicht.</p><div class="reward-grid">${cards}</div></div>`;
}
function renderRun(){
 const run=controller.run,room=controller.currentRoom(),route=run.route.map((r,i)=>`<div class="node ${i<run.roomIndex?'done':''} ${i===run.roomIndex?'current':''}"><span>${i+1}</span><b>${r.title}</b><small>${r.type}</small></div>`).join(''),party=run.party.map(c=>`<div class="run-party-card"><b style="color:${c.color}">${c.emoji} ${c.name}</b><small>Lv${c.level} · HP ${c.hp}/${c.maxHp} · MP ${c.mp}/${c.maxMp}</small></div>`).join(''),relics=run.relics.length?run.relics.join(' · '):'noch keine';
 app.innerHTML=`<section class="panel hospital"><div class="eyebrow">AKTUELLE SCHICHT</div><h1>🏥 Klinikum</h1><p>Run ${run.id} · Raum ${Math.min(run.roomIndex+1,8)}/8 · ☕ ${run.resources.coffee}</p><div class="run-party">${party}</div><p class="relic-line"><b>Run-Upgrades:</b> ${relics}</p>${run.pendingReward?renderReward(run):`<div class="route">${route}</div><div class="encounter"><h2>${room?room.title:'Schicht abgeschlossen'}</h2><p>${room?room.type.toUpperCase():''}</p>${room?button(room.type==='event'?'Event betreten':'JRPG-Kampf betreten','enter'):''}</div>`}<p class="note">v0.3: permanenter Olivia-Skilltree + drei echte Run-Upgrades zur Auswahl nach Begegnungen.</p></section>`;
}
function render(){controller.run?renderRun():renderHub()}
function unlockSkill(id){const node=OLIVIA_SKILL_TREE.find(x=>x.id===id);if(!node||!canUnlock(node))return;meta.currency.notes-=node.cost;meta.unlocks.skills.push(id);saveMeta(meta);render()}

document.addEventListener('click',async e=>{
 const unlock=e.target.closest('[data-skill-unlock]')?.dataset.skillUnlock;if(unlock){unlockSkill(unlock);return}
 const reward=e.target.closest('[data-reward]')?.dataset.reward;if(reward){controller.chooseReward(reward);return}
 const action=e.target.closest('[data-action]')?.dataset.action;
 if(action==='hub-skills'){hubView='skills';render();return}if(action==='hub-home'){hubView='home';render();return}if(action==='start'){hubView='home';controller.start();return}
 if(action==='enter'){const result=await controller.enterCurrentRoom();if(result?.kind==='run-finished')alert(result.won?'Schicht geschafft! Zurück nach Hause.':'Schicht gescheitert. Zurück nach Hause.');render()}
});
render();
