var fs = require('fs');

var readMe = fs.readFileSync('input.txt', 'utf8');
console.log(readMe);

fs.writeFileSync('output.txt', readMe);
