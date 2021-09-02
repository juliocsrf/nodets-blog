import { Router } from 'express';

import * as HomeController from '../controllers/HomeController';

const router = Router();

router.get('/', HomeController.index);
router.get('/:slug', HomeController.showArticle);

export default router;