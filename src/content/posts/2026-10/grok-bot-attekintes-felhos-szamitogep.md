---
title: "Saját felhős gépen dolgozik a Grok Bot: mit tud, mennyibe kerül, és hol kell résen lenni"
date: 2026-10-20
summary: "A SpaceXSI ügynökei böngészőt, terminált és bekötött alkalmazásokat használnak, akkor is, ha a laptopod le van csukva. Összeszedtük, mit állít a gyártó, mit mutatnak a független beszámolók, és melyik biztonsági korlátot érdemes komolyan venni."
category: utmutatok
tags: ["AI", "Grok", "SpaceXAI", "Cursor", "ügynökök"]
draft: false
hidden: false
---

A legtöbb AI-asszisztens egy chatablakban válaszol, a munka többi részét pedig neked kell elvégezned. A Grok Bot ezen akar változtatni: az augusztus 11-én bétaként indított szolgáltatás ügynökei egy felhőben futó, tartós számítógépen dolgoznak, saját böngészővel, fájlrendszerrel és terminállal. Belépnek az általad használt szolgáltatásokba, és a [gyártó szerint](https://x.ai/news/introducing-grok-bot) csak akkor jelentkeznek, ha jóváhagyás kell, vagy elkészült a munka.

Ez a termékbemutató a hivatalos dokumentáción, a változásnaplón és független beszámolókon alapul, nem saját, hosszabb teszten. Átláthatósági megjegyzés: a cikk első változatát a szerkesztőség megbízásából maga a Grok Bot írta. Éppen ezért külön jelöljük, mi a gyártó állítása, és mi az, amit más forrás is alátámaszt.

## Ki áll mögötte?

A Grok Botot az Elon Musk vezette SpaceX mesterséges intelligenciával foglalkozó cége fejleszti. A cég augusztusban még SpaceXAI néven mutatta be a terméket, októberben viszont [SpaceXSI-re](https://www.investing.com/news/stock-market-news/musk-says-he-will-rename-spacexai-to-spacexsi-4930944) váltott. A [felhasználási feltételek](https://x.ai/legal/terms-of-service) szerint a jogi személy továbbra is a SpaceXAI LLC.

A termék szorosan kötődik a Cursorhoz, amelynek [felvásárlásáról](/posts/2026-06/spacex-cursor-felvasarlas/) a SpaceX júniusban állapodott meg. A bejelentés a [Cursor fórumán](https://forum.cursor.com/t/introducing-grok-bot/168053) is megjelent, a [GYIK](https://docs.x.ai/grok-bot/faq) szerint a Grok Bot Cursor-fiókkal és -adatbeállításokkal működik, a [dokumentáció](https://docs.x.ai/grok-bot/overview) pedig kimondja, hogy az ügynökök gépei a Cursor felhőjében futnak.

## Mit csinál a gyakorlatban?

Egy Botnak üzenetben adsz feladatot, ahogy egy kollégának írnál. A desktopalkalmazás macOS-en, Windowson és Linuxon fut, a mobilos társalkalmazás iOS-en és Androidon érhető el, a beszélgetések pedig szinkronizálódnak az eszközök között. A munka a felhős gépen zajlik, így a [GYIK](https://docs.x.ai/grok-bot/faq) szerint a laptop vagy a telefon bezárása nem állítja le sem a folyamatban lévő feladatot, sem az ütemezett rutinokat.

Szolgáltatásokhoz kétféleképpen fér hozzá. Ahol van ilyen, ott [connectoron](https://docs.x.ai/grok-bot/computer-and-apps), vagyis strukturált bővítményen keresztül, ahol nincs, ott a böngészőben kattintgat, mint egy ember. A [változásnapló](https://x.ai/changelog/bot) többek között Gmail-, Outlook-, naptár-, Slack-, GitHub-, Notion-, Figma-, Canva- és QuickBooks-integrációt említ. A gyártó maga is a connectort ajánlja, ha elérhető, mert az általában megbízhatóbb, mint a weboldal végigkattintása.

A gyártó belső példái alapján jól látszik, milyen munkára szánják: egy értékesítési Bot hívásjegyzetekből frissíti a CRM-et és follow-up leveleket fogalmaz, egy műveleti Bot a Gmailben érkező számlákat dolgozza fel, egy fejlesztői Bot pedig reprodukál egy hibát, jegyet nyit, majd továbbadja a javítást egy másik Botnak. Ezek a [SpaceXSI saját beszámolói](https://x.ai/news/introducing-grok-bot), nem független mérések.

## Több Bot, memória, skillek és rutinok

Egy fiókhoz több Bot tartozhat. Ezek párhuzamosan dolgoznak, üzennek egymásnak, és csoportos beszélgetésben is egyeztethetnek. Mindegyiknek külön képernyője van a közös gépen, de egyszerre csak egy számítógép-használati feladatot végez.

A Bot [megjegyzi](https://cursor.com/docs/grok-bot/work) a tartós preferenciákat, a fontos tényeket és a korábbi munkák összefoglalóit. A dokumentáció ugyanakkor kifejezetten figyelmeztet, hogy a memória nem helyettesíti a hiteles forrást, ezért fontos döntés előtt érdemes újra megnyittatni az aktuális adatot.

A skill egy újrahasználható leírás arról, hogyan kell elvégezni egy feladatot. A rutin azt mondja meg egy Botnak, mikor futtassa: ütemezve, vagy egy támogatott eseményre, például Slack-üzenetre, GitHub-értesítésre vagy webhookra. A gyártó azt javasolja, hogy előbb egyszeri feladaton tedd megbízhatóvá a folyamatot, és csak utána automatizáld. A „Teach a task” funkcióval egy legfeljebb tízperces böngészős bemutatóból is készülhet skillvázlat, de ez a dokumentáció szerint még fokozatosan érkezik.

## Jóváhagyás küldés előtt, de nem minden esetben

Az e-maileknél és a Slack-üzeneteknél alapértelmezésben vázlatkártyát kapsz, amit elküldhetsz vagy elvethetsz. A [változásnapló](https://x.ai/changelog/bot) szerint ez szeptember 8. óta így működik. Október 11. óta a Bot nem visszafordítható művelet (küldés, posztolás, vásárlás, törlés) előtt ellenőrzi, hogy a saját üzeneteidben jóváhagytad-e. Fontos kitétel, hogy a vázlatokat Botonként ki lehet kapcsolni, és ilyenkor a Bot közvetlenül küld.

A kockázatos lépések mögött egy [Auto-review nevű ellenőrző réteg](https://docs.x.ai/grok-bot/security) áll. A dokumentáció szerint ez egy független ellenőrző modell, amely a parancsokat, a bővítményhívásokat, a számítógép-használatot és a rutinok módosítását nézi át, és továbbengedheti a műveletet, jóváhagyást kérhet, vagy letilthatja. A gyártó azt is leírja, hogy a memóriába írást és a legtöbb beállításváltozást nem ellenőrzi, és nem is egyedüli védelemnek szánja. Jelszót, kétlépcsős kódot vagy CAPTCHA-t a Bot átad neked: ilyenkor átveszed a gépet, elvégzed a lépést, és a Bot folytatja.

## Amit érdemes tudni, mielőtt bármit rábízol

**A közös gép nem biztonsági határ.** Egy fiók összes Botja [ugyanazt a gépet](https://docs.x.ai/grok-bot/computer-and-apps) használja: közösek a böngészős bejelentkezések, a fájlok és a parancssori hozzáférések. A gyártó szerint ezért ne rakj a gépre olyan jelszót vagy fájlt, amelyet egy másik Botodnak nem szabad elérnie, és a különböző Botokat se használd elszigetelésre.

**A gép alszik, és újraépülhet.** A Cursor egyik munkatársa a [fórumon](https://forum.cursor.com/t/cloud-computer-wipes-packages-after-rebuild/169847) azt írta, hogy a fájlok és a bejelentkezések megmaradnak, de a rendszerszinten telepített csomagok és háttérszolgáltatások egy frissítés után eltűnhetnek, ráadásul a gép üresjáratban elalszik. A [Productize](https://productize.life/blog/grok-bot-review/en) független próbájában a gép nagyjából egy perc múlva elérhetetlenné vált, mert a beszélgetés végeztével elaludt, majd egy újabb üzenetre visszajött. A beszámolók szerint egyébként Linux fut rajta; egy [japán felhasználó](https://note.com/bright_dietes994/n/n82219247beae?hl=en) Debian 13-at talált root jog nélkül. Ez egyéni megfigyelés, a gyártó nem dokumentálja.

**Adatvédelem.** A Grok Bot felhős adattárolást igényel, ezért a [GYIK](https://docs.x.ai/grok-bot/faq) szerint a Cursor régi (Legacy) Privacy Mode-ja nem támogatott. A tanításból való kimaradás a Cursor-fiók beállításait követi.

## Mennyibe kerül, és elérhető-e itthon?

Önálló termékként nem lehet megvenni. Az október 12-én bevezetett [X Subscription](https://x.ai/news/x-subscription) csomagjai közül a [díjszabás szerint](https://x.ai/pricing) a havi 30 dolláros Premiumtól felfelé jár hozzá a Grok Bot. A Super 100, az Ultra 200 dollár havonta, adók nélkül; a nagyobb csomagok a Plushoz mért négy-, tizenöt- és ötvenszeres közös AI-keretet adnak, amely hetente frissül. A [GYIK](https://docs.x.ai/grok-bot/faq) szerint a Bot a fizetős egyéni Cursor-csomagokkal és a Cursor Teamsszel is használható, és a régi SuperGrok-előfizetés is összeköthető vele. Az egy keretbe férő munka mennyiségét a gyártó nem számszerűsíti, csak az egymáshoz viszonyított szorzókat közli.

A felület szeptember 22. óta [magyarul is elérhető](https://x.ai/changelog/bot). A SpaceXSI az X Subscriptiont globálisan, fokozatosan vezeti be, magyarországi vagy uniós korlátozásról szóló külön tájékoztatást viszont nem találtunk. A változásnapló annyit jelez, hogy ha egy modell valamelyik régióban nem érhető el, a Bot a Grokra vált.

Kinek lehet hasznos? Inkább annak, akinek sok ismétlődő, több alkalmazáson átívelő munkája van, és hajlandó gondosan beállítani a határokat: mit küldhet el a Bot magától, és hol kell megállnia. Aki egyetlen jelszót sem adna egy felhős ügynök kezébe, annak a közös gép modellje ma is erős ellenérv. Független, hosszabb távú megbízhatósági mérést egyelőre nem találtunk, így a gyártó belső sikertörténetei nem helyettesítik a saját, kis tétű próbát.

*Források: [SpaceXSI – Introducing Grok Bot](https://x.ai/news/introducing-grok-bot), [Grok Bot dokumentáció](https://docs.x.ai/grok-bot/overview), [GYIK](https://docs.x.ai/grok-bot/faq), [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps), [Security](https://docs.x.ai/grok-bot/security), [Work with Grok Bot (Cursor docs)](https://cursor.com/docs/grok-bot/work), [Changelog](https://x.ai/changelog/bot), [X Subscription](https://x.ai/news/x-subscription), [Pricing](https://x.ai/pricing), [Cursor fórum – bejelentés](https://forum.cursor.com/t/introducing-grok-bot/168053), [Cursor fórum – újraépítés](https://forum.cursor.com/t/cloud-computer-wipes-packages-after-rebuild/169847), [The Verge](https://www.theverge.com/ai-artificial-intelligence/978666/spacexai-grok-bot-ai-agent-beta-launch), [Productize](https://productize.life/blog/grok-bot-review/en), [Reuters/Investing.com](https://www.investing.com/news/stock-market-news/musk-says-he-will-rename-spacexai-to-spacexsi-4930944).*
