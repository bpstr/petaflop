---
title: "Alapból naplózza az új fizetős projektek Gemini API-kéréseit a Google"
date: 2026-10-30
summary: "Az október 26. után létrehozott fizetős projektekben a Generate Content API már eltárolja a kéréseket és válaszokat, amit projektenként vagy hívásonként lehet kikapcsolni."
category: hirek
tags: ["AI", "Google", "Gemini", "adatvédelem"]
draft: false
hidden: false
---

Megváltozott a Gemini API egyik fontos alapbeállítása: az október 26-án vagy később létrehozott, fizetős projektekben a `generateContent`, `streamGenerateContent` és `batchGenerateContent` hívások alapból `store=true` értékkel futnak. A korábban létrehozott projektek beállítása nem változik.

Az eltárolt naplóban a Google AI Studio megmutatja a teljes promptot, a választ és a korábbi fordulók kontextusát. Az alapértelmezett megőrzési idő 55 nap, de 7, 14 vagy 28 napra is csökkenthető. A külön adatkészletbe mentett bejegyzések nem járnak le automatikusan; ilyen adatkészletet a felhasználó külön döntéssel oszthat meg a Google-lel fejlesztési példaként.

A naplózás a projekt beállításaiban külön kikapcsolható a Generate Content és az Interactions API számára. Egyetlen kérésnél a `store=false` felülírja a projekt alapértékét. Ehhez legalább a Python SDK 2.33.0, a JavaScript SDK 2.31.0, a Java SDK 1.79.0 vagy a Go SDK 1.76.0 kell. A változás az OpenAI-kompatibilis végponton át indított támogatott Generate Content-hívásokat is érinti.

Az Interactions API eddig is alapból tárolta az interakciókat az állapotkezeléshez. Ott a kikapcsolás a beszélgetési előzmények automatikus mentését és visszatöltését is megszünteti, hacsak a kérés ezt külön nem írja felül. Érdemes tehát az új projektek indításakor tudatosan rögzíteni a naplózási és megőrzési beállítást.

*Források: [Google – Gemini API kiadási napló](https://ai.google.dev/gemini-api/docs/changelog); [Google – naplók és adatkészletek](https://ai.google.dev/gemini-api/docs/logs-datasets).*
