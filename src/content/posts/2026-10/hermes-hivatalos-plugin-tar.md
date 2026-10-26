---
title: "Egy közös tárba költözött a Hermes 18 hivatalos bővítménye"
date: 2026-10-26
summary: "A Nous Research külön frissíthető pluginekbe szervezte a Hermes integrációit, a katalógus pedig ellenőrzött commitokra rögzíti a telepítést."
category: kiadasok
tags: ["AI", "Hermes", "ügynökök", "nyílt forráskód"]
draft: false
hidden: false
---

A Nous Research egy MIT-licencű tárolóban egyesítette a Hermes Agent 18, saját maga által karbantartott bővítményét. A változás szétválasztja az ügynök általános magját — a memóriát, modellútválasztást és eszközfuttatást — az egyes szolgáltatásokhoz tartozó integrációktól.

A csomagban többek között Home Assistant-, Spotify-, Blender-, Snyk-, Langfuse-, Meshy- és TouchDesigner-kapcsolat található. A katalógusból egy paranccsal telepíthetők, de nem lebegő főágat kap a felhasználó: minden bejegyzés ellenőrzött commitra mutat. A kliens ritkított, csak az adott könyvtárat lehúzó klónozást használ, így például a Spotify-plugin telepítése nem másolja le a teljes gyűjteményt.

Ez nem teszi egyformán kockázatmentessé a bővítményeket. A Blender-integráció Python-kódot futtat a szerkesztőben, a Snyk és a Meshy külső fiókot kér, utóbbi pedig fizetős krediteket használ. A Claude Subscription DirectSDK kísérleti, a bejelentkezett Claude Code CLI-n keresztül fut, és Pro vagy Max előfizetés szükséges hozzá. A leírás szerint a Meshy minden kreditet fogyasztó hívás előtt jóváhagyást kér.

A korábbi külön tárolók archiválásra kerülnek, a katalógus pedig az új helyre mutat. Az egyetlen lényeges kézi migráció az MCP Serve parancsát érinti; más beépített vagy katalógusból telepített plugineket a frissítés visz tovább. A kiadást dokumentáció alapján ellenőriztük, telepítési próbát nem végeztünk.

**Források:** [Nous Research – GitHub](https://github.com/NousResearch/hermes-official-plugins), [AlphaSignal – felfedezés](https://alphasignal.ai/news/nous-research-unifies-18-hermes-agent-plugins-in-one-open-repository)
