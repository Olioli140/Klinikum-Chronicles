import { createPartyFromIds, CHAR_DEFS } from '../data/battle-data.js';
import { PASSIVE_SKILLS, activeSynergies } from '../data/party-builds.js';
import { EQUIPMENT, starterEquipment, inventoryExpansionGrant, emptyLoadout, inventoryCounts, canEquip } from '../data/equipment.js';

export const META_VERSION=10;
const defaultApartment=()=>({coffeeMachine:0,bookshelf:0,medicineCabinet:0,shoeRack:0,sofa:0});
const defaultCareer=()=>({stage:'resident',facharzt:false,specialization:null,examReady:false});

function defaultCharacterProgress(){
  const out={};
  for(const id of Object.keys(CHAR_DEFS))out[id]={level:1,xp:0,xpNext:30,skillPoints:2,unlocked:[...(CHAR_DEFS[id].skills||[])],equipment:emptyLoadout(),career:defaultCareer()};
  return out;
}

export function createMetaState(){
  return{version:META_VERSION,currency:{notes:0},unlocks:{relics:[],companions:['lisa'],skills:['reflexhammer'],equipment:starterEquipment()},partySelection:['lisa'],characters:defaultCharacterProgress(),apartment:defaultApartment(),relationships:{},storyFlags:{completedMissions:[]},stats:{runsStarted:0,runsWon:0,runsLost:0,roomsCleared:0}};
}

function normalizeEquipmentAssignments(m){
  const remaining=inventoryCounts(m.unlocks.equipment||[]);
  for(const id of Object.keys(CHAR_DEFS)){
    const p=m.characters[id];if(!p)continue;
    for(const slot of Object.keys(emptyLoadout())){
      const itemId=p.equipment?.[slot];if(!itemId)continue;
      const item=EQUIPMENT[itemId];
      if(!item||item.slot!==slot||!canEquip(id,item)||(remaining[itemId]||0)<=0){p.equipment[slot]=null;continue;}
      remaining[itemId]--;
    }
  }
}

export function normalizeMeta(meta){
  const base=createMetaState(),m=meta||base,oldVersion=Number(meta?.version)||0;
  m.currency={...base.currency,...m.currency};
  m.unlocks={...base.unlocks,...m.unlocks};
  if(!Array.isArray(m.unlocks.equipment))m.unlocks.equipment=starterEquipment();
  if(oldVersion>0&&oldVersion<10)m.unlocks.equipment.push(...inventoryExpansionGrant());
  m.characters={...base.characters,...(m.characters||{})};
  if(!Array.isArray(m.unlocks.skills))m.unlocks.skills=['reflexhammer'];
  if(!m.unlocks.skills.includes('reflexhammer'))m.unlocks.skills.unshift('reflexhammer');
  if(!Array.isArray(m.unlocks.companions))m.unlocks.companions=['lisa'];
  if(!m.unlocks.companions.includes('lisa'))m.unlocks.companions.unshift('lisa');
  if(!Array.isArray(m.partySelection))m.partySelection=['lisa'];
  m.partySelection=m.partySelection.filter(id=>m.unlocks.companions.includes(id)).slice(0,4);
  for(const id of Object.keys(CHAR_DEFS)){
    const d=base.characters[id],p=m.characters[id]||{};
    m.characters[id]={...d,...p,equipment:{...emptyLoadout(),...(p.equipment||{})},career:{...defaultCareer(),...(p.career||{})}};
    if(!Array.isArray(m.characters[id].unlocked))m.characters[id].unlocked=[...(CHAR_DEFS[id].skills||[])];
    m.characters[id].unlocked=[...new Set([...(CHAR_DEFS[id].skills||[]),...m.characters[id].unlocked])];
    const career=m.characters[id].career;
    if(m.characters[id].level>=30&&!career.facharzt)career.examReady=true;
    if(career.facharzt){career.stage='facharzt';career.examReady=false;}
  }
  normalizeEquipmentAssignments(m);
  m.characters.olivia.unlocked=[...new Set([...m.characters.olivia.unlocked,...m.unlocks.skills])];
  m.apartment={...defaultApartment(),...(m.apartment||{})};
  m.stats={...base.stats,...m.stats};
  m.storyFlags={...(m.storyFlags||{})};
  if(!Array.isArray(m.storyFlags.completedMissions))m.storyFlags.completedMissions=[];
  m.version=META_VERSION;
  return m;
}

