---
title: "Közös belépési szabályokat tervez a Meta és a Sierra a személyes AI-ügynököknek"
date: 2026-10-09
summary: "A Personal Agent Protocol az ügyfél engedélyét és a vállalkozás hozzáférési szabályait kapcsolná össze; az első specifikációt még csak októberre ígérik."
category: hirek
tags: ["AI", "Meta", "ügynökök", "biztonság"]
draft: false
hidden: false
---

Ha egy AI-ügynök rendelést módosít az ügyfél helyett, a webáruháznak tudnia kell, kit képvisel, és mire kapott engedélyt. Erre a helyzetre tervez közös megoldást a Meta és a Sierra: október 6-án bejelentették a Personal Agent Protocolt, röviden PAP-ot. A kezdeményezés partnerei között a Shopify, a Stripe és a Walmart is szerepel.

A Sierra leírásában az ügynök a vállalkozás weboldalán fedezné fel, milyen szolgáltatásokat érhet el. Vendégként például készletet vagy visszaküldési feltételeket kérdezhetne le. Ügyfélfiókot érintő feladatnál bejelentkezés következne, a felhasználó pedig eldönthetné, hogy csak olvasási vagy módosítási hozzáférést ad.

A munkamenet az OAuth engedélyezési szabványra épülne, és megmaradna akkor is, ha az ügynök csatornát vált. A cég választhatná meg, hogy weboldalán, MCP- vagy OpenAPI-alapú API-kapcsolaton, esetleg saját ügyfélszolgálati ügynökén keresztül fogadja a kérést. A cél az ügyfél nevében végzett műveletek követhetőbbé tétele, a meglévő felületek használatával.

Ez egyelőre fejlesztési terv. A Sierra október későbbi részére ígéri a v0.1 specifikációt, és referenciaimplementációt is tervez. A részletesebb műveleti engedélyek, az értesítések és a fizetési kiterjesztések későbbi lehetőségként szerepelnek. A bejelentés ezért nem jelent ma már használható, általánosan elfogadott fizetési protokollt.

A fejlesztői kérdés az lesz, milyen pontosan írja le az első specifikáció a felhatalmazás határait. Egy rendelés megtekintése és annak módosítása külön engedélyt igénylő helyzet; a közös munkamenet önmagában nem dönti el, mit szabad végrehajtani. A résztvevők neve figyelmet érdemel, de a kompatibilitást majd a közzétett specifikáció és a tényleges implementációk alapján lehet megítélni.

*Források: [Sierra – Introducing Personal Agent Protocol](https://sierra.ai/blog/introducing-personal-agent-protocol); [The Next Web – a protokoll terve és partnerei](https://thenextweb.com/news/personal-agent-protocol-sierra-meta).*
