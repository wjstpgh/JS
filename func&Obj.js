//함수 생성과 수행이될때 자신과 같은 이름의 프로토타입 객체가 생성됨

function day(){

}
//day함수의 prototype속성 --> day prototype 객체(참조)
//day prototype 객체의 constructor속성 --> day함수(참조)
//day함수를 통해 생성되는 객체들은 
//모두 prototype을 원형으로 가진다.

//new연산자, 생성자 함수를 이용해 생성된 객체에는 prototype속성이 자동으로 생성
//아래 두 객체의 prototype속성이 가르키는 것은 day의 프로토타입 객체
let mon=new day();
let fri=new day();
console.log(mon);
console.log(fri);

//day객체에 멤버 추가
day.prototype.yuncha=function(whatday){
    return whatday+this.constructor.name+'에 연차 쓰겠습니다';
}
console.log(mon.yuncha('mon'));
console.log(fri.yuncha('fri'));

//자식객체내에서 같은 메서드 생성 @override
fri.yuncha=function(){
    return 'fire friday';
}
console.log(mon.yuncha('mon'));
console.log(fri.yuncha('fri'));

//속성추가
mon.feel='hell';
console.log(mon.feel);//hell
console.log(fri.feel);//undefined

//day의 prototype 객체는 객체 생성을 위한 부모격의 원형객체

