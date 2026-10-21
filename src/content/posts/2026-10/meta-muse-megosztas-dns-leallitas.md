---
title: "A Meta leállította a Muse beszélgetésmegosztását"
date: 2026-10-21
summary: "A megosztott beszélgetések címei nyilvános DNS-adatokból visszakereshetők voltak; a kutatók több ezer hivatkozást találtak."
category: hirek
tags: ["AI", "Meta", "adatvédelem", "biztonság"]
draft: false
hidden: false
---

A Meta szünetelteti a Muse beszélgetésmegosztását, miután biztonsági kutatók több ezer, nyilvános DNS-adatokból visszakereshető hivatkozást találtak. A [Claroc október 18-i jelentése](https://blog.claroc.io/ghostshares-muse-passive-dns/) szerint a megosztott oldalak URL-je a beszélgetés címét és egy véletlen azonosítót is tartalmazott. Amikor valaki megnyitotta a linket, a teljes hosztnév bekerülhetett passzív DNS-adatbázisokba, így az azonosítóval együtt kereshetővé vált.

A kutatók a zaj kiszűrése után több mint 6800 hosztnevet találtak, és ezek közül csak néhány száz oldalt nyitottak meg. A többség ártalmatlan volt, de egy kisebb rész üzleti bevételi áttekintést, hitelkérelmet, munkahelyi naptárt és állásinterjú-előkészítést tartalmazott. A csapat nem tudja, más hozzáfért-e ezekhez, és a minta nem méri a Muse teljes kitettségét.

A megosztást a felhasználók kérték, az oldalak pedig eleve minden linkbirtokos számára elérhetők voltak. A hiba abból adódott, hogy a cím és az azonosító együtt egy külső kereshető rendszerbe került. A `robots.txt` csak a keresőmotoros feltérképezést korlátozta, a DNS-adatok gyűjtését nem.

A [The Verge-nek](https://www.theverge.com/tech/1014627/meta-muse-ai-sharing-ai-chats) küldött nyilatkozatában a Meta megerősítette a funkció szüneteltetését. A Claroc október 20-án negyven korábban elérhető megosztást ellenőrzött újra; egyik sem nyílt meg, bár a korábbi hosztnevek a passzív DNS-előzményekben megmaradhatnak.

Források: [Claroc](https://blog.claroc.io/ghostshares-muse-passive-dns/), [The Verge](https://www.theverge.com/tech/1014627/meta-muse-ai-sharing-ai-chats).
