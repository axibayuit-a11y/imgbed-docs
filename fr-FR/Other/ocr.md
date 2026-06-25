# OCR

L’OCR extrait le texte des images, des scans et des captures d’écran de documents.

Après la reconnaissance, vous pouvez copier le résultat, l’exporter au format `Markdown`, `PDF` ou `Word`, ou regrouper plusieurs formats dans un même téléchargement.

## Ce que l’OCR peut faire

| Fonctionnalité | Description |
| --- | --- |
| Reconnaissance de texte dans les images | Extrait le texte des images, captures d’écran et scans. |
| Reconnaissance de mise en page de documents | Mieux adaptée aux tableaux, formules, tampons et mises en page mixtes texte-image. |
| Plusieurs services | Prend en charge Baidu PaddleOCR, Microsoft Azure Vision et Google Vision. |
| Copie des résultats | Copie le texte reconnu après le traitement. |
| Export de fichiers | Exporte en `Markdown`, `PDF` et `Word`. |
| Regroupement par lot | Après la reconnaissance de plusieurs fichiers, permet de télécharger les résultats sous forme d’archive. |

## Configurer d’abord les services OCR

Ouvrez :

```text
System Settings -> Other Settings -> OCR
```

![Géolocalisation IP et OCR](../../image/other/ip定位和ocr文字识别.png)

Renseignez les identifiants des services que vous souhaitez utiliser :

| Service | Informations à saisir | Idéal pour |
| --- | --- | --- |
| Baidu PaddleOCR | `PaddleOCR Token` | Choix recommandé en premier. Adapté aux documents, images, tableaux et mises en page mixtes. |
| Microsoft Azure Vision | `Azure Vision Endpoint` et `Azure Vision API Key` | Utile si vous utilisez déjà les services cloud Microsoft. |
| Google Vision | `Google Vision API Key`. Le compte de service `JSON` sert uniquement à consulter le quota. | Utile si vous utilisez les services Google Cloud. |

Enregistrez après avoir saisi les identifiants.

Vous pouvez ne configurer qu’un seul service pour un premier test. Il n’est pas nécessaire de configurer les trois.

## Configuration de Google Vision

La configuration Google comporte deux parties :

| Objectif | Exigence |
| --- | --- |
| Utiliser l’OCR | Activez `Cloud Vision API`, puis créez une `API Key`. |
| Consulter l’utilisation | Créez un compte de service, attribuez-lui `Monitoring Viewer`, puis téléchargez le `JSON` du compte de service. |

![Clé API Google et compte de service](../../image/other/谷歌api秘钥和服务账号截图.png)

### Utiliser Google pour l’OCR

1. Ouvrez Google Cloud Console.
2. Accédez à `APIs & Services`.
3. Ouvrez `Library`, recherchez `Cloud Vision API`, puis activez-la.
4. Revenez à `Credentials`.
5. Créez une `API Key`.
6. Ouvrez l’API Key et copiez-la.
7. Collez-la dans `Google Vision API Key` dans ImgBed.
8. Enregistrez.

Vous pouvez ensuite choisir Google Vision dans la boîte de dialogue OCR.

### Consulter l’utilisation de Google

La consultation du quota n’est pas nécessaire pour la reconnaissance.

Elle indique seulement, de manière approximative, combien d’appels Google Vision ont été utilisés au cours des 30 derniers jours.

1. Dans Google Cloud Console, ouvrez `IAM & Admin`.
2. Ouvrez `Service Accounts`.
3. Créez un compte de service, par exemple `vision-monitor`.
4. Attribuez-lui le rôle `Monitoring Viewer`.
5. Ouvrez les détails du compte de service et créez une clé.
6. Choisissez `JSON`.
7. Téléchargez le fichier JSON généré.
8. Revenez dans ImgBed et importez-le dans le champ `JSON` du compte de service (facultatif).
9. Une fois l’import réussi, cliquez sur la consultation du quota.

Après l’import, ImgBed affiche le nom du projet auquel appartient le compte de service. Lors de la consultation de l’utilisation, ImgBed lit les données de monitoring Google et affiche le nombre d’appels du mois en cours.

En résumé :

| Élément | Rôle |
| --- | --- |
| `Google Vision API Key` | Effectue la reconnaissance OCR. |
| Fichier `JSON` du compte de service | Consulte le nombre d’appels Google Vision utilisés. |
| Rôle `Monitoring Viewer` | Autorise le compte de service à lire les données d’utilisation. |

## Obtenir un token Baidu PaddleOCR

Baidu PaddleOCR nécessite un token d’accès.

![Obtenir le token PaddleOCR](../../image/other/获取飞浆令牌.png)

Ouvrez la fenêtre d’appel `API` sur la page Baidu PaddleOCR, cliquez pour obtenir un token, puis copiez-le.

Revenez dans ImgBed, collez-le dans `PaddleOCR Token`, puis enregistrez.

