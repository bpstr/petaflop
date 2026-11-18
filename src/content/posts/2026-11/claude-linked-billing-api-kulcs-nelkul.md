---
title: "API-kulcs nélkül fizethet az ügyfél a külső Claude-appokban"
date: 2026-11-18
summary: "Az Anthropic Linked Billing bétája közvetlenül az ügyfél Claude-szervezetére terheli a használatot, miközben a külső szolgáltató nem kapja meg annak API-kulcsát."
category: kiadasok
tags: ["AI", "Anthropic", "Claude", "API", "fejlesztők"]
draft: false
hidden: false
---

Az Anthropic november 17-én bétában elindította a **Linked Billing** funkciót. A külső alkalmazások ügyfelei a saját Claude Console-szervezetükre terhelhetik a modellhasználatot anélkül, hogy hosszú élettartamú API-kulcsot másolnának a szolgáltató beállításaiba. A jóváhagyás OAuth-alapú kapcsolással történik, az alkalmazás pedig kapcsolat-azonosítót kap, nem az ügyfél titkos kulcsát.

A fejlesztő minden kérésnél eldöntheti, hogy a saját platformja vagy a kapcsolt ügyfél fizet. Az ügyfél alkalmazásonként havi költési korlátot állíthat be, a Console-ban követheti a forgalmat, és bármikor megszüntetheti a kapcsolatot. Az Anthropic nem kér külön szolgáltatási díjat; a használat a meglévő vállalati keretet fogyasztja, vagy a szokásos API-áron számlázódik. A rajt partnerei között van az Asana, a ClickHouse, a Linear, a Railway, a Ramp, a Tines és a Warp.

Ez nem az ügyfél teljes biztonsági környezetének átköltöztetése. A kérések továbbra is a külső platform Anthropic-szervezetében futnak, ezért az ügyfél IP-engedélyezési listája, titkosítási kulcsa és adatmegőrzési szabálya nem érvényesül rájuk. A platform összes kapcsolt ügyfele közös sebességkorlátot, modellhozzáférést és szolgáltatási szintet használ.

A béta csak a `/v1/messages` és `/v1/chat/completions` végpontokat fedi le. A Message Batches, a Managed Agents és az ügyfél által fizetett kódfuttatás még nem támogatott. Felhőszolgáltatón vagy piactéren keresztül számlázott Claude-szervezet, illetve Pro, Max, Ultra, Team vagy Enterprise előfizetés sem kapcsolható; közvetlen Anthropic API-számlázás szükséges. A megoldás tehát megszüntet egy kulcskezelési kockázatot, de az adatkezelési és hozzáférési ellenőrzést továbbra is a választott platformnál kell elvégezni.

**Források:** [Anthropic](https://claude.com/resources/articles/linked-billing-on-claude-platform), [Claude Help Center](https://support.claude.com/en/articles/18467110-offer-linked-billing-in-your-platform), [AlphaSignal – felfedezési forrás](https://alphasignal.ai/news/anthropic-lets-saas-customers-pay-for-claude-without-sharing-api-keys)
