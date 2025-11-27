const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const authMiddleware = require('./authMiddleware');


const app = express();
app.use(cors());
app.use(bodyParser.json());


const USERS = [
{ id: 1, username: 'alice', password: 'password123' }
];


app.post('/login', (req, res) => {
const { username, password } = req.body;


const user = USERS.find(u => u.username === username && u.password === password);
if (!user) return res.status(401).json({ error: 'Invalid credentials' });


const token = jwt.sign(
{ sub: user.id, username: user.username },
process.env.JWT_SECRET,
{ expiresIn: process.env.JWT_EXPIRES_IN }
);


res.json({ token });
});


app.get('/private', authMiddleware, (req, res) => {
res.set('Authorization', 'Bearer ' + req.token);
res.json({ message: 'Access granted', user: req.user });
});


app.listen(process.env.PORT, () => console.log('Server running on port 4000'));