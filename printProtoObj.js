//프로토타입출력 __proto__ , Object.getPrototypeOf()

function A(){};
let obj=new A();
console.log(obj.__proto__);

console.log(Object.getPrototypeOf(obj));

function B(){};
let obj2=new B();
console.log(obj2.__proto__===Object.getPrototypeOf(obj2));//true
