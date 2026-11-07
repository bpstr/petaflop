---
title: "Egy 32 MB-os beszédmodell fut a böngészőben – de nem üzleti használatra"
date: 2026-11-07
summary: "Az Underdog Woof helyben alakít szöveget angol beszéddé, miközben a modell licence külön engedélyhez köti a kereskedelmi felhasználást."
category: kiadasok
tags: ["AI", "Beszédtechnológia", "Helyi AI", "Nyílt súlyok"]
draft: false
hidden: false
---

Az Underdog egy retró böngészős játékkal mutatta be a **Woof** szövegfelolvasó modellt. A játékban egy írógépbe tetszőleges angol szöveg gépelhető, amelyet a modell helyben mond ki. Az egyhangos változat letöltése 31,7 MB, így az élményhez a cég szerint nem kell szerver vagy API-kulcs.

A nyilvános modellkártya már két hangot, Junót és Mirát tartalmazó 40,6 MB-os csomagot kínál. A teljes modell 38,24 millió paraméteres, 24 kHz-es mono hangot állít elő, és NumPyval CPU-n fut. Az Underdog sebesség- és szóhibaarány-mérései saját tesztek Apple M5 Max gépen, ezért nem tekinthetők független összehasonlításnak. Egy külső TTS-benchmark Zen 5 processzoron jóval kisebb gyorsulást mért, ami jól jelzi a hardverfüggést.

A legfontosabb gyakorlati korlát a licenc. A súlyok letölthetők, de az Underdog Non-Commercial 1.0 csak személyes, kutatási, oktatási és nonprofit használatot enged díjmentesen, kötelező névfeltüntetéssel. Fizetős termékhez, reklámhoz, monetizált videóhoz vagy céges munkához külön kereskedelmi engedély kell, és a modell hangja más beszédmodell tanítására sem használható.

A Woof ezért érdekes példája a helyben futó, kis beszédmodelleknek, de az „open weights” itt nem azonos a szabad üzleti felhasználással.

**Források:** [Underdog Woof modellkártya](https://huggingface.co/ConwayResearch/Underdog-Woof), [TechCrunch](https://techcrunch.com/2026/11/06/underdog-shows-off-a-32mb-speech-model-in-new-demo/), [TTS Bench – ismert korlátok](https://github.com/5uck1ess/tts-bench/blob/master/docs/known-issues.md)
