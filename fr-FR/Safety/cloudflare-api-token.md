# Configurer le Cloudflare API Token

Certaines fonctions d’ImgBed nécessitent un Cloudflare API Token. Il sert notamment à manipuler des ressources comme R2, Workers, D1 ou KV.

## À préparer

| Élément | Utilité |
| --- | --- |
| Compte Cloudflare | Créer l’API Token |
| Account ID | Identifier le compte contenant R2, Workers et autres ressources |
| Permissions nécessaires | Accorder uniquement les droits utiles |

## Créer un API Token

1. Connectez-vous au Cloudflare Dashboard.
2. Ouvrez `My Profile` depuis le profil en haut à droite.
3. Allez dans `API Tokens`.
4. Cliquez sur `Create Token`.
5. Choisissez les permissions nécessaires.
6. Limitez le token au compte ou à la zone concernée.
7. Copiez le token généré.

![Cloudflare API Token](../../image/Safety/cloudflare api token截图.png)

Le token peut n’être affiché qu’une seule fois. Conservez-le dans un endroit sûr.

## Différence avec Global API Key

Cloudflare propose aussi une Global API Key, mais un API Token est généralement préférable pour ImgBed.

| Type | Caractéristique |
| --- | --- |
| API Token | Permissions et périmètre limitables |
| Global API Key | Droits très larges sur le compte |

Un API Token avec des droits minimaux réduit les risques d’exploitation.

![Voir Global API Key](../../image/Safety/查看全局令牌.png)

## Renseigner dans ImgBed

Collez le Cloudflare API Token dans l’écran de configuration correspondant dans ImgBed, puis enregistrez.

Ensuite, utilisez la fonction concernée pour tester la connexion ou la capacité et vérifier que le token fonctionne.

## Bonnes pratiques

- Ne placez pas le token dans un dépôt public ni dans du code frontend.
- Limitez les permissions et les ressources au strict nécessaire.
- Supprimez dans Cloudflare les tokens inutilisés.
- En cas de doute sur une fuite, révoquez le token et générez-en un nouveau.
