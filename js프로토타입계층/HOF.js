//HOF
function letAdamLogin() {
  let array = [];
  for (let i = 0; i < 100000; i++) {
    array.push(i);
  }
  return "Access Adam";
}

function letEvaLogin() {
  let array = [];
  for (let i = 0; i < 100000; i++) {
    array.push(i);
  }
  return "Access Eva";
}

letAdamLogin();
letEvaLogin();

function letUserLogin(user) {
  let array = [];
  for (let i = 0; i < 100000; i++) {
    array.push(i);
  }
  return "Access" + user;
}

letUserLogin("Adam");
letUserLogin("Eva");

//함수에 어떤 데이터를 전달할 지 정할 수 있다.
const giveAccessTo = (name) => "Access to " + name;

function letUserLogin(user) {
  let array = [];
  for (let i = 0; i < 100000; i++) {
    array.push(i);
  }
  return giveAccessTo(user);
}

letUserLogin("Adam");
letUserLogin("Eva");

//사용자의 타입에 따라 함수의 내용이 달라질 때
function letUserLogin(admin) {
  let array = [];
  for (let i = 0; i < 5000000; i++) {
    array.push(i);
  }
  return giveAccessTo(admin);
}

function authenticate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return true;
}

function letPerson(person, fn) {
  if (person.level === "admin") {
    fn(500000);
  } else if (person.level === "user") {
    fn(100000);
  }
  return giveAccessTo(person.name);
}

letPerson({ level: "user", name: "Adam" }, authenticate);
letPerson({ level: "admin", name: "SEO" }, authenticate);

function masage(person) {
  return "Hi" + person.name;
}

function authenticate(person, verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}

function letPerson(person, fn) {
  if (person.level === "admin") {
    return fn(person, 500000);
  } else if (person.level === "user") {
    return fn(person, 100000);
  }
}

letPerson({ level: "user", name: "Adam" }, authenticate);
letPerson({ level: "admin", name: "SEO" }, authenticate);
letPerson({ level: "user", name: "Eva" }, masage);
