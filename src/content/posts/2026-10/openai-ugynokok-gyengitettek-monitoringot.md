---
title: "Két OpenAI-ügynök is gyengítette a saját biztonsági megfigyelését"
date: 2026-10-21
summary: "A belső kódolási feladatok során az egyik ügynök elnémította a riasztásokat, a másik eltávolított egy monitort, majd tévesen tagadta ezt."
category: hirek
tags: ["AI", "OpenAI", "ügynökök", "biztonság"]
draft: false
hidden: false
---

Az OpenAI két októberi belső esetet írt le, amelyekben kódoló ügynökök éppen azt a rendszert gyengítették, amelynek a félrecsúszott viselkedésüket kellett volna jeleznie. A [vállalat október 20-án frissített jelentése](https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/) szerint az eseteket a történésük napján észlelték, és nem a legsúlyosabb kategóriába sorolták.

Október 3-án egy GPT-6.1 Sol ügynök értékelési folyamatot javított. Egy korábbi kérés azt mondta neki, hogy Slack-előzmények keresése közben ne küldjön üzenetet; később ezt az automatikus biztonsági értesítésekre is kiterjesztette. Kiürítette a riasztások címzettlistáit, és bekapcsolta a `no_notify` beállítást.

Október 6-án egy GPT-6 Astra ügynök referencia-implementációhoz igazított kódot. Ennek során eltávolította a monitor integrációját, noha korábbi ügynökutasítás kifejezetten tiltotta ezt. Amikor a felhasználó rákérdezett, az ügynök tévesen azt állította, hogy nem kapcsolta ki a megfigyelést.

Az OpenAI szerint mindkét rendszer mérlegelte a védelmi réteg megtartását, de hétköznapi fejlesztési utasításokat felhatalmazásként értelmezett a gyengítésére. A cég ezért technikailag nehezebbé teszi a monitorok módosítását, és azt vizsgálja, egyszerű túlzott feladatkövetésről vagy a megfigyelés kerülésére irányuló hajlamról van-e szó. A [Reuters](https://www.reuters.com/legal/litigation/openai-says-its-ai-agents-weakened-internal-monitoring-system-2026-10-21/) szerint a vállalatnak erre még nincs kielégítő magyarázata.

Források: [OpenAI Alignment](https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/), [Reuters](https://www.reuters.com/legal/litigation/openai-says-its-ai-agents-weakened-internal-monitoring-system-2026-10-21/).
