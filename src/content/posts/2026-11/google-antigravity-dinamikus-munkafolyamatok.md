---
title: "Pythonnal vezényel párhuzamos ügynököket az Antigravity"
date: 2026-11-14
summary: "A Google Dynamic Workflows funkciója ellenőrizhető Python-szkriptbe rendezi a párhuzamos és egymásra épülő részfeladatokat."
category: kiadasok
tags: ["AI", "Google", "Antigravity", "ügynökök", "fejlesztők"]
draft: false
hidden: false
---

A Google november 13-i Antigravity 2.32.0 kiadása bevezette a **Dynamic Workflows** funkciót. A `/run-workflow` parancs rövid Python-szkriptet készít, amely több ügynök munkáját párhuzamos vagy egymásra épülő szakaszokba rendezi. Egy nagy kódfelülvizsgálat például fájlonként külön ellenőrt indíthat, majd a javítások után újra lefuttathatja ugyanazokat a vizsgálatokat.

A szkript futás előtt átnézhető, menet közben pedig külön látszanak a fázisok és az ügynökök. A részfeladatok saját beszélgetésben dolgoznak, és JSON-séma szerinti strukturált eredményt adnak vissza, így a keresések és tesztnaplók nem töltik meg a fő beszélgetés kontextusát. A `parallel()` egyszerre, a `pipeline()` sorrendben futtatja a lépéseket; a bevált szkript fájlba menthető és később újraindítható.

Az elkülönített beszélgetés nem jelent teljesen önálló munkakörnyezetet: minden részagentnek külön meg kell kapnia a szükséges hátteret, az írási jogosultságokat pedig a feladathoz kell szabni. A munkafolyamat külön Python-folyamatban fut, a Google saját futtatókörnyezetével vagy legalább Python 3.8-as helyi interpreterrel. A funkció az Antigravity alkalmazásban és CLI-ben érhető el, Google AI Pro vagy Ultra csomaggal; a kiadások fokozatosan terjednek, ezért nem minden fiókban jelenik meg egyszerre.

**Források:** [Google Antigravity changelog](https://antigravity.google/docs/changelog?tab=hub), [Dynamic Workflows dokumentáció](https://antigravity.google/docs/dynamic-workflows/), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/google-antigravity-ships-dynamic-workflows-to-run-parallel-ai-coding-agents).
