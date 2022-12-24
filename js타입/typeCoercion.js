//type coercion
1 == "1";
//dont try coercion
1 === "1";

if (1) {
  console.log("1 is true");
}

if (0) {
  console.log("noting happen");
}
//https://dorey.github.io/JavaScript-Equality-Table/

//Object.is()
-0 === +0;
Object.is(-0, +0);
NaN === NaN;
Object.is(NaN, NaN);
//https://262.ecma-international.org/5.1/#sec-11.9.3
