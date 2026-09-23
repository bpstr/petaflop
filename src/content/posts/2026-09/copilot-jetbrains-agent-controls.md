---
title: "A Copilot visszatekeri a félrement utasítást JetBrainsben"
date: 2026-09-23
summary: "A GitHub Copilot 1.18.0 visszagörgeti a beszélgetést és a fájlváltozásokat, ha átírsz egy korábbi kérést, miközben új ágens- és MCP-vezérlőket kap."
category: kiadasok
tags: ["AI", "kódolás", "ügynökök"]
draft: false
hidden: false
---

A GitHub szeptember 22-én kiadta a Copilot for JetBrains 1.18.0-t, amely több kontrollt ad az ágenssel folytatott munkához. Ha egy korábbi utasítást átírsz, a Copilot az új kérés elküldése előtt visszatekeri a beszélgetést és az addig létrejött fájlváltozásokat is.

Az „assisted approvals” nyilvános előnézetben automatikusan jóváhagyhat alacsony kockázatú eszközhívásokat, a magasabb kockázatú műveleteknél viszont továbbra is döntést kér. Emellett a Codex agent plan mode-ban előbb megmutathatja a tervet, és tartós, eszközönkénti kapcsolók érkeztek az MCP-szerverekhez.

A frissítés szervezeti skilleket és központilag kezelt utasításokat is támogat. Van egy fontos környezeti korlát: JetBrains Gateway és távoli fejlesztési környezetek alatt az inline chatet és belépési pontjait most elrejtették. A 2025.1-es IDE-khez már frissítési figyelmeztetés jelenik meg, bár a támogatás ebben a kiadásban még nem változott.

---
*Forrás: [GitHub Changelog – New features and improvements in Copilot for JetBrains](https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains/).*
