//function scope
if (5 > 4) {
  var secret = '123';
}

secret;//'123'

function a() {
  var secret = '123';
}

secret;//err

//block scope
if (5 > 4) {
  let secret = '123';
}

secret;//err

function loop() {
  for (var i = 0; i < 5; i++) {//var or let
    console.log(i);
  }
  console.log('final', i);
}

loop();