# Étiquetage automatique

L’étiquetage automatique se configure ici :

```text
System Settings -> Other Settings -> Auto Tagging
```

Il génère automatiquement des étiquettes d’image. Elles sont utiles pour la recherche, le filtrage des images aléatoires, le filtrage de la galerie publique et le contrôle d’accès par classification d’âge.

## Ce que peut faire l’étiquetage automatique

| Fonction | Description |
| --- | --- |
| Générer des étiquettes de contenu | Ajoute des étiquettes pour les personnes, les scènes, les objets, le style artistique et les contenus visuels similaires. |
| Générer des étiquettes de personnages | Utile pour les images d’anime et les illustrations. |
| Ajouter des étiquettes d’orientation | Ajoute `landscape`, `portrait` ou `square`. |
| Ajouter une classification d’image | Enregistre les résultats `G/S/Q/E` pour les contenus généraux, sensibles, douteux ou explicites. |
| Étiquetage automatique à l’envoi | Les images nouvellement envoyées entrent automatiquement dans le flux d’étiquetage. |
| Étiquetage par lot | Ajoute des étiquettes aux anciennes images dans tous les dossiers ou dans des dossiers sélectionnés. |

## Ce dont vous avez besoin d’abord

Préparez au moins une URL accessible d’un Hugging Face Space.

La méthode recommandée consiste à dupliquer le Space `wd-tagger` de SmilingWolf dans votre propre compte Hugging Face :

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Vous pouvez utiliser temporairement le Space public, mais les Spaces publics sont partagés par de nombreux utilisateurs et peuvent être mis en file d’attente, ralentir ou devenir indisponibles. Un Space dupliqué dans votre propre compte est plus stable pour l’étiquetage automatique à long terme.

## Dupliquer le Space de SmilingWolf

1. Connectez-vous à Hugging Face.
2. Ouvrez `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Space public de SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Cliquez sur le menu à trois points dans l’angle supérieur droit.
4. Choisissez `Duplicate this Space`.
5. Conservez le nom par défaut du Space ou choisissez votre propre nom, par exemple `wd-tagger`.
6. Définissez la visibilité sur `Public`. Les Spaces publics sont plus faciles à appeler depuis ImgBed.
7. Conservez d’abord le matériel gratuit par défaut. N’effectuez une mise à niveau que si les files d’attente deviennent manifestes.
8. Créez le Space et attendez la fin de la compilation.

Une fois la compilation terminée, ouvrez la page de votre Space. L’URL ressemble généralement à ceci :

```text
https://huggingface.co/spaces/your-name/wd-tagger
```

Copiez l’URL du navigateur et collez-la dans `Space URLs` dans ImgBed.

## Renseigner plusieurs Space URLs

Saisissez une URL de Space par ligne.

Exemples :

| Valeur | Description |
| --- | --- |
| `https://huggingface.co/spaces/SmilingWolf/wd-tagger` | Space public de SmilingWolf. Adapté aux tests temporaires. |
| `https://huggingface.co/spaces/lintonxue00/wd-tagger` | URL copiée depuis une page Space. |
| `https://huggingface.co/spaces/your-name/wd-tagger` | Page Space que vous avez dupliquée dans votre propre compte. |

Vous pouvez saisir plusieurs URL. ImgBed utilise plusieurs Spaces ensemble, ce qui peut améliorer la vitesse.

Si un Space est temporairement indisponible, les autres peuvent continuer le traitement.

## Paramètres

| Option | Recommandation |
| --- | --- |
| `Space URLs` | Saisissez les URL de Space préparées. Utilisez-en au moins une. |
| Dossier cible | Laissez vide pour tous les dossiers. Sélectionnez un dossier uniquement si vous voulez traiter un répertoire précis. |
| Modèle de reconnaissance | Conservez `wd-swinv2-tagger-v3` par défaut. |
| Seuil des étiquettes générales | La valeur par défaut convient à la plupart des images. Une valeur plus basse produit plus d’étiquettes ; une valeur plus haute en produit moins. |
| Seuil des étiquettes de personnages | La valeur par défaut est prudente et aide à éviter les étiquettes de personnages incorrectes. |
| Seuil automatique `MCut` | Laissez-le désactivé au début. Activez-le lorsque vous voulez que le modèle décide automatiquement du nombre d’étiquettes. |
| Étiquetage automatique à l’envoi | Activez-le si les nouvelles images doivent recevoir automatiquement des étiquettes. |
| Lancer l’étiquetage | Lance manuellement l’étiquetage par lot des anciennes images. |

