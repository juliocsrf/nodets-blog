import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

let userService = new UserService();

export const index = async (req: Request, res: Response) => {
    let users = await userService.getAll();
    res.render('admin/users/index', { users });
}

export const create = async (req: Request, res: Response) => {
    let error = (req.query.error === 'true');
    res.render('admin/users/create', { error });
}

export const store = async (req: Request, res: Response) => {
    let email: string = req.body.email;
    let password: string = req.body.password;
    let name: string = req.body.name;

    if (email && password && name) {
        let user = await userService.create(name, email, password);

        if (!user) {
            res.redirect('/admin/users/new?error=true');
            return;
        }
    }

    res.redirect('/admin/users');
}