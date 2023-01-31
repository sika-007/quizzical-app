import React, {useState, useEffect} from "react"
import topRightBlob from "./assets/top-right-blob.png"
import bottomLeftBlob from "./assets/bottom-left-blob.png"
import QuizComponent from "../components/QuizComponent"
import { nanoid } from "nanoid"

export default function App() {

  //State declaration section
  const [isQuizRunning, setIsQuizRunning] = useState(false)
  const [quizData, setQuizData] = useState([])

  const [optionsObj, setOptionsObj] = useState(optionGenerator())
  
  console.log(quizData)
    function optionGenerator() {
      return quizData.map(quizDatum => {
        return (
          {question: quizDatum.question, options: [
            {option: quizDatum.incorrect_answers[0], isSelected:false, isCorrect: false, id: nanoid()}, 
            {option: quizDatum.incorrect_answers[1], isSelected:false, isCorrect: false, id: nanoid()}, 
            {option: quizDatum.incorrect_answers[2], isSelected:false, isCorrect: false, id: nanoid()}, 
            {option: quizDatum.correct_answer, isSelected:false, isCorrect: true, id: nanoid()}
        ]}
        )
      })
    }

  //The area for dealing with side effects
  useEffect(() => {
    console.log("ran")
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
      .then(res => res.json(res))
      .then(data => setQuizData(data.results))
  }, [])

  

  //Function building section
  function startQuiz() {
    setIsQuizRunning(prevVal => !prevVal)
  }

  
  //Mapping over  the arrays of objects returrned from the API to render multiple look-alike components
  const quizElements = optionsObj.map((data) => {
    const uniqueId = nanoid()
    return ( 
    <QuizComponent
      key={uniqueId}
      id={uniqueId}
      options={data.options}
      question={data.question.replace(/&quot;|&shy;|&#039;|&rsquo;/g, "'").replace(/&rdquo;&hellip;/, "print")}
      answer={data.options[3].option.replace(/&quot;|&shy;|&#039;|&rsquo;/g, "'").replace("&iacute;", "í").replace("&oacute;", "ó")}
      wrongAnswer1={data.options[1].option.replace(/&quot;|&shy;|&#039;|&rsquo;/g, "'").replace("&oacute;", "ó")}
      wrongAnswer2={data.options[2].option.replace(/&quot;|&shy;|&#039;|&rsquo;/g, "'").replace("&oacute;", "ó")}
      wrongAnswer3={data.options[3].option.replace(/&quot;|&shy;|&#039;|&rsquo;/g, "'").replace("&oacute;", "ó")}
    />
    )}  
  )
  

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