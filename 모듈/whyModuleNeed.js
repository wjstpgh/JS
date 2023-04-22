user = {};

function signin(user) {
  var textfield = "text";
}

function isHuman(user) {
  // ...
}

// ...more extends
// tight coupling
{
  /* <script src="./script1.js"></script>
<script src="./script2.js"></script>
<script src="./script3.js"></script> */
}

// script1.js
var harry = "potter";
var voldemort = "He who must not be named";

function fight(char1, char2) {
  var attack1 = Math.floor(Math.random() * char1.length);
  var attack2 = Math.floor(Math.random() * char2.length);
  console.log(attack1, attack2);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}

fight(harry, voldemort);

//script2.js
var fight = "no way";
