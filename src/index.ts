// src/index.ts

import express from 'express';
import consultationRoutes from './routes/consultationRoutes';
import { errorHandler } from './controllers/errorHandler';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API de agendamento de consultas' });
});

app.use('/api', consultationRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
