function a() {}
for (let i = 0; i < 5; i++) {
  // function a(){ <= dont init func in loop

  // }
  a();
}

function b(param = 6) {
  return param;
}

b();
