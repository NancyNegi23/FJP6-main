
let fs = require("fs");
//console.log(fs);

//create something
let path = require("path");

let filePath = path.join(__dirname,"file.txt");
console.log(filePath);

fs.writeFileSync(filePath, "Hello I am a test file");

// read the file 
let content = fs.readFileSync(filePath,'utf-8');
console.log(content);

//U- Update
fs.appendFileSync(filePath,"newly added content in the File");
console.log("After Update");
console.log(fs.readFileSync(filePath,'utf-8'));

// D-Delete
//fs.unlinkSync(filePath);



