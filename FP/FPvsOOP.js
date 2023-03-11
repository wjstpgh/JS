//Inheritance > what it is
//tight coupling
//fragile base class problem
class Parent {
  constructor(name) {
    this.name = name;
  }
  sleep() {}
}

class Child1 extends parent {
  constructor(name, subName) {
    super(name);
    this.subName = subName;
  }
}

class Child2 extends parent {
  constructor(name, subName) {
    super(name);
    this.subName = subName;
  }
}

//hierarchy

//Composition > what it has
function getAttack(child) {
  return Object.assign({}, child, { attackFn: () => {} });
}

function child(name, subName) {
  let child = {
    name,
    subName,
  };
  return getAttack(child);
}

child1 = attack() + sleep();
child2 = crying() + sleep();
