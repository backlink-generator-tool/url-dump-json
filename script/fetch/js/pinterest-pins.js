// examble-build-pinterest.script.js
// FULLY WORKING VERSION – supports fetching JSON inside the script file
// Loader will detect window.REMOTE_URLS

(async function () {

  const PIN_IDS = [
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
    "https://www.pinterest.com/pin/",
    "https://www.pinterest.at/pin/",
    "https://www.pinterest.be/pin/",
    "https://www.pinterest.ca/pin/",
    "https://www.pinterest.cl/pin/",
    "https://www.pinterest.co/pin/",
    "https://www.pinterest.dk/pin/",
    "https://www.pinterest.ec/pin/",
    "https://www.pinterest.fr/pin/",
    "https://www.pinterest.de/pin/",
    "https://www.pinterest.hu/pin/",
    "https://www.pinterest.in/pin/",
    "https://www.pinterest.id/pin/",
    "https://www.pinterest.ie/pin/",
    "https://www.pinterest.it/pin/",
    "https://www.pinterest.jp/pin/",
    "https://www.pinterest.mx/pin/",
    "https://www.pinterest.nl/pin/",
    "https://www.pinterest.pe/pin/",
    "https://www.pinterest.nz/pin/",
    "https://www.pinterest.pt/pin/",
    "https://www.pinterest.ph/pin/",
    "https://www.pinterest.ru/pin/",
    "https://www.pinterest.kr/pin/",
    "https://www.pinterest.se/pin/",
    "https://www.pinterest.es/pin/",
    "https://www.pinterest.ch/pin/",
    "https://www.pinterest.tw/pin/",
    "https://www.pinterest.uk/pin/",
    "https://www.pinterest.th/pin/",
    "https://www.pinterest.vn/pin/",
    "https://www.pinterest.co.uk/pin/",
    "https://www.pinterest.co.kr/pin/",
    "https://www.pinterest.com.au/pin/",
    "https://www.pinterest.com.mx/pin/",
    "https://ar.pinterest.com/pin/",
    "https://uk.pinterest.com/pin/",
    "https://fr.pinterest.com/pin/",
    "https://de.pinterest.com/pin/",
    "https://es.pinterest.com/pin/",
    "https://it.pinterest.com/pin/",
    "https://au.pinterest.com/pin/",
    "https://dk.pinterest.com/pin/",
    "https://pt.pinterest.com/pin/",
    "https://ru.pinterest.com/pin/",
    "https://jp.pinterest.com/pin/",
    "https://cl.pinterest.com/pin/",
    "https://co.pinterest.com/pin/",
    "https://nl.pinterest.com/pin/",
    "https://in.pinterest.com/pin/",
    "https://kr.pinterest.com/pin/"
  ];

  const fetchIds = [
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
    "https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-15.json",
    "https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-16.json",
    "https://backlink-generator-tool.github.io/url-dump-json/url/pinterest-pins/pin-17.json"
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
        PIN_IDS.length = 0;
        PIN_IDS.push(...arr);
        console.log("✅ Loaded PIN IDs:", arr.length);
        break;
      }
    } catch (e) {
      console.warn("⚠ Failed:", url, e);
    }
  }

  // Expand into full URLs
  const output = [];

  for (const id of PIN_IDS) {
    for (const domain of PINTEREST_DOMAINS) {
      output.push(domain + id);
    }
  }

  console.log("📦 Total URLs built:", output.length);

  // This is what your loader reads:
  window.REMOTE_URLS = output;

})();
