export const STATUS_EFFECTS={
 stunned:{id:'stunned',name:'Betäubt',icon:'💤',category:'control',duration:'1 Aktion',stacking:'refresh',desc:'Die nächste Aktion entfällt.',counterplay:'Kontrollresistenz oder Cleanse.'},
 slowed:{id:'slowed',name:'Verlangsamt',icon:'🐌',category:'debuff',duration:'Kampf',stacking:'limited',desc:'SPD wird vorübergehend reduziert.',counterplay:'Cleanse oder Kampfende.'},
 def_down:{id:'def_down',name:'DEF ↓',icon:'🩻',category:'debuff',duration:'Kampf',stacking:'refresh',desc:'Verteidigung ist reduziert.',counterplay:'Cleanse oder defensive Buffs.'},
 atk_up:{id:'atk_up',name:'ATK ↑',icon:'🔺',category:'buff',duration:'Kampf',stacking:'highest',desc:'Angriffskraft ist erhöht.',counterplay:'Support-Gegner priorisieren.'},
 mp_drain:{id:'mp_drain',name:'MP-Entzug',icon:'🧾',category:'resource',duration:'sofort',stacking:'n/a',desc:'Entzieht MP und schränkt Fähigkeiten ein.',counterplay:'Kaffee, MP-Regeneration oder schnelle Zielpriorisierung.'},
 exposed:{id:'exposed',name:'Exponiert',icon:'🎯',category:'debuff',duration:'2 Aktionen',stacking:'refresh',desc:'Das Ziel erleidet erhöhten Folgeschaden.',counterplay:'Cleanse oder Gegner unterbrechen.'},
 panic:{id:'panic',name:'Alarmiert',icon:'🚨',category:'debuff',duration:'1 Runde',stacking:'refresh',desc:'Das Ziel verliert Tempo und wird leichter kontrollierbar.',counterplay:'Cleanse.'},
 fortified:{id:'fortified',name:'Verbarrikadiert',icon:'🛡️',category:'buff',duration:'Kampf',stacking:'limited',desc:'DEF steigt schrittweise.',counterplay:'DEF-Debuffs und Burst.'}
};

export const ENEMY_ABILITIES={
 paperwork_overload:{id:'paperwork_overload',name:'Formular-Überlastung',icon:'📋',type:'damage_drain',power:.55,status:'mp_drain',chance:1,target:'random',desc:'Leichter Schaden und MP-Entzug.'},
 interrupt_call:{id:'interrupt_call',name:'Unterbrechender Rückruf',icon:'☎️',type:'damage_status',power:.72,status:'slowed',chance:.5,target:'random',statusAmount:2,desc:'Schaden mit Chance auf SPD-Verlust.'},
 organize_chaos:{id:'organize_chaos',name:'Chaos koordinieren',icon:'📣',type:'heal_buff',power:1.25,status:'atk_up',chance:1,target:'weakest_ally',desc:'Heilt den schwächsten Gegner und stärkt die gegnerische Gruppe.'},
 glass_cannon:{id:'glass_cannon',name:'Keine Zeit für Höflichkeit',icon:'💥',type:'damage',power:1.45,chance:1,target:'weakest',desc:'Hoher Schaden gegen das angeschlagenste Partymitglied.'},
 barricade:{id:'barricade',name:'Bettensperre',icon:'🛏️',type:'damage_selfbuff',power:.7,status:'fortified',chance:1,target:'random',desc:'Moderater Schaden; eigene DEF steigt.'},
 confusion:{id:'confusion',name:'Unklare Zuständigkeit',icon:'🎭',type:'drain_or_damage',power:1.05,status:'mp_drain',chance:.5,target:'random',desc:'Entzieht MP oder trifft überraschend.'},
 call_reinforcements:{id:'call_reinforcements',name:'Noch eine Aufnahme!',icon:'➕',type:'summon',chance:.6,target:'self',desc:'Ruft einen hinterlegten Verstärkungsgegner.'},
 triage_pressure:{id:'triage_pressure',name:'Triage-Druck',icon:'🚑',type:'damage_status',power:.9,status:'exposed',chance:.45,target:'weakest',desc:'Fokussierter Schaden und Chance auf Exponiert.'},
 alarm_spam:{id:'alarm_spam',name:'Alarmflut',icon:'🚨',type:'damage_status',power:.65,status:'panic',chance:.55,target:'random',statusAmount:1,desc:'Schaden und Tempoverlust durch Daueralarme.'},
 chief_rounds:{id:'chief_rounds',name:'Chefarztfrage ohne Vorwarnung',icon:'👑',type:'damage_status',power:1.15,status:'exposed',chance:.5,target:'weakest',desc:'Fokussiert das verwundbarste Ziel.'},
 catastrophe:{id:'catastrophe',name:'Schicht-Katastrophe',icon:'🌪️',type:'damage_all',power:.62,chance:1,target:'party',cooldown:3,desc:'Phasenangriff gegen die gesamte Party.'},
 status_wave:{id:'status_wave',name:'Statuswelle',icon:'⚡',type:'damage_all_status',power:.58,status:'panic',chance:.45,target:'party',cooldown:3,desc:'Gruppenschaden mit Kontrollkomponente.'}
};

