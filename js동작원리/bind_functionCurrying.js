//function currying
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

let multiplyByFive = multiply.bind(this, 5);
console.log(multiplyByFive(4));
