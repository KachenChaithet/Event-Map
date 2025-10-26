import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MapView from './components/Map/MapView'
import Navbar from './components/Navbar'
import { Button } from './components/ui/button'
import './index.css'
import HomePage from './pages/HomePage'
import { useState } from 'react'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
