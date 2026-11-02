---
title: "A Haas nyílt modellje felgyorsítja a japán beszédfelismerést"
date: 2026-11-02
summary: "A Third Intelligence 616 millió paraméteres modellje erős saját mérési eredményeket és alacsony számítási költséget közöl, de Linuxot és Nvidia GPU-t kér."
category: kiadasok
tags: ["AI", "beszédfelismerés", "nyílt súlyok", "Japán"]
draft: false
hidden: false
---

A tokiói Third Intelligence október 30-án kiadta a **Haas-ja-v1.0** japán beszédfelismerő modellt, a hozzá tartozó következtetési kódot és az értékelés újraépítéséhez szükséges metaadatokat. A 615,8 millió paraméteres rendszer az Nvidia Parakeet-TDT felépítését módosítja: FastConformer kódoló mellé Kimi Delta Attentiont használó dekóder került.

A készítők öt nyilvános japán tesztkészletből összeállított mérésében a Haas 6,12 százalékos szigorú karakterhibaarányt ért el. Ez az általuk vizsgált nyílt modellek között a legjobb volt, és közel került a GPT-Transcribe 6,07 százalékához; a MAI-Transcribe 2, a Scribe v2 és a Gemini 3.1 Pro viszont pontosabb maradt. A közölt tesztben a Haas 15–17-szer gyorsabb volt a Whisper large-v3-nál és a Nemotron 3.5 Transcribe-nál.

Ezek gyártói, nem független eredmények. Az óránkénti 0,003–0,004 dolláros becslés is kihasznált infrastruktúrára vonatkozik, nem tartalmazza egy ritkán terhelt GPU, az üzemeltetés vagy a tárhely teljes költségét.

A modell és a kód Apache 2.0 licencű, hosszú felvételeket csendes pontoknál darabol, és egyéni szótárt is fogad. A gyakorlati korlát szigorú: Linux, Nvidia GPU, CUDA és Triton kell hozzá; CPU-n és macOS-en nem támogatott.

**Források:** [AlphaSignal – témafelfedezés](https://alphasignal.ai/news/third-intelligence-s-haas-ja-v1-0-beats-gpt-transcribe-on-japanese-speech-at), [Third Intelligence – bejelentés](https://third-intelligence.com/ja/posts/haas-ja-v1-release), [Haas-ASR – kód és reprodukció](https://github.com/third-intelligence/Haas-ASR)
