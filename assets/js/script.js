var pageContentEl = document.querySelector("#page-content"); 
var quizContentEl = document.querySelector("#quiz-content");
var quizQuestionsEl = document. querySelector("#quiz-questions"); 
var quizAnswersEl = document.querySelector("#quiz-answers");
var buttonEl = document.querySelector("#timer"); 

//countdown timer 
var count = 120; 
var counter = setInterval(timer, 1000); //will run every second
function timer () {
    count=count-1; 
    if (count <= 0) {
        clearInterval(counter); 
        //counter ended - end quiz 
        return; 
    }

    document.getElementById("timer").innerHTML=count; 
}

var quizContentEl = function () {


};

var quizQuestionEl = function () { 
    var quizQuestion = document.createElement("ul");
    quizQuestion.className = "quiz-questions";

    var quizAnswers = document.createElement("li");
    quizAnswers.innerHTML = 
    "<li class='quiz-answers'>" + answerOneA + "</li>"; 
    quizQuestion.appendChild(quizAnswers);

}

var quizAnswerEl = function () {

};

//start timer/ quiz 
buttonEl.addEventListener("click", timer());