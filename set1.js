// es6에서 map, set이란 데이터 자료구조가 새롭게 도입됨

//배열은 중복값이 허용됨
let arr=[1,2,3,3,3];
console.log(arr); //1,2,3,3,3
console.log(arr[2]);//3
console.log(arr[4]);//3

//set사용법 (생성->new, 추가->add, 삭제->delete)

//생성
let set=new Set(); // set생성

//추가
set.add(1);
set.add(2);
set.add(3);
console.log(set); // 1,2,3

//set의 크기 (length가 아닌 size로 크기를 구함)
console.log(set.size); //3

//set은 중복값이 허용되지 않음
set.add(3);
set.add(3);
console.log(set); //1,2,3
console.log(set.size); //3

//삭제
set.delete(3);
console.log(set); //1,2

//한번에 삭제
set.clear();
console.log(set);
