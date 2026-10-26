/*
  OYUN KATALOĞU DÜZENLEME
  - downloadUrl alanına doğrulanmış MediaFire veya Google Drive paylaşım linki ekle.
  - Link eklenene kadar oyun "Yakında" görünür.
  - Bilmediğin bağlantıları tahmin etme; yalnızca kendi yayınladığın ve kontrol ettiğin linkleri kullan.
*/
const games = [
  { title: "Constantine", year: "2005", genre: "Aksiyon / Korku", version: "Yama v1.0", code: "CONSTANTINE", description: "Türkçe yama bilgileri, desteklenen sürüm ve kurulum notları.", downloadUrl: "" },
  { title: "Anachronox", year: "2001", genre: "Bilim kurgu / RPG", version: "Sürüm bilgisi eklenecek", code: "ANACHRONOX", description: "Klasik bilim kurgu rol yapma oyunu için çeviri projesi.", downloadUrl: "" },
  { title: "Messiah", year: "2000", genre: "Aksiyon / Macera", version: "Sürüm bilgisi eklenecek", code: "MESSIAH", description: "Oyun ve yama uyumluluğu hakkındaki bilgileri burada paylaş.", downloadUrl: "" },
  { title: "Aquanox", year: "2001", genre: "Aksiyon / Simülasyon", version: "Sürüm bilgisi eklenecek", code: "AQUANOX", description: "Türkçe yama ve kurulum açıklaması için ayrılmış katalog kaydı.", downloadUrl: "" },
  { title: "Command & Conquer: Renegade", year: "2002", genre: "FPS / Aksiyon", version: "Sürüm bilgisi eklenecek", code: "RENEGADE", description: "Desteklenen oyun sürümünü ve kurulum adımlarını yayın notlarına ekle.", downloadUrl: "" },
  { title: "Thief: Deadly Shadows", year: "2004", genre: "Gizlilik / Aksiyon", version: "Sürüm bilgisi eklenecek", code: "THIEF", description: "Türkçe yama projesinin durumu ve uyumluluk notları.", downloadUrl: "" },
  { title: "The Great Escape", year: "2003", genre: "Aksiyon / Macera", version: "Sürüm bilgisi eklenecek", code: "ESCAPE", description: "Yama dosyası ve kurulum rehberi için katalog kaydı.", downloadUrl: "" },
  { title: "MDK 2 HD", year: "2012", genre: "Aksiyon / Macera", version: "Sürüm bilgisi eklenecek", code: "MDK 2 HD", description: "HD sürümü için uyumluluk ve kurulum bilgilerini ekle.", downloadUrl: "" },
  { title: "Shank", year: "2010", genre: "Aksiyon / Platform", version: "Sürüm bilgisi eklenecek", code: "SHANK", description: "Türkçe yama bilgileri ve desteklenen sürüm ayrıntıları.", downloadUrl: "" },
  { title: "Conflict: Desert Storm", year: "2002", genre: "Taktik / Aksiyon", version: "Sürüm bilgisi eklenecek", code: "DESERT STORM", description: "Yama durumu, kurulum adımları ve indirme bağlantısı burada yer alır.", downloadUrl: "" }
];

const grid = document.getElementById("game-grid");
const searchInput = document.getElementById("game-search");
const statusFilter = document.getElementById("status-filter");
const count = document.getElementById("game-count");
const emptyState = document.getElementById("empty-state");

function safeUrl(url) {
  try {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol) ? parsed.href : "";
  } catch {
    return "";
  }
}
function renderGames() {
  const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
  const status = statusFilter.value;
  const filtered = games.filter(game => {
    const ready = Boolean(safeUrl(game.downloadUrl));
    const matchesText = [game.title, game.year, game.genre, game.description].join(" ").toLocaleLowerCase("tr-TR").includes(query);
    const matchesStatus = status === "all" || (status === "available" && ready) || (status === "soon" && !ready);
    return matchesText && matchesStatus;
  });
  count.textContent = String(filtered.length).padStart(2, "0");
  emptyState.hidden = filtered.length > 0;
  grid.innerHTML = filtered.map((game, index) => {
    const url = safeUrl(game.downloadUrl);
    const statusLabel = url ? "İNDİRMEYE HAZIR" : "YAKINDA";
    const safeTitle = game.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    const safeCode = game.code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeGenre = game.genre.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeDescription = game.description.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeVersion = game.version.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `<article class="game-card">
      <div class="game-cover"><span class="cover-index">PATCH / ${String(games.indexOf(game)+1).padStart(3,"0")}</span><span class="cover-code">${safeCode}</span><span class="cover-status ${url ? "ready" : ""}">${statusLabel}</span></div>
      <div class="game-body"><div class="game-meta"><span>${safeGenre}</span><span>${game.year}</span></div><h3>${safeTitle}</h3><p>${safeDescription}</p><div class="game-bottom"><span class="version">${safeVersion}</span>${url ? `<a class="download-link" href="${url}" target="_blank" rel="noopener noreferrer">Yamayı indir ↗</a>` : `<span class="download-link disabled" aria-label="İndirme bağlantısı henüz eklenmedi">Yakında</span>`}</div></div>
    </article>`;
  }).join("");
}
searchInput.addEventListener("input", renderGames);
statusFilter.addEventListener("change", renderGames);
renderGames();
