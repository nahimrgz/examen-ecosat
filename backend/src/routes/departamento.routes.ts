import { Router } from 'express';
import { traerTodosDepartamentos } from '../controllers/departamentos.controller';

const router = Router();

router.route('/traerTodos')
    .get(traerTodosDepartamentos)
    

export default router;