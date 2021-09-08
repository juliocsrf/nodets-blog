import { Request, Response } from 'express';
import { ArticleService } from '../services/ArticleService';
import { CategoryService } from '../services/CategoryService';

let articleService = new ArticleService();
let categoryService = new CategoryService();

export const index = async (req: Request, res: Response) => {
    let articles = await articleService.getAll(2);
    let categories = await categoryService.getAll();

    res.render('index', { articles, categories });
}

export const showArticle = async (req: Request, res: Response) => {
    let slug = req.params.slug;

    let article = await articleService.findBySlug(slug);
    let categories = await categoryService.getAll();
    if (article) {
        res.render('article', { article, categories });
    } else {
        res.redirect('/');
    }
}

export const showByCategory = async (req: Request, res: Response) => {
    let slug = req.params.slug;
    let category = await categoryService.findBySlug(slug);
    let categories = await categoryService.getAll();

    if (category) {
        let articles = await articleService.findByCategory(category.id);
        res.render('index', { articles, categories })
    } else {
        res.redirect('/');
    }
}

export const showArticlePage = async (req: Request, res: Response) => {
    let page = parseInt(req.params.page);
    if (isNaN(page) || page <= 0) {
        res.redirect('/');
        return;
    }

    let articles = await articleService.getPage(page, 2);
    let categories = await categoryService.getAll();

    let count = Math.ceil(articles.count / 2);
    let pagination = [];
    for(let x = 1; x <= count; x++) {
        pagination.push({
            page: x,
            active: (page === x),
            url: `/articles/page/${x}`
        });
    }
    
    res.render('page', { categories, ...articles, pagination });
}