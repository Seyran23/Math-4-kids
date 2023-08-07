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



function setAnswersNumber() {
  let answers = [];
  let switchingAnswers = [];

  while (answers.length < 2) {
    let wrongAnswer;
    if (num1 < 5) {
      wrongAnswer = getRandomNumber(0, result + num1);
    } else {
      wrongAnswer = getRandomNumber(result - 5, result + 5);
    }

    if (result !== wrongAnswer) {
      answers.push(wrongAnswer);
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