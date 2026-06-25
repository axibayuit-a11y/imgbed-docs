# Ajouter un canal Yandex

## Ce qu’il faut d’abord

| Élément | Pourquoi c’est nécessaire |
| --- | --- |
| Compte Yandex | Utilisé pour se connecter et autoriser Yandex Disk |
| Application OAuth Yandex | Utilisée pour générer `Client ID` et `Client Secret` |
| Domaine ImgBed | Utilisé comme URI de redirection OAuth |
| Espace disponible dans Yandex Disk | Utilisé comme emplacement réel de stockage des fichiers |

## Étapes de configuration

### Étape 1 : créer une application OAuth Yandex

1. Ouvrez la page de création d’application OAuth Yandex :

```text
https://oauth.yandex.com/client/new
```

2. Si vous êtes redirigé vers la connexion, connectez-vous d’abord avec votre compte Yandex.
3. Créez une nouvelle application.
4. Donnez à l’application un nom reconnaissable, par exemple `imgbed-yandex`.
5. Recherchez les paramètres de retour ou d’URL de redirection.
6. Saisissez :

```text
https://your-domain.com/api/oauth/yandex/callback
```

### Étape 2 : confirmer les permissions

Pour l’intégration Yandex actuelle dans ImgBed, conservez ces quatre permissions dans `Yandex.Disk REST API` :

| Permission | Rôle |
| --- | --- |
| `cloud_api:disk.app_folder` | Permet à ImgBed de stocker les fichiers dans le dossier de l’application |
| `cloud_api:disk.read` | Lit les fichiers et les liens de téléchargement |
| `cloud_api:disk.write` | Téléverse des fichiers, crée des dossiers et supprime des fichiers |
| `Access to information about Yandex.Disk` | Lit le quota du disque et l’espace utilisé |

Si vous voyez aussi ces permissions dans `Yandex ID API`, elles sont facultatives :

| Texte de permission | Recommandation |
| --- | --- |
| `Access to username, first name and surname, gender` | Facultatif |
| `Access to email address` | Facultatif |

Les fonctions principales de téléversement, téléchargement, suppression et quota dépendent surtout des quatre permissions ci-dessus dans `Yandex.Disk REST API`.

![Configurer les permissions Yandex Disk](../../image/upload/yandex/dataaccess配置软盘权限.png)

### Étape 3 : copier les identifiants de l’application

Après la création de l’application, copiez :

| Champ Yandex | Champ ImgBed |
| --- | --- |
| `Client ID` | `Client ID` |
| `Client Secret` | `Client Secret` |

![Noter Client ID et Secret](../../image/upload/yandex/记录客户端id和secret.png)

### Étape 4 : compléter le canal Yandex

Dans les paramètres de téléversement, choisissez `Yandex` et remplissez :

| Champ ImgBed | Valeur à saisir |
| --- | --- |
| Nom du canal | Nom reconnaissable, par exemple `Main Yandex` |
| Client ID | `Client ID` de l’application Yandex |
| Client Secret | `Client Secret` de l’application Yandex |
| Refresh Token | Laissez vide pour l’instant |
| Répertoire racine | Facultatif. La valeur par défaut est `imgbed`. |

![Modifier la configuration du canal](../../image/upload/yandex/编辑配置渠道.png)

### Étape 5 : obtenir le Refresh Token

1. Dans ImgBed, cliquez sur `Get Token`.
2. Connectez-vous au compte Yandex à associer.
3. Approuvez la demande d’autorisation.
4. La page de retour affiche un `Refresh Token`.
5. Copiez-le.
6. Revenez à ImgBed et collez-le dans le champ `Refresh Token`.

![Copier le refresh token après autorisation](../../image/upload/yandex/授权后复制刷新令牌.png)

### Étape 6 : enregistrer le canal

Après avoir rempli tous les champs, enregistrez le canal.

## Flux rapide

```text
Open Yandex OAuth Console
-> Create an app
-> Add https://your-domain.com/api/oauth/yandex/callback
-> Confirm Yandex Disk permissions
-> Copy Client ID and Client Secret
-> Fill Client ID / Client Secret into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Références

1. Enregistrer une application Yandex : https://yandex.com/dev/id/doc/en/register-client
2. Obtenir un code d’autorisation via URL : https://yandex.com/dev/id/doc/en/codes/code-url
3. Point de terminaison du jeton OAuth Yandex : https://yandex.com/dev/id/doc/en/tokens/token
