import { Router } from 'express';

import * as CategoriesController from '../controllers/CategoriesController';

const router = Router();

router.get('/admin/categories', CategoriesController.index);
router.get('/admin/categories/new', CategoriesController.create);
router.post('/admin/categories/save', CategoriesController.save);
router.post('/admin/categories/delete', CategoriesController.destroy);

export default router;