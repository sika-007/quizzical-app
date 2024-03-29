import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const QuizContext = createContext()

export const QuizContextProvider = (props) => {

  const [isRunning, setIsRunning] = useState(false)
  const [questionsInfo, setQuestionsInfo] = useState(null)
  const [answers, setAnswers] = useState({})
  const [customization, setCustomization] = useState({difficulty: "easy", amount: "7", category: "27"})

  const option1 = document.querySelectorAll(".option1")
  const option2 = document.querySelectorAll(".option2")
  const option3 = document.querySelectorAll(".option3")
  const option4 = document.querySelectorAll(".option4")
  const optionParents = document.querySelectorAll(".option-parent")
  const totalScoreUI = document.querySelector(".total-score")
  const playAgainUI = document.querySelector(".play-again")



  let options = {}
  for (let i = 0; i < option1?.length; i++) {
    options[i] = {option1: option1[i], option2: option2[i], option3: option3[i], option4: option4[i]}
  }

  // console.log(options[1])


  useEffect(() => {
    async function getQuestions() {
      try {
          const response = await axios.get(`https://opentdb.com/api.php?amount=${customization.amount}&category=${customization.category}&difficulty=${customization.difficulty}&type=multiple`)
          const data = await response?.data
          setQuestionsInfo(data?.results)
      } catch (error) {
          console.error(error);
      }
    }  
    getQuestions()
  }, [customization])


  useEffect(() => {
    let answerObj = {}
    for (let i = 0; i < questionsInfo?.length; i++) {
      answerObj[i] = {isCorrect: false, isSelected: null}
    }
    setAnswers(answerObj)
  }, [questionsInfo?.length])

  function correctAnswerSelect(itemId) {
    setAnswers(prev => {
      return {
        ...prev, [itemId]: {
          isCorrect: true, isSelected: null
        }
      }
    })
  }
  
  function wrongAnswerSelect(itemId) {
    setAnswers(prev => {
      return {
        ...prev, [itemId]: {
          isCorrect: false, isSelected: null
        }
      }
    })
  }

  function optionSelect(e) {
    for (let child of e.target.parentElement.children) {
      child.classList.remove("bg-blue-500")
    }
    e.target.classList.toggle("bg-blue-500")
    // console.log(e.target.parentElement.children.classList)
  }

  function setSelectedAnswer(itemId, optionNum) {
    setAnswers(prev => {
      return {
        ...prev, [itemId]: {
          isCorrect: prev[itemId].isCorrect, isSelected: optionNum
        }
      }
    })
  }

  function revealAnswers() {
    for (let optionParent of optionParents) {
      for (let children of optionParent.children) {
        children.classList.remove("bg-blue-500")
      }
    }

    for (let i = 0; i < optionParents.length; i++) {
      //This fo the instace of a correct answer
      options[i].option1.classList.add("bg-green-500", "text-white")
  

      //The rest of this function is for the instances where the chosen answers are wrong
      if (answers[i].isSelected === 2){
        options[i].option2.classList.add("bg-red-500", "text-white")
      }

      if (answers[i].isSelected === 3){
        options[i].option3.classList.add("bg-red-500", "text-white")
      }

      if (answers[i].isSelected === 4){
        options[i].option4.classList.add("bg-red-500", "text-white")
      }
    }

    for (let optionParent of optionParents) {
      optionParent.classList.add("pointer-events-none")
    }

    totalScoreUI.classList.remove("invisible")
    totalScoreUI.classList.add("visible")
    playAgainUI.classList.remove("hidden")
  }

  console.log(answers)

  function getScore() {
    let total = 0
    for (let point of Object.values(answers)) {
      if (point.isCorrect) {
        total += 1
      }
    }
    return total
  }

  const totalScore = getScore()


  const context = {isRunning, setIsRunning, questionsInfo, setQuestionsInfo, answers, setAnswers, correctAnswerSelect, wrongAnswerSelect, optionSelect, setSelectedAnswer, revealAnswers, totalScore, customization, setCustomization}

  return (
    <QuizContext.Provider value={context}>
      {props.children}
    </QuizContext.Provider>
  )
}