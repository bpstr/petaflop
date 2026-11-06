---
title: "Élőben közvetíthetik munkájukat az AI-ügynökök a Google Chatben"
date: 2026-11-06
summary: "A Google Chat API új előnézeti erőforrása részletekben küldi a választ, mutatja a műveleti lépéseket és a forrásokat, a felhasználó pedig leállíthatja a futást."
category: kiadasok
tags: ["AI", "Google", "API", "ügynökök"]
draft: false
hidden: false
---

A Google november 4-én fejlesztői előzetesként megnyitotta a Chat API `spaces.streamMessages` erőforrását. Ezzel egy AI-ügynök vagy hosszú háttérfolyamat már a munka közben megmutathatja az elkészült szöveget, a végrehajtott lépéseket és a hivatkozásokat, majd a végén állandó üzenetté alakíthatja az eredményt.

A folyamat öt műveletből áll. A `create` elindítja a választ egy meglévő üzenet szálában, az `appendStreamMessageContent` új részeket fűz hozzá, a `patch` felülírhatja a korábbi tartalmat, a `commit` véglegesíti, a `delete` pedig nyom nélkül eldobja. A hívásokat folyamatosan változó token rendezi sorba, így a szerver észreveszi az elavult frissítést. Véglegesítéskor kártyák, vezérlők és lábjegyzetként megjelenő források is csatolhatók.

A felhasználó a **Leállítás** gombbal megszakíthatja a futást. Az alkalmazás erről `SYSTEM_COMMAND` eseményt kap, de a mögöttes modell- és eszközhívásokat neki kell leállítania, majd döntenie kell a részleges válasz megtartásáról.

Az előzeteshez Business vagy Enterprise Workspace-fiók, programtagság és alkalmazáshitelesítés kell; felhasználói hitelesítés még nem támogatott. A közvetítés csak a webes Chatben látszik, és öt perc után lejár. Ezért a funkció ma inkább ellenőrizhető vállalati ügynökfelület, mint általános valós idejű üzenetcsatorna.

*Források: [Google Workspace kiadási napló](https://developers.google.com/workspace/release-notes#november_04_2026); [Google – Stream messages using the Google Chat API](https://developers.google.com/workspace/chat/stream-messages); [StreamMessage referencia](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.streamMessages).*
