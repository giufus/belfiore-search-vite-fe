import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Search } from './features/search/Search'
import { Results } from './features/results/Results'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>BELFIORE SEARCH</h1>
      <Search />
      <Results />
    </>
  )
}

export default App
