---
title: "Tizenöt tévéboxon futott az Anthropic AI-féregtesztjének modellje"
date: 2026-10-13
summary: "A kutatók egy 26 milliárd paraméteres modellt osztottak szét olcsó Android-eszközök között; teljes, valós AI-férget még nem hoztak létre."
category: elemzesek
tags: ["AI", "Anthropic", "modellek", "biztonság", "kutatás"]
draft: false
hidden: false
---

Egy nagyobb AI-modellhez nem feltétlenül kell adatközpont: az Anthropic kutatói a Gemma4-26B-A4B modellt 15, darabonként körülbelül 55 dolláros Android TV-box között osztották szét. A rendszer másodpercenként 0,39 tokent állított elő. Ez lassú, de azt mutatja, hogy sok gyengén védett eszköz együtt már használható számítási környezetet adhat.

A kutatás veszélyforgatókönyve egy AI-féreg, amely új célpontot talál, hozzáférést szerez, átmásolja a modell súlyait és futtatókörnyezetét, majd az új gépről folytatja a terjedést. A kisebb, legfeljebb 30 milliárd paraméteres modellek az egyes lépések közül már sokat megoldottak, de a teljes láncot gyakran elrontották. Egy 9 milliárd paraméteres modell kilenc hardvertípusból nyolcon el tudta indítani a modellfuttatást.

A látványos címkéhez fontos korlát tartozik. A végponttól végpontig tartó tesztet leegyszerűsítették: az eszközök ADB-portján nem volt hitelesítés, vagyis a behatolás nehéz részét kivették. Ebben a környezetben a GLM-5.2 és az erősebb modellek végig tudták vinni a replikációt. A 15 tévéboxos bemutató pedig az elosztott modellfuttatást igazolta, nem egy szabadon terjedő férget.

Az Anthropic szerint a kis modellek fejlődési üteme alapján az önálló replikáció hónapokon belül reálisabbá válhat. Ez előrejelzés, nem mért tény. A közvetlen tanulság jóval földhözragadtabb: az internetre kötött, ritkán frissített okoseszközök biztonsága az AI-korszakban is a teljes rendszer leggyengébb láncszeme marad.

*Források: [Anthropic – AI models may be capable of self-replicating without access to a datacenter](https://www.anthropic.com/research/self-replicating-ai); [Reuters](https://www.reuters.com/business/ai-models-may-soon-self-replicate-without-access-data-centers-anthropic-warns-2026-10-13/).*
