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
                    btn2:{ txt:"2.strings", value: false}, 
                    btn3:{ txt:"3.strings", value: false}, 
                    btn4:{ txt:"4.strings", value: false}
                }
             },
        qstn2: { h1:"Pourquoi", 
                buttons: { 
                    btn1:{ txt:"1.strings", value: false}, 
                    btn2:{ txt:"2.2", value: false}, 
                    btn3:{ txt:"3.strings", value: false}, 
                    btn4:{ txt:"4.strings", value: false}
                }
            }, 
        qstn3: { h1:"Giati", 
                buttons: { 
                    btn1:{ txt:"1.strings", value: false}, 
                    btn2:{ txt:"2.3", value: false}, 
                    btn3:{ txt:"3.strings", value: false}, 
                    btn4:{ txt:"4.strings", value: false}
                }
            },
        qstn4: { h1:"Comment", 
                buttons: { 
                    btn1:{ txt:"1.strings", value: false}, 
                    btn2:{ txt:"2.4", value: false}, 
                    btn3:{ txt:"3.strings", value: false}, 
                    btn4:{ txt:"4.strings", value: false}
                }
            },
        qstn5: { h1:"Is it", 
                buttons: { 
                    btn1:{ txt:"1.strings", value: false}, 
                    btn2:{ txt:"2.5", value: false}, 
                    btn3:{ txt:"3.strings", value: false}, 
                    btn4:{ txt:"4.strings", value: false}
                }
            },
        qstn6: { h1:"Erotisi", 
                buttons: { 
                    btn1:{ txt:"1.strings", value: false}, 
                    btn2:{ txt:"2.6", value: false}, 
                    btn3:{ txt:"3.strings", value: false}, 
                    btn4:{ txt:"4.strings", value: false}
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

}



var buttonHandler = function(event) {


    var time = 1;
    while (time < 0 || questionCounter > 0) {
        // removeCardEl();
        // createCardEl();
        questionCounter--;
        
    }
}

pageContentEl.addEventListener("click", buttonHandler);

createCardEl();
