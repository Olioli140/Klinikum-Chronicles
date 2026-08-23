export const CHAR_DEFS={
 olivia:{name:'Olivia',role:'Neurologin',emoji:'🧠',color:'#7c9dff',base:{hp:42,mp:22,atk:10,def:6,spd:8},skills:['reflexhammer']},
 lisa:{name:'Lisa',role:'Internistin',emoji:'🩺',color:'#59d98c',base:{hp:44,mp:26,atk:8,def:7,spd:6},skills:['infusion','blutbild']},
 falco:{name:'Falco',role:'Gynäkologe',emoji:'👶',color:'#ff9f6b',base:{hp:40,mp:24,atk:11,def:6,spd:7},skills:['ultraschall','sanftehand']},
 daniel:{name:'Daniel',role:'Anästhesist',emoji:'💉',color:'#c58bff',base:{hp:38,mp:28,atk:9,def:5,spd:9},skills:['intubation','schmerzmittel']},
 tobi:{name:'Tobi',role:'Unfallchirurg',emoji:'🦴',color:'#ffcf56',base:{hp:52,mp:16,atk:13,def:9,spd:5},skills:['skalpell','fixateur']}
};

export const SKILLS={
 reflexhammer:{id:'reflexhammer',name:'Reflexhammer',mp:5,type:'dmg',power:1,target:'single',desc:'Schneller Schlag mit dem Reflexhammer.'},
 diagblick:{id:'diagblick',name:'Diagnose-Blick',mp:8,type:'dmg',power:1.25,target:'single',desc:'Findet die Schwachstelle.'},
 migraenebann:{id:'migraenebann',name:'Migräne-Bann',mp:12,type:'heal',power:1.1,target:'single',desc:'Heilt eine Person.'},
 eeg:{id:'eeg',name:'EEG-Analyse',mp:10,type:'buff_atk',power:.25,target:'party',desc:'Angriff der Party steigt.'},
 nervenblock:{id:'nervenblock',name:'Peripherer Nervenblock',mp:16,type:'dmg',power:1.7,target:'single',desc:'Massiver diagnostischer Einzelschaden.'},
 therapieplan:{id:'therapieplan',name:'Ganzheitlicher Therapieplan',mp:18,type:'heal_all',power:1,target:'party',desc:'Heilt die ganze Party.'},
 diffdiagnose:{id:'diffdiagnose',name:'Differenzialdiagnose Supreme',mp:22,type:'dmg_all',power:.95,target:'all',desc:'Trifft alle Gegner gleichzeitig.'},
 infusion:{id:'infusion',name:'Infusion',mp:8,type:'heal',power:1.1,target:'single',desc:'Stabilisiert eine Person.'},
 blutbild:{id:'blutbild',name:'Blutbild',mp:6,type:'debuff_def',power:.2,target:'single',desc:'Senkt die Verteidigung.'},
 antibiotikum:{id:'antibiotikum',name:'Breitband-Antibiotikum',mp:16,type:'heal_all',power:.9,target:'party',desc:'Heilt die ganze Party.'},
 ultraschall:{id:'ultraschall',name:'Ultraschall',mp:7,type:'debuff_def',power:.25,target:'single',desc:'Deckt Schwachpunkte auf.'},
 sanftehand:{id:'sanftehand',name:'Sanfte Hand',mp:9,type:'heal',power:1.15,target:'single',desc:'Beruhigende Behandlung.'},
 intubation:{id:'intubation',name:'Intubation',mp:7,type:'dmg',power:1.15,target:'single',desc:'Kontrollierter Angriff.'},
 schmerzmittel:{id:'schmerzmittel',name:'Schmerzmittel',mp:8,type:'buff_def_all',power:.2,target:'party',desc:'Verteidigung der Party steigt.'},
 vollnarkose:{id:'vollnarkose',name:'Vollnarkose',mp:14,type:'stun',power:0,target:'single',desc:'Gegner setzt eine Runde aus.'},
 skalpell:{id:'skalpell',name:'Skalpellhieb',mp:5,type:'dmg',power:1.3,target:'single',desc:'Direkter Angriff.'},
 fixateur:{id:'fixateur',name:'Fixateur Externe',mp:6,type:'buff_def',power:.35,target:'single',desc:'Stabilisiert eine Person.'}
};

export const OLIVIA_SKILL_TREE=[
 {id:'reflexhammer',tier:1,cost:0,req:[],branch:'Therapie'},
 {id:'diagblick',tier:1,cost:4,req:['reflexhammer'],branch:'Diagnostik'},
 {id:'migraenebann',tier:1,cost:4,req:['reflexhammer'],branch:'Therapie'},
 {id:'eeg',tier:2,cost:7,req:['diagblick'],branch:'Diagnostik'},
 {id:'therapieplan',tier:2,cost:7,req:['migraenebann'],branch:'Therapie'},
 {id:'nervenblock',tier:3,cost:10,req:['eeg'],branch:'Diagnostik'},
 {id:'diffdiagnose',tier:4,cost:15,req:['nervenblock','therapieplan'],branch:'Ultimate'}
];

export const ENEMY_TEMPLATES={
 verwirrter_patient:{name:'Verwirrter Patient',emoji:'🧟',hp:22,atk:5,def:2,spd:4,xp:12},google_vater:{name:'Der Google-Vater',emoji:'📱',hp:26,atk:6,def:3,spd:5,xp:14},schwindel_geist:{name:'Schwindel-Geist',emoji:'🌀',hp:24,atk:7,def:2,spd:8,xp:14},radiologie_kollege:{name:'Unerreichbarer Radiologe',emoji:'☎️',hp:34,atk:7,def:5,spd:5,xp:20},chaos_gegner:{name:'Notaufnahme-Chaos',emoji:'🚑',hp:30,atk:8,def:3,spd:7,xp:18},ungeduldiger_ehemann:{name:'Ungeduldiger Ehemann',emoji:'😤',hp:30,atk:8,def:3,spd:6,xp:18},anaesthesie_komplikation:{name:'Anästhesie-Komplikation',emoji:'⚠️',hp:38,atk:9,def:5,spd:8,xp:24},buerokratie_daemon:{name:'Bürokratie-Dämon',emoji:'📋',hp:40,atk:6,def:8,spd:3,xp:22},status_epilepticus:{name:'Der Status',emoji:'⚡',hp:105,atk:12,def:6,spd:9,xp:90,boss:true}
};

export const ENCOUNTERS={r1:['verwirrter_patient'],r3:['google_vater','schwindel_geist'],r4:['radiologie_kollege'],r6:['chaos_gegner','ungeduldiger_ehemann'],r7:['anaesthesie_komplikation','buerokratie_daemon'],r8:['status_epilepticus']};

export function freshCharacter(id){const d=CHAR_DEFS[id];return {id,name:d.name,role:d.role,emoji:d.emoji,color:d.color,level:1,xp:0,xpNext:30,base:{...d.base},maxHp:d.base.hp,hp:d.base.hp,maxMp:d.base.mp,mp:d.base.mp,atk:d.base.atk,def:d.base.def,spd:d.base.spd,crit:5,skillPoints:1,unlocked:[...d.skills],buffs:{atk:0,def:0,spd:0}}}
export function createStartingParty(){return [freshCharacter('olivia'),freshCharacter('lisa')]}
