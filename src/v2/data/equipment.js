import { EXPANDED_EQUIPMENT } from './equipment-expansion.js';

export const EQUIPMENT_SLOTS={tool:'Werkzeug',coat:'Kleidung',shoes:'Schuhe',accessory:'Accessoire'};
export const EQUIPMENT={
 reflexhammer:{id:'reflexhammer',name:'Olivias Reflexhammer',icon:'🔨',slot:'tool',owner:'olivia',rarity:'signature',desc:'+3 ATK. Reflexhammer verursacht zusätzlich 15 % Schaden.',mods:{atk:3},effect:'reflex_bonus'},
 stethoscope:{id:'stethoscope',name:'Kardiologie-Stethoskop',icon:'🩺',slot:'tool',owner:'lisa',rarity:'signature',desc:'+2 DEF, Heilung +10 %.',mods:{def:2},effect:'heal_bonus'},
 ultrasound:{id:'ultrasound',name:'Pocket-Ultraschall',icon:'📟',slot:'tool',owner:'falco',rarity:'signature',desc:'+2 ATK, +1 SPD.',mods:{atk:2,spd:1}},
 airwaybag:{id:'airwaybag',name:'Daniels Laryngoskop',icon:'🫁',slot:'tool',owner:'daniel',rarity:'signature',desc:'+2 ATK, +5 % Crit. Daniels Signaturwerkzeug für Atemwegs- und Kontroll-Builds.',mods:{atk:2,crit:5}},
 trauma_shears:{id:'trauma_shears',name:'Tobis Knochensäge',icon:'🪚',slot:'tool',owner:'tobi',rarity:'signature',desc:'+3 ATK. Tobis kompromissloses Signaturwerkzeug für Trauma- und Direktschaden-Builds.',mods:{atk:3}},
 tuning_fork:{id:'tuning_fork',name:'Stimmgabel 128 Hz',icon:'🎵',slot:'tool',owner:'olivia',rarity:'uncommon',desc:'+1 ATK, +2 SPD.',mods:{atk:1,spd:2}},
 reflex_light:{id:'reflex_light',name:'Diagnostikleuchte',icon:'🔦',slot:'tool',rarity:'common',desc:'+1 ATK, +5 % Crit.',mods:{atk:1,crit:5}},
 venous_scanner:{id:'venous_scanner',name:'Venenfinder',icon:'🔦',slot:'tool',rarity:'uncommon',desc:'+2 SPD, +4 maximale MP.',mods:{spd:2,mp:4}},
 emergency_clipboard:{id:'emergency_clipboard',name:'Unzerstörbares Klemmbrett',icon:'📋',slot:'tool',rarity:'uncommon',desc:'+2 DEF, +4 HP.',mods:{def:2,hp:4}},
 whitecoat:{id:'whitecoat',name:'Bewährter Arztkittel',icon:'🥼',slot:'coat',rarity:'common',desc:'+8 maximale HP.',mods:{hp:8}},
 consultant_coat:{id:'consultant_coat',name:'Facharztkittel',icon:'🥼',slot:'coat',rarity:'rare',desc:'+12 HP, +1 DEF.',mods:{hp:12,def:1}},
 trauma_vest:{id:'trauma_vest',name:'Schockraum-Weste',icon:'🦺',slot:'coat',rarity:'rare',desc:'+8 HP, +2 DEF, -1 SPD.',mods:{hp:8,def:2,spd:-1}},
 lead_apron:{id:'lead_apron',name:'Bleischürze',icon:'🛡️',slot:'coat',rarity:'uncommon',desc:'+4 DEF, -2 SPD.',mods:{def:4,spd:-2}},
 fleece_jacket:{id:'fleece_jacket',name:'Dienst-Fleece',icon:'🧥',slot:'coat',rarity:'common',desc:'+5 HP, +4 MP.',mods:{hp:5,mp:4}},
 nightshoes:{id:'nightshoes',name:'Nachtdienst-Sneaker',icon:'👟',slot:'shoes',rarity:'common',desc:'+2 SPD.',mods:{spd:2}},
 clogs:{id:'clogs',name:'OP-Clogs',icon:'🩴',slot:'shoes',rarity:'common',desc:'+1 DEF, +1 SPD.',mods:{def:1,spd:1}},
 running_shoes:{id:'running_shoes',name:'Konsil-Sprinter',icon:'👟',slot:'shoes',rarity:'uncommon',desc:'+3 SPD, -2 HP.',mods:{spd:3,hp:-2}},
 compression_socks:{id:'compression_socks',name:'Kompressionsstrümpfe',icon:'🧦',slot:'shoes',rarity:'uncommon',desc:'+6 HP, +1 SPD.',mods:{hp:6,spd:1}},
 pager:{id:'pager',name:'Alter Stations-Piepser',icon:'📟',slot:'accessory',rarity:'common',desc:'+8 maximale MP.',mods:{mp:8}},
 lucky_pen:{id:'lucky_pen',name:'Glückskugelschreiber',icon:'🖊️',slot:'accessory',rarity:'uncommon',desc:'+7 % Crit.',mods:{crit:7}},
 coffee_mug:{id:'coffee_mug',name:'Unverwechselbare Kaffeetasse',icon:'☕',slot:'accessory',rarity:'uncommon',desc:'+6 MP, +1 SPD.',mods:{mp:6,spd:1}},
 phone_charger:{id:'phone_charger',name:'Diensthandy-Powerbank',icon:'🔋',slot:'accessory',rarity:'common',desc:'+5 MP, +4 HP.',mods:{mp:5,hp:4}},
 neuro_pin:{id:'neuro_pin',name:'Neuron-Pin',icon:'🧠',slot:'accessory',owner:'olivia',rarity:'rare',desc:'+2 ATK, +5 % Crit.',mods:{atk:2,crit:5}},
 emergency_badge:{id:'emergency_badge',name:'Schockraum-Badge',icon:'🚑',slot:'accessory',rarity:'rare',desc:'+2 DEF, +1 SPD.',mods:{def:2,spd:1}},
 old_keycard:{id:'old_keycard',name:'Legendäre alte Schlüsselkarte',icon:'💳',slot:'accessory',rarity:'rare',desc:'+1 ATK, +1 DEF, +1 SPD, +3 % Crit.',mods:{atk:1,def:1,spd:1,crit:3}},
 ...EXPANDED_EQUIPMENT
};

