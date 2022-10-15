//프로토타입의 constructor 속성

function User(name,age){
    this.name=name;
    this.age=age;
}
User.prototype.profile=function(){console.log('profile');}

function User2(name,age){
    this.name=name;
    this.age=age;
}
User2.prototype.profile=function(){console.log('profile2');}

let a1=new User('park',20);
a1.profile();

a1.__proto__=User2.prototype;
a1.profile();

//new를 통해 생성된 객체 > 인스턴스
//인스턴스를 생성한 생성자 함수를 알아내기 > 상속받은 프로토타입 객체를 알아내기
console.log(a1.__proto__.constructor);

function A(){}

const testObj=new A();
console.log(testObj.constructor);//A
console.log(A.prototype.__proto__);//최상위 obj

//객체 리터럴
const test1={
    name:testObj,
    num:1
};
console.log(testObj instanceof A);//true
console.log(test1 instanceof A);//false
console.log(test1 instanceof Object);//true
test1.__proto__=A.prototype;
console.log(test1 instanceof A);