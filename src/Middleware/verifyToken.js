const jsonwebtoken = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send('Error Unauthorized User');
  }
  try {
    const decoded = jsonwebtoken.verify(token, SECRET_KEY);

    req.currentuser = decoded;
    next();
  } catch (ex) {
    return res.status(401).send('Error Unauthorized User');
  }
};

module.exports = verifyToken;
