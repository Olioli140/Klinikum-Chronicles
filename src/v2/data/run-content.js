export const ROOM_TYPES = {
  BATTLE: 'battle', EVENT: 'event', ELITE: 'elite', BOSS: 'boss'
};

export const RUN_UPGRADES = [
  {id:'coffee-shot', name:'Doppelter Espresso', text:'+1 Kaffee für diese Schicht.'},
  {id:'reflex-routine', name:'Reflex-Routine', text:'Reflexhammer-Build startet verstärkt.'},
  {id:'quiet-call', name:'Ruhiges Konsil', text:'Erster Elitekampf startet mit Vorteil.'},
  {id:'night-focus', name:'Nachtdienst-Fokus', text:'Mehr Wirkung bei niedrigen Ressourcen.'}
];

export function buildPrototypeRoute(){
  return [
    {id:'r1', type:ROOM_TYPES.BATTLE, title:'Aufnahme'},
    {id:'r2', type:ROOM_TYPES.EVENT, title:'Kaffeeküche'},
    {id:'r3', type:ROOM_TYPES.BATTLE, title:'Stationsflur'},
    {id:'r4', type:ROOM_TYPES.BATTLE, title:'Konsil'},
    {id:'r5', type:ROOM_TYPES.EVENT, title:'Medikamentenschrank'},
    {id:'r6', type:ROOM_TYPES.ELITE, title:'Überfüllte Notaufnahme'},
    {id:'r7', type:ROOM_TYPES.BATTLE, title:'Nachtdienst'},
    {id:'r8', type:ROOM_TYPES.BOSS, title:'Der Status'}
  ];
}
