

// var buttonEl = document.querySelector("#timer"); 

// var pageContentEl = document.querySelector("#page-content"); 
// var quizContentEl = document.querySelector("#quiz-content");
// var quizQuestionsEl = document. querySelector("#quiz-questions"); 
// var quizAnswersEl = document.querySelector("#quiz-answers");






// var count = 120; 
// var counter = setInterval(timer, 1000); //will run every second
// function timer () {
//     count=count-1; 
//     if (count <= 0) {
//         clearInterval(counter); 
//         //counter ended - end quiz 
//         return; 
//     }

//     
// }

//variables 
var quizQuestions = [
    // question 1 
    {
        question: "Where can JavaScript be inserted in an HTML document?",
        answers: {
            a: "The <head> tag.",
            b: "The <body> tag.",
            c: "An external script sheet.",
            d: "All of the above."
        },
        correctAnswer: "d",
        notation: "All of the above is the correct answer. Although the <script> tag can be placed in the <head> or within the <body> of the HTML document, it is best to link an external sheet." 
    },
    // question 2 
    {
        question: "Does JavaScipt account for white spaces in code?",
        answers: {
            a:"Yes, JavaScipt acknowledges all white space in code and it can effect the outcome of your function.",
            b:"No, JavaScript is lazy and doens't acknowledge anything it doesn't have to."
        },
        correctAnswer: "b",
        notation: "No is the correct answer. Javascript does not acknowledge white space in code. White spaces are used to make code more readable to the human user."
    },
    // question 3 
    {
        question: "How to you write comments in JavaScript. ie. Lines that JavaScript does not read and execute.", 
        answers: {
            a: "<!-- comment here --!>",
            b: "// comment here ",
            c: "/* comment here */ ",
        },
        correctAnswer: "b", 
        notation: "The correct answer is b. A is for HTML comments, C is for CSS comments."
    },
    // question 4
    {
        question: "Will the two following statements be read by JavaScript in the same way? ie. 'lastName=Jones' OR 'lastname=Jones'.",
        answers: {
            a: "Yes, JavaScript is not case sensitive and will read these two lines of code as the same thing.",
            b: "No, JavaScript is case sensitive and will read these two lines of code as different from eachother."
        },
        correctAnswer: "b",
        notation: "JavaScript is case sensitive and reads upper and lower case as different characters. It is common to use Camel Case in JavaScript (word starts with a lower case letter and all subsequent first letters are capitalized.)"
    },
    // question 5
    {
        question: "Which of the below statements about JavaScript functions is true?",
        answers: {
            a: "A JavaScript function is a block of code designed to perform a particular task.",
            b: "A JavaScript function does not have to be called to execute.",
            c: "A JavaScript function can only be used once."
        },
        correctAnswer: "a", 
        notation: "A JavaScipt function is a code designed to perform a task. It has to be called in the JavaScript document, and it can be reused as many times as necessarry."
    },
    // question 6
    {
        question: "What is a JavaScript string?", 
        answers: {
            a: "Used for storing and manipulating text.",
            b: "A string is written inside quotes.",
            c: "Numbers inside a string will be read as numbers",
            d: "A and B",
            e: "B and C"

        },
        correctAnswer: "d", 
        notation: "A JavaScript string is a line of characters written inside quotes. Any numbers written within a string will be returned as a string, not a number."
    },
    // question 7
    {
        question: "JavaScript 'for loops' can execute a block of code multiple times. When would be a good time to use a for loop?", 
        answers: {
            a: "To execute a code when a specific set of parameters returns as true or false.",
            b: "When you need to loop through an array a set number of times.",
            c: "All of the above."
            
        },
        correctAnswer: "c",
        notation: "A for loop in JavaScript should be used when the coder wants a function to execute when a boolean value (true or false) is met, and they only want the function to repeat a set number of times." 
    },
    // question 8 
    {
        question: "How would you check a JavaScript code for errors?", 
        answers: {
            a: "Use 'debugger;' before and after the code you are trying to troubleshoot.", 
            b: "Edit your code and refresh the page to try and determine where the error is coming from." 
        },
        correctAnswer: "a", 
        notation: "While both answers are technically true, you should use the 'debgugger;' tool to determine any errors in your code. The other option would take to long to pinpoint the error."
    }, 
    // question 9 
    {
        question: "How do you download JavaScript?",
        answers: {
            a: "You don't, JavaScript is already running for free in all browsers.",
            b: "JavaScript can be downloaded for $9.99 at 'javascriptdownload.org' and only works on Google Chrome."
        },
        correctAnswer: "a",
        notation: "JavaScript is the programming language of the web. It is already running on all browsers and is free for anyone and everyone to use."
    },
    // question 10
    {
        question: "What is the best way to learn JavaScript?",
        answers: {
            a: "Use Google.",
            b: "Practice.",
            c: "Study with others learning JavaScript.",
            d: "Take a computer coding bootcamp!",
            e: "All of the above."

        },
        correctAnswer: "e",
        notation: "While everyone is different, most computer coders (both advanced and beginner) agree that using resources such as Google and practicing is the best way to learn all kinds of code."
    }
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit'); 
var timerButton = document.getElementById('start');
//change slides 
// var previousButton = document.getElementById("previous");
// var nextButton = document.getElementById("next");
// var slides = document.querySelectorAll(".slide");
// var currentSlide = 0; 

    function showResults(){
    //countdown timer 
    function startTimer() {
        var counter = 120; 
        setInterval (function () {
            counter--; 
            if (counter >= 0){
                span = document.getElementById("timer");
                span.innerHTML = counter; 
            }
            if (counter === 0) {
                alert("Sorry, you've run out of time.");
                clearInterval(counter);
            }
        }, 1000); 
    }
    function start() 
    {
        document.getElementById("timer"); 
        startTimer(); 
    } 
    //start quiz 
    buildQuiz(); 
    //quiz 
    function buildQuiz() {
        //variable to store output 
         var output = []; 
         //for each question 
        quizQuestions.forEach(
            (currentQuestion, questionNumber) => {
                //list of possible answers 
                var answers = [];
                for(letter in currentQuestion.answers) {
                    answers.push(
                     `<label> <input type="radio" name="question${questionNumber}" value="${letter}"> 
                     ${letter} : 
                     ${currentQuestion.answers[letter]} 
                     </label>`
                    );
                }
                // add this question and its answers to the output
                output.push(
                 `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div> 
                    <div class="answers"> ${answers.join('')} </div>
                 </div>`
                );
            }
        );
        //combine our output list into one string of HTML and put it on the page 
     quizContainer.innerHTML = output.join(''); 
        }

  
    
        // get answers from quiz 
        var answerContainers = quizContainer.querySelectorAll('.answers');
        // keep track of user's answers 
        let numCorrect = 0; 
        //for each question 
        quizQuestions.forEach( (currentQuestion, questionNumber) => {
            //find answers 
            var answerContainer = answerContainers[questionNumber];
            var selector = `input[name=question${questionNumber}]: checked`;
            var userAnswer = (answerContainer.querySelector(selector) || {}).value; 

            //if answer is correct 
            if(userAnswer === currentQuestion.correctAnswer){
                //add to the number of correct answers 
                numCorrect++; 
                //color the answers bright orange 
                answerContainers[questionNumber].style.color = 'orange';
            }   
            //if answer is wrong/ not chosen 
            else {
                //color the answers grey 
                answerContainers[questionNumber].style.color = 'grey';
            }
        });
        //show number of correct answers out of total 
        resultsContainer.innerHTML= `${numCorrect} out of ${myQuestions.length}`;
    };

    
    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        var currentSlide = n; 
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length-1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }
    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    showSlide(currentSlide);

    //event listeners 

    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);





// var quizQuestionEl = function () { 
//     var quizQuestion = document.createElement("ul");
//     quizQuestion.className = "quiz-questions";

//     var quizAnswers = document.createElement("li");
//     quizAnswers.innerHTML = 
//     "<li class='quiz-answers'>" + answerOneA + "</li>"; 
//     quizQuestion.appendChild(quizAnswers);

// }

// var quizAnswerEl = function () {

// };

//start timer/ quiz 

//document.getElementById("timer").addEventListener("click", buildQuiz());



