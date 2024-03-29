//function expression
var canada = function () {
  console.log("cold");
};

//function declaration
function india() {
  console.log("warm");
}

//function invocation/call/execution
canada();
india();

function meet(person1, person2) {
  console.log(arguments);
  console.log(Array.from(arguments));
  return `${person1} meet ${person2}`;
}

meet("Kim", "Park");

function meet2(...args) {
  console.log(args);
  console.log(Array.from(arguments));
  return `${args[0]} meet ${args[1]}`;
}

meet2("Kim", "Park");

const meet3 = (person1, person2) => {
  console.log(arguments);
  return `${Array.from(arguments)[2]} meet ${Array.from(arguments)[3]}`;
};

meet3("Kim", "Park", "1", "2");

const meet4 = (person1, person2, ...args) => {
  console.log(args);
  return `${args[0]} meet ${args[1]}`;
};

meet4("Kim", "Park", "1", "2");
