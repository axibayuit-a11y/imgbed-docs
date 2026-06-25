# Index distribué fédéré

L’index distribué fédéré permet à plusieurs sites ImgBed de partager leurs listes de fichiers entre eux.

En termes simples :

- Vous pouvez partager des dossiers sélectionnés de votre site avec d’autres personnes.
- Vous pouvez rejoindre un autre nœud et synchroniser sa liste de fichiers partagée dans votre panneau d’administration.
- Les fichiers fédérés servent principalement à parcourir, rechercher et ouvrir des liens. Ils ne sont pas réimportés dans votre propre stockage.

## Où le configurer

Ouvrez :

```text
System Settings -> Other Settings -> Federated Distributed Index
```

![Nœud fédéré local](../../image/other/联盟图/联盟分布式索引本地节点.png)

La page comporte trois onglets :

| Onglet | Objectif |
| --- | --- |
| Nœud local | Activer votre nœud, confirmer le domaine public, sélectionner les dossiers partagés et mettre à jour l’index sortant |
| Nœuds que j’ai rejoints | Gérer les autres nœuds ImgBed que vous avez rejoints |
| Nœuds qui me rejoignent | Gérer les demandes d’autres personnes qui veulent rejoindre votre nœud |

## Configuration initiale

1. Ouvrez `Local Node`.
2. Activez `Enable`.
3. Sélectionnez les dossiers à partager dans `Sync folders`.
4. Cliquez sur `Update Outbound Index`.
5. Si ImgBed détecte un changement de domaine, confirmez que le domaine actuel est correct avant de continuer.

Vous pouvez sélectionner plusieurs dossiers de synchronisation.

Si la liste des dossiers de synchronisation est vide, tous les dossiers sont partagés.

## Nœud local

### Domaine public

Le domaine public est l’URL du site que les autres nœuds utilisent pour accéder à votre nœud.

ImgBed le détecte automatiquement. Vous n’avez pas besoin de le saisir manuellement. Lors de la première mise à jour de l’index, ImgBed vous demande de confirmer si l’URL d’accès actuelle est le domaine de production.

Si vous changez de domaine plus tard, la mise à jour de l’index demandera à nouveau une confirmation.

### Dossiers de synchronisation

Les dossiers de synchronisation déterminent les fichiers partagés avec les nœuds fédérés.

Par exemple, si vous sélectionnez seulement :

```text
/1/
/2/
```

les autres nœuds ne verront que les fichiers de ces deux répertoires.

### Mettre à jour l’index sortant

Cette action met à jour la liste des fichiers que les autres nœuds peuvent synchroniser depuis vous.

Utilisez-la lorsque :

- vous activez la fédération pour la première fois ;
- vous avez envoyé des fichiers que vous voulez partager ;
- vous modifiez les dossiers de synchronisation ;
- vous changez le domaine public et devez le confirmer.

## Nœuds que j’ai rejoints

`Nodes I Joined` est l’endroit où vous vous abonnez à d’autres nœuds.

![Nœuds que j’ai rejoints](../../image/other/联盟图/我加入的节点.png)

### Demander à rejoindre un autre nœud

1. Demandez au propriétaire de l’autre nœud un lien d’invitation.
2. Collez-le dans le champ de saisie.
3. Cliquez sur `Request to Join`.
4. Attendez que l’autre propriétaire l’approuve dans son panneau d’administration.

Après approbation, l’état du nœud devient approuvé.

### Mettre à jour l’index entrant

`Update Inbound Index` synchronise les listes de fichiers depuis les nœuds que vous avez rejoints.

Utilisez cette action lorsque :

- l’autre propriétaire vient d’approuver votre demande ;
- l’autre propriétaire vous indique que le contenu partagé a été mis à jour ;
- vous voulez actualiser toutes les listes de fichiers fédérées des nœuds que vous avez rejoints.

Pour mettre à jour un seul nœud, cliquez sur `Update Index` sur la carte de ce nœud.

![Mettre à jour l’index](../../image/other/联盟图/更新索引.png)

### Se désabonner

Si vous ne voulez plus synchroniser un nœud, cliquez sur `Unsubscribe`.

Après le désabonnement, l’index fédéré de ce nœud est retiré de votre site local.

