let num1, num2;
let result;

function setProblemNumbers() {
  for (;;) {
    num1 = getRandomNumber(0, 16);
    num2 = getRandomNumber(0, 16);

    if (num1 >= num2) {
      break;
    }
  }

  firstNumber.innerText = num1;
  secondNumber.innerText = num2;

  result = num1 - num2;
}