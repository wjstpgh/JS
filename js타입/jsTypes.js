//number
5, 3, 6
//boolen
true, false
//string
"hello"
//undefined
undefined
//null
null
//symbol
Symbol("just symbol")
//object
{}

//primitive
typeof 1;
typeof true;
typeof "string";
typeof undefined;
typeof null;
typeof Symbol("im symbol");

//non-primitive
typeof {};
typeof [];
typeof function () {};

//last three is object
function a() {
  return 5;
}

a.hi = "a is hi";

console.log(a.hi);

//call by reference, obj did not have memory 1, directly
const obj={
  property:1
}

console.log(obj.property)//1
// console.log(property)//err

//JS built in Object?
Number()

var num=1;
var numObj=new Number(1);

console.log(num);
console.log(numObj);

console.log(typeof num);
console.log(typeof numObj);

console.log(num.valueOf());
console.log(numObj.valueOf());

Boolean(true).toString();