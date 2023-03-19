//async await ES8
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then(console.log);

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

fetchUsers();

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

//promise
Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch((err) => console.log(err));

//async
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch (err) {
    console.log(err);
  }
};

getData();