## Valeurs initiales recommandées

| Option | Valeur recommandée |
| --- | --- |
| Modèle de reconnaissance | `wd-swinv2-tagger-v3` |
| Seuil des étiquettes générales | `0.35` |
| Seuil des étiquettes de personnages | `0.85` |
| `MCut` | Désactivé au début |
| Étiquetage automatique à l’envoi | À activer si nécessaire |

S’il y a trop d’étiquettes, augmentez légèrement le seuil général.

S’il y a trop peu d’étiquettes, diminuez légèrement le seuil général.

## Étiquetage par lot

1. Renseignez `Space URLs`.
2. Sélectionnez un dossier cible.
3. Cliquez sur lancer l’étiquetage.
4. Attendez la fin de la progression.

Si le dossier cible est vide, ImgBed traite tous les dossiers.

L’étiquetage par lot convient surtout aux anciennes images. Pour les nouvelles images, activez l’étiquetage automatique à l’envoi afin de ne pas devoir le lancer manuellement à chaque fois.

## Étiquetage automatique à l’envoi

Une fois l’étiquetage automatique à l’envoi activé, les images nouvellement envoyées appellent automatiquement les `Space URLs` configurées.

C’est adapté à une utilisation à long terme.

Si votre Space est en file d’attente, l’envoi lui-même peut tout de même se terminer en premier, puis l’étiquetage continue ensuite.

## Quelles images sont traitées

L’étiquetage automatique traite principalement les fichiers image.

Les images qui possèdent déjà des étiquettes complètes, une orientation, une classification, une largeur et une hauteur sont ignorées pour éviter les appels Space inutiles.

ImgBed ne complète que les informations manquantes lorsque c’est possible. Par exemple, si seule l’orientation manque, il essaie de l’ajouter sans appeler tout le flux d’étiquetage de contenu.

## Questions fréquentes

### Pourquoi dupliquer mon propre Space ?

Les Spaces publics sont partagés par de nombreux utilisateurs. Votre propre Space dupliqué est principalement utilisé par votre site ImgBed ; il est donc généralement plus rapide et plus fiable.

### Le Space continue à démarrer

Après la première création, ou après une longue période d’inactivité, un Space peut avoir besoin de temps pour démarrer.

Ouvrez d’abord la page de votre Space. Une fois qu’il peut reconnaître normalement une image, revenez dans ImgBed et lancez l’étiquetage.

### Comment copier l’URL du Space ?

Ouvrez votre page Hugging Face Space et copiez l’adresse du navigateur.

Exemples :

```text
https://huggingface.co/spaces/lintonxue00/wd-tagger
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

### Puis-je ajouter plusieurs Spaces ?

Oui. Saisissez une URL de Space par ligne.

Plusieurs Spaces traitent les images ensemble et sont utiles lorsque vous avez beaucoup d’images.

### Pourquoi les étiquettes sont-elles en anglais ?

Les modèles SmilingWolf produisent des étiquettes en anglais. C’est attendu.

Les étiquettes sont principalement utilisées pour la recherche, le filtrage, l’API d’images aléatoires et les filtres de la galerie publique.

### À quoi servent les étiquettes de classification ?

Les résultats de classification fonctionnent avec le mode d’accès dans les paramètres de sécurité.

Par exemple, lorsque l’accès des visiteurs est limité par classification d’âge, la navigation publique et les fonctions d’images aléatoires filtrent les images selon ces règles.

## Flux rapide

```text
Sign in to Hugging Face
-> Open SmilingWolf/wd-tagger
-> Duplicate this Space
-> Wait for the Space to build
-> Copy your Space URL
-> Fill Space URLs in ImgBed
-> Choose model and thresholds
-> Start tagging or enable auto-tag on upload
```
