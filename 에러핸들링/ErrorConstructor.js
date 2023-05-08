Error;

new Error("에러 메시지");

throw new Error();

throw "string";
throw true;
//stop execution program

const myErr = new Error("text err");
myErr.message; //text err
myErr.stack; //where the err happen

function a() {
  const b = new Error("in a");
  return b;
}

a(); //stack
a().stack;

new SyntaxError();
// (,//syntax err

new ReferenceError();
// some//reference err

// if programmer dont catch exception,
// Runtime catch: onerror()
// process.on('uncaughtExceoption')
