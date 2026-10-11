---
title: "Külön szabályrendszerbe zárja az AI-ügynököket a Microsoft"
date: 2026-10-11
summary: "Az általánosan elérhető Microsoft Execution Containers fájl-, hálózati és felületi korlátokat kényszerít az ügynökre; a védelem erőssége a választott háttérrendszertől függ."
category: kiadasok
tags: ["AI", "Microsoft", "ügynökök", "kódolás", "biztonság"]
draft: false
hidden: false
---

A Microsoft általánosan elérhetővé tette a Microsoft Execution Containers (MXC) keretrendszert, amely külön, az AI-ügynök által nem módosítható szabályokkal korlátozza a futtatott kódot. A fejlesztő megadhatja például, mely fájlokhoz, hálózati címekhez vagy felületekhez férhet hozzá a munkafolyamat; az MXC ezt a választott konténerrel kényszeríti ki.

Ez lényeges különbség egy promptba írt tiltáshoz képest. Ha egy kódoló ügynöknek olvasnia kell az éles rendszer beállításait, de nem írhatja át őket, a jogosultságot a modellen kívüli végrehajtási réteg érvényesíti. A modell, egy bővítmény vagy a generált program nem adhat saját magának további hozzáférést.

Az egységes JSON-konfiguráció mögött több, eltérő tulajdonságú háttérrendszer áll. A folyamatkonténerek Windows 11-en, macOS-en és Linuxon futnak; a session- és WSL-konténerek Windows 11-hez kötődnek. A legerősebb elkülönítést célzó MicroVM Windowsra és Linuxra készült, de egyelőre kísérleti. Emiatt az „MXC-ben fut” önmagában még nem mondja meg a tényleges izoláció szintjét.

A nyílt forrású, MIT-licencű projekt Rust-, .NET- és Node SDK-t kínál. Három szabálymódot is dokumentál: a permissive csak naplózza az engedélyen kívüli hozzáférést, a learning blokkol és rögzít, az enforcement pedig blokkol, de nem készít aktivitási jelentést. Rosszul választott mód vagy túl tág engedély tehát továbbra is gyenge védelmet adhat.

A Microsoft bejelentését és dokumentációját ellenőriztük, saját terheléses vagy behatolási tesztet nem végeztünk. Az MXC értéke nem az, hogy tévedhetetlenné teszi az ügynököt, hanem hogy egy tévedés lehetséges hatását előre kijelölt határok közé szoríthatja.

*Források: [Microsoft – az MXC általános elérhetőségének bejelentése](https://blogs.windows.com/windowsdeveloper/2026/10/07/microsoft-execution-containers-policy-driven-containment-for-ai-agents/); [Microsoft – MXC forráskód és dokumentáció](https://github.com/microsoft/mxc); [Reuters – háttér a Microsoft bejelentéséről](https://www.reuters.com/business/microsoft-nvidia-ceos-unveil-new-ai-laptop-san-francisco-event-2026-10-07/).*
