---
title: "Külön API-t kapott az OpenAI-nál az igen, a nem és a választás"
date: 2026-10-09
summary: "A nyilvános bétában elérhető Decisions API szövegből és képből ad osztályozást, valószínűséget vagy pontszámot; a gyorsaságra vonatkozó állítás az OpenAI-é."
category: kiadasok
tags: ["AI", "OpenAI", "kódolás", "ügynökök"]
draft: false
hidden: false
---

Egy ügyfélszolgálati üzenetnél gyakran nem hosszú válaszra van szükség, hanem arra, hogy a program eldöntse: a számlázáshoz vagy a technikai támogatáshoz küldje. Az OpenAI október 6-án minden fejlesztő előtt megnyitotta a Decisions API nyilvános bétáját. Az új felület ilyen körülhatárolt döntésekhez ad közvetlenül feldolgozható eredményt.

A `POST /v1/decisions` végpont egyelőre csak a `gpt-6-luna` modellt támogatja, szöveges és képes bemenettel. Három kérdéstípus közül lehet választani. A `predicate` egy feltétel igazságának becsült valószínűségét adja vissza; a `choice` előre megadott kategóriákból választ; a `score` rendezett szintekhez tartozó valószínűségekből számol pontszámot. Utóbbi ezért két szint közé is eshet, nem egyszerűen az egyik címkét jelenti.

Egy alkalmazás így besorolhatja a beérkező hibajegyeket, vagy termékfotón kereshet látható sérülést. A fejlesztő határozza meg a kérdéseket és a lehetséges válaszokat. Összetett JSON-objektum előállítására vagy eszközhívási argumentumok megadására az OpenAI továbbra is a Responses API megfelelő funkcióit javasolja.

Az OpenAI szerint a döntés akár tízszer gyorsabb lehet, mint ugyanazzal a Luna modellel a Responses API-n keresztül. Ez gyártói állítás; a sebességet és a pontosságot nem mértük. A visszaadott valószínűség sem helyettesíti a saját adatokon végzett ellenőrzést: a dokumentáció címkézett példák alapján javasolja beállítani az elfogadási küszöböket.

Az alapár egymillió bemeneti tokenenként 0,10 dollár, külön kimeneti tokendíj nélkül. Regionális feldolgozási felár és hosszú kontextushoz tartozó árszorzó azonban alkalmazható. Ezek a Decisions végpont díjai, nem a Luna minden más API-hívásának árai.

Az ilyen integrációnál a hasznos első próba egy meglévő besorolási feladat: mennyi hibás továbbítást okoz, és mennyi időt spórol az új végpont ugyanazon a tesztkészleten? A rögzített válaszforma megkönnyíti a bekötést, a döntés minőségét külön kell megítélni.

*Források: [OpenAI – Decisions dokumentáció](https://developers.openai.com/api/docs/guides/decisions); [OpenAI – a nyilvános béta bejelentése](https://community.openai.com/t/decisions-api-is-now-available-in-public-beta/1403877); [The Decoder – Decisions API](https://the-decoder.com/openai-launches-decisions-api-that-reduces-complex-evaluations-to-yes-no-or-pick-one/).*
