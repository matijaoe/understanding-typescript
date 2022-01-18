import { createTodo, getTodos, updateTodo } from './../controllers/todos';
import { Router } from 'express';

const router = Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', (req, res) => {});

export default router;
