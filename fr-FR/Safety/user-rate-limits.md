# Limites de fréquence utilisateur

Les limites de fréquence contrôlent l’usage lorsqu’une IP ou un utilisateur effectue trop d’actions en peu de temps.

Sur un site avec upload public, cette fonction aide à réduire le spam, les abus et les envois massifs non souhaités.

## Où configurer

```text
Paramètres système -> Sécurité -> Limites de fréquence
```

![Limites de fréquence](../../image/other/用户频控截图.png)

## Options principales

| Option | Description |
| --- | --- |
| Activer | Active ou désactive la limite |
| Fenêtre de temps | Période utilisée pour compter les actions |
| Nombre maximal | Nombre d’actions autorisées dans la fenêtre |
| Action ciblée | Upload ou autre opération à limiter |
| Durée de blocage | Durée du blocage après dépassement |

## Exemple raisonnable

Pour un upload public, commencez avec une configuration modérée et ajustez selon l’usage réel.

```text
30 actions toutes les 10 minutes
blocage de 30 minutes en cas de dépassement
```

Ce type de réglage laisse travailler les utilisateurs normaux tout en freinant les comportements manifestement anormaux.

## Message de limite

Lorsqu’une limite est dépassée, l’utilisateur voit un message indiquant que l’action a été refusée.

![Message d’erreurs fréquentes](../../image/other/频繁报错提示.png)

## Conseils

- Une limite trop stricte peut bloquer des uploads légitimes par lot.
- Sur un site public, évitez de laisser l’upload totalement illimité.
- Combinez avec la géolocalisation IP et la gestion des utilisateurs pour enquêter sur les abus.
- En cas de pic temporaire attendu, vous pouvez assouplir la limite pendant une période.
