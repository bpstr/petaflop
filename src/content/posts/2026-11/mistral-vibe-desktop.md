---
title: "Helyi és felhős kódügynököt egyesít a Mistral Vibe Desktop"
date: 2026-11-19
summary: "A macOS-re és Windowsra kiadott alkalmazás helyi kódtárral vagy felhős homokozóban futtat ügynököket, és egy ablakba hozza a diffeket, parancsokat és pull requesteket."
category: kiadasok
tags: ["AI", "Mistral", "kódolás", "fejlesztői eszközök"]
draft: false
hidden: false
---

A Mistral november 17-én általánosan elérhetővé tette a **Vibe Desktopot** macOS-re és Windowsra. Az alkalmazás a munkaasszisztenst, a helyben futó kódügynököt és a felhős fejlesztési munkameneteket egyesíti, így külön CLI-telepítés nélkül lehet fájlokat, parancsokat, módosításokat és pull requesteket követni egy felületen. Linux-verziót későbbre ígérnek.

Új munkamenetnél a fejlesztő választhat a saját gépén lévő kódtár és egy kezelt felhős homokozó között. A helyi mód hozzáférhet a projekt fejlesztői környezetéhez és szolgáltatásaihoz, míg a felhős feladat akkor is folytatódhat, ha a laptop nincs a munkához kötve. A két felület ugyanazt az alap ügynökmotort és munkamenetnaplót használja, de a Mistral külön jelzi, hogy az elérhető eszközök és rendszerutasítások eltérhetnek, ezért ugyanaz a feladat nem feltétlenül viselkedik azonosan.

A párhuzamos feladatokat Git worktree-k választják szét, így több ügynök dolgozhat ugyanazon a kódtáron anélkül, hogy közvetlenül felülírnák egymás fájljait. A fő beszélgetésből al-munkamenetek és alügynökök indíthatók, a háttérfolyamatok – például build, fejlesztői szerver vagy fájlfigyelő – pedig külön panelen követhetők és leállíthatók.

A beépített diffnézet és kódellenőrzés kényelmesebbé teszi a felügyeletet, de nem oldja meg automatikusan az ütköző követelményeket vagy a hibás módosításokat. A Vibe által készített kódhoz ugyanúgy szükség marad tesztekre, emberi átnézésre és a helyi parancsok jogosultságainak korlátozására.

**Források:** [Mistral kiadási jegyzet](https://docs.mistral.ai/resources/release-notes), [Mistral dokumentáció](https://docs.mistral.ai/vibe/code/desktop/parallel-tasks), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/mistral-ships-vibe-desktop-to-challenge-anthropic-and-openai-on-macos)
