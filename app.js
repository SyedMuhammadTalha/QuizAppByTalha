//******** Questions with options*********/

var questions = [{
    "question": "The term “Islam” means",
    "option1": "Submission",
    "option2": "Thankfulness",
    "option3": "Fortitude",
    "option4": "Peace",
    "answer": "option4"
},
{
    "question": "The chapters of the Qur’an are known as",
    "option1": "Sunnah",
    "option2": "Surahs",
    "option3": "Shari’ah",
    "option4": "Sufis",
    "answer": "option2"
},
{
    "question": "In the Islamic tradition, what is a prophet",
    "option1": "Someone who receives communication or a message from ALLAH S.W.T",
    "option2": "Someone who founds a new religion",
    "option3": "Someone who becomes the political leader of a religious community",
    "option4": " None of them",
    "answer": "option1"
},
{
    "question": "The word jihad means",
    "option1": "Pilgrimage",
    "option2": "Prophecy",
    "option3": "fasting",
    "option4": "To strive or struggle",
    "answer": "option4"
},
{
    "question": "Which of the following countries was created in 1947 as a homeland for Muslims in South Asia",
    "option1": " Bangladesh",
    "option2": "India",
    "option3": "Pakistan",
    "option4": "Indonesia",
    "answer": "option3"
},]

//********Get Questions And Option From Html *********/

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var nextBtn = document.getElementById("nextBtn");
var count = 0;
var score = 0;
var right = 0;
var wrong = 0;
var currentOption;
var answer;
//********Call Load Question Function*********/

loadQuestion()

//********Load First Question When Page Refresh*********/

function loadQuestion() {
    question.innerHTML = questions[count].question;
    option1.innerHTML = questions[count].option1;
    option2.innerHTML = questions[count].option2;
    option3.innerHTML = questions[count].option3;
    option4.innerHTML = questions[count].option4;
}

//********Next Question Render Function*********/


function nextQuestion() {
    if (questions.length - 1 === count) {
        document.getElementById("card").style.display = "none";
        document.getElementById("result").style.display = "block";
    } else {
        document.getElementById("disabled").style.pointerEvents = "auto";
        var opt = document.getElementById(currentOption);
        nextBtn.disabled = true
        opt.previousSibling.previousSibling.checked = false
        opt.nextSibling.nextSibling.innerHTML = ""
        document.getElementById(questions[count].answer).nextSibling.nextSibling.innerHTML = "";
        count++
        question.innerHTML = questions[count].question;
        option1.innerHTML = questions[count].option1;
        option2.innerHTML = questions[count].option2;
        option3.innerHTML = questions[count].option3;
        option4.innerHTML = questions[count].option4;
    }
}

//********Slect Question And Check Result*********/
function select(option) {
    document.getElementById("disabled").style.pointerEvents = "none";
    currentOption = option;
    nextBtn.disabled = false
    var opt = document.getElementById(option);
    if (option === questions[count].answer) {
        score++
        console.log(score)
        document.getElementById("score").innerHTML = score * 10;
        opt.nextSibling.nextSibling.style.color = "green";
        opt.nextSibling.nextSibling.style.fontWeight = "bold";
        opt.nextSibling.nextSibling.innerHTML = "Correct ✓";
    } else {
        opt.nextSibling.nextSibling.style.color = "red";
        opt.nextSibling.nextSibling.style.fontWeight = "bold";
        opt.nextSibling.nextSibling.innerHTML = "Incorrect ❌";
        document.getElementById(questions[count].answer).nextSibling.nextSibling.style.color = "green";
        document.getElementById(questions[count].answer).nextSibling.nextSibling.style.fontWeight = "bold";
        document.getElementById(questions[count].answer).nextSibling.nextSibling.innerHTML = "Correct ✓";
    }
}