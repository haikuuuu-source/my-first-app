// Darb — original curriculum covering foundational Nahw (Arabic grammar) concepts.
// Sequence follows the classical beginner order used across Arabic grammar primers
// (Ism/Fi'l/Harf -> Mubtada/Khabar -> Fa'il -> Maf'ul bih -> Idafa -> Jarr -> Dama'ir -> Ishara/Mawsul -> Review).
// All wording, examples and exercises below are written from scratch.

const UNITS = [
{
  id:1, day:1, title:"The Three Word Types", arTitle:"اَلْكَلِمَة",
  teach:"Every word in Arabic is one of three types: اِسْم (Ism) — a noun or name, like كِتَاب (book). فِعْل (Fi'l) — a verb, an action, like كَتَبَ (he wrote). حَرْف (Harf) — a particle with no meaning on its own, like فِي (in). Spotting which type a word is comes before anything else in Nahw.",
  exercises:[
    {type:'mcq', prompt:"What type of word is «كِتَابٌ» (book)?", options:["Ism (noun)","Fi'l (verb)","Harf (particle)","None of these"], answer:0, explanation:"كِتَابٌ names a thing — it's an Ism. Nouns are the words that name people, places, and objects."},
    {type:'mcq', prompt:"What type of word is «كَتَبَ» (he wrote)?", options:["Ism (noun)","Fi'l (verb)","Harf (particle)","None of these"], answer:1, explanation:"كَتَبَ describes an action that happened — that makes it a Fi'l (verb)."},
    {type:'mcq', prompt:"What type of word is «فِي» (in)?", options:["Ism (noun)","Fi'l (verb)","Harf (particle)","None of these"], answer:2, explanation:"فِي has no meaning by itself — it only makes sense connecting other words. That's the mark of a Harf."},
    {type:'tap', prompt:"Tap the Harf (particle) in this sentence.", sub:"الوَلَدُ فِي البَيْتِ — The boy is in the house.", words:["الوَلَدُ","فِي","البَيْتِ"], answer:1, explanation:"فِي is the Harf here — it links الوَلَدُ (the boy) to البَيْتِ (the house) without carrying meaning on its own."},
    {type:'mcq', prompt:"What type of word is «يَكْتُبُ» (he writes / is writing)?", options:["Ism (noun)","Fi'l (verb)","Harf (particle)","None of these"], answer:1, explanation:"يَكْتُبُ is still describing an action — just happening now instead of in the past. Still a Fi'l."}
  ]
},
{
  id:2, day:2, title:"Signs of the Noun", arTitle:"عَلَامَاتُ الِاسْم",
  teach:"You can often tell an Ism apart from a Fi'l or Harf by its signs: it can carry اَلْـ (al-, 'the'), it can carry تَنْوِين (tanwin, a doubled ending sound), it can come after a حَرْف جَرّ (preposition), and it can be called out to with يَا (O...). If a word shows any of these, it's an Ism.",
  exercises:[
    {type:'mcq', prompt:"Which of these is a sign that a word is an Ism?", options:["It ends with تَنْوِين","It starts with سَـ for the future","It ends with ـتْ for past tense","It means 'and'"], answer:0, explanation:"Tanwin (the extra ـٌ ـٍ ـً sound) only ever attaches to nouns — it's a reliable Ism-marker."},
    {type:'mcq', prompt:"«الكِتَابُ» carries اَلْـ (al-). What does that tell you?", options:["It's a Harf","It's a Fi'l","It's an Ism","It's a complete sentence"], answer:2, explanation:"Only nouns take اَلْـ. Seeing it attached instantly tells you the word is an Ism."},
    {type:'tap', prompt:"Tap the word that shows the sign of nidā' (being called).", sub:"يَا وَلَدُ اِذْهَبْ — O boy, go!", words:["يَا","وَلَدُ","اِذْهَبْ"], answer:0, explanation:"يَا is the calling particle — whatever follows it (وَلَدُ) is being addressed directly, which is a noun-only pattern."},
    {type:'mcq', prompt:"In «مِنَ البَيْتِ» (from the house), البَيْتِ comes right after a preposition. What sign does this give it?", options:["It becomes a Fi'l","It shows the noun is majrūr (after a preposition)","It becomes a Harf","It shows no sign"], answer:1, explanation:"Only an Ism can follow a preposition like مِنْ (from) and take the majrūr ending — another reliable Ism sign."},
    {type:'mcq', prompt:"Which of the following could NOT be an Ism sign?", options:["Tanwin","Coming after يَا","Carrying اَلْـ","Ending in the past-tense تْ"], answer:3, explanation:"Ending in ـتْ (like كَتَبَتْ, 'she wrote') is a verb marker, not a noun sign."}
  ]
},
{
  id:3, day:3, title:"The Nominal Sentence: Mubtada & Khabar", arTitle:"اَلْمُبْتَدَأ وَالْخَبَر",
  teach:"A sentence that starts with a noun is called a جُمْلَة اِسْمِيَّة. It has two core parts: اَلْمُبْتَدَأ (Mubtada) — the subject you're talking about, and اَلْخَبَر (Khabar) — what you're saying about it. Both are مَرْفُوع (marfū') — they end in a damma sound. Example: البَيْتُ جَمِيلٌ (The house is beautiful) — البَيْتُ is the Mubtada, جَمِيلٌ is the Khabar.",
  exercises:[
    {type:'mcq', prompt:"In «البَيْتُ جَمِيلٌ» (the house is beautiful), what is البَيْتُ?", options:["Khabar","Mubtada","Harf","Fi'l"], answer:1, explanation:"البَيْتُ is what the sentence is about — the Mubtada, the topic."},
    {type:'mcq', prompt:"In the same sentence, what is جَمِيلٌ?", options:["Khabar","Mubtada","Harf","Fi'l"], answer:0, explanation:"جَمِيلٌ tells you something about the house — it's the Khabar, the comment."},
    {type:'tap', prompt:"Tap the Khabar in this sentence.", sub:"الطَّالِبُ مُجْتَهِدٌ — The student is diligent.", words:["الطَّالِبُ","مُجْتَهِدٌ"], answer:1, explanation:"الطَّالِبُ is the Mubtada (topic); مُجْتَهِدٌ describes it, so it's the Khabar."},
    {type:'mcq', prompt:"What case (i'rāb) are the Mubtada and Khabar normally in?", options:["Nasb (fatha)","Jarr (kasra)","Raf' (damma)","No case at all"], answer:2, explanation:"Both Mubtada and Khabar are marfū' — they take a damma ending, unless something changes the sentence."},
    {type:'mcq', prompt:"Which of these correctly completes «المُعَلِّمُ ___» as a Khabar?", options:["نَشِيطًا","نَشِيطٍ","نَشِيطٌ","نَشِيطَ"], answer:2, explanation:"The Khabar needs a damma ending (نَشِيطٌ) to match its marfū' case — the other endings belong to different cases entirely."}
  ]
},
{
  id:4, day:4, title:"The Verbal Sentence: Fi'l & Fa'il", arTitle:"اَلْفِعْل وَالْفَاعِل",
  teach:"A sentence that starts with a verb is a جُمْلَة فِعْلِيَّة. اَلْفَاعِل (Fa'il) is the one doing the action — and it is always مَرْفُوع (marfū'), ending in damma, no matter what. Example: كَتَبَ الوَلَدُ (The boy wrote) — كَتَبَ is the Fi'l, الوَلَدُ is the Fa'il.",
  exercises:[
    {type:'mcq', prompt:"In «كَتَبَ الوَلَدُ» (the boy wrote), what is كَتَبَ?", options:["Fa'il","Fi'l","Khabar","Harf"], answer:1, explanation:"كَتَبَ is the action word — the Fi'l."},
    {type:'mcq', prompt:"In the same sentence, what is الوَلَدُ?", options:["Fa'il","Fi'l","Khabar","Harf"], answer:0, explanation:"الوَلَدُ is the one who did the writing — the Fa'il."},
    {type:'tap', prompt:"Tap the Fa'il in this sentence.", sub:"ذَهَبَ المُعَلِّمُ — The teacher went.", words:["ذَهَبَ","المُعَلِّمُ"], answer:1, explanation:"ذَهَبَ is the Fi'l (the going); المُعَلِّمُ is who went — the Fa'il."},
    {type:'mcq', prompt:"What case is the Fa'il always in?", options:["Nasb","Jarr","Raf'","It has no fixed case"], answer:2, explanation:"No matter the sentence, the Fa'il is always marfū' — this is a fixed rule in Nahw."},
    {type:'mcq', prompt:"In «جَاءَ الطَّالِبُ» (the student came), what sound marks الطَّالِبُ as marfū'?", options:["Fatha","Kasra","Damma","Sukun"], answer:2, explanation:"The damma ending (ـُ) is the standard sign of raf' on a singular noun."}
  ]
},
{
  id:5, day:5, title:"The Object: Maf'ul Bih", arTitle:"اَلْمَفْعُولُ بِهِ",
  teach:"Many sentences add a third piece after Fi'l + Fa'il: اَلْمَفْعُولُ بِهِ (Maf'ul Bih), the thing the action happens to. Unlike the Fa'il, it is مَنْصُوب (mansūb) — it ends in a fatha. Example: كَتَبَ الوَلَدُ الدَّرْسَ (The boy wrote the lesson) — الدَّرْسَ is the Maf'ul Bih.",
  exercises:[
    {type:'mcq', prompt:"In «كَتَبَ الوَلَدُ الدَّرْسَ», what is الدَّرْسَ?", options:["Fa'il","Mubtada","Maf'ul Bih","Harf"], answer:2, explanation:"الدَّرْسَ is what got written — the thing the action landed on, i.e. the Maf'ul Bih."},
    {type:'mcq', prompt:"What case is the Maf'ul Bih in?", options:["Raf' (damma)","Nasb (fatha)","Jarr (kasra)","No case"], answer:1, explanation:"The Maf'ul Bih is mansūb — it takes a fatha ending, distinguishing it from the marfū' Fa'il."},
    {type:'tap', prompt:"Tap the Maf'ul Bih in this sentence.", sub:"فَتَحَ الوَلَدُ البَابَ — The boy opened the door.", words:["فَتَحَ","الوَلَدُ","البَابَ"], answer:2, explanation:"البَابَ is what got opened — the Maf'ul Bih, ending in fatha."},
    {type:'mcq', prompt:"What sound marks الدَّرْسَ as mansūb?", options:["Damma","Kasra","Fatha","Sukun"], answer:2, explanation:"Fatha (ـَ) is the standard sign of nasb on a singular noun."},
    {type:'mcq', prompt:"Which correctly completes «قَرَأَ الطَّالِبُ ___» as a Maf'ul Bih?", options:["الكِتَابُ","الكِتَابِ","الكِتَابَ","الكِتَابٌ"], answer:2, explanation:"الكِتَابَ carries the fatha ending required for a Maf'ul Bih — the mansūb case."}
  ]
},
{
  id:6, day:6, title:"The Possessive: Idafa", arTitle:"اَلْإِضَافَة",
  teach:"To say 'the boy's book' in Arabic, you join two nouns: كِتَابُ الوَلَدِ. The first noun, اَلْمُضَاف (Mudaf), never takes اَلْـ or tanwin. The second, اَلْمُضَافُ إِلَيْه (Mudaf Ilayh), is always مَجْرُور (majrūr) — it ends in kasra.",
  exercises:[
    {type:'mcq', prompt:"In «كِتَابُ الوَلَدِ» (the boy's book), what is كِتَابُ?", options:["Mudaf Ilayh","Mudaf","Fa'il","Harf"], answer:1, explanation:"كِتَابُ is the first noun in the pair — the Mudaf. Notice it has no اَلْـ."},
    {type:'mcq', prompt:"What is الوَلَدِ in that same phrase?", options:["Mudaf Ilayh","Mudaf","Khabar","Harf"], answer:0, explanation:"الوَلَدِ is the possessor — the Mudaf Ilayh, marked with a kasra."},
    {type:'mcq', prompt:"What case is the Mudaf Ilayh always in?", options:["Raf'","Nasb","Jarr","No fixed case"], answer:2, explanation:"The Mudaf Ilayh is always majrūr, no matter what role the whole phrase plays in the sentence."},
    {type:'tap', prompt:"Tap the Mudaf Ilayh in this phrase.", sub:"بَابُ المَسْجِدِ مَفْتُوحٌ — The mosque's door is open.", words:["بَابُ","المَسْجِدِ","مَفْتُوحٌ"], answer:1, explanation:"المَسْجِدِ is the possessor with a kasra ending — the Mudaf Ilayh. بَابُ is the Mudaf, and مَفْتُوحٌ is the Khabar of the whole phrase."},
    {type:'mcq', prompt:"Which of these can the Mudaf (first noun) NEVER carry?", options:["A damma ending","اَلْـ (al-)","A kasra ending","A short vowel"], answer:1, explanation:"The Mudaf is defined by being attached to what follows — it never takes its own اَلْـ."}
  ]
},
{
  id:7, day:7, title:"Prepositions & the Majrur Noun", arTitle:"حَرْفُ الْجَرّ وَالْمَجْرُور",
  teach:"حُرُوفُ الْجَرّ (prepositions) like فِي (in), مِنْ (from), إِلَى (to), and عَلَى (on) always pull the noun after them into the مَجْرُور case — a kasra ending. This pairing, harf jarr + majrūr noun, always travels together.",
  exercises:[
    {type:'mcq', prompt:"In «فِي البَيْتِ» (in the house), what is فِي?", options:["Ism","Fi'l","Harf Jarr","Khabar"], answer:2, explanation:"فِي is a preposition — a Harf Jarr, meaning 'in'."},
    {type:'mcq', prompt:"After a Harf Jarr, what case does the following noun take?", options:["Raf'","Nasb","Jarr","It stays uninflected"], answer:2, explanation:"Any noun directly after a preposition becomes majrūr — that's the whole point of a Harf Jarr."},
    {type:'tap', prompt:"Tap the majrūr noun in this sentence.", sub:"ذَهَبَ الوَلَدُ إِلَى المَدْرَسَةِ — The boy went to the school.", words:["ذَهَبَ","الوَلَدُ","إِلَى","المَدْرَسَةِ"], answer:3, explanation:"المَدْرَسَةِ follows the preposition إِلَى (to), so it takes the majrūr kasra ending."},
    {type:'mcq', prompt:"What sound usually marks a singular noun as majrūr?", options:["Damma","Fatha","Kasra","Sukun"], answer:2, explanation:"Kasra (ـِ) is the standard majrūr ending."},
    {type:'mcq', prompt:"Which correctly completes «خَرَجَ الوَلَدُ ___» meaning 'the boy left the house'?", options:["مِنَ البَيْتُ","مِنَ البَيْتَ","مِنَ البَيْتِ","مِنَ بَيْتٌ"], answer:2, explanation:"مِنَ البَيْتِ correctly pairs the preposition مِنْ with a majrūr (kasra-ending) noun."}
  ]
},
{
  id:8, day:8, title:"Pronouns: Attached & Detached", arTitle:"اَلضَّمَائِر",
  teach:"Arabic pronouns come in two forms. اَلضَّمِيرُ الْمُنْفَصِل (detached) stand alone, like هُوَ (he) or أَنْتَ (you). اَلضَّمِيرُ الْمُتَّصِل (attached) fuse onto another word, like ـهُ in كِتَابُهُ (his book) or ـي in قَلَمِي (my pen).",
  exercises:[
    {type:'mcq', prompt:"In «كِتَابُهُ» (his book), what kind of pronoun is ـهُ?", options:["Detached (munfasil)","Attached (muttasil)","Not a pronoun","A preposition"], answer:1, explanation:"ـهُ is fused directly onto كِتَاب — that makes it an attached (muttasil) pronoun."},
    {type:'mcq', prompt:"In «هُوَ طَالِبٌ» (he is a student), what kind of pronoun is هُوَ?", options:["Detached (munfasil)","Attached (muttasil)","Not a pronoun","A verb"], answer:0, explanation:"هُوَ stands completely on its own as a separate word — a detached (munfasil) pronoun."},
    {type:'tap', prompt:"Tap the word that contains an attached pronoun.", sub:"قَلَمِي عَلَى الطَّاوِلَةِ — My pen is on the table.", words:["قَلَمِي","عَلَى","الطَّاوِلَةِ"], answer:0, explanation:"قَلَمِي = قَلَم + ـي ('my') — the ـي is an attached pronoun fused onto the noun."},
    {type:'mcq', prompt:"Which word means 'you' (masculine singular, detached)?", options:["أَنَا","هُوَ","أَنْتَ","هِيَ"], answer:2, explanation:"أَنْتَ is the detached second-person masculine singular pronoun, 'you'."},
    {type:'mcq', prompt:"In «بَيْتُكَ جَمِيلٌ» (your house is beautiful), who does ـكَ refer to?", options:["Me","You (masc. singular)","Him","Them"], answer:1, explanation:"ـكَ is the attached pronoun for 'you' (masculine singular), fused onto بَيْت."}
  ]
},
{
  id:9, day:9, title:"Demonstratives & Relatives", arTitle:"اِسْمُ الْإِشَارَة وَالْمَوْصُول",
  teach:"اِسْمُ الْإِشَارَة (demonstrative) points at something: هَذَا (this, masc.), هَذِهِ (this, fem.), ذَلِكَ (that). اِسْمُ الْمَوْصُول (relative pronoun) connects a noun to a description: الَّذِي (who/that, masc.), الَّتِي (who/that, fem.).",
  exercises:[
    {type:'mcq', prompt:"«هَذَا كِتَابٌ» — what does هَذَا point to?", options:["A feminine singular thing","A masculine singular thing","Something far away","A group of things"], answer:1, explanation:"هَذَا is the demonstrative for something near and masculine singular."},
    {type:'mcq', prompt:"«هَذِهِ مَدْرَسَةٌ» — what is هَذِهِ used for?", options:["Masculine singular","Feminine singular","Plural","Distant objects"], answer:1, explanation:"هَذِهِ is the feminine singular near-demonstrative, matching مَدْرَسَة (school), a feminine word."},
    {type:'tap', prompt:"Tap the isim mawsul (relative pronoun) in this sentence.", sub:"الطَّالِبُ الَّذِي نَجَحَ مُجْتَهِدٌ — The student who succeeded is diligent.", words:["الطَّالِبُ","الَّذِي","نَجَحَ","مُجْتَهِدٌ"], answer:1, explanation:"الَّذِي connects الطَّالِبُ to the description that follows (نَجَحَ) — it's the relative pronoun."},
    {type:'mcq', prompt:"Which word means 'that' (far away, masculine)?", options:["هَذَا","هَذِهِ","ذَلِكَ","الَّتِي"], answer:2, explanation:"ذَلِكَ is the far demonstrative, masculine — 'that'."},
    {type:'mcq', prompt:"What is the feminine form of الَّذِي?", options:["هَذِهِ","ذَلِكَ","الَّتِي","هِيَ"], answer:2, explanation:"الَّتِي is the feminine relative pronoun, matching feminine nouns the way الَّذِي matches masculine ones."}
  ]
},
{
  id:10, day:10, title:"Review: The Three Cases", arTitle:"مُرَاجَعَة: حَالَاتُ الْإِعْرَاب",
  teach:"You've now met the three core cases of Nahw. رَفْع (Raf', damma) marks Mubtada, Khabar, and Fa'il. نَصْب (Nasb, fatha) marks Maf'ul Bih. جَرّ (Jarr, kasra) marks a noun after a preposition or as a Mudaf Ilayh. Everything you've learned over these ten days comes back to spotting which of these three a word is in.",
  exercises:[
    {type:'mcq', prompt:"«الشَّمْسُ مُشْرِقَةٌ» (the sun is shining) — what is مُشْرِقَةٌ?", options:["Mubtada","Khabar","Maf'ul Bih","Mudaf Ilayh"], answer:1, explanation:"مُشْرِقَةٌ describes الشَّمْسُ — it's the Khabar, marfū'."},
    {type:'mcq', prompt:"«أَكَلَ الوَلَدُ التُّفَّاحَةَ» (the boy ate the apple) — what is التُّفَّاحَةَ?", options:["Fa'il","Maf'ul Bih","Mudaf","Khabar"], answer:1, explanation:"التُّفَّاحَةَ is what got eaten — the Maf'ul Bih, mansūb with a fatha."},
    {type:'tap', prompt:"Tap the Fa'il in this sentence.", sub:"سَافَرَ أَبِي إِلَى مِصْرَ — My father traveled to Egypt.", words:["سَافَرَ","أَبِي","إِلَى","مِصْرَ"], answer:1, explanation:"أَبِي (my father) is who did the traveling — the Fa'il, marfū'."},
    {type:'mcq', prompt:"A word ending in kasra is in which case?", options:["Raf'","Nasb","Jarr","None"], answer:2, explanation:"Kasra is the sign of Jarr — used after prepositions and for the Mudaf Ilayh."},
    {type:'mcq', prompt:"Mubtada and Fa'il share which case?", options:["Nasb","Jarr","Raf'","They share no case"], answer:2, explanation:"Both are always marfū' (damma) — one of the most important patterns to remember in Nahw."}
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

// Study Materials: a read-only, hand-curated library separate from the 10-day
// path. Each entry's `questions` array uses the same {mcq|tap} exercise shape
// as UNITS above. There is no in-app upload — send Claude a PDF and it will
// extract the text, write questions from it, and append an entry here.
// Example shape:
// { id:'m1', title:"Some PDF Title", description:"12 questions", questions:[ ... ] }
const MATERIALS = [];
