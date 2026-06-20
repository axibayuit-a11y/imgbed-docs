# Ajouter un canal pCloud

Le canal pCloud utilise votre compte pCloud comme destination de stockage.

## Quand l’utiliser

- Vous avez déjà un compte pCloud.
- Vous souhaitez enregistrer images ou fichiers dans votre espace pCloud.
- Vous acceptez d’utiliser e-mail et mot de passe comme identifiants du canal.

## À préparer

| Élément | Utilité |
| --- | --- |
| E-mail pCloud | Connexion à l’API pCloud |
| Mot de passe pCloud | Connexion à l’API pCloud |
| Hôte | Généralement `api.pcloud.com` ; pour l’Europe `eapi.pcloud.com` |
| Dossier | Optionnel, souvent `imgbed` |

## Où ajouter

1. Ouvrez Paramètres système.
2. Entrez dans Paramètres d’upload.
3. Cliquez sur `Ajouter un canal`.
4. Choisissez `pCloud`.

## Champs

| Champ | Valeur |
| --- | --- |
| Nom du canal | Par exemple `pCloud Main` |
| E-mail | E-mail de connexion pCloud |
| Mot de passe | Mot de passe pCloud |
| Hôte | Généralement `api.pcloud.com` |
| Dossier | Optionnel, par défaut `imgbed` |

L’hôte dépend de la région du compte.

| Région | Hôte |
| --- | --- |
| Par défaut / États-Unis | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

![Configuration pCloud](../../image/upload/pcloud/配置渠道.png)

## Vérification

Après enregistrement, la carte du canal doit apparaître. Si la consultation de capacité fonctionne, la connexion est correcte.

![Consultation de capacité](../../image/upload/pcloud/查询额度成功.png)

Envoyez ensuite une image de test et vérifiez qu’elle apparaît dans le dossier pCloud.

## Questions fréquentes

### Pourquoi pas OAuth2 ?

OAuth2 chez pCloud n’est pas disponible comme flux libre par défaut et nécessite une activation officielle. De plus, le flux actuel ne s’adapte pas bien aux URL temporaires d’upload nécessaires à ImgBed. Le canal utilise donc e-mail et mot de passe.

### Quel hôte utiliser ?

Généralement :

```text
api.pcloud.com
```

Pour les comptes européens :

```text
eapi.pcloud.com
```

## Flux rapide

```text
Préparer e-mail et mot de passe pCloud
-> Ouvrir Paramètres d’upload
-> Ajouter un canal
-> Choisir pCloud
-> Renseigner nom / e-mail / mot de passe
-> Vérifier l’hôte
-> Enregistrer
-> Consulter la capacité
-> Envoyer une image de test
```
