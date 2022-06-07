import React,{useState} from 'react'
import '../pages/addtask.css'
import { useDispatch } from "react-redux"
import { addTask } from '../Action/User';



const Addtask = () => {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(addTask(title,description));
    window.location.replace('/')

  }
  
  return (
    <>
      <div className="add">
        <span className="addTask">ADD TASK</span>
      </div>
      <div className="form">
      <form className="addForm" onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" className="addInput" required onChange={e=>setTitle(e.target.value)} placeholder="Enter Your Title..."></input>

        <label>Description</label>
        <input type="text" className="addInput" required onChange={e=>setDescription(e.target.value)} placeholder="Enter Your descrption..." />

        <button className="addButton" type = "submit">Add</button>
      </form>
      </div>
      
    </>
  )
}

export default Addtask