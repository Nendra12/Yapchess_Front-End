import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Calendar } from 'primereact/calendar'
import HomePage from './pages/HomePage'
import { Routes } from 'react-router'
import { Route } from 'react-router'

function App() {
  const [date, setDate] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/menu" element={<HomePage/>}>
          
        </Route>
      </Routes>
    </>
  )
}

export default App
