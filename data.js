// Darb — curriculum built directly from the uploaded "Nahw 10-Day Workbook" PDF.
// Each day maps to that book's own sections/order, and every exercise is grounded
// in a definition, rule, or worked example that appears explicitly in the PDF
// (not in the ambiguous fill-in-the-blank worksheets, which have no answer key).
//
// Each unit also carries a `ur` object with a Roman Urdu translation of every
// English UI string (title, teach, and each exercise's prompt/options/
// explanation/sub). Arabic quoted terms, `words` (for tap exercises), `answer`
// indices, `arTitle`, `id`, and `day` are language-independent and are not
// duplicated inside `ur`.

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
  ],
  ur:{
    title:"Alfaz Ki Teen Qismein",
    teach:"Arabic mein alfaz ki teen qismein hoti hain. Ism: kisi shaks, jagah, cheez, khayal, sifat, zarf — aur bohat kuch ka naam. Fi'l: aisa lafz jiska zamana ho — mazi, haal, ya mustaqbil. Harf: aisa lafz jo tab tak kuch matlab nahi rakhta jab tak koi aur lafz uske baad na aaye.",
    exercises:[
      {prompt:"\"Mez\" kis qisam ka lafz hai?", options:["Ism (naam)","Fi'l (fe'l)","Harf","In mein se koi nahi"], explanation:"\"Mez\" kisi cheez ka naam hai — is liye yeh Ism hai."},
      {prompt:"\"Kudta hai\" kis qisam ka lafz hai?", options:["Ism (naam)","Fi'l (fe'l)","Harf","In mein se koi nahi"], explanation:"\"Kudta hai\" ek zamana (haal) rakhta hai — yeh amal ka lafz hai, Fi'l."},
      {prompt:"\"Mein\" kis qisam ka lafz hai?", options:["Ism (naam)","Fi'l (fe'l)","Harf","In mein se koi nahi"], explanation:"\"Mein\" akela koi matlab nahi rakhta jab tak koi aur lafz uske sath na ho — yehi Harf ki nishani hai."},
      {prompt:"\"Makkah\" kis qisam ka lafz hai?", options:["Ism (naam)","Fi'l (fe'l)","Harf","In mein se koi nahi"], explanation:"Makkah ek jagah ka naam hai — Ism (khaas ism, lekin phir bhi Ism)."},
      {prompt:"\"Soya\" kis qisam ka lafz hai?", options:["Ism (naam)","Fi'l (fe'l)","Harf","In mein se koi nahi"], explanation:"\"Soya\" guzashta zamana (mazi) zahir karta hai — Fi'l."}
    ]
  }
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
  ],
  ur:{
    title:"I'rab Ki Teen Halatein",
    teach:"Har ism teen halaton (status) mein se ek rakhta hai. Raf' — fa'il, amal karne wala. Nasb — maf'ul, amal ki tafseel. Jarr — woh lafz jo \"ka/ki/ke\" (of) ke foran baad aaye. Misal: \"Ustad classroom mein dakhil hua\" — ustad Raf' hai, classroom Nasb hai. \"Uska shagird gehri neend so raha tha\" — shagird Raf' hai, uska Jarr hai, gehri Nasb hai.",
    exercises:[
      {prompt:"\"Ek ustad classroom mein dakhil hua\" mein, kaunsa lafz Raf' hai — amal karne wala?", options:["ustad","dakhil hua","classroom","ek"], explanation:"Ustad hi dakhil hone wala hai — Raf'."},
      {prompt:"\"Ustad ne pencil phenki\" mein, \"pencil\" ki halat kya hai?", options:["Raf'","Nasb","Jarr"], explanation:"\"Pencil\" amal ki tafseel hai — jo phenka gaya — is liye yeh Nasb hai."},
      {prompt:"\"Uska shagird gehri neend so raha tha\" mein, \"uska\" ki halat kya hai?", options:["Raf'","Nasb","Jarr"], explanation:"\"Uska\" malkiyat zahir karta hai, jaise \"ka/ki/ke\" — yehi Jarr ki nishani hai."},
      {prompt:"\"Ustad ke shagird achanak jaag gaya\" mein, \"shagird\" (jagne wala) ki halat kya hai?", options:["Raf'","Nasb","Jarr"], explanation:"\"Shagird\" jagne ka amal karne wala hai — Raf'."},
      {prompt:"Kaunsi halat us lafz ko milti hai jo \"of\" ke foran baad aata hai?", options:["Raf'","Nasb","Jarr"], explanation:"Jarr woh halat hai jo \"of\" ke baad wale lafz ko milti hai — jaise Mudaf Ilayh."}
    ]
  }
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
  ],
  ur:{
    title:"I'rab Pehchanne Ka Tareeqa",
    teach:"Har halat ki apni khaas awaaz hoti hai. Raf': damma (ـُ / ـٌ) wahid ism par. Nasb: fatha (ـَ / ـً) wahid ism par. Jarr: kasra (ـِ / ـٍ) wahid ism par. Dekhein مُسْلِمٌ (ek Musalman) kaise badalta hai: مُسْلِمٌ Raf' hai, مُسْلِمًا Nasb hai, مُسْلِمٍ Jarr hai — wahi lafz, teen mukhtalif awazain, teen mukhtalif kaam.",
    exercises:[
      {prompt:"Wahid ism par Raf' ki nishani kaunsi awaaz hai?", options:["Damma (ـُ)","Fatha (ـَ)","Kasra (ـِ)","Sukun"], explanation:"Damma Raf' ki nishani hai — amal karne wale ke liye asal nishani."},
      {prompt:"Wahid ism par Nasb ki nishani kaunsi awaaz hai?", options:["Damma (ـُ)","Fatha (ـَ)","Kasra (ـِ)","Sukun"], explanation:"Fatha Nasb ki nishani hai — amal ki tafseel/maf'ul ke liye."},
      {prompt:"Wahid ism par Jarr ki nishani kaunsi awaaz hai?", options:["Damma (ـُ)","Fatha (ـَ)","Kasra (ـِ)","Sukun"], explanation:"Kasra Jarr ki nishani hai — \"of\" ya harf-e-jarr ke baad."},
      {prompt:"«مُسْلِمٌ» (ek Musalman, Raf') Nasb mein kya banega?", options:["مُسْلِمٌ","مُسْلِمًا","مُسْلِمٍ","مُسْلِمُونَ"], explanation:"Damma ko fatha se badlein: مُسْلِمًا Nasb ki shakal hai."},
      {prompt:"Woh lafz tap karein jo Jarr halat mein hai.", sub:"مُسْلِمٌ (Raf') — مُسْلِمًا (Nasb) — مُسْلِمٍ (Jarr)", explanation:"مُسْلِمٍ kasra rakhta hai — Jarr ki nishani."}
    ]
  }
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
  ],
  ur:{
    title:"Halka Aur Bhaari",
    teach:"Aam tor par ek ism \"bhaari\" (heavy) hona chahiye. Ism ko \"halka\" (light) banane ke liye extra \"n\" ki awaaz hataayein — ya to tanween (double accent) gira kar, ya aakhri extra نْ hata kar. Yaad rahe: اَلْـ tanween nahi leta, lekin اَلْـ wala ism phir bhi halka nahi mana jata.",
    exercises:[
      {prompt:"Ism ko \"halka\" kya banata hai?", options:["Extra 'n' ki awaaz hatana (tanween ya extra نْ)","Tanween lagana","اَلْـ lagana","Jama banana"], explanation:"Halka = extra 'n' ki awaaz khatam, chahe woh tanween ho ya aakhri نْ."},
      {prompt:"Kya اَلْـ wala ism \"halka\" shumar hota hai?", options:["Haan, اَلْـ ise halka banata hai","Nahin — اَلْـ sirf tanween rokta hai, yeh halka hone se alag hai","Sirf Jarr mein","Sirf Raf' mein"], explanation:"اَلْـ tanween rok deta hai, lekin isse ism halka nahi banta — yeh do alag qawaid hain."},
      {prompt:"«مُسْلِمٌ» bhaari hai (Raf', tanween ke sath). Iski halki shakal kya hai?", options:["مُسْلِمُ","مُسْلِمٌ","مُسْلِمًا","مُسْلِمِينَ"], explanation:"Tanween ki extra 'n' awaaz hataayein: مُسْلِمُ halki Raf' shakal hai."},
      {prompt:"«مُسْلِمًا» bhaari hai (Nasb). Iski halki shakal kya hai?", options:["مُسْلِمَ","مُسْلِمَا","مُسْلِمٍ","مُسْلِمُونَ"], explanation:"Tanween hataayein: مُسْلِمَا halki Nasb shakal hai."},
      {prompt:"In mein se kya seedha ism ko halka banata hai?", options:["Tanween girana","Extra نْ lagana","Tanween lagana","Harf double karna"], explanation:"Tanween girane se extra 'n' ki awaaz khatam hoti hai — yehi ism ko halka banata hai."}
    ]
  }
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
  ],
  ur:{
    title:"Tasreef (Flexibility)",
    teach:"Isma teen tasreef ki qismon mein aate hain. Fully flexible: bhaari ya halka ho sakta hai, aur teenon halaton (Raf', Nasb, Jarr) mein aa sakta hai — zyada tar isma aise hi hote hain. Non-flexible: sirf ek shakal, har halat mein wahi rehta hai (alif par khatam hone wale lafz jaise مُوسَى, aur ism mawsul jaise الَّذِي). Partly flexible: kabhi bhaari nahi ho sakta aur kasra nahi le sakta — Raf' ke liye ek shakal, aur Nasb-Jarr ke liye dusri saanjhi shakal (aksar ghair-Arabi ya lambe khaas naamon mein).",
    exercises:[
      {prompt:"Woh lafz jo bhaari ya halka ho sakta hai, aur Raf', Nasb, Jarr teenon dikha sakta hai, woh hai...", options:["Fully flexible","Non-flexible","Partly flexible","Ism nahi hai"], explanation:"Yehi fully flexible ki tareef hai — zyada tar isma is qism ke hote hain."},
      {prompt:"In mein se kaunsi nishani batati hai ke lafz non-flexible hai?", options:["Alif par khatam hota hai, jaise مُوسَى","Tanween rakhta hai","اَلْـ leta hai","Fi'l hai"], explanation:"Alif par khatam hone wale lafz (jaise مُوسَى) non-flexible hote hain — har halat mein ek jaisi shakal."},
      {prompt:"Partly flexible lafz...", options:["Kabhi bhaari nahi ho sakta aur kasra nahi le sakta","Hamesha bhaari hota hai","Sirf Raf' mein aata hai","Hamesha Fi'l hota hai"], explanation:"Partly flexible lafz mehdood hota hai — na bhaari shakal, na kasra."},
      {prompt:"«بَاكِسْتَانُ» (ghair-Arabi jagah ka naam, 3 harfon se zyada) kya hai?", options:["Fully flexible","Non-flexible","Partly flexible","Ism nahi hai"], explanation:"3 harfon se lambe ghair-Arabi jagah ke naam partly flexible hote hain."},
      {prompt:"«عَدَنٌ» (Aden — sirf 3 harfon ka naam) ek istisna hai, aur yeh hai...", options:["Fully flexible","Non-flexible","Partly flexible","Ism nahi hai"], explanation:"3-harf istisna isko wapas fully flexible bana deta hai."}
    ]
  }
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
  ],
  ur:{
    title:"Adad Aur Jins",
    teach:"Ism wahid, do (مُثَنَّى), ya jama (جَمْع) ho sakta hai. جَمْع تَكْسِير (tuta hua jama) aam jama ki awazain nahi leta — yaad karna padta hai. Insaano ka tuta jama (jaise رُسُلٌ, rasool) \"woh\" (she) ya \"woh log\" (they) ki tarah bartaa jata hai; ghair-insaan tuta jama (jaise كُتُبٌ, kitaabein) hamesha \"woh\" (she) ki tarah bartaa jata hai. Jins: ism aam tor par muzakkar (masculine) hota hai. Yeh muannas (feminine) hota hai agar woh haqeeqatan muannas ho (jaise بَقَرَةٌ, gaay), ya \"jhoothi muannas\" — ghair-insaan jama, jagah ke khaas naam, jism ke jode wale hisse, aur kuch aise lafz jinhe Arab sirf muannas maante hain.",
    exercises:[
      {prompt:"«رُسُلٌ» (rasool) insaano ka tuta jama hai. Yeh kaise bartaa jata hai?", options:["'Woh' (he) ki tarah","'Woh' (she) ya 'woh log' (they) ki tarah","Ek Fi'l ki tarah","Iski koi jins nahi"], explanation:"Insaano ke tuta jama ko 'she' ya jo woh haqeeqatan hain 'they' ki tarah bartaa jata hai."},
      {prompt:"«كُتُبٌ» (kitaabein) ghair-insaan tuta jama hai. Yeh hamesha kaise bartaa jata hai?", options:["'Woh' (he) ki tarah","'Woh' (she) ki tarah","'Woh log' (they) ki tarah","Iski koi jins nahi"], explanation:"TAMAM ghair-insaan jama — tuta ho ya na ho — hamesha 'she' ki tarah bartaa jata hai."},
      {prompt:"«بَقَرَةٌ» (gaay) muannas kyun hai?", options:["Yeh haqeeqi muannas hai — ek asal maada","Yeh jhoothi muannas hai","Yeh tuta jama hai","Yeh اَلْـ par khatam hota hai"], explanation:"بَقَرَةٌ ek asal maada ka naam hai — haqeeqi muannas, sabse asaan misal."},
      {prompt:"In mein se kaunsi \"jhoothi muannas\" ki qisam hai?", options:["Ghair-insaan tuta jama","Haqeeqi maada isma","Muzakkar jama","Mutassil zameer"], explanation:"Ghair-insaan tuta jama sarfi tor par muannas hota hai, halankay usme kuch bhi haqeeqatan maada nahi hota — yehi 'jhoothi muannas' hai."},
      {prompt:"Agar kuch aur nishani na ho, to ism ki asal jins kya hoti hai?", options:["Muannas","Muzakkar","Dono nahi","Dono"], explanation:"Muzakkar asal (default) hai — muannas hone ke liye kisi na kisi tarah ka ishara chahiye."}
    ]
  }
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
  ],
  ur:{
    title:"Nakira, Ma'rifa Aur Zamair",
    teach:"Nakira (common) ism asal (default) hai. Ism kai tareeqon se ma'rifa (proper/definite) banta hai: agar woh اَلْـ le, khaas naam ho, jise pukaara ja raha ho (يَا...), zameer ho, ishara wala lafz ho jaise هَذَا, ya ism mawsul ho jaise الَّذِي. Mustaqil zamair akele khade hote hain — هُوَ (woh, mard), هِيَ (woh, aurat), أَنْتَ (tum), أَنَا (main), نَحْنُ (hum) — jabke mutassil zamair kisi aur lafz se jud jate hain, jaise كِتَابُهُ (uski kitaab) mein ـهُ.",
    exercises:[
      {prompt:"In mein se kaunsa tareeqa ism ko ma'rifa banata hai?", options:["Woh اَلْـ leta hai","Woh jama hai","Woh halka hai","Woh Harf hai"], explanation:"اَلْـ lena ism ko ma'rifa (definite) banane ki ek asal nishani hai."},
      {prompt:"«هُوَ» ka matlab kya hai?", options:["Main","Hum","Woh (mard)","Tum"], explanation:"هُوَ mustaqil zameer hai \"woh (mard)\" ke liye."},
      {prompt:"«أَنَا» ka matlab kya hai?", options:["Woh (mard)","Main","Woh log","Tum"], explanation:"أَنَا mustaqil zameer hai \"main\" ke liye."},
      {prompt:"«كِتَابُهُ» (uski kitaab) mein, ـهُ kya hai?", options:["Mustaqil zameer","Mutassil zameer jo ism se jura hua hai","Harf-e-jarr","Fi'l"], explanation:"ـهُ seedha كِتَاب se jura hua hai — yeh mutassil zameer hai."},
      {prompt:"«نَحْنُ» ka matlab kya hai?", options:["Main","Woh (mard)","Hum","Tum (jama)"], explanation:"نَحْنُ mustaqil zameer hai \"hum\" ke liye."}
    ]
  }
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
  ],
  ur:{
    title:"Idhafa Aur Mausoof-Sifat",
    teach:"Idhafa do isma ko \"X ki Y\" ki tarah jorta hai: pehla lafz (مُضَاف) halka hona chahiye aur اَلْـ nahi le sakta; doosra lafz (مُضَاف إِلَيْهِ) Jarr halat mein hona chahiye. Misal: إِمَامُ الْمَسْجِدِ — \"masjid ka imam\". Mausoof (jis ism ki sifat batayi ja rahi ho) ke baad uski Sifah (sifat) aati hai, jo mausoof se uski 4 khasiyaton mein match karti hai — halat, adad, jins, aur qisam. Misal: قَوْلًا ثَقِيلًا — \"ek bhaari baat\" — ثَقِيلًا bilkul قَوْلًا ke mutabiq hai.",
    exercises:[
      {prompt:"Idhafa mein, pehla lafz (مُضَاف) kaisa hona chahiye?", options:["Halka, bina اَلْـ ke","Bhaari, اَلْـ ke sath","Nasb mein","Fi'l"], explanation:"مُضَاف hamesha halka hota hai aur kabhi apna اَلْـ nahi leta."},
      {prompt:"Idhafa mein, doosra lafz (مُضَاف إِلَيْهِ) kaunsi halat mein hona chahiye?", options:["Raf'","Nasb","Jarr","Koi bhi halat"], explanation:"مُضَاف إِلَيْهِ hamesha Jarr hota hai — yehi is tarkeeb ka bunyadi usool hai."},
      {prompt:"«إِمَامُ الْمَسْجِدِ» ka matlab kya hai?", options:["Masjid ka imam","Masjid ki kitaab","Ek bhaari imam","Imam ne namaz padhi"], explanation:"Seedha Idhafa: 'masjid ka imam'."},
      {prompt:"Sifah (sifat) apne Mausoof (jis ism ki tarif ho rahi hai) se kis cheez mein match karti hai?", options:["Sirf matlab mein","Apni 4 khasiyaton mein: halat, adad, jins, aur qisam","Sirf halat mein","Kisi cheez mein nahi — yeh alag hai"], explanation:"Sifah apne Mausoof se chaaron khasiyaton mein match karti hai."},
      {prompt:"«قَوْلًا ثَقِيلًا» ka matlab kya hai?", options:["Ek halki baat","Ek bhaari baat","Ek khoobsurat baat","Ek chhoti baat"], explanation:"ثَقِيلًا ka matlab hai 'bhaari' — قَوْلًا, 'ek baat' ki sifat."}
    ]
  }
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
  ],
  ur:{
    title:"Huroof-e-Jarr, Huroof-e-Nasb Aur Ishare Wale Alfaz",
    teach:"Harf-e-Jarr apne ism ko Jarr bana deta hai — misalein: بِ (ke saath), لِ (ke liye), مِنْ (se), فِي (mein), عَلَى (par), إِلَى (ki taraf). Harf-e-Nasb apne ism ko Nasb bana deta hai — misalein: إِنَّ (yaqeenan), أَنَّ (ke), لٰكِنَّ (lekin), لَعَلَّ (shayad). Ishare wale alfaz (اِسْمُ الْإِشَارَة) qareeb ya door dikhate hain — هَذَا (yeh, mard) aur ذَلِكَ (woh, mard) sab se aam hain. Agar ishare wale lafz ke foran baad اَلْـ aaye to yeh ek tukda (fragment) banta hai (هَذَا الْبَيْتُ, \"yeh ghar\"); agar foran baad اَلْـ na aaye to yeh poora jumla banta hai (هَذَا بَيْتٌ, \"yeh ek ghar hai\").",
    exercises:[
      {prompt:"«بِ» (ek Harf-e-Jarr) ka mota-moti matlab kya hai?", options:["ke saath / se / par","usne likha","ghar","aur"], explanation:"بِ ka matlab hai 'ke saath, se, par' — ek aam Harf-e-Jarr."},
      {prompt:"«إِنَّ» (ek Harf-e-Nasb) ka matlab kya hai?", options:["yaqeenan / zaroor","nahi karega","ke baad","ke upar"], explanation:"إِنَّ yaqeen zaahir karta hai — 'yaqeenan' ya 'zaroor'."},
      {prompt:"«هَذَا» ke foran baad اَلْـ aaye (jaise هَذَا الْبَيْتُ) to yeh kya banta hai?", options:["Jumla","Tukda (fragment)","Sawal","Harf"], explanation:"Ishare wala lafz + foran اَلْـ = ek tukda, jaise 'yeh ghar' — poora jumla nahi."},
      {prompt:"«هَذَا بَيْتٌ» (yeh ek ghar hai) — chunke اَلْـ foran baad nahi aata, yeh kya hai?", options:["Tukda","Jumla","Dono nahi"], explanation:"Ishare wale lafz ke foran baad اَلْـ na ho to yeh poora jumla ban jata hai."},
      {prompt:"Harf-e-Jarr apne baad wale ism ko kaunsi halat deta hai?", options:["Raf'","Nasb","Jarr","Yeh Fi'l reh jata hai"], explanation:"Yehi Harf-e-Jarr ka poora kaam hai — apne ism ko Jarr banana."}
    ]
  }
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
  ],
  ur:{
    title:"Jumle, Zamana Aur Mana Karna",
    teach:"Jumla Ismiyyah (ismi jumla) ko ek pinhaan \"HAI\" chahiye — yeh mustaqil zameer ke baad milta hai (أَنَا مُسْلِمٌ, \"main Musalman hoon\"), ishare wale lafz ke baad jab اَلْـ foran na ho, ya Harf-e-Nasb aur uske ism ke baad. نَصَرَ (\"usne madad ki\") Fi'l Madi hai, mazi ka sigha. يَنْصُرُ (\"woh madad karta hai\") Fi'l Mudari' hai, haal ka sigha. Mana karne ke liye, لَا ko sab se halke haal ke doosre shakhs se pehle lagayein: تَذْهَبُ (\"tum jate ho\") لَا تَذْهَبْ (\"mat jao!\") ban jata hai.",
    exercises:[
      {prompt:"«أَنَا مُسْلِمٌ» ka matlab kya hai?", options:["Main Musalman hoon","Woh Musalman hai","Hum Musalman hain","Tum Musalman ho"], explanation:"أَنَا (main) + مُسْلِمٌ (ek Musalman), darmiyan mein ek pinhaan \"hai\"."},
      {prompt:"«نَصَرَ» (usne madad ki) kaunse zamane mein hai?", options:["Mazi (Madi)","Haal (Mudari')","Hukum (command)","Koi nahi"], explanation:"نَصَرَ Fi'l Madi ki shakal hai — mazi (guzashta zamana)."},
      {prompt:"«يَنْصُرُ» (woh madad karta hai) kaunse zamane mein hai?", options:["Mazi (Madi)","Haal (Mudari')","Hukum (command)","Koi nahi"], explanation:"يَنْصُرُ Fi'l Mudari' ki shakal hai — haal (mojooda zamana)."},
      {prompt:"Kisi ko jaane se mana karne ke liye, «تَذْهَبُ» (tum jate ho) kya banta hai?", options:["لَا تَذْهَبْ","تَذْهَبُ","اِذْهَبْ","لَنْ تَذْهَبَ"], explanation:"لَا + sab se halka haal doosra shakhs = \"mat jao!\""},
      {prompt:"Is jumle mein Fi'l tap karein.", sub:"نَصَرَ الرَّجُلُ — Aadmi ne madad ki.", explanation:"نَصَرَ amal ka lafz hai — Fi'l; الرَّجُلُ (aadmi) woh hai jisne yeh kiya."}
    ]
  }
}
];

