//Immutability
const obj = { name: "Kim" };

function clone(obj) {
  return { ...obj }; //this is pure
}

obj.name = "Park";

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Park";
  return obj2;
}

const updateObj = updateName(obj);
console.log(obj, updateObj);
