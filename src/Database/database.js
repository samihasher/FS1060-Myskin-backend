import mysql from 'mysql2/promise';

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'myskindb',
  port: 3308
});

export default db;
