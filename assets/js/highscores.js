//Create global variables
var formDisplay = document.getElementById("form-input");
var submitButton = document.querySelector("#submit");
var displayHighScore = document.getElementById("high-score-page");
var listHighScore = document.getElementById("high-scores-list");
var clearButton = document.getElementById("clear");
var homeButton = document.getElementById("homePage");

//create a function to open home page
function goHomePage() {
  window.open("index.html");
}
//add eventlistner on homebutton click
homeButton.addEventListener("click", goHomePage);

//create a function to clear local storage
function clearStorage() {
  localStorage.clear();
}
//add eventlistener on clear button click
clearButton.addEventListener("click", clearStorage);

//create function to getuserinput from form
function getUserInput() {
  //save the user input value in userName
  var userName = document.querySelector("#user-name").value;
  //dont allow user to enter a blank name
  if (userName === "") {
    alert("enter your name");
    return;
  }
  var storedScore = localStorage.getItem("TotalScore");
  var newUserScore = { userName: userName, score: storedScore };
  var previousScores = localStorage.getItem("Highscores");
  if (previousScores) {
    var parseScores = JSON.parse(previousScores);
    parseScores.push(newUserScore);
    localStorage.setItem("Highscores", parseScores);
  }
  //hide the formDisplay
  formDisplay.style.display = "none";
  renderHighScore();
}
//add event listener to submit button
submitButton.addEventListener("click", getUserInput);

function renderHighScore() {}
