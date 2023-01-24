const elf1 = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    return "attack with" + elf.weapon;
  },
};

const elf2 = {
  name: "Sally",
  weapon: "bow",
  attack() {
    return "attack with" + elf.weapon;
  },
};

elf1.attack();
elf2.attack();

//factory functions
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "attack with" + weapon;
    },
  };
}

// const peter = createElf("Peter", "stones");
// peter.attack();
// const sam = createElf("Sam", "fire");
// sam.attack();

//Object.create
const elfFunctions = {
  attack() {
    return "attack with" + this.weapon;
  },
};

function createElf(name, weapon) {
  return {
    name,
    weapon,
  };
}

const peter = createElf("Peter", "stones");
peter.attack = elfFunctions.attack;
peter.attack();
const sam = createElf("Sam", "fire");
sam.attack = elfFunctions.attack;
sam.attack();

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const peter = createElf("Peter", "stones");
peter.attack();
const sam = createElf("Sam", "fire");
sam.attack();

//Constructor Functions
function Elf(name, weapon) {
  this.name = name; //this pointed toto or alisa when use new keyword
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  return "attack with" + this.weapon;
};

const toto = new Elf("Toto", "knifes");
toto.attack();
const alisa = new Elf("Alisa", "fist");
alisa.attack();

const Elf3 = new Function(
  "name",
  "weapon",
  `newElf.name = name;
  newElf.weapon = weapon;`
);

const sarah = new Elf3("Sarah", "fireworks");

Elf.prototype.build = function () {
  // const self = this;
  function building() {
    return this.name + "'s house";
  }
  return building();
  // return building.bind(this);
};

toto.build();
