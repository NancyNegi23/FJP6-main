

let fs = require("fs");
let path = require("path");

let filekapath = path.join(__dirname, "hello.txt");

fs.writeFileSync(filekapath,"A new file has been added");