---
title: "Egy új felület kibontja, mit bizonyítanak az AI-válaszok forrásai"
date: 2026-11-02
summary: "A Penn és a Microsoft Research prototípusa állításokra bontja a választ, megmutatja a támogató és ellentmondó részleteket, majd visszavezet az eredeti tanulmányokig."
category: elemzesek
tags: ["AI", "kutatás", "forrásellenőrzés", "Microsoft"]
draft: false
hidden: false
---

Egy számozott hivatkozás még nem mondja meg, hogy a mögötte álló forrás valóban alátámasztja-e az AI válaszát. A Pennsylvaniai Egyetem és a Microsoft Research kutatói ezért **attribution gradients** néven olyan felületet készítettek, amely fokozatosan bontja ki a bizonyítékláncot. A tanulmány harmadik változata október 28-án került fel az arXivra.

A prototípus állításokra darabolja a választ, külön rendezi a támogató és ellentmondó részleteket, majd az eredeti PDF megfelelő helyére visz. Ha egy forrás maga is másik tanulmányra hivatkozik, a rendszer ezt a másodfokú bizonyítékot is kibontja. A megoldás az OpenSciLM-re épült; a kivonatoláshoz GPT-5.1-et, a hivatkozási hálóhoz Semantic Scholart használt.

A mindössze 15 résztvevős laborvizsgálatban a felhasználók az emlékezeti kérdések 51,3 százalékára válaszoltak helyesen, míg az alapfelületnél 17,3 százalék volt az eredmény. Az átírt állításaik öt minőségi szempontból szignifikánsan jobbak lettek. A szerzők azonban jelzik, hogy az emlékezeti kérdések az új felület felé torzíthattak, és a minta tudományos irodalomban jártas olvasókból állt.

Ez tehát nem kész keresőtermék és nem általános bizonyíték arra, hogy minden AI-válasz megbízhatóbbá válik. Inkább használható terv arra, hogyan lehetne a puszta linklistát ellenőrizhető bizonyítéktérképpé alakítani.

**Források:** [AlphaSignal – témafelfedezés](https://alphasignal.ai/news/penn-and-microsoft-turn-ai-citations-into-layered-evidence-trails), [arXiv – tanulmány és verziótörténet](https://arxiv.org/abs/2510.00361), [a tanulmány HTML-változata](https://arxiv.org/html/2510.00361v3)
