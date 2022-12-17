//IIFE 즉시 실행 함수
(function () {
  var a = 1;
})();
//IIFE에서 정의된 변수 a는 외부에서 접근 불가
console.log(a); //err

// function(){}()//err

var script1 = (function () {
  function a() {
    return 5;
  }
  return {
    a: a(),
  };
})();

script1;//IIFE함수는 저장되지 않고 실행 결과만 저장
