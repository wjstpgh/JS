//inline caching
function find(data) {
  return `a=${data.a} b=${data.b}.`;
}

const data = {
  a: '1',
  b: '2',
}

find(data);//같은 결과에 대해 캐싱

//hidden classes
function Num(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Num(1, 2);
const obj2 = new Num(3, 4);

console.log(obj1);
console.log(obj2);
//나쁜 코드
obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;

console.log(obj1);
console.log(obj2);
//좋은 코드
obj1.x = 30;
obj1.y = 100;
obj2.x = 30;
obj2.y = 100;

console.log(obj1);
console.log(obj2);
