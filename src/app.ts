import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import connection from './instances/mysql';

console.log('Server starting...');
dotenv.config();

const app = express();

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

app.get('/', (req: Request, res: Response) => {
    res.render('index');
});

app.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
});

app.listen(process.env.PORT, () => console.log(`Server runnin on port ${process.env.PORT}`));