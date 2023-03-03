//Partial Application
const add = (a, b, c) => a + b + c;
const curriedAdd = (a) => (b) => (c) => a + b + c;
curriedAdd(1)(2)(3); //currying expect one arg at time

const partialAdd5 = add.bind(null, 1);
partialAdd5(2, 3); //second call expect all the arg
