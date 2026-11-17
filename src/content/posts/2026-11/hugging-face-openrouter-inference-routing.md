---
title: "Az OpenRouterre bízza a nyílt modellek futtatását a Hugging Face"
date: 2026-11-17
summary: "A nyelvi modellek hívásait már külső szolgáltatók között irányítja a rendszer ár, sebesség és megbízhatóság alapján; a kód maradhat, de az egyéni szolgáltatói kulcsok nem."
category: kiadasok
tags: ["AI", "Hugging Face", "OpenRouter", "API", "nyílt modellek"]
draft: false
hidden: false
---

A Hugging Face november 16-tól az OpenRouter infrastruktúrájára tereli az Inference Providers szolgáltatáson át futó nyelvi modellhívásokat. A fejlesztő továbbra is a Hugging Face tokenjét és végpontját használhatja, az OpenRouter pedig a háttérben választ a modellt kiszolgáló szolgáltatók közül.

Az alapértelmezett útvonal az effektív ár, az első tokenig mért idő, az áteresztőképesség és a megbízhatóság friss adatai alapján dönt. Ha egy szolgáltató hibázik vagy elfogy a kapacitása, a kérés másikhoz kerülhet. Egy modellnévhez fűzött utótaggal a fejlesztő leggyorsabb vagy legolcsóbb útvonalat, illetve konkrét szolgáltatót is kérhet. A szervezetek letilthatják azokat a szolgáltatókat, amelyekhez nem akarják elküldeni az adatot.

A kompatibilitási ígéret széles: ugyanazok a modellek OpenAI Chat Completions és Responses, valamint Anthropic Messages formátumban is hívhatók. A párbeszédek gyorsítótárát egy stabil `X-HF-Session-Id` fejléc segíthet ugyanannál a háttérszolgáltatónál tartani. A Hugging Face szerint nincs külön felár; a számlán az adott kiszolgáló ára jelenik meg.

Van viszont egy törés a korábbi működéshez képest. Nyelvi modelleknél már nem lehet a Hugging Face-en keresztül saját, külső szolgáltatói API-kulcsot használni: a forgalom az OpenRouter útvonalán megy és a Hugging Face-fiókra terhelődik. Kép-, videó- és hanggenerálás egyelőre nem kerül át, ott a régi Inference Providers útvonal és az egyéni kulcsok is megmaradnak.

A váltás egyszerűbb hozzáférést adhat sok nyílt súlyú modellhez, de új bizalmi láncot is létrehoz. Éles rendszerben ezért nem elég azt ellenőrizni, hogy a modell neve változatlan: dokumentálni kell a tényleges szolgáltatót, az adatmegőrzési feltételeket, a régiót és azt is, hogy egy automatikus átterelés elfogadható-e.

**Források:** [Hugging Face bejelentés](https://huggingface.co/blog/openrouter), [útválasztási dokumentáció](https://huggingface.co/docs/inference-providers/routing). A témát az [AlphaSignal Latest](https://alphasignal.ai/) alapján követtük vissza az elsődleges forrásokhoz.
