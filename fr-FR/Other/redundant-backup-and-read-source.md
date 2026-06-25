# Sauvegarde redondante et bascule de source de lecture

La sauvegarde redondante stocke une copie supplémentaire d’un fichier déjà téléversé.

Le fichier principal et le fichier de sauvegarde peuvent tous deux servir de sources de lecture. Les visiteurs ne voient normalement aucune différence. La seule différence est le canal de stockage qui fournit le fichier.

## Ce que la sauvegarde redondante peut faire

| Fonctionnalité | Description |
| --- | --- |
| Stocker une copie supplémentaire | Sauvegarde les fichiers vers un autre canal de téléversement afin de réduire le risque de défaillance d’un seul canal. |
| Basculer la source de lecture | Une fois la sauvegarde réussie, bascule la lecture des fichiers entre le canal principal et le canal de sauvegarde. |
| Sauvegarde d’un fichier unique | Sauvegarde un fichier depuis sa page de détails. |
| Sauvegarde par lot | Sélectionne plusieurs fichiers dans la page d’administration et les sauvegarde ensemble. |
| Sauvegarde redondante globale | Sauvegarde les fichiers par dossier depuis Autres paramètres. |

## Entrée de la sauvegarde redondante

Ouvrez :

```text
System Settings -> Other Settings -> Redundant Backup
```

![Sauvegarde redondante](../../image/other/冗余备份截图.png)

Cette entrée est la plus adaptée pour ajouter des sauvegardes à un dossier ou à tous les fichiers en lot.

Le canal de sauvegarde peut être sélectionné manuellement. Vous pouvez aussi choisir la bascule automatique et laisser ImgBed trouver un canal de sauvegarde approprié.

## Sauvegarde depuis les détails du fichier

Ouvrez la page de détails d’un fichier dans le panneau d’administration, puis cliquez sur sauvegarder.

![Sauvegarde dans les détails du fichier](../../image/other/文件详情里文件备份.png)

Cette option est la plus adaptée pour sauvegarder à la demande un fichier important.

Une fois la sauvegarde réussie, la page de détails du fichier affiche les sources de lecture disponibles.

## Sauvegarde par lot depuis une sélection

Dans le panneau d’administration, sélectionnez plusieurs fichiers et lancez la sauvegarde par lot.

![Sauvegarde par lot](../../image/other/批量备份截图.png)

Cette option est la plus adaptée pour traiter un groupe de fichiers.

La sauvegarde depuis une sélection, la sauvegarde depuis les détails du fichier et la sauvegarde redondante dans Autres paramètres utilisent toutes le même système de sauvegarde. Ce sont simplement des points d’entrée différents.

## Basculer la source de lecture après la sauvegarde

Une fois la sauvegarde terminée, la page de détails du fichier permet de basculer la source de lecture :

| Source de lecture | Description |
| --- | --- |
| Canal principal | Lit depuis le canal de téléversement d’origine. |
| Canal de sauvegarde | Lit depuis le canal de sauvegarde. |

![Basculer la source de lecture après la sauvegarde](../../image/other/备份成功切换读取源.png)

Les visiteurs n’ont pas besoin de savoir si le fichier est fourni par le canal principal ou par le canal de sauvegarde.

La source de lecture que vous choisissez devient la source préférée pour les accès ultérieurs au fichier.

## Cas où la sauvegarde est ignorée

Les cas suivants sont ignorés pendant la sauvegarde. Ce ne sont pas des erreurs.

| Cas | Pourquoi il est ignoré |
| --- | --- |
| Déjà sauvegardé | Un fichier qui possède déjà une sauvegarde n’est pas sauvegardé à nouveau. |
| Les canaux principal et de sauvegarde sont identiques | Une sauvegarde doit être stockée dans un autre canal pour avoir un intérêt. |
| Aucun canal de sauvegarde utilisable | Aucun autre canal approprié n’est disponible. |

En résumé : les sauvegardes doivent être stockées dans un autre canal, et les fichiers déjà sauvegardés ne consomment pas à nouveau d’espace supplémentaire.

## Canal principal et canal de sauvegarde

| Nom | Signification |
| --- | --- |
| Canal principal | Canal utilisé lors du premier téléversement du fichier. |
| Canal de sauvegarde | Canal qui stocke la copie redondante. |
| Source de lecture principale | Le fichier est actuellement lu depuis le canal principal. |
| Source de lecture de sauvegarde | Le fichier est actuellement lu depuis le canal de sauvegarde. |

Les sources de lecture principale et de sauvegarde ont le même comportement côté utilisateur.

Tant que le fichier de sauvegarde est disponible, les images, vidéos et liens de téléchargement continuent de fonctionner après la bascule vers la source de lecture de sauvegarde.

## Ce qui se passe lorsqu’un fichier est supprimé

Lorsqu’un fichier est supprimé, ImgBed supprime à la fois le fichier principal et le fichier de sauvegarde.
