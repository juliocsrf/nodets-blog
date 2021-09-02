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

export const store = async (req: Request, res: Response) => {
    let title: string = req.body.title;
    if (title !== undefined && title !== '') {
        await categoryService.create(title);
    } else {
        res.redirect('/admin/categories/new');
        return;
    }

    res.redirect('/admin/categories');
}

export const edit = async (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.redirect('/admin/categories');
        return;
    }

    let category = await categoryService.findById(id);
    if (category) {
        res.render('admin/categories/edit', { category });
        return;
    } else {
        res.redirect('/admin/categories');
        return;
    }
}

export const update = async (req: Request, res: Response) => {
    let id = parseInt(req.body.id);
    let title = req.body.title;

    if(!isNaN(id)) {
        await categoryService.update(id, title); 
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