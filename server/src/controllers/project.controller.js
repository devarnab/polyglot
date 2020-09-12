import Projects from '../db/projects';
import { body, param, validationResult } from 'express-validator';

const ErrorMessages = Object.freeze({
  NOT_MONGO_ID: 'Not a valid ID',
  NOT_EMPTY: "Can't be empty",
  ALPHA_NUMERIC: 'Should be alpha numeric',
  ARRAY: 'Should be an array',
  lOWERCASE: 'Should be in lowercase',
});

export const getAllProjects = [
  (req, res) => {
    try {
      Projects.find((err, data) => {
        if (err) {
          res.status(500).send(JSON.stringify(err));
        } else {
          res.send(JSON.stringify(data));
        }
      });
    } catch (err) {
      res.status(500).send(JSON.stringify(err));
    }
  },
];

export const getProjectById = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage(ErrorMessages.NOT_EMPTY)
    .bail()
    .isMongoId()
    .withMessage(ErrorMessages.NOT_MONGO_ID),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    const id = req.params.id;
    try {
      Projects.findById(id, (err, data) => {
        if (err) {
          res.status(500).send(JSON.stringify(err));
        } else {
          res.send(JSON.stringify(data));
        }
      });
    } catch (err) {
      res.status(500).send(JSON.stringify(err));
    }
  },
];

export const addProject = [
  body('name').trim().notEmpty().withMessage(ErrorMessages.NOT_EMPTY).escape(),

  body('slug')
    .trim()
    .notEmpty()
    .withMessage(ErrorMessages.NOT_EMPTY)
    .bail()
    .isLowercase()
    .withMessage(ErrorMessages.lOWERCASE)
    .escape(),

  body('languages').isArray(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const project = new Projects({
        name: req.body.name,
        slug: req.body.slug,
        languages: req.body.languages,
      });
      project.save((err, projData) => {
        if (err) {
          res.status(500).send(JSON.stringify(err));
        } else {
          res.send(JSON.stringify(projData));
        }
      });
    } catch (err) {
      res.status(500).send(JSON.stringify(err));
    }
  },
];

export const updateProjectById = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage(ErrorMessages.NOT_EMPTY)
    .bail()
    .isMongoId()
    .withMessage(ErrorMessages.NOT_MONGO_ID),

  body('name').trim().notEmpty().withMessage(ErrorMessages.NOT_EMPTY).escape(),

  body('languages').isArray(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    try {
      const updatedProject = {
        name: req.body.name,
        languages: req.body.languages,
      };
      Projects.findByIdAndUpdate(
        id,
        updatedProject,
        { new: true },
        (err, data) => {
          if (err) {
            res.status(500).send(JSON.stringify(err));
          } else {
            res.send(JSON.stringify(data));
          }
        }
      );
    } catch (err) {
      res.status(500).send(JSON.stringify(err));
    }
  },
];

export const deleteProject = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage(ErrorMessages.NOT_EMPTY)
    .bail()
    .isMongoId()
    .withMessage(ErrorMessages.NOT_MONGO_ID),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    try {
      Projects.findByIdAndDelete(id, (err, data) => {
        if (err) {
          res.status(500).send(JSON.stringify(err));
        } else {
          res.send(JSON.stringify(data));
        }
      });
    } catch (err) {
      res.status(500).send(JSON.stringify(err));
    }
  },
];
