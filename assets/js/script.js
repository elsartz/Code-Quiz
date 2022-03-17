var questionCounter = 6;

var randomNumber = function (min=0, questionCounter) {
    var result = Math.floor(Math.random() * (questionCounter - 0));
    return result;
  };
  

  
var pageContentEl = document.querySelector("#challenge");

var questionCards = { 
        qstn1: { h1:"Commonly used data types Do NOT include:", 
                buttons: { 
                    btn1:{ txt:"1.strings", value: false}, 
                    btn2:{ txt:"2.booleans", value: false}, 
                    btn3:{ txt:"3.alerts", value: true}, 
                    btn4:{ txt:"4.numbers", value: false}
                }
             },
        qstn2: { h1:"The condition in an if/else statement is enclosed with __________.", 
                buttons: { 
                    btn1:{ txt:"1.quotes", value: false}, 
                    btn2:{ txt:"2.curly brackets", value: true}, 
                    btn3:{ txt:"3.parenthesis", value: false}, 
                    btn4:{ txt:"4.square brackets", value: false}
                }
            }, 
        qstn3: { h1:"Arrays in Javascript can be used to store __________.", 
                buttons: { 
                    btn1:{ txt:"1.numbers and strings", value: false}, 
                    btn2:{ txt:"2.other arrays", value: false}, 
                    btn3:{ txt:"3.booleans", value: false}, 
                    btn4:{ txt:"4.all of the above", value: true}
                }
            },
        qstn4: { h1:"String values must be enclosed within ________ when being assigned to variables.", 
                buttons: { 
                    btn1:{ txt:"1.commas", value: false}, 
                    btn2:{ txt:"2.curly brackets", value: false}, 
                    btn3:{ txt:"3.quotes", value: true}, 
                    btn4:{ txt:"4.parenthesis", value: false}
                }
            },
        qstn5: { h1:"A very useful tool used during development and debugging for printing content to the debugger is:", 
                buttons: { 
                    btn1:{ txt:"1.Javascript", value: false}, 
                    btn2:{ txt:"2.terminal/bash", value: false}, 
                    btn3:{ txt:"3.for loops", value: false}, 
                    btn4:{ txt:"4.console.log", value: true}
                }
            },
    };
    


console.log(questionCards.qstn1);
console.log(questionCards.qstn1.btn2);

var createCardEl = function(randomNumber) {
    var questionEl = document.createElement("h2");
        questionEl.className = "question-header";
        questionEl.textContent = questionCards.qstn1.h1;
        questionEl.setAttribute("data-id", randomNumber);
        pageContentEl.appendChild(questionEl);

    var optionButtonsEl = document.createElement("div");
        optionButtonsEl.className = "options";
        pageContentEl.appendChild(optionButtonsEl);

        var firstButtonEl = document.createElement("button");
            firstButtonEl.textContent = questionCards.qstn1.buttons.btn1.txt;
            firstButtonEl.className = "btn";
            optionButtonsEl.appendChild(firstButtonEl);
        
        var secondButtonEl = document.createElement("button");
            secondButtonEl.textContent = questionCards.qstn2.buttons.btn2.txt;
            secondButtonEl.className = "btn";
            optionButtonsEl.appendChild(secondButtonEl);

        var thirdButtonEl = document.createElement("button");
            thirdButtonEl.textContent = questionCards.qstn3.buttons.btn3.txt;
            thirdButtonEl.className = "btn";
            optionButtonsEl.appendChild(thirdButtonEl);
    
        var forthButtonEl = document.createElement("button");
            forthButtonEl.textContent = questionCards.qstn1.buttons.btn4.txt;
            forthButtonEl.className = "btn";
            optionButtonsEl.appendChild(forthButtonEl);
}

var removeCardEl = function() {
    document.getElementById('div').removeChild(pageContentEl);
    document.getElementById('h2').removeChild(pageContentEl);
}



var buttonHandler = function(event) {


    var time = 1;
    while (time < 0 || questionCounter > 0) {
        removeCardEl();
        createCardEl();

        questionCounter--;
        
    }
}

pageContentEl.addEventListener("click", buttonHandler);

createCardEl();
