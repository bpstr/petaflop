---
title: "Rosszindulatú Claude Code-bővítmény került a Cursor piacterére"
date: 2026-10-31
summary: "A Cursor piacterén terjesztett két módosított macOS- és Windows-verzió SSH-hátsóajtót és tartósítást próbált telepíteni; a frissítés önmagában nem takarítja ki a gépet."
category: hirek
tags: ["AI", "Claude Code", "Cursor", "kiberbiztonság"]
draft: false
hidden: false
---

A Cursor október 29-én rosszindulatú változatokat talált a saját VS Code-bővítménypiacán az `Anthropic.claude-code` csomagból. A 2.1.312 és 2.1.313 verzió macOS-en és Windowson körülbelül tizenegy órán át volt elérhető. Ezeket nem az Anthropic készítette, és a Cursor szerint nincs bizonyíték arra, hogy a hivatalos terjesztés vagy más verzió érintett lenne.

A módosított bővítmény a gép és a felhasználó adatait gyűjtötte, köztük a környezeti változók neveit — nem az értékeiket —, a beállított Git-emailt és a nyilvános IP-címet. Emellett támadói SSH-kulcsot próbált hozzáadni, fordított alagutat nyitni és újraindítás után is futó komponenst telepíteni. Az SSH-szolgáltatás bekapcsolása rendszergazdai jog nélkül jellemzően meghiúsult, de a kulcs, a fájlok és a tartósítás egy része így is a gépen maradhatott.

A Cursor leállíttatta a támadó szerverét, átépítette a piacteret és lecserélte a kapcsolódó kulcsokat. Ez azonban csak a távoli csatornát zárta le: a bővítmény eltávolítása vagy frissítése nem törli automatikusan a helyi módosításokat.

Az érintett verziót telepítőknek ezért az [eredeti biztonsági közlemény](https://cursor.com/blog/claude-code-extension-security-notice) ellenőrző és takarító lépéseit kell követniük, majd tiszta gépről lecserélniük az elérhető hitelesítő adatokat. Az [AlphaSignal által jelzett](https://alphasignal.ai/news/cursor-s-claude-code-extension-was-hijacked-exposing-5-000-developers-to-ssh) eset arra is figyelmeztet, hogy egy szerkesztőbővítmény ugyanazokat a helyi jogosultságokat örökli, amelyekkel a fejlesztő dolgozik.

**Források:** [Cursor biztonsági közlemény](https://cursor.com/blog/claude-code-extension-security-notice), [AlphaSignal](https://alphasignal.ai/news/cursor-s-claude-code-extension-was-hijacked-exposing-5-000-developers-to-ssh)
