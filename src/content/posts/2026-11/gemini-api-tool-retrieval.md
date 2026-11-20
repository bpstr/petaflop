---
title: "Nem kell minden eszköz sémáját betöltenie a Gemini-ügynöknek"
date: 2026-11-20
summary: "A Gemini API Tool Retrieval előnézete csak akkor tölti be egy függvény vagy MCP-szerver teljes paramétersémáját, amikor a modell tényleg használni akarja."
category: kiadasok
tags: ["AI", "Google", "Gemini", "API", "MCP", "AI-ügynökök"]
draft: false
hidden: false
---

A Google november 19-én előnézetben elindította a **Tool Retrievalt** a Gemini Interactions API-ban. A funkció azt a problémát célozza, amely akkor jelenik meg, amikor egy ügynök már több tucat vagy száz eszköz közül választhat: minden függvény teljes paramétersémája helyet foglal a bemeneti kontextusban, még akkor is, ha a feladat csak egyet használ.

A fejlesztő egy `tool_search` eszközt ad a kéréshez, a ritkábban használt függvényeken pedig `defer_loading: true` jelölést állít be. A modell továbbra is látja az eszköz nevét és leírását, de a JSON-sémát csak akkor kapja meg, amikor kiválasztja. A keresés, a séma betöltése és a függvényhívás külön lépésként megjelenik az `interaction.steps` listában, így visszakövethető, mit választott a modell.

Az alapváltozatot a Google szervere kezeli, külön indexet nem kell építeni. Saját eszközjegyzéknél kliensoldali keresés is beállítható: ekkor az alkalmazás futtatja a lekérdezést, ami egy új hálózati fordulót jelent, viszont felhasználónkénti jogosultsági szűrésre vagy menet közben csatlakoztatott integrációkra is használható.

A megoldás távoli **MCP-szerverekkel** is működik. Ha egy `mcp_server` eszköz halasztott betöltést kap, a szerver teljes kínálata helyett csak a szükséges eszköz sémája kerül a beszélgetésbe. Ez token- és késleltetési előny lehet nagy katalógusnál, de nem új jogosultsági réteg: az alkalmazásnak továbbra is külön kell eldöntenie, mely eszközöket mutatja meg az adott felhasználónak, és mely hívásokhoz kér jóváhagyást.

A Tool Retrieval külön díj nélkül használható a Gemini 3.6-tól kezdődő modellekkel, köztük az összes Gemini 4 modellel. A `tool_search` egy kis állandó bemenetet ad a kéréshez, a ténylegesen betöltött sémák pedig a beszélgetés további részében normál inputtokenként számítanak. Emiatt kevés vagy szinte mindig használt eszköznél nem biztos, hogy megtakarítást hoz. A Google nem közölt független pontossági mérést, a funkció pedig még előnézeti státuszú.

**Források:** [Google – Tool Retrieval bejelentés és példák](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/), [Google – távoli MCP-szerverek a Gemini API-ban](https://ai.google.dev/gemini-api/docs/mcp), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/google-gemini-api-tool-retrieval-cuts-agent-token-costs-for-large-tool-libraries)
