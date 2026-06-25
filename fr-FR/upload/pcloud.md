# Ajouter un canal pCloud

## Cas d’utilisation

- Vous disposez d’un compte pCloud et vous voulez qu’ImgBed stocke les images dans pCloud.
- Vous acceptez d’utiliser l’e-mail et le mot de passe de votre compte pCloud comme identifiants du canal.

## Ce qu’il faut d’abord

| Élément | Pourquoi c’est nécessaire |
| --- | --- |
| E-mail du compte pCloud | Utilisé pour se connecter à l’API pCloud |
| Mot de passe pCloud | Utilisé pour se connecter à l’API pCloud |
| Hôte API | La valeur par défaut est `api.pcloud.com`. Les comptes de l’UE peuvent utiliser `eapi.pcloud.com`. |
| Répertoire de stockage | Emplacement de stockage des fichiers. La valeur par défaut est `imgbed`. |

## Où l’ajouter

1. Ouvrez les paramètres système.
2. Ouvrez les paramètres de téléversement.
3. Cliquez sur Ajouter un canal en haut à droite.
4. Choisissez `pCloud`.

## Référence des champs

| Champ | Rôle | Obligatoire |
| --- | --- | --- |
| Nom du canal | Identifie ce canal pCloud, par exemple `Personal pCloud` | Oui |
| E-mail du compte | E-mail de connexion pCloud | Oui |
| Mot de passe | Mot de passe pCloud | Oui |
| Hôte API | Hôte de l’API pCloud. La valeur par défaut est `api.pcloud.com`. | Non |
| Répertoire de stockage | Répertoire utilisé pour stocker les fichiers. La valeur par défaut est `imgbed`. | Non |

Choisissez l’hôte API selon la région de votre compte :

| Région du compte | Hôte API |
| --- | --- |
| Par défaut / États-Unis | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## Étapes de configuration

1. Ouvrez les paramètres de téléversement.
2. Cliquez sur Ajouter un canal.
3. Choisissez `pCloud`.
4. Saisissez un nom de canal reconnaissable.
5. Saisissez l’e-mail de votre compte pCloud.
6. Saisissez votre mot de passe pCloud.
7. Conservez l’hôte API sur `api.pcloud.com`, ou utilisez `eapi.pcloud.com` pour les comptes de l’UE.
8. Conservez le répertoire de stockage sur `imgbed`, ou remplacez-le par le dossier de votre choix.
9. Enregistrez le canal.

![Configurer le canal](../../image/upload/pcloud/配置渠道.png)

## Vérification

| Vérification | Résultat attendu |
| --- | --- |
| Carte du canal | La carte du canal pCloud apparaît après l’enregistrement. |
| Interrupteur du canal | L’interrupteur de la carte reste activé. |
| Affichage de l’e-mail | La carte affiche l’e-mail pCloud connecté. |
| Requête de quota | Après une requête réussie, la capacité utilisée et la capacité totale sont affichées. |
| Test de téléversement | Une image de test apparaît dans le répertoire de stockage pCloud configuré. |

![Requête de quota réussie](../../image/upload/pcloud/查询额度成功.png)

## Dépannage

### Pourquoi pas OAuth2 ?

pCloud OAuth2 n’est pas disponible en libre-service par défaut. Vous devez écrire à pCloud pour demander son activation.

Le flux OAuth2 actuel de pCloud ne prend pas non plus en charge le flux de liens de téléversement de courte durée dont ImgBed a besoin. Ce canal utilise donc une connexion par e-mail et mot de passe.

### Quel hôte API utiliser ?

Par défaut :

```text
api.pcloud.com
```

Pour les comptes de l’UE :

```text
eapi.pcloud.com
```

## Flux rapide

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
