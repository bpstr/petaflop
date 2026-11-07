---
title: "Nyitva maradt több mint nyolcszáz ARTEX AI-hackereszköz az interneten"
date: 2026-11-07
summary: "A Censys 1465 elérhető ARTEX-hostot talált; az ismétlődő infrastruktúra kiszűrése után is mintegy 815 telepítés maradt."
category: elemzesek
tags: ["AI", "Kiberbiztonság", "AI-ügynökök", "Nyílt forráskód"]
draft: false
hidden: false
---

Egy támadások automatizálására képes AI-keretrendszerből százával maradtak nyilvánosan elérhető példányok az interneten. A Censys november 4-i mérésében **1465 ARTEX-hostot** talált; közülük körülbelül 650 két, azonos mintázatú tárhelyblokkhoz tartozott. Ezeket levonva is nagyjából 815 önállónak látszó telepítés maradt.

Az ARTEX eredetileg engedélyezett biztonsági tesztelésre készült, és 2026 júliusában AGPL-3.0 licenccel jelent meg. Az eredeti tárolót később eltávolították, de archívumok és átnevezett változatok tovább terjedtek. A Censys 32 olyan nyitott könyvtárat is azonosított, amely további behatolás utáni eszközöket tett hozzáférhetővé.

A puszta internetes elérhetőség még nem bizonyít rosszindulatú használatot: a példányok között lehetnek jogos tesztkörnyezetek is. A kockázatot azonban növeli, hogy 155 host – a teljes készlet 10,6 százaléka – más Censys-fenyegetésjelzést is kapott. A CrowdStrike korábban dél-koreai pénzügyi szervezetek elleni támadáshoz, a Microsoft pedig a Storm-0940 kampányához kapcsolta a keretrendszert.

Az eset nem azt mutatja, hogy minden AI-biztonsági eszköz támadó fegyver. Inkább azt, hogy egy ügynökszerű keretrendszer téves telepítése önmagában is incidensforrás: hitelesítést, hálózati korlátozást, naplózást és folyamatos leltárt ugyanúgy igényel, mint bármely más érzékeny adminisztrációs rendszer.

**Források:** [Censys kutatási beszámoló](https://censys.com/blog/artex-agentic-asbestos/), [TechCrunch](https://techcrunch.com/2026/11/06/hundreds-of-artex-ai-hacking-tools-found-publicly-exposed-to-the-web/)