const ACHIEVEMENTS = [
  {id:'first_lesson', title:"First Steps", body:"Complete your first lesson", icon:'star', ur:{title:"Pehla Qadam", body:"Apna pehla sabaq mukammal karein"}},
  {id:'streak3', title:"Three-Day Flame", body:"Reach a 3-day streak", icon:'flame', ur:{title:"Teen Din Ka Shola", body:"3 din ka streak hasil karein"}},
  {id:'streak7', title:"Week of 'Ilm", body:"Reach a 7-day streak", icon:'flame', ur:{title:"Ek Hafta Ilm", body:"7 din ka streak hasil karein"}},
  {id:'streak14', title:"Two-Week Devotion", body:"Reach a 14-day streak", icon:'flame', ur:{title:"Do Hafton Ki Lagan", body:"14 din ka streak hasil karein"}},
  {id:'perfect', title:"Flawless", body:"Finish a lesson with no mistakes", icon:'gem', ur:{title:"Be-aib", body:"Bina ghalti ke sabaq mukammal karein"}},
  {id:'triple_flawless', title:"Triple Flawless", body:"Finish 3 lessons in a row with no mistakes", icon:'gem', ur:{title:"Teharra Be-aib", body:"Lagataar 3 sabaq bina ghalti ke mukammal karein"}},
  {id:'century', title:"Century Scholar", body:"Earn 100 XP", icon:'bolt', ur:{title:"Sau Ka Aalim", body:"100 XP hasil karein"}},
  {id:'quarter', title:"Quarter Moon", body:"Complete 3 days", icon:'compass', ur:{title:"Chauthai Chand", body:"3 din mukammal karein"}},
  {id:'halfway', title:"Halfway There", body:"Complete Day 5", icon:'compass', ur:{title:"Aadha Safar", body:"Din 5 mukammal karein"}},
  {id:'finisher', title:"Nahw Master", body:"Complete all 10 days", icon:'crown', ur:{title:"Nahw Ka Ustad", body:"Sare 10 din mukammal karein"}},
  {id:'polyglot', title:"Language Explorer", body:"Switch the app's language", icon:'book', ur:{title:"Zaban Ka Musafir", body:"App ki zaban badlein"}}
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
