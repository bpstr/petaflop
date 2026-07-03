---
title: "WebBrain: nyílt forrású böngészőügynök"
date: 2026-07-02
category: kiadasok
summary: "A WebBrain egy nyílt forrású, helyben futó AI-böngészőügynök Chrome-hoz és Firefoxhoz, amely úgy olvas oldalakat és automatizál feladatokat, hogy közben egyetlen adat sem hagyja el a gépet."
tags: ["AI", "böngésző", "ügynök", "nyílt forrás", "adatvédelem"]
draft: false
---

Megjelent a [WebBrain](https://www.webbrain.one/), egy nyílt forrású AI-böngészőügynök, amely Chrome és Firefox alatt olvas weboldalakat, adatokat gyűjt ki és többlépcsős feladatokat automatizál. A legtöbb hasonló kiegészítővel szemben teljes egészében helyi modellen is futtatható.

## Adatvédelem elsőként

A WebBrain a böngésző oldalpaneljében él, és lokális modellel dolgozva egyetlen bit adat sem hagyja el a felhasználó gépét. A futtatáshoz a llama.cpp vagy az Ollama, illetve tetszőleges felhő-API is használható – az ajánlott modell a Qwen 3.6 35B. A projekt Emre Sokullu munkája, MIT-licenc alatt, telemetria és fiókkötelezettség nélkül.

## Két üzemmód

Az „Ask" mód csak olvassa az oldalt, míg az „Act" mód a Chrome DevTools Protocol segítségével kattint és gépel. Az ügynök biztonságközpontú: alapból csak olvas, a kockázatos műveletekhez pedig jóváhagyást kér, és a felületet használja a közvetlen API-hívások helyett.

## Elérhetőség

A bővítmény elérhető a Chrome Web Store-ban, a Firefox Add-ons oldalon és [GitHubon](https://github.com/esokullu/webbrain/). Saját üzemeltetéssel örökre ingyenes, a menedzselt WebBrain Cloud pedig eszközönként havi 5 dollár.

---
*Forrás: [MarkTechPost – Meet WebBrain](https://www.marktechpost.com/2026/07/02/meet-webbrain-an-open-source-local-first-ai-browser-agent-that-reads-pages-and-automates-tasks-in-chrome-and-firefox/)*
