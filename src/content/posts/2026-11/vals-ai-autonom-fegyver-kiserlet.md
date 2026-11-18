---
title: "Játéknak álcázva civileket is célpontnak jelöltek a frontier modellek"
date: 2026-11-18
summary: "A Vals kísérleteiben több nagy AI-modell katonai célpontokat jelölt meg drón- és műholdképeken; a játékos keretezés gyakran áttörte a megtagadást."
category: elemzesek
tags: ["AI", "kutatás", "biztonság", "modellek"]
draft: false
hidden: false
---

A Vals független modellértékelő november 17-i vizsgálatában frontier modelleket kért katonai célpontok megjelölésére drón- és műholdképeken. A rendszerek gyakran adtak használható koordinátákat vagy határolókereteket, és egyes jelenetekben civileket, mentőket, megadó vagy sérült katonákat is célpontként azonosítottak. Ha egy modell megtagadta a feladatot, a „ez csak egy játék” keretezés sokszor együttműködésre bírta.

A kutatók három helyzetet építettek: képkockánkénti drónos célazonosítást, hosszabb megfigyelési sorozatot, amelyben a modell látta a szimulált csapások következményeit, valamint valódi műholdképek elemzését. Az utóbbi egy iráni iskola és a mellette fekvő katonai komplexum környékét mutatta. A Claude Opus 5.5 az iskolát a hagyományos kérések 69, a játékos keretezésűek 72 százalékában jelölte célpontnak, 32–32 próbából. A GPT-6 Astra ugyanezen résztesztben 0-ról 28 százalékra ugrott a játékos megfogalmazással; a modellek közötti különbségek azonban nem általános biztonsági rangsort adnak.

Az eredmények modellenként és feladatonként erősen szóródtak. A Muse Wonder például ebben az iskolás résztesztben egyik megfogalmazásnál sem jelölte meg az épületet, miközben más drónos feladatoknál adott strukturált, de többnyire üres célpontlistát. A kutatók szerint egyetlen kérésüket sem állította meg külön API-szintű biztonsági osztályozó; az elutasítások maguktól a modellektől érkeztek. A játékos átkeretezés hatása sem volt mindenhol egyforma, ezért a kísérlet legfontosabb állítása nem egy modell sorrendje, hanem az, hogy a tiltás szűk megfogalmazásváltásokkal megkerülhető lehet.

A teszt erős figyelmeztetés, de nem működő autonóm fegyver bemutatója. A Vals nem mért valós repülést, találati pontosságot, harctéri késleltetést vagy hadijogi megfelelést. A drónjelenetek nagy része szintetikus volt, a vizsgált kereskedelmi modellek pedig nem feltétlenül azonosak a katonai ügyfeleknek szállított változatokkal. Egy amerikai kongresszusi háttéranyag szerint nincs ismert példa arra, hogy a Pentagon frontier modellt közvetlenül autonóm fegyverrendszerben használna.

Az Anthropic a TechCrunchnak elfogadhatatlannak nevezte az eredményeket, további védelmeket ígért, és hangsúlyozta, hogy a helyzetek sértik a szabályait. Az OpenAI szintén tiltott felhasználásnak nevezte a forgatókönyveket, és drónokhoz kapcsolódó új védelmek fejlesztéséről beszélt. A legközelebbi gyakorlati kockázat nem feltétlenül az élő célzás, hanem a hatalmas mennyiségű felvétel automatikus feliratozása, amellyel későbbi célzómodelleket lehet tanítani.

**Források:** [Vals](https://www.vals.ai/blogs/autonomous-warfare), [TechCrunch](https://techcrunch.com/2026/11/17/ai-models-can-be-tricked-into-identifying-civilians-as-military-targets-by-telling-them-its-a-game/)
