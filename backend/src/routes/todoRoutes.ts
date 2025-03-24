import { Router, Request, Response, NextFunction } from 'express';
import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controllers/todoController';

const router = Router();

// GET all todos
router.get('/', getTodos);

// GET a single todo
router.get('/:id', getTodo);

// POST a new todo
router.post('/', createTodo);

// PUT (update) a todo
router.put('/:id', updateTodo);

// DELETE a todo
router.delete('/:id', deleteTodo);

export default router; 