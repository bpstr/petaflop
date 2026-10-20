---
title: "Az Exa 3.0 kevesebb fölösleges szöveget küldene az AI-ügynököknek"
date: 2026-10-20
summary: "A kereső új kiadása együtt válogatja a találatok szövegrészleteit, és Lite néven olcsóbb API-keresést vezet be."
category: kiadasok
tags: ["AI", "ügynökök"]
draft: false
hidden: false
---

Egy weben kutató AI-ügynök ugyanazt a bejelentést több oldalon is megtalálhatja. Ha mindegyik teljes szövegét továbbküldi a nyelvi modellnek, az ismétlődő részletek is helyet foglalnak a bemenetben. Az október 19-én bejelentett [Exa 3.0](https://exa.ai/blog/exa-3) ennek csökkentésére teszi általánosan elérhetővé a Dynamic Highlights funkciót, és új, Lite nevű keresési módot is ad.

## A találatok együtt számítanak

A [Dynamic Highlights leírása](https://exa.ai/blog/dynamic-highlights) szerint a rendszer az összes visszakapott dokumentumot együtt vizsgálja. Így a fontosabb forrásból több szöveget választhat ki, egy ismétlődő vagy kevésbé hasznos oldalból pedig kevesebbet. Ez eltér attól a megoldástól, amikor minden találat külön kap ugyanakkora kivonatkeretet.

Az Exa 95 százalékkal kisebb tokenmennyiséget állít a teljes oldalszövegek továbbadásához képest. A viszonyítási alap lényeges: ebből nem következik ugyanekkora megtakarítás az ügynök teljes számláján. A modell válaszai, a további keresések és az egyéb eszközhívások is fogyasztanak erőforrást. A rövidebb kivonat akkor hasznos, ha a kérdés megválaszolásához szükséges részletek benne maradnak.

## Olcsóbb keresés, külön mérendő minőség

A publikáláskor elérhető [árlista](https://exa.ai/pricing) szerint a Lite alapdíja ezer kérésenként 4 dollár, az Auto változaté 7 dollár, kérésenként legfeljebb tíz találattal. Több találat és egyes további tartalomszolgáltatások külön díjat jelenthetnek. Ezek keresési API-díjak; az alkalmazásban használt nyelvi modell költsége ezen felül merül fel.

A két mód ugyanazt az indexet használja, az Auto azonban több számítást fordít a keresés és a rangsorolás lépéseire. A cég nyolc értékelésen vezető eredményről számol be. Ez az Exa saját összehasonlítása, ezért egy másik alkalmazásban várható minőséget önmagában nem dönti el.

Fejlesztőként érdemes olyan saját keresőkérdéseket is kipróbálni, amelyeknél a válasz egy apró kivételen vagy verziószámon múlik. Egy API-dokumentációból például a támogatott funkció mellett annak korlátozása is kellhet. Az ilyen esetek mutatják meg, hogy a rövidebb bemenetből is teljes választ kapunk-e, vagy a hiányzó részlet miatt újabb keresés szükséges.

Források: [Exa 3.0 bejelentés](https://exa.ai/blog/exa-3), [Dynamic Highlights](https://exa.ai/blog/dynamic-highlights), [Exa árlista](https://exa.ai/pricing). A témát az [AlphaSignal híréből](https://alphasignal.ai/news/exa-3-0-beats-perplexity-on-8-benchmarks-and-slashes-search-costs) választottuk.
