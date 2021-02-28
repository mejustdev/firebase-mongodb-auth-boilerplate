const next = require('next');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';
const morgan = require('morgan');

const port = process.env.PORT || 8000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();
require('dotenv').config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log(`DB Connected`))
  .catch((err) => console.log('DB connection error ', err));

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(morgan('dev'));

  fs.readdirSync('./routes').map((r) => server.use('/api', require(`./routes/${r}`)));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
