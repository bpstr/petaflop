---
title: "Visszakövethetőbb lett, mit csinált a Copilot-ügynök"
date: 2026-10-06
summary: "A Copilot alkalmazás vállalati OpenTelemetry-támogatása összekapcsolja a modellhívásokat és eszközhasználatot, de alapból kihagyja a beszélgetés tartalmát."
category: kiadasok
tags: ["AI", "ügynökök"]
draft: false
hidden: false
---

Melyik fájlt olvasta el az ügynök, és mi történt utána? A GitHub 2026. szeptember 22-én jelentette be a vállalatilag felügyelt OpenTelemetry-támogatást a Copilot alkalmazásban. A funkcióval az ügynökmunkamenetek adatai a szervezet saját, kompatibilis megfigyelőrendszerébe továbbíthatók, nem kell minden fejlesztőnek külön összeállítania a beállításokat.

Az OpenTelemetry egységes formában gyűjt működési adatokat. A GitHub dokumentációja három adatfajtát különít el: a nyomkövetés összekapcsolja például a modellhívást, egy fájl olvasását és a következő modellhívást; a mérőszámok a tokenhasználatot is mutathatják; az események pedig egy módosítás elfogadását vagy elutasítását rögzíthetik. Ez a végrehajtás menete, nem a modell belső gondolatainak jegyzőkönyve.

A tartalomgyűjtés külön döntés. Alapbeállításban a továbbított adatok nem tartalmazzák a promptokat, válaszokat vagy az eszközöknek átadott paramétereket. Ezek rögzítése bekapcsolható, de forráskódot, fájltartalmat és más érzékeny információt is továbbíthat. A részletesebb hibakeresés ezért a tárolás és hozzáférés átgondolását is megköveteli.

A használathoz megfelelő adatfogadó rendszer vagy köztes gyűjtő, valamint klienskonfiguráció szükséges; ez nem minden Copilot-fióknál automatikusan bekapcsolódó naplózás. A központilag felügyelt beállításokkal a vállalat egységesítheti az adatküldést. A fejlesztőcsapat így egy hibás eredménynél nemcsak a végső kódváltoztatást, hanem az odavezető eszközhasználatot is vizsgálhatja, a választott adatgyűjtési részletesség határain belül.

*Források: [GitHub – a Copilot alkalmazás szeptemberi újdonsága](https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app/), [GitHub – továbbított adatok és vállalati beállítások](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/enterprise/opentelemetry).*
