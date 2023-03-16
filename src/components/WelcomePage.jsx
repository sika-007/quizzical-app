import React, { useContext } from 'react'
import Bleft from "../assets/bottom-left-blob.png"
import Tright from "../assets/top-right-blob.png"
import { QuizContext } from './QuizContext'


const WelcomePage = () => {

   const { questionsInfo, setIsRunning, setCustomization } = useContext(QuizContext)

  return (
      <div className='relative flex flex-col bg-slate-300 rounded-lg items-center justify-center overflow-hidden h-full'>
        <h1 className='font-bold text-5xl mb-2 z-10'>Quizzical</h1>
        <p className='mb-8 z-10'>Test your knowledge about the whole world</p>
        {questionsInfo ? <button className='py-4 px-8 text-white bg-indigo-900 rounded-md active:bg-indigo-800 active:scale-105 z-10' onClick={() => setIsRunning(prev => !prev)}>Start Quiz</button> : <button className='py-4 px-8 text-white bg-indigo-900 rounded-md active:bg-indigo-800 active:scale-105 z-10'>Getting Your Questions</button>}
        <img src={Tright} alt="blob2" className='absolute w-25 top-0 right-0 z-0'/>
        <img src={Bleft} alt="blob1" className='absolute w-25 bottom-0 left-0 z-0'/>

        <div className="space-x-5 my-2 mt-10" onChange={(e) => {
            setCustomization(prev => {
              return {...prev, difficulty: e.target.value}
            })
          }}>
          <label htmlFor="difficulty">Difficulty:</label>
          <select name="difficulty" id="difficulty" className='text-xs sm:text-base'>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">hard</option>
          </select>
        </div>

        <div className="space-x-5 my-2" onChange={(e) => {
            setCustomization(prev => {
              return {...prev, amount: e.target.value}
            })
          }}>
          <label htmlFor="numberOfQuestions">No. Of Questions</label>
          <select name="numberOfQuestions" id="numberOfQuestions" className='text-xs sm:text-base'>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
          </select>
        </div>
        
        <div className="space-x-5 my-2" onChange={(e) => {
          setCustomization(prev => {
            return {...prev, category: e.target.value}
          })
        }}>
          <label htmlFor="category">Category</label>
          <select name="category" id="caategory" className='text-xs sm:text-base'>
            <option value="27">Animals</option>
            <option value="9">General Knowledge</option>
            <option value="12">Music</option>
            <option value="20">Mythology</option>
            <option value="22">Geography</option>
          </select>
        </div>

      </div>
  )
}

export default WelcomePage
