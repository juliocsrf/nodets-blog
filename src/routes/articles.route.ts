import Router from 'express';

import * as ArticlesController from '../controllers/ArticlesController';

const router = Router();

router.get('/articles', ArticlesController.index);
router.get('/admin/articles/new', ArticlesController.create);

export default router;