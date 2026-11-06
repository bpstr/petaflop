---
title: "Egy közös átjáró mögé költözött a Hermes Agent minden kliense"
date: 2026-11-06
summary: "A Nous Research nyílt forrású ügynökének 0.23-as kiadásában ugyanazt a munkamenetet használhatja a terminál, a böngésző, a szerkesztő és az üzenetküldő bot."
category: kiadasok
tags: ["AI", "Hermes", "ügynökök", "nyílt forráskód"]
draft: false
hidden: false
---

A Nous Research november 5-én kiadta a Hermes Agent `v0.23.0` változatát. A legfontosabb szerkezeti változás, hogy a parancssor, a terminálos és asztali felület, az ACP-kompatibilis szerkesztők, az üzenetküldő botok és az időzített feladatok többé nem futtatnak külön ügynökpéldányt ugyanahhoz a beszélgetéshez. Egy helyi átjáró birtokolja a munkamenetet, a felületek pedig kliensként kapcsolódnak hozzá.

Ez a gyakorlatban csökkentheti a kétszer végrehajtott kérések és az eltérő előzmények esélyét. Az új webes felület ugyanazokat a beszélgetéseket és beállításokat nyitja meg böngészőben; alapból ki van kapcsolva. A Desktop egyszerre több gép átjárójához kapcsolódhat, a csoportszobák pedig vezető botra vagy automatikus útválasztóra bízhatják, melyik ügynök válaszoljon.

A kiadás a hosszú futások kezeléséhez is ad új korlátokat. A fizetős MCP-eszközök megadhatják egy hívás árát, a Hermes pedig beszélgetésenkénti költési plafont kérhet számon. A delegálás bővítménnyel cserélhető, a futó időzített munka megszakítható, a `/rewind` pedig korábbi üzenettől új ágat indíthat anélkül, hogy átírná az eredeti előzményt.

A Python-projekt MIT-licencű, de a modellek és a külső eszközök díjai külön maradnak. A közös átjáró működési központ is lesz: nyilvános webes elérésnél a hitelesítést és a hálózati védelmet az üzemeltetőnek kell beállítania. A Petaflop nem próbálta ki a kiadást.

*Az [AlphaSignal Latest](https://alphasignal.ai/) nyomán. Elsődleges források: [Nous Research – Hermes Agent v0.23.0](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0); [Hermes Agent forráskód és licenc](https://github.com/NousResearch/hermes-agent).*
