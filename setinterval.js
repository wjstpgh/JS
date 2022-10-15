//timeout은 한번만 실행 interval은 주기적 실행

const tid=setInterval(() => console.log('interval'),1000);
console.log(tid);//1

//주기적 실행 중지
const intervalStop=(tid)=>{
    clearInterval(tid);
}
// setTimeout(intervalStop,5000,tid);
setTimeout(()=>{intervalStop(tid)},5000);

//setInterval동작
setTimeout(() => console.log('test'),300);//한번만 출력
// setInterval(console.log('600'),600);//한번만 출력 함수가 되어야함