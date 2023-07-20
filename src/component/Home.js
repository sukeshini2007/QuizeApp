import React, { useContext } from 'react'
import { Quizecontext } from '../context/Quizcontext'
import '../styles/Home.css'

export const Home = () => {
  const { start, setStart, name, setName } = useContext(Quizecontext)

  return (
    <div className="Home">
      <label>Enter The Name</label>
      <input
        type="text"
        placeholder="Ex. Vishakha Bavge"
        onChange={(e) => setName(e.target.value)}
      ></input>

      <div>
        <button onClick={() => setStart('quize')}>Start Quize</button>
      </div>
    </div>
  )
}
