//1 Callback Queue - Task Queue
setTimeout(() => {
  console.log("1");
}, 0); //not js, web api
setTimeout(() => {
  console.log("2");
}, 10);

//2 Job Queue - Microtask Queue
Promise.resolve("hi").then((data) => console.log("3", data));

//3
console.log("4");
