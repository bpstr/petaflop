---
title: "Gemini 4 Argon: egymillió tokenes kimenettel jön a Google új csúcsmodellje"
date: 2026-10-01
summary: "A Gemini 4 Argont hosszú, összetett munkafolyamatokra tervezték: akár egymillió tokenes kimenetet támogat, kódmigrációkon és kiberbiztonsági feladatokon dolgozik, de egyelőre csak korlátozott kör kap hozzáférést."
category: kiadasok
tags: ["AI", "Google", "Gemini", "ügynökök"]
draft: false
hidden: false
---

A Google szeptember 30-án bemutatta a **Gemini 4 Argont**, új frontier modelljét, amelyet nem elsősorban rövid kérdés-válaszokra, hanem hosszú, több lépésből álló munkák végrehajtására pozicionál. A legszembetűnőbb technikai változás az **akár egymillió tokenes kimeneti limit**: a Google szerint az előző 64 ezres határ helyett a modell így egyetlen futásban több százezer tokenen át dolgozhat egy problémán.

Ez fontos különbség a megszokott „nagy kontextusablak” versenyhez képest. Itt nem csak arról van szó, mennyi bemenetet képes a modell egyszerre látni, hanem arról is, milyen hosszú saját munkafolyamatot tud végigvinni megszakítás nélkül. Ez különösen érdekes lehet nagy kódbázisok átalakításánál, kutatásnál vagy olyan ügynököknél, amelyek sok egymásra épülő lépést hajtanak végre.

## A Google már nagy kódbázisokon használja

A vállalat szerint Argon már belső munkafolyamatokban is dolgozik. A bemutatott példák között C és C++ kódbázisok Rustra migrálása szerepel, a néhány tízezer soros könyvtáraktól egészen a Fuchsia Zircon kernel több mint 800 ezer soros kódbázisáig.

A libgav1 videodekódernél a Google állítása szerint Argon-ügynökök 32 ezer sornyi SIMD-kódot cseréltek le, profilvezérelt kísérletekkel és a fordító kimenetének elemzésével. Az így készült Rust változat a cég mérése szerint 2,7-szer gyorsabb lett a korábbi Rust portnál, azonos videokimenet mellett. Ezek **Google által közölt belső eredmények**, nem független reprodukciók.

A vállalat egy másik példában azt állítja, hogy Argon-ügynökök adatközponti profilozási adatok elemzésével több mint 300 TiB memória felszabadításához vezettek, és a teljes várható megtakarítás 500 TiB–1 PiB lehet.

## Erős benchmarkok, de érdemes különválasztani őket a valós használattól

A Google közlése szerint Argon 77,9%-ot ért el a hosszú szoftverfejlesztési feladatokat mérő DeepSWE v1.1-en. Az AutomationBench teszten 51,3%-os eredményt, az LVBench hosszúvideó-értési benchmarkon pedig 91,7%-ot közöltek.

Ezek az eredmények arra utalnak, hogy a Google kifejezetten a hosszú ideig futó, eszközöket és több lépést használó munkákra optimalizálta a modellt. A benchmarkok azonban eltérő feladatokat és környezeteket mérnek, ezért önmagukban nem mondják meg, hogyan viszonyul majd Argon más modellekhez egy konkrét fejlesztői vagy vállalati munkafolyamatban.

## A kiberbiztonság miatt óvatos a rajt

Argon egyik kiemelt területe a védekező kiberbiztonság. A Google szerint a modell képes sérülékenységeket önállóan megtalálni, ellenőrizni és javítani. A CWE-bench v1 teszten 68%-os eredményt közöltek.

Éppen ezek a képességek magyarázzák a szokatlanul korlátozott indulást. Argon egyelőre a Google **Fairwind Programján** keresztül kiválasztott, megbízható kiberbiztonsági szakemberekhez kerül. A Google közben az amerikai kormány önkéntes, megjelenés előtti modellhozzáférési folyamatában is részt vesz, és további biztonsági teszteket végez.

A szélesebb megjelenés később várható: a Google fejlesztőknek, vállalatoknak és fogyasztóknak is elérhetővé akarja tenni, első körben fizetős API-ügyfeleknek és Google AI Ultra előfizetőknek.

## Az induló API-ár agresszív

A Google már az árazást is közölte. A bevezető időszakban **1 millió input token 2 dollár, 1 millió output token 10 dollár**, a gyorsítótárazott input pedig az inputárhoz képest 95%-os kedvezményt kap. A promóciós időszak után a tervezett listaár 4 dollár/millió input és 20 dollár/millió output token.

A Gemini 4 Argon ezért nem egyszerűen egy újabb nagyobb modellnek tűnik. A fontosabb kísérlet az, hogy meddig lehet kitolni egyetlen modellfutás hasznos munkahosszát. Ha az egymillió tokenes kimenet a gyakorlatban is megbízhatóan használható, az a fejlesztői ügynökök felépítésére is hatással lehet: kevesebb megszakított menet, kevesebb kézi újraindítás és hosszabb, összefüggő feladatvégrehajtás válhat lehetővé. Hogy ebből mennyi teljesül valós környezetben, azt viszont csak a szélesebb hozzáférés után lehet majd érdemben megítélni.

---
*Forrás: [Google – Gemini 4 Argon: our next era of frontier intelligence](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/), 2026. szeptember 30.*
