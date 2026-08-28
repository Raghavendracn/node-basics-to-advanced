//Modules Protect their variables and functions from leaking

console.log("Sum Module executed");

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}


module.exports = calculateSum;
