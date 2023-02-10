//ES2022 private class
class Employee {
  #name = "Test"; //private field

  constructor(name) {
    this.#setName(name); //ok
  }

  #setName(name) {
    //private method
    this.#name = name;
  }

  sayName() {
    return this.#name;
  }
}

const emp = new Employee("New"); //ok
// emp.#name = "New"; //err
// emp.#setName("New"); //err
emp.sayName(); //New
