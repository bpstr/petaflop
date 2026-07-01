---
title: "OpenAI GeneBench-Pro a biológiát méri"
date: 2026-07-01
summary: "Az OpenAI kiadta a GeneBench-Pro tesztet, amely 129 valósághűen zajos feladaton méri, mennyire képesek az AI-ágensek helyes döntéseket hozni a komputációs biológia nehéz problémáiban."
tags: ["AI", "OpenAI", "benchmark", "biológia", "kutatás"]
draft: false
---

Az OpenAI június 30-án mutatta be a GeneBench-Pro tesztkészletet, amely az AI-ágensek tudományos ítélőképességét vizsgálja a komputációs biológia területén. A benchmark 129 szintetikus feladatot tartalmaz genomika, kvantitatív biológia és transzlációs medicina témakörben, 10 fő- és 21 aldomént lefedve.

## Mit mér valójában?

Minden feladat egy szándékosan „zajos", valósághű adathalmazt párosít egy konkrét, döntéshez kötött becslési céllal. A teszt azt vizsgálja, amit az OpenAI „kutatói ízlésnek" nevez: mikor melyik kérdést támogatja egy adathalmaz, mikor kell a korai diagnosztika alapján módosítani a modellen, és mikor tekinthető egy eredmény döntésre késznek. A modelleknek kezelniük kell a mérési hibát, a szelekciós torzítást, a konfundálást és a minőségellenőrzési hibákat is.

## Kiábrándító eredmények

A számok jól mutatják, milyen nehéz a feladat. Az OpenAI legerősebb modellje, a GPT-5.6 Sol a feladatok 28,7 százalékát oldotta meg a legmagasabb érvelési szinten, Pro módban 31,5 százalékát – szemben a korábbi GPT-5 alig 5 százalékos eredményével. A versenytársak lemaradtak: az Anthropic Opus 4.8 modellje 16,0, a Google [Gemini 3.5 Flash](https://openai.com/index/introducing-genebench-pro/) pedig 8,1 százalékot ért el.

A GeneBench-Pro így egyszerre mutatja meg a gyors fejlődést és azt, hogy a vezető modellek a valós biológiai kutatási feladatok többségén még mindig elhasalnak.

---
*Forrás: [OpenAI – Introducing GeneBench-Pro](https://openai.com/index/introducing-genebench-pro/)*
