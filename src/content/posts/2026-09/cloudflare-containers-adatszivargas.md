---
title: "Cloudflare-javítás zárt le egy konténerek közti adatszivárgási hibát"
date: 2026-09-24
summary: "A Cloudflare Containers egyik hibája lehetővé tehette, hogy új konténerek korábbi ügyfelek lemezadataiból maradványokat olvassanak."
category: hirek
tags: ["Cloudflare", "biztonság", "konténerek"]
draft: false
hidden: false
---

A Cloudflare szeptember 24-én részletezett egy már kijavított hibát a Containers és az arra épülő Sandboxes szolgáltatásban. A problémát szeptember 4-én jelentették a bug bounty programon keresztül.

A sebezhetőség bizonyos helyzetekben lehetővé tehette, hogy egy új konténer olyan lemezblokkokat kapjon, amelyek korábban más ügyfélhez tartoztak. Ez több-bérlős környezetben különösen súlyos kategória, mert a logikai elkülönítés ellenére adatok maradványai kerülhetnek át egyik tenanttól a másikhoz.

A Cloudflare szerint a hibát teljesen javították, és nem találtak bizonyítékot arra, hogy ügyféladatokat rosszindulatúan megszereztek volna. A történet jó emlékeztető arra, hogy a konténerszigetelés nem csak processzekről, hanem tárolórétegekről is szól.

*Forrás: [Cloudflare](https://blog.cloudflare.com/containers-cross-tenant-vulnerability/)*
