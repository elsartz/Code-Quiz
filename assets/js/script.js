var pageContentEl = document.querySelector("#challenge");

var questionCards = { 
        qstn1: { h1:"Why", 
                buttons: { btn1: false, btn2: false, btn3: false, btn4: false}
             },
        qstn2: { h1:"Pourquoi", 
                buttons: { btn1: false, btn2: false, btn3: false, btn4: false}
            }, 
        qstn3: { h1:"Giati", 
                buttons: { btn1: false, btn2: false, btn3: false, btn4: false}
            },
        qstn4: { h1:"Comment", 
                buttons: { btn1: false, btn2: false, btn3: false, btn4: false}
            },
        qstn5: { h1:"Is it", 
                buttons: { btn1: false, btn2: false, btn3: false, btn4: false}
            },
        qstn6: { h1:"Erotisi", 
                buttons: { btn1: false, btn2: false, btn3: false, btn4: false}
            },
    };
    


console.log(questionCards.qstn1);
console.log(questionCards.qstn1.btn2);

var buttonHandler = function(event) {

}

pageContentEl.addEventListener("click", buttonHandler);
