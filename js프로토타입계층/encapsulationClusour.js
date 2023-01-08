//Encapsulation
const makeNuclearButton = () => {
  let countDown = 0;
  const passTime = () => countDown++;
  const totalPeaceTime = () => countDown;
  const launch = () => {
    countDown = -1;
    return "boom";
  };

  setInterval(passTime, 1000);
  return {
    launch: launch,
    totalPeaceTime: totalPeaceTime,
  };
};

const Fatman = makeNuclearButton();
Fatman.totalPeaceTime();
Fatman.launch(); //count초기화
