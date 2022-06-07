import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { editTodo, getTodo } from '../Action/User';
import { useLocation } from "react-router"
import axios from 'axios'



const Utask = () => {

    const location = useLocation()
    const path = location.pathname.split('/')[2]

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const getTodo = async () => {
        const res = await axios.get('/api/todos/fetchTodo/' + path)
        setTitle(res.data.todo.title)
        setDescription(res.data.todo.description)
      }

    useEffect(() => {
        getTodo()
    }, [path])




    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(editTodo(path,title,description))
        
        window.location.replace('/')

    }

    return (
        <>
            <div className="add">
                <span className="addTask">UPDATE TASK</span>
            </div>
            <div className="form">
                <form className="addForm" onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input type="text" required className="addInput" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Your Title..."></input>

                    <label>Description</label>
                    <input type="text" required className="addInput" value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter Your descrption..." />

                    <button className="addButton" type="submit">Update</button>
                </form>
            </div>

        </>
    )
}

export default Utask