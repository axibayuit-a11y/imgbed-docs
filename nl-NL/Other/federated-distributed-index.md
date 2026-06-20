# Gefedereerde gedistribueerde index

De gefedereerde gedistribueerde index laat meerdere ImgBed-sites bestandslijsten met elkaar delen.

Kort gezegd:

- Je kunt geselecteerde mappen van je site met anderen delen.
- Je kunt deelnemen aan een ander knooppunt en de gedeelde bestandslijst van dat knooppunt naar je beheer synchroniseren.
- Gefedereerde bestanden zijn vooral bedoeld om te bekijken, te zoeken en links te openen. Ze worden niet opnieuw naar je eigen opslag geüpload.

## Waar je dit configureert

Open:

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Lokaal federatieknooppunt](../../image/other/联盟图/联盟分布式索引本地节点.png)

De pagina heeft drie tabbladen:

| Tabblad | Doel |
| --- | --- |
| Local Node | Je knooppunt inschakelen, publiek domein bevestigen, gedeelde mappen kiezen en uitgaande index bijwerken |
| Nodes I Joined | Andere ImgBed-knooppunten beheren waaraan je deelneemt |
| Nodes Joining Me | Verzoeken beheren van anderen die aan jouw knooppunt willen deelnemen |

## Eerste installatie

1. Open `Local Node`.
2. Schakel `Enable` in.
3. Selecteer mappen om te delen onder `Sync folders`.
4. Klik op `Update Outbound Index`.
5. Als ImgBed een domeinwijziging detecteert, bevestig dan dat het huidige domein klopt voordat je doorgaat.

Je kunt meerdere synchronisatiemappen selecteren.

Als de lijst met synchronisatiemappen leeg is, worden alle mappen gedeeld.

## Local Node

### Publiek domein

Het publieke domein is de site-URL die andere knooppunten gebruiken om jouw knooppunt te bereiken.

ImgBed detecteert dit automatisch. Je hoeft het niet handmatig in te voeren. De eerste keer dat je de index bijwerkt, vraagt ImgBed of de huidige toegangs-URL het productiedomein is.

Als je later van domein verandert, vraagt een indexupdate opnieuw om bevestiging.

### Sync Folders

Sync folders bepalen welke bestanden worden gedeeld met federatieknooppunten.

Als je bijvoorbeeld alleen selecteert:

```text
/1/
/2/
```

kunnen andere knooppunten alleen bestanden in die twee directories zien.

### Update Outbound Index

Dit werkt de bestandslijst bij die anderen vanaf jouw site kunnen synchroniseren.

Gebruik dit wanneer:

- je federatie voor het eerst inschakelt.
- je bestanden uploadt die je wilt delen.
- je synchronisatiemappen wijzigt.
- je publieke domein verandert en je dit moet bevestigen.

## Nodes I Joined

`Nodes I Joined` is waar je je abonneert op andere knooppunten.

![Knooppunten waaraan ik deelneem](../../image/other/联盟图/我加入的节点.png)

### Toetreden tot een ander knooppunt aanvragen

1. Vraag de andere eigenaar om een uitnodigingslink.
2. Plak deze in het invoerveld.
3. Klik op `Request to Join`.
4. Wacht tot de andere eigenaar het verzoek goedkeurt in zijn beheer.

Na goedkeuring wordt de knooppuntstatus approved.

### Update Inbound Index

`Update Inbound Index` synchroniseert bestandslijsten vanaf knooppunten waaraan je deelneemt.

Gebruik dit wanneer:

- de andere eigenaar je verzoek net heeft goedgekeurd.
- de andere eigenaar meldt dat gedeelde inhoud is bijgewerkt.
- je alle verbonden federatieve bestandslijsten wilt verversen.

Om slechts één knooppunt bij te werken, klik je op `Update Index` op de kaart van dat knooppunt.

![Index bijwerken](../../image/other/联盟图/更新索引.png)

### Afmelden

Wil je een knooppunt niet meer synchroniseren, klik dan op `Unsubscribe`.

Na afmelden wordt de federatieve index van dat knooppunt van je lokale site verwijderd.

