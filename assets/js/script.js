// Global variables
var questionCounter = 5;
var timeLimit = 75;
var score = 0;
var optionButtonsEl = document.createElement("section");
var timeEl = document.querySelector(".time");
var formEl = document.getElementById("scoreForm");
    formEl.style.display = "none";

// var articleEl = document.getElementById("score-screen");
//     articleEl.style.display = "none";
// I try to make it one page at the end but it was too late



// Control time and show at the page
var totalCards = 1;
var countDown = function() {
     timeLimit--;
     timeEl.textContent = "Time:" + timeLimit;
     if (timeLimit === 0 || totalCards >4) {
          clearInterval(startCountDown);
     }
}
var startCountDown = setInterval(countDown, 1000);

 
// Random question card
var index = 0;
var randomNumber = function (min, questionCounter) {
    var result = Math.floor(Math.random() * (questionCounter - 0));
    index = result;
    return result;
  };

  
// The questions and answers where can be added more in the future
var questionCards = [
         { h1:"Commonly used data types Do NOT include:",
            correct: "btn3", 
                buttons: { 
                    btn1:{ txt:"1.strings"}, 
                    btn2:{ txt:"2.booleans"}, 
                    btn3:{ txt:"3.alerts"}, 
                    btn4:{ txt:"4.numbers"}
                }
             },
         { h1:"The condition in an if/else statement is enclosed with __________.", 
         correct: "btn2",
                buttons: { 
                    btn1:{ txt:"1.quotes"}, 
                    btn2:{ txt:"2.curly brackets"}, 
                    btn3:{ txt:"3.parenthesis"}, 
                    btn4:{ txt:"4.square brackets"}
                }
            }, 
         { h1:"Arrays in Javascript can be used to store __________.", 
         correct: "btn4",
                buttons: { 
                    btn1:{ txt:"1.numbers and strings"}, 
                    btn2:{ txt:"2.other arrays"}, 
                    btn3:{ txt:"3.booleans"}, 
                    btn4:{ txt:"4.all of the above"}
                }
            },
         { h1:"String values must be enclosed within ________ when being assigned to variables.", 
         correct: "btn3",
                buttons: { 
                    btn1:{ txt:"1.commas"}, 
                    btn2:{ txt:"2.curly brackets"}, 
                    btn3:{ txt:"3.quotes"}, 
                    btn4:{ txt:"4.parenthesis"}
                }
            },
         { h1:"A very useful tool used during development and debugging for printing content to the debugger is:", 
         correct: "btn4",
                buttons: { 
                    btn1:{ txt:"1.Javascript"}, 
                    btn2:{ txt:"2.terminal/bash"}, 
                    btn3:{ txt:"3.for loops"}, 
                    btn4:{ txt:"4.console.log"}
                }
            },
        ];

var trueAnswer = [  questionCards[0].correct,
                    questionCards[1].correct,
                    questionCards[2].correct,
                    questionCards[3].correct,
                    questionCards[4].correct
                ];

        
                        


function myf () {
var newarray=[result];
    var i = 0;
    while (newarray.length < 5) {
        if (newarray[i] === result) {
            result = Math.floor(Math.random() * (questionCounter - 0));
        }else {
            newarray.push(result);
            i++;
            
        }
    }
    console.log(newarray);
}
// Select where the cards will be
var pageContentEl = document.querySelector("#challenge");

// Random card
var currentCard = questionCards[randomNumber(0,5)];
var createCardEl = function() {

    var currentCard = questionCards[randomNumber(0,5)];
    
    var questionEl = document.createElement("h2");
        questionEl.className = "question-header";
        questionEl.textContent = currentCard.h1;
        pageContentEl.appendChild(questionEl);

      var optionButtonsEl = document.createElement("section");
          optionButtonsEl.className = "options";
        
         pageContentEl.appendChild(optionButtonsEl);

        var firstButtonEl = document.createElement("button");
            firstButtonEl.className = "b1";
            firstButtonEl.setAttribute("id","btn");
            firstButtonEl.textContent = currentCard.buttons.btn1.txt;
            
            optionButtonsEl.appendChild(firstButtonEl);
        
        var secondButtonEl = document.createElement("button");
            secondButtonEl.className = "b2";
            secondButtonEl.setAttribute("id", "btn");
            secondButtonEl.textContent = currentCard.buttons.btn2.txt;
            
            optionButtonsEl.appendChild(secondButtonEl);

        var thirdButtonEl = document.createElement("button");
            thirdButtonEl.className = "b3";
            thirdButtonEl.setAttribute("id", "btn");
            thirdButtonEl.textContent = currentCard.buttons.btn3.txt;
            optionButtonsEl.appendChild(thirdButtonEl);
    
        var forthButtonEl = document.createElement("button");
            forthButtonEl.className = "b4";
            forthButtonEl.setAttribute("id", "btn");
            forthButtonEl.textContent = currentCard.buttons.btn4.txt;
            
            optionButtonsEl.appendChild(forthButtonEl);
            
}


