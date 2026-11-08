---
title: "Az OpenCode Browse a bejelentkezett böngészőt adja oda a kódoló ügynöknek"
date: 2026-11-08
summary: "A nyílt forrású MCP-szerver és Chromium-bővítmény valódi lapokat, munkameneteket és emberi átadást kínál, komoly jogosultsági téttel."
category: kiadasok
tags: ["AI", "OpenCode", "fejlesztői eszközök", "AI-ügynökök"]
draft: false
hidden: false
---

Az OpenCode **Browse** nevű eszköze a felhasználó valódi, bejelentkezett böngészőjéhez engedi oda a kódoló ügynököt. Az MCP-szerverből és Chromium-bővítményből álló rendszer háttérlapokat nyit, Playwrighttal vezérli őket, képernyőképet és felvételt készíthet, valamint hálózati forgalmat menthet HAR-fájlba.

A kényes lépésekhez emberi átadást kínál: bejelentkezésnél, kétlépcsős azonosításnál vagy fizetésnél visszaadja a lapot a felhasználónak, majd folytathatja a munkát. Egy már megnyitott lap külön kölcsönadható az ügynöknek, a munkamenet pedig webhely-engedélylistával szűkíthető. A készítők szerint OpenCode, Claude Code, Cursor, Codex, Zed és más MCP-kliensek is használhatják.

A november 8-án kiadott 0.0.15-ös verzió több korai hibát javít: az ügynöki szkript hibája már nem állítja le mindenki munkáját, megbízhatóbb lett a Windows-párosítás és a Vivaldi-kezelés, a háttérlapokról készült képek pedig nem maradnak üresek. A kiadás aláírt csomagokat és ellenőrző összegeket is közöl; a projekt MIT-licencű.

A biztonsági modell helyi relayre, hozzáférési tokenre és egyszer használatos párosításra épül. Ez azonban nem független audit. A bejelentkezett böngésző nagy jogosultságot jelent, a lap tartalma és a képek pedig az ügynök beállított modell-szolgáltatójához kerülhetnek. Az engedélylista és a kézi átadás ezért nem kényelmi extra, hanem alapvető korlát.

**Források:** [OpenCode Browse](https://opencode.ai/product/browse), [GitHub-kiadás](https://github.com/anomalyco/browse/releases/tag/v0.0.15), [biztonsági leírás](https://github.com/anomalyco/browse/blob/dev/README.md#security)
