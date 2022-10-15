//심볼타입은 es6에서 추가된 객체의 속성으로 사용되는 원시형타입(원시형,참조형 중)
//심볼형이 사용됬다는 것은 유니크한 값을 가진다는 것
//심볼형은 따라서 변경이 불가능함

//충돌을 피하기 위해 심볼을 사용함
let arr=[1,2,3];
console.log(arr.length); //3, 배열의 길이
//arr.length=10;//arr배열의 length속성을 정의, 내장된 length의 값을 덮어써버림
console.log(arr.length); //10

const length=Symbol('length');
arr[length]=10; //arr배열의 length속성에 10을 할당, 내장된 length와 충돌하지 않음
console.log(arr.length);//3, 내장된 배열길이
console.log(arr[length]);//10, arr배열의 length속성

let testSb=Symbol();//괄호 속 인자는 없어도 됨

console.log(testSb);//symbol()

//심볼은 for in 으로 출력되지 않음
let arr1=[1,2,3];
arr1.prop=10;

//0,1,2,prop 마지막인자로 추가되는 게 아님
for(let i in arr1){
    console.log(i); 
}

//심볼형 사용
let arr2=[1,2,3];
let symProp=Symbol('arrprop');
arr2[symProp]=7;

for(let i in arr2){
    console.log(i);//심볼속성은 나타나지 않음
}
console.log(arr2[symProp]);//7

//배열에 속성을 넣으면서 나타나지 않고자 할 때 심볼사용