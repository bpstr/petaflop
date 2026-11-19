---
title: "Gyártásba küldött AMD-áramkörökön dolgoztak az OpenAI modelljei"
date: 2026-11-19
summary: "Az OpenAI szerint modelljei erősen optimalizált GPU- és CPU-blokkokat javítottak; néhány módosítás már gyártásra küldött AMD-tervbe került."
category: elemzesek
tags: ["AI", "OpenAI", "AMD", "chip", "hardver"]
draft: false
hidden: false
---

Az OpenAI november 18-án részletezte, hogyan használt modelleket saját **Jalapeño** gyorsítóchipje és az AMD processzorblokkjainak tervezéséhez. A legfontosabb állítás nem egy szimulációs rekord: az AMD néhány modell által javasolt változtatást már olyan tervbe is beépített, amelyet gyártásra küldött, más módosításokat pedig későbbi termékek tervezési fájljaiba emelt át.

A modellek SystemVerilog RTL-kódot írtak át, majd Synopsys-eszközökkel ellenőrizték, hogy a jelölt áramkör megőrzi-e az eredeti működést. Az átment változatokat teljesítmény, fogyasztás és lapkaterület – együtt PPA – alapján értékelték. Az OpenAI és az AMD legfeljebb 14 százalékos PPA-javulást közöl egy erősen optimalizált GPU-blokkon, valamint egy számjegyű százalékos eredményeket következő generációs CPU-blokkokon.

Ezek nem a teljes GPU 14 százalékos gyorsulását jelentik. A PPA egy blokkszintű, több szempontot összesítő mérce, a közlemény pedig nem ad minden tervhez függetlenül reprodukálható módszertant. Az eredményeket ráadásul olyan partnerek tették közzé, amelyeknek komoly üzleti kapcsolatuk van: az OpenAI nagy AMD-kapacitás lekötésére vállalt kötelezettséget, és feltételekhez kötött AMD-részvényopciókkal is rendelkezik.

A Jalapeño esetében a cég már elkészült szilíciumon is visszamérte a modell segítségével optimalizált számítási blokkokat. Az új RISC-V értékelésben közben azt vizsgálták, hogy az egymást követő modellek mennyire tudnak meglévő processzormagot gyorsítani vagy specifikációból újat építeni. A funkcionális ellenőrzést elbukó tervek nulla pontot kaptak, de maga a benchmark továbbra is egyszerűbb a teljes ipari chiptervezésnél.

A gyakorlati tanulság így szűkebb, de fontos: a modellek nem váltották ki a hardvermérnököket vagy a végső ellenőrzést, viszont több érvényes áramköri változatot tudtak előállítani és a hagyományos mérnöki eszközláncban versenyeztetni.

**Források:** [OpenAI](https://openai.com/index/advancing-chip-design-with-our-models/), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/openai-s-models-rewrote-amd-s-gpu-circuits-and-gained-14-in-five-months)
