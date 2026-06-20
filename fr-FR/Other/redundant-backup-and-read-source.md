# Sauvegarde redondante et source de lecture

La sauvegarde redondante crée une copie supplémentaire de fichiers déjà envoyés.

Pour les visiteurs, le fichier principal et sa copie se comportent de la même manière. La différence concerne uniquement le canal de stockage depuis lequel le fichier est lu.

## Ce que cela permet

| Fonction | Description |
| --- | --- |
| Conserver une copie supplémentaire | Copie le fichier vers un autre canal pour réduire la dépendance à un seul stockage |
| Changer la source de lecture | Alterne entre le canal principal et le canal de sauvegarde |
| Sauvegarder un fichier | Crée une copie depuis la fiche d’un fichier |
| Sauvegarder par lot | Sélectionne plusieurs fichiers dans le panneau et les copie ensemble |
| Compléter les sauvegardes | Ajoute des sauvegardes par dossier depuis Autres paramètres |

## Où configurer

```text
Paramètres système -> Autres paramètres -> Sauvegarde redondante
```

![Sauvegarde redondante](../../image/other/冗余备份截图.png)

Vous pouvez compléter les sauvegardes pour un dossier précis ou pour tous les fichiers. Le canal de sauvegarde peut être choisi manuellement ou laissé en mode automatique.

## Sauvegarder depuis le détail d’un fichier

Dans le panneau, ouvrez le détail d’un fichier et lancez la sauvegarde.

![Sauvegarde depuis le détail](../../image/other/文件详情里文件备份.png)

C’est pratique pour protéger ponctuellement un fichier important. Une fois la sauvegarde réussie, le détail du fichier affiche les sources de lecture disponibles.

## Sauvegarde par sélection

Dans le panneau, sélectionnez plusieurs fichiers et lancez une sauvegarde par lot.

![Sauvegarde par lot](../../image/other/批量备份截图.png)

La sauvegarde depuis le détail, la sauvegarde par sélection et la sauvegarde redondante depuis Autres paramètres utilisent la même logique ; seul le point d’entrée change.

## Changer la source de lecture

| Source | Description |
| --- | --- |
| Canal principal | Lit depuis le canal utilisé lors du premier upload |
| Canal de sauvegarde | Lit depuis le canal où la copie a été enregistrée |

![Changer la source](../../image/other/备份成功切换读取源.png)

Après changement, les images, vidéos et liens de téléchargement continuent à fonctionner normalement avec la source choisie.

## Cas ignorés

| Cas | Raison |
| --- | --- |
| Sauvegarde déjà existante | Évite de dupliquer inutilement l’espace |
| Canal principal identique au canal de sauvegarde | Copier dans le même canal n’apporte pas de redondance |
| Aucun canal disponible | Aucun autre canal adapté n’a été trouvé |

## Lors de la suppression

Lorsque vous supprimez un fichier, ImgBed supprime à la fois le fichier principal et sa copie de sauvegarde.
