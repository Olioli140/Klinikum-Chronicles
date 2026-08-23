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
 }
};
export function missionStory(id){return STORIES[id]||null}
export function introFor(id){return STORIES[id]?.intro||null}
export function epilogueFor(id,won){return STORIES[id]?.[won?'win':'lose']||null}
export function nextBeat(run){const story=STORIES[run?.missionId];if(!story)return null;run.seenStory=run.seenStory||[];const beat=story.beats?.find((b,i)=>run.roomIndex>=b.at&&!run.seenStory.includes(i));if(!beat)return null;const index=story.beats.indexOf(beat);run.seenStory.push(index);return beat}
export function resolvePartyLine(scene,party=[]){if(!scene?.party)return null;for(const id of party){if(scene.party[id])return scene.party[id]}return null}
