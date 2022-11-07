console.log(one);
console.log(say());
console.log(say2);

var one = '1';

//function expression
var say2 = function () {
  console.log('Hello');
}

//function declaration
function say() {
  console.log('Hi');
}

//num = undefined << hoisting
console.log(num);//undefined
var num = 1;
console.log(num);//1
var num = 2;
console.log(num);//2

a();

function a() {
  console.log('yes');
}

function a() {
  console.log('no');
}

var food = 'rice';

var eat = function () {
  console.log('old eat ' + food);

  var food = 'noodle';

  console.log('new eat ' + food);
};

eat();