import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

let userService = new UserService();

export const index = (req: Request, res: Response) => {
    let error = (req.query.error === 'true');
    res.render('admin/users/login', { error });
}

export const login = async (req: Request, res: Response) => {
    let email = req.body.email;
    let password = req.body.password;

    let user = await userService.login(email, password);

    if (user && req.session) {
        req.session.user = {
            id: user.id,
            email: user.email
        }

        res.redirect('/admin/categories');
        return;
    }

    res.redirect('/admin/users/login?error=true');
}

export const logout = async (req: Request, res: Response) => {
    if(req.session) {
        req.session.user = undefined;
    }

    res.redirect('/');
}