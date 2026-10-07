---
title: "Az EmbeddingGemma 2 egy térben keres szöveget, képet és hangot"
date: 2026-10-07
summary: "A Google 740 millió paraméteres, letölthető modellje helyi kereséshez alakít közös vektorokká szöveget, képet, videót és hangot."
category: kiadasok
tags: ["AI", "Google", "modellek", "kódolás"]
draft: false
hidden: false
---

Egy hangjegyzet alapján is meg lehet találni a hozzá illő videórészletet, ha mindkettő ugyanabba a jelentéstérbe kerül. A Google október 6-án kiadott EmbeddingGemma 2 modellje szöveget, kódot, képet, videót és hangot alakít közös, 768 dimenziós vektorokká. Ezekkel helyi kereső, osztályozó vagy RAG-rendszer építhető anélkül, hogy maga a modell hosszú szöveges választ generálna.

A 740 millió paraméteres modell Apache 2.0 licenccel tölthető le. Moduláris felépítésű: a csak szöveges használathoz 270 millió paraméter elég, a képi kódoló 170, a hangkódoló további 300 milliót tesz hozzá. A Matryoshka Representation Learning miatt a 768 dimenziós kimenet 512, 256 vagy 128 dimenzióra rövidíthető; a Google szerint ez akár hatszoros tárhelycsökkenést hozhat a vektoradatbázisban, minőségromlási kompromisszummal.

A nyolcezer tokenes kontextus a dokumentáció szerint legfeljebb 5,5 perc hangot, 29 képet vagy 58 videóképkockát kezelhet egy bemenetben. A modell fogyasztói hardverre készült, és a képi vagy hangkódoló elhagyható, ha nincs rá szükség. A minőségi összehasonlítások ugyanakkor a Google és a modellkártya mérései; nem független eszköztesztek, és a tényleges memóriaigény a kvantálástól, a futtatókönyvtártól és a bekapcsolt modalitásoktól függ.

**Források:** [Google bejelentés](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/), [EmbeddingGemma 2 modellkártya](https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2), [Hugging Face modell](https://huggingface.co/google/embeddinggemma-2)
