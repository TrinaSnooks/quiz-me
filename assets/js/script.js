// create 6 code fundamental muliptle choice questions

//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//Game over WHEN all questions are answered or the timer reaches 0
//When game is over, save initals and score

/*
//Questions
// 1. What is a Algorithm?
A sequence of problem-solving steps. 
2. Array
A single variable that contains a list of data. For example, myNumbers = [0,1,2,3]. Here, myNumbers is an array of numbers.
3. Bootstrap (aka Twitter Bootstrap)
An open-source framework. A group of templates for building the front end of a website. A large set of HTML files, CSS stylesheets, and JavaScript. 
4. Bug
Broken code that causes a program to malfunction. Bugs often crash a program or make an error message appear.
5. What is an example of Camel Case

A form of capitalization used for naming variables. The first letter is always lowercase, and the first letter of every word after that is uppercase. For example, “thisVariable” is in camelcase.
6. Coding
The process of writing a computer program. Coding is often the majority of what software engineers do. 
7.  What does CSS stand for
Cascading Style Sheets
CSS
The code that controls the appearance of a website. This includes things like font styles, colors, and margins. CSS stands for Cascading Style Sheets. 
8. Data Types
The kind of information that a variable or constant can hold. Examples include strings, integers, and booleans.
9. Event
An event is something that triggers a response in a program. For example, a mouse click or a button press.
10 For Loop
A block of code that repeats several times. The programmer must specify the number of times the code should repeat. 
*/

//code for start button
//results press start - first answer is displayed and timer starts

//code for answer button


//Answer question correctly - 
//go to next question
//add question to tally
//alert - you are correct


//Answer incorrectly-
//remove 10 sec time from timer
//alert - you are incorrect. 10 seconds removed from timer


//end of questions or timer is up
//game over
//game over message
//enter initials and score



var startBtn = document.querySelector("#start");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");

var answerChoice1 = document.querySelector("#answerChoice1");


//Questions and choices
//---------FIX
///////add questions/answers-----
//////fix loop---
//////// remove 10 seconds on wrong answers---------------------------


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
    
    //remove provious answers
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


//--------------------------Need to Connect Start button to Timer!!!!/--------------------------------------------------

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



//-----------------------------------Save initials 
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