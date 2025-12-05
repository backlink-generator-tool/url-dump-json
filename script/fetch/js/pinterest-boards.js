// examble-build-pinterest.script.js
// FULLY WORKING VERSION – supports fetching JSON inside the script file
// Loader will detect window.REMOTE_URLS

(async function () {

  const PIN_BOARDS = [
  	"seekersofdecay/",
  	"seekersofdecay/regan-vest/",
  	"abandoned-machine/"
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

  const fetchIds = [
  	"https://backlink-generator-tool.github.io/url-dump-json/url/custom-urls/pinterest-patch/patch-1.json",
  	"https://backlink-generator-tool.github.io/url-dump-json/url/custom-urls/pinterest-patch/patch-2.json"
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Fetch JSON → override PIN_IDS
  shuffle(fetchIds);

  for (const url of fetchIds) {
    try {
      console.log("🔎 Loading PIN IDs:", url);
      const r = await fetch(url);
      if (!r.ok) continue;

      const arr = await r.json();

      if (Array.isArray(arr) && arr.length > 0) {
        PIN_BOARDS.length = 0;
        PIN_BOARDS.push(...arr);
        console.log("✅ Loaded PIN IDs:", arr.length);
        break;
      }
    } catch (e) {
      console.warn("⚠ Failed:", url, e);
    }
  }

  // Expand into full URLs
  const output = [];

  for (const board of PIN_BOARDS) {
    for (const domain of PINTEREST_DOMAINS) {
      output.push(domain + board);
    }
  }

  console.log("📦 Total URLs built:", output.length);

  // This is what your loader reads:
  window.REMOTE_URLS = output;

})();
