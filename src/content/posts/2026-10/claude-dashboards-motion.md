---
title: "Frissülő dashboardot és animációt is készít a Claude"
date: 2026-10-08
summary: "A Dashboards láthatóvá teszi a grafikonok mögötti lekérdezést, a Motion pedig videógenerálás helyett szerkeszthető kódból épít animációt; a hozzáférés csomagonként eltér."
category: kiadasok
tags: ["AI", "Anthropic", "Claude"]
draft: false
hidden: false
---

Egy céges kimutatásnál két külön munka megérteni a számokat és elmagyarázni őket másoknak. Az Anthropic október 8-án mindkettőhöz új eszközt jelentett be: a Claude Dashboards adatforrásokhoz kapcsolódó, frissülő áttekintést készít, a Claude Motion pedig animált magyarázatot. Mindkettő bétában indul, eltérő előfizetési feltételekkel.

A [szeptemberi chat–Cowork-összevonásról már írtunk](/posts/2026-09/claude-chat-cowork-egyben/). Akkor a dokumentumok és prezentációk kerültek be a beszélgetésekbe; most a kimutatások és a mozgó vizuális anyagok következnek.

## A grafikon mellé a lekérdezést is megkapjuk

A Dashboards olyan adatplatformokhoz kapcsolódhat, mint a BigQuery, a Databricks vagy a Snowflake, de Salesforce-adatokból is dolgozhat. Az [Anthropic bejelentése](https://claude.com/resources/articles/dashboards-and-motion) szerint elég természetes nyelven megfogalmazni a kérdést: Claude összeállítja a dashboardot, amely követni tudja az adatok változását.

A hasznos rész az ellenőrizhetőség. A diagramoknál megtekinthető a mögöttük álló lekérdezés és az utolsó frissítés ideje. Ez azonban önmagában nem bizonyítja, hogy a választott mutató helyesen válaszol az üzleti kérdésre.

Vegyünk egy saját példát: azt szeretnénk látni, melyik értékesítési csatorna hozza a legtöbb visszatérő vásárlót. Előbb tisztázni kell, kit nevezünk visszatérőnek, milyen időszakot vizsgálunk, és melyik csatornához számítunk egy több helyről érkező ügyfelet. Egy hibátlanul lefutó lekérdezés is adhat félrevezető választ, ha ezek a definíciók rosszak. A látható lekérdezés éppen azért értékes, mert könnyebb rajta észrevenni az ilyen eltéréseket.

Az [Artifacts termékoldala](https://claude.com/features/artifacts) kifejezetten gyors, feltáró kérdésekre szánja a funkciót, nem a meglévő üzletiintelligencia- és analitikai rendszerek leváltására. Mélyebb elemzéshez a munka például Grafanába, Mixpanelbe vagy PostHogba vihető tovább. A frissülő nézetet pedig nem érdemes garantáltan valós idejű mérőrendszerként kezelni: a bejelentés nem rögzít általános frissítési időközt.

## A Motion nem filmet képzel el, hanem elemeket mozgat

A Motion szövegek, diagramok, alakzatok és képek animálásához ír kódot. Nem videógeneráló modell készíti a képkockák tartalmát: nincs generált filmjelenet vagy AI-szereplő. A kész anyag MP4-ként letölthető.

Ez másféle feladatokra való, mint egy látványos, promptból készülő kisfilm. Egy belső oktatóanyagban például fontosabb lehet pontosan átírni egy feliratot vagy késleltetni egy nyíl megjelenését, mint új jelenetet előállítani. A szerkeszthető elemekre épülő megközelítés ezt a munkát célozza: a szöveg, a számok és az időzítés utólag is módosíthatók.

A kész animáció ettől még nem ellenőrzi saját állításait. Ha a bemeneti kimutatás rossz következtetést tartalmaz, annak meggyőző bemutatása nem javítja ki a hibát. Érdemes előbb jóváhagyni a mondanivalót, és csak utána foglalkozni a mozgással.

## Kinek érhető el?

A jelenlegi [csomaghatárok](https://claude.com/features/artifacts) szerint a Dashboards bétája a fizetős előfizetésekben érhető el, a Motion bétája pedig a Team és Enterprise csomagokra korlátozódik. Enterprise-környezetben mindkettőt külön kell engedélyeznie az adminisztrátornak.

A Docs, a Slides és a Design eközben kikerült a bétából, és az ingyenes csomagban is elérhető. A megosztási és vállalati beállítások továbbra is számítanak: az Artifacts-oldal szerint a Team és Enterprise szervezeteken kívüli megosztást a tulajdonosnak kell bekapcsolnia. Az új képességek tehát nem jelentik azt, hogy minden elkészült anyag automatikusan nyilvános.

## A régi Design-oldal használóinak külön teendőjük lesz

A különálló Claude Design oldal 2026. december 14-én bezár. A [migrációs útmutató](https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude) szerint a designrendszerek már átköltöztethetők, a projektek átviteléről viszont később érkezik további tájékoztatás.

A régi beszélgetések és hozzászólások nem költöznek át, a korábbi projektek nyilvános linkjei pedig a bezárás után nem működnek. Aki ezekre támaszkodik, annak a határidő előtt el kell mentenie a szükséges tartalmat. A projektek egyenként ZIP-archívumként is letölthetők.

*A cikk a bejelentés és a hivatalos termékleírások alapján készült; a két új bétát nem próbáltuk ki.*

---
*Források: [Anthropic – Dashboards és Motion, október 8.](https://claude.com/resources/articles/dashboards-and-motion); [Claude Artifacts – képességek és hozzáférés](https://claude.com/features/artifacts); [Claude Help Center – a különálló Design migrációja](https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude).*
