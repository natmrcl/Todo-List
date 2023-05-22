import React,{useState} from 'react'
import './Form.css'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const [description, setDescription] = useState(task.description)
    const handleSubmit = e => {
        e.preventDefault()

        editTodo(value, description, task.id)
        setValue("")
        setDescription("")
    }

    const handleKeyDown = e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        handleSubmit(e);
      }
    };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} 
        placeholder='Edit the task' onChange={(e) => setValue(e.target.value)}/>  
        <textarea className="todo-description" value={description}
        placeholder="Edit the description..."
        onChange={e => setDescription(e.target.value)} onKeyDown={handleKeyDown}></textarea>
    </form>
  )
}
