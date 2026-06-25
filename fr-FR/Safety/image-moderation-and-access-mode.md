# Modération des Images et Mode d’Accès

La modération des images attribue une classification d’âge aux images téléversées. Le mode d’accès contrôle les classifications visibles via l’accès public.

Cela affecte la galerie publique, les URL publiques de fichiers et l’API d’image aléatoire. Cela ne limite pas le panneau d’administration. Les administrateurs peuvent toujours voir et gérer tous les fichiers.

## Où Configurer

Ouvrez le panneau d’administration, puis allez à :

```text
System Settings -> Security Settings -> Upload Management -> Image Moderation
```

Les principaux paramètres sont :

- Mode d’accès
- Activer la modération
- Fournisseur de modération

## Rôle du Mode d’Accès

Le mode d’accès détermine quelles classifications d’âge peuvent être affichées publiquement.

Modes actuels :

| Mode d’accès | Classifications visibles publiquement |
| --- | --- |
| Mode adulte | Général, R12, R16, R18 |
| Mode jeune | Général, R12, R16 |
| Mode adolescent | Général, R12 |
| Mode enfant | Général uniquement |

Le mode par défaut est le mode adulte.

Pour les sites privés ou contenant du contenu mature, le mode adulte peut convenir. Pour une galerie publique plus prudente, choisissez le mode jeune, adolescent ou enfant.

## Rôle de l’Activation de la Modération

Lorsque la modération est activée, ImgBed appelle le fournisseur de modération sélectionné pendant le téléversement et enregistre la classification d’âge détectée.

Classifications principales :

| Classification | Signification |
| --- | --- |
| Général | Contenu public sûr |
| R12 | Contenu légèrement sensible |
| R16 | Contenu modérément sensible |
| R18 | Contenu pour adultes |

Le résultat de modération est utilisé pour décider de l’accès public.

Si la modération n’est pas activée, ou si d’anciens fichiers n’ont pas de classification, ces fichiers sont considérés comme non classés. Les fichiers non classés ne sont pas automatiquement retirés de la galerie publique ou de l’API d’image aléatoire simplement parce qu’aucune classification n’existe.

## Choisir un Fournisseur de Modération

Les fournisseurs disponibles incluent :

- moderatecontent.com
- nsfwjs
- Sightengine

Chaque fournisseur a des exigences différentes :

- moderatecontent.com nécessite généralement une API Key.
- nsfwjs nécessite généralement une URL de point de terminaison API.
- Sightengine nécessite un API user et un API secret.

Choisissez selon votre compte, la disponibilité et la qualité de détection. Tant que la modération est activée et correctement configurée, ImgBed tente d’écrire une classification d’image pendant le téléversement.

## Effet sur la Galerie Publique

La galerie publique filtre les fichiers selon le mode d’accès.

Exemples :

- Mode adulte : les images R18 peuvent apparaître.
- Mode jeune : les images R18 sont masquées.
- Mode adolescent : les images R16 et R18 sont masquées.
- Mode enfant : seules les images Général sont affichées.

Cela affecte uniquement l’accès public normal. Le panneau d’administration affiche toujours tous les fichiers.

## Effet sur les URL Publiques de Fichiers

Les URL publiques de fichiers sont les liens directs d’images ouverts par les visiteurs.

Si la classification du fichier est autorisée par le mode d’accès actuel, ImgBed renvoie l’image source.

Si la classification dépasse le niveau autorisé, l’accès public normal ne renvoie pas l’image source. ImgBed renvoie à la place le résultat bloqué configuré ou une image de remplacement.

Exemple :

- Le mode actuel est le mode enfant.
- Une image est classée R18.
- Un visiteur ouvre directement l’URL publique.
- ImgBed ne renvoie pas l’image source R18 à ce visiteur.

![Image de fichier restreinte](../../image/Safety/文件受限图.png)

Les administrateurs qui consultent les fichiers dans le panneau d’administration ne sont pas affectés par cette restriction.

## Effet sur l’API d’Image Aléatoire

L’API d’image aléatoire filtre également son ensemble de candidats selon le mode d’accès.

En mode enfant, les images aléatoires ne sont sélectionnées que parmi les fichiers classés Général.

En mode jeune, les images aléatoires peuvent provenir de fichiers Général, R12 et R16, mais pas de fichiers R18.

Cela empêche l’API d’image aléatoire de contourner les restrictions de la galerie publique.

## Relation avec les Règles de Liste

Le mode d’accès n’est pas la seule règle d’accès public. Il fonctionne avec les règles de liste d’autorisation et de blocage.

En résumé :

- Le contenu sur la liste d’autorisation est d’abord public.
- Le contenu sur la liste de blocage ne peut pas être consulté directement par les visiteurs ordinaires.
- Le contenu qui n’est sur aucune des deux listes est ensuite vérifié selon le mode d’accès.

Si une image est restreinte à la fois par sa classification d’âge et par les règles de liste, les visiteurs ordinaires ne peuvent toujours pas consulter directement le fichier source.

## Paramètres Recommandés

Pour les sites publics :

- Activez la modération.
- Choisissez un mode d’accès adapté au public du site.
- Utilisez le mode enfant ou adolescent pour les visiteurs de tous âges.
- Évitez le mode adulte si vous ne voulez pas afficher publiquement de contenu mature.
- Vérifiez les classifications dans le panneau d’administration et ajustez-les manuellement si nécessaire.

Pour les sites privés ou personnels :

- Le mode adulte convient généralement.
- Activez la modération si elle est utile.
- Vérifiez et ajustez les classifications dans le panneau d’administration si nécessaire.

## FAQ

### Les Fichiers Disparaissent-ils du Panneau d’Administration Après un Changement de Mode d’Accès ?

Non.

Le mode d’accès affecte uniquement l’accès public normal. Il n’affecte pas le panneau d’administration.

### Pourquoi la Galerie Publique Affiche-t-elle Moins d’Images Après le Passage au Mode Enfant ?

Le mode enfant autorise uniquement l’affichage public des fichiers classés Général. Les fichiers R12, R16 et R18 sont filtrés.

### Les URL Publiques Peuvent-elles Encore Ouvrir des Images Adultes ?

Si le mode d’accès actuel n’autorise pas cette classification, les URL publiques normales ne renvoient pas l’image source.

### L’API d’Image Aléatoire Peut-elle Renvoyer des Images Restreintes ?

Non.

L’API d’image aléatoire filtre les candidats selon le mode d’accès actuel.

### Que Deviennent les Anciennes Images Non Classées ?

Les images non classées ne sont pas automatiquement masquées simplement parce qu’elles n’ont pas de résultat de modération. Vous pouvez modifier leur classification plus tard dans le panneau d’administration.

