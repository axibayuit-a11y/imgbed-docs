# Tambah pCloud Channel

## Paling Sesuai Untuk

- Anda mempunyai pCloud account dan mahu ImgBed menyimpan images dalam pCloud.
- Anda selesa menggunakan pCloud account email dan password sebagai channel credentials.

## Perkara Yang Perlu Disediakan Dahulu

| Requirement | Mengapa Diperlukan |
| --- | --- |
| pCloud account email | Digunakan untuk sign in ke pCloud API |
| pCloud password | Digunakan untuk sign in ke pCloud API |
| API host | Default ialah `api.pcloud.com`. EU accounts boleh menggunakan `eapi.pcloud.com`. |
| Storage directory | Tempat files disimpan. Default ialah `imgbed`. |

## Di Mana Untuk Menambahnya

1. Buka System Settings.
2. Buka Upload Settings.
3. Klik `Add Channel` di penjuru kanan atas.
4. Pilih `pCloud`.

## Field Reference

| Field | Purpose | Required |
| --- | --- | --- |
| Channel name | Mengenal pasti pCloud channel ini, contohnya `Personal pCloud` | Yes |
| Account email | pCloud login email anda | Yes |
| Password | pCloud password anda | Yes |
| API host | pCloud API host. Default `api.pcloud.com`. | No |
| Storage directory | Directory untuk menyimpan files. Default `imgbed`. | No |

Pilih API host berdasarkan account region:

| Account Region | API Host |
| --- | --- |
| Default / US | `api.pcloud.com` |
| Europe | `eapi.pcloud.com` |

## Langkah Setup

1. Buka Upload Settings.
2. Klik `Add Channel`.
3. Pilih `pCloud`.
4. Masukkan channel name yang mudah dikenali.
5. Masukkan pCloud account email.
6. Masukkan pCloud password.
7. Kekalkan API host sebagai `api.pcloud.com`, atau gunakan `eapi.pcloud.com` untuk EU accounts.
8. Kekalkan storage directory sebagai `imgbed`, atau tukar kepada folder pilihan anda.
9. Save channel.

![Configure channel](../../image/upload/pcloud/配置渠道.png)

## Cara Menyemak

| Check | Expected Result |
| --- | --- |
| Channel card | pCloud channel card muncul selepas save. |
| Channel switch | Switch pada card kekal enabled. |
| Email display | Card menunjukkan connected pCloud email. |
| Quota query | Selepas query berjaya, used dan total capacity dipaparkan. |
| Upload test | Test image muncul dalam configured pCloud storage directory. |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## Troubleshooting

### Mengapa Bukan OAuth2?

pCloud OAuth2 bukan self-service secara default. Anda perlu email pCloud dan minta mereka enable.

Flow pCloud OAuth2 semasa juga tidak menyokong short-lived upload link workflow yang diperlukan oleh ImgBed, jadi channel ini menggunakan login account email dan password.

### API Host Mana Patut Digunakan?

Default:

```text
api.pcloud.com
```

Untuk EU accounts:

```text
eapi.pcloud.com
```

## Quick Flow

```text
Sediakan pCloud email dan password
-> Buka Upload Settings
-> Add Channel
-> Pilih pCloud
-> Isi channel name / email / password
-> Kekalkan API host sebagai api.pcloud.com kecuali account anda di Europe
-> Kekalkan storage directory sebagai imgbed kecuali perlu folder lain
-> Save
-> Query quota
-> Upload test image
```
