const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    [
        question = "Who's that pokemon!?",
        answers = {
            a: "Pideler",
            b: "Bulbeler",
            c: "Caterem"
        },
        correctAnswer = "a"
    ],
    [
        question = "Who's that pokemon!?",
        answers = {
            a: "Caterpuff",
            b: "Catertata",
            c: "Caterow"
        },
        correctAnswer = "c"
    ],
    [
        question = "Who's that pokemon!?",
        answers = {
            a: "Snortle",
            b: "Snorb",
            c: "Snoreotto"
        },
        correctAnswer = "b"
    ]
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');

    nextButton = document.getElementById('next');
    nextButton.addEventListener('click', nextQuestion);


    /*
    for (var i = 0; i < myQuestions.length; i++) {
        var title = document.createElement("h2");
        var title_text = document.createTextNode(myQuestions[i][0]);
        title.appendChild(title_text);
        quizContainer.appendChild(title);

        for (var j = 0; j < myQuestions[i][1].length; i++) {
            var input = document.createElement("p");
            var input_text = document.createTextNode(myQuestions[i][j]);
            input.appendChild(input_text);
            title.appendChild(input);
        }

        console.log(myQuestions[i]);
    }
    */
}

function nextQuestion() {
    console.log("Next Question");
}
    
    
    
    
/*    const output = [];

    myQuestions.forEach(currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                <label>
                    <input type="radio" name="questions${questionNumber}" value="${letter}"></input>
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>
            )
        }
    }
    quizContainer.innerHTML = output.join('');
}*/

//submitButton.addEventListener('click', showResults);
window.addEventListener('load', buildQuiz);
