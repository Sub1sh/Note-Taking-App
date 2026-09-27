const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let notes = [];

app.get('/api/notes', (req, res) => res.json(notes));

app.post('/api/notes', (req, res) => {
  const note = { id: Date.now(), text: req.body.text };
  notes.push(note);
  res.json(note);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
