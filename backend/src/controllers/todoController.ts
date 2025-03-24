import { Request, Response } from 'express';
import { Todo } from '../models/Todo';
import { v4 as uuidv4 } from 'uuid';

// In-memory todos array for simplicity
let todos: Todo[] = [];

// Get all todos
export const getTodos = (req: Request, res: Response) => {
  res.status(200).json(todos);
};

// Get a single todo
export const getTodo = (req: Request, res: Response) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo.id === id);
  
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  res.status(200).json(todo);
};

// Create a new todo
export const createTodo = (req: Request, res: Response) => {
  const { title } = req.body;
  
  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }
  
  const newTodo: Todo = {
    id: uuidv4(),
    title,
    completed: false,
    createdAt: new Date()
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// Update a todo
export const updateTodo = (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, completed } = req.body;
  
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  todos[todoIndex] = {
    ...todos[todoIndex],
    ...(title && { title }),
    ...(completed !== undefined && { completed })
  };
  
  res.status(200).json(todos[todoIndex]);
};

// Delete a todo
export const deleteTodo = (req: Request, res: Response) => {
  const id = req.params.id;
  
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  const deletedTodo = todos[todoIndex];
  todos = todos.filter(todo => todo.id !== id);
  
  res.status(200).json(deletedTodo);
}; 