# API d’image aléatoire et galerie publique

Ces deux fonctions se configurent ici :

```text
Paramètres système -> Autres paramètres
```

## API d’image aléatoire

L’API d’image aléatoire choisit au hasard un fichier dans les dossiers configurés. Elle peut servir à afficher un fond de site, faire tourner des avatars ou appeler des images aléatoires depuis une page externe.

Une fois activée, utilisez :

```text
https://votre-domaine/random
```

## Paramètres de l’API

| Option | Description |
| --- | --- |
| Activer | Active ou désactive `/random`; désactivée, la route refuse l’accès |
| Dossiers | Limite les dossiers dans lesquels les fichiers peuvent être choisis |
| Exemple d’appel | Génère un lien d’API prêt à copier |

Vous pouvez sélectionner plusieurs dossiers. Si vous autorisez seulement `/landscape/` et `/portrait/`, l’API ne choisira que des fichiers dans ces dossiers ou leurs sous-dossiers.

## Paramètres principaux

| Paramètre | Exemple | Description |
| --- | --- | --- |
| `dir` | `/landscape/` | Dossier cible |
| `content` | `image` | Type de média : `image`, `video`, `audio`, ou une combinaison |
| `orientation` | `auto` | `portrait`, `landscape` ou `auto` |
| `type` | `url` | Vide redirige ; `url` renvoie du texte ; `json` renvoie du JSON |
| `origin` | `1` | Avec `type=url`, renvoie un lien complet |
| `age` | `all-ages,r12` | Filtre par classification d’âge |
| `tag` | `wallpaper,sky` | Ne garde que les fichiers avec ces tags |
| `ex` | `private` | Exclut les fichiers avec ces tags |

## Formats de réponse

Sans `type`, l’API redirige directement vers le fichier aléatoire.

`type=url` renvoie un lien en texte brut.

`type=json` renvoie les informations du fichier : lien, ID, nom, type, tags, classification et autres données.

## Restrictions d’accès

L’API respecte les règles publiques définies dans le panneau.

| Règle | Effet |
| --- | --- |
| Limite de dossiers | Ne choisit que dans les dossiers autorisés |
| Liste noire | Les fichiers bloqués ne sont pas candidats |
| Mode liste blanche | Renvoie uniquement les fichiers explicitement autorisés |
| Classification d’âge | Filtre R12, R16, R18 selon le mode d’accès |

Si aucun fichier ne correspond, l’API indique qu’il n’y a pas de résultat.

## Galerie publique

La galerie publique fournit une page en lecture seule permettant aux visiteurs de parcourir les dossiers que vous rendez publics.

```text
https://votre-domaine/browse/nom-du-dossier
```

## Paramètres de la galerie

| Option | Description |
| --- | --- |
| Activer | Active ou désactive la galerie publique |
| Mode de chargement | Utilise le fichier original ou une miniature |
| Dossiers publics | Définit les dossiers accessibles aux visiteurs |

Exemple :

```text
/1/,/2/,/landscape/,/portrait/
```

Avec cette configuration, les visiteurs peuvent ouvrir :

```text
https://votre-domaine/browse/1
https://votre-domaine/browse/2
https://votre-domaine/browse/landscape
https://votre-domaine/browse/portrait
```

Les dossiers non publiés sont refusés.

## Fonctions de la galerie

| Fonction | Description |
| --- | --- |
| Parcourir les dossiers | Voir les fichiers et sous-dossiers publiés |
| Rechercher | Chercher par nom, ID de fichier ou tag |
| Filtrer par type | Image, vidéo, audio ou autres fichiers |
| Filtrer par tag | Inclure ou exclure des tags |
| Filtrer par orientation | Paysage, portrait ou autres critères |
| Copier un lien | Copier le lien public du fichier |
| Prévisualiser | Voir images, vidéos et audio dans la page |
