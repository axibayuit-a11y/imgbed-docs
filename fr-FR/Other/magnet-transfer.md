# Transfert par lien magnet

Le transfert par lien magnet télécharge les fichiers depuis un lien magnet, puis les téléverse automatiquement vers le canal de stockage cloud que vous avez choisi.

Cette fonction est utile pour transférer des épisodes d’anime, des vidéos, des fichiers compressés et des fichiers similaires. Collez un lien magnet, et ImgBed crée une tâche de téléchargement en arrière-plan. Une fois le téléchargement terminé, le fichier est téléversé vers ImgBed et le lien final apparaît dans la liste des téléversements.

![Transfert par lien magnet](../../image/other/磁力链接/磁力链接.png)

## Où l’utiliser

L’entrée du transfert par lien magnet se trouve dans la zone de téléversement de la page d’accueil.

Collez le lien magnet dans le champ de saisie, choisissez `Transfer`, puis lancez le téléversement.

![Téléversement d’anime](../../image/other/磁力链接/上传番剧.png)

## Avant la première utilisation

Configurez d’abord le transfert par lien magnet dans le panneau d’administration.

Vous avez généralement besoin de :

1. Un compte GitHub pour exécuter la tâche de téléchargement.
2. Un canal de téléversement cloud, tel que Google Drive ou OneDrive.
3. Le répertoire de téléversement cible.
4. Un délai d’expiration de tâche.

Une fois les paramètres prêts, revenez à la page d’accueil et collez un lien magnet pour lancer le transfert.

## Téléverser un lien magnet

1. Collez le lien magnet dans la zone de téléversement de la page d’accueil.
2. Vérifiez que le mode est défini sur `Transfer`.
3. Cliquez sur téléverser.
4. Attendez qu’ImgBed crée la tâche magnet.
5. Après le démarrage de la tâche, utilisez le panneau flottant `Magnet Tasks` dans le coin inférieur droit pour vérifier la progression.

Le téléchargement et le téléversement peuvent prendre du temps. La vitesse dépend de la ressource magnet, de l’environnement d’exécution GitHub et du canal de stockage cloud sélectionné.

![Téléchargement magnet en cours](../../image/other/磁力链接/磁力链接下载中.png)

## Après l’achèvement

Une fois la tâche terminée, la liste des téléversements affiche le nom du fichier et le lien.

Les vidéos affichent un aperçu vidéo, les images affichent un aperçu d’image, et les autres fichiers affichent une icône de fichier standard.

![Vidéo téléchargée](../../image/other/磁力链接/下载好后的视频.png)

Vous pouvez copier :

| Type de lien | Cas d’utilisation |
| --- | --- |
| Lien original | Accès direct au fichier |
| Markdown | Articles ou notes Markdown |
| HTML | Code de page web |
| BBCode | Forums prenant en charge BBCode |

## Panneau des tâches magnet

Le panneau des tâches magnet situé en bas à droite affiche le nombre de tâches, le nom de la tâche, la progression et l’état final.

États courants :

| État | Signification |
| --- | --- |
| En attente | La tâche est créée et attend son exécution. |
| Téléchargement | La ressource magnet est en cours de téléchargement. |
| Téléversement | Le fichier a été téléchargé et est en cours de téléversement vers le stockage cloud. |
| Terminé | Le téléversement a réussi et le lien peut être copié. |
| Échec | La tâche ne s’est pas terminée correctement. Consultez le message et réessayez. |

## Conseils

- Si un lien magnet contient plusieurs fichiers, ImgBed affiche en priorité le fichier principal terminé.
- Les fichiers volumineux prennent plus de temps. Attendez la fin de la tâche avant de rafraîchir la page.
- Si la ressource magnet n’a aucun pair disponible, elle peut être très lente ou échouer.
- Si le compte cloud n’a plus de quota, si l’autorisation a expiré ou si le répertoire de téléversement est incorrect, la tâche peut échouer.
- L’aperçu vidéo peut prendre quelques secondes après la fin du téléversement.

## Questions fréquentes

### Rien ne démarre après avoir collé un lien magnet

Vérifiez que le transfert par lien magnet est activé dans le panneau d’administration, et qu’un compte GitHub et un canal cloud utilisables ont été sélectionnés.

### Le téléchargement est toujours lent

La vitesse d’un magnet dépend de la ressource elle-même. S’il n’y a aucun pair disponible, le téléchargement peut être très lent, voire impossible.

### Aucun aperçu n’apparaît après le téléversement

Vérifiez d’abord que le lien du fichier s’ouvre. Les fichiers vidéo peuvent nécessiter un court délai de chargement dans le navigateur ; vous pouvez aussi ouvrir directement le lien.

### Que vérifier si une tâche échoue ?

Vérifiez si le lien magnet est valide, si le canal cloud fonctionne et si le répertoire de téléversement est correct. Soumettez ensuite à nouveau la tâche.
