// Darb — curriculum built directly from the uploaded "Nahw 10-Day Workbook" PDF.
// Each day maps to that book's own sections/order, and every exercise is grounded
// in a definition, rule, or worked example that appears explicitly in the PDF
// (not in the ambiguous fill-in-the-blank worksheets, which have no answer key).

const UNITS = [
{
  id:1, day:1, title:"The Three Kinds of Words", arTitle:"اَلْكَلِمَة",
  teach:"There are three kinds of words in Arabic. اِسْم (Ism): the name of a person, place, thing, idea, adjective, adverb — and more. فِعْل (Fi'l): a word that has a tense — past, present, or future. حَرْف (Harf): a word that makes no sense unless another word comes after it.",
  exercises:[
    {type:'mcq', prompt:"Which type of word is \"table\"?", options:["Ism (noun)","Fi'l (verb)","Harf (particle)","None of these"], answer:0, explanation:"\"Table\" names a thing — that makes it an Ism."},
    {type:'mcq', prompt:"Which type of word is \"jumps\"?", options:["Ism (noun)","Fi'l (verb)","Harf (particle)","None of these"], answer:1, explanation:"\"Jumps\" carries a tense (present) — an action word, a Fi'l."},
    {type:'mcq', prompt:"Which type of word is \"in\"?", options:["Ism (noun)","Fi'l (verb)","Harf (particle)","None of these"], answer:2, explanation:"\"In\" makes no sense on its own until another word follows it — that's the mark of a Harf."},
    {type:'mcq', prompt:"Which type of word is \"Makkah\"?", options:["Ism (noun)","Fi'l (verb)","Harf (particle)","None of these"], answer:0, explanation:"Makkah names a place — an Ism (a proper noun, but still an Ism)."},
    {type:'mcq', prompt:"Which type of word is \"slept\"?", options:["Ism (noun)","Fi'l (verb)","Harf (particle)","None of these"], answer:1, explanation:"\"Slept\" carries a past tense — a Fi'l."}
  ]
},
{
  id:2, day:2, title:"Three Forms of Status", arTitle:"حَالَاتُ الْإِعْرَاب",
  teach:"Every ism carries one of three forms of status. رَفْع (Raf) — the subject, the doer of the act. نَصْب (Nasb) — the object, a detail of the act. جَرّ (Jarr) — the word that comes right after \"of\". Example: \"A teacher entered the classroom\" — teacher is Raf, classroom is Nasb. \"A student of his was sleeping soundly\" — student is Raf, his is Jarr, soundly is Nasb.",
  exercises:[
    {type:'mcq', prompt:"In \"A teacher entered the classroom,\" which word is Raf — the doer of the act?", options:["teacher","entered","classroom","the"], answer:0, explanation:"Teacher is the one doing the entering — the Raf."},
    {type:'mcq', prompt:"In \"The teacher threw a pencil,\" what status is \"a pencil\"?", options:["Raf","Nasb","Jarr"], answer:1, explanation:"\"A pencil\" is the detail of the act — what got thrown — so it's Nasb."},
    {type:'mcq', prompt:"In \"A student of his was sleeping soundly,\" what status is \"his\"?", options:["Raf","Nasb","Jarr"], answer:2, explanation:"\"His\" comes right after \"of\" — that's the sign of Jarr."},
    {type:'mcq', prompt:"In \"The teacher's student woke up suddenly,\" what status is \"student\" (the one waking up)?", options:["Raf","Nasb","Jarr"], answer:0, explanation:"\"Student\" is the doer of the waking-up — Raf."},
    {type:'mcq', prompt:"Which form of status marks the word that comes right after \"of\"?", options:["Raf","Nasb","Jarr"], answer:2, explanation:"Jarr is the status for the word after \"of\" — like a Mudaf Ilayh."}
  ]
},
{
  id:3, day:3, title:"How to Tell Status", arTitle:"عَلَامَاتُ الْإِعْرَاب",
  teach:"Each status has its own ending sound. Raf: damma (ـُ / ـٌ) on a singular ism. Nasb: fatha (ـَ / ـً) on a singular ism. Jarr: kasra (ـِ / ـٍ) on a singular ism. Watch مُسْلِمٌ (a Muslim) change: مُسْلِمٌ is Raf, مُسْلِمًا is Nasb, مُسْلِمٍ is Jarr — same word, three different endings, three different jobs.",
  exercises:[
    {type:'mcq', prompt:"Which ending sound marks Raf on a singular ism?", options:["Damma (ـُ)","Fatha (ـَ)","Kasra (ـِ)","Sukun"], answer:0, explanation:"Damma is the Raf ending — the default sign for the doer of the act."},
    {type:'mcq', prompt:"Which ending sound marks Nasb on a singular ism?", options:["Damma (ـُ)","Fatha (ـَ)","Kasra (ـِ)","Sukun"], answer:1, explanation:"Fatha marks Nasb — the object/detail of the act."},
    {type:'mcq', prompt:"Which ending sound marks Jarr on a singular ism?", options:["Damma (ـُ)","Fatha (ـَ)","Kasra (ـِ)","Sukun"], answer:2, explanation:"Kasra marks Jarr — the word after \"of\" or a preposition."},
    {type:'mcq', prompt:"«مُسْلِمٌ» (a Muslim, Raf) becomes what in Nasb?", options:["مُسْلِمٌ","مُسْلِمًا","مُسْلِمٍ","مُسْلِمُونَ"], answer:1, explanation:"Swap the damma for a fatha: مُسْلِمًا is the Nasb form."},
    {type:'tap', prompt:"Tap the word that is in Jarr status.", sub:"مُسْلِمٌ (Raf) — مُسْلِمًا (Nasb) — مُسْلِمٍ (Jarr)", words:["مُسْلِمٌ","مُسْلِمًا","مُسْلِمٍ"], answer:2, explanation:"مُسْلِمٍ carries the kasra — the sign of Jarr."}
  ]
},
{
  id:4, day:4, title:"Light vs. Heavy", arTitle:"اَلْخِفَّةُ وَالثِّقَل",
  teach:"Normally an ism should be heavy. An ism is made light by removing the extra \"n\" sound — either by dropping the tanween (the doubled ending) or dropping an extra نْ. Note: اَلْـ doesn't take tanween, but an ism carrying اَلْـ still isn't considered light.",
  exercises:[
    {type:'mcq', prompt:"What makes an ism \"light\"?", options:["Removing the extra 'n' sound (tanween or an extra نْ)","Adding tanween","Adding اَلْـ","Making it plural"], answer:0, explanation:"Light = the extra 'n' sound is gone, either the tanween or a final نْ."},
    {type:'mcq', prompt:"Does an ism carrying اَلْـ count as \"light\"?", options:["Yes, اَلْـ makes it light","No — اَلْـ just doesn't take tanween, that's different from being light","Only in Jarr","Only in Raf"], answer:1, explanation:"اَلْـ blocks tanween, but that alone doesn't make the ism light — the two rules are separate."},
    {type:'mcq', prompt:"«مُسْلِمٌ» is heavy (Raf, with tanween). What's its light form?", options:["مُسْلِمُ","مُسْلِمٌ","مُسْلِمًا","مُسْلِمِينَ"], answer:0, explanation:"Drop the tanween's extra 'n' sound: مُسْلِمُ is the light Raf form."},
    {type:'mcq', prompt:"«مُسْلِمًا» is heavy (Nasb). What's its light form?", options:["مُسْلِمَ","مُسْلِمَا","مُسْلِمٍ","مُسْلِمُونَ"], answer:1, explanation:"Drop the tanween: مُسْلِمَا is the light Nasb form."},
    {type:'mcq', prompt:"Which of these directly makes an ism light?", options:["Dropping the tanween","Adding an extra نْ","Adding tanween","Doubling a letter"], answer:0, explanation:"Dropping tanween removes the extra 'n' sound — that's what makes an ism light."}
  ]
},
{
  id:5, day:5, title:"Flexibility", arTitle:"اَلتَّصْرِيف",
  teach:"Isms fall into three flexibility categories. Fully flexible: can be heavy or light, and can show all three statuses — most isms work this way. Non-flexible: only one form, looking the same in every status (words ending in alif like مُوسَى, and ism mawsul words like الَّذِي). Partly flexible: can never be heavy and can't take a kasra — one form for Raf, and a second shared form for Nasb and Jarr (common with non-Arab or longer proper names).",
  exercises:[
    {type:'mcq', prompt:"A word that can be heavy or light, and can show Raf, Nasb, and Jarr, is...", options:["Fully flexible","Non-flexible","Partly flexible","Not an ism"], answer:0, explanation:"That's the definition of fully flexible — most isms fall in this category."},
    {type:'mcq', prompt:"Which of these is a sign that a word is non-flexible?", options:["It ends in alif, like مُوسَى","It has tanween","It carries اَلْـ","It's a verb"], answer:0, explanation:"Words ending in alif (like مُوسَى) are non-flexible — they never change shape across statuses."},
    {type:'mcq', prompt:"A partly flexible word...", options:["Can never be heavy and can't take a kasra","Is always heavy","Can only appear in Raf","Is always a verb"], answer:0, explanation:"Partly flexible words are capped — no heavy form, no kasra ending."},
    {type:'mcq', prompt:"«بَاكِسْتَانُ» (a non-Arab place name, over 3 letters) is...", options:["Fully flexible","Non-flexible","Partly flexible","Not an ism"], answer:2, explanation:"Non-Arab place names longer than 3 letters are partly flexible."},
    {type:'mcq', prompt:"«عَدَنٌ» (Aden — a place name with only 3 letters) is an exception, and is...", options:["Fully flexible","Non-flexible","Partly flexible","Not an ism"], answer:0, explanation:"The 3-letter exception flips it back to fully flexible."}
  ]
},
{
  id:6, day:6, title:"Number & Gender", arTitle:"اَلْعَدَدُ وَالْجِنْس",
  teach:"An ism can be singular, a pair (مُثَنَّى), or a plural (جَمْع). A broken plural (جَمْع تَكْسِير) doesn't use regular plural endings — it must be memorized. Human broken plurals (like رُسُلٌ, messengers) are treated as \"she\" or \"they\"; non-human broken plurals (like كُتُبٌ, books) are always treated as \"she\". Gender: an ism is masculine by default. It's feminine if it's really feminine (like بَقَرَةٌ, a cow), or \"fake feminine\" — non-human plurals, proper place names, paired body parts, and a handful the Arabs simply treat as feminine.",
  exercises:[
    {type:'mcq', prompt:"«رُسُلٌ» (messengers) is a human broken plural. How is it treated?", options:["As 'he'","As 'she' or 'they'","As a Fi'l","It has no gender"], answer:1, explanation:"Human broken plurals are treated as 'she' or as what they really are, 'they'."},
    {type:'mcq', prompt:"«كُتُبٌ» (books) is a non-human broken plural. How is it always treated?", options:["As 'he'","As 'she'","As 'they'","It has no gender"], answer:1, explanation:"ALL non-human plurals — broken or not — are treated as 'she'."},
    {type:'mcq', prompt:"«بَقَرَةٌ» (a cow) is feminine because...", options:["It's a real feminine — an actual female","It's a fake feminine","It's a broken plural","It ends in اَلْـ"], answer:0, explanation:"بَقَرَةٌ names an actual female — real feminine, the simplest case."},
    {type:'mcq', prompt:"Which of these is a \"fake feminine\" category?", options:["Non-human broken plurals","Real female nouns","Masculine plurals","Attached pronouns"], answer:0, explanation:"Non-human broken plurals are grammatically feminine even though nothing about them is literally female — that's 'fake feminine'."},
    {type:'mcq', prompt:"What is the default gender of an ism, if nothing marks it otherwise?", options:["Feminine","Masculine","Neither","Both"], answer:1, explanation:"Masculine is the default — feminine has to be signaled, one way or another."}
  ]
},
{
  id:7, day:7, title:"Common vs. Proper & Pronouns", arTitle:"اَلْمَعْرِفَة وَالضَّمَائِر",
  teach:"Common isms are the default. An ism becomes proper in several ways: it carries اَلْـ, it's a proper name, it's the one being called (يَا...), it's a pronoun, it's a pointer word like هَذَا, or it's an ism mawsul like الَّذِي. Independent pronouns stand alone — هُوَ (he), هِيَ (she), أَنْتَ (you), أَنَا (I), نَحْنُ (we) — while attached pronouns fuse onto another word, like ـهُ in كِتَابُهُ (his book).",
  exercises:[
    {type:'mcq', prompt:"Which of these is one of the ways an ism becomes proper?", options:["It carries اَلْـ","It's plural","It's light","It's a Harf"], answer:0, explanation:"Carrying اَلْـ is one of the classic signs that makes an ism proper (definite)."},
    {type:'mcq', prompt:"«هُوَ» means...", options:["I","We","He","You"], answer:2, explanation:"هُوَ is the independent pronoun for 'he'."},
    {type:'mcq', prompt:"«أَنَا» means...", options:["He","I","They","You"], answer:1, explanation:"أَنَا is the independent pronoun for 'I'."},
    {type:'mcq', prompt:"In «كِتَابُهُ» (his book), what is ـهُ?", options:["An independent pronoun","An attached pronoun fused onto the noun","A Harf of Jarr","A Fi'l"], answer:1, explanation:"ـهُ fuses directly onto كِتَاب — that's an attached pronoun."},
    {type:'mcq', prompt:"«نَحْنُ» means...", options:["I","He","We","You (plural)"], answer:2, explanation:"نَحْنُ is the independent pronoun for 'we'."}
  ]
},
{
  id:8, day:8, title:"Idhafah & Mowsoof-Sifah", arTitle:"اَلْإِضَافَةُ وَالصِّفَة",
  teach:"The Idhafah links two isms as \"X of Y\": the مُضَاف (first word) must be light with no اَلْـ; the مُضَاف إِلَيْهِ (second word) must be in Jarr status. Example: إِمَامُ الْمَسْجِدِ — \"Imam of the masjid\". A Mowsoof (the noun being described) is followed by its Sifah (adjective), which matches it in all 4 properties — status, number, gender, and type. Example: قَوْلًا ثَقِيلًا — \"a heavy word\" — ثَقِيلًا matches قَوْلًا exactly.",
  exercises:[
    {type:'mcq', prompt:"In an Idhafah, the first word (مُضَاف) must be...", options:["Light, with no اَلْـ","Heavy, with اَلْـ","In Nasb","A verb"], answer:0, explanation:"The مُضَاف is always light and never carries اَلْـ."},
    {type:'mcq', prompt:"In an Idhafah, what status must the second word (مُضَاف إِلَيْهِ) be in?", options:["Raf","Nasb","Jarr","Any status"], answer:2, explanation:"The مُضَاف إِلَيْهِ is always Jarr — that's the whole point of the construction."},
    {type:'mcq', prompt:"«إِمَامُ الْمَسْجِدِ» means...", options:["Imam of the masjid","The masjid's book","A heavy imam","The imam prayed"], answer:0, explanation:"A direct Idhafah: 'Imam of the masjid'."},
    {type:'mcq', prompt:"A Sifah (adjective) must match its Mowsoof (the noun it describes) in...", options:["Only meaning","Its 4 properties: status, number, gender, and type","Only status","Nothing — it's independent"], answer:1, explanation:"A Sifah must agree with its Mowsoof across all four properties."},
    {type:'mcq', prompt:"«قَوْلًا ثَقِيلًا» means...", options:["A light word","A heavy word","A beautiful word","A short word"], answer:1, explanation:"ثَقِيلًا means 'heavy' — describing قَوْلًا, 'a word'."}
  ]
},
{
  id:9, day:9, title:"Harf of Jarr, Harf of Nasb & Pointing Words", arTitle:"حُرُوفُ الْجَرِّ وَالنَّصْب",
  teach:"A Harf of Jarr makes its ism Jarr — examples: بِ (with), لِ (for/have), مِنْ (from), فِي (in), عَلَى (on), إِلَى (to). A Harf of Nasb makes its ism Nasb — examples: إِنَّ (certainly), أَنَّ (that), لٰكِنَّ (however), لَعَلَّ (so that/maybe). Pointing words (اِسْمُ الْإِشَارَة) show near or far — هَذَا (this, masc.) and ذَلِكَ (that, masc.) are the most common. A pointer followed immediately by اَلْـ forms a fragment (هَذَا الْبَيْتُ, \"this house\"); without اَلْـ right after, it forms a full sentence (هَذَا بَيْتٌ, \"this is a house\").",
  exercises:[
    {type:'mcq', prompt:"«بِ» (a Harf of Jarr) roughly means...", options:["with / by / at","he wrote","the house","and"], answer:0, explanation:"بِ covers 'with, by, at' — a very common Harf of Jarr."},
    {type:'mcq', prompt:"«إِنَّ» (a Harf of Nasb) means...", options:["certainly / for sure","will not","after","above"], answer:0, explanation:"إِنَّ emphasizes certainty — 'certainly' or 'for sure'."},
    {type:'mcq', prompt:"«هَذَا» followed immediately by اَلْـ (like هَذَا الْبَيْتُ) forms a...", options:["Sentence","Fragment","Question","Harf"], answer:1, explanation:"Pointer + اَلْـ right after it = a fragment, like 'this house' rather than a full statement."},
    {type:'mcq', prompt:"«هَذَا بَيْتٌ» (this is a house) — since اَلْـ doesn't follow هَذَا right away, this is a...", options:["Fragment","Sentence","Neither"], answer:1, explanation:"Without اَلْـ right after the pointer, it becomes a complete sentence."},
    {type:'mcq', prompt:"What status does a Harf of Jarr give the ism that follows it?", options:["Raf","Nasb","Jarr","It stays a Fi'l"], answer:2, explanation:"That's the entire job of a Harf of Jarr — it puts its ism in Jarr status."}
  ]
},
{
  id:10, day:10, title:"Sentences, Tense & Forbidding", arTitle:"مُرَاجَعَة شَامِلَة",
  teach:"A Jumlah Ismiyyah (nominal sentence) needs an invisible \"IS\" — you'll find it after an independent pronoun (أَنَا مُسْلِمٌ, \"I am a Muslim\"), after a pointer word not followed by اَلْـ, or after a Harf of Nasb and its ism. نَصَرَ (\"he helped\") is Fi'l Madi, the past tense. يَنْصُرُ (\"he helps\") is Fi'l Mudari', the present tense. To forbid, put لَا before the lightest 2nd-person present tense: تَذْهَبُ (\"you go\") becomes لَا تَذْهَبْ (\"don't go!\").",
  exercises:[
    {type:'mcq', prompt:"«أَنَا مُسْلِمٌ» means...", options:["I am a Muslim","He is a Muslim","We are Muslims","You are a Muslim"], answer:0, explanation:"أَنَا (I) + مُسْلِمٌ (a Muslim), with an invisible \"is\" linking them."},
    {type:'mcq', prompt:"«نَصَرَ» (he helped) is in which tense?", options:["Past (Madi)","Present (Mudari')","A command","None"], answer:0, explanation:"نَصَرَ is the Fi'l Madi form — the past tense."},
    {type:'mcq', prompt:"«يَنْصُرُ» (he helps) is in which tense?", options:["Past (Madi)","Present (Mudari')","A command","None"], answer:1, explanation:"يَنْصُرُ is the Fi'l Mudari' form — the present tense."},
    {type:'mcq', prompt:"To forbid someone from going, «تَذْهَبُ» (you go) becomes...", options:["لَا تَذْهَبْ","تَذْهَبُ","اِذْهَبْ","لَنْ تَذْهَبَ"], answer:0, explanation:"لَا + the lightest 2nd-person present tense = \"don't go!\""},
    {type:'tap', prompt:"Tap the Fi'l (verb) in this sentence.", sub:"نَصَرَ الرَّجُلُ — The man helped.", words:["نَصَرَ","الرَّجُلُ"], answer:0, explanation:"نَصَرَ is the action word — the Fi'l; الرَّجُلُ (the man) is who did it."}
  ]
}
];

