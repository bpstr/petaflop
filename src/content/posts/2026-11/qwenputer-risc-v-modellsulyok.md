---
title: "RISC-V processzort fordított egy fejlesztő a Qwen3.5 súlyaiba"
date: 2026-11-03
summary: "A Qwenputer tizenegy rögzített transzformerrétegként futtat programokat, miközben a modell többi része a feladat értelmezését és a válasz megfogalmazását végzi."
category: elemzesek
tags: ["AI", "Qwen", "modellek", "kódolás", "nyílt forráskód"]
draft: false
hidden: false
---

A Qwenputer nem egyszerűen meghív egy számológépet. Divyansh Agrawal egy 32 bites RISC-V processzort fordított a Qwen3.5-4B tizenegy transzformerrétegébe, így a modell előrehaladása közben C- és MicroPython-programok futnak. A [modellkártya](https://huggingface.co/divagr1925/Qwen3.5-4B-Qwenputer) szerint ezek a rétegek rögzítettek, nem tanítással alakultak ki; a Gated DeltaNet állapota szolgál memóriaként.

A szerző a hivatalos RISC-V tesztek futtatását és mintegy 230 ezer, referenciaemulátorral összevetett processzorállapot hibátlan egyezését közli. Egy saját, negyvenfeladatos számtani mérésben a Qwenputer 97,5 százalékot ért el a kiinduló modell 55 százalékával szemben. Ezek készítői eredmények, nem független benchmarkok, és a kis teszt nem bizonyít általános érvelési fölényt.

A „súlyokba fordított számítógép” sem jelent teljesen önálló modellt. A futtatáshoz egy egyedi `RvChat` vezérlő és Triton-végrehajtó kell; a modellkártya Nvidia L4-en körülbelül 3200 nyomkövetési tokent mér másodpercenként. A 18,8 gigabájtos bf16 állomány nagy része nullás kitöltés, maga a beágyazott számítógép nagyjából egymillió nem nulla súlyból áll.

A modell Apache 2.0 alatt tölthető le, a kapcsolódó [kód MIT-licencű](https://github.com/divagr1925/Qwen3.5-4B-Qwenputer), de kész hosztolt szolgáltatás nincs. A kísérlet értéke inkább az ötletben van: megmutatja, hogy egy neurális háló rétegei tanult mintázatfelismerés mellett pontos, hagyományos gépi végrehajtást is hordozhatnak.
