import slugify from 'slugify';

import Article, { ArticleInstance } from "../models/Article";
import Category from "../models/Category";
import { ArticlePagination } from '../types/ArticlePagination';

export class ArticleService {

    async create(title: string, body: string, id_category: number): Promise<ArticleInstance | null> {
        let article = null;

        try {
            article = await Article.create({ title, slug: slugify(title, { lower: true }), body, id_category });
        } catch (err) {
            console.log('Ocorreu um erro ao criar artigo:', err);
        }

        return article;
    }

    async update(id: number, title: string, body: string, id_category: number): Promise<boolean> {
        try {
            await Article.update({ title, slug: slugify(title), body, id_category }, { where: { id } });
        } catch (err) {
            console.log('Erro ao atualizar o artigo');
            return false;
        }

        return true;
    }

    async delete(id: number): Promise<boolean> {
        try {
            await Article.destroy({ where: { id } });
        } catch (err) {
            console.log('Ocorreu um erro ao excluir o artigo: ', err);
            return false;
        }
        return true;
    }

    async findById(id: number): Promise<ArticleInstance | null> {
        let article = null;

        try {
            article = Article.findByPk(id);
        } catch (err) {
            console.log('Ocorreu um erro ao buscar o artigo:', err);
        }

        return article;
    }

    async findBySlug(slug: string): Promise<ArticleInstance | null> {
        let article = null;

        try {
            article = await Article.findOne({ where: { slug } });
        } catch (err) {
            console.log('Ocorreu um erro ao buscar o artigo pelo SLUG');
        }

        return article;
    }

    async findByCategory(id_category: number): Promise<ArticleInstance[]> {
        return await Article.findAll({
            where: { id_category },
            include: [{ model: Category, as: 'category' }]
        });
    }

    async getAll(withCategories: boolean = true): Promise<ArticleInstance[]> {
        let options = {};
        if (withCategories) {
            options = {
                include: [{ model: Category, as: 'category' }]
            }
        }

        let articles = await Article.findAll(options);
        return articles;
    }

    async getTotalCount(): Promise<number> {
        return await Article.count();
    }

    async getPage(page: number, limit: number, withCategories: boolean = true): Promise<ArticlePagination> {
        let options: any = {};
        if (withCategories) {
            options = {
                include: [{model: Category, as: 'category'}]
            }
        }

        if(page < 1) { 
            page = 0;
        }

        page--;
        options.limit = limit;
        options.offset = page * limit;

        let articles = await Article.findAndCountAll(options);
        let count = articles.count;

        let next = !((options.offset + limit) >= articles.count);

        let response: ArticlePagination = {next, count, articles: articles.rows };
        return response;
    }

}