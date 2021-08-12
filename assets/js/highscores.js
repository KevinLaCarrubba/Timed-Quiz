//Create global variables
var formDisplay = document.getElementById("form-input");
var submitButton = document.querySelector("#submit");
var displayHighScore = document.getElementById("high-score-page");
var listHighScore = document.getElementById("high-scores-list");
var clearButton = document.getElementById("clear");
var homeButton = document.getElementById("homePage");
var objectArray = {
  namesArray: [],
  scoreArray: [],
};
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
  // save username to local storage
  localStorage.setItem("Username", userName);
  //hide the formDisplay
  formDisplay.style.display = "none";
  getStoredInfo();
  renderHighScore();
}
//add event listener to submit button
submitButton.addEventListener("click", getUserInput);

function getStoredInfo() {
  //get name from local storage and put it in var storedName
  var storedName = JSON.parse(localStorage.getItem("Username"));
  //get score from local storage and put it in var storeScore
  var storedScore = JSON.parse(localStorage.getItem("TotalScore"));
  //push the stored name into the obj.nameArray
  objectArray.namesArray.push(storedName);
  //[push the stored score into obj.scoreArray
  objectArray.scoreArray.push(storedScore);
  //check if the obj.nameArray is empty
  if (objectArray.namesArray !== null) {
    objectArray.namesArray = storedName;
  }
  //check if the obj.scoreArray is empty
  if (objectArray.scoreArray !== null) {
    objectArray.scoreArray = storedScore;
  }
}

function renderHighScore() {
  //remove the hide class from displayHighScore
  displayHighScore.classList.remove("hide");
  //set it to display in inline block
  displayHighScore.style.display = "inline=block";
  //loop through object
  objectArray.forEach((item, key) => {
    var divAdd = document.createElement("div");
    divAdd.classList.add("line" + key);
    //loop through names
    item.namesArray.forEach((name) => {
      var nameLi = document.createElement("li");
      nameLi.classList.add("nameLi");
      nameLi.textContent = name;
      nameLi.appendChild(divAdd);
    });
    //loop through score
    item.scoreArray.forEach((score) => {
      var scoreLi = document.createElement("li");
      scoreLi.classList.add("scoreLi");
      scoreLi.textContent = score;
      scoreLi.appendChild(divAdd);
    });
  });
}
