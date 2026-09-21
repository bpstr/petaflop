---
title: "Az internet már nem csak embereknek készül"
date: 2026-09-22
category: hirek
summary: "Az AI-ügynökök már nemcsak olvassák a webet: műveleteket végeznek, szolgáltatásokat hívnak meg és vásárolnak, ezért maga az internet is elkezd alkalmazkodni a gépi felhasználókhoz."
tags: ["AI", "ügynökök", "WebMCP", "internet"]
draft: false
hidden: false
---

Az internetet alapvetően emberekre terveztük. Weboldalt nyitunk meg, elolvassuk a tartalmát, gombokra kattintunk és űrlapokat töltünk ki. Az AI-ügynökök terjedésével azonban megjelent egy újfajta felhasználó: olyan szoftver, amely maga keres információt, hasonlít össze ajánlatokat, és egyre gyakrabban műveleteket is végrehajt helyettünk.

Ennek egyik látványos jele a **WebMCP**. A szeptember 17-én frissített közösségi szabványtervezet lehetővé teszi, hogy egy webalkalmazás JavaScriptből strukturált eszközöket tegyen elérhetővé az AI-ügynököknek. A Chrome már kísérleti támogatást kínál hozzá. Egy oldal így például közölheti, hogy van `search_products`, `book_trip` vagy `submit_application` művelete, ahelyett hogy az ügynöknek képernyőképekből és DOM-elemekből kellene kitalálnia, melyik gomb mire való.

A tartalom is kezd alkalmazkodni. A Cloudflare februárban elindította a **Markdown for Agents** funkciót: a támogatott oldalakat az AI-rendszerek `Accept: text/markdown` fejléccel közvetlenül Markdown formában kérhetik le. Ez ugyanazt az információt kevesebb HTML-zajjal és jellemzően kisebb tokenköltséggel adja át a gépi kliensnek.

A következő probléma az azonosítás. Egy `User-Agent` fejléc önmagában nem bizonyítja, hogy valóban az a szolgáltatás küldi a kérést, amelynek mondja magát. Az IETF **Web Bot Auth** munkacsoportja ezért HTTP Message Signature-alapú megoldáson dolgozik az automatizált forgalom kriptográfiai azonosítására. A jelenlegi munkacsoporti tervezetet szeptember 1-jén publikálták, a Cloudflare pedig már támogatja a Web Bot Auth-alapú bot- és ügynökazonosítást.

A kereskedelemben ez még fontosabb. A Visa **Trusted Agent Protocolja** azt próbálja megoldani, hogy egy kereskedő meg tudja különböztetni a legitim vásárlási ügynököt egy ismeretlen bottól, és ellenőrizhesse az ügynök által hordozott aláírt információkat. A cél nem egyszerűen a „bot engedélyezése”, hanem annak bizonyítása, hogy egy azonosítható szoftver egy konkrét felhasználó nevében és meghatározott szándékkal jár el.

Ezek a technológiák nem jelentik a hagyományos weboldalak végét. Inkább egy második réteget építenek melléjük. Az ember továbbra is HTML-oldalt és grafikus felületet kap, miközben az ügynök géppel olvasható tartalmat, strukturált műveleteket és ellenőrizhető jogosultságokat használhat.

A web következő fontos kérdése ezért már nem csak az, hogy **mit lát a látogató**, hanem az is, hogy **mit tud felfedezni, megérteni és biztonságosan elvégezni egy szoftveres ügynök**.

---
*Források: [WebMCP Community Group draft](https://webmachinelearning.github.io/webmcp/), [Chrome – WebMCP](https://developer.chrome.com/docs/ai/webmcp), [IETF – Web Bot Auth](https://datatracker.ietf.org/wg/webbotauth/documents/), [Cloudflare – Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/), [Visa – Trusted Agent Protocol](https://developer.visa.com/capabilities/trusted-agent-protocol/docs)*
