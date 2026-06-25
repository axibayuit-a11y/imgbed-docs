# Ajouter un canal WebDAV

## Cas d’utilisation

Utilisez le canal WebDAV lorsque :

- vous disposez d’un NAS, d’un lecteur cloud ou d’un service de stockage d’objets qui fournit un point de terminaison WebDAV ;
- vous voulez stocker les images téléversées dans votre propre répertoire WebDAV ;
- vous voulez enregistrer les identifiants dans la table D1 `upload_channels` plutôt que de les exposer durablement côté client.

## Ce qu’il faut avant de commencer

| Élément | Rôle |
| --- | --- |
| Endpoint WebDAV | URL WebDAV du serveur, par exemple `https://nas.example.com/dav`. |
| Nom d’utilisateur | Utilisé pour se connecter au service WebDAV. |
| Mot de passe | Utilisé pour se connecter au service WebDAV. |
| Mode d’authentification | La valeur par défaut est `Basic`. Utilisez `Digest` ou la négociation automatique uniquement si le serveur l’exige. |
| Répertoire de stockage | Répertoire utilisé pour stocker les fichiers. La valeur par défaut est `imgbed`. |

## Où l’ajouter

1. Ouvrez les paramètres système.
2. Accédez aux paramètres de téléversement.
3. Cliquez sur Ajouter un canal en haut à droite.
4. Sélectionnez `WebDAV`.

## Référence des champs

| Champ | Rôle | Obligatoire |
| --- | --- | --- |
| Nom du canal | Nom facile à reconnaître pour ce canal WebDAV, par exemple `koofr` ou `nas`. | Oui |
| Endpoint | Endpoint WebDAV complet, avec `https://`. | Oui |
| Nom d’utilisateur | Nom d’utilisateur de connexion WebDAV. | Oui |
| Mot de passe | Mot de passe de connexion WebDAV. | Oui |
| Mode d’authentification | Généralement `Basic` ; utilisez `Digest` si le serveur exige l’authentification Digest. | Oui |
| Répertoire de stockage | Répertoire où les fichiers sont stockés. La valeur par défaut est `imgbed`. | Non |

## Exemple : fie.nl.tab.digital

### 1. Créer un mot de passe d’application

Ouvrez les paramètres de sécurité de votre compte, recherchez les mots de passe d’application et créez un nouveau mot de passe d’application.

![Créer un mot de passe d’application](../../image/upload/webdav/创建应用密码.png)

Après sa création, copiez et enregistrez le nouveau mot de passe d’application. Il n’est généralement affiché qu’une seule fois.

![Enregistrer le nouveau mot de passe d’application](../../image/upload/webdav/记住新应用程序密码.png)

### 2. Remplir la configuration WebDAV dans ImgBed

Revenez à ImgBed et ajoutez un canal WebDAV :

| Champ d’interface | Valeur |
| --- | --- |
| Endpoint | URL WebDAV fournie par `https://fie.nl.tab.digital/`. |
| Nom d’utilisateur | Votre nom d’utilisateur WebDAV. |
| Mot de passe | Le mot de passe d’application que vous venez de créer. |
| Mode d’authentification | Commencez par `Basic` dans la plupart des cas. |
| Répertoire de stockage | La valeur par défaut est `imgbed` ; vous pouvez aussi utiliser un répertoire personnalisé. |

![Remplir la configuration](../../image/upload/webdav/填写配置.png)

## Comportement lors du téléversement de gros fichiers

Le canal WebDAV utilise désormais un vrai téléversement fragmenté basé sur une session.

Les petits fichiers sont téléversés comme un fichier complet unique. Les fichiers supérieurs à 64 MiB sont automatiquement divisés en fragments d’environ 10 MiB et téléversés dans un répertoire distant de fragments.

Le service WebDAV n’a pas besoin de prendre en charge `partial update` ni les écritures basées sur un offset. ImgBed ne fusionne pas les fragments en un seul gros fichier sur le serveur distant. À la place, il enregistre un manifeste de fragments et lit les fragments dans l’ordre lorsque le fichier est demandé.

