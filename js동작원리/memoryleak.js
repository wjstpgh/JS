//memoryleak
let arr = [];
for (let i = 5; i > 1; i++) {
  arr.push(i - 1)
}

//global variable
var a = 1;
var b = 1;
var c = 1;

//event listeners
var element = document.getElementById('button');
element.addEventListener('click', onClick);

//setInterval
setInterval(() => {
  //객체 참조
})