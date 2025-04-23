import React, { useEffect } from 'react'
import {Routes, Route  } from "react-router-dom";
import Home from './page/Home.jsx'
import Login from './page/Login.jsx'
import Singup from './page/Singup.jsx'
import Settings from "./page/Settings.jsx"
import Profile from "./page/Profile.jsx"
import Notfound from "./page/Notfound.jsx"
import Navbar from './components/Navbar.jsx';

const App = () => {

  console.log("chal raha hae ")
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/singup' element={<Singup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    
    
    </>
  )
}

export default App