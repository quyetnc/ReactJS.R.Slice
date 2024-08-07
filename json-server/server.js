const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5000;
const JWT_SECRET = 'your_secret_key'; // Replace with a secure secret key

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to enable CORS
app.use(cors());

// Mock database (replace with your db.json setup)
const dbFilePath = path.join(__dirname, 'db.json');
let dbData = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));

// Endpoint to handle POST request for login and issue JWT token
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Find user matching username and password
    const user = dbData.users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Create JWT token
    const token = jwt.sign({ username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    // Return token and user details (excluding password)
    const { password: userPassword, ...userDetails } = user;
    res.json({ token, userDetails, "isSucceeded": true });
});

// Middleware to authenticate requests with JWT
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
};

// Example protected endpoint - Requires JWT authentication
app.get('/User/Get-CurrentUser', authenticateJWT, (req, res) => {
    // Handle authorized request
    const user = dbData.users.find(user => user.username === req.user.username);
    res.json({ "isSucceeded": true, user: req.user, profile: user });
});

app.get('/user', authenticateJWT, (req, res) => {
    // Fetch user details from dbData based on req.user.username (decoded from JWT)
    const user = dbData.users.find(user => user.username === req.user.username);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Return user details (excluding password)
    const { password: userPassword, ...userDetails } = user;
    res.json(userDetails);
});

app.get('/list-user', authenticateJWT, (req, res) => {
    const listUser = dbData.users.map(user => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    });
    res.json(listUser);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
