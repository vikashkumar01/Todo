import React, { useRef } from 'react'
import "./login.css"
import { useDispatch } from "react-redux"
import { loginUser } from '../Action/User';


const Login = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(emailRef.current.value, passwordRef.current.value));
  };


  return (
    <div className='loginContainer'>
    <div className="login">
      <h3 className="loginTitle">Login</h3>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" className="loginInput" ref={emailRef} placeholder="Enter Your Email..." required></input>

        <label>Password</label>
        <input type="password" className="loginInput" ref={passwordRef} placeholder="Enter Your Password..." required/>

        <button className="loginButton" type="submit" >Login</button>

      </form>
    </div>
    </div>
  )
};
export default Login