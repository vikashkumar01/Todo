import React from 'react'
import { Link } from 'react-router-dom'
import "../component/topbar.css"
import { useDispatch, useSelector } from 'react-redux';
import {logoutUser} from '../Action/User'


const Topbar = () => {

  const dispatch = useDispatch()

  const { isAuthenticated }  = useSelector((state)=>state.user);

  const handleLogout =()=> {

    dispatch(logoutUser());
    window.location('/login')
  };
  
  return (
    <div className="top">
      <div className="topLeft">
        <span className="topTitle">TODO</span>
      </div>
      <div className="topCenter">
        {isAuthenticated ?(
          <ul className="topList">
            <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
            <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/addtask">ADD TASK</Link></li>
            <li className="topListItem" onClick={handleLogout}>{isAuthenticated && "LOGOUT"}</li>
          </ul>
        ): (
            <>
              <ul className="topList">
                <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
              </ul>

            </>
          )
        }
      </div>
    </div>
  )
}

export default Topbar