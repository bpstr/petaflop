---
title: "A Claude kiválthatja az egyenkénti MCP-belépéseket"
date: 2026-11-04
summary: "Az Enterprise Managed Auth központi identitásállítással köti össze a Claude-ot a vállalati csatlakozókkal, de a tokenkezelés és a jogosultság-ellenőrzés a szolgáltatónál marad."
category: kiadasok
tags: ["AI", "Anthropic", "Claude", "MCP", "biztonság"]
draft: false
hidden: false
---

A vállalati Claude-felhasználóknak nem feltétlenül kell minden MCP-csatlakozó előtt külön OAuth-jóváhagyást végigkattintaniuk. Az Anthropic új Enterprise Managed Auth megoldásában a Claude egy aláírt JSON Web Tokennel igazolja a felhasználó személyazonosságát a csatlakozó engedélyezési szerverének, amely ezután saját hozzáférési tokent ad vissza.

A funkció Team és Enterprise csomagokon érhető el. Kétféle kibocsátó használható: a vállalat identitásszolgáltatója, illetve – béta formában – maga a Claude. A folyamat az MCP vállalati hitelesítési kiterjesztésére és az ID-JAG szabványtervezetre épül; a szervernek az RFC 7523 szerinti JWT bearer grantot is támogatnia kell.

Ez nem egy biztonsági varázskapcsoló. A csatlakozó fejlesztőjének kell a kibocsátót munkaterülethez kötnie, ellenőriznie az aláírást, a közönséget, a kliensazonosítót, a lejáratot és az egyszer használható `jti` értéket. A dinamikus kliensregisztráció nem támogatott. A már kiadott hozzáférési tokenek pedig akkor is érvényesek maradhatnak a lejáratukig, ha egy felhasználót közben eltávolítanak a Claude-szervezetből.

A gyakorlati nyereség az adminisztrációban van: a munkatársak a már kezelt vállalati identitással kapcsolódhatnak, miközben a célrendszer továbbra is maga szabja meg a jogosultságokat és a token élettartamát. Bevezetés előtt ezért nemcsak a kényelmes belépést, hanem a hibás kibocsátó, a visszajátszott token és az eltávolított felhasználó eseteit is tesztelni kell.

**Források:** [Claude dokumentáció](https://claude.com/docs/connectors/building/enterprise-managed-auth), [MCP-kiterjesztés](https://modelcontextprotocol.io/extensions/enterprise-managed-authorization)
