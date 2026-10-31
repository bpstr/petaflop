---
title: "Általánosan elérhető lett a Gemini Computer Use"
date: 2026-10-31
summary: "A Google képernyőképből kattintást és gépelést tervező eszköze kilépett az előnézetből, de a végrehajtó környezetet és a biztonsági megállásokat továbbra is a fejlesztőnek kell megépítenie."
category: kiadasok
tags: ["AI", "Google", "Gemini", "automatizálás"]
draft: false
hidden: false
---

A Google október 30-án általánosan elérhetővé tette a Gemini API Computer Use eszközét az Interactions és a GenerateContent API-ban. Ez a júniusi előnézet érettségi fokozatának változása, nem egy teljesen új képesség: a támogatott Gemini 4 és 3.x modellek böngészőben, mobilon és asztali felületen is tervezhetnek kattintást, gépelést és más kezelői műveleteket.

A név könnyen félreérthető. A Gemini nem kap a Google-től kész távoli számítógépet. A kliens képernyőképet küld a modellnek, az pedig koordinátákkal és szándékleírással ellátott függvényhívásokat ad vissza. A fejlesztőnek kell ezeket saját böngészőben, emulátorban vagy asztali környezetben végrehajtania, új képernyőképet készítenie, majd folytatnia az ügynöki ciklust.

A dokumentáció pénzügyi tranzakciókhoz, érzékeny adatok módosításához, kommunikációhoz, fióklétrehozáshoz és jogi feltételek elfogadásához külön biztonsági szabályokat ad. Ha a modell megerősítést kér, az alkalmazásnak ténylegesen át kell adnia a döntést a felhasználónak. Opcionális képernyőkép-vizsgálat rejtett promptinjekciókat is kereshet, de ez nem helyettesíti az elkülönített futtatókörnyezetet és a visszafordíthatatlan lépések előtti ellenőrzést.

A GA-státusz tehát stabilabb termékígéretet jelez, nem hibamentes autonómiát. A [Google útmutatója](https://ai.google.dev/gemini-api/docs/computer-use) maga is emberi felügyeletet és külön végrehajtási réteget ír elő.

**Források:** [Gemini API kiadási napló](https://ai.google.dev/gemini-api/docs/changelog), [Computer Use útmutató](https://ai.google.dev/gemini-api/docs/computer-use)
