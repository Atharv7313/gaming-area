const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestionIndex].question;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("result").innerText = "Correct!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "Incorrect!";
        document.getElementById("result").style.color = "red";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Game Over!";
        document.getElementById("answer").style.display = "none";
        document.getElementById("result").innerText = "";
        document.querySelector("button").style.display = "none";
    }
}

window.onload = loadQuestion;
