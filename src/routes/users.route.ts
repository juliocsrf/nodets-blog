import { Router } from 'express';

import * as UserController from '../controllers/UsersController';

const router = Router();

router.get('/admin/users', UserController.index);
router.get('/admin/users/new', UserController.create);
router.post('/admin/users/store', UserController.store);

export default router;