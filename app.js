const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const contributorRouter = require('./routes/contributors');
const contactRouter = require('./routes/contact');

const app = express();

app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('client/build'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/contributors', contributorRouter);
app.use('/api/send', contactRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
