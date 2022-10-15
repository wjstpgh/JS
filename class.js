class Person{
    //생성자
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    hello(){
        console.log(`hello ${this.name} (${this.age})`);
    }
}

//객체생성
const p1=new Person('kim',20);
console.log(p1.name);
console.log(p1.age);
p1.hello();

const p2=new Person('park',24);
console.log(p2.name);
console.log(p2.age);
p2.hello();

console.log(p1 instanceof Person);//true

//클래스 방식1 생성자
function One(name,age){
    this.name=name;
    this.age=age;
}

One.prototype.say=function(){console.log('hi one');};

const Pone=new One();
Pone.say()
//클래스 방식2 class
class Two{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    say(){
        console.log('hi two');
    }
}
const Ptwo=new Two();
Ptwo.say();

for(let i in Pone){
    console.log(i);
}

for(let i in Ptwo){
    console.log(i);//클래스 메서드는 열거대상이 아니다
}
