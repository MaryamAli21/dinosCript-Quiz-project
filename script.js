const questions = [
    
    {
        question: "1. JavaScript is the programming language of the _____.",
        answers: [
            { text: "Desktop", correct: false },
            { text: "Mobile", correct: false },
            { text: "Web", correct: true },
            { text: "Server", correct: false },
        ],
    },
  
    {
        question: "2. JavaScript is  _____language",
        answers: [
            { text: "an Object-oriented", correct: false },
            { text: "an Object-based", correct: true },
            { text: "a Functional programming", correct: false },
            { text: "All of the above", correct: false },
        ],
    },
    {
        question: "3. Which of the following statement(s) is true about the JavaScript?",
        answers: [
            { text: "It is a scripting language used to make the website interactive", correct: true },
            { text: "It is an advanced version of Java for Desktop and Mobile application development", correct: false },
            { text: "It is a markup language of Java to develop the webpages", correct: false },
            { text: "All of the above", correct: false },
        ],
    },
  
    {
        question: "4. What are the features of JavaScript?",
        answers: [
            { text: "Alternative text for images", correct: true },
            { text: "Alignment of text", correct: false },
            { text: "Attribute list", correct: false },
            { text: "Animation control", correct: false },
        ],
    },
    {
        question: "5. What are advantages of JavaScript over other web technologies?",
        answers: [
            { text: "Automated Programming Interface", correct: false },
            { text: "Application Programming Interface", correct: true },
            { text: "Advanced Protocol Interface", correct: false },
            { text: "Automated Protocol Integration", correct: false },
        ],
    },
  {
      question: "6. JavaScript ignores?",
      answers: [
          { text: "newlines", correct: false },
          { text: "tabs", correct: false },
          { text: "spaces", correct: false },
          { text: "All of the above", correct: true },
      ],
  },

  {
      question: "7. What alligns a difference between JavaScript and Java?",
      answers: [
          { text: "Customer Service Software", correct: false },
          { text: "Cascading Style Sheets", correct: true },
          { text: "Centralized Style System", correct: false },
          { text: "Computer Style Software", correct: false },
      ],
  },
  {
      question: "8. JavaScript code can be written in ____.",
      answers: [
          { text: "JavaScript file (.js file)", correct: false },
          { text: "HTML document directly", correct: false },
          { text: "JavaScript file and in HTML document directly", correct: true },
          { text: "In style sheets (.css file)", correct: false },
      ],
  },

  {
      question: "9. Which symbol is used separate JavaScript statements?",
      answers: [
          { text: "Comma (,)", correct: false },
          { text: "Colon (:)", correct: false },
          { text: "Hyphen (_)", correct: false },
          { text: "Semicolon (;)", correct: true },
      ],
  },
  {
      question: "10. Which JavaScript method is used to access an HTML element by id?",
      answers: [
          { text: "getElementById()", correct: false },
          { text: "getElementById(id)", correct: true },
          { text: "getElement(id)", correct: false },
          { text: "elementById(id)", correct: false },
      ],
  },
];

let currentQuestionIndex = 0;
let userScore = 0;

const startButtonEl = document.querySelector(".start-btn");
const welcomeScreenEl = document.querySelector(".welcome-screen");
const quizScreenEl = document.querySelector(".quiz-screen");
const questionEl = document.querySelector(".question");
const answersButtons = document.querySelector(".answers-container");
const nextButtonEl = document.querySelector(".next-btn");

startButtonEl.addEventListener("click", startQuiz);

function startQuiz() {
  welcomeScreenEl.style.display = "none";
  // quizScreenEl.style.display = "block";
  quizScreenEl.style.display = "flex";
  currentQuestionIndex = 0;
  userScore = 0;
  nextButtonEl.innerHTML = "Next";
  nextButtonEl.style.display = "none";
  displayQuestion();
}

function displayQuestion() {
  resetContainer();
  questionEl.textContent = questions[currentQuestionIndex].question;
  questions[currentQuestionIndex].answers.forEach((answer) => {
      const buttonEl = document.createElement("button");
      buttonEl.innerHTML = answer.text;
      buttonEl.classList.add("ans-btn");
      answersButtons.appendChild(buttonEl);

      if (answer.correct) {
          buttonEl.dataset.correctAns = answer.correct;
      }

      // console.log(buttonEl);

      buttonEl.addEventListener("click", checkAnswer);
  });
}

function checkAnswer(e) {
  const selectedButton = e.target;
  if (selectedButton.dataset.correctAns) {
      userScore++;
      console.log(userScore);
      selectedButton.classList.add("correct-ans");
  } else {
      selectedButton.classList.add("wrong-ans");
  }

  Array.from(answersButtons.children).forEach((button) => {
      if (button.dataset.correctAns === "true") {
          button.classList.add("correct-ans");
      }
      button.disabled = "true";
  });

  nextButtonEl.style.display = "block";
}

function displayResult() {
  resetContainer();
  questionEl.innerHTML = `Quiz is Completed! <br> Your Score: <span class="score">${userScore}/${questions.length}</span>`;

  nextButtonEl.innerHTML = "Restart Quiz";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      displayQuestion();
      nextButtonEl.style.display = "none";
  } else {
      displayResult();
  }
}

nextButtonEl.addEventListener("click", function () {
  if (currentQuestionIndex < questions.length) {
      nextQuestion();
  } else {
      startQuiz();
  }
});

function resetContainer() {
  questionEl.textContent = "";
  answersButtons.innerHTML = "";
}