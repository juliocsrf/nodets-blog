import { Router } from 'express';

import * as CategoriesController from '../controllers/CategoriesController';

const router = Router();

router.get('/categories', CategoriesController.index);
router.get('/admin/categories/new', CategoriesController.create);

export default router;