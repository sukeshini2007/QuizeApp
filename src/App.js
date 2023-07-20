import { useState, useContext } from 'react'
import '../src/styles/App.css'
import { Home } from './component/Home'
import { Quize } from './component/Quize'
import { Score } from './component/Score'
import { Quizecontext } from './context/Quizcontext'

function App() {
  const [start, setStart] = useState('menu')
  const [score, setScore] = useState(0)
  const [name, setName] = useState('Visha')
  return (
    <div className="App">
      <h2> Quiz App</h2>
      <Quizecontext.Provider
        value={{ start, setStart, score, setScore, name, setName }}
      >
        {start === 'menu' && <Home />}
        {start === 'quize' && <Quize />}
        {start === 'score' && <Score />}
      </Quizecontext.Provider>
    </div>
  )
}

export default App
