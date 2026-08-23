export const DAMAGE_TYPES={
 physical:{id:'physical',name:'Physisch',icon:'⚔️',children:['blunt','slash','pierce']},
 blunt:{id:'blunt',name:'Stumpf',icon:'🔨',parent:'physical'},
 slash:{id:'slash',name:'Schnitt',icon:'🗡️',parent:'physical'},
 pierce:{id:'pierce',name:'Stich',icon:'💉',parent:'physical'},
 neuro:{id:'neuro',name:'Neurologisch',icon:'🧠',children:['neuro_control','electric']},
 neuro_control:{id:'neuro_control',name:'Neuro-Kontrolle',icon:'🌀',parent:'neuro'},
 electric:{id:'electric',name:'Elektro',icon:'⚡',parent:'neuro'},
 pharmacologic:{id:'pharmacologic',name:'Pharmakologisch',icon:'🧪',children:['sedation','circulatory']},
 sedation:{id:'sedation',name:'Sedierung',icon:'💤',parent:'pharmacologic'},
 circulatory:{id:'circulatory',name:'Kreislauf',icon:'❤️',parent:'pharmacologic'},
 psychosocial:{id:'psychosocial',name:'Psychisch/sozial',icon:'💬',children:['stress','confusion']},
 stress:{id:'stress',name:'Stress',icon:'😵',parent:'psychosocial'},
 confusion:{id:'confusion',name:'Verwirrung',icon:'🎭',parent:'psychosocial'},
 diagnostic:{id:'diagnostic',name:'Diagnostik',icon:'🔎',children:[]}
};

export function damageTypeLabel(id){const d=DAMAGE_TYPES[id];return d?`${d.icon} ${d.name}`:id||'—';}
export function damageTypeMultiplier(target,subtype){if(!subtype)return 1;const table=target?.damageAffinity||{};const direct=table[subtype];if(typeof direct==='number')return direct;const parent=DAMAGE_TYPES[subtype]?.parent;const inherited=parent?table[parent]:undefined;return typeof inherited==='number'?inherited:1;}
export function affinityText(mult){if(mult>=1.5)return 'stark verwundbar';if(mult>1.05)return 'verwundbar';if(mult<=0.5)return 'stark resistent';if(mult<.95)return 'resistent';return 'normal';}
