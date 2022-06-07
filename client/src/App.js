import React,{useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from "./component/Topbar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Addtask from "./pages/Addtask";
import Login from "./pages/Login";
import About from "./pages/About";
import Utask from "./pages/Utask";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUser } from './Action/User';


function App() {

  const {isAuthenticated}  = useSelector((state)=>state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])
  

  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route exact path="/" element={isAuthenticated ? <Home /> : <Login />} />
          <Route path="/register" element={isAuthenticated ? <Home /> : <Register />} />
          <Route path="/about" element={isAuthenticated ? <About /> : <Register />} />
          <Route path="/addtask" element={isAuthenticated ? <Addtask /> : <Login />} />
          <Route path="/utask/:id" element={isAuthenticated ? <Utask /> : <Login />} />
          <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
