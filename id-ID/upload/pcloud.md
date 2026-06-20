# Menambahkan pCloud Channel

## Paling Cocok Untuk

- Anda memiliki pCloud account dan ingin ImgBed menyimpan images di pCloud.
- Anda nyaman memakai pCloud account email dan password sebagai channel credentials.

## Yang Perlu Disiapkan Dahulu

| Requirement | Mengapa Dibutuhkan |
| --- | --- |
| pCloud account email | Digunakan untuk sign in ke pCloud API |
| pCloud password | Digunakan untuk sign in ke pCloud API |
| API host | Default `api.pcloud.com`. EU accounts bisa memakai `eapi.pcloud.com`. |
| Storage directory | Tempat files disimpan. Default adalah `imgbed`. |

## Di Mana Menambahkannya

1. Buka System Settings.
2. Buka Upload Settings.
3. Klik `Add Channel` di kanan atas.
4. Pilih `pCloud`.

## Field Reference

| Field | Purpose | Required |
| --- | --- | --- |
| Channel name | Mengidentifikasi pCloud channel ini, misalnya `Personal pCloud` | Yes |
| Account email | Email login pCloud Anda | Yes |
| Password | Password pCloud Anda | Yes |
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
7. Biarkan API host sebagai `api.pcloud.com`, atau pakai `eapi.pcloud.com` untuk EU accounts.
8. Biarkan storage directory sebagai `imgbed`, atau ubah ke folder pilihan Anda.
9. Save channel.

![Configure channel](../../image/upload/pcloud/配置渠道.png)

## Cara Memeriksa

| Check | Expected Result |
| --- | --- |
| Channel card | pCloud channel card muncul setelah save. |
| Channel switch | Switch di card tetap enabled. |
| Email display | Card menampilkan connected pCloud email. |
| Quota query | Setelah query berhasil, used dan total capacity ditampilkan. |
| Upload test | Test image muncul di configured pCloud storage directory. |

![Quota query success](../../image/upload/pcloud/查询额度成功.png)

## Troubleshooting

### Mengapa Bukan OAuth2?

pCloud OAuth2 tidak self-service secara default. Anda perlu email pCloud dan meminta mereka mengaktifkannya.

Flow pCloud OAuth2 saat ini juga tidak mendukung short-lived upload link workflow yang dibutuhkan ImgBed, jadi channel ini memakai login account email dan password.

### API Host Mana yang Harus Dipakai?

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
Siapkan pCloud email dan password
-> Buka Upload Settings
-> Add Channel
-> Pilih pCloud
-> Isi channel name / email / password
-> Biarkan API host sebagai api.pcloud.com kecuali account Anda di Europe
-> Biarkan storage directory sebagai imgbed kecuali perlu folder lain
-> Save
-> Query quota
-> Upload test image
```
