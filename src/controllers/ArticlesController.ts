import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
    res.send('Index articles');
}

export const create = (req: Request, res: Response) => {
    res.send('Create articles');
}