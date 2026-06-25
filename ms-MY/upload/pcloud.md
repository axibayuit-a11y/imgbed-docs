# Tambah Saluran pCloud

## Paling Sesuai Untuk

- Anda mempunyai akaun pCloud dan mahu ImgBed menyimpan imej dalam pCloud.
- Anda selesa menggunakan e-mel dan kata laluan akaun pCloud sebagai kelayakan saluran.

## Perkara Yang Diperlukan Dahulu

| Keperluan | Sebab Diperlukan |
| --- | --- |
| E-mel akaun pCloud | Digunakan untuk log masuk ke API pCloud |
| Kata laluan pCloud | Digunakan untuk log masuk ke API pCloud |
| API host | Lalai ialah `api.pcloud.com`. Akaun EU boleh menggunakan `eapi.pcloud.com`. |
| Direktori storan | Tempat fail disimpan. Lalai ialah `imgbed`. |

## Tempat Menambahkannya

1. Buka Tetapan Sistem.
2. Buka Tetapan Muat Naik.
3. Klik `Add Channel` di penjuru kanan atas.
4. Pilih `pCloud`.

## Rujukan Medan

| Medan | Tujuan | Wajib |
| --- | --- | --- |
| Nama saluran | Mengenal pasti saluran pCloud ini, contohnya `Personal pCloud` | Ya |
| E-mel akaun | E-mel log masuk pCloud anda | Ya |
| Kata laluan | Kata laluan pCloud anda | Ya |
| API host | Host API pCloud. Lalai ialah `api.pcloud.com`. | Tidak |
| Direktori storan | Direktori yang digunakan untuk menyimpan fail. Lalai ialah `imgbed`. | Tidak |

Pilih API host berdasarkan rantau akaun anda:

| Rantau Akaun | API Host |
| --- | --- |
| Lalai / US | `api.pcloud.com` |
| Eropah | `eapi.pcloud.com` |

## Langkah Persediaan

1. Buka Tetapan Muat Naik.
2. Klik `Add Channel`.
3. Pilih `pCloud`.
4. Masukkan nama saluran yang mudah anda kenali.
5. Masukkan e-mel akaun pCloud anda.
6. Masukkan kata laluan pCloud anda.
7. Kekalkan API host sebagai `api.pcloud.com`, atau gunakan `eapi.pcloud.com` untuk akaun EU.
8. Kekalkan direktori storan sebagai `imgbed`, atau tukar kepada folder pilihan anda.
9. Simpan saluran.

![Konfigurasikan saluran](../../image/upload/pcloud/配置渠道.png)

## Cara Mengesahkan

| Semakan | Hasil Dijangka |
| --- | --- |
| Kad saluran | Kad saluran pCloud muncul selepas disimpan. |
| Suis saluran | Suis pada kad kekal didayakan. |
| Paparan e-mel | Kad menunjukkan e-mel pCloud yang disambungkan. |
| Pertanyaan kuota | Selepas pertanyaan berjaya, kapasiti digunakan dan jumlah kapasiti dipaparkan. |
| Ujian muat naik | Imej ujian muncul dalam direktori storan pCloud yang dikonfigurasikan. |

![Pertanyaan kuota berjaya](../../image/upload/pcloud/查询额度成功.png)

## Penyelesaian Masalah

### Mengapa Bukan OAuth2?

pCloud OAuth2 bukan perkhidmatan kendiri secara lalai. Anda perlu menghantar e-mel kepada pCloud dan meminta mereka mendayakannya.

Aliran OAuth2 pCloud semasa juga tidak menyokong aliran kerja pautan muat naik jangka pendek yang diperlukan oleh ImgBed. Oleh itu, saluran ini menggunakan log masuk e-mel dan kata laluan akaun.

### API Host Mana Yang Patut Digunakan?

Lalai:

```text
api.pcloud.com
```

Untuk akaun EU:

```text
eapi.pcloud.com
```

## Aliran Pantas

```text
Prepare your pCloud email and password
-> Open Upload Settings
-> Add Channel
-> Choose pCloud
-> Fill channel name / email / password
-> Keep API host as api.pcloud.com unless your account is in Europe
-> Keep storage directory as imgbed unless you need another folder
-> Save
-> Query quota
-> Upload a test image
```
