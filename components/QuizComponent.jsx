import React, {useState, useEffect} from "react"
import { nanoid } from "nanoid"



export default function QuizComponent(props) {

    console.log(props.options)
    
    const optionElements = props.options.map(option => {
        return (
            <div className={option.isSelected ? "selected option" : "option"} onClick={() => {
                selectOption(option.id)
            }}>{option.option}</div>
        )
    })

    return (
        <>
            <h3 className="quiz-question">{props.question}</h3>
            <div className="quiz-options">
                {optionElements}
            </div>
        </>
    )
}