import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List App</h1>
      </header>
      <main>
        <TodoForm />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
