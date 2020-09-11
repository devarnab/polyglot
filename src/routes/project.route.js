import express from 'express';
import {
  getAllProjects,
  getProjectById,
  addProject,
  updateProjectById,
  deleteProject,
} from '../controllers/project.controller';

const projectRoute = express.Router();

projectRoute.get('/:id', getProjectById);
projectRoute.get('/', getAllProjects);
projectRoute.post('/', addProject);
projectRoute.put('/:id', updateProjectById);
projectRoute.delete('/:id', deleteProject);

export default projectRoute;
