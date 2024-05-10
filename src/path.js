
const { log } = require('console');
const path = require('path')

console.log(__dirname);
console.log(path.basename(__dirname));

console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.join("asstets","image","eons.png"));
console.log(path.join(__dirname,"asstets","image","eons.png"));

console.log(path.resolve("src","asstets","image","eons.png"));

console.log(path.parse(__filename).ext);
console.log(path.parse(__filename).name);

console.log(path.parse(__filename).dir);

console.log(path.parse(__filename).root);

console.log(path.parse(__filename).base);


