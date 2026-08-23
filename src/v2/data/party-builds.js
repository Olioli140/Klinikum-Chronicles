export const PASSIVE_SKILLS={
 neuro_routine:{id:'neuro_routine',name:'Neurologische Routine',type:'passive_atk',amount:2,desc:'Passiv: Olivia erhält +2 ATK.'},neurotempo:{id:'neurotempo',name:'Schnelle Lokalisation',type:'passive_spd',amount:2,desc:'Passiv: Olivia erhält +2 SPD.'},hammermeister:{id:'hammermeister',name:'Hammermeisterin',type:'passive_crit',amount:8,desc:'Passiv: Olivia erhält +8 % kritische Trefferchance.'},
 facharzt_neurologie:{id:'facharzt_neurologie',name:'Fachärztin für Neurologie',type:'career_marker',amount:0,desc:'Karrierestatus: nach bestandener Facharztmission freigeschaltet.'},
 spec_epileptologie:{id:'spec_epileptologie',name:'Schwerpunkt Epileptologie',type:'career_marker',amount:0,desc:'Permanenter Spezialisierungsmarker. Öffnet den Epileptologie-Ast.'},
 spec_neuroimmunologie:{id:'spec_neuroimmunologie',name:'Schwerpunkt Neuroimmunologie',type:'career_marker',amount:0,desc:'Permanenter Spezialisierungsmarker. Öffnet den Neuroimmunologie-Ast.'},
 epilepto_timing:{id:'epilepto_timing',name:'Iktales Timing',type:'passive_spd',amount:3,desc:'Epileptologie: +3 SPD für einen kontrollorientierten Spielstil.'},
 epilepto_burst:{id:'epilepto_burst',name:'Postiktales Fenster',type:'passive_crit',amount:12,desc:'Epileptologie: +12 % Krit-Chance als Basis für spätere Burst-Synergien.'},
 epilepto_precision:{id:'epilepto_precision',name:'EEG-Präzision',type:'passive_atk',amount:4,desc:'Epileptologie: +4 ATK. Vorbereitung auf Unterbrechungs- und Statusmechaniken.'},
 neuroimmun_reserve:{id:'neuroimmun_reserve',name:'Immunologische Reserve',type:'passive_hp',amount:18,desc:'Neuroimmunologie: +18 maximale HP für längere Kämpfe.'},
 neuroimmun_tempo:{id:'neuroimmun_tempo',name:'Frühe Eskalation',type:'passive_spd',amount:1,desc:'Neuroimmunologie: +1 SPD für frühzeitige Support-Interventionen.'},
 neuroimmun_focus:{id:'neuroimmun_focus',name:'Langzeitstrategie',type:'passive_crit',amount:6,desc:'Neuroimmunologie: +6 % Krit-Chance; späterer Anker für Sustain- und Cleanse-Synergien.'},
 stationsruhe:{id:'stationsruhe',name:'Stationsruhe',type:'passive_heal',amount:.15,desc:'Passiv: Lisas Heilfähigkeiten wirken 15 % stärker.'},internistische_reserve:{id:'internistische_reserve',name:'Internistische Reserve',type:'passive_hp',amount:10,desc:'Passiv: Lisa erhält +10 maximale HP.'},laborinstinkt:{id:'laborinstinkt',name:'Laborinstinkt',type:'passive_crit',amount:6,desc:'Passiv: Lisa erhält +6 % kritische Trefferchance.'},
 schnelle_haende:{id:'schnelle_haende',name:'Schnelle Hände',type:'passive_spd',amount:2,desc:'Passiv: Falco erhält +2 SPD.'},kreisssaalroutine:{id:'kreisssaalroutine',name:'Kreißsaal-Routine',type:'passive_hp',amount:8,desc:'Passiv: Falco erhält +8 maximale HP.'},sonoblick:{id:'sonoblick',name:'Sono-Blick',type:'passive_crit',amount:8,desc:'Passiv: Falco erhält +8 % kritische Trefferchance.'},
 monitoring:{id:'monitoring',name:'Lückenloses Monitoring',type:'passive_crit',amount:5,desc:'Passiv: Daniel erhält +5 % kritische Trefferchance.'},ruhige_narkose:{id:'ruhige_narkose',name:'Ruhige Narkose',type:'passive_hp',amount:8,desc:'Passiv: Daniel erhält +8 maximale HP.'},rapid_sequence:{id:'rapid_sequence',name:'Rapid Sequence',type:'passive_spd',amount:2,desc:'Passiv: Daniel erhält +2 SPD.'},
 traumaroutine:{id:'traumaroutine',name:'Trauma-Routine',type:'passive_hp',amount:12,desc:'Passiv: Tobi erhält +12 maximale HP.'},traumakraft:{id:'traumakraft',name:'Trauma-Kraft',type:'passive_atk',amount:3,desc:'Passiv: Tobi erhält +3 ATK.'},schockraumreflex:{id:'schockraumreflex',name:'Schockraum-Reflex',type:'passive_spd',amount:2,desc:'Passiv: Tobi erhält +2 SPD.'}
};
export const PASSIVE_TREE_NODES={
 olivia:[
  {id:'neuro_routine',tier:2,cost:1,req:['reflexhammer'],branch:'Kampf'},
  {id:'neurotempo',tier:3,cost:1,req:['diagblick'],branch:'Diagnostik'},
  {id:'hammermeister',tier:3,cost:2,req:['neuro_routine'],branch:'Kampf'},
  {id:'epilepto_timing',tier:5,cost:2,req:['spec_epileptologie'],branch:'⚡ Epileptologie'},
  {id:'epilepto_burst',tier:6,cost:2,req:['epilepto_timing'],branch:'⚡ Epileptologie'},
  {id:'epilepto_precision',tier:7,cost:3,req:['epilepto_burst'],branch:'⚡ Epileptologie'},
  {id:'neuroimmun_reserve',tier:5,cost:2,req:['spec_neuroimmunologie'],branch:'🧬 Neuroimmunologie'},
  {id:'neuroimmun_tempo',tier:6,cost:2,req:['neuroimmun_reserve'],branch:'🧬 Neuroimmunologie'},
  {id:'neuroimmun_focus',tier:7,cost:3,req:['neuroimmun_tempo'],branch:'🧬 Neuroimmunologie'}
 ],
 lisa:[{id:'stationsruhe',tier:2,cost:1,req:['infusion'],branch:'Therapie'},{id:'internistische_reserve',tier:2,cost:1,req:['infusion'],branch:'Stabilität'},{id:'laborinstinkt',tier:3,cost:2,req:['blutbild'],branch:'Diagnostik'}],
 falco:[{id:'schnelle_haende',tier:2,cost:1,req:['ultraschall'],branch:'Tempo'},{id:'kreisssaalroutine',tier:2,cost:1,req:['sanftehand'],branch:'Therapie'},{id:'sonoblick',tier:3,cost:2,req:['ultraschall'],branch:'Diagnostik'}],
 daniel:[{id:'monitoring',tier:2,cost:1,req:['intubation'],branch:'Kontrolle'},{id:'ruhige_narkose',tier:2,cost:1,req:['schmerzmittel'],branch:'Support'},{id:'rapid_sequence',tier:3,cost:2,req:['intubation'],branch:'Tempo'}],
 tobi:[{id:'traumaroutine',tier:2,cost:1,req:['skalpell'],branch:'Tank'},{id:'traumakraft',tier:2,cost:1,req:['skalpell'],branch:'Angriff'},{id:'schockraumreflex',tier:3,cost:2,req:['fixateur'],branch:'Tempo'}]
};
export const PARTY_SYNERGIES=[{id:'neuro_internal',members:['olivia','lisa'],name:'Diagnostik & Stabilisierung',icon:'🧠🩺',desc:'Heilung +10 %. Gegner mit gesenkter DEF erleiden 10 % mehr Schaden.'},{id:'neuro_anaesthesia',members:['olivia','daniel'],name:'Neuroanästhesie',icon:'🧠💉',desc:'Olivia verursacht an betäubten Gegnern 30 % mehr Schaden.'},{id:'neuro_gyn',members:['olivia','falco'],name:'Sono-Konsil',icon:'🧠👶',desc:'Die Party erhält +5 % kritische Trefferchance.'},{id:'neuro_trauma',members:['olivia','tobi'],name:'Notfallteam',icon:'🧠🦴',desc:'Tobi verursacht 20 % mehr Schaden, solange Olivia unter 50 % HP liegt.'},{id:'shock_room',members:['lisa','tobi'],name:'Schockraum-Duo',icon:'🩺🦴',desc:'Tobi erhält +2 DEF; Lisas Einzelheilung auf Tobi wirkt 20 % stärker.'},{id:'airway_team',members:['daniel','tobi'],name:'Trauma-Atemweg',icon:'💉🦴',desc:'Daniel und Tobi erhalten +1 SPD.'}];
export function activeSynergies(ids){const set=new Set(ids);return PARTY_SYNERGIES.filter(s=>s.members.every(id=>set.has(id)))}
