import { Router } from 'express';

import * as CategoriesController from '../controllers/CategoriesController';

const router = Router();

router.get('/categories', CategoriesController.index);
router.get('/admin/categories/new', CategoriesController.create);
router.post('/admin/categories/save', CategoriesController.save);

export default router;