## Nœuds qui me rejoignent

`Nodes Joining Me` est l’endroit où vous traitez les demandes des autres.

![Nœuds qui me rejoignent](../../image/other/联盟图/加入我的节点.png)

### Générer un lien d’invitation

1. Assurez-vous que le nœud local est activé.
2. Cliquez au moins une fois sur `Update Outbound Index` afin qu’ImgBed confirme le domaine public.
3. Ouvrez `Nodes Joining Me`.
4. Cliquez sur `Reset Invitation Link`.
5. Copiez le lien d’invitation et envoyez-le à l’autre propriétaire.

Si le lien d’invitation est vide, le domaine public n’a généralement pas encore été confirmé. Revenez à `Local Node` et cliquez sur `Update Outbound Index`.

### Traiter les demandes d’adhésion

Lorsqu’une personne envoie une demande, elle apparaît dans la liste `Nodes Joining Me`.

| Action | Signification |
| --- | --- |
| Approuver | Autorise l’autre nœud à synchroniser votre liste de fichiers partagée |
| Refuser | Refuse la demande d’adhésion |
| Supprimer | Supprime un enregistrement terminé |
| Vérifier l’état | Vérifie si l’autre partie conserve toujours cette relation |

Après approbation, l’autre partie doit encore cliquer sur `Update Inbound Index` avant que vos fichiers partagés n’apparaissent chez elle.

![Approuver un nœud invité](../../image/other/联盟图/邀请节点同意.png)

## Messages

Une fois la relation approuvée, cliquez sur `Message` sur la carte du nœud.

Les messages servent uniquement à communiquer au sujet de la relation fédérée. Ils ne modifient pas les fichiers, les étiquettes, les répertoires ni les permissions.

![Messages](../../image/other/联盟图/留言功能.png)

## Afficher les fichiers fédérés

Une fois la synchronisation terminée, revenez à la liste des fichiers dans le panneau d’administration.

En haut de la page, basculez entre les fichiers locaux et les fichiers fédérés. Dans les fichiers fédérés, vous pouvez parcourir le contenu synchronisé.

Les fichiers fédérés servent principalement à afficher, rechercher, prévisualiser et copier des liens. Ce ne sont pas des fichiers locaux ; vous ne pouvez donc pas les déplacer, les supprimer, les réétiqueter ni les sauvegarder depuis votre propre site.

![Fichiers fédérés dans l’administration](../../image/other/联盟图/联盟管理显示效果图.png)

## Questions fréquentes

### Pourquoi me demande-t-on de refaire une demande parce qu’il n’existe aucun enregistrement de relation ?

Cela signifie généralement que l’autre partie vous a supprimé et a retiré l’enregistrement, si bien que la relation ne peut plus être trouvée. Envoyez une nouvelle demande d’adhésion.

![Refaire une demande lorsqu’aucun enregistrement de relation n’existe](../../image/other/联盟图/无关系记录重新申请.png)

### Pourquoi ne vois-je pas les fichiers après avoir rejoint un nœud ?

Vérifiez :

1. L’autre propriétaire a approuvé votre demande.
2. L’autre propriétaire a cliqué sur `Update Outbound Index`.
3. Vous avez cliqué sur `Update Inbound Index`.
4. Les dossiers de synchronisation de l’autre propriétaire incluent les répertoires qu’il veut partager.

### Que faire lorsqu’un changement de domaine est détecté ?

Si vous ouvrez actuellement le panneau d’administration via le domaine de production, confirmez et continuez.

Si vous utilisez une adresse temporaire, annulez, rouvrez le panneau d’administration avec le domaine de production, puis réessayez.

### Que signifie une liste vide de dossiers de synchronisation ?

Une liste vide de dossiers de synchronisation signifie que tous les dossiers sont partagés.

Pour partager seulement certains répertoires, sélectionnez ces dossiers manuellement.

### Différence entre les mises à jour d’index sortant et entrant

| Bouton | Signification simple |
| --- | --- |
| Mettre à jour l’index sortant | Met à jour ce que les autres peuvent synchroniser depuis moi |
| Mettre à jour l’index entrant | Met à jour ce que j’ai synchronisé depuis les autres |
