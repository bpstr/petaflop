---
title: "GGUF a Transformersben: kisebb memóriaigény, egyelőre Macen"
date: 2026-10-02
summary: "A Hugging Face szeptember 22-i fejlesztése a tömörített modellsúlyok közvetlen használatát hozza el, egyelőre korlátozott Apple Silicon-támogatással."
category: kiadasok
tags: ["AI", "modellek", "kódolás"]
draft: false
hidden: false
---

A helyben futó nyelvi modell gyakran nem a processzor sebességén, hanem a rendelkezésre álló memórián akad el. A Hugging Face szeptember 22-én olyan GGUF-futtatást jelentett be a Transformershez, amely a llama.cpp ökoszisztémájának tömörített modellváltozatait a megszokott Python-felületen teszi használhatóvá.

A lényeg nem pusztán az, hogy megnyitható egy GGUF-fájl. Az új végrehajtási út a kvantált, vagyis kisebb pontossággal tárolt súlyokat közvetlenül használja, ahelyett hogy a teljes súlymátrixot nagyobb memóriaigényű formára bontaná vissza. Ehhez a ggml Metalra írt számítási rutinjait kapcsolják a PyTorch-alapú modellhez.

A tömörített futtatási mód egyelőre Apple Siliconon, MPS háttérrel működik. Elsősorban egyetlen interaktív beszélgetésre céloz, a kötegelt feldolgozás még fejlesztés alatt áll. Kezdetben Qwen3.5-alapú architektúrákat és kompatibilis Qwen3.8-változatokat támogat. Nem általános gyorsítás minden modellhez és videokártyához, hanem konkrét lépés a kisebb memóriaigényű, helyi Pythonos modellfuttatás felé.

*Források: [Hugging Face – Transformers és llama.cpp kvantálás](https://huggingface.co/blog/transformers-llama-cpp-quants).*
