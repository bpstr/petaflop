---
title: "Ügynökbarát parancssoros klienst kapott a Gemini API"
date: 2026-10-30
summary: "A nyílt forrású gemini-api kliensből szkriptek és kódolóügynökök is elérhetik a Google modelljeit, médiaeszközeit és kezelt ügynökeit, de a kiadás még béta."
category: kiadasok
tags: ["AI", "Google", "Gemini", "API"]
draft: false
hidden: false
---

A Google október 27-én béta állapotban kiadta a `gemini-api` parancssoros klienst. A programot kifejezetten olyan kódolóügynökökhöz, szkriptekhez és CI-folyamatokhoz készítették, amelyek egy shellparanccsal szeretnék elérni a Gemini API-t, külön SDK beépítése nélkül.

A kliens az Interactions API-ra támaszkodik. Szöveget, képet, beszédet, zenét és videót generálhat, fájlokat elemezhet, illetve elindíthat és később folytathat Google által üzemeltetett ügynökfeladatokat. A bináris alapból állapotmentes: a több lépésből álló munkához az előző interakció vagy a háttérfeladat azonosítóját kell továbbadni. A médiafájlokat lemezre írja, a szabványos kimenetre pedig az elérési utat teszi, így a bináris tartalom nem tölti meg az ügynök kontextusát.

Ez nem a beszélgetős `@google/gemini-cli`, hanem egy API-kliens. A `--dry-run` hálózati kérés nélkül ellenőrzi és előnézetben mutatja a hívást, az `--agent-mode` pedig géppel feldolgozható hibákat ad. A projekt Apache 2.0 licencű, macOSre, Linuxra és Windowsra is kínál binárist. A legfrissebb kiadás a `v0.4.4`, de a Google figyelmeztet: a béta alatt kisebb verziók között is lehet törő változás, ezért automatizált környezetben érdemes pontos verziót rögzíteni.

*Források: [Google – Gemini API CLI](https://ai.google.dev/gemini-api/docs/cli); [Gemini API kiadási napló](https://ai.google.dev/gemini-api/docs/changelog); [GitHub – gemini-api-cli v0.4.4](https://github.com/google-gemini/gemini-api-cli/releases/tag/v0.4.4).*
