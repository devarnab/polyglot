import express from 'express';
import user from './user.route';

const router = express.Router();

router.use('/user', user);

router.get('/', (req, res) => {
  res.send('OK, server is running!!');
});

export default router;
