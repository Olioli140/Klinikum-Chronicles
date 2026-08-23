import { createMetaState, normalizeMeta } from './state.js';

const META_KEY = 'klinikum-chronicles-v2-meta';
const RUN_KEY = 'klinikum-chronicles-v2-run';

export function loadMeta(){
  try { return normalizeMeta(JSON.parse(localStorage.getItem(META_KEY)) || createMetaState()); }
  catch { return createMetaState(); }
}

export function saveMeta(meta){
  localStorage.setItem(META_KEY, JSON.stringify(normalizeMeta(meta)));
}

export function loadRun(){
  try { return JSON.parse(localStorage.getItem(RUN_KEY)) || null; }
  catch { return null; }
}

export function saveRun(run){
  if(run) localStorage.setItem(RUN_KEY, JSON.stringify(run));
  else localStorage.removeItem(RUN_KEY);
}

export function resetV2Save(){
  localStorage.removeItem(META_KEY);
  localStorage.removeItem(RUN_KEY);
}
