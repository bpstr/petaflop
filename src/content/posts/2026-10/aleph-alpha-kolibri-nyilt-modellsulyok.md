---
title: "Letölthető a Kolibri, az Aleph Alpha németre hangolt nyelvi modellje"
date: 2026-10-04
summary: "A német és angol szövegekre készített modell súlyai Apache 2.0 licenccel hozzáférhetők, de a kis aktív paraméterszám mellé nagy memóriaigény társul."
category: kiadasok
tags: ["AI", "kódolás"]
draft: false
hidden: false
---

Az Aleph Alpha október 3-án közzétette a Kolibri-1 modellsúlyait a Hugging Face-en, Apache 2.0 licenccel. A német és angol nyelvre összpontosító modell dokumentumfeldolgozáshoz, kódoláshoz és külső eszközök meghívásához készült; megfelelő hardveren saját infrastruktúrán is futtatható.

A csapat beszámolója szerint az angol szövegekre szabott adattisztítás a hosszú szavak miatt a német hivatali szövegek egy részét is kiszórta volna. Ezért a német nyelvhez igazították a szűrők beállításait.

A Kolibri összesen 78,1 milliárd paraméteréből szövegegységenként csak 3,46 milliárd aktív: a szakértőkre bontott felépítés mindig a modell egy részét használja. Ettől még a teljes súlykészletet tárolni kell. A modelladatlap szerint csak az FP8 formátumú súlyok körülbelül 78 GB memóriát igényelnek. Ez nem egy átlagos laptopra szánt kis modell, és a német–angol fókuszból a magyar nyelvi minőségre sem következik ígéret.

*Források: [Aleph Alpha – a Kolibri bemutatása](https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/); [Hugging Face – modelladatlap](https://huggingface.co/Aleph-Alpha/Kolibri-1); [Apache 2.0 licenc](https://huggingface.co/Aleph-Alpha/Kolibri-1/blob/main/LICENSE).*
