// examble-build-pinterest.module.js
// ES module: export default an array of fully-formed URLs (no global)
const PIN_IDS = [
  "123456789012345678",
  "998877665544332211",
  "445566778899001122"
];

const PINTEREST_DOMAINS = [
  "https://www.pinterest.com/pin/",
  "https://www.pinterest.co.uk/pin/",
  "https://www.pinterest.com.au/pin/"
];

const urls = [];
for (const id of PIN_IDS) {
  for (const d of PINTEREST_DOMAINS) {
    urls.push(d + id);
  }
}

export default urls;
