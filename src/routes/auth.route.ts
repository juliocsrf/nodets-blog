import { Router } from 'express';

import * as AuthController from '../controllers/AuthController';
import auth from '../middlewares/auth';
import isAuthenticated from '../middlewares/isAuthenticated';

const router = Router();

router.get('/admin/users/login', isAuthenticated, AuthController.index);
router.post('/admin/users/login', AuthController.login);
router.post('/admin/users/logout', auth, AuthController.logout);

export default router;