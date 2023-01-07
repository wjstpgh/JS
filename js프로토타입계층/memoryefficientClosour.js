//memory efficient
function heavy(idx) {
  const bigArr = new Array(10000).fill("大");
  console.log("created");
  return bigArr[idx];
}

heavy(411); //참조 때마다 배열1만개가 생성되고 제거됨
heavy(411);
heavy(411);
heavy(411);

function heavy2() {
  const bigArr = new Array(10000).fill("大");
  console.log("created again");
  return function (idx) {
    return bigArr[idx];
  };
}

const getHeavy = heavy2();

getHeavy(600); //첫 참조때 한번만 배열이 생성되고 참조가 끝나면 제거됨
getHeavy(700);
getHeavy(800);
getHeavy(900);
