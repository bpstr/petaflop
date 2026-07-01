---
title: "Egy AI modell 35 órán át dolgozott egyetlen feladaton – emberi felügyelet nélkül"
date: 2026-05-20
category: kiadasok
summary: "Az Alibaba Qwen 3.7 Max nevű modellje egy GPU-kód optimalizálásán dolgozott majdnem két napig, több mint ezer egymást követő lépésben, és a végén tízszeres sebességnövekedést ért el."
tags: ["AI", "Alibaba", "Qwen", "ügynökök"]
hidden: false
draft: false
cover: ""
---

Az Alibaba Qwen csapata május 20-án jelentette be a Qwen 3.7 Max modellt, amelyet kifejezetten hosszú, önállóan futó feladatokra fejlesztettek. A bemutató legszemléletesebb pillanata egy 35 órás, megszakítás nélküli teszt volt, amely jól mutatja, milyen irányba mozdulnak el a mai AI-modellek.

## A 35 órás maraton

A kutatók egy nehéz feladatot adtak a modellnek: optimalizáljon egy GPU-kódot úgy, hogy csak az utasításokat és egy tesztelési módot kapott, majd hagyták önállóan dolgozni. A modell ezután kódot írt, tesztelt, hibákat keresett, majd újratervezte a megoldást – ezt a ciklust több mint ezerszer ismételte meg. A végeredmény: a kód tízszer gyorsabban futott, mint az eredeti referencia-implementáció, és a modell még a 30. óra után is talált érdemi javítási lehetőségeket.

Összehasonlításként: más vezető modellek (GLM 5.1, Kimi K2.6, DeepSeek V4 Pro) ugyanezen a teszten 7,3-szoros, 5-szörös és 3,3-szoros gyorsulásnál álltak meg – jóval hamarabb feladták a finomítást.

## Az "ügynöki frontvonal"

A Qwen csapat a modellt nem általános célú chatbotként, hanem "ügynöki alapmodellként" pozícionálja. A cég állítása szerint a Qwen 3.7 Max akár 1000 egymást követő eszközhívást is képes végrehajtani egyetlen, több órás munkamenet során anélkül, hogy elveszítené a kontextust.

A modell emellett erős eredményeket ért el tudományos és matematikai teszteken is: a GPQA Diamond nevű, doktori szintű természettudományos benchmarkon 92,4 százalékot teljesített, ami a legmagasabb publikált eredmények közé tartozik.

## Nem nyílt forráskódú, de kompatibilis

Fontos változás a korábbi Qwen-modellekhez képest, hogy a 3.7 Max zárt forráskódú, kizárólag API-n keresztül elérhető szolgáltatás. Az Alibaba viszont úgy építette fel, hogy kompatibilis legyen a már elterjedt fejlesztői eszközökkel, így a Claude Code, az OpenClaw és más ügynöki keretrendszerek is tudják használni.

---
*Forrás: [DataCamp – Qwen3.7-Max: Features, Benchmarks and Agent Capabilities](https://www.datacamp.com/blog/qwen3-7-max)*
