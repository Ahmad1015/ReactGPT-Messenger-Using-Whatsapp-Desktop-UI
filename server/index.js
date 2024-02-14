import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { spawn } from 'child_process';

import Connection from './database/db.js';
import Routes from './routes/Routes.js';


dotenv.config();
const app = express();

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

// Add a new route for calling the Python function
app.post('/call-python-function', (req, res) => {
    const { text } = req.body;
    const pythonProcess = spawn('python', ['chatgpt.py', 'call_Chatgpt', text]);
  
    pythonProcess.stdout.on('data', (data) => {
      const result = data.toString().trim();
      res.json({ result });
    });
  
    pythonProcess.stderr.on('data', (data) => {
      console.error(`Error: ${data}`);
      res.status(500).json({ error: 'Internal server error' });
    });
});
