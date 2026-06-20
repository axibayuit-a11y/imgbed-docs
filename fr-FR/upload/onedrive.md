# Ajouter un canal OneDrive

Le canal OneDrive utilise Microsoft OneDrive comme destination de stockage.

## À préparer

| Élément | Utilité |
| --- | --- |
| Compte Microsoft | Gérer OneDrive et l’enregistrement de l’application |
| Domaine ImgBed | Configurer le callback OAuth |
| App registration | Obtenir Client ID et Client Secret |
| Refresh Token | Maintenir l’accès dans le temps |

## Ouvrir Microsoft Entra ID

1. Ouvrez `portal.azure.com`.
2. Recherchez `Microsoft Entra ID`.
3. Entrez dans `App registrations`.
4. Cliquez sur `New registration`.

## Enregistrer l’application

| Champ | Valeur |
| --- | --- |
| Name | Par exemple `imgbed-onedrive` |
| Supported account types | Selon le type de OneDrive utilisé |
| Redirect URI type | `Web` |
| Redirect URI | `https://votre-domaine/api/oauth/onedrive/callback` |

Pour un OneDrive personnel, choisissez les comptes Microsoft personnels. Pour accepter comptes personnels et professionnels, choisissez l’option compatible avec les deux.

![Enregistrement OneDrive](../../image/upload/onedrive/添加应用程序注册.png)

Après l’enregistrement, copiez `Application (client) ID`. Pour un compte professionnel, conservez aussi `Directory (tenant) ID`.

![Application ID et Tenant ID](../../image/upload/onedrive/应用程序ID和目录租户ID位.png)

## Créer le Client Secret

1. Ouvrez `Certificates & secrets`.
2. Cliquez sur `New client secret`.
3. Définissez le nom et l’expiration.
4. Copiez immédiatement la valeur `Value`.

![Client Secret](../../image/upload/onedrive/保存客户端密码值.png)

Cette valeur peut ne plus être affichée ensuite. Enregistrez-la dès sa création.

## Permissions Microsoft Graph

Dans `API permissions`, ajoutez des delegated permissions Microsoft Graph.

| Permission | Utilité |
| --- | --- |
| `Files.ReadWrite.All` | Envoyer, créer des dossiers et supprimer des fichiers |
| `offline_access` | Obtenir un Refresh Token |
| `User.Read` | Lire les informations du compte et la capacité |

## Renseigner dans ImgBed

Dans Paramètres d’upload, choisissez `OneDrive`.

| Champ | Valeur |
| --- | --- |
| Nom du canal | Par exemple `OneDrive Main` |
| Client ID | `Application (client) ID` |
| Client Secret | Valeur du Client Secret |
| Tenant ID | Voir le tableau ci-dessous |
| Refresh Token | Laissez vide au début |
| Dossier racine | Optionnel, souvent `imgbed` |

![Configuration OneDrive](../../image/upload/onedrive/添加新渠道配置.png)

| Type de compte | Tenant ID |
| --- | --- |
| Compte personnel | `consumers` |
| Personnel + professionnel | `common` |
| Organisation actuelle uniquement | `Directory (tenant) ID` |

## Obtenir le Refresh Token

1. Dans ImgBed, cliquez sur `Obtenir le token`.
2. Connectez-vous avec le compte Microsoft de destination.
3. Acceptez les permissions.
4. Copiez le `Refresh Token` affiché sur la page de callback.
5. Revenez dans ImgBed et collez-le dans le champ correspondant.

![Refresh Token](../../image/upload/onedrive/复制刷新令牌.png)

## Flux rapide

```text
Ouvrir portal.azure.com
-> Microsoft Entra ID
-> App registrations
-> New registration
-> Configurer le callback Web
-> Copier Application ID
-> Créer Client Secret
-> Ajouter les permissions Microsoft Graph
-> Renseigner Client ID / Secret / Tenant ID dans ImgBed
-> Obtenir le token
-> Coller le Refresh Token et enregistrer
```
