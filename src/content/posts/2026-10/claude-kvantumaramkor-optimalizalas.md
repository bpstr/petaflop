---
title: "Hét kvantumáramkörnél javított a korábbi rekordon Claude"
date: 2026-10-18
summary: "Az automatikus ellenőrzővel összekapcsolt Claude hét feladatban egyszerre csökkentette a kvantumbitek és a műveletek számát, a nyolcadikhoz pedig új megoldást talált."
category: elemzesek
tags: ["AI", "Anthropic", "Claude", "kutatás", "kvantumszámítás"]
draft: false
hidden: false
---

Az Anthropic kutatói nyolc kvantumáramkör-tervezési feladatot bíztak Claude-ra. A modell Pythonban készített megoldásokat, egy külön program pedig ellenőrizte a helyességet, majd a szükséges kvantumbitek és kapuműveletek alapján pontozta őket. Az október 15-én feltöltött tanulmány szerint hét feladatnál mindkét erőforrásigény csökkent a korábbi legjobb publikált megoldásokhoz képest; a nyolcadiknál új, megfordítható architektúra született.

A kvantumáramkörök nem dobhatják el egyszerűen a köztes számításokat: a műveleteknek visszafordíthatóknak kell lenniük. Emiatt gyakran választani kell a több memória szerepét betöltő kvantumbit és az ismételt számítást jelentő több kapu között.

Claude az elliptikus görbéknél használt moduláris inverzióhoz azt találta ki, hogy a korábbi lépések teljes naplója helyett az aktuális számokból állítsa vissza a szükséges elágazási információt. A kutatók szerint az erre épülő egyik terv 12 százalékkal több kvantumbitet, de tizenhétszer kevesebb kaput igényel, mint a korábbi legkisebb megoldás. A rendszer 53 órán át dolgozott, az induló leíráson túl csak alkalmi, szélesebb keresésre ösztönző emberi útmutatást kapott.

Egy másik feladatban a modell egy Reed–Solomon-dekóder kapuszámát csökkentette tizenketted részére a Google korábbi konstrukciójához képest. Ehhez a legrosszabb esetre méretezett 665 kvantumbites tartalék helyett 19 kvantumbitet foglalt le. A kompromisszum az, hogy a szimuláció szerint körülbelül minden tízezredik futás hibázik; ezt az adott feladat megengedte.

Az eredmény arXiv-előtanulmány, nem függetlenül megismételt hardverkísérlet. A tervek kódolható, automatikusan ellenőrizhető részeket optimalizálnak, és önmagukban nem oldják meg a zajos kvantumgépek hibajavítását vagy méretezését. A munka azt mutatja meg, hogy jól definiált értékelő mellett egy nyelvi modell nemcsak meglévő kódot rövidíthet, hanem új erőforrás-kompromisszumokat is kereshet.

**Források:** [Anthropic – kutatási összefoglaló](https://www.anthropic.com/research/designing-efficient-quantum-circuits); [arXiv – teljes előtanulmány](https://arxiv.org/abs/2610.22367).
