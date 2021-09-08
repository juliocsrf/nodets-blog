import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
    res.render('admin/users/index');
}

export const create = async (req: Request, res: Response) => {
    res.render('admin/users/create');
}