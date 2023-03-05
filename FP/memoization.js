function addTo5(n) {
  console.log("calculation...");
  return n + 5;
}

addTo5(5);
addTo5(5);
addTo5(5);

//only one time calculation
function memoizedAddTo5() {
  let cache = {};

  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("calculation...");
      cache[n] = n + 5;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo5();

memoized(5);
memoized(5);
memoized(5);

memoized(10);
memoized(10);
