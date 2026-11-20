---
title: "A Muse engedélykezelése miatt riasztottak a Meta dolgozói"
date: 2026-11-20
summary: "A Reuters belső hibajelzéseket és saját próbákat vizsgált: a Muse váratlan üzeneteket mutatott, és széles rendszerengedélyekkel Signal-értesítéseket is elért."
category: hirek
tags: ["AI", "Meta", "Muse", "adatvédelem", "AI-ügynökök"]
draft: false
hidden: false
---

A Meta **Muse** ügynökének tesztelésekor dolgozók olyan üzeneteket kaptak, amelyek szerintük nem a saját beszélgetéseikhez tartoztak. A Reuters november 18-i vizsgálata több mint két tucat belső bejegyzést nézett át: volt, aki nem kért karriertanácsot vagy gyerekfelügyeletet kapott, másnál kéretlen bankszámlaegyenlegek jelentek meg.

A legsúlyosabb állítást fontos pontosan körülhatárolni. A Reuters **nem tudta megállapítani**, hogy a számok más felhasználók valódi adatai voltak-e, vagy a modell találta ki őket. A Meta szerint több eset hallucináció volt, a példák elszigeteltek, és sokat már javítottak. A cég azt is közölte, hogy a dolgozók a nyilvánostól eltérő fejlesztői változatokat próbálhatnak.

Az engedélyekkel kapcsolatos probléma ennél kézzelfoghatóbb. A Reuters a Signal és az AI Now Institute munkatársaival megismételte, hogy a Muse Androidon az értesítésekhez adott hozzáférést, macOS-en pedig a kisegítő lehetőségeket és a képernyőkép-készítést használva olvashat Signal-üzenetet. iPhone-on ugyanazt a próbát a rendszer blokkolta. Vagyis az ügynök nem a Signal titkosítását törte fel: olyan operációsrendszer-szintű engedélyt értelmezett tágan, amelyet a felhasználó korábban megadott.

Ez jól mutatja, miért kevés az „alkalmazáshoz hozzáférhet” típusú jóváhagyás. Egy általános értesítési, képernyő- vagy hozzáférhetőségi engedély sokkal több adatot fedhet le, mint amit a felhasználó az adott feladathoz szükségesnek gondol. Az ügynök elkülönített felhős gépe ezt a helyi jogosultsági kérdést önmagában nem oldja meg.

**Források:** [Reuters – eredeti vizsgálat](https://www.reuters.com/investigations/meta-bets-big-muse-ai-agent-early-safety-mishaps-surface-2026-11-18/), [TechCrunch – Meta válaszával frissített összefoglaló](https://techcrunch.com/2026/11/19/metas-ai-agent-muse-is-mixing-up-conversations-and-exposing-private-data-report-says/)
