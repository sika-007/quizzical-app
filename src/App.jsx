import React, {useState, useEffect} from "react"
import topRightBlob from "./assets/top-right-blob.png"
import bottomLeftBlob from "./assets/bottom-left-blob.png"
import QuizComponent from "../components/QuizComponent"
import { nanoid } from "nanoid"

export default function App() {

  //State declaration section
  const [isQuizRunning, setIsQuizRunning] = useState(false)
  const [quizData, setQuizData] = useState([])

  //The area for dealing with side effects
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
      .then(res => res.json(res))
      .then(data => setQuizData(data.results))
  }, [isQuizRunning])

  console.log(quizData)

  

  //Function building section
  function startQuiz() {
    setIsQuizRunning(prevVal => !prevVal)
  }

  //Mapping over  the arrays of objects returrned from the API to render multiple look-alike components
  const quizElements = quizData.map((data) => {
    return ( 
    <QuizComponent 
      key={nanoid()}
      question={data.question.replace(/&quot;|&shy;|&#039;|&rsquo;/g, "'").replace(/&rdquo;&hellip;/, "print")}
      answer={data.correct_answer}
      wrongAnswers={data.incorrect_answers}
    />
    )
  })

  //Everything is still hard coded at this point. this will change in the future
  return isQuizRunning ? (
    <div className="app-container running">
      <img className="bottom-left-blob" src={bottomLeftBlob} alt="Bottom Left Blob"/>
      <img src={topRightBlob} alt="Top Right Blob" className="top-right-blob" />
      <div className="quiz-container">
        {quizElements}
        <div className="button-div">
          <button className="check-answers">Check answers</button>
        </div>
      </div>
    </div>
  ) :
  (
    <div className="app-container">
      <img className="bottom-left-blob" src={bottomLeftBlob} alt="Bottom Left Blob"/>
      <img src={topRightBlob} alt="Top Right Blob" className="top-right-blob" />
      <section className="quiz-intro">
        <h2 className="title">Quizzical</h2>
        <p className="description">Some description if needed</p>
        <button className="start-quiz-btn" onClick={startQuiz}>Start quiz</button>
      </section>
    </div>
  ) 
}