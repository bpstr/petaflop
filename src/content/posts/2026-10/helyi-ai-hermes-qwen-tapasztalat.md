---
title: "Helyben maradhat az adat, de megmarad az AI-barkácsolás"
date: 2026-10-12
summary: "A The Verge első Hermes–Qwen próbája érzékeny adatoknál valódi előnyt, a mindennapi automatizálásban viszont sok beállítást és törékeny folyamatokat talált."
category: tesztek
tags: ["AI", "modellek", "ügynökök"]
draft: false
hidden: false
---

Egy erős asztali gépen futó AI-ügynök egyik legjobb érve nem a sebesség, hanem az, hogy az érzékeny fájloknak nem kell elhagyniuk a számítógépet. Sean Hollister, a The Verge újságírója egy 256 gigabájt egyesített memóriával szerelt M5 Ultra Mac Studión próbálta ki a nyílt forrású Hermes Agentet és a 125 milliárd paraméteres Qwen 3.8 Flash Next modellt. Beszámolója nem laboratóriumi teszt, hanem egy hosszabb kísérlet első naplója.

A helyi rendszer több kézzelfogható feladatot megoldott. Műfajokba rendezett egy négyszáz játékos Steam-könyvtárat, pénzügyi adatokat elemzett, és laptop-összehasonlító táblázatot készített. Hollister szerint az utóbbi két munkát felhőszolgáltatásra nem bízta volna: a pénzügyi fájlok érzékenyek, a gépadatok pedig embargó alatt álltak. A Steamhez ideiglenesen API-kulcsot adott az ügynöknek, majd visszavonta.

A korlátok gyorsan előjöttek. A 105 gigabájtos modell és a drága hardver messze nem átlagos belépőszint, a napi összefoglaló többször elromlott, a laptopteszteket automatizáló szkript pedig még nem készült el. A helyi futtatás csökkentheti a felhőbe küldött adatok körét, de nem teszi automatikusan biztonságossá a gépet: az ügynöknek továbbra is fájl-, hálózati vagy API-hozzáférést kell adni, amelyet szűken és visszavonhatóan érdemes kezelni.

A tapasztalat jó ellenszere mindkét végletnek. A helyi modell nem varázslatos digitális alkalmazott, ugyanakkor nem is csupán hobbi: adatérzékeny elemzésnél és egyszeri, jól körülhatárolt rendezési feladatoknál már lehet gyakorlati értéke. A következő kérdés az, mennyit enged ebből olcsóbb, kisebb memóriájú hardveren.

*Források: [The Verge – Sean Hollister helyi AI-naplójának első része](https://www.theverge.com/ai-artificial-intelligence/1008484/learning-local-ai-hermes-qwen-model-mac-studio-testing-diary-progress); [Hermes Agent – nyílt forrású projekt](https://github.com/NousResearch/hermes-agent).*
