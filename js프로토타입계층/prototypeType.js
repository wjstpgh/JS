//only function has prototype
function multiplyBy5(num){
  return num*5
}

multiplyBy5.prototype

multiplyBy5.__proto__===Function.prototype

multiplyBy5.__proto__.__proto__===Object.prototype

multiplyBy5.__proto__.__proto__.__proto__===null

typeof Object//function

const obj={}//Object constructor

typeof obj//object

typeof Object.prototype//object

obj.prototype//undefined

const arr=[]

arr.prototype//undefined

Array.prototype//array