export const ENEMY_LOADOUTS={
 verwirrter_patient:['triage_pressure'],google_vater:['interrupt_call'],schwindel_geist:['confusion'],radiologie_kollege:['barricade'],chaos_gegner:['triage_pressure'],ungeduldiger_ehemann:['glass_cannon'],anaesthesie_komplikation:['alarm_spam','interrupt_call'],buerokratie_daemon:['paperwork_overload'],
 fax_der_verdammnis:['barricade'],konsil_karussell:['interrupt_call'],labor_ohne_kontext:['confusion'],leeres_sonogel:['glass_cannon'],dokumentationspflicht:['paperwork_overload'],bettensperre:['barricade'],pflegeklingel:['alarm_spam'],telefonkette:['organize_chaos'],kaffeeentzug:['paperwork_overload'],drucker_stau:['barricade'],arztbrief_endlos:['organize_chaos'],terminlawine:['glass_cannon'],konsilzettel:['confusion'],monitor_alarm:['alarm_spam'],perfusor_alarm:['paperwork_overload'],op_plan:['organize_chaos'],aufnahmebogen:['barricade'],wartezimmer:['call_reinforcements'],diensttelefon:['confusion'],
 elite_oberarzt:['interrupt_call','chief_rounds'],elite_personalmangel:['call_reinforcements','organize_chaos'],elite_it_ausfall:['paperwork_overload','alarm_spam'],elite_schockraum:['triage_pressure','glass_cannon'],elite_besuchszeit:['organize_chaos','interrupt_call'],elite_nacht:['glass_cannon','triage_pressure'],elite_hygiene:['barricade','interrupt_call'],elite_konsile:['interrupt_call','paperwork_overload'],
 status_epilepticus:['status_wave','catastrophe','chief_rounds'],boss_chefarztvisite:['chief_rounds','catastrophe'],boss_systemausfall:['paperwork_overload','catastrophe'],boss_montagmorgen:['alarm_spam','catastrophe'],boss_massenanfall:['triage_pressure','catastrophe']
};

