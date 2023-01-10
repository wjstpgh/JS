// const arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log("idx : " + i);
//   }, 1000);
// }

const arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
  (function (closureI) {
    setTimeout(function () {
      console.log("idx : " + closureI);
    }, 1000);
  })(i);
}
