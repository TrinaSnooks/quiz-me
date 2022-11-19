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

var startBtn = document.querySelector("# start");

var questions =  [
    {question: "what colour is the sky?",
    choice1: "Red",
     choice2: "Blue",
    choice3: "gray",
},
{

}];


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

