# Geolokasi IP dan Pengurusan Pengguna

Geolokasi IP menukar alamat IP dalam rekod pemuat naik, peranti log masuk dan log yang seumpamanya kepada lokasi anggaran.

Selepas dikonfigurasikan, panel pentadbir boleh menunjukkan asal muat naik dan akses dengan lebih jelas. Pengurusan Pengguna juga membolehkan anda menyekat atau memulihkan akses muat naik untuk alamat IP yang mencurigakan.

## Tempat Mengkonfigurasikannya

Buka:

```text
System Settings -> Other Settings -> IP Geolocation
```

![Geolokasi IP](../../image/other/ip定位/ip定位.png)

## Tetapan Yang Tersedia

Aliran geolokasi IP yang lebih baharu menyokong beberapa sumber dan tidak lagi bergantung pada satu perkhidmatan peta sahaja.

| Tetapan | Tujuan |
| --- | --- |
| Bahasa geolokasi IP | Memilih bahasa paparan, seperti bahasa Inggeris, Cina Ringkas, Jepun, Perancis dan lain-lain. |
| MaxMind Account ID | ID akaun MaxMind untuk MaxMind GeoLite Web Service. |
| MaxMind License Key | License Key MaxMind. |
| Tencent Map Key | Kunci Tencent Location Service. Berguna untuk alamat Cina dan IP tanah besar China. |
| ipapi Key | Kunci APILayer ipapi. Menyokong geolokasi IP berbilang bahasa. |

Isi hanya perkhidmatan yang anda perlukan. Anda tidak perlu mengkonfigurasikan semua medan.

Jika tiada kunci diberikan, ImgBed masih cuba menggunakan sumber percuma terbina dalam, tetapi kestabilan, sokongan bahasa dan ketepatannya mungkin lebih rendah berbanding perkhidmatan yang anda konfigurasikan sendiri.

## Pilihan Yang Disyorkan

Jika anda terutama memerlukan alamat Cina:

1. Tetapkan bahasa geolokasi IP kepada Cina Ringkas.
2. Konfigurasikan Tencent Map Key.
3. Jika perlu, tambah MaxMind atau ipapi sebagai sumber sandaran.

Jika anda terutama memerlukan alamat bahasa Inggeris atau berbilang bahasa:

1. Pilih bahasa yang anda perlukan.
2. Konfigurasikan MaxMind Account ID dan License Key.
3. Tambah ipapi Key jika anda memerlukan hasil berbilang bahasa yang lebih baik.

## Persediaan MaxMind

MaxMind memerlukan:

```text
MaxMind Account ID
MaxMind License Key
```

Dapatkan ID akaun dalam papan pemuka MaxMind dan jana License Key daripada halaman License Keys.

![Konfigurasi kunci MaxMind](../../image/other/ip定位/maxmind的key配置.png)

Selepas dijana, tampal Account ID dan License Key ke ImgBed dan simpan.

Pelan percuma MaxMind sesuai untuk penggunaan harian, tetapi mempunyai had permintaan. Jika kuota terlampau, ImgBed akan terus mencuba sumber lain yang tersedia.

## Persediaan ipapi

ipapi menggunakan API Key APILayer.

Buka konsol ipapi dan salin API Key yang dipaparkan di sana.

![Konfigurasi ipapi](../../image/other/ip定位/ipapi配置.png)

Tampalkannya ke medan `ipapi Key` dalam ImgBed dan simpan.

ipapi menyokong geolokasi IP berbilang bahasa dan berguna apabila anda mahu alamat dipaparkan dalam bahasa yang dipilih. Pelan percumanya juga mempunyai had permintaan. Jika kuota habis, ImgBed akan terus mencuba sumber lain yang tersedia.

## Persediaan Tencent Map Key

Tencent Map Key berguna untuk alamat Cina, terutamanya IP tanah besar China.

Semasa mencipta kunci dalam Tencent Location Service, aktifkan:

```text
WebServiceAPI
```

Selepas dicipta, tampalkan kunci ke `Tencent Map Key` dan simpan.

Jika anda hanya memerlukan geolokasi IP Cina asas, Tencent Map Key sudah cukup untuk bermula.

## Perkara Yang Perlu Disemak Dalam Pengurusan Pengguna

Pengurusan Pengguna tersedia dari bahagian atas panel pentadbir.

![Pengurusan pengguna](../../image/other/用户管理显示.png)

Pengurusan Pengguna memaparkan aktiviti muat naik mengikut IP:

