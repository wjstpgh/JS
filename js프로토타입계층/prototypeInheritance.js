let dragon = {
  name: "Red dragon",
  fire: true,
  fight() {
    return 100;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name} the breather of fire`;
    }
  },
};

let lizard = {
  name: "sand lizard",
  fight() {
    return 1;
  },
};

const signLizard = dragon.sing.bind(lizard);
console.log(signLizard());

lizard.__proto__ = dragon;
dragon.isPrototypeOf(lizard);
lizard.name;
lizard.fire;
lizard.fight();
lizard.sing();

for (let p in lizard) {
  console.log("all props : " + p);
  if (lizard.hasOwnProperty(p)) {
    console.log("own props : " + p);
  }
}
