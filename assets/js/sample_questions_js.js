
//   display question
//  gwt quiz to work
//  add more questions
// tally answers
// add timer


var startBtn = document.querySelector("#start");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");

var answerChoice1 = document.querySelector("#answerChoice1");



var questionsArr = [
    {
        question: "What color is the sky?",
        choice1: "Red",
        choice2: "Violet",
        choice3: "Purple",
        choice4: "Blue", 
        answer: "Blue"
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
});


function game(){
    console.log(questionsArr[questionIndex].question);

    question.textContent = questionsArr[questionIndex]["question"];
    
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
        questionIndex;
    });
}

/*
///////HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz</title>
</head>
<body>
    <main id="stage">
        <h1>Welcome to the Quiz!</h1>
    </main>
    <p id="question"></p>
    <div id="choices"></div>
    <button id="start">Start Quiz</button>
    <script src="assets/js/game.js"></script>
</body>
</html>
*/
