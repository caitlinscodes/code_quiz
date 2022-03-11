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

var questionCount = 1
var highScore = 0;
// var correct = highScore + 5;
var answer = localStorage.getItem("answer");

function correctAnswer(){
  highScore = highScore + 5;
  timeLeft = timeLeft + 5;
}

function incorrectAnswer(){
  timeLeft = timeLeft - 2;
}

nextBtn.addEventListener("click", function(){
  console.log("nextBtn");
  displayNextQuestion();
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
  } 
}


// Will click a button labeled "START" to open quiz
//should this be under a viewport function??
startBtn.addEventListener("click", function(){
  countdown();
    timerEl.textContent = "Time Remaining: 60 sec.";
  displayQuestionOne();


    })
    
  // };
  // displayQuestionTwo(){
  //   nextBtn.addEventListener("click", function(){

  //   });
  // };
  
 //possibly add for loop to display questions?
//  });


// When button clicked a timer should start(displayed)
// Pulled from in class assingment
var timeLeft = 60;

function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time Remaining: " + timeLeft + " sec.";

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "GAME OVER";
    }

  }, 1000);
}
  //and first question displayed
  //When question is answered correctly push to next when answered incorrectly, time should be deducted from the timer.
  function displayQuestionOne(){
    questionCount = questionCount +1;
    question.textContent = "Practice Question Here?";
    optA.textContent = "False";
    optB.textContent = "True";
    optC.textContent = "False";
    optD.textContent = "False";

    viewport.addEventListener("click", function(event){
      if (event.target == optB){
        result.textContent = "CORRECT! - gain 5 sec.";
        correctAnswer();
        localStorage.setItem("answer", highScore);
        // nextBtn.setAttribute("data-state", "visible");
        //figure out how to save answer and add 5 sec. to timer
      } else {
        result.textContent = "INCORRECT - lose 2 sec.";
        incorrectAnswer();
        localStorage.setItem("answer", highScore);
        // nextBtn.setAttribute("data-state", "visible");
        //figure out how to save answer and subtract 2 sec. from timer
      }
    });
  }
  //Question answered > Save response localStorage > Present next question

  function displayQuestionTwo(){
    questionCount = questionCount + 1;
    console.log(questionCount);
    console.log("displayQuestionTwo");
    question.textContent = "Practice Question Here?";
    optA.textContent = "False";
    optB.textContent = "False";
    optC.textContent = "True";
    optD.textContent = "False";

    viewport.addEventListener("click", function(event){
      if (event.target == optC){
        result.textContent = "CORRECT! - gain 5 sec.";
        correctAnswer();
        localStorage.setItem("answer", highScore);

        // nextBtn.setAttribute("data-state", "visible");
      } else {
        result.textContent= "INCORRECT - lose 2 sec.";
        incorrectAnswer();
        localStorage.setItem("answer", highScore);
        // nextBtn.setAttribute("data-state", "visible");
      }
    });
   }
  //Question answered > Save response localStorage > Present next question

  function displayQuestionThree(){
    questionCount = questionCount +1;
    console.log(questionCount);
    console.log("displayQuestionThree");
    question.textContent = "Practice Question Here?";
    optA.textContent = "True";
    optB.textContent = "False";
    optC.textContent = "False";
    optD.textContent = "False";

    viewport.addEventListener("click", function(event){
      if (event.target == optA){
        result.textContent = "CORRECT! - gain 5 sec.";
        correctAnswer();
        localStorage.setItem("answer", highScore);
        // nextBtn.setAttribute("data-state", "visible");
      } else {
        result.textContent= "INCORRECT - lose 2 sec.";
        incorrectAnswer();
        localStorage.setItem("answer", highScore);
        // nextBtn.setAttribute("data-state", "visible");
      }
    });
  }
 //Question answered > Save response localStorage > Present next question

  // function displayQuestionFour(){
  //   question.textContent("Practice Question Here?");
  //   optA.textContent("True");
  //   optB.textContent("False");
  //   optC.textContent("False");
  //   optD.textContent("False");

  //   if ("click", optA){
  //     result.textContent("CORRECT! - gain 5 sec.");
  //   } else {
  //     result.textContent("INCORRECT - lose 2 sec.");
  //   }
  // }
  //Question answered > Save response localStorage > Present next question

  // function displayQuestionFive(){
  //   question.textContent("Practice Question Here?");
  //   optA.textContent("False");
  //   optB.textContent("False");
  //   optC.textContent("False");
  //   optD.textContent("True");

  //   if ("click", optD){
  //     result.textContent("CORRECT! - gain 5 sec.");
  //   } else {
  //     result.textContent("INCORRECT - lose 2 sec.");
  //   }
  // }


//Quiz is over when all questions are answered or timer hits 0

//When quiz is over user can save their initials and score.