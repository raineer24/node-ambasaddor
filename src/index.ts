import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:4000', 'http://localhost:5000']
}));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

app.get('/',(req, res) => {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
 })

app.listen(8000, () => {
    console.log('listening to port 8000')
});