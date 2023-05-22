import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Form.css'

export const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = e => {
        e.preventDefault()

        if (task.trim() !== "") {
          addTodo(task, description);
          setTask("");
          setDescription("");
        }
    }

    const handleKeyDown = e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        handleSubmit(e);
      }
    };

    const handleAddButton = () => {
      handleSubmit(new Event('submit'));
    };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <div className='title'>Add New Task</div>
        <input type="text" className='todo-input' value={task} 
        placeholder='What is the task today?' onChange={(e) => setTask(e.target.value)}/>  
        <textarea className="todo-description" value={description}
        placeholder="Add a description..."
        onChange={e => setDescription(e.target.value)} onKeyDown={handleKeyDown}>
        </textarea>
        <div className='icon'>
          <button type='button' className='add-button' onClick={handleAddButton}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        </div>
    </form>

  )
}
