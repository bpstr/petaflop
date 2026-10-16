---
title: "A felhasználók munkalépéseiből készít skilljavaslatokat a CopilotKit"
date: 2026-10-16
summary: "A CLiF az ügynök és az ember lépéseit közös eseménysorba gyűjti; a javasolt utasításokat ember hagyja jóvá, a felhasználói munkafolyamatok rögzítése korai hozzáférésű."
category: kiadasok
tags: ["AI", "ügynökök", "kódolás", "adatvédelem"]
draft: false
hidden: false
---

Az ügynök befejez egy feladatot, a felhasználó pedig még kijavít néhány lépést a felületen. Ha csak az ügynök naplója marad meg, éppen ez a javítás hiányozhat a következő fejlesztéshez. A CopilotKit október 13-án bemutatott CLiF rendszere az ember és az ügynök tevékenységét együtt használná fel az ismétlődő munkák megtanításához.

A CLiF a Continual Learning from Full-Stack Trajectories rövidítése. Az AG-UI protokollon keresztül közös eseménysorba gyűjti az ügynök futásait, eszközhívásait és állapotváltozásait, valamint a felhasználó képernyőn végzett lépéseit és az általuk indított kéréseket. Ebből keres visszatérő mintákat, majd újrahasználható utasításokat, skilleket javasol.

A lényeg az ellenőrzési pont. A javasolt `SKILL.md` fájlt ember vizsgálja felül és publikálja; az elemzés önmagában nem teszi élessé. A CopilotKit dokumentációja külön kiemeli, hogy a közzétett skill verziózott utasításkészlet, nem a modell automatikus újratanítása. A futások begyűjtése és a jóváhagyott skillek átadása külön bekötést igényel.

A termék érettsége sem egységes. A beszélgetésekből tanuló Automatic Learning már használható, a közvetlen felhasználói munkalépésekre épülő product trajectories viszont early access állapotú. A vállalat exportálható skilleket, értékelési eseteket és finomhangolási adatkészleteket ígér, és saját infrastruktúrán futtatható Intelligence-telepítést is kínál. Az elérhető funkciókat és feltételeket ezért a konkrét telepítésnél kell tisztázni.

Ez hasznos fejlesztői irány: ne csak azt őrizzük meg, hol hibázott az ügynök, hanem azt is, hogyan javította ki az ember. A visszatérő szokás azonban még nem feltétlenül helyes üzleti szabály. A jóváhagyásnál azt is ellenőrizni kell, hogy a javaslat egy általános eljárást vagy csak néhány felhasználó kerülőútját írja le. A CLiF-et nem teszteltük, önálló megbízhatósági javulást nem állítunk.

*Források: [CopilotKit – a CLiF október 13-i bejelentése](https://www.copilotkit.ai/blog/introducing-clif); [CopilotKit – Automatic Learning és emberi felülvizsgálat](https://docs.copilotkit.ai/learning); [CopilotKit – aktuális hozzáférési állapot](https://www.copilotkit.ai/clif).*
