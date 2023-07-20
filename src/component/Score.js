import React, { useContext } from 'react'
import { Quizecontext } from '../context/Quizcontext'
import { Questions } from '../Questions'
import '../styles/Home.css'

export const Score = () => {
  const { score, setStart, name, setname } = useContext(Quizecontext)
  return (
    <div className="Score">
      {name}'s score is ...
      <h2>
        {score}/{Questions.length}
      </h2>
      <button onClick={() => setStart('menu')}>Restart Quiz</button>
    </div>
  )
}
