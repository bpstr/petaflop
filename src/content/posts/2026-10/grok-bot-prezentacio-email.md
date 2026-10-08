---
title: "Prezentációt és formázott e-mailt készít a Grok Bot"
date: 2026-10-08
summary: "A Grok Bot 0.68.1 mintadiákból épít bemutatót, szerkesztett levélvázlatot ad, és több hibát javít a böngészős munkavégzésben."
category: kiadasok
tags: ["AI", "Grok", "SpaceXAI", "ügynökök"]
draft: false
hidden: false
---

A SpaceXAI október 7-i Grok Bot 0.68.1 frissítése már prezentációt is készít. Az ügynök előbb mintadiákat mutat, majd PowerPoint-fájlként vagy Google Slides-bemutatóként adja át az eredményt. A changelog szerint formázott e-mailt is összeállít egy elküldés előtti kártyán, és a Gmail levélszemét mappájában is tud keresni, illetve onnan üzenetet visszahelyezni.

A csapatoknak szánt változat Slack-felhasználói csoportokat említhet meg, miközben az `@here` és `@channel` továbbra sem küld értesítést. A frissítés több működési hibát is céloz: a böngésző megpróbál helyreállni összeomlott lap után, a beragadt lépések nagyjából 30 másodpercen belül leállnak, a Gmail-műveletek pedig ritkábban futnak hiányzó eszközhibába. A virtuális képernyő felbontása 1920 × 1200 képpontra nőtt.

Ezek dokumentált termékfunkciók, nem független minőségi tesztek. A változásnapló nem állítja, hogy az elkészült diasor tartalmilag pontos, ezért a címeket, számokat és forrásokat elküldés előtt ellenőrizni kell. A biztonság szempontjából fontos részlet, hogy az e-mail továbbra is vázlatkártyán jelenik meg: a felhasználó látja, mit készül kiküldeni az ügynök.

*Forrás: [SpaceXAI – Grok Bot changelog, v0.68.1](https://x.ai/changelog/bot).*
