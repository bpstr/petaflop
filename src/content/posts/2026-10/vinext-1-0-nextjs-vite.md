---
title: "Vinext 1.0: AI-kísérletből Next.js-alternatíva"
date: 2026-10-02
summary: "A Cloudflare szeptember 28-i kiadása Vite-ra építve futtat Next.js-alkalmazásokat, de a Cache Components támogatása még korlátozott."
category: kiadasok
tags: ["AI", "kódolás"]
draft: false
hidden: false
---

Februárban egy egyhetes, AI-val támogatott kísérletként indult; szeptember 28-án eljutott az 1.0-s kiadásig a Cloudflare Vinext projektje. A keretrendszer a Next.js felületeit Vite-ra építve valósítja meg, hogy a meglévő alkalmazások többféle futtatókörnyezetbe legyenek átvihetők.

Az új verzió az App Router és a régebbi Pages Router használóit is célozza. A Cloudflare a gyorsítótárazás, az újraérvényesítés és a szerveroldali működés javítását emeli ki. A bejelentés érdekes tanulsága, hogy egy API azonos nevű függvényeinek megírása még kevés: a kéréseknek, cache-bejegyzéseknek és későbbi oldalbetöltéseknek is a várt módon kell viselkedniük.

A cég éjszakánként futtatja a Next.js végponttól végpontig tartó tesztjeit a Vinext ellen, és üzemi használatról számol be. Ez nem általános kompatibilitási garancia. A Cache Components és a `use cache` támogatása például továbbra is korlátozott. Meglévő projektnél ezért az átállás előtt a ténylegesen használt funkciókat kell ellenőrizni, nem csupán az 1.0-s verziószámot.

*Források: [Cloudflare – Vinext 1.0](https://blog.cloudflare.com/vinext-nextjs-on-vite/).*
