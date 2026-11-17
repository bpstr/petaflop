---
title: "Egyetlen Rust-binárissá fogyott az OpenCode böngészőhídja"
date: 2026-11-17
summary: "A Browse 0.1.0 a CLI-t, a relét és az MCP-szervert egy kis natív programba költözteti, miközben a Playwright-függőséget is elhagyja."
category: kiadasok
tags: ["AI", "OpenCode", "MCP", "Rust", "AI-ügynökök"]
draft: false
hidden: false
---

Az OpenCode Browse eddig egy Node.js- és Playwright-alapú közvetítővel engedte, hogy kódoló ügynökök a felhasználó meglévő Chromium-böngészőjében dolgozzanak. A november 16-án kiadott 0.1.0-s verzió ezt a köztes réteget Rustban írta újra: a parancssori felület, a böngészőbővítményhez kapcsolódó relé és az MCP-szerver egyetlen natív bináris lett.

A hivatalos kiadási jegyzet szerint a relé üresjáratban már néhány megabájtot használ a korábbi több száz megabájt helyett. Az OpenCode közösségi bejelentése ezt 25-ször kisebb memóriaigényként és 23-szor kisebb méretként foglalta össze. Ezek gyártói összehasonlítások: a jegyzet nem közöl mérési környezetet, terhelési profilt vagy független reprodukciót, ezért a szorzókat nem érdemes általános teljesítményeredménynek tekinteni.

A működés is egyszerűsödött. Az OpenCode külön eszközöket kap navigáláshoz, pillanatképhez, kattintáshoz, űrlapkitöltéshez, képernyőképhez, hálózati naplóhoz és felvételhez. A Claude Code, a Codex, a Cursor és más MCP-kliensek egy JavaScriptet futtató `execute` eszközt látnak, Playwright-szerű `page` felülettel. A Playwright tehát futásidejű függőségként eltűnt, de az ügynökök számára ismerős programozási minta megmaradt.

A munkamenetek helyét a böngészőlapok azonosítói vették át. Minden ügynök csak a saját lapjait és a felhasználó által átadott lapokat látja; egy projekt pedig egy közös Browse-példányt használ. A meglévő Chrome Web Store-bővítmény változatlanul működik, a telepítő pedig az OpenCode, a Claude Code, a Codex, a Cursor, a Gemini CLI és további kliensek konfigurációját is kezeli.

A kiadás kézzelfogható előnye nem egy új böngészési képesség, hanem a kisebb, könnyebben telepíthető közvetítő. A biztonsági modell ettől nem oldódik meg automatikusan: a bejelentkezett böngészőlapok átadása továbbra is erős jogosultság, ezért az engedélyezett oldalak, a kézi jóváhagyások és az elkülönített profilok fontosak maradnak.

**Források:** [OpenCode Browse 0.1.0 kiadási jegyzet](https://github.com/anomalyco/browse/releases/tag/v0.1.0), [Browse termékoldal](https://opencode.ai/product/browse). A kiadást az [AlphaSignal Latest](https://alphasignal.ai/) jelezte; a műszaki részleteket a GitHub-kiadásból ellenőriztük.
