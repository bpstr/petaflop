---
title: "Projektcímkékkel bontja szét a Claude vállalati költségeit"
date: 2026-11-07
summary: "Az Enterprise ügyfelek költségkódokat rendelhetnek a Claude-projektekhez, de a béta nem visszamenőleges és több integrációt sem mér."
category: kiadasok
tags: ["AI", "Anthropic", "Claude", "Vállalati AI"]
draft: false
hidden: false
---

Az Anthropic béta állapotban bevezette a **projektcímkéket** a Claude Enterprise csomagban. Az adminisztrátorok költségkódot, részleget vagy más egyedi címkét rendelhetnek a projektekhez, majd a használati kimutatásokban ezek szerint bonthatják szét a kiadásokat.

Egy projekthez legfeljebb 16 címke tartozhat, címkénként egy értékkel. Az elszámolás a projektben futó Claude-chatre és Coworkra, valamint a projekthez kapcsolt Claude Code-használatra terjed ki. A helyi Coworkhoz legalább a Desktop 3.6556.1, a kódolási munkához Claude Code 2.1.305 vagy újabb verzió kell.

A lefedettség nem teljes. A webes Claude Code, az Office-, Chrome-, Design-, Slack- és Teams-integráció, az Artifacts, a hangmód, valamint az API és a Console költsége nem kerül ebbe a bontásba. A funkció egyes szigorú adatkezelési beállításokkal – például HIPAA-, CMEK- vagy zéró adatmegőrzési konfigurációval – sem használható.

A címke aktiválása körülbelül két órát vehet igénybe, a költségadatok pedig az előző UTC-nap végéig látszanak. Nincs visszamenőleges hozzárendelés: a már elköltött összegeket egy később felvett címke nem rendezi át. Így a béta jó irányt mutat a belső elszámoláshoz, de nem helyettesít teljes, minden csatornára kiterjedő költségkövetést.

**Forrás:** [Anthropic Support – projektcímkék és költségkódok](https://support.claude.com/en/articles/18251257-track-spend-by-cost-code-with-project-tags)
