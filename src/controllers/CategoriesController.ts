import { Request, Response } from 'express';
import { CategoryService } from '../services/CategoryService';

export const index = (req: Request, res: Response) => {
    res.send('Index categories');
}

export const create = (req: Request, res: Response) => {
    res.render('admin/categories/new');
}

export const save = async (req: Request, res: Response) => {
    let title: string = req.body.title;
    let categoryService = new CategoryService();
    if (title !== undefined && title !== '') {
        await categoryService.create(title);
    } else {
        res.redirect('/admin/categories/new');
    }

    res.redirect('/admin/categories');
}