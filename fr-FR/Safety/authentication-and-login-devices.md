# Authentification et gestion des appareils connectés

La gestion de l’authentification et la gestion des appareils connectés protègent le panneau d’administration ImgBed, l’entrée publique de téléversement et l’accès WebDAV.

Cette page permet de définir les identifiants d’accès, de consulter les appareils connectés et de révoquer les anciennes sessions si nécessaire.

## Où Configurer

Ouvrez le panneau d’administration, puis allez à :

```text
System Settings -> Security Settings
```

La page contient deux zones principales :

- Gestion de l’authentification
- Gestion des appareils connectés

![Gestion de l’authentification](../../image/Safety/认证管理界面.png)

## Rôle de la Gestion de l’Authentification

La gestion de l’authentification stocke les identifiants d’accès.

Il existe deux types :

- Authentification côté utilisateur
- Authentification côté administration

## Authentification Côté Utilisateur

L’authentification côté utilisateur correspond au mot de passe de téléversement.

Une fois ce mot de passe défini, les visiteurs ordinaires doivent le saisir avant d’utiliser la page de téléversement. C’est utile si vous ne voulez pas ouvrir la page publique de téléversement à tout le monde.

![Page de connexion utilisateur](../../image/Safety/用户端登录界面.png)

### Définir le Mot de Passe de Téléversement

Lorsqu’un mot de passe de téléversement est configuré :

- Les visiteurs doivent saisir le mot de passe avant d’utiliser la page de téléversement.
- Le téléversement n’est disponible qu’après acceptation du mot de passe.
- Si les sessions d’appareils côté utilisateur sont activées, ImgBed enregistre cet appareil côté utilisateur.

Modifier le mot de passe de téléversement invalide les anciennes sessions côté utilisateur. Les visiteurs doivent saisir à nouveau le nouveau mot de passe.

## Authentification Côté Administration

L’authentification côté administration utilise un nom d’utilisateur administrateur et un mot de passe.

Elle protège le panneau d’administration. En production, il est recommandé de toujours la configurer.

![Page de connexion administrateur](../../image/Safety/管理端登录界面.png)

### Définir les Identifiants Administrateur

Lorsqu’un nom d’utilisateur administrateur et un mot de passe sont configurés :

- L’ouverture du panneau d’administration nécessite une connexion.
- Une connexion réussie crée un enregistrement d’appareil administrateur.
- Vous pouvez consulter, nettoyer ou forcer la déconnexion des appareils dans la gestion des appareils connectés.

Modifier le nom d’utilisateur ou le mot de passe administrateur invalide les anciennes sessions d’administration. Vous devez vous reconnecter.

## Rôle de la Gestion des Appareils Connectés

La gestion des appareils connectés affiche les appareils qui se sont connectés.

Elle vous aide à vérifier :

- Quels appareils ont accédé au panneau d’administration.
- Quels appareils ont accédé à la page de téléversement côté utilisateur.
- Quels clients WebDAV se sont connectés.
- Si une session d’appareil est encore valide.
- Si d’anciens appareils doivent être déconnectés de force.

La page comporte trois onglets :

- Administration
- Utilisateur
- WebDAV

## Sécurité Globale des Cookies

En haut de la gestion des appareils connectés, vous pouvez configurer le comportement global des cookies.

### Durée de Vie du Cookie Utilisateur

Contrôle le nombre de jours pendant lesquels une connexion côté utilisateur peut rester active.

Par exemple, si vous la réglez sur 14 jours, les visiteurs n’ont généralement pas besoin de saisir à nouveau le mot de passe de téléversement pendant 14 jours.

### Durée de Vie du Cookie Administrateur

Contrôle le nombre de jours pendant lesquels une connexion administrateur peut rester active.

Par exemple, si vous la réglez sur 14 jours, les administrateurs n’ont généralement pas besoin de se reconnecter pendant 14 jours.

### Mode Secure

Lorsque le mode Secure est activé, les navigateurs n’envoient les cookies de connexion que via HTTPS.

Activez-le pour les sites HTTPS en production. Ne l’activez pas pour des tests locaux en HTTP, sinon vous pourriez observer un comportement du type « connexion réussie, mais déconnexion après actualisation ».

## Appareils de Connexion Administrateur

L’onglet Administration affiche les appareils connectés au panneau d’administration.

Les enregistrements d’appareils n’apparaissent qu’après la configuration des identifiants administrateur et l’accès au panneau via connexion.

Chaque carte d’appareil peut afficher :

- Les informations sur l’appareil et le navigateur
- L’IP de première connexion
- L’IP de dernière activité
- L’heure de connexion
- L’heure de dernière activité
- L’heure d’expiration
- L’état actuel

Si vous voyez un appareil inconnu, utilisez « Forcer la déconnexion » pour l’invalider.

## Nettoyer les Anciens Appareils

« Nettoyer les anciens appareils » supprime en lot les anciens enregistrements de connexion dans l’onglet actuel.

Utilisez cette action si vous pensez que d’anciennes sessions peuvent encore être actives sur d’autres appareils.

## Forcer la Déconnexion

« Forcer la déconnexion » invalide la session d’un appareil.

Après une déconnexion forcée :

- Les appareils administrateur doivent se reconnecter.
- Les appareils côté utilisateur doivent saisir à nouveau le mot de passe de téléversement.
- Les clients WebDAV doivent s’authentifier à nouveau.

Les appareils expirés ou invalides peuvent également être supprimés.

## Déconnecter l’Appareil Actuel

La carte de l’appareil actuel porte la marque « Appareil actuel ».

Après la déconnexion de l’appareil actuel :

- La session d’administration actuelle est déconnectée.
- La session côté utilisateur actuelle est déconnectée.

Vous devez vous reconnecter avant de continuer à utiliser cette zone.
