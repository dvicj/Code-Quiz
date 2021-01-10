//quiz questions 
 var questions = [
    {
        numb: 1,
        question: "Where can JavaScript be inserted in an HTML document?",
        answer: "D. All of the above.",
        options: [
            "A. The '< head >' tag.",
            "B. The '< body >' tag.",
            "C. An external script sheet.",
            "D. All of the above."
        ]
    },
    {
        numb: 2, 
        question: "How do you define a variable in JavaScript?",
        answer: "D. All of the above.",
        options: [
            "A. Use 'var' ",
            "B. Use 'let' ",
            "C. Use 'const' ",
            "D. All of the above."
        ]
    },
    {
        numb: 3, 
        question: "How do you write comments in JavaScript?", 
        answer: "B. // comment here ",
        options: [
            "A. < ! - - comment here - - ! >",
            "B. // comment here ",
            "C. /* comment here */ ",
            "D. *** comment here ***"
        ]
    },
    {
        numb: 4, 
        question: "Which of the below is NOT an operator?",
        answer: "C. '//' ",
        options: [
            "A. '||' ",
            "B. '&&' ",
            "C. '//' ",
            "D. '!==' "
        ]
    },
    {
        numb: 5, 
        question: "Which of the below statements about JavaScript functions is true?",
        answer: "A. A JavaScript function is a block of code designed to perform a particular task.",
        options: [
            "A. A JavaScript function is a block of code designed to perform a particular task.",
            "B. A JavaScript function does not have to be called to execute.",
            "C. A JavaScript function can only be used once.",
            "D. A JavaScript function has to be defined in the global scope."
        ]
    },
    {
        numb: 6, 
        question: "What is a JavaScript string?", 
        answer: "D. A and B.",
        options: [
            "A. Used for storing and manipulating text.",
            "B. A string is written inside quotes.",
            "C. Numbers inside a string will be read as numbers.",
            "D. A and B.",
        ]
    },
    {
        numb: 7, 
        question: "JavaScript 'for loops' can execute a block of code multiple times. When would be a good time to use a for loop?", 
        answer: "C. A and B.", 
        options: [
            "A. To execute a code when a specific set of parameters returns as true or false.",
            "B. When you need to loop through an array a set number of times.",
            "C. A and B.",
            "D. It is never a good time to use a for loop."
        ]
    },
    {
        numb: 8, 
        question: "How would you check a JavaScript code for errors?", 
        answer: "B. 'debugger;' ", 
        options: [
            "A. 'fix.me()' ",
            "B. 'debugger;' ",
            "C. 'issue.alert' ",
            "D. None of the above."
        ]
    },
    {
        numb: 9, 
        question: "What code in JavaScript would create a pop up with the message 'Hi there!'?",
        answer: "A. window.alert('Hi there!'); ",
        options: [
            "A. window.alert('Hi there!'); ",
            "B. window.confirm('Hi there!'); ",
            "C. window.prompt(Hi there!);",
            "D. alert(Hi there!);"
        ]
    },
    {
        numb: 10, 
        question: "What is the best way to learn JavaScript?",
        answer: "D. All of the above.",
        options: [
            "A. Use Google.",
            "B. Practice.",
            "C. Study with others learning JavaScript.",
            "D. All of the above."
        ]
    }
];

//query selectors 
var startButton = document.querySelector(".startButton button");
var infoBox = document.querySelector(".infoBox ");
var exitButton = infoBox .querySelector(".buttons .quit");
var continueButton = infoBox .querySelector(".buttons .restart");
var quizBox = document.querySelector(".quizBox");
var resultBox = document.querySelector(".resultBox");
var highScoreBox = document.querySelector(".highScoreBox");
var optionList = document.querySelector(".optionList");
var timeText = document.querySelector(".timer .timeLeftText");
var timeCount = document.querySelector(".timer .timerSec");



// start button clicked
startButton.onclick = ()=>{
    infoBox.classList.add("activeInfo"); //show info/welcome box
}


// exit button clicked
exitButton.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); //hide info/welcome box
}

// continue button clicked
continueButton.onclick = ()=>{
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz"); //show quiz box
    showQuestions(0); 
    queCounter(1); //adding 1 to question counter 
    startTimer(12); //start timer 
}

let timeValue =  12; //12 seconds per question  
let queCount = 0; //start question count at 0 
let queNumb = 1; //start question number at 1 (due to 0 index)
let userScore = 0; //start user score at 0 
let counter;

var restartQuiz = resultBox.querySelector(".buttons .restart");
var quitQuiz = resultBox.querySelector(".buttons .quit");
var saveScore = resultBox.querySelector(".buttons .save");

