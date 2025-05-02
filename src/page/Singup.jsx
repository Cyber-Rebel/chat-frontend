
import React, { useState } from 'react'
import { useAuthstore } from '../store/useAuthstore.jsx';
import './sinup.css'
import { ToastContainer, toast } from 'react-toastify';
const Singup = () => {

  const { signup, isSigningUp } = useAuthstore();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    fullName: ""
  })
  const validateForm=()=>{
    if (formdata.password.length < 6)   return toast("Password must be at least 6 characters");
  }
  const handleSubmit = (e) => {
    e.preventDefault();// reload se stop karta hae 
// --- eske neche form data par kam kar sakt ho 


const success = validateForm();

if (success === true) signup(formdata);
//----------------form clear kiya esene -----------
if(success){
    setFormdata({
      email: "",
    password: "",
    fullName: ""
    })
  };}

  return (
    <>
    <ToastContainer  />
      <div className=' p-3 w-[40%] h-[600px] mx-50 mt-40'>
        <h3 className='text-center  text-8xl pb-9'>Create Account</h3>
        <form action="" onSubmit={handleSubmit} className='flex  flex-col '>
          <label  >Email</label>
          <input type="email" autofocus placeholder='Email' name="" value={formdata.email}
            onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}

            id="" className='  p-2 rounded  bg-[#161A20]' />
          <label  >Password</label>
          <input autofocus type="password" name="" value={formdata.password}      onChange={(e) => setFormdata({ ...formdata, password: e.target.value })} placeholder='password' id="" className='p-2 rounded bg-[#161A20]' />
          <label  >Fullname</label>
          <input autofocus type="text"  value={formdata.fullName}    onChange={(e) => setFormdata({ ...formdata, fullName: e.target.value })} name="fullName" placeholder='fullName' id="" className='p-2  bg-[#161A20] ' />
          {/* <label htmlFor="">profilepic</label> */}
          {/* <input autofocus  type="file" name=""  id="" placeholder='iamge' className='file-input cursor-cell   ' accept="image/png, image/gif, image/jpeg" /> */}
          <input type="submit" className='btn btn-active mt-4.5' />
        </form>

      </div>
    </>
  )
}

export default Singup