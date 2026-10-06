---
title: "Mistral Large 4: kipróbálható az API, a modellsúlyokra még várni kell"
date: 2026-10-06
summary: "A Le Chonk néven bemutatott multimodális modell egymillió tokenes kontextust kínál; a letölthető súlyokat október végére ígérik."
category: kiadasok
tags: ["AI","modellek"]
draft: false
hidden: false
---

A Mistral október 6-án megnyitotta a Large 4 nyilvános API-előnézetét. A Le Chonk becenevű modell szövegek és képek feldolgozására készült, a dokumentáció szerint egymillió tokenes kontextussal. Ez hosszú dokumentumok és összetett feladatok bemenetének kezelését segítheti; nem egymillió tokenes válasz ígéretét jelenti.

A dokumentáció 1,05 billió összes és 49 milliárd aktív paramétert ad meg. A mixture-of-experts felépítésben egy-egy feldolgozási lépés a teljes modellnek csak egy részét használja. A kisebb aktív szám ezért nem azonos a modell teljes tárolási igényével. A fejlesztői felületen strukturált kimenet, függvényhívás és dokumentumokkal kapcsolatos kérdés-válasz funkció is szerepel.

A mostani hozzáférés és a későbbi saját üzemeltetés között fontos időbeli különbség van. A Mistral Studio API-ja már kipróbálható, a súlyok kiadását viszont október végére ígéri a cég. A mai bejelentést ezért nem érdemes kész, letölthető modellként kezelni.

A Mistral kódolási, képfeldolgozási és szakmai feladatokban közöl erős eredményeket, ezekből azonban itt nem hirdetünk általános győztest. A közzétett képességek gyártói leírások, nem a Petaflop saját tesztjei. Aki beépítené, annak elsőként a saját dokumentumain és eszközhívásain érdemes ellenőriznie, mit jelent a gyakorlatban az előnézet.

*Források: [Mistral – bejelentés](https://mistral.ai/news/mistral-large-4/), [Mistral Large 4 – dokumentáció](https://docs.mistral.ai/models/mistral-large-4).*
