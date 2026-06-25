# Limites de Fréquence de Téléversement des Utilisateurs

Les limites de fréquence des utilisateurs contrôlent la fréquence à laquelle les utilisateurs ordinaires ou les visiteurs peuvent téléverser des fichiers depuis la page d’accueil. Cela aide à éviter les abus sur les pages publiques de téléversement.

Cette fonction n’affecte que les téléversements depuis la page d’accueil. Les téléversements administrateur et ceux effectués avec des API Tokens ne sont pas limités par ces règles.

## Où Configurer

Ouvrez le panneau d’administration, puis allez à :

```text
System Settings -> Security Settings -> Upload Management -> User Rate Limits
```

![Paramètres de limites de fréquence utilisateur](../../image/other/用户频控截图.png)

## Activer les Limites de Fréquence

Après l’activation de « Activer les limites de fréquence », ImgBed suit les téléversements récents par adresse IP de l’auteur du téléversement.

Valeurs par défaut :

| Paramètre | Défaut | Description |
| --- | --- | --- |
| Fenêtre de détection | 1,5 heure | Jusqu’où remonter dans les enregistrements de téléversement. |
| Nombre maximal de fichiers | 20 | Nombre maximal de fichiers autorisés dans la fenêtre de détection. |
| Limite de taille par fichier | 20 MB | Taille maximale d’un fichier. |
| Limite de taille totale de téléversement | 200 MB | Taille totale maximale des téléversements dans la fenêtre de détection. |

Par exemple, avec une fenêtre de 1,5 heure, 20 fichiers, 20 MB par fichier et 200 MB au total, les téléversements depuis la même IP sont bloqués dès qu’une limite configurée est dépassée.

## Exclure des Types de Fichiers

« Types de fichiers de téléversement exclus » empêche les utilisateurs ordinaires ou visiteurs de téléverser les catégories de fichiers sélectionnées.

Catégories disponibles :

| Type | Description |
| --- | --- |
| Images | jpg, png, webp, gif et fichiers image similaires |
| Vidéos | mp4, webm, mov et fichiers vidéo similaires |
| Audio | mp3, flac, wav et fichiers audio similaires |
| Documents | pdf, txt, md, docx et fichiers document similaires |
| Autres | Fichiers hors des catégories ci-dessus, comme zip, rar, exe, apk |

Par défaut, aucun type n’est sélectionné, ce qui signifie qu’il est autorisé.

Cliquer sur un type le met en surbrillance, ce qui signifie qu’il est bloqué.

Si « Autres » est sélectionné, les visiteurs qui téléversent des fichiers zip ou rar seront bloqués et informés que ce type de fichier n’est pas pris en charge.

## Messages de Blocage

Lorsqu’une limite est déclenchée, les utilisateurs voient un message correspondant :

![Message de téléversement trop fréquent](../../image/other/频繁报错提示.png)

| Scénario | Signification du message |
| --- | --- |
| Fichier unique trop volumineux | Le fichier est trop volumineux et doit être compressé avant téléversement. |
| Type de fichier bloqué | Ce type de fichier n’est pas pris en charge. Retirez-le et réessayez. |
| Téléversements trop fréquents | Les téléversements récents sont trop fréquents, avec un délai de nouvelle tentative affiché. |
| Taille totale trop élevée | La taille totale récente des téléversements est trop élevée, avec un délai de nouvelle tentative affiché. |

## Quand l’Activer

Activez les limites de fréquence utilisateur si votre page d’accueil de téléversement est accessible publiquement.

Raisons courantes :

- Vous craignez des téléversements massifs par script.
- Vous voulez limiter les gros téléversements de visiteurs.
- Vous voulez que les utilisateurs ordinaires téléversent seulement des images, pas des archives ou installateurs.
- Vous voulez garder le téléversement public disponible tout en contrôlant l’utilisation des ressources.

Si le site est réservé à votre usage personnel, ou si seuls les administrateurs peuvent téléverser, vous pouvez laisser cette fonction désactivée.
