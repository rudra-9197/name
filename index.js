var readlinesync = require('readline-sync');
var useName = readlinesync.question('may i have your name? ');
var favGame = readlinesync.question('whats your favourite food? ');
console.log('hi..welcome!!  ' +  useName);
console.log('your fav food is '+ favGame);