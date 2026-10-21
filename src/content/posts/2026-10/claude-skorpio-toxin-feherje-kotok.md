---
title: "A Claude 17 skorpiótoxin-kötő fehérjét tervezett"
date: 2026-10-21
summary: "A 64 órás ügynökfutás jelöltjei közül 17 laborban is kötődött négy toxinhoz, de egyikből sem lett még ellenméreg."
category: elemzesek
tags: ["AI", "Claude", "kutatás", "ügynökök"]
draft: false
hidden: false
---

A Claude egy 64 órás, többnyire önálló kutatási futásban 318 484 lehetséges fehérjét tervezett öt skorpió-neurotoxin ellen. Az Anthropic október 20-i [beszámolója](https://www.anthropic.com/research/claude-scorpion-toxin-binder-design) szerint a rendszer 180 jelöltet választott ki, a kutatók további 31-et tettek mellé. Az Adaptyv Bio és a Twist Bioscience mind a 211-et laborban vizsgálta: 17 fehérje teljesítette a kötődési feltételeket négy toxinnál.

A modell nem egyedül „talált fel” gyógyszert. Tizenkét meglévő tervező- és szerkezetbecslő eszközt irányított, adatbázisokban keresett, jelölteket szűrt és rangsorolt. A kutatók egy kezdő utasítás után négy további beavatkozást adtak, majd felügyelték az elemzést és a jelentés elkészítését. A futás körülbelül 10 000 GPU-órát használt.

A legfontosabb korlát a „kötődik” és a „gyógyít” közötti távolság. A kísérlet nem tesztelte, hogy a fehérjék semlegesítik-e a mérget sejtekben vagy állatokban; a brazil Ts1 toxinhoz egyetlen jelölt sem kötődött, és több toxint egyszerre célzó kötő sem sikerült. A vizsgálatból hiányzott azonos eszközökkel dolgozó szakértői kontrollcsoport is, ezért nem derül ki, gyorsabb vagy hatékonyabb volt-e Claude egy tapasztalt csapatnál.

Az eredmény így korai, de ellenőrizhető kutatási lépés: a teljes mintakészletet és a [műszaki jelentést](https://www-cdn.anthropic.com/31ac578806cffd8b3d92d8affe6edc4c04d502e1.pdf) nyilvánossá tették. Ez lehetővé teszi, hogy más kutatók a sikeres és sikertelen jelölteket egyaránt újraelemezzék.

Források: [Anthropic](https://www.anthropic.com/research/claude-scorpion-toxin-binder-design), [technikai jelentés](https://www-cdn.anthropic.com/31ac578806cffd8b3d92d8affe6edc4c04d502e1.pdf). A témára az [AlphaSignal híre](https://alphasignal.ai/news/anthropic-s-claude-ran-64-hours-to-design-17-scorpion-antivenom-proteins) hívta fel a figyelmet.
