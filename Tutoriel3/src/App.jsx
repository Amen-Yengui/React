import { useState } from 'react'
import './App.css'
import ListGroup from './ListGroup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListGroup />
    </>
  )
}

export default App
