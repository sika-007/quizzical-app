import React, { useContext } from 'react'
import Question from './Question'
import { QuizContext } from './QuizContext'

const QuizPage = () => {

    const { questionsInfo, correctAnswerSelect, wrongAnswerSelect, optionSelect, setSelectedAnswer, revealAnswers } = useContext(QuizContext)

    const questionElements = questionsInfo?.map((questionInfo, index) => {
        return (
            <Question
                key={index}
                id={index}
                question={questionInfo.question}
                correctAnswer={<p key={1} id={1} className="p-2 text-center rounded-full border-[1px] border-violet-800 w-28 option1" onClick={(e) => {
                    correctAnswerSelect(index)
                    optionSelect(e)
                    setSelectedAnswer(index, 1)
                }}>{questionInfo.correct_answer}</p>}

                incorrectAnswer1={<p key={2} id={2} className="p-2 text-center rounded-full border-[1px] border-violet-800 w-28 option2" onClick={(e) => {
                    wrongAnswerSelect(index)
                    optionSelect(e)
                    setSelectedAnswer(index, 2)
                }}>{questionInfo.incorrect_answers[0]}</p>}

                incorrectAnswer2={<p key={3} id={3} className="p-2 text-center rounded-full border-[1px] border-violet-800 w-28 option3" onClick={(e) => {
                    wrongAnswerSelect(index)
                    optionSelect(e)
                    setSelectedAnswer(index, 3)
                }}>{questionInfo.incorrect_answers[1]}</p>}

                incorrectAnswer3={<p key={4} id={4} className="p-2 text-center rounded-full border-[1px] border-violet-800 w-28 option4" onClick={(e) => {
                    wrongAnswerSelect(index)
                    optionSelect(e)
                    setSelectedAnswer(index, 4)
                }}>{questionInfo.incorrect_answers[2]}</p>}
            />
        )
    })


    return (
        <div className='relative flex flex-col bg-slate-300 rounded-lg p-8 overflow-hidden min-h-full quiz-paper'>
            {questionElements}
            <button className='bg-slate-900 self-center py-3 px-7 rounded-full text-violet-300 hover:bg-slate-800' onClick={() => revealAnswers()}>Submit</button>
        </div>
    )
}

export default QuizPage