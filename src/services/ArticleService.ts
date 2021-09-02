import Article, { ArticleInstance } from "../models/Article";
import Category from "../models/Category";
import slugify from 'slugify';

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

}