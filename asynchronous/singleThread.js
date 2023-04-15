//Single threaded
var worker = new Worker("worker.js");
worker.postMessage("Hi");

addEventListener("message");

// Concurrency         Concurrency + parallelism
// (Single-Core CPU)   (Multi-Core CPU)

//  ___                 ___ ___
// |th1|               |th1|th2|
// |   |               |   |___|
// |   |               |   |___
// |___|___            |___|th2|
//     |th2|            ___|___|
//  ___|___|           |th1|
// |th1|               |   |___
// |___|___            |   |th2|

const { spawn } = require("child_process");

spawn("git", ["stuff"]);