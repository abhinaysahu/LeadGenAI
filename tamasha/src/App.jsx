import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navbar from './components/Navbar';
import { SideBar } from './components/Sidebar';

function App() {
  
  return (
    <>
      <div className='flex items-start  h-screen '>
      <SideBar/>
     <Navbar/>
     </div>
    </>
  )
}

export default App
