---
title: "Kotlinra, Rubyra és vállalati csevegőkre terjeszkedik az ügynök-ökoszisztéma"
date: 2026-11-06
summary: "A heti fejlesztői körképben az AG-UI Kotlin SDK törő frissítése, az MCP Ruby SDK első osztályú minősítése és a json-render új chatkártyái szerepelnek."
category: kiadasok
tags: ["AI", "API", "MCP", "fejlesztés"]
draft: false
hidden: false
---

Három kisebb kiadás ugyanabba az irányba mutat: az ügynökprotokollok a bemutatókból lassan többnyelvű, többfelületű fejlesztői eszközzé válnak. Az újdonságok azonban eltérő érettségűek, ezért a verziószám legalább olyan fontos, mint a funkciólista.

## Az AG-UI Kotlin SDK utolérte az 1.0-s protokollt

Az AG-UI november 5-i kiadása a Kotlin core, client és tools csomagokat `0.5.0`-ra emelte. Megjelent a megszakítás és folytatás, az ügynöktevékenység külön eseménye, a többféle médiát tartalmazó üzenet, valamint a böngészős Wasm és a macOS ARM cél. A csomagok MIT-licencűek és Maven Centralból telepíthetők.

Ez egyben migrációs kiadás. A Maven-csoport azonosítója `com.ag-ui.community` lett, a `THINKING_*` eseményeket a `REASONING_*` váltja, a szigorúbb dekódolás pedig korábban elfogadott állapotmódosításokat is visszautasíthat. A `0.x` SDK protokollilleszkedése önmagában nem bizonyítja a különböző kliensek teljes együttműködését.

## Az MCP Ruby SDK Tier 1 lett

Az MCP hivatalos Ruby SDK-ja október 30-án érte el a legmagasabb, Tier 1 szintet. Az `mcp` gem az `1.2.0` verziótól támogatja a `2026-07-28` specifikációt, a jelenlegi útmutató pedig `~> 1.8` verziót javasol. A minősítés a két pontozott specifikáció-változat szerver- és kliensvizsgálatain 100 százalékos megfelelést, gyors hibakezelési vállalást és a következő specifikáció megjelenésnapi támogatását jelenti.

A régi és az állapotmentes életciklus egymás mellett használható, de több 1.x kiadás szigorúbb bemenet-ellenőrzést vezetett be. Frissítés előtt ezért a változási naplót is át kell nézni. A projekt licencállománya az MIT-ről Apache 2.0-ra zajló átmenetet rögzíti, így nem írható le egyetlen, minden sorra érvényes címkével.

## Egy leírásból Slack- és Teams-kártya

A Vercel Labs Apache 2.0 licencű `json-render` projektjének `0.22.0` kiadása új `@json-render/chat` csomagot hozott. Ugyanazt a komponenskatalógust Chat SDK-kártyává alakítja, így Slackben és Microsoft Teamsben is natív felület készülhet belőle. A `streamCard` menet közben frissíti a kártyát, a `toCard` pedig a komponenssémákat és az opcionális platformkorlátokat ellenőrzi.

Ez hasznos megjelenítési réteg, nem új interoperabilitási szabvány. A hordozhatóság addig tart, ameddig a célplatform kártyakészlete és korlátai engedik.

*Források: [AG-UI 2026-11-05 kiadás](https://github.com/ag-ui-protocol/ag-ui/releases/tag/release%2F2026-11-05); [MCP – Ruby SDK Tier 1](https://blog.modelcontextprotocol.io/posts/ruby-sdk-tier-1/); [MCP Ruby SDK](https://github.com/modelcontextprotocol/ruby-sdk); [json-render v0.22.0](https://github.com/vercel-labs/json-render/releases/tag/v0.22.0).*
