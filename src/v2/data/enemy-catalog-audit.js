import { ENEMY_TEMPLATES } from './battle-data.js';
import { BESTIARY, ENEMY_ABILITIES, ENEMY_LOADOUTS, STATUS_EFFECTS } from './enemy-catalog.js';

export function auditEnemyCatalog(){
 const errors=[];
 const enemyIds=Object.keys(ENEMY_TEMPLATES);
 for(const id of enemyIds){
  if(!BESTIARY[id])errors.push(`Missing BESTIARY entry: ${id}`);
  if(!Array.isArray(ENEMY_LOADOUTS[id])||!ENEMY_LOADOUTS[id].length)errors.push(`Missing enemy loadout: ${id}`);
  for(const abilityId of ENEMY_LOADOUTS[id]||[]){
   const ability=ENEMY_ABILITIES[abilityId];
   if(!ability){errors.push(`Unknown ability ${abilityId} on ${id}`);continue;}
   if(ability.status&&!STATUS_EFFECTS[ability.status])errors.push(`Unknown status ${ability.status} used by ${abilityId}`);
  }
 }
 for(const id of Object.keys(BESTIARY))if(!ENEMY_TEMPLATES[id])errors.push(`Orphan BESTIARY entry: ${id}`);
 for(const id of Object.keys(ENEMY_LOADOUTS))if(!ENEMY_TEMPLATES[id])errors.push(`Orphan loadout: ${id}`);
 return {ok:errors.length===0,enemies:enemyIds.length,abilities:Object.keys(ENEMY_ABILITIES).length,statuses:Object.keys(STATUS_EFFECTS).length,errors};
}

export function assertEnemyCatalog(){const result=auditEnemyCatalog();if(!result.ok)throw new Error(`Enemy catalog audit failed:\n${result.errors.join('\n')}`);return result;}
