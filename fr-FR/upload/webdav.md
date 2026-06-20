# Ajouter un canal WebDAV

Le canal WebDAV enregistre les fichiers dans un NAS, un disque cloud ou un service compatible WebDAV.

## Quand l’utiliser

- Votre NAS ou service cloud fournit une URL WebDAV.
- Vous voulez enregistrer les images dans un dossier WebDAV personnel.
- Vous préférez stocker les identifiants dans la table D1 `upload_channels` plutôt que de les exposer côté frontend.

## À préparer

| Élément | Utilité |
| --- | --- |
| WebDAV Endpoint | Par exemple `https://nas.example.com/dav` |
| Utilisateur | Connexion WebDAV |
| Mot de passe | Mot de passe ou mot de passe d’application |
| Mode d’authentification | Généralement `Basic`; utilisez `Digest` si le serveur l’exige |
| Dossier | Optionnel, par défaut `imgbed` |

## Utiliser un mot de passe d’application

Si le service permet les mots de passe d’application, préférez-les au mot de passe principal du compte.

![Créer un mot de passe d’application](../../image/upload/webdav/创建应用密码.png)

Conservez-le dès sa création, car il peut n’être affiché qu’une seule fois.

![Conserver le mot de passe](../../image/upload/webdav/记住新应用程序密码.png)

## Renseigner dans ImgBed

Dans Paramètres d’upload, choisissez `WebDAV`.

| Champ | Valeur |
| --- | --- |
| Nom du canal | Par exemple `NAS` ou `Koofr` |
| Endpoint | URL WebDAV complète avec `https://` |
| Utilisateur | Compte WebDAV |
| Mot de passe | Mot de passe ou mot de passe d’application |
| Authentification | Commencez avec `Basic` |
| Dossier | Optionnel, souvent `imgbed` |

![Configuration WebDAV](../../image/upload/webdav/填写配置.png)

## Gros fichiers

Le canal WebDAV utilise un upload par morceaux pour les gros fichiers.

| Taille | Méthode | Forme distante |
| --- | --- | --- |
| Jusqu’à 64 MiB | Upload normal | Un fichier complet |
| Plus de 64 MiB | Upload par morceaux | Dossier de morceaux avec plusieurs chunks |

Le serveur WebDAV n’a pas besoin de prendre en charge `partial update` ni l’écriture avec offset. ImgBed enregistre un manifeste de morceaux et les relit dans l’ordre lorsque le fichier est demandé.

L’URL du fichier ne change pas ; l’utilisateur continue à utiliser le lien `/file/...`.

## Vérification

| Point | État attendu |
| --- | --- |
| Carte du canal | Apparaît après enregistrement |
| Petit fichier | Apparaît dans le dossier WebDAV |
| Gros fichier | Crée un dossier de morceaux et des chunks |
| Capacité | Si le serveur le permet, usage et total s’affichent |

![Consultation de capacité](../../image/upload/webdav/查询额度成功.png)

Si la consultation de capacité échoue mais que les petits uploads fonctionnent, le canal peut tout de même être utilisable.

## Flux rapide

```text
Préparer Endpoint, utilisateur et mot de passe
-> Ouvrir Paramètres d’upload
-> Ajouter un canal
-> Choisir WebDAV
-> Renseigner Endpoint / utilisateur / mot de passe
-> Commencer avec Basic
-> Enregistrer
-> Consulter la capacité
-> Envoyer un fichier de test
```
