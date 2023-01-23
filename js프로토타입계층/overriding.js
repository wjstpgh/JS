//functionality of built in object

//작년을 나타내려는 함수를 만드려면?
new Date("2023-01-09").lastYear();

Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

new Date("2023-01-09").lastYear();

Date.prototype.lastYear = () => {
  //arrow function's this have lexically scope
  return this.getFullYear() - 1;
};

//배열의 원소에 #을 추가해서 출력하려면?
console.log([1, 2, 3].map());
//1#,2#,3#

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "#");
  }
  return arr;
};

console.log([1, 2, 3].map());
