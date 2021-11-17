let questionArray = [{
    question: 'In 1997, what legendary American climber had the first ascent of Necesarry Evil located in the Virgin River Gorge of St George Utah?',
    answer1: 'Chris Sharma',
    answer2: 'Boone Speed',
    answer3: 'Dave Graham',
    answer4: 'Alex Honnold',
    answerCorrect: 'ans-one'
}, {
    question: 'this is question 2',
    answer1: 'this is a possible answer2',
    answer2: 'this is also a possible answer2',
    answer3: 'this too can be an answer2',
    answer4: 'this is also an answer2',
    answerCorrect: 'ans-two'
}, {
    question: 'this is question 3',
    answer1: 'this is a possible answer3',
    answer2: 'this is also a possible answer3',
    answer3: 'this too can be an answer3',
    answer4: 'this is also an answer3',
    answerCorrect: 'ans-three'
}, {
    question: 'this is question 4',
    answer1: 'this is a possible answer4',
    answer2: 'this is also a possible answer4',
    answer3: 'this too can be an answer4',
    answer4: 'this is also an answer4',
    answerCorrect: 'ans-four'
}];

let question = document.querySelector('#question');
let answer1 = document.querySelector('#ans-one');
let answer2 = document.querySelector('#ans-two');
let answer3 = document.querySelector('#ans-three');
let answer4 = document.querySelector('#ans-four');
let answerBank = document.querySelector('#answer-bank');
let mainField = document.querySelector('#main-field');
let questionNumber = 0;
let respoMessage = document.querySelector('#responce');
let timerEl = document.querySelector('#time-left');
let rightScore = 0;
let wrongScore = 0;
let timeInterval;
let timeLeft;



quizQuestions();
countdown();



answerBank.addEventListener('click',function(event){
    let selectedAnswer = event.target;
    let answerId = selectedAnswer.getAttribute('id');

    
    
    if (questionArray[questionNumber].answerCorrect === answerId){
        rightScore ++;
        respoMessage.textContent = "right!";
        setTimeout(function(){
            respoMessage.textContent = '';}, 1500);
        } else {
            wrongScore ++;
            timeLeft -= 10;
            respoMessage.textContent = 'wrong!'
            setTimeout(function(){
                respoMessage.textContent = '';}, 1500);
                
            }
            console.log(`right score ${rightScore}`);
            console.log(`wrong score: ${wrongScore}`);
            
            questionNumber++;
            
            localStorage.setItem('rightScore', rightScore);
            console.log(rightScore);
            
            if(questionNumber === questionArray.length){
                window.location.href = 'highScore.html';
            }
            
            quizQuestions();
})


function countdown() {
    timeLeft = 30;
    timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = 'NO MORE TIME!'
            mainField.textContent = 'All Done!'
            window.location.href = 'highScore.html';
        }
    },1000);
}
//add event listener
//starty quiz question,
//check what answer was clicked.
//log point
// answerBank.addEventListener('click',function(event){
    // let judge = event.target;
    // console.log(judge);
    
    // })
    
    
    function quizQuestions(){
    //timer starts
        //if timer runs out "you lose", moved to next page with score.
    //question with answers displayed.
    // when answer is clicked(eventlistener), selected is compared to correct answer and prompt is displayed.
        //point added to score if correct.
            //moves to next question
      question.textContent = questionArray[questionNumber].question;
      answer1.textContent = questionArray[questionNumber].answer1;
      answer2.textContent = questionArray[questionNumber].answer2;
      answer3.textContent = questionArray[questionNumber].answer3;
      answer4.textContent = questionArray[questionNumber].answer4;
    
}
