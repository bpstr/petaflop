---
title: "Matematikai bizonyítást készített a Signal kódjához az AlphaProof Code"
date: 2026-11-12
summary: "A DeepMind ügynökei 6,5 millió sor Lean-bizonyítással ellenőrizték a Signal egyik lefordított magját, de az eredmény nem tanúsítja a teljes alkalmazást."
category: elemzesek
tags: ["AI", "Google DeepMind", "Gemini", "kiberbiztonság", "kutatás"]
draft: false
hidden: false
---

A Google DeepMind **AlphaProof Code** rendszere nem egyszerűen hibát keresett a Signalban: matematikailag bizonyította, hogy a vizsgált, AArch64-re fordított kód teljesít bizonyos előre rögzített titkosítási tulajdonságokat. A négyhetes munka 6,5 millió sornyi Lean-bizonyítást termelt, amelyet a bizonyításellenőrző kis kernelje gépileg vizsgált át.

Az emberek feladata maradt a legfontosabb határ meghúzása. Kutatók fogalmazták és hagyták jóvá, pontosan mit kell bizonyítani; Gemini Carbonnal hajtott ügynökök készítették a bizonyításokat, más ügynökök pedig auditálták őket. A rendszer két korábban kijavított Signal-hibát is visszaültetett egy elkülönített változatba, majd bizonyította, hogy a módosított bináris sérti a követelményeket.

Ez erősebb állítás egy tesztsor sikerénél, de jóval szűkebb annál, hogy „a Signal feltörhetetlen”. A bizonyítás az elfogadott specifikációra, a vizsgált fordításra, az AArch64-modellre és néhány külső kriptográfiai feltételezésre érvényes. Nem fedi le a teljes alkalmazást, az operációs rendszert, a hardvert, a metaadatokat vagy azokat a hibákat, amelyeket a specifikáció eleve nem fogalmazott meg. A DeepMind közzétette a tanulmányt és a bizonyítási tárat, így a kutatók nem csupán egy gyártói demót, hanem ellenőrizhető artefaktumokat is vizsgálhatnak.

**Források:** [Google DeepMind](https://deepmind.google/blog/introducing-alphaproof-code/), [technikai tanulmány](https://deepmind.google/documents/36/Formal_Verification_of_Signal_4.pdf), [bizonyítási artefaktumok](https://google-deepmind.github.io/code-verification/), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/google-deepmind-s-alphaproof-code-formally-verifies-signal-s-encryption-in-4).
