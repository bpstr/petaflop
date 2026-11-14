---
title: "Keresést, fájlokat és hangot kapott a DeepSeek Flash API"
date: 2026-11-14
summary: "A DeepSeek alkalmazásának webes keresése, dokumentumfeldolgozása és beszédfunkciói külön API-ként és beépített eszközként is megjelentek."
category: kiadasok
tags: ["AI", "DeepSeek", "API", "fejlesztők"]
draft: false
hidden: false
---

A DeepSeek november 13-án API-ként is kiadta az alkalmazásában használt **keresési, fájlkezelési és hangfunkciókat**. A `deepseek-flash` modell a Messages, a Responses és a Chat Completions felületén is kérhet webes vagy képi keresést, többlépéses mélykeresést, URL-beolvasást és fájlértelmezést. A keresést és a begyűjtött kontextust a szolgáltatás állítja össze, így ezt nem kell külön ügynökhurokban megírni.

Az OCR, a keresés és oldalbetöltés, valamint a beszédfelismerés és beszédszintézis önálló végpontként is elérhető. A nyílt forrású mintakliens PDF-, Office- és képfájlokat, hivatkozások olvasását, hangbevitelt és felolvasást is bemutat. A DeepSeek dokumentációja szerint nyilvános szolgáltatásban kötelező bekapcsolni a be- és kimenetet vizsgáló biztonsági ellenőrzést; ez csak alap kockázatszűrés, nem mentesíti a fejlesztőt a moderálás és a helyi jelölési szabályok alól.

A kényelmi réteg külön költséget hoz: az eszközhívások díja a modell bemeneti és kimeneti tokenára fölé kerül. Az új csomag tehát nem új alapmodell, hanem kész alkalmazás-építőelemek sora. Gyorsabban összerakható vele egy forrásokat kereső vagy dokumentumokból válaszoló asszisztens, de a találatok minőségét, a hivatkozásokat és a biztonsági döntéseket továbbra is saját tesztekkel kell ellenőrizni.

**Források:** [DeepSeek bejelentés](https://api-docs.deepseek.com/news/news261113/), [fejlesztői útmutató](https://api-docs.deepseek.com/guides/build_a_chatbot/), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/deepseek-packs-search-files-and-safety-into-deepseek-flash-at-88-below-gpt-4o).