const ACHIEVEMENTS = [
  {id:'first_lesson', title:"First Steps", body:"Complete your first lesson", icon:'star'},
  {id:'streak3', title:"Three-Day Flame", body:"Reach a 3-day streak", icon:'flame'},
  {id:'streak7', title:"Week of 'Ilm", body:"Reach a 7-day streak", icon:'flame'},
  {id:'perfect', title:"Flawless", body:"Finish a lesson with no mistakes", icon:'gem'},
  {id:'halfway', title:"Halfway There", body:"Complete Day 5", icon:'compass'},
  {id:'finisher', title:"Nahw Master", body:"Complete all 10 days", icon:'crown'}
];

const RANKS = [
  {min:0, title:"Mubtadi'", ar:"مُبْتَدِئ"},
  {min:60, title:"Mutawassiṭ", ar:"مُتَوَسِّط"},
  {min:150, title:"Mutaqaddim", ar:"مُتَقَدِّم"},
  {min:280, title:"Ustādh", ar:"أُسْتَاذ"}
];

// Study Materials: a read-only, optional-extra library separate from the 10-day
// path (which is now itself built from the uploaded PDF — see UNITS above).
// Kept empty for now. Each entry's `questions` array uses the same {mcq|tap}
// exercise shape as UNITS. There is no in-app upload — send Claude a PDF and
// it will extract the text, write questions from it, and append an entry here.
const MATERIALS = [];
