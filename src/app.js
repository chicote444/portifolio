import express from 'express';
import cors from 'cors';
import { numeros } from './numeros.js';
import { openDB } from './configDB.js';

const app = express();
app.use(express.json());
app.use(cors());

openDB();

app.get('/ola', (req, res) => {
  res.send('Hello World');
});

app.get('/numeros', (req, res) => {
    res.send(numeros);
});

app.get('/numeros/:numero', (req, res) => {
    const numero = req.params.numero;
    res.send(numeros[numero - 1]);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});