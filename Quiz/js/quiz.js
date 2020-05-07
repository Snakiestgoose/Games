const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submitButton');
const myQuestions = [
    [
        question = "Who's that pokemon!?",
        answers = [
            a = "Pideler",
            b = "Bulbeler",
            c = "Caterem"
        ],
        correctAnswer = "a"
    ],
    [
        question = "Who's that pokemon!?",
        answers = [
            a = "Caterpuff",
            b = "Catertata",
            c = "Caterow"
        ],
        correctAnswer = "c"
    ],
    [
        question = "Who's that pokemon!?",
        answers = [
            a = "Snortle",
            b = "Snorb",
            c = "Snoreotto"
        ],
        correctAnswer = "b"
    ]
];
var questionNumber = 0;
var questionSet = "pokemon";
var results = 0;
var image_src;
var image;

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');

    nextButton = document.getElementById('next');
    nextButton.addEventListener('click', nextQuestion);

    /*
        console.log(myQuestions);
        console.log(myQuestions[0][2]);
        console.log(myQuestions[0][1][0]);
        console.log(myQuestions[1][1]);

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

    if (questionNumber > myQuestions.length -1)
        return;

    console.log("Next Question");        
    var radio_buttons = document.getElementsByName('question1');
    for (var i = 0; i < radio_buttons.length; i++) {
        console.log(radio_buttons[i].checked);
        if (radio_buttons[i].value == myQuestions[questionNumber][2] && radio_buttons[i].checked)
            results++;
        radio_buttons[i].checked = false;
    }

    questionNumber++;

    if (questionNumber >= myQuestions.length) {
        showResults();
        return;
    }

    image_src = "../img/" + questionSet + "/image" + (questionNumber + 1) + ".png";

    image = document.getElementById('quiz-image');
    image.src = image_src;

    var label = document.getElementById('labela');
    label.textContent = myQuestions[questionNumber][1][0];
    label = document.getElementById('labelb');
    label.textContent = myQuestions[questionNumber][1][1];
    label = document.getElementById('labelc');
    label.textContent = myQuestions[questionNumber][1][2];
    

}
    
function showResults() {
    image_src = "../img/" + questionSet + "/results.png";
    image.src = image_src;
    if (results == 0)
        console.log('You suck');
    else {
        console.log("You got " + results + " out of " + myQuestions.length + " correct!")
    }
    var resultDiv = document.getElementById('quiz-question');
    while (resultDiv.hasChildNodes()) {
        resultDiv.removeChild(resultDiv.firstChild);
    }
    var button = document.getElementById('next');
    button.parentNode.removeChild(button);

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
