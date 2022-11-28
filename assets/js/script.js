// create 6 code fundamental muliptle choice questions

//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//Game over WHEN all questions are answered or the timer reaches 0
//When game is over, save initals and score





var startBtn = document.querySelector("#start");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");

var answerChoice1 = document.querySelector("#answerChoice1");


//Questions and choices
//---------FIX
//1. add questions/answers-----
//2. remove 10 seconds on wrong answers---------------------------


var questionsArr = [
    {
        question: "What is a Algorithm?",
        choice1: "Town in Texas",
        choice2: "Squence of problem-solving steps",
        choice3: "A colour",
        choice4: "A number", 
        answer: "Squence of problem-solving steps",
    },
    {
        question: "What is Park Place?",
        choice1: "Imaginary",
        choice2: "In your dreams",
        choice3: "At McDonalds",
        choice4: "A property in Monopoly", 
        answer: "A property in Monopoly"

    },
];


var questionIndex = 0;

startBtn.addEventListener("click", function(){
    game();
    setTime();
});


function game(){
    console.log(questionsArr[questionIndex].question);

    question.textContent = questionsArr[questionIndex]["question"];
    
    //remove previous answers
    choices.innerHTML="";

    for(var i = 1; i < 5; i++){
        //Create Element
        var newBtn = document.createElement("button");
       
        //Inject Content
         newBtn.textContent = questionsArr[questionIndex]["choice" + i];
        
         //Append to Page
        choices.appendChild(newBtn);
    }
    
    choices.addEventListener("click", function(event){
        console.log(event.target.textContent);
        if(event.target.textContent == questionsArr[questionIndex].answer){
            alert("You got it right!");
        } else {
            alert("You got it wrong!");
        }
        questionIndex+=1;
        
        game();
    });
}

//--------------------------------------------------------------------------
//Timer


//-Need to Connect Start button to Timer!!!!/--------------------------------------------------

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      alert("Times Up");
   
    }

  }, 1000);
}




//----------------------------------------------------------

//--------------Add score to page-----



//-----------------------------------
//--------------Add Save initials 
//// ---   Need to fix --- connect scores to initials, display on page, open when game is over



var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

var playerInitials = {
  comment: comment.value.trim()
};

localStorage.setItem("playerInitials", JSON.stringify(playerInitials));
renderMessage();

});
/*
function renderMessage() {
  var player  = JSON.parse(localStorage.getItem("playerInitials"));
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}

*/