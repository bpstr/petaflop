---
title: "40 TOPS a tenyeredben: generatív AI a Raspberry Pi-n"
date: 2026-10-17
summary: "A Raspberry Pi AI HAT+ 2 saját 8 GB memóriával futtat kis nyelvi modelleket, de a 40 TOPS nem jelent minden feladatnál gyorsabb válaszokat."
category: elemzesek
tags: ["AI", "Raspberry Pi", "hardver", "modellek"]
draft: false
hidden: false
---

Egy kamerakép rövid szöveges leírásához vagy egy hangutasítás értelmezéséhez nem feltétlenül kell felhős AI. A Raspberry Pi AI HAT+ 2 ilyen helyi feladatokra kínál külön gyorsítót: a Raspberry Pi 5-höz csatlakozó bővítőkártya kis nyelvi modelleket is futtat, miközben a számítógép processzora más munkát végezhet. A hardvert [2026. január 15-én mutatták be](https://www.raspberrypi.com/news/introducing-the-raspberry-pi-ai-hat-plus-2-generative-ai-on-raspberry-pi-5/); most azt nézzük meg, mire használható, és hol ér véget a specifikáció ígérete.

## A saját memória fontosabb, mint a nagyobb szám

A kártya központja a Hailo-10H neurális gyorsító. Névleges következtetési teljesítménye 40 TOPS, vagyis másodpercenként 40 billió művelet, INT4 számábrázolás mellett. Ez 4 bites egész számokkal végzett műveletekre vonatkozó adat, nem a kész válaszok sebessége. A [hivatalos termékoldal](https://www.raspberrypi.com/products/ai-hat-plus-2/) a generatív AI mellett a Raspberry Pi kamerás szoftvereivel való integrációt emeli ki.

| Tulajdonság | Raspberry Pi AI HAT+ 2 |
| --- | --- |
| AI-gyorsító | Hailo-10H |
| Névleges teljesítmény | 40 TOPS, INT4 |
| Saját memória | 8 GB LPDDR4X |
| Gazdagép és csatlakozás | Raspberry Pi 5, PCIe |
| Támogatott feladatkörök | Képfeldolgozás, nyelvi és kép–nyelvi modellek |

A korábbi AI HAT+ 13 és 26 TOPS-os változatainak adata INT8-ra vonatkozott. A 40-et ezért nem érdemes egyszerűen elosztani a 26-tal, és általános gyorsulásként értelmezni. A Raspberry Pi az új kártya hagyományos képfeldolgozási teljesítményét a 26 TOPS-os elődéhez hasonlítja, nem minden feladatra érvényes ugrást ígér.

Az érdemi különbség a generatív modellek támogatása és a saját memória. Ez a 8 GB nem a Raspberry Pi rendszer-RAM-ját bővíti: a gyorsító használja. A [jelenlegi dokumentáció](https://www.raspberrypi.com/documentation/accessories/ai-hat-plus.html) nagyjából 6 milliárd paraméteres nyelvi és kép–nyelvi modellekig jelzi a lehetőséget. A kép–nyelvi modell, röviden VLM, képi bemenetből is képes szöveges választ készíteni. A megadott méret nem általános kompatibilitási garancia; támogatott modell és megfelelő szoftverkörnyezet is kell hozzá.

## Gyorsabb első válaszjel nem feltétlenül gyorsabb szöveg

A Hailo által írt, a Raspberry Pi oldalán [február 25-én közölt magyarázat](https://www.raspberrypi.com/news/when-and-why-you-might-need-the-raspberry-pi-ai-hat-plus-2/) szerint a kártya főleg a bemenet feldolgozásában és a rövid válaszokat adó munkafolyamatokban lehet hasznos.

A cikk az első tokenig tartó várakozást egy 96 tokenes bemenettel szemlélteti. A 4 bites Qwen2.5 1.5B modellnél a Raspberry Pi 5 CPU-jára 2039 milliszekundumot, a Hailo-10H-ra 320 milliszekundumot közöl; a CPU-s futtatáshoz llama.cpp-t használtak. Ez ebben a gyártói példában több mint hatszoros különbség, de nem jelenti azt, hogy egy teljes válasz is hatszor hamarabb elkészül. A tokenek a modell által feldolgozott szövegegységek, nem feltétlenül egész szavak.

Az ellenpélda is fontos. [Jeff Geerling január 15-i saját tesztjében](https://www.jeffgeerling.com/blog/2026/raspberry-pi-ai-hat-2/) a vizsgált nyelvi modellek a Raspberry Pi 5 CPU-ján gyorsabban futottak, mint a gyorsítón. Ez induláskori mérés, nem az októberi szoftverállapot értékelése. A két beszámoló nem ugyanazt a teljesítménymutatót hangsúlyozza: a gyorsan megérkező első token és a folyamatos szöveggenerálás sebessége külön kérdés.

## Mire jó a helyi AI?

A Raspberry Pi bemutatójában egy VLM kameraképet ír le, egy másik példa szöveget fordít. Ezek olyan alkalmazásokat szemléltetnek, amelyekben rövid bemenethez vagy konkrét jelenethez kell használható választ adni, nem hosszú, általános beszélgetést folytatni.

A Hailo felhasználási javaslatai között helyi hangvezérlés, eseménynaplózás, valamint szenzoradatok és naplók összefoglalása szerepel. Egy hangvezérlő például előbb szöveggé alakíthatja a beszédet, majd egy kis nyelvi modellel azonosíthatja a kért műveletet. Ezek alkalmazásépítési lehetőségek, nem a dobozból kivett kártya kész szolgáltatásai.

A helyi következtetéshez nem szükséges a bemenetet felhős modellnek elküldeni. Ebből azonban nem következik, hogy egy ráépített alkalmazás semmilyen adatot nem továbbít: ezt a teljes rendszer hálózati működése és beállításai döntik el. Az offline futtatás lehetősége és egy kész okosotthon-rendszer adatvédelme nem ugyanaz.

## A 200 dollár még nem a teljes gép ára

A januári bejelentésben 130 dollár szerepelt, a [hivatalos termékoldal 2026. október 17-i ellenőrzésekor](https://www.raspberrypi.com/products/ai-hat-plus-2/) viszont 200 dolláros árat tüntetett fel. Ez a bővítőkártya ára, nem egy kész számítógépé és nem ellenőrzött magyar bolti ajánlat.

Új rendszer építésekor a Raspberry Pi 5-tel, tápegységgel, háttértárral és a feladathoz szükséges perifériákkal is számolni kell. A [szerelési útmutató](https://www.raspberrypi.com/documentation/accessories/ai-hat-plus.html) a Pihez Active Coolert, a kártyához pedig a mellékelt hűtőborda felszerelését ajánlja. Attól, hogy nincs felhős API-díj, a helyi rendszernek még van beszerzési és üzemeltetési költsége.

A kártyát ezért konkrét feladathoz érdemes mérlegelni. Elérhető hozzá a szükséges modell? Elég jó a válasza, például magyar hangutasításoknál? Az első reakció számít, vagy hosszú szöveget kell előállítani? Fontos, hogy közben szabad maradjon a Pi processzora? Ezekre egy TOPS-adat nem válaszol.

Az AI HAT+ 2 érdekes alap egy kameraképet értelmező vagy rövid helyi utasításokat feldolgozó eszközhöz. Általános chatbot építésénél viszont előbb a kiválasztott modell tényleges futását érdemes ellenőrizni, és csak utána eldönteni, indokolt-e a külön gyorsító.

*A cikk gyártói dokumentációra, gyártói példákra és egy megjelölt független tesztre épül; saját hardvermérést nem végeztünk.*

**Források:** [Raspberry Pi – termékoldal](https://www.raspberrypi.com/products/ai-hat-plus-2/); [Raspberry Pi – január 15-i bejelentés](https://www.raspberrypi.com/news/introducing-the-raspberry-pi-ai-hat-plus-2-generative-ai-on-raspberry-pi-5/); [Raspberry Pi – AI HAT dokumentáció](https://www.raspberrypi.com/documentation/accessories/ai-hat-plus.html); [Hailo – felhasználási példák és benchmark a Raspberry Pi oldalán](https://www.raspberrypi.com/news/when-and-why-you-might-need-the-raspberry-pi-ai-hat-plus-2/); [Jeff Geerling – induláskori hardverteszt](https://www.jeffgeerling.com/blog/2026/raspberry-pi-ai-hat-2/).
