# WebDAV Site Access (Beta)

WebDAV setting dalam Security Settings mendedahkan ImgBed site anda sebagai WebDAV endpoint.

Selepas diaktifkan, anda boleh menggunakan Windows, macOS, mobile file managers atau mana-mana WebDAV-compatible client untuk browse, upload, delete dan manage ImgBed files seperti remote folder.

Ini ialah WebDAV access entry untuk site. Ia berbeza daripada WebDAV storage channel dalam Upload Settings. Upload channel menyimpan files dalam third-party WebDAV service. Setting ini membolehkan ImgBed site menyediakan WebDAV access kepada clients.

## Di Mana Untuk Configure

Buka admin panel, kemudian pergi ke:

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

Selepas WebDAV diaktifkan, ImgBed menyediakan fixed access URL:

```text
https://your-domain.com/dav
```

Gunakan URL ini untuk connect ke ImgBed file directory.

Use cases yang sesuai:

- Browse ImgBed files terus dari computer file manager.
- Drag images ke WebDAV folder untuk upload.
- Susun ImgBed folders dari local file manager.
- Gunakan WebDAV-compatible software untuk sync atau manage images.
- Access ImgBed content tanpa membuka admin panel.

## Settings

### Enable

Menghidupkan WebDAV endpoint.

Apabila disabled, clients tidak boleh connect melalui WebDAV.

### Username dan Password

Credentials ini digunakan oleh WebDAV clients semasa connect.

Gunakan WebDAV username dan password yang khusus. Jangan guna semula admin password atau upload password.

Jika username atau password kosong, WebDAV clients tidak dapat connect dengan betul.

### Image Loading Mode

Image loading mode menentukan image URL mana yang WebDAV clients utamakan semasa membaca images.

Common choices:

| Mode | Description |
| --- | --- |
| Smart loading | ImgBed memilih berdasarkan context. Recommended untuk normal use. |
| Original | Mengutamakan original images. |
| Thumbnail | Mengutamakan thumbnails. Berguna untuk fast preview. |

Jika tidak pasti, kekalkan `Smart loading`.

### Default Channel

Default channel digunakan untuk WebDAV uploads.

Apabila anda copy files ke WebDAV directory dari Windows atau client lain, ImgBed upload files tersebut melalui selected default upload channel.

Jika tiada default channel dipilih, browsing mungkin berfungsi, tetapi uploads boleh gagal.

## Mengakses WebDAV Dalam Windows 11

Windows 11 boleh menambah WebDAV sebagai network location.

1. Buka `This PC`.
2. Pilih `Add a network location`.
3. Masukkan `https://your-domain.com/dav`.
4. Masukkan WebDAV username dan password apabila diminta.
5. Selesaikan wizard. WebDAV directory kemudian boleh dibuka dalam File Explorer.

![Add WebDAV in Windows 11](../../image/Safety/webdav在win11配置.png)

Selepas ditambah, WebDAV directory muncul dalam Windows File Explorer. Anda boleh open, copy dan manage files seperti folder biasa.

![WebDAV in Windows](../../image/Safety/webdav在win显示效果.png)

## Supported Operations

Selepas WebDAV connection berjaya, biasanya anda boleh:

- View files dan folders.
- Upload files.
- Create folders.
- Rename files atau folders.
- Move files.
- Delete files.

WebDAV sesuai untuk everyday access dan small-scale file management. Untuk large moves, bulk deletes atau organization yang kompleks, gunakan admin panel.

## Login Device Management

Successful WebDAV connections juga muncul di bawah WebDAV tab dalam Login Device Management.

Anda boleh review WebDAV clients di sana dan force old devices offline apabila perlu.

Jika WebDAV username atau password ditukar, clients lama perlu sign in semula.

## FAQ

### Windows Asyik Meminta Username dan Password

Semak:

- URL ialah `https://your-domain.com/dav`.
- Username dan password sepadan dengan WebDAV settings.
- WebDAV enabled.
- Site boleh diakses melalui HTTPS.

### Browsing Berfungsi, Tetapi Upload Gagal

Semak `Default channel`.

WebDAV uploads memerlukan default upload channel. Jika ia missing, disabled atau misconfigured, uploads boleh gagal.

### Access Speed Tidak Stabil

WebDAV performance bergantung pada client, network, file count dan default upload channel.

Jika directory mempunyai banyak files, susun ke dalam folders daripada menyimpan terlalu banyak files dalam satu directory.

## Security Recommendations

- Gunakan HTTPS untuk WebDAV access.
- Tetapkan strong password.
- Jangan share WebDAV password dengan orang yang tidak dipercayai.
- Matikan WebDAV apabila tidak digunakan.
- Bersihkan unused WebDAV devices secara berkala dalam Login Device Management.

## WebDAV Upload File Size

WebDAV clients tidak menggunakan large-file chunking flow milik browser upload page. Untuk files melebihi suggested limits di bawah, gunakan web upload page.

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
