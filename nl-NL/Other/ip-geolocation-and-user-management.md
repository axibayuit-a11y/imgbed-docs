# IP-geolocatie en gebruikersbeheer

IP-geolocatie zet IP-adressen in uploadrecords, inlogapparaten en vergelijkbare logboeken om naar geschatte locaties.

Na configuratie kan het beheer duidelijker tonen waar uploads en toegang vandaan komen. Gebruikersbeheer laat je ook uploadtoegang voor verdachte IP-adressen blokkeren of herstellen.

## Waar je dit configureert

Open:

```text
System Settings -> Other Settings -> IP Geolocation
```

![IP-geolocatie](../../image/other/ip定位/ip定位.png)

## Beschikbare instellingen

De nieuwere werkwijze voor IP-geolocatie ondersteunt meerdere bronnen, in plaats van afhankelijk te zijn van één kaartdienst.

| Instelling | Doel |
| --- | --- |
| IP-geolocatietaal | Kiest de weergavetaal, zoals Engels, Vereenvoudigd Chinees, Japans, Frans en andere talen. |
| MaxMind Account ID | MaxMind-account-ID voor MaxMind GeoLite Web Service. |
| MaxMind License Key | MaxMind License Key. |
| Tencent Map Key | Sleutel voor Tencent Location Service. Handig voor Chinese adressen en IP's op het Chinese vasteland. |
| ipapi Key | APILayer ipapi-sleutel. Ondersteunt meertalige IP-geolocatie. |

Vul alleen de diensten in die je nodig hebt. Je hoeft niet elk veld te configureren.

Als je geen sleutel invult, probeert ImgBed nog steeds ingebouwde gratis bronnen, maar stabiliteit, taalondersteuning en nauwkeurigheid kunnen lager zijn dan bij een eigen geconfigureerde dienst.

## Aanbevolen keuzes

Als je vooral Chinese adressen nodig hebt:

1. Zet de IP-geolocatietaal op Vereenvoudigd Chinees.
2. Configureer Tencent Map Key.
3. Voeg eventueel MaxMind of ipapi toe als fallback.

Als je vooral Engels of meertalige adressen nodig hebt:

1. Kies de gewenste taal.
2. Configureer MaxMind Account ID en License Key.
3. Voeg een ipapi Key toe als je betere meertalige resultaten wilt.

## MaxMind instellen

MaxMind heeft nodig:

```text
MaxMind Account ID
MaxMind License Key
```

Zoek de account-ID in het MaxMind-dashboard en genereer een License Key op de pagina License Keys.

![MaxMind key-configuratie](../../image/other/ip定位/maxmind的key配置.png)

Plak na het genereren Account ID en License Key in ImgBed en sla op.

Het gratis plan van MaxMind is geschikt voor dagelijks gebruik, maar heeft aanvraaglimieten. Als het quotum is overschreden, blijft ImgBed andere beschikbare bronnen proberen.

## ipapi instellen

ipapi gebruikt een APILayer API Key.

Open de ipapi-console en kopieer de API Key die daar wordt getoond.

![ipapi-configuratie](../../image/other/ip定位/ipapi配置.png)

Plak deze in het veld `ipapi Key` in ImgBed en sla op.

ipapi ondersteunt meertalige IP-geolocatie en is handig wanneer je adressen in een gekozen taal wilt tonen. Ook het gratis plan heeft aanvraaglimieten. Als het quotum opraakt, blijft ImgBed andere beschikbare bronnen proberen.

## Tencent Map Key instellen

Tencent Map Key is nuttig voor Chinese adressen, vooral IP's op het Chinese vasteland.

Schakel bij het maken van een sleutel in Tencent Location Service in:

```text
WebServiceAPI
```

Plak na het aanmaken de sleutel in `Tencent Map Key` en sla op.

Als je alleen basis-IP-geolocatie voor Chinese adressen nodig hebt, is Tencent Map Key genoeg om te beginnen.

## Wat je controleert in Gebruikersbeheer

Gebruikersbeheer is bereikbaar bovenaan het beheerpaneel.

![Gebruikersbeheer](../../image/other/用户管理显示.png)