export function syncCharacterProgress(meta,party){
  if(!meta.characters)meta.characters=defaultCharacterProgress();
  for(const c of party||[]){
    const old=meta.characters[c.id]||{};
    const career={...defaultCareer(),...(old.career||{})};
    if(c.level>=30&&!career.facharzt)career.examReady=true;
    meta.characters[c.id]={...old,level:c.level,xp:c.xp,xpNext:c.xpNext,skillPoints:c.skillPoints,unlocked:[...c.unlocked],equipment:{...emptyLoadout(),...(old.equipment||{})},career};
  }
}

function applyPassiveSkills(party){for(const c of party)for(const id of c.unlocked||[]){const s=PASSIVE_SKILLS[id];if(!s)continue;if(s.type==='passive_atk')c.atk+=s.amount;if(s.type==='passive_spd')c.spd+=s.amount;if(s.type==='passive_crit')c.crit+=s.amount;if(s.type==='passive_hp'){c.maxHp+=s.amount;c.hp=c.maxHp}}}
function applyEquipment(party,meta){for(const c of party){c.equipment={...emptyLoadout(),...(meta.characters?.[c.id]?.equipment||{})};c.equipmentEffects=[];for(const itemId of Object.values(c.equipment)){const item=EQUIPMENT[itemId];if(!item)continue;const m=item.mods||{};c.atk+=m.atk||0;c.def+=m.def||0;c.spd+=m.spd||0;c.crit+=m.crit||0;if(m.hp){c.maxHp+=m.hp;c.hp+=m.hp}if(m.mp){c.maxMp+=m.mp;c.mp+=m.mp}if(item.effect)c.equipmentEffects.push(item.effect)}}}
function applyApartmentBonuses(party,meta){const a=meta.apartment||{};for(const c of party){const hp=(a.medicineCabinet||0)*4,mp=(a.bookshelf||0)*3,spd=a.shoeRack||0,def=a.sofa||0;if(hp){c.maxHp+=hp;c.hp+=hp}if(mp){c.maxMp+=mp;c.mp+=mp}if(spd)c.spd+=spd;if(def)c.def+=def}}
function applyStaticSynergies(party,synergies){const get=id=>party.find(c=>c.id===id);if(synergies.some(s=>s.id==='neuro_gyn'))party.forEach(c=>c.crit+=5);if(synergies.some(s=>s.id==='shock_room')&&get('tobi'))get('tobi').def+=2;if(synergies.some(s=>s.id==='airway_team'))for(const id of ['daniel','tobi'])if(get(id))get(id).spd+=1}

export function createRunState(seed,route,meta){
  normalizeEquipmentAssignments(meta);
  const selected=(meta?.partySelection||[]).filter(id=>meta.unlocks.companions.includes(id)).slice(0,4),party=createPartyFromIds(['olivia',...selected],meta.characters||{});
  applyPassiveSkills(party);applyEquipment(party,meta);applyApartmentBonuses(party,meta);
  const synergies=activeSynergies(party.map(c=>c.id));applyStaticSynergies(party,synergies);const a=meta.apartment||{};
  return{id:`run-${Date.now()}`,seed,route,roomIndex:0,visited:[],relics:[],synergies:synergies.map(s=>s.id),modifiers:[],resources:{coffee:1+(a.coffeeMachine||0)},party,pendingReward:null,status:'active'};
}
export function clone(value){return JSON.parse(JSON.stringify(value))}
