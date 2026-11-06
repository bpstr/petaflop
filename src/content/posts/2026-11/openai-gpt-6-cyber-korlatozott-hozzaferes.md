---
title: "A GPT-6 Cyber már működő exploitokat épít – szigorúan korlátozott hozzáféréssel"
date: 2026-11-06
summary: "Az OpenAI új kiberbiztonsági modellje sebezhetőségeket keres, reprodukál és javításokat ellenőriz, de kezdetben csak jóváhagyott Daybreak Red-kutatók használhatják."
category: kiadasok
tags: ["AI", "OpenAI", "kiberbiztonság", "modellek"]
draft: false
hidden: false
---

Az OpenAI november 5-én bemutatta a **GPT-6 Cybert**, amelyet működő sebezhetőségek felderítésére, ellenőrzött környezetben történő reprodukálására és a javítások vizsgálatára hangolt. Nem általánosan elérhető modellről van szó: kezdetben csak a Daybreak Red program kevés, előzetesen jóváhagyott ügyfele használhatja az API-ban és a Codexben.

A vállalat saját ExploitGym mérésében a modell 48,5 százalékot ért el, szemben a GPT-5.6 Cyber 32,1 százalékával. Egy másik tesztben telepítési biztonsági prompt nélkül az esetek 99,93 százalékában nem támadta meg a feladaton kívüli, szándékosan sebezhető szolgáltatásokat. Ezek gyártói mérések, nem független auditok.

Az OpenAI szerint a modell 1724 Linux kernelhibát reprodukált, közülük 948-hoz működő exploitot készített. A Firefoxban 81 addig ismeretlen, magas súlyosságú hibát talált; a Mozilla több javítást már kiadott. A képesség ezért egyszerre hasznos és kockázatos: a cég a legmagasabb, „Critical” kiberbiztonsági kategóriába sorolta, az elérést pedig IP-engedélyezési listához, megfigyeléshez és emberi felügyelethez köti.

A biztonsági csapatok számára a gyakorlati újdonság nem pusztán a hibakeresés, hanem a teljes lánc: reprodukálható bizonyíték, exploit és javításellenőrzés egy munkafolyamatban. A szélesebb hozzáférésnek még nincs pontos dátuma.

**Források:** [OpenAI – GPT-6 Cyber](https://openai.com/index/introducing-gpt-6-cyber/), [OpenAI API changelog](https://developers.openai.com/api/docs/changelog), [TechCrunch](https://techcrunch.com/2026/11/05/openai-released-a-new-cybersecurity-model-is-that-enough/)
