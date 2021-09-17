import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
    res.render('admin/users/index');
}

export const create = async (req: Request, res: Response) => {
    res.render('admin/users/create');
}

export const store = async (req: Request, res: Response) => {
    let email: string = req.body.email;
    let password: string = req.body.password;

    res.json({ email, password });
}