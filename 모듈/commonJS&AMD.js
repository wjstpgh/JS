//module name still duplicate << global scope
//declared order << dependency resulution

// CommonJS
var module1 = require("module1"); //.fight
var module2 = require("module2"); //.importedFunc2

function fight() {}

module.exports = {
  fight: fight,
};

// browserify or webpack bundling all package dependency

//AMD
define(["module1", "module2"], function (module1Import, module2Import) {
  var module1 = module1Import;
  var module2 = module2Import;

  function dance() {}

  return {
    dance: dance,
  };
});
