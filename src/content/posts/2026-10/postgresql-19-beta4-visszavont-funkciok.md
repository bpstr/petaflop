---
title: "PostgreSQL 19: funkciókat vettek ki a negyedik bétából"
date: 2026-10-02
summary: "A szeptember 24-i béta több tervezett újdonságot visszavont a megbízhatóság érdekében; az októberi végleges kiadás még nem biztos dátum."
category: hirek
tags: ["PostgreSQL"]
draft: false
hidden: false
---

A PostgreSQL fejlesztői szeptember 24-én adták ki a 19-es verzió negyedik bétáját, és több korábban tervezett képességet visszavontak. Indoklásuk szerint a megbízhatóság és a kiszámítható megjelenési ütem fontosabb, mint minden újdonság beszorítása.

Kikerült többek között az SQL/PGQ gráflekérdezési támogatás, az adatellenőrző összegek menet közbeni ki- és bekapcsolása, valamint a partíciók összevonására és szétválasztására szolgáló új parancsok. A `REPACK`, a logikai replikáció és más megmaradó funkciók eközben javításokat kaptak.

Aki egy tervezett fejlesztést az előzetes funkciólistára épített, annak most érdemes újra ellenőriznie a kiadási megjegyzéseket. A következő állomást, a kiadásra jelölt változatot október elejére várják, a végleges megjelenés viszont a teszteléstől függ. Október 2-án továbbra is bétáról van szó: a projekt nem javasolja üzemi használatra. A visszavont funkciók későbbi főverzióba kerülhetnek, de erre még nincs ígéret.

*Források: [PostgreSQL – a negyedik béta változásai](https://www.postgresql.org/about/news/postgresql-19-beta-4-released-3386/); [PostgreSQL – aktuális kiadási állapot](https://www.postgresql.org/).*
