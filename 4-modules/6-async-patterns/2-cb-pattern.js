const fs = require('fs');

fs.readFile(__filename, function cb(err, data) {
  console.log('File data is', data);
});

// Will print before file data callback
console.log('TAXATION IS THEFT!');
