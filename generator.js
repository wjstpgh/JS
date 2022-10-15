//제너레이터 는 함수지만 보통과는 다르게 동작
//실행 중간에 외부에서 값을 받아서 여러개의 값을 반환
//표현식 function*

//generator test
function* gene(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

//호출 시 바로 실행되는 것이 아닌 iterator객체를 반환
//iter 반복자 객체는 내부적으로 next() method를 가짐

//iterator객체반환 next() 메서드 존재 yield를 만나면 멈추고 제어권 양도
const iter=gene();
//next가 반환하는 속성 {value,done}
console.log(iter.next());//{value:1,done:false}
console.log(iter.next());//{value:2,done:false}
console.log(iter.next());//{value:3,done:false}
console.log(iter.next());//{valueL:4,done:true}
console.log(iter.next());//{value:undefined,done:true}

//next -> yield 순환으로 동작

function* gen(){
    const a=yield 1;
    const b=yield(a*1);
    const c=yield(b+2);
    return a*b*c;
}

const iter2=gen();
console.log(iter.next());
console.log(iter.next(100));
console.log(iter.next(48));
console.log(iter.next(2));



