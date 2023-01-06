import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { editTodo } from '../Action/User';
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
        dispatch(editTodo(path, title, description))

        window.location.replace('/')

    }

    return (
        <div className='preaddtaskcontainer'>
            <div className='addTaskContainer'>
                <div className="add">
                    <span className="addTask">UPDATE TASK</span>
                </div>
                <div className="form">
                    <form className="addForm" onSubmit={handleSubmit}>
                        <div className='inputContainer'>
                            <label>Title</label>
                            <input type="text" className="addInput" value={title} required onChange={e => setTitle(e.target.value)} placeholder="Enter Your Title..."></input>
                        </div>
                        <div className='inputContainer'>
                            <label>Description</label>
                            <input type="text" className="addInput" value={description} required onChange={e => setDescription(e.target.value)} placeholder="Enter Your descrption..." />
                        </div>
                        <button className="addButton" type="submit">Update</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Utask