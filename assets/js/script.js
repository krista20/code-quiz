var startButtonEl = document.getElementById("start");
console.log(startButtonEl);
function startQuiz() {
    var questionSection = document.querySelector(".questions")
    questionSection.classList.remove("questions")
    var homePage = document.querySelector(".startpage")
    console.log(homePage)
    homePage.style.display = "none"
}
startButtonEl.addEventListener("click", startQuiz)