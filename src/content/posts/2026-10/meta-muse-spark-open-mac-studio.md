---
title: "Két Mac Studión fut helyben a Meta 816 milliárd paraméteres Muse modellje"
date: 2026-10-16
summary: "A Muse Spark Open letölthető modellsúlyokat és egymillió tokenes kontextust kínál, de a Meta által támogatott helyi futtatáshoz is rendkívüli memóriakapacitás kell."
category: kiadasok
tags: ["AI", "Meta", "modellek", "kódolás"]
draft: false
hidden: false
---

A Meta október 15-én kiadta a Muse Spark Open modellsúlyait. A keverékszakértői, vagyis MoE-architektúrában 816 milliárd paraméterből tokenenként 42 milliárd aktív; a modell szöveget, képet, videót és hangot fogad, a kimenete szöveg. A dokumentált kontextusablak egymillió token.

A „helyi futtatás” itt nem átlagos asztali gépet jelent. A Meta szerint az NVFP4-változat legalább 700 GB GPU-memóriát kér, míg az Apple két, egyenként 512 GB egyesített memóriás M5 Ultra Mac Studióra optimalizálta az MLX-es futtatást. Az Apple mérésében 8192 tokenes kontextus után két gép 15,74, négy gép 36,73 tokent generált másodpercenként. Ezek 128 generált tokennel, meghatározott kvantálással és saját benchmarkeszközzel mért számok, nem általános teljesítményígéretek.

A modell kódolásra és ügynökös feladatokra készült, súlyai Hugging Face-ről tölthetők le, illetve külső szolgáltatók API-ján is elérhetők. Nem érdemes egyszerűen „nyílt forrásúnak” nevezni: a kiadás saját **Muse Model License** alatt áll. Ez más termék, mint a [korábban bemutatott Muse Wonder](https://petaflop.hu/posts/2026-10/meta-muse-wonder-modellek/), így a két hozzáférési és futtatási modellt sem szabad összekeverni.

**Források:** [Meta modellkártya](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B), [Meta fejlesztői útmutató](https://dev.meta.ai/resources/blog/build-with-muse-spark-open), [Apple MLX-mérés](https://machinelearning.apple.com/research/mlx-distributed-inference)
