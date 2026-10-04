---
title: "E-mailes belépéssel védhetők a Cloudflare ideiglenes demólinkjei"
date: 2026-10-04
summary: "A Protected Quick Tunnels külön Cloudflare-fiók nélkül engedhet be meghívott tesztelőket egy helyben futó webalkalmazásba."
category: kiadasok
tags: ["Cloudflare", "kódolás", "biztonság"]
draft: false
hidden: false
---

Egy helyben futó webalkalmazást eddig is meg lehetett mutatni a Cloudflare ideiglenes alagútjával, de a link birtokában bárki elérhette a szolgáltatást. Az október 2-án bejelentett Protected Quick Tunnels e-mailes ellenőrzést ad ehhez. A cloudflared 2026.9.3-as verziójától a --allowed-mail kapcsolóval címekre vagy teljes e-mail-domainekre szűkíthető a hozzáférés.

A meghívott látogató böngészőben nyitja meg a trycloudflare.com alatti címet, majd a postafiókjába küldött egyszer használatos kóddal igazolja magát. Sem neki, sem a demó készítőjének nem kell Cloudflare-fiók vagy saját domain; a szolgáltatás ingyenes. Így egy bemutatóhoz nem feltétlenül kell külön tesztkörnyezetet telepíteni és saját beléptetést építeni. A védelmet viszont külön be kell kapcsolni: a kapcsoló nélkül a link továbbra is nyilvános.

Ez továbbra is fejlesztői és tesztelési eszköz, rendelkezésre állási garancia nélkül. Az e-mailes belépéshez interaktív böngésző kell, háttérben futó API-kliensekhez nem használható. Az alagút a helyi folyamat leállításával megszűnik, és minden új indítás új címet kap.

*Források: [Cloudflare – Protected Quick Tunnels](https://blog.cloudflare.com/protected-quick-tunnels/); [Cloudflare – dokumentáció és korlátok](https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/).*
