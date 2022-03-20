var questionCounter = 5;
var timeLimit = 75;
var score = 0;
var totalCards = 1;
var countDown = function() {
     timeLimit--;
     timeEl.textContent = "Time:" + timeLimit;
     if (timeLimit === 0 || totalCards >4) {
          clearInterval(startCountDown);
     }
 }

 var startCountDown = setInterval(countDown, 1000);

 var timeEl = document.querySelector(".time");

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


var createCardEl = function() {

    var currentCard = questionCards[randomNumber(0,5)];
    console.log(currentCard);

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



function removeCardEl() {  
     var optButtons = document.querySelector("section");
        pageContentEl.removeChild(optButtons);
     var header = document.querySelector("h2");
        pageContentEl.removeChild(header);    
}

function addFooterEl(answer) {
     var answerEl = document.createElement("footer");
         answerEl.className = "footer";
    
        if (answer) {
            answerEl.textContent = "Correct!";
            console.log("correct");
        } else {
            answerEl.textContent = "Wrong!";
            console.log("wrong");
        }
        var footerEl = document.querySelector("footer");
            footerEl.append(answerEl);
    
            var timeLeft = 1;
            var timeInterval = setInterval(function() {
                if ( timeLeft > 0) {
                  timeLeft--;
                } else if (timeLeft === 0) {
                     answerEl.remove(footerEl);
                    }
            }, 1000);
}



var score = function() {
    

    var highScoreEl = document.querySelector("name");
    var submitEl = document.querySelector("#subbtn");           

    console.log(highScoreEl);

    // submitEl.addEventListener("click", addplayer());
     event.preventDefault();
    // function addplayer(event) {
        
        var playerInput = highScoreEl.value;
        var playerInfo = {
            initials: playerInput,
            score: timeLimit
        }
        console.log(playerInput);

        window.localStorage.setItem("nameScore", JSON.stringify(playerInfo));
        console.log(playerInfo);
    // }

    var nameScore = localStorage.getItem("playerInfo");
    
        window.location.href = "scoreboard.html" + nameScore;
        
    
    var hallOfFameEl = document.querySelector("ul");
    var fameEl = document.createElement("li");
        fameEl.textContent = nameScore;
        fameEl.appendChild(hallOfFameEl);

        console.log(fameEl);
        
}


function clearScore() {
    var clearScoreBtn = document.querySelector("onclick");
    window.localStorage.clear();
}


var formEl = document.getElementById("scoreForm");
    formEl.style.display = "none";




var optionButtonsEl = document.createElement("section");
 

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
                console.log("but4", targetEl);
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
        
        score = timeLimit;
        removeCardEl();
        formEl.style.display = "block";
        
        
        
        score();event.preventDefault();
    }   
}



pageContentEl.addEventListener("click", buttonHandler);

createCardEl();
