import axios from 'axios';
import { Todo } from '../types/Todo';

const API_URL = 'http://localhost:5000/api';

export const TodoService = {
  // Get all todos
  getAllTodos: async (): Promise<Todo[]> => {
    const response = await axios.get(`${API_URL}/todos`);
    return response.data;
  },

  // Get a single todo
  getTodoById: async (id: string): Promise<Todo> => {
    const response = await axios.get(`${API_URL}/todos/${id}`);
    return response.data;
  },

  // Create a new todo
  createTodo: async (title: string): Promise<Todo> => {
    const response = await axios.post(`${API_URL}/todos`, { title });
    return response.data;
  },

  // Update a todo
  updateTodo: async (id: string, updates: Partial<Pick<Todo, 'title' | 'completed'>>): Promise<Todo> => {
    const response = await axios.put(`${API_URL}/todos/${id}`, updates);
    return response.data;
  },

  // Delete a todo
  deleteTodo: async (id: string): Promise<Todo> => {
    const response = await axios.delete(`${API_URL}/todos/${id}`);
    return response.data;
  }
}; 