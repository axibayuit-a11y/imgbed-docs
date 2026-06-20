# Index distribué fédéré

L’index distribué fédéré permet à plusieurs sites ImgBed de partager leurs listes de fichiers.

En pratique :

- Vous pouvez partager certains dossiers de votre site avec d’autres personnes.
- Vous pouvez rejoindre le nœud d’une autre personne et synchroniser sa liste partagée dans votre panneau.
- Les fichiers fédérés servent à parcourir, rechercher, prévisualiser et copier des liens. Ils ne sont pas réimportés dans votre propre stockage.

## Où configurer

```text
Paramètres système -> Autres paramètres -> Index distribué fédéré
```

![Nœud local](../../image/other/联盟图/联盟分布式索引本地节点.png)

La page comporte trois onglets :

| Onglet | Usage |
| --- | --- |
| Nœud local | Configurer votre nœud, le domaine public, les dossiers partagés et l’index sortant |
| Nœuds rejoints | Gérer les nœuds d’autres sites que vous suivez |
| Demandes vers mon nœud | Gérer les demandes d’autres personnes souhaitant rejoindre votre nœud |

## Configuration initiale

1. Ouvrez `Nœud local`.
2. Activez `Activer`.
3. Choisissez les dossiers à partager dans `Dossiers de synchronisation`.
4. Cliquez sur `Mettre à jour l’index sortant`.
5. Si ImgBed détecte un changement de domaine, confirmez que le domaine actuel est bien le domaine de production.

Vous pouvez choisir plusieurs dossiers. Si la liste est vide, tous les dossiers sont partagés.

## Nœud local

### Domaine public

Le domaine public est l’adresse utilisée par les autres nœuds pour accéder à votre site.

ImgBed la détecte automatiquement. En général, vous n’avez rien à saisir. Une confirmation est demandée lors de la première mise à jour de l’index ou après un changement de domaine.

### Dossiers de synchronisation

Ces dossiers déterminent quels fichiers sont partagés.

Exemple :

```text
/1/
/2/
```

Dans ce cas, les autres nœuds ne voient que les fichiers de ces deux répertoires.

### Mettre à jour l’index sortant

Cette action met à jour la liste de fichiers que les autres nœuds peuvent synchroniser depuis votre site.

Utilisez-la quand :

- vous activez la fédération pour la première fois ;
- vous ajoutez de nouveaux fichiers à partager ;
- vous changez les dossiers partagés ;
- vous changez de domaine public.

## Rejoindre d’autres nœuds

`Nœuds rejoints` sert à suivre les nœuds d’autres sites ImgBed.

![Nœuds rejoints](../../image/other/联盟图/我加入的节点.png)

1. Demandez un lien d’invitation au propriétaire de l’autre nœud.
2. Collez-le dans le champ.
3. Cliquez sur `Demander à rejoindre`.
4. Attendez l’approbation dans le panneau de l’autre personne.

Après approbation, utilisez `Mettre à jour l’index entrant` pour synchroniser les fichiers partagés.

Pour mettre à jour un seul nœud, utilisez `Mettre à jour l’index` sur sa carte.

![Mise à jour d’index](../../image/other/联盟图/更新索引.png)

## Gérer les demandes vers votre nœud

`Demandes vers mon nœud` affiche les personnes qui souhaitent rejoindre votre nœud.

![Demandes vers mon nœud](../../image/other/联盟图/加入我的节点.png)

Pour générer une invitation, activez le nœud local, exécutez au moins une fois `Mettre à jour l’index sortant` pour confirmer le domaine public, puis cliquez sur `Réinitialiser le lien d’invitation`.

Lorsqu’une demande arrive, vous pouvez choisir :

| Action | Résultat |
| --- | --- |
| Approuver | Autorise l’autre partie à synchroniser votre liste partagée |
| Refuser | Refuse l’entrée |
| Supprimer | Supprime un enregistrement terminé |
| Vérifier l’état | Vérifie si l’autre partie conserve la relation |

Après approbation, l’autre partie doit encore mettre à jour son index entrant pour voir vos fichiers.

![Approuver un nœud](../../image/other/联盟图/邀请节点同意.png)

## Messages

Une fois la relation approuvée, vous pouvez utiliser `Message` sur la carte du nœud.

Les messages servent uniquement à échanger autour de la relation fédérée. Ils ne modifient ni fichiers, ni tags, ni dossiers, ni permissions.

![Messages](../../image/other/联盟图/留言功能.png)

## Voir les fichiers fédérés

Une fois la synchronisation terminée, revenez à la liste des fichiers du panneau. En haut de la page, vous pouvez basculer entre fichiers locaux et fichiers fédérés.

Les fichiers fédérés ne sont pas locaux : vous pouvez les consulter, les rechercher, les prévisualiser et copier leurs liens, mais pas les déplacer, les supprimer, modifier leurs tags ou les sauvegarder depuis votre site.

![Affichage dans le panneau](../../image/other/联盟图/联盟管理显示效果图.png)

## Questions fréquentes

### Le système indique qu’il n’existe pas de relation

Cela signifie généralement que l’autre partie a supprimé votre enregistrement. Envoyez une nouvelle demande.

![Nouvelle demande](../../image/other/联盟图/无关系记录重新申请.png)

### Je suis membre, mais je ne vois aucun fichier

Vérifiez que :

1. l’autre partie a approuvé votre demande ;
2. l’autre partie a mis à jour son index sortant ;
3. vous avez mis à jour l’index entrant ;
4. les dossiers synchronisés de l’autre partie contiennent bien les répertoires à partager.
