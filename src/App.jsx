import React from 'react'
import Header from './components/Header'
import Basis from './components/Basis'
import Footer from './components/Footer'
import Shahri from './pages/Shahri'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div> 
        <Header />
        <Outlet />
        <Footer />
        
       
          
    </div>
  )
}

export default App