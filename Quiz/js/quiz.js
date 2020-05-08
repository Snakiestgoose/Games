const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submitButton');
var myQuestions;
var questionNumber = 0;
var questionSet;
var results = 0;
var image_src;
var image;

function populateData(newQuestions, newQuestionSet) {
    myQuestions = newQuestions;
    questionSet = newQuestionSet;
}



function buildQuiz() {
    const quizContainer = document.getElementById('quiz');

    nextButton = document.getElementById('next');
    nextButton.addEventListener('click', nextQuestion);
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

    var questionText = document.getElementById('question-text');
    questionText.textContent = myQuestions[questionNumber][0];
    

    var label = document.getElementById('labela');
    label.textContent = myQuestions[questionNumber][1][0];
    label = document.getElementById('labelb');
    label.textContent = myQuestions[questionNumber][1][1];
    label = document.getElementById('labelc');
    label.textContent = myQuestions[questionNumber][1][2];
    

}
    
function showResults() {
    image_src = "../img/" + questionSet + "/results" + results + ".png";
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

    p = document.createElement('p');
    p_text = document.createTextNode('You scored ' + results + ' out of ' + myQuestions.length + '!');
    p.appendChild(p_text);
    resultDiv.appendChild(p);
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
