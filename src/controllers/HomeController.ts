import { Request, Response } from 'express';
import { ArticleService } from '../services/ArticleService';

let articleService = new ArticleService();

export const index = async (req: Request, res: Response) => {
    let articles = await articleService.getAll();
    res.render('index', { articles });
}

export const showArticle = async (req: Request, res: Response) => {
    let slug = req.params.slug;

    let article = await articleService.findBySlug(slug);
    if (article) {
        res.render('article', { article });
    } else {
        res.redirect('/');
    }
}