import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import './Todo.css'

export const TodoCompleted = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [checked, setChecked] = useState(task.completed);

  const handleToggleComplete = () => {
    setChecked(!checked);
    toggleComplete(task.id);
  };

  return (
    <div className='Todo'>
      <div id='todo-header' className={`${checked ? 'completed' : ''}`}>
        {task.task}
        {checked ? <FontAwesomeIcon onClick={handleToggleComplete} icon={faCheckSquare} /> : <div className='fa-ssquare'><FontAwesomeIcon icon={faSquare} /></div>}
      </div>
      <div className='todo-body'>
        <p>{task.description}</p>
      </div>
      <div className='icon'>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