// Remove the question card
function removeCardEl() {  
     var optButtons = document.querySelector("section");
        pageContentEl.removeChild(optButtons);
     var header = document.querySelector("h2");
        pageContentEl.removeChild(header);    
}

// Add notification correct or wrong
function addFooterEl(answer) {
     var answerEl = document.createElement("footer");
         answerEl.className = "footer";
    
        if (answer) {
            answerEl.textContent = "Correct!";
            
        } else {
            answerEl.textContent = "Wrong!";
            
        }
        var footerEl = document.querySelector("footer");
            footerEl.append(answerEl);
            // Delay the notification
            var timeLeft = 1;
            var timeInterval = setInterval(function() {
                if ( timeLeft > 0) {
                  timeLeft--;
                } else if (timeLeft === 0) {
                     answerEl.remove(footerEl);
                    }
            }, 1000);
}


// for future release var highScore = [];
var scoreFunction = function() {
    
    // select the elements for the submission
    var highScoreEl = document.querySelector("#name");
    var submitEl = document.querySelector("#subbtn");           

    // Function to handle the data
    submitEl.addEventListener("click", function (event) {

        // stop the screen like pause for the game
         event.preventDefault();
        // Player's information
        var playerInput = highScoreEl.value;
        var playerInfo = {
            initials: playerInput,
            score: timeLimit
        }
    
        // highScore.push(playerInfo); for future release;

        // save to localstorage
        window.localStorage.setItem("namein", JSON.stringify(playerInfo));
       
    
    // retrive from localstorage
    var nameScore = JSON.parse(localStorage.getItem("namein"));
    console.log(nameScore);
    
    // put it in a list on DOM    
    var hallOfFameEl = document.querySelector("#scorelist");
    var fameEl = document.createElement("li");
        fameEl.textContent = nameScore.initials + " " + nameScore.score;
        fameEl.append();

        console.log(fameEl);
    });   
}

// Clear the High score board
function clearScore() {
    var clearScoreBtn = document.querySelector("onclick");
    window.localStorage.clear();
}

// Main function responsible for true or false
var i =1;
var buttonHandler = function(event) {
    
    var targetEl = event.target;

    if (targetEl.matches(".b1")) {
        
        if (trueAnswer[index] === "btn1") {
            answer = true;
            timeLimit = timeLimit + 2;
        } else { answer = false;
            timeLimit = timeLimit - 10;
            }

        addFooterEl(answer);
        removeCardEl();
        
        createCardEl();
        totalCards++;
        } else
            if (targetEl.matches(".b2")) {
                
                if (trueAnswer[index] === "btn2") {
                    answer = true;
                    timeLimit = timeLimit + 2;
                } else { answer = false;
                    timeLimit = timeLimit - 10;
                    }

                addFooterEl(answer);
                removeCardEl();

                createCardEl();
                totalCards++;
        } else
            if (targetEl.matches(".b3")) {
                
                if (trueAnswer[index] === "btn3") {
                    answer = true;
                    timeLimit = timeLimit + 2;
                } else { answer = false;
                    timeLimit = timeLimit - 10;
                    }

                addFooterEl(answer);                
                removeCardEl();
                
                createCardEl();
                totalCards++;
        } else
            if (targetEl.matches(".b4")) {
                
                if (trueAnswer[index] === "btn4") {
                    answer = true;
                    timeLimit = timeLimit + 2;
                } else { answer = false;
                    timeLimit = timeLimit - 10;
                    }

                addFooterEl(answer);
                removeCardEl();

                createCardEl(); 
                totalCards++;
        } 
    if (totalCards > questionCounter || timeLimit === 0) {
        // set the score
        score = timeLimit;
        // remove last question card
        removeCardEl();
        // Show submit form
        formEl.style.display = "block";
        // save to localstorage
        scoreFunction();                
    }    
}

// Enter the page and listen user action
pageContentEl.addEventListener("click", buttonHandler);
// Start quiz by showing the first question
createCardEl();
