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