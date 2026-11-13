---
title: "Új jogosultságok és biztosabb átjárók jönnek az AI-ügynökökhöz"
date: 2026-11-13
summary: "Az OpenAI részletesebb API-jogosultságokat és hosszabb gyorsítótárat adott, miközben az MCP, az A2A és az AG-UI kiszámíthatóbbá teszi az integrációkat."
category: kiadasok
tags: ["AI", "API", "MCP", "fejlesztők"]
draft: false
hidden: false
---

A hét kisebb fejlesztői változásai ugyanazt a problémát közelítik meg: hogyan maradjon kezelhető egy AI-rendszer, amikor több ember, ügynök és protokoll kapcsolódik hozzá. Az OpenAI a hozzáférést és a költséget, az MCP a kiadások ütemét, az A2A és az AG-UI pedig az átjárók megbízhatóságát javítja.

## Finomabb OpenAI-jogosultságok, hosszabb gyorsítótár

Az OpenAI november 13-án kibővített szerepalapú hozzáférés-vezérlést adott az API-platformhoz. A szervezet csoportokat és egyedi szerepköröket hozhat létre, majd szervezeti vagy projektszinten szabályozhatja például a modellhívást, a fájlírást és a kulcskezelést. Ugyanazok a jogosultságok érvényesek az API-ra és a kezelőfelületre; az identitásszolgáltatóból SCIM-en át szinkronizált csoportok is használhatók. A módosítások érvényesülése akár 30 percet igénybe vehet.

Ugyanekkor jelent meg a legfeljebb 24 órás kiterjesztett promptgyorsítótár. Ez a változat a változatlan promptkezdet feldolgozott állapotát tarthatja meg hosszabban, ami ismétlődő, nagy kontextusú kéréseknél csökkentheti a bemeneti költséget. A támogatás, az alapérték és az ár modellenként, illetve adatmegőrzési beállításonként eltér; a 24 óra felső határ, nem garantált gyorsulás.

## Az MCP féléves menetrendre áll

Az MCP karbantartói mostantól március és szeptember utolsó keddjére tervezik a specifikáció kiadásait. A következő cél a `2027-03-30` verzió. A menetrend soft freeze-t, Tier 1 SDK-bétákat és egy hónapos hard freeze-t ír elő, így a kliens- és szerverfejlesztők előre tervezhetik az együttműködési teszteket.

Ez a bejelentés önmagában nem változtat MCP-üzenetet vagy verzióegyeztetést, ezért a jelenlegi integrációkat nem kell miatta módosítani. A készülő javaslat inkább későbbi kiadásba csúszik, mintsem az egész specifikációt késleltesse.

## Az A2A Go SDK már ACP-ügynököt is becsomagol

Az Apache 2.0 licencű A2A Go SDK `2.8.0` kiadása végrehajtót adott az Agent Client Protocolt beszélő ügynökökhöz. Így egy ACP-alapú kódolóügynök A2A-szolgáltatás mögé tehető. A kiadás gRPC-kapcsolat-újrahasználatot, ETag-alapú Agent Card gyorsítótárat, strukturált bemeneti bővítést és bekapcsolható hibatisztítót is hozott.

A `2.8.0` az SDK verziója, nem új A2A-specifikáció. A becsomagolás egy konkrét megvalósítási út, és nem bizonyítja, hogy minden ACP-kliens minden A2A-rendszerrel gond nélkül együttműködik.

## Az AG-UI a hibák utáni folytatást javítja

Az MIT-licencű AG-UI november 12-i csomagjai a Claude Agent SDK-val épített felületek helyreállítását pontosították. A TypeScript-adapter már a beágyazott JSON-sémákat is megőrzi, a Python-integráció pedig alügynöki aktivitást küldhet a felületre és újra lejátszhatja a mentett eszközeredményeket egy végrehajtási hiba után.

A szigorúbb sémák és az AG-UI 1.0-nak megfelelő események törő változást is okozhatnak. Frissítés előtt ellenőrizni kell a lazán kezelt eszközparamétereket, valamint azt, hogy a kliens nem vár-e már eltávolított `threadId` vagy `runId` mezőt a szöveg- és eszközeseményekben.

**Források:** [OpenAI API-változási napló](https://developers.openai.com/api/docs/changelog), [OpenAI RBAC](https://developers.openai.com/api/docs/guides/rbac), [OpenAI prompt caching](https://developers.openai.com/api/docs/guides/prompt-caching), [MCP kiadási ciklus](https://blog.modelcontextprotocol.io/posts/mcp-release-cycle/), [A2A Go 2.8.0](https://github.com/a2aproject/a2a-go/releases/tag/v2.8.0), [AG-UI 2026-11-12](https://github.com/ag-ui-protocol/ag-ui/releases/tag/release%2F2026-11-12).
