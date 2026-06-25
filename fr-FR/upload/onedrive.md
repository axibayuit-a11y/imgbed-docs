# Ajouter un canal OneDrive

## Ce qu’il faut avant de commencer

| Élément | Pourquoi c’est nécessaire |
| --- | --- |
| Compte Microsoft | Utilisé pour accéder aux pages d’administration Microsoft et autoriser OneDrive |
| Domaine ImgBed | Utilisé comme URL de retour OAuth |
| Enregistrement d’application | Utilisé pour générer `Client ID` et `Client Secret` |
| Compte OneDrive | Utilisé comme emplacement réel de stockage des fichiers |

## Étapes de configuration

### Étape 1 : ouvrir Microsoft Entra ID

1. Ouvrez `portal.azure.com`.
2. Recherchez `Microsoft Entra ID` en haut de la page.
3. Si la page cible n’apparaît pas dans la liste déroulante, choisissez :

```text
Continue searching in Microsoft Entra ID
```

4. Ouvrez `Microsoft Entra ID`.
5. Ouvrez `App registrations`.
6. Cliquez sur `New registration`.

### Étape 2 : enregistrer une application

Sur la page `New registration`, remplissez :

| Champ | Valeur à saisir |
| --- | --- |
| Name | Nom reconnaissable, par exemple `imgbed-onedrive` |
| Supported account types | Choisissez selon le tableau ci-dessous |
| Redirect URI type | `Web` |
| Redirect URI | `https://your-domain.com/api/oauth/onedrive/callback` |

Guide du type de compte :

| Votre scénario | Supported Account Types |
| --- | --- |
| OneDrive personnel uniquement | Choisissez l’option de compte Microsoft personnel. |
| Comptes personnels et comptes professionnels/scolaires | Choisissez l’option qui prend en charge les comptes personnels et organisationnels. |
| OneDrive professionnel ou scolaire uniquement | Choisissez l’option de compte organisationnel. |

Cliquez sur Enregistrer après avoir rempli le formulaire.

![Créer l’application OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

### Étape 3 : copier les informations de l’application

Après la création de l’application, copiez ces valeurs depuis la page de résumé :

| Champ Microsoft | Champ ImgBed |
| --- | --- |
| `Application (client) ID` | `Client ID` |
| `Directory (tenant) ID` | `Tenant ID` pour les comptes organisationnels |

![Application et tenant IDs](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

### Étape 4 : créer un Client Secret

1. Ouvrez `Certificates & secrets`.
2. Cliquez sur `New client secret`.
3. Saisissez la description de votre choix.
4. Choisissez une période d’expiration.
5. Copiez immédiatement la valeur `Value` après sa création.

![Enregistrer la valeur du client secret](../../image/upload/onedrive/保存客户端密码值.png)

### Étape 5 : ajouter les permissions API

1. Ouvrez `API permissions`.
2. Cliquez sur `Add a permission`.
3. Choisissez `Microsoft Graph`.
4. Choisissez `Delegated permissions`.
5. Ajoutez ces permissions :

| Permission | Rôle |
| --- | --- |
| `Files.ReadWrite.All` | Téléverse des fichiers, crée des dossiers et supprime des fichiers |
| `offline_access` | Permet à ImgBed d’obtenir un `Refresh Token` |
| `User.Read` | Lit les informations du compte et du quota |

### Étape 6 : compléter le canal OneDrive

Dans les paramètres de téléversement, choisissez `OneDrive` et remplissez :

| Champ ImgBed | Valeur à saisir |
| --- | --- |
| Nom du canal | Nom reconnaissable, par exemple `Main OneDrive` |
| Client ID | `Application (client) ID` de Microsoft |
| Client Secret | La valeur `Client Secret Value` que vous avez copiée |
| Tenant ID | Utilisez le tableau ci-dessous |
| Refresh Token | Laissez vide pour l’instant |
| Répertoire racine | Facultatif. La valeur par défaut est `imgbed`. |
| Note | Facultatif |

![Remplir la configuration du canal OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

Comment remplir `Tenant ID` :

| Type de compte choisi | `Tenant ID` ImgBed |
| --- | --- |
| Comptes personnels | `consumers` |
| Comptes personnels + organisationnels | `common` |
| Organisation actuelle uniquement | `Directory (tenant) ID` |

### Étape 7 : obtenir le Refresh Token

1. Dans ImgBed, cliquez sur `Get Token`.
2. Connectez-vous au compte Microsoft à associer.
3. Approuvez la demande d’autorisation.
4. La page de retour affiche un `Refresh Token`.
5. Copiez-le.
6. Revenez à ImgBed et collez-le dans le champ `Refresh Token`.

![Copier le refresh token](../../image/upload/onedrive/复制刷新令牌.png)

### Étape 8 : enregistrer le canal

Après avoir rempli tous les champs, enregistrez le canal.

## Flux rapide

```text
Open portal.azure.com
-> Search for Microsoft Entra ID
-> Open App registrations
-> Register a new app
-> Fill Name / Supported account types / Web redirect URI
-> Register
-> Copy Application (client) ID
-> Check the callback URL in Authentication
-> Create a Client Secret in Certificates & secrets
-> Add permissions in API permissions
-> Fill Client ID / Client Secret / Tenant ID into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Références

1. Enregistrement d’application Microsoft Entra : https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
2. Flux de code d’autorisation de Microsoft identity platform : https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
3. Authentification utilisateur Microsoft Graph : https://learn.microsoft.com/en-us/graph/auth-v2-user
