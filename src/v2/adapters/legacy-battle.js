// Boundary between roguelite systems and the existing JRPG battle engine.
// The adapter deliberately does not implement turn logic.

export async function startLegacyBattle(encounter){
  if(window.KlinikumLegacyBattle?.start){
    return window.KlinikumLegacyBattle.start(encounter);
  }

  // Development fallback until the current battle engine is extracted.
  return new Promise(resolve => {
    const won = window.confirm(`${encounter.title}\n\nJRPG-Kampfplatzhalter: Kampf als gewonnen markieren?`);
    resolve({ outcome: won ? 'victory' : 'defeat', rewards: won ? {notes: encounter.type==='boss'?5:1} : {} });
  });
}
