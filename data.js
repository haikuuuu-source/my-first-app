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
//
// The set below is generated from the uploaded "Nahw — 10 Day" workbook
// (Dream Worldwide), covering: Ism/Fi'l/Harf & the four properties of an Ism,
// i'rab (raf'/nasb/jarr) recognition, light vs. heavy & flexibility, idhafah,
// mowsoof+sifah, huruf al-jarr & huruf al-nasb, pronouns/pointing
// words/jumlah ismiyyah, and past/present tense verbs & commands.
const MATERIALS = [
{
  id:'ism_fil_harf', title:"The Three Kinds of Words",
  description:"Ism, Fi'l & Harf, and the four properties of an Ism — 8 questions",
  questions:[
    {type:'mcq', prompt:"According to the workbook, what is a حَرْف؟", options:["A word with a tense (past, present, or future)","A word that makes no sense unless another word comes after it","The name of a person, place, thing, or idea","A word that always ends in tanwīn"], answer:1, explanation:"A Harf carries no meaning by itself — it only makes sense connecting to another word, like فِي or مِنْ."},
    {type:'mcq', prompt:"Which definition describes an اِسْم؟", options:["A word that has a tense","The name of a person, place, thing, idea, adjective, adverb, and more","A word that needs another word after it to make sense","An action that already happened"], answer:1, explanation:"Ism is the broadest category — names, adjectives, and adverbs are all isms, not just physical objects."},
    {type:'mcq', prompt:"«جُلُوس» (sitting) is an abstract idea, not a physical object. What kind of word is it?", options:["Fi'l","Harf","Ism","None of these"], answer:2, explanation:"The workbook's definition of Ism explicitly includes ideas — not just persons, places, and things."},
    {type:'tap', prompt:"Tap the word that functions as a Harf in this classification.", sub:"table · in · jumps", words:["table","in","jumps"], answer:1, explanation:"'in' carries no meaning without something to attach to — the Harf role. 'table' is an Ism (a thing) and 'jumps' is a Fi'l (a tensed action)."},
    {type:'mcq', prompt:"How many properties does every Ism have, according to the workbook?", options:["Two","Three","Four","Five"], answer:2, explanation:"Every Ism has four properties: Status, Number, Gender, and Type."},
    {type:'mcq', prompt:"Which of these is NOT one of the four properties of an Ism?", options:["Status (i'rāb)","Number","Tense","Gender"], answer:2, explanation:"Tense belongs to the Fi'l, not the Ism — the four Ism properties are Status/Number/Gender/Type."},
    {type:'mcq', prompt:"«فِي» is best classified as which kind of word?", options:["Ism","Fi'l","Harf","It could be any of the three"], answer:2, explanation:"فِي needs another word to make sense — the defining trait of a Harf."},
    {type:'mcq', prompt:"«ذَهَبَ» (he went) is which kind of word?", options:["Ism","Fi'l","Harf","None of these"], answer:1, explanation:"ذَهَبَ carries a past tense — a Fi'l."}
  ]
},
{
  id:'iraab_status', title:"I'rāb: The Three Forms of Status",
  description:"Raf', Nasb & Jarr, and how to recognize each ending — 8 questions",
  questions:[
    {type:'mcq', prompt:"Which status marks the doer of the act (the subject)?", options:["Nasb","Jarr","Raf'","None of these"], answer:2, explanation:"Raf' (رَفْع) marks the subject/doer — the workbook calls this 'مَرْفُوْع'."},
    {type:'mcq', prompt:"Which status marks the detail of the act (the object)?", options:["Raf'","Nasb","Jarr","Sifah"], answer:1, explanation:"Nasb (نَصْب) marks the object — 'مَنْصُوْب'."},
    {type:'mcq', prompt:"Which status marks the word that comes after 'of' (the possessive)?", options:["Raf'","Nasb","Jarr","Idhafah"], answer:2, explanation:"Jarr (جَرّ) marks the possessive word — 'مَجْرُوْر'."},
    {type:'mcq', prompt:"For a singular Ism, what is the standard Raf' ending?", options:["A kasra sound (i/in)","A fatha sound (a/an)","A damma sound (u/un)","A sukūn"], answer:2, explanation:"Singular Raf' is marked by damma or dammatayn (u/un)."},
    {type:'mcq', prompt:"For a singular Ism, what is the standard Nasb ending?", options:["A fatha sound (a/an)","A damma sound (u/un)","A kasra sound (i/in)","No sound at all"], answer:0, explanation:"Singular Nasb is marked by fatha or fathatayn (a/an)."},
    {type:'mcq', prompt:"For a pair (muthannā), what's true about the Nasb and Jarr endings?", options:["They're completely different from each other","They're identical to each other (ay/ayni)","They're both identical to Raf'","Pairs have no ending at all"], answer:1, explanation:"In the pair and the plural, Nasb and Jarr share the same ending — only the singular form separates Nasb from Jarr."},
    {type:'tap', prompt:"In «قَالَ مُسْلِمٌ» (a Muslim said), tap the word carrying the Raf' ending.", sub:"قَالَ مُسْلِمٌ — A Muslim said.", words:["قَالَ","مُسْلِمٌ"], answer:1, explanation:"مُسْلِمٌ ends with the dammatayn Raf' ending because it's the doer of the saying."},
    {type:'mcq', prompt:"A word ending in kasra or kasratayn is in which status?", options:["Raf'","Nasb","Jarr","Sifah"], answer:2, explanation:"Kasra/kasratayn (i/in) is the recognition sign of Jarr."}
  ]
},
{
  id:'light_heavy_flex', title:"Light vs. Heavy & Flexibility",
  description:"Making an Ism light, and the three categories of flexibility — 8 questions",
  questions:[
    {type:'mcq', prompt:"By default, how should a normal Ism be treated?", options:["Light","Heavy","Neither light nor heavy","It depends on gender"], answer:1, explanation:"The workbook states: normally an Ism should be heavy."},
    {type:'mcq', prompt:"What makes an Ism 'light'?", options:["Adding a second tanwīn","Removing the extra 'n' sound — the tanwīn, or the extra ن","Adding اَلْـ to the front","Doubling the last letter"], answer:1, explanation:"An Ism is lightened by removing the double-accent tanwīn, or by removing the extra ن at the end."},
    {type:'mcq', prompt:"True or false: an Ism with اَلْـ attached is considered light.", options:["True — اَلْـ makes a word light","False — اَلْـ doesn't like tanwīn, but the word still isn't considered light","True, but only for feminine nouns","False — اَلْـ can never attach to a light word"], answer:1, explanation:"The workbook's note: 'اَلْـ doesn't like tanwīn, but an ism with اَلْـ isn't considered light.'"},
    {type:'mcq', prompt:"How many categories of flexibility are there?", options:["Two","Three","Four","Five"], answer:1, explanation:"Fully flexible, Non-flexible, and Partly flexible."},
    {type:'mcq', prompt:"A fully flexible Ism...", options:["Can only ever be heavy","Can be heavy or light, and can show all three statuses","Never shows Jarr","Only exists in the plural"], answer:1, explanation:"Most isms are fully flexible: they can be heavy or light and show raf', nasb, and jarr."},
    {type:'mcq', prompt:"Which of these marks a non-flexible Ism?", options:["It changes its ending in every status","It's a proper name of a place","It looks the same in all three statuses — e.g. words ending in alif like مُوْسَى","It must always carry tanwīn"], answer:2, explanation:"Non-flexible words have only one form and look identical no matter the status — e.g. alif-ending words and the ism mawsūl/pointer words."},
    {type:'mcq', prompt:"A partly flexible Ism...", options:["Can be heavy and can take a kasrah ending","Cannot be heavy and cannot take a kasrah ending — it has one form for Raf' and a shared form for Nasb & Jarr","Has three completely different forms, one per status","Is always a pronoun"], answer:1, explanation:"Partly flexible words can't be heavy or take a kasrah — Raf' gets one ending, Nasb and Jarr share another."},
    {type:'mcq', prompt:"Which of these is normally partly flexible?", options:["A 3-letter Arab place name like عَدَنْ","A common noun like كِتَاب","A non-Arab proper name like إِبْرَاهِيْم","An attached pronoun"], answer:2, explanation:"Non-Arab proper names are partly flexible — except when only 3 letters long, like نُوْح, which stays fully flexible."}
  ]
},
{
  id:'idhafah', title:"Idhāfah: The Possessive Construction",
  description:"Rules for Mudāf & Mudāf Ilayh, plus the Special Mudhafs — 8 questions",
  questions:[
    {type:'mcq', prompt:"In an Idhāfah, what status must the second word (Mudāf Ilayh) always be in?", options:["Raf'","Nasb","Jarr","Whatever status fits the sentence"], answer:2, explanation:"The Mudāf Ilayh is always Jarr, regardless of what role the whole phrase plays."},
    {type:'mcq', prompt:"Which of these can the Mudāf (the first word) NEVER carry?", options:["A damma ending","اَلْـ (al-) or tanwīn","A short vowel","A kasra ending"], answer:1, explanation:"The Mudāf must be light and can never carry اَلْـ."},
    {type:'mcq', prompt:"In «كِتَابُ الوَلَدِ» (the boy's book), what is كِتَابُ؟", options:["The Mudāf Ilayh","The Mudāf","The Sifah","The Harf Jarr"], answer:1, explanation:"كِتَابُ is the first word, with no اَلْـ — the Mudāf."},
    {type:'mcq', prompt:"Whose four properties (including 'type') get dictated by the Mudāf Ilayh?", options:["The Sifah's","The Mudāf's","The Fa'il's","The Harf's"], answer:1, explanation:"The Mudāf's last property, type, is dictated by whatever the Mudāf Ilayh is."},
    {type:'mcq', prompt:"Both the Mudāf and the Mudāf Ilayh must be...", options:["Verbs","Prepositions","Isms","Pronouns only"], answer:2, explanation:"Idhāfah is strictly an Ism + Ism construction."},
    {type:'mcq', prompt:"Special Mudhafs like تَحْتَ (below), فَوْقَ (above), and بَيْنَ (between) are, by default, in which status?", options:["Raf'","Nasb","Jarr","They have no fixed status"], answer:1, explanation:"These Special Mudhafs are Nasb by default."},
    {type:'mcq', prompt:"Which special Mudhaf can appear in Raf', Nasb, OR Jarr — unlike تَحْتَ and فَوْقَ؟", options:["قَبْلَ (before)","كُلّ (each/all/every)","خَلْفَ (behind)","مَعَ (with)"], answer:1, explanation:"كُلّ, بَعْض, غَيْر, and أَيّ are the special mudhafs that flex between all three statuses."},
    {type:'mcq', prompt:"«تَحْتَ الْأَرْضِ» means 'under the earth'. What kind of Idhāfah is this?", options:["'Of' translation","Pronoun attached to an Ism","A Special Mudhaf","Not an Idhāfah at all"], answer:2, explanation:"تَحْتَ is one of the Special Mudhafs — it usually doesn't carry an 'of' meaning."}
  ]
},
{
  id:'mowsoof_sifah', title:"Mowsoof + Sifah: Noun & Adjective",
  description:"Agreement rules between a described noun and its adjective — 7 questions",
  questions:[
    {type:'mcq', prompt:"How many of the Mowsoof's four properties must the Sifah match?", options:["One","Two","Three","All four"], answer:3, explanation:"The Sifah must match Status, Number, Gender, and Type — all four properties."},
    {type:'mcq', prompt:"Where must the Sifah appear relative to the Mowsoof?", options:["Before it","Fused directly onto it","After it","Anywhere in the sentence"], answer:2, explanation:"The Sifah always follows the Mowsoof."},
    {type:'mcq', prompt:"Can there be more than one Sifah describing a single Mowsoof?", options:["No, only ever one","Yes, there may be more than one","Only in the plural","Only if the Mowsoof is a pronoun"], answer:1, explanation:"The workbook explicitly notes the Sifah 'may be more than one.'"},
    {type:'mcq', prompt:"Which of these can NEVER function as a Mowsoof?", options:["A common noun","A pronoun, pointer word, or ism mowsool","A proper name","A light Ism"], answer:1, explanation:"The Mowsoof is never a pronoun, pointer word (ism ishārah), or relative pronoun (ism mowsool)."},
    {type:'mcq', prompt:"Which of these can NEVER function as a Sifah?", options:["An adjective ending in tanwīn","A proper name, pronoun, or pointer word","A word matching the Mowsoof's gender","A word after the Mowsoof"], answer:1, explanation:"The Sifah is never a proper name, pronoun, or pointer word."},
    {type:'mcq', prompt:"«نَارٌ حَامِيَةٌ» means 'an intensely hot fire'. What is حَامِيَةٌ doing here?", options:["It's the Mudāf Ilayh","It's the Sifah, describing نَارٌ (the Mowsoof)","It's a Harf Jarr","It's the Fa'il"], answer:1, explanation:"حَامِيَةٌ matches نَارٌ's status, number, gender, and type — a textbook Sifah."},
    {type:'mcq', prompt:"Why does a non-human plural noun (broken or not) take a feminine singular Sifah?", options:["Because plurals are always masculine","Because non-human plurals are grammatically treated as 'she'","It's a random exception with no rule","Only human plurals ever take adjectives"], answer:1, explanation:"The workbook's rule: ALL non-human plurals — broken or not — are treated as 'she' grammatically."}
  ]
},
{
  id:'huruf_jarr_nasb', title:"Ḥurūf al-Jarr & Ḥurūf al-Nasb",
  description:"Prepositions that cause Jarr, and particles that cause Nasb — 8 questions",
  questions:[
    {type:'mcq', prompt:"What does a Harf of Jarr do to the Ism that follows it?", options:["Makes it Raf'","Makes it Nasb","Makes it Jarr","Turns it into a Fi'l"], answer:2, explanation:"That's the defining job of a Harf of Jarr — it's called 'جَارّ' because it makes its Ism 'مَجْرُوْر.'"},
    {type:'mcq', prompt:"Which of these is a Harf of Jarr meaning 'from / because of'?", options:["إِلَى","مِنْ","عَلَى","إِنَّ"], answer:1, explanation:"مِنْ means 'from/because of' and makes its Ism majrūr."},
    {type:'mcq', prompt:"Which of these is a Harf of Jarr, NOT a Harf of Nasb?", options:["إِنَّ","أَنَّ","فِي","لَعَلَّ"], answer:2, explanation:"فِي ('in/about') is a preposition (Harf of Jarr); the other three are particles of Nasb."},
    {type:'mcq', prompt:"What does a Harf of Nasb do to its Ism?", options:["Makes it Jarr","Makes it Raf'","Makes it Nasb","Nothing — it only affects verbs"], answer:2, explanation:"A Harf of Nasb pushes its Ism into the Nasb status."},
    {type:'mcq', prompt:"Which Harf of Nasb means 'as though / as if'?", options:["إِنَّ","كَأَنَّ","لَيْتَ","لَكِنَّ"], answer:1, explanation:"كَأَنَّ means 'as though/as if' — used for comparison."},
    {type:'mcq', prompt:"Unlike Harf of Jarr, Harf of Nasb can...", options:["Never attach to a pronoun","Tolerate a long-distance relationship with its Ism","Only be used with plurals","Only appear at the start of a sentence"], answer:1, explanation:"The workbook lists this as a key difference: Harf of Nasb can tolerate a long-distance relationship; Harf of Jarr cannot."},
    {type:'mcq', prompt:"The nasb form of أَنَا when attached to a Harf of Nasb is...", options:["هُ","نِيْ / يْ","كَ","هَا"], answer:1, explanation:"أَنَا becomes نِيْ or يْ when attached — e.g. إِنِّي / إِنَّنِيْ."},
    {type:'tap', prompt:"Tap the Harf of Jarr in this phrase.", sub:"بِالْمُؤْمِنِيْنَ — with the believers", words:["بِ","الْمُؤْمِنِيْنَ"], answer:0, explanation:"بِ ('with/by/at') is the Harf of Jarr; الْمُؤْمِنِيْنَ is the Ism it makes majrūr."}
  ]
},
{
  id:'pronouns_pointers_jumlah', title:"Pronouns, Pointing Words & Jumlah Ismiyyah",
  description:"Attached vs. detached pronouns, ism ishārah, and finding the invisible 'is' — 8 questions",
  questions:[
    {type:'mcq', prompt:"An independent (detached) pronoun is always in which status?", options:["Nasb","Jarr","Raf'","It has no fixed status"], answer:2, explanation:"Independent pronouns like هُوَ, أَنْتَ, and أَنَا are always Raf'."},
    {type:'mcq', prompt:"An attached pronoun is Nasb in which two cases?", options:["Attached to an Ism, or attached to a Harf of Jarr","Attached to a Fi'l, or attached to a Harf of Nasb","Attached to a pointer word, or attached to a Sifah","It's always Nasb, with no exceptions"], answer:1, explanation:"Attached pronouns become the detail (Nasb) when fused onto a verb or a Harf of Nasb."},
    {type:'mcq', prompt:"An attached pronoun is Jarr in which two cases?", options:["Attached to a Fi'l, or attached to a Harf of Nasb","Attached to an Ism (Idhāfah), or attached to a Harf of Jarr","Attached to a Mowsoof, or attached to a Sifah","Never — attached pronouns can't be Jarr"], answer:1, explanation:"Attached pronouns become Jarr when fused onto an Ism (making an Idhāfah) or onto a Harf of Jarr."},
    {type:'mcq', prompt:"To make a fragment (not a full sentence) with a pointer word, the pointer must be followed immediately by...", options:["A pronoun","اَلْـ (al-)","A Harf of Jarr","Another pointer word"], answer:1, explanation:"Pointer + اَلْـ noun = fragment, e.g. هَذَا الْبَيْتُ ('this house'). Without اَلْـ, it forms a full sentence."},
    {type:'mcq', prompt:"«هَذَا بَيْتٌ» (this is a house) is a sentence, not a fragment. Why?", options:["Because هَذَا has اَلْـ after it","Because بَيْتٌ has no tanwīn","Because the pointer هَذَا is NOT immediately followed by اَلْـ","Because it starts with a Fi'l"], answer:2, explanation:"بَيْتٌ has no اَلْـ, so هَذَا + بَيْتٌ forms a complete Mubtada + Khabar sentence."},
    {type:'mcq', prompt:"Which of these signals an 'invisible IS' — i.e. a Jumlah Ismiyyah?", options:["An independent pronoun followed by another word","A Harf of Jarr followed by an Ism","Two Fi'ls in a row","A Sifah followed by its Mowsoof"], answer:0, explanation:"Independent pronouns, pointer words without اَلْـ, Harf of Nasb + Ism, proper-then-common, and a break in the chain are all signs of an invisible 'is'."},
    {type:'mcq', prompt:"«الرَّجُلُ فِي الدَّارِ» (the man is in the house) — why is 'is' invisible here?", options:["Because الرَّجُلُ is a Fi'l","Because there's a break in the expected chain — an Ism followed directly by a Harf-Jarr phrase implies 'is'","Because فِي is a pronoun","There is no invisible 'is' in this sentence"], answer:1, explanation:"This is the 'break in the chain' pattern from the workbook — الرَّجُلُ is the Mubtada, فِي الدَّارِ is the Khabar."},
    {type:'mcq', prompt:"Which pointer word means 'that' (far, feminine singular)?", options:["هَذِهِ","ذَلِكَ","تِلْكَ","هَؤُلَاءِ"], answer:2, explanation:"تِلْكَ is the far, feminine-singular pointer word — matching ذَلِكَ for masculine."}
  ]
},
{
  id:'verbs_past_present_commands', title:"Verbs: Past, Present & Commands",
  description:"Past-tense conjugation, present-tense letters, and building commands — 8 questions",
  questions:[
    {type:'mcq', prompt:"Every present-tense (mudāri') verb begins with one of four letters. Which set is correct?", options:["ب ت ث ن","أ ن ي ت","س ل ك م","ه و ي ا"], answer:1, explanation:"The mnemonic is نَأْتِي — every mudāri' verb starts with أ, ن, ي, or ت."},
    {type:'mcq', prompt:"To make a present-tense verb 'light' (mansūb), what happens if it ends in a damma?", options:["It changes to a kasra","It changes to a fatha","It's removed entirely","Nothing changes"], answer:1, explanation:"A trailing damma becomes a fatha when lightening a present-tense verb."},
    {type:'mcq', prompt:"To make a present-tense verb 'lightest' (majzūm), what happens if it ends in a damma?", options:["It changes to a fatha","It changes to a sukūn","It's doubled","It becomes a kasra"], answer:1, explanation:"For the lightest form, a trailing damma becomes a sukūn instead of a fatha."},
    {type:'mcq', prompt:"Which two present-tense forms NEVER change when made light or lightest?", options:["هُوَ and أَنَا","أَنْتُنَّ and هُنَّ","نَحْنُ and أَنْتَ","هِيَ and هُمْ"], answer:1, explanation:"The أَنْتُنَّ and هُنَّ forms already end in ن as part of the word itself, so they stay the same."},
    {type:'mcq', prompt:"Which Harf makes the present tense 'light' and means 'will not'?", options:["لَمْ","لَنْ","إِنْ","لِ"], answer:1, explanation:"لَنْ ('will not') is one of the light-causing harfs, alongside أَنْ, كَيْ, إِذَنْ, and حَتَّى."},
    {type:'mcq', prompt:"Which Harf makes the present tense 'lightest' and means 'did not' (pushing the meaning to the past)?", options:["لَنْ","كَيْ","لَمْ","حَتَّى"], answer:2, explanation:"لَمْ only attaches to the present tense, but pushes its meaning into the past — 'did not'."},
    {type:'mcq', prompt:"To forbid someone from doing something, what's the formula?", options:["لَا + normal present tense","لَا + lightest present tense (2nd person)","لَنْ + past tense","اِفْعَلْ + لَا"], answer:1, explanation:"Forbidding = لَا + the lightest 2nd-person present tense, e.g. لَا تَذْهَبْ ('don't go')."},
    {type:'mcq', prompt:"When building a command from the lightest 2nd-person present tense, what's the very next step after that?", options:["Add a helper alif no matter what","Remove the first ت","Change the last letter to damma","Add لَا to the front"], answer:1, explanation:"After starting from the lightest 2nd-person form, remove the first ت — then add a helper alif only if the remaining word can't be read on its own."}
  ]
}
];
