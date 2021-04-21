import { Router } from 'express';
import { getInfo } from '../controllers/root.controller';
// import { getInfo } from '../controllers/root.controller';

const router = Router();

router.route('/')
    .get(getInfo);
    
export default router;