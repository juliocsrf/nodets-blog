import { Router } from 'express';

import * as UserController from '../controllers/UserController';

const router = Router();

router.get('/admin/users', UserController.index);
router.get('/admin/users/new', UserController.create);

export default router;