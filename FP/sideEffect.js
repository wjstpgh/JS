//side effect
//input -> output

const array = [1, 2, 3];

function mutateArray(arr) {
  arr.pop();
}

mutateArray(array);
console.log(array);

function mutateArray2(arr) {
  arr.forEach((item) => {
    arr.push(1);
  });
}

mutateArray2(array);

//no side effect

function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

const array2 = removeLastItem(array);
console.log(array, array2);

function multiplyBy2(arr) {
  return arr.map((item) => item * 2);
}

const array3 = multiplyBy2(array);
console.log(array, array2, array3);

//referential transparency

//a is not pure func
function a() {
  console.log("hi");
}

a();

function b(num1, num2) {
  return num1 + num2;
}

b(3, 4); //7, always

function c(num) {
  return num * 2;
}

c(b(3, 4)); //b의 인자값에 영향을 받음
c(7);

//1 Task
//return state
//pure
//no shared state
//immutable state
//composable
//predictable
