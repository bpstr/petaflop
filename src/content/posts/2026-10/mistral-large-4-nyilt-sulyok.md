---
title: "Letölthetők a Mistral Large 4 egybillió paraméteres súlyai"
date: 2026-10-30
summary: "A Mistral a korábbi API-előnézet után közzétette a Large 4 súlyait; a ritka szakértői modell 49 milliárd aktív paraméterrel és egymillió tokenes kontextussal dolgozik."
category: kiadasok
tags: ["AI", "Mistral", "modellek", "nyílt súlyok"]
draft: false
hidden: false
---

A Mistral október 29-én letölthetővé tette a Mistral Large 4, vagyis a Le Chonk súlyait. Ez a hónap eleji API-előnézet kézzelfogható folytatása: akkor a cég még csak október végére ígérte a csomagot. A Hugging Face-en megjelent modellkártya szerint a ritka szakértői architektúra összesen ezermilliárd paramétert tartalmaz, egy token feldolgozásakor pedig 49 milliárd aktív; a beágyazásokkal együtt az aktív készlet 52 milliárd.

A modell szöveget és képet is fogad, egymillió tokenes kontextust kínál, és három következtetési módot ad. A Mistral saját mérései erős kódolási eredményeket mutatnak, de ezek gyártói benchmarkok, nem független tesztek. A nyílt súlyok azt sem jelentik, hogy a modell hétköznapi gépen könnyen fut: a teljes csomag mérete és a kiszolgálás memóriaigénye komoly infrastruktúrát feltételez.

A licenc is feltételesen nyitott. A módosított MIT-licenc széles körű használatot enged, de a modell szolgáltatásként történő kínálásához külön Mistral-licenc kell. Kutatáshoz, helyi kiértékeléshez és saját termékbe építéshez így valódi új lehetőség nyílt, egy rivális felhős API indításához viszont nem elég a súlyok letöltése.

*Forrás: [Mistral bejelentés](https://mistral.ai/news/mistral-large-4-oss/), [hivatalos modellkártya](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B), [AlphaSignal Latest](https://alphasignal.ai/)*
