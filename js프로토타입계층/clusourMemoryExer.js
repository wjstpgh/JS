// let view;

// function init() {
//   view = "view";
//   console.log("view is setting");
// }

// init();
// init();
// init();
// console.log(view);

let view;

function init() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = "view";
      called++;
      console.log("view is setting");
    }
  };
}

const startOnce = init();
startOnce();
startOnce();
startOnce();
console.log(view);
