const jwt = require('jsonwebtoken');
require('dotenv').config();


const JWT_SECRET = process.env.JWT_SECRET;


module.exports = function (req, res, next) {
const auth = req.headers.authorization;
if (!auth) return res.status(401).json({ error: 'Authorization header missing' });


const [type, token] = auth.split(' ');
if (type !== 'Bearer' || !token) return res.status(401).json({ error: 'Malformed token' });


jwt.verify(token, JWT_SECRET, (err, decoded) => {
if (err) return res.status(401).json({ error: 'Invalid or expired token' });


req.user = decoded;
req.token = token;
next();
});
};