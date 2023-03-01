//HOF
const hof = () => () => 5;
hof()();

const hoF = (fn) => fn(5);
hoF(function a(x) {
  return x;
});

//Closure
const closure = function () {
  let private = 1;
  return function getNum() {
    return private;
  };
};

const getnumber = closure();
getnumber(); //1

//currying
const multiply = (a, b) => a * b;
multiply(5, 3);

const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(5)(3);

const curriedMultiplyBy5 = curriedMultiply(5);
curriedMultiplyBy5(3); //15
