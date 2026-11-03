---
title: "A Codex terhelésére új Git-háttérrendszert épített az OpenAI"
date: 2026-11-03
summary: "A Pando párhuzamos áganként kezeli az írásokat és újrahasznosítja a packfile-okat; az OpenAI szerint közel ötször gyorsabb lett a medián push."
category: elemzesek
tags: ["AI", "OpenAI", "Codex", "Git", "infrastruktúra"]
draft: false
hidden: false
---

Amikor egy fejlesztő helyett több ügynök készít egyszerre ágakat, commitokat és CI-feladatokat, a verziókezelés szervere válhat szűk keresztmetszetté. Az OpenAI ezért építette meg a [Pando nevű Git-háttérrendszert](https://openai.com/index/scaling-git-at-openai/), amely már a vállalat teljes monorepóját kiszolgálja anélkül, hogy a fejlesztőknek vagy a Codexnek új klienst kellett volna tanulnia.

A Pando az egymástól független ágak frissítéseit párhuzamosan kezeli. Cserébe nem ígér a teljes adattár minden hivatkozásáról egyetlen, azonos időpillanatot tükröző képet; az egyes ágak műveletei maradnak sorosíthatók. Olvasáskor nem minden kliensnek készít új packfile-t, hanem a korábbi pushok változatlan csomagjait választja ki és gyorsítótárakból szolgálja ki.

Az OpenAI saját üzemi adatai szerint a medián push késleltetése közel ötszörösére gyorsult, a rendszer pedig naponta majdnem egy petabájtnyi Git-adatot továbbít. Egyetlen órában 57 terabájtnál is több csomagot szolgált ki, több mint 99 százalékban helyi lemezgyorsítótárból. Ezek belső mérések egy különösen nagy monorepón; nem jelentik, hogy minden csapatnál ugyanez volna a nyereség.

A céges beszámoló szerint a Rustban írt rendszer tíz hét alatt jutott el az indulástól az éles használatig. Egy mérnök tervezte a magját, ügynökcsapatok implementálták, néhány mérnök pedig telepítette; a formális ellenőrzéshez Lean- és TLA+-modelleket is használtak. A Pando nem nyilvános termék. Az OpenAI viszont azt írja, hogy a szükséges Git-kliensjavítások egy részét visszaküldi a nyílt projektbe – ez lehet a kézzelfogható haszon a vállalaton kívül.
