//js는 프로토타입을 기반으로 확장, 재사용성을 가지는 언어
//객체의 프로토타입을 가지고 새로운 객체를 생성하는 프로그래밍 방식
//이는 생성되는 객체는 자신의 원형을 가진다는 것
//원래 js는 프로토타입기반이지만 현재는 클래스를 문법적으로 지원
//프로토타입을 이용해 확장, 재사용, 상속을 구현하는 방식이었음
//new에 의해 생성된 객체에 공유 프로퍼티, 메서드등을 제공

const fruit={name:'apple'};
console.log(fruit.name); //apple

//속성추가
fruit.color='red';
console.log(fruit.color);//red

//속성체크 
console.log(fruit.hasOwnProperty('color'));//true
console.log(fruit.hasOwnProperty('shape'));//false
//속성체크를 위한 메서드는 따로 정의한적이 없는데도 사용이 가능
console.log(fruit)//__proto__ : object -> 원형이 오브젝트라는것

const fruit2={
    name:'grape',
    color:'purple',
    hasOwnProperty:function(){
        console.log('Isitwork?');
    }
}

fruit2.hasOwnProperty('which method?');