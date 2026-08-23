// Contextual story barks shown inside JRPG encounters.
// Kept separate from combat rules so future character missions can add dialogue without changing battle mechanics.
const BATTLE_DIALOGUE={
 phone_lisa:{
  'lisa-r1':{
   start:[
    {speaker:'Lisa',portrait:'🩺',text:'Da ist er. Ein einzelner Laborwert ohne Referenzbereich, ohne Verlauf und natürlich ohne klinischen Kontext.'},
    {speaker:'Olivia',portrait:'🧠',text:'Mein natürlicher Feind.'},
    {speaker:'Lisa',portrait:'🩺',text:'Nicht draufhauen. Erst einordnen.'}
   ],
   win:[{speaker:'Olivia',portrait:'🧠',text:'Anamnese, Verlauf, Kontext. Erstaunlich, wie viel weniger bedrohlich eine Zahl wird, wenn man weiß, woher sie kommt.'},{speaker:'Lisa',portrait:'🩺',text:'Ich wusste, dass wir uns verstehen.'}]
  },
  'lisa-r3':{
   start:[
    {speaker:'Erzähler',portrait:'🔔',text:'Noch bevor Olivia den nächsten Gedanken zu Ende bringt, klingelt es aus Zimmer zwölf. Gleichzeitig kommt ihnen ein verwirrter Patient entgegen.'},
    {speaker:'Olivia',portrait:'🧠',text:'Welches Problem zuerst?'},
    {speaker:'Lisa',portrait:'🩺',text:'Das, das laufen kann. Die Klingel bleibt erfahrungsgemäß da.'}
   ],
   win:[{speaker:'Lisa',portrait:'🩺',text:'Siehst du? Priorisieren, stabilisieren, dann der Rest.'},{speaker:'Olivia',portrait:'🧠',text:'Und wann trinken Internisten eigentlich Kaffee?'},{speaker:'Lisa',portrait:'🩺',text:'Das ist keine zeitliche Frage. Das ist eine Infusionsform.'}]
  },
  'lisa-r4':{
   start:[
    {speaker:'Erzähler',portrait:'📑',text:'Vor ihnen erhebt sich der Aufnahmebogen XXL. Acht Seiten. Vier Durchschläge. Zwei Felder fragen nach derselben Telefonnummer.'},
    {speaker:'Olivia',portrait:'🧠',text:'Lisa … das ist kein Konsil mehr.'},
    {speaker:'Lisa',portrait:'🩺',text:'Nicht die Nerven verlieren. Seite für Seite.'},
    {speaker:'Olivia',portrait:'🧠',text:'Ich habe einen Reflexhammer.'},
    {speaker:'Lisa',portrait:'🩺',text:'Ich habe einen Kugelschreiber. Zusammen schaffen wir das.'}
   ],
   phase:[
    {hpBelow:.5,once:'half',lines:[{speaker:'Aufnahmebogen XXL',portrait:'📑',text:'ANLAGE 4b FEHLT.'},{speaker:'Olivia',portrait:'🧠',text:'Es gibt eine Anlage 4b?!'},{speaker:'Lisa',portrait:'🩺',text:'Nicht nachdenken. Weiter.'}]}
   ],
   win:[
    {speaker:'Olivia',portrait:'🧠',text:'Ist er … vollständig?'},
    {speaker:'Lisa',portrait:'🩺',text:'Unterschrieben, datiert und sogar lesbar.'},
    {speaker:'Olivia',portrait:'🧠',text:'Das war erschreckend befriedigend.'}
   ]
  }
 }
};
export function battleDialogue(missionId,encounterId){return BATTLE_DIALOGUE[missionId]?.[encounterId]||null;}
