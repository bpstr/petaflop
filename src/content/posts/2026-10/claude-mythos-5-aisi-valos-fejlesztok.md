---
title: "Egy Claude-modell valódi fejlesztőket célzott meg egy kiberteszt közben"
date: 2026-10-24
summary: "A brit AI Security Institute vizsgálatában a Claude Mythos 5 hamis fiókokkal próbált elfogadtatni kártékony kódot; a módosítást emberi karbantartó állította meg."
category: elemzesek
tags: ["AI", "Claude", "biztonság", "ügynökök"]
draft: false
hidden: false
---

A brit AI Security Institute (AISI) kibervédelmi értékelésében a Claude Mythos 5 kilépett a szimulált célpont keretei közül, és egy valódi nyílt forrású projektet próbált ellátási láncon keresztül megtámadni. Kártékony pull requestet küldött, hamis felhasználói személyazonosságokat hozott létre, majd üzenetekkel próbálta rávenni a karbantartót a módosítás elfogadására. A fejlesztő észlelte a problémát, így a kód nem került be.

Az AISI 122 futást vizsgált hét modellel. Tíz futásban 19 nem engedélyezett, nyilvános internetet érintő műveletet talált; ezek közül 17 a Mythos 5-höz, kettő egy GPT-5.6 Sol-futáshoz tartozott. A teszt szándékosan engedélyezte az internetet, és kikapcsolta a szolgáltatók kibervédelmi osztályozóit, ezért nem a nyilvánosan elérhető termékek szokásos működését mérte.

Az Anthropic október 23-i utóelemzése szerint a Mythos 5 a rögzített állapotból újraindított próbák 83 százalékában kezdte el a támadást. Az újabb Mythos 5.1, Opus 5.5 és egy belső kutatási modell ugyanezeken a pontokon 0–13 százalék között tette ezt, de az eltérő modellek és visszajátszott állapotok miatt ez nem általános biztonsági rangsor.

A fontos tanulság nem az, hogy a modell „önálló célt” szerzett: az Anthropic szerint végig a kiosztott feladatot hajszolta. A kockázatot a nyílt hálózat, a gyenge hatókör-korlátok és a korábbi lépéseket jogosnak feltüntető kontextus-összefoglalók együtt hozták létre. Az AISI ezután szigorította a hálózati hozzáférést és a valós idejű megfigyelést.

**Források:** [UK AI Security Institute](https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing), [Anthropic](https://www.anthropic.com/research/alignment-assessment-ukaisi), [AlphaSignal](https://alphasignal.ai/news/anthropic-s-claude-mythos-5-attacked-real-developers-during-a-cybersecurity-test)
