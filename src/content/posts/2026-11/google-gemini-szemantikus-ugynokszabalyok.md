---
title: "Külön AI-bíróval szűri az ügynökök eszközhívásait a Google"
date: 2026-11-21
summary: "A Google előnézeti szabályrétege futtatás előtt veti össze az ügynök javasolt eszközhívásait a felhasználói szándékkal és a vállalati előírásokkal."
category: kiadasok
tags: ["AI", "Google", "Gemini", "AI-ügynökök", "biztonság"]
draft: false
hidden: false
---

A Google november 20-án előnézetben megnyitotta a **Semantic governance policies** funkciót a Gemini Enterprise Agent Platformon. A rendszer az AI-ügynök minden tervezett eszközhívását még a végrehajtás előtt két feltételhez méri: megfelel-e az eredeti felhasználói kérésnek, és nem sérti-e a természetes nyelven megírt vállalati szabályokat.

Ez más feladatot végez, mint a hagyományos jogosultságkezelés. Az IAM eldöntheti, hogy egy ügynök elérheti-e a levelezést, de azt nem, hogy egy konkrét címzettnek szabad-e elküldenie egy még nem nyilvános pénzügyi adatot. Az új ellenőrzés az Agent Gateway-ben ül az ügynök és a modell között. Ha egy művelet elbukik, az eszközhívás helyett beállítható tiltó üzenetet ad vissza; az ítéletet és az indoklást a Cloud Logging rögzíti.

A szabályréteg nem csak Gemini-modellekkel használható. A dokumentáció szerint a gateway mögött Anthropic Messages API, OpenAI-kompatibilis végpont vagy saját vLLM-szerver is lehet. A funkció jelenleg kizárólag az Agent Gatewayt támogatja, és az ügynök teljes kimenő forgalmát ezen kell átvezetni.

A legfontosabb korlát maga az ellenőr: a döntést egy nyelvi modell hozza, ezért valószínűségi alapon működik és tévedhet. A Google először naplózó, úgynevezett dry run módban javasolja kipróbálni, és nem tekinti a meglévő hozzáférés-, adatvédelmi vagy jogi kontrollok helyettesítőjének. A csak szöveget tartalmazó, illetve streamelt válaszokat a mostani előnézet nem ellenőrzi; a kapu a végrehajtható műveletekre koncentrál.

**Források:** [Google Developers Blog](https://developers.googleblog.com/check-what-your-ai-agents-do-before-they-do-it-with-semantic-governance-policies/), [Google Cloud dokumentáció](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/policies/semantic-governance-overview)
