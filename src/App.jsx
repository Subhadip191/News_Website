import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import TheVerge from './components/Routes/TheVerge'
import BBCNews from './components/Routes/BBCNews'
import BusinessInsider  from './components/Routes/BusinessInsider'
import WiredCards from './components/Routes/WiredCards'
import CNN from './components/Routes/CNN'



function App() {

  return (
    <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<WiredCards />}/>
          <Route path='/bbc-news' element={<BBCNews />} />
          <Route path='/business-insider' element={<BusinessInsider />}/>
          <Route path='/the-verge' element={<TheVerge />}/>
          <Route path='/cnn' element={<CNN />}/>
        </Routes>
       
    </div>
  )
}

export default App
