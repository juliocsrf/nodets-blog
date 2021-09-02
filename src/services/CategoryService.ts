import Category, { CategoryInstance } from "../models/Category";
import slugify from "slugify";

export class CategoryService {

    async create(title: string): Promise<CategoryInstance | null> {
        let category = null;

        try {
            category = await Category.create({ title, slug: slugify(title, { lower: true }) });
        } catch (err) {
            console.log('Erro ao criar categoria:', err);
        }

        return category;
    }

    async update(id: number, title: string): Promise<boolean> {
        try {
            await Category.update({ title, slug: slugify(title, { lower: true }) }, { where: { id } });
        } catch (err) {
            console.log('Erro ao atualizar a categoria:', err);
            return false;
        }
        return true;
    }

    async delete(id: number): Promise<boolean> {
        try {
            await Category.destroy({
                where: { id }
            });
        } catch (err) {
            console.log('Ocorreu um erro ao excluir a categoria:', err);
            return false;
        }

        return true;
    }

    async findById(id: number): Promise<CategoryInstance | null> {
        let category = null;

        try {
            category = await Category.findByPk(id);
        } catch (err) {
            console.log('Ocorreu um erro ao buscar a categoria:', err);
        }

        return category;
    }

    async findBySlug(slug: string): Promise<CategoryInstance | null> {
        let category = null;

        try {
            category = await Category.findOne({ where: { slug } });
        } catch (err) {
            console.log('Ocorreu um erro ao buscar categoria pelo SLUG:', err);
        }

        return category;
    }

    async getAll(): Promise<CategoryInstance[]> {
        return await Category.findAll();
    }


}