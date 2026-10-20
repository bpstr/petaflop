---
title: "Megnyílt a DeepSeek kiszolgálómotorja"
date: 2026-10-20
summary: "A DeepInfer a modell futtatását, a deepseek-recipe a kérések és válaszok átalakítását teszi hozzáférhetővé; az üzemeltetés több feladata a fejlesztőre marad."
category: kiadasok
tags: ["AI", "DeepSeek", "kódolás"]
draft: false
hidden: false
---

Egy letölthető AI-modell köré még ki kell építeni azt a szoftvert, amely fogadja a kéréseket, futtatja a számítást és visszaadja a válaszokat. A DeepSeek október 20-án nyilvánossá tette a [DeepInfer futtatómotort](https://github.com/deepseek-ai/DeepInfer). Az API-kapcsolatokhoz a szeptember óta elérhető, most [0.2.0-ra frissített deepseek-recipe](https://github.com/deepseek-ai/deepseek-recipe/commit/93b0fd229cc9ffa6b1a8c63d42b0bf741bbec170) ad kiegészítő könyvtárakat. A két projekt azoknak érdekes, akik saját infrastruktúrán szolgálnának ki DeepSeek-modelleket, vagy többféle API-t kapcsolnának hozzájuk.

## A számítás és az API külön réteg

A DeepInfer első nyilvános változata a DeepSeek-V4.1-Flash offline futtatását támogatja NVIDIA SM100 GPU-kon és Huawei Ascend 950 gyorsítókon. A dokumentáció gyorsított számítási elemeket, több eszköz közötti munkamegosztást és spekulatív dekódolást sorol fel. Utóbbinál a rendszer előre javasolt tokeneket ellenőriz, hogy csökkentse a válasz előállításához szükséges soros lépések számát.

A deepseek-recipe a modell körüli adatátalakítást végzi. Rust-könyvtárakat és Python-kötéseket ad a Messages, Chat Completions és Responses formátumú kérések feldolgozásához, a prompt összeállításához és a válasz értelmezéséhez. Az eszközhívás felismerése is ide tartozhat, de a meghívott eszköz végrehajtását az alkalmazásnak kell megoldania. Ez a felosztás például akkor hasznos, ha ugyanahhoz a modellhez eltérő kliensprogramok csatlakoznak.

## Mi marad az üzemeltetőre?

A DeepInfer README-je külön felsorolja a teljes szolgáltatáshoz hiányzó részeket: a KV-cache rendszerét, a feldolgozási szakaszok szétválasztását és a példányok közötti terheléselosztást. A recipe használójának pedig a modellfuttatást és a HTTP-kiszolgálást is biztosítania kell. A DeepInfer Apache 2.0, a recipe MIT licenc alatt érhető el.

Ebből az következik, hogy két külön döntést érdemes meghozni: megfelel-e a futtatómotor a rendelkezésre álló hardvernek, és mennyi integrációs munkát vesz át az API-réteg. Egy támogatott kérésformátum önmagában még nem igazolja egy meglévő alkalmazás teljes kompatibilitását. A részleteket a használt eszközhívásokkal, válaszfolyammal és hibakezeléssel együtt kell ellenőrizni. A nyilvános kód ehhez ad konkrét kiindulópontot; a saját szolgáltatás működési határai továbbra is az összeállított rendszertől függenek.

Források: [DeepInfer – dokumentáció és licenc](https://github.com/deepseek-ai/DeepInfer), [deepseek-recipe – dokumentáció és licenc](https://github.com/deepseek-ai/deepseek-recipe). A témára az [AlphaSignal beszámolója](https://alphasignal.ai/news/deepseek-opens-deepinfer-exposing-the-engine-running-v4-1-flash) hívta fel a figyelmet.
