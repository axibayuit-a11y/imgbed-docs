# Authenticatie en beheer van aanmeldapparaten

`Authenticatiebeheer` en `Beheer van aanmeldapparaten` beschermen het ImgBed-beheer, de openbare uploadpagina en WebDAV-toegang.

Gebruik deze pagina om toegangsgegevens in te stellen, ingelogde apparaten te bekijken en oude sessies in te trekken wanneer dat nodig is.

## Waar je dit configureert

Open het beheer en ga naar:

```text
System Settings -> Security Settings
```

De pagina bevat twee hoofdonderdelen:

- Authenticatiebeheer
- Beheer van aanmeldapparaten

![Authenticatiebeheer](../../image/Safety/认证管理界面.png)

## Wat authenticatiebeheer doet

Authenticatiebeheer bewaart toegangsgegevens.

Er zijn twee typen:

- Authenticatie aan gebruikerszijde
- Authenticatie aan beheerderszijde

## Authenticatie aan gebruikerszijde

Authenticatie aan gebruikerszijde is het uploadwachtwoord.

Nadat je een uploadwachtwoord hebt ingesteld, moeten gewone bezoekers dit invullen voordat ze de uploadpagina kunnen gebruiken. Dit is handig wanneer je de openbare uploadpagina niet voor iedereen open wilt zetten.

![Gebruikersloginpagina](../../image/Safety/用户端登录界面.png)

### Uploadwachtwoord instellen

Wanneer een uploadwachtwoord is ingesteld:

- Bezoekers moeten het wachtwoord invoeren voordat ze de uploadpagina gebruiken.
- Uploaden is pas beschikbaar nadat het wachtwoord is geaccepteerd.
- Als apparaatsessies aan gebruikerszijde zijn ingeschakeld, registreert ImgBed dat apparaat.

Als je het uploadwachtwoord wijzigt, worden oude gebruikerssessies ongeldig. Bezoekers moeten het nieuwe wachtwoord opnieuw invoeren.

## Authenticatie aan beheerderszijde

Beheerdersauthenticatie gebruikt een beheerdersnaam en wachtwoord.

Dit beschermt het beheerpaneel. Voor productiegebruik is het verstandig dit altijd in te stellen.

![Beheerdersloginpagina](../../image/Safety/管理端登录界面.png)

### Beheerdersgegevens instellen

Wanneer een beheerdersnaam en wachtwoord zijn ingesteld:

- Het openen van het beheerpaneel vereist aanmelding.
- Een succesvolle aanmelding maakt een apparaatrecord voor de beheerder aan.
- Je kunt apparaten bekijken, opschonen of offline forceren in Beheer van aanmeldapparaten.

Als je de beheerdersnaam of het wachtwoord wijzigt, worden oude beheerderssessies ongeldig. Je moet opnieuw inloggen.

## Wat Beheer van aanmeldapparaten doet

Beheer van aanmeldapparaten toont apparaten die zijn ingelogd.

Het helpt je controleren:

- welke apparaten het beheerpaneel hebben gebruikt.
- welke apparaten de uploadpagina aan gebruikerszijde hebben gebruikt.
- welke WebDAV-clients verbinding hebben gemaakt.
- of een apparaatsessie nog geldig is.
- of oude apparaten offline moeten worden geforceerd.

De pagina heeft drie tabbladen:

- Admin
- User
- WebDAV

## Globale cookiebeveiliging

Bovenaan Beheer van aanmeldapparaten kun je het globale cookiegedrag instellen.

### Levensduur gebruikerscookie

Bepaalt hoeveel dagen een login aan gebruikerszijde actief blijft.

Bijvoorbeeld: stel je dit in op 14 dagen, dan hoeven bezoekers meestal 14 dagen lang het uploadwachtwoord niet opnieuw in te voeren.

### Levensduur beheerderscookie

Bepaalt hoeveel dagen een beheerderslogin actief blijft.

Bijvoorbeeld: stel je dit in op 14 dagen, dan hoeven beheerders meestal 14 dagen lang niet opnieuw in te loggen.

### Veilige modus

Wanneer de veilige modus is ingeschakeld, worden aanmeldcookies alleen via HTTPS verzonden.

Schakel dit in voor productiesites met HTTPS. Schakel het niet in voor lokale HTTP-tests, anders kun je gedrag zien als "login gelukt, maar na verversen ben ik weer uitgelogd".

## Beheerdersapparaten

Het tabblad Admin toont apparaten die zijn ingelogd op het beheerpaneel.

Apparaatrecords verschijnen pas nadat beheerdersgegevens zijn ingesteld en het beheerpaneel via login is geopend.

Elke apparaatkaart kan tonen:

- apparaat- en webclientinformatie
- IP van eerste login
- IP van laatste activiteit
- inlogtijd
- tijd van laatste activiteit
- verloopdatum
- huidige status

Zie je een onbekend apparaat, gebruik dan `Offline forceren` om de sessie ongeldig te maken.

## Oude apparaten opschonen

`Oude apparaten opschonen` verwijdert oude aanmeldrecords in het huidige tabblad in één keer.

Gebruik dit wanneer je vermoedt dat oude sessies nog actief zijn op andere apparaten.

## Offline forceren

`Offline forceren` maakt één apparaatsessie ongeldig.

Daarna geldt:

- beheerdersapparaten moeten opnieuw inloggen.
- apparaten aan gebruikerszijde moeten het uploadwachtwoord opnieuw invoeren.
- WebDAV-clients moeten opnieuw authenticeren.

Verlopen of ongeldige apparaten kunnen ook worden verwijderd.

## Huidig apparaat uitloggen

De kaart van het huidige apparaat is gemarkeerd als `Huidig apparaat`.

Na uitloggen van het huidige apparaat:

- wordt de huidige beheerderssessie afgesloten.
- wordt de huidige gebruikerssessie afgesloten.

Je moet opnieuw inloggen voordat je dat deel verder kunt gebruiken.
