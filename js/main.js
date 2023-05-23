//Quiz Questions
const quizData = [
    {
        question:'Who has scored more goals in one premier league season?',
        a:'Erling Haaland',
        b:'Cristiano Ronaldo',
        c:'Kevin Phillis',
        d:'Luiz Suares',
        correct:'a',
    },

    {
        question:' Which team  won three Premier league titles in the row in the last 3 years?',
        a:'Man City',
        b:'Liverpol',
        c:'Chelsea',
        d:'Arsenal',
        correct:'a'
    }
    ,
    {
        question:'Who are the most valuable players in the Premier League?',
        a:'Gabriel Jesus',
        b:'hary Kane',
        c:'kevin de bruyne',
        d:'Erling Haaland',
        correct:'d'
    },

    {
        question:'When last did Newcastle play Champions League?',
        a:'2001-02',
        b:'2002-03',
        c:'2004-05',
        d:'2010-12',
        correct:'a'
    },

   
    {
        question:'Which team won Premier League title 2022-23',
        a: 'West Ham',
        b:'Arsenal',
        c:'Man City',
        d:'Wolves',
        correct:'c'
    }
]

//Get the data from the user enterface
const answerEls = document.querySelectorAll('.answer')
const txt_a = document.getElementById('txt_a')
const txt_b = document.getElementById('txt_b')
const txt_c = document.getElementById('txt_c')
const txt_d = document.getElementById('txt_d')
const quiz = document.getElementById('quiz')
const question = document.getElementById('question')
const btn_full = document.querySelector('.btn-full')

let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    question.innerText = currentQuizData.question
    txt_a.innerText = currentQuizData.a
    txt_b.innerText = currentQuizData.b
    txt_c.innerText = currentQuizData.c
    txt_d.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false) 
}

function  getSelected(){
    let answer;

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer

}

btn_full.addEventListener('click',()=>{
   const answer = getSelected()

   if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()" class="btn-roll">Reload</button">
            `
        }
   }
})







