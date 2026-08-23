import { startJRPGCombat } from '../combat/jrpg-battle.js';

// Stable boundary: roguelite/run systems know nothing about turn logic.
export function startLegacyBattle(encounter,{party,run}={}){
  return startJRPGCombat({encounter,party,run});
}
