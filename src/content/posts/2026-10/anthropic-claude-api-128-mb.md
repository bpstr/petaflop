---
title: "Négyszer nagyobb kéréseket fogad a Claude API"
date: 2026-10-30
summary: "Az Anthropic 32-ről 128 MB-ra emelte a Messages és a Token Counting végpontok kérésméretét, de ettől a modellek kontextusablaka nem nőtt meg."
category: kiadasok
tags: ["AI", "Anthropic", "Claude", "API"]
draft: false
hidden: false
---

Az Anthropic október 28-án 32-ről 128 MB-ra emelte a Messages API és a Token Counting API legnagyobb kérésméretét a saját Claude API-ján. A változás elsősorban azoknak a fejlesztőknek számít, akik képeket, hosszú dokumentumokat vagy terjedelmes eszközleírásokat küldenek egyetlen kérésben: a teljes, szerializált HTTP-kérésnek kell beleférnie a keretbe.

A négyszeres emelés nem négyszeres kontextusablakot jelent. A modell továbbra is a kiválasztott változat tokenkorlátja szerint dolgozik, a base64-be csomagolt fájlok pedig a nyers méretüknél több helyet foglalhatnak. Vagyis egy 128 MB alatti kérés is elbukhat, ha tokenben túl hosszú, és a fájlfeltöltés továbbra is takarékosabb lehet az ismételten használt mellékleteknél.

Az Anthropic dokumentációja külön plafont ad a Batch API-nak, 256 MB-ot, valamint a Files API-nak, 500 MB-ot. A 128 MB-os határ kifejezetten az első fél által üzemeltetett Claude API-ra vonatkozik; a felhős közvetítők saját korlátokat alkalmazhatnak. Átállás előtt ezért az adott szolgáltató dokumentációját is érdemes ellenőrizni. A bővítés kényelmesebb bemeneti csomagolást ad, nem új modellképességet.

*Forrás: [Anthropic kiadási jegyzetek](https://platform.claude.com/docs/en/release-notes/overview), [Claude API-hibák és méretkorlátok](https://platform.claude.com/docs/en/api/errors), [AlphaSignal Latest](https://alphasignal.ai/)*
