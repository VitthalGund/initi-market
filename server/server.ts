import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';

const app = express();
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));

app.use('/');

app.listen(4242, () => console.log('app is running on 4242'));
