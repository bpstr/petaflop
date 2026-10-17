---
title: "Időbélyegekre vezette vissza Claude öt NIST-görbe rejtélyes magját"
date: 2026-10-17
summary: "Az Anthropic belső kutatási modellje reprodukálható eljárást talált öt széles körben használt elliptikus görbe magjainak eredetére, de ez nem kriptográfiai feltörés."
category: elemzesek
tags: ["AI", "Anthropic", "Claude", "kutatás", "biztonság"]
draft: false
hidden: false
---

Az Anthropic szerint Claude fél órán belül megfejtette, hogyan keletkeztek a NIST P-192, P-224, P-256, P-384 és P-521 elliptikus görbéihez közzétett, évtizedek óta magyarázat nélkül álló magértékek. Egy belső kutatási modell 1997–1998-as Unix-időbélyegekre és a C-könyvtár `lrand48` pszeudovéletlenszám-generátorára vezette vissza őket.

A nyomot az adta, hogy négy mag több 32 bites szavának legfelső bitje nulla volt. Claude 34 generátor- és kimenetkombinációt vizsgált, majd a hiányzó állapotbiteket végigpróbálva visszafejtette a generátor állapotát. A prime görbékhez az LLL rácsbázis-redukciót is használta; a rekonstruált állapotok újra előállították a teljes, 160 bites magokat. Az Anthropic a reprodukáló kódot és a pontos időbélyegeket is közzétette.

Az eredmény nem támadás az ECDSA ellen, és nem teszi szükségessé kulcsok vagy algoritmusok cseréjét. Inkább gyengíti azt a régi gyanút, hogy a magokat rejtett gyengeség céljából választották. Ezt azonban egyelőre az Anthropic kutatói állítják; mi nem futtattuk le a reprodukciót.

Maradtak nyitott kérdések is. A B-163 bináris görbe magjára nem találtak magyarázatot, és a P-224, P-256, P-384, valamint P-521 bázispontjainak eredete sem ismert. A magokért kitűzött 36 864 dolláros jutalmat az Internet Security Research Group kapja.

**Forrás:** [Anthropic — Claude reveals ECDSA curve origins](https://www.anthropic.com/research/ecdsa-curve-origins)
