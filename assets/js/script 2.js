var myQuestions = [
    // question 1 
    {
        question: "1. Where can JavaScript be inserted in an HTML document?",
        answers: {
            a: "The '< head >' tag.",
            b: "The '< body >' tag.",
            c: "An external script sheet.",
            d: "All of the above."
        },
        correctAnswer: "d",
    },
    // question 2 
    {
        question: "2. Does JavaScipt account for white spaces in code?",
        answers: {
            a:"Yes, JavaScipt acknowledges all white space in code and it can effect the outcome of your function.",
            b:"No, JavaScript is lazy and doens't acknowledge anything it doesn't have to."
        },
        correctAnswer: "b", 
    },
    // question 3 
    {
        question: "3. How to you write comments in JavaScript. ie. Lines that JavaScript does not read and execute.", 
        answers: {
            a: "< ! - - comment here - - ! >",
            b: "// comment here ",
            c: "/* comment here */ ",
        },
        correctAnswer: "b", 
    },
    // question 4
    {
        question: "4. Will the two following statements be read by JavaScript in the same way? ie. 'lastName=Jones' OR 'lastname=Jones'.",
        answers: {
            a: "Yes, JavaScript is not case sensitive and will read these two lines of code as the same thing.",
            b: "No, JavaScript is case sensitive and will read these two lines of code as different from eachother."
        },
        correctAnswer: "b",   
    },
    // question 5
    {
        question: "5. Which of the below statements about JavaScript functions is true?",
        answers: {
            a: "A JavaScript function is a block of code designed to perform a particular task.",
            b: "A JavaScript function does not have to be called to execute.",
            c: "A JavaScript function can only be used once."
        },
        correctAnswer: "a", 
    },
    // question 6
    {
        question: "6. What is a JavaScript string?", 
        answers: {
            a: "Used for storing and manipulating text.",
            b: "A string is written inside quotes.",
            c: "Numbers inside a string will be read as numbers",
            d: "A and B",
            e: "B and C"

        },
        correctAnswer: "d", 
    },
    // question 7
    {
        question: "7. JavaScript 'for loops' can execute a block of code multiple times. When would be a good time to use a for loop?", 
        answers: {
            a: "To execute a code when a specific set of parameters returns as true or false.",
            b: "When you need to loop through an array a set number of times.",
            c: "All of the above."
            
        },
        correctAnswer: "c",
    },
    // question 8 
    {
        question: "8. How would you check a JavaScript code for errors?", 
        answers: {
            a: "Use 'debugger;' before and after the code you are trying to troubleshoot.", 
            b: "Edit your code and refresh the page to try and determine where the error is coming from." 
        },
        correctAnswer: "a", 
    }, 
    // question 9 
    {
        question: "9. How do you download JavaScript?",
        answers: {
            a: "You don't, JavaScript is already running for free in all browsers.",
            b: "JavaScript can be downloaded for $9.99 at 'javascriptdownload.org' and only works on Google Chrome."
        },
        correctAnswer: "a", 
    },
    // question 10
    {
        question: "10. What is the best way to learn JavaScript?",
        answers: {
            a: "Use Google.",
            b: "Practice.",
            c: "Study with others learning JavaScript.",
            d: "Take a computer coding bootcamp!",
            e: "All of the above."

        },
        correctAnswer: "e",  
    }
];
var quizContainer = document.getElementById('test');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var timerButton = document.getElementById('start');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton, timerButton);

function generateQuiz (questions, quizContainer, resultsContainer, submitButton, timerButton) {
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

    function showQuestions (questions, quizContainer){
        // place to store output/ answer choices 
        var output = [];
        var answers; 

        //for each question
        for(var i=0; i<questions.length; i++){
            //reset list of answers 
            answers=[];
            //for each available answer to this question 
            for(letter in questions[i].answers){
                //add a radio button 
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' +i+' "value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '<label>'
                );
            }

            //add this question and its answers to the output 
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        //combine output list into one string
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        //gather answers 
        var answerContainers = quizContainer.querySelectorAll('.answers');
        //keep track of answers 
        var userAnswer = '';
        var numCorrect = 0; 
        //for each question: 
        for(var i=0; i<questions.length; i++){
            //find selected answer 
            userAnswer = (answerContainers[i].querySelector('input[name=question' +i+ ']:checked') || {}).value; 
            //if answer is correct 
            if(userAnswer===questions[i].correctAnswer){
                //add to the number of correct answers 
                numCorrect++; 
                //color the answers ____
                answerContainers[i].style.color = 'lightgreen';
            } else {
                //color the answers ___
                answerContainers[i].style.color = 'red';
            }
        }
        //show number of correct answers out of total 
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length; 
    }

    //show the questions right away 
    showQuestions(questions, quizContainer);

    //when user clicks submit, show results
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }

    timerButton.onclick = function() {
        startTimer();
    }
};
generateQuiz(); 

