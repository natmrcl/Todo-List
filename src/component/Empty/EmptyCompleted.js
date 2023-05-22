import React from 'react';
import './Empty.css';

export const EmptyCompleted = ({ todos, completedTodos }) => {
    const allTodosCompleted = todos.length > 0 && todos.length === completedTodos.length;
  return (
    <div>
      {todos.length > 0 && !allTodosCompleted? (
        <div className='empty-message'>
          <h4>Don't give up!</h4>
          <p>Stay focused and keep working towards completing your tasks.</p>
        </div>
      ) : allTodosCompleted? (
        <div className='empty-message'>
          <h4>Congratulations🙌!</h4>
          <p>You have completed all your tasks. Enjoy your free time!</p>
        </div>
      ) : (
        <div className='empty-message'>
          <p>You don't have any pending tasks at the moment</p>
        </div>
      )}
    </div>
  );
};

