function a() {
  console.log(this);
}

a();

window.a();

function b() {
  "use strict";
  console.log(this);
}

b();

//1: this로 자신의 메서드에 접근할 수 있다.
const obj = {
  a: "A",
  b: function () {
    return this.a + "B";
  },
  c() {
    return this.b() + "C";
  },
};

obj.a;
obj.b();
obj.c();

//2: 같은 코드를 여러개의 객체에서 실행할 수 있다.
function sky() {
  console.log(this.name);
}

const name = "sky";

const obj1 = {
  name: "sun",
  sky: sky,
};

const obj2 = {
  name: "moon",
  sky: sky,
};

sky();
obj1.sky();
obj2.sky();

var b = {
  name: "jay",
  say() {
    console.log(this);
  },
};

var c = {
  name: "jay",
  say() {
    return function () {
      console.log(this); //window
    };
  },
};

var d = {
  name: "jay",
  say() {
    return () => console.log(this); //but arrow is lexical
  },
};

b.say();
c.say()();
d.say()();
