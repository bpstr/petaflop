---
title: "A GitHub Actions végleg Node 24-re váltott"
date: 2026-09-24
summary: "A GitHub eltávolította a Node 20 futtatókörnyezetet az Actionsből, így a JavaScript actionöknek már Node 24-kompatibilisnek kell lenniük."
category: hirek
tags: ["GitHub", "Node.js", "CI/CD"]
draft: false
hidden: false
---

A GitHub szeptember 23-án lezárta a Node 20 kivezetését a GitHub Actions futtatókon. A JavaScript-alapú actionök most már Node 24-en futnak, és megszűnt az a korábbi környezeti kapcsoló is, amellyel ideiglenesen vissza lehetett térni Node 20-ra.

Action-karbantartóknak a `runs.using` értéket `node24`-re kell frissíteniük és új verziót kiadniuk. Workflow-felhasználóknak pedig érdemes a használt actionök legfrissebb, Node 24-et támogató kiadásaira váltani.

A változás a régebbi saját futtatókat is érintheti: a GitHub szerint a Node 24 nem kompatibilis macOS 13.4-gyel vagy korábbi rendszerekkel, és az ARM32 sem hivatalosan támogatott. Ez tehát nem csak verziófrissítés, hanem bizonyos self-hosted runner gépek végét is jelentheti.

*Forrás: [GitHub Changelog](https://github.blog/changelog/2026-09-23-node-20-is-no-longer-available-in-github-actions/)*
