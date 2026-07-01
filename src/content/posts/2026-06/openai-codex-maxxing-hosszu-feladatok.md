---
title: "OpenAI Codex-maxxing hosszú feladatokra"
date: 2026-06-22
category: kiadasok
summary: "Az OpenAI gyakorlati útmutatót adott ki, amely megmutatja, hogyan használható a Codex tartós munkafelületként: a kulcs a feladatok lebontása ellenőrizhető lépésekre és a folyamatos kontextus megőrzése."
tags: ["AI", "OpenAI", "Codex", "fejlesztés", "ügynökök"]
draft: false
---

Az OpenAI június 22-én tette közzé a [Codex-maxxing for long-running work](https://openai.com/index/codex-maxxing-long-running-work/) útmutatót, amely gyakorlati stratégiákat ad a Codex hosszan futó projektekben való használatához. A fő üzenet: a Codex nem egyszeri kódgenerátor, hanem tartós munkafelület, amely megőrzi a kontextust a feladatok között.

## Bontsd ellenőrizhető lépésekre

A megközelítés lényege, hogy a nagy célokat különálló, ellenőrizhető részfeladatokra bontjuk. Így a haladás iteratívvá válik, az összetett munkafolyamatok pedig kezelhetők maradnak – minden lépés külön igazolható, mielőtt a következő indulna.

## Tartós szál és irányítás

Két fogalom áll a módszer középpontjában. A „tartós szál" (durable thread) egy hosszan futó beszélgetés, amelyben a munka folyamatosan halmozza a kontextust, így bármikor vissza lehet térni a megszakított ponthoz. Az irányítás (steering) pedig azt jelenti, hogy menet közben adunk útmutatást a Codexnek: korrigáljuk az irányt, kontextust adunk, jóváhagyjuk a következő lépést vagy újabb műveletet sorolunk be.

## Nem csak kódoláshoz

Bár a minta a szoftverfejlesztésben a legerősebb, az OpenAI szerint ugyanez működik kutatásban, írásban, ügyfélszolgálaton, projektmenedzsmentben és üzleti automatizálásban is. Az útmutató arra is kitér, mikor érdemes a végrehajtást a Codexre bízni, és mikor pótolhatatlan az emberi felügyelet.

---
*Forrás: [OpenAI – Codex-maxxing for long-running work](https://openai.com/index/codex-maxxing-long-running-work/)*
