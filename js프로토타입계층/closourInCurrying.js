function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

a()()();

//a가 스택에서 제거
const one = a();
b();

const boo = (string) => (name) => (name2) =>
  console.log(`${string} ${name} ${name2}`);

boo("hi")("Kim")("See");

const booString = boo("hi");

const booStringName = booString();
