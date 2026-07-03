---
title: Így promptold a Claude Fable 5-öt
date: 2026-07-03
category: utmutatok
summary: Az Anthropic új útmutatót adott ki arról, miben tér el a Claude Fable 5 és a Claude Mythos 5 viselkedése a korábbi modellekhez képest, és hogyan érdemes ehhez igazítani a promptokat.
tags: [ai, claude, anthropic, prompt-engineering]
draft: false
---

Az Anthropic friss dokumentációt tett közzé a [Claude Fable 5 és a Claude Mythos 5 promptolásáról](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5), amely a Claude Opus 4.8-hoz képesti viselkedésbeli különbségeket és az ezekhez igazodó prompttechnikákat mutatja be.

Az új modellek kifejezetten hosszú, órákig vagy akár napokig tartó, önállóan végzett feladatokra lettek optimalizálva: jobban megtartják az utasításokat hosszú, komplex folyamatok során, pontosabban értelmezik a képi tartalmakat, és megbízhatóbban delegálnak feladatokat párhuzamos subagenteknek.

Az útmutató több gyakorlati mintát is ad fejlesztőknek. Ilyen például, hogy a Claude Fable 5 magasabb effort-szinten hajlamos túltervezni vagy szükségtelenül alaposan dokumentálni egy egyszerű feladatot is, ezért érdemes tömörségre vonatkozó instrukciót adni. Hosszú, autonóm futások esetén az Anthropic azt javasolja, hogy a modell minden állításáról valós eszközhasználati eredménnyel igazolja a haladást, hogy elkerülhető legyen a hamis állapotjelentés.

A dokumentum kitér arra is, hogy a Claude Fable 5 biztonsági osztályozói külön figyelik az offenzív kiberbiztonsági technikákat és az élettudományi tartalmakat, ezekben az esetekben a modell elutasíthatja a kérést – ilyenkor a fejlesztők automatikusan átirányíthatják a kérést a Claude Opus 4.8-ra.

Forrás: [Anthropic – Prompting Claude Fable 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5)
