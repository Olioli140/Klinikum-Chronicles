import { createStartingParty } from '../data/battle-data.js';

export const META_VERSION = 2;

export function createMetaState(){
  return {
    version: META_VERSION,
    currency: { notes: 0 },
    unlocks: { relics: [], companions: [], skills: ['reflexhammer'] },
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
  m.apartment={...base.apartment,...m.apartment};
  m.stats={...base.stats,...m.stats};
  return m;
}

export function createRunState(seed, route, meta){
  const party=createStartingParty();
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

export function clone(value){
  return JSON.parse(JSON.stringify(value));
}
