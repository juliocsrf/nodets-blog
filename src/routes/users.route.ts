import { Router } from 'express';

import * as UserController from '../controllers/UsersController';
import auth from '../middlewares/auth';

const router = Router();

router.get('/admin/users', auth, UserController.index);
router.get('/admin/users/new', auth, UserController.create);
router.post('/admin/users/store', auth, UserController.store);

export default router;