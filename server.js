
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
    fs.readFile('tasks.json', 'utf8', (err, data) => {
        if (err) return res.json([]);
        res.json(JSON.parse(data || '[]'));
    });
});

app.post('/tasks', (req, res) => {
    fs.writeFile('tasks.json', JSON.stringify(req.body), (err) => {
        if (err) return res.status(500).send('Error saving tasks');
        res.send('Saved');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
