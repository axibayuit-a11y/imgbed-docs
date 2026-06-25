# Paramètres de page

Les paramètres de page contrôlent l’affichage du site, les valeurs par défaut de la page de téléversement, les images d’arrière-plan et l’apparence du panneau d’administration.

## Paramètres globaux

| Option | Objectif |
| --- | --- |
| Titre du site | Titre affiché dans l’onglet du navigateur. |
| Icône du site | Petite icône affichée dans l’onglet du navigateur. |
| Nom ImgBed | Nom affiché sur les pages de l’interface publique. |
| Logo ImgBed | Image du logo affichée sur les pages de l’interface publique. |
| Lien du logo | URL ouverte lors d’un clic sur le logo ou l’avatar. |
| Intervalle de changement d’arrière-plan | Intervalle de rotation de plusieurs arrière-plans, en millisecondes. `60000` signifie 60 secondes. |
| Opacité de l’arrière-plan | Opacité de l’image d’arrière-plan de `0` à `1`. Les valeurs plus faibles donnent un rendu plus clair. |
| Préfixe d’URL par défaut | Préfixe utilisé lors de la génération des liens d’images. Une valeur vide signifie que le domaine actuel du site est utilisé. |

## Paramètres client

| Option | Objectif |
| --- | --- |
| Annonce | Annonce affichée en haut de la page de téléversement. HTML est pris en charge. |
| Canal de téléversement par défaut | Canal de téléversement sélectionné par défaut sur la page de téléversement. Vous pouvez également choisir Smart Dispatch. |
| Répertoire de téléversement par défaut | Répertoire de téléversement par défaut, par exemple `/user/`. Une valeur vide ou `/` signifie la racine. |
| Méthode de nommage par défaut | Stratégie par défaut de génération du nom de fichier après le téléversement. Voir ci-dessous. |
| Convertir en WebP par défaut | Convertit les images en WebP avant le téléversement. |
| Activer la compression par défaut | Compresse les images localement dans le navigateur avant le téléversement. |
| Seuil de compression par défaut | Compresse automatiquement lorsqu’une image dépasse cette taille, en MB. |
| Taille cible par défaut | Taille cible du fichier après compression, en MB. |
| Arrière-plan de la page de connexion | Image d’arrière-plan de la page de connexion utilisateur. |
| Arrière-plan de la page de téléversement | Image d’arrière-plan de la page de téléversement. |
| Lien du portail de pied de page | URL ouverte par le bouton du portail de pied de page. |
| Masquer le pied de page | Masque le pied de page de l’interface publique lorsque l’option est activée. |

## Paramètres d’administration

| Option | Objectif |
| --- | --- |
| Arrière-plan de la connexion administrateur | Image d’arrière-plan de la page de connexion administrateur. |
| Arrière-plan d’administration | Image d’arrière-plan des pages d’administration. Utilisez une URL d’image ou plusieurs URL. |
| Mode de chargement des images | Mode de chargement des aperçus dans la liste des fichiers d’administration. Le mode original charge les images originales. Le chargement intelligent privilégie les miniatures pour les images publiques et les originaux pour les images restreintes. |
| Source des miniatures | Service utilisé pour générer les miniatures : wsrv.nl, Cloudflare Image Resizing ou WordPress Photon. Cloudflare Image Resizing doit être activé dans Cloudflare avant d’être sélectionné. |
| Widget Live2D | Affiche un personnage Live2D dans le panneau d’administration. |
| Effet feu d’artifice au clic | Affiche un effet de feu d’artifice lors d’un clic sur la page. |
| Traînée d’étoiles du curseur | Affiche une traînée d’étoiles lors du déplacement de la souris. |

## Formats des images d’arrière-plan

L’arrière-plan de la page de connexion, l’arrière-plan de la page de téléversement et l’arrière-plan de la connexion administrateur prennent en charge ces formats :

| Valeur | Effet |
| --- | --- |
| `bing` | Utilise la rotation des fonds d’écran Bing. |
| `["https://example.com/1.jpg","https://example.com/2.jpg"]` | Fait tourner plusieurs images. |
| `["https://example.com/1.jpg"]` | Utilise une seule image d’arrière-plan. |
| `["https://your-domain.com/random?..."]` | Utilise un lien d’API d’image aléatoire. Vous pouvez configurer votre propre API d’image aléatoire dans les autres paramètres, puis coller ici le lien d’image aléatoire généré comme entrée d’arrière-plan unique. |

L’arrière-plan d’administration prend en charge les URL d’images. Plusieurs URL peuvent être séparées par des virgules anglaises comme indiqué sur la page. Une valeur vide signifie que l’arrière-plan par défaut est utilisé.

## Méthode de nommage par défaut

| Méthode | Résultat |
| --- | --- |
| Par défaut | Préfixe aléatoire basé sur l’heure + nom de fichier d’origine, par exemple `1760000000000_cat.png`. |
| Préfixe uniquement | Préfixe aléatoire basé sur l’heure et extension uniquement, par exemple `1760000000000.png`. |
| Nom d’origine uniquement | Conserve le nom de fichier d’origine, par exemple `cat.png`. En cas de doublon, ImgBed ajoute `(1)`, `(2)`, etc. |
| Lien court | Utilise un ID court de 8 caractères avec l’extension, par exemple `a1b2c3d4.png`. |
