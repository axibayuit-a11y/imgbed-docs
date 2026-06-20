# Étiquetage automatique

L’étiquetage automatique se configure ici :

```text
Paramètres système -> Autres paramètres -> Étiquetage automatique
```

Il génère des tags pour les images afin de faciliter la recherche, les filtres de l’API aléatoire, la galerie publique et le contrôle d’accès par classification d’âge.

## Ce que cela fait

| Fonction | Description |
| --- | --- |
| Tags de contenu | Ajoute des tags de personnes, scènes, objets, style visuel, etc. |
| Tags de personnage | Utile pour les images d’anime et les illustrations |
| Tags d’orientation | Ajoute `landscape`, `portrait` ou `square` |
| Classification d’image | Enregistre les résultats `G/S/Q/E` |
| Étiquetage à l’upload | Traite automatiquement les nouvelles images |
| Étiquetage par lot | Ajoute des tags à d’anciennes images dans un ou plusieurs dossiers |

## À préparer

Vous avez besoin d’au moins une URL accessible de Hugging Face Space.

La méthode recommandée consiste à dupliquer le Space `wd-tagger` de SmilingWolf dans votre propre compte Hugging Face :

```text
https://huggingface.co/spaces/SmilingWolf/wd-tagger
```

Vous pouvez utiliser le Space public pour tester, mais il est partagé par de nombreux utilisateurs et peut être lent, en file d’attente ou indisponible. Pour un usage régulier, une copie personnelle est plus stable.

## Dupliquer le Space

1. Connectez-vous à Hugging Face.
2. Ouvrez `https://huggingface.co/spaces/SmilingWolf/wd-tagger`.

![Space public de SmilingWolf](../../image/other/微笑狼的公开仓库.png)

3. Ouvrez le menu en haut à droite.
4. Choisissez `Duplicate this Space`.
5. Gardez le nom ou utilisez un nom clair, par exemple `wd-tagger`.
6. Laissez-le en `Public` pour faciliter les appels depuis ImgBed.
7. Commencez avec le matériel gratuit.
8. Créez le Space et attendez la fin du build.

Copiez ensuite l’URL du navigateur et collez-la dans `Space URLs` dans ImgBed.

## Réglages conseillés

| Option | Recommandation |
| --- | --- |
| `Space URLs` | Une URL par ligne |
| Dossier cible | Vide pour tout traiter ; choisissez un dossier pour limiter |
| Modèle | Commencez avec `wd-swinv2-tagger-v3` |
| Seuil des tags généraux | Commencez autour de `0.35` |
| Seuil des personnages | Autour de `0.85` pour réduire les faux positifs |
| `MCut` | Laissez désactivé au début |
| Étiquetage à l’upload | Activez si les nouvelles images doivent être traitées automatiquement |

Si trop de tags sont générés, augmentez légèrement le seuil général. S’il y en a trop peu, baissez-le un peu.

## Étiquetage par lot

1. Renseignez `Space URLs`.
2. Sélectionnez un dossier cible.
3. Lancez l’étiquetage.
4. Attendez la fin de la progression.

Si le dossier cible est vide, ImgBed traite tous les dossiers.

## Étiquetage à l’upload

Avec cette option active, les nouvelles images appellent automatiquement les `Space URLs` configurés.

Si le Space est en file d’attente, l’upload peut se terminer avant l’étiquetage, qui continue ensuite en arrière-plan.

## Questions fréquentes

### Pourquoi dupliquer mon propre Space ?

Les Spaces publics sont partagés par beaucoup d’utilisateurs. Une copie personnelle est généralement plus rapide et plus stable pour votre site.

### Pourquoi les tags sont-ils en anglais ?

C’est normal. Les modèles SmilingWolf renvoient des tags en anglais. ImgBed les utilise pour la recherche, les filtres, l’API aléatoire et la galerie publique.

### À quoi sert la classification ?

La classification fonctionne avec le mode d’accès de sécurité. Par exemple, si vous limitez les visiteurs selon l’âge, la galerie et l’API aléatoire suivent ces règles.

## Flux rapide

```text
Se connecter à Hugging Face
-> Ouvrir SmilingWolf/wd-tagger
-> Dupliquer le Space
-> Attendre le build
-> Copier l’URL du Space
-> La coller dans Space URLs
-> Régler modèle et seuils
-> Lancer l’étiquetage ou activer l’étiquetage à l’upload
```
