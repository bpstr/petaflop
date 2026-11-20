---
title: "Kivárással olcsóbb lett a hosszú OpenAI API-feladat"
date: 2026-11-20
summary: "A Responses API két- és nyolcórás teljesítési ablaka 30, illetve 40 százalékkal csökkenti a modelltokendíjat, cserébe az eredmény nem azonnal érkezik."
category: kiadasok
tags: ["AI", "OpenAI", "API", "hosszú munkafolyamatok", "fejlesztők"]
draft: false
hidden: false
---

Az OpenAI november 16-án nyilvános bétában két kedvezményes teljesítési ablakot adott a **Responses API** háttérfeladataihoz. A kétórás ablakban a modelltokendíj 30, a nyolcórásban 40 százalékkal alacsonyabb a Standard feldolgozás áránál. A lehetőség jelenleg a GPT-6.2 Astra és Sol, a GPT-6.1 Terra, valamint a GPT-6 Luna modellekkel használható.

Ez nem gyorsabb API, hanem ár–idő csere. A kérésben a `background: true` mellé a `background_options.completion_window` mezőben `2h` vagy `8h` értéket kell megadni. A szolgáltatás ezen belül célozza meg az első válasz elkészítését; ez teljesítési cél, nem percre pontos ígéret. A kedvezmény Standard feldolgozást és kikapcsolt streamelést kér.

Hosszabb ügynökfolyamatnál a modell eszközhívást kérhet, majd az alkalmazás egy új háttérkéréssel folytathatja a munkát. Azonos ablak, modell, projekt és `continuation_id` mellett a kapcsolódó lépések magasabb sorprioritást kaphatnak, a jogosult követőkérésekre pedig ugyanaz a tokenkedvezmény vonatkozik. Ez éjszakai dokumentumellenőrzésnél, nagyobb kódelemzésnél vagy reggeli riportnál hasznosabb, mint interaktív csevegésnél.

Két korlát könnyen elsikkad. A kedvezményes feladatok a Batch API-val közös Batch/Background keretet fogyasztják, az inputtokeneket már beküldéskor elszámolják. A hozzájuk létrejött gyorsítótár-bejegyzést egy normál Standard kérés nem tudja újrahasználni. A háttérmód emellett átmenetileg akkor is tárolja a kérés és a válasz adatait, ha az alkalmazás `store: false` beállítást vagy Zero Data Retentiont használ; az OpenAI szerint ezeket nyugalmi állapotban titkosítja.

A 30 és 40 százalék kizárólag a támogatott kérések modelltokendíjára vonatkozik. A dokumentáció nem ígér ugyanekkora teljes költségcsökkenést, és a megadott ablak nem helyettesíti a hibakezelést, a webhook-ellenőrzést vagy az eredmény szakmai átnézését.

**Források:** [OpenAI háttérmód dokumentáció](https://developers.openai.com/api/docs/guides/background), [OpenAI API-változási napló](https://developers.openai.com/api/docs/changelog), [OpenAI API-árazás](https://developers.openai.com/api/docs/pricing)
