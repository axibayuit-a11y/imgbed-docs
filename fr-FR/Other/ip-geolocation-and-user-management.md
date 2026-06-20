# Géolocalisation IP et gestion des utilisateurs

La géolocalisation IP transforme les adresses IP issues des uploads, connexions et journaux en localisations approximatives.

Une fois configurée, elle rend l’origine des uploads et accès plus lisible dans le panneau. La gestion des utilisateurs permet aussi de bloquer ou réautoriser l’upload pour des IP suspectes.

## Où configurer

```text
Paramètres système -> Autres paramètres -> Géolocalisation IP
```

![Géolocalisation IP](../../image/other/ip定位/ip定位.png)

## Paramètres disponibles

| Paramètre | Description |
| --- | --- |
| Langue de géolocalisation | Définit la langue des localisations affichées |
| MaxMind Account ID | ID de compte pour MaxMind GeoLite Web Service |
| MaxMind License Key | Clé de licence MaxMind |
| Tencent Map Key | Utile pour les adresses en Chine continentale |
| ipapi Key | Clé APILayer ipapi avec prise en charge multilingue |

Ne renseignez que les services nécessaires. Sans clé, ImgBed essaie des sources gratuites intégrées, mais elles peuvent être moins stables ou moins précises.

## Recommandation pour le français

Pour afficher les localisations en français ou en plusieurs langues, configurez MaxMind et ajoutez ipapi si vous voulez de meilleurs résultats multilingues.

## Configurer MaxMind

MaxMind nécessite :

```text
MaxMind Account ID
MaxMind License Key
```

Récupérez l’Account ID dans le tableau de bord MaxMind, créez une License Key, puis collez les deux valeurs dans ImgBed.

![Configuration MaxMind](../../image/other/ip定位/maxmind的key配置.png)

## Configurer ipapi

Copiez l’API Key depuis la console ipapi.

![Configuration ipapi](../../image/other/ip定位/ipapi配置.png)

Collez-la dans `ipapi Key` dans ImgBed, puis enregistrez.

## Gestion des utilisateurs

La gestion des utilisateurs s’ouvre depuis le haut du panneau d’administration.

![Gestion des utilisateurs](../../image/other/用户管理显示.png)

Elle regroupe l’activité par IP.

| Champ | Description |
| --- | --- |
| IP | IP d’origine |
| Localisation | Localisation approximative résolue depuis l’IP |
| Taille totale envoyée | Somme des fichiers envoyés par cette IP |
| Nombre d’uploads | Nombre d’envois |
| Upload autorisé | Désactivez pour bloquer les nouveaux uploads depuis cette IP |

Ouvrez la flèche à gauche pour voir les fichiers envoyés par cette IP : nom, prévisualisation, taille, résultat de modération, état et heure d’envoi.

![Filtres avancés](../../image/other/用户管理高级筛选.png)

## Conseils d’exploitation

- Avant de bloquer une IP, vérifiez les fichiers envoyés.
- Utilisez recherche et tri pour repérer les IP récentes, très actives ou consommatrices.
- La localisation IP reste une estimation. Utilisez-la comme signal d’aide, pas comme preuve absolue.

![Affichage mobile](../../image/other/手机端显示用户管理效果.png)
