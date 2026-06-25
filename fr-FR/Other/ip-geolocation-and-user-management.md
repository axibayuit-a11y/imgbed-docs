# Géolocalisation IP et gestion des utilisateurs

La géolocalisation IP transforme les adresses IP présentes dans les enregistrements de téléversement, les appareils de connexion et les journaux similaires en emplacements approximatifs.

Une fois configurée, elle permet au panneau d’administration d’afficher plus clairement l’origine des téléversements et des accès. La gestion des utilisateurs permet aussi de bloquer ou de rétablir l’accès au téléversement pour les adresses IP suspectes.

## Où la configurer

Ouvrez :

```text
System Settings -> Other Settings -> IP Geolocation
```

![Géolocalisation IP](../../image/other/ip定位/ip定位.png)

## Paramètres disponibles

Le nouveau fonctionnement de la géolocalisation IP prend en charge plusieurs sources, au lieu de dépendre d’un seul service cartographique.

| Paramètre | Rôle |
| --- | --- |
| Langue de géolocalisation IP | Choisit la langue d’affichage, par exemple l’anglais, le chinois simplifié, le japonais, le français et d’autres langues. |
| MaxMind Account ID | ID de compte MaxMind pour MaxMind GeoLite Web Service. |
| MaxMind License Key | License Key MaxMind. |
| Tencent Map Key | Clé Tencent Location Service. Utile pour les adresses en chinois et les IP de Chine continentale. |
| ipapi Key | Clé APILayer ipapi. Prend en charge la géolocalisation IP multilingue. |

Renseignez uniquement les services dont vous avez besoin. Il n’est pas nécessaire de configurer tous les champs.

Si aucune clé n’est fournie, ImgBed essaie tout de même des sources gratuites intégrées, mais leur stabilité, leur prise en charge linguistique et leur précision peuvent être inférieures à celles d’un service que vous configurez vous-même.

## Choix recommandés

Si vous avez principalement besoin d’adresses en chinois :

1. Définissez la langue de géolocalisation IP sur le chinois simplifié.
2. Configurez Tencent Map Key.
3. Ajoutez éventuellement MaxMind ou ipapi comme sources de secours.

Si vous avez principalement besoin d’adresses en anglais ou multilingues :

1. Choisissez la langue dont vous avez besoin.
2. Configurez MaxMind Account ID et License Key.
3. Ajoutez une ipapi Key si vous avez besoin de meilleurs résultats multilingues.

## Configuration de MaxMind

MaxMind nécessite :

```text
MaxMind Account ID
MaxMind License Key
```

Vous trouverez l’ID de compte dans le tableau de bord MaxMind, puis vous pourrez générer une License Key depuis la page License Keys.

![Configuration de la clé MaxMind](../../image/other/ip定位/maxmind的key配置.png)

Après génération, collez l’Account ID et la License Key dans ImgBed, puis enregistrez.

Le forfait gratuit de MaxMind convient à un usage quotidien, mais il impose des limites de requêtes. Si le quota est dépassé, ImgBed continue d’essayer les autres sources disponibles.

## Configuration d’ipapi

ipapi utilise une API Key APILayer.

Ouvrez la console ipapi et copiez l’API Key qui y est affichée.

![Configuration d’ipapi](../../image/other/ip定位/ipapi配置.png)

Collez-la dans le champ `ipapi Key` d’ImgBed, puis enregistrez.

ipapi prend en charge la géolocalisation IP multilingue. Il est utile lorsque vous souhaitez afficher les adresses dans une langue sélectionnée. Son forfait gratuit impose également des limites de requêtes. Si le quota est épuisé, ImgBed continue d’essayer les autres sources disponibles.

## Configuration de Tencent Map Key

Tencent Map Key est utile pour les adresses en chinois, en particulier pour les IP de Chine continentale.

Lors de la création d’une clé dans Tencent Location Service, activez :

```text
WebServiceAPI
```

Après la création, collez la clé dans `Tencent Map Key`, puis enregistrez.

Si vous avez seulement besoin d’une géolocalisation IP de base en chinois, Tencent Map Key suffit pour commencer.

## Points à vérifier dans la gestion des utilisateurs

La gestion des utilisateurs est accessible depuis le haut du panneau d’administration.

