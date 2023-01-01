// Functions are first class citizens in JS

//1 함수를 변수에 저장할 수 있다
var stuff = function () {};

//2 함수를 인자로 전달할 수 있다
function a(fn) {
  fn();
}

a(function () {
  console.log("this is argument func");
});

//3 함수를 값으로 리턴할 수 있다
function b() {
  return function c() {
    console.log("this is return func");
  };
}

b()();

var d = b();
d();
