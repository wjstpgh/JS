function Add(a,b){
    this.a=a;
    this.b=b;
    //생성자 안에 메서드를 정의하는 경우
    this.plus=function(){
        return this.a+this.b;
    };
}

//모든 객체마다 메서드가 생성된다.
let add1=new Add(100,10);
console.log(add1.plus());
console.log(add1);

let add2=new Add(100,20);
console.log(add2.plus());
console.log(add2);

let add3=new Add(100,30);
console.log(add3.plus());
console.log(add3);


//메서드를 생성자 밖에서 생성한 경우
function Add2(a,b){
    this.a=a;
    this.b=b;
}
Add2.prototype.plus=function(){
    return this.a+this.b;
}

let add4=new Add2(100,10);
console.log(add4.plus());
console.log(add4);

let add5=new Add2(100,20);
console.log(add5.plus());
console.log(add5);

let add6=new Add2(100,30);
console.log(add6.plus());
console.log(add6);

//name 속성은 Add2로 생성되는 모든 객체가 공통으로 사용할 수 있음
Add2.prototype.name='plus';
console.log(add4.name);
