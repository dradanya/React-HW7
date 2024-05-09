import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import styles from './TodoList.css'

const TodoList = ({ todos, addTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <div className='background'>
      <form onSubmit={handleSubmit}>
        <input className='input'
          type="text"
          value={newTodoText}
          onChange={handleChange}
          placeholder="Add a new todo..."
        />
        <button className='button' type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li className='todo-text' key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);