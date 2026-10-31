---
title: "Nyílt súlyokkal szólal meg 12 nyelven a Maya 2 Native"
date: 2026-10-31
summary: "A Maya Research önállóan futtatható beszédmodellje tizenegy indiai nyelvet és az angolt támogatja, rövid hangmintából másol hangszínt, de a kiadás a korlátait is dokumentálja."
category: kiadasok
tags: ["AI", "hangmodell", "nyílt súlyok", "India"]
draft: false
hidden: false
---

A Maya Research kiadta a Maya 2 Native beszédmodellt, amely tizenegy indiai nyelven és angolul készít folyamatosan érkező, 24 kHz-es hangot. Az október 25-i 1.0-s ellenőrzőpont 2,5 milliárd egyedi paramétert, húsz beépített hangot és 3–10 másodperces referenciából induló hangmásolást kínál. A súlyok és a következtetési kód Apache 2.0 licenc alatt tölthetők le.

A modell helyben kiszolgálható Pythonból, OpenAI-kompatibilis beszédvégponton vagy WebSocketen keresztül. Ez hasznos lehet olyan indiai nyelvű hangügynököknél és akadálymentesítő eszközöknél, amelyek nem küldhetik külső szolgáltatóhoz a szöveget vagy a hangot. A csomagolásnak van egy meglepő részlete: a termék neve Maya 2 Native, de a Python-csomag és a fő osztály továbbra is `maya3`, illetve `Maya3TTS` néven szerepel.

Az [AlphaSignal által kiemelt](https://alphasignal.ai/news/maya-research-drops-maya-2-native-a-free-12-language-voice-ai) kiadás nem minden nyelven egyformán erős. A modellkártya gyengébb asszámi működést, problémás URL-eket és kódkevert szöveget említ. A másolt hang hasonlósága és akcentusa változhat, a kiadás pedig nem közöl külön hangmásolási benchmarkot. A bemutató mintákat alacsony karakterhibájú eredmények közül válogatták, ezért nem tekinthetők véletlen, független tesztnek.

Üzemeltetéskor további munka is marad: a mellékelt HTTP-szerverben nincs beépített hitelesítés, így nyilvános szolgáltatás előtt hozzáférés-szabályozást kell köré építeni. A nyílt súly itt valódi önálló futtatást jelent, nem kész, gondozásmentes felhőszolgáltatást.

**Források:** [Maya 2 Native modellkártya](https://huggingface.co/maya-research/maya2-native), [GitHub-kód](https://github.com/MayaResearch/maya2-native), [AlphaSignal](https://alphasignal.ai/news/maya-research-drops-maya-2-native-a-free-12-language-voice-ai)
