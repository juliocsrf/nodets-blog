import { Router } from 'express';

import * as CategoriesController from '../controllers/CategoriesController';

const router = Router();

router.get('/admin/categories', CategoriesController.index);
router.get('/admin/categories/new', CategoriesController.create);
router.post('/admin/categories/save', CategoriesController.store);
router.post('/admin/categories/delete', CategoriesController.destroy);
router.get('/admin/categories/edit/:id', CategoriesController.edit);
router.post('/admin/categories/update', CategoriesController.update);

export default router;