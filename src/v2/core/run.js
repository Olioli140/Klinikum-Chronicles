import { createRunState } from './state.js';
import { buildPrototypeRoute, ROOM_TYPES, RUN_UPGRADES } from '../data/run-content.js';
import { startLegacyBattle } from '../adapters/legacy-battle.js';

export class RunController {
  constructor({meta, onMetaChange, onRunChange}){
    this.meta = meta;
    this.onMetaChange = onMetaChange;
    this.onRunChange = onRunChange;
    this.run = null;
  }

  start(seed = Date.now()){
    this.meta.stats.runsStarted++;
    this.run = createRunState(seed, buildPrototypeRoute());
    this.emit();
    return this.run;
  }

  currentRoom(){ return this.run?.route[this.run.roomIndex] || null; }

  async enterCurrentRoom(){
    const room = this.currentRoom();
    if(!room) return {kind:'run-complete'};

    if(room.type === ROOM_TYPES.EVENT){
      const reward = RUN_UPGRADES[(this.run.roomIndex + this.run.seed) % RUN_UPGRADES.length];
      this.run.relics.push(reward.id);
      this.completeRoom(room);
      return {kind:'event', room, reward};
    }

    const result = await startLegacyBattle(room);
    if(result.outcome === 'victory'){
      this.meta.currency.notes += result.rewards?.notes || 1;
      this.completeRoom(room);
      if(room.type === ROOM_TYPES.BOSS) return this.finish(true);
      return {kind:'battle-victory', room, result};
    }

    return this.finish(false);
  }

  completeRoom(room){
    this.run.visited.push(room.id);
    this.run.roomIndex++;
    this.meta.stats.roomsCleared++;
    this.emit();
  }

  finish(won){
    this.run.status = won ? 'won' : 'lost';
    if(won) this.meta.stats.runsWon++; else this.meta.stats.runsLost++;
    const summary = {kind:'run-finished', won, run:this.run};
    this.run = null;
    this.emit();
    return summary;
  }

  emit(){
    this.onMetaChange?.(this.meta);
    this.onRunChange?.(this.run);
  }
}
