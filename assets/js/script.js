//1. Set up the questions in number order.
var questions = [
  {
    question: "How many times have the olympics been hosted in the USA ?",
    options: ["5", "7", "8", "12"],
    answer: "8",
  },
  {
    question:
      "What was the most gold medals won by the USA at 1 olympic games ?",
    options: ["78", "83", "44", "72"],
    answer: "83",
  },
  {
    question:
      "How many times has the USA won the most gold medals at the summer olympics ?",
    options: ["12", "15", "9", "18"],
    answer: "18",
  },
  {
    question:
      "When was the last time USA did not win the most total medals in the winter olympics ?",
    options: ["2018", "2002", "2010", "1998"],
    answer: "2018",
  },
  {
    question: "What sport does the USA have the most gold medals in ?",
    options: ["Shooting", "Athletics", "Swimming", "Basketball"],
    answer: "Athletics",
  },
  {
    question:
      "What was the most gold medals won by the USA at 1 olympic games ?",
    options: ["78", "83", "44", "72"],
    answer: "83",
  },
  {
    question:
      "What is the highest medal count by a single American athlete at the olympics ?",
    options: ["19", "12", "28", "18"],
    answer: "28",
  },
  {
    question:
      "What was the most gold medals won by the USA at 1 olympic games ?",
    options: ["78", "83", "44", "72"],
    answer: "83",
  },
  {
    question:
      "When was the last time the olympic games were held in the USA ? ",
    options: ["2002", "1996", "1980", "2020"],
    answer: "2002",
  },
  {
    question: "When are the olympic games planned to be in USA again ?",
    options: ["2024", "2028", "2032", "2022"],
    answer: "2028",
  },
];

var timerEL = document.querySelector(".timer");
var startBtnEl = document.querySelector("#start-button");

var time = 121;
var pointDeduction = 10;
//Create function to start the timer

//Extract set interval so that is global so it can be started or updated.
function startTimer() {
  var timerInterval = setInterval(function () {
    time--;
    timerEL.textContent = time + " seconds left";

    if (time === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
//Create a function to start the quiz.
function startQuiz() {
  document.getElementById("start-button").style.display = "none";
  document.getElementById("rules").style.display = "none";
  startTimer();
  renderQuiz();
}

startBtnEl.addEventListener("click", startQuiz);
var quizDisplay = document.querySelector(".quiz-box");
function renderQuiz() {
  //display the hidden quiz
  quizDisplay.style.display = "block";
  //Loop through array of obj.
  questions.forEach((item, key) => {
    //Create variable for question container
    var questionContainer = document.createElement("div");
    questionContainer.classList.add("questionContainer");
    // While inside the loop. create the div for the question.
    var question = document.createElement("div");
    question.classList.add("question");
    question.textContent = item.question;
    //Create variable for the answers
    var answers = document.createElement("div");
    answers.classList.add("answers");
    //Loop through options array in item to make answer options
    item.options.forEach((option) => {
      //create the button for the answer options
      var element = document.createElement("button");
      element.classList.add("option");
      element.textContent = option;
      //Identifier to let you know what question youre on
      element.dataset.question = key;
      //Identifier to let you know what answer was clicked
      element.setAttribute("value", option);
      element.addEventListener("click", checkAnswer);
      answers.appendChild(element);
    });
    //Append html elements to parent container
    questionContainer.appendChild(question);
    questionContainer.appendChild(answers);
    quizDisplay.appendChild(questionContainer);
  });
}

//Create Function To Check Answers
function checkAnswer(event) {
  //check the data set question
  var currentQuestionIndex = event.target.dataset.question;
  //check the option
  var currentOption = event.target.value;
  //get the correct object out of the questions array
  var currentQuestion = questions[currentQuestionIndex];
  // debugger;
  console.log(currentOption);
  console.log(currentQuestion.answer);
  console.log(currentQuestionIndex);
  //compare the current option to the currentQuestion.answer
  if (currentOption === currentQuestion.answer) {
    //grab the current question and hide
    //grab the next question and diplay it
    return;
  }
  //if currentOption !== currentQuestion.answer
  if (currentOption !== currentQuestion.answer)
    //take the current time and subtract the pointDeduction from it
    time = time - pointDeduction;
  //get the current question and hide it
  //grab the next question and display it
  return;
}

//Create Function to End timer
//Create function to calculate score
//Add high score to high score page
