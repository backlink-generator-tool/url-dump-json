// examble-build-pinterest.module.js
// ES module: export default an array of fully-formed URLs (no global)
const fetchData   = [
    "615656211566717661",
  	"615656211564500126",
  	"615656211564500024",
  	"615656211564499846",
  	"615656211564499702",
  	"615656211564499573",
  	"615656211564472019",
  	"615656211564471936",
  	"615656211564499452",
  	"615656211564472049",
  	"615656211564471900",
  	"615656211564471848",
  	"615656211564471675",
  	"615656211564471742",
  	"615656211564471611",
  	"615656211564471401",
  	"615656211564471332"
];

const PINTEREST_DOMAINS = [
	"https://www.pinterest.com/",
    "https://www.pinterest.at/",
    "https://www.pinterest.be/",
    "https://www.pinterest.ca/",
    "https://www.pinterest.cl/",
    "https://www.pinterest.co/",
    "https://www.pinterest.dk/",
    "https://www.pinterest.ec/",
    "https://www.pinterest.fr/",
    "https://www.pinterest.de/",
    "https://www.pinterest.hu/",
    "https://www.pinterest.in/",
    "https://www.pinterest.id/",
    "https://www.pinterest.ie/",
    "https://www.pinterest.it/",
    "https://www.pinterest.jp/",
    "https://www.pinterest.mx/",
    "https://www.pinterest.nl/",
    "https://www.pinterest.pe/",
    "https://www.pinterest.nz/",
    "https://www.pinterest.pt/",
    "https://www.pinterest.ph/",
    "https://www.pinterest.ru/",
    "https://www.pinterest.kr/",
    "https://www.pinterest.se/",
    "https://www.pinterest.es/",
    "https://www.pinterest.ch/",
    "https://www.pinterest.tw/",
    "https://www.pinterest.uk/",
    "https://www.pinterest.th/",
    "https://www.pinterest.vn/",
    "https://www.pinterest.co.uk/",
    "https://www.pinterest.co.kr/",
    "https://www.pinterest.com.au/",
    "https://www.pinterest.com.mx/",
    "https://ar.pinterest.com/",
    "https://uk.pinterest.com/",
    "https://fr.pinterest.com/",
    "https://de.pinterest.com/",
    "https://es.pinterest.com/",
    "https://it.pinterest.com/",
    "https://au.pinterest.com/",
    "https://dk.pinterest.com/",
    "https://pt.pinterest.com/",
    "https://ru.pinterest.com/",
    "https://jp.pinterest.com/",
    "https://cl.pinterest.com/",
    "https://co.pinterest.com/",
    "https://nl.pinterest.com/",
    "https://in.pinterest.com/",
    "https://kr.pinterest.com/"
];

const fetchURLs = [
    "https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-1.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-2.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-3.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-4.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-5.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-6.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-7.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-8.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-9.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-10.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-11.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-12.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-13.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-14.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-15.json"
];

function shuffle(array){ for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]];} }

function updateDefaultURLs() {
  shuffle(fetchIds);
  for (const u of fetchURLs) {
    try {
      console.log("🔎 Trying to fetch URL list from:", u);
      const r = await fetch(u);
      if (!r.ok) throw new Error("HTTP " + r.status);
      const data = await r.json();
      if (Array.isArray(data) && data.length) {
        fetchData.length = 0;
        fetchData.push(...data);
        console.log("✅ Loaded", data.length, "URLs from", u);
        return;
      }
    } catch (err) {
      console.warn("⚠ Failed to load", u, err && err.message);
    }
  }
  console.warn("⚠ Using fallback URLs:", fetchData.length);
}
updateDefaultURLs();

const urls = [];
for (const id of fetchData) {
  for (const d of PINTEREST_DOMAINS) {
    urls.push(d + "pin/" + id);
  }
}

export default urls;
