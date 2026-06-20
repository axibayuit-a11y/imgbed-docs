# OCR et reconnaissance de texte

L’OCR reconnaît du texte dans les images, PDF et documents Word afin de faciliter la recherche et la vérification de contenu.

## Où configurer

```text
Paramètres système -> Autres paramètres -> OCR
```

![Paramètres OCR](../../image/other/ip定位和ocr文字识别.png)

## Ce que cela permet

| Fonction | Description |
| --- | --- |
| OCR d’image | Lit le texte dans les captures d’écran et photos |
| OCR de PDF | Extrait le texte des fichiers PDF |
| OCR de Word | Lit le contenu de documents Word |
| Aide à la recherche | Rend le texte reconnu utilisable dans la recherche |
| Traitement par lot | Traite des fichiers existants en masse |

![Résultat OCR](../../image/other/ocr识别截图.png)

## Préparation

Selon le service OCR utilisé, vous aurez besoin d’une clé API ou d’un token. Renseignez les identifiants demandés dans l’interface.

Si vous utilisez un service externe comme PaddleOCR, vérifiez que les identifiants sont corrects et qu’il reste du quota.

![Obtenir le token](../../image/other/获取飞浆令牌.png)

## Utilisation

1. Activez l’OCR.
2. Renseignez la clé du service choisi.
3. Enregistrez la configuration.
4. Envoyez de nouveaux fichiers ou lancez l’OCR sur des fichiers existants.
5. Consultez les résultats dans le détail du fichier ou via la recherche.

![Résultat Word](../../image/other/word识别结果.png)

![Reconnaissance PDF](../../image/other/pdf识别截图.png)

## Conseils

- Les images trop petites, floues ou inclinées réduisent la précision.
- Les gros PDF et documents Word peuvent prendre plus de temps.
- Si le quota de l’API est épuisé, la reconnaissance peut échouer.
- Utilisez l’OCR comme aide ; pour les informations importantes, vérifiez aussi le fichier original.
