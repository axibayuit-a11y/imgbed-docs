# Ajouter un canal Google Drive

## Ce qu’il faut d’abord

Avant de commencer, préparez les éléments suivants :

| Élément | Pourquoi c’est nécessaire |
| --- | --- |
| Compte Google | Utilisé pour accéder à Google Cloud et autoriser Google Drive |
| Projet Google Cloud | Utilisé pour activer Drive API et créer des identifiants OAuth |
| Client OAuth 2.0 | ImgBed l’utilise pour obtenir `Client ID`, `Client Secret` et `Refresh Token` |
| Domaine ImgBed | Utilisé comme URI de redirection OAuth. Il doit correspondre au domaine que vous utilisez réellement. |

## Étapes de configuration

### Étape 1 : activer Google Drive API

1. Ouvrez Google Cloud Console.
2. Créez un nouveau projet ou sélectionnez un projet existant.
3. Accédez à `APIs & Services`.
4. Cliquez sur `Enable APIs and Services`.
5. Recherchez `Google Drive API`.
6. Ouvrez-la et cliquez sur Activer.

### Étape 2 : configurer l’écran de consentement OAuth

1. Dans Google Cloud, ouvrez `Google Auth Platform`.
2. Complétez les informations de base dans `Branding`, comme le nom de l’application, l’adresse de support et l’adresse de contact du développeur.
3. Ouvrez `Audience`.
4. Pour la plupart des déploiements personnels auto-hébergés, choisissez `External`.
5. Si vous choisissez `External`, ajoutez dans `Test users` le compte Google à autoriser.
6. Ouvrez `Data Access`.
7. Ajoutez les permissions Google Drive nécessaires.

### Étape 3 : créer un client OAuth 2.0

1. Dans `Google Auth Platform`, ouvrez `Clients`.
2. Créez un nouveau client.
3. Définissez le type d’application sur `Web application`.
4. Donnez au client un nom reconnaissable.
5. Dans les origines JavaScript autorisées, saisissez l’URL ImgBed, par exemple :

```text
https://img.example.com
```

6. Dans les URI de redirection autorisés, saisissez :

```text
https://img.example.com/api/oauth/google/callback
```

![Créer le client OAuth](../../image/upload/google-drive/oa客户端id创建.png)

![Saisir le domaine et l’URL de retour](../../image/upload/google-drive/填写oa客户端url信息.png)

Après la création du client, copiez ces valeurs :

| Valeur générée | Champ ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Étape 4 : compléter le canal Google Drive

Dans les paramètres de téléversement, choisissez `Google Drive` et remplissez :

| Champ ImgBed | Valeur à saisir |
| --- | --- |
| Nom du canal | Nom reconnaissable, par exemple `Main Google Drive` |
| Client ID | `Client ID` de Google Cloud |
| Client Secret | `Client Secret` de Google Cloud |
| Refresh Token | Laissez vide pour l’instant. Vous l’obtiendrez à l’étape suivante. |
| Répertoire racine | Facultatif. La valeur par défaut est `imgbed`. |

![Remplir les informations du client dans ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Étape 5 : obtenir le Refresh Token

1. Cliquez sur `Get Token`.
2. Choisissez le compte Google à connecter.
3. Terminez les demandes d’autorisation.
4. La page de retour affiche un `Refresh Token`.
5. Copiez-le.
6. Revenez à ImgBed et collez-le dans le champ `Refresh Token`.

![Copier le Refresh Token après autorisation](../../image/upload/google-drive/授权完复制token.png)

Si vous changez ensuite de compte Google, modifiez le client OAuth ou si l’autorisation précédente expire, il n’est pas nécessaire de supprimer le canal. Ouvrez la page d’édition et cliquez sur `Reauthorize`.

## Étape 6 : enregistrer le canal

Après avoir rempli tous les champs, enregistrez le canal.

## Flux rapide

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## Références

1. Applications serveur Web pour Google OAuth : https://developers.google.com/identity/protocols/oauth2/web-server
2. Configuration du consentement OAuth Google Workspace : https://developers.google.com/workspace/guides/configure-oauth-consent
3. Portées d’authentification Google Drive API : https://developers.google.com/workspace/drive/api/guides/api-specific-auth
