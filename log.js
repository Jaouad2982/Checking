const path = require('path');
const os = require('os');
// //console.log(path);
// console.log(__filename);
// console.log(__dirname);
console.log(path.parse(__filename));
console.log("totlal memory " + os.totalmem + "\ntotal free memory " + os.freemem);
