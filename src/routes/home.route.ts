import { Router } from 'express';

import * as HomeController from '../controllers/HomeController';

const router = Router();

router.get('/', HomeController.index);

export default router;