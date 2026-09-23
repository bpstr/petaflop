---
title: "Az AWS végigkövethetővé teszi, mit csinált egy AI-ügynök"
date: 2026-09-23
summary: "A CloudWatch Omni az AI-ügynökök teljes futását követi, értékeléseket és összehasonlítható kísérleteket ad, miközben az IDE-bővítmény AWS-fiók nélkül is elindítható."
category: kiadasok
tags: ["AI", "ügynökök"]
draft: false
hidden: false
---

Az AWS szeptember 22-én általánosan elérhetővé tette a CloudWatch Omnit, amely az alkalmazások mellett az AI-ügynökök működését is egy helyen követi. A rendszer trace-ekből mutatja meg a modellhívások, eszközhasználat és egyéb lépések láncolatát, majd beépített értékelőkkel segít összehasonlítani a promptokat és konfigurációkat.

A fejlesztők helyben is használhatják az Omni IDE-bővítményét, a felhős kapcsolat pedig opcionális: az AWS szerint az induláshoz nem kell AWS-fiók, az IDE-bővítmény ingyenes. AWS-hitelesítő adatok Bedrock-modellekhez, más szolgáltatóknál pedig azok saját API-kulcsai szükségesek.

Az Omni nem csak AWS-es ügynökökre készült: a dokumentált támogatás többek között LangChainre, LangGraphra, CrewAI-ra, OpenAI SDK-ra és Vercel AI SDK-ra is kiterjed, Python és TypeScript mellett. Ezek gyártói dokumentáció alapján közölt képességek; a Petaflop ebben a rövid hírben nem végzett saját teljesítménytesztet.

---
*Forrás: [AWS News Blog – Introducing Amazon CloudWatch Omni: AI-powered observability for generative AI and agentic workloads](https://aws.amazon.com/blogs/aws/introducing-amazon-cloudwatch-omni-ai-powered-observability-for-generative-ai-and-agentic-workloads/).*
