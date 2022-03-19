var questionCounter = 5;
var timeLimit = 75;

 var countDown = function() {
     timeLimit--;
    //  console.log(timeLimit);
    timeEl.textContent = "Time:" + timeLimit;
     if (timeLimit === 0) {
         clearInterval(startCountDown);
     }
 }

var startCountDown = setInterval(countDown, 1000);

var timeEl = document.querySelector(".time");
    // timeEl.textContent = "Time:" + timeLimit;

var index = 0;
var randomNumber = function (min, questionCounter) {
    var result = Math.floor(Math.random() * (questionCounter - 0));
    index = result;
    return result;
  };
  console.log(randomNumber(0,5));
  console.log(index);
  

var questionCards = [
         { h1:"Commonly used data types Do NOT include:",
            correct: "btn3", 
                buttons: { 
                    btn1:{ txt:"1.strings", value: false}, 
                    btn2:{ txt:"2.booleans", value: false}, 
                    btn3:{ txt:"3.alerts", value: true}, 
                    btn4:{ txt:"4.numbers", value: false}
                }
             },
         { h1:"The condition in an if/else statement is enclosed with __________.", 
         correct: "btn2",
                buttons: { 
                    btn1:{ txt:"1.quotes", value: false}, 
                    btn2:{ txt:"2.curly brackets", value: true}, 
                    btn3:{ txt:"3.parenthesis", value: false}, 
                    btn4:{ txt:"4.square brackets", value: false}
                }
            }, 
         { h1:"Arrays in Javascript can be used to store __________.", 
         correct: "btn4",
                buttons: { 
                    btn1:{ txt:"1.numbers and strings", value: false}, 
                    btn2:{ txt:"2.other arrays", value: false}, 
                    btn3:{ txt:"3.booleans", value: false}, 
                    btn4:{ txt:"4.all of the above", value: true}
                }
            },
         { h1:"String values must be enclosed within ________ when being assigned to variables.", 
         correct: "btn3",
                buttons: { 
                    btn1:{ txt:"1.commas", value: false}, 
                    btn2:{ txt:"2.curly brackets", value: false}, 
                    btn3:{ txt:"3.quotes", value: true}, 
                    btn4:{ txt:"4.parenthesis", value: false}
                }
            },
         { h1:"A very useful tool used during development and debugging for printing content to the debugger is:", 
         correct: "btn4",
                buttons: { 
                    btn1:{ txt:"1.Javascript", value: false}, 
                    btn2:{ txt:"2.terminal/bash", value: false}, 
                    btn3:{ txt:"3.for loops", value: false}, 
                    btn4:{ txt:"4.console.log", value: true}
                }
            },
        ];

var trueAnswer = [  questionCards[0].correct,
                    questionCards[1].correct,
                    questionCards[2].correct,
                    questionCards[3].correct,
                    questionCards[4].correct
                ];

        // console.log(trueAnswer);
                        
var pageContentEl = document.querySelector("#challenge");

var currentCard = questionCards[randomNumber(0,5)];


var createCardEl = function() {

    // var currentCard = questionCards[randomNumber(0,5)];
    // console.log(currentCard);

    var questionEl = document.createElement("h2");
        questionEl.className = "question-header";
        questionEl.textContent = currentCard.h1;
        // questionEl.setAttribute("data-id", randomNumber);
        pageContentEl.appendChild(questionEl);

      var optionButtonsEl = document.createElement("section");
          optionButtonsEl.className = "options";
        
         pageContentEl.appendChild(optionButtonsEl);

        var firstButtonEl = document.createElement("button");
            firstButtonEl.textContent = currentCard.buttons.btn1.txt;
            firstButtonEl.className = "btn";
            optionButtonsEl.appendChild(firstButtonEl);
        
        var secondButtonEl = document.createElement("button");
            secondButtonEl.textContent = currentCard.buttons.btn2.txt;
            secondButtonEl.className = "btn";
            optionButtonsEl.appendChild(secondButtonEl);

        var thirdButtonEl = document.createElement("button");
            thirdButtonEl.textContent = currentCard.buttons.btn3.txt;
            thirdButtonEl.className = "btn";
            optionButtonsEl.appendChild(thirdButtonEl);
    
        var forthButtonEl = document.createElement("button");
            forthButtonEl.textContent = currentCard.buttons.btn4.txt;
            forthButtonEl.className = "btn";
            optionButtonsEl.appendChild(forthButtonEl);

            
}



function removeCardEl() {

   
     var optButtons = document.querySelector("section");
        pageContentEl.removeChild(optButtons);
     var header = document.querySelector("h2");
        pageContentEl.removeChild(header);
    
}

 function addFooterEl() {
    var answerEl = document.createElement("footer");
        answerEl.className = "footer";

        if (trueAnswer[index] === currentCard.correct) {
            answerEl.textContent = "Correct!";
        } else {
            answerEl.textContent = "Wrong!";
        }

    pageContentEl.appendChild(answerEl);
    
    var footer = document.querySelector("footer");
     
        setTimeout(console.log("suppose to delay 2 sec"), 20000);
        pageContentEl.removeChild(footer);
}

function score(name) {
    var highScoreEl = document.querySelector("form");
        highScoreEl.innerHTML = "<input type='text'>" + "name =''" + "</input>";
        document.getElementsByName(name).submit();
}

function clearScore() {

}

  var optionButtonsEl = document.createElement("section");
 
        
var buttonHandler = function(event) {
// debugger;
    addFooterEl();
    // for (var i=0; i < 2000; i++){};
    removeCardEl();
    createCardEl();
    
    
}

pageContentEl.addEventListener("click", buttonHandler);

 createCardEl();
