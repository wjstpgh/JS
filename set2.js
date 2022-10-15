//set생성시 값 추가
// let set=new Set().add('A').add('B');
// console.log(set);

// //값 추가
// set.add('C');
// set.add('D');
// set.add('E');
let set=new Set(['A','B','C','D','E']);
console.log(set, ', 집합 크기 : '+set.size);

//출력, spread연산자 -> iterable 객체의 요소를 분리해서 출력해줌
console.log(...set);//A B C D E
console.log([...set]);//배열의 형태로 spread

//for 반복문
for(let i=0;i<set.size;i++){
    console.log(set[i]);
}

//forEach반복
set.forEach(function(x){
    console.log(x);
});

set.forEach(val => console.log(val));

//set의 다양한 메서드 -> keys(),values()
console.log(set[0]); //A가 아닌 undefined가 출력
let arr=[...set]
console.log(arr[3]);// D, 배열은 인덱스로 접근가능

//keys() -> iterator 객체를 반환해줌 -> next()
const key_itr=set.keys();
console.log(key_itr.next().value);//A
console.log(key_itr.next().value);//B
console.log(key_itr.next().value);//C
console.log(set.keys().next().value);//A

//values() -> iterator 객체를 반환해줌 -> next()
const val_itr=set.values();
console.log(val_itr.next().value);//A
console.log(val_itr.next().value);//B
console.log(val_itr.next().value);//C

//for of반복문
for(let i of set){//in이 아닌 of를 사용
    console.log(i)
}

//entries()
const ent=set.entries();

for(let i of ent){//각 set요소에 대해 키-값을 배열요소로 반환
    console.log(i);
}