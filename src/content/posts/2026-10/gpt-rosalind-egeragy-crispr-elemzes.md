---
title: "32 perc alatt elemezte több ezer AI-ügynök az egéragy CRISPR-atlaszát"
date: 2026-10-22
summary: "A GPT-Rosalind ügynökei meglévő sejtmérési adatokat és szakirodalmat kapcsoltak össze; az eredmény új kísérleti hipotézis, nem igazolt gyógymód."
category: elemzesek
tags: ["AI", "OpenAI", "kutatás", "ügynökök"]
draft: false
hidden: false
---

Az OpenAI, a PerturbAI és a Scripps Research több ezer GPT-Rosalind-ügynököt küldött rá egy már elkészült, egéragysejtek millióit tartalmazó CRISPR-adathalmazra. A számítási elemzés 32 perc alatt végzett: minden ügynök egy gén kikapcsolásának sejtszintű hatását vizsgálta, szakirodalmat keresett hozzá, majd lehetséges magyarázatot javasolt.

Az [AlphaSignal által kiemelt](https://alphasignal.ai/news/openai-s-gpt-rosalind-mapped-a-brain-crispr-atlas-in-32-minutes) munka érdekessége nem pusztán a párhuzamos futtatás. A kutatók azonos modell és teljes számítási keret mellett egyetlen ügynökkel is összevetették a rendszert. A legnagyobb feladatnál a többügynökös változat több mint 700, az együgynökös 11 hivatkozást használt; vak összehasonlításban a szakértők az előbbi jelentéseit az esetek 75 százalékában választották.

A rendszer többek között kapcsolatot javasolt a DCTN1 gén megzavarása, a koleszterintermelés és az idegsejtek működése között. Ez azonban következő kísérletre alkalmas felvetés, nem bizonyított betegségmechanizmus. Az alapadatok egérsejtekből származnak, a tanulmány preprint, és a hipotézisek laboratóriumi ellenőrzése még hátravan.

A nyilvános reasoning atlasz és a kód lehetővé teszi, hogy kutatók visszakövessék az állításokat. A bemutató így azt támasztja alá, hogy jól darabolható adathalmaznál a párhuzamos ügynökök több szakirodalmi nyomot tarthatnak egyszerre szem előtt — nem azt, hogy 32 perc alatt gyógyszert találtak.

**Források:** [OpenAI](https://openai.com/index/scaling-ai-research-for-complex-biological-data/), [bioRxiv-preprint](https://www.biorxiv.org/content/10.64898/2026.10.15.759436v1), [AlphaSignal](https://alphasignal.ai/news/openai-s-gpt-rosalind-mapped-a-brain-crispr-atlas-in-32-minutes)
