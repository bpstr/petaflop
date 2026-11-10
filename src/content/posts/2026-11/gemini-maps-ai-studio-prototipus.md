---
title: "Térképes alkalmazást épít egyetlen kérésből a Gemini az AI Studióban"
date: 2026-11-10
summary: "A Google AI Studio automatikusan beköti a Maps szolgáltatásait és ingyenes demókulcsot ad a prototípushoz, az éles használat azonban továbbra is számlázott Cloud-projektet kíván."
category: kiadasok
tags: ["AI", "Google", "Gemini", "fejlesztés"]
draft: false
hidden: false
---

A Google november 9-től közvetlenül bekötötte a **Google Maps Platformot** az AI Studio alkalmazásépítőjébe. A fejlesztő természetes nyelven leírhat például egy üzletkeresőt, útvonaltervezőt vagy 3D-s városnéző alkalmazást; a Gemini felismeri a térképes igényt, beállítja a szükséges szolgáltatásokat, majd élő előnézetet készít.

Az újdonság leginkább a kezdeti konfigurációt rövidíti le. Új Google Cloud-felhasználónál az AI Studio ingyenes projektet és **Maps Demo Key** kulcsot hoz létre, a hitelesítő adatot pedig az alkalmazás titkai között tárolja. Meglévő felhasználó választhat demókulcsot vagy csatlakoztathat számlázott Cloud-projektet.

A demókulcs nem ingyenes éles üzem: API-nként napi 100 hívásra korlátozott. Új felhasználóknál a Route Optimization, Solar és Nav Connect kivételével a Maps-portfóliót kínálja; a meglévő Cloud-felhasználók ingyenes prototípus-útvonala ennél szűkebb, a leggyakoribb Maps-, Places-, Routes-, Geocoding- és Weather-szolgáltatásokra terjed ki. A teljes portfólióhoz, a termelési kvótákhoz és a szokásos Maps-díjazáshoz számlázási fiók szükséges. A böngészőben használt JavaScript-kulcsok továbbra is láthatók, ezért az éles alkalmazásban webhely- és API-korlátozásokat kell beállítani.

A Gemini így gyorsabban ad működő térképes kiindulópontot, de nem váltja ki a kód, a jogosultságok, a költségkeret, az adatkezelés és a hozzáférhetőség ellenőrzését. A generált eredmény prototípus, nem automatikusan kiadható szolgáltatás.

**Források:** [Google Developers Blog](https://developers.googleblog.com/from-prompt-to-app-build-with-google-maps-in-ai-studio/), [Google Maps dokumentáció](https://developers.google.com/maps/ai/ai-studio), [AlphaSignal – a történet felfedezési forrása](https://alphasignal.ai/news/google-lets-gemini-build-full-maps-apps-from-a-single-prompt)
