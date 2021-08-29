import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
    res.send('Index categories');
}

export const create = (req: Request, res: Response) => {
    res.send('Create categories');
}