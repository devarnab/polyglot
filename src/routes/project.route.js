import express from 'express';
import { projects } from '../controllers/project.controller';

const projectRoute = express.Router();

projectRoute.get('/', projects);

export default projectRoute;
