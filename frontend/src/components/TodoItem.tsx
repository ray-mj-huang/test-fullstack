import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span className="todo-title">{todo.title}</span>
      <div className="todo-actions">
        <button
          className={`complete-btn ${todo.completed ? 'completed' : ''}`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem; 