// restart button clicked
restartQuiz.onclick = ()=>{
    quizBox.classList.add("activeQuiz"); //show quiz box
    resultBox.classList.remove("activeResult"); //hide result/welcome box
    timeValue = 12; 
    queCount = 0;
    queNumb = 1;
    userScore = 0;
    showQuestions(queCount); 
    queCounter(queNumb); //add question number to the counter 
    clearInterval(counter);
    startTimer(timeValue); //start timer 
    nextButton.classList.remove("show"); //hide the next button
}

// quit button clicked
quitQuiz.onclick = ()=>{
    alert("Fine, bye!");
    window.location.reload(); //reload main window
}

var nextButton = document.querySelector("footer .nextButton");
var footerResults = document.querySelector("footer .totalQue");

// next button clicked
nextButton.onclick = ()=>{
    if(queCount < questions.length - 1){ //if question count is less than total question length
        queCount++; //add one to question count 
        queNumb++; //add one to question number 
        showQuestions(queCount); 
        queCounter(queNumb); 
        clearInterval(counter); 
        startTimer(timeValue); 
        nextButton.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); 
        showResult(); //show results box 
    }
}

// getting questions and options from array
function showQuestions(index){
    var queText = document.querySelector(".queText");

    //creating a new span and div tag for question and options -use array index 
    let queTag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let optionTag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    queText.innerHTML = queTag; //adding new span tag inside queTag
    optionList.innerHTML = optionTag; //adding new div tag inside optionTag
    
    var option = optionList.querySelectorAll(".option");

    // set onclick event to all question options 
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

//clicked an option 
function optionSelected(answer){
    clearInterval(counter); //clear counter
    let userAns = answer.textContent; //answer user chose 
    let correcAns = questions[queCount].answer; //correct answer in array 
    var allOptions = optionList.children.length; //answer options 
    
    if(userAns == correcAns){ //selected option === correct answer 
        userScore += 1; //add 1 to score 
        answer.classList.add("correct"); //make correct option chosen green 
    }else{
        answer.classList.add("incorrect"); //incorrect option red 

        for(i=0; i < allOptions; i++){
            if(optionList.children[i].textContent == correcAns){ 
                optionList.children[i].setAttribute("class", "option correct"); //make correct option chosen green 
            }
        }
    }
    for(i=0; i < allOptions; i++){
        optionList.children[i].classList.add("disabled"); //no clicking when option is chosen 
    }
    nextButton.classList.add("show"); //show the next button if any option was chosen 
}

function showResult(){
    infoBox.classList.remove("activeInfo"); //hide info box
    quizBox.classList.remove("activeQuiz"); //hide quiz box
    resultBox.classList.add("activeResult"); //show result box
    var scoreText = resultBox.querySelector(".scoreText");
    if (userScore > 7){ // scored more than 7
        let scoreTag = '<span>Woohoo! 🤑, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside scoreText
    }
    else if(userScore > 5){ // if user scored more than 5
        let scoreTag = '<span>Pretty good! 🧐, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 5
        let scoreTag = '<span>Hmmm... 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //time goes down by 1 second 
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            var allOptions = optionList.children.length; //getting all option items
            let correcAns = questions[queCount].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(optionList.children[i].textContent == correcAns){ 
                    optionList.children[i].setAttribute("class", "option correct"); 
                }
            }
            for(i=0; i < allOptions; i++){
                optionList.children[i].classList.add("disabled"); //no clicking after choosing option 
            }
            nextButton.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    footerResults.innerHTML = totalQueCounTag;  //adding new span tag inside footerResults
}

// if Save High Score button clicked
saveScore.onclick = ()=>{
    var nameText = document.querySelector(".nameText");
    var scoreText = document.querySelector(".scoreTextFinal");
    resultBox.classList.remove("activeResult"); //hide results box
    quizBox.classList.remove("activeQuiz"); //hide quiz box 
    highScoreBox.classList.add("activeScore"); //show highscore box 
    var userName = prompt("What is your name?");
    localStorage.name = userName; //store user name 
    localStorage.score = userScore; //store user score 
    console.log("The user's name is: " + userName);
    console.log("The user's score is: " + userScore);

    let userNameText = '<span class="player-name"> Player Name: ' + userName + '</span>';
    let userScoreText = '<span class="player-score"> Player Score: '+ userScore +'</span>';
    nameText.innerHTML = userNameText; //adding new span tag inside userNameText
    scoreText.innerHTML = userScoreText; //adding new span tag inside userScoreText   
};