export function starterEquipment(){return ['reflexhammer','stethoscope','whitecoat','whitecoat','nightshoes','nightshoes','pager','pager','lucky_pen','reflex_light','coffee_mug','phone_charger'];}
export function inventoryExpansionGrant(){return ['ultrasound','airwaybag','trauma_shears','tuning_fork','venous_scanner','emergency_clipboard','fleece_jacket','clogs','compression_socks','emergency_badge'];}
export function emptyLoadout(){return {tool:null,coat:null,shoes:null,accessory:null};}
export function canEquip(characterId,item){return !!item&&(!item.owner||item.owner===characterId);}
export function inventoryCounts(items=[]){const out={};for(const id of items)if(EQUIPMENT[id])out[id]=(out[id]||0)+1;return out;}
export function equippedCounts(characters={},exceptCharacter=null,exceptSlot=null){const out={};for(const [cid,p] of Object.entries(characters||{}))for(const [slot,id] of Object.entries(p?.equipment||{})){if(!id)continue;if(cid===exceptCharacter&&slot===exceptSlot)continue;out[id]=(out[id]||0)+1;}return out;}
export function availableCopies(meta,itemId,exceptCharacter=null,exceptSlot=null){const owned=inventoryCounts(meta?.unlocks?.equipment||[])[itemId]||0,used=equippedCounts(meta?.characters||{},exceptCharacter,exceptSlot)[itemId]||0;return Math.max(0,owned-used);}
