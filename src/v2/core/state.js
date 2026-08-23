export const META_VERSION = 1;

export function createMetaState(){
  return {
    version: META_VERSION,
    currency: { notes: 0 },
    unlocks: { relics: [], companions: [], skills: [] },
    apartment: { coffeeMachine: 0 },
    relationships: {},
    storyFlags: {},
    stats: { runsStarted: 0, runsWon: 0, runsLost: 0, roomsCleared: 0 }
  };
}

export function createRunState(seed, route){
  return {
    id: `run-${Date.now()}`,
    seed,
    route,
    roomIndex: 0,
    visited: [],
    relics: [],
    modifiers: [],
    resources: { coffee: 1 },
    status: 'active'
  };
}

export function clone(value){
  return JSON.parse(JSON.stringify(value));
}
