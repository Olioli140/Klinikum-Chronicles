export const ROOM_TYPES = {
  BATTLE: 'battle', EVENT: 'event', ELITE: 'elite', BOSS: 'boss'
};

export const RUN_UPGRADES = [
  {id:'coffee-shot', name:'Doppelter Espresso', icon:'☕', text:'+1 Kaffee für diese Schicht.'},
  {id:'reflex-routine', name:'Reflex-Routine', icon:'🔨', text:'Reflexhammer verursacht 25 % mehr Schaden.'},
  {id:'neuro-focus', name:'Neuro-Fokus', icon:'🧠', text:'Olivia erhält +3 ATK für diese Schicht.'},
  {id:'ward-rounds', name:'Stationsroutine', icon:'🩺', text:'Lisa erhält +3 DEF für diese Schicht.'},
  {id:'reserve-fluids', name:'Reserve-Infusion', icon:'💧', text:'Die Party heilt sofort 25 % ihrer maximalen HP.'},
  {id:'night-focus', name:'Nachtdienst-Fokus', icon:'🌙', text:'Unter 50 % HP verursachen Angriffe 30 % mehr Schaden.'},
  {id:'quiet-call', name:'Ruhiges Konsil', icon:'☎️', text:'Gegner verursachen 10 % weniger Schaden.'},
  {id:'diagnostic-edge', name:'Diagnostischer Vorsprung', icon:'🔬', text:'Kritische Trefferchance der Party +8 %.'},
  {id:'team-briefing', name:'Team-Briefing', icon:'📋', text:'Die gesamte Party erhält +1 Initiative.'},
  {id:'emergency-snack', name:'Notfall-Snack', icon:'🍫', text:'Maximale MP der Party +6 und sofort aufgefüllt.'},
  {id:'steady-hands', name:'Ruhige Hände', icon:'🫶', text:'Heilfähigkeiten wirken 25 % stärker.'},
  {id:'teaching-round', name:'Lehrvisite', icon:'📚', text:'Nach Kämpfen gibt es 20 % mehr EP.'}
];

export function buildPrototypeRoute(){
  return [
    {id:'r1', type:ROOM_TYPES.BATTLE, title:'Aufnahme', enemies:['verwirrter_patient']},
    {id:'r2', type:ROOM_TYPES.EVENT, title:'Kaffeeküche'},
    {id:'r3', type:ROOM_TYPES.BATTLE, title:'Stationsflur', enemies:['google_vater','schwindel_geist']},
    {id:'r4', type:ROOM_TYPES.BATTLE, title:'Konsil', enemies:['radiologie_kollege']},
    {id:'r5', type:ROOM_TYPES.EVENT, title:'Medikamentenschrank'},
    {id:'r6', type:ROOM_TYPES.ELITE, title:'Überfüllte Notaufnahme', enemies:['chaos_gegner','ungeduldiger_ehemann']},
    {id:'r7', type:ROOM_TYPES.BATTLE, title:'Nachtdienst', enemies:['anaesthesie_komplikation','buerokratie_daemon']},
    {id:'r8', type:ROOM_TYPES.BOSS, title:'Der Status', enemies:['status_epilepticus']}
  ];
}
