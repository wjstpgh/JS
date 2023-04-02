//ES9

//finally
const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/users/3",
  "https://jsonplaceholder.typicode.com/users/4",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((peaple) => peaple.json());
  })
)
  .then((array) => {
    // throw Error;
    console.log("1", array[0]);
    console.log("2", array[1]);
    console.log("3", array[2]);
    console.log("4", array[3]);
  })
  .catch((err) => console.log("Error throw", err))
  .finally(() => console.log("extra")); //no matter success or fail

//for await of
const getData = async () => {
  try {
    const [one, two, three, four] = await Promise.all(
      urls.map(async (url) => {
        const res = await fetch(url);
        return res.json();
      })
    );
    console.log("1", one);
    console.log("2", two);
    console.log("3", three);
    console.log("4", four);
  } catch (err) {
    console.log(err);
  }
};

getData();

const getDataLoop = async () => {
  const arrOfPromise = urls.map((url) => fetch(url));
  for await (let req of arrOfPromise) {
    const data = await req.json();
    console.log(data);
  }
};

getDataLoop();