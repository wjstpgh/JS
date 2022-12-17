//메모리 할당
const number = 6;
const string = 'text';
var human = {
  first: '성',
  last: '이름',
}

human = 5;//mark

//콜스택
function sub(num) {
  return num - 1;
}

function calc() {
  const sum = 1 + 2;
  return sub(sum);
}
debugger;
calc()

//콜 스택 오버플로우
function loop() {
  loop()
}

loop()//Maximum call statck size exceeded

