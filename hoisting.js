//함수레벨 스코프, 블록 레벨 스코프
var a=1;//전역변수
console.log(a);//1

{//블록 레벨 스코프
    //var는 중복 선언이 가능
    var a=333;//전역변수,var는 함수레벨 스코프이기 때문에 전역취급
}
console.log(a);//333

//js는 변수와 함수의 선언문들을 호이스팅
var var1;
console.log('var1:'+var1);//undefined

console.log('var2:'+var2);//undefined
var var2;

// console.log('let1:'+let1);//Err
let let1;

//클래스 호이스팅
class Person{}
console.log(Person);

const p1=new Person();
console.log(p1);

console.clear();
var str1='hello';

const testFun=function(){
    console.log(str1);
    var str1='world';
};
testFun();//undefined

class Parent{}
class Child extends Parent{}

//에러 발생
class Child2 extends Parent2{}
class Parent2{}


