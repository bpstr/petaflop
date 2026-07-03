---
title: "Gemma 4 a laptopodon fut"
date: 2026-06-03
category: kiadasok
summary: "A Google DeepMind nyílt Gemma 4 12B modellje 16 GB memóriájú laptopon is helyben fut, natív hang- és képfeldolgozással, encoder nélküli új architektúrával."
tags: ["AI", "Gemma", "Google DeepMind", "nyílt modell", "multimodális"]
draft: false
---

A Google DeepMind június 3-án kiadta a [Gemma 4 12B](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/) modellt: egy 12 milliárd paraméteres, nyílt súlyú multimodális modellt, amely mindössze 16 GB memóriájú laptopon is helyben, felhő nélkül futtatható.

## Encoder nélküli, egységes felépítés

A Gemma 4 fő újítása az architektúra: nincsenek külön multimodális encoderek, a kép- és hangbemenetek közvetlenül a nyelvi modell magjába áramlanak. A képfeldolgozást egy mindössze 35 millió paraméteres beágyazó modul végzi, amely 48×48 pixeles darabokra bontja a képet – ezzel kiváltja a nagyobb modellek 27 vizuális transzformer-rétegét és nagyjából 550 millió paraméterét.

Ez az első közepes méretű Gemma, amely natív hangbemenetet is kezel: képes beszédfelismerésre, beszélők elkülönítésére, képek és videók értelmezésére, valamint kódgenerálásra.

## Nyílt licenc, széles támogatás

A modell teljesítménye megközelíti a nagyobb 26B változatét, így a többlépcsős, ügynöki (agentic) munkafolyamatok is elérhetővé válnak egy átlagos gépen. A súlyok Apache 2.0 licenc alatt, ingyenesen letölthetők a [Hugging Face](https://huggingface.co/) és a Kaggle felületén, és működnek a Transformers, a vLLM, az SGLang, az MLX, a llama.cpp és a LiteRT-LM eszközökkel is.

A Gemma 4 12B jól mutatja az irányt: a frontier-szintű képességek egyre inkább kikerülnek az adatközpontból a felhasználók saját eszközére.

---
*Forrás: [Google DeepMind – Gemma 4](https://deepmind.google/models/gemma/gemma-4/)*
