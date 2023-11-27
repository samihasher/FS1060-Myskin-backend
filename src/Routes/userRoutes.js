import express from 'express';
import verifyToken from './middleware/verifyToken';

const app = express();
const port = 3000;

import { getUsers, addUser } from '../users.js';

app.use(express.json());

app.post('/users', verifyToken, (req, res) => {
  const newUser = req.body; 

  addUser(newUser);

  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
