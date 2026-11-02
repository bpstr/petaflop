---
title: "A Scenario ügynökkészlete 3D-s és mozgásos munkafolyamatokkal bővült"
date: 2026-11-02
summary: "A nyílt készlet Claude Code-ból, Codexből és más ügynökökből vezérel kreatív modelleket, a 0.60-as kiadás pedig új 3D-s és videós eljárásokat hozott."
category: kiadasok
tags: ["AI", "ügynökök", "kreatív AI", "MCP", "nyílt forráskód"]
draft: false
hidden: false
---

A Scenario Labs október 26-i **0.60-as kiadása** négy új képességgel bővítette a kreatív AI-munkához készített ügynökkészletét. Bekerült a pusztán szöveges utasításból épülő 3D-s munkafolyamat, a márkaszínekkel készülő ismétlődő mozgás, a videóból kinyert mozgás és a zöld- vagy kék hátteret eltávolító videóvágás.

A MIT-licencű repó már több mint hetven skillt sorol fel. Ezek a Claude Code, a Codex, a Cursor és más kompatibilis ügynökök számára írják le, hogyan válasszanak kép-, videó-, hang- vagy 3D-modellt, hogyan kérdezzék le a paramétereket, és miként várják meg, ellenőrizzék, majd töltsék le az eredményt. A Blenderhez, Mayához, Unrealhöz és Unityhez készült „szakértő” csomagok ezzel szemben a helyi alkalmazást vezérlik.

A nyílt utasításfájl nem teszi ingyenessé a mögöttes generálást. A Scenario MCP-szerveréhez fiók vagy API-kulcs kell, és a modellek futtatása költséges lehet; ezért a készlet külön próbafuttatási árazást is tanít. Az sem mellékes, hogy az egyszerű telepítő alapértelmezésben a változó `main` ágat húzza le. Ellenőrzött vállalati környezetben érdemes egy kiadási címkét és konkrét commitot rögzíteni.

Az AlphaSignal a teljes könyvtárra hívta fel a figyelmet; a friss esemény itt a dokumentált 0.60-as kiadás, nem egy most először megjelent projekt.

**Források:** [AlphaSignal – témafelfedezés](https://alphasignal.ai/news/scenario-labs-opens-mit-agent-skills-library-covering-70-ai-creative-tools), [Scenario Agent Skills](https://github.com/scenario-labs/skills), [0.60-as kiadási jegyzet](https://github.com/scenario-labs/skills/releases/tag/skills-v0.60.0)
