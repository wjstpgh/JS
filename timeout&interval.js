//promise, generator등을 이용해 비동기 처리 가능
//settimeout > 일정시간 후 한번 실행
//setinterval > 일정시간 마다 실행

//setTimeout
function setTout(){
    console.log('setTimeout');
}

setTout();//일반 호출
setTimeout(setTout,2000);//지연호출 2초 후

function setTout2(value){
    console.log(value);
}
setTimeout(setTout2,5000,'test');

const tout=setTimeout((text) => console.log(text),4000,'texting');
console.log('식별자 '+tout);//3

setTimeout(()=>console.log('a'),4000)

//setTimeout호출 > 타이머 식별자 반환 > number
const ti=setTimeout((a)=>console.log(a),2000,'aaa');
console.log('ti = '+ti);

clearTimeout(ti);

