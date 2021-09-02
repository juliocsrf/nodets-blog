import { Request, Response } from 'express';
import { CategoryService } from '../services/CategoryService';

let categoryService = new CategoryService();

export const index = async (req: Request, res: Response) => {
    let categories = await categoryService.getAll();
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
        return;
    }

    res.redirect('/admin/categories');
}

export const destroy = async (req: Request, res: Response) => {
    let id = req.body.id;
    if (id !== undefined && !isNaN(id)) {
        await categoryService.delete(id);
    }
    res.redirect('/admin/categories');
}