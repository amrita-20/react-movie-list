import { useState } from 'react'
import './css/App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <header className='header'>
      <NavBar />
    </header>
    <main className='app'> 
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </main>
    </>
  )
}

export default App
