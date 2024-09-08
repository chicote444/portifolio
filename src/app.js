import express from 'express';
import cors from 'cors';
import https from 'https';
//import { users } from './numeros.js';
//import { openDB } from './database/configDB.js';
//import { createTable,insert, exibirUsers } from './controler/pessoa.js';
import { exibirUser, exibirSemana, getUserFromSemana } from './models/useres.js';

const app = express();
app.use(express.json());
app.use(cors());


app.get('/ola', (req, res) => {
  res.send('Hello World');
});

app.get('/users/ref', async (req, res) => {
  const { id } = req.query;
  const user = await getUserFromSemana(id);
  return res.json(user);
});

app.get('/semana', async (req, res) => {
  let semana;
  semana = await exibirSemana();
  return res.json(semana);
});

app.get('/useres', async (req, res) => {
  let user;
  user = await exibirUser();
  return res.json(user);
});


app.get('/users', async (req, res) => {
    try {
      const { name } = req.query;

      let user;

      if (name) {
        user = await exibirUser('name', name);
      }
      else {
        user = await exibirUser();
      }

      return res.json(user);
    } catch (error) {
        console.log(error);
    }
});

app.get('/numeros', (req, res) => {
    res.send(users);
});

app.get('/numeros/:numero', (req, res) => {
    const numero = req.params.numero;
    res.send(numeros[numero - 1]);
});



app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on http://localhost:3000');
});