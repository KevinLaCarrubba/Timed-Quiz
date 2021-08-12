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

    if (time <= 0) {
      clearInterval(timerInterval);
      endTimer();
    }
  }, 1000);
}

//Create a function to end the timer
function endTimer() {
  timerEL.style.display = "none";
  //clear the timer
  quizDisplay.style.display = "none";
  //Call calculate highscore function
  calculateScore();
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
    //dynamically determine wether the question should be shown or not on load
    var questionDisplayClass = "";
    if (key === 0) {
      questionDisplayClass = "show";
    } else {
      questionDisplayClass = "hide";
    }
    questionContainer.classList.add("questionContainer");
    questionContainer.classList.add(questionDisplayClass);
    questionContainer.setAttribute("id", "question" + key);
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
//create a variable to keep track hom many questions are right using boolean values
var answerStats = [];
//Create Function To Check Answers
function checkAnswer(event) {
  //check the data set question
  var currentQuestionIndex = parseInt(event.target.dataset.question);
  //check the option
  var currentOption = event.target.value;
  //get the correct object out of the questions array
  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentOption);
  console.log(currentQuestion.answer);
  console.log(currentQuestionIndex);
  //compare the current option to the currentQuestion.answer

  if (currentOption === currentQuestion.answer) {
    answerStats.push(true);
    //if we are on the last question go to highscores
    console.log(answerStats);
    if (currentQuestionIndex === 9) {
      console.log(questions.length);
      endTimer();
      return;
    }
    //grab the current question index as well as the answer options and hide it
    var currentDisplayQuestion = document.getElementById(
      "question" + currentQuestionIndex
    );
    currentDisplayQuestion.classList.remove("show");
    currentDisplayQuestion.classList.add("hide");
    //grab the next question and answer options and display it

    var nextQuestionIndex = currentQuestionIndex + 1;
    var nextDisplayQuestion = document.getElementById(
      "question" + nextQuestionIndex
    );
    nextDisplayQuestion.classList.remove("hide");
    nextDisplayQuestion.classList.add("show");

    return;
  }
  if (currentQuestionIndex === 9) {
    console.log(questions.length);
    endTimer();
    return;
  }

  //take the current time and subtract the pointDeduction from it
  time = time - pointDeduction;
  var currentDisplayQuestion = document.getElementById(
    "question" + currentQuestionIndex
  );
  currentDisplayQuestion.classList.remove("show");
  currentDisplayQuestion.classList.add("hide");
  //grab the next question and answer options and display it

  var nextQuestionIndex = parseInt(currentQuestionIndex) + 1;
  var nextDisplayQuestion = document.getElementById(
    "question" + nextQuestionIndex
  );
  nextDisplayQuestion.classList.remove("hide");
  nextDisplayQuestion.classList.add("show");
  return;
}
// console.log(answerStats);
//Create function to calculate score
function calculateScore() {
  var totalScore = time + answerStats.length;
  newScore.score = totalScore;
  // localStorage.setItem("TotalScore", totalScore);
  formDisplay.style.display = "inline-block";
}
//=============================================
//After Quiz is completed
//=============================================
var formDisplay = document.getElementById("form-input");
var submitButton = document.querySelector("#submit");
var displayHighScore = document.getElementById("high-score-page");
var listHighScore = document.getElementById("high-scores-list");
var clearButton = document.getElementById("clear");
var homeButton = document.getElementById("homePage");
var seeScoreList = document.getElementById("high-score-link");

var newScore = { name: [], score: [] };
var oldScore = JSON.parse(localStorage.getItem("oldScore")) || [];
//create a function to open home page
function goHomePage() {
  window.location.reload();
}
//add eventlistner on homebutton click
homeButton.addEventListener("click", goHomePage);

//create a function to clear local storage
function clearStorage() {
  localStorage.clear();
  window.location.reload();
}
//add eventlistener on clear button click
clearButton.addEventListener("click", clearStorage);

function displayScore() {
  displayHighScore.style.display = "block";
  console.log(oldScore);
  oldScore.forEach((item) => {
    var scoreContainer = document.createElement("div");
    scoreContainer.classList.add("scoreContainer");
    var nameLine = document.createElement("li");
    console.log(item.name);
    nameLine.textContent =
      "Username:  " + item.name + "    Score:  " + item.score;
    scoreContainer.appendChild(nameLine);
    listHighScore.appendChild(scoreContainer);
  });
}

function inputUserName() {
  newScore.name = document.querySelector("#user-name").value;
  //dont allow user to enter a blank name
  formDisplay.style.display = "none";
  getStoredInfo();
}

submitButton.addEventListener("click", inputUserName);

function getStoredInfo() {
  oldScore.push(newScore);
  localStorage.setItem("oldScore", JSON.stringify(oldScore));
  displayScore();
}

function viewHighScores() {
  quizDisplay.style.display = "none";
  document.getElementById("start-button").style.display = "none";
  document.getElementById("rules").style.display = "none";
  displayHighScore.style.display = "block";
  listHighScore.style.display = "flex";
  oldScore.forEach((item) => {
    var scoreContainer = document.createElement("div");
    scoreContainer.classList.add("scoreContainer");
    var nameLine = document.createElement("li");
    console.log(item.name);
    nameLine.textContent =
      "Username:  " + item.name + "    Score:  " + item.score;
    scoreContainer.appendChild(nameLine);
    listHighScore.appendChild(scoreContainer);
  });
}

seeScoreList.addEventListener("click", viewHighScores);
