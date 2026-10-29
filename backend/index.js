import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 8080;
const app = express();


app.use(express.static(path.join(__dirname,'../frontend')));

// This tells Express to read data sent from HTML forms
app.use(express.urlencoded({ extended: true }));


// Handle the form submission
app.post('/submit-contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        console.log(`${name} ${email} ${message}`);
        res.send('Thank you! Your message has been saved.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error. Could not save message.');
    }
});


app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`)});