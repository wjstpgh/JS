let cnt=0;

let tid=setInterval(()=>{
    console.log(''+tid);
    cnt++;
    if(cnt==10)clearInterval(tid);
},1000);

function clock(){
    let clock=document.getElementById('clock');
    let d=new Date();

    clock.innerText='현재 시각은 ${d.getMonth()}월 ${d.getDate()}일 ${d.getHours()}시 ${d.getMinutes()}분 ${d.getSeconds()}초 입니다.';
    
    setTimeout(clock,2000);
}
// window.onload=()=>clock();
window.onload=setInterval(()=>clock(),2000);