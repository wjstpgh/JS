const calc=(x,y)=>{
    setTimeout(
        ()=>{
            iter.next(x*y);
        },
        1000
    );
};

function* gen(){
    const a=yield calc(1,10);
    console.log(a);//10

    const b=yield calc(a,20);
    console.log(b);//200

    const c=yield calc(b,30);
    console.log(c);//6000

    const d=yield calc(c,40);
    console.log(d);//240000
};

const iter=gen();
iter.next();
// iter.next();//undefined
// iter.next(1);//1
// iter.next(2);//2
// iter.next(3);//3
// iter.next(5);//미실행