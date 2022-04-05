
let cp = require('child_process')
 //cp.execSync('calc')  // command to open a calculator
 // write geno- calculator for linux

 // to open some other file through childprocess

 let content = cp.execSync('node test.js');
 //console.log(content); -- this command gives result in binary

 console.log(''+ content); // prints the contents of test file
 