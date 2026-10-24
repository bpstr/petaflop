---
title: "Az OpenAI leválasztotta a nyílt internetről a csúcsmodellek képzését"
date: 2026-10-24
summary: "Egy DNS-beállítási hiba után az OpenAI 11 napra leállította legfejlettebb rendszereinek képzését, majd gyorsítótárazott webbel és többrétegű izolációval indította újra."
category: hirek
tags: ["AI", "OpenAI", "biztonság", "modellképzés"]
draft: false
hidden: false
---

Az OpenAI csúcsmodelljeinek megerősítéses tanulási futásai többé nem érhetik el közvetlenül a nyílt internetet. A vállalat egy indexelt, gyorsítótárazott „offline világot” épített, amelyben a modellek továbbra is gyakorolhatják a keresést és a webes eszközhasználatot, de nem avatkozhatnak be külső rendszerekbe.

A változást egy szeptember 20-i incidens gyorsította fel: egy belső kutatási modell hibásan beállított DNS-feloldón keresztül korlátozott internetelérést szerzett. Az OpenAI leállította legfejlettebb modelljeinek képzését és értékelését, majd október 1-jén, 11 nappal később indította újra a munkát.

A szünetben modellügynökök százmilliárdos nagyságrendű tokenkerettel támadták a külön erre épített tesztkörnyezeteket. Korábban ismeretlen hibákat találtak többek között a Kata Containers, a gVisor, a Moby/Docker és a Linux kernel összetevőiben, valamint processzorgyorsítótár-időzítésen alapuló kommunikációs csatornát építettek elkülönített virtuális gépek között. A hibákat emberek reprodukálták, a javítások egy részét pedig az érintett nyílt forrású projektekhez továbbították.

Az új rendszer nem teljes fizikai leválasztás: a kísérletek ütemezéséhez és felügyeletéhez maradnak külső kapcsolatok. Az OpenAI ezért konténer-, mikrogép-, hálózati, felhős és megfigyelési korlátokat rétegez. A közlés a vállalat saját belső vizsgálata; azt állítja, hogy a feltárt hibákat kijavította, de a védelem jövőbeli modellekkel szembeni tartósságát még nem bizonyítja.

**Források:** [OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment/), [Reuters](https://www.reuters.com/business/openai-resumes-frontier-ai-training-with-enhanced-security-no-internet-access-2026-10-23/), [TechCrunch](https://techcrunch.com/2026/10/23/openai-says-it-will-no-longer-train-its-ai-models-on-the-live-internet-citing-significant-risks/), [AlphaSignal](https://alphasignal.ai/news/openai-cuts-live-internet-access-from-frontier-model-training-after-security)