| Medan | Penerangan |
| --- | --- |
| Sumber IP | IP sumber pemuat naik. |
| Alamat | Lokasi anggaran yang ditentukan daripada IP. |
| Jumlah saiz muat naik | Jumlah saiz fail yang dimuat naik oleh IP ini. |
| Kiraan muat naik | Bilangan muat naik daripada IP ini. |
| Muat naik dibenarkan | Hidup bermaksud muat naik dibenarkan. Mati bermaksud muat naik disekat. |

Klik anak panah di sebelah kiri untuk mengembangkan senarai fail yang dimuat naik oleh IP tersebut.

Senarai fail menunjukkan nama fail, pratonton, saiz fail, hasil moderasi, status fail dan masa muat naik. Jika muat naik kelihatan mencurigakan, kembangkan IP dahulu, semak fail, kemudian tentukan sama ada perlu menyekat muat naik seterusnya.

Jika IP mencurigakan, matikan `Upload allowed`. Muat naik akan datang daripada IP tersebut akan disekat.

## Carian, Isihan dan Penapis Lanjutan

Di bahagian atas Pengurusan Pengguna, cari mengikut sumber IP atau alamat.

Isih mengikut masa, kiraan muat naik atau jumlah saiz muat naik untuk mencari pemuat naik terkini, pemuat naik berfrekuensi tinggi atau IP dengan penggunaan tinggi.

Untuk siasatan lebih mendalam, buka penapis lanjutan.

![Penapis lanjutan](../../image/other/用户管理高级筛选.png)

Penapis lanjutan menyokong:

| Penapis | Penggunaan |
| --- | --- |
| Julat masa | Menunjukkan IP yang memuat naik fail dalam tempoh yang dipilih. |
| Status akses | Menapis mengikut status normal, disekat dan status seumpamanya. |
| Senarai benarkan/sekat | Menapis mengikut senarai benarkan, senarai sekat atau belum ditetapkan. |
| Jenis fail | Menunjukkan IP yang memuat naik imej, video, audio, dokumen, kod atau fail lain. |
| Saiz fail | Menapis mengikut julat saiz fail yang dimuat naik. |
| Penarafan umur | Menapis mengikut belum ditetapkan, General, R12+, R16+, R18 dan penarafan seumpamanya. |
| Status fail | Menapis mengikut status fail semasa untuk menyiasat fail yang tidak normal. |

Klik `Apply Filters` untuk menerapkan penapis. Gunakan `Reset` untuk kembali kepada semua data.

## Paparan Mudah Alih

Pada mudah alih, Pengurusan Pengguna bertukar kepada susun atur kad.

![Pengurusan pengguna mudah alih](../../image/other/手机端显示用户管理效果.png)

Setiap kad menunjukkan IP, alamat, jumlah saiz muat naik, kiraan muat naik dan suis muat naik dibenarkan. Anda boleh mengurus pengguna tanpa menatal jadual secara mendatar.

## Jika Lokasi Kelihatan Salah

Geolokasi IP adalah anggaran. Ia bukan alamat jalan yang tepat.

Jika pengguna berada di belakang proksi, pusat data, pelayan awan atau rangkaian rentas sempadan, lokasi yang dipaparkan mungkin berbeza daripada lokasi sebenar.

Gunakan fungsi ini untuk memahami asal secara kasar, mencari muat naik tidak normal dan membantu keputusan sekatan. Jangan anggapnya sebagai penjejakan yang tepat.

## Kes Biasa

| Kes | Maksud |
| --- | --- |
| Alamat kosong | IP mungkin belum ditentukan, atau sumber semasa tidak tersedia buat sementara waktu. |
| Bahasa alamat salah | Semak bahasa geolokasi IP dan sama ada sumber yang menyokong bahasa tersebut telah dikonfigurasikan. |
| Alamat menunjukkan pusat data | Banyak proksi, pelayan awan dan perayap muncul sebagai alamat pusat data atau ISP. |
| Kiraan muat naik tinggi | Semak IP ini dengan teliti dan sekat muat naik jika perlu. |
| Jumlah saiz muat naik besar | Isih atau tapis, kembangkan IP dan periksa fail tertentu. |
| Perlu pulihkan selepas disekat | Hidupkan semula `Upload allowed`. |

## Aliran Pantas

```text
Open IP Geolocation in Other Settings
-> Choose IP geolocation language
-> Fill MaxMind, Tencent Map, or ipapi credentials as needed
-> Save settings
-> Open User Management
-> Review IP source, address, total upload size, and upload count
-> Use search, sort, or advanced filters to find abnormal IPs
-> Allow or block uploads as needed
```
