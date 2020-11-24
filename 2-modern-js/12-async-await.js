const https = require('https');

function fetch (url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (rd) => data = data + rd);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

const URL1 = 'https://www.javascript.com/';
const URL2 = 'https://www.ruby-lang.org/en/'

console.log(`About to fetch ${URL1}`);
fetch(URL1)
  .then(data => {
    console.log(`JavaScript: ${data.length}`);
  });

(async function read() {
  console.log(`About to fetch ${URL2}`);
  const data = await fetch(URL2);

  console.log(`Ruby: ${data.length}`);
})();
