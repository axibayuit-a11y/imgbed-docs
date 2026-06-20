# Ajouter un canal Yandex

Le canal Yandex utilise Yandex Disk comme destination de stockage.

## À préparer

| Élément | Utilité |
| --- | --- |
| Compte Yandex | Autoriser Yandex Disk |
| Yandex OAuth App | Obtenir Client ID et Client Secret |
| Domaine ImgBed | Configurer le callback OAuth |
| Yandex Disk | Enregistrer les fichiers |

## Créer une Yandex OAuth App

Ouvrez :

```text
https://oauth.yandex.com/client/new
```

Si une connexion est demandée, utilisez le compte Yandex qui servira de stockage.

Créez une application avec un nom reconnaissable :

```text
imgbed-yandex
```

Dans callback URL, renseignez :

```text
https://votre-domaine/api/oauth/yandex/callback
```

## Permissions

ImgBed utilise ces permissions `Yandex.Disk REST API` :

| Permission | Utilité |
| --- | --- |
| `cloud_api:disk.app_folder` | Enregistrer les fichiers dans le dossier de l’application |
| `cloud_api:disk.read` | Lire les fichiers et liens de téléchargement |
| `cloud_api:disk.write` | Envoyer, créer des dossiers et supprimer |
| `Access to information about Yandex.Disk` | Lire capacité et usage |

Les permissions de nom ou e-mail dans `Yandex ID API` sont optionnelles. Les fonctions principales dépendent des permissions Disk.

![Permissions Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

## Copier Client ID et Secret

Après création de l’application, copiez :

| Champ Yandex | Champ ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Client ID et Secret](../../image/upload/yandex/记录客户端id和secret.png)

## Renseigner dans ImgBed

Dans Paramètres d’upload, choisissez `Yandex`.

| Champ | Valeur |
| --- | --- |
| Nom du canal | Par exemple `Yandex Main` |
| Client ID | Client ID de l’application |
| Client Secret | Client Secret de l’application |
| Refresh Token | Laissez vide au début |
| Dossier racine | Optionnel, souvent `imgbed` |

![Configuration Yandex](../../image/upload/yandex/编辑配置渠道.png)

## Obtenir le Refresh Token

1. Dans ImgBed, cliquez sur `Obtenir le token`.
2. Connectez-vous avec le compte Yandex de destination.
3. Acceptez les permissions.
4. Copiez le `Refresh Token` affiché sur la page de callback.
5. Collez-le dans ImgBed.

![Refresh Token](../../image/upload/yandex/授权后复制刷新令牌.png)

## Flux rapide

```text
Ouvrir Yandex OAuth Console
-> Créer une App
-> Configurer https://votre-domaine/api/oauth/yandex/callback
-> Confirmer les permissions Disk
-> Copier Client ID / Client Secret
-> Renseigner dans ImgBed
-> Obtenir le token
-> Coller Refresh Token et enregistrer
```

## Références

1. Enregistrer une app Yandex: https://yandex.com/dev/id/doc/en/register-client
2. Code d’autorisation par URL: https://yandex.com/dev/id/doc/en/codes/code-url
3. API de token OAuth: https://yandex.com/dev/id/doc/en/tokens/token
