let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "¿Quién es el autor de 'Cien años de soledad'?",
        answers: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Isabel Allende"],
        correct: 0
    },
    {
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        answers: ["1914", "1945", "1939", "1918"],
        correct: 2
    },
    {
        question: "¿Qué país tiene la mayor población del mundo?",
        answers: ["India", "China", "Estados Unidos", "Rusia"],
        correct: 1
    },
    // Agregar más preguntas aquí
];

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('score').innerText = `Puntuación: ${score}/10`;
    document.getElementById('result-container').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const questionObj = questions[currentQuestion];
    document.getElementById('question').innerText = questionObj.question;
    const buttons = document.querySelectorAll('.answer-btn');
    questionObj.answers.forEach((answer, index) => {
        buttons[index].innerText = answer;
    });
}

function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestion].correct;
    if (selected - 1 === correctAnswer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-container').style.display = 'none';
