import 'dotenv/config';
import express from 'express';
import project from './project.route';
import user from './user.route';

const router = express.Router();

router.use('/users', user);
router.use('/projects', project);

router.get('/', (req, res) => {
  res.send('OK, server is running!!');
});

export default router;
