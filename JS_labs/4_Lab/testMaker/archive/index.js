let questionCounter = 0;
let correctAnswersCounter = 0;
let previousSelectedIndex = -1;
const maxQuestions = 10;
const radios = document.querySelectorAll('input[type="radio"]');
const answerLabels = document.querySelectorAll('label[id^="answer-radio"]');



function generateQuestion() {
  const firstNumber = Math.floor(Math.random() * 30) + 1;
  const secondNumber = Math.floor(Math.random() * 30) + 1;
  const rightAnswer = firstNumber * secondNumber;
  const equationText = `${firstNumber} x ${secondNumber}`;

  document.getElementById("equation").innerText = equationText;

  const randomRightIndex = Math.floor(Math.random() * 4);
  for (let i = 0; i < answerLabels.length; i++) {
    const labelForRadio = answerLabels[i];
    const randomAnswer = Math.floor(Math.random() * 900) + 1;

    if (i === randomRightIndex) {
      labelForRadio.textContent = rightAnswer;
    } else {
      labelForRadio.textContent = randomAnswer;
    }
  }

  radios.forEach((radio) => {
    radio.disabled = false;
  });

  questionCounter++;
  document.getElementById("answerCounter").innerText = `${questionCounter} question out of ${maxQuestions} (${correctAnswersCounter}/${questionCounter} questions right)`;

  if (questionCounter === maxQuestions) {
    document.querySelector('button').remove();
    radios.forEach((radio) => {
      radio.remove();
    });
  }
}


function validateAnswer(userSelectedIndex, correctIndex) {
  return userSelectedIndex === correctIndex;
}

function showResult(isCorrect) {
  const responseLabel = document.getElementById("response");
  responseLabel.innerText = isCorrect ? "Correct!" : "Incorrect!";
}

function checkAnswer() {
  const selectedRadio = document.querySelector('input[name="answer"]:checked');

  if (selectedRadio) {
    const userSelectedIndex = parseInt(selectedRadio.value);
    const isCorrect = validateAnswer(userSelectedIndex, previousSelectedIndex);

    if (isCorrect) {
      correctAnswersCounter++;
    }

    showResult(isCorrect);

    document.getElementById("answerCounter").innerText = `${questionCounter} question out of ${maxQuestions} (${correctAnswersCounter}/${questionCounter} questions right)`;
  }
}

function deselectRadioButtons() {
  radios.forEach((radio) => {
    radio.checked = false;
  });
}

function showRightAnswer() {
  checkAnswer();

  radios.forEach((radio, index) => {
    if (index !== previousSelectedIndex) {
      radio.disabled = previousSelectedIndex !== -1;
    }
  });

  if (previousSelectedIndex === -1 || questionCounter === maxQuestions) {
    previousSelectedIndex = -1;
  }

  deselectRadioButtons();
  generateQuestion();
}

radios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    previousSelectedIndex = index;
  });
});

generateQuestion();

