const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); // Define o mecanismo de modelo para arquivos HTML
app.set('view engine', 'html'); // Define a extensão para arquivos HTML

app.get('/', (req, res) => {
  res.render('index'); // Renderiza o arquivo index.html da pasta views
});

app.post('/dados', (req, res) => {
    console.log(req.body); // Verifique os dados recebidos
    const { nome, endereco, telefone, data } = req.body;
    res.render('dados', { nome, endereco, telefone, data });
  })
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
