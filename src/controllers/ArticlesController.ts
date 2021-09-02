import { Request, Response } from 'express';
import { ArticleService } from '../services/ArticleService';
import { CategoryService } from '../services/CategoryService';

let articleService = new ArticleService();
let categoryService = new CategoryService();

export const index = (req: Request, res: Response) => {
    res.send('Index articles');
}

export const create = async (req: Request, res: Response) => {
    let categories = await categoryService.getAll();
    res.render('admin/articles/new', { categories });
}