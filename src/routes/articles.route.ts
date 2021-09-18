import { Router } from 'express';

import * as ArticlesController from '../controllers/ArticlesController';
import auth from '../middlewares/auth';

const router = Router();

router.get('/admin/articles', auth, ArticlesController.index);
router.get('/admin/articles/new', auth, ArticlesController.create);
router.post('/admin/articles/store', auth, ArticlesController.store);
router.get('/admin/articles/edit/:id', auth, ArticlesController.edit);
router.post('/admin/articles/update/:id', auth, ArticlesController.update);
router.post('/admin/articles/delete', auth, ArticlesController.destroy);

export default router;