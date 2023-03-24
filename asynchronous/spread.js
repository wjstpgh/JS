//ES9

//Object spread operator
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40,
};

const { tiger, ...rest } = animals;

console.log(tiger);
console.log(rest);

const arr = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

sum(...arr);

function objSpread(p1, p2, p3) {
  console.log(p1); //23
  console.log(p2); //object
  console.log(p3); //undefined
}

objSpread(tiger, rest);
