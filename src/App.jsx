import React, {useState, useEffect} from "react"
import topRightBlob from "./assets/top-right-blob.png"
import bottomLeftBlob from "./assets/bottom-left-blob.png"

export default function App() {

  const [isQuizRunning, setIsQuizRunning] = useState(true)

  //Everything is still hard coded at this point. this will change in the future
  return isQuizRunning ? (
    <div className="app-container running">
      <img className="bottom-left-blob" src={bottomLeftBlob} alt="Bottom Left Blob"/>
      <img src={topRightBlob} alt="Top Right Blob" className="top-right-blob" />
      <div className="quiz-container">
        <h3 className="quiz-question">How would one say goodbye in Spanish</h3>
        <div className="quiz-options">
          <div className="options option-1">Adios</div>
          <div className="options option-2">Hola</div>
          <div className="options option-3">Au Revoir</div>
          <div className="options option-4">Salir</div>
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
        <button className="start-quiz-btn">Start quiz</button>
      </section>
    </div>
  ) 
}