---
title: "AI-ügynökökkel több mint száz webhelyre jutott be egy támadó"
date: 2026-10-20
summary: "A NorForge egy nyitva hagyott Cairn-rendszeren figyelte meg a kampányt; a Reuters azonosította több érintett cég oldalát, az adatszivárgás mértéke nem ismert."
category: hirek
tags: ["AI", "ügynökök", "biztonság", "DeepSeek", "Claude"]
draft: false
hidden: false
---

Egy kínai nyelven dolgozó támadó AI-ügynökei több mint 1200 webhelyet próbáltak feltörni, és száznál több esetben jutottak be a NorForge biztonsági cég megfigyelése szerint. A [Reuters október 19-i vizsgálata](https://www.reuters.com/legal/government/how-one-hacker-used-ai-agents-few-thousand-dollars-break-into-scores-sites-2026-10-19/) a támadó nyitva maradt Cairn-tevékenységéből azonosította a Deere, a SharkNinja és a Cummins oldalait is.

A kampány szeptember 25-én indult amerikai, kanadai, ausztrál és japán webáruházak ellen. A kutató szerint a sikeres behatolások átlagosan nagyjából 23 órányi próbálkozást igényeltek. Az egyik esetben az ügynökök a nyilvános alkalmazás után a kapcsolódó infrastruktúrát térképezték fel, majd egy vezérlőpanel adatfeldolgozási hibáját kihasználva értek el távoli parancsvégrehajtást.

A NorForge [saját technikai beszámolója](https://norforge.com/blog/inside_cairn) szerint a feladatokat `claudecode_deepseek-v4.1-flash` nevű munkás végezte. Ez valószínűleg Claude Code-harness és DeepSeek V4.1 Flash modell párosítására utal, de nem bizonyítja, hogy az Anthropic vagy a DeepSeek üzemeltette, jóváhagyta vagy ismerte a kampányt. A Cairn fejlesztője azt közölte, hogy platformját nem támadásokra tervezte.

A kár mértéke sem teljesen tisztázott. A Deere nem talált érzékeny adathoz való hozzáférésre utaló jelet; a SharkNinja szerint egy különálló terméktámogatási oldal érintett, a Cummins pedig egy külső szolgáltató oldalán történt lehetséges támadást vizsgál. A Reuters nem tudta megállapítani, mennyi adatot vittek el.

Az eset legfontosabb változása az automatizálás léptéke. Rövid utasításokból az ügynökök órákon át önállóan kerestek kerülőutakat. A védekezésnek ezért a sebezhetőségek javítása mellett a nyilvánosan elérhető ügynökpanelek, a hosszú idejű gépi próbálkozások és a szokatlan vezérlőpanel-forgalom észlelésére is ki kell terjednie.

*Források: [Reuters – How one hacker used AI agents](https://www.reuters.com/legal/government/how-one-hacker-used-ai-agents-few-thousand-dollars-break-into-scores-sites-2026-10-19/); [NorForge – Inside Cairn](https://norforge.com/blog/inside_cairn); [The Verge – a vállalatok reakciói](https://www.theverge.com/ai-artificial-intelligence/1013643/ai-agents-hack-john-deere-shark-ninja-cummins).*
