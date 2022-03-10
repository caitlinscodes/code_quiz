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



// Will click a button labeled "START" to open quiz
//should this be under a viewport function??
startBtn.addEventListener("click", function(){
  countdown();
  displayQuestionOne();
 //possibly add for loop to display questions?
 });


// When button clicked a timer should start(displayed)
// Pulled from in class assingment
function countdown() {
  var timeLeft = 60;
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
    question.textContent = "Practice Question Here?";
    optA.textContent = "False";
    optB.textContent = "True";
    optC.textContent = "False";
    optD.textContent = "False";

    optB.addEventListener("click", function(){
      if ("click", optB){
        result.textContent = "CORRECT! - gain 5 sec.";
        //figure out how to add 5 sec. to timer
      } else {
        result.textContent = "INCORRECT - lose 2 sec.";
        //figure out what option does not appear
        //figure out how to subtract 2 sec. from timer
      }
    });
  }
  //Question answered > Save response logicStorage > Present next question

  // function displayQuestionTwo(){
  //   question.textContent("Practice Question Here?");
  //   optA.textContent("False");
  //   optB.textContent("False");
  //   optC.textContent("True");
  //   optD.textContent("False");

  //   if ("click", optC){
  //     result.textContent("CORRECT! - gain 5 sec.");
  //   } else {
  //     result.textContent("INCORRECT - lose 2 sec.");
  //   }
  // }
    //Question answered > Save response logicStorage > Present next question

  // function displayQuestionThree(){
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
  //   //Question answered > Save response logicStorage > Present next question

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
  //   //Question answered > Save response logicStorage > Present next question

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


//Function Calling
// countdown();
// startQuiz();
// displayQuestionOne();