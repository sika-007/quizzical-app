import React, { useContext } from 'react'
import { QuizContext } from './components/QuizContext'
import WelcomePage from './components/WelcomePage'
import QuizPage from './components/QuizPage'

const App = () => {

  const {isRunning} = useContext(QuizContext)

  return (
    <div className='h-full'>
      {isRunning ? <QuizPage /> : <WelcomePage />}
    </div>
  )
}

export default App
