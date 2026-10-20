---
title: "Muse Glimmer: 30 milliárd paraméter helyi AI-ügynökökhöz"
date: 2026-10-20
summary: "A Meta friss tanulmánya a már augusztusban kiadott helyi modell működését mutatja be; a dokumentált hardverigény és sebesség konkrét futtatási beállításokhoz kötődik."
category: elemzesek
tags: ["AI", "Meta", "modellek", "ügynökök"]
draft: false
hidden: false
---

Helyben futó AI-ügynöknél az is számít, mennyi memóriát és időt kér a következő lépés megtervezése. A Meta Muse Glimmer modelljéről október 17-én az arXivra feltöltött előzetes tanulmány ezt a kompromisszumot vizsgálja. Maga a modell [augusztus 10-én jelent meg](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model); a mostani kutatási közlés az alkalom arra, hogy megnézzük, milyen gépre és milyen munkára szánták.

A nagyjából 30 milliárd paraméteres Glimmer szöveget és képet fogad, szöveget állít elő. A Meta több lépésből álló feladatokra, eszközhívásokra és hibás eredmények utáni újratervezésre tanította. Ez például olyan fejlesztői asszisztens alapja lehet, amely kódot olvas, eszközt hív, majd a kapott eredmény alapján folytatja a munkát.

## Kisebb súlyok, gyorsabb szöveg

A memóriatakarékosság fő eszköze a kvantálás: a modell számait kisebb pontossággal tárolják. A Meta közel 4 bites változataihoz 24, illetve 32 GB videomemóriájú hardvert jelöl meg célként. A súlyok mellett a feldolgozott szöveghez tartozó gyorsítótárnak és a képfeldolgozásnak is hely kell, ezért a fájl mérete önmagában nem mondja meg, mekkora feladat fér el a gépen.

A sebességet a DFlash nevű segédmodell növeli: egyszerre több következő tokent javasol, amelyeket a fő modell ellenőriz. A Meta változatos promptkészleten mért átlagai szerint az RTX 5090-en futó K-Quant-17GB változat 74,9 helyett 233,4 tokent generált másodpercenként ezzel a kiegészítéssel. A mérés llama.cpp-ben, egyszerre egy kéréssel és mindig a legvalószínűbb következő tokent választó dekódolással készült. Ez szöveggenerálási eredmény; egy teljes ügynökös feladat idejébe az eszközök válaszára várás is beleszámít.

## A helyi modell köré még alkalmazás kell

A modellsúlyok és a kapcsolódó kiadott összetevők Apache 2.0 licenc alatt érhetők el. A fejlesztő döntheti el, milyen fájlokhoz és műveletekhez engedi hozzá az ügynököt. Ezt a döntést a helyi futtatás nem oldja meg helyette, és a Meta modellkártyája is számol téves válaszokkal, illetve többlépéses gondolkodási hibákkal. Az ígéretes irány a helyben működő, konkrét feladatra épített asszisztens; a megbízhatóságát a saját munkafolyamatában kell megmérni.

**Források:** [Meta – tanulmány](https://arxiv.org/abs/2610.24628), [Meta – modellkártya és mérési feltételek](https://huggingface.co/meta-models/Muse-Glimmer-30B), [AlphaSignal – a témát ajánló összefoglaló](https://alphasignal.ai/news/meta-s-muse-glimmer-runs-a-30b-agent-model-on-your-gpu).
