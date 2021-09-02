import { Router } from 'express';

import * as ArticlesController from '../controllers/ArticlesController';

const router = Router();

router.get('/admin/articles', ArticlesController.index);
router.get('/admin/articles/new', ArticlesController.create);
router.post('/admin/articles/store', ArticlesController.store);
router.post('/admin/articles/delete', ArticlesController.destroy);

export default router;