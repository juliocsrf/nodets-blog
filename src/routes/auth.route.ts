import { Router } from 'express';

import * as AuthController from '../controllers/AuthController';

const router = Router();

router.get('/admin/users/login', AuthController.index);
router.post('/admin/users/login', AuthController.login);
router.post('/admin/users/logout', AuthController.logout);

export default router;