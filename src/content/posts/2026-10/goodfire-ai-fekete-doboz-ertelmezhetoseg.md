---
title: "Az AI fekete doboza talán átláthatóbb, mint hittük"
date: 2026-10-19
summary: "A Goodfire kutatási esszéje új vitát indított arról, mennyire érthetők a neurális hálók, és mitől válhat egy meggyőző magyarázat valódi bizonyítékká."
category: elemzesek
tags: ["AI", "kutatás", "modellek"]
draft: false
hidden: false
---

A nyelvi modellek belső működése sokszor akkor is rejtélyes, ha a kutatók hozzáférnek minden súlyhoz és aktivációhoz. Egy fejlesztő egy hagyományos programban végigkövetheti, melyik függvény és feltétel okozta a hibát. Egy neurális hálózatnál a számértékek még nem mondják meg, milyen információt ismert fel a modell, és miért hozta meg a döntését.

Nick Cammarata, a Goodfire kutatója október 15-én publikálta [Neural Networks Are Already Clean](https://already-clean.goodfire.com/) című esszéjét. A [Futurism](https://futurism.com/artificial-intelligence/explosive-document-ai-not-what-we-think) október 19-én az AI-ról alkotott képünket megkérdőjelező dokumentumként számolt be róla. A valódi kérdés azonban pontosabb: mennyire rendezett a neurális hálók belső reprezentációja, és hogyan lehet ezt bizonyítani?

## Mit állít a Goodfire?

Cammarata szerint sok olyan neuron, amely első pillantásra egymástól független fogalmakra reagál, valójában közös, egyszerűbb mintázatot ismerhet fel. Az InceptionV1 híres „macska–autó” neuronjának aktivitását például V-szerű, hegyes formákkal magyarázza; az ellenkező aktivációs pólust kerekebb formákhoz kapcsolja.

A Qwen3-32B előzetes elemzésében a neuronpólusok mintegy 90 százalékához tudtak egy fő funkciót rendelni. Ez nem azt jelenti, hogy a teljes nyelvi modell 90 százalékát megértették. Az eredmény az alkalmazott értelmezési kritériumoktól és az elemzés körétől függ.

Az esszé egyik érdekes módszere, hogy AI-ágensekkel keresnek lehetséges magyarázatokat, majd új példákon és beavatkozásokkal próbálják ellenőrizni azokat. A kutató elsősorban azt vitatja, hogy az egymástól független funkciók szükségszerűen kaotikusan keverednek egy-egy neuronban. Nem állítja, hogy mindenféle szuperpozíció lehetetlen.

## Mi az a szuperpozíció?

A [Toy Models of Superposition](https://transformer-circuits.pub/2022/toy_model/toy_model.pdf) 2022-es kutatásában a szerzők kis, mesterséges hálózatokon mutatták meg, hogy egy rendszer több jellemzőt is képes reprezentálni, mint ahány dimenziója van. Amikor a jellemzők ritkán aktívak egyszerre, részben átfedő reprezentációkba tömöríthetők. Ennek ára az interferencia: a jelek bizonyos helyzetekben zavarhatják egymást.

Fontos különbség van aközött, hogy egy neuronnak tudunk-e értelmes címkét adni, és aközött, hogy a teljes reprezentáció összes információját vissza tudjuk-e nyerni. Egy könnyen megnevezhető neuron még nem cáfolja, hogy a hálózat más részein sok jellemző osztozik ugyanazon dimenziókon.

Ez a vita a mechanisztikus értelmezhetőségről szól: arról, hogyan lehet a hálózat belső részeinek működését azonosítani, majd oksági kísérletekkel ellenőrizni.

## Miért használnak a kutatók külön „szótárakat”?

Az [Anthropic 2023-as Towards Monosemanticity](https://www.anthropic.com/research/towards-monosemanticity-decomposing-language-models-with-dictionary-learning) kutatásában egy kis nyelvi modell 512 neuronos rétegéből több mint négyezer értelmezhető jellemzőt bontottak ki. DNS-szekvenciákhoz, HTTP-kérésekhez és nyelvi mintázatokhoz kapcsolódó reprezentációkat is találtak.

Ennek egyik eszköze a [sparse autoencoder, vagy SAE](https://cdn.openai.com/papers/sparse-autoencoders.pdf). Egy másik neurális hálózat megtanulja az eredeti aktivációkat ritkán bekapcsoló összetevőkkel közelíteni. A kapott „szótár” könnyebben értelmezhető lehet, de a közelítés információt veszíthet.

Ezért a Goodfire megközelítése és a szótártanulás nem feltétlenül egymást kizáró utak. A kérdés az, melyik módszer ad pontosabb előrejelzést és megbízhatóbb beavatkozási lehetőséget.

## A Golden Gate-híd tanulsága

Az [Anthropic 2024-es kísérletében](https://www.anthropic.com/research/mapping-mind-language-model) a Claude 3 Sonnet egyik rétegéből több millió jellemzőt nyertek ki. Az egyik a Golden Gate-hídhoz kapcsolódott. Amikor a kutatók mesterségesen felerősítették, a modell olyan kérdésekre is a hídról kezdett beszélni, amelyeknek nem volt közük hozzá.

Ez fontosabb, mint pusztán egy beszédes címke: a belső reprezentáció módosítása ténylegesen megváltoztatta a kimenetet. De a kísérlet a finom szabályozás nehézségét is megmutatta. Egy jellemző felerősítése más válaszokat is elronthat. Az értelmezhetőségből csak akkor lesz használható hibajavítás, ha a mellékhatásokat is mérni tudjuk.

## Mit mondanak a kritikusok?

[Neel Nanda](https://www.lesswrong.com/posts/x4kvabkF2Jk8GLZp8/linkpost-neural-networks-are-already-clean) hasznosnak tartja a neuronokra épülő vizsgálatokat és az elemző ágensek használatát, de óvatos a széles következtetésekkel. A gyenge aktivációk is hordozhatnak információt, és a transzformerek rétegei között továbbított közös reprezentáció, a residual stream, több jellemzőt tárolhat, mint ahány dimenziója van.

[Leo Gao október 17-i válaszában](https://www.lesswrong.com/posts/Dkh7pXKjoNWkkxQDz/neural-networks-are-not-already-clean) azt hangsúlyozza, hogy néhány jól illeszkedő példa nem elég. Egy magyarázatnak új bemeneteken is előre kell jeleznie az aktivációt. Még szigorúbb teszt, ha a magyarázat alapján becsült aktivációkkal helyettesítjük az eredetieket, és megmérjük, mennyire változik a modell kimeneti valószínűség-eloszlása.

Ez lényegi módszertani vita. A kutatók nem feltétlenül abban nem értenek egyet, hogy léteznek-e értelmezhető neuronok, hanem abban, hogy a jó magyarázat mikor válik a működés megbízható modelljévé.

## Egy neurontól a teljes gondolatmenetig

Az [Anthropic 2025-ös On the Biology of a Large Language Model](https://transformer-circuits.pub/2025/attribution-graphs/biology.html) kutatása már összekapcsolódó belső mechanizmusokat próbált feltárni. Egy példában a Claude 3.5 Haiku a Dallas → Texas → Austin összefüggésen keresztül válaszolt egy állami fővárosra vonatkozó kérdésre. A kutatók a köztes reprezentációba is beavatkoztak.

Ez a circuit tracing: a kutató a belső számítási lépések kapcsolatát próbálja feltérképezni, nem csupán egy-egy aktivációt elnevezni. A vizsgálat korlátja, hogy csak bizonyos feladatoknál adott kielégítő magyarázatot. Egy chatbot saját, szöveges indoklása ráadásul nem feltétlenül azonos a tényleges belső mechanizmussal.

A különböző vizsgálati szintek más-más kérdésre válaszolnak:

| Szint | Kérdés |
| --- | --- |
| Neuron vagy jellemző | Milyen mintázatra reagál? |
| Belső mechanizmus | Hogyan járul hozzá a válaszhoz? |
| Új feladatok | A magyarázat ismeretlen bemeneteken is működik? |
| Teljes alkalmazás | Hogyan hatnak a modell döntéseire az eszközök és jogosultságok? |

## Miért lehet mindez fontos a gyakorlatban?

Képzeljünk el egy kódoló AI-ágenset, amely félreért egy hibajegyet, és törölni akar egy szükséges ellenőrzést. Egy fejlett belső vizsgálat elvileg segíthetne megkülönböztetni, hogy rosszul értette-e a feladatot, hibás összefüggést használt, vagy egyszerűen a rövidebb megoldást részesítette előnyben. Ilyen általános, megbízható hibakereső eszközt azonban a Goodfire esszéje még nem mutatott be.

A siker mércéje az lenne, hogy az értelmezés előre jelzi-e a hibát új helyzetekben, segít-e célzottan kijavítani, és bizonyíthatóan nem ront-e el közben más képességeket. Ugyanezt független kutatócsoportoknak is reprodukálniuk kellene.

A biztonság szempontjából a belső működés megértése hasznos, de önmagában nem elegendő. Egy AI-rendszer teljesen érthető módon is követhet rosszul megadott célt. A hozzáférés-szabályozás, a jogosultságok és az alkalmazás körüli védelmek továbbra is szükségesek.

A Goodfire legfontosabb hozzájárulása így egy kutatási irány újrafogalmazása lehet: talán több szerkezetet találhatunk közvetlenül a neuronokban, mint korábban feltételeztük. Hogy ez a nagy modellek megbízható megértéséhez vezet-e, azt az új adatokon ellenőrizhető előrejelzések és az ismételhető beavatkozások döntik el, nem a meggyőző címkék.

*A cikk az eredeti kutatási közlésekre és a kutatók nyilvános reakcióira épül. A kísérleteket nem reprodukáltuk; a gyakorlati felhasználási példák szerkesztői elemzések. A forrásokat 2026. október 19-én ellenőriztük.*
