# WebDAV Site Access (Beta)

WebDAV setting di Security Settings membuat ImgBed site Anda tersedia sebagai WebDAV endpoint.

Setelah diaktifkan, Anda bisa memakai Windows, macOS, mobile file managers, atau WebDAV-compatible client apa pun untuk browse, upload, delete, dan manage ImgBed files seperti remote folder.

Ini adalah WebDAV access entry untuk site. Ini berbeda dari WebDAV storage channel di Upload Settings. Upload channel menyimpan files di third-party WebDAV service. Setting ini membuat ImgBed site menyediakan WebDAV access untuk clients.

## Di Mana Mengonfigurasinya

Buka admin panel, lalu masuk ke:

```text
System Settings -> Security Settings -> WebDAV
```

Available settings:

- Enable
- Username
- Password
- Image loading mode
- Default channel

## Fungsi Feature Ini

Setelah WebDAV enabled, ImgBed menyediakan fixed access URL:

```text
https://your-domain.com/dav
```

Gunakan URL ini untuk connect ke ImgBed file directory.

Use cases yang cocok:

- Browse ImgBed files langsung dari file manager komputer.
- Drag images ke WebDAV folder untuk upload.
- Organize ImgBed folders dari local file manager.
- Gunakan WebDAV-compatible software untuk sync atau manage images.
- Access ImgBed content tanpa membuka admin panel.

## Settings

### Enable

Menyalakan WebDAV endpoint.

Saat disabled, clients tidak bisa connect lewat WebDAV.

### Username dan Password

Credentials ini digunakan oleh WebDAV clients saat connect.

Gunakan WebDAV username dan password khusus. Jangan pakai ulang admin password atau upload password.

Jika username atau password kosong, WebDAV clients tidak dapat connect dengan benar.

### Image Loading Mode

Image loading mode menentukan image URL mana yang diprioritaskan WebDAV clients saat membaca images.

Common choices:

| Mode | Description |
| --- | --- |
| Smart loading | ImgBed memilih berdasarkan context. Recommended untuk normal use. |
| Original | Memprioritaskan original images. |
| Thumbnail | Memprioritaskan thumbnails. Berguna untuk fast preview. |

Jika ragu, gunakan `Smart loading`.

### Default Channel

Default channel digunakan untuk WebDAV uploads.

Saat Anda copy files ke WebDAV directory dari Windows atau client lain, ImgBed upload files tersebut melalui selected default upload channel.

Jika tidak ada default channel yang dipilih, browsing mungkin berjalan, tetapi uploads bisa fail.

## Mengakses WebDAV di Windows 11

Windows 11 dapat menambahkan WebDAV sebagai network location.

1. Buka `This PC`.
2. Pilih `Add a network location`.
3. Masukkan `https://your-domain.com/dav`.
4. Masukkan WebDAV username dan password saat diminta.
5. Selesaikan wizard. WebDAV directory kemudian bisa dibuka di File Explorer.

![Add WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

Setelah ditambahkan, WebDAV directory muncul di Windows File Explorer. Anda bisa open, copy, dan manage files seperti folder biasa.

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Supported Operations

Setelah WebDAV connection berhasil, biasanya Anda bisa:

- View files dan folders.
- Upload files.
- Create folders.
- Rename files atau folders.
- Move files.
- Delete files.

WebDAV cocok untuk everyday access dan small-scale file management. Untuk large moves, bulk deletes, atau organization yang kompleks, gunakan admin panel.

## Login Device Management

Successful WebDAV connections juga muncul di WebDAV tab dalam Login Device Management.

Anda bisa review WebDAV clients di sana dan force old devices offline jika perlu.

Jika WebDAV username atau password diubah, clients lama perlu sign in lagi.

## FAQ

### Windows Terus Meminta Username dan Password

Periksa:

- URL adalah `https://your-domain.com/dav`.
- Username dan password cocok dengan WebDAV settings.
- WebDAV enabled.
- Site bisa diakses lewat HTTPS.

### Browsing Berjalan, tetapi Upload Gagal

Periksa `Default channel`.

WebDAV uploads memerlukan default upload channel. Jika missing, disabled, atau misconfigured, uploads bisa fail.

### Access Speed Tidak Stabil

WebDAV performance bergantung pada client, network, file count, dan default upload channel.

Jika sebuah directory punya banyak files, organize ke folders daripada menyimpan terlalu banyak files dalam satu directory.

## Security Recommendations

- Gunakan HTTPS untuk WebDAV access.
- Set strong password.
- Jangan share WebDAV password dengan orang yang tidak trusted.
- Matikan WebDAV saat tidak digunakan.
- Bersihkan unused WebDAV devices secara berkala di Login Device Management.

## WebDAV Upload File Size

WebDAV clients tidak memakai large-file chunking flow milik browser upload page. Untuk files di atas suggested limits berikut, gunakan web upload page.

| Default Upload Channel | Suggested Single-File Limit for WebDAV |
| --- | ---: |
| Telegram | 20 MB |
| Discord | 10 MB |
| Cloudflare R2 | 30 MB |
| S3 | 30 MB |
| GitHub Releases | 64 MB |
| GitLab Packages | 64 MB |
| Hugging Face | 20 MB |
| OneDrive | 30 MB |
| Google Drive | 30 MB |
| Dropbox | 30 MB |
| Yandex Disk | 30 MB |
| pCloud | 30 MB |
| WebDAV | 64 MB |
