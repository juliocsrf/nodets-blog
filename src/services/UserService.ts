import User, { UserInstance } from '../models/User';
import { Op } from 'sequelize';

export class UserService {

    async create(name: string, email: string, password: string): Promise<UserInstance | null> {
        let user = null;

        if (await this.existingEmail(email)) {
            return null;
        }

        try {
            user = await User.create({ name, email, password });
        } catch (err) {
            console.log('Ocorreu um erro ao criar o usuário:', err);
        }

        return user;
    }

    async update(id: number, name: string, email: string, password: string): Promise<boolean> {
        if (await this.existingEmail(email, id)) {
            return false;
        }

        try {
            await User.update({ name, email, password }, { where: { id } });
        } catch (err) {
            console.log('Erro ao atualizar o usuário:', err);
            return false;
        }

        return true;
    }

    async delete(id: number): Promise<boolean> {
        try {
            await User.destroy({ where: { id } });
        } catch (err) {
            console.log('Ocorreu um erro ao excluir o usuário:', err);
            return false;
        }

        return true;
    }

    async findById(id: number): Promise<UserInstance | null> {
        let user = null;

        try {
            user = await User.findByPk(id);
        } catch (err) {
            console.log('Ocorreu um erro ao buscar o usuário:', err);
        }

        return user;
    }

    async findByEmail(email: string): Promise<UserInstance | null> {
        let user = null;

        try {
            user = await User.findOne({ where: { email } });
        } catch(err) {
            console.log('Ocurreu um erro ao buscar o usuário:', err);
        }

        return user;
    }

    async getAll(): Promise<UserInstance[]> {
        let emails = await User.findAll();
        return emails;
    }

    async existingEmail(email: string, ignore_id: number = 0): Promise<boolean> {
        let where: any = { email };
        if (ignore_id > 0) {
            where.id = {
                [Op.ne]: ignore_id
            };
        }

        let emails = await User.findAll({ where });
        return (emails.length > 0);
    }
}