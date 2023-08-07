const firstNumber = document.querySelector(".first_number");
const secondNumber = document.querySelector(".second_number");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const audio = document.getElementById("myAudio");

function getRandomNumber(min, max) {
  let range = max - min + 1;
  let randomNumber = Math.floor(Math.random() * range) + min;
  return randomNumber;
}


let num1, num2;
let result;

function setProblemNumbers() {
  for (;;) {
    num1 = getRandomNumber(0, 16);
    num2 = getRandomNumber(0, 16);

    if (num2 !== 0) {
      break;
    }
  }

  firstNumber.innerText = num1;
  secondNumber.innerText = num2;

  result = num1 / num2;

  if (!(Number.isInteger(result))) {
    result = result.toFixed(1);
  }
}

function setAnswersNumber() {
  let answers = [];
  let switchingAnswers = [];

  let wrongAnswer1;
  let wrongAnswer2;

  while (answers.length < 2) {
    wrongAnswer1 = (Math.random() * 8.5).toFixed(1);
    wrongAnswer2 = getRandomNumber(0, 13);
    console.log(wrongAnswer1);
    console.log(wrongAnswer2);


    if ((result !== wrongAnswer1 || result !== wrongAnswer2) && (wrongAnswer1 !== wrongAnswer2)) {
          answers.push(wrongAnswer1, wrongAnswer2);
        }
  }

  answers.push(result);

  for (let i = answers.length;i--;) {
    switchingAnswers.push(answers.splice(Math.floor(Math.random() * (i + 1)), 1 )[0]);
  }

  option1.innerText = switchingAnswers[0];
  option2.innerText = switchingAnswers[1];
  option3.innerText = switchingAnswers[2];


}

setProblemNumbers();
setAnswersNumber();

option1.addEventListener("click", function() {
  if (option1.innerText == result) {
    setProblemNumbers();
    setAnswersNumber();
  }
  else {
    audio.play();
  }
});

option2.addEventListener("click", function() {
  if (option2.innerText == result) {
    setProblemNumbers();
    setAnswersNumber();
  }
  else {
    audio.play();
  }
});

option3.addEventListener("click", function() {
  if (option3.innerText == result) {
    setProblemNumbers();
    setAnswersNumber();
  }
  else {
    audio.play();
  }
});