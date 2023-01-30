import React from "react"


export default function QuizComponent(props) {

    const quizAnswers = [...props.wrongAnswers, props.answer]
    console.log(quizAnswers)

    return (
        <>
            <h3 className="quiz-question">{props.question}</h3>
            <div className="quiz-options">
                <div className="options option-1">Adios</div>
                <div className="options option-2">Hola</div>
                <div className="options option-3">Au Revoir</div>
                <div className="options option-4">Salir</div>
            </div>
        </>
    )
}