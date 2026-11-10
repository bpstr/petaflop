---
title: "35 másodpercen belül leállítja a kutatási modellfutásokat az OpenAI Control Room"
date: 2026-11-10
summary: "Az OpenAI központi engedélyezési rendszere minden kutatási következtetési kérés előtt ellenőrzi, folytathatja-e a modellfutás a kimenet előállítását."
category: hirek
tags: ["AI", "OpenAI", "biztonság", "infrastruktúra"]
draft: false
hidden: false
---

Az OpenAI november 9-én bemutatta a **Control Room** rendszert, amellyel központilag állíthatja le a kutatási infrastruktúráján futó modellterheléseket. A vállalat szerint a leállítási döntés beérkezésétől legfeljebb 35 másodperc telik el addig, hogy a futás már ne tudjon további modellkimenetet előállítani.

A megoldás nem magát a kutatói programot próbálja megbízhatóvá tenni. Induláskor minden ügynökös következtetést végző munkamenet egy jóváhagyott biztonsági esethez kötött `job_id` azonosítót kap. Ezt minden mintavételi kéréshez továbbítja, a közös modellkiszolgáló pedig még a válasz előtt engedélyt kér a Control Roomtól. Ha az azonosítót leállították, a kiszolgáló megtagadja a következő kérést; a folyamat és a modell más, engedélyezett munkák számára tovább élhet.

A 35 másodperc a gyorsítótárazott engedélyekből adódó felső határ, nem a veszély felismerésének teljes ideje. A rendszer hatása attól is függ, hogy minden következtetési út valóban végrehajtja-e az ellenőrzést. Meghibásodáskor a Control Room zártan viselkedik: ha maga a szolgáltatás elérhetetlen, az érintett motorok nem adnak ki új választ.

Ez belső kutatási biztonsági infrastruktúra, nem ügyfeleknek szánt termék és nem általános „vészkapcsoló” a ChatGPT-hez. Az OpenAI szerint a rendszert már bevezette kutatási infrastruktúráján; a külső modellkiszolgálást külön, eleve központosított leállítási eljárások védik.

**Források:** [OpenAI](https://openai.com/index/control-room/), [AlphaSignal – a történet felfedezési forrása](https://alphasignal.ai/news/openai-s-control-room-stops-rogue-ai-models-in-35-seconds)
