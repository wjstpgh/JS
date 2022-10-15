//callback
//4중 콜백으로 10,20,30,40의 인자를 1초 간격으로 받을때
setTimeout(
    (x)=>{
        let result=x;
        console.log(result);//10

        setTimeout(
            (x)=>{
                result*=x;
                console.log(result);//10*20=200

                setTimeout(
                    (x)=>{
                        result*=x;
                        console.log(result);//200*30=6000

                        setTimeout(
                            (x)=>{
                                result*=x;
                                console.log(result);//6000*40=240000
                            },
                            1000,
                            40
                        );
                    },
                    1000,
                    30
                );
            },
            1000,
            20
        );
    },
    1000,
    10
);