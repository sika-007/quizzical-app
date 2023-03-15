import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from './QuizContext'

const Questions = ({question, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3, id}) => {

  const [answerElements, setAnswerElements] = useState([])
  
  useEffect(() => {
    setAnswerElements([correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3].sort(() => Math.random() - 0.5))
  }, [])

  return (
    <div className='my-3 border-b-2 text-left pb-2'>
      <h3 className='font-bold mb-3'>{id + 1}. {question}</h3>
      <div className="flex gap-2 text-xs option-parent">
        {answerElements}
      </div>
    </div>
  )
}

export default Questions
