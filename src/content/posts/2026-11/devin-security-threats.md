---
title: "A friss sebezhetőségből egy kattintással indít kódfelmérést a Devin"
date: 2026-11-20
summary: "A Devin Security Threats kezelt sebezhetőségi jegyzéket köt össze több kódtár párhuzamos vizsgálatával és emberi ellenőrzésre váró javítási pull requestekkel."
category: kiadasok
tags: ["AI", "Cognition", "Devin", "kiberbiztonság", "fejlesztői eszközök"]
draft: false
hidden: false
---

A Cognition november 19-én elindította a **Devin Security Threats** funkciót: a kezelt sebezhetőségi jegyzék egy bejegyzését közvetlenül össze lehet kötni a kiválasztott kódtárak vizsgálatával. Az első két tétel a Java4Shell Java-hiba és az öt nginx-sebezhetőséget összefogó NGINX2Root.

Egy threat-bejegyzés leírja az érintett szoftvert, a támadási lehetőséget és a javítás irányát. A „Scan with Devin” gomb a megadott kódtárakon indít felmérést. A Devin ezt az eddigi Agentic MapReduce eljárásával osztja szét párhuzamos munkamenetekre, majd a találatokat a csapat fenyegetési modelljéhez igazítva rangsorolja. Egy elfogadott találatot az ügynöknek lehet adni javításra, amely pull requestet készít emberi átnézéshez.

Az **Auto-triage** ennél folyamatosabb munkafolyamatot ad: a csapat kódtárakat és minimális súlyosságot választ, a rendszer pedig minden új, megfelelő bejegyzésnél elindítja a vizsgálatot. A találat nélküli fenyegetéseket kérésre automatikusan lezárhatja. A nyilvános jegyzék mellett saját threat is írható például hibavadász-jelentésből, gyártói figyelmeztetésből vagy belső incidensből.

A két induló hibához a Cognition külön javítási skillt is kiadott a Vulnerability Fixes bővítményben. Ezek egyszerű, nyílt forrású Markdown-útmutatók, ezért ellenőrzőlistaként vagy más kódoló ügynökkel is használhatók. Ez jól elkülönül a Threats szolgáltatástól: a skill egy szűk javítási recept, míg a Devin Security több kódtár felosztását, az eredmények összevonását és a találatok életciklusát kezeli.

A szolgáltatás két induló threatje már elérhető a Devin Security felületén, de a bejelentés nem közöl árat, támogatott kódtárszolgáltatói listát, tipikus futási időt vagy találati pontosságot. A Cognition nem publikált független hamispozitív- vagy javítási sikerarányt sem. A létrehozott pull request ezért kiindulópont: tesztelés, kódellenőrzés, függőségfrissítés és éles környezetben végzett ellenőrzés továbbra is a csapat feladata.

**Források:** [Cognition – Devin Security Threats](https://devin.ai/blog/nginx2root-java4shell-threats), [Devin Security – működés és korlátok](https://devin.ai/security), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/cognition-s-devin-turns-security-vulnerabilities-into-auto-generated-code-fixes)
