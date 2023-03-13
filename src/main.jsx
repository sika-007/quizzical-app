import React from 'react'
import ReactDOM from 'react-dom/client'
import { QuizContextProvider, QuizContext } from './components/QuizContext'
import "./globals.css"
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizContextProvider>
      <App /> 
    </QuizContextProvider>
  </React.StrictMode>,
)
