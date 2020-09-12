import 'dotenv/config';
import express from 'express';
import 'regenerator-runtime/runtime.js';
import connectDb from './src/db/database';
import routes from './src/routes';

let app;

const applyMiddleWares = () => {
  app.use(express.json());
  
  app.use(
    '/api/',
    (req, res, next) => {
      res.type('application/json');
      next();
    },
    routes
  );
};

const startServer = () => {
  applyMiddleWares();

  const port = process.env.PORT || 3001;
  app.listen(port, function () {
    console.log(`Server listening on port ${port}!`);
  });
};

(async () => {
  if (process.env.NODE_ENV === 'development') {
    const { default: devApp } = await import('./dev-middleware');
    app = devApp;
    connectDb()
      .then(() => {
        startServer();
      })
      .catch((err) => console.log(err));
  } else {
    app = express();
    connectDb()
      .then(() => {
        startServer();
      })
      .catch((err) => console.log(err));
  }
})();
