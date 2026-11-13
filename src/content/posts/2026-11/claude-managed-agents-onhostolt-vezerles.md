---
title: "Saját infrastruktúrára költözhet a Claude ügynökeinek vezérlése"
date: 2026-11-13
summary: "Az Anthropic privát bétája a Managed Agents szerverét, adatbázisát és homokozóit is a vállalat környezetébe teszi, az üzemeltetési felelősséggel együtt."
category: kiadasok
tags: ["AI", "Anthropic", "Claude", "ügynökök", "fejlesztők"]
draft: false
hidden: false
---

Az Anthropic november 12-én privát bétában megnyitotta a **teljesen önhostolt Claude Managed Agents** változatát. Eddig a cégek a végrehajtási homokozót vihették saját felhőjükbe; most már az ügynökhurok, a munkamenetek adatbázisa, a hitelesítőadat-kezelés és a végrehajtó workerek is futhatnak a vállalat felhőjében vagy helyi adatközpontjában.

A modell ettől még nem költözik automatikusan helybe. A szerver az Anthropic API-jához, Amazon Bedrockhoz, a Google vagy a Microsoft felhőjéhez, illetve saját modellátjáróhoz küldheti a kéréseket. A teljes beszélgetési előzmény és az eszközök eredménye tehát elhagyhatja a belső hálózatot a választott következtetési szolgáltató felé; a tárolási feltételeket külön kell ellenőrizni.

Az új opció azoknak a csapatoknak érdekes, amelyek felügyelet nélkül javíttatnak buildet, vizsgáltatnak riasztást vagy dolgoztatnak belső kódtáron. Cserébe az Anthropic által kezelt vezérlősík kényelme eltűnik: a szerver frissítése, a PostgreSQL-adatbázis, a megfigyelés, a titokkezelés és a sandbox valódi elkülönítése az ügyfél feladata. A dokumentáció külön figyelmeztet, hogy a worker önmagában nem szigeteli el a valódi shellt. Önkiszolgáló hozzáférés és általános megjelenési dátum egyelőre nincs; az érdeklődőknek az Anthropic kapcsolattartójánál kell jelentkezniük.

**Források:** [Anthropic](https://claude.com/resources/articles/self-hosted-claude-managed-agents), [Claude Platform dokumentáció](https://platform.claude.com/docs/en/managed-agents/self-hosted), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/anthropic-lets-enterprises-self-host-the-claude-agent-control-plane).
