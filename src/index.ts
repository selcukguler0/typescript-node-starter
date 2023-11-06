import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//set public folder
app.use(express.static(path.join(__dirname, '../public')));
//set view engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});