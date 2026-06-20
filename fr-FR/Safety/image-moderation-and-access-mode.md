# Modération d’images et mode d’accès

La modération d’images et le mode d’accès contrôlent les fichiers visibles par les visiteurs selon les règles publiques, les listes et la classification d’âge.

Ils fonctionnent avec la galerie publique, l’API d’image aléatoire et l’accès externe aux fichiers.

## Ce que cela permet

| Fonction | Description |
| --- | --- |
| Modération d’images | Enregistrer des informations de contenu ou de classification |
| Liste noire | Exclure des fichiers qui ne doivent pas être publics |
| Mode liste blanche | Publier uniquement les fichiers explicitement autorisés |
| Contrôle par âge | Ajuster la visibilité de R12, R16, R18 et similaires |
| Mode d’accès | Modifier globalement ce que les visiteurs peuvent voir |

## Mode d’accès

Le mode d’accès limite ce que les pages publiques et l’API aléatoire peuvent renvoyer.

Si vous voulez un site adapté à tous les publics, configurez le mode pour ne renvoyer que des fichiers généraux. Pour un usage interne ou restreint, ajustez des règles plus souples selon le besoin.

## Fichier restreint

Lorsqu’un fichier est restreint, le visiteur voit un message au lieu du contenu original.

![Fichier restreint](../../image/Safety/文件受限图.png)

## Modes d’exploitation

| Approche | Quand l’utiliser |
| --- | --- |
| Liste noire | Publier par défaut et exclure les fichiers problématiques |
| Liste blanche | Publier uniquement ce qui a été vérifié et autorisé |
| Classification d’âge | Adapter la visibilité selon le niveau de contenu |

Pour un site public, la liste blanche ou la classification d’âge aident à éviter les publications indésirables.

## Points à vérifier

1. Vérifiez si le fichier apparaît dans la galerie publique.
2. Assurez-vous que l’API aléatoire ne renvoie pas de fichiers restreints.
3. Après modification des listes, tenez compte du cache ou des résultats déjà générés.
4. Si vous utilisez la classification automatique, vérifiez manuellement les fichiers sensibles, car les modèles peuvent se tromper.
