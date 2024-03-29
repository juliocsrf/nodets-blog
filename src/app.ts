import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import session from 'express-session';
import dotenv from 'dotenv';

import connection from './instances/mysql';

import homeRoute from './routes/home.route';
import categoriesRoute from './routes/categories.route';
import articlesRoute from './routes/articles.route';
import usersRoute from './routes/users.route';
import authRoute from './routes/auth.route';

console.log('Server starting...');
dotenv.config();

const app = express();

// Sessions
app.use(session({
    secret: 'banana', cookie: { maxAge: 3000000 }, resave: true, saveUninitialized: true
}));

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection
    .authenticate()
    .then(() => {
        console.log('Successful database connection');
    })
    .catch((error) => {
        console.log('Database connection error: ', error);
    });

app.use(categoriesRoute);
app.use(articlesRoute);
app.use(usersRoute);
app.use(authRoute);
app.use(homeRoute);


app.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
});

app.listen(process.env.PORT, () => console.log(`Server runnin on port ${process.env.PORT}`));