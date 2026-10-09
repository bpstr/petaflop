---
title: "Internet nélkül ír tárgyalási jegyzetet a Google kísérleti Mac-appja"
date: 2026-10-09
summary: "A Google AI Edge Foresight helyben írja át a megbeszélést, kibontja a rövid jegyzeteket és a helyi dokumentumok alapján válaszol; egyelőre Apple Siliconra készült."
category: kiadasok
tags: ["AI", "Google", "modellek"]
draft: false
hidden: false
---

A Google AI Edge csapata kiadta a Foresight nevű kísérleti Mac-alkalmazást, amely internetkapcsolat nélkül írja át és foglalja össze a megbeszéléseket. A felvétel, az átirat, a jegyzet és a hozzáadott dokumentum a Google leírása szerint nem hagyja el a számítógépet.

A felület egyik oldalára a felhasználó rövid pontokat írhat, a másikon az alkalmazás ezekből az átirat alapján rendezett jegyzetet készít. Az asszisztens kérdésekre is válaszolhat a beszélgetés és a helyi tudástár alapján. PDF, Google-dokumentum, Microsoft Office-fájl, egyszerű szöveg, Markdown és webes könyvjelző is hozzáadható.

A technikai feladatokat nem egyetlen modell végzi. A TechCrunch szerint a helyi kereséshez a 740 millió paraméteres EmbeddingGemma 2, a beszélgetős válaszokhoz pedig Gemma 4 dolgozik. Az [EmbeddingGemma 2 önálló képességeiről már írtunk](/posts/2026-10/embeddinggemma-2-multimodalis-kereses/); a Foresight azt mutatja meg, hogyan épülhet erre használható asztali munkafolyamat.

Az alkalmazás ingyen letölthető, de jelenleg Apple Siliconos Macekre optimalizált. A Google nem közölt külön memória- vagy tárhelyminimumot, és kísérleti bemutatóként kezeli a programot. A helyi feldolgozás csökkenti a felhőbe küldött tárgyalási adatok kockázatát, de a pontatlan átiratot vagy összefoglalót nem teszi automatikusan megbízhatóvá.

*Források: [Google for Developers – AI Edge Foresight](https://developers.google.com/edge/foresight); [TechCrunch](https://techcrunch.com/2026/10/08/google-releases-a-new-local-first-granola-competitor/); [The Verge](https://www.theverge.com/tech/1007985/google-ai-notetaking-app-transcribe-offline).*
