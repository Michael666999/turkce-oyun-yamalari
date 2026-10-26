# Mirvuqar Abdulov Çeviri Ekibi — Ücretsiz web sitesi

Bu, GitHub Pages üzerinde ücretsiz yayımlanabilecek statik bir Türkçe oyun yaması kataloğudur.

## Dosyalar
- `index.html` — Ana sayfa ve SEO meta bilgileri
- `style.css` — Mobil uyumlu siyah-kırmızı tasarım
- `games.js` — 10 oyunluk katalog, arama ve durum filtresi
- `robots.txt` ve `sitemap.xml` — Arama motorları için başlangıç dosyaları

## GitHub Pages'e ücretsiz yükleme
1. GitHub hesabı aç: https://github.com/
2. Yeni bir repository oluştur. Örneğin `turkce-oyun-yamalari`. Public seç.
3. Bu klasördeki dosyaların hepsini repository'nin ana dizinine yükle.
4. Repository → **Settings** → **Pages** bölümüne gir.
5. **Deploy from a branch** seç; branch olarak `main`, klasör olarak `/ (root)` seçip kaydet.
6. GitHub'ın verdiği `https://KULLANICI-ADINIZ.github.io/turkce-oyun-yamalari/` adresini aç.

## Önemli: adresleri değiştir
Yayımlamadan önce `index.html` içindeki canonical satırını kendi gerçek GitHub Pages adresinle değiştir. `sitemap.xml` içindeki örnek URL'yi de aynı şekilde değiştir. Sitemap'te yer alan URL, yayımladığın gerçek sayfayla eşleşmelidir.

## İndirme bağlantısı ekleme
`games.js` dosyasını aç. İlgili oyunun `downloadUrl: ""` alanına kendi kontrol ettiğin paylaşım bağlantısını ekle. Örnek:

`downloadUrl: "https://www.mediafire.com/file/GERCEK_DOSYA_LINKI/dosya.zip/file"`

Yukarıdaki örnek gerçek bir indirme adresi değildir; kendi doğrulanmış URL'nle değiştir. Google Drive için de herkese açık erişim izni verdiğin paylaşım bağlantısını kullan. Siteye link eklemeden önce dosyanın güvenli ve doğru olduğundan emin ol.

## Google'da görünme
1. https://search.google.com/search-console/ adresini aç.
2. URL prefix yöntemiyle gerçek GitHub Pages URL'ni ekle.
3. Google'ın sunduğu doğrulama adımlarını takip et. Bazı durumlarda HTML dosyası veya meta etiketiyle doğrulama gerekir; talimatları Search Console'dan al.
4. Doğrulama sonrası gerçek `sitemap.xml` adresini gönder. Örneğin: `https://KULLANICI-ADINIZ.github.io/turkce-oyun-yamalari/sitemap.xml`
5. Her oyun için zamanla özgün açıklama, yama sürümü, uyumlu oyun sürümü, kurulum adımları ve ekran görüntüleri ekle.

Google'da indekslenme ücretsizdir fakat ilk sırada çıkma veya belirli sürede indekslenme garantisi yoktur.

## Lisans ve marka notu
Site, bağımsız hayran çevirileri kataloğu olarak hazırlanmıştır. Oyunların adları ve markaları ilgili sahiplerine aittir. İzinli veya yasal olarak dağıtılabilen yama dosyalarını paylaş; oyunların orijinal dosyalarını izinsiz yeniden dağıtma.
