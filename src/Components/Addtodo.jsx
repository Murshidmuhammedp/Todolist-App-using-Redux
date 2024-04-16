import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../features/todo/TodoSlice'
import './Todo.css'

function Addtodo() {

    const [input, setinput] = useState('')
    const dispatch = useDispatch()

    const Addtodohandler = (e) => {
        e.preventDefault()
        if (input.length > 0) {
            dispatch(addTodo(input))
            setinput('')
        } else {
            alert("write somthing")
        }

    }
    const todos = useSelector(state => state.todos)
    const HandleDelet = (id) => {
        dispatch(removeTodo(id))
       
    }
    const HandleEdit =(id,text)=>{
        dispatch(removeTodo(id))
        setinput(text)
    }
    return (
    <div className='contai'>
        <div className='innercontai'>
            <form onSubmit={Addtodohandler}>
                <input type='text' placeholder='Enter a Todo...' value={input} onChange={(e) => setinput(e.target.value)} />
                <button className='button' type="submit" >
                    Add Todo</button>
            </form>
            <div>Todos</div>
            <ul className='list-none'>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>
                        <div className='text-white '>{todo.text}
                            <button className='button1' onClick={() => HandleDelet(todo.id)}>
                                Delete</button>
                            <button className='button1' onClick={() => HandleEdit(todo.id, todo.text)}>edit</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}

export default Addtodo