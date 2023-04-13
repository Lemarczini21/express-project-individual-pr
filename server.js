const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use('/user', (req, res, next) => {
  res.show('forbidden.html');
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => res.show('index.html'));

app.get('/home', (req, res) => res.show('index.html'));

app.get('/about', (req, res) => res.show('index.html'));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public/404.jpg'));
});
app.listen(8000, () => {
  console.log('Sever is running on port 8000');
});
