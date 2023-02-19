//Idempotence
function notGood(num) {
  return Math.random(num); //인자에 영향받지 않는 다른 결과
  console.log(num); //인자에 영향받는 같은 결과
}

notGood(5);

Math.abs(Math.abs(-50)); //항상 같은 행동의 결과
