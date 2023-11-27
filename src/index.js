import express from 'express';
import routinesRoutes from './Routes/routinesRoutes.js';
import userRoutes from './Routes/userRoutes.js';



const app = express();
const port = process.env.PORT || 3000;
const db = require('./Database/database.js');
require('dotenv').config();

async function getUsers() {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    console.log('Users:', rows);
  } catch (err) {
    console.error('Error fetching users:', err);
  }
}

app.use('/routines', routinesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  

  getUsers();

  const newUser = {
    userId: 3,
    username: "sara_aldo",
    email: "sara@example.com",
    role: "user",
  };
  

});
