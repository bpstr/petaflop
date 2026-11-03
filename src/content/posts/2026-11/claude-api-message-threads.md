---
title: "Nem kell újraküldeni a teljes előzményt a Claude API-nak"
date: 2026-11-03
summary: "A Message Threads a hosszú ügynökmenetek hálózati terhét és indulási késését csökkenti, de a tokenfogyasztást nem – és a béta adatkezelési korlátokkal jár."
category: kiadasok
tags: ["AI", "Anthropic", "Claude", "API", "ügynökök"]
draft: false
hidden: false
---

A több százezer tokenes ügynökmeneteknél eddig minden API-hívás újra elküldte a teljes beszélgetést. Az Anthropic [nyilvános bétában megnyitott Message Threads](https://claude.com/resources/articles/message-threads) funkciója ezt az ismétlést vágja ki: az első kérés tartalmazza az előzményt, a következők már csak az új üzeneteket és az előző válasz azonosítóját.

A cég Claude Code-mérése szerint az 500 ezer–1 millió tokenes kéréseknél körülbelül 35 százalékkal csökkent a válasz első tokenjéig eltelt idő mediánja. Ez gyártói mérés, nem független teszt. A modell továbbra is a teljes kontextust olvassa, ezért a tokenelszámolás nem változik; a nyereség a kisebb feltöltésből és az egyszerűbb előfeldolgozásból jön.

A [dokumentáció](https://platform.claude.com/docs/en/build-with-claude/message-threads) szerint a funkció minden modellen használható a `message-threads-2026-08-12` bétafejléccel. A szál öt perc tétlenség után már nem folytatható, ilyenkor a kliensnek újra kell játszania a teljes beszélgetést. Az Anthropic a tartalmat titkosítva, memóriában tartja, és legfeljebb egy órával az utolsó használat után törli.

Ez az adatkezelési mód nem jogosult zero-data-retentionre és HIPAA-használatra. A kliensnek tehát továbbra is saját, teljes beszélgetéspéldányt kell őriznie, és a 404-es lejárati hibára fel kell készülnie. A béta a natív Claude Platformon, valamint az AWS, a Microsoft Foundry és a Google Cloud Anthropic által kezelt Claude-környezetében érhető el, a szokásos tokenárakkal és limitekkel.
