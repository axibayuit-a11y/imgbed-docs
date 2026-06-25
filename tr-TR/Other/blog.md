# Blog

Blog özelliği, ImgBed sitenize bağımsız bir blog sayfası ekler.

Etkinleştirildikten sonra ziyaretçiler şu adresi açabilir:

```text
https://your-domain.com/blog/
```

![Blog ana sayfası](../../image/other/博客/博客首页.png)

Blog, açık kaynaklı [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) projesinden uyarlanmıştır. ImgBed, bunu Vue ile yeniden yazar ve görsel barındırma sitesinin bir parçası olarak çalışacak şekilde bütünleştirir.

## Nereden Yapılandırılır?

Blog ayarları şuradadır:

```text
System Settings -> Other Settings -> Blog
```

![Blog ayarları](../../image/other/博客/QQ20260611-221702.png)

## İlk Kurulum

1. `Enable` seçeneğini açın.
2. Blog yapılandırmasını depolamak için kullanılacak GitHub hesabını seçin.
3. `Update Blog` öğesine tıklayın.
4. Başarı mesajını bekleyin.
5. Blogu görüntülemek için `https://your-domain.com/blog/` adresini açın.

İlk kullanımda ImgBed, seçilen hesabın altında özel bir GitHub deposu hazırlar:

```text
imgbed-blog-config
```

Bu depo blog ayarlarını ve yazı içeriklerini saklar.

## Yazı Yazma

Blog yazılarını kendi özel GitHub deponuzda düzenleyin:

```text
imgbed-blog-config
```

Tipik iş akışı:

1. GitHub'ı açın.
2. Özel `imgbed-blog-config` deposuna girin.
3. Yazı dosyalarını düzenleyin veya ekleyin.
4. Değişiklikleri commit edin.
5. ImgBed yönetim paneline dönüp `Update Blog` öğesine tıklayın veya blog ana sayfasının sol üst köşesindeki logoya üç kez tıklayarak blog güncellemesini tetikleyin.

`Update Blog`, yazdığınız içeriğin üzerine yazmaz. Gerektiğinde depoyu başlatır ve blog önbelleğini yeniler.

## Desteklenen Özellikler

Blog; yazı listeleri, kategoriler, etiketler, arşivler, arama, koyu mod ve dil değiştirme gibi yaygın blog özelliklerini destekler.

Yorumları ve ziyaret istatistiklerini de destekler.

![Blog yorumları](../../image/other/博客/支持留言.png)

Yorumlar yazıların altında görünür. Ziyaretçiler avatar, takma ad, e-posta ve yorum içeriği gönderebilir.

Ziyaret istatistikleri yazı görüntülemelerini ve site ziyaretlerini göstererek blog trafiğini anlamanıza yardımcı olur.

## Blog Adresi

Blog her zaman `/blog/` yolu altında sunulur.

Örneğin ImgBed alan adınız:

```text
https://image.example.com
```

Blog adresi:

```text
https://image.example.com/blog/
```

Blog devre dışı bırakıldıktan sonra ziyaretçiler blog sayfasına artık erişemez.
