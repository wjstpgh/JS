//dynamically type lang
var a = 100;

//statically type lang ex) c
// int a;
a = 100;

//JS
function add(a, b) {
  return a + b;
}

add("hello", 123);

//TS
function sum(a: number, b: number) {
  return a + b;
}

sum("hello", null);
