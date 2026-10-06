---
title: "Az NVIDIA az AI-ügynökön kívül húzza meg a biztonsági határt"
date: 2026-10-06
summary: "Az Open Agent Safety Platform szoftveres korlátokat és külön hardveres felügyeleti tervet kapcsol össze, de a kettő eltérő infrastruktúrát igényel."
category: kiadasok
tags: ["AI", "ügynökök"]
draft: false
hidden: false
---

Egy AI-ügynöknek adott tiltás és egy ténylegesen letiltott hálózati kapcsolat nem ugyanaz. Az NVIDIA 2026. szeptember 28-án bemutatott Open Agent Safety Platformja ezt a különbséget teszi a középpontba: a hozzáférési korlátokat a modellen és az ügynök vezérlésén kívüli rétegnek kell érvényesítenie.

A szoftveres elem az OpenShell futtatókörnyezet. Dokumentációja szerint elkülönített környezetben futtatja az ügynököket, és szabályozza, mely fájlokhoz, hitelesítő adatokhoz és hálózati célpontokhoz férhetnek hozzá. A megengedett műveleteket konfiguráció írja le. Így például egy ismeretlen címre irányuló kapcsolat blokkolása nem attól függ, hogy a modell emlékszik-e a neki adott figyelmeztetésre.

Ehhez társul a Sentry nevű referenciarendszer terve. Ez BlueField-4 adatfeldolgozó processzorokra épít: az ügynök futtatási környezetétől elkülönülő hardveres felügyelet figyelheti a szabályok átlépését. A Sentry tehát nem az OpenShell telepítésével minden gépen automatikusan megjelenő szolgáltatás, és a közleményben leírt teljes hardveres védelemhez a megfelelő infrastruktúra is szükséges.

Az NVIDIA az OpenShellt elérhető szoftverként, a Sentryt referenciatervként mutatta be. A működési leírás a gyártótól származik; saját biztonsági tesztet nem végeztünk. A megközelítés fontos következménye, hogy az ügynök jogosultságai ellenőrizhető rendszerbeállításokká válhatnak. Ettől a modell még tévedhet, és egy túl tágra szabott engedélylista sem lesz biztonságos pusztán a futtatókörnyezet használatától.

*Források: [NVIDIA – Open Agent Safety Platform](https://nvidianews.nvidia.com/news/open-agent-safety-platform), [OpenShell – működés és biztonsági határok](https://docs.nvidia.com/openshell/latest/about/overview).*
