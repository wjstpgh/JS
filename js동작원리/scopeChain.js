//각 함수는 전역 위에 올려져 있으므로 함수끼리 서로 접근하지 못한다.
var x = "x";

function findName() {
  console.log(c);
  var b = "b";
  return printName();
}

function printName() {
  console.log(x);
  var c = "c";
  return "name";
}

function sayName() {
  var a = "a";
  return findName();
}

sayName();

//중첩형태로 작성된 함수는 scope chain이 서로 물리게 된다.
//lexically
function say() {
  var a = "a";
  return function find() {
    var b = "b";
    return function print() {
      var c = "c";
      console.log(a, b, c);
      return "name";
    };
  };
}

say()()();
