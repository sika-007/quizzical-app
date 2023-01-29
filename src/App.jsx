import React, {useState, useEffect} from "react"
import topRightBlob from "./assets/top-right-blob.png"
import bottomLeftBlob from "./assets/bottom-left-blob.png"
import QuizComponent from "../components/QuizComponent"

export default function App() {

  //State declaration section
  const [isQuizRunning, setIsQuizRunning] = useState(false)

  //Function building section
  function startQuiz() {
    setIsQuizRunning(prevVal => !prevVal)
  }

  //Everything is still hard coded at this point. this will change in the future
  return isQuizRunning ? (
    <div className="app-container running">
      <img className="bottom-left-blob" src={bottomLeftBlob} alt="Bottom Left Blob"/>
      <img src={topRightBlob} alt="Top Right Blob" className="top-right-blob" />
      <div className="quiz-container">
        <QuizComponent />
        <QuizComponent />
        <QuizComponent />
        <QuizComponent />
        <QuizComponent />
        <QuizComponent />
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