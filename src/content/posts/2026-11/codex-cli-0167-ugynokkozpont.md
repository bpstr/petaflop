---
title: "A Codex CLI már külön szerver nélkül is megnyitja az ügynökközpontot"
date: 2026-11-09
summary: "A 0.167.0-s kiadás az olvasatlan ügynökeredményeket, a háttérrendszerek közti váltást és a helyi képek előnézetét is kezeli."
category: kiadasok
tags: ["AI", "OpenAI", "Codex", "fejlesztők"]
draft: false
hidden: false
---

Az OpenAI november 6-án kiadta a **Codex CLI 0.167.0** verzióját. A legfontosabb változás, hogy az ügynökközpont a `codex agents --no-daemon` paranccsal közös háttérszerver nélkül is megnyitható. Az ügynökközpont és a munkamenet-választó már jelzi az olvasatlan eredményeket, így könnyebb észrevenni, ha egy párhuzamosan futó feladat befejeződött.

A terminálos munkamenet-választóban ezentúl a kapcsolódó háttérrendszerek között is lehet váltani úgy, hogy a félbehagyott piszkozat megmarad. Támogatott terminálokon megjelent a helyi képmellékletek előnézete, a már megnyitott képek pedig kattintható útvonalról újra elérhetők. A „Sign in another way” menüben az API-kulcsos és felhőszolgáltatói belépési lehetőségek is egy helyre kerültek; a Google Cloud Vertex AI beállítóvarázslója külön kísérleti kapcsolóval aktiválható.

A kiadás tehát elsősorban a több ügynök és több háttér egyidejű felügyeletét teszi rendezettebbé, nem új kódolómodellt vezet be. A hivatalos jegyzet nem ad teljes terminál-kompatibilitási listát, a Vertex-varázsló pedig alapból nincs bekapcsolva. A frissítésben dokumentációs és erőforrás-használati módosítások is vannak, de a fő felhasználói változás az elkészült ügynökmunkák láthatóbb kezelése.

**Forrás:** [OpenAI Codex – 0.167.0 kiadási jegyzet](https://github.com/openai/codex/releases/tag/rust-v0.167.0)
