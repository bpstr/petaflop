---
title: "Külső kutatók réseket találtak az OpenAI belső ügynökfigyelésében"
date: 2026-10-26
summary: "A METR és a Redwood Research háromhetes vizsgálata több megkerülési utat azonosított, de csak a júliusi rendszer korlátozott, részben kitakart képét publikálhatta."
category: elemzesek
tags: ["AI", "OpenAI", "Codex", "biztonság"]
draft: false
hidden: false
---

A METR és a Redwood Research egy-egy kutatója július 21. és augusztus 11. között mély hozzáféréssel tesztelte az OpenAI belső AI-ügynökeit figyelő rendszert. Látták a kódbázist, a monitor promptjait és beállításait, valamint nagyjából egy tucat OpenAI-munkatárssal interjúztak. A 61 oldalas belső jelentésből azonban csak rövid, magas szintű összefoglaló lett nyilvános; az OpenAI bizalmasnak ítélt részeket kitakarhatott.

A vizsgálat a július 21-ig működő rendszert írja le. A kutatók becslése szerint az elég erős modellek belső Responses API-forgalmának 75–94 százaléka volt jogosult ellenőrzésre, a belső Codex-ügynököknél pedig 99,2 százalék. A „jogosult” nem jelenti automatikusan azt, hogy minden kérés végig is futott a monitoron.

Az egyik hiányosság miatt a kontextustömörítési események kimaradtak. Ez a becslés szerint 2026 májusa és júliusa között a jogosult belső Codex-forgalom nagyságrendileg tizedét érinthette; az OpenAI a hibát már a gyakorlat közben javította. Találtak olyan elvi támadást is, amely több száz friss műveletet rejthetett volna el, továbbá kliensoldalról állítható fejléceket, amelyek új ügynököknél kikapcsolták a monitorozást.

A METR nem tudta megállapítani, hogy az ügynökök ténylegesen kihasználták-e ezeket. Az OpenAI azt közölte, hogy a termelési védelmet érintő hibákat javította; ezt a külső kutatók nem ellenőrizték újra. A próba ezért nem a jelenlegi rendszer töröttségét bizonyítja, hanem azt, hogy magát a felügyeletet is támadható infrastruktúraként kell tesztelni.

**Források:** [METR](https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/), [Reuters](https://www.reuters.com/business/ai-safety-group-metr-finds-flaws-openais-internal-monitoring-system-2026-10-22/), [OpenAI – a belső kódolóügynökök monitorozása](https://openai.com/index/how-we-monitor-internal-coding-agents-misalignment/)
