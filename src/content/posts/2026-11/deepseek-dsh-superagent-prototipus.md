---
title: "Csendben dolgozó kódügynököt nyitott meg a DeepSeek"
date: 2026-11-01
summary: "A dsh-superagent egyetlen GitHub-tároló feladatait veszi át, de kész termék helyett hibásodásra hajlamos kutatási prototípus."
category: kiadasok
tags: ["AI", "DeepSeek", "ügynökök", "kódolás"]
draft: false
hidden: false
---

A DeepSeek október 31-én MIT-licenc alatt közzétette a `dsh-superagent` prototípusát. Az ügynök egyetlen GitHub-tárolót figyel: engedélyezett kérésből munkajegyet készít, külön munkamenetben és könyvtárban dolgozik, majd ugyanoda viszi vissza az eredményt — például egy pull requestet vagy egy elakadt döntést.

A tervezés érdekesebb része nem az, hogy tud kódolni, hanem hogy igyekszik kevés figyelmet kérni. Csak közvetlen kérésre vagy előre leírt szabály alapján indulhat el; munka közben nem küld állandó állapotjelentést. A dokumentáció GitHub- és opcionális Feishu-eseményeket, engedélyezési listákat, elkülönített végrehajtást és a személyre váró feladatokat összegző webpanelt ír le.

Ez azonban nem kész DeepSeek-termék. A [projekt README-je](https://github.com/deepseek-ai/dsh-superagent-prototype) kifejezetten kutatási kódnak nevezi, amely eltér a belső változattól és a kapcsolódó tanulmány egyes terveit sem valósítja meg. A szerzők szerint a kód jelentős részét maguk is kódügynökökkel készítették, ezért hibák és következetlen megoldások maradhattak benne. Egy korai [felhasználói hibajelentés](https://github.com/deepseek-ai/deepseek-harness/discussions/11700) már Node 24-es folyamatfelismerési és eseménykezelési problémákat ír le; ez egyéni teszt, nem általános mérés.

Az újdonság így inkább egy átlátható ügynök-üzemeltetési minta, mint telepítésre kész csapattag. Éles tárolónál külön gépfiók, szűk jogosultság, tesztkörnyezet és emberi kódellenőrzés nélkül nem érdemes rábízni írási jogot.

**Források:** [AlphaSignal – témafelfedezés](https://alphasignal.ai/news/deepseek-releases-a-silent-coding-agent-that-works-without-bothering-you), [DeepSeek prototípus](https://github.com/deepseek-ai/dsh-superagent-prototype), [működési elvek](https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/000-philosophy.md)
