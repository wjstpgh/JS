//ES6 module
import module1 from "module1"; //fight
import module2 from "module12";

const harry = "potter";
const voldemort = "He who must not be named";

export function fight(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}
