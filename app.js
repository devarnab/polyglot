import 'dotenv/config';
import express from 'express';
import routes from './src/routes';
import 'regenerator-runtime/runtime.js';

let app;

const applyMiddleWares = () => {
  app.use('/', routes);
};

const startServer = () => {
  applyMiddleWares();

  const port = process.env.PORT || 3000;
  app.listen(port, function () {
    console.log(`Server listening on port ${port}!`);
  });
};

(async () => {
  if (process.env.NODE_ENV === 'development') {
    const { default: devApp } = await import('./dev-middleware');
    app = devApp;
    startServer();
  } else {
    app = express();
    startServer();
  }
})();
