# Gestion de l’authentification et des appareils connectés

La gestion de l’authentification permet de suivre les connexions, les sessions actives et les appareils connectés au panneau ou aux pages utilisateur.

## Connexion administrateur

L’administrateur se connecte depuis l’écran de connexion du panneau pour gérer les fichiers et paramètres.

![Connexion administrateur](../../image/Safety/管理端登录界面.png)

Le compte administrateur dispose de droits élevés. Protégez soigneusement ses identifiants.

## Connexion utilisateur

Un écran de connexion utilisateur est également disponible.

![Connexion utilisateur](../../image/Safety/用户端登录界面.png)

Si vous utilisez l’upload public ou un accès limité, la connexion utilisateur aide à identifier qui a effectué chaque action.

## Écran d’authentification

L’écran de gestion affiche les sessions et appareils connectés.

![Gestion de l’authentification](../../image/Safety/认证管理界面.png)

## Ce qu’il faut vérifier

| Champ | Description |
| --- | --- |
| Appareil connecté | Appareils avec session active |
| IP / localisation | Indication de l’origine de l’accès |
| Dernier accès | Aide à savoir si l’appareil est encore utilisé |
| Révoquer | Ferme une session ancienne ou suspecte |

## Si vous voyez quelque chose de suspect

1. Révoquez la session de l’appareil.
2. Changez le mot de passe administrateur et les tokens associés.
3. Vérifiez les identifiants Cloudflare, GitHub et des canaux de stockage.
4. Régénérez les API Tokens si nécessaire.

## Conseils d’exploitation

- Ne laissez pas de session ouverte sur un ordinateur partagé.
- Gardez peu de comptes avec droits administrateur.
- Vérifiez régulièrement les appareils connectés.
- Supprimez les sessions anciennes ou inconnues.
