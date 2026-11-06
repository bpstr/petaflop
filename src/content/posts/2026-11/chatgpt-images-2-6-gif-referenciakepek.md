---
title: "GIF-ekkel és menthető referenciaképekkel érkezett a ChatGPT Images 2.6"
date: 2026-11-06
summary: "Az új képgeneráló rövid animációkat és később is előhívható referenciaképeket hoz a ChatGPT-be; az API-ban két modell és SVG-kimenet is elérhető."
category: kiadasok
tags: ["AI", "OpenAI", "ChatGPT", "kreatív AI", "API"]
draft: false
hidden: false
---

Az OpenAI november 4-én bemutatta az Images 2.6-ot. A frissítés gyorsabb képgenerálást és a szerkesztések közötti pontosabb részletmegőrzést ígér, a ChatGPT pedig GIF-készítéssel és elmenthető referenciaképekkel bővül. Egy korábban feltöltött képet így név szerint is elő lehet hívni egy későbbi beszélgetésben.

<figure>
  <div style="position:relative;aspect-ratio:16/9;">
    <iframe src="https://www.youtube-nocookie.com/embed/bJldMYfRvMQ" title="Introducing ChatGPT Images 2.6 – az OpenAI bemutatóvideója" width="560" height="315" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <figcaption>Az OpenAI bemutatóvideója: <a href="https://www.youtube.com/watch?v=bJldMYfRvMQ">Introducing ChatGPT Images 2.6 – megnyitás a YouTube-on</a>.</figcaption>
</figure>

## Ugyanaz a fotó, több beszélgetés

A [november 4-i kiadási jegyzet](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) szerint az elmentett referenciaképek új beszélgetésekben is használhatók, ismételt feltöltés nélkül. A fotónak nevet kell adni, majd a kérésben a `@` jel után erre a névre lehet hivatkozni.

Ha például egy kutya képét `Bodri` néven mentjük el, később kérhetünk akvarellportrét `@Bodri` szereplésével. A gyakorlati előny az újrafelhasználás: a következő képhez is kéznél van ugyanaz a kiinduló fotó. Ez nem garantál minden alkalommal azonos megjelenést; az OpenAI API-dokumentációja továbbra is felsorolja a visszatérő karakterek és márkaelemek következetes ábrázolásának korlátait.

## Rövid animációk szövegből vagy állóképből

A GIF-készítés fokozatosan jelenik meg a ChatGPT-ben. Szövegesen leírhatjuk az ismétlődő mozgást, vagy feltölthetünk egy állóképet, amelyet az alkalmazás animál. Az elkészült GIF lejátszási sebessége módosítható, az eredmény menthető és megosztható.

A [súgó](https://help.openai.com/en/articles/11084440-images-in-chatgpt) különbséget tesz a ChatGPT által készített animáció és a feltöltött GIF között: az előbbi további kérésekkel szerkeszthető, egy már animált, kívülről feltöltött GIF-et viszont jelenleg nem tud módosítani. A kijelöléses képszerkesztés sem teljesen pontos: a változtatás a megjelölt területen kívülre is kiterjedhet.

## Két API-modell, külön sebesség- és minőségszempontok

A fejlesztők a GPT-Image-2.6 Flare és a GPT-Image-2.6 Sunburst közül választhatnak. Az OpenAI a Flare-t gyors képváltozatok készítéséhez, a Sunburstöt részletgazdagabb képekhez és pontosabb szerkesztésekhez ajánlja. A [bejelentés](https://openai.com/index/introducing-images-2-6/) 50 százalékkal gyorsabb képgenerálást említ, a Flare pedig alacsony minőségi beállítással akár hat másodperc alatt is elkészülhet. Ezek a gyártó állításai, saját sebességmérést nem végeztünk; a hat másodperc nem általános válaszidő-garancia.

Az [API útmutatója](https://developers.openai.com/api/docs/guides/image-generation) szerint a `quality` a megjelenítés minőségét, a `complexity` pedig a kép elkészítése előtti tervezés mértékét szabályozza. A magasabb komplexitás hosszabb várakozással és nem kívánt változtatásokkal is járhat. A képgenerálási végponton statikus SVG-kimenet is kérhető, ami szerkeszthető vektoros alakzatokat ad például ikonokhoz és illusztrációkhoz; a képszerkesztési végpont SVG-kimenetet nem támogat.

Az OpenAI az Images 2.6-ot világszerte, a ChatGPT és a Codex minden előfizetési szintjén elérhetőként jelentette be. A GIF-funkció fokozatos bevezetése miatt azonban az új lehetőségek nem feltétlenül jelennek meg egyszerre minden fiókban.

*Források: [OpenAI – Introducing Images 2.6](https://openai.com/index/introducing-images-2-6/); [ChatGPT kiadási jegyzetek, november 4.](https://help.openai.com/en/articles/6825453-chatgpt-release-notes); [Images in ChatGPT](https://help.openai.com/en/articles/11084440-images-in-chatgpt); [Image generation – API-dokumentáció](https://developers.openai.com/api/docs/guides/image-generation).*
