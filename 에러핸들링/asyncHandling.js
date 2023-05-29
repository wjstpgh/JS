(async function () {
  try {
    await Promise.resolve("async fail #1");
    await Promise.reject("async fail #2");
  } catch (err) {
    console.log(err);
  }
  console.log("isnt still good?");
})();
