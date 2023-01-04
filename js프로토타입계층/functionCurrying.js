const multiplyBy = function (num1) {
  return function (num2) {
    return num1 * num2;
  };
};

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4);
multiplyByTwo(5);

const multiplyByFive = multiplyBy(5);
multiplyByFive(4);
multiplyByFive(5);

const multiBy = (num1) => (num2) => {
  return num1 * num2;
};

const multiByTwo = multiBy(2);
multiByTwo(1);
multiByTwo(12);

const multiBySix = multiBy(6);
multiBySix(4);
multiBySix(7);

multiBy(7)(4);
