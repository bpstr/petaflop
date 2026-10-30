---
title: "API-ból szabályozható, mely Slack-csatornákon válaszoljon a Claude"
date: 2026-10-30
summary: "A Claude Tag béta adminisztrációs API-ja vállalati jóváhagyási és auditfolyamatokba köti a Slack-csatornák beállításait, szűk olvasási és írási jogosultságokkal."
category: kiadasok
tags: ["AI", "Anthropic", "Claude", "API"]
draft: false
hidden: false
---

Az Anthropic október 23-án béta adminisztrációs API-t nyitott a Claude Taghez, vagyis ahhoz a vállalati funkcióhoz, amellyel Claude egy Slack-csatornában megjelölve válaszol. Az új végpontokkal jóváhagyási munkafolyamatból lehet bekapcsolni a szolgáltatást egy csatornában, verziókövethetővé válhat a konfiguráció, és lekérdezhető, melyik szabály honnan öröklődött.

Az API 14 végpontot ad négy erőforráshoz: Slack-csatornákhoz, munkaterületekhez, hozzáférési csomagokhoz és azok célpontjaihoz. Kezelhető az engedélyezés, az egyedi utasítás, a modell, a környezet és a vendégek hozzáférési szabálya. A hozzáférési csomagok létrehozása és szerkesztése, a Slack-kapcsolat felépítése, a költési limitek és a többi beállítás továbbra is a Claude webes felületén marad.

A béta csak Claude Enterprise-szervezeteknek szól, amelyeknél a Claude Tag és legalább egy Slack-munkaterület már be van állítva. Az elsődleges tulajdonos szervezeti Admin API-kulcsot készít, külön `read:claude_tag` és `write:claude_tag` jogosultsággal. A kulcs a szervezethez tartozik, ezért a létrehozó távozása után is működik. A hívásokhoz az `experimental-claude-tag-2026-10-21` bétafejléc kell; a hivatalos SDK-k hét nyelven, az `ant` CLI pedig külön béta parancsokkal támogatja a végpontokat.

Fontos határ, hogy ez a Claude vállalati Slack-termékének API-ja. Claude Platform- vagy Console-munkaterületet, illetve általános modellhasználatot nem kezel.

*Források: [Anthropic – Claude Tag API](https://platform.claude.com/docs/en/manage-claude/claude-tag-api); [Claude Platform kiadási napló](https://platform.claude.com/docs/en/release-notes/overview).*
