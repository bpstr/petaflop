---
title: "A chatből indítható a Suno zenegenerátora az új MCP-vel"
date: 2026-10-29
summary: "A béta csatlakozó Claude-ból, ChatGPT-ből, Geminiből és fejlesztői eszközökből is eléri a Sunót, de a dalok továbbra is a felhasználó kreditegyenlegét fogyasztják."
category: kiadasok
tags: ["AI", "Suno", "MCP", "kreatív"]
draft: false
hidden: false
---

A Suno október 28-án béta MCP-szervert indított, amellyel a zenegenerálás közvetlenül egy kompatibilis AI-chatből vagy fejlesztői eszközből vezérelhető. A hivatalos lista a Claude, ChatGPT, Gemini, Claude Code és Cursor alkalmazásokat említi; a hozzáférést egyelőre igényelni kell.

A kapcsolat egy távoli szervercímmel, a `https://api.suno.com/mcp` URL-lel állítható be. Külön API-kulcs nem kell: a felhasználó a Suno-fiókjával jelentkezik be és jóváhagyja a kapcsolatot. Az elkészült dalok a megszokott Suno-könyvtárba kerülnek, és ugyanazokat a krediteket fogyasztják, mint a webes felületen indított generálások. A béta minden Suno-csomaghoz használható, de az MCP-kliens saját csomagkorlátai ettől még érvényesek lehetnek.

A csatlakozó szöveges leírásból készíthet dalt, hangjegyzetet vagy hurkot bővíthet teljes számmá, illetve a könyvtárban lévő zenéket remixelheti, hosszabbíthatja és új változatokba rendezheti. A gyakorlati változás az, hogy a beszélgetésben már összegyűjtött dalszöveg, stílus vagy videóterv közvetlenül átadható a Sunónak. Ez kényelmesebb munkafolyamat, nem új generációs modell: a zene továbbra is a Suno szolgáltatásában készül és ott tárolódik.

**Források:** [Suno MCP](https://suno.com/mcp), [Suno kiadási jegyzet](https://suno.com/release-notes), [AlphaSignal](https://alphasignal.ai/news/suno-drops-an-official-mcp-server-to-generate-music-from-any-ai-chat)
