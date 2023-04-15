const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 6000));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

Promise.all([promise1, promise2])
  .then((data) => console.log(data))
  .catch(() => console.log("err"));

//allSettled
Promise.allSettled([promise1, promise2])
  .then((data) => console.log(data))
  .catch(() => console.log("err"));

//any
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
});

(async function () {
  const result = await Promise.any([p1, p2, p3]);
  console.log(result); // Prints "A", "B" or "C"
})();