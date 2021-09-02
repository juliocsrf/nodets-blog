import { Request, Response } from 'express';
import { ArticleService } from '../services/ArticleService';

let articleService = new ArticleService();

export const index = async (req: Request, res: Response) => {
    let articles = await articleService.getAll();
    res.render('index', { articles });
}