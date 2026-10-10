---
title: "A Claude már maga írhat többügynökös munkafolyamatot"
date: 2026-10-10
summary: "A Claude Managed Agents bétájában az ügynök programot állíthat össze a részfeladatok párhuzamosítására, miközben a szerver a háttérben futtatja és eseményekkel követhetővé teszi a munkát."
category: kiadasok
tags: ["AI", "Anthropic", "Claude", "ügynökök", "kódolás"]
draft: false
hidden: false
---

A több száz dokumentumot vagy sok különálló ellenőrzést feldolgozó ügynöknek eddig a fő beszélgetésből kellett kiosztania és összefognia a részfeladatokat. Az Anthropic október 9-én dinamikus munkafolyamatokkal bővítette a Claude Managed Agents bétáját: az ügynök most maga írhat egy programot, amely több másik ügynököt futtat szakaszokban, majd összesíti az eredményüket.

Ez nem egyszerűen több alügynök indítása. Az alügynökök szálai megmaradnak, így a koordinátor később visszakérdezhet tőlük. A dinamikus munkafolyamat ezzel szemben háttérfolyamatként fut a szerveren; a program adja tovább a kontextust és az eredményeket, a fő szál pedig közben a felhasználóval kommunikálhat. A futás egyes szakaszai és szálai külön megfigyelhetők, de befejezés után archiválódnak, és utólagos kérdést már nem lehet nekik küldeni.

A funkcióhoz a `managed-agents-2026-04-01` bétafejléc és a `multiagent_20261001` konfiguráció szükséges. A fejlesztő korlátozhatja, hogy a munkafolyamat előre létrehozott vagy menet közben definiált ügynököket használjon. A dokumentáció költségkorlát beállítását is javasolja, mert minden résztvevő ügynök külön tokeneket fogyaszt.

A változás auditoknál, migrációknál vagy nagy kutatási feladatoknál lehet hasznos, ahol a munka valóban jól szeletelhető. Rövid, egymásra épülő feladatnál a plusz koordináció és költség könnyen nagyobb lehet a nyereségnél. A funkciót nem próbáltuk ki; a leírás az Anthropic jelenlegi bétadokumentációján alapul.

*Források: [Anthropic – Claude Platform kiadási jegyzetek](https://platform.claude.com/docs/en/release-notes/overview); [Anthropic – többügynökös koordináció](https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration); [Anthropic – workflow runok](https://platform.claude.com/docs/en/managed-agents/workflow-runs).*
