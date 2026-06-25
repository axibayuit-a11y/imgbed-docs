# Ajouter un canal Cloudflare R2

## Cas d’utilisation

Utilisez Cloudflare R2 lorsque :

- votre site ImgBed est déjà déployé sur Cloudflare et que vous voulez stocker les fichiers dans un bucket R2 du même compte Cloudflare ;
- vous ne voulez pas configurer séparément un point de terminaison S3, une clé d’accès et une clé secrète ;
- vous voulez que les lectures et écritures passent par le binding R2 de Worker ou Pages avec une configuration minimale.

En résumé :

Le canal R2 n’est pas créé manuellement dans le panneau d’administration d’ImgBed. Vous devez d’abord lier un bucket R2 au projet Cloudflare, et le nom de la variable de binding doit être exactement `img_r2`.

## Ce qu’il faut avant de commencer

- Un compte Cloudflare.
- Un bucket R2 existant.
- L’autorisation de gérer le projet Cloudflare sur lequel ImgBed est déployé.

## Configuration dans Cloudflare

### 1. Créer un bucket R2

1. Connectez-vous au Cloudflare Dashboard.
2. Ouvrez `R2 Object Storage`.
3. Cliquez sur Créer un bucket.
4. Choisissez un nom de bucket, par exemple `imgbed`.

Les fichiers téléversés seront stockés dans ce bucket.

![Créer un bucket R2](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

### 2. Lier le bucket au projet ImgBed

Choisissez l’emplacement du binding selon le type de déploiement :

| Type de déploiement | Emplacement du binding |
| --- | --- |
| Pages | Projet Pages actuel -> Settings -> Functions -> R2 bucket bindings |
| Worker | Worker actuel -> Settings -> Bindings -> R2 bucket bindings |

Lors de l’ajout du binding, les champs importants sont :

| Champ | Valeur |
| --- | --- |
| Nom de variable | `img_r2` |
| Bucket R2 | Sélectionnez le bucket que vous avez créé. |

Le nom de variable doit être exactement `img_r2`. Le téléversement, la lecture et la suppression des fichiers R2 dépendent tous de ce nom de binding.

### 3. Redéployer le projet

Après avoir enregistré le binding, redéployez ImgBed afin que l’environnement d’exécution Worker ou Pages puisse accéder à `img_r2`.

## Ce que vous verrez dans ImgBed

Lorsque le binding R2 est disponible, ouvrez :

1. Paramètres système.
2. Paramètres de téléversement.
3. Le canal `Cloudflare R2`.

Le système crée automatiquement un canal fixe :

| Champ | Valeur fixe |
| --- | --- |
| Nom du canal | `Cloudflare R2` |
| Type de canal | `cfr2` |
| Mode de stockage | `binding` |
| Source de configuration | Binding d’environnement |

Il s’agit d’un canal fixe basé sur un binding. Vous n’avez pas besoin de cliquer sur Ajouter un canal pour le créer, et il ne peut pas être supprimé comme un canal normal.

## Champs modifiables dans le panneau d’administration

| Champ | Rôle | Obligatoire |
| --- | --- | --- |
| Activer le canal | Détermine si R2 participe à la sélection de téléversement. | Oui |
| Account ID | Utilisé uniquement lorsque les limites de quota sont activées et qu’il faut interroger l’usage officiel de R2. | Recommandé lorsque les limites de quota sont activées |
| Nom du bucket | Utilisé uniquement lorsque les limites de quota sont activées et qu’il faut interroger l’usage officiel de R2. | Recommandé lorsque les limites de quota sont activées |
| Limite de quota | Détermine si ce canal R2 participe à la sélection de téléversement selon la capacité. | Non |
| Seuil | Arrête l’écriture sur ce canal lorsque l’usage atteint le pourcentage indiqué. | Obligatoire lorsque les limites de quota sont activées |

Vous pouvez copier l’Account ID depuis le panneau d’informations du compte dans le Cloudflare Dashboard. Renseignez-le uniquement si vous voulez qu’ImgBed interroge et applique l’usage de quota R2.

![Obtenir l’Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Étapes de configuration

1. Créez un bucket R2 dans Cloudflare.
2. Ouvrez les paramètres Cloudflare du projet ImgBed.
3. Ajoutez un binding de bucket R2.
4. Définissez le nom de variable sur `img_r2`.
5. Sélectionnez le bucket R2 que vous avez créé.
6. Enregistrez le binding et redéployez ImgBed.
7. Revenez à ImgBed -> Paramètres système -> Paramètres de téléversement.
8. Vérifiez que le canal `Cloudflare R2` apparaît et qu’il est activé.

Si vous voulez que R2 participe à la sélection de téléversement selon la capacité, activez la limite de quota puis saisissez l’Account ID, le nom du bucket, la limite de quota et le seuil avant d’enregistrer.

![Configurer les limites de quota](../../image/upload/cloudflare-r2/配置容量限制.png)

## Vérification

- Le canal fixe `Cloudflare R2` apparaît dans les paramètres de téléversement.
- La carte du canal indique qu’il est activé.
- Un petit fichier de test est téléversé correctement et le lien retourné s’ouvre normalement.
- Si le message `R2 database binding is not configured` apparaît lors de l’ouverture d’un fichier, l’environnement d’exécution n’a pas reçu le binding `img_r2`. Vérifiez le nom du binding dans Cloudflare et redéployez le projet.