Gebruikersbeheer toont uploadactiviteit per IP:

| Veld | Beschrijving |
| --- | --- |
| IP-bron | Bron-IP van de uploader. |
| Adres | Geschatte locatie die uit het IP is afgeleid. |
| Totale uploadgrootte | Totale bestandsgrootte geüpload door dit IP. |
| Aantal uploads | Aantal uploads vanaf dit IP. |
| Upload toegestaan | Aan betekent uploads toegestaan. Uit betekent uploads geblokkeerd. |

Klik op de pijl links om de lijst met door dat IP geüploade bestanden uit te klappen.

De bestandslijst toont bestandsnaam, voorbeeldweergave, bestandsgrootte, moderatieresultaat, bestandsstatus en uploadtijd. Lijken uploads verdacht, klap dan eerst het IP uit, bekijk de bestanden en beslis daarna of verdere uploads moeten worden geblokkeerd.

Is een IP verdacht, zet `Upload allowed` uit. Toekomstige uploads vanaf dat IP worden geblokkeerd.

## Zoeken, sorteren en geavanceerde filters

Bovenaan Gebruikersbeheer kun je zoeken op IP-bron of adres.

Sorteer op tijd, aantal uploads of totale uploadgrootte om recente uploaders, veeluploaders of IP's met veel gebruik te vinden.

Open geavanceerde filters voor dieper onderzoek.

![Geavanceerde filters](../../image/other/用户管理高级筛选.png)

Geavanceerde filters ondersteunen:

| Filter | Gebruik |
| --- | --- |
| Tijdsbereik | Toon IP's die in een gekozen periode bestanden hebben geüpload. |
| Toegangsstatus | Filter op normaal, geblokkeerd en vergelijkbare statussen. |
| Toestaan-/blokkeerlijst | Filter op toestaanlijst, blokkeerlijst of niet ingesteld. |
| Bestandstype | Toon IP's die afbeeldingen, video's, audio, documenten, code of andere bestanden hebben geüpload. |
| Bestandsgrootte | Filter op geüploade bestandsgrootte. |
| Leeftijdsrating | Filter op niet ingesteld, General, R12+, R16+, R18 en vergelijkbare ratings. |
| Bestandsstatus | Filter op huidige bestandsstatus om afwijkende bestanden te onderzoeken. |

Klik op `Apply Filters` om toe te passen. Gebruik `Reset` om terug te gaan naar alle gegevens.

## Mobiele weergave

Op mobiel schakelt Gebruikersbeheer over naar kaartweergave.

![Mobiel gebruikersbeheer](../../image/other/手机端显示用户管理效果.png)

Elke kaart toont IP, adres, totale uploadgrootte, aantal uploads en de schakelaar voor upload toegestaan. Je kunt gebruikers beheren zonder horizontaal door een tabel te scrollen.

## Als de locatie niet klopt

IP-geolocatie is bij benadering. Het is geen precies straatadres.

Als een gebruiker via een proxy, datacenter, cloudserver of grensoverschrijdend netwerk werkt, kan de getoonde locatie verschillen van de werkelijke locatie.

Gebruik deze functie om de herkomst globaal te begrijpen, afwijkende uploads te vinden en blokkeerbeslissingen te ondersteunen. Behandel het niet als nauwkeurige tracering.

## Veelvoorkomende situaties

| Situatie | Betekenis |
| --- | --- |
| Adres is leeg | De locatie van het IP is mogelijk nog niet opgehaald, of de huidige bron is tijdelijk niet beschikbaar. |
| Adrestaal is verkeerd | Controleer de IP-geolocatietaal en of een bron is ingesteld die die taal ondersteunt. |
| Adres toont een datacenter | Veel proxy's, cloudservers en crawlers verschijnen als datacenter- of ISP-adressen. |
| Aantal uploads is hoog | Bekijk dit IP zorgvuldig en blokkeer uploads indien nodig. |
| Totale uploadgrootte is groot | Sorteer of filter, klap het IP uit en inspecteer specifieke bestanden. |
| Herstellen na blokkeren | Zet `Upload allowed` weer aan. |

## Snelle workflow

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
