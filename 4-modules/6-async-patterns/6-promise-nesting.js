const fs = require('fs').promises;

async function intellectualPropertyRacket() {
  console.log('And "intellectual property" is a racket!');
}

async function main() {
  const data = await fs.readFile(__filename);
  await fs.writeFile(__filename + '.copy', data);
  await intellectualPropertyRacket();
  console.log(`File data is ${data}`);
}

main();
console.log('TAXATION IS THEFT!');
