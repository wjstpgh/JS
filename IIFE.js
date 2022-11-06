//IIFE

(function () {
  var a = 1;
})();

// function(){}()//err

var script1 = (function () {
  function a() {
    return 5;
  }
  return {
    a: a,
  }
})()


