---
title: "Forráskóddá teszi a botok utasításait és tesztjeit a Cursor"
date: 2026-10-27
summary: "Az Agent SDK 0.3 a promptokat, TypeScript-eszközöket és ellenőrzéseket egy verziózható projektbe rendezi, amely Cursor-tárhelyen vagy saját infrastruktúrán is futhat."
category: kiadasok
tags: ["AI", "Cursor", "ügynökök", "kódolás"]
draft: false
hidden: false
---

A Cursor október 23-án általánosan elérhetőként adta ki az **Agent SDK 0.3** verzióját. A keretrendszer nem egy újabb csevegőfelület: egy ügynök utasításait Markdownban, az eszközeit és tesztjeit TypeScriptben tartja, így ugyanúgy verziózhatók, ellenőrizhetők és visszaállíthatók, mint az alkalmazáskód.

A projekt eseménycsatornákat is tartalmazhat GitHubhoz, Slackhez, hibajegykezelőkhöz vagy webhookszerű indítókhoz. A Cursor szerint ugyanaz az alap működteti a Bugbotot, a Security Review-t, az Approval Botot és a Rollouts funkciót. A kész ügynök Cursor által kezelt tárhelyre telepíthető, de a folyamat saját infrastruktúrán is futtatható; a modellhívások, titkok és tárolt eredmények útját ettől még külön ellenőrizni kell.

A hivatalos telepítési név jelenleg `@grok/agent-sdk`, az előző név `@cursor/bdk` volt. Ez könnyen összekeverhető a Grok terméknévvel, ezért automatizált telepítésben érdemes pontos verziót rögzíteni. A gyorsindító legalább Node.js 22.13-at és Cursor-bejelentkezést kér.

A mellékelt PR-ellenőrző példa képes GitHub-változtatásokat lekérni és véleményezést beküldeni. Ez jól mutatja a nyereséget és a kockázatot: az ügynök tesztelhető kóddá válik, de írási jogosultsággal valódi külső műveletet végez. A minimális hozzáférés, a regressziós ellenőrzés és a kockázatos döntések emberi kapuja továbbra is szükséges.

**Források:** [Cursor – Agent SDK](https://cursor.com/docs/agent-sdk), [Cursor – changelog](https://cursor.com/docs/agent-sdk/changelog), [Cursor – PR-ellenőrző](https://cursor.com/docs/agent-sdk/quickstart), [AlphaSignal](https://alphasignal.ai/news/cursor-s-agent-sdk-lets-developers-build-and-version-bots-like-code)
