import React, { useEffect } from 'react'
import {Routes, Route, Navigate  } from "react-router-dom";
import Home from './page/Home.jsx'
import Login from './page/Login.jsx'
import Singup from './page/Singup.jsx'
import Settings from "./page/Settings.jsx"
import Profile from "./page/Profile.jsx"
import Notfound from "./page/Notfound.jsx"
import Navbar from './components/Navbar.jsx';
import Ballpit from './lib/Ballpit.jsx';
import CircularText from './lib/CircularText.jsx';
import { useAuthstore } from './store/useAuthstore.jsx';

const App = () => {

  const {authUser,cheakAuth,isCheakingAuth}= useAuthstore();
  useEffect(()=>{
    cheakAuth()
  },[cheakAuth])
  console.log(authUser)
// let authUser=true;

  // if(isCheakingAuth && !authUser )  return(
  //   <>
  //   <div className='w-full h-screen text-white flex justify-center items-center '>
  //   <span className="loading loading-spinner text-primary "></span>
  //   </div>
  //   </>
  // )
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path='/' element={authUser?<Home/>:<Navigate to='/login'/>} />
      <Route path='/singup' element={ !authUser?  <Singup/>:<Navigate to='/'/>}/>
      <Route path='/login' element={!authUser?<Login/>:<Navigate to='/'/>}/>
      <Route path='/settings' element={authUser?<Settings/>:<Navigate to='/login'/>}/>
      <Route path='/profile' element={authUser?<Profile/>:<Navigate to='/login'/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    
    
    </>
  )
}

export default App