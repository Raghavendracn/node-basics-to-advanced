require("./xyz"); // one module into another
// const calculateSum = require("./sum");
// const { calculateSum } = require("./calculate/sum");

// const {calculateMultiply} = require("./calculate/multiply");

const {calculateMultiply,calculateSum} = require("./calculate");
const data = require("./data.json");
var name = "Namaste Raghav!...";

var a = 10;
var b = 20;
var x = 234;
console.log(name);
console.log(a + b);
calculateSum(3, 5);
console.log(x);
console.log(data);
calculateMultiply(12,13);

// console.log(global);
// console.log(this);

// console.log(globalThis);

console.log(globalThis === global);
