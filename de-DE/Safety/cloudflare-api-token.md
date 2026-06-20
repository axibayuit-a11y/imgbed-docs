# Cloudflare API Token einrichten

Einige ImgBed-Funktionen benötigen einen Cloudflare API Token. Er wird zum Beispiel für R2, Workers, D1, KV und weitere Cloudflare-Ressourcen verwendet.

## Vorbereitung

| Voraussetzung | Zweck |
| --- | --- |
| Cloudflare-Konto | API Token erstellen |
| Account ID | Konto mit R2, Workers und anderen Ressourcen identifizieren |
| Benötigte Rechte | Nur die Rechte vergeben, die die Funktion braucht |

## API Token erstellen

1. Melde dich im Cloudflare Dashboard an.
2. Öffne `My Profile` über das Profil oben rechts.
3. Gehe zu `API Tokens`.
4. Klicke auf `Create Token`.
5. Wähle die nötigen Berechtigungen.
6. Beschränke den Token auf das passende Konto oder die passende Zone.
7. Kopiere den erzeugten Token.

![Cloudflare API Token](../../image/Safety/cloudflare api token截图.png)

Der Token wird möglicherweise nur einmal angezeigt. Speichere ihn sicher.

## Unterschied zum Global API Key

Cloudflare bietet auch einen Global API Key an. Für ImgBed ist ein API Token in der Regel besser.

| Typ | Eigenschaft |
| --- | --- |
| API Token | Rechte und Geltungsbereich lassen sich einschränken |
| Global API Key | Hat sehr weitreichende Rechte im Konto |

Ein API Token mit minimalen Rechten senkt das Betriebsrisiko.

![Global API Key anzeigen](../../image/Safety/查看全局令牌.png)

## In ImgBed eintragen

Füge den Cloudflare API Token in der passenden ImgBed-Konfiguration ein und speichere.

Teste danach die jeweilige Funktion, zum Beispiel Verbindung oder Kapazität, um die Gültigkeit des Tokens zu prüfen.

## Gute Praxis

- Lege den Token nicht in öffentlichen Repositories oder Frontend-Code ab.
- Beschränke Rechte und Ressourcen auf das Nötigste.
- Lösche nicht mehr verwendete Tokens in Cloudflare.
- Bei Verdacht auf Verlust den Token sofort widerrufen und neu erstellen.
