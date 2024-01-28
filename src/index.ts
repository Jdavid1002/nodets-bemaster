import express, { Request, Response } from 'express';
import { ISummaryRepositories, getGithubRepositories } from './services/githubService';

const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3525;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', async (req: Request, res: Response) => {
  try {
    const response: ISummaryRepositories[] = await getGithubRepositories({
      user: 'google',
      per_page: 10
    });

    res.status(200).json({ "Lista de Repositorios:": response })

  } catch (error) {
    console.error(`Error al obtener los repositorios: ${error}`);
    res.status(500).json({ mensaje: 'Ocurrió un error al obtener los repositorios.' });
  }
});

app.listen(port, function () {
  console.log(`Server running in http://localhost:${port}`);
});