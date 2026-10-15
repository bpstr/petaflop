---
title: "A Microsoft gépi tanulással javítja a két–hat hetes időjárás-előrejelzést"
date: 2026-10-15
summary: "A nyílt forrású PBC nem új időjárásmodellt épít, hanem a meglévő fizikai és AI-rendszerek ismétlődő hibáit korrigálja."
category: elemzesek
tags: ["AI", "Microsoft", "kutatás"]
draft: false
hidden: false
---

A Microsoft és kutatótársai a Nature-ben publikálták a Probabilistic Bias Correction, röviden PBC módszert. A rendszer a két–hat hétre szóló időjárás-előrejelzések egyik makacs problémáját célozza: ebben az időtávban a fizikai és az AI-modellek hibái már összeadódnak, miközben a szezonális minták még nem adnak elég biztos kapaszkodót.

A PBC nem helyettesíti az előrejelző modellt. Korábbi prognózisokból megtanulja annak rendszeres torzításait, majd korrigált valószínűségi becslést készít. Emiatt fizikai, gépi tanulásos és vegyes rendszerek kimenetére is ráilleszthető.

A tanulmányban a módszer az ECMWF vezető, már korrigált modelljét a csapadékcélok 98, a hőmérsékleti célok 92 és a légnyomási célok 91 százalékán javította. Az ECMWF AI Forecasting System pontosságát a vizsgált beállításban megduplázta. Ezek célonkénti kutatási eredmények, nem azt jelentik, hogy minden helyi előrejelzés kétszer pontosabb lett.

A PBC-alapú MicroDuet valós idejű versenyen minden időjárási változó és előrejelzési táv kategóriáját megnyerte, de az üzemszerű használat még korai. Kenyában már pilotként segíti a heti csapadékbecsléseket, a Microsoft saját, hathetes modellje pedig csak privát előnézetben érhető el.

A kutatási kód MIT-licenc alatt nyilvános. A dokumentált referencia-környezet Rocky Linux 8.10, Python 3.13.3, nyolc processzormag és 80 GB memória; vagyis a „könnyű” itt a nagy időjárási rendszerekhez viszonyított jelző.

**Források:** [Nature](https://www.nature.com/articles/s41586-026-11126-x), [Microsoft Research](https://www.microsoft.com/en-us/research/story/new-ai-framework-bridges-a-critical-gap-in-mid-range-weather-forecasts/), [PBC-kód](https://github.com/mouatadid/pbc)
