---
title: "Egymillió tokenes, nyílt súlyú Hy4 modellt adott ki a Tencent"
date: 2026-11-20
summary: "A 770 milliárd paraméteres multimodális modell tokenenként 49 milliárdot aktivál, képet és videót is ért, de nagy hardverigénye és saját licence korlátozza a használatát."
category: kiadasok
tags: ["AI", "Tencent", "modellek", "nyílt súlyok", "multimodális AI"]
draft: false
hidden: false
---

A Tencent letölthetővé tette a **Hy4** végleges, multimodális modelljének súlyait. A keverék-szakértői architektúra nyelvi része összesen 770 milliárd paraméteres, de egy token feldolgozásakor 49 milliárdot aktivál. A modell szöveget, képet és videót is fogad, kontextusablaka 1 048 576 token.

A nagy szám nem egyenlő könnyű helyi futtatással. A Tencent nyolc GPU-ra osztott FP8-kiszolgálási példát ad a vLLM-hez, valamint külön GGUF-tömörítést teszteléshez. A modellbe épített, 3,3 milliárd paraméteres DFly2 vázlatkészítő a spekulatív dekódolást gyorsítja, a ritka figyelmi mechanizmus pedig mindig legfeljebb körülbelül kétezer korábbi pozíciót választ ki. Ezek csökkenthetik a számítási terhet, de nem teszik a teljes modellt átlagos laptopra szabottá.

A Hy4, a nyolcbites Hy4-FP8 és az előtanított Hy4 Base is elérhető. A Base nem csevegésre hangolt modell; a bemutatott utasításkövetési és eszközhasználati példák a másik két változatra vonatkoznak. A Tencent saját tesztjei erős pénzügyi, irodai, kódolási és kutatási eredményeket mutatnak, de ezek nem független mérések. A modellkártya maga is lemaradást jelez a vezető zárt modellekhez képest nehéz matematikában, hosszú kódolási feladatokban és fejlett vizuális kérdésekben.

A kiadás ezért pontosabban **nyílt súlyú**, mint általánosan nyílt forrású: a használatot egyedi Tencent Hy License szabályozza. Telepítés előtt a hardverigény mellett ezt a licencet és a modellkártya korlátait is külön ellenőrizni kell.

**Források:** [Tencent Hy4 modellkártya](https://huggingface.co/tencent/Hy4), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/tencent-s-hy4-opens-a-770b-model-with-a-1m-token-window)
