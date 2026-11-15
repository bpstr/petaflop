---
title: "Központi jóváhagyást és időkorlátokat kapott a Vercel WorkflowAgentje"
date: 2026-11-15
summary: "Az AI SDK 7.0.173 a tartós ügynöki munkafolyamatokban is lehetővé teszi az eszközhívások felülbírálását, valamint külön időkeretet ad a modelllépésekhez és a streameléshez."
category: kiadasok
tags: ["AI", "Vercel", "AI SDK", "AI-ügynökök"]
draft: false
hidden: false
---

A Vercel november 13-án kiadta az **AI SDK 7.0.173-at**, amely két fontos vezérlőt ad a tartós ügynöki folyamatokat futtató `WorkflowAgenthez`: központi eszközjóváhagyást és részletes időkorlátokat.

Az új `toolApproval` szabály felülírhatja az egyes eszközök saját `needsApproval` beállítását. A jóváhagyott hívás ugyanabban a lépésben futhat tovább, az elutasított pedig `execution-denied` eredményt kap anélkül, hogy az egész munkafolyamat várakozó állapotba kerülne. Ez hasznos, ha egy alkalmazás egyetlen helyen akarja szabályozni például a fájlírást vagy a külső műveleteket. Ugyanakkor maga a funkció nem biztonsági bizonyíték: a szabályok minősége és az eszközök jogosultságai továbbra is az integrátor felelőssége.

A `timeout` most objektumként is megadható. Külön korlát járhat a teljes futásra, egy modellhívásra, az első streamelt részletre és két részlet közötti várakozásra. A kiadás akkor is lezárhat egy modelllépést, ha a szolgáltató streamje nem reagál megfelelően a megszakítási jelre. A csomag emellett javítja a jóváhagyott argumentumok visszajátszását, hogy a sémaellenőrzés ne módosítsa őket helyben. Így a naplózott jóváhagyás és a tényleges hívás könnyebben összevethető.

**Forrás:** [Vercel AI SDK 7.0.173 kiadási jegyzet](https://github.com/vercel/ai/releases/tag/ai%407.0.173).
