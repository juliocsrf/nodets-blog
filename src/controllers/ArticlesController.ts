import { Request, Response } from 'express';
import { ArticleService } from '../services/ArticleService';
import { CategoryService } from '../services/CategoryService';

let articleService = new ArticleService();
let categoryService = new CategoryService();

export const index = async (req: Request, res: Response) => {
    let articles = await articleService.getAll();
    res.render('admin/articles/index', { articles });
}

export const create = async (req: Request, res: Response) => {
    let categories = await categoryService.getAll();
    res.render('admin/articles/new', { categories });
}

export const store = async (req: Request, res: Response) => {
    let title: string = req.body.title;
    let body: string = req.body.body;
    let id_category: number = parseInt(req.body.category);

    if (title && body && !isNaN(id_category)) {
        await articleService.create(title, body, id_category);
    }

    res.redirect('/admin/articles');
}

export const edit = async (req: Request, res: Response) => {
    let id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.redirect('/admin/articles');
        return;
    }

    let article = await articleService.findById(id);

    if (!article) {
        res.redirect('/admin/articles');
        return;
    }

    let categories = await categoryService.getAll();
    res.render('admin/articles/edit', { categories, article });
}

export const update = async (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    let title: string = req.body.title;
    let body: string = req.body.body;
    let id_category: number = parseInt(req.body.category);

    if(isNaN(id) || isNaN(id_category)) {
        res.redirect('/admin/articles');
        return;
    }

    let article = await articleService.findById(id);
    if(!article) {
        res.redirect('/admin/articles');
        return;
    }

    await articleService.update(id, title, body, id_category);

    res.redirect('/admin/articles');
}

export const destroy = async (req: Request, res: Response) => {
    let id = req.body.id;
    if (id !== undefined && !isNaN(id)) {
        await articleService.delete(id);
    }

    res.redirect('/admin/articles');
}