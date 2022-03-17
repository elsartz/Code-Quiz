var questionCounter = 5;
var timeLimit = 75;

var countDown = function() {
    timeLimit--;
    if (timeLimit === 0) {
        clearInterval(startCountDown);
    }
}
var startCountDown = setInterval(countDown, 1000);

var randomNumber = function (min, questionCounter) {
    var result = Math.floor(Math.random() * (questionCounter - 0));
    return result;
  };
  console.log(randomNumber(0,5));
  

var questionCards = [
         { h1:"Commonly used data types Do NOT include:", 
                buttons: { 
                    btn1:{ txt:"1.strings", value: false}, 
                    btn2:{ txt:"2.booleans", value: false}, 
                    btn3:{ txt:"3.alerts", value: true}, 
                    btn4:{ txt:"4.numbers", value: false}
                }
             },
         { h1:"The condition in an if/else statement is enclosed with __________.", 
                buttons: { 
                    btn1:{ txt:"1.quotes", value: false}, 
                    btn2:{ txt:"2.curly brackets", value: true}, 
                    btn3:{ txt:"3.parenthesis", value: false}, 
                    btn4:{ txt:"4.square brackets", value: false}
                }
            }, 
         { h1:"Arrays in Javascript can be used to store __________.", 
                buttons: { 
                    btn1:{ txt:"1.numbers and strings", value: false}, 
                    btn2:{ txt:"2.other arrays", value: false}, 
                    btn3:{ txt:"3.booleans", value: false}, 
                    btn4:{ txt:"4.all of the above", value: true}
                }
            },
         { h1:"String values must be enclosed within ________ when being assigned to variables.", 
                buttons: { 
                    btn1:{ txt:"1.commas", value: false}, 
                    btn2:{ txt:"2.curly brackets", value: false}, 
                    btn3:{ txt:"3.quotes", value: true}, 
                    btn4:{ txt:"4.parenthesis", value: false}
                }
            },
         { h1:"A very useful tool used during development and debugging for printing content to the debugger is:", 
                buttons: { 
                    btn1:{ txt:"1.Javascript", value: false}, 
                    btn2:{ txt:"2.terminal/bash", value: false}, 
                    btn3:{ txt:"3.for loops", value: false}, 
                    btn4:{ txt:"4.console.log", value: true}
                }
            },
        ];
    
var pageContentEl = document.querySelector("#challenge");


var createCardEl = function() {

    var currentCard = questionCards[randomNumber(0,5)];
    // console.log(currentCard);

    var questionEl = document.createElement("h2");
        questionEl.className = "question-header";
        questionEl.textContent = currentCard.h1;
        // questionEl.setAttribute("data-id", randomNumber);
        pageContentEl.appendChild(questionEl);

    var optionButtonsEl = document.createElement("div");
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

var removeCardEl = function() {
    document.getElementById('div').removeChild(pageContentEl);
    document.getElementById('h2').removeChild(pageContentEl);
}



var buttonHandler = function(event) {
    countDown();

    
    while (startCountDown > 0 || questionCounter > 0) {
        removeCardEl();
        createCardEl();

        questionCounter--;
        
    }
}

pageContentEl.addEventListener("click", buttonHandler);

createCardEl();
