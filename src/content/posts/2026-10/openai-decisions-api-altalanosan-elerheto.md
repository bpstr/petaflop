---
title: "Kilépett a bétából az OpenAI Decisions API-ja"
date: 2026-10-23
summary: "A géppel feldolgozható döntések API-ja már JSON-t és beszélgetési előzményt is értékel, kérésenként pedig legfeljebb 400 kérdést fogad."
category: kiadasok
tags: ["AI", "OpenAI", "kódolás", "ügynökök"]
draft: false
hidden: false
---

Az OpenAI október 22-én általánosan elérhetővé tette a [korábban nyilvános bétában bemutatott Decisions API-t](/posts/2026-10/openai-decisions-api-tipusos-dontesek/). A `POST /v1/decisions` végpont továbbra is a `gpt-6-luna` modellt használja, és nem szabad formátumú választ ír: egy feltétel valószínűségét, rögzített lehetőségek közötti választást vagy rubrika szerinti pontszámot ad vissza.

A stabil kiadás már kérésenként 400 kérdést fogad a béta 200-as határa helyett. Az alkalmazás `input_json` tartalomrészként közvetlenül adhat át strukturált adatot, az egyes kérdések utasításai pedig saját képet is kaphatnak. A közös bemenet gyorsítótárazható, és már egy teljes beszélgetés is értékelhető a hozzá tartozó függvény- vagy egyedi eszközhívásokkal és eredményekkel együtt.

Ez például akkor hasznos, ha egy ügyfélszolgálati rendszer nemcsak a levél szövegéből, hanem a rendelés JSON-adatából és az előző eszközhívás eredményéből dönti el, indokolt-e egy visszatérítés. A GPT-Live közvetlen integrációja és a Private Link támogatás szintén bekerült a stabil felületbe.

A határvonal megmaradt: az API nem tetszőleges JSON-sémát tölt ki, arra a Responses API strukturált kimenete való. Fájlt, hangot és elemhivatkozást sem fogad, a dokumentációban szereplő, Responses API-hoz viszonyított tízszeres sebesség pedig az OpenAI állítása, nem saját mérésünk.

**Források:** [OpenAI API-változásnapló](https://developers.openai.com/api/docs/changelog), [Decisions API útmutató](https://developers.openai.com/api/docs/guides/decisions)