## Lancer la reconnaissance

Dans la gestion des fichiers, sélectionnez une image ou une capture d’écran de document, puis cliquez sur `OCR`.

![Reconnaissance OCR](../../image/other/ocr识别截图.png)

Dans la boîte de dialogue, choisissez le service et le modèle de reconnaissance.

Choix courants de modèles PaddleOCR :

| Modèle | Idéal pour |
| --- | --- |
| `PP-StructureV3` | Valeur par défaut recommandée. Adapté aux documents, tableaux, formules, tampons et mises en page mixtes. |
| `PP-OCRv5` | Images simples, texte ordinaire et reconnaissance légère. |
| `PaddleOCR-VL` | Contenu multilingue, images complexes et contenus proches de graphiques. |
| `PaddleOCR-VL-1.5` | Pages de documents plus complexes et restauration de mise en page. |

Si vous hésitez, commencez par `PP-StructureV3`.

## Options avancées

| Option | Description |
| --- | --- |
| Correction de l’orientation | À utiliser lorsque l’image est tournée ou inclinée. |
| Aplatissement du document | À utiliser pour les documents photographiés présentant une courbure ou une inclinaison. |
| Détection de la mise en page | À utiliser lorsque vous voulez préserver les titres, paragraphes, tableaux et la structure des images. |
| Reconnaissance de graphiques | À utiliser lorsque l’image contient des graphiques ou des structures complexes. |
| Amélioration du `Markdown` | Rend le Markdown exporté plus facile à lire. |

Pour des captures d’écran ordinaires, gardez un minimum d’options. Pour les scans de documents, activez davantage d’options liées aux documents.

## Voir les résultats

Une fois la reconnaissance terminée, la boîte de dialogue affiche le résultat.

Vous pouvez le copier directement ou choisir des formats d’export.

![Reconnaissance PDF](../../image/other/pdf识别截图.png)

Pour les pages de documents, le `PDF` exporté peut préserver l’apparence de la page tout en conservant du texte recherchable. C’est utile pour archiver des scans et retrouver du contenu plus tard.

## Choisir un format d’export

| Format | Idéal pour |
| --- | --- |
| `Markdown (.md)` | Notes, systèmes de documentation et édition ultérieure. |
| `PDF (.pdf)` | Préservation de l’apparence des pages et résultats de documents scannés. |
| `Word (.docx)` | Poursuite de la mise en page, modification du texte et transmission à d’autres personnes. |
| Tout exporter | Enregistre plusieurs formats et l’image d’origine, adapté aux archives importantes. |

Si vous avez seulement besoin du texte, exportez en Markdown.

Si vous avez besoin de préserver l’apparence de la page, utilisez PDF ou Word.

## Sortie Word

Les documents Word exportés peuvent être ouverts et modifiés avec un logiciel bureautique.

![Résultat Word](../../image/other/word识别结果.png)

Certains documents incluent les images reconnues, les titres et les paragraphes dans la sortie Word.

La qualité de reconnaissance dépend de la netteté de l’image d’origine, du choix du modèle et de la complexité du document.

## Types de fichiers les plus adaptés à l’OCR

| Type de fichier | Recommandation |
| --- | --- |
| Captures d’écran nettes | Reconnaître directement. |
| Scans | Privilégiez `PP-StructureV3`. |
| Documents photographiés | Activez la correction de l’orientation et l’aplatissement du document. |
| Tableaux, formules, tampons | Privilégiez les modèles structurés. |
| Images simples avec texte court | `PP-OCRv5` suffit généralement. |

Des images plus nettes avec un texte plus droit produisent généralement de meilleurs résultats.

## Cas courants

| Cas | Signification |
| --- | --- |
| La reconnaissance échoue | Vérifiez que le token ou la clé du service a été enregistré. |
| La reconnaissance est lente | Les documents complexes et les grandes images prennent plus de temps. |
| Le tableau est incomplet | Essayez un modèle structuré. |
| Le texte contient des erreurs | Le flou, les reflets et l’inclinaison augmentent les erreurs de reconnaissance. Essayez une image plus nette. |
| La sortie Word contient beaucoup d’images | Les modèles structurés peuvent préserver certaines images reconnues. C’est normal. |

### Échec de la consultation du quota Google

Vérifiez :

1. Le compte de service `JSON` a été importé.
2. Le compte de service dispose du rôle `Monitoring Viewer`.
3. `Cloud Vision API` est activée pour le projet.

Si vous avez seulement besoin de l’OCR et pas de la consultation de l’utilisation, vous pouvez ignorer le JSON du compte de service et renseigner uniquement `Google Vision API Key`.

## Flux rapide

```text
Open System Settings
-> Open Other Settings
-> Fill OCR service credentials
-> Save
-> Return to File Management
-> Select a file and click OCR
-> Choose a model
-> Wait for recognition
-> Copy results or export Markdown / PDF / Word
```
