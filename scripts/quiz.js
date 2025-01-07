const questions = [
    {
        question: "Ano ang buong pangalan ni José Rizal?",
        options: [
            "José Protacio Rizal Mercado y Alonzo Realonda",
            "José Antonio Rizal Cruz y Alonzo",
            "José Protacio Mercado Rizal de Alonzo",
            "José Rizal Mercado y Cruz",
        ],
        correct: 0,
    },

    {
        question: "Ano ang tanyag na sagisag-panulat na ginamit ni Rizal sa La Solidaridad?",
        options: ["Laong Laan", "Plaridel", "Taga-Ilog", "Dimasalang"],
        correct: 0,
    },
    {
        question: "Bukod sa pagiging doktor, anong propesyon ang isinagawa ni Rizal?",
        options: ["Abogado", "Guro", "Eskultor", "Inhinyero"],
        correct: 2,
    },
    {
        question: "Saan isinulat ni Rizal ang karamihan sa kanyang akdang Noli Me Tangere?",
        options: ["Alemanya", "Pransya", "Espanya", "Pilipinas"],
        correct: 0,
    },
    {
        question: "Anong organisasyon ang itinatag ni Rizal para sa makabayang kaunlaran ng mga Pilipino?",
        options: [
            "La Liga Filipina",
            "La Solidaridad",
            "Katipunan",
            "Ilustrado Association",
        ],
        correct: 0,
    },
    {
        question: "Anong makasaysayang tanda ang matatagpuan sa lugar ng pagbitay kay José Rizal?",
        options: [
            "Shrine ni Rizal",
            "Monumento ni Rizal",
            "Tanda ng Pagkamartir ni Rizal",
            "Krus ng Bagumbayan",
        ],
        correct: 1,
    },
    {
        question: "Ano ang pamagat ng unang nobela ni Rizal?",
        options: [
            "El Filibusterismo",
            "Noli Me Tangere",
            "Mi Último Adiós",
            "Sobre la Indolencia de los Filipinos",
        ],
        correct: 1,
    },
    {
        question: "Saan ipinanganak si José Rizal?",
        options: ["Cavite", "Laguna", "Maynila", "Batangas"],
        correct: 1,
    },
    {
        question: "Sino ang tunay na minamahal ni José Rizal na itinuturing na 'pinakadakilang pag-ibig' niya?",
        options: ["Leonor Rivera", "Josephine Bracken", "Segunda Katigbak", "Nelly Boustead"],
        correct: 0,
    },
    {
        question: "Ano ang pangunahing layunin ng nobela ni Rizal na Noli Me Tangere?",
        options: [
            "Libangin ang mga mambabasa",
            "Itaguyod ang kalayaan ng Pilipinas",
            "Ibunyag ang kawalan ng katarungan sa ilalim ng pananakop ng Espanya",
            "Ituro ang kulturang Pilipino",
        ],
        correct: 2,
    },
    {
        question: "Saan binitay si José Rizal?",
        options: ["Intramuros", "Bagumbayan (Luneta)", "Fort Santiago", "Malacañang"],
        correct: 1,
    },
    {
        question: "Anong sagisag-panulat ang ginamit ni Rizal sa kanyang mga akda?",
        options: ["Dimasalang", "La Solidaridad", "Plaridel", "Taga-Ilog"],
        correct: 0,
    },
    {
        question: "Ano ang pamagat ng huling tula ni Rizal?",
        options: ["El Amor Patrio", "A La Juventud Filipina", "Mi Último Adiós", "Por La Educación"],
        correct: 2,
    },
    {
        question: "Saang bansa nakumpleto ni Rizal ang kanyang pag-aaral sa Medisina?",
        options: ["Espanya", "Pransya", "Alemanya", "Pilipinas"],
        correct: 0,
    },
    {
        question: "Kailan ginugunita ang Araw ni José Rizal sa Pilipinas?",
        options: ["Hunyo 12", "Disyembre 30", "Agosto 21", "Nobyembre 30"],
        correct: 1,
    },
    {
        question: "Saang bansa kinikilala si José Rizal bilang pambansang bayani?",
        options: ["Pilipinas", "Mexico", "Espanya", "Portugal"],
        correct: 0,
    },
    {
        question: "Ano ang ikalawang nobelang isinulat ni José Rizal?",
        options: ["Noli Me Tangere", "Mi Último Adiós", "El Filibusterismo", "A La Juventud Filipina"],
        correct: 2,
    },
    {
        question: "Sino ang makapangyarihang Pilipinong mamamahayag sa La Solidaridad na inspirasyon ni Rizal?",
        options: ["Marcelo H. del Pilar", "Andrés Bonifacio", "Antonio Luna", "Apolinario Mabini"],
        correct: 0,
    },
    {
        question: "Anong propesyon ni José Rizal habang ipinatapon siya sa Dapitan?",
        options: ["Manunulat", "Doktor", "Tagapagturo", "Marino"],
        correct: 2,
    },
    {
        question: "Anong tanyag na kilusang reporma ang kinabibilangan ni Rizal bilang kilalang lider?",
        options: ["Kilusang La Solidaridad", "Kilusang Propaganda", "Katipunan", "Kilusang Rebolusyonaryo"],
        correct: 1,
    },
    {
        question: "Aling bayani ng Pilipinas ang labis humanga sa mga ideya ni José Rizal?",
        options: ["Emilio Aguinaldo", "Andrés Bonifacio", "Antonio Luna", "Melchora Aquino"],
        correct: 1,
    },
    {
        question: "Saang wika isinulat ni José Rizal ang orihinal na 'Noli Me Tangere'?",
        options: ["Tagalog", "Espanyol", "Ingles", "Pranses"],
        correct: 1,
    },
    {
        question: "Saang lungsod hinuli si José Rizal bago siya ipinatapon sa Dapitan?",
        options: ["Cebu", "Laguna", "Maynila", "Batangas"],
        correct: 2,
    },
    {
        question: "Ano ang ginamit ni Rizal bilang paraan upang magpadala ng mga nakatagong mensahe sa kanyang mga kakampi?",
        options: ["Liham", "Mga simbolo sa mga libro", "Tula", "Hindi nakikitang tinta"],
        correct: 1,
    },
    {
        question: "Aling institusyon ang pinuna ni Rizal sa kanyang mga akda?",
        options: ["Kastilang Prayle", "Parliamento ng Pilipinas", "Kano", "Sistema ng Edukasyon"],
        correct: 0,
    },
    {
        question: "Ano ang kontribusyon ni Rizal bilang siyentipiko at eksplorador?",
        options: ["Itinala ang flora at fauna", "Nakadiskubre ng bagong sakit", "Nagsanay ng likas-yamang lokasyon", "Naghukay ng mga artifact"],
        correct: 0,
    },
    {
        question: "Anong sakit ang natulungan ni Rizal na gamutin sa kanyang panlalawigang praktika?",
        options: ["Tuberculosis", "Malarya", "Katarata", "Typhoid"],
        correct: 2,
    },
    {
        question: "Ilan ang mga kapatid ni José Rizal?",
        options: ["9", "11", "12", "13"],
        correct: 1,
    },
    {
        question: "Anong artistikong kakayahan ang ipinamalas ni Rizal bukod sa kanyang pagsusulat?",
        options: ["Pag-awit", "Pagpipinta", "Pag-guhit at iskultura", "Pagsayaw"],
        correct: 2,
    },
    {
        question: "Anong papel ni Rizal sa pagtatag ng mga samahang pang-kabataan ng Pilipino?",
        options: ["Tagapagtatag", "Manunulat ng awit", "Pilosopo", "Tagapagsalita"],
        correct: 0,
    },
];

