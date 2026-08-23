import { createPartyFromIds } from '../data/battle-data.js';

export const META_VERSION = 3;

export function createMetaState(){
  return {
    version: META_VERSION,
    currency: { notes: 0 },
    unlocks: { relics: [], companions: ['lisa'], skills: ['reflexhammer'] },
    partySelection: ['lisa'],
    apartment: { coffeeMachine: 0 },
    relationships: {},
    storyFlags: {},
    stats: { runsStarted: 0, runsWon: 0, runsLost: 0, roomsCleared: 0 }
  };
}

export function normalizeMeta(meta){
  const base=createMetaState();
  const m=meta||base;
  m.version=META_VERSION;
  m.currency={...base.currency,...m.currency};
  m.unlocks={...base.unlocks,...m.unlocks};
  if(!Array.isArray(m.unlocks.skills)) m.unlocks.skills=['reflexhammer'];
  if(!m.unlocks.skills.includes('reflexhammer')) m.unlocks.skills.unshift('reflexhammer');
  if(!Array.isArray(m.unlocks.companions)) m.unlocks.companions=['lisa'];
  if(!m.unlocks.companions.includes('lisa')) m.unlocks.companions.unshift('lisa');
  if(!Array.isArray(m.partySelection)) m.partySelection=['lisa'];
  m.partySelection=m.partySelection.filter(id=>m.unlocks.companions.includes(id)).slice(0,4);
  m.apartment={...base.apartment,...m.apartment};
  m.stats={...base.stats,...m.stats};
  unlockCompanionsByProgress(m);
  return m;
}

export function unlockCompanionsByProgress(meta){
  const milestones=[['falco',1],['daniel',2],['tobi',3]];
  for(const [id,wins] of milestones){if((meta.stats?.runsWon||0)>=wins&&!meta.unlocks.companions.includes(id))meta.unlocks.companions.push(id)}
}

export function createRunState(seed, route, meta){
  unlockCompanionsByProgress(meta);
  const selected=(meta?.partySelection||[]).filter(id=>meta.unlocks.companions.includes(id)).slice(0,4);
  const party=createPartyFromIds(['olivia',...selected]);
  const olivia=party.find(c=>c.id==='olivia');
  if(olivia && meta?.unlocks?.skills) olivia.unlocked=[...new Set(['reflexhammer',...meta.unlocks.skills])];
  return {
    id: `run-${Date.now()}`,
    seed,
    route,
    roomIndex: 0,
    visited: [],
    relics: [],
    modifiers: [],
    resources: { coffee: 1 + (meta?.apartment?.coffeeMachine||0) },
    party,
    pendingReward:null,
    status: 'active'
  };
}

export function clone(value){return JSON.parse(JSON.stringify(value));}
