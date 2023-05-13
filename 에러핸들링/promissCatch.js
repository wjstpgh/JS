Promise.resolve("async fail")
  .then((res) => {
    throw new Error("#1 fail");
    return res;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
    return err;
  })
  .then((res) => {
    console.log(res.message);
    throw new Error("#2 fail");
  })
  .catch((err) => {
    console.log("final err", err);
  });

Promise.resolve("async fail")
  .then((res) => {
    Promise.resolve().then(() => {
      throw new Error("#3 fail");
    }); //this promise block doesn't handling err
    return res;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
    return err;
  })
  .then((res) => {
    console.log(res.message);
    throw new Error("#2 fail");
  })
  .catch((err) => {
    console.log("final err", err);
  });

// fix it
Promise.resolve("async fail")
  .then((res) => {
    Promise.resolve()
      .then(() => {
        throw new Error("#3 fail");
      })
      .catch(console.log);
    return res;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("final err", err);
  });
