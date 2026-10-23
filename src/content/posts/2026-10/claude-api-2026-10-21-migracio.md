---
title: "Kódmódosítást kér a Claude API új főverziója"
date: 2026-10-23
summary: "A 2026-10-21-es Claude API elhagy több mintavételi paramétert és régi válaszmezőt; az új SDK-k már alapból ezt a verziót küldik."
category: kiadasok
tags: ["AI", "Anthropic", "Claude", "kódolás"]
draft: false
hidden: false
---

Az Anthropic október 21-én kiadta a Claude API `2026-10-21` verzióját, vele együtt pedig több klienskönyvtár új főverzióját. A Python SDK 2.0.0, a TypeScript SDK 1.0.0 és az `ant` CLI 2.0.0 már ezt az API-verziót küldi alapértelmezésként. A frissítés ezért fordítási hibát vagy HTTP 400-as választ is okozhat ott, ahol a korábbi felület sajátosságaira épült a kód.

A Messages API-ból eltűnt a `temperature`, a `top_p` és a `top_k`. Közvetlen `document` blokk többé nem kerülhet asszisztensi üzenetbe, felhasználói szövegblokkhoz pedig nem adható nem üres `citations` tömb. Az Admin API több válaszmezőt is átnevezett: például az API-kulcsok `workspace_id` mezője helyett a `scope` szerkezetet kell olvasni.

Az SDK-váltás önálló törést is hoz. A kliensek az API-kulcsot már `Authorization: Bearer` fejlécben küldik az `X-Api-Key` helyett, ezért a köztes proxykat, naplószűrőket és tesztstubokat is ellenőrizni kell. A TypeScript- és Ruby-eszközfuttatóból eltűnt a kliensoldali tömörítés, amelyet a szerveroldali compaction vált fel. Az új SDK-k és a CLI licence MIT-ről Apache 2.0-ra változott.

A nyers HTTP-kérések verzióját továbbra is az `anthropic-version` fejléc választja ki, tehát az átállás tervezhető. Amazon Bedrockon az új verzió csak Claude 4.7-es és újabb modellekkel használható. Az Anthropic kifejezetten azt kéri, hogy a csapatok a kódmódosításokkal együtt teszteljék, majd egyben adják ki a frissítést.

**Források:** [Claude Platform változásnapló](https://platform.claude.com/docs/en/release-notes/overview), [migrációs útmutató](https://platform.claude.com/docs/en/api/migration-2026-10-21), [API-verziók](https://platform.claude.com/docs/en/api/versioning)
