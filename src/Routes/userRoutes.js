import express from 'express';
const app = express();
const port = 3000;

import { getUsers, addUser } from '../users.js';

app.use(express.json());

app.post('/users', (req, res) => {
  const newUser = req.body; 

  addUser(newUser);

  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
