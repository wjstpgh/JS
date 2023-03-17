const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Worked");
  } else {
    reject("Error");
  }
});

promise.then((result) => console.log(result));

promise
  .then((result) => result + "!!")
  .then((result2) => {
    throw Error;
    console.log(result2);
  })
  .catch(() => console.log("Error"));

promise
  .then((result) => result + "1")
  .then((result2) => result2 + "3")
  .catch(() => console.log("error"))
  .then((result3) => {
    // throw Error;
    console.log(result3 + "2");
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "is");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Good");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "isnt it?");
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((res) => res.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch((err) => console.log(err));

fetch(urls[0]); //return Promise
