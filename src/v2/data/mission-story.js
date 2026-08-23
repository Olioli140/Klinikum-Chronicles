const STORIES={
 day_station:{
  intro:{speaker:'Erzähler',portrait:'🏥',title:'07:02 · Übergabe',text:'Die Station riecht nach Kaffee, Desinfektionsmittel und einem Tag, der angeblich ruhig werden soll. Olivia übernimmt die Frühschicht. Auf dem Übergabezettel stehen drei Fragezeichen und ein sehr optimistisches „sonst nichts“.'},
  beats:[
   {at:2,speaker:'Olivia',portrait:'🧠',title:'09:41 · Stationsflur',text:'„Wenn heute wirklich ruhig bleibt, können wir die neuen Kolleg:innen wenigstens ein bisschen einarbeiten.“',party:{lisa:'Lisa hebt einen Laborzettel hoch. „Du hast das Wort ruhig jetzt ausgesprochen. Das war mutig.“',daniel:'Daniel schaut auf sein Diensttelefon. „Ich habe vorsichtshalber schon mal nichts geglaubt.“',tobi:'Tobi nickt. „Ruhig ist relativ. Niemand blutet. Das zählt.“',falco:'Falco grinst. „Ich gebe uns noch acht Minuten.“'}},
   {at:4,speaker:'Erzähler',portrait:'📋',title:'12:18 · Mittagsrunde',text:'Die kleinen Probleme haben sich zu einer erstaunlich langen Liste zusammengeschlossen. Noch ist alles beherrschbar – genau die Art Schicht, in der ein unerfahrenes Team lernen kann, ohne sofort unterzugehen.'}
  ],
  win:{speaker:'Olivia',portrait:'🧠',title:'15:47 · Feierabend',text:'Die Station steht noch, alle wichtigen Aufgaben sind erledigt und niemand hat das Faxgerät aus dem Fenster geworfen. Für eine Tagschicht ist das praktisch ein Triumph.'},
  lose:{speaker:'Erzähler',portrait:'🌧️',title:'Früher Rückzug',text:'Aus der vermeintlich ruhigen Tagschicht wurde doch zu viel. Olivia bricht ab, bevor aus Training echter Schaden wird. Morgen ist auch noch eine Station da.'}
 },
 late_station:{
  intro:{speaker:'Erzähler',portrait:'🌆',title:'15:56 · Spätdienst beginnt',text:'Die Frühschicht übergibt mit dem Satz „Eigentlich ist alles gemacht“. Olivia weiß inzwischen, dass dieser Satz mindestens vier versteckte Probleme enthält.'},
  beats:[
   {at:2,speaker:'Olivia',portrait:'🧠',title:'18:22 · Übergabe vorbei, Probleme nicht',text:'„Okay. Die Station ist offiziell im Modus: Niemand geht nach Hause, bevor wir dieses Chaos sortiert haben.“',party:{lisa:'Lisa seufzt. „Ich habe gerade drei verschiedene Kaliumwerte für denselben Patienten gefunden.“',daniel:'Daniel zeigt auf sein Telefon. „Anästhesie hat angerufen. Das ist selten ein gutes Zeichen.“',tobi:'Tobi krempelt die Ärmel hoch. „Dann machen wir es der Reihe nach.“',falco:'Falco hält zwei Akten hoch. „Welche davon ist die echte? Falsche Antwort: beide.“'}},
   {at:5,speaker:'Erzähler',portrait:'🌙',title:'21:03 · Die Klinik wird leiser',text:'Auf den Fluren wird es dunkel. Gleichzeitig werden die Probleme hartnäckiger. Jetzt zeigt sich, ob die Party nur gut aussieht oder wirklich zusammenarbeitet.'}
  ],
  win:{speaker:'Olivia',portrait:'🧠',title:'23:11 · Licht aus',text:'Die letzte Kurve ist geschrieben, das letzte Telefonat beendet. Olivia verlässt die Station mit dem Gefühl, dass Spätdienste niemals wirklich gewonnen werden – aber dieser hier zählt trotzdem.'},
  lose:{speaker:'Erzähler',portrait:'📉',title:'Spätdienst verloren',text:'Die Aufgaben wachsen schneller nach, als Olivia sie abarbeiten kann. Sie zieht die Reißleine. Manchmal besteht gute Medizin darin, zu wissen, wann Verstärkung nötig ist.'}
 },
 phone_falco:{
  intro:{speaker:'Falco',portrait:'👶',title:'📱 Eingehender Anruf · 19:14',text:'„Olivia? Sorry, dass ich dich privat anrufe. Wir haben im Kreißsaal ein kleines Problem.“ Kurze Pause. „Also… klein im Sinne von: Es wäre gut, wenn du jetzt kommst.“'},
  beats:[
   {at:1,speaker:'Olivia',portrait:'🧠',title:'Kreißsaal · Eingang',text:'„Du schuldest mir mindestens einen Kaffee.“',party:{lisa:'Lisa flüstert: „Nur einen? Verhandle härter.“',daniel:'Daniel mustert die Monitore. „Ich nehme Kaffee und einen funktionierenden Zugang.“',tobi:'Tobi schaut sich um. „Warum ist hier eigentlich immer alles gleichzeitig dringend?“'}},
   {at:3,speaker:'Falco',portrait:'👶',title:'Zwischen zwei Problemen',text:'„Okay, vielleicht war ‚kleines Problem‘ eine optimistische Formulierung. Aber ihr seid da. Das hilft.“'},
   {at:5,speaker:'Erzähler',portrait:'✨',title:'Der letzte Abschnitt',text:'Was als Gefallen begann, fühlt sich inzwischen wie eine echte gemeinsame Schicht an. Falco kämpft nicht neben Olivia – er kämpft bereits mit ihrem Team.'}
  ],
  win:{speaker:'Falco',portrait:'👶',title:'Nach dem Kreißsaal',text:'Falco lehnt sich erschöpft gegen die Wand. „Wenn ihr nochmal jemanden für eure völlig normalen, überhaupt nicht chaotischen Dienste braucht… ruft mich an.“ Falco ist jetzt als Partymitglied verfügbar.'},
  lose:{speaker:'Falco',portrait:'👶',title:'Nicht heute',text:'„Wir kriegen das hier hin. Aber heute war das zu viel auf einmal.“ Falco nickt Olivia zu. „Versuchen wir es nochmal, wenn wir beide geschlafen haben.“'}
 },
 phone_tobi:{
  intro:{speaker:'Tobi',portrait:'🦴',title:'📱 Eingehender Anruf · 22:37',text:'„Olivia? Schockraum eins. Mehrere Verletzte, die halbe Mannschaft hängt noch im OP und ich brauche jemanden, der den Überblick behält.“ Im Hintergrund piept etwas viel zu schnell. „Wenn du Zeit hast: jetzt wäre ein guter Moment.“'},
  beats:[
   {at:1,speaker:'Erzähler',portrait:'🚑',title:'22:49 · Schockraum',text:'Die Tür geht auf und sofort ist klar: Das hier ist kein einzelnes Problem. Monitore, Stimmen, Tragen, Telefonate. Tobi steht mitten im Chaos und wirkt nur deshalb ruhig, weil alle anderen dafür keine Zeit haben.',party:{lisa:'Lisa zieht sich Handschuhe an. „Gut. Dann sortieren wir zuerst, was wirklich dringend ist.“',daniel:'Daniel wirft einen Blick Richtung Atemwegswagen. „Ich kümmere mich um alles, was nicht warten kann.“',falco:'Falco nickt Tobi zu. „Sag einfach, wo du mich brauchst.“'}},
   {at:3,speaker:'Tobi',portrait:'🦴',title:'23:16 · Keine Pause',text:'„Der nächste kommt in fünf Minuten.“ Tobi sieht Olivia an. „Und bevor du fragst: Nein, das ist keine optimistische Fünf.“',party:{lisa:'Lisa murmelt: „Ich vermisse gerade die Tagschicht.“',daniel:'Daniel antwortet trocken: „Ich vermisse gerade Sauerstoff in Flaschen, die tatsächlich voll sind.“',falco:'Falco grinst müde. „Immerhin langweilt sich niemand.“'}},
   {at:5,speaker:'Olivia',portrait:'🧠',title:'00:02 · Das Team findet seinen Rhythmus',text:'Am Anfang war es nur Schadensbegrenzung. Jetzt greifen die Abläufe ineinander. Tobi hält die Front, Olivia priorisiert, das Team schließt die Lücken. Zum ersten Mal wirkt der Schockraum nicht mehr wie ein Gegner, sondern wie etwas, das man gemeinsam kontrollieren kann.'},
   {at:7,speaker:'Erzähler',portrait:'🚨',title:'00:41 · Letzter Alarm',text:'Noch einmal gehen die Türen auf. Noch einmal wird es laut. Tobi schaut kurz zu Olivia und nickt nur. Keine große Ansage mehr. Die Rollen sind klar.'}
  ],
  win:{speaker:'Tobi',portrait:'🦴',title:'01:18 · Nach dem Schockraum',text:'Der letzte Patient ist versorgt. Tobi lässt sich auf einen Stuhl fallen und schaut Olivia an. „Du bist erstaunlich brauchbar für Neurologie.“ Ein kurzes Grinsen. „Wenn ihr mal jemanden braucht, der Dinge zusammenhält, während alles auseinanderfällt: Sag Bescheid.“ Tobi ist jetzt als Partymitglied verfügbar.'},
  lose:{speaker:'Tobi',portrait:'🦴',title:'Heute reicht es nicht',text:'Tobi schüttelt den Kopf, ohne Vorwurf. „Das war zu viel für eine Mannschaft. Wir holen Verstärkung und machen das sauber.“ Bevor Olivia geht, fügt er hinzu: „Ruf mich wieder an, wenn du es nochmal versuchen willst.“'}
 },
 phone_olivia_facharzt:{
  intro:{speaker:'Sekretariat Neurologie',portrait:'🎓',title:'📱 Anruf · Facharztprüfung',text:'„Frau Kollegin, Sie haben die Voraussetzungen erfüllt. Der Termin steht.“ Olivia schaut auf das Telefon. All die Nachtdienste, Konsile und völlig unnötigen Faxgeräte führen plötzlich zu einem einzigen Wort: Facharztprüfung.'},
  beats:[
   {at:2,speaker:'Olivia',portrait:'🧠',title:'Prüfungstag · Fallvorstellung',text:'Der erste Fall wirkt harmlos, bis die dritte Information alles verändert. Olivia zwingt sich, nicht schneller zu antworten als sie denkt.'},
   {at:5,speaker:'Prüfer',portrait:'📚',title:'„Und was machen Sie jetzt?“',text:'Keine Multiple-Choice-Antwort. Kein Oberarzt im Hintergrund. Nur eine Entscheidung, die medizinisch begründet werden muss.'},
   {at:8,speaker:'Olivia',portrait:'🧠',title:'Letzter Fall',text:'Olivia legt den Reflexhammer auf den Tisch. „Ich würde zuerst das Problem lokalisieren. Danach entscheide ich, was davon wirklich behandelt werden muss.“'}
  ],
  win:{speaker:'Prüfer',portrait:'🎓',title:'Bestanden',text:'„Herzlichen Glückwunsch. Fachärztin für Neurologie.“ Für einen Moment ist Olivia still. Dann vibriert schon wieder das Diensttelefon. Natürlich.'},
  lose:{speaker:'Olivia',portrait:'📖',title:'Noch nicht',text:'Die Prüfung endet, bevor Olivia zufrieden ist. Ärgerlich, aber eindeutig: Das Wissen ist da, die Entscheidungssicherheit noch nicht durchgehend. Sie wird wiederkommen.'}
 },
 phone_olivia_epileptologie:{
  intro:{speaker:'Epileptologie',portrait:'⚡',title:'📱 Konsil · Status',text:'Ein Patient krampft trotz Therapie weiter. Das EEG läuft, Medikamente sind gegeben, und jede Minute verändert die Situation. Olivia merkt schnell: Hier gewinnt nicht der stärkste Angriff, sondern das bessere Timing.'},
  beats:[
   {at:2,speaker:'Olivia',portrait:'🧠',title:'EEG-Platz',text:'„Nicht jedem Ausschlag hinterherlaufen. Erst verstehen, welcher davon die Richtung vorgibt.“'},
   {at:5,speaker:'Erzähler',portrait:'⚡',title:'Kontrollfenster',text:'Der Verlauf wird zu einem Kampf um Unterbrechungen, kurze sichere Fenster und die richtige Eskalation.'},
   {at:7,speaker:'Olivia',portrait:'🧠',title:'Entscheidung',text:'Olivia erkennt, dass genau diese Art von Präzision ihr liegt: beobachten, antizipieren, im richtigen Moment kompromisslos handeln.'}
  ],
  win:{speaker:'Olivia',portrait:'⚡',title:'Schwerpunkt gewählt',text:'Olivia entscheidet sich für Epileptologie. Der neue Skilltree wird auf Kontrolle, Stun, Unterbrechungen und Burst-Fenster ausgerichtet.'},
  lose:{speaker:'Erzähler',portrait:'📉',title:'Der Status bleibt hartnäckig',text:'Der Fall zwingt das Team zum Rückzug und zur Verstärkung. Die Spezialisierungsentscheidung bleibt offen.'}
 },
 phone_olivia_neuroimmunologie:{
  intro:{speaker:'Neuroimmunologie',portrait:'🧬',title:'📱 Konsil · Der zähe Verlauf',text:'Nichts passt sauber zusammen: neue Symptome, alte Befunde, widersprüchliche Laborwerte. Olivia wird zu einem Fall gerufen, bei dem die wichtigste Fähigkeit nicht Tempo ist, sondern Muster über Zeit zu erkennen.'},
  beats:[
   {at:2,speaker:'Olivia',portrait:'🧠',title:'Befundwand',text:'„Wir behandeln nicht nur den aktuellen Treffer. Wir müssen verhindern, dass der nächste überhaupt entsteht.“'},
   {at:5,speaker:'Erzähler',portrait:'🧬',title:'Langer Atem',text:'Der Fall belohnt Stabilisierung, Reinigung von negativen Effekten und kontrollierte langfristige Vorteile statt kurzer Schadensspitzen.'},
   {at:7,speaker:'Olivia',portrait:'🧠',title:'Entscheidung',text:'Olivia merkt, dass ihr diese Art von Medizin gefällt: komplex, systemisch und selten mit einer einzigen spektakulären Antwort erledigt.'}
  ],
  win:{speaker:'Olivia',portrait:'🧬',title:'Schwerpunkt gewählt',text:'Olivia entscheidet sich für Neuroimmunologie. Der neue Skilltree wird auf Sustain, Cleanse, Buffs und langfristige Kontrolle ausgerichtet.'},
  lose:{speaker:'Erzähler',portrait:'📉',title:'Noch kein Schwerpunkt',text:'Der Fall bleibt zu unübersichtlich. Olivia vertagt die Entscheidung, statt sie aus Frust zu treffen.'}
 }
};
export function missionStory(id){return STORIES[id]||null}
export function introFor(id){return STORIES[id]?.intro||null}
export function epilogueFor(id,won){return STORIES[id]?.[won?'win':'lose']||null}
export function nextBeat(run){const story=STORIES[run?.missionId];if(!story)return null;run.seenStory=run.seenStory||[];const beat=story.beats?.find((b,i)=>run.roomIndex>=b.at&&!run.seenStory.includes(i));if(!beat)return null;const index=story.beats.indexOf(beat);run.seenStory.push(index);return beat}
export function resolvePartyLine(scene,party=[]){if(!scene?.party)return null;for(const id of party){if(scene.party[id])return scene.party[id]}return null}
