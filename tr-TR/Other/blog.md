# Blog

Blog özelliği ImgBed sitenize bağımsız bir blog sayfası ekler.

Etkinleştirildikten sonra ziyaretçiler şurayı açabilir:

```text
https://your-domain.com/blog/
```

![Blog ana sayfası](../../image/other/博客/博客首页.png)

Blog, açık kaynak [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) projesinden uyarlanmıştır. ImgBed bunu Vue ile yeniden düzenleyip görsel barındırma sitesinin bir parçası olarak çalışacak şekilde entegre eder.

## Nereden Yapılandırılır?

Blog ayarları şuradadır:

```text
System Settings -> Other Settings -> Blog
```

![Blog ayarları](../../image/other/博客/QQ20260611-221702.png)

## İlk Kurulum

1. `Enable` değerini açın.
2. Blog yapılandırmasını saklamak için kullanılacak GitHub hesabını seçin.
3. `Update Blog` düğmesine tıklayın.
4. Başarı mesajını bekleyin.
5. Blogu görmek için `https://your-domain.com/blog/` adresini açın.

İlk kullanımda ImgBed seçilen hesap altında özel bir GitHub repository hazırlar:

```text
imgbed-blog-config
```

Bu repository blog ayarlarını ve yazı içeriklerini saklar.

## Yazı Yazma

Blog yazılarını özel GitHub repository'niz içinde düzenleyin:

```text
imgbed-blog-config
```

Tipik iş akışı:

1. GitHub'ı açın.
2. Özel `imgbed-blog-config` repository'sine girin.
3. Yazı dosyalarını düzenleyin veya yeni dosya ekleyin.
4. Değişiklikleri commit edin.
5. ImgBed yönetim paneline dönüp `Update Blog` düğmesine tıklayın veya blog ana sayfasının sol üst köşesindeki logoya üç kez tıklayarak blog güncellemesini tetikleyin.

`Update Blog` yazdığınız içeriğin üzerine yazmaz. Gerektiğinde repository'yi başlatır ve blog önbelleğini yeniler.

## Desteklenen Özellikler

Blog; yazı listesi, kategoriler, etiketler, arşiv, arama, karanlık mod ve dil değiştirme gibi yaygın blog özelliklerini destekler.

Ayrıca yorumlar ve ziyaret istatistikleri de desteklenir.

![Blog yorumları](../../image/other/博客/支持留言.png)

Yorumlar yazıların altında görünür. Ziyaretçiler avatar, nickname, email ve yorum içeriği gönderebilir.

Ziyaret istatistikleri yazı görüntülemelerini ve site ziyaretlerini gösterir; blog trafiğini anlamanıza yardımcı olur.

## URL

Blog her zaman `/blog/` altında sunulur.

Örneğin ImgBed alan adınız:

```text
https://image.example.com
```

Blog URL'si:

```text
https://image.example.com/blog/
```

Blog devre dışı bırakıldıktan sonra ziyaretçiler blog sayfasına erişemez.
