---
title: "A PolicyLM szabálymódosítás után sem kér újratanítást"
date: 2026-10-07
summary: "A Musubi 1,7 milliárd paraméteres, letölthető modellje futás közben olvassa a moderációs szabályokat, de nem ad indoklást és saját adatokon kell kalibrálni."
category: kiadasok
tags: ["AI", "modellek", "biztonság"]
draft: false
hidden: false
---

A közösségi platformok szabályai gyorsabban változhatnak, mint ahogy egy hagyományos moderációs osztályozót újra lehet tanítani. A Musubi október 6-án kiadott PolicyLM-1.7B modellje ezért minden üzenet mellé megkapja az aktuális, egyszerű nyelven megfogalmazott kategóriákat, majd 0 és 1 közötti pontszámot ad mindegyikre. Nem generál magyarázó szöveget.

Az 1,7 milliárd paraméteres súlyok Apache 2.0 licenccel letölthetők. A gyártó mérése szerint a modell rövid üzeneteknél, hat kategóriával 35 ezredmásodperces medián késleltetést ért el egy 24 GB-os NVIDIA L4 GPU-n. Saját, szintetikus szabályzatokra épülő tesztjükben 84,2 százalékos pontosságot közölnek. A nagyobb gpt-oss-safeguard-20B ugyanebben az összevetésben pontosabb volt, miközben jóval lassabban válaszolt.

Az eredmények nem kész moderációs garanciák. A modellkártya szerint a tesztkészletek többségét a fejlesztés során is használták, élő forgalmon pedig még nem vizsgálták a kiadott modellt. A rendszer csak szöveget és egyszerre egy üzenetet lát, angol szabályzatokon tesztelték, hosszabb vagy ártalmasnak hangzó ártalmatlan tartalmakat pedig túl gyakran jelölhet. Éles használat előtt ezért saját adatokon kell beállítani a küszöböket, a fellebbezésekhez pedig indoklást adó megoldás szükséges.

**Források:** [Musubi bejelentés](https://www.musubilabs.ai/blog/introducing-policylm-1-7b), [PolicyLM modellkártya](https://huggingface.co/musubilabs/policylm-1.7b), [TechCrunch](https://techcrunch.com/2026/10/06/how-ai-decision-models-could-change-content-moderation/)
