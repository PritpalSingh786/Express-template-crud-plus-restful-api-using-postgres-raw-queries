const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', userRoutes);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));

// npm install
// npm run migrate
// npm start
