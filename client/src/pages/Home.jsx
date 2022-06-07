import React, { useEffect } from 'react'
import '../pages/home.css'
import { useDispatch } from "react-redux"
import { getTask, deleteTodo, editTodo } from '../Action/User';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const Home = () => {

  const { todos } = useSelector((state) => state.getTodos);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTask());
  }, [dispatch])

  function deleteTask(Id) {
    dispatch(deleteTodo(Id));
    dispatch(getTask());
  }

  return (
    <div className="container">
      <div className="allTask">
        <span className="task">ALL TASK</span>
      </div>

      <div className="alldetail">

        {todos?.map((p) => (
          
            <div className="detail" key={p._id}>

              <h3 className="title">{p.title}</h3>
              <p className="desc">{p.description}</p>
               
               <Link to={`/utask/${p._id}`}><i className="fa-solid fa-pen-to-square edit"></i></Link>
              <button onClick={()=>deleteTask(p._id)}><i className="fa-solid fa-trash-can delete"></i></button>
              
            </div>

        ))
        }

      </div>

    </div>
  )
}

export default Home