export const EQUIPMENT_SLOTS={tool:'Werkzeug',coat:'Kleidung',shoes:'Schuhe',accessory:'Accessoire'};
export const EQUIPMENT={
 reflexhammer:{id:'reflexhammer',name:'Olivias Reflexhammer',icon:'🔨',slot:'tool',owner:'olivia',desc:'+3 ATK. Reflexhammer verursacht zusätzlich 15 % Schaden.',mods:{atk:3},effect:'reflex_bonus'},
 stethoscope:{id:'stethoscope',name:'Kardiologie-Stethoskop',icon:'🩺',slot:'tool',owner:'lisa',desc:'+2 DEF, Heilung +10 %.',mods:{def:2},effect:'heal_bonus'},
 ultrasound:{id:'ultrasound',name:'Pocket-Ultraschall',icon:'📟',slot:'tool',owner:'falco',desc:'+2 ATK, +1 SPD.',mods:{atk:2,spd:1}},
 airwaybag:{id:'airwaybag',name:'Atemwegs-Tasche',icon:'💼',slot:'tool',owner:'daniel',desc:'+2 ATK, +5 % Crit.',mods:{atk:2,crit:5}},
 trauma_shears:{id:'trauma_shears',name:'Trauma-Schere',icon:'✂️',slot:'tool',owner:'tobi',desc:'+3 ATK.',mods:{atk:3}},
 whitecoat:{id:'whitecoat',name:'Bewährter Arztkittel',icon:'🥼',slot:'coat',desc:'+8 maximale HP.',mods:{hp:8}},
 nightshoes:{id:'nightshoes',name:'Nachtdienst-Sneaker',icon:'👟',slot:'shoes',desc:'+2 SPD.',mods:{spd:2}},
 pager:{id:'pager',name:'Alter Stations-Piepser',icon:'📟',slot:'accessory',desc:'+8 maximale MP.',mods:{mp:8}},
 lucky_pen:{id:'lucky_pen',name:'Glückskugelschreiber',icon:'🖊️',slot:'accessory',desc:'+7 % Crit.',mods:{crit:7}}
};
export function starterEquipment(){return ['reflexhammer','stethoscope','whitecoat','nightshoes','pager'];}
export function emptyLoadout(){return {tool:null,coat:null,shoes:null,accessory:null};}
export function canEquip(characterId,item){return !item.owner||item.owner===characterId;}
