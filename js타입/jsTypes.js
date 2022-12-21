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

//JS built in Object?
Number()
Boolean(true).toString()
