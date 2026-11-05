---
title: "Egy Postman-frissítés kérdés nélkül nyúlhatott a Codex és a Claude Code beállításaihoz"
date: 2026-11-05
summary: "Egy dokumentált macOS-eset szerint a Postman asztali alkalmazása automatikusan telepített ügynökbővítményeket; az eset a pluginok engedélyezési határát teszi kézzelfoghatóvá."
category: hirek
tags: ["AI", "Codex", "Claude Code", "Postman", "biztonság"]
draft: false
hidden: false
---

Egy fejlesztő beszámolója szerint a Postman asztali alkalmazásának megnyitása után felhasználói szintű bővítmények jelentek meg a Codexben és a Claude Code-ban, külön jóváhagyás nélkül. A GitHubon közzétett napló egy `auto-existing-upgrade` eseménynél mindkét integrációt telepítettként rögzítette; a vizsgálat a Postman 12.33.4-es macOS-verziójára vonatkozott.

A Codex beállításaiba egy Postman-plugin, egy piactér, egy távoli MCP-kapcsolat és egy munkamenet-indító hook került. A Claude Code konfigurációjában szintén engedélyezett bővítmény jelent meg, a gépen pedig Postman CLI-t találtak. A hook arra utasítja az ügynököt, hogy összetettebb API-fejlesztési feladatoknál töltse be a Postman saját készségét.

A probléma nem maga az integráció, hanem a beleegyezés határa. A Postman dokumentációja az egyedi telepítésnél azt írja, hogy a Codex a hookot nem megbízhatóként veszi fel, és később felülvizsgálatot kér. A több észlelt ügynököt célzó telepítő viszont jóváhagyhatja a hookot a felhasználó helyett.

Az esetet nem reprodukálták függetlenül tiszta gépen, és nincs bizonyíték API-adatok kiszivárgására. Egyetlen dokumentált telepítésből az érintett gépek száma sem állapítható meg. Fejlesztőknek mégis érdemes időnként átnézniük a pluginokat, hookokat és MCP-kapcsolatokat: ezek nem puszta kiegészítők, hanem az ügynök induló utasításait és hozzáféréseit módosíthatják.

**Források:** [eredeti GitHub-bejelentés](https://github.com/postmanlabs/postman-app-support/issues/14370), [Postman dokumentáció](https://learning.postman.com/docs/postman-plugin/install/per-agent/), [The New Stack](https://thenewstack.io/postman-plugin-coding-agents/)
