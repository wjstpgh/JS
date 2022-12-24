//function
function one() {
  return 1;
}

one();

//method
const obj = {
  two() {
    return 2;
  },
};

obj.two();

//call
function three() {
  return 3;
}

three.call();

//function constructor
const four = new Function("return 4");

four();

const add = new Function("num1", "num2", "return num1+num2");

add(1, 2);

//callable object
function hi() {
  console.log("hi");
}

hi.yell = "HI!";

// const specialObj = {
//   yell: "HI!",
//   name: "hi",
//   (): console.log("hi"),
// };

// hi가 가지는 속성들
hi;

//obj는 기본속성이 없다
const obj1 = {};

obj1;
