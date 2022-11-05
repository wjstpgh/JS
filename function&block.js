//function scope
if (5 > 4) {
  var secret = '123';
}

secret;

function a() {
  var secret = '123';
}

secret;

//block scope
if (5 > 4) {
  let secret = '123';
}

secret;

function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('final', i);
}

loop();