![Gestion des utilisateurs](../../image/other/用户管理显示.png)

La gestion des utilisateurs affiche l’activité de téléversement par IP :

| Champ | Description |
| --- | --- |
| Source IP | Adresse IP source de l’utilisateur qui téléverse. |
| Adresse | Emplacement approximatif résolu à partir de l’IP. |
| Taille totale téléversée | Taille totale des fichiers téléversés par cette IP. |
| Nombre de téléversements | Nombre de téléversements effectués depuis cette IP. |
| Téléversement autorisé | Activé signifie que les téléversements sont autorisés. Désactivé signifie que les téléversements sont bloqués. |

Cliquez sur la flèche à gauche pour développer la liste des fichiers téléversés par cette IP.

La liste des fichiers affiche le nom du fichier, l’aperçu, la taille du fichier, le résultat de modération, l’état du fichier et l’heure de téléversement. Si des téléversements semblent suspects, développez d’abord l’IP, examinez les fichiers, puis décidez s’il faut bloquer les téléversements suivants.

Si une IP est suspecte, désactivez `Upload allowed`. Les futurs téléversements depuis cette IP seront bloqués.

## Recherche, tri et filtres avancés

En haut de la gestion des utilisateurs, recherchez par source IP ou par adresse.

Triez par heure, nombre de téléversements ou taille totale téléversée pour repérer les utilisateurs ayant récemment téléversé, les utilisateurs qui téléversent très fréquemment ou les IP à forte utilisation.

Pour une analyse plus approfondie, ouvrez les filtres avancés.

![Filtres avancés](../../image/other/用户管理高级筛选.png)

Les filtres avancés prennent en charge :

| Filtre | Utilisation |
| --- | --- |
| Plage temporelle | Affiche les IP qui ont téléversé des fichiers pendant une période sélectionnée. |
| État d’accès | Filtre par états normal, bloqué et similaires. |
| Liste d’autorisation/de blocage | Filtre par liste d’autorisation, liste de blocage ou non défini. |
| Type de fichier | Affiche les IP qui ont téléversé des images, vidéos, fichiers audio, documents, fichiers de code ou autres fichiers. |
| Taille de fichier | Filtre par plage de taille des fichiers téléversés. |
| Classification d’âge | Filtre par non défini, General, R12+, R16+, R18 et classifications similaires. |
| État du fichier | Filtre par état actuel du fichier pour enquêter sur les fichiers anormaux. |

Cliquez sur `Apply Filters` pour appliquer les filtres. Utilisez `Reset` pour revenir à l’ensemble des données.

## Affichage mobile

Sur mobile, la gestion des utilisateurs passe à une disposition en cartes.

![Gestion des utilisateurs sur mobile](../../image/other/手机端显示用户管理效果.png)

Chaque carte affiche l’IP, l’adresse, la taille totale téléversée, le nombre de téléversements et le commutateur d’autorisation de téléversement. Vous pouvez gérer les utilisateurs sans faire défiler horizontalement un tableau.

## Si l’emplacement semble incorrect

La géolocalisation IP est approximative. Elle ne fournit pas une adresse postale précise.

Si l’utilisateur passe par un proxy, un centre de données, un serveur cloud ou un réseau transfrontalier, l’emplacement affiché peut différer de l’emplacement réel.

Utilisez cette fonctionnalité pour comprendre l’origine approximative, repérer des téléversements anormaux et aider à prendre des décisions de blocage. Ne la considérez pas comme un suivi précis.

## Cas courants

| Cas | Signification |
| --- | --- |
| L’adresse est vide | L’IP n’a peut-être pas encore été résolue, ou la source actuelle est temporairement indisponible. |
| La langue de l’adresse est incorrecte | Vérifiez la langue de géolocalisation IP et assurez-vous qu’une source prenant en charge cette langue est configurée. |
| L’adresse indique un centre de données | De nombreux proxies, serveurs cloud et robots apparaissent comme des adresses de centre de données ou de FAI. |
| Le nombre de téléversements est élevé | Examinez cette IP avec attention et bloquez les téléversements si nécessaire. |
| La taille totale téléversée est élevée | Triez ou filtrez, développez l’IP et inspectez les fichiers concernés. |
| Rétablissement nécessaire après blocage | Réactivez `Upload allowed`. |

## Flux rapide

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
