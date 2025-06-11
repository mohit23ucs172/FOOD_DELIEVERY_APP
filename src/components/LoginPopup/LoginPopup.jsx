import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

  const [currState,setCurrState]=useState("Sign up")
  return (
    <div className='login-popup'>
   <form className='login-popup-container'
   action="">
    <div className="login-popup-title">
      <h2>{currState}</h2>
      <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
    </div>
    div
   </form>
    </div>
  )
}

export default LoginPopup