const B=(title,category,habitat,description,tactic,resist={})=>({title,category,habitat,description,tactic,resist});
export const BESTIARY={
 verwirrter_patient:B('Verwirrter Patient','Alltagsgegner','Station','Ein Patient, dessen Orientierung ungefähr so stabil ist wie der WLAN-Empfang im Altbau.','Früh kontrollieren; hoher Druck auf schwache Ziele.',{stunned:.1}),
 google_vater:B('Der Google-Vater','Alltagsgegner','Station / Notaufnahme','Hat bereits drei seltene Diagnosen recherchiert und erwartet die vierte vor dem Mittagessen.','Tempo schützen und Unterbrechungen einplanen.'),
 schwindel_geist:B('Schwindel-Geist','Alltagsgegner','Neurologie','Niemand weiß genau, ob er peripher, zentral oder einfach nur Montag ist.','Unberechenbar, aber fragil. Schnell beseitigen.'),
 radiologie_kollege:B('Unerreichbarer Radiologe','Alltagsgegner','Telefon / CT','Existiert laut Dienstplan, ist empirisch jedoch schwer nachweisbar.','DEF senken statt lange gegen die Panzerung zu arbeiten.'),
 chaos_gegner:B('Notaufnahme-Chaos','Alltagsgegner','Notaufnahme','Mehrere kleine Probleme haben beschlossen, gleichzeitig groß zu werden.','Angeschlagene Gruppenmitglieder schützen.'),
 ungeduldiger_ehemann:B('Ungeduldiger Angehöriger','Alltagsgegner','Flur','Fragt in exakt jenem Moment nach dem Arzt, in dem dieser drei echte Notfälle behandelt.','Glaskanone: schnell fokussieren.'),
 anaesthesie_komplikation:B('Anästhesie-Komplikation','Gefahrengegner','OP','Taucht nie passend zum Ablaufplan auf und besitzt eine Vorliebe für mehrere Alarme gleichzeitig.','Kontrolle priorisieren; Tempoverlust vermeiden.',{stunned:.25}),
 buerokratie_daemon:B('Bürokratie-Dämon','Gefahrengegner','Verwaltung','Ernährt sich von Formularen, MP und dem letzten Rest Motivation.','MP-Ökonomie sichern und früh ausschalten.'),
 fax_der_verdammnis:B('Faxgerät der Verdammnis','Tank','Stationszimmer','Ein Relikt vergangener Zeitalter, das offensichtlich unsterblich ist.','DEF-Debuffs und starker Einzelschaden.',{stunned:.2}),
 konsil_karussell:B('Konsil-Karussell','Controller','Gesamtes Klinikum','„Dafür sind wir nicht zuständig.“ – und plötzlich beginnt die Runde von vorn.','SPD-Debuffs nicht stapeln lassen.'),
 labor_ohne_kontext:B('Laborwert ohne Kontext','Trickster','KIS','Kalium 6,8. Oder 3,1. Zeitpunkt unbekannt. Patient ebenfalls.','Fragil, aber störend; früh entfernen.'),
 leeres_sonogel:B('Leeres Sono-Gel','Glaskanone','Funktionsdiagnostik','Ist selbstverständlich genau dann leer, wenn es wirklich dringend ist.','Sehr niedrige DEF: Burst-Ziel Nummer eins.'),
 dokumentationspflicht:B('Dokumentationspflicht','Drainer','Überall','Kann weder besiegt noch vollständig erfüllt werden – nur temporär zurückgedrängt.','MP-Verlust begrenzen.'),
 bettensperre:B('Bettensperre','Tank','Bettenmanagement','Eine unbewegliche Naturgewalt mit erstaunlich hoher DEF.','Nicht wachsen lassen: Fortify durchbrechen.'),
 pflegeklingel:B('Unendliche Pflegeklingel','Controller','Station','Sie klingelt. Immer. Besonders wenn man gerade im Zimmer daneben steht.','Kontrolliert Tempo; priorisieren.'),
 telefonkette:B('Telefonkette','Support','Telefon','Heilt sich nicht selbst – sorgt aber zuverlässig dafür, dass alle anderen Probleme länger bestehen.','Support zuerst eliminieren.'),
 kaffeeentzug:B('Kaffeeentzug','Drainer','Nachtdienst','Ein metabolischer Boss im Körper eines normalen Gegners.','MP-Ressourcen schützen.'),
 drucker_stau:B('Druckerstau','Tank','Stationszimmer','Papier ist eingelegt. Toner ist vorhanden. Trotzdem nein.','DEF senken und nicht ignorieren.'),
 arztbrief_endlos:B('Endloser Arztbrief','Support','Arztzimmer','Wird länger, sobald man glaubt, fertig zu sein.','Verstärkt Verbündete; Fokusziel.'),
 terminlawine:B('Terminlawine','Glaskanone','Ambulanz','Beginnt harmlos mit zwei Terminen und endet mit zwölf gleichzeitig.','Schnell, hart, fragil.'),
 konsilzettel:B('Mysteriöser Konsilzettel','Trickster','Stationsflur','Niemand weiß, wer ihn geschrieben hat. Trotzdem ist er jetzt dein Problem.','Unvorhersehbare Ressourcenangriffe.'),
 monitor_alarm:B('Monitoralarm ohne Ende','Controller','OP / ITS','Piept mit beeindruckender Ausdauer, gelegentlich sogar mit Grund.','Tempoverlust vermeiden.'),
 perfusor_alarm:B('Perfusor-Alarm','Drainer','OP / ITS','Okklusion. Leer. Batterie. Irgendetwas ist immer.','MP-Drain macht lange Kämpfe gefährlich.'),
 op_plan:B('Der OP-Plan','Support','OP','Theoretisch ein Plan. Praktisch ein lebendes Dokument mit eigenem Willen.','Buffs nicht eskalieren lassen.'),
 aufnahmebogen:B('Aufnahmebogen XXL','Tank','Aufnahme','Mehr Seiten als HP und ungefähr genauso schwer zu beseitigen.','Rüstung brechen.'),
 wartezimmer:B('Volles Wartezimmer','Summoner','Notaufnahme','Ein Gegner, der weitere Gegner produziert, solange man ihn höflich ignoriert.','Absolute Priorität, bevor Verstärkung erscheint.'),
 diensttelefon:B('Diensttelefon','Trickster','Überall','Besitzt die passive Fähigkeit, ausschließlich im ungünstigsten Moment zu klingeln.','Schnell ausschalten oder MP-Verlust akzeptieren.'),
 elite_oberarzt:B('Der Oberarzt auf Visite','Elite','Station','Stellt eine präzise Frage zu genau dem Detail, das niemand nachgeschlagen hat.','Kontrolle und Exposed beachten.',{stunned:.35}),
 elite_personalmangel:B('Personalmangel','Elite','Gesamtes Klinikum','Kein einzelner Gegner, sondern ein Zustand mit HP-Balken.','Summons und Support gleichzeitig unterbrechen.',{stunned:.3}),
 elite_it_ausfall:B('KIS-Ausfall','Elite','Digitales Nirwana','Der Moment, in dem plötzlich jeder Papier braucht und niemand weiß, wo welches liegt.','MP-Drain plus Alarmkontrolle.',{stunned:.3}),
 elite_schockraum:B('Schockraum gleichzeitig','Elite','Schockraum','Alles ist gleichzeitig dringend und niemand hat genug Hände.','Weakest-target Druck antizipieren.',{stunned:.25}),
 elite_besuchszeit:B('Besuchszeit eskaliert','Elite','Station','Viele Stimmen, viele Fragen, exakt null zusätzlicher Platz.','Support-Funktion zuerst stoppen.'),
 elite_nacht:B('03:17 Uhr','Elite','Nachtdienst','Die Uhrzeit, zu der selbst harmlose Dinge plötzlich Bossmusik bekommen.','Glaskanone: offensiv spielen.'),
 elite_hygiene:B('Hygiene-Audit','Elite','Überall','Sieht alles. Besonders das eine Desinfektionsmittel, das gerade leer ist.','Fortify mit DEF-Debuffs kontern.',{stunned:.4}),
 elite_konsile:B('Sieben offene Konsile','Elite','Stationszimmer','Ein Multitasking-Test, den niemand freiwillig gebucht hat.','MP und SPD gleichzeitig schützen.'),
 status_epilepticus:B('Der Status','Boss','Neurologie','Ein neurologischer Notfall als Bosskampf: schnell, kontrollresistent und mit eskalierenden Wellen.','Interrupt-Fenster nutzen; Gruppenschaden einplanen.',{stunned:.65,slowed:.5}),
 boss_chefarztvisite:B('Die Chefarztvisite','Boss','Station','Die natürliche Endstufe jeder Visite.','Exposed vermeiden und Phasenangriff vorbereiten.',{stunned:.7}),
 boss_systemausfall:B('Totaler Systemausfall','Boss','Gesamtes Klinikum','KIS, Telefon und Drucker beschließen gemeinsam Feierabend zu machen.','MP-Reserven für die späte Phase behalten.',{stunned:.75}),
 boss_montagmorgen:B('Montagmorgen','Boss','Realität','Kein medizinischer Begriff, aber klinisch eindeutig relevant.','Alarmkontrolle und AoE-Heilung.',{stunned:.7}),
 boss_massenanfall:B('Der Massenanfall','Boss','Notaufnahme','Ein ganzer Dienstplan materialisiert sich als einzelner Gegner.','Schwache Ziele schützen und Burst-Fenster nutzen.',{stunned:.7})
};

export function enemyAbilityIds(id){return ENEMY_LOADOUTS[id]||[];}
export function enemyAbilities(id){return enemyAbilityIds(id).map(x=>ENEMY_ABILITIES[x]).filter(Boolean);}
export function bestiaryEntry(id,template){const lore=BESTIARY[id]||B(template?.name||id,'Unklassifiziert','Unbekannt','Noch kein ausführlicher Eintrag vorhanden.','Beobachten und reagieren.');return {id,name:template?.name||lore.title,emoji:template?.emoji||'❔',role:template?.role||'bruiser',stats:template?{hp:template.hp,atk:template.atk,def:template.def,spd:template.spd,xp:template.xp}:null,abilities:enemyAbilities(id),...lore};}
