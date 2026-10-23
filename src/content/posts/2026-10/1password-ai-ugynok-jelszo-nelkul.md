---
title: "A 1Password úgy engedi be az AI-ügynököt, hogy az ne lássa a jelszót"
date: 2026-10-23
summary: "Az új 1Password for Agents minden bejelentkezésnél azonosítja az ügynököt, megmutatja a kért hozzáférést, és csak a felhasználó eszközén adott jóváhagyás után tölti ki a hitelesítő adatot."
category: kiadasok
tags: ["AI", "ügynökök", "biztonság", "adatvédelem"]
draft: false
hidden: false
---

Az AI-ügynökök jelszókezelésére épített külön platformot a 1Password. Az október 22-én bemutatott 1Password for Agents célja, hogy a bot be tudjon jelentkezni egy szolgáltatásba anélkül, hogy maga megkapná vagy eltárolná a jelszót.

Amikor az ügynök egy bejelentkezési űrlaphoz ér, egyedi digitális kulccsal azonosítja magát a 1Password felé. A felhasználó a saját eszközén látja, melyik hitelesítő adatot és milyen indokkal kéri, majd engedélyezheti vagy elutasíthatja a műveletet. Jóváhagyás esetén a jelszókezelő közvetlenül az űrlapba tölti az adatot, nem a modellnek küldi el.

A vállalat a Meta Muse, az Anthropic Claude Duet, az OpenAI ChatGPT Work és dots, a Grok Bot, valamint a Town Townie készítőivel dolgozik együtt. További partnerek között szerepel a Browserbase, a Perplexity és a Ramp. Ez azonban partnerlista, nem azonos azzal, hogy minden integráció minden ügyfélnek már most használható: a 1Password külön oldalra irányítja az érdeklődőket az egyes kapcsolatok elérhetőségéért.

A konstrukció egy fontos kockázatot csökkent, de nem old meg mindent. A titok elrejtése nem bizonyítja, hogy az ügynök a belépés után helyesen cselekszik, és az engedélyezett munkamenetben elérhető adatok továbbra is érzékenyek lehetnek. A gyakorlati érték ezért az egyedi ügynökazonosítás, a műveletenkénti jóváhagyás és az auditálható hozzáférés együttese.

**Források:** [1Password](https://1password.com/press/2026/october/1password-for-agents-trust-layer-personal-ai-agents), [TechCrunch](https://techcrunch.com/2026/10/22/1password-launches-a-way-for-ai-agents-to-log-in-on-your-behalf-without-seeing-your-password/)
