import { Request, Response } from 'express';
import { CategoryService } from '../services/CategoryService';

let categoryService = new CategoryService();

export const index = async (req: Request, res: Response) => {
    let categories = await categoryService.getAll();
    console.log(categories);
    res.render('admin/categories', { categories });
}

export const create = (req: Request, res: Response) => {
    res.render('admin/categories/new');
}

export const save = async (req: Request, res: Response) => {
    let title: string = req.body.title;
    if (title !== undefined && title !== '') {
        await categoryService.create(title);
    } else {
        res.redirect('/admin/categories/new');
    }

    res.redirect('/admin/categories');
}