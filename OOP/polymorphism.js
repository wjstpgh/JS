//Polymorphism
class Animal {
  constructor(name) {
    this.name = name;
  }

  attack() {
    return "attack with " + this.weapon;
  }
}

class Cat extends Animal {
  constructor(name, nail) {
    super(name);
    this.weapon = nail;
  }
}

const naby = new Cat("Naby", "sharp nail");
naby.attack();

class Dog extends Animal {
  constructor(name, tooth) {
    super(name);
    this.weapon = tooth;
  }

  attack(subWeapon) {
    return "attack with " + this.weapon + "and" + subWeapon;
  }
}

const cream = new Dog("Cream", "tiny tooth");
cream.attack("cream's tail");
