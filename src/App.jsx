import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MapView from './components/Map/MapView'
import Navbar from './components/Navbar'
import { Button } from './components/ui/button'
import './index.css'
import HomePage from './pages/HomePage'
import { useEffect, useState } from 'react'
import { api } from './lib/api'
import { useEventStore } from './store/useEventStore'
import { Toaster } from 'react-hot-toast'

function App() {
  const { fetchEvent } = useEventStore()


  useEffect(() => {
    fetchEvent()
  }, [fetchEvent])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Toaster position='top-right' reverseOrder={false}/>
      </BrowserRouter>
    </>
  )
}

export default App
