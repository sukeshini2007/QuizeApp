import React, { useContext, useState } from 'react'
import { Questions } from '../Questions'
import { Quizecontext } from '../context/Quizcontext'
import '../styles/Home.css'

export const Quize = () => {
  const [ques, setQues] = useState(0)
  const [option, setOption] = useState('')

  const { score, setScore, setStart } = useContext(Quizecontext)

  const nexQue = () => {
    if (Questions[ques].asnwer === option) {
      setScore(score + 1)
    }

    setQues(ques + 1)
  }
  const handleQuiz = () => {
    if (Questions[ques].asnwer === option) {
      setScore(score + 1)
    }
    setStart('score')
  }
  return (
    <div className="Quiz">
      {Questions[ques].prompt}
      <div className="Option">
        <button onClick={() => setOption('A')}>
          {Questions[ques].optionA}
        </button>
        <button onClick={() => setOption('B')}>
          {Questions[ques].optionB}
        </button>
        <button onClick={() => setOption('C')}>
          {Questions[ques].optionC}
        </button>
        <button onClick={() => setOption('D')}>
          {Questions[ques].optionD}
        </button>
      </div>
      <div>
        {ques === Questions.length - 1 ? (
          <button onClick={handleQuiz}>finish quiz</button>
        ) : (
          <button onClick={nexQue}>Next Question</button>
        )}
      </div>
    </div>
  )
}
