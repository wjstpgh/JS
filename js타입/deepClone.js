//call by value
//각자 값에 대한 저장공간을 가진다
var a = 5;
var b = a;

b++;

console.log(a);
console.log(b);

//call by reference
let obj1 = { name: "Kim", password: "123" };
let obj2 = obj1; //obj1의 주소가 들어간다.

obj2.password = "easy";

console.log(obj1);
console.log(obj2);

//array
var c = [1, 2, 3];
var d = c;

d.push(999);

console.log(d);
console.log(c);

var d = [].concat(c);

d.push(111);

console.log(d);
console.log(c);

//obj
let obj = { a: "a", b: "b", c: { deep: "try copy" } };
//shallow clone
let clone = Object.assign({}, obj);
let clone2 = { ...obj };

obj.b = 5;

console.log(obj);
console.log(clone);
console.log(clone2);

obj.c.deep = "hahahah";

console.log(obj);
console.log(clone);
console.log(clone2);

//deep clone
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "heheh";

console.log(obj);
console.log(clone);
console.log(superClone);
