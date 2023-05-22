import React, {useState, useEffect} from 'react'
import './Wrapper.css';
import { TodoForm } from '../TodoForm/TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../Todo/Todo'
import { EditTodoForm } from '../TodoForm/EditToDoForm'
import { TodoCompleted } from '../Todo/TodoCompleted'
import { EmptyCompleted } from '../Empty/EmptyCompleted'
import { EmptyTodo } from'../Empty/EmptyTodo'
uuidv4()

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const [completedTodos, setCompletedTodos] = useState([]);

    const addTodo = (todo, description) => {
        setTodos([...todos, {id: uuidv4(), task: todo, description: description, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(
          todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
      
      useEffect(() => {
        const completed = todos.filter(todo => todo.completed);
        setCompletedTodos(completed);
      }, [todos]);
      

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
        console.log(todos)
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing}: todo))
        console.log(todos)
    }

    const editTask = (task, description, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, description, isEditing: !todo.isEditing}: todo))
        console.log(todos)
    }
  return (
    <div className="container">
        <div className="left-section">
            <TodoForm addTodo={addTodo}/>
        </div>
        <div className="right-section">
            <div className="right-half">
                <div className="status">To Do</div>
                {todos.length > 0 ? (
                todos.map((todo, index) => (!todo.completed && (todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                    ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    )
                )
                ))
          ) : (<EmptyTodo/>)}
            </div>
            <div className="left-half">
                <div className="status">Completed</div>
                {completedTodos.length > 0 ? (completedTodos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task={todo} />
                    ) : (
                        <TodoCompleted task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
                ))
                ):null}
                <EmptyCompleted todos={todos} completedTodos={completedTodos}/>
            </div>
        </div>
    </div>
  )
}

