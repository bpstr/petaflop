---
title: "Emberek szavazhatnak a képekről a modell tanítása közben"
date: 2026-10-06
summary: "A Rapidata októberi bemutatója friss emberi összehasonlításokat kapcsol a képgeneráló modellek utótréningjéhez."
category: hirek
tags: ["AI","kutatás"]
draft: false
hidden: false
---

Egy képgeneráló modell megtanulhatja, hogyan kapjon jó pontot az automatikus értékelőtől, miközben a képei az embernek továbbra is hibásnak tűnnek. A Rapidata október 2-i technikai bemutatója ezért közvetlenül a tanítási folyamatba kapcsolná be az emberi összehasonlításokat.

A leírt megoldás ugyanarra az utasításra több képet készít, majd páronként megmutatja őket értékelőknek. A választásokból képenként pontszám képződik, amely visszakerül a modell utótréningjébe. Így újonnan generált képekhez érkezhet friss visszajelzés, nem kizárólag egy előre összegyűjtött preferencialista alapján zajlik a tanulás.

A Flows nevű API kis adatcsomagokat fogad, és ugyanazt az értékelési beállítást több csomagnál is újrahasználja. A dokumentáció szerint időkorlátot is kezel: annak lejártakor az addig beérkezett válaszok lekérhetők. Ettől még nem garantált, hogy minden csomaghoz elegendő értékelés érkezik; a kész vagy hiányos állapot a válaszküszöböktől függ.

Az érdekes lehetőség a visszajelzés és a generálás összekapcsolása. A tanítás alkalmazkodhat ahhoz, amit az emberek az aktuális képekben jobbnak találnak, miközben a következő képcsoport már készülhet.

Ez szolgáltatói módszerbemutató, nem független minőségi teszt. A megvalósítás értékét az is meghatározza, milyen szempontok szerint és kik értékelnek, mennyi válasz érkezik, illetve mennyi várakozást visel el a tanítás. A Petaflop nem futtatott ilyen tréninget.

*Források: [Rapidata – technikai bemutató](https://huggingface.co/blog/Rapidata/live-human-feedback-in-the-training-loop-aligning), [Flows – dokumentáció](https://docs.rapidata.ai/flows/).*
