# Ajouter un canal Dropbox

## Ce qu’il faut d’abord

| Élément | Pourquoi c’est nécessaire |
| --- | --- |
| Compte Dropbox | Utilisé pour se connecter et autoriser l’application |
| Application Dropbox | Utilisée pour générer `App Key` et `App Secret` |
| Domaine ImgBed | Utilisé comme URI de redirection OAuth |
| Espace disponible dans Dropbox | Utilisé comme emplacement réel de stockage des fichiers |

## Étapes de configuration

### Étape 1 : créer une application Dropbox

1. Ouvrez Dropbox App Console :

```text
https://www.dropbox.com/developers/apps
```

2. Créez une nouvelle application.
3. Pour le type d’accès, choisissez :

```text
App folder
```

4. Donnez à l’application un nom reconnaissable, comme `imgbed-app`.
5. Ouvrez la page de détails de l’application après sa création.

Type d’accès recommandé :

| Type d’accès | Recommandation |
| --- | --- |
| `App folder` | Recommandé. Correspond à la manière dont ImgBed stocke les fichiers. |
| `Full Dropbox` | Non recommandé. ImgBed n’a pas besoin d’un accès complet à tout le compte. |

![Créer une application Dropbox](../../image/upload/dropbox/开发者创建应用.png)

### Étape 2 : ajouter l’URI de redirection

Sur la page de détails de l’application Dropbox, recherchez les paramètres OAuth ou l’URI de redirection et ajoutez :

```text
https://your-domain.com/api/oauth/dropbox/callback
```

Si vous utilisez le panneau d’administration depuis plusieurs domaines, ajoutez l’URL de retour correspondante pour chacun d’eux.

![Configurer l’URI de redirection](../../image/upload/dropbox/配置回调地址.png)

### Étape 3 : configurer les permissions de l’application

Ouvrez l’onglet `Permissions` et activez au moins ces portées :

| Portée | Obligatoire | Rôle |
| --- | --- | --- |
| `account_info.read` | Obligatoire | Lit les informations du compte et du quota |
| `files.metadata.read` | Obligatoire | Lit les métadonnées des fichiers et dossiers pour les vérifications de chemin |
| `files.metadata.write` | Obligatoire | Crée des dossiers et écrit des métadonnées |
| `files.content.write` | Obligatoire | Téléverse des fichiers. Si cette portée manque, l’erreur `required scope 'files.content.write'` apparaît. |
| `files.content.read` | Recommandé | Permet le téléchargement, l’aperçu et les liens temporaires de fichier |

Après avoir sélectionné les portées, cliquez sur `Submit` en bas de la page.

![Ajouter les permissions](../../image/upload/dropbox/添加对应的权限.png)

Important :

| Situation | Action à effectuer |
| --- | --- |
| Vous avez modifié les portées | Relancez le flux d’autorisation du jeton et obtenez un nouveau `Refresh Token`. |
| Vous n’avez pas réautorisé | L’ancien jeton n’obtient pas les nouvelles permissions, les téléversements peuvent donc continuer à échouer. |

### Étape 4 : copier les identifiants de l’application

Enregistrez ces deux valeurs depuis la page de l’application Dropbox :

| Champ Dropbox | Champ ImgBed |
| --- | --- |
| `App key` | `App Key` |
| `App secret` | `App Secret` |

### Étape 5 : compléter le canal Dropbox

Dans les paramètres de téléversement, choisissez `Dropbox` et remplissez :

| Champ ImgBed | Valeur à saisir |
| --- | --- |
| Nom du canal | Nom reconnaissable, par exemple `Main Dropbox` |
| App Key | `App key` Dropbox |
| App Secret | `App secret` Dropbox |
| Refresh Token | Laissez vide pour l’instant |
| Répertoire racine | Facultatif. La valeur par défaut est `imgbed`. |
| Note | Facultatif |

![Obtenir le jeton](../../image/upload/dropbox/获取令牌.png)

### Étape 6 : obtenir le Refresh Token

1. Dans ImgBed, cliquez sur `Get Token`.
2. Connectez-vous au compte Dropbox à associer.
3. Approuvez la demande d’autorisation.
4. La page de retour affiche un `Refresh Token`.
5. Copiez-le.
6. Revenez à ImgBed et collez-le dans le champ `Refresh Token`.

![Copier le jeton](../../image/upload/dropbox/复制令牌.png)

## Vérification

| Vérification | Résultat attendu |
| --- | --- |
| Carte du canal | Le canal Dropbox apparaît après l’enregistrement. |
| Interrupteur du canal | Le canal peut être activé. |
| Jeton enregistré | La page de détail indique que le `Refresh Token` a été enregistré. |
| Test de téléversement | Une image de test apparaît dans le dossier d’application Dropbox. |

Si les limites de quota sont activées, cliquez sur la requête de quota. Après une requête réussie, la carte du canal affiche l’espace utilisé, l’espace total et l’heure de dernière mise à jour.

![Requête de quota réussie](../../image/upload/dropbox/查询额度成功.png)

## Dépannage

| Problème | Solution |
| --- | --- |
| ImgBed indique que la configuration est incomplète | Vérifiez que `App Key`, `App Secret` et `Refresh Token` sont tous renseignés. |
| L’autorisation se termine mais aucun `Refresh Token` n’apparaît | Cliquez de nouveau sur `Get Token` et assurez-vous que le flux d’autorisation hors ligne est utilisé. |
| Le téléversement échoue avec `required scope 'files.content.write'` | Activez `files.content.write`, cliquez sur `Submit`, puis obtenez un nouveau `Refresh Token`. |
| Le retour échoue | Confirmez que l’URI de redirection est `https://your-domain.com/api/oauth/dropbox/callback`. |
| Les fichiers sont introuvables | Vérifiez que l’application Dropbox a été créée en mode `App folder`. |

## Flux rapide

```text
Open Dropbox App Console
-> Create an app
-> Choose App folder access
-> Add https://your-domain.com/api/oauth/dropbox/callback
-> Enable account_info.read / files.metadata.read / files.metadata.write / files.content.write
-> Optionally enable files.content.read
-> Click Submit
-> Copy App Key and App Secret
-> Fill them into ImgBed
-> Click Get Token
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
```

## Références

1. Dropbox App Console : https://www.dropbox.com/developers/apps
2. Guide OAuth de Dropbox : https://developers.dropbox.com/oauth-guide
3. Guide développeur Dropbox : https://www.dropbox.com/developers/reference/developer-guide
