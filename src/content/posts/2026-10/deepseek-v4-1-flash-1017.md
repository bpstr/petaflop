---
title: "MIT-licencelt súlyokkal frissült a DeepSeek V4.1 Flash"
date: 2026-10-18
summary: "A 1017-es kiadás gyorsabb végrehajtást és rövidebb válaszokat ígér, miközben a modell súlyai letölthetők, a keresőeszközök pedig nyilvános API-t kaptak."
category: kiadasok
tags: ["AI", "modellek", "kódolás"]
draft: false
hidden: false
---

A DeepSeek október 17-én kiadta a V4.1 Flash 1017-es frissítését. A modell már használható a vállalat webes felületén, alkalmazásában és API-ján, a súlyok pedig MIT-licenccel letölthetők a Hugging Face-ről és a ModelScope-ról.

A kiadás a szeptemberi V4.1 Flash kisebb frissítése, nem új modellgeneráció. A DeepSeek saját táblázata mind a tizenegy felsorolt teszten magasabb pontszámot közöl az elődnél, köztük kódolási, ügynökös és vizuális feladatokon. Ezek gyártói mérések: a beállítások tesztenként eltérnek, és független összehasonlítás még nem igazolta az általános előnyt.

A modellkártya szerint a súlyok futtatásához külön konverziós és következtetési útmutató tartozik. A promptformátumhoz nincs hagyományos Jinja-sablon; a DeepSeek Python-referenciaimplementációt, valamint Rustban írt, Python-kötésekkel használható `deepseek-recipe` könyvtárat ad. A nyílt súly tehát nem jelenti azt, hogy a több százmilliárd paraméteres modell átlagos számítógépen praktikusan futtatható.

Ugyanebben a bejelentésben vált mindenki számára elérhetővé a DeepSeek Search és Fetch API. Mindkét végpont ára 0,75 dollár ezer hívásonként. A DeepSeek Harness, a Claude Code és a Codex szerveroldali eszközhívásai a DeepSeek API használóinak október 31-én 16:00 UTC-ig díjmentesek; ezután a dokumentált végpontdíj érvényes.

**Források:** [DeepSeek – kiadási bejelentés](https://api-docs.deepseek.com/news/news261017/); [DeepSeek – modellkártya a Hugging Face-en](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017).
