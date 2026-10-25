---
title: "A vLLM egyetlen NVL72 rackben skálázta fel a DeepSeek V4.1 Flasht"
date: 2026-10-25
summary: "A nyílt kiszolgálómotor a DeepSeek saját motorjához közeli dekódolási tempót és nagy rackes áteresztést mért, de az összevetések hardvere és terhelése nem mindenhol azonos."
category: elemzesek
tags: ["AI", "DeepSeek", "vLLM", "inferencia"]
draft: false
hidden: false
---

A vLLM és az Inferact egy NVIDIA GB300 NVL72 rackben skálázta fel a DeepSeek V4.1 Flash kiszolgálását. A csapat az AgentX ügynökös terhelésen GPU-nként 954 ezer token/másodperces összesített áteresztést közöl, miközben a felhasználónkénti sebesség 90. percentilise 196 token/másodperc volt. Egyetlen felhasználónál, négy B300 GPU speciális útvonalán 826 token/másodpercet mértek.

A számok mögött nem egyetlen gyors kernel áll. A rendszer különválasztja a bemeneti feldolgozást és a dekódolást, széles szakértőpárhuzamosítást használ, majd futás közben átrendezi a MoE-szakértőket a terhelés kiegyensúlyozására. A gyorsítást segíti a modell tömörített KV-cache-e és az is, hogy hosszú promptnál a felső rétegeknek csak az utolsó 128 tokent kell újraszámolniuk.

A fejlesztők szerint a vLLM dekódolási áteresztése 8 és 256 közötti batchméretnél hat százalékon belül maradt a DeepInfer, a DeepSeek modellre szabott motorjának közölt eredményéhez képest. Ez érdemi jelzés, de nem teljesen azonos laboratóriumi összevetés: a bemeneti szakasz görbéin eltérő hardver, promptok, replay-ablak és redundáns szakértőszám szerepelt. A szerzők ezért maguk sem értelmezik a különbséget közvetlen motor–motor gyorsulásként.

A gyakorlati tanulság az infrastruktúra-csapatoknak az, hogy a teljesítményt a modell szerkezetéhez és a terheléshez kell hangolni. A bemeneti feldolgozásnál a kisebb párhuzamos csoport bizonyult hatékonyabbnak, a dekódolásnál viszont a széles szakértőpárhuzamosítás nyert. Az eredmények nagyvállalati Blackwell-hardverre vonatkoznak, nem egyetlen fejlesztői GPU-ra.

**Források:** [vLLM](https://vllm.ai/blog/2026-10-23-deepseek-v41-flash-pd-wide-ep), [DeepSeek technikai jelentés](https://arxiv.org/abs/2609.19969), [AlphaSignal Latest](https://alphasignal.ai/)
