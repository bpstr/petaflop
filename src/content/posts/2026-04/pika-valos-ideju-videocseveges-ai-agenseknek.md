---
title: Valós idejű videóhívás AI-agensekkel
date: 2026-04-02
summary: A Pika bemutatta a PikaStream1.0-t, amely lehetővé teszi, hogy bármely AI-ágensssel élő videóhívást folytassunk – mindössze 1,5 másodperces késleltetéssel, egyetlen GPU-n.
tags: [AI, videogenerálás, pika, real-time, ai-agens]
draft: false
---

A [Pika](https://www.pika.me/blog/introducing-real-time-video-chat) bejelentette a PikaStream1.0-t: egy valós idejű vizuális motort, amely lehetővé teszi, hogy az AI-agensekkel – köztük a saját digitális énnkkel – face-to-face videóhívást folytassunk. A rendszer 24 FPS-en, 480p felbontásban, mindössze ~1,5 másodperces hang-kép késleltetéssel működik, és mindezt egyetlen H100 GPU-n futtatja.

A korábbi Pikaformance modellhez képest, amely 8 GPU-t igényelt és 4,5 másodperces válaszidővel dolgozott, ez komoly előrelépés: az interakció már nem üzenetrögzítőre, hanem FaceTime-ra hasonlít.

A technológia három fő komponensen alapul. A **FlashVAE** Transformer-alapú dekóder 441 FPS sebességgel, mindössze 1,1 GB memóriával rekonstruálja a képkockákat. A **9 milliárd paraméteres Diffusion Transformer** hang alapján generálja a videót, precíz szinkronban tartva az ajkak mozgását. A **többjutalmas RLHF** eljárás pedig az identitás konzisztenciájára, az ajakszinkronra és a természetes mozgásra egyidejűleg optimalizál.

Az AI-Self funkció már most kipróbálható Google Meet-hívásban, más agensekhez a szükséges komponens a Pika GitHub-repójából tölthető le.

*Forrás: [pika.me](https://www.pika.me/blog/introducing-real-time-video-chat)*
