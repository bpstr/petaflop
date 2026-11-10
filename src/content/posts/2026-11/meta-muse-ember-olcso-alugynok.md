---
title: "A Muse Ember az ismétlődő ügynökfeladatokat célozza alacsony tokenárral"
date: 2026-11-10
summary: "A Meta legkisebb Muse-modellje egymillió tokenes kontextussal és kedvező listaárral vállalna eszközhívásokat, kivonatolást és kódolási részfeladatokat."
category: kiadasok
tags: ["AI", "Meta", "Muse", "modellek", "AI-ügynökök"]
draft: false
hidden: false
---

A Meta november 9-én bemutatta a **Muse Ember** modellt, amelyet nem a legnehezebb tervezési feladatokra, hanem az ügynökök sokszor ismétlődő lépéseire szán. Ilyen lehet az eszközhívás, az útválasztás, a kivonatolás, a dokumentumok feldolgozása vagy egy nagyobb kódolási munka részfeladata.

A `muse-ember-1.0` a Muse Code-ban és a Meta Model API-n érhető el. Legfeljebb egymillió tokenes kontextust és 512 ezer kimeneti tokent kezel, támogatja a Responses API-t, valamint szöveget, képet, hangot és videót is fogad. A legfeljebb 200 ezer tokenes kérések listaára egymillió bemeneti tokenenként 0,10, gyorsítótárazott bemenetnél 0,004, kimenetnél 0,50 dollár. Hosszabb kéréseknél mindhárom díj háromszorosára nő.

A Meta szerint az Ember a saját ügynökös és számítógép-használati mérésein több nagyobb modellt is megelőzött, miközben a valós kódváltoztatásokat értékelő FrontierCode 2.0 teszten elmaradt a Claude Haiku 5.5-től. Ez fontos határ: az olcsó alügynök nem automatikusan jó választás összetett, összeolvasztásra kész kódhoz.

A közölt összehasonlítások a Meta és partnerei mérései, eltérő ügynökkeretekkel és munkaterhelésekkel. A tényleges megtakarítást ezért a sikeres feladatok, az újrapróbálkozások, a késleltetés és a teljes tokenfogyasztás együtt dönti el, nem pusztán az alacsony listaár.

**Források:** [Meta AI Research](https://research.meta.ai/blog/muse-ember), [TechCrunch](https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/), [AlphaSignal – a történet felfedezési forrása](https://alphasignal.ai/news/meta-releases-muse-ember-to-cut-ai-agent-costs-by-3x)
