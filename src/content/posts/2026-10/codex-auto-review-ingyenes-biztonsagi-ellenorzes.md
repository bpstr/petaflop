---
title: "Ingyenesek a Codex Auto-review biztonsági ellenőrzései"
date: 2026-10-06
summary: "ChatGPT-fiókkal belépve az automatikus engedélyellenőrzés nem fogyasztja a használati keretet; a többi Codex-munka továbbra is igen."
category: kiadasok
tags: ["AI", "OpenAI", "ügynökök"]
draft: false
hidden: false
---

A Codexben már nem fogyasztják a használati keretet az Auto-review biztonsági ellenőrzései, ha a felhasználó ChatGPT-fiókkal jelentkezik be. Ezt az OpenAI október 6-án elérhető súgója és díjazási tájékoztatója is rögzíti. A változás azoknak lehet különösen hasznos, akik hosszabb ügynökfeladatok közben sok engedélykéréssel találkoznak.

Az Auto-review egy külön ellenőrzőre bízza az arra alkalmas műveletek jóváhagyását. Amikor a fő ügynök egyébként a felhasználó engedélyére várna, az ellenőrző megvizsgálhatja a tervezett lépést. Jóváhagyás után a munka folytatódhat; elutasítás esetén a Codex biztonságosabb megoldást kereshet, vagy visszakérdezhet. Így az engedélykérések egy része emberi kattintás nélkül kezelhető.

Ez nem az elkészült kód szakmai felülvizsgálata. Az ingyenesség a műveletek biztonsági ellenőrzésére vonatkozik, nem a teljes fejlesztésre vagy minden kódreview-ra. A többi Codex- és ChatGPT Work-tevékenység továbbra is a csomaghoz tartozó keretet vagy az alkalmazható krediteket használja. Az API-kulcsos használatra a ChatGPT-bejelentkezéshez kötött feltételből nem következik díjmentesség.

A kapcsoló a Settings → Permissions → Auto-review útvonalon érhető el. Bekapcsolása nem írja felül a munkaterület korlátozásait, és nem vált ki minden jóváhagyási kérdést. A hosszabb futás tehát kevésbé szakadozhat meg, de a fejlesztőnek továbbra is meg kell határoznia, milyen feladatra és milyen hozzáféréssel indítja el az ügynököt.

*Források: [OpenAI – Codex és Auto-review](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan), [OpenAI – a használati keret és a díjmentes ellenőrzések](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-personal-plans).*
