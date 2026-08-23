export const HUB_UPGRADES={
 coffeeMachine:{name:'Espressomaschine',icon:'☕',room:'Küche',max:3,costs:[4,7,11],desc:'Jede Stufe gibt +1 Kaffee zu Beginn einer Schicht.',effect:l=>`+${l} Start-Kaffee`},
 bookshelf:{name:'Fachbibliothek',icon:'📚',room:'Schreibtisch',max:3,costs:[5,8,12],desc:'Lehrbücher verbessern die Auswertung nach Kämpfen.',effect:l=>`+${l*5}% Kampf-EP`},
 medicineCabinet:{name:'Hausapotheke',icon:'🧰',room:'Flur',max:2,costs:[6,10],desc:'Bessere Vorbereitung erhöht die maximale HP der Party.',effect:l=>`+${l*4} Max-HP`},
 shoeRack:{name:'Dienstschuh-Regal',icon:'👟',room:'Flur',max:2,costs:[6,10],desc:'Gute Schuhe machen die gesamte Party etwas schneller.',effect:l=>`+${l} SPD`},
 sofa:{name:'Feierabend-Sofa',icon:'🛋️',room:'Wohnzimmer',max:2,costs:[5,9],desc:'Bessere Erholung zwischen Begegnungen.',effect:l=>`+${l*5}% Erholung`}
};
export const HUB_ZONES=[
 {id:'party',icon:'👥',name:'Dienstplan',desc:'Party, Skillpunkte, Synergien und Ausrüstung verwalten.'},
 {id:'desk',icon:'💻',name:'Schreibtisch',desc:'Forschung, Fachbibliothek und Meta-Fortschritt.'},
 {id:'kitchen',icon:'☕',name:'Küche',desc:'Kaffee und Vorbereitung für die nächste Schicht.'},
 {id:'living',icon:'🛋️',name:'Wohnzimmer',desc:'Erholung, Erinnerungen und spätere Besucher.'},
 {id:'hall',icon:'🚪',name:'Flur',desc:'Hausapotheke und Dienstvorbereitung.'},
 {id:'trophies',icon:'🏆',name:'Erinnerungswand',desc:'Meilensteine und Geschichten aus vergangenen Schichten.'}
];
export function trophyList(meta){const wins=meta.stats?.runsWon||0,rooms=meta.stats?.roomsCleared||0,companions=meta.unlocks?.companions?.length||0;return [
 {icon:'🩺',name:'Erste Schicht',text:'Die erste Schicht begonnen.',earned:(meta.stats?.runsStarted||0)>=1},
 {icon:'🌅',name:'Feierabend',text:'Eine komplette Schicht gewonnen.',earned:wins>=1},
 {icon:'👥',name:'Kollegium',text:'Drei Begleiter freigeschaltet.',earned:companions>=3},
 {icon:'🚪',name:'Stammgast',text:'25 Räume abgeschlossen.',earned:rooms>=25},
 {icon:'🏥',name:'Klinikveteranin',text:'Fünf Schichten gewonnen.',earned:wins>=5},
 {icon:'👑',name:'Nachtdienstlegende',text:'Zehn Schichten gewonnen.',earned:wins>=10}
];}
export function apartmentMood(meta){const wins=meta.stats?.runsWon||0;if(wins>=10)return {tier:4,label:'Ein echtes Zuhause',detail:'Die Wohnung ist voller Erinnerungen, Bücher und Trophäen.'};if(wins>=5)return {tier:3,label:'Eingelebt',detail:'Die Wohnung wirkt bewohnt und persönlich.'};if(wins>=2)return {tier:2,label:'Langsam gemütlich',detail:'Mehr Bücher, bessere Küche und erste Erinnerungsstücke.'};if(wins>=1)return {tier:1,label:'Erster Feierabend',detail:'Das erste Souvenir steht im Regal.'};return {tier:0,label:'Assistenzarztwohnung',detail:'Noch etwas karg – aber mit Potenzial.'};}
