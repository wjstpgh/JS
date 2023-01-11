const obj = { name: "obj" };

obj.hasOwnProperty("name"); //true
//function
function multyplyBy5(num) {
  return num * 5;
}

multyplyBy5.hasOwnProperty("call"); //false

// multyplyBy5.__proto__.//Function의 프로토타입 객체가 제공하는 내장메서드
multyplyBy5.__proto__; //Function.prototype
Function.prototype; //multiplyBy5.__proto__

multyplyBy5.__proto__ === Function.prototype;

Function.prototype.__proto__ === Object.prototype;

Object.prototype.__proto__; //null
Function.prototype.__proto__.__proto__; //null

//array
const array = [];
array.hasOwnProperty("map"); //false 상속받음
array.__proto__.hasOwnProperty("map"); //true

array.__proto__ === Array.prototype; //true

multyplyBy5.__proto__.__proto__ === array.__proto__.__proto__; //true
