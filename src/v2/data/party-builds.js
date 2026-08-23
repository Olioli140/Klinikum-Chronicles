export const PASSIVE_SKILLS={
 neuro_routine:{id:'neuro_routine',name:'Neurologische Routine',type:'passive_atk',amount:2,desc:'Passiv: Olivia erhält +2 ATK.'},
 stationsruhe:{id:'stationsruhe',name:'Stationsruhe',type:'passive_heal',amount:.15,desc:'Passiv: Lisas Heilfähigkeiten wirken 15 % stärker.'},
 schnelle_haende:{id:'schnelle_haende',name:'Schnelle Hände',type:'passive_spd',amount:2,desc:'Passiv: Falco erhält +2 SPD.'},
 monitoring:{id:'monitoring',name:'Lückenloses Monitoring',type:'passive_crit',amount:5,desc:'Passiv: Daniel erhält +5 % kritische Trefferchance.'},
 traumaroutine:{id:'traumaroutine',name:'Trauma-Routine',type:'passive_hp',amount:12,desc:'Passiv: Tobi erhält +12 maximale HP.'}
};

export const PASSIVE_TREE_NODES={
 olivia:{id:'neuro_routine',tier:2,cost:1,req:['reflexhammer'],branch:'Passiv'},
 lisa:{id:'stationsruhe',tier:2,cost:1,req:['infusion'],branch:'Passiv'},
 falco:{id:'schnelle_haende',tier:2,cost:1,req:['ultraschall'],branch:'Passiv'},
 daniel:{id:'monitoring',tier:2,cost:1,req:['intubation'],branch:'Passiv'},
 tobi:{id:'traumaroutine',tier:2,cost:1,req:['skalpell'],branch:'Passiv'}
};

export const PARTY_SYNERGIES=[
 {id:'neuro_internal',members:['olivia','lisa'],name:'Diagnostik & Stabilisierung',icon:'🧠🩺',desc:'Heilung +10 %. Gegner mit gesenkter DEF erleiden 10 % mehr Schaden.'},
 {id:'neuro_anaesthesia',members:['olivia','daniel'],name:'Neuroanästhesie',icon:'🧠💉',desc:'Olivia verursacht an betäubten Gegnern 30 % mehr Schaden.'},
 {id:'neuro_gyn',members:['olivia','falco'],name:'Sono-Konsil',icon:'🧠👶',desc:'Die Party erhält +5 % kritische Trefferchance.'},
 {id:'neuro_trauma',members:['olivia','tobi'],name:'Notfallteam',icon:'🧠🦴',desc:'Tobi verursacht 20 % mehr Schaden, solange Olivia unter 50 % HP liegt.'},
 {id:'shock_room',members:['lisa','tobi'],name:'Schockraum-Duo',icon:'🩺🦴',desc:'Tobi erhält +2 DEF; Lisas Einzelheilung auf Tobi wirkt 20 % stärker.'},
 {id:'airway_team',members:['daniel','tobi'],name:'Trauma-Atemweg',icon:'💉🦴',desc:'Daniel und Tobi erhalten +1 SPD.'}
];

export function activeSynergies(ids){const set=new Set(ids);return PARTY_SYNERGIES.filter(s=>s.members.every(id=>set.has(id)))}