const MAX_QUESTIONS = 10;
questions.sort(() => Math.random() - 0.5);
questions.length = Math.min(questions.length, MAX_QUESTIONS);
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");

    questionElement.innerHTML = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(index, button));
        optionsElement.appendChild(button);
    });

    nextButton.disabled = true;
}

function selectAnswer(selectedIndex, button) {
    const correctIndex = questions[currentQuestionIndex].correct;
    const answerButtons = document.querySelectorAll(".quiz-options button");

    answerButtons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correctIndex) {
            btn.classList.add("correct");
            btn.classList.add("correct-answer");
        }
    });

    if (selectedIndex === correctIndex) {
        button.classList.add("selected", "correct");
        score++;
    } else {
        button.classList.add("selected", "wrong");
    }

    document.getElementById("next-btn").disabled = false;
}

document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.querySelector(".quiz-container").style.display = "none";
    const resultElement = document.getElementById("quizResult");
    resultElement.style.display = "block";
    document.getElementById("finalScore").textContent = `Your score: ${score} / ${questions.length}`;
}

function retryQuiz() {
    // Shuffle questions
    questions.sort(() => Math.random() - 0.5);
    questions.length = Math.min(questions.length, MAX_QUESTIONS);
    // Shuffle options for each question and update correct index
    questions.forEach(question => {
        const correctOption = question.options[question.correct];
        question.options.sort(() => Math.random() - 0.5);
        question.correct = question.options.indexOf(correctOption);
    });

    currentQuestionIndex = 0;

    score = 0;

    document.querySelector(".quiz-container").style.display = "block";

    document.getElementById("quizResult").style.display = "none";

    loadQuestion();
}

// Load the first question
loadQuestion();