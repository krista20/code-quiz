var startButtonEl = document.getElementById("start");
console.log(startButtonEl);
function startQuiz() {
    var questionSection = document.querySelector(".question-one")
    questionSection.classList.remove("question-one")
    var homePage = document.querySelector(".startpage")
    console.log(homePage)
    homePage.style.display = "none"
}
startButtonEl.addEventListener("click", startQuiz)


// Timer
var seconds = 0;

var quizTimer = document.getElementById("timer");
console.log(quizTimer);
function countDown() {
    setInterval(quizTimer, 60000)

quizTimer.addEventListener("click", startQuiz())
}





// quiz timer
// var count = 3600

// var quizTimer = setInterval(function() {
//     document.getElementById('timer')=count;
//     count--;
//         if (count === 0) {
//             clearInterval(quizTimer);
//             document.getElementById('timer')='done';
//         }
// });