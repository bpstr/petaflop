---
title: "Az 1.0-s verzióval stabil API-korszakba lépett a llama.cpp"
date: 2026-11-15
summary: "A helyi nyelvi modellek egyik alapkönyvtára lezárta a 0.x korszakot: a jövőben szemantikus verziózással jelzi az API- és ABI-töréseket."
category: kiadasok
tags: ["AI", "llama.cpp", "nyílt forráskód", "helyi AI"]
draft: false
hidden: false
---

A llama.cpp november 13-án kiadta az **1.0.0-s verziót**. A mérföldkő nem egyetlen látványos új modellformátumról szól, hanem arról, hogy kiszámíthatóbb szerződést kapnak a könyvtárra építő alkalmazások. A projekt eddig a 0.x verziók alatt az inkompatibilis módosításokat is lazábban kezelhette; mostantól a nyilvános C API törései főverzió-emelést igényelnek.

A kiadás előtt a karbantartók eltávolították a régi és már elavult felületek egy részét. Ezért az 1.0 nem automatikusan kockázatmentes frissítés: aki saját klienst, mobilalkalmazást vagy szerveres csomagot épített a llama.cpp köré, annak érdemes előbb tesztkörnyezetben fordítania, és külön ellenőriznie a `llama.h`-t használó kódot. A hivatalos kiadási szabály szerint az új, visszafelé kompatibilis képességek kisebb verziót, a hibajavítások pedig javítóverziót kapnak.

Az 1.0 tehát elsősorban az ökoszisztéma érettségét jelzi. Nem ígéret arra, hogy az API soha többé nem változik, hanem arra, hogy a verziószám ezután következetesen előre jelzi a kompatibilitási kockázatot. A csomagkezelők és a beágyazott helyi-AI termékek számára ez fontosabb lehet bármely egyedi gyorsításnál.

**Források:** [1.0.0-s címke](https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0), [kiadás előtti fejlesztői egyeztetés](https://github.com/ggml-org/llama.cpp/discussions/30566), [verziózási szabályok](https://github.com/ggml-org/llama.cpp/blob/v1.0.0/docs/release.md).
