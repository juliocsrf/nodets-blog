import { Request, Response, NextFunction } from 'express';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if(req.session && req.session.user === undefined) {
        next();
    } else {
        res.redirect('/admin/articles');
    }
}

export default isAuthenticated;