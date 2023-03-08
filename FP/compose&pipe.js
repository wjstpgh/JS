//Compose
//data >> fn >> data >> fn >> data
const compose = (f, g) => (data) => f(g(data));

const multiplyBy3 = (num) => num * 3;

const makePositive = (num) => Math.abs(num);

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

multiplyBy3AndAbsolute(-50);

//Pipe
const pipe = (f, g) => (data) => g(f(data));

//Arity
// compose -> 2, multiplyBy3 -> 1
