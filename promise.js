//new promise() --> 대기상태
//여기서 콜백함수선언을 하고 인자는 resolve, reject
//콜백처리 > resulve() > 이행상태 > 성공시 리턴값을 then()이 받아서 계속 처리

new Promise((resolve,reject) => {
    //처리
    setTimeout(
        (x)=>{
            let result=x;
            console.log(result);
            resolve(result);
        },
        1000,
        10
    );
    //resolve();
})
.then((result)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(
            (x)=>{
                result*=x;
                console.log(result);
                resolve(result);
            },
            1000,
            20
        );
    });
})
.then((result)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(
            (x)=>{
                result*=x;
                console.log(result);
                resolve(result);
            },
            1000,
            30
        );
    });
})
.then((result)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(
            (x)=>{
                result*=x;
                console.log(result);
                resolve(result);
            },
            1000,
            40
        );
    });
})