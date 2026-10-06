---
title: "Szöveges vízjelet vezet be az OpenAI az EU-ban"
date: 2026-10-06
summary: "A textGrain a szóválasztásban hagy statisztikai jelet; az API-ban választható, a detektor pedig egyelőre korlátozottan hozzáférhető."
category: hirek
tags: ["AI", "OpenAI", "ChatGPT"]
draft: false
hidden: false
---

Láthatatlan szöveges vízjelet vezet be az OpenAI az Európai Unióban. Az október 5-i bejelentés szerint a ChatGPT és a Codex erre alkalmas szöveges válaszaiban a következő hetekben jelenik meg a jelölés. Az API ügyfelei világszerte bekapcsolhatják egyes modelleknél, ott azonban alapértelmezésben kikapcsolva marad.

A textGrain nem rejtett karaktereket vagy különleges szóközöket illeszt a válaszba. A modell szó- és tokenválasztásának valószínűségeit módosítja úgy, hogy egy hosszabb szövegben statisztikai mintázat alakuljon ki. Ezt keresi az ellenőrző rendszer. A másolás és beillesztés tehát önmagában nem valamiféle láthatatlan mellékletet visz tovább: a jel a megfogalmazás része.

A felismerésnek lényeges korlátai vannak. Rövid válaszoknál és kötöttebb szövegeknél, például kódban, kevesebb mozgástér marad a kimutatható mintázathoz. Az átfogalmazás és a fordítás tovább ronthatja a felismerést. A detektor tévesen is jelezhet, vagy elmulaszthat egy valóban jelen lévő vízjelet; negatív eredménye ezért nem bizonyítja az emberi eredetet.

A szövegdetektorhoz kezdetben jóváhagyott kutatók és szakmai szervezetek kaphatnak hozzáférést. Az API-s vízjelezés bekapcsolása önmagában nem ad ilyen jogosultságot. Egy találat azt sem mondja meg, mennyit dolgozott a szövegen ember, vagy hogy a modell csupán szerkesztette-e a kapott anyagot.

Az OpenAI az uniós átláthatósági követelményekkel indokolja a bevezetést. A magyar olvasó számára a fontos különbség: az eredetjelzés nem tényellenőrzés, nem szerzőségi bizonyítvány, és nem azonos egy minden szövegre megbízhatóan működő AI-detektorral.

*Források: [OpenAI – az uniós szöveges eredetjelzés bevezetése](https://openai.com/index/eu-text-provenance/), [OpenAI – a textGrain működése és korlátai](https://help.openai.com/en/articles/8912793-provenance-signals-in-openai-generated-content).*
