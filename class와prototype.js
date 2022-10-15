//클래스의 타입체크
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    
    hello(){
        console.log(this.name,this.age);
    }
}
//타입체크
console.log(typeof Person);//function

//함수는 객체
function multiplication(a,b){
    return a*b;
}

//속성추가
multiplication.ret=multiplication(2,3);
console.log(multiplication.ret);//6

//클래스의 타입이 function인 이유