En pratique :

| Taille du fichier | Méthode de téléversement | Organisation dans le stockage distant |
| --- | --- | --- |
| 64 MiB ou moins | Téléversement normal | Un fichier complet |
| Plus de 64 MiB | Téléversement fragmenté réel basé sur une session | Un répertoire de fragments avec plusieurs fichiers de fragment |

Le répertoire de fragments n’affecte que l’organisation dans le stockage distant. Il ne change pas l’URL du fichier dans ImgBed. Les utilisateurs continuent d’accéder au fichier via le lien original `/file/...`.

## Étapes de configuration

1. Ouvrez les paramètres de téléversement.
2. Cliquez sur Ajouter un canal.
3. Sélectionnez `WebDAV`.
4. Saisissez un nom de canal reconnaissable, par exemple `koofr`.
5. Saisissez le point de terminaison WebDAV, par exemple `https://app.koofr.net/dav/Koofr`.
6. Saisissez le nom d’utilisateur et le mot de passe.
7. Conservez le mode d’authentification sur `Basic` par défaut.
8. Conservez le répertoire de stockage sur `imgbed`, ou remplacez-le par votre propre répertoire.
9. Cliquez sur Enregistrer.
10. Après l’enregistrement, vérifiez la carte du canal, interrogez la capacité si elle est disponible, puis téléversez un fichier de test.

## Vérification

| Vérification | Méthode |
| --- | --- |
| La carte du canal apparaît | Après l’enregistrement, la page des paramètres de téléversement doit afficher une carte de canal WebDAV. |
| Le canal est activé | L’interrupteur en haut à droite de la carte doit rester activé. |
| Les identifiants sont enregistrés | La vue détaillée doit afficher Endpoint, le nom d’utilisateur, le mode d’authentification et le répertoire de stockage. |
| Le téléversement des petits fichiers fonctionne | Téléversez une image de test et vérifiez que le fichier apparaît dans le répertoire WebDAV. |
| La règle des gros fichiers fonctionne | Les fichiers supérieurs à 64 MiB utilisent le téléversement fragmenté et créent un répertoire distant de fragments. |
| La requête de capacité fonctionne | Si le serveur prend en charge les informations de capacité, la requête affiche la capacité utilisée et la capacité totale. |

![Requête de quota réussie](../../image/upload/webdav/查询额度成功.png)

## FAQ

### Pourquoi les gros fichiers WebDAV créent-ils un répertoire de fragments ?

C’est la méthode de stockage actuelle pour les gros fichiers.

Les fichiers supérieurs à 64 MiB ne sont pas fusionnés en un seul gros fichier distant. Ils sont stockés sous forme de répertoire de fragments. ImgBed enregistre le manifeste de fragments et retourne le contenu complet en lisant les fragments dans l’ordre.

### Que vérifier d’abord si le téléversement de gros fichiers échoue ?

Vérifiez d’abord Endpoint, le nom d’utilisateur, le mot de passe et le répertoire de stockage. Confirmez ensuite que le service WebDAV permet de créer des répertoires, d’écrire des fichiers et de lire des fichiers.

Si la requête de capacité échoue alors que le téléversement des petits fichiers fonctionne, il se peut simplement que le serveur ne prenne pas en charge les informations de capacité ou les limite. Cela ne signifie pas nécessairement que le téléversement est indisponible.

### Quel mode d’authentification utiliser ?

Commencez par `Basic`.

Si le serveur exige explicitement l’authentification Digest, utilisez `Digest`.

Si vous n’êtes pas sûr, utilisez la négociation automatique.

## Liste rapide

```text
Prepare WebDAV endpoint, username, and password
-> Open Upload Settings
-> Add Channel
-> Select WebDAV
-> Enter Endpoint / username / password
-> Keep authentication mode as Basic by default
-> Keep storage directory as imgbed by default
-> Save
-> Query capacity
-> Upload a test file
```
