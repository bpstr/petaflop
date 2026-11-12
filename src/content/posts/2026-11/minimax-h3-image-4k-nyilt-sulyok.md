---
title: "Nyílt súlyokkal érkezett a MiniMax 4K-s képgenerátora"
date: 2026-11-12
summary: "A H3-Image szövegből, referenciákból és meglévő képből is dolgozik, a ComfyUI-csomag pedig helyi futtatást könnyít — korlátozott licenccel."
category: kiadasok
tags: ["AI", "MiniMax", "képgenerálás", "nyílt súlyok", "ComfyUI"]
draft: false
hidden: false
---

A MiniMax november 11-én kiadta a **H3-Image** súlyait. A H3 videómodellre épülő rendszer szövegből generál képet, legfeljebb 16 referenciafotót használhat, és meglévő képeket is szerkeszt. A gyártó 4096×4096 pixeles, vagyis nagyjából 16 megapixeles eredményt és tíz másodperc alatti generálást állít, de ehhez nem közöl egységes hardverkonfigurációt vagy független mérést.

A Comfy-Org ezzel párhuzamosan egyfájlos, kvantált csomagot tett közzé a ComfyUI-hoz. Az int8-as képgeneráló komponens, a tömörített Qwen3-VL szövegkódoló és az fp16-os VAE a megszokott modellmappákba másolható. Ez csökkenti a telepítési súrlódást, de a kiadó pontos VRAM-igényt nem ad meg; a valós memóriafogyasztás a felbontástól, a gyorsítási támogatástól és az offload beállításaitól is függ.

A „nyílt súlyú” itt nem jelent korlátozás nélküli nyílt forrást. A közösségi licenc külön írásos MiniMax-engedélyt kér, ha egy vállalat és kapcsolt cégei évesített bevétele meghaladja az egymillió dollárt, vagy ha harmadik félnek hosztolt szolgáltatást kínál. Kísérletezéshez tehát kézzelfogható helyi alap érkezett, üzleti beépítés előtt viszont a licenc és a saját hardveres mérés legalább olyan fontos, mint a 4K-s demók.

**Források:** [MiniMax](https://www.minimax.io/blog/minimax-h3-image), [Comfy-Org modellkártya](https://huggingface.co/Comfy-Org/MiniMax-H3-Image), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/comfy-org-brings-minimax-h3-image-s-4k-local-generation-to-comfyui).
