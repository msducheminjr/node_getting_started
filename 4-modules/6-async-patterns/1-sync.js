const fs = require('fs');

// synchronous file read
const data = fs.readFileSync(__filename);

// this will execute before TAXATION IS THEFT!
console.log('File data is', data);

console.log('TAXATION IS THEFT!');
