---
title: "Az Anthropic 30 nap után közölheti a kritikus szoftverhibákat"
date: 2026-11-17
summary: "A cég az AI-val gyorsuló hibakeresés miatt rövidíti a koordinált közzétételi határidőket, de az automatikus találatokra és a nehezen javítható rendszerekre külön korlátokat hagy."
category: hirek
tags: ["AI", "Anthropic", "Claude", "kiberbiztonság", "nyílt forráskód"]
draft: false
hidden: false
---

Az Anthropic szerint az AI-modellek már olyan gyorsan találnak sebezhetőségeket, hogy a kilencvennapos hibaközlési ablak túl hosszúvá vált. A vállalat november 16-án bejelentette: a 2027. január 1. után jelzett magas és kritikus súlyosságú hibákat 30 nap, a többit 45 nap után teheti közzé. A már folyamatban lévő ügyek a régi határidőkkel futnak tovább.

Ez nem harmincnapos javítási garancia. A koordinált közzétételi szabály azt mondja meg, mennyi időt kap alaphelyzetben a gyártó vagy a projekt karbantartója, mielőtt a hibáról nyilvános információ jelenhet meg. Ha a címzett 15 napig nem válaszol, az Anthropic külső sérülékenység-koordinátort vonna be; eddig erre 30 napot várt. A javítás elkészülte után a részletes technikai leírást 30 nappal később közölné a korábbi 45 nap helyett.

A cég indoklása két feltételezésre épül. Egyrészt a modellek már a javítás elkészítésében is segíthetnek, másrészt nagyobb lett annak esélye, hogy ugyanazt a hibát egymástól függetlenül több rendszer is megtalálja. Ezt az Anthropic saját megfigyeléseként érdemes kezelni: a közlemény nem ad nyilvános adatsort a hibák újrafelfedezési arányáról.

Maradnak fékek is. Aktív kihasználásnál továbbra is hétnapos a határidő. Kritikus infrastruktúránál, nehezen telepíthető rendszereknél, illetve szabvány- vagy RFC-módosítást igénylő hibáknál egyedi ütemtervet egyeztetnek. Az új szabály ráadásul nem vonatkozik olyan, AI által talált eredményre, amelyet ember még nem ellenőrzött — például az OSS Scanner nyers találataira.

A változás a karbantartókra nagyobb nyomást tehet, különösen a kevés emberrel működő nyílt forrású projektekben. Az Anthropic javítási útmutatót, és ahol lehetséges, foltot vagy kerülő megoldást ígér. A valódi próba az lesz, hogy a rövidebb ablak gyorsabb javítást hoz-e anélkül, hogy a javítatlan hibák részletei idő előtt nyilvánossá válnának.

**Forrás:** [Anthropic Frontier Red Team – a koordinált hibaközlés új határidői](https://www.anthropic.com/research/coordinated-vulnerability-disclosure-timelines).
