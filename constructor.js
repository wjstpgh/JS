//생성자 내부 동작

const animal={
    name:'tiger',
    age:5
}

console.log(animal.name,animal.age);

//비슷한 객체를 여러 개 생성하기 위해 생성자 함수를 사용

//생성자 함수의 첫 글자는 대문자

function Animal(name,age){
    this.name=name;
    this.age=age;
}

//Animal의 생성자는 인자를 받을 때 마다 새로운 객체를 생성해냄
let a1=new Animal('tiger',5);
let a2=new Animal('lion',3);
let a3=new Animal('bear',7);

//생성자의 내부 실행과정
function Animal(name,age){
    //this={};// 빈 객체를 하나 생성한 후 속성을 추가
    this.name=name;
    this.age=age;
    //return this;
}
//new 를 통해 객체가 생성될 때 위와 같이 생성됨