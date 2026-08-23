import { createPartyFromIds, CHAR_DEFS } from '../data/battle-data.js';
import { PASSIVE_SKILLS, activeSynergies } from '../data/party-builds.js';

export const META_VERSION = 5;

function defaultCharacterProgress(){
  const out={};
  for(const id of Object.keys(CHAR_DEFS)) out[id]={level:1,xp:0,xpNext:30,skillPoints:2,unlocked:[...(CHAR_DEFS[id].skills||[])]};
  return out;
}

export function createMetaState(){
  return {version:META_VERSION,currency:{notes:0},unlocks:{relics:[],companions:['lisa'],skills:['reflexhammer']},partySelection:['lisa'],characters:defaultCharacterProgress(),apartment:{coffeeMachine:0},relationships:{},storyFlags:{},stats:{runsStarted:0,runsWon:0,runsLost:0,roomsCleared:0}};
}

export function normalizeMeta(meta){
  const base=createMetaState(),m=meta||base;m.version=META_VERSION;
  m.currency={...base.currency,...m.currency};m.unlocks={...base.unlocks,...m.unlocks};m.characters={...base.characters,...(m.characters||{})};
  if(!Array.isArray(m.unlocks.skills))m.unlocks.skills=['reflexhammer'];if(!m.unlocks.skills.includes('reflexhammer'))m.unlocks.skills.unshift('reflexhammer');
  if(!Array.isArray(m.unlocks.companions))m.unlocks.companions=['lisa'];if(!m.unlocks.companions.includes('lisa'))m.unlocks.companions.unshift('lisa');
  if(!Array.isArray(m.partySelection))m.partySelection=['lisa'];m.partySelection=m.partySelection.filter(id=>m.unlocks.companions.includes(id)).slice(0,4);
  for(const id of Object.keys(CHAR_DEFS)){const d=base.characters[id],p=m.characters[id]||{};m.characters[id]={...d,...p};if(!Array.isArray(m.characters[id].unlocked))m.characters[id].unlocked=[...(CHAR_DEFS[id].skills||[])];m.characters[id].unlocked=[...new Set([...(CHAR_DEFS[id].skills||[]),...m.characters[id].unlocked])];}
  m.characters.olivia.unlocked=[...new Set([...m.characters.olivia.unlocked,...m.unlocks.skills])];
  m.apartment={...base.apartment,...m.apartment};m.stats={...base.stats,...m.stats};unlockCompanionsByProgress(m);return m;
}

export function unlockCompanionsByProgress(meta){for(const [id,wins] of [['falco',1],['daniel',2],['tobi',3]])if((meta.stats?.runsWon||0)>=wins&&!meta.unlocks.companions.includes(id))meta.unlocks.companions.push(id)}
export function syncCharacterProgress(meta,party){if(!meta.characters)meta.characters=defaultCharacterProgress();for(const c of party||[])meta.characters[c.id]={level:c.level,xp:c.xp,xpNext:c.xpNext,skillPoints:c.skillPoints,unlocked:[...c.unlocked]}}

function applyPassiveSkills(party){
  for(const c of party){for(const id of c.unlocked||[]){const s=PASSIVE_SKILLS[id];if(!s)continue;if(s.type==='passive_atk')c.atk+=s.amount;if(s.type==='passive_spd')c.spd+=s.amount;if(s.type==='passive_crit')c.crit+=s.amount;if(s.type==='passive_hp'){c.maxHp+=s.amount;c.hp=c.maxHp}}}
}
function applyStaticSynergies(party,synergies){
  const get=id=>party.find(c=>c.id===id);
  if(synergies.some(s=>s.id==='neuro_gyn'))party.forEach(c=>c.crit+=5);
  if(synergies.some(s=>s.id==='shock_room')&&get('tobi'))get('tobi').def+=2;
  if(synergies.some(s=>s.id==='airway_team'))for(const id of ['daniel','tobi'])if(get(id))get(id).spd+=1;
}

export function createRunState(seed,route,meta){
  unlockCompanionsByProgress(meta);const selected=(meta?.partySelection||[]).filter(id=>meta.unlocks.companions.includes(id)).slice(0,4);const party=createPartyFromIds(['olivia',...selected],meta.characters||{});applyPassiveSkills(party);const synergies=activeSynergies(party.map(c=>c.id));applyStaticSynergies(party,synergies);
  return {id:`run-${Date.now()}`,seed,route,roomIndex:0,visited:[],relics:[],synergies:synergies.map(s=>s.id),modifiers:[],resources:{coffee:1+(meta?.apartment?.coffeeMachine||0)},party,pendingReward:null,status:'active'};
}
export function clone(value){return JSON.parse(JSON.stringify(value));}
