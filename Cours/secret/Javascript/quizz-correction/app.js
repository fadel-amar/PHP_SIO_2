const quizData = [
    {
        question: "Quel est le langage le plus utilisé en 2022?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Quelle équipe a remporté la coupe du monde en 2022?",
        a: "France",
        b: "Argentine",
        c: "Brésil",
        d: "Allemagne",
        correct: "b",
    },
    {
        question: "Quel est le plus gros succès au box-office de tous les temps?",
        a: "Avatar",
        b: "Avengers: Endgame",
        c: "Titanic",
        d: "Le roi lion",
        correct: "a",
    },
    {
        question: "en quel année a été créé PHP?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1993",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Vous avez répondu à  ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Recommencer le quizz</button>
            `;
        }
    }
});