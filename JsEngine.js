//parser, AST
function parser(code) {
  return code.split(/\s+/)
}

parser('var a = 5')

//interpreter & compiler, JIT just in time compiler
function add(x, y) {
  return x + y;
}

for (let i = 0; i < 10; i++) {
  add(6, 4);
}
