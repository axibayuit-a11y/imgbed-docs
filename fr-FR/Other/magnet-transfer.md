# Utiliser les liens magnet

La fonction de transfert magnet télécharge les fichiers contenus dans un lien magnet, puis les envoie automatiquement vers le canal de stockage choisi.

Elle convient pour transférer des vidéos, des épisodes, des archives compressées ou d’autres fichiers. Il suffit de coller le lien magnet : ImgBed crée une tâche en arrière-plan et affiche le lien final dans la liste des téléversements une fois le traitement terminé.

![Lien magnet](../../image/other/磁力链接/磁力链接.png)

## Où l’utiliser

L’entrée se trouve dans la zone de téléversement de la page d’accueil.

Collez le lien magnet dans le champ, choisissez le mode `Transférer`, puis lancez le téléversement.

![Téléversement magnet](../../image/other/磁力链接/上传番剧.png)

## Avant de commencer

Configurez d’abord le transfert magnet dans le panneau d’administration.

Vous aurez généralement besoin de :

| Élément | Utilité |
| --- | --- |
| Compte GitHub | Exécuter la tâche de téléchargement |
| Canal de téléversement | Destination finale, comme Google Drive ou OneDrive |
| Dossier de destination | Emplacement où enregistrer le fichier transféré |
| Délai limite | Limite pour les tâches longues |

## Transférer un magnet

1. Collez le lien magnet dans le champ de téléversement de la page d’accueil.
2. Vérifiez que le mode est `Transférer`.
3. Cliquez sur téléverser.
4. Attendez que la tâche soit créée.
5. Suivez la progression dans la fenêtre `Tâches magnet`, en bas à droite.

Le téléchargement et l’envoi peuvent prendre du temps. La vitesse dépend de la disponibilité du magnet, de l’environnement d’exécution GitHub et du canal de stockage choisi.

![Téléchargement en cours](../../image/other/磁力链接/磁力链接下载中.png)

## Après la fin de la tâche

Lorsque la tâche est terminée, la liste des téléversements affiche le nom du fichier et ses liens.

Les vidéos ont une prévisualisation vidéo, les images une prévisualisation d’image, et les autres fichiers un simple pictogramme.

![Vidéo transférée](../../image/other/磁力链接/下载好后的视频.png)

Vous pouvez copier ces formats :

| Format | Usage |
| --- | --- |
| Lien original | Ouvrir directement le fichier |
| Markdown | Insérer dans un article ou une documentation Markdown |
| HTML | Insérer dans le code d’une page web |
| BBCode | Utiliser sur un forum compatible BBCode |

## États de tâche

| État | Signification |
| --- | --- |
| En attente | La tâche est créée et attend son exécution |
| Téléchargement | La ressource magnet est en cours de téléchargement |
| Envoi | Le fichier téléchargé est envoyé vers le canal |
| Terminé | L’envoi est terminé et le lien peut être copié |
| Échec | Consultez le message et relancez si nécessaire |

## Conseils

- Si le magnet contient plusieurs fichiers, ImgBed met en avant le fichier principal terminé.
- Les gros fichiers demandent plus de temps ; attendez la fin de la tâche avant de recharger la page.
- Si la ressource n’a pas de sources disponibles, le téléchargement peut être très lent ou échouer.
- Si le compte de stockage manque de quota, de droits ou de dossier correct, l’envoi peut échouer.
- La prévisualisation vidéo peut mettre quelques secondes à se charger.
