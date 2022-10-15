//무명함수
const Person=class{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
};

const p1 =new Person('kim',20);
console.log(p1.name);
console.log(p1.age);

//유명함수
const Peaple=class namedPerson{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
}

const p2 =new Peaple('park',30);
console.log(Person.name);
console.log(Peaple.name);

const p3 =new namedPerson('err',0);//err