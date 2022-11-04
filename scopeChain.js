var x = 'x';

function findName() {
  console.log(x);
  var b = 'b';
  return printName();
}

function printName() {
  var c = 'c';
  return 'name';
}

function sayName() {
  var a = 'a';
  return findName()
}

sayName();

//lexically
function say() {
  var a = 'a';
  return function find() {
    var b = 'b';
    return function print() {
      var c = 'c';
      console.log(a, b, c);
      return 'name'
    }
  }
}

say()()();
