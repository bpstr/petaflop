---
title: "Saját megfigyelőrendszerbe köthető a Claude API új nyomkövetése"
date: 2026-10-16
summary: "Az OpenTelemetry-export bétája összekapcsolhatja a modellkéréseket és eszközhasználatot; a beszélgetések tartalma külön bekapcsolható adatküldés."
category: kiadasok
tags: ["AI", "Anthropic", "Claude", "kódolás", "adatvédelem"]
draft: false
hidden: false
---

Egy lassú AI-válasznál nem mindig a modellre vár a felhasználó: az időt egy eszközhívás vagy a köré épített alkalmazás is elviheti. Az Anthropic október 14-én bétában elindította a Claude API OpenTelemetry-exportját, amellyel a Messages API kérései és a Managed Agents munkamenetei a csapat meglévő megfigyelőrendszerében követhetők.

Az OpenTelemetry közös formátumot ad a működési nyomkövetéshez. Egy trace az összefüggő folyamatot, egy span annak valamelyik lépését írja le. A Claude adatai így az alkalmazás többi lépésével összekapcsolva mutathatják meg, hol történt hiba vagy késlekedés, illetve mekkora volt a tokenforgalom. Ez a végrehajtás menete, nem a modell belső gondolatainak jegyzőkönyve.

A fejlesztő SDK-oldali, API-oldali vagy kombinált nyomkövetést állíthat be. Az SDK az alkalmazásban futó klienseszközöket is láthatja; az API a saját modellfutásait és szerveroldali eszközeit követi. Az utóbbihoz adminisztrátori szereppel célállomást kell felvenni a Claude Console-ban. A fogadó rendszernek HTTPS-en elérhető OTLP/HTTP végpontot kell biztosítania, protobuf támogatással. Az API-oldali export a Claude Platformon és a Claude Platform on AWS szolgáltatásban támogatott.

Alapértelmezésben a rendszer metaadatokat továbbít: például azonosítókat, időzítést, állapotot és tokenszámokat. A Full content mód a promptokat és válaszokat is elküldi. Ezek ezután a választott megfigyelőszolgáltatás saját hozzáférési és megőrzési szabályai alá kerülnek, ezért a részletesebb hibakeresés adatkezelési döntés is.

A tokenszámlálásnál külön figyelni kell a duplázásra: ugyanaz a kérés SDK- és API-spanként is megjelenhet. Az Anthropic dokumentációja megadja, melyik szint adatait kell összegezni. A nyomkövetés beállítását és a külső célállomásra történő kézbesítést nem teszteltük.

*Források: [Anthropic – október 14-i kiadási jegyzet](https://platform.claude.com/docs/en/release-notes/overview); [Claude API – OpenTelemetry és tartalmi módok](https://platform.claude.com/docs/en/manage-claude/opentelemetry); [Claude API – a fogadó végpont beállítása](https://platform.claude.com/docs/en/manage-claude/opentelemetry/api).*
