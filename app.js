const express = require('express');
const professoresRouter = require('./routes/professoresRouter');

const app = express();
const port = 3002; // POrta onde o servidor vai rodar

app.use(express.json()); // Aquei eu digo que meu app vai usar JSON para ler

// Conecta as rotas de professores
app.use('/professores', professoresRouter);

// Rota inicial de teste
app.get('/', (req, res) => {
  res.json({ message: 'API de Professores funcionando!' });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


