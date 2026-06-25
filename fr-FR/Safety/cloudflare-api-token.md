# Cloudflare API Token

Les identifiants Cloudflare API permettent à ImgBed de purger la mémoire intermédiaire Cloudflare CDN après des modifications de fichiers.

![Paramètres Cloudflare API Token](../../image/Safety/cloudflare%20api%20token截图.png)

## Où Configurer

Ouvrez le panneau d’administration, puis allez à :

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Vous devez renseigner :

- Zone ID
- Adresse e-mail du compte
- API Key

## Rôle de ce Paramètre

Cloudflare peut stocker en mémoire les URL publiques d’images.

La mémoire intermédiaire accélère la diffusion des images, mais il peut aussi laisser un ancien contenu visible pendant un certain temps après la suppression, le blocage, le remplacement ou le déplacement d’un fichier.

Une fois les identifiants Cloudflare API configurés, ImgBed tente de purger la mémoire intermédiaire Cloudflare associé lorsque ces opérations se terminent.

C’est utile lorsque :

- Vous supprimez une image et voulez que le lien public cesse de fonctionner dès que possible.
- Vous bloquez une image et voulez que les visiteurs ne voient plus le fichier source.
- Vous remplacez un fichier portant le même nom et voulez que les visiteurs voient plus vite la nouvelle version.
- Vous déplacez ou renommez des fichiers et voulez rafraîchir rapidement la mémoire intermédiaire des anciens chemins.
- Vous modifiez les règles d’accès public et voulez mettre à jour plus vite la mémoire intermédiaire de la galerie publique ou des images aléatoires.

## Que se Passe-t-il si Vous le Laissez Vide

ImgBed fonctionne normalement sans ce paramètre.

La seule différence est qu’ImgBed ne purgera pas activement la mémoire intermédiaire Cloudflare CDN. Les visiteurs peuvent continuer à voir l’ancien contenu jusqu’à l’expiration naturelle de la mémoire intermédiaire Cloudflare.

## Trouver le Zone ID

Le Zone ID est l’identifiant de zone Cloudflare du site utilisé par votre domaine ImgBed.

1. Connectez-vous au tableau de bord Cloudflare.
2. Ouvrez le site contenant votre domaine ImgBed.
3. Recherchez `Zone ID` sur la page de présentation du site.
4. Copiez-le dans le champ `Zone ID` d’ImgBed.

Il s’agit du Zone ID du site, pas de l’ID du compte.

## Adresse E-mail du Compte

Saisissez l’adresse e-mail que vous utilisez pour vous connecter à Cloudflare.

Elle doit correspondre à l’API Key fournie ci-dessous.

## API Key

Saisissez votre Cloudflare Global API Key.

1. Connectez-vous au tableau de bord Cloudflare.
2. Ouvrez votre profil.
3. Accédez à la page API Tokens.
4. Recherchez `Global API Key`.
5. Affichez-la et copiez-la.
6. Collez-la dans le champ `API Key` d’ImgBed.

![Afficher la Global API Key](../../image/Safety/查看全局令牌.png)

## Quand cela Prend Effet

Après avoir rempli les champs, enregistrez les paramètres.

Les modifications de fichiers futures tenteront automatiquement de purger la mémoire intermédiaire Cloudflare. Les opérations passées ne sont pas purgées rétroactivement. Si vous avez supprimé ou remplacé un fichier avant cette configuration, attendez l’expiration de la mémoire intermédiaire Cloudflare ou purgez-le manuellement dans Cloudflare.

## FAQ

### Est-ce Obligatoire ?

Non.

Si votre domaine n’utilise pas Cloudflare, ou si le délai de mémoire CDN ne vous dérange pas, vous pouvez le laisser vide.

### De Mauvais Identifiants Cassent-ils les Téléversements ?

En général, non.

Des identifiants incorrects empêchent seulement ImgBed de purger la mémoire intermédiaire Cloudflare. Le téléversement et l’accès normal aux fichiers devraient continuer à fonctionner.

### Pourquoi une Image Supprimée Peut-elle Encore s’Ouvrir ?

La raison la plus fréquente est que Cloudflare a encore l’ancien fichier en mémoire.

Avec des identifiants Cloudflare API corrects, ImgBed purge la mémoire intermédiaire de l’URL associée lorsqu’un fichier est supprimé.

### Pourquoi Vois-je Encore l’Ancienne Image Après le Remplacement d’un Fichier ?

C’est aussi généralement dû au mémoire CDN.

Après configuration de ce paramètre, ImgBed tente de purger la mémoire intermédiaire de l’ancienne URL lorsqu’un fichier portant le même nom est écrasé.

