import express from 'express';
const userRoute = express.Router();

userRoute.get('/test', (req, res) => {
  res.send('From user route test!');
});

userRoute.get('/', (req, res) => {
  res.send('From user route!');
});

export default userRoute;
