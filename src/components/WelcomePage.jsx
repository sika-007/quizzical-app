import React, { useContext } from 'react'
import Bleft from "../assets/bottom-left-blob.png"
import Tright from "../assets/top-right-blob.png"
import { QuizContext } from './QuizContext'

const WelcomePage = () => {

   const {setIsRunning} = useContext(QuizContext)
  return (
      <div className='relative flex flex-col bg-slate-300 rounded-lg items-center justify-center overflow-hidden h-full'>
        <h1 className='font-bold text-5xl mb-2 z-10'>Quizzical</h1>
        <p className='mb-8 z-10'>Test your knowledge about the whole world</p>
        <button className='py-4 px-8 text-white bg-indigo-900 rounded-md active:bg-indigo-800 active:scale-105 z-10' onClick={() => setIsRunning(prev => !prev)}>Start Quiz</button>
        <img src={Tright} alt="blob2" className='absolute w-25 top-0 right-0 z-0'/>
        <img src={Bleft} alt="blob1" className='absolute w-25 bottom-0 left-0 z-0'/>
      </div>
  )
}

export default WelcomePage
