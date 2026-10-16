---
title: "Beszéd közben is kiválaszthatja a következő műveletet a GPT-Live"
date: 2026-10-16
summary: "A natív Decisions-kapcsolattal a hangmodell közvetlenül kérhet döntést, de a művelet végrehajtása és ellenőrzése továbbra is az alkalmazás feladata."
category: kiadasok
tags: ["AI", "OpenAI", "ügynökök", "kódolás"]
draft: false
hidden: false
---

Az OpenAI október 15-én natív Decisions-integrációval bővítette a GPT-Live API-t. Egy hangos alkalmazás így már a felhasználó beszéde közben is kiválaszthatja a következő műveletet, vagy a hangmodell válaszára reagálhat. A változás a fejlesztői API-t érinti: nem egy újabb hang a ChatGPT beállításaiban.

A [korábban bemutatott Decisions API](/posts/2026-10/openai-decisions-api-tipusos-dontesek/) körülhatárolt kérdésekre ad géppel feldolgozható választ. Az új kapcsolatnál a GPT-Live közvetlenül hívja meg ezt a szolgáltatást. Kimarad az a köztes kör, amelyben előbb az alkalmazás kapná meg a delegálási jelzést, majd külön kérné le a döntést.

Kétféle időzítés használható. A Live felismerheti, hogy egy kérés az alkalmazásra tartozik, és átadhatja a következő lépést. A fejlesztő a bejövő vagy kimenő beszédátirat részleteire is állíthat triggert. Az OpenAI egyik példájában egy virtuális karakter már hallgatás közben változtat arckifejezést és gesztust.

Egy döntés azonban nem végrehajtott művelet. A dokumentáció szerint az alkalmazás módosítja például a vezérelt beállítást, ellenőrzi a tényleges állapotot, majd visszajelzést ad a Live-nak. A hangmodellnek ebből kell beszámolnia az eredményről. Ez fontos határ: a megfelelő művelet kiválasztása nem bizonyítja, hogy az eszköz végre is hajtotta azt.

A bekötéshez működő Live-kapcsolat és `api.decisions.write` jogosultság kell. A triggerek eredményei sorrenden kívül is megérkezhetnek; a kliensnek a megfelelő átiratrészhez kell kapcsolnia őket, és az aktuális eredményt kell alkalmaznia. A kevesebb hálózati kör dokumentált működés, nem általunk mért gyorsulás. A funkciót nem próbáltuk ki.

*Források: [OpenAI – október 15-i API-változás](https://developers.openai.com/api/docs/changelog); [OpenAI – Connect voice to Decisions](https://developers.openai.com/api/docs/guides/decisions-voice).*
