import Projects from '../db/projects';

export const projects = [
  async (req, res) => {
    try {
      const project = new Projects({
        name: 'Proj' + Math.random(),
        slug: 'proj1',
        languages: ['en', 'fr', 'bc'],
      });
      await project.save((err, projData) => {
        console.log(projData);
      });
      Projects.find((err, data) => {
        res.send(JSON.stringify(data));
      });
    } catch (err) {
      res.status(500).send(JSON.stringify(err));
    }
  },
];
