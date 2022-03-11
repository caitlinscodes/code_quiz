//Global variables
var startBtn = document.querySelector(".start");
var timerEl = document.querySelector(".timer");
var viewport = document.querySelector(".viewport");
var question = document.querySelector("#question-name");
var optA = document.querySelector("#opt-a");
var optB = document.querySelector("#opt-b");
var optC = document.querySelector("#opt-c");
var optD = document.querySelector("#opt-d");
var result = document.querySelector("#question-response");
var nextBtn = document.querySelector("#next");
var ulEl = document.querySelector("#options");
var displayHighScore = document.querySelector("#high-score");

var questionCount = 1
var highScore = 0;
var answer = localStorage.getItem("answer");

function correctAnswer(){
  highScore = highScore + 5;
  timeLeft = timeLeft + 5;
}

function incorrectAnswer(){
  highScore = highScore + 0;
  timeLeft = timeLeft - 2;
}

function clearResult(){
  result.textContent = "Your answer is:";
}

nextBtn.addEventListener("click", function(){
  console.log("nextBtn");
  displayNextQuestion();
  clearResult();
});

function displayNextQuestion(){
  console.log("displayNextQuestion");
  console.log(questionCount);
  if(questionCount == 2){
    displayQuestionTwo();
    console.log("displayQuestionTwo");
  } else if (questionCount == 3){
    displayQuestionThree();
    console.log("displayQuestionThree");
  } else if (questionCount == 4){
    displayQuestionFour();
    console.log("displayQuestionFour");
  } else if (questionCount == 5){
    displayQuestionFive();
  } else if (questionCount == 6){
    quizComplete();
  }
}

// User will click a button labeled "START" to open quiz
startBtn.addEventListener("click", function(){
  countdown();
    timerEl.textContent = "Time Remaining: 40 sec.";
  displayQuestionOne();
});

// When button clicked a timer should start(displayed) and first question should display.
// Pulled from in class assingment
var timeLeft = 40;

function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time Remaining: " + timeLeft + " sec.";

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "GAME OVER";
      startBtn.textContent = "Try Again";
      quizComplete();
    }

  }, 1000);
}

  //When question is answered correctly push to next when answered incorrectly, time should be deducted from the timer.
  function displayQuestionOne(){
    questionCount = questionCount + 1;
    question.textContent = "What does HTML stand for?";
    optA.textContent = "Hypertext Mixup Language";
    optB.textContent = "Hypertext Markup Language";
    optC.textContent = "Hypertext Mashup Language";
    optD.textContent = "Hypertext Mouse Language";

    ulEl.addEventListener("click", function(event){
      if (event.target === optB){
        result.textContent = "CORRECT! - gain 5 sec.";
        correctAnswer();
        localStorage.setItem("answer", highScore);
      } else {
        result.textContent = "INCORRECT - lose 2 sec.";
        incorrectAnswer();
        localStorage.setItem("answer", highScore);
      }
    });
  }
  //Question answered > Save response localStorage > Present next question

  function displayQuestionTwo(){
    questionCount = questionCount + 1;
    console.log(questionCount);
    console.log("displayQuestionTwo");
    question.textContent = "Which dot notation is NOT a method in JavaScript?";
    optA.textContent = ".push";
    optB.textContent = ".sort";
    optC.textContent = ".length";
    optD.textContent = ".slice";

    ulEl.addEventListener("click", function(event){
      if (event.target === optC){
        result.textContent = "CORRECT! - gain 5 sec.";
        correctAnswer();
        localStorage.setItem("answer", highScore);
      } else {
        result.textContent= "INCORRECT - lose 2 sec.";
        incorrectAnswer();
        localStorage.setItem("answer", highScore);
      }
    });
   }
  //Question answered > Save response localStorage > Present next question

  function displayQuestionThree(){
    questionCount = questionCount + 1;
    console.log(questionCount);
    console.log("displayQuestionThree");
    question.textContent = "Which HTML tag is self closing?";
    optA.textContent = "Link";
    optB.textContent = "Paragraph";
    optC.textContent = "Figure";
    optD.textContent = "Header";

    ulEl.addEventListener("click", function(event){
      if (event.target === optA){
        result.textContent = "CORRECT! - gain 5 sec.";
        correctAnswer();
        localStorage.setItem("answer", highScore);
      } else {
        result.textContent= "INCORRECT - lose 2 sec.";
        incorrectAnswer();
        localStorage.setItem("answer", highScore);
      }
    });
  }
 //Question answered > Save response localStorage > Present next question

  function displayQuestionFour(){
    questionCount = questionCount + 1;
    question.textContent= "What does DOM stand for?";
    optA.textContent = "Document Object Model";
    optB.textContent = "Database Override Method";
    optC.textContent = "Document Obstacle Method";
    optD.textContent = "Database Object Model";

    ulEl.addEventListener("click", function(event){
      if (event.target === optA){
        result.textContent = "CORRECT! - gain 5 sec.";
        correctAnswer();
        localStorage.setItem("answer", highScore);
      } else {
        result.textContent = "INCORRECT - lose 2 sec.";
        incorrectAnswer();
        localStorage.setItem("answer", highScore);
      }
    }); 
  }
  //Question answered > Save response localStorage > Present next question

  function displayQuestionFive(){
    questionCount = questionCount + 1;
    question.textContent = "Which of the below options is NOT a Primitive Data Type?";
    optA.textContent = "String";
    optB.textContent = "Number";
    optC.textContent = "Boolean";
    optD.textContent = "Modulus";

    ulEl.addEventListener("click", function(event){
      if (event.target === optD){
        result.textContent = "CORRECT! - gain 5 sec.";
        correctAnswer();
        localStorage.setItem("answer", highScore);
      } else {
        result.textContent = "INCORRECT - lose 2 sec.";
        incorrectAnswer();
        localStorage.setItem("answer", highScore);
      }
    });
  }

//Quiz is over when all questions are answered or timer hits 0
function quizComplete(){
  if (questionCount === 6){
    displayScoreCard();
  }
}

//When quiz is over user can save their initials and score.
//Add final page to allow user to save High Score.
function displayScoreCard(){
  displayHighScore.textContent = "Current High Score: " + highScore;
  question.textContent = "Log your Score!";
  result.textContent = "Your High Score is: " + highScore;
}