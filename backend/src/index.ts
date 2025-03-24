import express, { Request, Response } from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Root route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Todo API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 