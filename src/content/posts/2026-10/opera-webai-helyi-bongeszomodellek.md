---
title: "Helyben futó AI-t ad a weboldalaknak az Opera"
date: 2026-10-28
summary: "A WebAI korai előnézete három böngészős API-n át nyitja meg a helyi modelleket a webhelyeknek és bővítményeknek, felhős tokenköltség nélkül."
category: kiadasok
tags: ["AI", "Opera", "helyi AI", "webfejlesztés", "adatvédelem"]
draft: false
hidden: false
---

Az Opera 139-ben korai előnézetként megjelent a **WebAI**, amely weboldalaknak és bővítményeknek enged hozzáférést a felhasználó gépén futó AI-modellekhez. A fejlesztők három felületet kapnak: a Prompt API szöveget generál, a Decision API osztályoz, a Semantic Embeddings API pedig tartalmak közti jelentésbeli kapcsolatokat keres.

A helyi futtatás előnye, hogy az oldal tartalmát nem kell elküldeni egy felhős modellszolgáltatónak, nincs hívásonkénti tokenköltség, és külön API-kulcs vagy helyi szerver sem szükséges. Az Opera megoldása több kompatibilis modellt kezelhet, köztük nyílt súlyú modelleket; a felhasználó kapcsolja be a funkciót, és addig semmi sem töltődik le.

A „helyi” azonban nem jelent automatikusan kockázatmentest. A webhely továbbra is érzékeny oldaladatokhoz kérhet hozzáférést, ezért az engedélyezés és a böngésző védelme kulcsfontosságú. A számítás a saját gépet terheli, így a sebesség és az energiaigény hardverfüggő. A [TechCrunch](https://techcrunch.com/2026/10/27/opera-introduces-a-new-web-standard-to-let-users-deploy-ai-locally-in-their-browser/) szerint ez több kontrollt adhat, de nem tünteti el az összes adatvédelmi kockázatot.

A WebAI most 64 bites Intel- és AMD-alapú Windows gépeken, valamint Apple chipes Maceken próbálható ki az Opera One-ban. Intel-alapú Macen, Linuxon és ARM-os Windowson még nem érhető el; az Opera GX és a Neon támogatását a cég későbbre ígéri. Vagyis ez egy érdekes szabványjavaslat és működő előnézet, nem minden böngészőben használható webes alapfunkció.

**Források:** [Opera](https://blogs.opera.com/news/2026/10/webai-local-ai-for-the-web-now-in-opera/), [TechCrunch](https://techcrunch.com/2026/10/27/opera-introduces-a-new-web-standard-to-let-users-deploy-ai-locally-in-their-browser/)
