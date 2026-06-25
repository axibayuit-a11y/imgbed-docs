# Images aléatoires et galerie publique

Ces deux fonctionnalités se configurent sous :

```text
System Settings -> Other Settings
```

## API d’image aléatoire

L’API d’image aléatoire renvoie un fichier aléatoire depuis les répertoires sélectionnés. Elle est utile pour les arrière-plans de site, la rotation d’avatars ou les appels d’images aléatoires depuis des pages externes.

Une fois activée, utilisez :

```text
https://your-domain.com/random
```

## Réglages de l’API d’image aléatoire

| Option | Rôle |
| --- | --- |
| Activer | Active ou désactive le point de terminaison `/random`. Lorsqu’il est désactivé, l’accès est interdit. |
| Répertoires | Limite les répertoires que l’API d’image aléatoire peut utiliser. Les répertoires non inclus ici ne peuvent pas être utilisés par l’API. |
| Démonstration d’appel | Génère des liens d’API d’image aléatoire que vous pouvez copier directement. |

Vous pouvez sélectionner plusieurs répertoires. Par exemple, si seuls `/landscape/` et `/portrait/` sont autorisés, l’API d’image aléatoire ne peut sélectionner des fichiers que dans ces répertoires et leurs sous-répertoires.

## Paramètres de l’API d’image aléatoire

| Paramètre | Exemple | Rôle |
| --- | --- | --- |
| `dir` | `/landscape/` | Spécifie le répertoire aléatoire. |
| `content` | `image` | Spécifie le type de média. Utilisez `image`, `video`, `audio` ou des combinaisons séparées par des virgules. |
| `orientation` | `auto` | Filtre l’orientation de l’image. Utilisez `portrait`, `landscape` ou `auto`. |
| `type` | `url` | Format de retour. Vide signifie redirection, `url` renvoie une URL en texte brut, `json` renvoie du JSON. |
| `origin` | `1` | Utilisé avec `type=url` pour renvoyer une URL complète. |
| `age` | `all-ages,r12` | Filtre par classification d’âge. |
| `tag` | `wallpaper,sky` | Renvoie uniquement les fichiers contenant ces étiquettes. |
| `ex` | `private` | Exclut les fichiers contenant ces étiquettes. |

## Formats de retour

Sans `type`, l’API redirige directement vers l’URL du fichier aléatoire.

Avec `type=url`, elle renvoie une URL sous forme de texte.

Avec `type=json`, elle renvoie les informations du fichier, notamment l’URL du fichier, l’ID du fichier, le nom du fichier, le type de fichier, les étiquettes, la classification et les métadonnées associées.

## Règles d’accès

L’API d’image aléatoire suit les règles d’accès public :

| Règle | Effet |
| --- | --- |
| Restriction de répertoire | Seuls les fichiers dans les répertoires autorisés peuvent être sélectionnés. |
| Liste de blocage | Les fichiers présents dans la liste de blocage sont exclus de l’ensemble de sélection aléatoire. |
| Mode liste d’autorisation | Lorsqu’il est activé, seuls les fichiers autorisés pour l’accès public sont renvoyés. |
| Classification d’âge | Les contenus R12, R16, R18 et similaires sont filtrés selon le mode d’accès actuel. |

Si aucun fichier ne correspond après filtrage, l’API ne renvoie aucun résultat correspondant.

## Cache

L’API d’image aléatoire met en cache les ensembles candidats par répertoire afin d’améliorer la vitesse.

Après une modification des fichiers, ImgBed met à jour la version du cache du répertoire, et les requêtes suivantes reconstruisent l’ensemble de candidats. Les répertoires vides sont mis en cache brièvement pour éviter les requêtes répétées.

## Galerie publique

La galerie publique fournit une page de navigation publique en lecture seule pour les répertoires que vous autorisez les visiteurs à consulter.

Une fois activée, les visiteurs peuvent ouvrir :

```text
https://your-domain.com/browse/directory-name
```

## Paramètres de la galerie publique

| Option | Rôle |
| --- | --- |
| Activer | Active ou désactive la galerie publique. Lorsqu’elle est désactivée, les visiteurs ne peuvent pas la parcourir. |
| Mode de chargement des images | Contrôle si les aperçus utilisent les images originales ou les miniatures. |
| Répertoires ouverts | Définit les répertoires auxquels les visiteurs peuvent accéder. |

## Mode de chargement des images

| Mode | Rôle |
| --- | --- |
| Original | La page des visiteurs charge directement les fichiers originaux. |
| Miniature | La page des visiteurs privilégie les miniatures pour un chargement plus rapide. |

## Répertoires ouverts

Les répertoires ouverts déterminent ce que les visiteurs peuvent voir.

Par exemple :

```text
/1/,/2/,/landscape/,/portrait/
```

Les visiteurs peuvent alors accéder à :

```text
https://your-domain.com/browse/1
https://your-domain.com/browse/2
https://your-domain.com/browse/landscape
https://your-domain.com/browse/portrait
```

Les sous-répertoires peuvent aussi être ouverts, par exemple `/2026/lucky/`. Les visiteurs sont bloqués lorsqu’ils tentent d’accéder à des répertoires qui ne sont pas ouverts.

## Fonctionnalités de la galerie publique

| Fonctionnalité | Description |
| --- | --- |
| Parcourir les répertoires | Afficher les fichiers et sous-répertoires dans les répertoires ouverts. |
| Recherche | Rechercher par nom de fichier, ID de fichier ou étiquettes. |
| Filtre de type | Filtrer les images, vidéos, fichiers audio ou autres fichiers. |
| Filtre d’étiquettes | Inclure ou exclure les étiquettes sélectionnées. |
| Filtre d’orientation | Filtrer les images paysage ou portrait. |
| Filtre temporel | Filtrer par plage temporelle de téléversement. |
| Filtre d’extension | Filtrer par extension de fichier. |
| Copier le lien | Copier les liens d’accès aux fichiers. |
| Aperçu multimédia | Afficher ou lire les images, vidéos et fichiers audio sur la page des visiteurs. |

## Règles d’accès de la galerie publique

La galerie publique suit également les règles d’accès public :

| Règle | Effet |
| --- | --- |
| Répertoires ouverts | Seuls les répertoires autorisés sont affichés. |
| Mode d’accès | Le contenu est filtré selon le mode d’accès actuel lié à la classification d’âge. |
| Mode liste d’autorisation | Lorsqu’il est activé, seuls les fichiers autorisés pour l’accès public sont affichés. |
| Liste de blocage | Les fichiers présents dans la liste de blocage sont masqués. |
