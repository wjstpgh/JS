//how catch err in program
function fail() {
  try {
    consol.log("just do");
    // throw new Error("second err");
  } catch (error) {
    console.log("Its,,,fail", error);
  }
}

fail();

try {
  try {
    never();
  } catch (e) {
    throw new Error(e);
  }
} catch (e) {
  console.log("got it", e);
}

try {
  setTimeout(function () {
    fakevariable;
  }, 1000);
} catch (e) {
  console.log("cant catch async");
}
