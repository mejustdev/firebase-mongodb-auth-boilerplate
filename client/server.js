// Custom server -1
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import { readdirSync } from 'fs';
// const morgan = require('morgan');

// require('dotenv').config();

// // app
// const app = express();

// // db
// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   })
//   .then(() => console.log(`DB Connected`))
//   .catch((err) => console.log('DB connection error ', err));

// // middlewares
// app.use(cors());
// app.use(morgan('dev'));

// // routes middleware
// readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

// // routes

// const port = process.env.PORT || 8000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));

// -------------------------------------------------------------------

// Custom Server -2
const next = require('next');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';
const morgan = require('morgan');

const port = process.env.PORT || 8000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
// const app = next({ dev, dir: '../build' });
const handle = app.getRequestHandler();
require('dotenv').config();

mongoose
  .connect(
    'mongodb+srv://mergorgec:7wfDlCOI7EZQgANN@firemon.2cdvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  )
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