## Nodes Joining Me

`Nodes Joining Me` is waar je verzoeken van anderen afhandelt.

![Knooppunten die bij mij willen aansluiten](../../image/other/联盟图/加入我的节点.png)

### Een uitnodigingslink maken

1. Controleer dat het lokale knooppunt is ingeschakeld.
2. Klik minstens één keer op `Update Outbound Index`, zodat ImgBed het publieke domein bevestigt.
3. Open `Nodes Joining Me`.
4. Klik op `Reset Invitation Link`.
5. Kopieer de uitnodigingslink en stuur deze naar de andere eigenaar.

Als de uitnodigingslink leeg is, is het publieke domein meestal nog niet bevestigd. Ga terug naar `Local Node` en klik op `Update Outbound Index`.

### Deelnameverzoeken behandelen

Wanneer iemand een verzoek indient, verschijnt dit in de lijst `Nodes Joining Me`.

| Actie | Betekenis |
| --- | --- |
| Approve | Staat toe dat het andere knooppunt jouw gedeelde bestandslijst synchroniseert |
| Reject | Weigert het deelnameverzoek |
| Delete | Verwijdert een afgerond record |
| Check Status | Controleert of de andere kant deze relatie nog behoudt |

Na goedkeuring moet de andere kant nog `Update Inbound Index` klikken voordat jouw gedeelde bestanden daar verschijnen.

![Uitgenodigd knooppunt goedkeuren](../../image/other/联盟图/邀请节点同意.png)

## Berichten

Nadat een relatie is goedgekeurd, klik je op `Message` op de knooppuntkaart.

Berichten zijn alleen bedoeld voor communicatie over de federatierelatie. Ze wijzigen geen bestanden, tags, directories of rechten.

![Berichten](../../image/other/联盟图/留言功能.png)

## Gefedereerde bestanden bekijken

Ga na synchronisatie terug naar de bestandslijst in het beheer.

Bovenaan de pagina kun je wisselen tussen lokale bestanden en gefedereerde bestanden. Bij gefedereerde bestanden kun je gesynchroniseerde inhoud bekijken.

Gefedereerde bestanden zijn vooral bedoeld om te bekijken, zoeken, previewen en links te kopiëren. Het zijn geen lokale bestanden, dus je kunt ze niet verplaatsen, verwijderen, opnieuw taggen of back-uppen vanaf je eigen site.

![Gefedereerde bestanden in beheer](../../image/other/联盟图/联盟管理显示效果图.png)

## FAQ

### Waarom moet ik opnieuw aanvragen omdat er geen relatierecord is?

Dit betekent meestal dat de andere kant je heeft verwijderd en het record heeft weggehaald, waardoor de relatie niet meer gevonden wordt. Dien een nieuw verzoek in.

![Opnieuw aanvragen zonder relatierecord](../../image/other/联盟图/无关系记录重新申请.png)

### Waarom zie ik geen bestanden na deelname?

Controleer:

1. De andere eigenaar heeft je verzoek goedgekeurd.
2. De andere eigenaar heeft `Update Outbound Index` geklikt.
3. Jij hebt `Update Inbound Index` geklikt.
4. De synchronisatiemappen van de andere eigenaar bevatten de directories die gedeeld moeten worden.

### Wat moet ik doen bij een gedetecteerde domeinwijziging?

Open je het beheer momenteel via het productiedomein, bevestig dan en ga door.

Gebruik je een tijdelijk adres, annuleer dan, open het beheer opnieuw via het productiedomein en probeer het opnieuw.

### Wat betekent een lege Sync Folder-lijst?

Een lege Sync Folder-lijst betekent dat alle mappen worden gedeeld.

Wil je alleen sommige directories delen, selecteer die mappen dan handmatig.

### Verschil tussen outbound en inbound indexupdates

| Knop | Simpele betekenis |
| --- | --- |
| Update Outbound Index | Werkt bij wat anderen van mij kunnen synchroniseren |
| Update Inbound Index | Werkt bij wat ik van anderen heb gesynchroniseerd |
