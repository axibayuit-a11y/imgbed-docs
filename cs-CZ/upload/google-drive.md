# Přidání kanálu Google Drive

## Co potřebujete před začátkem

Připravte si:

| Požadavek | Proč je potřeba |
| --- | --- |
| Účet Google | Pro přístup do Google Cloud a autorizaci Google Drive |
| Projekt Google Cloud | Pro zapnutí Drive API a vytvoření OAuth údajů |
| OAuth 2.0 klient | Umožní ImgBed získat `Client ID`, `Client Secret` a `Refresh Token` |
| Vaše doména ImgBed | Pro OAuth redirect URI. Musí odpovídat doméně, kterou skutečně používáte. |

## Nastavení

### Krok 1: Zapněte Google Drive API

1. Otevřete Google Cloud Console.
2. Vytvořte nový projekt nebo vyberte existující.
3. Přejděte do `APIs & Services`.
4. Klikněte na `Enable APIs and Services`.
5. Vyhledejte `Google Drive API`.
6. Otevřete ji a zapněte.

### Krok 2: Nastavte obrazovku souhlasu OAuth

1. V Google Cloud otevřete `Google Auth Platform`.
2. Vyplňte základní údaje v `Branding`, například název aplikace, e-mail podpory a kontakt vývojáře.
3. Otevřete `Audience`.
4. Pro většinu osobních self-hosted instalací zvolte `External`.
5. Pokud zvolíte `External`, přidejte Google účet, který chcete autorizovat, do `Test users`.
6. Otevřete `Data Access`.
7. Přidejte požadovaná oprávnění Google Drive.

### Krok 3: Vytvořte OAuth 2.0 klienta

1. V `Google Auth Platform` otevřete `Clients`.
2. Vytvořte nového klienta.
3. Typ aplikace nastavte na `Web application`.
4. Dejte klientovi srozumitelný název.
5. Do authorized JavaScript origins zadejte URL ImgBed, například:

```text
https://img.example.com
```

6. Do authorized redirect URIs zadejte:

```text
https://img.example.com/api/oauth/google/callback
```

![Vytvoření OAuth klienta](../../image/upload/google-drive/oa客户端id创建.png)

![Zadání domény a URL callbacku](../../image/upload/google-drive/填写oa客户端url信息.png)

Po vytvoření zkopírujte:

| Vygenerovaná hodnota | Pole ImgBed |
| --- | --- |
| Client ID | `Client ID` |
| Client Secret | `Client Secret` |

## Krok 4: Vyplňte kanál Google Drive

V Nastavení nahrávání zvolte `Google Drive` a vyplňte:

| Pole ImgBed | Co zadat |
| --- | --- |
| Název kanálu | Srozumitelný název, například `Main Google Drive` |
| Client ID | Client ID z Google Cloud |
| Client Secret | Client Secret z Google Cloud |
| Refresh Token | Zatím nechte prázdné. Získáte ho v dalším kroku. |
| Kořenový adresář | Volitelné. Výchozí je `imgbed`. |

![Vyplnění údajů klienta v ImgBed](../../image/upload/google-drive/粘贴回添加新渠道配置.png)

## Krok 5: Získejte Refresh Token

1. Klikněte na `Get Token`.
2. Vyberte Google účet, který chcete připojit.
3. Dokončete autorizační kroky.
4. Stránka callbacku zobrazí `Refresh Token`.
5. Zkopírujte ho.
6. Vraťte se do ImgBed a vložte ho do `Refresh Token`.

![Kopírování Refresh Token po autorizaci](../../image/upload/google-drive/授权完复制token.png)

Pokud později změníte Google účet, OAuth klienta nebo stará autorizace vyprší, nemusíte kanál mazat. Otevřete stránku úprav a klikněte na `Reauthorize`.

## Krok 6: Uložte kanál

Po vyplnění všech polí kanál uložte.

## Rychlý postup

```text
Open Google Cloud
-> Create or select a project
-> Enable Google Drive API
-> Configure Google Auth Platform
-> If Audience is External, add your Google account to Test users
-> Create a Web application OAuth client
-> Use https://your-domain.com/api/oauth/google/callback as the redirect URI
-> Fill Client ID and Client Secret into ImgBed
-> Click Get Token
-> Sign in with Google and authorize
-> Copy the Refresh Token from the callback page
-> Paste it back into ImgBed and save
-> Upload a test image
```

## Odkazy

1. Google OAuth Web Server Applications: https://developers.google.com/identity/protocols/oauth2/web-server
2. Google Workspace OAuth Consent Configuration: https://developers.google.com/workspace/guides/configure-oauth-consent
3. Google Drive API Auth Scopes: https://developers.google.com/workspace/drive/api/guides/api-specific-auth
