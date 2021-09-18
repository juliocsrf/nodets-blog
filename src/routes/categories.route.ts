import { Router } from 'express';

import * as CategoriesController from '../controllers/CategoriesController';
import auth from '../middlewares/auth';

const router = Router();

router.get('/admin/categories', auth, CategoriesController.index);
router.get('/admin/categories/new', auth, CategoriesController.create);
router.post('/admin/categories/save', auth, CategoriesController.store);
router.post('/admin/categories/delete', auth, CategoriesController.destroy);
router.get('/admin/categories/edit/:id', auth, CategoriesController.edit);
router.post('/admin/categories/update', auth, CategoriesController.update);

export default router;