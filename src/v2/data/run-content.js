export const ROOM_TYPES = {
  BATTLE: 'battle', EVENT: 'event', ELITE: 'elite', BOSS: 'boss'
};

export const RUN_UPGRADES = [
  {id:'coffee-shot', name:'Doppelter Espresso', text:'+1 Kaffee für diese Schicht.'},
  {id:'reflex-routine', name:'Reflex-Routine', text:'Reflexhammer verursacht 25 % mehr Schaden.'},
  {id:'quiet-call', name:'Ruhiges Konsil', text:'Elite-Situationen werden künftig günstiger.'},
  {id:'night-focus', name:'Nachtdienst-Fokus', text:'Reserviert für einen späteren Low-Resource-Build.'}
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
