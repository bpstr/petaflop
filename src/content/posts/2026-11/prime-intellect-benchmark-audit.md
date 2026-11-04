---
title: "Nem csak a modell hibázhat: három AI-benchmarkot auditált a Prime Intellect"
date: 2026-11-04
summary: "Törékeny értékelők, kiszivárgó megoldások és ki nem mondott követelmények torzíthatták az ügynökmodellek pontszámait; a javításokat nyíltan közzétették."
category: kiadasok
tags: ["AI", "benchmark", "ügynökök", "értékelés", "kutatás"]
draft: false
hidden: false
---

Egy AI-benchmark eredménye nemcsak a modellt, hanem a feladatleírást, az eszközöket és a pontozóprogramot is méri. A Prime Intellect november 3-án három nyilvános értékelés – az AutomationBench, az OfficeQA Pro v2 és a HLE-Diamond – auditjából azt mutatta meg, mennyire félrevezető lehet, ha ezek közül bármelyik hibás.

Az AutomationBenchben az API-k paramétereit prózában adták meg, ezért a modelleknek találgatniuk kellett a helyes kérésformátumot. A kutatók JSON Schema-leírásokra cserélték ezeket, és számos, ki nem mondott követelményt tartalmazó feladatot, illetve értékelőt javítottak. A részpontozás ezután már közel telített eredményeket adott; a szerzők ezért a szigorú pontszám közlését vagy az újabb benchmark használatát javasolják.

Az OfficeQA pontozója helyes választ is elutasíthatott, ha az magyarázó számot tartalmazott vagy 250 karakternél hosszabb volt. A webhozzáférés ráadásul lehetővé tette, hogy egyes megoldások visszakereshetők legyenek. A javított változat módosított korpuszt, web nélküli futást és modellalapú bírálót használ – ez utóbbi viszont saját bizonytalanságot hoz a rendszerbe.

A tanulság nem az, hogy minden rangsor használhatatlan. Inkább az, hogy a modellkártyán szereplő egyetlen százalék kevés: látni kell a feladatverziót, a szigorú és részleges pontozást, az eszközkészletet, valamint azt is, hozzáférhetett-e a modell a válaszokhoz. A Prime Intellect közzétette a javításokat, így az állítások legalább kód és összehasonlítható futások szintjén ellenőrizhetők.

**Források:** [Prime Intellect audit](https://www.primeintellect.one/blog/auditing-public-evaluations), [PI-AutomationBench javítások](https://github.com/PrimeIntellect-ai/PI-AutomationBench)
