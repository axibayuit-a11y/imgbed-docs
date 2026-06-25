# Cloudflare API Token

Bukti kelayakan Cloudflare API membolehkan ImgBed membersihkan storan sementara CDN Cloudflare selepas fail berubah.

![Tetapan Cloudflare API Token](../../image/Safety/cloudflare%20api%20token截图.png)

## Tempat Mengkonfigurasi

Buka panel pentadbir, kemudian pergi ke:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Anda perlu mengisi:

- Zone ID
- E-mel akaun
- API Key

## Fungsi Tetapan Ini

Cloudflare boleh menyimpan URL imej awam dalam storan sementara.

Storan sementara menjadikan penghantaran imej lebih pantas, tetapi juga boleh menyebabkan kandungan lama masih kelihatan seketika selepas anda memadam, menyekat, mengganti atau memindahkan fail.

Selepas bukti kelayakan Cloudflare API dikonfigurasi, ImgBed akan cuba membersihkan storan sementara Cloudflare yang berkaitan apabila operasi tersebut selesai.

Ini berguna apabila:

- Anda memadam imej dan mahu pautan awam berhenti berfungsi secepat mungkin.
- Anda menyekat imej dan mahu pelawat berhenti melihat fail asal.
- Anda mengganti fail dengan nama yang sama dan mahu pelawat melihat versi baharu dengan lebih cepat.
- Anda memindahkan atau menamakan semula fail dan mahu storan sementara laluan lama disegar semula dengan lebih cepat.
- Anda mengubah peraturan akses awam dan mahu storan sementara galeri awam atau imej rawak dikemas kini dengan lebih cepat.

## Jika Dibiarkan Kosong

ImgBed tetap berjalan seperti biasa tanpa tetapan ini.

Perbezaannya, ImgBed tidak akan membersihkan storan sementara CDN Cloudflare secara aktif. Pelawat mungkin masih melihat kandungan lama sehingga storan sementara Cloudflare tamat secara semula jadi.

## Cara Mencari Zone ID

Zone ID ialah Cloudflare Zone ID bagi tapak yang digunakan oleh domain ImgBed anda.

1. Log masuk ke papan pemuka Cloudflare.
2. Buka tapak yang mengandungi domain ImgBed anda.
3. Cari `Zone ID` pada halaman ringkasan tapak.
4. Salin ke medan `Zone ID` dalam ImgBed.

Ini ialah Zone ID tapak, bukan account ID.

## E-mel Akaun

Masukkan alamat e-mel yang anda gunakan untuk log masuk ke Cloudflare.

E-mel ini mesti sepadan dengan API Key di bawah.

## API Key

Masukkan Cloudflare Global API Key.

1. Log masuk ke papan pemuka Cloudflare.
2. Buka profil.
3. Pergi ke halaman API Tokens.
4. Cari `Global API Key`.
5. Paparkan dan salin.
6. Tampal ke medan `API Key` dalam ImgBed.

![Lihat Global API Key](../../image/Safety/查看全局令牌.png)

## Bila Ia Berkuat Kuasa

Selepas medan diisi, simpan tetapan.

Perubahan fail selepas itu akan secara automatik cuba membersihkan storan sementara Cloudflare. Operasi yang telah berlaku sebelum ini tidak dibersihkan secara retroaktif. Jika anda memadam atau mengganti fail sebelum tetapan ini dibuat, tunggu storan sementara Cloudflare tamat atau bersihkan secara manual di Cloudflare.

## FAQ

### Adakah Ini Wajib?

Tidak.

Jika domain anda tidak menggunakan Cloudflare, atau anda tidak kisah tentang kelewatan storan sementara CDN, biarkan kosong.

### Adakah Bukti Kelayakan Salah Akan Merosakkan Muat Naik?

Biasanya tidak.

Bukti kelayakan yang salah hanya menyebabkan ImgBed gagal membersihkan storan sementara Cloudflare. Muat naik dan akses fail biasa sepatutnya terus berfungsi.

### Mengapa Imej yang Dipadam Masih Boleh Dibuka?

Punca paling biasa ialah Cloudflare masih menyimpan fail lama dalam storan sementara.

Dengan bukti kelayakan Cloudflare API yang betul, ImgBed membersihkan storan sementara URL berkaitan apabila fail dipadam.

### Mengapa Saya Masih Melihat Imej Lama Selepas Mengganti Fail?

Ini juga biasanya disebabkan oleh storan sementara CDN.

Selepas tetapan ini dikonfigurasi, ImgBed cuba membersihkan storan sementara URL lama apabila fail dengan nama yang sama ditulis ganti.

