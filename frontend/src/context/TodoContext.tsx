import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Todo } from '../types/Todo';
import { TodoService } from '../services/api';

interface TodoContextType {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  fetchTodos: () => Promise<void>;
  addTodo: (title: string) => Promise<void>;
  toggleTodo: (id: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  loading: false,
  error: null,
  fetchTodos: async () => {},
  addTodo: async () => {},
  toggleTodo: async () => {},
  deleteTodo: async () => {}
});

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const data = await TodoService.getAllTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching todos:', err);
      setError('Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title: string) => {
    try {
      const newTodo = await TodoService.createTodo(title);
      setTodos(prevTodos => [...prevTodos, newTodo]);
    } catch (err) {
      console.error('Error adding todo:', err);
      setError('Failed to add todo');
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      const todoToToggle = todos.find(todo => todo.id === id);
      if (!todoToToggle) return;

      const updatedTodo = await TodoService.updateTodo(id, {
        completed: !todoToToggle.completed
      });

      setTodos(prevTodos =>
        prevTodos.map(todo => (todo.id === id ? updatedTodo : todo))
      );
    } catch (err) {
      console.error('Error toggling todo:', err);
      setError('Failed to update todo');
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await TodoService.deleteTodo(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (err) {
      console.error('Error deleting todo:', err);
      setError('Failed to delete todo');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        fetchTodos,
        addTodo,
        toggleTodo,
        deleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}; 