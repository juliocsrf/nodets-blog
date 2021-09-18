import { Request, Response, NextFunction } from 'express';

const auth = (req: Request, res: Response, next: NextFunction) => {
    if(req.session && req.session.user !== undefined) {
        next();
    } else {
        res.redirect('/admin/users/login');
    }
}

export default auth;