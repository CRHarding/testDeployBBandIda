const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
// const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const contributorRouter = require('./routes/contributors');
const contactRouter = require('./routes/contact');

const app = express();

// app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/contributors', contributorRouter);
app.use('/api/send', contactRouter);

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
//   next();
// });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
