import React from 'react'
import Book from './components/Book'
import './App.css'
function App() {
  return (
    <div id="main">
      <Book  Title='Math' Price='250'/>
      <br />
      <Book  Title='Phy' Price='450'/>
      <br />
      <Book  Title='Bio' Price='550'/>
      
    </div>
  )
}

export default App