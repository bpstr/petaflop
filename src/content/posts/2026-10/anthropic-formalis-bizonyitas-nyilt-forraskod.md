---
title: "Claude formális bizonyítással igazolt 239 nyílt forrású belépési pontot"
date: 2026-10-23
summary: "Az Anthropic és a Theorem Labs géppel ellenőrizhető bizonyításokat készített 123 könyvtárhoz, de a módszer szűk, pontosan rögzített feltételek között garantál hibamentes futást."
category: elemzesek
tags: ["AI", "Claude", "kutatás", "biztonság"]
draft: false
hidden: false
---

Az Anthropic és a Theorem Labs 123, az OSS-Fuzz rendszerben szereplő nyílt forrású könyvtár 239 belépési pontjához készített formális bizonyítást. A munka nagy részét Claude generálta, az eredményt pedig a Rocq bizonyításellenőrző géppel ellenőrizte. A kutatók mintegy 180 millió sor bizonyítási kódot említenek.

Ez nem ugyanaz, mint sok tesztet lefuttatni. A formális bizonyítás matematikai állítássá alakítja a program elvárt viselkedését, majd ellenőrzi, hogy az adott modellben minden megengedett bemenetre teljesül-e. A csapat azt bizonyította, hogy a kiválasztott függvények 64 megabájtnál kisebb bemeneteken nem omlanak össze, nem sértik meg a modellezett memóriabiztonsági szabályokat, és nem futnak bele sikertelen állításokba.

A garancia határai legalább ilyen fontosak. A bizonyítások egyetlen szálon futó, statikusan linkelt RISC-V programokra, rögzített memóriára és modellezett Linux-rendszerhívásokra vonatkoznak. Nem állítják, hogy a könyvtárak minden platformon hibamentesek, vagy hogy üzleti logikai és titkosítási hibáktól mentesek.

A folyamat közben több száz valódi hibát is találtak; néhányat javítottak, köztük egy később CVE-azonosítót kapó problémát. Ez arra utal, hogy a nyelvi modell itt nem a bizonyítás hitelesítője, hanem gyors bizonyításjelölt-gyártó: a végső igen vagy nem választ egy külön, determinisztikus ellenőrző adja. A közzétett tároló a bizonyítások egy részét és a használt szemantikát is tartalmazza.

**Források:** [Anthropic](https://www.anthropic.com/research/formal-verification), [Theorem Labs – bizonyítástár](https://github.com/theorem-labs/oss-verify), [AlphaSignal](https://alphasignal.ai/news/anthropic-s-claude-proves-239-open-source-libraries-crash-free-exposing-fuzzing)
