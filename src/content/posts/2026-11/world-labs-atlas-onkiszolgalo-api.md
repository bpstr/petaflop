---
title: "Önkiszolgáló API-t kapott a World Labs 3D-világmodellje"
date: 2026-11-13
summary: "Az Atlas fotókból bejárható jelenetet, egyszerű térgeometriából pedig formálható világot készít, majd splatként vagy hagyományos hálóként adja tovább."
category: kiadasok
tags: ["AI", "World Labs", "kreatív AI", "fejlesztők"]
draft: false
hidden: false
---

A World Labs november 12-én önkiszolgáló hozzáféréssel adta ki az **Atlas** világmodell következő változatát. A korábbi partneri előnézet után két böngészős eszköz és egy dokumentált fejlesztői API érkezett: a Viewfinder fényképekből épít bejárható jelenetet, a Chisel pedig egyszerű dobozokból és síkokból felvázolt tér szerkezetét alakítja képi világgá.

Az Atlas nem csupán videót renderel. Színes képkockákat és mélységadatot készít, 3D Gaussian splatként exportálja a jelenetet, a `splats2Mesh` végponttal pedig sok hagyományos 3D-szoftverben könnyebben szerkeszthető poligonhálót ad. A nyilvános API többek között kameranézetek generálását, maszkolt szerkesztést, kamerapóz- és mélységbecslést, valamint splat–mesh átalakítást kínál. A World Labs Blender-integrációt is felsorol.

Az önkiszolgáló rajt azért fontos, mert a szeptemberben bemutatott modell állításai most már partneri meghívó nélkül vizsgálhatók saját jeleneteken. A bizonyíték határa ettől nem tűnik el. A vállalat nem tett közzé nyílt modellsúlyokat vagy függetlenül reprodukált minőségi összehasonlítást, az Atlas külön árazása és végleges kvótái sem egyértelműek. Játék-, VFX-, építészeti vagy robotikai csapatoknak így nem kész, kiszámítható költségű gyártási komponens, hanem végre mérhető 3D-s alap: saját fotókon lehet ellenőrizni a rekonstrukciót, a háló minőségét, a futásidőt és a kreditfogyasztást.

**Források:** [World Labs](https://worldlabs.ai/atlas), [Atlas API-dokumentáció](https://docs.atlas.worldlabs.ai/api-reference), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/world-labs-opens-atlas-3d-world-model-to-all-developers).
