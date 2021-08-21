import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Search from './components/search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Search/>
    </div>
  )
}

export default App
