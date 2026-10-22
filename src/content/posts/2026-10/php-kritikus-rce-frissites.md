---
title: "Két kritikus PHP-hiba miatt azonnali frissítést kérnek az üzemeltetőktől"
date: 2026-10-22
summary: "A távoli kódfuttatást lehetővé tevő hibákat a PHP 8.2.35, 8.3.36, 8.4.27 és 8.5.12 javítja; teljes kerülőmegoldás nincs."
category: hirek
tags: ["AI", "biztonság", "kódolás"]
draft: false
hidden: false
---

A PHP fejlesztői október 21-én rendkívüli biztonsági kiadásokat tettek közzé két, hitelesítés nélküli távoli kódfuttatást lehetővé tevő sérülékenység miatt. A CVE-2026-109618 és CVE-2026-109619 egyaránt 9,2-es értékelést kapott a CVSS 4.0 skálán.

A támogatott ágak javított verziói: PHP 8.2.35, 8.3.36, 8.4.27 és 8.5.12. A projekt közlése egyértelmű: nincs teljes kerülőmegoldás, a biztonságos megoldás a frissítés. A PHP 8.2 támogatása ráadásul december 31-én véget ér, a régebbi, már nem támogatott telepítésekhez pedig nem készül új javítás.

Ez nem egyetlen WordPress-bővítmény hibája. A sérülékeny kód magában a PHP-ban van; a Calif Research többek között WordPress-, Drupal-, Joomla-, MediaWiki- és Nextcloud-környezetben igazolt támadási utat. A Wiz szerint legalább az egyik hiba a PHP 5.4-ig visszanyúló verziókat is érinti, és folyamatmemóriából jelszavak vagy tokenek is kiszivároghatnak.

Az AI itt a felfedezés és az exploitfejlesztés része volt. A Wiz a saját Atlas rendszerét, a Gemini 4 Argont és a GPT-5.6 Solt használta; a Calif és az OpenAI külön vizsgálata is eljutott a hibákhoz. Ez nem bizonyítja, hogy egy modell önállóan törte fel az internetet, viszont a javítás után közzétett részletek gyorsabban alakíthatók működő támadássá. Az üzemeltetőknek ezért most a pontos PHP-verzió ellenőrzése a legsürgősebb feladat.

**Források:** [PHP](https://www.php.net/archive/2026.php), [Calif Research](https://calif.io/php2shell/), [Reuters](https://www.reuters.com/world/asia-pacific/eu-agency-warns-websites-may-need-be-taken-offline-php-prepares-patches-2026-10-21/)
