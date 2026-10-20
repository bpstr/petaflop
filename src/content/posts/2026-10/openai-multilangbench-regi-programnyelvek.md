---
title: "COBOL-lal és Fortrannal is próbára teszi a kódoló AI-t az OpenAI"
date: 2026-10-20
summary: "A nyilvános MultiLangBench húsz programnyelven méri a kódoló modelleket; a külön COBOL-migrációs teszt a régi programok viselkedésének megőrzését vizsgálja."
category: elemzesek
tags: ["AI", "OpenAI", "kódolás", "kutatás"]
draft: false
hidden: false
---

Az OpenAI október 19-én két mérést mutatott be a kódoló AI vizsgálatára, külön figyelmet szentelve a COBOL-nak, a Fortrannak és a Visual Basicnek.

A nyilvánossá tett **MultiLangBench** feladata egy SQLite-kompatibilis adatbázismotor elkészítése. A GitHubon közölt leírás szerint a program kap egy adatbázisfájlt és egy SQL-utasítást, majd módosítja az adatbázist. Az eredményt az eredeti SQLite-tal ellenőrzik, így ugyanaz a feladat különböző nyelveken is összehasonlítható. A környezetben nincs internet, és kész SQLite-megvalósítást sem használhat a modell.

A tesztcsomag körülbelül 24 ezer átalakított tesztesetet tartalmaz, de a dokumentáció a szokásos méréshez egy 272 esetből álló részhalmazt javasol. A teljes készlet futtatása megengedett, ezt viszont jelezni kell. Ez az apró módszertani részlet fontos annak, aki két eredményt szeretne összevetni: előbb azt kell tisztázni, pontosan milyen vizsgán született a pontszám.

Az OpenAI mérése szerint a GPT-6 Astra maximális gondolkodási beállítással átlagosan **87,4 százalékos tesztsikerarányt** ért el a húsz nyelven. Ez a meghatározott adatbázisfeladat eredménye; egy vállalati alkalmazás átírásának sikerét külön kell megvizsgálni.

Erre szolgál a második, COBOL-programokat más nyelvekre átalakíttató mérés. Itt csak az a migráció sikeres, amely minden rejtett teszten átmegy, és bájtról bájtra megőrzi a megfigyelhető kimenetet. A cég ebben a külön vizsgálatban közölt 97,9 százalékos eredményt a GPT-6.1 Solhoz, magasabb gondolkodási ráfordítással.

A két százalék tehát más kérdésre válaszol. Az egyik azt méri, mennyi működő funkció készült el; a másik azt, hány átalakított program teljesítette az összes előírt ellenőrzést. Régi rendszert gondozó csapatnak ezért a nyilvános tesztek átnézése lehet a hasznos első lépés: melyik ismert hibafajtát fedik le, és melyiket kell saját példával hozzáadni?

A cég saját eredményeit nem reprodukáltuk. Éles migrációhoz szakértői ellenőrzés és a konkrét üzleti szabályokra épülő tesztek kellenek.

Források: [OpenAI: a kutatás és a két mérés](https://openai.com/index/low-resource-programming-languages/), [MultiLangBench: feladat, tesztek és kiértékelés](https://github.com/openai/MultiLangBench). A témára az [AlphaSignal beszámolója](https://alphasignal.ai/news/openai-s-gpt-6-astra-cracks-cobol-scoring-72-on-banking-s-ancient-code) hívta fel a figyelmet.
