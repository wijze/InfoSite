var progress = JSON.parse(localStorage.getItem("progress"))
var notCompletedQuestions = progress.quiz.notCompletedQuestions

if(!notCompletedQuestions){
  notCompletedQuestions = questions
  progress.quiz.notCompletedQuestions = notCompletedQuestions
  localStorage.setItem("progress", JSON.stringify(progress))
}



var completedQuestions = []

var started = false
var currentQuestion = {}

const startButtonElement = document.getElementById("startButton")

const questionElement = document.getElementById("question")
const answerInputElement = document.getElementById("answerInput")
const submitButtonElement = document.getElementById("submitButton")

const givenAnswerWrapperElement = document.getElementById("givenAnswerWrapper")
const givenAnswerElement = document.getElementById("givenAnswer")

const correctElement = document.getElementById("correct")
const correctAnswerElement = document.getElementById("correctAnswer")
const raterWrapperElement = document.getElementById("raterWrapper")

const completedWrapperElement = document.getElementById("completed")

document.addEventListener("keypress",(event)=>{
  if(event.key=="Enter" && started){
    checkAnswer()
  }
})

function start(){
  started = true
  startButtonElement.style.display = "none"

  askQuestion()
}

function askQuestion(){
  if(notCompletedQuestions.length == 0){
    document.getElementById("mainloop").style.display="none"
    completedWrapperElement.style.display = "block"
    setProgress("quiz",100)
    return
  }

  questionElement.style.display="block"
  answerInputElement.style.display="block"
  submitButtonElement.style.display = "block"

  givenAnswerWrapperElement.style.display="none"
  correctElement.style.display="none"
  correctAnswerElement.style.display="none"
  raterWrapperElement.style.display="none"

  currentQuestion = notCompletedQuestions.splice(Math.round(Math.random() * (notCompletedQuestions.length-1)), 1)[0]
  questionElement.innerHTML = currentQuestion.question
  answerInputElement.value = ""
}

function checkAnswer(){
  answerInputElement.style.display="none"
  submitButtonElement.style.display = "none"

  givenAnswerWrapperElement.style.display="flex"
  correctElement.style.display="block"
  correctAnswerElement.style.display="block"
  raterWrapperElement.style.display="flex"

  givenAnswerElement.innerText = answerInputElement.value
  correctAnswerElement.innerText = "Correcte Antwoord: " + currentQuestion.answer
}

function verifyAnswer(correct){
  if(correct){
    completedQuestions.push(currentQuestion)
  }
  else{
    notCompletedQuestions.push(currentQuestion)
  }
  progress.quiz.notCompletedQuestions = notCompletedQuestions
  localStorage.setItem("progress",JSON.stringify(progress))
  askQuestion()
}

function resetQuestions(){
  progress.quiz.notCompletedQuestions = false
  progress.quiz.procentile = 0
  localStorage.setItem("progress",JSON.stringify(progress))
  window.location.reload()
}

if(notCompletedQuestions.length==0){
  startButtonElement.style.display = "none"
  askQuestion()
}