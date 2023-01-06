import React,{useState, useRef }  from 'react'
import "./register.css"
import { useDispatch } from "react-redux"
import { registerUser } from '../Action/User';
import { useSelector } from 'react-redux';



const Register = () => {

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const {loading,error} = useSelector((state) =>state.user)


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(usernameRef.current.value, emailRef.current.value, passwordRef.current.value));
    
  }
  
  return (

    <div className='registerContainer'>
    <div className="register">
      <h3 className="registerTitle">Resgister</h3>
      <form className="registerForm" autoComplete="off" onSubmit={handleSubmit} >

        <label>Username</label>
        <input type="text" className="registerInput" ref={usernameRef} placeholder="Enter Your Username..."></input>

        <label>Email</label>
        <input type="email" className="registerInput" ref={emailRef} placeholder="Enter Your Email..."></input>

        <label>Password</label>
        <input type="password" className="registerInput" ref={passwordRef} placeholder="Enter Your Password..." />

        <button className="registerButton" disabled={loading} type="submit">Register</button>

      </form>

      {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong</span>}
    </div>
    </div>

  )
}

export default Register