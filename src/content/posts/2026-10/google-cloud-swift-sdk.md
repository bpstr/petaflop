---
title: "Hivatalos szerveroldali Swift SDK-t adott ki a Google Cloud"
date: 2026-10-02
summary: "A Swift 6.2+-ra épülő új klienskönyvtárak HTTP/2-, gRPC- és Swift NIO-alapokon adják elérhetővé a Google Cloud API-kat szerveroldali Swiftből."
category: kiadasok
tags: ["Google", "kódolás"]
draft: false
hidden: false
---

A Google Cloud október 1-jén kiadta hivatalos szerveroldali Swift klienskönyvtárait. A `google-cloud-swift` Swift 6.2 vagy újabb fordítót igényel, és a Google Cloud API-kat a nyelv natív `async/await` mintáival teszi elérhetővé macOS-en és Linuxon.

A könyvtár Swift NIO-ra, HTTP/2-re és gRPC-re épül, a Swift 6 szigorú konkurencia-ellenőrzését pedig már fordításkor kihasználja az adatversenyek kiszűrésére. A Google szerint több mint száz szolgáltatáshoz készülnek generált kliensek, köztük Cloud Storage, IAM és Secret Manager API-khoz. A csomagok szerverekhez, konténerekhez, CLI-eszközökhöz és CI-folyamatokhoz készültek.

A Google külön figyelmeztet arra, hogy az SDK-t ne építsék közvetlenül iOS-, iPadOS- vagy visionOS-kliensalkalmazásba, mert adminisztratív hitelesítő adatok kerülhetnek a binárisba. Kliensoldali alkalmazásokhoz inkább Firebase-et vagy saját szerveres köztes réteget javasol.

*Forrás: [Google Cloud – Server Side Cloud Swift SDK](https://cloud.google.com/blog/topics/developers-practitioners/introducing-the-server-side-cloud-swift-sdk).*
