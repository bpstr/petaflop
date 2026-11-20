---
title: "API-ba került a GPT-Live-1.1, a csendes percek olcsóbbak lettek"
date: 2026-11-20
summary: "Az OpenAI új hangmodellje pontosabban kezeli a betűket, számokat és akcentusokat; a WebRTC-s standby mód közben leállítja az inaktív következtetést."
category: kiadasok
tags: ["AI", "OpenAI", "hangalapú AI", "API", "fejlesztők"]
draft: false
hidden: false
---

Az OpenAI november 19-én elérhetővé tette a **GPT-Live-1.1** modellt a fejlesztői API-ban. Ez ugyanaz a modellcsalád, amely október közepe óta a ChatGPT fizetős hangmódját hajtja, de most saját alkalmazásokba is beépíthető a `gpt-live-1.1` modellazonosítóval.

A vállalat szerint az új változat többnyelvű beszélgetésekben következetesebben ejti az akcentusokat, és pontosabban kezeli a betűket, számokat, illetve az átiratot. Ezek gyártói minőségi állítások; az OpenAI nem közölt hozzájuk független mérési eredményt. A modell továbbra is delegálhat összetett feladatokat egy külön háttérmodellnek, amelynek használata külön költség.

Gyakorlatiasabb újdonság a **standby** mód. WebRTC-kapcsolatnál 5 és 60 másodperc közötti tétlenségi idő állítható be. Ha eddig nem szólal meg senki, a modell következtetése szünetel, miközben a hívás nyitva marad; új beszédre a munkamenet folytatódik. A standby díja percenként 0,02 dollár, az aktív hangkapcsolaté 0,05 dollár, más modell- és eszközhasználat nélkül.

Ez nem minden hangalkalmazást tesz automatikusan 60 százalékkal olcsóbbá. A megtakarítás attól függ, mennyi tényleges csend van a hívásokban, és milyen háttérmodelleket vagy eszközöket hív az alkalmazás. Ügyfélszolgálati várakozásnál vagy hosszabb helyszíni munkafolyamatnál viszont a csend többé nem feltétlenül teljes aktív díjon ketyeg.

**Források:** [OpenAI API-változási napló](https://developers.openai.com/api/docs/changelog), [OpenAI Developer Community – standby és díjak](https://community.openai.com/t/gpt-live-1-1-has-arrived-in-the-api/1418537), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/openai-ships-gpt-live-1-1-to-developers-with-60-cheaper-idle-sessions)
