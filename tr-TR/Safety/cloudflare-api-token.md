# Cloudflare API Token

Cloudflare API kimlik bilgileri, dosyalar değiştikten sonra ImgBed'in Cloudflare CDN önbelleğini temizlemesini sağlar.

![Cloudflare API Token ayarları](../../image/Safety/cloudflare%20api%20token截图.png)

## Nereden Yapılandırılır?

Yönetim panelini açın, ardından şuraya gidin:

```text
System Settings -> Security Settings -> Cloudflare API Token
```

Şunları doldurmanız gerekir:

- Zone ID
- Account email
- API Key

## Bu Ayar Ne İşe Yarar?

Cloudflare herkese açık görsel URL'lerini önbelleğe alabilir.

Önbellek görsellerin daha hızlı sunulmasını sağlar; ancak bir dosyayı sildikten, engelledikten, değiştirdikten veya taşıdıktan sonra eski içerik bir süre görünmeye devam edebilir.

Cloudflare API kimlik bilgileri yapılandırıldıktan sonra ImgBed bu işlemler tamamlandığında ilgili Cloudflare önbelleğini temizlemeye çalışır.

Şu durumlarda kullanışlıdır:

- Bir görseli silip herkese açık bağlantının mümkün olduğunca hızlı çalışmayı bırakmasını istiyorsanız.
- Bir görseli engelleyip ziyaretçilerin özgün dosyayı görmesini durdurmak istiyorsanız.
- Aynı ada sahip bir dosyayı değiştirip ziyaretçilerin yeni sürümü daha hızlı görmesini istiyorsanız.
- Dosyaları taşıyıp yeniden adlandırıyor ve eski yol önbelleğinin hızlı yenilenmesini istiyorsanız.
- Herkese açık erişim kurallarını değiştirip public gallery veya random image önbelleğinin daha hızlı güncellenmesini istiyorsanız.

## Boş Bırakırsanız Ne Olur?

ImgBed bu ayar olmadan da normal çalışır.

Tek fark, ImgBed'in Cloudflare CDN önbelleğini aktif olarak temizlememesidir. Ziyaretçiler Cloudflare önbelleği doğal olarak sona erene kadar eski içeriği görmeye devam edebilir.

## Zone ID Nasıl Bulunur?

Zone ID, ImgBed alan adınızın kullandığı sitenin Cloudflare Zone ID değeridir.

1. Cloudflare dashboard'a giriş yapın.
2. ImgBed alan adınızı içeren siteyi açın.
3. Site overview sayfasında `Zone ID` değerini bulun.
4. ImgBed'deki `Zone ID` alanına kopyalayın.

Bu değer hesap ID'si değil, site Zone ID değeridir.

## Account Email

Cloudflare'a giriş yaparken kullandığınız e-posta adresini girin.

Aşağıda verdiğiniz API Key ile eşleşmelidir.

## API Key

Cloudflare Global API Key değerini girin.

1. Cloudflare dashboard'a giriş yapın.
2. Profilinizi açın.
3. API Tokens sayfasına gidin.
4. `Global API Key` değerini bulun.
5. Görüntüleyip kopyalayın.
6. ImgBed'deki `API Key` alanına yapıştırın.

![Global API key görüntüleme](../../image/Safety/查看全局令牌.png)

## Ne Zaman Etkili Olur?

Alanları doldurduktan sonra ayarları kaydedin.

Bundan sonraki dosya değişikliklerinde Cloudflare önbelleği otomatik olarak temizlenmeye çalışılır. Geçmiş işlemler geriye dönük olarak temizlenmez. Bu ayarı yapmadan önce bir dosya sildiyseniz veya değiştirdiyseniz Cloudflare önbelleğinin sona ermesini bekleyin ya da Cloudflare üzerinden elle temizleyin.

## FAQ

### Zorunlu mu?

Hayır.

Alan adınız Cloudflare kullanmıyorsa veya CDN önbellek gecikmesi sizin için sorun değilse boş bırakabilirsiniz.

### Yanlış Kimlik Bilgileri Yüklemeyi Bozar mı?

Genellikle hayır.

Yanlış kimlik bilgileri yalnızca ImgBed'in Cloudflare önbelleğini temizlemesini engeller. Yükleme ve normal dosya erişimi çalışmaya devam etmelidir.

### Silinen Görsel Neden Hâlâ Açılıyor?

En yaygın neden Cloudflare'ın eski dosyayı hâlâ önbellekte tutmasıdır.

Doğru Cloudflare API kimlik bilgileriyle ImgBed dosya silindiğinde ilgili URL önbelleğini temizler.

### Dosyayı Değiştirdikten Sonra Neden Hâlâ Eski Görseli Görüyorum?

Bu da genellikle CDN önbelleğinden kaynaklanır.

Bu ayar yapılandırıldıktan sonra ImgBed aynı ada sahip dosya üzerine yazıldığında eski URL önbelleğini temizlemeye çalışır.
