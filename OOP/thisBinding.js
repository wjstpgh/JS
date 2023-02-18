//new binding this
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Xavier", 55);
console.log(person1);

//implicit binding
const person = {
  name: "Karen",
  age: 40,
  hi() {
    console.log("hi" + this.name);
  },
};

//explicit binding
const person3 = {
  name: "Tom",
  age: 13,
  hi: function () {
    console.log("hi" + this.setTimeout);
  }.bind(window),
};

person3.hi();

//arrow func
const person4 = {
  name: "kung",
  age: 22,
  hi: function () {
    var inner = () => {
      console.log("hi" + this.name);
    };
    return inner();
  },
};

person4.hi();
