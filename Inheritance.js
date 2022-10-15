//JS는 OOP는 맞지만 prototype Inheritance에 기반을 둔 OOP(Class문법지원)

let user1={
    name:'kim',
    age:20,
    hi:function(){console.log('hi '+this.name);}
}

let user2={
    name:'park'
}

console.log(user2);//proto -> obj(최상위)
console.log(user2.name);//park

//proto속성이 가르키는 것을 변경하는 것도 가능
user2.__proto__=user1;
console.log(user2);
console.log(user2.name);
console.log(user2.age);
user2.hi();

console.clear();
let user3={};
user3.__proto__=user2;
console.log(user3.hasOwnProperty('name'));//false
console.log(user3.name);//park
console.log(user3.age);//20
user3.hi();//hi park
