require("./xyz"); // one module into another
const calculateSum = require("./sum");
var name = "Namaste Raghav!...";

var a = 10;
var b = 20;

console.log(name);
console.log(a + b);
calculateSum(3, 5);
// console.log(global);
// console.log(this);

// console.log(globalThis);

console.log(globalThis === global);
