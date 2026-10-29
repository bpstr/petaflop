---
title: "Negyven nyelvet ért az Nvidia nyílt súlyú beszédmodellje"
date: 2026-10-29
summary: "A Nemotron 3.5 Transcribe egyetlen modellből készít átiratot, fordítást és beszélőcímkéket, de offline feldolgozásra készült, nem élő közvetítésre."
category: kiadasok
tags: ["AI", "Nvidia", "hang", "modellek", "nyílt súlyok"]
draft: false
hidden: false
---

Az Nvidia kiadta a Nemotron 3.5 Transcribe nyílt súlyú beszédmodelljét. A 34 milliárd paraméteres, szakértőkeverékes rendszer egy feladatnál nagyjából 4,3 milliárd paramétert aktivál, és ugyanabból az ellenőrzőpontból készít átiratot, fordítást, beszélőcímkéket, időbélyegeket vagy hangfelvételre adott szöveges választ.

A modellkártya 40 nyelvű átírást, 31 nyelv és az angol közötti fordítást, valamint legfeljebb nyolc beszélő elkülönítését dokumentálja. Egy felvétel legfeljebb egyórás lehet, a referenciakonfiguráció pedig egy 80 gigabájtos H100 GPU-t kér. Az Nvidia szerint a modell megjelenésekor vezette a Hugging Face nyílt súlyú angol beszédfelismerési rangsorát, de ez gyártói és leaderboard-adat, nem a Petaflop saját mérése.

Fontos különbség, hogy a belső darabolás ellenére ez offline modell, nem valós idejű streaming szolgáltatás. A nyelvi és feladatbeli támogatás sem egyforma minden esetben. A súlyok kereskedelmi és nem kereskedelmi felhasználásra is elérhetők, ám nem általános nyílt forráskódú licenc alatt: az OpenMDW 1.1 feltételei és az egyes összetevők külön értesítései érvényesek. A kiadás így elsősorban olyan fejlesztőknek érdekes, akik saját infrastruktúrán szeretnének hosszabb felvételeket feldolgozni és a modellt szakterületi kifejezésekhez igazítani.

**Források:** [Nvidia modellkártya](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B), [TechCrunch](https://techcrunch.com/2026/10/28/voice-ai-in-vogue-nvidia-releases-new-open-transcription-model/), [AlphaSignal](https://alphasignal.ai/news/nvidia-s-nemotron-3-5-transcribe-tops-open-speech-leaderboard-with-30b-model)
