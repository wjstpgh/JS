//call
function a() {
  console.log("a");
}

a.call(); //a
a.apply(); //a
a(); //a

const wizard = {
  name: "Merlin",
  health: 70,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
  revival() {
    return (this.health = 100);
  },
};

console.log(wizard);
wizard.revival();
console.log(wizard);

const archer = {
  name: "Robin Hood",
  health: 30,
};

//call, apply는 다른 객체의 함수를 빌릴 수 있다.
console.log(archer);
wizard.revival.call(archer);
console.log(archer);

console.log(archer);
wizard.heal.apply(archer, [30, 10]); //call(archer,30,10)
console.log(archer);


console.log(archer);
const healArcher = wizard.heal.bind(archer, 30, 10);
healArcher();
console.log(archer);
