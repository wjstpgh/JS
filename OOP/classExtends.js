class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with" + this.weapon;
  }
}

const fiona = new Elf("Fiona", "ninja stars");
const ogre = { ...fiona };

console.log(ogre);
ogre.__proto__; //empth obj
console.log(fiona === ogre); //false
ogre.attack(); //not func err

//extends
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with" + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    console.log(this); //err
    super(name, weapon); //Character's constructor
    console.log(this); //super후에 인스턴스가 생성되고 this에 접근가능
    this.type = type;
  }
}

const doby = new Elf("Doby", "cloth", "house");
console.log(doby);
doby.attack();

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return "strongest fort in the world made";
  }
}

const shrek = new Ogre("Shrek", "club", "green");
shrek.makeFort();
shrek.attack();

console.log(Ogre.isPrototypeOf(shrek)); //false
console.log(Ogre.prototype.isPrototypeOf(shrek)); //true
console.log(Character.prototype.isPrototypeOf(Ogre)); //false
console.log(Character.prototype.isPrototypeOf(Ogre.prototype)); //false

console.log(doby instanceof Elf); //true
console.log(doby instanceof Character); //true
console.log(shrek instanceof Elf); //false
console.log(shrek instanceof Character); //true
