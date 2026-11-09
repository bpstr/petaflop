---
title: "Az AWS egyik vezető mérnöke szerint a jó AI-fejlesztő egyszerre gyanakvó és „lusta”"
date: 2026-11-09
summary: "David Yanacek az előre rögzített engedélyhatárokban látja az önálló kódolóügynökök biztonságosabb és kevésbé aprólékos felügyeletének kulcsát."
category: hirek
tags: ["AI", "AWS", "AI-ügynökök", "fejlesztők", "munka"]
draft: false
hidden: false
---

Az AI-ügynökökkel dolgozó jó mérnök egyszerre „gyanakvó és lusta” – mondta David Yanacek, az AWS senior principal engineere a Business Insidernek. A provokatív párosítás nála két munkaszabályt jelent: előre végiggondolni, mi romolhat el felügyelet nélküli műveleteknél, és közben nem kézzel ismételni azt, amit biztonságosan automatizálni lehet.

Yanacek szerint a kód megírása önmagában már nem feltétlenül a fejlesztés leglassabb része. Az ügynökök órákon át generálhatnak kódot, futtathatnak teszteket, javíthatnak hibákat és készíthetnek elő változtatásokat, miközben az ember a tervezési vitákra és a nehéz ellenőrzésekre koncentrál. Ehhez azonban nem elég minden parancsnál jóváhagyást kérni, mert akkor az automatizálás könnyen mikromenedzsmentté válik.

A mérnök ezért egy általa „auto-trust” fájlnak nevezett szabálykészletet használ. Ebben előre rögzíti, mely eszközök és parancsok futhatnak önállóan, és mely műveletekhez kell emberi engedély. Az AWS saját architekturális útmutatója hasonló elvet, fokozatos autonómiát ír le: a megbízhatóságot mérni kell, a jogosultság pedig növelhető vagy visszavehető.

Ez egy tapasztalt mérnök munkamódszere, nem általános AWS-szabály és nem bizonyíték arra, hogy minden csapatnál rövidebb lesz a munkaidő. A használható tanulság inkább az, hogy az autonómiát a futás előtt kell megtervezni: konkrét eszközlistával, jóváhagyási határokkal és visszavonható jogosultságokkal.

**Források:** [Business Insider](https://www.businessinsider.com/aws-principal-engineer-says-best-developers-paranoid-lazy-2026-11), [AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/closing-the-ai-agent-trust-gap-with-graduated-autonomy/)
