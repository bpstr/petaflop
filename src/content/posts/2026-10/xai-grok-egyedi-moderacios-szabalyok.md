---
title: "Kérésenként szigorítható a Grok válaszainak moderációja"
date: 2026-10-28
summary: "Az xAI API új guidelines mezője három tartalmi kategóriában kérhet elutasítást, de a beállítás nem általános biztonsági szabálymotor és több futásmóddal sem kompatibilis."
category: kiadasok
tags: ["AI", "xAI", "Grok", "API", "moderáció"]
draft: false
hidden: false
---

Az xAI október 27-én egyedi moderációs vezérlést adott a Grok szöveges API-jához. A fejlesztők a `guidelines` tömbben kérhetik, hogy a modell utasítsa el az erotikus tartalmat, a grafikus erőszakot vagy a trágár nyelvezetet. A beállítás a Chat Completions és a Responses API-ban, valamint az xAI Python SDK-jában érhető el.

Az új mező nem írja át a Grok teljes szabályrendszerét. Jelenleg három kategória (`nsfw`, `violence`, `profanity`) és egyetlen viselkedés (`decline`) választható; a kihagyott kategóriákban a modell alapértelmezett moderációja marad érvényben. A szabály kérésenként hat, ezért egy beszélgetés minden hívásában újra el kell küldeni — kivéve az xAI SDK `chat.create` felületét, amely a beállítást a csevegéshez köti.

Korlátból több is van. A funkció nem használható a többügynökös modellekkel vagy késleltetett válaszokkal, és bizonyos `stop`, illetve egynél nagyobb `n` paraméterekkel is hibát adhat. Érvénytelen kategóriánál 422-es, összeférhetetlen kérésnél 400-as választ küld az API, még a modell futtatása előtt.

Ez praktikus eszköz lehet ügyfélszolgálati vagy oktatási alkalmazások hangnemének szűkítésére, de nem helyettesíti a bemenetek ellenőrzését, a kimeneti osztályozást és a naplózott emberi felülvizsgálatot. A modell saját szavaival követi az irányelvet, így a fejlesztőnek továbbra is tesztelnie kell a határeseteket és az új modellverziókat.

**Források:** [xAI dokumentáció](https://docs.x.ai/developers/advanced-api-usage/custom-moderation-controls), [xAI kiadási jegyzet](https://docs.x.ai/developers/release-notes)
