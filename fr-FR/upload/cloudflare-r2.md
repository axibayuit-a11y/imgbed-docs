# Ajouter un canal Cloudflare R2

Le canal Cloudflare R2 enregistre les fichiers dans un bucket R2.

## Quand l’utiliser

- Vous voulez gérer le stockage dans l’écosystème Cloudflare.
- R2 sera la destination principale d’ImgBed.
- Vous souhaitez combiner R2 avec un domaine personnalisé ou un CDN.

## À préparer

| Élément | Utilité |
| --- | --- |
| Compte Cloudflare | Gérer R2 et les tokens |
| Bucket R2 | Destination réelle des fichiers |
| Account ID | Identifier le compte |
| API Token | Autoriser lecture et écriture dans R2 |
| Domaine personnalisé | Optionnel, pour des URL publiques plus propres |

## Créer le bucket

Dans le Cloudflare Dashboard, ouvrez `R2 Object Storage` et créez un bucket.

![Créer un bucket R2](../../image/upload/cloudflare-r2/创建一个存储桶img-r2.png)

Conservez le nom exact du bucket : il devra être saisi à l’identique dans ImgBed.

## Trouver l’Account ID

L’Account ID est visible sur la page du compte Cloudflare.

![Account ID](../../image/upload/cloudflare-r2/获取账户id.png)

## Renseigner dans ImgBed

Dans Paramètres d’upload, ouvrez `Ajouter un canal` et choisissez `Cloudflare R2`.

| Champ | Valeur |
| --- | --- |
| Nom du canal | Nom facile à reconnaître |
| Account ID | Account ID Cloudflare |
| Bucket | Nom du bucket R2 |
| API Token | Token ayant accès à R2 |
| Domaine personnalisé | Optionnel |
| Dossier | Optionnel, souvent `imgbed` |

## Limite de capacité

Vous pouvez activer une limite de capacité pour contrôler quand ce canal cesse d’être utilisé.

![Limite de capacité](../../image/upload/cloudflare-r2/配置容量限制.png)

Lorsque le seuil est atteint, ImgBed peut éviter de sélectionner ce canal pour de nouveaux uploads.

## Vérification

1. La carte du canal R2 apparaît après enregistrement.
2. Le canal est activé.
3. Envoyez une image de test.
4. Vérifiez que l’objet apparaît dans le bucket.
5. Ouvrez le lien renvoyé par ImgBed.

## Erreurs courantes

- Account ID ou nom de bucket incorrect.
- Token sans permissions suffisantes sur le bucket.
- Domaine personnalisé non relié au bucket.
- Canal exclu à cause d’une limite de capacité.
