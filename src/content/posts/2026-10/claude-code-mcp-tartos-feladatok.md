---
title: "A Claude Code már újracsatlakozik a hosszú MCP-feladatokhoz"
date: 2026-10-24
summary: "A nyilvános bétában a szerver oldali munka túlélheti a terminál bezárását, a folyamat közben pedig szabványos űrlapon vagy böngészős belépéssel kérhet emberi választ."
category: kiadasok
tags: ["AI", "Claude Code", "MCP", "fejlesztés"]
draft: false
hidden: false
---

A Claude Code parancssori kliensében nyilvános bétába került az MCP Tasks támogatása. Egy kompatibilis Model Context Protocol-szerver így nem tart nyitva órákon át egyetlen eszközhívást: gyorsan visszaad egy feladatazonosítót, a munkát saját oldalán folytatja, a kliens pedig állapotlekérésekkel követi. Távoli szervernél a feladat a Claude Code bezárása után is futhat, és ugyanaz a munkamenet később a `claude --resume` paranccsal visszakapcsolódhat hozzá.

A párja az elicitation, vagyis a futás közben kért emberi adat vagy jóváhagyás. A szerver strukturált űrlapot jeleníthet meg, illetve böngészőben megnyitható URL-t adhat például OAuth-belépéshez. Jelszót vagy hozzáférési tokent nem érdemes űrlapmezőben kérni; az érzékeny hitelesítést a külső böngészős folyamatra kell bízni.

A támogatás feltételes. Legalább Claude Code 2.1.304 és a 2026-07-28-as MCP-protokollverzió szükséges. Jelenleg a terminálos kliensben, az Agent SDK-ban és a GitHub Actions-futtatásokban működik, a VS Code-bővítményben és az asztali alkalmazásban nem. Alügynök eszközhívása sem válik MCP-feladattá.

A tartósság felelőssége részben a szerveré: meg kell őriznie az azonosítót és az eredményt, az ismételt lekérdezéseket és megszakításokat pedig biztonságosan kell kezelnie. Ha újracsatlakozáskor a szerver már nem ismeri a feladatot, a kimenetel bizonytalan lehet, ezért a vak újrapróbálás megismételhet egy már végrehajtott műveletet.

**Források:** [Claude Code dokumentáció](https://code.claude.com/docs/en/mcp), [MCP Tasks specifikáció](https://modelcontextprotocol.io/extensions/tasks/overview), [AlphaSignal](https://alphasignal.ai/news/anthropic-lets-claude-code-run-hours-long-jobs-without-dropping-them)
